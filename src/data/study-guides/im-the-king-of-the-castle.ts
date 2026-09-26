import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * I'm the King of the Castle, Susan Hill (Hamish Hamilton, 1970). A COMPLETE
 * guide: the text had no guide anywhere on the site, so this file is its whole
 * page. Set for Cambridge IGCSE Literature in English (0475), Paper 1 Section B.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). The novel is in UK
 * copyright and no licensed copy is held in src/data/full-texts, so the guide
 * test cannot check these words. Every quotation was instead found, word for
 * word, in scans of the printed novel through the Internet Archive's full-text
 * search, restricted to named editions (archive.org search service, fts
 * backend, "identifier:" filter), and each was matched in at least two
 * independent editions: the Viking Press first American edition of 1970
 * (imkingofcastle00hill), the Penguin paperback of 1974 reprinted with Hill's
 * Afterword in 1989 (imkingofcastle0000hill), the Penguin reissue of 2010 with
 * an introduction by Esther Freud (imkingofcastle0000hill_x5j3) and the Longman
 * school edition of 2000 with notes by Frank Downes (imkingofcastle00susa).
 *
 * HOW THE CHAPTERS WERE CHECKED. The Viking and Penguin scans print the headings
 * "Chapter One" to "Chapter Seventeen", and searching each heading returned the
 * last words of one chapter and the first words of the next. There is no Chapter
 * Eighteen. Moments inside chapters were placed by those boundaries, by printed
 * page numbers that the scans carry (the Longman edition's chapter ends fall on
 * pages 20, 36, 56, 72, 87, 101, 132, 151, 155, 166, 180, 190, 205, 226, 244 and
 * 268), and by the York Notes guide (Longman, 1997).
 *
 * Things the checking turned up, recorded so nobody reintroduces them:
 * - The boys are "almost eleven": Joseph Hooper's words to Edmund about
 *   Kingshaw, before he arrives, who is "just your age". Wikipedia and
 *   GradeSaver say ten.
 * - The novel does narrate Kingshaw's last moments, briefly and plainly, and it
 *   is Hooper who leads the searchers to him. The guide says so without
 *   dwelling on it.
 * - At Leydell Castle (Chapter 12) Kingshaw is trying to help Hooper down when
 *   Hooper falls: he has resolved to be "terribly careful not to say or do
 *   anything to frighten him" and reaches out his hand. Summaries that say
 *   Kingshaw exploits Hooper's fear at that moment are wrong about the fall,
 *   though he does taunt Hooper from the top of the castle just before it.
 * - "Hey - it's butterflies! Great!" in the Red Room is Fielding's line, said
 *   to Hooper, not Kingshaw's.
 * - Hooper's note is printed in capitals in the Penguin editions. The Longman
 *   2000 scan appears to read DON'T; three other editions read DIDN'T, and the
 *   note is quoted as DIDN'T, which is also how Hooper recalls it later.
 * - The Somerset Maugham Award: the 2010 Penguin author note calls it "the 1970
 *   Somerset Maugham Award"; Wikipedia lists it under 1971. The guide gives no
 *   year. Likewise the Dorset cottage: Hill's Afterword says the summer of 1969,
 *   the 2010 author note says 1968, and the guide gives no year.
 * - GradeSaver places Leydell Castle on the coast. Nothing checked here says
 *   so, and the guide does not.
 *
 * SECOND CHECK (26 September 2026), an independent re-search of the same scans
 * plus the York Notes and Longman 1981/2000 apparatus. It confirmed every
 * quotation word for word and fixed these plot errors in the first draft:
 * - The school news was placed in Chapters 15 and 16 and credited to Mrs
 *   Kingshaw. It comes at breakfast at the start of Chapter 11, from Mr Hooper
 *   ("you will be going off to school with Edmund"), and it is what sends
 *   Kingshaw running to the shed. Mrs Kingshaw only repeats it later.
 * - Chapter 14 had the news of Hooper's return coming after Kingshaw admits
 *   his fear to Fielding. The news comes first ("He's coming home tomorrow"),
 *   and the admission follows it.
 * - In Chapter 6 the deer is seen after Hooper has caught up (he asks what it
 *   does), not before.
 * - "Back at Warings" for Hooper's lie in Chapter 10 was not supported by
 *   anything checked, so the guide no longer says where it is spoken.
 * - Warings is never called Victorian in the novel: it was "built by the boy's
 *   great-grandfather, and so it was not very old". Only the publisher's blurb
 *   says Victorian, so the guide now says red-brick.
 * - At the end the searchers "all followed Hooper" to the stream, so the guide
 *   says he leads them to the body rather than that he finds it alone.
 * - Mrs Kingshaw's "only silliness" is about what Charles says about Edmund
 *   after the accident, not his distress in general.
 */
