import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * War Photographer, Carol Ann Duffy (1985). A supplement: the page at
 * /igcse/edexcel/poetry/war-photographer keeps its form-and-structure section,
 * and this file adds the ten sections it lacked, held only as chips, or held
 * inaccurately.
 *
 * THE SELF-AUDIT (re-run 26 September 2026), section by section against the
 * rubric. structureForm SUBSTANTIVE: six developed entries on form, rhyme,
 * religious imagery, contrast, voice and the closing turn, so it stays native,
 * with two errors listed below. overview NOT SUBSTANTIVE, although it has four
 * stanza summaries: they invent details the poem does not contain (a kitchen,
 * a working face, a lit-up tray, the day's film) and they say the wife
 * approved, which the poem does not, so a student who learns them loses marks.
 * It is rewritten here. Themes are five chips with no development; there are no
 * key quotations, no extracts, no characters or speaker, no vocabulary, no exam
 * practice and no model answer; language is one paragraph inside the form
 * section; context is an author biography with one clause on the wars. All of
 * those are written here.
 *
 * WORDING. Every quotation was checked on 26 September 2026 against the poem as
 * printed on page 63 of the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), in Pearson's PDF, and against the 4ET1/01
 * question papers of 17 May and 6 November 2023, which print the same words.
 * The Scottish Poetry Library's text agrees on every word except that it prints
 * dark room as two words in line 1, where the anthology and the papers have
 * darkroom. Follow the anthology. Line 21 is THE READER'S, singular: an earlier
 * draft of this file wrote readers' throughout, and students repeat that.
 * Line numbers are the anthology's, which prints one beside every fifth line.
 *
 * THE QUOTATION BUDGET. The poem is 190 words by the validator's count, so the
 * site's 15 per cent (fair-dealing.ts) allows 28 distinct words on this page,
 * and the eleven key quotations use all 28. Every phrase quoted anywhere else
 * in this file is one of them or part of one; everything else is located by
 * line number and paraphrased. Adding a quotation means removing one. The page
 * above quotes about 13 distinct words of the poem that this file does not, in
 * its stanza summaries and form section, so the mounted page as a whole is over
 * the share until those are cut.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, and this file does not repeat. Stanza 3: the
 * photographer SOUGHT approval, without words; the poem never says it was
 * given, and approving is not its word. Stanza 2 has no kitchen and no working
 * face. The ordered rows of line 2 are spools of film, not chemicals, and there
 * are no communion vessels. The aeroplane ending is presented there as looking
 * down at England; the poem leaves where he is looking open. Standing Female
 * Nude was not her second book: the Scottish Poetry Library lists three earlier
 * publications. The inspiration is given there as Duffy's own statement about
 * McCullin alone; the WJEC Eduqas notes name McCullin and Philip Jones
 * Griffiths. And two of its three comparison poems, Disabled and The Bright
 * Lights of Sarajevo, are in Part 2 of the anthology, which 4ET1 does not set.
 */
