import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Woman in Black, Susan Hill (Hamish Hamilton, 1983). A COMPLETE guide to
 * the whole novel: the only earlier page, the hidden one at
 * /resources/revision-notes/woman-in-black, was read for orientation and
 * nothing was taken from it, because the audit found plot errors in it (it had
 * Stella die shortly after the accident; the novel says ten months) and wrong
 * board badges.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). The novel is in UK
 * copyright and no licensed copy is held in src/data/full-texts, so the guide
 * test cannot check these words. Every quotation here was taken from, and
 * checked against, at least one of two kinds of source, and most against both:
 * - the novel as the exam boards print it: the extracts in the Eduqas GCSE
 *   Component 2 papers (June 2017, 2018, 2019, 2023, 2024, 2025 and October
 *   2020), the stimulus quotations in the Pearson Edexcel 1ET0 Paper 1 papers
 *   (specimen, June 2018 to June 2025), and the Chapter 10 extract in the
 *   Pearson Edexcel International GCSE English Anthology, Issue 8;
 * - Open Library's full-text search of ten scanned editions of the novel,
 *   including three Vintage UK paperbacks (1999, 2007, 2012), the Mandarin
 *   1992 and Penguin 1984 paperbacks and the Godine 2002 American edition. A
 *   phrase counts as confirmed only when it is found in scans of the novel
 *   itself; the Mallatratt play script, which the same search returns, was
 *   ignored because it rewords the novel.
 * Chapters were read off the chapter an exam board printed the passage from,
 * off Shmoop's chapter-and-paragraph citations, and off the LitCharts and
 * Shmoop chapter summaries, and no quotation is placed in a chapter that those
 * disagree about.
 *
 * Things the checking turned up, recorded so nobody reintroduces them:
 * - The last line is "They asked for my story. I have told it. Enough." in
 *   every scanned edition and in the Eduqas June 2023 paper. Wikipedia and many
 *   revision sites add "have" before "asked"; the novel does not.
 * - The anthology extract Whistle and I'll Come to You is from Chapter 10, not
 *   Chapter 8 (Chapter 8 is called Spider). The task brief that commissioned
 *   this guide said Chapter 8; the contents page of the Mandarin paperback and
 *   the anthology both say otherwise.
 * - Stella does not die in the accident. The baby is killed; Stella dies ten
 *   months later of her injuries (Chapter 12, printed in the Eduqas June 2023
 *   paper).
 * - LitCharts says Keckwick himself drove the trap in which Nathaniel drowned,
 *   and survived; Shmoop says it was Keckwick's father; Wikipedia says all on
 *   board were killed. They disagree, so this guide does not say who drove.
 * - The 2012 film changes the plot heavily (see the context entry). The Eduqas
 *   examiners' report for 2025 warns that film references cost candidates.
 * - Open Library's search also returns the Macmillan/Heinemann graded reader
 *   (retold, 1992 and 2005 scans), which rewrites the dialogue. An earlier
 *   draft of this guide took from it a line in which Keckwick says he would not
 *   have left Arthur at the house overnight; the novel has him say only,
 *   matter-of-factly, that nobody crosses while a sea-mist ("fret") is up.
 *   Treat hits from the graded reader, like the play script, as not the novel.
 * - Recheck, 26 September 2026: the ending was softened where the draft said
 *   the woman "steps into" the pony's path (the novel: she moves as if to);
 *   unsupported details were removed (a telephone at the inn, Mr Jerome turning
 *   grey, Spider's hair on end, Jennet's family refusing her, the fair being in
 *   a park, the "last" of Jennet's letters); and Mr Bentley's agreement that
 *   Arthur should stay is no longer pinned to a telephone call.
 *
 * The novel is a long work, so the page may quote 400 of its words in total
 * (fair-dealing.ts). This guide uses about 300. Add a quotation only after
 * checking it the same way.
 */
export const guide: StudyGuide = {
  slug: 'the-woman-in-black',
  title: 'The Woman in Black',
  author: 'Susan Hill',
  form: 'novella',
  scope:
    'The whole novel: all twelve chapters of Susan Hill’s The Woman in Black (1983), from the Christmas Eve opening to the last line. It is set for Pearson Edexcel GCSE English Literature (1ET0), Paper 1, Section B, where students answer one of two essay questions, each introduced by a short quotation from the novel, in a closed-book exam that rewards an argument across the whole novel and an understanding of its context, and also credits accurate writing; and for Eduqas GCSE English Literature, Component 2, Section A, where students write an essay that starts from a printed extract and widens to the whole novel, again closed book, with the writer’s language and structure analysed and accurate writing credited, but context not explicitly assessed. Part of Chapter 10, Whistle and I’ll Come to You, is also set on its own in the Pearson Edexcel International GCSE English Anthology and has its own guide. Page numbers differ between editions, so this guide locates every moment by chapter and by what happens.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Susan Hill 1983. First published by Hamish Hamilton in 1983; the exam boards quote the Vintage paperback. Quoted here in short extracts for criticism and review; longer passages are described and located rather than printed.',
  },
  workLength: {
    words: 35000,
    basis:
      'An estimate, not a count: no licensed full text is held here and no publisher or library record found gives a word count. The first edition has 200 pages (Wikipedia’s record of the Hamish Hamilton edition), and the Vintage UK paperback scanned on Open Library ends on page 199 or 200; the Mandarin paperback’s contents list starts Chapter 1 on page 9 and Chapter 12 on page 154. The opening of Chapter 10 printed in the Pearson anthology runs to about 1,000 words and is only part of a chapter that fills ten Mandarin pages (123 to 132). At the 200 to 250 words a page that implies, about 150 to 190 pages of text gives roughly 30,000 to 45,000 words, and 35,000 is recorded. Any length over 3,000 words makes it a long work under fair-dealing.ts, so the 400-word page limit does not depend on the estimate.',
  },

  overview: {
    summary: [
      'The Woman in Black is Susan Hill’s ghost story of 1983, told by Arthur Kipps, a solicitor looking back on his youth. It opens on Christmas Eve at Monk’s Piece, his country home, where his stepchildren are telling ghost stories round the fire. When they ask him for one he refuses and leaves the room, because he has a true story, “a story of haunting and evil, fear and confusion, horror and tragedy”, which he has spent years trying to put behind him. Walking in the orchard, he decides to write it down, hoping that doing so will free him of it. The other eleven chapters are that written account.',
      'As a junior solicitor in London, Arthur was sent by his employer, Mr Bentley, to Crythin Gifford, a small market town far to the north-east of London, near the sea, to attend the funeral of an elderly client, Mrs Alice Drablow, and to sort out the papers at her home, Eel Marsh House. The house stands on a tidal island reached by the Nine Lives Causeway, which the sea covers at high tide. At the funeral Arthur notices a young woman in black with a wasted face, and nobody in the town will talk about her. He sees her again in the graveyard beside the house. Walking back across the causeway in a sudden mist, he hears a pony and trap, and a child, go down into the marsh. Returning to stay at the house with Spider, a dog lent by the landowner Samuel Daily, he hears a rocking chair moving behind the locked door of a nursery and reads letters from a young woman called Jennet.',
      'After a night of storm, and a morning in which Spider is almost dragged under the marsh, Samuel Daily rescues Arthur and tells him the story behind the haunting. Jennet Humfrye, Mrs Drablow’s sister, was unmarried when her son Nathaniel was born, and had to give him to her sister to bring up. The boy drowned with his nursemaid when the pony and trap carrying them was lost in the marsh, and Jennet, who saw it happen, wasted away and died. Since then she has been seen as the woman in black, and each sighting has been followed by the death of a child. Arthur goes home to London, marries his fiancée Stella and has a son. At a fair outside London, while the baby is still very young, he sees the woman in black again: she moves as if to step into the path of the pony and cart carrying Stella and the baby, the pony bolts and the cart crashes into a tree, the baby is killed, and Stella dies ten months later of her injuries.',
      'Almost nothing violent happens until the last pages. Hill builds fear slowly, from fog, silence, sound and what the townspeople will not say, and she gives the story to a narrator who is sensible, confident and sure there are no ghosts. The question most good essays argue about is what the horror is really about. One reading is that it is about evil: a spirit that kills children. The more convincing reading, taking the whole novel, is that it is about grief that has turned into hatred. Hill lets us read Jennet’s letters, and pity her, before we learn what she does, and she ends the novel with Arthur himself a bereaved parent who cannot stop reliving his loss. The haunting passes suffering from one parent to another, and writing the story is Arthur’s attempt, which the final word suggests may not succeed, to put an end to it.',
    ],
  },

  context: [
    {
      heading: 'Susan Hill',
      body: 'Susan Hill was born on 5 February 1942 in Scarborough, North Yorkshire, and studied English at King’s College London; her first novel was published while she was a student there. I’m the King of the Castle won the Somerset Maugham Award in 1971, and The Bird of Night won the Whitbread Novel Award in 1972 and was shortlisted for the Booker Prize. She was made a CBE in 2012 and a Dame in 2020, both for services to literature. After The Woman in Black she wrote further ghost stories, among them The Mist in the Mirror (1992), The Man in the Picture (2007) and The Small Hand (2010), as well as a series of crime novels about the detective Simon Serrailler, which began in 2004. She is known for her attachment to the traditional English ghost story, which frightens through atmosphere and suspense rather than gore, and The Woman in Black is the best known example of it in her work.',
    },
    {
      heading: 'An old-fashioned ghost story, written on purpose',
      body: 'The Woman in Black was first published by Hamish Hamilton on 10 October 1983, but it reads like a story from a hundred years earlier, and that is deliberate. Hill has said that the two Jameses were among the guides she wrote with: M. R. James, the master of the English antiquarian ghost story, and Henry James, whose novella The Turn of the Screw (1898) she has acknowledged as an inspiration; in that story a governess sees a woman in black across a lake, and critics have long argued whether the ghosts are real or in her mind. Hill borrows the Gothic tradition’s furniture: a remote house, a graveyard, a locked room, fog, a family secret hidden in papers, and a confident young man who does not believe in ghosts. She even has Arthur reflect, amused, in Chapter 2 that his errand is beginning to sound like “something from a Victorian novel”, a wink at the reader. The Eduqas examiners’ report for 2025 notes that many candidates made relevant use of Hill’s “Victorian Gothic pastiche”: a pastiche is a new work written in the style of an older one. The best answers show what Hill does with these conventions, not just that she uses them.',
    },
    {
      heading: 'The Christmas ghost story',
      body: 'Telling ghost stories at Christmas was a popular custom in Victorian Britain, in magazines as well as round the fire, and Charles Dickens’s A Christmas Carol (1843) is its most famous example. Hill opens her novel inside that custom: it is Christmas Eve, the family has eaten, and the young men turn out the lights and compete to tell the most frightening tale. They pile on clichés until the stories become silly, and Arthur, who knows what real horror is, cannot bear it. The contrast does two jobs. It tells the reader that the story to come is not a party game, and it sets up the question the whole novel asks: whether telling a ghost story can lay a ghost to rest. In Dickens the ghosts come to save Scrooge. In Hill the story is written to escape one, and it is not clear that it works.',
    },
    {
      heading: 'When the story is set',
      body: 'The novel never gives a year. Its world has motor cars (Samuel Daily owns one), trains, bicycles and electric light at Eel Marsh House, but people still travel the causeway by pony and trap, and the letters Arthur reads in Chapter 9 were written long before his visit. One reading places the young Arthur in the early years of the twentieth century and the Christmas Eve frame some decades later, but that is an inference, not something the novel states, so do not give a date as fact. What matters is the gap: Hill sets a haunting from the Victorian past inside a more modern world that thinks it has outgrown ghosts. Students often call the novel Victorian; it is safer to say it is written in the style of Victorian and Edwardian ghost stories.',
    },
    {
      heading: 'Mourning and death',
      body: 'Formal mourning customs reached their height in the reign of Queen Victoria (1837 to 1901), whose long, public grief after the death of Prince Albert in 1861 shaped society. Women in mourning wore heavy black clothing and black crêpe veils, and a widow might wear mourning dress for up to four years; the customs slowly relaxed after the First World War. This is why Arthur notices in Chapter 4 that the woman at the funeral is dressed in a style of full mourning that has gone out of fashion, and that her clothes look as if they have been taken out of an old trunk. The detail is a clue that she belongs to an earlier time. It also tells us, before we know anything else about her, that she is someone in mourning.',
    },
    {
      heading: 'Unmarried mothers and their children',
      body: 'Jennet’s story depends on how unmarried mothers were treated. For most of the nineteenth and early twentieth centuries an unmarried woman who had a child was widely regarded as having lost her respectability, and her child was often passed to relatives, friends or strangers; adoption as a legal process in England and Wales dates only from the Adoption Act of 1926, and before that most such arrangements were informal. In the novel a document drawn up by a lawyer records that the Drablows have taken the boy as their own. Jennet’s son is born far from home, in Scotland, and she is pressed to give the boy up. Samuel Daily says she gave him to her sister “because she’d no choice” (Chapter 11). The Edexcel examiners’ report for 2025 praised answers that connected Jennet to attitudes to motherhood and social shame. This context is what makes her both a victim and, later, a figure of revenge.',
    },
    {
      heading: 'Marsh, tide and fog',
      body: 'The setting is built from real features of the English coast. Eel Marsh House can be reached only across a causeway that is under water at high tide, and Mr Bentley warns Arthur in Chapter 2, “You can only cross the Causeway at low tide.” Sudden sea-mists roll in over the marshes, and the ruins beside the house and Arthur’s comparison of it to a Martello tower, one of the small round forts built along the south and east coasts of England between 1804 and 1812 against a French invasion, place it on an exposed and defended edge of the country. The novel begins its story in fog in London, too: the title of Chapter 2, A London Particular, is an old name for the thick yellow fogs of London. Fog runs through the novel as a sign that danger is near and that Arthur cannot see it.',
    },
    {
      heading: 'On stage and screen, and a warning',
      body: 'Stephen Mallatratt adapted the novel for the stage in 1987 at the Stephen Joseph Theatre in Scarborough, Hill’s birthplace. The play reached the West End in 1989 and ran until 4 March 2023, the second longest-running non-musical play in West End history after The Mousetrap, before touring. Nigel Kneale adapted it for ITV in 1989, and a film starring Daniel Radcliffe and directed by James Watkins followed in 2012. The 2012 film tells a very different story: its Arthur is already a widower with a young son when he goes north, the ghost’s victims and her own death are changed, and the ending takes place at a railway station. None of that is in the novel. The Eduqas examiners’ report for 2025 warns that film references, which often “deviate dramatically” from the events of the novel, continue to be a problem for a significant minority of candidates, so write only about the book.',
    },
  ],

  themes: [
    {
      title: 'Fear and the supernatural',
      body: 'Hill makes fear grow in stages, and each stage takes away something Arthur relies on. First he sees the woman in black and assumes she is ill, with “some terrible wasting disease” (Chapter 4). Then he sees her face in the graveyard and reads in it a “desperate, yearning malevolence” (Chapter 5). Then he cannot see at all: in the mist on the causeway “the mist played tricks with sound as well as sight” (Chapter 6), and he hears the accident without seeing anything. Then the haunting comes indoors, with a rocking chair behind a locked door, a presence on the landing and a face at the nursery window (Chapters 9 and 10). Finally it follows him back to London and kills, at a fair outside the city (Chapter 12). The ghost does very little directly; the fear comes from what Arthur feels near her and from what she might do. One reading is that the novel is simply a chiller built to frighten. A stronger one is that Hill uses fear to measure damage: by the end the woman’s power lies less in appearing than in what her appearances have taught Arthur, and the reader, to expect. The Edexcel examiners’ report for 2025 made the same point, praising answers that saw the horror as a way of exploring grief and trauma.',
    },
    {
      title: 'Reason against belief',
      body: 'The young Arthur is a rational professional who looks down on small-town superstition. He puts the landlord’s wariness down to local silliness, and reflects that in an earlier age any lonely old woman in such a place “would have been branded as a witch” (Chapter 4). After the graveyard he writes, “I did not believe in ghosts” (Chapter 5), and at once qualifies it: that was true only until that day. His reason is not foolish. He tests explanations, as a lawyer tests evidence, and even after fleeing the graveyard he admits, “It is remarkable how powerful a force simple curiosity can be.” It is curiosity, the virtue of a rational mind, that keeps him at the house. By Chapter 10 reason has nothing left to offer: “I began to doubt my own reality”. One reading is that Hill punishes Arthur’s arrogance. The more convincing one is that she respects his reason and shows its limits, since the thing he cannot explain is exactly the thing that is true.',
    },
    {
      title: 'Isolation',
      body: 'Eel Marsh House is isolated by nature. Arthur’s first sight of it, standing “like some lighthouse or beacon” on its island, is of a house “isolated, uncompromising but also, I thought, handsome” (Chapter 5), and the phrase I thought hints that his admiration will not last. The tide cuts it off twice a day, the mist cuts it off from sight, and Keckwick leaves him there alone. Hill adds a social isolation: nobody in Crythin Gifford will tell him what they know, and he grows impatient of the “half-hints and dark mutterings” of grown men (Chapter 4). Jennet’s life was isolation too: far from home in Scotland when her child was born, then kept from her son. Even years later Arthur is isolated by what happened: in the frame he resolves that his written story will be for his eyes only during his lifetime. One reading is that isolation is simply the Gothic condition that makes the haunting possible. Another is that it is the novel’s real damage, since both Jennet and Arthur end up alone with a grief nobody else shares.',
    },
    {
      title: 'Grief, love and revenge',
      body: 'Jennet’s letters in Chapter 9 are the emotional centre of the novel. They show a young mother writing of her baby with a “desperate, clinging affection”, then in fury at the pressure to give him up, threatening to “kill us both before I let him go”, and then, resigned to losing him, telling her sister “he is mine, mine, he can never be yours”. The repetition of mine is love and possession at once. After the boy’s death that love becomes hatred: Arthur senses that her “pent-up hatred and desire for revenge permeated the air all around” (Chapter 11), and the novel ends with the flat statement that “she had had her revenge”. One reading is that Jennet is a villain, since she kills children who have done nothing to her. The stronger reading holds both truths together: Hill makes her pitiable in life and monstrous in death, and she ties Arthur to her, because by the last page he too is a parent who has lost a child in an accident with a pony and trap. The Edexcel examiners’ report for 2025 praised answers that drew this parallel between Arthur and Jennet as bereaved parents.',
    },
    {
      title: 'Children and the loss of innocence',
      body: 'Children are the novel’s victims and its silent witnesses. The frame opens with Arthur’s step-grandsons asleep upstairs on Christmas Eve, so the reader carries children into the story. At the funeral a line of schoolchildren stands motionless at the railings, and only in Chapter 11, when Samuel Daily explains the curse, does Arthur remember that “row of small, solemn faces” and understand what they were watching. Eel Marsh House keeps a nursery full of toys, tidy and cared for, as if its child might return. The cries Arthur hears on the marsh are a child’s, and his own childhood memories comfort him in Chapter 10 until that cry breaks in. Innocence is lost in Arthur too: the older narrator looks back on his untroubled first night at the inn, before the funeral, as a time of ease he never recovered. One reading is that Hill uses children simply because their deaths are the most shocking. A deeper one is that the novel is about what adults fail to protect children from, including a society that parted Jennet from her son.',
    },
    {
      title: 'The past, memory and storytelling',
      body: 'The past will not stay past in this novel. In Chapter 1 Arthur says the experience is “woven into my very fibres”, and he decides “I would write my own ghost story” as a kind of exorcism. At Eel Marsh House the past is preserved: Mrs Drablow kept every scrap of paper, and the nursery is kept in perfect order, as if its child might come back. It is also repeated: the accident on the causeway replays itself as sound, and in Chapter 12 it happens again, at a fair outside London, to Arthur’s own wife and child. Hill links memory to silence. Samuel Daily tells Arthur, “Those who have suffered worst say least” (Chapter 11), and Arthur has kept his story to himself for years. The last words, “They asked for my story. I have told it. Enough.”, can be read in two ways: as a man who has finally put his burden down, or as a man who has relived it in full and can bear no more. The second reading fits the evidence of the frame, in which he dreads the night ahead even after deciding to write.',
    },
  ],

  characters: [
    {
      name: 'Arthur Kipps',
      role: 'The narrator: a solicitor looking back on what happened to him as a young man',
      body: 'Arthur tells the story twice over, as the older man writing it and as the young man living it, and the gap between them is the novel’s central irony. The young Arthur is a junior solicitor in his early twenties, engaged to Stella, cheerful, ambitious and a little superior about country people and their superstitions. He is brave to the point of foolishness: he returns to Eel Marsh House after the graveyard and the causeway, partly out of duty to his firm and partly out of pride and curiosity. Under the haunting he changes, from confidence to terror, then to exhaustion, pity and a breakdown into fever. The older Arthur, married to Esmé and stepfather to her four children, is happy but damaged: he cannot bear a ghost story at Christmas, and he tells us his story because he cannot escape it. As a narrator he is honest about his fear and shame, which makes him believable, and his hints about what is coming create dread. The Eduqas paper of June 2023 asked how Hill creates sympathy for him, and the answer lies largely in that honesty and in his final loss.',
    },
    {
      name: 'The woman in black (Jennet Humfrye)',
      role: 'The ghost who haunts Crythin Gifford and Eel Marsh House',
      body: 'Arthur first sees her at Mrs Drablow’s funeral: a young woman in old-fashioned full mourning, extremely pale, with skin stretched tight over her bones and sunken eyes, who looks as though she has been starved and whom he takes to be dying. In the graveyard by the house her face shows hatred and longing, and he feels he may die of fear. Other people react to her without admitting they have seen her: Mr Jerome turns pale and denies it. In life she was Jennet Humfrye, Mrs Drablow’s sister, an unmarried mother forced to give up her son. Her letters, which Arthur reads in Chapter 9, show her love and her fury; Samuel Daily tells him in Chapter 11 how the boy drowned, how she watched it, and how she wasted away and died. Since then her appearances have been followed by the death of a child. In Chapter 12 she causes the accident that kills Arthur’s son. The question every essay on her should face is whether she is victim or villain. Hill makes her both, and the best answers show how the first became the second.',
    },
    {
      name: 'Alice Drablow',
      role: 'Arthur’s late client, the reclusive owner of Eel Marsh House, and Jennet’s sister',
      body: 'Mrs Drablow is dead before the story begins and never speaks, yet the whole plot turns on her. She lived alone at Eel Marsh House for many years, and the townspeople’s wariness at her name is the first hint of mystery. She kept every scrap of paper, which is why Arthur has to stay; among those papers are Jennet’s letters. With her husband she brought up Jennet’s son as her own, and her funeral is where the horror begins. One reading is that she is a cruel figure who took a child from his mother; another is that she did what her family and society expected. Either way, her death does not end Jennet’s grief and hatred: the woman in black appears at her funeral.',
    },
    {
      name: 'Samuel Daily',
      role: 'A wealthy local landowner who becomes Arthur’s friend and rescuer',
      body: 'Arthur meets Samuel Daily on the train north in Chapter 3 and is at first a little snobbish about a man who has made money late. Daily turns out to be the most generous person in the novel. He gives Arthur a lift, invites him to dinner, warns him not to go back to the house, and, when Arthur insists, lends him his dog Spider. He comes out to Eel Marsh House to rescue him, takes him away from it, and in Chapter 11 tells him the full story of Jennet and the curse. He is the voice of plain sense and of the town’s grief: Crythin Gifford, he says, has lived with the curse for fifty years, and “Those who have suffered worst say least”, naming Mr Jerome and Keckwick. Later he becomes godfather to Arthur and Stella’s son. He stands for the ordinary, kindly world that the haunting threatens.',
    },
    {
      name: 'Mr Jerome',
      role: 'Mrs Drablow’s agent in Crythin Gifford',
      body: 'Mr Jerome meets Arthur for the funeral and is courteous but closed. When Arthur mentions the young woman in black, he turns pale, says he saw no one, and grips Arthur’s wrist when she reappears. He will not go to Eel Marsh House, and in Chapter 7, when Arthur asks for help with the papers, he says that nobody in the town will go out to the house, and he is plainly afraid of the subject. His fear is the reader’s first clue that the woman is not what Arthur thinks, and Samuel Daily later names him among those who have suffered worst.',
    },
    {
      name: 'Keckwick',
      role: 'The silent driver who takes Arthur across the causeway',
      body: 'Keckwick drives Arthur to Eel Marsh House in a pony and trap, says almost nothing, and leaves him there until the tide allows him back. After the night of the mist he arrives at the house in the early hours and rings the bell; Arthur, who thought he had heard Keckwick’s own trap go down, is astonished to see him, but Keckwick says little beyond remarking, matter-of-factly, that nobody crosses while a sea-mist is up. His calm on the causeway contrasts with the terrifying ghost trap Arthur hears, and Samuel Daily later names him, with Mr Jerome, as one of those who have suffered most and speak least. He is a reminder that the town’s silence comes from pain, not from ignorance.',
    },
    {
      name: 'Mr Bentley',
      role: 'Arthur’s employer at the London law firm',
      body: 'Mr Bentley sends Arthur north in Chapter 2 and presents the job as a routine errand of a day or two for a long-standing client. He explains the tide but says little else about the house. When Arthur reports that the papers will take several days, Bentley agrees that he should stay on and finish the job. In the frame he is the man Arthur was with when he first saw Monk’s Piece, the house he later bought. His ordinary, busy London world is what Arthur leaves behind and cannot return to unchanged.',
    },
    {
      name: 'Stella',
      role: 'Arthur’s fiancée, later his first wife',
      body: 'Stella is in London for most of the story. She writes to Arthur, and in Chapter 11 she arrives to take him home while he recovers from his fever. They marry soon after his return and have a son. At the fair in Chapter 12 she is riding in the pony cart with the baby when the woman in black moves as if to step into the pony’s path, and the pony bolts; she survives the crash with terrible injuries and dies ten months later. Hill gives her little inner life, and one reading is that this is deliberate: she stands for the ordinary happiness the haunting destroys, and her death is the point at which Arthur’s story and Jennet’s become the same story.',
    },
    {
      name: 'Esmé',
      role: 'Arthur’s second wife, in the Christmas Eve frame',
      body: 'Esmé has four children from her first marriage, Isobel, Oliver, Will and Edmund, and the older Arthur loves them as his own; Isobel is already the mother of three young sons, who are asleep upstairs on Christmas Eve. Their cheerful ghost-story game shows they have no idea what he went through, which is why it is so painful to him. The happy family in the frame is what Arthur has rebuilt after his loss, and the reader, knowing how the story ends, feels how fragile it is.',
    },
    {
      name: 'Spider',
      role: 'Samuel Daily’s small terrier, lent to Arthur for company',
      body: 'Spider goes with Arthur to Eel Marsh House and senses the haunting before he does, waking him with her growling when a noise starts up behind the locked nursery door. In Chapter 10 an unseen whistle calls her out onto the marsh, where she is nearly sucked under, and Arthur risks his own life to pull her out. She matters in two ways: she is the warmth and company that keep him sane, and her reactions show the reader that the haunting is not only in Arthur’s mind.',
    },
    {
      name: 'Nathaniel',
      role: 'Jennet’s son, who drowned as a child in the marsh',
      body: 'Nathaniel was brought up by Alice Drablow and her husband, and Jennet was eventually allowed to see him. He drowned with his nursemaid, Rose Judd, when the pony and trap carrying them was lost in the marsh, and Jennet watched from the house; Arthur finds their death certificates among Mrs Drablow’s papers. He never appears except as sound: the child’s cries Arthur hears on the causeway are his, repeating the accident. The nursery kept for him at Eel Marsh House is the heart of the haunting.',
    },
    {
      name: 'Joseph',
      role: 'Arthur and Stella’s baby son',
      body: 'Arthur and Stella’s son is born in London after their marriage, and they name him Joseph Arthur Samuel, with Samuel Daily as his godfather. At the fair he rides in the pony cart with his mother, waving his arms with delight, and he is killed when it crashes and he is thrown against a tree. His death is Jennet’s revenge on Arthur and repeats her own loss, a child killed in a pony and trap, almost exactly.',
    },
  ],

  keyQuotes: [
    {
      text: 'a story of haunting and evil, fear and confusion, horror and tragedy',
      where: 'Arthur Kipps, narrating, Chapter 1 (Christmas Eve)',
      analysis:
        'Arthur announces his story in three pairs of abstract nouns linked by and, a list that grows heavier as it goes, ending on tragedy rather than fear. It works as a promise and a warning at once: the reader knows from the first chapter that this will end in loss, so the suspense is not whether something terrible happens but how. The pairs also set out the novel’s range, from the supernatural (haunting, evil) to the psychological (fear, confusion) to the human cost.',
    },
    {
      text: 'a fog that choked and blinded, smeared and stained',
      where: 'Arthur Kipps, narrating, Chapter 2 (A London Particular)',
      analysis:
        'The London fog is personified as an attacker, and the four verbs move from the body (choked, blinded) to the dirt it leaves behind (smeared, stained). Hill uses fog from the start as a sign of danger that cannot be seen, and it returns on the causeway in Chapter 6. The young Arthur is cheerfully unbothered by it, which is the first of many warnings he ignores.',
    },
    {
      text: 'half-hints and dark mutterings',
      where:
        'Arthur Kipps, narrating, Chapter 4 (The Funeral of Mrs Drablow), at the lunch after the funeral',
      analysis:
        'Arthur is growing impatient with grown men who will not say what they mean about Mrs Drablow. The phrase captures how Hill builds mystery: through what the townspeople leave unsaid. Arthur hears the silence as small-town superstition; the reader begins to hear it as fear. Edexcel used this line to introduce a question on how mystery is created, and it is a good starting point for the theme of silence.',
    },
    {
      text: 'some terrible wasting disease',
      where: 'Arthur Kipps, narrating, Chapter 4, at the funeral',
      analysis:
        'Arthur’s first explanation for the woman’s appearance is medical and sympathetic: he assumes she is ill and even resolves to offer her help. The rational explanation is also, in its way, true, since Jennet did waste away before she died. Hill lets the reader feel pity for her before fear, which prepares for the moral complexity of the ending.',
    },
    {
      text: 'desperate, yearning malevolence',
      where: 'Arthur Kipps, narrating, Chapter 5 (Across the Causeway), in the graveyard',
      analysis:
        'Arthur struggles for words and settles on a paradox. Yearning is longing, a feeling of lack; malevolence is the wish to do harm. Joined together, they are the whole of Jennet’s story in three words: a mother who wants what was taken from her, and hates whoever took it. The adjective desperate adds that the feeling is beyond control, which makes her more frightening than a simple villain.',
    },
    {
      text: 'I did not believe in ghosts',
      where: 'Arthur Kipps, narrating, Chapter 5, after he flees the graveyard',
      analysis:
        'A short, flat declarative from a rational man, and the past tense does the work: he goes on to explain that this was true only until that day. It marks the turning point in his development, the moment the sceptic is forced to consider what he has always dismissed. Eduqas quoted this line to frame a question on the events that change his mind.',
    },
    {
      text: 'It is remarkable how powerful a force simple curiosity can be.',
      where: 'Arthur Kipps, narrating, Chapter 5, in the hall of Eel Marsh House',
      analysis:
        'Having run from the graveyard in terror, Arthur finds that he still wants an explanation more than he wants to leave. The older narrator comments on his younger self with rueful hindsight. Curiosity is what drives him back to the house and into danger, so this sentence is both a key to his character and a quiet piece of foreshadowing.',
    },
    {
      text: 'the mist played tricks with sound as well as sight',
      where: 'Arthur Kipps, narrating, Chapter 6 (The Sound of a Pony and Trap), on the causeway',
      analysis:
        'This is the moment the novel’s fear becomes aural. Robbed of sight by the mist, Arthur must rely on hearing, and even that deceives him, as the sound of the trap seems to come from the wrong direction. The personified mist plays tricks, as if deliberately. Hill makes the reader listen with him. When Eduqas printed this passage in 2025, its examiners reported that most candidates used it to analyse her aural imagery and the disorientation it creates.',
    },
    {
      text: 'that door was now standing open. Wide open.',
      where: 'Arthur Kipps, narrating, Chapter 9 (In the Nursery)',
      analysis:
        'The long sentence before this repeats the door again and again, insisting that it had been locked and could not be opened, and that anaphora builds certainty. Then the minor sentence Wide open lands like the door swinging back. Hill uses sentence length as a physical shock: after all Arthur’s reasoning, two words of fact overturn it.',
    },
    {
      text: 'he is mine, mine, he can never be yours',
      where: 'Jennet Humfrye, in a letter to her sister Alice, read by Arthur in Chapter 9',
      analysis:
        'Jennet gives her son up and claims him in the same breath. The repeated possessive mine is love, grief and a refusal to let go at once, and the absolute never looks forward to a possession that death does not end. Edexcel used this letter to introduce a question on love, and it is the best evidence that the ghost’s hatred began as a mother’s love.',
    },
    {
      text: 'I began to doubt my own reality',
      where: 'Arthur Kipps, narrating, Chapter 10 (Whistle and I’ll Come to You)',
      analysis:
        'After sensing someone pass him on the landing, Arthur has tried every rational explanation and rejected them all. The threat has moved from the house into his mind: a man who doubts his own reality has nothing left to stand on. It is the low point of the reason-against-belief argument that runs through the novel.',
    },
    {
      text: 'Those who have suffered worst say least',
      where: 'Samuel Daily, Chapter 11 (A Packet of Letters), naming Mr Jerome and Keckwick',
      analysis:
        'Daily explains the town’s silence that so irritated Arthur. It was never superstition; it was grief too painful to speak of. The line changes how the reader sees every earlier refusal, and it applies to Arthur himself, who has said nothing about his own suffering for years until the Christmas Eve game drives him to write.',
    },
    {
      text: 'In some violent or dreadful circumstance, a child has died.',
      where: 'Samuel Daily, Chapter 11, explaining what follows each sighting',
      analysis:
        'The curse is finally stated, in plain words and with a formal, almost legal balance: violent or dreadful. Daily speaks it only after Arthur whispers for him to go on, so Hill delays it for maximum effect. Once the reader knows this rule, the ending becomes inevitable, which turns the last chapter into dread rather than surprise.',
    },
    {
      text: 'her pent-up hatred and desire for revenge permeated the air all around',
      where: 'Arthur Kipps, narrating, Chapter 11, as he pieces together Jennet’s story',
      analysis:
        'Arthur begins to understand the feelings that flooded him at Eel Marsh House. The verb permeated makes Jennet’s feelings a presence that soaks into everything, like damp or fog, so the haunting is emotional before it is physical. Pent-up suggests emotion held in for years and bound to burst out, which is exactly what happens in the final chapter.',
    },
    {
      text: 'It pierced me through.',
      where: 'Arthur Kipps, narrating, Chapter 12 (The Woman in Black), at the fair',
      analysis:
        'Four words describe what Arthur feels when the woman looks at him at the fair, and the verb makes her gaze a weapon. The shortness of the sentence after a long description of her malevolence mimics the sudden physical shock, and it comes moments before the accident.',
    },
    {
      text: 'I had seen the ghost of Jennet Humfrye and she had had her revenge.',
      where: 'Arthur Kipps, narrating, Chapter 12',
      analysis:
        'The climax of the story is told in one flat, balanced sentence, with no adjectives and no exclamation. The calm is the horror: Arthur states the rule Daily told him and its fulfilment as a finished fact. The doubled had had closes the account, and the sentence gives the ghost her own name rather than the novel’s title, so the woman in black ends the story as a person with a history.',
    },
    {
      text: 'They asked for my story. I have told it. Enough.',
      where: 'Arthur Kipps, the last line of the novel, Chapter 12',
      analysis:
        'The final words return to the Christmas Eve frame and close it. Two short sentences and a one-word sentence show a man with no strength left for description. Enough can be read as release, the story finally put down, or as exhaustion and refusal. Note that the novel says They asked, not They have asked, however often it is misquoted.',
    },
  ],

  extracts: [
    {
      title: 'The woman in black at the funeral',
      where: 'Chapter 4, The Funeral of Mrs Drablow',
      pointer:
        'In the church, after Arthur hears a rustle behind him and turns: from the sentence beginning “She was dressed in deepest black” to the moment the woman slips out to stand beside a moss-covered headstone near the open grave. Eduqas printed this passage in its June 2024 paper.',
      summary:
        'Arthur describes the woman who has come into the church. She wears old-fashioned full mourning that looks as if it has been taken out of an old trunk; her skin is stretched tight over her bones and her eyes are sunken, like someone starving. He assumes she is dying of an incurable illness, pities her, and decides to offer help after the service, but she slips out to the grave before he can speak to her.',
      annotations: [
        {
          phrase: 'in the style of full mourning',
          note: 'Her dress is out of date, a clue that she belongs to an earlier time. It also tells us, before anything else, that she is grieving.',
        },
        {
          phrase: 'some terrible wasting disease',
          note: 'Arthur reaches for a rational, medical explanation and feels pity, not fear. His kindness makes the later horror sharper, and the explanation is half true.',
        },
        {
          phrase: 'a curious, blue-white sheen',
          note: 'The colour words make her skin unnatural, closer to bone or something dead than to living flesh, although Arthur does not yet draw that conclusion.',
        },
        {
          phrase: 'as though she had been a victim of starvation',
          note: 'The simile makes her a victim, and the word will prove apt: Jennet was starved of the one thing she wanted, her child.',
        },
        {
          phrase: 'quite possibly no more than thirty',
          note: 'She is young, which makes her illness more pitiful and her presence at an old woman’s funeral more puzzling. It is a detail the reader stores away.',
        },
      ],
      question:
        'Using this extract as a starting point, write about how Hill presents the woman in black as both frightening and pitiable at different points in the novel.',
    },
    {
      title: 'Sounds in the mist on the causeway',
      where: 'Chapter 6, The Sound of a Pony and Trap',
      pointer:
        'From Arthur’s realisation, as he waits on the causeway, that the mist is distorting sound, to his certainty that the trap has lost the path and is being dragged under by the quicksand and the incoming tide. Eduqas printed this passage in its June 2025 paper.',
      summary:
        'Lost in the mist on the causeway, Arthur hears what he thinks is Keckwick’s pony and trap, but the sound seems to come from out on the marsh. It stops abruptly, and he hears a sucking, churning noise, a horse in panic and the terrified cries of a young child. Unable to see anything, he stands helpless, certain he is hearing a trap with a child in it sinking into the marsh.',
      annotations: [
        {
          phrase: 'the mist played tricks with sound as well as sight',
          note: 'The mist is personified as a trickster. Having lost sight, Arthur now cannot trust his hearing either, so the reader, like him, cannot be sure of anything.',
        },
        {
          phrase: 'a curious draining, sucking, churning sound',
          note: 'Three present participles, the last two onomatopoeic, pile up like the mud itself. The list slows the sentence and makes the reader hear the marsh swallowing something.',
        },
        {
          phrase: 'presumably Keckwick',
          note: 'Arthur’s logical guess, set off by dashes, is wrong, which the reader learns when Keckwick arrives safely later. Reason keeps misreading the supernatural.',
        },
        {
          phrase: 'I stood absolutely helpless in the mist',
          note: 'The adverb absolutely stresses total powerlessness. Helplessness in the face of a child’s suffering is one of the novel’s central horrors, and it returns in Chapters 10 and 12.',
        },
      ],
      question:
        'Using this extract as a starting point, write about how Hill presents helplessness at different points in the novel.',
    },
    {
      title: 'The nursery door',
      where: 'Chapter 9, In the Nursery',
      pointer:
        'From Arthur running to the corner of the corridor, with his heart leaping, to the end of the paragraph in which the door stands wide open and the rocking goes on. Eduqas printed this passage in its October 2020 paper.',
      summary:
        'Following Spider and the bumping noise, Arthur reaches the end of the corridor and finds that the nursery door, which was locked and had no keyhole, is standing wide open. The room beyond is dark except for a strip of light from the landing. He stands frozen, his mind full of confused fears of ghosts and intruders, while the rocking sound continues inside.',
      annotations: [
        {
          phrase: 'that door was now standing open. Wide open.',
          note: 'The long sentence insists the door could not be opened; then two words overturn it. The minor sentence is a jolt, like the sight itself.',
        },
        {
          phrase: 'I lost all sense of time and ordinary reality.',
          note: 'Fear takes away the frameworks a rational man relies on, time and reality, and anticipates his doubt of his own reality in Chapter 10.',
        },
        {
          phrase: 'visions of spectres and of real fleshy intruders',
          note: 'Arthur’s mind swings between the supernatural and the rational explanation. Hill keeps both in play, so the reader too is unsure which to fear.',
        },
        {
          phrase: 'the rocking continued. Rocking.',
          note: 'The one-word sentence repeats the sound, so the reader hears it go on. A rocking chair should be a comforting domestic sound; here it is the most frightening thing in the house.',
        },
      ],
      question:
        'Using this extract as a starting point, write about how Hill presents Arthur’s struggle between reason and fear at different points in the novel.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Pathetic fallacy and the symbol of fog',
      example:
        'The London fog “that choked and blinded, smeared and stained” (Chapter 2); the mist on the causeway in Chapter 6; the storm in Chapter 10.',
      effect:
        'The weather does more than set a mood: it acts on Arthur. Fog takes away his sight whenever danger is near, so it becomes a symbol of what he cannot see or understand. The term pathetic fallacy, for weather that reflects feeling, was coined by John Ruskin in 1856; here the weather often seems to know more than the narrator does.',
    },
    {
      technique: 'Aural imagery and onomatopoeia',
      example:
        '“a curious draining, sucking, churning sound” (Chapter 6); the bumping and then the rocking behind the nursery door (Chapter 9); the whistle that calls Spider onto the marsh (Chapter 10).',
      effect:
        'Much of the horror is heard rather than seen. Sound works on the reader’s imagination, which fills in what the text withholds, and it cannot be shut out. The Eduqas examiners’ report for 2025 noted that most candidates used the causeway passage to analyse Hill’s aural imagery and the disorientation it creates.',
    },
    {
      technique: 'Contradictory pairings in description',
      example:
        '“desperate, yearning malevolence” (Chapter 5); the house “isolated, uncompromising but also, I thought, handsome” (Chapter 5).',
      effect:
        'Hill joins feelings or qualities that pull against each other: longing and hatred, danger and beauty. The effect is unsettling, because the reader is asked to feel two things at once, and it matches a novel whose ghost is both victim and villain and whose landscape is both lovely and lethal.',
    },
    {
      technique: 'Short and minor sentences for shock',
      example:
        '“Wide open.” and “Rocking.” (Chapter 9); “It pierced me through.” (Chapter 12); the final “Enough.”',
      effect:
        'Hill’s narrator writes long, careful, clause-heavy sentences, so when a sentence shrinks to one or two words the reader feels the jolt physically. The minor sentences come at the moments when reasoning fails and bare fact takes over.',
    },
    {
      technique: 'Similes of isolation and light',
      example:
        'Eel Marsh House standing “like some lighthouse or beacon” (Chapter 5); the house “steady as a lighthouse” in the storm (Chapter 10).',
      effect:
        'A lighthouse is lonely and exposed, but it is also a guide and a warning to others. Hill repeats the image so that the house is both isolated and a kind of warning signal. There is irony too: in Chapter 10 the lights go out and Arthur’s torch breaks, so the house compared to a lighthouse is left without light.',
    },
    {
      technique: 'Lists and repetition of abstract nouns',
      example:
        '“a story of haunting and evil, fear and confusion, horror and tragedy” (Chapter 1); “the purest evil and hatred and loathing” in the graveyard (Chapter 5).',
      effect:
        'The piled-up nouns, joined by repeated and (polysyndeton), make the emotions feel overwhelming and endless, as if no single word is enough. They also show a narrator straining to name feelings that go beyond ordinary language.',
    },
    {
      technique: 'Embedded documents: the letters',
      example:
        'Jennet’s letters to her sister in Chapter 9: Arthur’s summary of the early ones, full of a “desperate, clinging affection”, gives way to her own words, “he is mine, mine, he can never be yours”.',
      effect:
        'For a few pages the reader hears Jennet’s own voice, not Arthur’s. The shift into her words makes her a real person with a history before she is revealed as the ghost, and it lets Hill create sympathy that the ending then tests. The letters work as evidence too, fitting a narrator who is a lawyer.',
    },
    {
      technique: 'Retrospective foreshadowing',
      example:
        'In Chapter 1 the story is “woven into my very fibres”; in Chapter 4 the older Arthur looks back on his untroubled first night at the inn, knowing what came next; in Chapter 5 he says curiosity is a powerful force.',
      effect:
        'The older narrator knows how the story ends and lets the reader know that he knows. These hints create dread rather than surprise: the reader waits for disaster, and ordinary moments become ominous. It also gives the novel its tone of weary sadness.',
    },
    {
      technique: 'Understatement at the climax',
      example:
        '“I had seen the ghost of Jennet Humfrye and she had had her revenge.” (Chapter 12).',
      effect:
        'At the most terrible moment, Hill withholds description. The plain, balanced sentence is more shocking than detail would be, because it sounds like a man who has lived with the fact for years and has no emotion left to spend on telling it.',
    },
  ],

  structureForm: [
    {
      heading: 'A frame narrative',
      body: 'The novel is a story within a story. Chapter 1 is set many years after the events, on a happy Christmas Eve, and shows us the older Arthur, safe but haunted, deciding to write. Chapters 2 to 12 are his written account, and the last line returns briefly to the frame. The frame does several jobs: it tells us Arthur survived, which shifts the suspense from whether he will live to what it cost him; it sets up the Christmas ghost story tradition only to reject it; and it gives the reader a happy family to worry about. The Edexcel examiners’ report for 2025 praised answers that saw how the framing device builds suspense.',
    },
    {
      heading: 'A first-person, retrospective narrator',
      body: 'Everything comes to us through Arthur, so we know only what he saw, heard and felt, and we share his uncertainty. But he is writing years later, and his hindsight shapes the telling: he judges his younger self, hints at what is coming and records his own fear and shame. This double view, the young man who does not know and the old man who does, creates dramatic irony and dread. It also raises the question of reliability, since the only witness to most of the haunting is a man who later falls ill with fever and doubts his own reality.',
    },
    {
      heading: 'Twelve titled chapters and a slow build',
      body: 'Each chapter has a title, and several name what will frighten: The Sound of a Pony and Trap, In the Nursery, Whistle and I’ll Come to You. The chapter titles are Christmas Eve; A London Particular; The Journey North; The Funeral of Mrs Drablow; Across the Causeway; The Sound of a Pony and Trap; Mr Jerome is Afraid; Spider; In the Nursery; Whistle and I’ll Come to You; A Packet of Letters; The Woman in Black. The first three chapters contain nothing supernatural; the woman appears in Chapter 4; the haunting moves from sight (Chapters 4 and 5) to sound (Chapter 6) to the inside of the house (Chapters 9 and 10), is explained (Chapter 11) and is fulfilled (Chapter 12). The last chapter takes the novel’s title, so the woman in black is saved for the end.',
    },
    {
      heading: 'Tension and release',
      body: 'Hill alternates terror with relief. The fear of the graveyard and causeway (Chapters 5 and 6) is followed by a calmer morning, a bicycle ride and a dinner (Chapters 7 and 8); the nights at Eel Marsh House (Chapters 9 and 10) are followed by rescue, rest and Stella’s arrival (Chapter 11); marriage and a baby in London open Chapter 12. Each release lowers the reader’s guard, and each is followed by something worse. The pattern peaks in the last chapter, where a happy family outing on a sunny day turns into the worst moment of Arthur’s life.',
    },
    {
      heading: 'A cycle that repeats',
      body: 'The novel’s central event happens three times. Nathaniel’s death in a pony and trap in the marsh took place before the story begins; Arthur hears it replayed as sound in Chapters 6 and 9; and in Chapter 12 it happens again when the pony cart carrying Stella and the baby crashes. The repetition makes the haunting feel like a curse that cannot be broken, and it links Arthur to Jennet. The novel itself repeats a cycle: it begins and ends with Arthur telling his story, and he tells it because he cannot stop reliving it.',
    },
    {
      heading: 'Withholding and delayed revelation',
      body: 'Hill withholds the explanation for as long as possible. The townspeople hint but will not tell; Mr Jerome denies seeing anything; the letters in Chapter 9 give part of the story; the death certificates and Samuel Daily’s account in Chapter 11 finally give the rest. The reader assembles the truth piece by piece, as Arthur does, and the explanation, when it comes, does not reassure: it reveals the rule that makes the ending inevitable.',
    },
    {
      heading: 'An abrupt ending',
      body: 'After chapters of careful, detailed description, the ending is brief. The accident is told in a few paragraphs, Stella’s death in a single sentence, and the story closes with three short sentences of frame. The contrast between the novel’s slow build and its sudden end mirrors the way the woman’s revenge falls, suddenly, on an ordinary happy afternoon. It also leaves the reader where Arthur is: with nothing more to say.',
    },
  ],

  vocabulary: [
    {
      term: 'solicitor',
      definition:
        'A lawyer who handles legal business such as wills, property and the affairs of people who have died, as Arthur does for Mrs Drablow.',
    },
    {
      term: 'causeway',
      definition:
        'A raised path or road across wet ground or shallow water. The Nine Lives Causeway is covered by the sea at high tide.',
    },
    {
      term: 'estuary',
      definition:
        'The wide mouth of a river where it meets the sea, with tidal water, mud and marsh.',
    },
    {
      term: 'pony and trap',
      definition:
        'A small, light, two-wheeled carriage pulled by a pony. It is the vehicle of Nathaniel’s death and of the final accident.',
    },
    {
      term: 'recluse',
      definition:
        'A person who lives alone and avoids other people. Mrs Drablow is described as reclusive.',
    },
    {
      term: 'malevolence',
      definition:
        'The wish to do evil or harm to others. Arthur senses it in the woman’s face in Chapter 5.',
    },
    {
      term: 'mourning',
      definition:
        'The period and customs of grieving for someone who has died, including, for the Victorians, wearing black clothes. Full mourning was the deepest stage.',
    },
    {
      term: 'wasting disease',
      definition:
        'An illness that makes the body thin and weak until the person looks starved, as the woman in black does.',
    },
    {
      term: 'spectre',
      definition: 'A ghost or phantom, especially a frightening one.',
    },
    {
      term: 'nursery',
      definition:
        'A room in a house set aside for young children to sleep and play in. The locked nursery at Eel Marsh House is the heart of the haunting.',
    },
    {
      term: 'Martello tower',
      definition:
        'A small round coastal fort, many of which were built along the south and east coasts of England between 1804 and 1812 against a French invasion.',
    },
    {
      term: 'London particular',
      definition:
        'An old name for the thick, yellowish, polluted fogs of London, and the title of Chapter 2.',
    },
    {
      term: 'exorcise',
      definition:
        'To drive out an evil spirit. Arthur hopes to exorcise his memory by writing it down.',
    },
    {
      term: 'Gothic',
      definition:
        'A kind of fiction built on fear, mystery and the supernatural, often set in isolated old houses, in darkness, fog and storm.',
    },
    {
      term: 'pastiche',
      definition:
        'A new work written deliberately in the style of an older one. The novel is often called a pastiche of the Victorian ghost story.',
    },
    {
      term: 'frame narrative',
      definition:
        'A story told inside another story. The Christmas Eve chapter is the frame around Arthur’s account.',
    },
    {
      term: 'retrospective narrator',
      definition:
        'A narrator who tells the story looking back from a later time, and so can comment on it with hindsight.',
    },
    {
      term: 'pathetic fallacy',
      definition:
        'Weather or nature that seems to reflect human feelings or events, like the fog and storms of this novel.',
    },
    {
      term: 'foreshadowing',
      definition:
        'A hint of what will happen later, such as the older Arthur’s warnings about his younger self.',
    },
    {
      term: 'epistolary',
      definition:
        'Told through letters. Jennet’s letters in Chapter 9 are an epistolary passage inside the novel.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          '“the mist played tricks with sound as well as sight” (Arthur Kipps, Chapter 6). Explore how Hill uses sound to create fear in The Woman in Black. You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay with context (Edexcel style)',
        guidance: [
          'Open with an argument: for example, that Hill makes sound more frightening than sight because it cannot be shut out and forces the reader to imagine what is not described.',
          'Start with the causeway in Chapter 6: the mist takes away sight, the trap sounds come from the wrong place, and Arthur hears a child die without seeing anything.',
          'Move inside the house: the bumping behind the locked door and the rocking chair in Chapter 9, and the child’s cry and the presence on the landing in Chapter 10.',
          'Show how the sounds are explained in Chapter 11, when Samuel Daily tells the story of Nathaniel’s drowning, and how explanation brings no comfort.',
          'Weave in context: the Victorian ghost story tradition that Hill imitates, which frightened through suspense and suggestion rather than gore, and the Christmas custom of ghost stories told aloud in the dark.',
          'End with Chapter 12, where sound returns in the sickening noise of the crash, and argue why the novel’s last shock is heard before it is seen.',
          'Keep your focus on the whole novel and on ideas and context; this question does not ask for close analysis of single words, so use quotations briefly as evidence.',
        ],
      },
      {
        question:
          '“he is mine, mine, he can never be yours” (Jennet Humfrye, in a letter to her sister). In what ways is Jennet Humfrye presented as a victim in The Woman in Black? You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay on character with context (Edexcel style)',
        guidance: [
          'State a view in your introduction, for example that Hill presents Jennet as a victim in life and a villain in death, and that the novel asks us to hold both.',
          'Use the letters in Chapter 9 to show her love for her son and her fury at being forced to give him up.',
          'Bring in context: the stigma on unmarried mothers, and the way children were passed to relatives rather than kept by their mothers. Samuel Daily says she had no choice.',
          'Explain her suffering: she watched her son drown and wasted away, which links back to Arthur’s first sight of her at the funeral.',
          'Then weigh the other side: since her death she has caused children’s deaths, including Arthur’s son, who did nothing to her.',
          'Compare her with Arthur as a bereaved parent at the end, and conclude with a judgement about what Hill wants us to feel.',
        ],
      },
      {
        question:
          'Using the extract from Chapter 6, in which Arthur hears the pony and trap in the mist, as a starting point, write about how Hill uses the setting of the marshes and Eel Marsh House to create fear at different points in the novel. In your response you should refer to the extract and the novel as a whole, and show your understanding of characters and events in the novel.',
        skill: 'Extract-based essay widening to the whole novel (Eduqas style)',
        guidance: [
          'Begin with close analysis of the extract: the personified mist, the aural imagery of the sucking, churning sound, and the helplessness of the narrator.',
          'Show how the extract fits a pattern: the causeway and tide make the house an island cut off from help, as Mr Bentley warned in Chapter 2.',
          'Move to Arthur’s first sight of the house in Chapter 5, isolated and handsome, and the graveyard where he sees the woman.',
          'Explore the inside of the house: the locked nursery, the rocking chair, the storm and the failing lights in Chapters 9 and 10.',
          'Include the marsh as a physical danger: Spider nearly drowning in Chapter 10.',
          'Conclude on how the setting holds the past: the marsh that took Nathaniel keeps replaying his death, and the danger follows Arthur to a fair outside London.',
          'Write accurately and in varied sentences, since the accuracy of your spelling, punctuation and vocabulary is credited on this question.',
        ],
      },
      {
        question:
          'Using the extract from Chapter 1, in which Arthur decides to write his story on Christmas Eve, as a starting point, write about the importance of the past and memory in The Woman in Black. In your response you should refer to the extract and the novel as a whole, and show your understanding of characters and events in the novel.',
        skill: 'Extract-based essay on a theme (Eduqas style)',
        guidance: [
          'Analyse the extract: the story is woven into his very fibres, like an old wound, and writing is imagined as a way to exorcise a ghost.',
          'Explain the frame: the happy present at Monk’s Piece and the past that intrudes on it at the mention of ghost stories.',
          'Show how the past is preserved at Eel Marsh House: Mrs Drablow’s papers, the untouched nursery, the letters.',
          'Show how the past repeats: the replayed accident on the causeway and the final accident in Chapter 12.',
          'Discuss silence and memory: the townspeople who will not speak, and Samuel Daily’s line that those who suffered worst say least.',
          'End with the last line and argue whether telling the story frees Arthur from the past or not.',
        ],
      },
    ],
    tips: [
      'Know which board you are sitting. For Edexcel the question starts from a short quotation and you have no extract: credit comes from a clear argument across the whole novel and from context woven into it, and accurate spelling, punctuation and vocabulary are credited too. The Edexcel examiners’ report notes that exact quotation is not required in this closed-book exam, so an accurate reference to a moment is fine. For Eduqas you start from a printed extract and must widen to the whole novel, and close analysis of the writer’s language and structure counts.',
      'Do not write about the 2012 film. It changes the plot, the characters and the ending, and the Eduqas examiners warn that film references remain a problem on this text.',
      'Get the ending right. The baby is killed in the crash; Stella survives it and dies ten months later. Arthur is not in the cart. The last line is They asked for my story, not They have asked.',
      'Argue about Jennet, do not just describe her. The strongest answers explain how a mother’s love became revenge, and link her grief to Arthur’s at the end.',
      'Use the frame. Answers that notice the Christmas Eve opening, the older narrator’s hindsight and the return to the frame in the last line write about structure in a way that stands out.',
      'Track the stages of the haunting with chapter references: seen at the funeral and in the graveyard, heard on the causeway, felt inside the house, explained by Samuel Daily, fulfilled at the fair. That gives any essay a spine.',
      'Context should be specific and relevant: Victorian mourning dress, the stigma on unmarried mothers, the Christmas ghost story, the Gothic tradition Hill is imitating. A paragraph of general history bolted on at the end earns little.',
      'Remember Arthur’s rationalism. Many questions, on fear, belief, madness or change, are best answered by showing how a sceptic is worn down step by step.',
    ],
  },

  modelAnswer: {
    question:
      '“In some violent or dreadful circumstance, a child has died.” (Samuel Daily, Chapter 11). Explore the importance of children in The Woman in Black. You must refer to the context of the novel in your answer.',
    paragraph:
      'Hill makes children both the novel’s victims and its silent witnesses, and their silence is what makes them disturbing. At Mrs Drablow’s funeral Arthur notices a line of schoolchildren standing motionless at the railings and does not understand them, as he understands nothing at first. Only in Chapter 11, when Samuel Daily tells him that after every sighting of the woman “In some violent or dreadful circumstance, a child has died”, does he remember that “row of small, solemn faces” and understand what they were watching. Hill places the memory in the same conversation in which the curse is named, so the reader looks back on the funeral as a warning Arthur missed: the children knew what the adults would not say. The cruellest irony is that the ghost is herself a bereaved mother. Jennet was unmarried at a time when such women were shamed and their children were often handed to relatives, and her letters swing from love to the threat to “kill us both before I let him go”. Hill’s point is not simply that Jennet is evil. It is that a society which parted a mother from her child created the grief that now takes children from other families, and in Chapter 12 it takes Arthur’s own son.',
    commentary: [
      'It opens with an argument about children, victims and witnesses, rather than a list of moments, and every later sentence develops it.',
      'It ranges across the novel, from the funeral in Chapter 4 to Samuel Daily’s revelation in Chapter 11, Jennet’s letters in Chapter 9 and the ending, which is what a whole-text question rewards.',
      'It explains why a structural choice matters, the placing of Arthur’s memory in the conversation where the curse is named, instead of just noting that it happens.',
      'Context is woven into the argument: the treatment of unmarried mothers explains Jennet’s grief and is used to reach a judgement, not bolted on as a separate paragraph.',
      'It ends with a clear, arguable interpretation that connects Jennet’s loss to Arthur’s, which is the kind of link the examiners praised.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1, Christmas Eve',
      title: 'A ghost story he will not tell',
      summary:
        'On Christmas Eve at Monk’s Piece, Arthur’s stepchildren tell ghost stories and ask him for one. He refuses and leaves the house, shaken. In the orchard he decides to write down the true story that has haunted him for years.',
      setting: 'Monk’s Piece, a country house, at night by the fire and in the moonlit orchard',
      who: ['Arthur Kipps', 'Esmé'],
      quote: 'woven into my very fibres',
      themes: ['The past, memory and storytelling', 'Fear and the supernatural'],
      tension: 2,
      significance:
        'The frame tells us Arthur survived and suffered, so the suspense becomes how, not whether, the story ends in tragedy.',
    },
    {
      where: 'Chapter 2, A London Particular',
      title: 'Sent north in the fog',
      summary:
        'In a thick November fog in London, Mr Bentley sends the young Arthur to Crythin Gifford to attend Mrs Drablow’s funeral and collect her papers from Eel Marsh House, which can be reached only at low tide.',
      setting: 'A law office in London, in a choking yellow fog',
      who: ['Arthur Kipps', 'Mr Bentley'],
      quote: 'a fog that choked and blinded, smeared and stained',
      themes: ['Isolation', 'Reason against belief'],
      tension: 1,
      significance:
        'Arthur treats the errand as an adventure from a Victorian novel; the fog is the first warning he ignores.',
    },
    {
      where: 'Chapter 3, The Journey North',
      title: 'A stranger on the train',
      summary:
        'On the last stage of the journey Arthur meets Samuel Daily, who notices the name Drablow on his papers, reacts oddly, and predicts he will be almost alone at the funeral. Daily offers him a lift to the Gifford Arms, where he is staying.',
      setting: 'A railway compartment on the last stage of the journey north',
      who: ['Arthur Kipps', 'Samuel Daily'],
      themes: ['Isolation', 'Reason against belief'],
      tension: 1,
      significance:
        'The first of many uneasy reactions to Mrs Drablow’s name, and the start of the friendship that later saves Arthur.',
    },
    {
      where: 'Chapter 4, The Funeral of Mrs Drablow',
      title: 'The woman at the funeral',
      summary:
        'At the funeral Arthur sees a young woman in old-fashioned mourning with a wasted face, and a row of silent children at the school railings. Mr Jerome turns pale and denies seeing her, and at lunch the farmers will not explain why nobody will go near Eel Marsh House.',
      setting:
        'The church and churchyard at Crythin Gifford, then a noisy lunch after a farm auction',
      who: ['Arthur Kipps', 'Mr Jerome', 'The woman in black (Jennet Humfrye)', 'Alice Drablow'],
      quote: 'some terrible wasting disease',
      themes: [
        'Fear and the supernatural',
        'Children and the loss of innocence',
        'Reason against belief',
      ],
      tension: 3,
      significance:
        'The woman appears, and the town’s silence begins; Arthur pities her, which prepares the novel’s double view of her.',
    },
    {
      where: 'Chapter 5, Across the Causeway',
      title: 'The graveyard by the house',
      summary:
        'Keckwick drives Arthur across the causeway to Eel Marsh House and leaves him. Exploring a ruined chapel’s graveyard, Arthur sees the woman again, her face full of hatred, and is paralysed with fear. She vanishes, he runs to the house, and he admits he did not believe in ghosts until that day.',
      setting: 'The causeway, the marsh and a small overgrown graveyard beside Eel Marsh House',
      who: ['Arthur Kipps', 'Keckwick', 'The woman in black (Jennet Humfrye)'],
      quote: 'desperate, yearning malevolence',
      themes: ['Fear and the supernatural', 'Reason against belief', 'Isolation'],
      tension: 4,
      significance:
        'The turning point in Arthur’s beliefs, and the first time he feels the woman’s hatred rather than her suffering.',
    },
    {
      where: 'Chapter 6, The Sound of a Pony and Trap',
      title: 'The accident in the mist',
      summary:
        'Setting out to walk back to the town across the causeway, Arthur is caught in a sudden mist and hears a pony and trap, then a horse in panic and a child’s cries as they sink into the marsh. He struggles back to the house and breaks down. Keckwick arrives in the early hours, unharmed.',
      setting: 'The Nine Lives Causeway in a thick mist, then the empty house at night',
      who: ['Arthur Kipps', 'Keckwick', 'Nathaniel'],
      quote: 'an agony of fear and frustration',
      themes: ['Fear and the supernatural', 'Isolation', 'Children and the loss of innocence'],
      tension: 5,
      significance:
        'The haunting becomes sound, and Arthur hears a child die without being able to help, a helplessness the novel returns to.',
    },
    {
      where: 'Chapter 7, Mr Jerome is Afraid',
      title: 'Daylight, and nobody will help',
      summary:
        'Back at the inn, Arthur’s first thought is to leave the business to Mr Jerome and take the first train home, but he decides instead to see the job through. Mr Jerome says nobody in the town will go out to the house, and is plainly afraid. Arthur writes to Mr Bentley that the papers will take several days, and goes off on a borrowed bicycle to clear his head.',
      setting: 'Mr Jerome’s office and the lanes around Crythin Gifford, by day',
      who: ['Arthur Kipps', 'Mr Jerome'],
      themes: ['Isolation', 'Reason against belief'],
      tension: 2,
      significance:
        'A lull that shows Arthur’s stubborn courage and the town’s fear, and sets up his decision to go back alone.',
    },
    {
      where: 'Chapter 8, Spider',
      title: 'A warning and a dog',
      summary:
        'Arthur dines with Samuel Daily, who warns him not to go back to Eel Marsh House. When Arthur insists on staying there to finish the papers, Daily lends him his small terrier, Spider, for company.',
      setting: 'Samuel Daily’s large, comfortable house in the evening',
      who: ['Arthur Kipps', 'Samuel Daily', 'Spider'],
      themes: ['Isolation', 'Reason against belief'],
      tension: 2,
      significance:
        'Arthur chooses danger out of pride and duty; Spider will be both his comfort and a witness to the haunting.',
    },
    {
      where: 'Chapter 9, In the Nursery',
      title: 'The letters and the rocking chair',
      summary:
        'At Eel Marsh House Arthur hears bumping behind a locked door. Next day he reads letters from Jennet to Alice about the son she was forced to give up. The sounds of the accident return, the locked door stands open, and inside a rocking chair is moving in an empty nursery.',
      setting: 'Eel Marsh House by day and night: the papers, the corridor and the nursery',
      who: ['Arthur Kipps', 'Spider', 'The woman in black (Jennet Humfrye)'],
      quote: 'kill us both before I let him go',
      themes: [
        'Grief, love and revenge',
        'Fear and the supernatural',
        'The past, memory and storytelling',
      ],
      tension: 4,
      significance:
        'Jennet’s own voice enters the novel, so the reader pities her just as the haunting reaches the house itself.',
    },
    {
      where: 'Chapter 10, Whistle and I’ll Come to You',
      title: 'Storm, whistle and marsh',
      summary:
        'A storm wakes Arthur, a child cries on the marsh and he senses someone pass him on the landing. His torch breaks. In the morning a whistle calls Spider onto the marsh and he risks his life to pull her out, then sees the woman at the nursery window and collapses.',
      setting: 'Eel Marsh House in a gale at night, then the marsh the next morning',
      who: ['Arthur Kipps', 'Spider', 'The woman in black (Jennet Humfrye)'],
      quote: 'I began to doubt my own reality',
      themes: ['Reason against belief', 'Fear and the supernatural', 'Isolation'],
      tension: 5,
      significance:
        'Arthur’s reason and strength both give out, and the haunting seems, for the first time, to strike at the living.',
    },
    {
      where: 'Chapter 11, A Packet of Letters',
      title: 'The story and the curse',
      summary:
        'Samuel Daily rescues Arthur, who finds the nursery wrecked as they leave. From death certificates and Daily’s account he learns how Nathaniel drowned and Jennet died, and that each sighting of her is followed by a child’s death. He falls ill with fever; Stella arrives to take him home.',
      setting: 'The drive back across the causeway, then the safety of the mainland',
      who: ['Arthur Kipps', 'Samuel Daily', 'Stella'],
      quote: 'In some violent or dreadful circumstance, a child has died.',
      themes: [
        'Grief, love and revenge',
        'Children and the loss of innocence',
        'The past, memory and storytelling',
      ],
      tension: 3,
      significance:
        'The mystery is explained, but the explanation is a rule that makes the ending inevitable.',
    },
    {
      where: 'Chapter 12, The Woman in Black',
      title: 'The fair',
      summary:
        'Back in London Arthur marries Stella and they have a son. At a fair outside London the woman in black moves as if to step into the path of the pony cart carrying Stella and the baby, and the pony bolts into a tree. The baby is killed, and Stella dies of her injuries ten months later.',
      setting: 'A fair outside London on a sunny day, among grass and trees',
      who: ['Arthur Kipps', 'Stella', 'Joseph', 'The woman in black (Jennet Humfrye)'],
      quote: 'They asked for my story. I have told it. Enough.',
      themes: [
        'Grief, love and revenge',
        'Children and the loss of innocence',
        'The past, memory and storytelling',
      ],
      tension: 5,
      significance:
        'The curse reaches Arthur, and Nathaniel’s death is repeated in his own family; the frame closes on a single word.',
    },
  ],

  relationships: [
    {
      from: 'Arthur Kipps',
      to: 'The woman in black (Jennet Humfrye)',
      kind: 'the living man and the ghost who takes revenge on him',
      note: 'At first he pities her, then fears her, then understands her. Having seen her, he falls under the rule Samuel Daily describes, and she takes his son, so by the end they share the same loss.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Samuel Daily',
      kind: 'friends',
      note: 'Arthur is first a little snobbish about him; Daily becomes his warning voice, his rescuer and the man who tells him the truth.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Stella',
      kind: 'fiancée, then wife',
      note: 'She is his link to ordinary happiness in London. Her death ten months after the accident completes Jennet’s revenge.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Joseph',
      kind: 'father and son',
      note: 'His son is killed in a pony and cart, as Jennet’s was, which makes Arthur a bereaved parent like her.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Esmé',
      kind: 'husband and second wife',
      note: 'The happy family of the frame is what Arthur has rebuilt; Esmé and her children know nothing of his story.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Mr Bentley',
      kind: 'junior solicitor and employer',
      note: 'Bentley sends him north on what he presents as a routine errand, and tells him to stay on.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Mr Jerome',
      kind: 'visiting solicitor and local agent',
      note: 'Jerome’s terror and silence are the first clues to the truth; Arthur mistakes them for small-town nerves.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Keckwick',
      kind: 'passenger and driver',
      note: 'Keckwick carries Arthur between the town and the house and says almost nothing; his silence is later explained as suffering.',
    },
    {
      from: 'Arthur Kipps',
      to: 'Spider',
      kind: 'man and borrowed dog',
      note: 'Spider’s warmth keeps him steady, her growls confirm the haunting, and he risks his life to save her from the marsh.',
    },
    {
      from: 'The woman in black (Jennet Humfrye)',
      to: 'Alice Drablow',
      kind: 'sisters',
      note: 'Jennet gave her son to Alice to bring up because she had no choice; her letters to Alice move from love to fury to grief, and after the boy’s death her grief turned to hatred.',
    },
    {
      from: 'The woman in black (Jennet Humfrye)',
      to: 'Nathaniel',
      kind: 'mother and son',
      note: 'Her letters show a desperate love; she watched him drown in the marsh, and her grief became the curse.',
    },
    {
      from: 'Samuel Daily',
      to: 'Joseph',
      kind: 'godfather and godson',
      note: 'Arthur names his son after himself and Samuel Daily, a sign of how much he owes the man who rescued him; the friendship cannot protect the child.',
    },
    {
      from: 'Samuel Daily',
      to: 'Spider',
      kind: 'owner and dog',
      note: 'Daily lends Spider so that Arthur will not be alone at the house.',
    },
  ],

  compareWith: [
    {
      title: 'A Christmas Carol, Charles Dickens',
      href: '/revision/texts/a-christmas-carol',
      reason:
        'The most famous Christmas ghost story, set on Eduqas alongside this novel: in Dickens the ghosts of the past save a man, while in Hill the past is a ghost that cannot be laid.',
    },
    {
      title: 'The Strange Case of Dr Jekyll and Mr Hyde, Robert Louis Stevenson',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        'Another Gothic story on Eduqas in which a rational professional man pieces together a horror from documents and letters, and the explanation comes late and brings no comfort.',
    },
    {
      title: 'Whistle and I’ll Come to You (from The Woman in Black)',
      href: '/revision/texts/whistle-and-ill-come-to-you',
      reason:
        'The guide to the Chapter 10 extract set in the Edexcel International GCSE anthology, with close line-by-line analysis of the night of the storm.',
    },
    {
      title: 'Lord of the Flies, William Golding',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Set on both Edexcel and Eduqas with this novel: both turn on a fear of something unseen, and on children who come to harm while adults fail to protect them.',
    },
  ],

  contentGuidance: ['supernatural', 'mortality', 'mental_health', 'violence'],

  quotesFromElsewhere: ['Victorian Gothic pastiche', 'deviate dramatically'],

  sources: [
    {
      label:
        'Eduqas GCSE English Literature Component 2 (C720U20-1) question papers, June 2017, 2018, 2019, 2023, 2024, 2025 and October 2020: printed extracts from the novel used to check the wording of Chapter 1 (the decision to write), Chapter 4 (the woman at the funeral), Chapter 5 (the arrival at Eel Marsh House and the flight from the graveyard), Chapter 6 (the sounds in the mist), Chapter 9 (the nursery door) and Chapter 12 (the fair and the last line), and the format of the source-based question',
      url: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2025, Component 2: Section A is closed book and source-based, assesses accuracy of writing and does not explicitly assess context; candidates praised for pathetic fallacy and aural imagery; the warning that film references often deviate dramatically from the novel; Hill’s Victorian Gothic pastiche; the deaths of Stella and Joseph',
      url: 'https://www.eduqas.co.uk/media/tbdhukmq/eduqas-gcse-english-literature-s25-e.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0 Paper 1 question papers, specimen (2014) and June 2018 to June 2025: the stimulus quotations used to check wording and speakers (the London fog, half-hints and dark mutterings, branded as a witch, the Causeway at low tide spoken by Mr Bentley, because she’d no choice spoken by Samuel Daily, the row of small, solemn faces, the pent-up hatred, Jennet’s letter giving up her son, she had had her revenge); the paper is closed book; the Sources page cites the Vintage edition',
      url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0 Paper 1 principal examiner’s report, June 2025: Section B assesses knowledge and context rather than language, form and structure; exact quotation is not mandatory in the closed-book exam; strong answers linked horror to grief and trauma, used the framing device, connected Jennet to Victorian attitudes to motherhood and social shame, and compared Arthur and Jennet as bereaved parents',
      url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pp. 42-43: the Chapter 10 extract, used for “steady as a lighthouse”, “I began to doubt my own reality” and “as near to weeping tears of despair and fear, frustration and tension”',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Open Library full-text search of scanned editions of the novel (Vintage UK 1999, 2007 and 2012; Mandarin 1992; Penguin 1984; Godine 2002; Vintage US 2011; Vintage digital 2014; Chivers and Windsor large print). Every quotation not printed by an exam board was confirmed here in the novel’s own scans, most in nine or ten editions; the Mandarin contents list gave the chapter titles and their order',
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        'Shmoop, The Woman in Black: quotations with chapter and paragraph citations, used to assign chapters (for example 4.19 branded as a witch, 4.40 the wasting disease, 5.24 the malevolence, 5.29 and 5.30 curiosity and ghosts, 9.35 the letters, 10.10 reality, 11.72 revenge, 11.124 the curse, 12.24 and 12.28 the fair); and chapter summaries',
      url: 'https://www.shmoop.com/study-guides/literature/woman-in-black',
    },
    {
      label:
        'LitCharts, The Woman in Black: chapter-by-chapter summaries used to check the plot of every chapter. Where LitCharts and Shmoop disagreed (who drove the trap in which Nathaniel drowned; where Arthur stays after the rescue), the guide says less',
      url: 'https://www.litcharts.com/lit/the-woman-in-black/summary',
    },
    {
      label:
        'Wikipedia, The Woman in Black (Hill novel): published 10 October 1983 by Hamish Hamilton, 200 pages; Hill acknowledged The Turn of the Screw as an inspiration; plot outline; the 1989 television film by Nigel Kneale; the 2012 film directed by James Watkins. Its quotation of the last line wrongly includes have',
      url: 'https://en.wikipedia.org/wiki/The_Woman_in_Black_(Hill_novel)',
    },
    {
      label:
        'Wikipedia, The Woman in Black (play): Stephen Mallatratt, Stephen Joseph Theatre, Scarborough, 1987; West End from 1989 to 4 March 2023; second longest-running non-musical play in West End history after The Mousetrap; a UK tour from September 2023',
      url: 'https://en.wikipedia.org/wiki/The_Woman_in_Black_(play)',
    },
    {
      label:
        'Wikipedia, The Woman in Black (2012 film): plot, used only to list what the film changes',
      url: 'https://en.wikipedia.org/wiki/The_Woman_in_Black_(2012_film)',
    },
    {
      label:
        'Wikipedia, Susan Hill: born 5 February 1942, Scarborough; King’s College London; Somerset Maugham Award 1971; Whitbread Novel Award 1972 and Booker shortlist; CBE 2012, DBE 2020; later ghost stories. Checked against the fact-checked guide to Whistle and I’ll Come to You in this repository, which dates the Serrailler series to 2004',
      url: 'https://en.wikipedia.org/wiki/Susan_Hill',
    },
    {
      label:
        'Alun Severn, The Woman in Black, The Letterpress Project (January 2024): Hill has said she wrote the novel with the two Jameses, M. R. James and Henry James, as guides',
      url: 'https://letterpressproject.co.uk/inspiring-older-readers/2024-01-01/the-woman-in-black',
    },
    {
      label:
        'Wikipedia, Mourning: formal mourning customs at their height under Queen Victoria after Prince Albert’s death in 1861; heavy black clothing and crêpe veils; widows in mourning for up to four years; customs relaxed after the First World War',
      url: 'https://en.wikipedia.org/wiki/Mourning',
    },
    {
      label:
        'Coram, Adoption and the problem of illegitimacy: the stigma on unmarried mothers; children placed informally with relatives, friends or strangers; legal adoption from the Adoption Act 1926',
      url: 'https://www.coram.org.uk/resource/adoption-and-the-problem-of-illegitimacy/',
    },
    {
      label:
        'University of Glasgow Library blog, Ghost Stories for Christmas (2015), and HISTORY, How ghost stories became a Christmas tradition in Victorian England: the Victorian Christmas ghost story and Dickens’s part in it',
      url: 'https://universityofglasgowlibrary.wordpress.com/2015/12/11/ghost-stories-for-christmas/',
    },
    {
      label: 'Wikipedia, Pea soup fog: London particular as a name for thick London fog',
      url: 'https://en.wikipedia.org/wiki/Pea_soup_fog',
    },
    {
      label:
        'Wikipedia, Martello tower: small defensive forts, with a chain built on the south and east coasts of England between 1804 and 1812',
      url: 'https://en.wikipedia.org/wiki/Martello_tower',
    },
    {
      label:
        'Wikipedia, Pathetic fallacy: the term coined by John Ruskin in Modern Painters, volume 3 (1856)',
      url: 'https://en.wikipedia.org/wiki/Pathetic_fallacy',
    },
  ],
}