export const guide: StudyGuide = {
  slug: 'im-the-king-of-the-castle',
  title: "I'm the King of the Castle",
  author: 'Susan Hill',
  form: 'novel',
  scope:
    'The whole novel, all seventeen chapters, as set for Cambridge IGCSE Literature in English (0475), Paper 1 Section B (Prose), for examination in 2026 and 2027. There is a choice of two questions on each set text, relevant passages are printed on the question paper, and in both the 2026 and the 2027 syllabus the paper is closed book, so you cannot take the novel into the exam room. Page numbers differ between editions, so this guide locates every moment by chapter and by what happens.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Susan Hill 1970. First published by Hamish Hamilton in 1970, and in Penguin Books since 1974. Short quotations are used for criticism and review; longer passages are described and located rather than printed.',
  },
  workLength: {
    words: 65000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. Seventeen chapters over 252 pages in the Viking edition of 1970 and about 200 pages of text in the current Penguin paperback. Any length above 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  overview: {
    summary: [
      'Joseph Hooper, a widower, has moved with his son Edmund into Warings, the ugly red-brick house that Edmund’s great-grandfather built near the village of Derne. After Edmund’s grandfather dies, Mr Hooper takes on Mrs Helena Kingshaw, a widow, as what he calls an “informal housekeeper”, and she arrives with her son Charles, who is almost eleven, the same age as Edmund. Hill calls the boys by their surnames, Hooper and Kingshaw, as boys at school would. From the first afternoon Hooper makes it clear that Kingshaw is not wanted.',
      'Over one summer Hooper persecutes Kingshaw with a note, taunts, a stuffed crow on his bed and locked doors, while the two adults see nothing but boys who need to learn to get on. Kingshaw runs away into Hang Wood, and Hooper follows him. In the wood the balance of power tips: Hooper is terrified by a thunderstorm and almost drowns in the stream, and Kingshaw saves his life. Once they are found, Hooper tells the adults that Kingshaw pushed him in. Mr Hooper then announces that next term Kingshaw will go to Hooper’s school. On a day out at Leydell Castle Hooper is stranded on a high ledge and falls, and while he is in hospital Kingshaw finds his only friend, a farm boy called Fielding.',
      'Then everything closes in on him at once. Hooper comes home, Fielding is happy to be friends with Hooper too, and Mrs Kingshaw is going to marry Mr Hooper, so that the school, the house and his own mother will all belong to Hooper’s world. At dawn on the last day of the novel he goes back to the stream in Hang Wood and drowns himself. When Hooper sees the body he feels a spurt of triumph, and the last person Mrs Kingshaw comforts is Hooper.',
      'Hill said in her Afterword that she wrote it “for adults”, and that it is a novel about “the power of evil, which can possess even a young child”. That is one reading, and a strong one: Hooper’s cruelty has no single cause. But the novel gives you a second story running beside the first, of two parents so busy making the best of things that they never once see what is happening under their roof. The best answers hold both together. Kingshaw is destroyed by a boy who wants him gone and by adults who cannot imagine that a boy would want such a thing.',
    ],
  },

  context: [
    {
      heading: 'Susan Hill and where the novel began',
      body: 'Susan Hill was born on 5 February 1942 in Scarborough, North Yorkshire, and studied English at King’s College London. She had already published several novels when I’m the King of the Castle came out from Hamish Hamilton in 1970, and it won the Somerset Maugham Award; she later wrote The Woman in Black (1983). In the Afterword to the Penguin edition she explains where the book came from. She had rented a cottage on a farm in a remote corner of Dorset to finish a novel, and two boys often came by: the farmer’s grandson and his friend, “two typical English prep-school boys” who seemed cheerful and the best of friends. She is careful to add that “there was certainly nothing of Kingshaw and Hooper about them”. So the novel is not a portrait of those boys. It grew out of the experience of watching them, and the characters are Hill’s invention.',
    },
    {
      heading: 'A novel for adults about children',
      body: 'Hill insists that the book was written when she was an adult, “for adults”, and many readers meet it first at school, which changes how it feels. It belongs to a tradition of adult fiction that looks at children without sentiment. The Sunday Telegraph’s reviewer compared it with William Golding’s Lord of the Flies (1954), where schoolboys stranded on an island turn on each other; the difference is that Hill’s boys live in an ordinary English house with two adults in it. In the Afterword Hill calls it a novel about cruelty and about “the power of evil, which can possess even a young child”, and she answers readers who say a child would never take his own life by saying that children have. You do not have to accept the author’s reading, but you should know it, because it is the view an essay about evil in the novel is arguing with or for.',
    },
    {
      heading: 'Class, money and the country house',
      body: 'Warings is a house, but it is also a claim to status. It was built by Edmund’s great-grandfather, and the family’s other property has been sold off piece by piece, so the house is almost all the Hoopers have left of their standing. Mrs Kingshaw has no house at all. Kingshaw blames his father’s death for “the not having enough money, and living in other people’s houses”. A post in a well-off widower’s house is her way of keeping a roof over her son’s head, and the novel lets us see both the security it offers her and the price her son pays for it. Hooper understands the difference in their positions at once and uses it: in Chapter 2 he asks why Kingshaw’s father did not buy him a proper house, and tells him “this house will belong to me, I shall be master”. Hill shows children who have already learned the adult language of ownership and rank.',
    },
    {
      heading: 'Boarding schools and the long holiday',
      body: 'Both boys are away at boarding school in term time. Kingshaw is at St Vincent’s; Hooper goes elsewhere. The novel happens in the summer holidays, when boys used to institutions are handed back to parents who hardly know them, and the house has no other children in it. The threat that hangs over the last chapters is not only the marriage but school: at breakfast at the start of Chapter 11 Mr Hooper announces, as a happy surprise, that next term Kingshaw will go to Edmund’s school, and later Mrs Kingshaw tells Charles that “your new school, Edmund’s school” will be better for him. For Kingshaw that means Hooper by day and night, with no holiday to wait for. At a boarding school a new boy’s reputation can arrive before him, and Kingshaw knows it: at one point he plans what he could tell the other boys about Hooper’s terror in the thunderstorm, which shows how completely he expects the war to follow him into term.',
    },
    {
      heading: 'Widowhood and a second marriage',
      body: 'Both parents are alone. It is six years since Ellen Hooper died, and the narrator tells us plainly that “The marriage had not been happy”; Mrs Kingshaw’s husband is dead, and she has no home of her own. The arrangement at Warings turns into a courtship, and Hill lets us inside both their heads. Mr Hooper is at last master in his own house, but he cannot read his son, and admits to himself “We cannot fathom the minds of young children.” Mrs Kingshaw wants security and keeps telling her son “Mr Hooper is very good to us, Charles”. Their courtship runs through the book as a kind of cheerful background noise, and every step of it is a step closer to trapping Kingshaw for good.',
    },
    {
      heading: 'The setting and the title',
      body: 'Warings stands near the village of Derne, with Hang Wood about two miles away along a ridge and Leydell Castle, a ruin, within a drive. In an introduction written in her own voice for the Longman school edition of 1981, Hill said that there is a real Hang Wood, called just that, and a real house that is called something else, but that her settings are also “landscapes of the mind”. The title comes from a children’s game in which whoever reaches the top first shouts the words and is the winner. Hill makes the game literal at Leydell Castle, where Kingshaw shouts the words from the top of a wall, and then bitterly ironic, because the boy left in possession of the castle at the end is Hooper. A French film, Je suis le seigneur du château, was loosely based on the novel in 1989; write about the book, not the film.',
    },
  ],

  themes: [
    {
      title: 'Power and bullying',
      body: 'Hooper’s power over Kingshaw is mostly psychological. He sends a note, watches from windows, finds out what frightens Kingshaw and then supplies it, a stuffed crow, a room of moths, a padlock. Hill shows how bullying works by never letting it stop, so that Kingshaw is frightened even when nothing is happening. But power in the novel moves. In Hang Wood Kingshaw is competent and Hooper panics; at Leydell Castle Kingshaw is on top of the wall and Hooper is stuck below. Each time, Hooper recovers his position through the adults, with a lie or a fall that they misread. One reading is that the novel shows the stronger boy winning. The more convincing reading is that it shows the boy who understands adults winning: Kingshaw is braver and more capable, but Hooper knows how to make grown-ups believe him.',
    },
    {
      title: 'Fear',
      body: 'Fear is the novel’s atmosphere. Kingshaw is afraid of moths, of the crow, of the dark Red Room, of being locked in, and above all of what Hooper might do next. Hill shows fear physically, in legs going weak and breath held, and she shows how a bully learns a victim’s fears and uses them. But Hooper is frightened too: of thunder, of heights and of being alone, and in the wood he cries out for his mother in his sleep. One reading is that Hooper’s cruelty is a way of managing his own terror, passing it on to someone weaker. That reading makes him more understandable without making him less responsible. Kingshaw’s tragedy is that he learns to master his fears in the wood and at the castle, yet the thing he fears most, a future with Hooper in it for ever, is the one thing he cannot escape.',
    },
    {
      title: 'Property, class and belonging',
      body: 'The first thing Hooper does is claim territory. On the first day he tells Kingshaw that the house will one day be his and thinks “Kingshaw has nowhere”. Throughout the novel he polices what belongs to whom: the house, his room, the Red Room and its key. In Chapter 2 he even tells Kingshaw that the new bed is the one his grandfather died in, and the narrator adds that this was not true. Kingshaw’s reply to the boast, that it is “only an old house”, is brave but cannot win, because the adults share Hooper’s values. Mrs Kingshaw is glad of the security a house like Warings offers, and a marriage would make it hers. One reading is that class snobbery is simply one weapon among many in Hooper’s hands. A stronger reading is that it is the ground everything else stands on: Kingshaw is powerless because he and his mother are guests in someone else’s house, and every adult decision in the novel is about keeping that house.',
    },
    {
      title: 'Adults who do not see',
      body: 'The adults in this novel are not cruel. They are worse than useless because they are sure they understand. Mr Hooper tells Edmund to make a good effort to welcome the newcomer, as if good manners could settle it. Mrs Kingshaw is so anxious to please, and so ready to fuss over Edmund, that she misunderstands her own son again and again, and while Edmund is in hospital she dismisses what Charles says about Edmund to herself as “only silliness”. Hill lets us hear their thoughts, so that we see exactly how much they miss: Mrs Kingshaw’s delighted “Oh, how right I was to come here!” ends Chapter 4, a week after the note and the crow. The final scene makes the point unbearable, as she comforts Hooper. Some readers find the parents exaggerated. The stronger view is that they are painfully ordinary: kind, busy people who have forgotten what childhood feels like, and Hill’s anger is aimed at that ordinariness.',
    },
    {
      title: 'Nature and escape',
      body: 'Hill sets two kinds of nature against each other. Inside Warings nature is dead and pinned: the grandfather’s collection of moths in the Red Room, the stuffed crow in the attic. Outside it is alive, and at first frightening, as the real crow attacks Kingshaw in the cornfield. Hang Wood becomes Kingshaw’s place: he watches a rabbit and a deer, swims happily in the stream, and knows what to do when Hooper cannot cope. At Fielding’s farm he sees a calf born, the opposite of the dead collection. One reading is that nature stands for freedom and Warings for imprisonment. But the wood is also where Hooper follows him, and the stream that he loves is where he dies, so the stronger reading is darker: there is no natural refuge the adult world and Hooper cannot reach.',
    },
    {
      title: 'Childhood and evil',
      body: 'Is Hooper evil, or made? Hill’s Afterword leans towards evil, a power that can possess even a young child. The novel gives evidence for other readings too. Hooper has lost his mother, has a father who cannot talk to him, and grows up in a house where dead things are treasured and a boy is told the collection will all belong to him. His cruelty could be learned, or a way of mastering his own fear. The most convincing answer is that Hill refuses to settle it, and that the refusal is the point: Hooper’s triumph at the end is shocking because we have been shown his loneliness and his terror and still cannot explain him. What the novel is clear about is that childhood is not innocent here, and that adults who believe it is leave children defenceless.',
    },
  ],

  characters: [
    {
      name: 'Edmund Hooper',
      role: 'The son of the house, almost eleven, and Kingshaw’s tormentor',
      body: 'Hooper is clever, watchful and cold. He meets the Kingshaws by locking his door and watching them in a tilted mirror, then sends down a note telling Kingshaw he was not wanted. He finds out what Kingshaw fears and uses it, and he lies fluently to adults: after Kingshaw saves his life he says “It was Kingshaw, it was Kingshaw, he pushed me in the water.” Hill also shows his fear. In the thunderstorm his voice rises in panic, at night in the wood he cries for his mother in his sleep, and at the castle he is stranded on a ledge in terror. It is Hooper who leads the searchers to Kingshaw’s body at the end, and the last we see of him is his thought that it was because of him, and a spurt of triumph. Whether he is evil, damaged or both is the central question of most essays on him.',
    },
    {
      name: 'Charles Kingshaw',
      role: 'The housekeeper’s son, almost eleven, and the novel’s victim',
      body: 'Kingshaw is fearful but not weak. He is afraid of moths and of the dark, and Hooper’s campaign wears him down, yet he runs away alone, copes in Hang Wood, drags Hooper out of the stream and, at the castle, tries to talk him down. His tragedy is that his courage makes no difference: every time he gains ground, the adults give it back to Hooper. He is proud, too: when Hooper sneers that his father never bought him a proper house, he is angry, not hurt, and wants to fight, though he dares not. His friendship with Fielding shows what he might have been in a kinder world, and its loss, when Fielding is as easy with Hooper as with him, is one of the final blows. Hill makes his death the result of many small defeats, which is why it feels so terribly logical to him.',
    },
    {
      name: 'Joseph Hooper',
      role: 'Edmund’s father, a widower and the master of Warings',
      body: 'Mr Hooper is anxious, conventional and a little pompous. Now that they have moved into Warings he is master in his own house, but he does not know his son, and admits to himself that “We cannot fathom the minds of young children.” He is discomforted, the narrator adds, by his own lack of insight, and that is as far as his self-examination goes. His marriage to Ellen, who died six years before, had not been happy, and in Mrs Kingshaw he finds company. He is not unkind to Kingshaw, but he treats the boys’ troubles as a question of manners, telling Edmund to make a good effort to welcome him. Hill lets us into his thoughts to show how little he sees.',
    },
    {
      name: 'Helena Kingshaw',
      role: 'Charles’s mother, a widow and the informal housekeeper',
      body: 'Mrs Kingshaw loves her son and fails him. Since her husband’s death she has had no home of her own, and Warings offers her security, company and, in time, marriage. She is so eager to please Mr Hooper, and to be kind to Edmund, that she misreads Charles again and again, and she tells him over and over that Mr Hooper is very good to them. Her happiness and her son’s despair grow side by side, and Hill uses her thoughts for sharp dramatic irony. The novel ends with her comforting Hooper, the boy who drove her son to his death. It is possible to pity her as well as blame her; the best answers do both.',
    },
    {
      name: 'Anthony Fielding',
      role: 'A farm boy from the village, Kingshaw’s only friend',
      body: 'Fielding is calm, practical and unafraid. He takes Kingshaw to his family’s farm, where Kingshaw sees a calf born, and he asks him directly, “Are you afraid of Edmund Hooper?” He cannot really understand the answer, because nothing frightens him. When he comes to Warings he is as happy to be with Hooper as with anyone, which Kingshaw experiences as betrayal. Fielding is not disloyal; he simply belongs to a world in which children are easy with each other. He shows what Kingshaw lacks, and how far Warings is from ordinary childhood.',
    },
    {
      name: 'Mrs Boland',
      role: 'The daily help at Warings',
      body: 'Mrs Boland comes in during the day to clean and do some of the cooking, and she does not like Warings. She is one more adult who is present and notices nothing: at one point Kingshaw reckons that she would think he had simply taken a picnic somewhere, because Mrs Boland never noticed. She is a minor figure, but her dislike of the house is an early hint, from outside the family, of its gloom. When his mother is at the hospital, Kingshaw is left in her care.',
    },
  ],

  keyQuotes: [
    {
      text: 'Warings was ugly. It was entirely graceless',
      where: 'Chapter 1, the narrator describing the house',
      analysis:
        'Two blunt sentences close the door on any romance of the country house. Graceless is a word for a person as well as a building, and it attaches to the Hoopers: a family with property and no warmth. Everything Kingshaw suffers happens inside this house.',
    },
    {
      text: 'now you will have a companion',
      where: 'Chapter 2, Joseph Hooper to Edmund, in the opening sentence of the chapter',
      analysis:
        'Mr Hooper speaks as if he were giving Edmund a present, and the word companion is formal, almost Victorian. The whole tragedy is in the gap between the adult’s cheerful arrangement and the children’s reality: Hooper wants no companion, and Kingshaw will not be one.',
    },
    {
      text: 'I DIDN’T WANT YOU TO COME HERE',
      where:
        'Chapter 2, Hooper’s note to Kingshaw on the day he arrives (printed in capitals in the Penguin edition)',
      analysis:
        'Hooper’s first act is written, anonymous in manner and delivered while he hides upstairs. The capitals shout without a voice. It is a declaration of war, and it teaches Kingshaw at once that in this house cruelty will be private and adults will not see it.',
    },
    {
      text: 'We live here, it is ours, we belong. Kingshaw has nowhere.',
      where:
        'Chapter 2, Hooper’s thoughts in Kingshaw’s room on the first day, beside his trunk and suitcase',
      analysis:
        'Short clauses build like a chant of ownership: live, ours, belong. Then comes the flat full stop of the final sentence. A boy not yet eleven has learned the adult logic of property and turned it into a weapon, and the thought makes Kingshaw homeless as well as fatherless.',
    },
    {
      text: 'It was the largest crow he had ever seen.',
      where: 'Chapter 3, the crow attacks Kingshaw in the cornfield',
      analysis:
        'The simple sentence, told through Kingshaw’s eyes, makes an ordinary bird monstrous. The crow becomes the first of the novel’s symbols of fear, and Hooper later turns it into a weapon when he leaves a stuffed crow on Kingshaw’s bed.',
    },
    {
      text: 'Oh, how right I was to come here!',
      where: 'Chapter 4, Mrs Kingshaw’s thoughts, the last line of the chapter',
      analysis:
        'This is dramatic irony at its sharpest. The reader has watched her son’s first week at Warings, the note and the crows, and she is delighted with her choice. Placing her joy at the end of the chapter makes the reader feel the distance between mother and son, which the whole novel widens.',
    },
    {
      text: 'We cannot fathom the minds of young children.',
      where: 'Chapter 4, Joseph Hooper’s thoughts about Edmund',
      analysis:
        'Mr Hooper sounds wise, but the sentence is an excuse. The pompous we and the verb fathom turn not understanding into a law of nature, and then he stops trying. Hill shows the adults choosing not to see.',
    },
    {
      text: 'I’m not being by myself in thunder.',
      where: 'Chapter 7, Hooper to Kingshaw in Hang Wood',
      analysis:
        'For the first time Hooper begs rather than orders. His voice rises in panic and his need for Kingshaw reverses their roles. The moment matters because it shows Hooper’s fear, and because it does not last: back at Warings he takes his revenge with a lie.',
    },
    {
      text: 'It was Kingshaw, it was Kingshaw, he pushed me in the water.',
      where: 'Chapter 10, Hooper to the adults, the opening line of the chapter',
      analysis:
        'The repetition sounds like a frightened child, the kind of voice adults are ready to believe. Kingshaw has just saved his life. Hill opens the chapter with the lie, straight after the rescue, and the narrator adds that Kingshaw is astounded by the coolness of Hooper’s treachery.',
    },
    {
      text: 'I’m the King of the Castle!',
      where: 'Chapter 12, Kingshaw on top of the wall at Leydell Castle',
      analysis:
        'The title’s words go to Kingshaw, at the one moment he stands above Hooper. The playground chant is childish and triumphant, and he prances on the wall. The irony is cruel: within minutes Hooper has fallen, and by the end of the novel the castle is Hooper’s.',
    },
    {
      text: 'In terror, Hooper flinched and took a step backwards, swayed and fell.',
      where: 'Chapter 12, the last line of the chapter',
      analysis:
        'Kingshaw has just reached out his hand to help. The sentence gives Hooper’s terror first and the fall as three quick verbs. It leaves open whether Hooper recoiled because he expected cruelty, and the adults will never know what Kingshaw meant by the gesture.',
    },
    {
      text: 'Are you afraid of Edmund Hooper?',
      where: 'Chapter 14, Fielding to Kingshaw',
      analysis:
        'Fielding’s question is plain and uses Hooper’s full name, as if he were a person rather than a threat. Kingshaw answers yes, and the narrator says he was not ashamed to admit it to Fielding. For once somebody asks him directly, though Fielding, who fears nothing, cannot really understand.',
    },
    {
      text: 'it was because of me, and a spurt of triumph went through him',
      where: 'Chapter 17, Hooper’s thoughts when he sees Kingshaw’s body',
      analysis:
        'The novel’s last view inside Hooper is not guilt but pride. Spurt is sudden and physical, and triumph is the word for a victory. Hill denies the reader any remorse, and the sentence makes the ending more disturbing than the death itself.',
    },
    {
      text: 'Now, it’s all right, Edmund dear, everything is all right',
      where: 'Chapter 17, Mrs Kingshaw to Hooper, on the final page',
      analysis:
        'She comforts the wrong boy, with a phrase for a child who has had a bad dream. Everything is all right is the novel’s bitterest irony. Kingshaw is dead, and his mother’s tenderness goes to the boy who drove him to it.',
    },
  ],

  extracts: [
    {
      title: 'The crow in the cornfield',
      where: 'Chapter 3',
      pointer:
        'Chapter 3, from its opening words, “A path led through the rough field”, to Hooper’s taunt afterwards, “It was only a crow”.',
      summary:
        'Kingshaw goes out alone along the path through the rough field behind the house and into the corn. At first he pays no attention to the crows, but one enormous bird swoops at him again and again, cawing, as he runs. He trips and falls, and it lands on his back before it lets him go. He gets back weak with fright, and Hooper, who can tell exactly what has happened, mocks him for being scared of a bird.',
      annotations: [
        {
          phrase: 'When he first saw the crow, he took no notice.',
          note: 'A calm opening sentence. Hill starts from ordinariness so that the attack grows out of a normal summer walk, and the reader relaxes with Kingshaw before the fear begins.',
        },
        {
          phrase: 'the great crow came beating down, and wheeled about his head',
          note: 'The verbs are violent and circling: beating suggests blows as well as wings, and wheeled traps Kingshaw inside the bird’s movement. Great makes it mythical, a creature from a nightmare rather than a farm.',
        },
        {
          phrase: 'the hoarse caaw came out again and again',
          note: 'Onomatopoeia and repetition make the sound relentless. The spelling of the cry stretches it out, and again and again tells us this will not stop, which is exactly how Hooper’s bullying will feel.',
        },
        {
          phrase: 'Kingshaw felt his legs go weak beneath him',
          note: 'Fear is shown in the body rather than named. Hill keeps us close to Kingshaw’s physical experience, which is why readers feel his terror rather than simply being told about it.',
        },
        {
          phrase: 'It was only a crow, a crow isn’t anything',
          note: 'Hooper’s dismissive repetition belittles both the bird and Kingshaw. By treating the fear as ridiculous he gains power over it, and he stores it up: the stuffed crow on the bed follows.',
        },
      ],
      question:
        'How does Hill make this such a frightening moment in the novel? Refer closely to the language of the passage, and to what it shows about Kingshaw and Hooper.',
    },
    {
      title: 'The storm and the stream in Hang Wood',
      where: 'Chapter 7',
      pointer:
        'Chapter 7, from its opening words, “It was thunder,” Hooper said, through the storm, and on to the moment Kingshaw finds Hooper lying face down at the edge of the stream and drags him half on to the bank.',
      summary:
        'Lost in Hang Wood, the boys are caught by a violent thunderstorm. Hooper is terrified, refuses to be left alone and falls apart, and Kingshaw has to take charge and calm him. Afterwards they find the stream, and Hooper decides to swim. While Kingshaw is teasing him that he ought to have caught ten fish by now, he breaks off: Hooper is lying face down in the water, and there is blood that seems to come from his head. He goes into the water and gets him half on to the bank, and when he climbs out himself he is sobbing.',
      annotations: [
        {
          phrase: 'I’m not being by myself in thunder.',
          note: 'The first time Hooper pleads. The childish construction, being by myself, drops his usual cold, adult manner, and the balance of power in the novel reverses for a whole chapter.',
        },
        {
          phrase: 'Hooper’s voice had risen in panic',
          note: 'Hill shows panic through sound. The boy who used words so coolly at Warings has lost control of his voice, and the narrator, close to Kingshaw, notes it with something like wonder.',
        },
        {
          phrase: 'There was a great crash of thunder almost overhead',
          note: 'The storm is both real and symbolic: pathetic fallacy that turns the wood into a battleground. Almost overhead makes the danger personal, as if the sky itself had chosen Hooper.',
        },
        {
          phrase: 'Hooper was lying face down, his legs stuck up over the bank',
          note: 'A shocking, awkward image, told without comment. The detail of the legs is almost comic, and that makes it more horrible. Kingshaw’s rescue here is what Hooper will turn into a lie in Chapter 10.',
        },
      ],
      question:
        'How does Hill make this such a dramatic and revealing moment in the relationship between Hooper and Kingshaw?',
    },
    {
      title: 'At the top of Leydell Castle',
      where: 'Chapter 12',
      pointer:
        'Chapter 12, the last pages: from Kingshaw calling down to Hooper, “I’m a bowman, I’m the head warrior of this castle”, to the last words of the chapter, “swayed and fell.”',
      summary:
        'On a family outing to the ruined castle Kingshaw climbs high on the walls and, for once, is on top. He shouts down threats in a game of warriors and dances on the wall. Hooper, determined to show he can climb too, gets up on to a narrow ledge below him and is stranded there, frightened. Kingshaw makes his way along to him, tells him how to get down and resolves not to do anything to frighten him. He reaches out his hand, and Hooper, terrified, flinches away, loses his balance and falls.',
      annotations: [
        {
          phrase: 'I’m a bowman, I’m the head warrior of this castle',
          note: 'Kingshaw borrows the language of a boys’ adventure story. The repeated I’m shows a boy trying out power for the first time, and the fantasy of killing with an arrow is play, but it echoes the real hostility between them.',
        },
        {
          phrase: 'to prance a little, delicately',
          note: 'Prance is a showing-off word, used of horses and dancers, and delicately suggests balance and daring. Hill lets us enjoy Kingshaw’s moment of freedom while the height makes us uneasy about where it will lead.',
        },
        {
          phrase: 'terribly careful not to say or do anything to frighten him',
          note: 'This is the key to the scene. Kingshaw’s intention is to help, and Hill states it plainly, so that the reader knows what the adults never will: he did not cause the fall.',
        },
        {
          phrase: 'Kingshaw reached out his hand.',
          note: 'A short sentence, a gesture that could be rescue or attack. One reading is that Hooper sees an attack because that is how he himself thinks, and Hill leaves the reader to feel the irony that Kingshaw’s kindness looks exactly like cruelty.',
        },
      ],
      question:
        'Explore how Hill makes this such a powerful moment in the novel. How does it change the way you see both boys?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Close third-person narration that moves between minds',
      example:
        'Hooper’s thought in Chapter 2, “We live here, it is ours, we belong. Kingshaw has nowhere.”, set beside Kingshaw’s fear and, at chapter ends, the thoughts of the adults.',
      effect:
        'Hill’s narrator slips into each character’s head and speaks in their words without quotation marks. We know more than any single character does, so we see Hooper’s motives, Kingshaw’s terror and the adults’ blindness at once. That is the source of the novel’s tension and its dramatic irony: the reader can see everything and help no one.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'Mrs Kingshaw’s thought “Oh, how right I was to come here!” (Chapter 4), and her words to Hooper on the last page, “Now, it’s all right, Edmund dear, everything is all right”.',
      effect:
        'The reader understands what the speaker does not, and the gap is painful. Hill uses this most with the adults, so that their cheerful certainties become accusations. At the end the irony is so extreme that it becomes the novel’s final judgement on them.',
    },
    {
      technique: 'Pathetic fallacy and foreshadowing',
      example:
        'Just before the storm in Hang Wood, “A blackbird began to sing, a loud, bright, warning song”, and the chapter ends with “the first rumble of thunder” (Chapter 6).',
      effect:
        'Nature seems to comment on the action. The bright birdsong turns out to be a warning, and the thunder that follows marks the moment the boys’ relationship is thrown into turmoil. The storm outside matches the storm of fear inside Hooper.',
    },
    {
      technique: 'Symbolism',
      example:
        'The grandfather’s moths in the Red Room: at the end of Chapter 1 a pinned moth, “already years dead”, is touched and collapses “into a soft, formless heap of dark dust”. The crow and the castle work in the same way.',
      effect:
        'The moths stand for Warings itself: a family that keeps dead things in cases and calls them valuable. The crumbling moth hints that the house’s order is hollow, and moths become the tool Hooper uses to terrify Kingshaw. Symbols let Hill say things about the family that no character would say aloud.',
    },
    {
      technique: 'Repetition',
      example:
        'Hooper’s lie, “It was Kingshaw, it was Kingshaw” (Chapter 10), and his final thought, “it was because of me, I did that, it was because of me” (Chapter 17).',
      effect:
        'Repetition makes Hooper sound like a small child, which is why adults believe him, and in the last chapter it shows him savouring what he has done. The two moments mirror each other: the first repeats a lie, the second repeats a truth, and both are about who is to blame.',
    },
    {
      technique: 'Sensory detail and onomatopoeia',
      example:
        'The crow in Chapter 3, whose “hoarse caaw came out again and again”, and whose black wing beats against Kingshaw’s face as it dives.',
      effect:
        'Hill makes fear physical. Sound, touch and movement put the reader in Kingshaw’s body, so we experience the attack rather than observe it. The same method makes Hang Wood feel alive later in the novel, which is why the contrast with the dead Red Room is so strong.',
    },
    {
      technique: 'Short, plain sentences',
      example: '“Warings was ugly.” (Chapter 1); “Kingshaw reached out his hand.” (Chapter 12).',
      effect:
        'Hill’s style is mostly simple, even flat, and the plainness makes cruelty and danger more shocking. A short sentence at a moment of crisis holds the action still, so the reader has time to see what the characters cannot.',
    },
  ],

  structureForm: [
    {
      heading: 'Seventeen chapters and one summer',
      body: 'The novel covers a single summer holiday in seventeen chapters. One useful way to see its shape is as four movements: Warings (Chapters 1 to 4), where Hooper establishes his power; Hang Wood (Chapters 5 to 9), where it is reversed; the return to the house, the shed and the castle (Chapters 10 to 13), where Hooper takes it back and more; and Fielding, the marriage and the end (Chapters 14 to 17), where Kingshaw’s last hopes are taken away one by one. The pattern is a see-saw in which every rise for Kingshaw is followed by a deeper fall.',
    },
    {
      heading: 'Where the chapters begin and end',
      body: 'Hill uses chapter breaks like a dramatist. Chapter 4 ends on Mrs Kingshaw’s delight at having come to Warings; Chapter 6 ends on the first rumble of thunder; Chapter 10 opens with Hooper’s lie, straight after the rescue; Chapter 12 ends in mid-fall, and Chapter 13 opens with Kingshaw remembering most clearly “being ignored”. The white space after a chapter often does the work of a comment the narrator never makes.',
    },
    {
      heading: 'Two escapes into Hang Wood',
      body: 'The novel has two journeys to the wood. The first, in Chapters 5 to 9, is an escape that fails because Hooper follows, but it gives Kingshaw the only days in which he is stronger. The second, in Chapter 17, is the end. The stream links them: in Chapter 7 Kingshaw pulls Hooper out of it and saves his life, and in Chapter 17 it is where he dies. The repetition makes the ending feel both shocking and inevitable, as if the wood had always been waiting for him.',
    },
    {
      heading: 'Shifting viewpoint and the adults’ chapters',
      body: 'Most of the novel is seen through the boys, but Hill regularly moves into the adults’ minds: Mr Hooper at breakfast at the start of Chapter 11, Mrs Kingshaw at her wardrobe at the start of Chapter 12, her thoughts at the end of Chapter 4. These passages are often light and hopeful in tone, and set against the boys’ chapters they create a double story: a courtship and a persecution happening in the same house at the same time.',
    },
    {
      heading: 'The ending',
      body: 'The final chapter is short and ends abruptly. Hill tells Kingshaw’s last moments in a few quiet, plain sentences, without drama, and then moves to Hooper, who leads the searchers to him. The last view inside anyone’s mind is Hooper’s, and the last words take us out to the men splashing through the water. There is no funeral, no explanation, no aftermath. Hill in her Afterword speaks of the “trio of survivors”, Hooper and the two parents, and the novel leaves them to a future the reader has to imagine. An ending this bare forces you to supply the judgement yourself.',
    },
    {
      heading: 'A psychological novel, and the title',
      body: 'This is a psychological novel: very little happens by the standards of an adventure story, and the drama is inside the characters’ heads. Its title comes from a playground game, which tells you that the subject is power between children, and the game is played for real at Leydell Castle. The title is also ironic. For a few minutes Kingshaw is king of the castle, but the one who ends in possession of Warings is Hooper.',
    },
  ],

  vocabulary: [
    {
      term: 'graceless',
      definition:
        'Without elegance or charm. The narrator’s word for Warings in Chapter 1, and a quiet comment on the family who live there.',
    },
    {
      term: 'informal housekeeper',
      definition:
        'Mr Hooper’s term for Mrs Kingshaw’s post: a woman who runs the house and keeps the family company rather than a servant. The vagueness suits both adults, who hope it will become something more.',
    },
    {
      term: 'lepidopterist',
      definition:
        'A person who studies and collects moths and butterflies. Edmund’s grandfather was one, and filled the Red Room with his collection of pinned moths.',
    },
    {
      term: 'copse',
      definition: 'A small wood. The Red Room at Warings faces the copse behind the house.',
    },
    {
      term: 'allotment',
      definition:
        'A small plot of land rented for growing vegetables. In Chapter 11 Kingshaw hides in an old shed on the allotments and Hooper padlocks him in.',
    },
    {
      term: 'treachery',
      definition:
        'Betrayal of someone who trusts you. The narrator uses it in Chapter 10 when Hooper blames Kingshaw for the accident in which Kingshaw saved his life.',
    },
    {
      term: 'prep school',
      definition:
        'A private boarding school for boys, usually up to the age of thirteen. Both boys board at school in term time, and Hill described the boys who inspired the novel as prep-school boys.',
    },
    {
      term: 'bowman',
      definition:
        'An archer. Kingshaw calls himself one in his game of warriors on the walls of Leydell Castle in Chapter 12.',
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader knows something a character does not. Hill uses it constantly with the adults, above all in Mrs Kingshaw’s words on the final page.',
    },
    {
      term: 'pathetic fallacy',
      definition:
        'Using weather or nature to reflect human feelings. The thunderstorm in Hang Wood mirrors Hooper’s panic and the upheaval between the boys.',
    },
    {
      term: 'free indirect style',
      definition:
        'Third-person narration that takes on a character’s own thoughts and words without quotation marks. Hill uses it for every major character, which is how we hear Hooper think that Kingshaw has nowhere.',
    },
    {
      term: 'foreshadowing',
      definition:
        'A hint of what is to come. The blackbird’s warning song before the storm, and the stream where Kingshaw saves Hooper, both point ahead.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read the passage in Chapter 12 from Kingshaw calling down, “I’m a bowman, I’m the head warrior of this castle”, to the end of the chapter. How does Hill make this such a dramatic moment in the novel?',
        skill: 'Close reading of a printed passage, linked to the whole novel',
        guidance: [
          'Open with an overview: this is the one moment Kingshaw is literally on top, and the moment he loses everything, because Hooper’s fall will be blamed on him.',
          'Analyse Kingshaw’s game of warriors and his shout of the title’s words: the repeated I’m, the prancing, the childish triumph. Show how Hill lets us enjoy it while the height makes us uneasy.',
          'Analyse Hooper frozen on the ledge: a reversal of their usual roles, like the thunderstorm in Chapter 7.',
          'Focus on the final lines: Kingshaw resolving not to frighten him, reaching out his hand, and the last sentence with its run of quick verbs. Explain the ambiguity of the gesture and how Hooper misreads it.',
          'Link outwards: Chapter 13 opens with Kingshaw remembering “being ignored”, as the adults’ attention goes to Hooper. Explain why the scene is dramatic because of what the reader knows and the adults will never know.',
        ],
      },
      {
        question:
          'Explore the ways in which Hill makes Warings such a threatening place for Kingshaw.',
        skill: 'Whole-text essay on setting and atmosphere',
        guidance: [
          'Start with the house itself: “Warings was ugly”, graceless, dark red brick, and the history of a family whose property has shrunk to this one house.',
          'The Red Room and the moths: dead nature pinned in cases, the key Hooper controls, and the night Hooper locks Kingshaw in there. Explain why moths are the perfect weapon against Kingshaw.',
          'Hooper’s territory: the note on the first day, his boast that the house will be his, the stuffed crow on the bed. Warings belongs to Hooper and Kingshaw has nowhere.',
          'The adults inside the house: their comfortable, hopeful thoughts, which make the threat worse because no one will see it.',
          'Contrast with Hang Wood and Fielding’s farm, where things are alive, and conclude with the irony that Kingshaw’s only escape from Warings is into the stream.',
        ],
      },
      {
        question:
          'To what extent does Hill make you blame the adults for what happens to Kingshaw?',
        skill: 'Whole-text argument about character and responsibility',
        guidance: [
          'Give a clear view in your introduction: for example, that Hooper is the cause but the adults are the reason nothing stops him.',
          'Mr Hooper: kind in intention, pompous and blind in practice. Use “We cannot fathom the minds of young children” and his failure to see what Edmund is doing.',
          'Mrs Kingshaw: love that fails. Use her delight at the end of Chapter 4, her insistence that Mr Hooper is very good to them, and her certainty that Edmund’s school, which Mr Hooper announces in Chapter 11, will be better for Charles.',
          'Weigh Hooper’s own responsibility: the note, the lies, the crow, his triumph at the end. Consider Hill’s Afterword, which speaks of evil in a child.',
          'Conclude with the final page, Mrs Kingshaw comforting Hooper, and judge how far Hill wants the reader to share her anger at the adults.',
        ],
      },
      {
        question: 'How far does Hill make you feel any sympathy for Hooper?',
        skill: 'Whole-text essay on a character',
        guidance: [
          'Set out the case against him first: the note, the crow, the padlock, the lie in Chapter 10 and the spurt of triumph in Chapter 17.',
          'Then the evidence for sympathy: a dead mother, a father who cannot talk to him, his terror in the storm, his cries for his mother at night, his fear on the ledge.',
          'Consider why Hill shows us his fear: does it explain his cruelty, or make it more chilling that he learns nothing from Kingshaw’s kindness?',
          'Use the final chapter to decide. The narrator gives us his triumph, not his grief, and the adult who comforts him is Kingshaw’s mother.',
          'Conclude with your judgement, and acknowledge the alternative reading in a sentence.',
        ],
      },
    ],
    tips: [
      'Call the boys Hooper and Kingshaw, as Hill does. It is accurate and it shows you have noticed that the narrator uses surnames, as boys at school did.',
      'Learn a small set of short quotations from across the novel, from the note in Chapter 2 to the triumph in Chapter 17. In both the 2026 and the 2027 syllabus the paper is closed book, so you cannot look them up.',
      'Get the castle right. Kingshaw is trying to help Hooper down when he falls, and Hill tells us so. What is open to interpretation is why Hooper flinches, not whether Kingshaw pushed him.',
      'Do not treat the adults as villains or as background. The strongest answers analyse how Hill lets us into their thoughts to create dramatic irony, and why that makes the ending unbearable.',
      'Write about the ending with care and precision. It is about Hooper’s triumph and the adults’ blindness as much as about Kingshaw’s death, and the best answers notice what the narrator does not say.',
      'Use Hill’s Afterword as context, not as the last word: she calls it a novel about the power of evil, and you can argue with that from the evidence of the adults’ neglect.',
      'Write about the novel, not the 1989 French film, which is only loosely based on it.',
    ],
  },

  modelAnswer: {
    question: 'How does Hill make the ending of the novel so disturbing?',
    paragraph:
      'What makes the ending so disturbing is not only Kingshaw’s death, which Hill tells in a few quiet sentences, but what she chooses to show after it. It is Hooper who leads the searchers to the body, and the narrator takes us straight into his mind: “it was because of me, I did that, it was because of me”. The repetition recalls his lie in Chapter 10, “It was Kingshaw, it was Kingshaw”, but now he is repeating a truth, and relishing it, because “a spurt of triumph went through him”. Spurt is sudden and physical, like a rush of blood, and triumph is the language of victory in a game; the playground contest of the title has been won. Hill then turns the knife with Mrs Kingshaw, who comforts Hooper with “Now, it’s all right, Edmund dear, everything is all right”. The dramatic irony is total. The one adult who should grieve for Kingshaw gives her tenderness to the boy who destroyed him, and the phrase everything is all right sums up a whole summer of adults refusing to see. The ending is disturbing because it is the logical end of all that has gone before.',
    commentary: [
      'It opens with a clear, arguable claim that goes beyond the obvious: the most disturbing thing is what Hill shows after the death.',
      'Quotations are short, accurate and embedded in the writer’s own sentences, and each is analysed at word level, for example spurt and triumph.',
      'It makes a structural link across the novel, from the lie in Chapter 10 to the final chapter, showing knowledge of the whole text rather than one passage.',
      'It uses the technical term dramatic irony precisely and explains its effect on the reader, rather than naming it and moving on.',
      'It ends by answering the question directly and connecting the ending to the adults’ blindness, the novel’s wider theme.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'Warings and the Red Room',
      summary:
        'Edmund Hooper and his father have moved into Warings, where Edmund’s grandfather is dying. The old man’s moth collection fills the Red Room, and at the end of the chapter a long-dead moth, touched, collapses into dust.',
      setting: 'Warings, a tall, dark red-brick house near the village of Derne',
      who: ['Edmund Hooper', 'Joseph Hooper'],
      quote: 'Warings was ugly. It was entirely graceless',
      themes: ['Property, class and belonging', 'Nature and escape'],
      tension: 1,
      significance:
        'Establishes the house, its dead collection and a family with property but no warmth.',
    },
    {
      where: 'Chapter 2',
      title: 'The note',
      summary:
        'Mr Hooper announces a companion for Edmund. When the Kingshaws arrive, Hooper locks his door, watches them in a tilted mirror and sends down a note. In Kingshaw’s room he boasts that the house will one day be his.',
      setting: 'The drive, the hall and Kingshaw’s new bedroom at Warings',
      who: ['Edmund Hooper', 'Charles Kingshaw', 'Joseph Hooper', 'Helena Kingshaw'],
      quote: 'I DIDN’T WANT YOU TO COME HERE',
      themes: ['Power and bullying', 'Property, class and belonging'],
      tension: 3,
      significance:
        'Hooper declares war on the first day, in private, where the adults will not see.',
    },
    {
      where: 'Chapter 3',
      title: 'The crow',
      summary:
        'Walking alone in the fields, Kingshaw is attacked by a huge crow and gets home terrified. Hooper mocks him for it, and later, in the night, leaves a stuffed crow from the house on Kingshaw’s bed.',
      setting: 'A cornfield behind Warings, then Kingshaw’s bedroom at night',
      who: ['Charles Kingshaw', 'Edmund Hooper'],
      quote: 'It was the largest crow he had ever seen.',
      themes: ['Fear', 'Power and bullying', 'Nature and escape'],
      tension: 4,
      significance: 'Hooper learns what frightens Kingshaw and turns it into a weapon.',
    },
    {
      where: 'Chapter 4',
      title: 'A room of his own, and a mother’s hopes',
      summary:
        'While Hooper is in London with his father, Kingshaw finds an unused room on the top corridor. Mr Hooper decides that children cannot be understood, and the chapter ends with Mrs Kingshaw delighted that she came to Warings.',
      setting: 'Warings, the top corridor and the adults’ rooms',
      who: ['Charles Kingshaw', 'Joseph Hooper', 'Helena Kingshaw'],
      quote: 'Oh, how right I was to come here!',
      themes: ['Adults who do not see'],
      tension: 2,
      significance:
        'The adults’ contentment is set against the boys’ war, and dramatic irony becomes the novel’s method.',
    },
    {
      where: 'Chapter 5',
      title: 'The plan to run away',
      summary:
        'When his mother says she is going up to London with Mr Hooper, Kingshaw plans his escape, collects supplies and leaves at dawn, across the fields to Hang Wood, sure that this time he will not be followed.',
      setting: 'Warings at dawn, the fields and the edge of Hang Wood',
      who: ['Charles Kingshaw', 'Helena Kingshaw'],
      themes: ['Nature and escape', 'Fear'],
      tension: 3,
      significance:
        'Kingshaw acts for himself for the first time, and chooses the wild over the house.',
    },
    {
      where: 'Chapter 6',
      title: 'Hang Wood',
      summary:
        'Inside the wood Kingshaw watches a rabbit, but Hooper has followed him and catches up. Together they see a deer, then go deeper into the wood and get lost, until a blackbird’s warning song and the first thunder announce a storm.',
      setting: 'Hang Wood, among oak trees and bracken',
      who: ['Charles Kingshaw', 'Edmund Hooper'],
      themes: ['Nature and escape', 'Power and bullying'],
      tension: 3,
      significance:
        'Even in the wood Kingshaw cannot escape Hooper, but here he is the one who belongs.',
    },
    {
      where: 'Chapter 7',
      title: 'The storm and the stream',
      summary:
        'Hooper is terrified by the thunderstorm and Kingshaw has to take charge. Later, at the stream, Kingshaw finds Hooper face down in the water with blood coming from his head, and drags him out.',
      setting: 'Hang Wood in a thunderstorm, then the stream',
      who: ['Edmund Hooper', 'Charles Kingshaw'],
      quote: 'I’m not being by myself in thunder.',
      themes: ['Fear', 'Power and bullying', 'Nature and escape'],
      tension: 5,
      significance:
        'The balance of power reverses, and Kingshaw saves the life of the boy who torments him.',
    },
    {
      where: 'Chapter 8',
      title: 'Night in the wood',
      summary:
        'As it gets dark they make camp. In the night Hooper has a nightmare and cries out for his mother, and Kingshaw goes over and kneels beside him to wake him.',
      setting: 'A makeshift camp in Hang Wood at night',
      who: ['Charles Kingshaw', 'Edmund Hooper'],
      themes: ['Fear', 'Childhood and evil'],
      tension: 3,
      significance:
        'Hooper’s loneliness is exposed, and Kingshaw sees a side of him the adults never will.',
    },
    {
      where: 'Chapters 9 and 10',
      title: 'Rescued, and betrayed',
      summary:
        'Men find the boys late the next morning. Hooper at once tells the adults that Kingshaw pushed him into the water, and when Kingshaw, astounded, calls him a liar, it is Kingshaw his mother scolds.',
      setting: 'Hang Wood, then Warings',
      who: ['Edmund Hooper', 'Charles Kingshaw', 'Helena Kingshaw', 'Joseph Hooper'],
      quote: 'It was Kingshaw, it was Kingshaw, he pushed me in the water.',
      themes: ['Power and bullying', 'Adults who do not see'],
      tension: 4,
      significance:
        'Hooper wins back his power by lying to the adults, the pattern of the rest of the novel.',
    },
    {
      where: 'Chapter 11',
      title: 'The shed',
      summary:
        'At breakfast Mr Hooper announces that next term Kingshaw will go to Edmund’s school. Kingshaw runs and hides in an old shed at the bottom of the allotment. Hooper snaps the padlock shut on him and torments him from outside, playing on his fear of moths, and Kingshaw weeps silently.',
      setting: 'A disused shed at the bottom of the allotments',
      who: ['Charles Kingshaw', 'Edmund Hooper'],
      themes: ['Power and bullying', 'Fear'],
      tension: 4,
      significance:
        'Hooper’s cruelty becomes more calculated, and Kingshaw has nowhere left to hide.',
    },
    {
      where: 'Chapter 12',
      title: 'Leydell Castle',
      summary:
        'On an outing to the ruined castle Kingshaw climbs high and shouts the title’s words. Hooper climbs up too and is stranded on a ledge, and when Kingshaw reaches out to help him down he flinches in terror and falls.',
      setting: 'The ruined walls of Leydell Castle',
      who: ['Charles Kingshaw', 'Edmund Hooper', 'Helena Kingshaw', 'Joseph Hooper'],
      quote: 'I’m the King of the Castle!',
      themes: ['Power and bullying', 'Fear'],
      tension: 5,
      significance:
        'Kingshaw’s one moment on top ends in a fall for which the adults will blame him.',
    },
    {
      where: 'Chapter 13',
      title: 'Ignored',
      summary:
        'Afterwards what Kingshaw remembers most clearly is being ignored. Hooper is taken to hospital, and the adults’ attention goes with him while Kingshaw is left alone with his thoughts.',
      setting: 'Leydell Castle, then Warings',
      who: ['Charles Kingshaw', 'Helena Kingshaw', 'Joseph Hooper'],
      themes: ['Adults who do not see'],
      tension: 3,
      significance: 'Kingshaw’s isolation is now complete within the family.',
    },
    {
      where: 'Chapter 14',
      title: 'Fielding and the farm',
      summary:
        'With his mother visiting Hooper in hospital, Kingshaw makes friends with Fielding, a farm boy, and at the farm sees a calf born. Told that Hooper is coming home, he admits to Fielding that he is afraid of him.',
      setting: 'The Fieldings’ farm and the fields around Derne',
      who: ['Charles Kingshaw', 'Anthony Fielding', 'Helena Kingshaw'],
      quote: 'Are you afraid of Edmund Hooper?',
      themes: ['Nature and escape', 'Fear'],
      tension: 2,
      significance: 'A glimpse of ordinary, happy childhood, which makes what follows more cruel.',
    },
    {
      where: 'Chapters 15 and 16',
      title: 'The last hopes go',
      summary:
        'Hooper comes home and reasserts his power, telling Kingshaw that his mother is going to marry Mr Hooper. Fielding, visiting Warings, is as happy with Hooper as with Kingshaw, and the adults talk of the wedding.',
      setting: 'Warings, including the Red Room',
      who: ['Edmund Hooper', 'Charles Kingshaw', 'Anthony Fielding', 'Helena Kingshaw'],
      themes: ['Adults who do not see', 'Property, class and belonging'],
      tension: 4,
      significance:
        'Every escape is closed: friend, mother, school and home all now belong to Hooper’s world.',
    },
    {
      where: 'Chapter 17',
      title: 'Hang Wood again',
      summary:
        'At dawn Kingshaw knows what to do. He goes back to the stream in Hang Wood and drowns himself. The searchers follow Hooper to the stream, and when he sees the body he feels triumph. Mrs Kingshaw comforts Hooper.',
      setting: 'Hang Wood and the stream, in the early morning',
      who: ['Charles Kingshaw', 'Edmund Hooper', 'Helena Kingshaw'],
      quote: 'it was because of me, and a spurt of triumph went through him',
      themes: ['Childhood and evil', 'Adults who do not see', 'Power and bullying'],
      tension: 5,
      significance: 'The novel ends with Hooper king of the castle and the adults still blind.',
    },
  ],

  relationships: [
    {
      from: 'Edmund Hooper',
      to: 'Charles Kingshaw',
      kind: 'tormentor and victim',
      note: 'Hooper persecutes Kingshaw from the first day. In Hang Wood and at the castle the balance tips, but each time Hooper regains control through the adults.',
    },
    {
      from: 'Joseph Hooper',
      to: 'Edmund Hooper',
      kind: 'father and son',
      note: 'A distant relationship: Mr Hooper cannot read his son, and Edmund uses that to be believed.',
    },
    {
      from: 'Helena Kingshaw',
      to: 'Charles Kingshaw',
      kind: 'mother and son',
      note: 'She loves him but misreads him more and more, taking his misery for ingratitude as her own prospects improve.',
    },
    {
      from: 'Joseph Hooper',
      to: 'Helena Kingshaw',
      kind: 'employer and housekeeper, then engaged',
      note: 'Their growing closeness is the background of the novel, and every step towards marriage traps Kingshaw further.',
    },
    {
      from: 'Charles Kingshaw',
      to: 'Anthony Fielding',
      kind: 'friends',
      note: 'Kingshaw’s only friendship, easy and unafraid; it ends for him when Fielding is just as friendly with Hooper.',
    },
    {
      from: 'Anthony Fielding',
      to: 'Edmund Hooper',
      kind: 'new acquaintances',
      note: 'Fielding treats Hooper like anyone else, which takes away the one thing Kingshaw had that Hooper did not.',
    },
    {
      from: 'Helena Kingshaw',
      to: 'Edmund Hooper',
      kind: 'future stepmother',
      note: 'She tries hard to mother Edmund, and on the last page comforts him rather than grieving for her own son.',
    },
  ],

  compareWith: [
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'Also on the Cambridge prose list: childhood fear and the failures of the adult world, told from inside a child’s experience, though Lee’s adults include a father who does see.',
    },
    {
      title: 'Fire on the Mountain',
      href: '/resources/english-literature/caie/fire-on-the-mountain',
      reason:
        'Also on the Cambridge prose list: a solitary child sent to an isolated house among adults who do not understand her, and a quiet novel that ends in sudden catastrophe.',
    },
    {
      title: 'A Taste of Honey',
      href: '/resources/english-literature/caie/a-taste-of-honey',
      reason:
        'A Cambridge drama text: a single mother more absorbed in a new marriage than in her child, a useful comparison for Mrs Kingshaw.',
    },
  ],

  contentGuidance: ['violence', 'mortality', 'mental_health', 'discrimination'],

  quotesFromElsewhere: [
    'for adults',
    'the power of evil, which can possess even a young child',
    'two typical English prep-school boys',
    'there was certainly nothing of Kingshaw and Hooper about them',
    'landscapes of the mind',
    'trio of survivors',
  ],

  sources: [
    {
      label:
        'Internet Archive full-text search of scanned editions, restricted by identifier (archive.org search service, fts backend): used to find every quotation word for word and to read chapter boundaries from the headings. Editions: Viking Press, New York, 1970 (imkingofcastle00hill); Penguin, 1974, reprinted with an Afterword 1989 (imkingofcastle0000hill); Penguin reissue 2010, introduction by Esther Freud (imkingofcastle0000hill_x5j3); Longman, 2000, notes by Frank Downes (imkingofcastle00susa); Longman, 1981, with Hill’s introductory note (imkingofcastleno0000hill).',
      url: 'https://archive.org/details/imkingofcastle00hill',
    },
    {
      label:
        'Open Library search inside (the same full-text index, across all editions): first pass on each quotation and on the character and place names',
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        'Susan Hill, Afterword to the Penguin edition (1989), read through the full-text search of imkingofcastle0000hill: the Dorset cottage, the two prep-school boys, written for adults, cruelty and the power of evil, the trio of survivors',
      url: 'https://archive.org/details/imkingofcastle0000hill',
    },
    {
      label:
        'York Notes: I’m the King of the Castle (Longman, 1997), searched for chapter summaries and chapter references',
      url: 'https://archive.org/details/imkingofcastlesu0000wool',
    },
    {
      label:
        'Penguin UK, publisher’s page for the edition with an afterword by the author (blurb, reviews quoted)',
      url: 'https://www.penguin.co.uk/books/5299/im-the-king-of-the-castle-by-susan-hill-with-an-afterword-by-the-author/9780140034912',
    },
    {
      label:
        'Wikipedia, I’m the King of the Castle (1970 publication, the 1989 French film, the Somerset Maugham Award)',
      url: 'https://en.wikipedia.org/wiki/I%27m_the_King_of_the_Castle',
    },
    {
      label:
        'Wikipedia, Susan Hill (birth date and place, King’s College London, Somerset Maugham Award)',
      url: 'https://en.wikipedia.org/wiki/Susan_Hill',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027 (set text, paper format, closed book)',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'Cambridge 0475 specimen Paper 1 for examination from 2028 (question style for this text)',
      url: 'https://www.cambridgeinternational.org/Images/742911-2028-specimen-paper-1.pdf',
    },
    {
      label:
        'LitCharts plot summary and character list (orientation only; every fact used was checked against the scans)',
      url: 'https://www.litcharts.com/lit/i-m-the-king-of-the-castle/summary',
    },
  ],
}
