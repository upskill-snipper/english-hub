import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Night, Alice Munro (2012). A complete guide: the text had only a placeholder
 * page, and that placeholder described a different story.
 *
 * WHAT WAS WRONG BEFORE. The set-text registry credited this title to Bernard
 * MacLaverty and summarised a plot that is in neither writer's story. The
 * anthology prints Alice Munro's Night, from Dear Life (2012). Nothing from the
 * old row or the old placeholder page has been reused.
 *
 * THE TEXT. Every quotation and every line reference was copied from and
 * checked against the story as the student studies it: pages 44-49 of the
 * Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026),
 * Part 2, read from Pearson's own PDF on 25 September 2026. The story runs to 259
 * lines, and all fifty-one margin numbers matched a sequential count. Page
 * breaks fall after lines 44, 89, 139, 188 and 233. The Issue 8 change list
 * records no changes to this text.
 *
 * THE ANTHOLOGY VERSION IS SHORTENED. Ellipses appear at eight points (lines 12,
 * 29, 32, 48, 50, 61, 128 and 156), and published quotations from Dear Life
 * (Peng 2015, in sources) include sentences the anthology does not print, so at
 * least some of those ellipses mark cuts. Nothing here quotes the book where it
 * differs, and nothing claims to know what was cut. The Part 2 acknowledgements
 * (p. 72) say "The story on p.46"; the contents and the running page numbers
 * both put it at pp. 44-49, and those are followed here.
 *
 * The story is in copyright and the anthology printing is 3,667 words long, so
 * the page is held to the 400-word total for a longer work (fair-dealing.ts).
 * The guide works from a fixed set of short phrases and reuses them.
 *
 * The anthology keeps Munro's North American spellings (it footnotes
 * "neighbors"). Quotations keep them; the guide's own prose is British English.
 */

const T_SILENCE = 'Silence and what goes unsaid'
const T_MIND = 'A mind afraid of itself'
const T_FATHER = 'A father’s understanding'
const T_MEMORY = 'Memory and hindsight'
const T_GROWING = 'Growing up'
const T_STRANGE = 'The familiar made strange'

const NARRATOR = 'The narrator'
const CATHERINE = 'Catherine'
const FATHER = 'The father'
const MOTHER = 'The mother'
const DOCTOR = 'The doctor'

