import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From A Passage to Africa, George Alagiah. A supplement to the anthology page at
 * /igcse/edexcel-lang/anthology/a-passage-to-africa, which keeps the overview,
 * context, structure and vocabulary; this file adds what that page lacked.
 *
 * WHERE THE WORDING COMES FROM. Every quotation here was checked against the
 * prescribed text itself: the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), pages 4-5, which Pearson publishes as a
 * free PDF. Line numbers are the anthology's printed ones (74 lines, 13
 * paragraphs). The anthology prints an EXTRACT, cut in three places with
 * ellipses, so a copy of the book or a website version is not the prescribed
 * text.
 *
 * WHAT THE PAGE ABOVE GETS WRONG (25 September 2026), recorded so that nobody
 * copies it into this file: its teacher note says Alagiah calls it a "smile of
 * embarrassment", which the extract never says (the translator says the man was
 * embarrassed; Alagiah's phrase is "the feeble smile that goes with apology").
 * Its "metaphor of arithmetic", its "not enough" irony and its glossary words
 * ghastly, arithmetic, warring and emaciated are not in the anthology extract.
 *
 * COPYRIGHT. © George Alagiah 2001. The extract is 1,097 words, so under
 * fair-dealing.ts the whole page may quote a tenth of it (109 words). Every
 * phrase quoted in the prose below, except the single word "embarrassed", is
 * also one of the key quotations or passage annotations, so that repeating it
 * costs nothing against that total.
 *
 * FACT-CHECK (25 September 2026). The first draft gave the length as 1,100,
 * which counted the three ellipses as words; it said the word "embarrassed"
 * belongs to the translator, although Alagiah repeats it himself at line 63;
 * and it placed the smile in "the doorway of a dark hut", which the extract
 * never says. Paraphrases of the translator's answer now say "embarrassed", his
 * word, not "ashamed".
 *
 * SECOND FACT-CHECK (26 September 2026), against the same PDF: every quotation
 * and line number held. It had called the meeting a "turning point", but the
 * text calls it a seminal moment in a gradual collection of experiences, which
 * is nearly the opposite of a sudden turn; it had the old woman "abandoned" by
 * the army that shot her; and the rights line named Little, Brown where the
 * anthology prints from the Abacus edition, pp. 87-90.
 */
