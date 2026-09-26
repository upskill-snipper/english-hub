import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Silas Marner, George Eliot (1861). A supplement: the page at
 * /revision/texts/silas-marner keeps its overview, context, themes, characters
 * and key quotations, and this file adds what it lacked (passages for close
 * reading, language analysis, structure and form, vocabulary, exam practice
 * with guidance and a model answer) together with the timeline and character
 * map the visuals draw.
 *
 * Every passage, scene-card quotation and quoted phrase below was copied from
 * the byte-copy edition held at src/data/full-texts/silas-marner.ts (Project
 * Gutenberg #550), and the test matches each one against it. The test cannot
 * check attribution, so every chapter of the novel was read in full to check
 * who says each line and where. Chapter numbers are 1 to 21 for the edition's
 * Roman I to XXI; Part One is Chapters 1 to 15, Part Two is 16 to 21 and the
 * Conclusion.
 *
 * The page above this supplement carries several quotations that are not in
 * the novel in the form printed, some misattributed chapters, a publication
 * order that is wrong and an AQA badge for a text AQA does not set. They are
 * listed in the report that produced this file; none of them is repeated here.
 *
 * A second, adversarial check (26 September 2026) re-read every quotation
 * against the edition in its chapter and found the words right but several
 * summaries wrong: Godfrey was said to meet his father "meaning to tell him
 * everything" (Chapter 8 shows that resolve gone by morning), to say nothing
 * when Silas brought the child in (he tells Nancy he does not know whose it
 * is), and the reader was said to learn Eppie's parentage in Chapter 13 (it is
 * Chapter 12). The form was "novella"; at about 71,000 words it is a
 * full-length novel, the exam boards list it as one, and the held edition's
 * own type field says "novel".
 */