export const guide: StudyGuide = {
  slug: 'night',
  title: 'Night',
  author: 'Alice Munro',
  form: 'short-story',
  scope:
    'Night by Alice Munro, as printed on pages 44-49 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, for English Language A. The anthology prints the story from Dear Life (2012) in a shortened form, in 259 numbered lines, with ellipses at eight points. Line and page references in this guide follow that printing. The anthology version is the prescribed text: study and quote it, not the book.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Alice Munro 2012. From Dear Life: Stories, Chatto & Windus, 2012, pp. 271-285. As printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), where it is reproduced by permission of The Random House Group Limited, Alfred A. Knopf (Penguin Random House LLC) and Penguin Random House Canada Limited. Quoted here in short extracts for criticism and review.',
  },
  workLength: {
    words: 3667,
    basis:
      'Counted from the story as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pp. 44-49, extracted from Pearson’s PDF with the title, author line, running heads, page footers, margin line numbers and the footnote removed: 259 lines, 3,667 space-separated words containing a letter or digit. Counting each part of a hyphenated word separately, as the quotation counter does, gives 3,670; the lower figure is recorded. Either way the anthology text is over 3,000 words, so the page is held to the 400-word total for a longer work.',
  },

  overview: {
    summary: [
      'Night is a short story by the Canadian writer Alice Munro, the second of four autobiographical pieces that close her last collection of new stories, Dear Life (2012). An old woman looks back at one summer when she was fourteen, living with her family in a house too far from town for streetlights, where her father keeps livestock. It begins in winter, with an emergency in a blizzard: the neighbours’ horses take her to hospital, and the doctor removes her appendix and, as her mother tells her later, a growth the size of a turkey’s egg. Nobody says the word cancer, and the narrator never finds out what the growth was.',
      'In June, excused from her exams and from most of the housework, she drifts through the days and begins to lie awake at night. Sleeplessness turns into something worse: a thought, unwanted and without any motive, that she could strangle her nine-year-old sister Catherine, asleep in the bunk below, whom she loves more than anyone. To get away from it she creeps out of the house each night and walks round the dark lawns until the birds start singing and the sky begins to whiten.',
      'One night she finds her father sitting on the kitchen stoop, dressed as if for town and smoking a cigarette he has rolled himself. He asks whether she is having trouble sleeping, and she tells him, almost the whole truth. He answers calmly that people have thoughts like that sometimes, puts it down to the ether she was given in hospital, and does not treat her as strange. From then on she can sleep.',
      'The story is more than an anecdote because it sees with two pairs of eyes at once: the fourteen-year-old’s terror and the old woman’s hindsight. The narrator keeps admitting what she cannot remember, compares then with now, and in the last paragraph turns the story round. Why was her father up before dawn in his better clothes? Perhaps a meeting at the bank about his loan, perhaps news of what was wrong with her mother, perhaps a love he could do nothing about. The father who ended her nights may have been in the middle of one of his own, and she can only guess.',
      'The central question for an answer is what cures her. One reading is that her father’s wisdom does. The stronger reading, because the whole story leads to it, is that what cures her is speaking: a family that names nothing finally hears one frightening thing said aloud, and meets it without alarm.',
    ],
  },

  context: [
    {
      heading: 'Alice Munro (1931-2024)',
      body: 'Alice Munro was born Alice Ann Laidlaw on 10 July 1931 in Wingham, Ontario, the eldest child of Robert Eric Laidlaw, a fox farmer, and Anne Clarke Chamney Laidlaw, a former schoolteacher. Munro is her married name, from her first husband, James Munro. She made her name almost entirely with short stories, most of them set in and drawn from Huron County in south-western Ontario, the countryside she grew up in. Her first collection, Dance of the Happy Shades (1968), won the Governor General’s Award. She received the Man Booker International Prize in 2009 and the Nobel Prize in Literature in 2013, when the Swedish Academy called her the “master of the contemporary short story”. She died at her home in Port Hope, Ontario, on 13 May 2024, aged 92.',
    },
    {
      heading: 'Dear Life and its Finale',
      body: 'Dear Life was published in 2012, by Chatto & Windus in Britain, Knopf in the United States and McClelland & Stewart in Canada. It was Munro’s last collection of new stories: by 2013 she had said she had stopped writing. Its last four pieces, The Eye, Night, Voices and Dear Life, are grouped under the heading Finale. In a short note before them Munro calls them “not quite stories” and describes them as “autobiographical in feeling, though not, sometimes, entirely so in fact”, adding that they are the closest things she has to say about her own life. That note is the key to reading Night. It invites you to hear Munro’s own childhood in the story, while warning that some details have been changed. In an exam, call the speaker the narrator rather than Munro, and treat the story as a made thing whose choices you can analyse.',
    },
    {
      heading: 'First published in an issue about medicine',
      body: 'Before it appeared in Dear Life, Night was published in the literary magazine Granta, in issue 120, whose theme was medicine, in 2012. A reviewer of that issue for the Canadian Medical Association Journal, Debra Martens, singled it out as the most unsettling of its memoirs and read it as a story about expectations and fear. The medical setting is worth keeping in mind: the story opens with surgery, turns on a growth that nobody will name, and ends with a father offering something like a doctor’s reassurance, complete with a medical cause.',
    },
    {
      heading: 'Rural Ontario in the 1940s',
      body: 'Munro’s parents farmed just west of Wingham, beside the low-lying district known as Lower Wingham, and the world of the story is recognisably that kind of place, although the story names no town. The narrator says horses were still kept for emergencies because of “the war and gas rationing”. Canada began rationing petrol (gas, in North American English) with coupons in April 1942, during the Second World War, so the opening places her childhood in the war years. The details of the house are those of a working family on the edge of the country: livestock on the premises, a pump handle, a clothesline, overalls, a handgun in the father’s desk drawer, washing hung out from the kitchen stoop, and no streetlights because they live too far from town.',
    },
    {
      heading: 'Money and illness in Munro’s own family',
      body: 'Two facts from Munro’s life shed light on the last paragraph of the story. In the early 1940s her father’s fur business began to falter, and he eventually closed it and took a job on the night shift at the local foundry. By the summer of 1943, as she was turning twelve, her mother was showing the advancing symptoms of Parkinson’s disease; she died in 1959. The narrator of Night imagines her father learning that the bank would not extend his loan, or that there was a name for her mother’s “shakiness” and that it was not going to stop. Readers who know Munro’s life will hear both facts behind those guesses. The story itself names neither the business nor the illness, which fits a family in which serious things go unnamed.',
    },
    {
      heading: 'Ether, surgery and a word nobody said',
      body: 'Ether was one of the first general anaesthetics. Its use in surgery was first demonstrated publicly in Boston on 16 October 1846, and the story shows it still in use in the narrator’s childhood. When the father puts his daughter’s thoughts down to “the ether”, months after her operation, he is reaching for a physical cause that makes the thought nobody’s fault. The opening is just as much about the medicine of the time. The mother reports the growth but never says what it might have been, and the narrator comments that today there would be questions at once about whether it was cancerous or benign. Later she says that if it were happening today her father might have made an appointment for her with a psychiatrist. The story keeps measuring the silences of the past against the habits of the present.',
    },
    {
      heading: 'Intrusive thoughts',
      body: 'What the narrator describes is close to what doctors now call intrusive thoughts. The NHS describes obsessions as unwanted, intrusive and often distressing thoughts, images or urges, and lists a fear of deliberately harming others among the common ones. The story never gives her experience a medical name, and an exam answer should not diagnose a character. The useful point for analysis is how Munro presents the thought: unwanted, without motive, resisted, and losing its hold once it is said to someone who does not panic. If thoughts like these ever trouble you, telling someone you trust is the right step, as it is for the narrator. A GP, a school counsellor or another trusted adult can help.',
    },
    {
      heading: 'Discipline, and being too smart',
      body: 'The narrator records, briefly and without self-pity, that her father used “the razor strap or his belt” on her, and that the reason people gave for such punishments then was that a child thought she was “too smart”. She notes that this was said often in those times, and presents it as ordinary in her world rather than as a scandal. Biographical accounts record that Munro’s own father beat her as a child, and the critic Lisa Dickler Awano has traced how the father’s violence recurs across the Finale pieces. The jeer the narrator hears in her head on sleepless nights, “So who do you think you are, then?”, is the same everyday put-down Munro chose as the title of her 1978 collection, Who Do You Think You Are?, which was published in Britain and the United States as The Beggar Maid.',
    },
    {
      heading: 'North American English in the anthology',
      body: 'Munro was Canadian, and the anthology keeps her North American spellings and words. It footnotes “neighbors” (line 10) as the American spelling of neighbours, and you will also meet “somber” (line 14), “skillfully” (line 31) and “pants” (line 170), which means trousers. Gas means petrol, a stoop is the small porch or step at a door, and a “public school” (line 142) is an ordinary state school, not a fee-paying one as the phrase can mean in Britain. Copy the spellings exactly when you quote, and write British English in your own sentences.',
    },
  ],

  themes: [
    {
      title: T_SILENCE,
      body: 'Night is built on things nobody says. The mother reports the growth and closes the subject in the same breath, “But don’t worry, she said, it’s all over now.”, and the narrator explains the family’s failure to ask by saying that “there must have been a cloud around that word”. She hides her own night difficulties, so nobody offers help. Even greetings are thought unnecessary in this family, which is why her father’s good morning feels so strange. When she finally speaks, the truth comes out “with only the slightest modification”, and her father answers in a handful of words. The last paragraph shows the silence running the other way: she never learns why he was awake. One reading is that the silence harms, leaving a fourteen-year-old alone with a terrifying thought. The other is that silence is also this family’s way of caring, and that the father’s few calm words work because they are few. The story holds both, but its shape favours the first: the girl is released only when something is finally said aloud.',
    },
    {
      title: T_MIND,
      body: 'The horror of Night is not violence but the discovery that a mind can produce a thought its owner hates. Munro builds the fear in stages: sleeplessness, then rhymes and poetry that turn into “the silliest random speech”, then the flat one-line admission “I was not myself.” If she ever acted on the thought, she says, it would be “not for jealousy, viciousness, or anger” but out of madness, and that madness is pictured as lazy and teasing, as if it were a separate creature lying beside her. The worst of it is where it happens: “Here in the most familiar place”, the room where the sisters have always felt safe. One reading is that the thought is a symptom of her strange, idle summer, a mind with nothing to do turning on itself. Another links it to the unspoken growth: a fear of something inside her body that nobody would name returns as a fear of something inside her mind that she cannot name either. The story never states that link, but its structure, opening with the growth and moving straight to the nights, invites it.',
    },
    {
      title: T_FATHER,
      body: 'The father’s response is the turning point of the story, and Munro makes it memorable by making it ordinary. He asks a practical question, calls one of his own questions a “Stupid question”, and then says “People have those kinds of thoughts sometimes.” He does not interrogate her or promise that she is safe; he simply takes it for granted that such a thing could not happen, like a meteor hitting the house. The narrator’s judgement is that what he did worked, because it set her down “without either mockery or alarm, in the world we were living in”. Yet Munro does not let him become a saint. A few lines later the narrator records his razor strap and belt, and his likely view that a mouthy child needed curbing. One reading is that the story is a simple tribute. The stronger reading is that it is a portrait of a man capable of both harshness and exactly the right words, drawn by a daughter who, grown old and a parent herself, can see both.',
    },
    {
      title: T_MEMORY,
      body: 'The story is told by an old woman, and she never pretends to remember perfectly. Her sentences are full of “must have”, “maybe” and “perhaps”; she cannot say whether the night she met her father was “the twentieth or the twelfth” or earlier still; and she admits she was to forget her father’s words soon enough. Hindsight is also what gives the story its depth. Only the older narrator can judge that her father’s calm “worked as well” as a psychiatrist might have, and only she can wonder, decades later, what brought him to the stoop. One reading is that the uncertainty weakens the story as a record of what happened. The more convincing reading is the opposite: by showing the joins in her memory, the narrator earns the reader’s trust, and the few things she is sure of, above all her father’s words, stand out. That is what Munro meant, one might argue, by calling these pieces true in feeling if not always in fact.',
    },
    {
      title: T_GROWING,
      body: 'The narrator is fourteen, “too old for such fooling” as threatening to spit on her sister, and caught between childhood and the adult world. Her illness gives her an odd freedom: nobody tells her to put her light out, and she spends June “wandering about like a visitor” in her own home. At first she feels this as “a liberation”, then as something disturbing, and the jeer “So who do you think you are, then?” turns from routine teasing into a real question about who she is. The adult world arrives through her father. In the last paragraph she recognises, only in hindsight, that adults have their own sleepless reasons: debt, illness, perhaps a hopeless love. One reading is that the story is about a girl being rescued back into childhood. A stronger one is that it ends with her stepping into adulthood, because the price of being set down in the real world is knowing that it holds troubles her father cannot talk about either.',
    },
    {
      title: T_STRANGE,
      body: 'Munro turns the safest place a child knows into the setting for fear. At night the house becomes “a stranger place”: without people and their work, the furniture seems to retreat into itself. Outside, the trees she knows by name are “all intensely black”, and she has to learn her way round the pump handle and the clothesline in the dark. The bedroom, “the most familiar place”, is where the thought comes. Against this Munro sets the morning and the town. By day the night seems “Absurd.”, the washing smells “fresh and congratulatory”, and from the stoop she looks towards town to “inhale the sanity of it”, imagining people getting up to go to their shops and unlock their doors. One reading is that night stands for the hidden side of the mind and day for the ordinary life that keeps it in check. The father belongs to both: she meets him at a threshold, on the stoop between house and yard, at the moment when night is turning into morning.',
    },
  ],

  characters: [
    {
      name: NARRATOR,
      role: 'An old woman remembering herself at fourteen',
      body: 'The narrator is never named. She tells the story as an elderly woman who has been a parent, looking back on a summer when she was fourteen and slept in the top bunk, five years older than her sister. As a girl she is clever, a reader, a teller of hair-raising stories and a tease, who mowed the lawns herself to give the family some respectability, and who is so used to keeping things to herself that she tells nobody about her nights. The thought that terrifies her comes unasked, and her response to it is responsible, even brave: she gets up and leaves the room rather than risk anything. As an old woman she is honest about the limits of her memory, dry about her younger self and fair to her father. Readers often identify her with Munro, and the Finale note encourages that, but an answer is on safer ground calling her the narrator. The two selves share one voice, and much of the story’s power comes from the gap between them.',
    },
    {
      name: CATHERINE,
      role: 'The narrator’s younger sister, aged nine',
      body: 'Catherine sleeps in the bottom bunk. She is named at line 41, almost as an aside, and again as “little Catherine” at line 218, the moment their father hears what the narrator fears. The narrator admits that she used to torment her, threatening to spit on her face and then spitting or pretending to, and also played counsellor and storyteller to her; Catherine is not helpless, and has her own friends and games. By day the sisters swing in the hammock, one at either end, a picture of ordinary closeness. Catherine never knows what her sister feared, and that is the point: the danger exists only in the narrator’s mind, while the real Catherine sleeps through the whole story. The narrator says she loved her more than anybody in the world, which is what makes the thought so unbearable.',
    },
    {
      name: FATHER,
      role: 'A working man under strain, who finds his daughter awake at dawn',
      body: 'The father keeps livestock, has a handgun in his desk drawer, rolls his own cigarettes and, the narrator thinks, sold a woodlot to pay for her operation. He is not demonstrative: in this family even good morning is unusual. He must have heard her on earlier nights, and one reading is that he came out to the stoop on purpose, letting her speak first. When she tells him, his reply is short, calm and practical, and it frees her. But the narrator also records that he used a razor strap or belt on her, and that he would probably have seen this as the right way to deal with a mouthy child. At the end he becomes a mystery in his own right: why was he up before dawn in his better clothes? The narrator’s guesses, a refused loan, her mother’s illness, an impossible love, suggest a man carrying far more than he ever says.',
    },
    {
      name: MOTHER,
      role: 'The narrator’s mother, whose illness is beginning',
      body: 'The mother tells the narrator about the growth, alone with her in the kitchen one Saturday morning, and closes the subject at once: don’t worry, it is all over now. She is socially careful: she would say maid where everyone else said hired girl. In June, the narrator supposes, she must still have been “well enough, as yet” to do most of the housework, and the phrase “as yet” quietly warns that this will change. In the last paragraph the narrator wonders whether her father had just learned that there was a name for her mother’s shakiness. The mother stays in the background, but her silence about the growth and her failing health frame the whole story: the first and last things we hear about her both involve an illness nobody names.',
    },
    {
      name: DOCTOR,
      role: 'The doctor who operates',
      body: 'The doctor is waiting when the neighbours’ horses bring the narrator in through the blizzard, and to nobody’s surprise he takes out her appendix. He also removes a growth, which was what really concerned him, and it is from her mother, not from him, that the narrator hears of it. He is a minor figure, but he starts the chain of events: the operation gives her an odd invalid status, and the ether used in hospital is the explanation her father later offers for her thoughts.',
    },
  ],

  keyQuotes: [
    {
      text: 'A growth, my mother said, the size of a turkey’s egg.',
      where: 'The mother, reported by the narrator, lines 22-23 (p. 44)',
      analysis:
        'The news arrives in a broken-up sentence: the noun “growth” is held apart from what follows by the interrupting “my mother said”, as if even reporting it needs a pause. The homely comparison with a turkey’s egg makes a frightening fact sound domestic, a farm-kitchen way of measuring. The narrator later calls it “the mysterious turkey egg”, and the mystery is the point: its size is given, its nature never is.',
    },
    {
      text: 'But don’t worry, she said, it’s all over now.',
      where: 'The mother, reported by the narrator, line 24 (p. 44)',
      analysis:
        'Set as a paragraph of its own, the reassurance closes the subject as soon as it opens. The speech has no quotation marks, which blurs the mother’s voice into the narrator’s memory. Its comfort is double-edged: “all over” sounds final, but the summer that follows shows that nothing is over. Compare the father’s instruction not to worry at line 220, which works where this one does not.',
    },
    {
      text: 'there must have been a cloud around that word',
      where: 'The narrator, lines 28-29 (p. 44)',
      analysis:
        'The word is cancer, which the narrator has just said never entered her head. The metaphor of a cloud suggests something both hidden and threatening, a word so dark that nobody could look at it directly. The words “must have” show the older narrator reasoning about her past rather than remembering it, and the ellipsis that ends the sentence in the anthology leaves it, like the subject, unfinished.',
    },
    {
      text: 'wandering about like a visitor',
      where: 'The narrator, line 59 (p. 45)',
      analysis:
        'The simile makes her an outsider in her own home. A visitor has no jobs and no place, and in a family where every moment is normally filled with work, that lack of use is unsettling. It prepares for the “uselessness and strangeness” she names two lines later, and for the nights when the house itself becomes a stranger place.',
    },
    {
      text: 'I was not myself.',
      where: 'The narrator, line 83 (p. 45)',
      analysis:
        'Four words given a paragraph of their own, after a passage in which poetry turns into “the silliest random speech”. The idiom is ordinary, and the narrator says she had heard it said of people all her life without thinking what it could mean. Now she takes it literally: there seems to be another self inside her. The white space around the line gives the reader a moment of the same shock.',
    },
    {
      text: 'So who do you think you are, then?',
      where: 'A remembered jeer, line 86 (p. 45)',
      analysis:
        'An everyday put-down aimed at a child who is getting above herself, which the narrator says she used to hear as routine jeering. Recalled in the dark, with no speaker and no quotation marks, it becomes a real question about identity. The one-line paragraph that follows soon after, “Think again.”, sounds like a voice answering her, so the reader feels the mind beginning to talk to itself.',
    },
    {
      text: 'The more I chased the thought away, the more it came back.',
      where: 'The narrator, line 97 (p. 46)',
      analysis:
        'The balanced structure, the more followed by the more, traps the sentence in a loop, just as the thought traps her. The verb “chased” makes the thought an animal that returns however often it is driven off. It is also psychologically exact: trying not to think of something keeps it in mind, which is why her effort to fight it off only seems to make it stronger.',
    },
    {
      text: 'whom I loved more than anybody in the world',
      where: 'The narrator, of her sister, line 103 (p. 46)',
      analysis:
        'This clause ends the very sentence that names the thought of strangling her sister, and the juxtaposition is the heart of the horror. The superlative leaves no doubt about her love. Munro places love and the worst possible act side by side without comment, which shows that the thought has nothing to do with the narrator’s real feelings, and that this is exactly what makes it so frightening.',
    },
    {
      text: 'Why not try the worst?',
      where: 'The narrator, voicing the thought, line 108 (p. 46)',
      analysis:
        'The rhetorical question gives the thought a voice of its own, casual and almost playful, as if madness were suggesting a game. The next paragraph opens by repeating “The worst.” as a fragment, the narrator turning the words over in horror. The lightness of the wording set against the enormity of what it means is what makes the passage so chilling.',
    },
    {
      text: 'maybe just to inhale the sanity of it',
      where: 'The narrator, at the kitchen stoop, line 161 (p. 47)',
      analysis:
        'The verb “inhale” makes sanity something physical, like fresh air, drawn in from the direction of town. The town stands for ordinary, busy, sensible life: shops to go to, doors to unlock, milk bottles to take inside. “Maybe” shows the older narrator guessing at her younger self’s motives. It is at this same stoop, looking the same way, that she will find her father.',
    },
    {
      text: 'Having trouble sleeping?',
      where: 'The father, line 188 (p. 47)',
      analysis:
        'His first question after good morning is short, practical and deliberately mild. He must know she has been up on many nights, yet he offers an ordinary explanation she can accept without shame, and the understatement gives her a way in. Apart from the single word the narrator gives when listing her surgeries, it is the first speech in quotation marks in the story, which makes the father’s voice sound sudden and real.',
    },
    {
      text: 'People have those kinds of thoughts sometimes.',
      where: 'The father, line 220 (p. 48)',
      analysis:
        'Plain words, no drama. The general noun “People” turns the narrator’s private horror into something shared by everyone, and “sometimes” makes it occasional rather than permanent. The line follows his single word “Well.” and his instruction not to worry, so the rhythm is slow and steady. The narrator stresses that he spoke seriously and without alarm, and that calm is what releases her.',
    },
    {
      text: 'without either mockery or alarm, in the world we were living in',
      where: 'The narrator, lines 234-235 (p. 49)',
      analysis:
        'The narrator’s own verdict on her father’s response. The two nouns name the two things a frightened child dreads, being laughed at or being treated as dangerous, and he avoided both. The phrase “the world we were living in” matters too: he did not lift her out of ordinary life into a doctor’s care but put her back into it.',
    },
    {
      text: 'Or that he was in love with an impossible woman.',
      where: 'The narrator, lines 257-258 (p. 49)',
      analysis:
        'The last of three guesses about why her father was awake, the second and third each introduced by “Or”, and the most startling. After debt and illness it opens a private life the daughter can only guess at. It is phrased as speculation and never answered, so the reader must decide how seriously to take it. Either way, it turns the father from rescuer into a man with troubles of his own.',
    },
    {
      text: 'Never mind. From then on I could sleep.',
      where: 'The narrator, the final line, line 259 (p. 49)',
      analysis:
        '“Never mind” brushes aside the questions the previous paragraph raised, as if the old woman were closing a door on them. The final sentence is plain and complete, unlike the tangled, hedged sentences of the nights. The abrupt ending mirrors the father’s method: a few calm words, and the matter is closed. Whether that closure is peace or one more silence is left to the reader.',
    },
  ],

  extracts: [
    {
      title: 'The thought',
      where: 'Lines 90-111 (p. 46)',
      pointer:
        'Lines 90-111: from the paragraph at line 90, where the narrator says she is no longer trying to sleep, to the end of the paragraph at line 111.',
      summary:
        'The narrator no longer hopes for sleep; she is fighting something that seems to be taking hold of her, and it tells her that acts need no reason and that she need only give in. Then the thought itself arrives: that she could strangle the little sister asleep below her, whom she loves more than anyone. She insists that if she did it, it would be from no jealousy or anger but from a lazy, teasing madness, in the room where the sisters have always felt safest.',
      annotations: [
        {
          phrase: 'It was informing me that motives were not necessary.',
          note: 'The thought is personified as a speaker passing on information, cool and official in tone, as though it were a separate voice inside her that reasons rather than shouts.',
        },
        {
          phrase: 'It was only necessary to give in.',
          note: 'The word necessary is repeated across two sentences and a paragraph break, so the logic feels like a trap closing on her one step at a time.',
        },
        {
          phrase: 'an utterly cold deep thought',
          note: 'The adjectives suggest something calm and bottomless rather than hot-tempered, which is why it frightens her more than anger would. It is described as hardly an urging at all.',
        },
        {
          phrase: 'whom I loved more than anybody in the world',
          note: 'Love and the worst possible act are placed in a single sentence with no comment between them, so the reader feels the contradiction exactly as the narrator does.',
        },
        {
          phrase: 'A lazy, teasing, half-sluggish suggestion',
          note: 'Three adjectives make the madness sound idle and playful rather than savage, and teasing echoes the narrator’s own teasing of her sister earlier in the story.',
        },
        {
          phrase: 'Here in the most familiar place',
          note: 'The fragment stresses setting: the bedroom where the sisters have slept all their lives becomes the place of danger, the familiar turned strange.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 90-111 to present the narrator’s fear of her own thoughts?',
    },
    {
      title: 'The father on the stoop',
      where: 'Lines 164-188 (p. 47)',
      pointer:
        'Lines 164-188: from the paragraph at line 164, where she cannot say which night it was, to the father’s question about sleeping at line 188.',
      summary:
        'On one of her night walks the narrator senses someone round the corner and knows she cannot turn back without being caught. It is her father, sitting on the kitchen stoop and looking towards town, dressed in his day clothes and smoking a cigarette he rolled himself. He says good morning, which in their family is unusual. She notices that it must be nearly morning and wonders, even now, why he was dressed for town. Her rhythm broken, she stops, and he asks whether she is having trouble sleeping.',
      annotations: [
        {
          phrase: 'the twentieth or the twelfth',
          note: 'The narrator offers a string of guesses, shrinking from the twentieth to the eighth or ninth, and cannot fix the date, so the nights blur together for the reader as they did for the girl.',
        },
        {
          phrase: 'Nobody but my father.',
          note: 'After the build-up of an unknown presence the answer is an anticlimax, and the word nobody is quietly ironic, since he turns out to be the person who matters most.',
        },
        {
          phrase: 'that improbable faint light',
          note: 'The light in the direction of town is called improbable, as if relief itself were hard to believe in after so many dark nights, and faint keeps it fragile.',
        },
        {
          phrase: 'One he rolled himself, of course.',
          note: 'A tiny, precise detail of character, thrifty and self-reliant. The phrase of course shows the narrator’s affectionate certainty about what kind of man her father was.',
        },
        {
          phrase: 'nothing natural about it',
          note: 'Good morning is an ordinary greeting at an extraordinary moment, and the comment reveals how little this family usually says to one another.',
        },
        {
          phrase: 'the whole rhythm of it had been broken',
          note: 'The walking has become a ritual, though the narrator has just admitted it no longer comforts her as it did at first, and her father interrupts it. The story’s own rhythm of repeated nights breaks at the same point.',
        },
      ],
      question:
        'How does the writer create tension and present the father in lines 164-188, when the narrator finds him on the stoop?',
    },
    {
      title: 'The confession and the answer',
      where: 'Lines 213-236 (pp. 48-49)',
      pointer:
        'Lines 213-236: from the paragraph at line 213, where she speaks of her little sister, to the one-line paragraph at line 236 that sums up his view.',
      summary:
        'The narrator tells her father she is afraid she will hurt her sister, hoping that will be enough, and then cannot stop herself saying exactly what she fears. He takes it without alarm, tells her not to worry and says that people have such thoughts sometimes. He puts it down to the ether from her operation and treats the danger as about as likely as a meteor striking the house. The older narrator reflects that he could have said much more, and that what he did worked as well.',
      annotations: [
        {
          phrase: 'I could not stop myself, after all.',
          note: 'The confession escapes her just as the thought did, and the phrase after all admits that her plan to say only part of the truth has failed.',
        },
        {
          phrase: 'the person I had been before',
          note: 'Speaking the thought aloud is presented as a point of no return: the sentence repeats could not, showing that words, once said, change the speaker.',
        },
        {
          phrase: 'An effect of the ether',
          note: 'The father offers a physical, medical cause, which lifts the blame from his daughter. Whether he believes it or simply knows it will help is left open.',
        },
        {
          phrase: 'a meteor could not hit our house',
          note: 'The comparison makes the danger almost cosmically unlikely, and the bracketed correction that follows, that of course it could, shows adult honesty about how reassurance works.',
        },
        {
          phrase: 'a generation and an income further on',
          note: 'The older narrator compares her father with herself as a parent, admitting that time and money, not only wisdom, shape how a family handles a child in trouble.',
        },
        {
          phrase: 'It happens in life.',
          note: 'A four-word sentence that sums up the father’s outlook, in words that could be his or the narrator’s summary of them: ordinary, unshocked and final, with nothing left to discuss.',
        },
      ],
      question:
        'How does the writer present the father’s response to the narrator in lines 213-236?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Retrospective first-person narration',
      example:
        'The older narrator interrupts the girl’s story to comment from the present: “for here I am today” (line 31) and “If this were happening today” (lines 231-232).',
      effect:
        'Two selves share one voice, the frightened fourteen-year-old and the old woman who knows how it turned out. The double perspective lets Munro show the terror from inside while also judging it from outside, which is why the story feels intense and calm at once.',
    },
    {
      technique: 'Hedging and modal verbs of uncertainty',
      example:
        '“must have” recurs (lines 28, 53, 58, 179), alongside “maybe”, “perhaps” and “I don’t remember” (line 55).',
      effect:
        'The narrator reconstructs rather than recalls, and admits it. The honesty makes the few things she is certain of, above all her father’s words, stand out. It also suits Munro’s own description of these pieces as true in feeling but not always in fact.',
    },
    {
      technique: 'Short sentences and one-line paragraphs',
      example:
        '“I was not myself.” (line 83), “Think again.” (line 89), “Absurd.” (line 144) and “Why was that?” (line 205) each stand alone.',
      effect:
        'After long, winding sentences the isolated lines work like jolts. White space slows the reader and gives each line the weight of a realisation. Munro places them where the narrator’s sense of herself shifts.',
    },
    {
      technique: 'Personification',
      example:
        'The thought “was informing me that motives were not necessary” (line 94), and madness might be “lying right beside me” (line 105).',
      effect:
        'Giving the thought a voice and a body makes it feel like an intruder rather than part of her. This is how the narrator keeps it at arm’s length, and how Munro conveys the particular horror of an unwanted thought: it seems to come from someone else.',
    },
    {
      technique: 'Juxtaposition',
      example:
        'The thought of strangling her sister and the clause “whom I loved more than anybody in the world” sit in one sentence (lines 102-103).',
      effect:
        'Placing love and violence together without comment makes the reader feel the contradiction directly. It proves the thought has no motive, which is exactly what the narrator says and exactly what makes it frightening.',
    },
    {
      technique: 'Metaphor and euphemism',
      example:
        '“a cloud around that word” (line 29) for the unspoken cancer; “the mysterious turkey egg” (lines 57-58) for the growth; “The demons” that get hold of her again (line 151) for the returning thoughts.',
      effect:
        'Serious things are named indirectly, through images, just as this family handles them. The cloud hides, the turkey egg makes it homely, the demons put the trouble outside her. Each image is a way of not looking straight at something.',
    },
    {
      technique: 'Imagery of darkness and light',
      example:
        'The trees are “all intensely black” (line 124); dawn comes as a “whitening” in the sky (line 134); the father looks towards “that improbable faint light” (line 170).',
      effect:
        'Night and day map onto fear and sanity. The pale, tentative words for light, whitening, faint, improbable, make relief feel fragile, and the meeting with the father happens where darkness is giving way.',
    },
    {
      technique: 'Mixed direct and reported speech',
      example:
        'Speech in quotation marks, such as “Having trouble sleeping?” (line 188), sits beside unmarked questions and answers such as “Not bad dreams?” and “No.” (lines 207-208).',
      effect:
        'The mixture blurs remembered speech into the narrator’s thoughts, as memory does. The few lines given quotation marks stand out, as if these were the words she remembers exactly, and most of them are her father’s.',
    },
    {
      technique: 'Understatement',
      example:
        'After the confession her father says only “Well.” (line 219), and the story ends “Never mind. From then on I could sleep.” (line 259).',
      effect:
        'Enormous moments are met with tiny words. The flatness is not coldness but calm, and it is the calm that heals. The final understatement leaves the reader to feel what the narrator does not spell out.',
    },
    {
      technique: 'Parenthesis',
      example:
        'Brackets hold asides: the woodlot her father may have sold (lines 15-17), the meteor that of course could hit the house (lines 227-228), and what she might have done as a parent (lines 232-233).',
      effect:
        'The brackets are where the older narrator’s second thoughts go. They qualify, correct and confess, showing a mind that cannot tell the story without questioning it as it goes.',
    },
  ],

  structureForm: [
    {
      heading: 'A story that is not quite a story',
      body: 'Night is a first-person narrative that reads like memoir, and Munro presented it as one of four pieces autobiographical in feeling. Almost nothing happens outwardly: an operation, some sleepless nights, a conversation at dawn. The crisis is entirely inside the narrator’s head, and the climax is a few sentences spoken on a doorstep. The title names the setting of that crisis and of its end, since the conversation takes place as night turns into morning. For an exam, the point is that Munro shapes this apparently artless recollection with great care, and the shaping is what you analyse.',
    },
    {
      heading: 'An opening that seems to be about something else',
      body: 'The story begins with a wry generalisation about childbirths and burst appendixes always coinciding with snowstorms, and with an operation months before the real story. It can look like a false start, but it sets up everything that follows: the unnamed growth and the cloud around its name, the invalid status that sets her apart in June, the father’s money worries, and the ether he will later blame. At line 36 the narrator announces, “Now I have to describe” the sleeping arrangements, a signal that the story proper is beginning, and a reminder that someone is choosing what to tell.',
    },
    {
      heading: 'From habit to one night',
      body: 'Much of the middle is told in the habitual past, what used to happen day after day and night after night: “I would remember” (line 140), “we would swing” (line 145). Then line 164 begins “One night”, and the story moves from routine to a single event. This shift from the repeated to the particular is the main structural turning point, and it is where tension rises, because a pattern that seemed endless is suddenly broken.',
    },
    {
      heading: 'Speech held back until the climax',
      body: 'Until line 188 there is no dialogue in quotation marks at all, only reported words, remembered jeers and the one word the narrator gives when asked to list her surgeries. Then the father’s question arrives, and direct speech clusters in lines 188-220, around the confession. After his answer the story returns to reflection. The effect is that the conversation feels like a breaking of silence on the page as well as in the family.',
    },
    {
      heading: 'An ending that turns the story round',
      body: 'The story could end when the father speaks, but it goes on: first to the older narrator’s reflections on parenting, psychiatry and her father’s strap (lines 230-249), then to her guesses about why he was awake (lines 250-258). The ending also rhymes with the opening. The story begins with the father paying for her operation and an illness nobody names; it ends with his loan and an illness nobody names. Between them the daughter’s trouble is solved, but the family’s troubles are not. The last line closes the questions without answering them.',
    },
    {
      heading: 'Paragraphing and white space',
      body: 'Munro alternates long paragraphs of winding, qualified thought with one-line paragraphs. The short ones cluster at the two moments of greatest pressure: lines 83-89, as the narrator’s sense of self slips, and lines 205-208, as her father questions her. On the page the white space works like silence, which suits a story about what is and is not said.',
    },
    {
      heading: 'The anthology’s shortened text',
      body: 'The anthology prints a shortened version, and ellipses appear at eight points, some at the end of a paragraph. Because of the cuts, a few transitions are sudden, for example from the operation (line 12) to the hospital window (line 13). Write about the text as printed: it is the prescribed version, and speculation about what was left out gains nothing in an answer.',
    },
  ],

  vocabulary: [
    {
      term: 'appendix (line 1)',
      definition:
        'A small pouch attached to the bowel. When it becomes inflamed it is usually removed by surgery, and a burst appendix is an emergency.',
    },
    { term: 'blizzard (line 9)', definition: 'A severe snowstorm with strong winds.' },
    {
      term: '“somber” (line 14)',
      definition: 'The American spelling of sombre: dark, gloomy and serious.',
    },
    {
      term: 'woodlot (line 16)',
      definition:
        'A piece of land kept for growing firewood and timber, often the wooded part of a farm.',
    },
    {
      term: 'sugaring (line 17)',
      definition:
        'In North America, tapping maple trees for their sap and boiling it down to make maple syrup and sugar.',
    },
    {
      term: 'benign (line 27)',
      definition:
        'Of a growth: not cancerous, and not a serious threat to health. The opposite is malignant.',
    },
    {
      term: 'asinine (line 47)',
      definition: 'Extremely foolish. The word comes from the Latin for a donkey.',
    },
    {
      term: 'hired girl (line 55)',
      definition:
        'A girl or young woman employed to help with housework. The narrator says this was what everyone else called her, while her mother would say the grander word maid.',
    },
    {
      term: 'invalid status (line 58)',
      definition:
        'The position of someone weakened by illness and excused from normal duties. Invalid here is stressed on the first syllable.',
    },
    {
      term: 'volition (line 80)',
      definition:
        'The power of choosing; will. To do something hardly of your own volition is to do it without really choosing to.',
    },
    { term: 'differentiated (line 124)', definition: 'Told apart from one another.' },
    {
      term: 'public school (line 142)',
      definition:
        'In Canada and the United States, a free, state-funded school. In Britain the phrase usually means the opposite, a fee-paying independent school.',
    },
    {
      term: 'stoop (line 157)',
      definition:
        'In North American English, a small porch, step or platform at the door of a house. The word comes from the Dutch stoep.',
    },
    { term: 'intimation (line 201)', definition: 'A hint or indirect suggestion.' },
    {
      term: 'ether (line 226)',
      definition:
        'A liquid whose vapour was breathed in as a general anaesthetic during surgery, first demonstrated publicly for that use in 1846.',
    },
    {
      term: 'psychiatrist (line 232)',
      definition: 'A medical doctor who specialises in mental health.',
    },
    {
      term: 'taxed (line 240)',
      definition:
        'Here, challenged or accused: to tax someone with a fault is to confront them about it.',
    },
    {
      term: 'razor strap (line 241)',
      definition:
        'A strip of leather for sharpening a cut-throat razor, also used in the past to beat children.',
    },
    {
      term: 'liking or lumping it (lines 241-242)',
      definition:
        'From the idiom like it or lump it: you must accept something whether you like it or not.',
    },
    {
      term: 'rule the roost (line 244)',
      definition:
        'An idiom meaning to be in charge of a household. The father’s view was that a clever child must not be allowed to.',
    },
    {
      term: 'imp and sass (line 247)',
      definition:
        'An imp is a small, mischievous devil; sass is cheek or back-talk, a chiefly North American word. Together they picture cleverness as a naughty spirit to be beaten out of a child.',
    },
    {
      term: 'retrospective narration',
      definition:
        'A story told by a narrator looking back on events from a later point in life, often commenting on them with hindsight.',
    },
    {
      term: 'juxtaposition',
      definition:
        'Placing two contrasting things side by side so that each sharpens the other, as love and the worst possible act are placed at lines 102-103.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore how the writer presents the narrator’s fear in Night. In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language, form and structure analysis across the whole story',
        guidance: [
          'Open with an overview: the fear is not of the dark or of an intruder but of her own mind, and it is released by being spoken.',
          'Show how the fear builds in stages: sleeplessness (lines 64-70), the house turning strange (lines 71-75), poetry dissolving into nonsense, and the one-line paragraph at line 83.',
          'Analyse the thought itself in lines 90-111: personification, the insistence that it has no motive, and the juxtaposition of harm with love.',
          'Explore setting: the most familiar place becoming dangerous, the black trees outside, and the fragile light of dawn.',
          'Comment on structure: the one-line paragraphs, the habitual nights, and the single night at line 164 that breaks the pattern.',
          'Consider the older narrator: her hedged, reflective voice calms the fear for the reader even while describing it.',
          'End with a judgement: is the story finally about fear, or about how a fear is let go?',
        ],
      },
      {
        question:
          'How does the writer present the relationship between the narrator and her father? In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language and structure analysis of character and relationship',
        guidance: [
          'Begin with the distance between them: in this family even good morning is unusual (lines 175-178), and the father first appears as the man paying for her operation.',
          'Analyse the meeting on the stoop: the build-up of an unknown presence, the anticlimax of discovering it is her father, and his carefully mild question.',
          'Explore the confession: what she means to say, what she cannot stop herself saying, and his short, calm reply.',
          'Examine the narrator’s verdict at lines 234-235, and the contrast she draws with how a parent today might act.',
          'Do not leave out the razor strap and belt (lines 240-244): Munro complicates the portrait on purpose, and a strong answer says why.',
          'Finish with the last paragraph, where the father becomes a man with his own troubles, and ask what that does to the relationship.',
        ],
      },
      {
        question:
          'How does the writer use the house and its surroundings at night to create mood in Night? In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language analysis of setting and atmosphere',
        guidance: [
          'Contrast day and night: the busy household, then the house as a stranger place once work falls away (lines 71-75).',
          'Analyse the named trees turned intensely black, and the careful movement round the pump handle and clothesline (lines 122-131).',
          'Explore the kitchen door and the chair under the doorknob as a ritual of escape and return.',
          'Look at the stoop as a threshold between house and town, and the sanity the narrator draws from looking towards town (lines 157-163).',
          'Trace the light: the whitening sky, the improbable faint light, and the breaking morning of line 250.',
          'Link setting to theme: home as both the safest and the most frightening place, and the father met where night gives way to day.',
        ],
      },
      {
        question:
          'Write an analytical essay exploring how writers present characters facing fear alone in Night and two other texts from Part 2 of the anthology, including at least one poem.',
        skill: 'Analytical essay on three anthology texts (coursework route)',
        guidance: [
          'Choose partners that sharpen the discussion: Whistle and I’ll Come to You for fear at night in a house, and Out, Out- for a rural family and a medical emergency.',
          'Build each paragraph around a point of connection or contrast, not around one text at a time.',
          'Compare narrative voice: Munro’s older narrator looking back, set against the voices of your other two texts.',
          'Compare what the fear is of: something outside, such as a sound or an injury, or something inside the mind.',
          'Compare endings: the narrator’s release into sleep set against the outcomes in your other texts.',
          'Use short, embedded quotations with line references from the anthology for all three texts.',
        ],
      },
    ],
    tips: [
      'On the examination-only route, the anthology says the Part 2 text you are asked about will be included in the question paper. The skill is close analysis, not memorising quotations, so use line numbers to show exactly where your evidence comes from.',
      'Quote the anthology’s wording and keep its North American spellings inside quotation marks, but write British English in your own sentences.',
      'Call the speaker the narrator. The story is autobiographical in feeling, but an answer that treats it as Munro’s diary cannot analyse her choices as a writer.',
      'Write about the central thought precisely and calmly: say what the narrator fears and analyse how it is presented, without adding detail the story does not give.',
      'Do not diagnose the narrator, and do not claim the growth was cancer. The story insists on not knowing, and that uncertainty is something to analyse rather than solve.',
      'Structure is where strong answers pull ahead: the delayed start, the habitual nights and the single night, the late arrival of dialogue in quotation marks, and the turn to the father at the end.',
      'Balance the father. A competent answer praises his wisdom; a strong one also notices the razor strap and the unanswered questions of the last paragraph, and argues what they add.',
      'Read the last line closely. Never mind can be heard as peace, as dismissal or as the older narrator choosing to stop; say which reading you find most convincing and why.',
      'The ellipses show where the anthology’s version is shortened or trails off. Write about the text in front of you, and do not guess at what was cut.',
    ],
  },

  modelAnswer: {
    question: 'Explore how the writer presents the narrator’s fear in Night.',
    paragraph:
      'Munro presents the narrator’s fear as a fear of her own mind, and she makes it frightening by giving the thought a life of its own. It is personified as a speaker that “was informing me that motives were not necessary”: the verb “informing” is cool, almost official, and makes it sound like a separate voice reasoning inside her. The thought of harming her sister arrives in the same sentence as the clause “whom I loved more than anybody in the world”, and the narrator insists straight afterwards that she might do it “not for jealousy, viciousness, or anger”. That juxtaposition is the heart of the horror: love and the worst possible act sit side by side, and the reader feels the contradiction as she does. Structure tightens it. Short paragraphs quicken the pace, and the rhetorical question “Why not try the worst?” is followed by the fragment “Here in the most familiar place”, so that the danger is located in the bedroom where the sisters have always felt safe. Yet the older narrator’s calm, hedged voice frames all of this, which suggests that the story is less about the fear itself than about how a fear that cannot be spoken grows, until at the stoop, at last, it can be.',
    commentary: [
      'It opens with an arguable overview that answers the question directly, so every quotation that follows is evidence for a claim.',
      'It names techniques precisely, personification, juxtaposition, rhetorical question and fragment, and explains the effect of each on the reader rather than simply spotting it.',
      'Quotations are short and embedded in its own sentences, and it zooms in on a single word, the verb informing, where the analysis is sharpest.',
      'It links language to structure, showing how paragraphing and sentence form place the danger in the most familiar place.',
      'It ends with a judgement that reaches beyond the passage to the whole story and the meeting on the stoop, the kind of whole-text insight that separates a strong answer from a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-12 (p. 44)',
      title: 'Snowstorm and surgery',
      summary:
        'The narrator remembers that every emergency of her childhood seemed to happen in a snowstorm. When a pain strikes her side late one night in a blizzard, the neighbours’ horses take her a mile and a half to the hospital, where the doctor removes her appendix.',
      setting: 'A snowbound road and the hospital in town, on a winter night',
      who: [NARRATOR, DOCTOR],
      themes: [T_MEMORY],
      tension: 3,
      significance:
        'The wry, generalising opening establishes the older narrator’s voice and the operation that sets everything else in motion.',
    },
    {
      where: 'Lines 13-32 (p. 44)',
      title: 'The turkey’s egg',
      summary:
        'Recovering, she watches snow through the hospital window, never wondering how her father will pay. Back at school, her mother tells her the doctor also removed a growth, and not to worry. Nobody says the word cancer, and the narrator never learns what it was.',
      setting: 'The hospital; later, the family kitchen on a Saturday morning',
      who: [NARRATOR, MOTHER],
      quote: 'A growth, my mother said, the size of a turkey’s egg.',
      themes: [T_SILENCE],
      tension: 3,
      significance:
        'The first silence in a story built on them: a frightening fact is reported, measured and then closed.',
    },
    {
      where: 'Lines 33-63 (pp. 44-45)',
      title: 'A summer like a visitor',
      summary:
        'Free of school in June and looking well, the narrator shares bunk beds with her nine-year-old sister Catherine, whom she used to tease. With few jobs to do and an odd invalid status, she drifts through the days feeling useless and strange.',
      setting: 'The family house and the sisters’ small bedroom, early summer',
      who: [NARRATOR, CATHERINE, MOTHER],
      quote: 'wandering about like a visitor',
      themes: [T_GROWING, T_SILENCE],
      tension: 2,
      significance:
        'The sisters’ closeness and the narrator’s idle, unsettled state prepare the ground for the nights.',
    },
    {
      where: 'Lines 64-89 (p. 45)',
      title: 'Wide awake',
      summary:
        'She begins to lie awake long after the household sleeps, with nobody telling her to turn out her light. The house turns strange in the dark. She recites rhymes and poems that dissolve into nonsense, until she feels she is not herself.',
      setting: 'The dark bedroom and the sleeping house, around midnight',
      who: [NARRATOR],
      quote: 'I was not myself.',
      themes: [T_MIND, T_STRANGE, T_GROWING],
      tension: 3,
      significance:
        'Freedom turns into disturbance, and a run of one-line paragraphs marks the moment her sense of self starts to slip.',
    },
    {
      where: 'Lines 90-111 (p. 46)',
      title: 'The thought',
      summary:
        'No longer hoping for sleep, she fights something that seems to be taking hold of her. It arrives as a thought without motive: that she could strangle her little sister, asleep in the bunk below, whom she loves more than anyone.',
      setting: 'The top bunk, in the middle of the night',
      who: [NARRATOR, CATHERINE],
      quote: 'Why not try the worst?',
      themes: [T_MIND, T_STRANGE],
      tension: 5,
      significance:
        'The crisis of the story: the danger is entirely inside her mind, and the safest room becomes the most frightening.',
    },
    {
      where: 'Lines 112-139 (p. 46)',
      title: 'Out into the dark',
      summary:
        'She climbs down the ladder without looking at her sister, eases the chair from under the kitchen doorknob and goes outside. She walks the lawns among the black trees until the birds sing and the sky whitens, then creeps back to bed and sleeps.',
      setting: 'The lawns and trees around the house, from midnight to dawn',
      who: [NARRATOR],
      quote: 'Now they were all intensely black.',
      themes: [T_STRANGE, T_MIND],
      tension: 4,
      significance:
        'She protects her sister by leaving, and night walking becomes a ritual that keeps the thought at bay.',
    },
    {
      where: 'Lines 140-163 (p. 47)',
      title: 'Days in the hammock, nights on the stoop',
      summary:
        'By morning the thought seems absurd, and after school the sisters swing in the hammock. But the troubles return each night. On her walks she sometimes stops at the kitchen stoop to look towards the town and its ordinary, busy lives.',
      setting: 'The hammock by day; the kitchen stoop before dawn',
      who: [NARRATOR, CATHERINE],
      quote: 'maybe just to inhale the sanity of it',
      themes: [T_STRANGE, T_SILENCE],
      tension: 3,
      significance:
        'Day and night pull against each other, and the stoop, where she will meet her father, is set up as a place of sanity.',
    },
    {
      where: 'Lines 164-188 (p. 47)',
      title: 'Somebody around the corner',
      summary:
        'On one night among many she senses someone ahead and cannot turn back. It is her father, sitting on the stoop in his day clothes and smoking a cigarette he rolled himself. He says good morning, unusually for their family, and asks if she is having trouble sleeping.',
      setting: 'The kitchen stoop, towards morning',
      who: [NARRATOR, FATHER],
      quote: 'Having trouble sleeping?',
      themes: [T_FATHER, T_SILENCE],
      tension: 4,
      significance:
        'The habitual nights give way to a single event, and the first line of dialogue in quotation marks in the story is the father’s.',
    },
    {
      where: 'Lines 189-229 (p. 48)',
      title: 'The confession',
      summary:
        'She realises he has known about her walks. When he waits rather than pressing her, she tells him she is afraid she will hurt her sister, then says exactly what she fears. He answers calmly that people have such thoughts, blames the ether, and does not wonder at her.',
      setting: 'The stoop, as the sky begins to whiten behind the trees',
      who: [NARRATOR, FATHER],
      quote: 'People have those kinds of thoughts sometimes.',
      themes: [T_FATHER, T_MIND, T_SILENCE],
      tension: 5,
      significance:
        'The turning point: once the thought is spoken and met without alarm, it loses its power over her.',
    },
    {
      where: 'Lines 230-249 (pp. 48-49)',
      title: 'Then and now',
      summary:
        'The older narrator considers what else her father could have done, and what a parent today might do. She judges that his response worked, then remembers his razor strap and belt, and the belief of the time that clever children needed curbing.',
      setting: 'The narrator’s reflections, decades later',
      who: [NARRATOR, FATHER],
      quote: 'You thought you were too smart',
      themes: [T_FATHER, T_MEMORY],
      tension: 2,
      significance:
        'Hindsight complicates the portrait: the father who released her is also the father who punished her with a strap.',
    },
    {
      where: 'Lines 250-259 (p. 49)',
      title: 'The breaking morning',
      summary:
        'She wonders why her father was up and dressed for town: perhaps the bank refusing his loan, perhaps news that her mother’s shakiness had a name, perhaps an impossible love. She sets the questions aside. From then on, she could sleep.',
      setting: 'The stoop at dawn, remembered from old age',
      who: [NARRATOR, FATHER, MOTHER],
      quote: 'Never mind. From then on I could sleep.',
      themes: [T_MEMORY, T_SILENCE, T_GROWING],
      tension: 2,
      significance:
        'The ending turns the story round, revealing the father’s unspoken troubles, then closes with plain release.',
    },
  ],

  relationships: [
    {
      from: NARRATOR,
      to: CATHERINE,
      kind: 'sisters, aged fourteen and nine',
      note: 'Shared bunk beds, teasing, storytelling and afternoons in the hammock show ordinary closeness. The narrator loves her more than anyone, which is why the thought of harming her is unbearable. Catherine never knows what her sister feared.',
    },
    {
      from: NARRATOR,
      to: FATHER,
      kind: 'daughter and father',
      note: 'Distant by habit, they have little practice at talking, which makes the dawn conversation extraordinary. His calm releases her, but the narrator also remembers his strap and belt and, in hindsight, the troubles he never shared.',
    },
    {
      from: NARRATOR,
      to: MOTHER,
      kind: 'daughter and mother',
      note: 'The mother breaks the news of the growth and closes the subject at once. Her failing health, hinted at in the words as yet and named only as shakiness, frames the story from its first silence to its last guess.',
    },
    {
      from: FATHER,
      to: MOTHER,
      kind: 'husband and wife',
      note: 'Seen only through the daughter’s final guesses: he may have just learned the name of his wife’s illness, or he may have been in love with an impossible woman. The marriage stays a closed door.',
    },
    {
      from: NARRATOR,
      to: DOCTOR,
      kind: 'patient and doctor',
      note: 'He operates and finds the growth, but she hears of it only from her mother. The ether used in hospital becomes her father’s explanation for her thoughts.',
    },
  ],

  compareWith: [
    {
      title: 'Whistle and I’ll Come to You (from The Woman in Black), Susan Hill',
      href: '/revision/texts/whistle-and-ill-come-to-you',
      reason:
        'Printed just before Night in the anthology, it also has a first-person narrator recalling terror at night in a house. Hill’s fear seems to come from outside, though her narrator begins to doubt his own reality; Munro’s comes from within the mind.',
    },
    {
      title: 'Out, Out-, Robert Frost',
      href: '/igcse/edexcel/poetry/out-out',
      reason:
        'Both show a young person’s medical emergency in a rural family, with a doctor and ether, but Frost’s ends in death and the adults turning back to their affairs, where Munro’s ends in sleep and a father who stops to listen.',
    },
    {
      title: 'The Story of an Hour, Kate Chopin',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'Both centre on a feeling that cannot be spoken inside a family, Mrs Mallard’s secret joy and the narrator’s secret fear; Chopin keeps hers hidden to the end, while Munro’s narrator speaks and is released.',
    },
    {
      title: 'Significant Cigarettes (from The Road Home), Rose Tremain',
      href: '/revision/texts/significant-cigarettes',
      reason:
        'Another sleepless night in which memory keeps breaking in: Lev cannot sleep and craves the comfort of a cigarette, while Munro’s father sits smoking and gives comfort instead.',
    },
  ],

  contentGuidance: ['mental_health', 'violence', 'mortality'],

  quotesFromElsewhere: [
    'master of the contemporary short story',
    'not quite stories',
    'autobiographical in feeling, though not, sometimes, entirely so in fact',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pp. 44-49: the story as prescribed, 259 numbered lines, all fifty-one margin numbers matching a sequential count. Every quotation and line reference was checked against this printing. The contents list it at p. 44; the Part 2 acknowledgements (p. 72) give Dear Life: Stories, Chatto & Windus, 2012, pp. 271-285, copyright Alice Munro 2012, and name the three permitting publishers; the Issue 8 change list records no changes to it; the preface says a Part 2 text on the examination-only route will be included in the question paper, and that the coursework essay covers any three Part 2 texts including poetry and prose',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Robert Thacker, Alice Munro: biographical, NobelPrize.org: born Wingham, 10 July 1931, eldest child of Robert Eric Laidlaw, a fox farmer, and Anne Clarke Chamney Laidlaw, a former schoolteacher; the farm west of Wingham beside Lower Wingham; a son born 1936 and a daughter 1937; by summer 1943 her mother showing advancing symptoms of Parkinson’s disease, her father’s fur business faltering and later a night-shift job at the foundry; mother died 1959; James Munro; Who Do You Think You Are? (1978), published as The Beggar Maid in the United States and Britain; Dear Life (2012) ends with a Finale of four pieces, not quite stories; the Man Booker International Prize 2009; she has said she has stopped writing',
      url: 'https://www.nobelprize.org/prizes/literature/2013/munro/biographical/',
    },
    {
      label:
        'NobelPrize.org, press release, 10 October 2013: the Nobel Prize in Literature 2013 awarded to Alice Munro, master of the contemporary short story',
      url: 'https://www.nobelprize.org/prizes/literature/2013/press-release/',
    },
    {
      label:
        'CBC News obituary, May 2024: born Alice Laidlaw in Wingham on 10 July 1931; died at her home in Port Hope, Ontario, aged 92',
      url: 'https://www.cbc.ca/news/canada/alice-munro-author-dead-obit-1.7203737',
    },
    {
      label:
        'Wikipedia, Alice Munro: 10 July 1931 to 13 May 2024; married James Munro 1951; Dance of the Happy Shades (1968) won the Governor General’s Award; Who Do You Think You Are? (1978); Dear Life (2012) the last original collection; stopped writing around 2013; her father beat her as a child (citing the New York Times and the New Yorker, December 2024)',
      url: 'https://en.wikipedia.org/wiki/Alice_Munro',
    },
    {
      label:
        'Wikipedia, Dear Life (Munro book) and List of short stories by Alice Munro: Dear Life published 2012 by McClelland & Stewart in Canada; Night first published in Granta 120: Medicine, 2012, and collected in Dear Life, pp. 271-286',
      url: 'https://en.wikipedia.org/wiki/List_of_short_stories_by_Alice_Munro',
    },
    {
      label:
        'Debra Martens, Stories in collision, Canadian Medical Association Journal, 10 December 2012: review of Granta 120: Medicine, including Munro’s Night, read as about expectations and fear; quotes the line about the truth told with only the slightest modification, matching the anthology',
      url: 'https://www.cmaj.ca/content/184/18/E978',
    },
    {
      label:
        'Chloe Schama, Not Quite Stories, The New Republic, 14 November 2012: quotes Munro’s note that the final four works are not quite stories and the closest things she has to say about her own life, and quotes from Night the line about chasing the thought away, matching the anthology',
      url: 'https://newrepublic.com/article/110066/not-quite-stories-alice-munro-almost-autobiography',
    },
    {
      label:
        'The Globe and Mail review of Dear Life (2012), and Charles E. May, Memoir or Story? Munro, Moody, and Me (Reading the Short Story, 28 January 2013): both quote Munro’s Finale note as autobiographical in feeling, though not, sometimes, entirely so in fact, and May also quotes not quite stories. The Yale Review essay by Jane Mendelsohn quotes the same note without the word so, and names the four Finale pieces as The Eye, Night, Voices and Dear Life; the two sources that agree are followed here',
      url: 'https://www.theglobeandmail.com/arts/books-and-media/book-reviews/alice-munro-poet-of-the-unexpected-passion-returns-in-strong-form/article4608848/',
    },
    {
      label: 'Charles E. May, Memoir or Story? Munro, Moody, and Me, 28 January 2013',
      url: 'http://may-on-the-short-story.blogspot.com/2013/01/memoir-or-story-munro-moody-and-me.html',
    },
    {
      label:
        'The Mookse and the Gripes, review of Night, 16 January 2013: Night the twelfth story in Dear Life; quotes the lines on liberation, I was not myself, and the most familiar place, matching the anthology',
      url: 'https://mookseandgripes.com/reviews/2013/01/16/alice-munro-night/',
    },
    {
      label:
        'Y. Peng, An Imp’s Return to Sleep: A Study on Munro’s Night, Atlantis Press (SSEMSE 2015): quotes Night from Dear Life with page numbers, matching the anthology for every line quoted in this guide that it also quotes, and including one passage the anthology does not print, which shows the anthology text is shortened. Its interpretations (that the growth was cancer, that the thought is jealousy) are not followed here',
      url: 'https://www.atlantis-press.com/article/25842230.pdf',
    },
    {
      label:
        'Lisa Dickler Awano, The Golden Eye: Alice Munro’s Dear Life Finale, VQR, 5 February 2014: the father’s beatings with the razor strap or belt, cited from Night, as a recurring element across the four Finale pieces',
      url: 'https://www.vqronline.org/criticism-essays/golden-eye-alice-munros-dear-life-finale',
    },
    {
      label:
        'City of Toronto, Scrimping and Saving (Second World War exhibit): rationing started with gasoline rationing in April 1942; Wartime Canada, gasoline ration coupons',
      url: 'https://www.toronto.ca/explore-enjoy/history-art-culture/online-exhibits/web-exhibits/first-second-world-wars/75th-anniversary-of-the-end-of-the-second-world-war/scrimping-saving/',
    },
    {
      label:
        'Wikipedia, William T. G. Morton: the first public demonstration of ether anaesthesia in surgery, Massachusetts General Hospital, Boston, 16 October 1846',
      url: 'https://en.wikipedia.org/wiki/William_T._G._Morton',
    },
    {
      label:
        'NHS, Obsessive compulsive disorder (OCD), symptoms: obsessions as unwanted, intrusive and often distressing thoughts, images or urges; fear of deliberately harming yourself or others among the common obsessions',
      url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/symptoms/',
    },
    {
      label:
        'Wiktionary, for definitions checked: stoop (North American porch or landing, from Dutch stoep), wood lot, sugarbush (trees tapped for sugaring), public school (North American sense), asinine, volition, intimation, tax (to accuse), razor strop, sass, like it or lump it, benign',
      url: 'https://en.wiktionary.org/wiki/stoop',
    },
  ],
}