export const guide: StudyGuide = {
  slug: 'war-photographer',
  title: 'War Photographer',
  author: 'Carol Ann Duffy',
  form: 'poem',
  scope:
    'The whole poem, 24 lines in four six-line stanzas, as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, page 63, for English Literature (4ET1) Paper 1 Section B, where the poems are printed with the question paper. Line numbers in this guide follow the anthology, which numbers every fifth line. The same poem is set in AQA’s Power and Conflict cluster, which has its own guide on this site.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Carol Ann Duffy 1985. From Standing Female Nude (Anvil Press Poetry, 1985), as printed in the Pearson Edexcel International GCSE English Anthology, by permission of the author c/o Rogers, Coleridge & White Ltd. Quoted in short phrases for criticism and review.',
  },
  workLength: {
    words: 190,
    lines: 24,
    basis:
      'Counted on 26 September 2026 from page 63 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s PDF: 24 lines in four sestets, with the title, the author line, the two footnote markers and the two footnotes excluded. 190 words by the validator’s wordCount, which counts the parts of the two hyphenated compounds separately, as it does in the quotations it measures; counting only spaces gives 188. The line count matches the anthology’s margin numbering of 5, 10, 15 and 20.',
  },

  native: {
    structureForm: '/igcse/edexcel/poetry/war-photographer',
  },

  overview: {
    summary: [
      'War Photographer is 24 lines long, in four six-line stanzas, and it is told in the third person about a photographer the poem never names. It follows one session in his darkroom, back home in rural England, as he develops the pictures he has brought back from war. Each stanza stands at a different distance from the suffering: the room itself and the wars behind it, then home set against the war zones, then one death in close-up, and finally the editor, the newspaper reader and the photographer himself, seen on an aeroplane.',
      'Stanza 1, lines 1 to 6. He is alone at last in his darkroom, with the rolls of film he has brought back set out in rows. The room is lit by nothing but a soft red glow, and Duffy compares it to a church and the photographer to a priest getting ready to say Mass. Line 6 is four short sentences: three cities, Belfast, Beirut and Phnom Penh, each closed by a full stop, and then a sentence from the Bible about how brief every human life is. The rows in line 2 are rows of film spools; nothing in this stanza is a tray or a bottle of chemicals.',
      'Stanza 2, lines 7 to 12. The stanza opens with a flat reminder that he has work to do, and he begins developing, the chemical solutions sloshing in their trays under his hands. Those hands were steady in the war zones, the poem says, but they seem to shake now. He is home, in rural England, where pain is the ordinary kind that a change in the weather can clear, and where the ground does not blow up beneath children as they run, as, the poem implies, it did in the places he has come from. The stanza is about his hands and the gap between home and war; it describes no kitchen and says nothing about his face.',
      'Stanza 3, lines 13 to 18. Something begins to happen in the tray: a stranger’s face takes shape as the print develops, its features seeming to twist in front of him. The half-developed image brings back what happened when he took it: the man’s wife crying, his own wordless request for approval to do what had to be done, and the man’s blood soaking into the ground of another country. The poem implies that the man died without saying so, and it never says that anyone gave the approval he asked for, only that he sought it.',
      'Stanza 4, lines 19 to 24. He has a hundred pictures of agony, and his editor will choose five or six of them for the Sunday supplement. A reader will be moved to tears for a moment, somewhere between a bath and a drink before lunch. In the last two lines the photographer is on an aeroplane, staring without expression at the place where he makes his living, and the poem ends on a blunt statement that others, most naturally read as the people at home, are indifferent. It does not say where he is flying, or whether he is looking down at England or towards the next war.',
    ],
  },

  context: [
    {
      heading: 'Carol Ann Duffy',
      body: 'Duffy was born in the Gorbals district of Glasgow on 23 December 1955. When she was six the family moved to Stafford, where she went to Roman Catholic primary and middle schools and then to Stafford Girls’ High School, and in 1977 she graduated in philosophy from the University of Liverpool. In 2009 she was appointed Poet Laureate, the first woman and the first Scot in the role, and she stood down in 2019, when Simon Armitage succeeded her. Two details matter for this poem. A Catholic schooling suggests that the language of church, priest and Mass in lines 4 and 5 draws on something she knew from the inside, not borrowed decoration. And she has always written for readers beyond the world of poetry: the Scottish Poetry Library notes that she has published poems in tabloid and broadsheet newspapers and on the radio. War Photographer, written more than twenty years before her laureateship, already asks what happens to serious work once it reaches a newspaper reader.',
    },
    {
      heading: 'Standing Female Nude, 1985',
      body: 'The poem was published in Standing Female Nude, from Anvil Press Poetry, in 1985. It was not her first book: the Scottish Poetry Library lists three earlier publications, Fleshweathercock and Other Poems (Outposts, 1974), Beauty and the Beast, a pamphlet shared with Adrian Henri (1977), and Fifth Last Song (Headland, 1982), and she had won the National Poetry Competition in 1983. The poem was later included in New Selected Poems 1984-2004 (Picador, 2004). The anthology prints it on page 63 as one of the sixteen Part 3 poems, with two footnotes: one explains a Mass as a religious service, and the other explains a Sunday supplement as a regular additional section of a Sunday newspaper. One small point for anyone learning lines: the anthology prints darkroom as a single word in line 1, and some other printings, including the Scottish Poetry Library’s, split it into two. Follow the anthology, which is also what the exam paper prints.',
    },
    {
      heading: 'The photographers behind the poem',
      body: 'Teaching notes from the exam board WJEC Eduqas say Duffy was inspired to write the poem by her friendships with two British war photographers, Don McCullin and Philip Jones Griffiths, and that she was interested in how war photographers had to record horrifying events without being able to help the people involved. McCullin, born in 1935, became from the 1960s probably the United Kingdom’s foremost war photographer, in Tate’s description, working mainly for the Sunday Times Magazine, and Tate Britain’s retrospective of his career showed more than 250 photographs, every one printed by McCullin himself in his own darkroom. Griffiths, born in Rhuddlan in Wales in 1936, published Vietnam Inc. in 1971 and worked in Cambodia between 1973 and 1975. The poem names neither man, and its photographer is better read as a figure built from what such lives involve than as a portrait of either. But its details are real ones: the solitary printing, the Sunday magazine, a life spent moving between wars and home.',
    },
    {
      heading: 'Three cities at war',
      body: 'Line 6 names three places, each known for a conflict of the years before the poem appeared in 1985. Belfast stands for the Troubles in Northern Ireland, which lasted from the late 1960s until the Good Friday Agreement of 1998 and killed more than 3,500 people. Beirut, the capital of Lebanon, was at the centre of a civil war that began in 1975 and lasted until 1990, and the city was besieged during Israel’s invasion of 1982. Phnom Penh, the capital of Cambodia, fell to the Khmer Rouge on 17 April 1975; its people were driven out into the countryside, and under the regime that followed, until Vietnamese forces took the city in January 1979, a very large part of the population died through executions, forced labour and starvation. One effect of setting a city in the United Kingdom beside two distant ones is to deny that war only happens elsewhere, which makes the peaceful rural England of stanza 2 look less secure than it seems.',
    },
    {
      heading: 'The darkroom and the Sunday paper',
      body: 'Photographs like these were taken on rolls of black-and-white film and printed by hand. A darkroom is lit only by a red or amber safelight, because most black-and-white printing papers are sensitive only to blue, or to blue and green, light; that is why line 3 gives the room a single red light. The exposed paper, still blank, goes through trays of chemicals, first a developer, then a stop bath, then a fixer, and the picture appears on it gradually in the developer. Stanza 3 is built on exactly that moment. The finished prints went to the papers: in Tate’s account of McCullin’s career, his main outlet was the Sunday Times Magazine. So the last stanza, where the pictures reach a reader at home on a Sunday before lunch, describes the real destination of work like this, not an invented one.',
    },
    {
      heading: 'The Bible and the Mass',
      body: 'Line 6 ends with an allusion to the Book of Isaiah. In the King James Bible, Isaiah 40:6 compares all human life to grass and its beauty to the flower of the field; the next verse says that the grass withers and the flower fades, and adds that the people themselves are grass. The New Testament repeats the thought in 1 Peter 1:24. Mass, which the anthology glosses as a religious service, is the word most closely associated with the Catholic tradition in which Duffy was schooled. Put together, the religious language of stanza 1 is not vague reverence. It is the language of ritual and of mortality: a priest getting ready for a service, and a reminder that every life is brief.',
    },
    {
      heading: 'Line 12 and a photograph from Vietnam',
      body: 'Stanza 2 names no war, but one connection is worth knowing. The WJEC Eduqas notes ask students what the “nightmare heat” of line 12 might mean, and among their links for further research is an interview with Nick Ut, the Associated Press photographer long credited with one of the most famous images of the Vietnam War: children running from a napalm strike near the village of Trang Bang on 8 June 1972, among them nine-year-old Phan Thi Kim Phuc. In 2025 a documentary questioned that credit, and the Associated Press and World Press Photo reached different conclusions about it. The notes do not tie the photograph to the line, and the poem names no war here, so treat the link as a reading. It shows how line 12 works: a few words are enough to call up a picture the reader may already carry in their head.',
    },
  ],

  themes: [
    {
      title: 'Bearing witness and its cost',
      body: 'The photographer’s job is to see what others will not, and the poem is about what that seeing does to him. In the war zones his hands were steady; at home, in the one place where he is safe, they seem to, as though his body can only react once it is allowed to (lines 8 and 9). The print in the tray does not stay a print: it becomes a “half-formed ghost”, and with it come back the wife’s cries and the man’s blood in the ground of another country. One reading is that the darkroom is where he finally lets himself feel what he had to shut out to do the job; another is that the memories are trauma, arriving without his permission. The first fits the poem’s stress on ritual and control, and the second fits stanza 3, where the image simply starts to happen to him. The strongest answers hold both: he chooses the ritual, and the ritual cannot keep the dead out. Witness is a duty here, and the poem counts its price in private.',
    },
    {
      title: 'Suffering and indifference',
      body: 'Duffy measures the distance between those who suffer and those who look. In stanza 2 the pain of rural England is the ordinary kind that a change in the weather can clear, set against fields elsewhere that explode beneath running children. In stanza 4 a hundred pictures of agony are cut to five or six, and the response is physical and brief: one reader’s “eyeballs prick”, and the tears are fitted into a lazy Sunday, after a bath and before “pre-lunch beers”. The last words, “they do not care”, are the bluntest in the poem. Is the judgement fair? One reading is that Duffy simply condemns the newspaper readers. Another, which the poem’s own situation supports, is that she includes us: anyone reading this poem is also looking at suffering in comfort before moving on. That second reading makes the ending uncomfortable rather than smug, and it is the stronger one to argue.',
    },
    {
      title: 'The ethics of the image',
      body: 'Is it right to photograph a dying man? The poem does not answer, but it shows the photographer asking. In stanza 3 he remembers that he “sought approval”, silently, for doing what had to be done (lines 16 and 17). The poem does not say whose approval, though the wife, whose cries are remembered in the same sentence, is the natural reading, and it never says the approval was given. The moment holds two truths together: the picture had to be taken, or the world would never see this death; and taking it meant intruding on a woman’s grief. Stanza 4 then raises a second question, about who decides which suffering is seen at all: the photographer brings back a hundred pictures and his editor will choose five or six. One reading makes the editor the villain. The stronger reading is that the whole chain, photographer, editor and reader, turns a death into something to be printed and consumed, and only the photographer seems to feel it for longer than a moment.',
    },
    {
      title: 'Ritual, faith and mortality',
      body: 'Duffy frames the darkroom as a church from the first stanza. The room is lit only by a soft red light, it is compared to a church and the photographer to a priest getting ready for a service (lines 3 to 5), and his film is laid out in rows, like pews or, in a darker reading, like graves. Then the stanza closes on a sentence from the Bible: “All flesh is grass”, Isaiah’s reminder that every human life withers. Placed straight after three cities at war, the allusion can work two ways. It could be consolation, setting these deaths in a religious frame that gives them meaning; or it could be bleak, saying that the dead of Belfast, Beirut and Phnom Penh are cut down as easily as grass. The poem’s later bitterness about the people at home makes the bleak reading more convincing: this priest conducts a service for the dead that almost nobody will attend.',
    },
  ],

  characters: [
    {
      name: 'The photographer',
      role: 'The central figure, never named and never heard speaking; the poem calls him only he',
      body: 'We see the photographer only from outside, in a third-person voice, yet the poem stays so close to him that some sentences read like his own thoughts: the flat reminder at the start of stanza 2 that he has work to do sounds like something he tells himself. He is careful and practised, working alone with his film under the red light, and he is also damaged. His hands, steady in the war zones, now seem to tremble; a face in the developing tray brings back a death he watched; and in the last lines he is on an aeroplane, his face showing nothing. The key question about him is what that blank face means. Pearson’s examiners, reporting on the November 2023 exam, noted an occasional misunderstanding among candidates that he did not care, and the poem shows the opposite. The more convincing reading is that his composure is a professional mask, the price of being able to go back.',
    },
    {
      name: 'The stranger',
      role: 'The man whose face appears in the developing print in stanza 3',
      body: 'The poem calls him a stranger, which is exactly what he was to the photographer: someone he knew only as the subject of a picture. His face takes shape in the tray, its features seeming to twist, and he becomes a “half-formed ghost”. The poem implies rather than states that he died: it speaks of a ghost, of his wife’s cries and of blood soaking into the ground of another country. He has no name and no words, which lets him stand for the people behind the hundred pictures of stanza 4, but for six lines the poem insists on him as one particular person. That is the photographer’s burden, and the poem’s point: the reader will see a picture, but he remembers a man.',
    },
    {
      name: 'The wife',
      role: 'The stranger’s wife, remembered crying at the scene',
      body: 'She exists in the poem only as a sound, the cries the photographer remembers, and as the person from whom, in the natural reading, he silently sought approval before taking his picture. She is given no words, just as his request was made without words. The poem does not say whether she approved, and students should not write that she did. Her presence turns the photograph from an image of war into an image of one family’s loss, and it is through her that the poem asks its hardest question: whether the photographer had the right to record her grief, and whether the world had the right not to see it.',
    },
    {
      name: 'The children',
      role: 'Children remembered in stanza 2, running in a war zone',
      body: 'The children appear in a single contrast. The fields of rural England do not explode beneath running children, which implies that the fields in the places the photographer has come from did. They are the most vulnerable figures in the poem and the most briefly glimpsed, a memory rather than a scene. Their “nightmare heat” may be the climate, fire or terror itself. One connection the WJEC Eduqas notes make possible, through their link to an interview with Nick Ut, is with a famous photograph of children fleeing a napalm strike in Vietnam in 1972, but that is a reading, not something the poem names. Because the children are unnamed and not tied to one war, they stand for all the children caught up in the conflicts of line 6.',
    },
    {
      name: 'The editor',
      role: 'The newspaper editor who will choose which pictures are printed',
      body: 'The editor never appears in person and is never described. The poem mentions this figure once, in stanza 4, as the person who will choose five or six pictures from a hundred for the Sunday supplement, and the future tense shows that the photographer knows the routine before it happens. The editor is not presented as cruel, only as someone doing a job, as the photographer is. But the editor’s choice is the point at which suffering becomes content, cut to fit a Sunday magazine. One reading puts the blame there; a more balanced one sees the editor as a link in a chain that the photographer is part of too.',
    },
    {
      name: 'The reader',
      role: 'The newspaper reader at home; the poem speaks of one reader, then of they',
      body: 'The anthology puts the reader in the singular in line 21, one reader standing for all of them, and presents that reader with sharp irony. The response to the photographs is physical and brief: this single reader’s “eyeballs prick”, and the tears that follow are squeezed into a comfortable Sunday routine, after a bath and before “pre-lunch beers”. Then the last line changes number: it is they, in the plural, whose indifference ends the poem. The shift widens the charge from one person to everyone at home, and perhaps to the editor as well. The reader is not a monster: the tears are real, which is what makes the irony bite, because feeling something for a moment is not the same as caring. The poem’s own readers are in the same position, looking at suffering from a safe distance, and one reading is that Duffy wants us to recognise ourselves here. When you write about this moment, keep the reader singular, as the poem does.',
    },
  ],

  keyQuotes: [
    {
      text: 'spools of suffering',
      where: 'Stanza 1, line 2',
      analysis:
        'The rolls of film are named by what they hold. The sibilance is soft and hushed, fitting the quiet of the darkroom, but the metaphor turns objects into pain: each spool contains real people’s suffering, wound up and waiting to be seen. The spools are set out in rows, which suggests order imposed on chaos, and one reading sees in those rows the lines of graves in a war cemetery. The phrase sets up the tension of the whole poem, between the calm of the process and the horror of what is being processed.',
    },
    {
      text: 'All flesh is grass',
      where: 'Stanza 1, line 6',
      analysis:
        'An allusion to Isaiah 40:6 in the King James Bible, where human life is compared to grass that withers. Coming straight after three cities named in sentences of one or two words, it sounds like a verdict. It follows the Mass of line 5, as though the photographer were reading a text for the dead over his film, and it makes the deaths universal: in Belfast or Phnom Penh, every life is as fragile. Whether that is consolation or bleakness is the question to argue, and the bitter ending of the poem favours bleakness.',
    },
    {
      text: 'Solutions',
      where: 'Stanza 2, line 7',
      analysis:
        'The chemicals he develops his prints in are solutions, and the word carries an obvious second meaning. The photographer has chemical solutions in abundance, sloshing in their trays, but no solution to the wars he records. The pun is quiet, placed at the start of a sentence straight after a flat statement of duty, and it points to the limits of his work: a photograph can show a problem but not solve it. The careless verb that follows it undercuts the priestly calm of stanza 1.',
    },
    {
      text: 'Rural England',
      where: 'Stanza 2, line 9',
      analysis:
        'Two words, a sentence of their own, placed mid-line between full stops. The minor sentence works like a caption or a jolt: we are suddenly back home. Rural suggests fields, peace and tradition, and the lines that follow define England’s pain as the ordinary kind, the sort a change in the weather can clear. Set against fields that explode elsewhere, the phrase can be read as ironic: England’s safety is real, but it may also be what leaves its people unable to imagine what the photographer has seen.',
    },
    {
      text: 'nightmare heat',
      where: 'Stanza 2, line 12',
      analysis:
        'The stanza ends on a compressed, sensory image. “Heat” could be the climate of a distant country, the heat of fire and explosions, or the fear of the moment itself, and “nightmare” makes the scene both a memory and a recurring dream, suggesting it returns to him at night. The poem names no war here. The WJEC Eduqas notes ask what the phrase might mean and, among their research links, point students to an interview with Nick Ut, whose best-known photograph shows children fleeing napalm in Vietnam in 1972. The rhyme that closes the couplet shuts the memory down firmly, as if order were being forced on it.',
    },
    {
      text: 'half-formed ghost',
      where: 'Stanza 3, line 15',
      analysis:
        'As the print develops, the stranger’s face appears only partly, a literal description of an image still forming in the tray. But “ghost” tells us the man is dead, and “half-formed” suggests a life cut off before it was complete. The metaphor makes the photograph haunt the photographer: he is not looking at an image so much as being visited by the dead. It is the moment the poem’s control breaks, prepared for by the short, uneasy sentence that opens the stanza.',
    },
    {
      text: 'sought approval',
      where: 'Stanza 3, line 16',
      analysis:
        'He remembers asking, silently, for permission to do what had to be done. The verb “sought” shows he felt he needed permission, so he is not a callous man. But the poem does not say whose approval he wanted, though the wife named in the same sentence is the natural reading, and it never says the approval was given; the enjambment across lines 16 and 17 leaves the request hanging. The phrase holds a version of the dilemma the WJEC Eduqas notes say interested Duffy, recording suffering without being able to help: the picture must be taken so that the world will see, yet taking it intrudes on grief.',
    },
    {
      text: 'eyeballs prick',
      where: 'Stanza 4, line 21',
      analysis:
        'The poem gives these eyeballs to one reader, in the singular, standing for all of them. Duffy chooses a clinical, physical word for the reaction. “Eyeballs” are anatomy, not feeling, so the tears sound like a reflex. “Prick” suggests a small, sharp, brief sensation, nothing like the agony in the pictures, and the line break straight after it makes us wait for the tears, which arrive in the next line only to be squeezed between a Sunday bath and a drink. The effect is sardonic: the sympathy is real but shallow and short-lived.',
    },
    {
      text: 'pre-lunch beers',
      where: 'Stanza 4, line 22',
      analysis:
        'The reader’s tears are placed after a bath and before a drink at lunchtime, a sudden drop from suffering to leisure that works as bathos. The plosive b sounds of the line, running from the bath to the “beers”, make it brisk and dismissive, and the hyphenated compound fixes the moment in a comfortable weekend routine. The line moves the tears on as quickly as the reader does, and the contrast with the stranger’s blood in stanza 3 is deliberate and damning.',
    },
    {
      text: 'stares impassively',
      where: 'Stanza 4, line 23',
      analysis:
        '“Impassively” means without showing emotion, and it is easy to misread as not caring. The poem has just shown that he does care: his hands seem to tremble and the dead come back to him in the tray. So one reading is that his blank face is a professional mask, the composure he needs to go back to work; another is that years of exposure have numbed him. The first is better supported by the poem. Where he stares is also open: down at England, where his pictures are sold, or towards the wars where he takes them.',
    },
    {
      text: 'they do not care',
      where: 'Stanza 4, line 24',
      analysis:
        'Line 21 spoke of one reader; the last line switches to a plural pronoun, and the change widens the accusation from one person to everyone at home, the public and perhaps the editor too. It cannot mean the photographer, who is always he. The monosyllables are flat and final, and the full rhyme that closes the last couplet lands with a thud of certainty. After a poem of silent trauma, the statement reads as a verdict. It also implicates the poem’s own readers, who are looking at suffering from a comfortable distance too, and that turn is what gives the ending its sting.',
    },
  ],

  extracts: [
    {
      title: 'The darkroom and home',
      where: 'Stanzas 1 and 2, lines 1-12',
      pointer:
        'From line 1 to the end of stanza 2 at line 12: the first two sestets. Anthology page 63.',
      summary:
        'The photographer is alone at last with his rolls of film, set out in rows in a room lit only by a red light, and Duffy compares the room to a church and him to a priest about to say Mass. Line 6 names three cities at war and ends with a sentence from the Bible. In stanza 2 he starts work on the prints, the chemicals sloshing in their trays, and his hands, steady in the war zones, seem to shake now. He is home in rural England, a place of ordinary pain that better weather can clear, unlike the exploding fields and running children he remembers.',
      annotations: [
        {
          phrase: 'spools of suffering',
          note: 'Sibilant metaphor: the film is named by its contents, so the quiet opening is already full of pain, and the rows it lies in suggest order laid over chaos.',
        },
        {
          phrase: 'All flesh is grass',
          note: 'The biblical allusion closes the first stanza like the end of a funeral reading, turning three news datelines into a statement about how brief every life is.',
        },
        {
          phrase: 'Solutions',
          note: 'A pun at the start of stanza 2: he has chemical solutions in his trays but no solution to the wars, and its place at the start of a sentence gives it weight.',
        },
        {
          phrase: 'Rural England',
          note: 'A two-word minor sentence that jolts us home; the calm it names is real, but the poem makes it look sheltered and unknowing beside the war zones.',
        },
        {
          phrase: 'nightmare heat',
          note: 'The memory ends the stanza as a bad dream, and the ambiguity of heat, whether climate or fire or fear, leaves the reader to picture the worst.',
        },
      ],
      question:
        'Re-read lines 1 to 12. How does Duffy present the contrast between the photographer’s work and his life at home? Refer to language, form and structure.',
    },
    {
      title: 'The face in the tray',
      where: 'Stanza 3, lines 13-18',
      pointer:
        'The whole of stanza 3, from the short sentence that opens line 13 to the end of line 18. Anthology page 63.',
      summary:
        'Something starts to happen in the tray: a stranger’s face takes shape as the print develops, its features seeming to twist in front of the photographer. The half-developed image brings back the man’s wife crying, the photographer’s wordless request for approval to do what had to be done, and the man’s blood soaking into the ground of another country. It is the only stanza that focuses on one victim.',
      annotations: [
        {
          phrase: 'half-formed',
          note: 'Literally the print is still developing, but the compound adjective also suggests a life left unfinished, so the process and the death are fused in one word.',
        },
        {
          phrase: 'ghost',
          note: 'The noun tells us the man is dead and makes the photograph a haunting, the moment the poem’s calm, ritual control finally gives way to memory.',
        },
        {
          phrase: 'sought approval',
          note: 'He asked for permission without words; the poem never says whose approval, or that it was given, and the enjambment into line 17 leaves the moral question open.',
        },
      ],
      question:
        'Re-read stanza 3. How does Duffy show the photographer’s memory of what he witnessed breaking through his professional calm?',
    },
    {
      title: 'The editor, the reader and the flight',
      where: 'Stanza 4, lines 19-24',
      pointer:
        'The final stanza, from line 19, where the prints are counted, to the last line, 24. Anthology page 63.',
      summary:
        'The poem moves out of the darkroom. From a hundred pictures of agony his editor will choose five or six of them to print in the Sunday supplement, and a reader will be moved to tears for a moment, after a bath and before a drink at lunchtime. In the last two lines the photographer is on an aeroplane, staring without expression at the place where he makes his living, and the poem ends on a flat statement of other people’s indifference.',
      annotations: [
        {
          phrase: 'eyeballs prick',
          note: 'Clinical diction reduces the single reader’s response to a physical reflex, and the line break after prick makes the tears wait, then vanish into the next line.',
        },
        {
          phrase: 'pre-lunch beers',
          note: 'Bathos: suffering is set beside a comfortable weekend drink, and the plosive b sounds that run from the bath to the beers make the moment brisk and careless.',
        },
        {
          phrase: 'stares impassively',
          note: 'The adverb describes his face, not his feelings; after stanza 3 it reads as a mask he needs in order to return to the work.',
        },
        {
          phrase: 'they do not care',
          note: 'The plural pronoun widens the charge from one reader to everyone at home, and the flat monosyllables and closing rhyme make the accusation final.',
        },
      ],
      question:
        'Re-read stanza 4. How does Duffy present the public’s reaction to the photographer’s work, and in what state does the ending leave the photographer?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Metaphor with sibilance',
      example: 'The rolls of film are “spools of suffering” (line 2).',
      effect:
        'The soft s sounds suit the hush of the darkroom, while the metaphor makes each object contain pain. From the second line, the poem refuses to let the reader treat the photographs as neutral things: every spool is a record of real people suffering.',
    },
    {
      technique: 'Extended religious imagery (a semantic field of worship)',
      example:
        'Lines 3 to 5: the single red light, the room compared to a church, the photographer compared to a priest preparing for Mass.',
      effect:
        'The simile makes developing photographs a sacred ritual and the photographer a kind of priest for the dead. It gives his work dignity and seriousness, which sharpens the contrast with the reader of stanza 4, for whom the same images are part of a lazy Sunday.',
    },
    {
      technique: 'Biblical allusion',
      example: '“All flesh is grass” (line 6), from Isaiah 40:6.',
      effect:
        'A single borrowed sentence carries the whole theme of mortality: human life is as brief as grass. Placed straight after the names of three cities at war, it turns news into lament, and its ambiguity, consolation or bleakness, gives an answer plenty to argue about.',
    },
    {
      technique: 'Asyndetic list and caesura',
      example:
        'Line 6 names Belfast, Beirut and Phnom Penh as separate one- and two-word sentences, each closed by a full stop.',
      effect:
        'The full stops break the line into hard fragments, like datelines on a report or the click of a shutter, and the plosive b of the first two names sounds harsh. Listing without conjunctions suggests the wars are endless and interchangeable, one after another, in the photographer’s working life.',
    },
    {
      technique: 'Pun (double meaning)',
      example: 'The chemical “Solutions” of line 7.',
      effect:
        'The word means both the liquids in the trays and answers to a problem. The photographer is surrounded by the first and has none of the second, and the pun quietly states the limit of his work: a photograph can make people see a war but cannot end it.',
    },
    {
      technique: 'Juxtaposition',
      example:
        '“Rural England” (line 9) set against the children running through a “nightmare heat” (line 12).',
      effect:
        'Home and the war zone are placed side by side within three lines. The everyday pains of England, cured by a change in the weather, are made to look small and sheltered beside the memory of exploding fields, and the contrast prepares for the attack on the people at home in stanza 4.',
    },
    {
      technique: 'Metaphor of haunting',
      example: 'The developing face becomes a “half-formed ghost” (line 15).',
      effect:
        'The literal process of a print appearing in the developer becomes a supernatural visitation. The dead man returns, and the photographer cannot keep the professional distance that the first two stanzas worked to hold. It is the emotional climax of the poem.',
    },
    {
      technique: 'Enjambment',
      example:
        'Lines 16 to 17, where the request for approval runs on over the line break, and lines 21 to 22, where the reader’s eyes prick at the end of one line and the tears arrive in the next.',
      effect:
        'In a poem held in tight sestets, run-on lines are where feeling spills past the form. The request of line 16 is left hanging over the break, as unanswered as it was at the time. In lines 21 and 22 the break delays the tears and then hurries them away into the bath and the drink, so the line structure acts out how briefly the reader is moved.',
    },
    {
      technique: 'Shifts of tense',
      example:
        'The darkroom is in the present tense (lines 1 and 13), the war zones in the past (line 8 and lines 16 to 18), and the editor’s choice in the future (line 20).',
      effect:
        'The present tense puts us in the room with him as the image appears, so the memory seems to happen now rather than being recalled. The past tense marks what cannot be changed. The future tense of the editor’s choice is the coldest of the three: the photographer already knows what will happen to his pictures, which makes the routine of stanza 4 feel fixed and repeated, as it would be every Sunday.',
    },
    {
      technique: 'Clinical word choice and bathos',
      example:
        'One reader’s “eyeballs prick” (line 21), and the tears are fitted in somewhere after a bath and before “pre-lunch beers” (line 22).',
      effect:
        'The body-part word makes the reader’s sympathy a reflex rather than a feeling, and setting it between two leisure activities creates bathos, a fall from the serious to the trivial. The tone is sardonic, and we are invited to judge the reader, and then perhaps to judge ourselves.',
    },
    {
      technique: 'Adverb and final rhyme',
      example:
        'He “stares impassively” (line 23), and the poem closes on “they do not care” (line 24).',
      effect:
        'The adverb withholds his feelings, leaving the reader to supply them from what the poem has shown, while the final full rhyme closes the poem with a hard, flat certainty. The contrast between a face that shows nothing and a public that feels too little is the poem’s last and sharpest point.',
    },
  ],

  vocabulary: [
    {
      term: 'Darkroom',
      definition:
        'A room kept dark for developing film and making prints, lit only by a safelight. The anthology prints it as one word in line 1.',
    },
    {
      term: 'Safelight',
      definition:
        'The red or amber lamp in a darkroom. Most black-and-white printing papers are sensitive only to blue, or to blue and green, light, so a red light lets the photographer see without spoiling the prints. It explains the red light of line 3.',
    },
    {
      term: 'Spool',
      definition:
        'A reel on which film is wound. Here the spools are rolls of exposed film brought back from the war zones, and they are what is set out in rows in line 2.',
    },
    {
      term: 'Developer, stop bath, fixer',
      definition:
        'The three chemical solutions a print passes through in trays. The image appears gradually in the developer, which is the moment stanza 3 describes.',
    },
    {
      term: 'Mass',
      definition:
        'A religious service, as the anthology’s footnote explains; the word is most closely associated with the Catholic tradition. To intone is to chant or recite in a steady, level voice.',
    },
    {
      term: 'Sunday supplement',
      definition:
        'A regular additional section of a Sunday newspaper, as the anthology’s footnote explains. Don McCullin’s main outlet was the Sunday Times Magazine.',
    },
    {
      term: 'Photojournalist',
      definition:
        'A journalist who reports the news through photographs. A war photographer is a civilian, not a soldier, who goes to conflicts to record them for the public.',
    },
    {
      term: 'Impassive',
      definition:
        'Showing no emotion. A face can be impassive while the person feels a great deal, which is the key to reading line 23.',
    },
    {
      term: 'Allusion',
      definition:
        'A brief reference to another text or event that the reader is expected to recognise. Line 6 alludes to Isaiah 40:6.',
    },
    {
      term: 'Semantic field',
      definition:
        'A group of words from the same area of meaning. The church, the priest and the Mass of stanza 1 form a semantic field of religion.',
    },
    {
      term: 'Juxtaposition',
      definition:
        'Placing two contrasting things side by side so that each sharpens the other, as the poem does with rural England and the war zones in stanza 2.',
    },
    {
      term: 'Bathos',
      definition:
        'A sudden drop from the serious to the trivial. In line 22 the reader’s tears are wedged between a bath and a lunchtime drink: bathos used for satire.',
    },
    {
      term: 'Minor sentence',
      definition:
        'A sentence without a main verb, such as each city name in line 6 or the two words that name rural England in line 9. It creates abruptness and emphasis.',
    },
    {
      term: 'Asyndeton',
      definition:
        'A list with no joining words such as and. The three cities of line 6 are listed this way, as if the wars simply follow one another.',
    },
    {
      term: 'Caesura',
      definition:
        'A pause within a line, often marked by punctuation. Lines 6, 7, 9, 13, 15 and 21 all break with a full stop mid-line, which unsettles the regular form.',
    },
    {
      term: 'Enjambment',
      definition:
        'A sentence running on from one line into the next without a pause. Lines 16 to 17 and 21 to 22 use it at the two most uncomfortable moments of the poem.',
    },
    {
      term: 'Third-person narration',
      definition:
        'Writing about a character as he or she rather than in the character’s own voice. Duffy’s third person keeps the photographer at a distance, yet some sentences read like his own thoughts.',
    },
    {
      term: 'Sestet',
      definition:
        'A six-line stanza. War Photographer has four, each rhyming in the pattern ABBCDD and ending on a rhyming couplet.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read War Photographer. Compare the ways the writers present suffering in War Photographer and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay: language, form and structure across two poems',
        guidance: [
          'Choose the second poem from Part 3 of the anthology only. Do not go gentle into that good night, where a son faces his father’s death, or Remember, where the speaker imagines her own death and how she will be remembered, both work well.',
          'Open with a comparative overview: in War Photographer suffering is seen second-hand, through images and memory, and the real question is who feels it. Say in one sentence how your second poem differs.',
          'Analyse the suffering in the images first: the “spools of suffering”, the stranger who becomes a “half-formed ghost”, the wife’s cries. Go to single words and say what the reader is made to feel.',
          'Then the suffering of the witness: his hands, which now seem to tremble, in lines 8 and 9, and the memory that forces its way in during stanza 3. Compare how your second poem shows the person who watches or remembers.',
          'Then form: the four regular sestets and matching rhyme scheme as control laid over chaos, set against the form of your second poem.',
          'End on the people at home: the single reader’s brief, physical response in stanza 4 and the final “they do not care”. Say which poem leaves you more unsettled, and why.',
        ],
      },
      {
        question:
          'Re-read War Photographer and If-. Compare how the writers present self-control in War Photographer and If-. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay on a named pair',
        guidance: [
          'Overview: Kipling presents self-control as the ideal a speaker passes on to his son; Duffy shows a man who has that control at work and what it costs him at home.',
          'Start with form, because it carries both arguments. If- is built from a long chain of conditional clauses introduced by If, resolved only in its final two lines; War Photographer holds its memories in four matching sestets. Both forms act out control.',
          'Compare the language of composure: Kipling’s advice to treat triumph and disaster alike, against the photographer’s steady hands in the war zones and the face that “stares impassively” at the end.',
          'Compare the language of strain: in War Photographer control breaks, in the hands that seem to tremble and the “half-formed ghost”; look for the places where If- admits the effort control demands, such as holding on when there is nothing left.',
          'Conclude with an evaluation: is the photographer the man Kipling describes, and does Duffy suggest the ideal is admirable, impossible or damaging?',
        ],
      },
      {
        question:
          'Re-read War Photographer and Piano. Compare how the writers present the power of memory in War Photographer and Piano. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay on a named pair',
        guidance: [
          'Overview: in both poems something in the present, a song in Piano and a developing print in War Photographer, pulls a man back into the past against his will.',
          'Compare the triggers: a woman singing softly at dusk in Piano; a face rising out of the tray in War Photographer. Show how each poem makes the return to the past feel involuntary.',
          'Compare what is remembered: a mother, hymns in a parlour and childhood Sunday evenings in Piano; a stranger’s death and a wife’s grief in War Photographer. Sunday appears in both, as comfort in Piano and as the reader’s easy routine in Duffy’s last stanza.',
          'Compare the effect on each man: Lawrence’s speaker admits that memory overwhelms his adult self and reduces him to a child’s tears; Duffy’s photographer’s hands seem to tremble, but at the end he “stares impassively”. One breaks down openly, the other hides it.',
          'Form: Piano’s three quatrains in rhyming couplets and War Photographer’s four sestets. Both use regular form to contain strong feeling; argue which strains harder against it.',
        ],
      },
      {
        question:
          'Re-read Blessing and War Photographer. Compare the ways the writers present powerful images in Blessing and War Photographer. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay on a named pair, set by Pearson as an example question',
        guidance: [
          'Overview: both poems turn a scene of hardship into vivid images, but Dharker’s are of sudden joy when a municipal pipe bursts in a place without enough water, while Duffy’s are of suffering, developed in silence.',
          'Religious language in both: Blessing presents the water as the voice of a god and the crowd as a congregation; War Photographer turns the darkroom into a church and the photographer into a priest. Contrast a communal celebration with a solitary rite for the dead.',
          'Light and colour: the silver of the water and the children shining in the sun in Blessing; the red safelight and the black-and-white prints in War Photographer.',
          'Lists: Dharker’s rush of pots, metals and buckets in her third stanza gathers people together; Duffy’s three cities cut off by full stops in line 6 list places of destruction.',
          'Form: Blessing is free verse in four stanzas of uneven length that build towards the children; War Photographer’s four matching sestets move from the darkroom out to the view from an aeroplane.',
          'Close on the viewer: Blessing ends with the children delighting in the water, though its last image, of their small bones, hints at how frail they are; War Photographer ends on people at home who are barely moved. Use that contrast for an evaluative final paragraph.',
        ],
      },
    ],
    tips: [
      'Read the last line carefully. Its plural pronoun most naturally means the people at home, not the photographer. Pearson’s examiners, reporting on the November 2023 exam, noted an occasional misunderstanding that the photographer did not care; the poem shows the opposite, and a strong answer explains why his impassive face is not indifference.',
      'Treat the regular form as meaning, not decoration. Four matching sestets and the same rhyme scheme in every stanza mirror the order of the darkroom; the best answers show where that order strains, in the minor sentences of lines 6 and 9, the short, abrupt sentences that open lines 7 and 13, and the run-on lines at 16 and 21.',
      'Use context in one precise sentence where it sharpens a point: the three conflicts behind line 6, or the Sunday magazine that printed photographs like these. A paragraph of history earns less than a sentence that changes how a quotation reads.',
      'Argue about the ambiguity of the ending rather than silently choosing one reading. Is his blank face a mask or numbness, and is he looking down at England, where his pictures are sold, or towards the wars where he takes them? Say which reading you find more convincing and why.',
      'Compare throughout. Pearson’s mark schemes say that it is not enough to summarise or paraphrase the poems, or simply to list literary devices, and that some personal response is expected: say what the poems make you think and feel, and support it with analysis.',
      'Choose your second poem from Part 3. Disabled and The Bright Lights of Sarajevo, sometimes paired with this poem, are Part 2 texts set for English Language A, not for this paper.',
      'Learn the anthology’s wording, from page 63, which is also what the exam paper prints. It has darkroom as one word in line 1 and the reader in the singular in line 21, and even an example planning grid in Pearson’s own Getting Started Guide gets the wording of the church simile in line 4 wrong, so check every line you learn against the anthology itself.',
    ],
  },

  modelAnswer: {
    question:
      'Re-read War Photographer and If-. Compare how the writers present self-control in War Photographer and If-.',
    paragraph:
      'Both poets are concerned with the self-control a man is expected to show, but where Kipling presents composure as a prize to be won, Duffy counts its cost. Her photographer’s control is built into the form: four sestets, each with the same rhyme scheme, hold his memories as neatly as the darkroom holds its “spools of suffering” in rows. Yet inside that order the control keeps failing. His hands, steady in the war zones, seem to tremble now that he is safe at home, and in stanza 3 the stranger’s face rises out of the developing tray as a “half-formed ghost”. The compound adjective describes a print that is still forming, but it also suggests a life cut off before it was finished, and the noun turns a photograph into a haunting. So when the poem ends with a man who “stares impassively” from an aeroplane, I read his blank face as a mask rather than indifference: we have just watched what he is hiding. Kipling’s speaker promises his son that calm under pressure will make him a man; Duffy suggests that the same calm may be what leaves a man alone in the dark with what he has seen.',
    commentary: [
      'It opens with a comparative argument, not a summary. Both poems are about self-control, and the difference between them, a prize or a cost, is stated in the first sentence.',
      'It ties form to meaning precisely: the regular sestets and rhyme scheme are linked to the order of the darkroom, and the paragraph then shows where that order breaks.',
      'Each quotation is short and embedded in the sentence, and the analysis goes down to single words: the adjective and the noun in “half-formed ghost” are read separately, and both readings are kept.',
      'It takes on the ambiguity of the ending and commits to a reading, with a reason drawn from the poem itself. That avoids the misreading Pearson’s examiners have reported, that the photographer does not care.',
      'The comparison returns in a single balanced final sentence, so both poems stay in view without losing depth on Duffy. In a full answer the next paragraph would give If- the same close attention.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-6',
      title: 'Alone in the darkroom',
      summary:
        'The photographer is alone at last in the darkroom, where his rolls of film wait in rows under a soft red light. Duffy compares the room to a church and him to a priest before Mass, and the stanza ends by naming Belfast, Beirut and Phnom Penh, then a sentence from the Bible about mortality.',
      setting: 'A darkroom at home in England, lit only by a red safelight',
      who: ['The photographer'],
      quote: 'spools of suffering',
      themes: ['Ritual, faith and mortality', 'Bearing witness and its cost'],
      tension: 2,
      significance:
        'The calm, sacred atmosphere sets up the order that the memories of stanzas 2 and 3 will disturb.',
    },
    {
      where: 'Stanza 2, lines 7-12',
      title: 'Back home',
      summary:
        'He sets to work, and the chemicals slosh in their trays under hands that were steady in the war zones but seem to shake now. He is home in rural England, where pain is the kind better weather can clear, and the ground does not blow up beneath running children, unlike the places he has come from.',
      setting: 'The darkroom, and in memory a war zone in fierce heat',
      who: ['The photographer', 'The children'],
      quote: 'Rural England',
      themes: ['Suffering and indifference', 'Bearing witness and its cost'],
      tension: 3,
      significance:
        'The contrast between home and war is set out, and the first sign of his hidden trauma appears in his hands.',
    },
    {
      where: 'Stanza 3, lines 13-18',
      title: 'A face in the developing tray',
      summary:
        'As a print develops, a stranger’s face takes shape and its features seem to twist in front of him. He recalls the wife’s crying, his silent request for approval to do what had to be done, and the man’s blood soaking into the ground of another country.',
      setting: 'The darkroom, and in memory the scene of a death abroad',
      who: ['The photographer', 'The stranger', 'The wife'],
      quote: 'half-formed ghost',
      themes: ['The ethics of the image', 'Bearing witness and its cost'],
      tension: 5,
      significance:
        'The emotional centre of the poem: one death becomes specific, and the question of whether he should have photographed it is raised and left unanswered.',
    },
    {
      where: 'Stanza 4, lines 19-22',
      title: 'The Sunday selection',
      summary:
        'He has brought back a hundred pictures of agony, and his editor is going to choose five or six of them for the Sunday supplement. The reader’s eyes will sting with tears for a moment, somewhere between a bath and a drink before lunch.',
      setting:
        'The newspaper that will print the pictures, then a reader’s home on a Sunday before lunch',
      who: ['The photographer', 'The editor', 'The reader'],
      quote: 'eyeballs prick',
      themes: ['Suffering and indifference', 'The ethics of the image'],
      tension: 3,
      significance:
        'The poem widens from the photographer to the public, and its tone turns bitter and satirical.',
    },
    {
      where: 'Stanza 4, lines 23-24',
      title: 'The flight',
      summary:
        'The last two lines put the photographer on an aeroplane. His face shows nothing as he stares at the place where he makes his living, and the poem ends on a flat statement about the people at home.',
      setting: 'An aeroplane, high above the ground',
      who: ['The photographer', 'The reader'],
      quote: 'stares impassively',
      themes: ['Suffering and indifference', 'Bearing witness and its cost'],
      tension: 4,
      significance:
        'The ending is left open: he may be looking down at England, where his pictures are sold, or towards the wars where he takes them, and whether his blank face is a mask or numbness is for the reader to decide.',
    },
  ],

  relationships: [
    {
      from: 'The photographer',
      to: 'The stranger',
      kind: 'photographer and subject',
      note: 'The photographer knew him only as the subject of a picture, yet the stranger returns to him in the tray as a ghost: the professional distance between them collapses in stanza 3.',
    },
    {
      from: 'The photographer',
      to: 'The wife',
      kind: 'a silent request',
      note: 'In the natural reading he silently asked for her approval before taking the picture. The poem never gives her answer, and that silence is where its moral question lives.',
    },
    {
      from: 'The photographer',
      to: 'The children',
      kind: 'witness and victims',
      note: 'He carries them home as a memory; they are what makes the safe fields of rural England look sheltered and unknowing.',
    },
    {
      from: 'The photographer',
      to: 'The editor',
      kind: 'supplier and selector',
      note: 'He brings back a hundred pictures; the editor will print five or six. The photographer knows the routine in advance, and the future tense shows it.',
    },
    {
      from: 'The editor',
      to: 'The reader',
      kind: 'publisher and audience',
      note: 'The editor shapes suffering to fit a Sunday supplement, and the reader takes it in between other weekend pleasures.',
    },
    {
      from: 'The photographer',
      to: 'The reader',
      kind: 'witness and onlooker',
      note: 'He is haunted by what he saw; the reader is moved for a moment. The last line judges the people at home in the plural, and one reading extends the judgement to the poem’s own readers.',
    },
  ],

  compareWith: [
    {
      title: 'Blessing (Imtiaz Dharker)',
      href: '/revision/texts/blessing',
      reason:
        'Pearson’s own Getting Started Guide sets this pair on powerful images: Dharker’s burst pipe brings a crowd together in sudden joy, while Duffy’s images of suffering are developed alone in the dark.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Kipling offers self-control as the mark of a man; Duffy shows a man who has it and what it costs him, so the pair argue with each other about composure.',
    },
    {
      title: 'Piano (D H Lawrence)',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'In both, something in the present drags a man back into memory against his will, but Lawrence remembers comfort and Duffy’s photographer remembers a death.',
    },
    {
      title: 'Do not go gentle into that good night (Dylan Thomas)',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'In November 2023 Pearson set Do not go gentle with one other poem of the candidate’s choice, on emotions, and its examiners’ report names War Photographer among the popular second poems: Thomas urges his dying father to fight, while Duffy’s photographer can only record a death and hope that others will care.',
    },
  ],

  contentGuidance: ['violence', 'mortality', 'mythological_religious'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 63: the poem as prescribed, stanza layout, margin line numbering, darkroom as one word, the reader’s in the singular in line 21, and the two footnotes; the Part 3 contents list of sixteen poems; acknowledgement (Standing Female Nude, Anvil Press Poetry, 1985, copyright Carol Ann Duffy, by permission of the author c/o Rogers, Coleridge & White). Every quotation checked against this text on 26 September 2026, and the length counted from it.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson, 4ET1/01 question paper, Monday 6 November 2023: prints the poem with the same wording as the anthology; Section B question wording (Re-read, Compare, one other poem from the anthology, reference to language, form and structure).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        'Pearson, 4ET1/01 question paper, Wednesday 17 May 2023: prints the poem with the same wording as the anthology; named-pair question wording.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20230518.pdf',
    },
    {
      label:
        'Scottish Poetry Library, War Photographer: independent check of every line, agreeing with the anthology on every word except dark room as two words in line 1; credits New Selected Poems 1984-2004 (Picador, 2004).',
      url: 'https://www.scottishpoetrylibrary.org.uk/poem/war-photographer/',
    },
    {
      label:
        'Scottish Poetry Library, Carol Ann Duffy biography: born in the Gorbals, Glasgow, 23 December 1955; moved to Stafford at six; Roman Catholic primary and middle schools, then Stafford Girls’ High School; philosophy degree, Liverpool, 1977; Fleshweathercock and Other Poems (Outposts, 1974), Beauty and the Beast with Adrian Henri (1977), Fifth Last Song (Headland, 1982); National Poetry Competition 1983; Standing Female Nude (Anvil, 1985); Poet Laureate 2009, first female and first Scottish; poems in tabloid and broadsheet newspapers and on the radio; stood down May 2019, succeeded by Simon Armitage.',
      url: 'https://www.scottishpoetrylibrary.org.uk/poet/carol-ann-duffy/',
    },
    {
      label:
        'Wikipedia, Carol Ann Duffy: cross-check of birth date and place, Stafford at six, Liverpool philosophy degree 1977, Standing Female Nude (Anvil Press Poetry, 1985), laureateship 1 May 2009 to 10 May 2019.',
      url: 'https://en.wikipedia.org/wiki/Carol_Ann_Duffy',
    },
    {
      label:
        'WJEC Eduqas, GCSE English Literature teaching notes on War Photographer: inspired by friendships with Don McCullin and Phillip (sic) Jones Griffiths; interest in how war photographers record horrifying events without being able to help; published 1985 in Standing Female Nude; war photographers are civilians, not soldiers; Belfast, Beirut and Phnom Penh; a question on the possible meanings of nightmare heat; a further-research link to an interview with Nick Ut.',
      url: 'https://resource.download.wjec.co.uk/vtc/2024-25/edu/edu24-25_2g-11/pdf/war-photographer-carol-ann-duffy.pdf',
    },
    {
      label:
        'Tate Britain, Don McCullin exhibition: born 1935; from the 1960s probably the UK’s foremost war photographer, primarily for the Sunday Times Magazine; over 250 photographs, all printed by McCullin himself in his own darkroom.',
      url: 'https://www.tate.org.uk/whats-on/tate-britain/don-mccullin',
    },
    {
      label:
        'Magnum Photos, Philip Jones Griffiths: born 1936 in Rhuddlan, Wales; died 2008; Vietnam Inc. (1971); worked in Cambodia between 1973 and 1975.',
      url: 'https://www.magnumphotos.com/photographer/philip-jones-griffiths/',
    },
    {
      label:
        'Wikipedia, The Troubles: late 1960s to 1998, usually deemed ended by the Good Friday Agreement; more than 3,500 killed.',
      url: 'https://en.wikipedia.org/wiki/The_Troubles',
    },
    {
      label:
        'Wikipedia, Lebanese Civil War: 13 April 1975 to 13 October 1990; the siege of Beirut during the 1982 Israeli invasion.',
      url: 'https://en.wikipedia.org/wiki/Lebanese_Civil_War',
    },
    {
      label:
        'Wikipedia, Khmer Rouge rule of Cambodia: Phnom Penh captured 17 April 1975 and emptied; Vietnamese forces took the city on 7 January 1979; deaths by mass executions, forced labour and starvation. Death-toll estimates differ between sources, so the guide gives none.',
      url: 'https://en.wikipedia.org/wiki/Khmer_Rouge_rule_of_Cambodia',
    },
    {
      label:
        'Wikipedia, The Terror of War: taken 8 June 1972 at Trang Bang; Phan Thi Kim Phuc, aged nine, fleeing a napalm strike; long credited to Nick Ut; the 2025 documentary The Stringer; in May 2025 the Associated Press kept the credit while World Press Photo suspended the attribution.',
      url: 'https://en.wikipedia.org/wiki/The_Terror_of_War',
    },
    {
      label:
        'Wikipedia, Darkroom: red or amber safelight because most black-and-white papers are sensitive only to blue, or to blue and green, light; the exposed paper still blank; developer, stop bath and fixer.',
      url: 'https://en.wikipedia.org/wiki/Darkroom',
    },
    {
      label:
        'King James Version, Isaiah 40:6-8 (all flesh is grass; the grass withers, the flower fades; the people is grass) and 1 Peter 1:24, via Bible Gateway.',
      url: 'https://www.biblegateway.com/passage/?search=Isaiah+40%3A6-8%3B1+Peter+1%3A24&version=KJV',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature Getting Started Guide, Issue 2 (November 2024): notes on War Photographer (regular sestets, abbcdd rhyme scheme, the reader’s in the singular) and the example question comparing powerful images in Blessing and War Photographer. Its notes and indicative content quote the church simile of line 4 correctly, but its example planning grid misquotes it, so no wording was taken from it.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label:
        'Pearson, 4ET1 Paper 1 examiners’ report on the November 2023 exam (published January 2024): for the question on emotions in Do not go gentle into that good night and one other poem, the most popular second poems were Piano and Poem at Thirty-Nine, after which If- and War Photographer were popular, with an occasional misunderstanding that the photographer did not care.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20240125.pdf',
    },
    {
      label:
        'Pearson, 4ET1 Paper 1 mark scheme, June 2024: Section B rewards comparison; a degree of personal response is required; it is not sufficient to summarise or paraphrase, or simply to list literary devices.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240822.pdf',
    },
    {
      label:
        'Held editions in src/data/full-texts (if.ts, piano.ts) and the anthology text of Blessing, page 53 (four stanzas of 2, 4, 11 and 6 lines; the pipe, the kindly god, the congregation, the list of pots and metals, the silver, the children in the sun, the small bones): checked for every statement this guide makes about the comparison poems.',
    },
  ],
}