export const guide: StudyGuide = {
  slug: 'a-passage-to-africa',
  title: 'From A Passage to Africa',
  author: 'George Alagiah',
  form: 'non-fiction',
  scope:
    "The extract From A Passage to Africa printed in Part 1 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), pages 4-5: 74 numbered lines from Alagiah's 2001 memoir, taken from pages 87-90 of the Abacus edition and cut in three places with ellipses. Line numbers in this guide are the anthology's.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© George Alagiah 2001. From A Passage to Africa (Abacus, 2007, pp. 87-90), as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, by permission of Little, Brown Book Group Limited and the author c/o The Hanbury Agency Ltd.',
  },
  workLength: {
    words: 1097,
    basis:
      'Counted from the text as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 4-5: 1,097 words in 13 paragraphs and 74 numbered lines, excluding the 33-word headnote, the three footnote glosses, the line numbers, the dashes and the three ellipses, with the four hyphenated words counted once. Counting each part of a hyphenated word separately, as the site validator does, gives 1,101.',
  },

  native: {
    overview: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    context: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    structureForm: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    vocabulary: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
  },

  themes: [
    {
      title: 'Seeing one person in a crowd of suffering',
      body: 'Alagiah opens with “a thousand hungry, lean, scared and betrayed faces” and at once narrows to the one he will never forget. The whole extract performs that narrowing. It moves from a country, to a hamlet outside Gufgaduud, to named people (Amina Abdirahman and her daughters Habiba and Ayaan), and finally to a single face seen for a few seconds. The structure argues what the last paragraph states outright: gathering facts is simple, and understanding their place in the larger picture is the hard part. One reading is that Alagiah is correcting television news, which deals in crowds, by insisting on the individual. A sharper reading notices the paradox that the person who matters most is the one he never names. The man who changed his thinking stays anonymous, and the extract ends by addressing “my nameless friend”. The individual has been recovered as a presence but not as a person, and Alagiah is honest enough to let the reader see it.',
    },
    {
      title: 'The ethics of reporting suffering',
      body: "Alagiah indicts his own profession from inside it. He calls the hunt for pictures “ghoulish”, compares “the search for the shocking” to a drug habit that needs ever bigger doses, and admits that pictures which stun editors one day are dismissed as old news the next. He anticipates the reader's judgement with “This sounds callous”, then defends the practice as a fact of life. That double move is the heart of the theme: he neither excuses the trade nor disowns it. The man's smile then breaks the unspoken rule of the job, in which the journalist is active and the subject passive. The most convincing reading is that the extract criticises the habits of journalism but not its purpose. His answer to the man's silent question is to write the story of Gufgaduud with all the “power and purpose” he can find, so that reporting becomes a moral act rather than a harvest of images. Alagiah says this still seems to him the only fitting reply a reporter could make. A more sceptical reader may ask whether a better story can really settle a debt to a starving man, and the final line, which leaves the debt still owed, can be read as a quiet admission that it cannot.",
    },
    {
      title: 'Dignity, shame and the apologetic smile',
      body: 'Alagiah notices that even at their most desperate, people try to keep their dignity: an old woman covers her body as she is looked at, and a dying man keeps his hoe beside him as though he will farm again. The smile belongs to this pattern. The translator reports that the man was “embarrassed” to be found as he was, and Alagiah reads it as “the feeble smile that goes with apology”. The irony is sharp. The person with every reason to feel wronged apologises, and the well-fed visitor, who has been hunting for shocking pictures, is the one who ought to feel shame. That helps to explain why the smile unsettles him more than any of the horrors before it: it shows him that he is being seen as well as seeing. The smile can be read two ways. On one reading it is evidence of dignity that survives, because only someone who still has a sense of his own worth could be embarrassed to be seen like this, which links it to the old woman and the dying man with his hoe. On another, “feeble” and “apology” show how far the famine has worn him down, so that he feels at fault for his own suffering. The strongest answers hold both.',
    },
    {
      title: 'Pity and revulsion',
      body: "Alagiah admits a feeling most reporters hide. His reaction to everyone else he met that day, he says, was “pity and revulsion. Yes, revulsion.” The repeated word is a confession, forced out as if he expects the reader to flinch. He explains that television reports never admit this feeling, and he describes the physical reality of a feeding centre, down to the furtive wiping of hands that a visitor there cannot avoid. The honesty matters for two reasons. First, it makes him credible: a narrator who admits disgust is harder to dismiss as sentimental. Second, it prepares the turn. The smile moves him in a way that goes beyond both feelings, so the two emotions he has confessed become the measure of what the man's gesture overturns. One way to put it: pity looks down on its object and revulsion pulls away from it, while the smile makes Alagiah look at the man as someone who can judge him, and then as someone to whom he owes something.",
    },
    {
      title: 'The rich world and the poor world',
      body: "The man's question, asked without a word, widens from the two men, to two groups, and finally to the gap “between the rich world and the poor world”. Alagiah stands there strong and sure of himself; the man is starving and worn down by war. The inequality is not confined to Somalia. Earlier, Alagiah reminds the reader that these images are gathered for viewers at home, watching in comfort, and a reader of the memoir, book in hand, is in much the same position. The theme therefore implicates us: if the man was embarrassed to be seen, the question the extract passes on is how we should feel to be the ones looking. The historical context sharpens the point. The famine came out of the civil war that followed the overthrow of Siad Barre's government in January 1991, which wrecked the farming south, and an exceptionally harsh drought in 1991 and 1992, and by the time most of the international media noticed, the worst of the dying had already passed. Alagiah's remark about how quickly editors tire of pictures has a hard edge.",
    },
    {
      title: 'Memory, regret and a debt',
      body: "The extract is written years after the events and keeps two times in view. Alagiah quotes his notebook and his broadcast from the time, and he judges from the present as well: his decision to tell the story, he says, seemed right at the time and still does. The phrase “I will never forget” appears in the opening paragraph and again in the single-sentence paragraph that introduces the face, framing everything in between as a memory he cannot shake. The ending adds regret. Having checked his notes and the BBC's broadcast, he finds he never learned the man's name, yet he calls the meeting a formative moment in the slow gathering of experience that gives facts their meaning. He does not present it as a sudden conversion: the moment takes its place in a gradual process. The last words, “I owe you one”, are deliberately casual, the phrase for a small favour, and the gap between the idiom and the size of the debt is the point. One reading hears warmth and modesty; a more searching one hears a writer who knows no phrase can settle what he owes.",
    },
  ],

  characters: [
    {
      name: 'George Alagiah',
      role: 'The writer and narrator: a BBC television reporter in Somalia in 1991-92',
      body: "Alagiah (1955-2023) was born in Colombo, then Ceylon, moved with his family to Ghana in 1961, went to secondary school in Portsmouth and studied politics at Durham University. He joined the BBC in 1989 and became one of its leading foreign correspondents, reporting on the famine and civil war in Somalia among other conflicts, and later presented the BBC News at Six. The extract comes from his memoir A Passage to Africa, first published in 2001; the anthology's introduction notes that he won a special award for his report on these events. As a narrator he is two people at once: the younger reporter in Somalia, hardened and hunting for pictures, and the older writer who judges him. The voice is controlled and self-critical. He confesses to feelings a reporter is not meant to have, including revulsion, and refuses to make himself the hero: the man in the hut is the one who acts, and Alagiah is the one who is changed.",
    },
    {
      name: 'The man who smiled',
      role: 'The unnamed man in a hamlet just outside Gufgaduud, seen for only a few seconds',
      body: "He never speaks directly and is never named, yet he is the most important person in the extract. Alagiah meets his eyes for a moment before he withdraws into the darkness of another hut, and the smile he gives is explained only through the translator: he was embarrassed to be seen as he was. Everything he means is therefore reconstructed by someone else, which is itself part of the text's argument about who tells whose story. His silence is powerful. Without a word he reverses the relationship between reporter and subject and raises the question at the centre of the extract. Alagiah's regret that he never learned the man's name, and his final direct address to him, turn a fleeting encounter into a debt. Be precise about him in an exam: the text calls his smile feeble and apologetic, not joyful or defiant, and the strongest answers keep to that.",
    },
    {
      name: 'Amina Abdirahman',
      role: 'A mother in the hamlet, whose elder daughter dies while she is out searching for food',
      body: 'The anthology version names only three people: Amina and her daughters Habiba, aged ten, and Ayaan, aged nine. Amina had gone out to look for wild roots to eat and left the girls, both very ill with hunger, in their hut; when she came back, Habiba had died. Alagiah reports the death itself in two short, level sentences, then describes it as a quiet release rather than a struggle, and the restraint is what makes it so hard to read. He also recalls the words he used about this death in his broadcast at the time, which present it as part of a quiet famine that the news was not covering. Naming Amina and her daughters matters: in a piece about reducing people to images, these are people with names and ages. It also sharpens the contrast with the man who smiled, the person who affects Alagiah most, whose name he never learns.',
    },
    {
      name: 'The wounded old woman',
      role: 'An old woman left alone in her hut by relatives too weak to carry her',
      body: "Alagiah is drawn to her by the smell of her wound. She had been shot in the leg by the retreating army of the deposed dictator. In the anthology an ellipsis follows those words, so he is not named, but Somalia's deposed ruler was Mohamed Siad Barre, driven from Mogadishu in January 1991, whose retreating forces plundered the farming south. Her description is the most physical in the extract, and at its centre is a short sentence that makes the wound and the woman one: “It was rotting; she was rotting.” She is not named, and Alagiah records no words from her. She stands for the people failed twice over, hurt by the army and then left behind by relatives too weak to carry her, and she is the clearest example of what he means when he later admits to revulsion.",
    },
    {
      name: 'The cameraman',
      role: "Alagiah's colleague on the assignment, who is never named",
      body: "He is barely present, and in the anthology an ellipsis follows the words my cameraman, so he is never named, but his presence matters to the ethics of the piece. Alagiah describes the two of them together tramping from hut to hut in search of the most striking pictures, so the “ghoulish” habits he confesses belong to a team and a trade, not only to him. The camera is also a reminder of what the reporting is for: pictures that will move viewers at home. Nothing in the extract shows the cameraman's own feelings, and a good answer does not invent them.",
    },
    {
      name: 'The translator',
      role: 'The go-between who asks the man why he smiled',
      body: "The translator is the only person from the scene whose words reach us in direct speech, and even then he is reporting another man's feelings. Alagiah urges him to ask why the man smiled, and the answer he brings back, that the man was embarrassed to be seen in the state he was in, is the moment everything clicks into place. His role raises a question a strong answer can use: the man's meaning comes to Alagiah, and so to us, second-hand, filtered through another language and another person. Alagiah's reading of the smile as an apology is built on that translated sentence.",
    },
  ],

  keyQuotes: [
    {
      text: 'a thousand hungry, lean, scared and betrayed faces',
      where: 'Line 1, the opening sentence (anthology p. 4)',
      analysis:
        'The list moves in a deliberate direction: from the body (hungry, lean), to feeling (scared), to politics (betrayed). The last adjective is the surprise, because it implies that someone is to blame, and in a famine made worse by war someone was. The round number “a thousand” turns people into a crowd, which is exactly what the rest of the extract will undo by narrowing to one face. Treat the list as the wide shot before the close-up.',
    },
    {
      text: 'like a ghost village',
      where: 'Line 7, the end of the directions copied from his notebook (anthology p. 4)',
      analysis:
        'These words come from the notebook Alagiah kept at the time, quoted inside the memoir, so the reader hears the reporter in Somalia before the reflective writer. The simile suggests a place that looks empty and haunted, where the living already seem like the dead. It shocks partly because of its casual register: a travel note, jotted down with approximate timings, that happens to describe a community dying of hunger. In one published examiner commentary, close reading of this phrase is part of what lifts a script above the middle band.',
    },
    {
      text: 'In the ghoulish manner of journalists',
      where: 'Line 8, the opening of the third paragraph (anthology p. 4)',
      analysis:
        "A ghoul is a creature of folklore that preys on the dead, so “ghoulish” gives the hunt for pictures a morbid, grave-robbing appetite. The shock is that Alagiah applies the word to himself and his own trade before anyone else can. The phrase sets the self-critical tone of the extract and earns the reader's trust: a narrator who condemns himself this plainly is unlikely to be flattering himself later.",
    },
    {
      text: 'The search for the shocking is like the craving for a drug',
      where: 'Lines 10-11 (anthology p. 4)',
      analysis:
        'The simile presents news-gathering as an addiction. The sibilance of “search” and “shocking” gives the idea a hissing, headline rhythm, and Alagiah extends the image at once with the need for ever larger and more frequent doses. The implication is uncomfortable for the reader as well as the writer: an addiction is fed by demand, and these images are made for audiences at home. The simile also explains why the horrors of the next two paragraphs are told so flatly: this is how a hardened reporter sees.',
    },
    {
      text: 'It was rotting; she was rotting.',
      where: 'Line 29, the paragraph about the wounded old woman (anthology p. 4)',
      analysis:
        "Two short clauses, balanced on a semicolon, move the same verb from the wound to the woman. The repetition refuses the reader any escape into euphemism: the decay is no longer something she has but something she is. The plain words and flat rhythm are typical of the extract's most shocking moments, where Alagiah withholds comment and lets the statement do the work. Coming after the long, detailed sentences before it, its brevity lands like a blow.",
    },
    {
      text: 'And then there was the face I will never forget.',
      where: 'Line 32, a single-sentence paragraph (anthology p. 4)',
      analysis:
        "This is the pivot of the extract. It echoes the opening's promise of one face he will never forget, so the reader realises that everything so far has been a delay. It completes a run of three paragraphs that begin “There was” or “And then there was”, the added “And then” marking arrival. Standing alone as a paragraph, it slows the reading and gives the face a space of its own. Alagiah then delays again, turning to his feelings about everyone else before describing the face itself: suspense used as a structural tool.",
    },
    {
      text: 'pity and revulsion. Yes, revulsion.',
      where: 'Lines 33-34 (anthology p. 4, where revulsion is glossed as disgust)',
      analysis:
        "The minor sentence “Yes, revulsion” sounds like a man insisting on a truth he would rather not tell, as if answering the reader's shocked objection before it is made. The repetition turns the word from a description into a confession. He goes on to say that television reports never admit this feeling, so the sentence breaks a silence in print. It matters to the argument: he has to admit revulsion honestly for the reader to measure how far the smile moves him.",
    },
    {
      text: 'it was a smile nonetheless',
      where: 'Line 49 (anthology p. 5)',
      analysis:
        'Alagiah defines the smile first by what it is not, neither a greeting nor a sign of joy, and interrupts himself with “how could it be?” before arriving at this plain insistence. The pattern of denial and then affirmation mirrors his own confusion. “Nonetheless” concedes everything against the smile, the hunger, the dark hut, the brevity of the moment, and still holds on to it. Its power lies in its improbability.',
    },
    {
      text: 'the feeble smile that goes with apology',
      where: 'Line 55 (anthology p. 5)',
      analysis:
        "This is Alagiah's reading of the translator's answer, and it is the phrase to quote about the smile. “Feeble” suggests weakness of body and of spirit, and “apology” reverses the moral order of the scene: the starving man apologises to the well-fed visitor. Alagiah then likens it to the smile of someone who thinks they are at fault, which makes the injustice plain. Be exact: some revision notes say the text calls it a smile of embarrassment, but it does not. The word embarrassed comes first from the translator, describing the man; Alagiah takes it up again only in the question at lines 63-65, where it becomes the measure of how he himself should feel.",
    },
    {
      text: 'The journalist observes, the subject is observed.',
      where: 'Lines 59-60 (anthology p. 5)',
      analysis:
        'The sentence is built as a mirror, with the same verb in the active and then the passive voice. The grammar enacts the power relationship it describes: the journalist acts, the subject is acted upon. Alagiah follows it with an even plainer pair of opposites before the smile overturns the rule. The neatness is deliberate. It makes the arrangement look fixed and natural, so its reversal by one silent gesture is all the more startling.',
    },
    {
      text: 'between the rich world and the poor world',
      where: 'Line 63 (anthology p. 5)',
      analysis:
        'The last of three phrases beginning with “between”, each wider than the one before: the two men, then two groups, then two halves of the globe. The repetition of “world” makes the divide total, and the blunt adjectives rich and poor refuse to soften it. Here the extract stops being about one encounter and becomes an argument about global inequality, and the reader, wherever they are reading, is drawn into the question of which side they stand on.',
    },
    {
      text: 'my nameless friend',
      where: 'Line 73, the final sentence (anthology p. 5)',
      analysis:
        "Alagiah turns to address the man directly, bringing him into the present of the writing. “Friend” claims a closeness that a few seconds together could hardly have earned, while “nameless” admits the failure he has just confessed. The pairing holds the extract's tension between connection and distance in two words, and quietly concedes that the memoir, like the news before it, has left this man without a name.",
    },
    {
      text: 'I owe you one',
      where: 'Line 74, the last words of the extract (anthology p. 5)',
      analysis:
        'The extract ends on an everyday idiom, the phrase for a small favour between friends. The casual register is double-edged. It is warm and modest, refusing a grand moral conclusion, but it also exposes the gap between the size of the debt and the smallness of the phrase. Alagiah calls the meeting a formative moment in his understanding, and all he can offer in return is a sentence addressed to a man who, as the conditional clause just before it admits, may no longer be alive. Ending on a debt rather than a resolution leaves the reader holding it too.',
    },
  ],

  extracts: [
    {
      title: 'The search for the shocking',
      where: 'Paragraph 3, lines 8-15 (anthology p. 4)',
      pointer:
        'Lines 8-15 on page 4: the paragraph that opens “In the ghoulish manner of journalists” and ends with the viewers watching at home.',
      summary:
        'Alagiah and his cameraman go from hut to hut looking for the most striking pictures. He admits that what would have horrified them a few days earlier no longer does, compares the search for shocking images to a drug habit that needs ever larger doses, notes how quickly editors tire of pictures, and concedes that this sounds heartless before calling it a fact of life that produces the images viewers at home find so moving.',
      annotations: [
        {
          phrase: 'In the ghoulish manner of journalists',
          note: 'The plural “journalists” makes this a charge against the whole trade, and “ghoulish” gives it the connotation of feeding on the dead; he includes himself in the charge.',
        },
        {
          phrase: 'The search for the shocking is like the craving for a drug',
          note: 'The addiction simile explains the flatness of what follows: a reporter who has built up a tolerance describes horror without flinching, and knows that he does.',
        },
        {
          phrase: 'This sounds callous',
          note: "A short sentence that anticipates the reader's judgement and agrees with it before defending the trade as a fact of life; the double move is typical of his honesty.",
        },
      ],
      question:
        'How does Alagiah use language in lines 8-15 to present his feelings about his work as a journalist?',
    },
    {
      title: 'The smile and what it meant',
      where: 'Paragraphs 9 and 10, lines 46-56 (anthology p. 5)',
      pointer:
        'Lines 46-56 on page 5: from the paragraph in which Alagiah sees the face for only a few seconds to the end of the paragraph in which the translator explains the smile.',
      summary:
        'Alagiah at last describes the face: a meeting of eyes lasting seconds before the man withdraws into another hut. He insists there was a smile, from the man and not from him, which moves him beyond pity or disgust. Needing to understand it, he has his translator ask the man why he smiled. The answer, that the man was embarrassed to be seen as he was, makes Alagiah realise the smile was an apology.',
      annotations: [
        {
          phrase: 'how could it be?',
          note: "A question dropped into the middle of the sentence between dashes, as if Alagiah interrupts himself; it voices the reader's disbelief that anyone in such a state could smile for joy.",
        },
        {
          phrase: 'it was a smile nonetheless',
          note: 'After two denials, the plain statement insists on the fact; “nonetheless” admits every reason the smile should not exist and keeps it anyway.',
        },
        {
          phrase: 'the feeble smile that goes with apology',
          note: 'The revelation reverses the moral order of the scene: the victim apologises to the observer, and “feeble” suggests how little strength the famine has left him, perhaps in spirit as well as in body.',
        },
      ],
      question:
        "How does Alagiah use language and structure in lines 46-56 to show the importance of the man's smile?",
    },
    {
      title: 'The tables turned, and the debt',
      where: 'Paragraphs 11 to 13, lines 57-74 (anthology p. 5)',
      pointer:
        'Lines 57-74 on page 5: the last three paragraphs, from his admission that he had become hardened to suffering to the final sentence, which is addressed to the man.',
      summary:
        "Alagiah explains that he was used to suffering, yet this smile unsettled him as nothing had before. He sets out the unspoken rule that the journalist watches and the subject is watched, and shows how the smile reversed it by silently asking how he should feel, standing there healthy and self-assured. He resolves to write the story as powerfully as he can, regrets never learning the man's name, and ends by speaking to him directly.",
      annotations: [
        {
          phrase: 'The journalist observes, the subject is observed.',
          note: 'The active and passive forms of one verb make the grammar carry the power relationship, so its reversal two sentences later is felt as well as understood.',
        },
        {
          phrase: 'turned the tables on that tacit agreement',
          note: 'The idiom means a sudden reversal of positions, so the one who held the advantage loses it; “tacit” reminds us that the rule was never spoken, only assumed by the powerful side.',
        },
        {
          phrase: 'between the rich world and the poor world',
          note: 'The climax of a widening list of three; the encounter becomes a question about global inequality, and the reader is drawn into it.',
        },
        {
          phrase: 'power and purpose',
          note: 'The alliterative pair gives his resolution force and dignity, presenting good reporting as the only adequate answer he can give to the man.',
        },
        {
          phrase: 'my nameless friend',
          note: 'The direct address brings the man into the present; the pairing of closeness and anonymity sums up what Alagiah gained and what he failed to record.',
        },
      ],
      question:
        'How does Alagiah use language and structure in lines 57-74 to show how the encounter changed his view of his role as a reporter?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'List of adjectives',
      example: '“a thousand hungry, lean, scared and betrayed faces” (line 1)',
      effect:
        'The adjectives widen in meaning as they go, from physical need, to fear, to a sense of political betrayal. The list is a verbal wide shot, the crowd a television camera sees, and it sets up the problem the extract works through: how to see one person inside a number.',
    },
    {
      technique: 'Quotation of his own first-hand records',
      example:
        "The directions copied from his notebook, ending “like a ghost village” (lines 5-7), and the words of the broadcast he sent at the time about Habiba's death (lines 21-23)",
      effect:
        "These documents bring the reporter on the ground into the memoir beside the writer looking back, and lend it authenticity. The notebook's brisk, practical register, road directions and approximate timings, clashes with what it describes, which is part of what shocks. The ghost-village simile makes a living community sound already dead.",
    },
    {
      technique: 'Self-critical diction',
      example: '“ghoulish” (line 8) and “This sounds callous” (line 13)',
      effect:
        'Alagiah chooses the harshest words for his own behaviour before a reader can. The effect is to disarm criticism and win trust: he does not present himself as a hero of compassion, which makes his later change of heart more believable.',
    },
    {
      technique: 'Extended simile',
      example:
        '“The search for the shocking is like the craving for a drug” (lines 10-11), extended with the need for ever larger doses',
      effect:
        'Presenting news-gathering as an addiction explains the hardening he describes and spreads the responsibility. An addiction needs a supply and a demand, and the demand comes from the viewers at home and, by extension, from readers.',
    },
    {
      technique: 'Understatement and short declarative sentences',
      example:
        'The three-word sentence reporting that Habiba had died (line 20), followed by a list of what her death did not involve',
      effect:
        'Refusing to dramatise the death of a child is more shocking than any lament. The flat sentence mirrors the numbness of the hardened reporter and forces the reader to supply the grief the prose holds back.',
    },
    {
      technique: 'Repetition across a semicolon',
      example: '“It was rotting; she was rotting.” (line 29)',
      effect:
        'The balanced clauses move the same verb from the wound to the woman, so decay becomes her identity rather than her injury. Its brevity, after the long, detailed sentences before it, works like a blow.',
    },
    {
      technique: 'Sensory imagery of smell',
      example:
        "The smell that draws him to the old woman's doorway (line 25), and the smells of the feeding centre (lines 36-37)",
      effect:
        'Smell is a sense that television cannot transmit. By foregrounding it, Alagiah gives his readers exactly what his broadcasts could not, and makes the subject television avoids physically present on the page.',
    },
    {
      technique: 'Minor sentence and self-correction',
      example: '“pity and revulsion. Yes, revulsion.” (lines 33-34)',
      effect:
        'The fragment repeats the ugliest word and insists on it, as though the writer overrules his own reluctance. It gives the voice the rhythm of speech and confession, and it establishes the low point of his response so the smile can lift him beyond it.',
    },
    {
      technique: 'Negation before affirmation',
      example:
        'Two denials of what the smile was (lines 48-49), the interrupting “how could it be?”, and then “it was a smile nonetheless”',
      effect:
        "The sentence enacts Alagiah's search for the smile's meaning, clearing away wrong readings before insisting on the fact. The reader is made to wait, and to wonder, alongside him.",
    },
    {
      technique: 'Antithesis in the active and passive voice',
      example: '“The journalist observes, the subject is observed.” (lines 59-60)',
      effect:
        'A single verb, turned from active to passive, shows who holds power in the encounter. Because the rule is stated so neatly, its reversal by the smile is all the more striking.',
    },
    {
      technique: 'Tricolon with anaphora, widening in scale',
      example:
        'Three phrases beginning with between (lines 62-63), ending “between the rich world and the poor world”',
      effect:
        'The repeated preposition builds momentum while the scale grows from two men to two halves of the world. The private moment becomes a public argument about inequality.',
    },
    {
      technique: 'Rhetorical question',
      example:
        'The question that closes the paragraph at lines 63-65, asking how he ought to feel, standing there healthy and self-assured',
      effect:
        "It puts the man's silent question into words and leaves it unanswered on the page, so it passes to the reader, who is also looking.",
    },
    {
      technique: 'Direct address and colloquial idiom',
      example: '“my nameless friend” and “I owe you one” (lines 73-74)',
      effect:
        'Turning to speak to the absent man makes the ending personal and unresolved. The everyday idiom is modest and warm, but its smallness against the debt it names is what the reader remembers.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer use language and structure in the extract from A Passage to Africa to shock the reader?',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          "Open with a one-sentence argument, not a long introduction: Alagiah shocks through the calm with which he reports horror, then through his own confession, and finally through the man's apology.",
          "Begin with the opening: the list of adjectives in line 1 and the notebook's “like a ghost village”, showing how a casual register makes the horror more shocking.",
          'Move to the self-criticism of lines 8-15: “ghoulish” and the addiction simile. Part of the shock is that a journalist admits this about his own trade.',
          "Analyse the restraint in the account of Habiba's death and the balanced repetition of “It was rotting; she was rotting.” Explain why understatement shocks more than lament.",
          'Treat “pity and revulsion. Yes, revulsion.” as a shock of honesty: he says aloud what television never admits.',
          'Give the smile real weight: the shock that a starving man apologises, in “the feeble smile that goes with apology”, and the reversal of observer and observed that follows.',
          'Comment on structure throughout: the narrowing from a thousand faces to one, the single-sentence paragraph at line 32, the delay before the face is described at line 46, and the ending on regret rather than resolution.',
          'Finish on the effect on the reader, who is placed among the comfortable viewers at home, rather than with a summary of points already made.',
        ],
      },
      {
        question:
          'How does Alagiah use language and structure to present his changing thoughts and feelings about his work as a journalist?',
        skill: "Language and structure analysis, tracing the writer's thoughts and feelings",
        guidance: [
          'Chart the journey first: hardened professional (lines 8-15), honest witness (lines 33-45), unsettled man (lines 46-65), resolved writer (lines 66-68), indebted friend (lines 69-74).',
          'For each stage choose one short quotation and one technique: the addiction simile; the self-correcting minor sentence; the active and passive mirror of lines 59-60; the alliterative “power and purpose”; the direct address at the end.',
          "Pin down the turning point: the translator's answer, and why an apology from the man unsettles Alagiah more than any horror he has seen.",
          'Explore the double perspective: the older writer judging the younger reporter, visible in the quoted notebook and broadcast, and in his remark that his resolution seemed right then and still does.',
          'End with the ambiguity of the last paragraph: regret about the name sits beside the resolution, so his view of journalism is changed but not settled.',
        ],
      },
      {
        question:
          'Compare how the writers of A Passage to Africa and The Danger of a Single Story present the way outsiders see people who are suffering or poor. (In the exam the second text will be unseen; practise the skill with another anthology text.)',
        skill: 'Comparison of ideas and perspectives across two texts',
        guidance: [
          "Start with the writers' positions. Alagiah is the outsider with the camera, looking at people in a famine; Adichie has been both the one pitied, by her American roommate, and the one holding a single story of others: as a child, pitying Fide's family, and as an adult, about Mexicans, which she realised on her first day in Guadalajara.",
          'Compare their views of pity. Adichie presents pity as a response that shuts out any connection between equals; Alagiah admits to pity mixed with revulsion, and shows the smile moving him beyond both.',
          'Compare their self-criticism. Alagiah calls his own trade “ghoulish”; Adichie confesses her own single story of Mexicans and the shame it brought her. Both writers include themselves in the problem they describe.',
          "Compare their treatment of dignity. Adichie argues that stories can break or repair a people's dignity; Alagiah shows people struggling to keep theirs, and a man apologising for its loss.",
          'Compare form and audience: a spoken talk with humour and direct address to a live audience, against a written memoir with a controlled, reflective voice that ends by addressing one absent man.',
          'Balance your references across both texts in every paragraph, and compare as you go rather than writing about one text and then the other.',
        ],
      },
      {
        question:
          "Look again at lines 46-74. How does Alagiah use language and structure to present the importance of the man's smile?",
        skill: 'Close language and structure analysis of a section',
        guidance: [
          'Track how the meaning of the smile changes: an unexplained smile, a puzzle, an apology, a challenge to the rules of journalism, and finally a debt.',
          'Analyse the negation in lines 48-49, the interrupting “how could it be?”, and the phrase “the feeble smile that goes with apology”.',
          'Explain the reversal: the active and passive mirror of lines 59-60 and the idiom of turning the tables.',
          'Show the scale widening in the three between phrases, and the rhetorical question passed on to the reader.',
          "End with the regret and the direct address, and weigh whether writing the story with “power and purpose” really answers the man's question.",
        ],
      },
    ],
    tips: [
      "Pearson's examiners have singled out the smile as the part of this extract that separates the strongest answers from the rest. Spend real time on lines 46-65, and be exact about what the text says the smile was.",
      'Cover the whole extract. Examiner commentary on this text holds answers back for staying in the opening paragraphs, so choose references from the beginning, the middle and the end.',
      "Notice the tone. The best answers recognise how controlled, even detached, Alagiah's voice is, and the anger and embarrassment underneath it. The calm is a technique, not an absence of feeling.",
      "Do not retell the suffering. You gain nothing by describing Habiba's death or the old woman's wound in your own words; analyse how Alagiah's restraint makes them shocking.",
      'Quote the anthology, not the book or a website. The anthology cuts the text in three places, marked with ellipses (two of them fall straight after the mentions of the cameraman and the deposed dictator), and online versions differ. The phrase smile of embarrassment, found in some revision notes, is not in the text.',
      'Structure matters as much as language here: the narrowing from a crowd to one face, the run of paragraphs beginning “There was”, the single-sentence paragraph at line 32, the delay before the face is described, and the ending on regret.',
      'Keep the two Alagiahs apart: the reporter in Somalia, whose notebook and broadcast he quotes, and the writer looking back years later. Saying which one is speaking at a given moment is a quick route to perceptive comment.',
      'In the comparison question, look for a genuine point of contact with the unseen text, such as how an outsider looks at suffering or what writers feel about their own role, and keep your references balanced between the two texts.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer use language and structure in the extract from A Passage to Africa to shock the reader?',
    paragraph:
      "Alagiah's most shocking effects come less from horror itself than from the calm with which he reports it, and then from a confession the reader does not expect. The old woman's wound is summed up in a sentence balanced on a semicolon, “It was rotting; she was rotting”, in which the repeated verb slides from the wound to the woman, as if the famine has reduced a person to the state of her injury. Because Alagiah adds no comment, the reader is left to supply the horror he withholds. Yet the deeper shock is aimed at the reader's trust in the narrator. Having announced the face he will never forget, he delays, and admits that his feeling for everyone else was “pity and revulsion. Yes, revulsion.” The minor sentence sounds dragged out of him, and the repetition refuses to let the ugly word pass. Structurally, this delay matters: by confessing disgust before he describes the smile, Alagiah fixes the lowest point of his own response, so that when the man offers “the feeble smile that goes with apology” the reversal is complete. The final shock is moral rather than physical. The starving man apologises, and the reader, like Alagiah, is left to ask who should really feel ashamed.",
    commentary: [
      'It opens with an argument about how the extract shocks rather than a list of techniques, so every quotation serves a claim.',
      'It analyses at the level of the word and the sentence: the verb moving from wound to woman, the minor sentence, the adjective “feeble”.',
      'It treats structure as well as language, explaining why the delay between announcing the face and describing it matters, which is the whole-text understanding examiners reward.',
      "It deals with the smile, which Pearson's examiners identify as the feature that separates the strongest answers, and reads it precisely as an apology.",
      "It considers the reader's response, not only the writer's feelings, and ends on an insight rather than a summary.",
      'Its quotations are short and embedded in its own sentences, which keeps the analysis moving and every reference exact.',
    ],
  },

  timeline: [
    {
      where: 'Page 4, lines 1-7',
      title: 'A thousand faces, and the road to Gufgaduud',
      summary:
        'Alagiah remembers the countless starving faces he saw while crossing Somalia between late 1991 and December 1992, and says there is one he will never forget. He takes us to a hamlet just outside Gufgaduud, which the aid agencies had not yet reached, and copies out the directions from his notebook.',
      setting: 'Somalia, 1991-92: a remote hamlet outside the village of Gufgaduud',
      who: ['George Alagiah'],
      quote: 'a thousand hungry, lean, scared and betrayed faces',
      themes: ['Seeing one person in a crowd of suffering', 'Memory, regret and a debt'],
      tension: 2,
      significance:
        'The opening sets up the movement of the whole extract, from a crowd of faces to a single one.',
    },
    {
      where: 'Page 4, lines 8-15',
      title: 'The search for the shocking',
      summary:
        'Alagiah and his cameraman go from hut to hut looking for striking pictures. He admits they became hardened within days, compares the hunt for shocking images to a drug habit, and concedes that this sounds heartless before defending it as the way television gathers its images.',
      setting: 'The huts of the hamlet',
      who: ['George Alagiah', 'The cameraman'],
      quote: 'like the craving for a drug',
      themes: ['The ethics of reporting suffering', 'The rich world and the poor world'],
      tension: 2,
      significance:
        'His confession of hardness is the baseline against which the smile will later be measured.',
    },
    {
      where: 'Page 4, lines 16-31',
      title: "Amina's daughters and the wounded old woman",
      summary:
        'In flat, unsparing sentences Alagiah reports that Amina Abdirahman came back from searching for food to find that her ten-year-old daughter Habiba had died. He then describes an old woman left behind in her hut with a badly infected gunshot wound from the retreating army.',
      setting: 'Two huts in the hamlet',
      who: ['George Alagiah', 'Amina Abdirahman', 'The wounded old woman'],
      quote: 'It was rotting; she was rotting.',
      themes: ['Seeing one person in a crowd of suffering', 'Pity and revulsion'],
      tension: 4,
      significance:
        "The restraint of these paragraphs shows the hardened reporter's eye, and makes the suffering more shocking for being understated.",
    },
    {
      where: 'Page 4, lines 32-45 (running on to page 5)',
      title: 'The face announced, and a confession',
      summary:
        'A single-sentence paragraph announces the face he will never forget, but Alagiah holds it back. He admits that his reaction to everyone else was pity and revulsion, a feeling he says TV reports never admit, and that the pity came from watching people cling to dignity: an old woman covering herself, a dying man keeping his hoe.',
      setting: 'The hamlet, and the feeding centres Alagiah has known',
      who: ['George Alagiah'],
      quote: 'pity and revulsion. Yes, revulsion.',
      themes: ['Pity and revulsion', 'Dignity, shame and the apologetic smile'],
      tension: 3,
      significance:
        'The delay builds suspense and establishes the two feelings that the smile will go beyond.',
    },
    {
      where: 'Page 5, lines 46-56',
      title: 'The smile',
      summary:
        'For a few seconds Alagiah meets the eyes of a man before he withdraws into another hut, and the man smiles. It is neither a greeting nor a sign of joy, yet it moves Alagiah deeply. Through his translator he learns that the man was embarrassed to be seen like this, and understands the smile as an apology.',
      setting:
        'The hamlet: a brief glimpse before the man retreats into the darkness of another hut',
      who: ['George Alagiah', 'The man who smiled', 'The translator'],
      quote: 'the feeble smile that goes with apology',
      themes: [
        'Dignity, shame and the apologetic smile',
        'Seeing one person in a crowd of suffering',
      ],
      tension: 4,
      significance:
        "The emotional centre of the extract: the victim apologises, and the reader shares Alagiah's shock.",
    },
    {
      where: 'Page 5, lines 57-65',
      title: 'The tables turned',
      summary:
        'Alagiah sets out the unspoken rule of his work: the journalist watches and acts, the subject is watched and passive. The smile reverses it, silently asking what lies between the two men, between two groups and between the rich and poor worlds, and how he should feel standing there so healthy.',
      setting: 'The hamlet, as the older writer reflects on it',
      who: ['George Alagiah', 'The man who smiled'],
      quote: 'The journalist observes, the subject is observed.',
      themes: ['The ethics of reporting suffering', 'The rich world and the poor world'],
      tension: 5,
      significance:
        'The moral climax, in which the observer becomes the observed and the reader is implicated.',
    },
    {
      where: 'Page 5, lines 66-74',
      title: 'A resolution, a regret and a debt',
      summary:
        "Alagiah resolves to tell the story of Gufgaduud as powerfully as he can, which still seems to him the only adequate answer. But he regrets that he never learned the man's name, and ends by addressing him directly and acknowledging a debt.",
      setting: 'Gufgaduud, where he makes his resolution, and years later, as Alagiah looks back',
      who: ['George Alagiah', 'The man who smiled'],
      quote: 'I owe you one',
      themes: ['Memory, regret and a debt', 'The ethics of reporting suffering'],
      tension: 2,
      significance:
        'The ending refuses a neat moral: good reporting answers the man, but the missing name shows the answer is incomplete.',
    },
  ],

  relationships: [
    {
      from: 'George Alagiah',
      to: 'The man who smiled',
      kind: 'journalist and subject; observer and observed',
      note: 'The smile reverses their roles: the silent, starving man raises the question, and Alagiah is the one exposed. Their meeting lasts seconds but reshapes his view of his work.',
    },
    {
      from: 'George Alagiah',
      to: 'The translator',
      kind: 'reporter and interpreter',
      note: "The translator carries Alagiah's question to the man and brings back the answer that explains the smile, so the man's meaning reaches Alagiah second-hand.",
    },
    {
      from: 'The translator',
      to: 'The man who smiled',
      kind: 'go-between',
      note: "The only exchange with the man happens through him; the man's own words never appear directly.",
    },
    {
      from: 'George Alagiah',
      to: 'The cameraman',
      kind: 'colleagues',
      note: 'They hunt for pictures together, so the self-criticism of the third paragraph applies to a team and a trade, not to one man.',
    },
    {
      from: 'George Alagiah',
      to: 'Amina Abdirahman',
      kind: 'reporter and a mother whose loss he recorded',
      note: "He names her and both her daughters and described Habiba's death in his report at the time; to him she is a person, not only an image.",
    },
    {
      from: 'George Alagiah',
      to: 'The wounded old woman',
      kind: 'witness and a woman left behind',
      note: 'Drawn by the smell of her wound, he records her suffering with detachment; only afterwards does he admit that his reaction to everyone he met that day, the man who smiled apart, was pity mixed with revulsion.',
    },
  ],

  compareWith: [
    {
      title: 'The Danger of a Single Story',
      href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
      reason:
        "Adichie warns against seeing Africa only through catastrophe and pity; set her beside a BBC reporter who admits the media's hunger for shocking images and is moved beyond pity by one man's smile.",
    },
    {
      title: "The Explorer's Daughter",
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Kari Herbert is another outsider watching a hard scene, a narwhal hunt near Thule in North Greenland, an area where she had lived as a small child and revisited in 2002, and she weighs her own thoughts and feelings about it, which makes a close match for comparing perspectives.',
    },
    {
      title: '127 Hours: Between a Rock and a Hard Place',
      href: '/igcse/edexcel-lang/anthology/127-hours',
      reason:
        "Ralston writes suffering from inside his own body while Alagiah writes as a witness to other people's, which sharpens any comparison of how writers make pain real to a reader.",
    },
  ],

  contentGuidance: ['mortality', 'violence'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 4-5: the prescribed text, read in full on 25 September 2026. Every quotation, line number, paragraph division and page reference in this guide, the headnote (the special award) and the three glosses were checked against it. Paragraph breaks were confirmed from the vertical spacing of the printed lines.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The same document, Acknowledgements (page 71): text from A Passage to Africa, Abacus, 2007, pp. 87-90, copyright George Alagiah 2001, reproduced by permission of Little, Brown Book Group Limited and the author c/o The Hanbury Agency Ltd. Source of the acknowledgement and the 2001 date. Pages 2-3 and 6 of the same document were read for the comparison notes on Adichie and Herbert.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Classicalia, A Passage to Africa interactive text: a second, independent check that fifteen of the quoted phrases appear in the same form.',
      url: 'https://classicalia.co.uk/english/interactive/alagiah/index.html',
    },
    {
      label:
        'Pearson, Exemplar responses, Summer 2023, International GCSE English Language A Component 1, the question on A Passage to Africa: the examiner view that the smile is the discriminator, that answers should range over the whole passage and recognise its detached tone, and that close reading of the ghost-village phrase was credited. As summarised in src/lib/marking/examiner/calibration/pearson-4ea1-p1-published.ts.',
    },
    {
      label:
        "Wikipedia, George Alagiah: born Colombo 22 November 1955; Ghana 1961; St John's College, Portsmouth; politics at Durham; joined the BBC 1989; BBC News at Six; died July 2023.",
      url: 'https://en.wikipedia.org/wiki/George_Alagiah',
    },
    {
      label:
        'The New Arab, obituary (24 July 2023): Colombo 1955, Ghana 1961, BBC foreign correspondent covering civil war in Somalia among other conflicts. Sources differ on the day of death (23 or 24 July), so the guide gives only the year.',
      url: 'https://www.newarab.com/news/renowned-bbc-newsreader-george-alagiah-dies-aged-67',
    },
    {
      label:
        'South Asian Britain: Connecting Histories, George Alagiah: joined the BBC in 1989; Africa correspondent covering famine in Somalia; A Passage to Africa published by Little, Brown in 2001. Its account of his awards differs from other sources, so the guide names none beyond the anthology headnote.',
      url: 'https://southasianbritain.org/people/george-alagiah/',
    },
    {
      label:
        'Little, Brown (Hachette UK), A Passage to Africa, Abacus edition, published 6 December 2007.',
      url: 'https://www.littlebrown.co.uk/titles/george-alagiah/a-passage-to-africa/9780349120782/',
    },
    {
      label:
        "Wikipedia, 1992 famine in Somalia: drought and war as causes; Barre's retreating army plundered the farming inter-riverine region; most international media noticed after the peak in deaths had passed.",
      url: 'https://en.wikipedia.org/wiki/1992_famine_in_Somalia',
    },
    {
      label: 'Wikipedia, Siad Barre: fled Mogadishu on 26 January 1991.',
      url: 'https://en.wikipedia.org/wiki/Siad_Barre',
    },
  ],
}