export const guide: StudyGuide = {
  slug: 'silas-marner',
  title: 'Silas Marner',
  author: 'George Eliot',
  form: 'novel',
  scope:
    'The whole novel: twenty-one chapters and a Conclusion, in two parts. Part One is Chapters 1 to 15; Part Two, which opens sixteen years later, is Chapters 16 to 21 and the Conclusion. Many editions number the chapters in Roman numerals (I to XXI); this guide uses 1 to 21.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First published in one volume as Silas Marner: The Weaver of Raveloe by William Blackwood and Sons, Edinburgh and London, on 2 April 1861. Passages and quotations follow the Project Gutenberg edition, eBook #550.',
  },

  native: {
    overview: '/revision/texts/silas-marner',
    context: '/revision/texts/silas-marner',
    themes: '/revision/texts/silas-marner',
    characters: '/revision/texts/silas-marner',
    keyQuotes: '/revision/texts/silas-marner',
  },

  extracts: [
    {
      title: 'The drawing of lots',
      where: 'Chapter 1',
      pointer:
        'Near the end of Chapter 1, after William Dane finds the empty money-bag in Silas’s room: from “On their return to the vestry there was further deliberation” to “I can do nothing but pray for you, Silas.”',
      text: 'On their return to the vestry there was further deliberation. Any resort to legal measures for ascertaining the culprit was contrary to the principles of the church in Lantern Yard, according to which prosecution was forbidden to Christians, even had the case held less scandal to the community. But the members were bound to take other measures for finding out the truth, and they resolved on praying and drawing lots. This resolution can be a ground of surprise only to those who are unacquainted with that obscure religious life which has gone on in the alleys of our towns. Silas knelt with his brethren, relying on his own innocence being certified by immediate divine interference, but feeling that there was sorrow and mourning behind for him even then—that his trust in man had been cruelly bruised. The lots declared that Silas Marner was guilty. He was solemnly suspended from church-membership, and called upon to render up the stolen money: only on confession, as the sign of repentance, could he be received once more within the folds of the church. Marner listened in silence. At last, when everyone rose to depart, he went towards William Dane and said, in a voice shaken by agitation— / “The last time I remember using my knife, was when I took it out to cut a strap for you. I don’t remember putting it in my pocket again. You stole the money, and you have woven a plot to lay the sin at my door. But you may prosper, for all that: there is no just God that governs the earth righteously, but a God of lies, that bears witness against the innocent.” / There was a general shudder at this blasphemy. / William said meekly, “I leave our brethren to judge whether this is the voice of Satan or not. I can do nothing but pray for you, Silas.”',
      annotations: [
        {
          phrase: 'they resolved on praying and drawing lots',
          note: 'The congregation refuses the law and hands the verdict to a ritual of chance, trusting that God will guide the result. The flat, matter-of-fact verb makes the decision sound reasonable to them, and the next sentence shows the narrator stepping in to explain it to readers who will find it strange. The whole novel will ask what chance and providence really have to do with each other.',
        },
        {
          phrase: 'relying on his own innocence being certified by immediate divine interference',
          note: 'Silas expects God to act like a court. The word “certified” belongs to documents and proof, so his faith is shown as a kind of contract: if he is innocent, God must say so at once. That expectation is exactly what makes the false result shatter him, rather than merely hurt him.',
        },
        {
          phrase: 'his trust in man had been cruelly bruised',
          note: 'The metaphor makes betrayal a physical injury. Notice the order: his trust in man is damaged before the lots are drawn, because his closest friend has already turned on him. Eliot suggests the loss of faith in God grows out of a loss of faith in people, which is why people will be what heals him.',
        },
        {
          phrase: 'The lots declared that Silas Marner was guilty.',
          note: 'A short declarative sentence, printed in italics in the Gutenberg edition, set among long ones. The subject is “The lots”: no person takes responsibility for the verdict. The flat sentence reads like the sound of a door shutting on his old life.',
        },
        {
          phrase: 'you have woven a plot to lay the sin at my door',
          note: 'Silas is a weaver, and he names the conspiracy in the language of his own trade. The metaphor also looks forward: in Raveloe he will weave for fifteen years as a way of not thinking, and the novel itself weaves his story together with the Cass family’s.',
        },
        {
          phrase: 'a God of lies, that bears witness against the innocent',
          note: 'The blasphemy turns the commandment against false witness back on God himself. Silas has not stopped believing that God exists; he now believes God is unjust. The narrator calls what follows “benumbing unbelief” and, in Chapter 2, “benumbed faith”, as if his faith has been frozen rather than killed.',
        },
        {
          phrase: 'William said meekly',
          note: 'The adverb is sharply ironic. The guilty man performs the Christian virtue of meekness and hands Silas over to the judgement of the brethren, while the reader, who has seen his “narrow slanting eyes” earlier in the chapter, can guess the truth the congregation misses.',
        },
      ],
      question:
        'Explore how Eliot presents Silas Marner’s loss of faith in this extract. Give examples from the extract to support your ideas.',
    },
    {
      title: 'Gold on the hearth',
      where: 'Chapter 12',
      pointer:
        'New Year’s Eve, after Silas has stood at his open door in one of his fits: the paragraph from “When Marner’s sensibility returned” to “by which the event could have been brought about.”',
      text: 'When Marner’s sensibility returned, he continued the action which had been arrested, and closed his door, unaware of the chasm in his consciousness, unaware of any intermediate change, except that the light had grown dim, and that he was chilled and faint. He thought he had been too long standing at the door and looking out. Turning towards the hearth, where the two logs had fallen apart, and sent forth only a red uncertain glimmer, he seated himself on his fireside chair, and was stooping to push his logs together, when, to his blurred vision, it seemed as if there were gold on the floor in front of the hearth. Gold!—his own gold—brought back to him as mysteriously as it had been taken away! He felt his heart begin to beat violently, and for a few moments he was unable to stretch out his hand and grasp the restored treasure. The heap of gold seemed to glow and get larger beneath his agitated gaze. He leaned forward at last, and stretched forth his hand; but instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls. In utter amazement, Silas fell on his knees and bent his head low to examine the marvel: it was a sleeping child—a round, fair thing, with soft yellow rings all over its head. Could this be his little sister come back to him in a dream—his little sister whom he had carried about in his arms for a year before she died, when he was a small boy without shoes or stockings? That was the first thought that darted across Silas’s blank wonderment. Was it a dream? He rose to his feet again, pushed his logs together, and, throwing on some dried leaves and sticks, raised a flame; but the flame did not disperse the vision—it only lit up more distinctly the little round form of the child, and its shabby clothing. It was very much like his little sister. Silas sank into his chair powerless, under the double presence of an inexplicable surprise and a hurrying influx of memories. How and when had the child come in without his knowledge? He had never been beyond the door. But along with that question, and almost thrusting it away, there was a vision of the old home and the old streets leading to Lantern Yard—and within that vision another, of the thoughts which had been present with him in those far-off scenes. The thoughts were strange to him now, like old friendships impossible to revive; and yet he had a dreamy feeling that this child was somehow a message come to him from that far-off life: it stirred fibres that had never been moved in Raveloe—old quiverings of tenderness—old impressions of awe at the presentiment of some Power presiding over his life; for his imagination had not yet extricated itself from the sense of mystery in the child’s sudden presence, and had formed no conjectures of ordinary natural means by which the event could have been brought about.',
      annotations: [
        {
          phrase: 'unaware of the chasm in his consciousness',
          note: 'The child arrives inside a gap in Silas’s awareness, during one of his cataleptic fits. Eliot gives a medical, realist explanation for how she got in unseen, while letting Silas experience it as something that simply appeared, which is why he can read her as a sign.',
        },
        {
          phrase: 'to his blurred vision, it seemed as if there were gold on the floor',
          note: 'Silas is short-sighted and the fire is low, so the mistake is believable. The verb “seemed” keeps us inside his perception. This is the novel’s method in miniature: a fairy-tale event, gold turning into a golden-haired child, with an everyday cause underneath it.',
        },
        {
          phrase:
            'Gold!—his own gold—brought back to him as mysteriously as it had been taken away!',
          note: 'Free indirect style: the exclamations and dashes belong to Silas’s excitement, but they are spoken in the narrator’s voice. The possessive “his own” shows how completely the coins had become part of his identity, so the reader feels the shock of what comes next.',
        },
        {
          phrase:
            'instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls',
          note: 'The central substitution of the novel happens through touch, fitting for a man who cannot see well. Each quality is reversed: hard becomes soft, cold metal becomes warmth, “resisting” becomes yielding. The coins pushed back against him; the child will reach out to him.',
        },
        {
          phrase: 'Could this be his little sister come back to him in a dream',
          note: 'His first thought is of a lost person, not of lost money. The child unlocks memories that fifteen years of weaving had buried, and it prepares for the naming in Chapter 14, when Silas calls her after his mother and this sister.',
        },
        {
          phrase: 'this child was somehow a message come to him from that far-off life',
          note: 'Silas reads the child as a message, and “some Power presiding over his life” returns to his mind for the first time since Lantern Yard. The narrator neither confirms nor denies it: the final clause insists he had not yet thought of ordinary natural means. The reader is left between providence and chance, which is where the novel wants us.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole novel, write about the change Eppie brings to Silas Marner’s life and how Eliot presents it at different points in the novel.',
    },
    {
      title: 'Godfrey claims his daughter',
      where: 'Chapter 19',
      pointer:
        'Late in Chapter 19, after Eppie has first refused Godfrey’s offer: from “But I’ve a claim on you, Eppie” to “You’d cut us i’ two.”',
      text: '“But I’ve a claim on you, Eppie—the strongest of all claims. It’s my duty, Marner, to own Eppie as my child, and provide for her. She is my own child—her mother was my wife. I’ve a natural claim on her that must stand before every other.” / Eppie had given a violent start, and turned quite pale. Silas, on the contrary, who had been relieved, by Eppie’s answer, from the dread lest his mind should be in opposition to hers, felt the spirit of resistance in him set free, not without a touch of parental fierceness. “Then, sir,” he answered, with an accent of bitterness that had been silent in him since the memorable day when his youthful hope had perished—“then, sir, why didn’t you say so sixteen year ago, and claim her before I’d come to love her, i’stead o’ coming to take her from me now, when you might as well take the heart out o’ my body? God gave her to me because you turned your back upon her, and He looks upon her as mine: you’ve no right to her! When a man turns a blessing from his door, it falls to them as take it in.” / “I know that, Marner. I was wrong. I’ve repented of my conduct in that matter,” said Godfrey, who could not help feeling the edge of Silas’s words. / “I’m glad to hear it, sir,” said Marner, with gathering excitement; “but repentance doesn’t alter what’s been going on for sixteen year. Your coming now and saying ‘I’m her father’ doesn’t alter the feelings inside us. It’s me she’s been calling her father ever since she could say the word.” / “But I think you might look at the thing more reasonably, Marner,” said Godfrey, unexpectedly awed by the weaver’s direct truth-speaking. “It isn’t as if she was to be taken quite away from you, so that you’d never see her again. She’ll be very near you, and come to see you very often. She’ll feel just the same towards you.” / “Just the same?” said Marner, more bitterly than ever. “How’ll she feel just the same for me as she does now, when we eat o’ the same bit, and drink o’ the same cup, and think o’ the same things from one day’s end to another? Just the same? that’s idle talk. You’d cut us i’ two.”',
      annotations: [
        {
          phrase: 'I’ve a natural claim on her that must stand before every other',
          note: 'Godfrey speaks the language of property and law: a “claim”, a “duty”, a right that “must stand”. He assumes blood is a title deed. This is the Victorian assumption the whole novel has been testing, and the scene is built to show it failing against sixteen years of care.',
        },
        {
          phrase:
            'an accent of bitterness that had been silent in him since the memorable day when his youthful hope had perished',
          note: 'The narrator links this moment straight back to Lantern Yard. For the second time someone tries to take from him what he loves. The echo joins the novel’s two parts: the old wound is what gives Silas the strength to fight now.',
        },
        {
          phrase: 'God gave her to me because you turned your back upon her',
          note: 'Silas, who once called God a “God of lies”, now reads events as providential. His faith has returned, but in a new form: he finds God’s will in what people do, and in what they fail to do, rather than in the drawing of lots.',
        },
        {
          phrase: 'When a man turns a blessing from his door, it falls to them as take it in.',
          note: 'The sentence sounds like a proverb, the plain wisdom of a working man, and it picks up the novel’s image of the open door through which Eppie walked. Godfrey repeats it himself in Chapter 20, admitting that Marner was right, so the uneducated weaver wins the argument.',
        },
        {
          phrase: 'repentance doesn’t alter what’s been going on for sixteen year',
          note: 'Eliot’s moral argument in one line: feeling sorry cannot undo consequences. The dialect form “sixteen year” keeps the voice rooted in Silas’s class while the thought is as sharp as anything the narrator says.',
        },
        {
          phrase: 'when we eat o’ the same bit, and drink o’ the same cup',
          note: 'One reading hears an echo of Holy Communion in the shared bread and cup, which would make everyday life together almost sacred. The three parallel clauses (eat, drink, think) build up a whole shared existence that Godfrey’s offer of visits cannot replace.',
        },
        {
          phrase: 'You’d cut us i’ two.',
          note: 'After the long rhetorical question, a blunt, very short sentence. The image is bodily, as if father and daughter were one flesh. One reading, fitting for a weaver, hears cloth being cut from the loom; either way, the separation Godfrey calls reasonable is presented as violence.',
        },
      ],
      question:
        'Explore how Eliot presents the conflict between Silas Marner and Godfrey Cass in this extract. Give examples from the extract to support your ideas.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'The intrusive omniscient narrator and the general maxim',
      example:
        'In Chapter 5: “The sense of security more frequently springs from habit than from conviction”; in Chapter 9, on Godfrey: “Favourable Chance, I fancy, is the god of all men who follow their own devices instead of obeying a law they believe in.”',
      effect:
        'Eliot’s narrator knows every mind in Raveloe and regularly steps back from the story to state a general truth, sometimes in the first person (“I fancy”). The maxims turn a village story into a study of how all people think: the Chapter 5 one is followed by the image of a miner who feels safe after forty years “though the roof is beginning to sink”, and the Chapter 9 one turns on the reader, on “a polished man of these days”. The effect is judgement without sneering. We are shown that Godfrey’s cowardice is a common human habit, which makes it harder to dismiss and easier to recognise in ourselves.',
    },
    {
      technique: 'Symbolism: the gold and the golden-haired child',
      example:
        'In Chapter 12 Silas reaches for his returned gold and “his fingers encountered soft warm curls”; in Chapter 14 he feels “that the child was come instead of the gold—that the gold had turned into the child.”',
      effect:
        'The two are linked by colour and by place, both found on the floor of the same cottage, so the reader sees Eppie as the gold transformed. But the symbol works by contrast as much as likeness. Chapter 14 sets them side by side: the gold “needed nothing, and must be worshipped in close-locked solitude”, while “Eppie was a creature of endless claims and ever-growing desires”. The coins drew Silas inwards; the child pulls him out into the village, the church and the fields.',
    },
    {
      technique: 'Dehumanising imagery of insects and machines',
      example:
        'In Chapter 2 Silas weaves “like the spider, from pure impulse, without reflection”, is reduced to “the unquestioning activity of a spinning insect”, and bends until he looks like “a handle or a crooked tube, which has no meaning standing apart.”',
      effect:
        'The images strip Silas of the thought and feeling that make a person. A spider spins without choosing to; a handle is a part of something else. Eliot is showing what isolation and repetitive labour do to a human being, and she uses the same images for the loom and the man until they seem to merge. The imagery is not only tragic: in Chapter 7 the villagers’ pipes jerk “like the antennae of startled insects” when Silas appears, a comic reversal that makes them the insects for a moment.',
    },
    {
      technique: 'Extended metaphor: the shrinking stream',
      example:
        'At the end of Chapter 2 his life has shrunk “like a rivulet that has sunk far down from the grassy fringe of its old breadth into a little shivering thread, that cuts a groove for itself in the barren sand”; in Chapter 10, after the robbery, “his soul was still the shrunken rivulet”.',
      effect:
        'The simile makes his narrowing visible: a stream that once had grassy banks is now a thin line in dry sand. The word “thread” quietly connects it to weaving. Eliot returns to the image eight chapters later, adding that “The fountains of human love and of faith in a divine love had not yet been unlocked”, which lets the reader track his state across the novel and expect that water, and life, will flow again.',
    },
    {
      technique: 'Dialect speech and the wisdom of plain people',
      example:
        'Dolly calls God “Them above” and tells Silas in Chapter 16 that “if you could but ha’ gone on trustening” he would not have been so lonely; Silas, after protesting that it would have been hard, comes round: “There’s good i’ this world—I’ve a feeling o’ that now”.',
      effect:
        'Eliot writes the villagers’ speech with its grammar, contractions and local words, which makes Raveloe feel real and gives each voice a class and a place. The key point for an answer is where she puts the wisdom: the novel’s most important statements about faith come from an uneducated wheelwright’s wife and a weaver, not from the rector. Godfrey’s more polished speech, by contrast, is the language of evasion. Quote the dialect exactly: “a good more nor he can see” is Silas’s, and correcting it loses the voice.',
    },
    {
      technique: 'Biblical and religious allusion',
      example:
        'Silas describes William in Chapter 16 as “mine own familiar friend in whom I trusted, had lifted up his heel again’ me”, the words of Psalm 41; Chapter 14 ends with angels leading men “away from the city of destruction”, the city Christian flees in Bunyan’s The Pilgrim’s Progress.',
      effect:
        'The Psalm shows how deeply the Bible shaped Silas’s mind: even years later, he reaches for scripture’s words to describe betrayal. The Chapter 14 allusion does something bolder. The narrator says “We see no white-winged angels now”, then gives the angel’s work to “a little child’s” hand. One reading is that Eliot replaces religion with human love; a more careful one is that she keeps religion’s language and relocates its meaning in human relationships, which fits both Dolly’s faith and Silas’s.',
    },
    {
      technique: 'Personification of inner states',
      example:
        'In Chapter 10 Godfrey argues with “his importunate companion, Anxiety”, who asks “how will you bribe his spite to silence?”; in Chapter 12 Molly is ruled by “the demon Opium to whom she was enslaved, body and soul”.',
      effect:
        'Turning feelings and addictions into characters dramatises inner conflict. Anxiety speaks in its own quoted lines and Godfrey answers it, so we watch him push his conscience away. Calling opium a “demon” presents Molly’s addiction as something that possesses her rather than a simple choice, which makes her more pitiable, although the narrator also shows her blaming Godfrey for a misery that is not wholly his fault.',
    },
    {
      technique: 'Weather and season as mirrors of feeling',
      example:
        'On Christmas Day in Chapter 10 Silas looks out on “the black frost that seemed to press cruelly on every blade of grass” until snow “curtained from him even that dreary outlook”; Part Two opens on “a bright autumn Sunday”, and the Conclusion on a wedding in lilac time.',
      effect:
        'The frost “seemed” cruel only to Silas, so this is pathetic fallacy filtered through his grief. Snow shuts him in on Christmas Day; six days later, on New Year’s Eve, it is across the snow that Eppie toddles to his door. The seasons of the novel move from winter isolation to autumn ripeness and spring marriage, a shape that suggests natural renewal rather than sudden miracle.',
    },
  ],

  structureForm: [
    {
      heading: 'Two parts and a sixteen-year gap',
      body: 'The novel is divided into two parts of very unequal length. Most of Part One (Chapters 1 to 15) happens in a few weeks of Silas’s fifteenth year in Raveloe, from a late-November afternoon to New Year’s Eve, after an opening flashback to Lantern Yard; Part Two (Chapters 16 to 21 and the Conclusion) opens “sixteen years after Silas Marner had found his new treasure on the hearth”. Eliot skips the years of Eppie’s childhood almost entirely, apart from Chapter 14’s summary, so the change in Silas is shown as a finished fact: white-haired, settled, loved. The gap also lets consequences ripen. Godfrey’s choice on New Year’s Eve looks costless at the end of Part One; Part Two shows the bill arriving, in a childless marriage, a skeleton in the drained pit and a daughter who says no.',
    },
    {
      heading: 'Two plots woven together',
      body: 'The narrator says at the end of Chapter 2 that Silas’s “history became blent in a singular manner with the life of his neighbours”. From then on the chapters alternate between the cottage and the Red House: Silas in Chapters 1 and 2, the Cass brothers in 3 and 4, Silas again in 5, the Rainbow in 6 and 7, Godfrey in 8 and 9. The two plots cross at three points: the robbery, when Dunstan walks into the cottage; New Year’s Eve, when Godfrey’s child walks into it; and the draining of the Stone-pit, which reveals the first crossing sixteen years late. For a novel about a weaver, the method is fitting: two threads that seem separate turn out to make one cloth, and an answer that tracks both earns more than one that treats Silas alone.',
    },
    {
      heading: 'Parallels and reversals',
      body: 'Eliot builds the novel from pairs. Silas loses gold and gains a child; Godfrey, who hid a child, is left childless and says so himself: “I wanted to pass for childless once, Nancy—I shall pass for childless now against my wish” (Chapter 20). The open door lets in both the thief and the child. There are two claims to Eppie: Silas’s at the Red House, “It’s come to me—I’ve a right to keep it” (Chapter 13), and Godfrey’s, sixteen years later, in the language of blood and duty. Two communities judge Silas, Lantern Yard by lots and Raveloe by gossip, and the slower judgement proves the kinder. The patterning gives the story the feel of a moral fable, where what goes round comes round, but the reversals are quiet rather than violent, which is a large part of the novel’s effect.',
    },
    {
      heading: 'A legendary tale told realistically',
      body: 'Eliot told her publisher, John Blackwood, in a letter of 24 February 1861 that the story came to her “as a sort of legendary tale”, from a childhood memory of a linen-weaver with a bag on his back, but that she became inclined to “a more realistic treatment”. Both are visible. The fairy-tale shapes are there: a miser, a lost hoard, a foundling on New Year’s Eve, gold turning into a golden-haired child. Yet every marvel has a natural cause: Silas’s short sight, his cataleptic fits, a door left open, a pit drained for farming. In the same letter she says the story sets out “the remedial influences of pure, natural human relations” and that “The Nemesis is a very mild one”. The title page adds lines from Wordsworth’s poem Michael about a child bringing “forward-looking thoughts”. An answer that notices the double nature, fable and realism at once, is noticing the form itself.',
    },
    {
      heading: 'The Rainbow as a chorus',
      body: 'Chapters 6 and 7 are almost all talk: the landlord, the butcher, the farrier, Mr Macey and the rest argue about a cow, a wedding, a ghost story called “Cliff’s Holiday”. The talk delays the moment Silas bursts in, which builds suspense, and it lets the reader hear the village as a group, quarrelsome, superstitious, comic and in the end kind. Like the chorus of a play, the villagers comment on the action and speak for common opinion. The novel ends with them again, in the Rainbow yard, agreeing that Silas “had brought a blessing on himself by acting like a father to a lone motherless child” (Conclusion). The chorus that once feared him now blesses him, which measures how far both he and they have come.',
    },
    {
      heading: 'A narrator looking back across half a century',
      body: 'The story is set “in the early years of this century”, in what the text calls “war times”, and told from the 1860s. The narrator often measures then against now: “There is hardly a servant-maid in these days who is not better informed than Miss Nancy” (Chapter 11). This double view lets Eliot record a vanished rural world with affection while refusing to idealise it: Raveloe is kind but ignorant, and its gentry are idle. It also prepares the novel’s one journey into the modern world. In Chapter 21 Silas returns to his old town and finds a factory where the chapel stood: “It’s all gone—chapel and all.” The past cannot be recovered, and the novel closes in the one place that is left, the cottage at the Stone-pits, with a garden that did not exist when the story began.',
    },
    {
      heading: 'Dramatic irony and withheld knowledge',
      body: 'The reader knows from Chapter 4 that Dunstan took the gold, while Raveloe spends Chapter 8 inventing a pedlar with ear-rings. The reader knows from Chapter 12, where the child is carried through the snow by “Godfrey’s wife”, that Eppie is Godfrey’s child; Nancy learns it in Chapter 18 and Eppie in Chapter 19, and the village never does. This dramatic irony shapes how we judge Godfrey: every kindness he does the weaver, the half-guinea and the furniture from the Red House, is also a secret payment on a debt only we can see. When the truth comes out, the tension is not about what happened but about what the characters will do, which is where Eliot, a novelist interested in moral choice, wants it.',
    },
  ],

  vocabulary: [
    {
      term: 'Dissenter and chapel',
      definition:
        'Dissenters were Protestants who had separated from the Church of England, and were also known as Nonconformists. Lantern Yard is a small, strict Dissenting congregation; Silas tells Dolly in Chapter 10, “I went to chapel”, and she has never heard the word.',
    },
    {
      term: 'Drawing lots',
      definition:
        'Deciding a question by chance, for example by picking marked objects, in the belief that God controls the result. Lantern Yard uses it to decide Silas’s guilt in Chapter 1. Years later he points out to Dolly that “there’s drawing o’ lots in the Bible” (Chapter 16).',
    },
    {
      term: 'Catalepsy (cataleptic fit)',
      definition:
        'A trance-like seizure in which the body goes rigid and the person loses consciousness for a time. Silas’s fits are mistaken in Lantern Yard for a sign of divine favour and in Raveloe for his soul leaving his body. One of them explains how Eppie entered the cottage unseen.',
    },
    {
      term: 'Loom, shuttle and web',
      definition:
        'A loom is the frame on which thread is woven into cloth; the shuttle carries the thread across it; the web is the cloth as it grows on the loom. Chapter 2’s “slow growth of sameness in the brownish web” uses the word in this sense.',
    },
    {
      term: 'Guinea',
      definition:
        'A gold coin, worth twenty-one shillings, or a pound and a shilling, in the years when the novel is set. Silas’s hoard is mostly guineas, and he tells the Rainbow it came to “Two hundred and seventy-two pounds, twelve and sixpence” (Chapter 7).',
    },
    {
      term: 'Miser and hoard',
      definition:
        'A miser is someone who saves money for its own sake and hates to spend it; a hoard is a hidden store. Silas’s hoard sits in an iron pot, and later two leather bags, under the bricks by his loom.',
    },
    {
      term: 'Squire and gentry',
      definition:
        'The squire is the leading landowner of a village; the gentry are the landowning class just below the nobility. Squire Cass “alone was honoured with the title of Squire” in Raveloe (Chapter 3), though he is only one of several landowners.',
    },
    {
      term: 'Providence',
      definition:
        'God’s care for, and guidance of, the world. Nancy refuses to adopt because she believes her childlessness is “the will of Providence” (Chapter 17); Dolly speaks of “Them above”. The novel keeps asking whether events are providence or chance.',
    },
    {
      term: 'Parish and workhouse',
      definition:
        'The parish was the local church district, and under the Poor Law of the time it was responsible for relieving its own poor, which is why Godfrey asks whether Silas will take the child “to the parish”. A workhouse housed paupers. Dr Kimble says Molly’s body must go “to the workhouse to-morrow”, and she is given a pauper’s burial (Chapters 13 and 14).',
    },
    {
      term: 'Laudanum and opium',
      definition:
        'Laudanum was a tincture of opium, opium dissolved in alcohol, sold without a prescription as a medicine in the nineteenth century. Molly is addicted: Dunstan sneers that she may take “a drop too much laudanum some day” (Chapter 3), and the narrator calls it “the demon Opium” (Chapter 12).',
    },
    {
      term: 'Christening',
      definition:
        'Baptism of a baby into the Church of England, with a name given. Silas had only seen adults baptised at Lantern Yard, so Dolly has to explain it; Eppie is christened in Chapter 14 and Silas enters Raveloe church for the first time.',
    },
    {
      term: 'Foundling',
      definition:
        'A child found abandoned whose parents are unknown. To Raveloe, Eppie is the “tramp’s child” (Chapter 14); only Godfrey knows who her parents were.',
    },
    {
      term: 'Omniscient narrator',
      definition:
        'A narrator who knows the thoughts of every character and can comment on them. Eliot’s narrator moves between Silas’s cottage and Godfrey’s mind, and often speaks in the first person to generalise about human nature.',
    },
    {
      term: 'Free indirect style',
      definition:
        'Narration in the third person that takes on a character’s own thoughts and feelings, without quotation marks. When Silas sees the child’s hair in Chapter 12, “Gold!—his own gold” is his excitement in the narrator’s voice.',
    },
    {
      term: 'Fable',
      definition:
        'A short story that teaches a moral, often with a simple, patterned plot. Eliot called the novel’s first idea a kind of legend; its realism complicates the fable without removing it.',
    },
    {
      term: 'Fustian',
      definition:
        'A heavy cotton cloth used mainly for men’s clothes, and associated with labourers. The humbler drinkers at the Rainbow wear “fustian jackets and smock-frocks” (Chapter 6), so Aaron’s “new fustian suit” in Chapter 16 marks his class, which matters when Godfrey later warns that Eppie may marry “some low working-man”.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Chapter 2 from “This is the history of Silas Marner, until the fifteenth year after he came to Raveloe” to “in the barren sand.” Explore how Eliot presents Silas Marner’s isolation in this extract. Give examples from the extract to support your ideas.',
        skill: 'Language analysis of an extract (Edexcel part (a) style)',
        guidance: [
          'Open with the big idea: the passage shows a life narrowed to two activities, weaving by day and counting gold by night, and Eliot makes the reader feel that narrowing through sentence shape and imagery.',
          'Analyse the long first sentence: “his ear filled with its monotony, his eyes bent close down on the slow growth of sameness in the brownish web”. The list of body parts (ear, eyes, muscles) shows the loom taking over his whole body, and “sameness” and “monotony” name the emptiness.',
          'Look at the turn “But at night came his revelry”. The word “revelry” means noisy celebration, and here it describes a lonely man behind closed shutters: explore the irony, and the barriers (shutters, fastened doors) that shut the world out.',
          'Pick out the family imagery: he thinks of the half-earned guineas “as if they had been unborn children”. The coins stand in for the people he has lost, which prepares for the child who will replace them.',
          'End with the closing simile of the rivulet shrinking “into a little shivering thread”. Explain how the image makes his contraction visible, how “thread” links to weaving, and how the narrator’s “No wonder” asks for pity rather than scorn.',
          'Stay inside the extract for this question. Make each paragraph a point about isolation, a short quotation, and the effect of specific words.',
        ],
      },
      {
        question:
          'In the Chapter 2 extract above, Silas shuts himself away from other people. Explain the importance of community elsewhere in the novel. In your answer, you must consider: how the people of Raveloe treat Silas at different points in the novel; the effects that the community has on Silas and on Eppie.',
        skill: 'Whole-text response (Edexcel part (b) style)',
        guidance: [
          'Set up two communities: Lantern Yard, close-knit and strict, and Raveloe, loose, gossipy and slow. Your argument can be that the first fails Silas and the second, for all its faults, saves him.',
          'Lantern Yard (Chapter 1): a community acting as judge. It trusts the lots over a man it has known for years, and being cast out is what drives Silas into his fifteen years alone.',
          'Raveloe before the robbery (Chapters 1 and 2): fear and superstition. His help for Sally Oates brings mothers wanting charms, and his refusal “made his isolation more complete” (Chapter 2).',
          'After the robbery (Chapters 7 and 10): the Rainbow takes him seriously, and Mr Macey and Dolly visit. The narrator admits the kindness “was often of a beery and bungling sort”, but it is the first thaw.',
          'Eppie as the link (Chapter 14): the christening takes him into church, and “the little child had come to link him once more with the whole world”. Consider how Dolly’s practical help makes his fatherhood possible.',
          'The ending: Eppie refuses to leave “the folks I’ve been used to” (Chapter 19), Lantern Yard is found “swep’ away” (Chapter 21), and the Rainbow yard celebrates the wedding (Conclusion). Finish with a judgement about what kind of community Eliot values.',
        ],
      },
      {
        question:
          'You should use the extract and your knowledge of the whole novel to answer this question. The extract is Chapter 13, from “Godfrey was too painfully preoccupied to feel a twinge of self-reproach” to “She may live, and then it’s all up with me.” Write about Godfrey Cass and how he is presented at different points in the novel. In your response you should: refer to the extract and the novel as a whole; show your understanding of characters and events in the novel; refer to the contexts of the novel.',
        skill: 'Extract and whole-text essay with context (Eduqas style)',
        guidance: [
          'Start in the extract: Godfrey knows “he ought to accept the consequences of his deeds, own the miserable wife, and fulfil the claims of the helpless child”, yet the voice that rules him asks first “Is she dead?” Analyse the split between conscience and desire.',
          'Go back to Chapter 3: the narrator names his “natural irresolution and moral cowardice” and shows him trapped by Dunstan’s blackmail. Then Chapter 9, where he chooses to trust “Favourable Chance” rather than confess.',
          'Return to the end of Chapter 13: he gives the weaver half a guinea and decides he would do “everything but own” the child. Show how small kindnesses become a way of avoiding the one big duty.',
          'Trace Part Two: his wish to adopt Eppie (Chapter 17), his confession after Dunstan’s body is found (Chapter 18), the claim he makes in Chapter 19 and his acceptance in Chapter 20: “there’s debts we can’t pay like money debts”.',
          'Bring in context: inheritance and class (a squire’s heir secretly married to an opium addict below his station), and his assumption in Chapter 17 that it was fitting “for people in a higher station to take a charge off the hands of a man in a lower”.',
          'Conclude with a judgement. Is he a villain? Eliot shows him as kindly and weak rather than wicked, and his punishment is quiet: childlessness and a daughter’s refusal. Say whether you find that punishment fitting, and why.',
        ],
      },
      {
        question:
          'In Chapter 16, from “Well, then, Master Marner, it come to me summat like this” to “there’s dealings”, Dolly Winthrop tells Silas what she believes about the drawing of lots. Explain the importance of religious faith elsewhere in the novel. In your answer, you must consider: the different kinds of faith shown in the novel; how Silas’s faith changes.',
        skill: 'Whole-text response (Edexcel part (b) style)',
        guidance: [
          'Map the kinds of faith: Lantern Yard’s strict doctrine and trust in signs; Raveloe’s easy, seasonal church-going; Nancy’s rigid personal code of Providence; Dolly’s humble trust in “Them above”.',
          'Chapter 1: Silas’s faith is tied to one community and one ritual, so when the lots lie it collapses, and he calls God “a God of lies”.',
          'Chapter 10: Dolly’s visit and the lard-cakes pricked with “I. H. S.” Silas can read the letters off, but neither of them knows what they mean; what reaches him, even if only faintly, is the kindness. Faith appears first as neighbourliness.',
          'Chapters 14 and 16: through Eppie’s christening and his talks with Dolly, Silas recovers “a consciousness of unity between his past and present” and concludes that “there’s dealings with us”.',
          'Chapter 17: contrast Nancy, whose sincere faith in Providence stops her adopting a child, and whose strict code in Chapter 19 makes her side with blood over nurture. Faith can narrow sympathy as well as widen it.',
          'Chapter 21: Lantern Yard has vanished, so the old question will never be answered, and Silas still says, “I’ve had light enough to trusten by”. Finish by arguing what kind of faith Eliot values most, and why.',
        ],
      },
    ],
    tips: [
      'Both papers are closed book: neither board lets you take the novel into the exam. Learn short quotations, three to eight words, that you can use for several themes. “It takes no hold of me now” works for money, change and Eppie at once.',
      'On Edexcel, the two parts of the question do different jobs. Part (a) stays inside the printed extract; part (b) asks about the rest of the novel. Do not spend part (b) re-analysing the extract.',
      'The Edexcel specification lists the novel question’s skills as your response to the text and your analysis of language, form and structure; Eduqas’s 19th-century prose question also asks you to refer to context. Weave context in where it explains a choice Eliot made, rather than adding a paragraph of history.',
      'Link the two plots. The strongest answers show how Silas’s story and Godfrey’s mirror each other: one man takes in a child who is not his, the other refuses the child who is.',
      'Use the narrator. Eliot’s general statements, such as the one about “Favourable Chance” in Chapter 9, are her methods too. Say who is speaking and what the generalisation does to our view of a character.',
      'Quote dialect exactly as printed, apostrophes included: “i’ the dark”, “trusten”, “sixteen year”. Tidying it into standard English is a misquotation.',
      'Avoid the simple version in which the gold is bad and Eppie is good. Silas keeps the recovered gold, and Godfrey’s money improves the cottage. Eliot’s target is money loved for its own sake and used for no one, which is a sharper point to argue.',
      'Get the chronology right: Part One ends with Chapter 15; Part Two opens sixteen years later with Eppie eighteen. The draining of the Stone-pit, Dunstan’s skeleton and Godfrey’s confession all come in Chapters 16 to 18, not at the end of Part One.',
    ],
  },

  modelAnswer: {
    question:
      'In Chapter 12, Silas mistakes the sleeping child for his returned gold. Explain the importance of money elsewhere in the novel.',
    paragraph:
      'Eliot presents money as something that shrinks the person who worships it, and the child as the force that makes him grow again. In Chapter 2 the coins become Silas’s “familiars”, and he draws them out at night “to enjoy their companionship”: words that belong to friendship, so the gold is filling the place a person should hold. The narrator gives the verdict in Chapter 14, in a sentence built on a single turn: “The gold had asked that he should sit weaving longer and longer, deafened and blinded more and more to all things except the monotony of his loom … but Eppie called him away from his weaving”. The repeated comparatives, “longer and longer” and “more and more”, make the old life a narrowing spiral, and “deafened and blinded” presents greed as a kind of damage to the senses, which Eppie repairs by “reawakening his senses”. Both are personified as voices, but the gold asks him to stay in and the child calls him out. When the money is found in the Stone-pit sixteen years later, Silas says simply, “It takes no hold of me now” (Chapter 19), and the image of a grip released completes the pattern. One reading is that Eliot condemns money itself; the more convincing one is narrower, because Silas keeps the gold and plans to use it for Eppie. What the novel condemns is money loved for its own sake, as Chapter 2 puts it, once “all purpose was gone”.',
    commentary: [
      'It opens with an argument, not a summary: a clear claim about what money does to people, which the rest of the paragraph proves.',
      'It moves across the whole novel (Chapters 2, 14 and 19), which is what a question about the rest of the novel rewards, instead of staying in the Chapter 12 extract.',
      'Every quotation is short and embedded in the sentence, and each is followed by analysis of particular words: “familiars”, the comparatives, “deafened and blinded”, the verbs of asking and calling.',
      'It names methods precisely (personification, repetition, the structure of a sentence that turns on “but”) and says what each one does to the reader.',
      'It weighs two readings and says which is more convincing and why, using evidence that complicates the obvious reading: Silas keeps the gold.',
      'It ends by returning to the start of the novel, which shows control of the whole text and gives the paragraph a clear conclusion.',
    ],
  },

  timeline: [
    {
      where: 'Part One, Chapter 1',
      title: 'Framed at Lantern Yard',
      summary:
        'Years before the main story, Silas is a young weaver in a strict chapel congregation. While he watches over a dying deacon, church money disappears; his knife is found where the bag lay, and his friend William Dane finds the empty bag in Silas’s room. The congregation draws lots, the lots declare him guilty, his fiancée Sarah breaks off the engagement and marries William, and Silas leaves the town.',
      setting: 'Lantern Yard, a chapel in a manufacturing town in the north',
      who: ['Silas Marner', 'William Dane', 'Sarah'],
      quote: 'The lots declared that Silas Marner was guilty.',
      themes: ['Faith and chance', 'Justice and retribution'],
      tension: 5,
      significance:
        'The betrayal destroys his trust in God and in people, and everything that follows is his slow recovery from it.',
    },
    {
      where: 'Part One, Chapter 2',
      title: 'Fifteen years at the loom',
      summary:
        'In Raveloe Silas weaves all day and hoards his gold, counting it every night under the bricks by his loom. A cure for Sally Oates brings neighbours wanting charms, and his refusal leaves him more isolated than before. He grieves over a broken water-pot and props it up as a memorial, a sign that some feeling survives.',
      setting: 'A stone cottage by the disused Stone-pit, outside the village of Raveloe',
      who: ['Silas Marner'],
      quote: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
      themes: ['Community and isolation', 'Money and human bonds'],
      tension: 2,
      significance:
        'Eliot shows what isolation does to a person: the man shrinks into a mechanism, and the coins take the place of friends.',
    },
    {
      where: 'Part One, Chapter 3',
      title: 'Blackmail at the Red House',
      summary:
        'Godfrey Cass, the Squire’s eldest son, has given his brother Dunstan a hundred pounds of a tenant’s rent that belongs to their father. Dunstan threatens to reveal Godfrey’s secret marriage to Molly Farren unless the money is found, and offers to sell Godfrey’s horse, Wildfire, at the next day’s hunt.',
      setting: 'The dark wainscoted parlour of the Red House, a November afternoon',
      who: ['Godfrey Cass', 'Dunstan Cass'],
      quote: 'You never hold trumps, you know—I always do.',
      themes: ['Class and social hierarchy', 'Justice and retribution'],
      tension: 3,
      significance:
        'The second plot begins: Godfrey’s hidden marriage is the secret that will shape Eppie’s life before she is even introduced.',
    },
    {
      where: 'Part One, Chapter 4',
      title: 'The robbery',
      summary:
        'Dunstan strikes a bargain to sell Wildfire to Bryce for a hundred and twenty pounds, then hunts on before handing him over and kills the horse on a hedge-stake. Walking home in the fog and rain, he finds Silas’s cottage lit and empty, sweeps the sand from the loose bricks, and takes the two leather bags of gold out into the dark.',
      setting: 'The hunting field, then the misty lanes and the empty cottage at the Stone-pits',
      who: ['Dunstan Cass'],
      quote: 'So he stepped forward into the darkness.',
      themes: ['Money and human bonds', 'Justice and retribution'],
      tension: 4,
      significance:
        'The darkness he steps into is literal: sixteen years later his skeleton is found in the Stone-pit with the gold.',
    },
    {
      where: 'Part One, Chapters 5 to 7',
      title: 'Robbed',
      summary:
        'Silas returns from an errand to find the hole empty and gives a wild scream. He runs through the rain to the Rainbow inn, where the regulars are arguing about ghosts, and accuses the poacher Jem Rodney, then takes it back. For the first time he sits at a hearth not his own and asks his neighbours for help.',
      setting: 'The robbed cottage, then the kitchen of the Rainbow inn',
      who: ['Silas Marner', 'Mr Macey', 'Jem Rodney'],
      quote: 'I don’t accuse you—I won’t accuse anybody',
      themes: ['Community and isolation', 'Justice and retribution'],
      tension: 4,
      significance:
        'Having been falsely accused himself, Silas refuses to accuse without evidence, and the loss begins to reconnect him with the village.',
    },
    {
      where: 'Part One, Chapter 9',
      title: 'Godfrey fails to confess',
      summary:
        'Overnight Godfrey had resolved on a complete confession, but by morning the old dread has returned. At breakfast he admits giving Dunstan the rent money but, when the Squire guesses that he has been bribing Dunstan to keep a secret, he evades the question and says nothing about the marriage, hoping that luck will save him.',
      setting: 'The Red House parlour at breakfast',
      who: ['Godfrey Cass', 'Squire Cass'],
      quote:
        'Favourable Chance, I fancy, is the god of all men who follow their own devices instead of obeying a law they believe in.',
      themes: ['Faith and chance', 'Justice and retribution'],
      tension: 3,
      significance:
        'Godfrey’s habit of trusting to chance rather than confessing is named here, and it governs every choice he makes until Chapter 18.',
    },
    {
      where: 'Part One, Chapter 10',
      title: 'Dolly’s lard-cakes',
      summary:
        'The village is kinder to Silas now that he seems pitiable. Mr Macey urges him to buy a Sunday suit and come to church, and Dolly Winthrop visits with her son Aaron and lard-cakes pricked with letters from the pulpit-cloth. Silas thanks them, but spends Christmas Day alone.',
      setting: 'Silas’s cottage at Christmas; the full church and the Red House',
      who: ['Silas Marner', 'Dolly Winthrop', 'Aaron Winthrop', 'Mr Macey'],
      quote:
        'Formerly, his heart had been as a locked casket with its treasure inside; but now the casket was empty, and the lock was broken.',
      themes: ['Community and isolation', 'Faith and chance'],
      tension: 2,
      significance:
        'Her kindness does not reach him yet, since he is relieved when she leaves, but Dolly will become the friend who helps him raise Eppie and the novel’s moral guide.',
    },
    {
      where: 'Part One, Chapter 11',
      title: 'The New Year’s Eve dance',
      summary:
        'Raveloe gathers at the Red House. Nancy Lammeter, who has decided not to marry Godfrey because of his wild life, arrives on a pillion behind her father, and her sister Priscilla joins her there. Godfrey dances with her, and when the Squire’s foot tears her dress they sit apart and she rebukes him.',
      setting:
        'The Red House: the Blue Room, the tea-table, the White Parlour and the small parlour beside it',
      who: ['Nancy Lammeter', 'Priscilla Lammeter', 'Godfrey Cass', 'Squire Cass'],
      quote: 'I think those have the least feeling that act wrong to begin with',
      themes: ['Class and social hierarchy'],
      tension: 2,
      significance:
        'The warmth and order of the dance are the life Godfrey stands to lose, and his hidden wife is already on her way through the snow.',
    },
    {
      where: 'Part One, Chapter 12',
      title: 'The child in the snow',
      summary:
        'Molly Farren walks towards Raveloe with her child, meaning to spoil Godfrey’s New Year’s Eve party by revealing herself to the Squire as his eldest son’s wife. Weakened by opium and cold, she lies down in the snow and dies. The toddler follows the firelight through Silas’s open door to his hearth, and Silas, waking from a fit, reaches for what he takes to be his gold.',
      setting: 'Snow-covered lanes; the open door and the hearth of the cottage',
      who: ['Molly Farren', 'Eppie', 'Silas Marner'],
      quote: 'his fingers encountered soft warm curls',
      themes: ['Money and human bonds', 'Faith and chance'],
      tension: 5,
      significance:
        'The turning point of the novel: the gold that made him a miser is replaced by a child who will make him a father.',
    },
    {
      where: 'Part One, Chapter 13',
      title: 'Silas at the Red House',
      summary:
        'Silas carries the child into the dance to fetch the doctor. Godfrey recognises his own daughter, and when Nancy asks whose child it is he says he does not know. When Mrs Kimble offers to take her, Silas refuses. At the cottage Godfrey looks at his dead wife, hears Silas resolve to keep the child, and gives him half a guinea.',
      setting: 'The White Parlour, then the snow outside the cottage',
      who: ['Silas Marner', 'Godfrey Cass', 'Eppie', 'Dolly Winthrop'],
      quote: 'It’s come to me—I’ve a right to keep it.',
      themes: ['Parenthood: nature versus nurture', 'Class and social hierarchy'],
      tension: 5,
      significance:
        'Two fathers make opposite choices on the same night, and the second half of the novel judges them both.',
    },
    {
      where: 'Part One, Chapter 14',
      title: 'Eppie is named',
      summary:
        'Dolly helps Silas care for the child, and he names her Hephzibah, Eppie for short, after his mother and little sister. At her christening he enters Raveloe church for the first time. After one failed attempt at punishment in the coal-hole he gives it up, and as she grows she draws him out into the fields and into his neighbours’ homes.',
      setting: 'The cottage, the meadows beyond the Stone-pits, and Raveloe church',
      who: ['Silas Marner', 'Eppie', 'Dolly Winthrop'],
      quote: 'the child was come instead of the gold—that the gold had turned into the child',
      themes: [
        'Parenthood: nature versus nurture',
        'Community and isolation',
        'Money and human bonds',
      ],
      tension: 1,
      significance:
        'Chapter 14 states the novel’s central argument, that love for a child can lead a person back from despair.',
    },
    {
      where: 'Part One, Chapter 15',
      title: 'Godfrey’s silence',
      summary:
        'Godfrey watches his daughter grow from a distance, telling himself she will be happy in a humble station. Dunstan never returns, and Godfrey courts Nancy openly, free, as he thinks, of all danger. He resolves to see that the child is provided for.',
      setting: 'Raveloe and the rides to the Lammeters’ farm, the Warrens',
      who: ['Godfrey Cass', 'Nancy Lammeter', 'Eppie'],
      quote: 'That was a father’s duty.',
      themes: ['Parenthood: nature versus nurture', 'Justice and retribution'],
      tension: 2,
      significance:
        'The short last chapter of Part One ends on an irony: Godfrey reduces a father’s duty to paying for a child he will not own.',
    },
    {
      where: 'Part Two, Chapter 16',
      title: 'Sixteen years later',
      summary:
        'On an autumn Sunday, Godfrey and Nancy are married and childless, Silas is white-haired, and Eppie is eighteen. Aaron Winthrop offers to dig them a garden and wants to marry Eppie and live with them. Silas has told Dolly his whole story, and her faith has helped him to his own. The Stone-pit is draining.',
      setting: 'Raveloe churchyard, the lane and the cottage at the Stone-pits',
      who: [
        'Silas Marner',
        'Eppie',
        'Aaron Winthrop',
        'Dolly Winthrop',
        'Godfrey Cass',
        'Nancy Lammeter',
      ],
      quote: 'There’s good i’ this world—I’ve a feeling o’ that now',
      themes: ['Faith and chance', 'Community and isolation'],
      tension: 1,
      significance:
        'The gap of sixteen years shows the change in Silas as complete, and the draining pit quietly prepares the revelations to come.',
    },
    {
      where: 'Part Two, Chapter 17',
      title: 'Nancy’s Sunday',
      summary:
        'Nancy reflects on her marriage: her baby died, and twice she has refused Godfrey’s wish to adopt Eppie, believing that adoption would defy Providence. She questions herself over his unhappiness, but decides she was right. A servant reports people hurrying past the front window.',
      setting: 'The polished Red House parlour on a Sunday afternoon',
      who: ['Nancy Lammeter', 'Priscilla Lammeter', 'Godfrey Cass'],
      quote: 'it’s the will of Providence',
      themes: ['Faith and chance', 'Parenthood: nature versus nurture'],
      tension: 2,
      significance:
        'Nancy’s sincere but rigid principles show faith narrowing sympathy, a contrast with Dolly’s.',
    },
    {
      where: 'Part Two, Chapter 18',
      title: 'The Stone-pit gives up its secret',
      summary:
        'The drained pit reveals Dunstan’s skeleton, with Silas’s gold and Godfrey’s gold-handled whip. Shaken, Godfrey confesses to Nancy that Eppie is his child by a secret first wife. Nancy grieves only that he did not tell her years before, when they could have taken the child in.',
      setting: 'The Red House parlour, as tea is brought in',
      who: ['Godfrey Cass', 'Nancy Lammeter'],
      quote: 'Everything comes to light, Nancy, sooner or later.',
      themes: ['Justice and retribution'],
      tension: 4,
      significance:
        'The past surfaces by natural means, a mild Nemesis, and Godfrey’s concealment is shown to have defeated its own purpose.',
    },
    {
      where: 'Part Two, Chapter 19',
      title: 'Eppie chooses',
      summary:
        'Godfrey and Nancy visit the cottage and offer to make Eppie a lady; she politely refuses. Godfrey then claims her as his daughter. Silas answers bitterly, then yields and lets her decide. Eppie refuses again: she will stay with Silas and marry a working man.',
      setting: 'The cottage at night, the recovered gold on the table',
      who: ['Eppie', 'Silas Marner', 'Godfrey Cass', 'Nancy Lammeter'],
      quote: 'I can’t feel as I’ve got any father but one',
      themes: ['Parenthood: nature versus nurture', 'Class and social hierarchy'],
      tension: 5,
      significance:
        'The climax of the novel: love and years of care outweigh blood and money, and the choice is Eppie’s own.',
    },
    {
      where: 'Part Two, Chapter 20',
      title: 'Too late',
      summary:
        'At home, Godfrey accepts that Eppie will not come to them and decides not to make his fatherhood public. He admits that Marner was right, blames himself, and turns towards contentment with Nancy.',
      setting: 'The walk home under starlight, then the oak parlour of the Red House',
      who: ['Godfrey Cass', 'Nancy Lammeter'],
      quote:
        'I wanted to pass for childless once, Nancy—I shall pass for childless now against my wish.',
      themes: ['Justice and retribution', 'Parenthood: nature versus nurture'],
      tension: 3,
      significance:
        'Godfrey’s punishment mirrors his fault, and he calls it “part of my punishment” himself.',
    },
    {
      where: 'Part Two, Chapter 21',
      title: 'Lantern Yard is gone',
      summary:
        'Silas takes Eppie north to his old town to ask whether his name was ever cleared. The streets have changed, and where the chapel stood there is a large factory. No one he asks can tell him anything of his old friends or the minister. Back in Raveloe, Dolly tells him some things must stay dark to us.',
      setting: 'The crowded streets of a manufacturing town, then the cottage',
      who: ['Silas Marner', 'Eppie', 'Dolly Winthrop'],
      quote: 'The old home’s gone; I’ve no home but this now.',
      themes: ['Faith and chance', 'Community and isolation'],
      tension: 3,
      significance:
        'The injustice of the past can never be answered, but Silas no longer needs it answered to trust.',
    },
    {
      where: 'Part Two, Conclusion',
      title: 'The wedding',
      summary:
        'In lilac time Eppie marries Aaron, in a dress Nancy has provided, holding both her husband’s arm and her father’s hand. The village gathers for the feast Godfrey has ordered at the Rainbow, and old Mr Macey claims he was the first to say Silas would get his money back. The family returns to the enlarged cottage and its new garden.',
      setting: 'Raveloe church and village; the garden at the Stone-pits',
      who: ['Eppie', 'Aaron Winthrop', 'Silas Marner', 'Dolly Winthrop', 'Mr Macey'],
      quote: 'O father … what a pretty home ours is! I think nobody could be happier than we are.',
      themes: ['Community and isolation', 'Parenthood: nature versus nurture'],
      tension: 1,
      significance:
        'The outcast of Chapter 1 ends at the centre of a family and a village, in the same cottage where the story began.',
    },
  ],

  relationships: [
    {
      from: 'Silas Marner',
      to: 'William Dane',
      kind: 'closest friends, then betrayer and victim',
      note: 'So close that the brethren called them “David and Jonathan”, until William frames Silas for theft and marries his fiancée. Silas later describes him in the words of Psalm 41.',
    },
    {
      from: 'Silas Marner',
      to: 'Sarah',
      kind: 'engaged, then abandoned',
      note: 'She breaks the engagement by message after the lots, and in little more than a month marries William Dane.',
    },
    {
      from: 'Silas Marner',
      to: 'Eppie',
      kind: 'adoptive father and daughter',
      note: 'She arrives on his hearth as a toddler and brings him back to life; sixteen years later she chooses him over her birth father. “It’s me she’s been calling her father ever since she could say the word.”',
    },
    {
      from: 'Godfrey Cass',
      to: 'Eppie',
      kind: 'birth father who does not own her',
      note: 'He recognises her on New Year’s Eve and denies knowing whose child she is, helping her only from a distance. When he claims her in Chapter 19, she refuses him.',
    },
    {
      from: 'Godfrey Cass',
      to: 'Molly Farren',
      kind: 'secretly married',
      note: 'A marriage Godfrey regrets and hides, partly a trap laid by Dunstan. Molly dies in the snow on her way to expose him.',
    },
    {
      from: 'Godfrey Cass',
      to: 'Dunstan Cass',
      kind: 'brothers, blackmailed and blackmailer',
      note: 'Dunstan uses the secret marriage to squeeze money from Godfrey, then vanishes. His skeleton, found with the stolen gold, forces Godfrey’s confession.',
    },
    {
      from: 'Godfrey Cass',
      to: 'Nancy Lammeter',
      kind: 'courtship, then husband and wife',
      note: 'She rejects him for his wild life, then marries him once he seems reformed. Their marriage is loving but childless, and his confession tests it.',
    },
    {
      from: 'Godfrey Cass',
      to: 'Squire Cass',
      kind: 'son and indulgent father',
      note: 'The Squire lets his sons run wild, then turns implacable. Godfrey fears his anger too much to confess.',
    },
    {
      from: 'Dunstan Cass',
      to: 'Silas Marner',
      kind: 'thief and victim',
      note: 'Dunstan steals the hoard on impulse and never knows that his theft opened the way for Silas’s recovery.',
    },
    {
      from: 'Dolly Winthrop',
      to: 'Silas Marner',
      kind: 'neighbour, friend and adviser',
      note: 'She brings lard-cakes after the robbery, teaches him to care for Eppie, stands as Eppie’s godmother and helps him towards a new faith.',
    },
    {
      from: 'Eppie',
      to: 'Aaron Winthrop',
      kind: 'childhood friends, then husband and wife',
      note: 'Dolly’s son digs Eppie a garden and marries her on the understanding that they will all live together. On the wedding morning Eppie tells Silas, “you’ll only be taking Aaron to be a son to you.”',
    },
    {
      from: 'Nancy Lammeter',
      to: 'Priscilla Lammeter',
      kind: 'sisters',
      note: 'Prim, principled Nancy and blunt, cheerful Priscilla, who insists that the pretty ones “do for fly-catchers”. Priscilla stays single and runs their father’s farm.',
    },
  ],

  compareWith: [
    {
      title: 'A Christmas Carol',
      href: '/revision/texts/a-christmas-carol',
      reason:
        'On both the Edexcel and the Eduqas lists: another miser transformed, but by ghosts, where Eliot uses a child and the ordinary kindness of neighbours.',
    },
    {
      title: 'Great Expectations',
      href: '/revision/texts/great-expectations',
      reason:
        'On the same Edexcel 19th-century novel list: Joe and Magwitch are fathers by choice, and Pip is made a gentleman, the offer Eppie refuses.',
    },
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        'On both lists: an orphan who must decide where she belongs, in a novel where faith, class and a chosen home are as central as in Silas Marner.',
    },
  ],

  contentGuidance: [
    'mortality',
    'addiction',
    'crime_injustice',
    'mythological_religious',
    'discrimination',
  ],

  quotesFromElsewhere: [
    'as a sort of legendary tale',
    'a more realistic treatment',
    'the remedial influences of pure, natural human relations',
    'The Nemesis is a very mild one',
    'forward-looking thoughts',
  ],

  sources: [
    {
      label:
        'Silas Marner, Project Gutenberg eBook #550, held as a byte copy at src/data/full-texts/silas-marner.ts: every passage, scene-card quotation and quoted phrase in this file was copied from it and matched word for word, and all twenty-one chapters and the Conclusion were read in full to check speakers, chapter numbers and plot facts',
      url: 'https://www.gutenberg.org/ebooks/550',
    },
    {
      label:
        'Wikisource, Silas Marner (1861) Blackwood: the first edition title page (Silas Marner: The Weaver of Raveloe, William Blackwood and Sons, Edinburgh and London, 1861), the epigraph from Wordsworth, and the division into Part I (Chapters I to XV) and Part II (Chapters XVI to XXI and Conclusion)',
      url: 'https://en.wikisource.org/wiki/Silas_Marner_(1861)_Blackwood',
    },
    {
      label:
        'Wikipedia, Silas Marner: published 2 April 1861 by William Blackwood and Sons; Eliot’s third novel; set in the early years of the 19th century',
      url: 'https://en.wikipedia.org/wiki/Silas_Marner',
    },
    {
      label:
        'Wikipedia, George Eliot: Mary Ann Evans, 22 November 1819 to 22 December 1880; Adam Bede 1859, The Mill on the Floss 1860, Silas Marner 1861, Romola 1862 to 1863',
      url: 'https://en.wikipedia.org/wiki/George_Eliot',
    },
    {
      label:
        'J. W. Cross, George Eliot’s Life as Related in Her Letters and Journals, Vol. 2, Project Gutenberg #43044: the letter to John Blackwood of 24 February 1861 (“a sort of legendary tale”, “a more realistic treatment”, “the remedial influences of pure, natural human relations”, “The Nemesis is a very mild one”), the journal for 28 November 1860 (the story thrust itself between her and the book she was meditating) and 10 March 1861 (finished)',
      url: 'https://www.gutenberg.org/ebooks/43044',
    },
    {
      label:
        'Wikisource, Wordsworth, Michael (Lyrical Ballads 1800 and Poems 1815): the phrase “forward-looking thoughts” in the lines Eliot used as her epigraph. The wording of the surrounding lines differs between editions of the poem, so this guide quotes only the phrase',
      url: 'https://en.wikisource.org/wiki/Poems_(Wordsworth,_1815)/Volume_1/Michael,_a_Pastoral_Poem',
    },
    {
      label:
        'Bible Gateway, Psalm 41:9 (King James Version), the verse Silas echoes about William Dane in Chapter 16',
      url: 'https://www.biblegateway.com/passage/?search=Psalm%2041%3A9&version=KJV',
    },
    {
      label:
        'Wikipedia, The Pilgrim’s Progress: Christian’s journey from the City of Destruction; Part I published 1678',
      url: 'https://en.wikipedia.org/wiki/The_Pilgrim%27s_Progress',
    },
    {
      label: 'Wikipedia, Guinea (coin): value fixed at twenty-one shillings from 1717 to 1816',
      url: 'https://en.wikipedia.org/wiki/Guinea_(coin)',
    },
    {
      label:
        'Pearson Edexcel GCSE (9–1) English Literature (1ET0) specification, Issue 2, June 2019: Silas Marner on the Component 2 19th-century novel list; Section A a two-part question, the first on an extract of about 400 words, the second on the whole text; closed book; the section assesses response and analysis of language, form and structure',
    },
    {
      label:
        'Pearson Edexcel 1ET0/02 question paper, June 2017, Question 6: the form of the Silas Marner question, part (a) “Explore how Eliot presents…in this extract” and part (b) “Explain the importance of…elsewhere in the novel”, with two bullet points to consider',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1ET0_02_que_20170526.pdf',
    },
    {
      label:
        'WJEC Eduqas GCSE English Literature specification: Silas Marner on the Component 2 Section B 19th Century Prose list; one source-based question; texts not allowed in the examination; the section assesses context as well as language, structure and form',
    },
    {
      label:
        'WJEC Eduqas C720U20-1 question paper, June 2023, Question 22: the form of the Silas Marner question (use the extract and your knowledge of the whole novel; refer to the extract and the novel as a whole, characters and events, and the contexts of the novel)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202023%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
  ],
}
