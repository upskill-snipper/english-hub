import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Jane Eyre, Charlotte Brontë (1847). A supplement to the existing page at
 * /revision/texts/jane-eyre, which keeps its overview, context and key
 * quotations; this file adds the eight sections that page lacked, and the
 * timeline and character map the animations draw.
 *
 * No edition of the novel is held in src/data/full-texts, so the guide test
 * cannot check these quotations. Every one was therefore copied from the
 * Project Gutenberg text (eBook #1260, transcribed from the 1897 Service &
 * Paton reprint) and its chapter and speaker read in context there, then
 * compared word for word with the first edition of 1847 as transcribed on
 * Wikisource. Where the two editions differ only in punctuation (the first
 * edition prints "ensnares me: I am" where Gutenberg has a semicolon) or in
 * spelling (dependent and dependant, storey and story, Greatheart and
 * Great-heart), the guide follows Gutenberg. Where they differ in a word, the
 * guide does not quote or annotate that phrase; the one printed extract that
 * contains such words (Chapter 2) says where they are.
 *
 * Facts about the existing page that this file does NOT repeat, because the
 * novel contradicts them: "Reader, I married him" opens Chapter 38 rather than
 * closing the book; "I would always rather be happy than dignified" is in
 * Chapter 34, about St John, not Chapter 24 to Rochester; and Rochester is
 * injured after Bertha's death, not while saving the servants (Chapter 36).
 * The existing sub-pages also carry two lines the novel does not contain in
 * that form ("I was a heterogeneous thing... a noxious thing" and "I felt
 * myself another woman", chapters/page.tsx), and date "I was a discord in
 * Gateshead Hall" to Chapter 1 when it is in Chapter 2 (key-quotes/page.tsx).
 *
 * RE-CHECKED 25 September 2026, every quoted span and every extract searched
 * mechanically against both editions, by chapter. The words all held. The
 * prose around them did not, in five places, and each is corrected here so it
 * is not reintroduced: the draft said John Reed's taunt was the first thing
 * said to Jane (Mrs Reed speaks first); that Reason sentences Jane to the
 * "Portrait of a Governess" (in Chapter 16 Jane pronounces the sentence
 * herself, Reason is a witness); that "Still indomitable was the reply" is her
 * conscience (Chapter 27 says her conscience and reason had "turned traitors");
 * that Jane wakes to find Helen dead (she is carried away asleep and told a day
 * or two later, Chapter 9); and that Rosamond marries Mr Granby (Chapter 34
 * says only that she is to).
 *
 * FACT-CHECKED 26 September 2026, independently: all 217 quoted spans and the
 * three extracts searched again in a fresh copy of Gutenberg #1260, by chapter,
 * with speakers read in context; the first-edition readings, the volume ends
 * (END OF VOL. I after Chapter 15, END OF VOLUME II after Chapter 26), Rigby's
 * phrase (Quarterly Review reprint) and Woolf's "an awkward break" confirmed.
 * Words and attributions held. The prose was wrong in one place of substance:
 * Theme 1 said Jane "refused both men while penniless", but St John proposes in
 * Chapter 34, after the legacy of Chapter 33, so only the refusal of Rochester
 * was made without money. Smaller corrections: the Chapter 27 scene card said
 * "her conscience refuses", which contradicts the chapter's own "my very
 * conscience and reason turned traitors"; Mrs Reed tells Brocklehurst Jane has
 * "a tendency to deceit" (Chapter 4), and it is he who says "liar"; Ferndean
 * is reached in Chapter 37, not 36; and Jane is told, rather than says herself,
 * that Helen's illness was consumption.
 */
export const guide: StudyGuide = {
  slug: 'jane-eyre',
  title: 'Jane Eyre',
  author: 'Charlotte Brontë',
  form: 'novel',
  scope:
    'The whole novel: thirty-eight chapters, first published in three volumes in October 1847 (Chapters 1 to 15, 16 to 26 and 27 to 38).',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First published by Smith, Elder and Co. in October 1847 as Jane Eyre. An Autobiography, under the name Currer Bell. Quotations follow the Project Gutenberg edition (eBook #1260), checked against the first edition. Editions differ slightly in punctuation and spelling, and in a few places in wording, so check quotations against your own copy.',
  },

  native: {
    overview: '/revision/texts/jane-eyre',
    context: '/revision/texts/jane-eyre',
    keyQuotes: '/revision/texts/jane-eyre',
  },

  themes: [
    {
      title: 'Independence and self-respect',
      body: "Jane's life is a search for a freedom that does not cost her self-respect, and within a few pages of the opening she is told she has no right to either: John Reed tells her “you are a dependent, mama says” (Chapter 1). Every later offer of security is tested against that wound. Lowood feeds her mind and starves her body; Thornfield pays her a wage; Rochester offers love on terms that would make her his mistress; St John offers purpose on terms that would make her his instrument. She refuses both men for the same reason. To Rochester she says “I am no bird; and no net ensnares me” (Chapter 23), and in Chapter 27, while Rochester pleads and her own feelings urge her to stay, the answer that comes is “I care for myself”. One reading makes money the real key, since Jane returns to Rochester only when she can say “I am an independent woman now” (Chapter 37). That reading is persuasive but incomplete: she refused Rochester when she had twenty shillings to her name, so the legacy confirms an independence she had already won. What the ending does admit, perhaps uneasily, is that her freedom still needed an uncle in Madeira to become a way of life.",
    },
    {
      title: 'Gender and equality',
      body: "The novel's most quoted argument comes in Chapter 12, when Jane, pacing the third-storey corridor, insists that “women feel just as men feel” and mocks the idea that they should confine themselves to “making puddings and knitting stockings”. What she claims is equality of mind and feeling rather than legal rights, and the claim is dramatised in her love story. In Chapter 23 she speaks to Rochester as a soul before God, “equal,—as we are”; in Chapter 24 she refuses his jewels and silks, tells him “I will not be your English Céline Varens”, and insists on keeping her “thirty pounds a year”. When he jokes that he would not exchange her for a sultan's harem, she notes that “The Eastern allusion bit me again”. The ending divides readers. One view sees a retreat, since Jane gives up teaching Adèle because “my time and cares were now required by another”. The more convincing view, because it matches the whole shape of the book, is that she chooses this marriage freely, with money of her own, and tells the story herself.",
    },
    {
      title: 'Social class and dependence',
      body: "Jane belongs to no class securely. At Gateshead the lady's-maid Miss Abbot tells her she is “less than a servant, for you do nothing for your keep” (Chapter 2); at Lowood she is a charity pupil; at Thornfield she is a governess, a lady who is also an employee, which is why Blanche Ingram can say in her hearing that her family's governesses were “half of them detestable and the rest ridiculous” (Chapter 17). Brontë uses this in-between position to test the idea that rank measures worth. Jane's speech in Chapter 23 lists her disadvantages, “poor, obscure, plain, and little”, only to deny that they touch her soul, and in Chapter 17 she senses her kinship with Rochester “though rank and wealth sever us widely”. Yet the novel is not a simple attack on class. When Jane first teaches the village girls at Morton she admits “I felt degraded” (Chapter 31), and her happiness arrives through inheritance and through discovering that she has genteel cousins. A strong answer can argue both: Brontë exposes class snobbery sharply while leaving Jane with some of its instincts.",
    },
    {
      title: 'Religion and conscience',
      body: "The novel sets several kinds of Christianity side by side and judges them by how they treat people. Mr Brocklehurst declares that his “mission is to mortify in these girls the lusts of the flesh” while his own wife and daughters arrive in “velvet, silk, and furs” (Chapter 7): religion as power and hypocrisy. Helen Burns lives by “Love your enemies” and dies saying “I believe; I have faith: I am going to God” (Chapter 9): religion as endurance, which Jane admires but cannot copy. St John Rivers is sincere and heroic, yet his faith would swallow her; she fears that this man, “pure as the deep sunless source, could soon kill me” (Chapter 35). Jane's own faith is principle held under pressure. In Chapter 27, when even “my very conscience and reason turned traitors against me”, she still answers “I will keep the law given by God; sanctioned by man.” In 1848 Elizabeth Rigby called the novel “pre-eminently an anti-Christian composition”. That verdict is hard to sustain. The book attacks religion used to control others, not religion itself, and it gives its closing words to St John's prayer.",
    },
    {
      title: 'Love, passion and judgement',
      body: 'Jane is tempted twice, and the two temptations mirror each other. Rochester offers passion without law, asking her to live with him although he is married; St John offers law without passion, a marriage for duty in which she would be “forced to keep the fire of my nature continually low” (Chapter 34). She refuses both because each would destroy half of her. Brontë frames the struggle as a debate between faculties. In Chapter 16 Jane puts herself on trial, “Arraigned at my own bar”, and sentences herself to draw a “Portrait of a Governess, disconnected, poor, and plain”, to cure her hopes; in Chapter 21 she sums up her cold cousin Eliza and her vain cousin Georgiana with “Feeling without judgment is a washy draught indeed”; and in Chapter 27, when Feeling cries “Oh, comply!”, she answers that “Laws and principles are not for the times when there is no temptation”. One reading calls the novel a victory of judgement over passion. It is more exact to say that Brontë wants the two joined, and the ending gives Jane a marriage that satisfies both, after both lovers have suffered for it.',
    },
    {
      title: 'Imprisonment, escape and the Gothic',
      body: "In its first chapters a girl is locked in a room; at its end a woman chooses where she lives; and between the two the novel is full of prisons: the red-room, where “no jail was ever more secure” (Chapter 2); Lowood; the third storey at Thornfield; the marriage St John proposes. Brontë borrows the machinery of Gothic fiction to make these prisons felt, with a death-chamber, a “curious laugh; distinct, formal, mirthless” (Chapter 11), a fire in the night, a torn veil and a woman who reminds Jane “Of the foul German spectre—the Vampyre” (Chapter 25). Yet she often explains the Gothic away: the red-room light was probably a lantern, and the Gytrash in Hay Lane turns out to be a man on a horse. The one mystery she leaves unexplained, the voice in Chapter 35, is the one that leads Jane home. The most influential reading, by Sandra Gilbert and Susan Gubar in The Madwoman in the Attic (1979), sees Bertha as Jane's double, the imprisoned rage that Jane must control. It is a powerful reading, though it risks treating Bertha as a symbol rather than a woman.",
    },
    {
      title: 'Race, empire and Bertha Mason',
      body: "Bertha Mason comes from Spanish Town in Jamaica, and Rochester says that his father arranged the marriage for her fortune of “thirty thousand pounds” (Chapter 27). The novel never states her ancestry. Richard Mason's document calls her mother “a Creole”, a word whose meaning varied from place to place, and Rochester says her family wanted him because he was “of a good race”. What the novel does make plain is its language: when Bertha is revealed in Chapter 26, Jane cannot tell “whether beast or human being” she sees, and calls her “the clothed hyena”. Readers today should name that as dehumanising rather than repeat it. Jean Rhys's novel Wide Sargasso Sea (1966) retells the story from Bertha's side and is the best-known answer to it. Empire runs through the book in other ways too: Jane's fortune comes from a merchant in Madeira, and in India, Jane tells us, St John “labours for his race”. The strongest essays read these details as part of the novel's world rather than as background, and ask whose freedom Jane's freedom is built on.",
    },
  ],

  characters: [
    {
      name: 'Jane Eyre',
      role: 'Narrator and heroine; an orphan who becomes a governess',
      body: "Jane tells her own story ten years after her marriage, so every scene is seen twice, through the child who felt it and the woman who understands it. She is passionate and quick to anger as a child, telling John Reed “You are like a murderer” and Mrs Reed “I am not deceitful”, and she learns self-control at Lowood without losing her fire. Her defining trait is that she will not be owned: not by the Reeds, by Rochester's love or by St John's mission. Critics disagree about whether her story is a triumph of female independence or a fantasy rescued by a legacy; the novel supports both, and the best answers weigh them.",
    },
    {
      name: 'Mr Rochester',
      role: "Master of Thornfield Hall; Jane's employer and later her husband",
      body: "Edward Fairfax Rochester is, Jane guesses, about thirty-five when they meet, with a “dark face, with stern features and a heavy brow” (Chapter 12): a moody, sarcastic, secretive man in the mould of the Byronic hero. He is drawn to Jane's honesty and treats her as an intellectual equal, but he also tries to marry her while his wife is alive and hidden upstairs, and moments after the proposal he adds “I have her, and will hold her” (Chapter 23). The novel punishes and then redeems him: blinded and maimed in the fire, he tells Jane in Chapter 37 that he has begun “to see and acknowledge the hand of God in my doom”. Whether his injuries make the marriage equal or simply make him dependent is a question worth arguing.",
    },
    {
      name: 'Bertha Mason',
      role: "Rochester's wife, confined on the third storey of Thornfield",
      body: "Bertha is from Spanish Town, Jamaica, and married Rochester fifteen years before the novel's wedding day. The reader knows her only through others, chiefly Rochester, who calls her family “idiots and maniacs through three generations” (Chapter 26). The novel never lets her tell her own story, yet she drives the plot: she sets fire to Rochester's bed, wounds her brother, tears Jane's wedding veil and finally burns Thornfield down, dying when she leaps from its roof. She has been read as Jane's double, as a victim of a husband who married her for money, and, in Jean Rhys's Wide Sargasso Sea, as a woman with a history of her own.",
    },
    {
      name: 'St John Rivers',
      role: "Clergyman at Morton; Jane's cousin and would-be husband",
      body: "St John is handsome, “perhaps from twenty-eight to thirty”, with a face Jane thinks “like a Greek face, very pure in outline” (Chapter 29), and he describes himself honestly as “a cold hard man” (Chapter 32). He loves Rosamond Oliver but gives her up because she would not make a missionary's wife, and then asks Jane to marry him for the work alone: “God and nature intended you for a missionary's wife” (Chapter 34). He is Rochester's opposite, principle without warmth, and he nearly wins. The novel ends on his letter from India, which seems to ask the reader to admire him while agreeing that Jane was right to refuse him.",
    },
    {
      name: 'Helen Burns',
      role: "Jane's friend at Lowood",
      body: "Helen is a patient, clever older girl who is punished constantly, once made to wear the word “Slattern” on her forehead (Chapter 8), and never resents it. She teaches Jane the Christian ideal of endurance, telling her “It is far better to endure patiently a smart which nobody feels but yourself” (Chapter 6). She dies of consumption during the typhus epidemic of Chapter 9, with Jane asleep beside her in her bed. Jane loves her but does not become her: Helen's faith looks beyond this world, while Jane insists on justice in it.",
    },
    {
      name: 'Mrs Reed',
      role: "Jane's aunt by marriage, mistress of Gateshead Hall",
      body: "Mrs Reed promised her dying husband, Jane's uncle, to bring Jane up as one of her own children, and keeps the promise in the narrowest sense. She locks Jane in the red-room, tells Mr Brocklehurst she has “a tendency to deceit”, and years later confesses on her deathbed that she hid a letter from Jane's uncle John Eyre and told him Jane had died at Lowood. Even then she cannot forgive: “You were born, I think, to be my torment” (Chapter 21). She shows how cruelty can come from resentment rather than wickedness, which makes her harder to dismiss.",
    },
    {
      name: 'John Reed',
      role: "Jane's cousin, the bully of Gateshead",
      body: "John is a “schoolboy of fourteen years old” when the novel opens, four years older than Jane, and he beats her for reading one of the family's books. His power comes from being the son of the house, and his sneer that Jane is “a dependent” names the novel's first injustice. He grows up to waste the family's money, and in Chapter 21 Jane learns that he has died, reportedly by his own hand. His collapse suggests that the privilege he abused was never strength.",
    },
    {
      name: 'Mr Brocklehurst',
      role: 'Treasurer and manager of Lowood Institution',
      body: "Jane first sees him as “a black pillar” (Chapter 4). A clergyman who preaches self-denial to starving girls, he orders a pupil's naturally curly hair cut off while his own family parades in finery, and he makes Jane stand on a stool before the school while he calls her a liar (Chapter 7). After the typhus epidemic exposes the school, his power is limited but not removed, which is Brontë's dry comment on how institutions protect the wealthy. He is the novel's clearest picture of religion used as power.",
    },
    {
      name: 'Miss Temple',
      role: 'Superintendent of Lowood',
      body: "Maria Temple is kind, dignified and quietly brave: she feeds the girls when the breakfast is burnt and clears Jane's name after writing to Mr Lloyd, the apothecary. Jane says she “had always something of serenity in her air” (Chapter 8). For eight years she is Jane's model of a good woman with authority, and when she marries and leaves in Chapter 10, Jane's restlessness returns at once, which suggests that Jane's calm had been borrowed rather than her own.",
    },
    {
      name: 'Bessie',
      role: 'Nursemaid at Gateshead',
      body: "Bessie is sharp-tongued but the one person at Gateshead who is sometimes kind to Jane, and her songs and stories of spirits feed Jane's imagination; the phantoms Jane imagines in the red-room come from them. She later marries Robert Leaven, the coachman, and names her daughter Jane. She shows that affection in the novel can come from below stairs as well as above.",
    },
    {
      name: 'Mrs Fairfax',
      role: 'Housekeeper at Thornfield',
      body: 'A widow related to the Rochesters by marriage, Mrs Fairfax welcomes Jane warmly and keeps the house running. She is kind but limited, and seems either not to know or not to say what is on the third storey. Her anxious warning to Jane after the engagement, and her surprise that Rochester should marry his governess, voice the ordinary social view that Jane defies.',
    },
    {
      name: 'Adèle Varens',
      role: "Jane's pupil at Thornfield",
      body: "Adèle is French, “perhaps seven or eight years old” when Jane arrives (Chapter 11), the daughter of Céline Varens, an opera dancer who was once Rochester's mistress. Rochester says “for I am not her father” (Chapter 15), yet he gives her a home. She loves pretty dresses and presents, which the novel links, unkindly, to her mother. Jane's steady care for her, even after the marriage, is a quiet sign of Jane's sense of duty.",
    },
    {
      name: 'Blanche Ingram',
      role: "A beautiful society woman at Rochester's house party",
      body: "Blanche is accomplished, proud and, Jane judges, empty: “She was not good; she was not original” (Chapter 18). She insults governesses in Jane's hearing and courts Rochester for his fortune; he later admits he spread a rumour that he was poorer than supposed to test her, and she cooled at once. She is Jane's foil, everything society values in a bride and nothing the novel values.",
    },
    {
      name: 'Grace Poole',
      role: "A servant at Thornfield, Bertha's keeper",
      body: "Jane is told that the laugh on the third storey is Grace's, and at first believes that Grace set the fire in Rochester's room. She is “a set, square-made figure, red-haired, and with a hard, plain face” (Chapter 11), usually seen carrying food or “a pot of porter” (Chapter 12). She is the novel's great red herring: the ordinary figure Brontë uses to hide the extraordinary one.",
    },
    {
      name: 'Richard Mason',
      role: "Bertha's brother, from Spanish Town",
      body: "Mason arrives at Thornfield during the house party, is stabbed and bitten by his sister in the night (Chapter 20), and returns with the solicitor Mr Briggs to stop the wedding (Chapter 26). He learned of the marriage by chance, through Jane's uncle John Eyre in Madeira. Weak and nervous, he is still the man who tells the truth when Rochester will not.",
    },
    {
      name: 'Diana and Mary Rivers',
      role: "St John's sisters, and Jane's cousins",
      body: 'The sisters nurse Jane back to health at Moor House and become the first equals she has ever lived among: clever, affectionate women who work as governesses because the family has little money. Their friendship shows the family life Jane has wanted since Gateshead, and her decision to share her inheritance with them, “Were we not four?” (Chapter 33), shows what she values it for. Both marry happily by the end.',
    },
    {
      name: 'Rosamond Oliver',
      role: 'Daughter of the richest man in Morton',
      body: "Rosamond is lovely, lively and good-natured, and St John loves her, but he will not marry a woman who could not share a missionary's life. By Chapter 34 she is engaged to Mr Granby, grandson and heir of Sir Frederic Granby. She shows that St John's coldness is chosen rather than natural, which makes his pressure on Jane more troubling.",
    },
    {
      name: 'John Eyre',
      role: "Jane's uncle, a merchant in Madeira; never seen",
      body: "He writes to Mrs Reed wanting to adopt Jane, is told she is dead, receives Jane's letter about her engagement, tells Mason of it, and at his death leaves her twenty thousand pounds. He never appears, yet he stops the bigamous wedding and makes Jane independent. He is the novel's providence in human form, and a reminder of how much its happy ending depends on luck.",
    },
  ],

  extracts: [
    {
      title: 'Locked in the red-room',
      where: 'Chapter 2',
      pointer:
        "From “A bed supported on massive pillars of mahogany” to “appearing before the eyes of belated travellers.” It comes just after Bessie and Miss Abbot lock Jane in. Editions differ in three small places here: the first edition of 1847 reads “kitchens”, “by undertaker's men” and “coming up out of”.",
      text: 'A bed supported on massive pillars of mahogany, hung with curtains of deep red damask, stood out like a tabernacle in the centre; the two large windows, with their blinds always drawn down, were half shrouded in festoons and falls of similar drapery; the carpet was red; the table at the foot of the bed was covered with a crimson cloth; the walls were a soft fawn colour with a blush of pink in it; the wardrobe, the toilet-table, the chairs were of darkly polished old mahogany. Out of these deep surrounding shades rose high, and glared white, the piled-up mattresses and pillows of the bed, spread with a snowy Marseilles counterpane. Scarcely less prominent was an ample cushioned easy-chair near the head of the bed, also white, with a footstool before it; and looking, as I thought, like a pale throne. This room was chill, because it seldom had a fire; it was silent, because remote from the nursery and kitchen; solemn, because it was known to be so seldom entered. The house-maid alone came here on Saturdays, to wipe from the mirrors and the furniture a week’s quiet dust: and Mrs. Reed herself, at far intervals, visited it to review the contents of a certain secret drawer in the wardrobe, where were stored divers parchments, her jewel-casket, and a miniature of her deceased husband; and in those last words lies the secret of the red-room—the spell which kept it so lonely in spite of its grandeur. Mr. Reed had been dead nine years: it was in this chamber he breathed his last; here he lay in state; hence his coffin was borne by the undertaker’s men; and, since that day, a sense of dreary consecration had guarded it from frequent intrusion. My seat, to which Bessie and the bitter Miss Abbot had left me riveted, was a low ottoman near the marble chimney-piece; the bed rose before me; to my right hand there was the high, dark wardrobe, with subdued, broken reflections varying the gloss of its panels; to my left were the muffled windows; a great looking-glass between them repeated the vacant majesty of the bed and room. I was not quite sure whether they had locked the door; and when I dared move, I got up and went to see. Alas! yes: no jail was ever more secure. Returning, I had to cross before the looking-glass; my fascinated glance involuntarily explored the depth it revealed. All looked colder and darker in that visionary hollow than in reality: and the strange little figure there gazing at me, with a white face and arms specking the gloom, and glittering eyes of fear moving where all else was still, had the effect of a real spirit: I thought it like one of the tiny phantoms, half fairy, half imp, Bessie’s evening stories represented as coming out of lone, ferny dells in moors, and appearing before the eyes of belated travellers.',
      annotations: [
        {
          phrase: 'stood out like a tabernacle in the centre',
          note: "A tabernacle was the sacred tent of the Old Testament. The simile turns a dead man's bed into a shrine, so the room feels holy and forbidden at once, and the absent master still rules it.",
        },
        {
          phrase:
            'the carpet was red; the table at the foot of the bed was covered with a crimson cloth',
          note: 'The piling of red, damask, crimson and pink saturates the room in one colour. Red suggests blood, danger and anger, and it mirrors the rage Jane has just been punished for, so the room seems to embody her feelings.',
        },
        {
          phrase: 'like a pale throne',
          note: "An empty throne implies an absent king. Mr Reed is dead, yet the room is organised around his authority, which is exactly Jane's situation in a house where a dead man's promise is the only reason she is there.",
        },
        {
          phrase: 'This room was chill, because it seldom had a fire',
          note: 'The first of three matched clauses, chill, silent and solemn, each given a reason. The adult narrator explains calmly what the child felt as dread, and the sensible “because” clauses keep the Gothic under control even as the room frightens.',
        },
        {
          phrase: 'a certain secret drawer in the wardrobe',
          note: 'The secret hidden in a room is a Gothic convention, and here the drawer holds nothing more sinister than papers, jewels and a miniature of a dead husband. The motif returns on a much larger scale at Thornfield, where the secret is a living wife.',
        },
        {
          phrase: 'no jail was ever more secure',
          note: 'Hyperbole that names what the room is: a prison. Jane has just been called a wicked child and she thinks like a prisoner, which connects this scene to her lifelong fear of being confined.',
        },
        {
          phrase: 'the strange little figure there gazing at me',
          note: "Jane sees her own reflection as a stranger and a spirit. The split between self and image anticipates Chapter 25, where she sees Bertha's face in a mirror, and supports readings of Bertha as Jane's double.",
        },
        {
          phrase: 'half fairy, half imp',
          note: "Jane borrows from Bessie's folk tales to picture herself as uncanny, neither good nor bad. The folklore of the servants' hall feeds her imagination, and the same kind of tale colours her first sight of Rochester.",
        },
      ],
      question:
        "Starting with this extract, explore how Brontë presents Jane's experience of being trapped. Write about how Brontë presents the red-room in this extract, and how she presents Jane's experience of confinement in the novel as a whole.",
    },
    {
      title: 'Pacing the third storey',
      where: 'Chapter 12',
      pointer:
        'From “Anybody may blame me who likes” to “stranger than her laugh.” It comes early in the chapter, before Jane walks to Hay and meets Rochester.',
      text: 'Anybody may blame me who likes, when I add further, that, now and then, when I took a walk by myself in the grounds; when I went down to the gates and looked through them along the road; or when, while Adèle played with her nurse, and Mrs. Fairfax made jellies in the storeroom, I climbed the three staircases, raised the trap-door of the attic, and having reached the leads, looked out afar over sequestered field and hill, and along dim sky-line—that then I longed for a power of vision which might overpass that limit; which might reach the busy world, towns, regions full of life I had heard of but never seen—that then I desired more of practical experience than I possessed; more of intercourse with my kind, of acquaintance with variety of character, than was here within my reach. I valued what was good in Mrs. Fairfax, and what was good in Adèle; but I believed in the existence of other and more vivid kinds of goodness, and what I believed in I wished to behold. Who blames me? Many, no doubt; and I shall be called discontented. I could not help it: the restlessness was in my nature; it agitated me to pain sometimes. Then my sole relief was to walk along the corridor of the third storey, backwards and forwards, safe in the silence and solitude of the spot, and allow my mind’s eye to dwell on whatever bright visions rose before it—and, certainly, they were many and glowing; to let my heart be heaved by the exultant movement, which, while it swelled it in trouble, expanded it with life; and, best of all, to open my inward ear to a tale that was never ended—a tale my imagination created, and narrated continuously; quickened with all of incident, life, fire, feeling, that I desired and had not in my actual existence. It is in vain to say human beings ought to be satisfied with tranquillity: they must have action; and they will make it if they cannot find it. Millions are condemned to a stiller doom than mine, and millions are in silent revolt against their lot. Nobody knows how many rebellions besides political rebellions ferment in the masses of life which people earth. Women are supposed to be very calm generally: but women feel just as men feel; they need exercise for their faculties, and a field for their efforts, as much as their brothers do; they suffer from too rigid a restraint, too absolute a stagnation, precisely as men would suffer; and it is narrow-minded in their more privileged fellow-creatures to say that they ought to confine themselves to making puddings and knitting stockings, to playing on the piano and embroidering bags. It is thoughtless to condemn them, or laugh at them, if they seek to do more or learn more than custom has pronounced necessary for their sex. When thus alone, I not unfrequently heard Grace Poole’s laugh: the same peal, the same low, slow ha! ha! which, when first heard, had thrilled me: I heard, too, her eccentric murmurs; stranger than her laugh.',
      annotations: [
        {
          phrase: 'Anybody may blame me who likes',
          note: 'Jane expects the reader to disapprove and challenges that disapproval before she has even made her point. The defiant opening turns a private confession into an argument with the reader.',
        },
        {
          phrase: 'I longed for a power of vision which might overpass that limit',
          note: 'Jane stands on the roof looking at the horizon, and the physical limit of the view becomes the limit of her life. The long, piling sentence with its repeated “that then” enacts the longing it describes.',
        },
        {
          phrase: 'the restlessness was in my nature',
          note: 'Restlessness in a woman was usually treated as a fault to be corrected. Jane calls it her nature, which makes it something to be answered rather than cured, and prepares for the general claim that follows.',
        },
        {
          phrase: 'a tale that was never ended',
          note: 'Jane feeds her mind on stories of her own making. The phrase invites us to see the novel itself as that tale, told by a woman who could not find enough life and so created it.',
        },
        {
          phrase:
            'Millions are condemned to a stiller doom than mine, and millions are in silent revolt against their lot.',
          note: "The vocabulary of politics, “condemned”, “revolt” and then “rebellions”, widens Jane's frustration into a social condition. She speaks for millions, not for herself alone.",
        },
        {
          phrase:
            'making puddings and knitting stockings, to playing on the piano and embroidering bags',
          note: 'A deliberately trivial list of the accomplishments expected of women. Placed after the grand language of faculties and rebellions, it produces a bathos that mocks those who would limit women to such tasks.',
        },
        {
          phrase: 'I not unfrequently heard Grace Poole’s laugh',
          note: 'The argument breaks off for the Gothic mystery. Virginia Woolf called this “an awkward break”; another reading sees the laugh as the answer to the passage, since the woman locked upstairs is the most extreme case of a woman confined.',
        },
      ],
      question:
        "Explore how Brontë uses language and structure to present Jane's frustration in this extract. Then explain the importance of Jane's longing for a wider life elsewhere in the novel.",
    },
    {
      title: 'Equal before God',
      where: 'Chapter 23',
      pointer:
        'From “I tell you I must go!” to “which I now exert to leave you.” In the orchard on Midsummer-eve, when Jane believes Rochester is to marry Blanche Ingram.',
      text: '“I tell you I must go!” I retorted, roused to something like passion. “Do you think I can stay to become nothing to you? Do you think I am an automaton?—a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!—I have as much soul as you,—and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh;—it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God’s feet, equal,—as we are!” “As we are!” repeated Mr. Rochester—“so,” he added, enclosing me in his arms, gathering me to his breast, pressing his lips on my lips: “so, Jane!” “Yes, so, sir,” I rejoined: “and yet not so; for you are a married man—or as good as a married man, and wed to one inferior to you—to one with whom you have no sympathy—whom I do not believe you truly love; for I have seen and heard you sneer at her. I would scorn such a union: therefore I am better than you—let me go!” “Where, Jane? To Ireland?” “Yes—to Ireland. I have spoken my mind, and can go anywhere now.” “Jane, be still; don’t struggle so, like a wild frantic bird that is rending its own plumage in its desperation.” “I am no bird; and no net ensnares me; I am a free human being with an independent will, which I now exert to leave you.”',
      annotations: [
        {
          phrase: 'Do you think I am an automaton?—a machine without feelings?',
          note: 'A run of rhetorical questions, broken by dashes, gives the speech the rush of real anger. An automaton is a machine that looks human, which is exactly how a governess was often treated: useful, and not expected to feel.',
        },
        {
          phrase: 'my drop of living water dashed from my cup',
          note: "“Living water” is Christ's phrase for the gift of grace in John 4:10. By using it for Rochester's company, Jane gives her love a spiritual weight and makes losing him a kind of spiritual starvation.",
        },
        {
          phrase: 'poor, obscure, plain, and little',
          note: 'Four short adjectives list every disadvantage the world holds against her, each one of them social or physical. Jane names them only to deny that they reach her soul, so the list sets up the reversal that follows.',
        },
        {
          phrase: 'it is my spirit that addresses your spirit',
          note: 'Jane moves the argument beyond class and gender to the soul, where she claims all people are equal. It is her most radical claim, and she makes it by using the language of Christian belief rather than rejecting it.',
        },
        {
          phrase: 'equal,—as we are!',
          note: 'The punctuation forces a pause before the most important words. Rochester immediately repeats them and turns them into an embrace, taking her argument as a declaration of love before she knows that he loves her.',
        },
        {
          phrase: 'you are a married man—or as good as a married man',
          note: "Dramatic irony. Jane means Blanche Ingram, but Rochester really is married, to Bertha. A first-time reader shares Jane's ignorance; a re-reader hears the truth she cannot yet know.",
        },
        {
          phrase: 'like a wild frantic bird that is rending its own plumage in its desperation',
          note: "Rochester's image makes Jane a creature to be calmed and held, and faintly blames her for her own pain. The bird recalls the book she was reading in Chapter 1, Bewick's History of British Birds.",
        },
        {
          phrase: 'I am no bird; and no net ensnares me',
          note: 'Jane rejects his metaphor outright and replaces it with a plain statement of human freedom. The verb “exert” at the end of her sentence makes freedom something she does, not simply something she claims.',
        },
      ],
      question:
        'In this extract Jane insists on her equality with Rochester. Explore how Brontë presents this in the extract, and explain the importance of equality between Jane and Rochester elsewhere in the novel.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Retrospective first-person narration with a double perspective',
      example:
        'In the red-room the adult Jane admits what the child could not know: “now, at the distance of—I will not say how many years, I see it clearly” (Chapter 2), and later that the ghostly light was “in all likelihood, a gleam from a lantern”.',
      effect:
        "We feel the child's terror and hear the woman's judgement at the same time. The double view lets Brontë make Gothic scenes frightening and then rational, and it keeps the reader close to Jane without asking us to share every childish mistake. Pointing to the gap between the two voices is one of the surest ways to write about narrative method.",
    },
    {
      technique: 'Direct address to the reader',
      example:
        '“Reader, I married him.” opens Chapter 38; in Chapter 27 Jane pleads “Gentle reader, may you never feel what I then felt!”; and Chapter 11 begins by inviting the reader to picture the inn at Millcote as if a curtain has been raised.',
      effect:
        'The addresses make the reader a confidant and a witness, which suits a novel subtitled An Autobiography. They also give Jane control: she decides what we are told and when. In the famous opening of Chapter 38 she is the subject of the verb, the one who marries, not the one who is married.',
    },
    {
      technique: 'Pathetic fallacy and seasonal imagery',
      example:
        'After the wedding is stopped: “A Christmas frost had come at midsummer; a white December storm had whirled over June” (Chapter 26). After the proposal, the horse-chestnut in the orchard is “struck by lightning in the night, and half of it split away” (Chapter 23).',
      effect:
        'Nature registers what the characters cannot say. The split tree is a warning the reader sees before Jane does, and Brontë keeps developing it: in Chapter 25 “The cloven halves were not broken from each other”, and in Chapter 37 Rochester calls himself “the old lightning-struck chestnut-tree”, to which Jane replies that he is “green and vigorous”. One symbol traces the whole relationship.',
    },
    {
      technique: 'Bird imagery',
      example:
        "Jane is first seen reading Bewick's History of British Birds (Chapter 1). In Chapter 23 Rochester calls her “a wild frantic bird”, and she answers “I am no bird; and no net ensnares me”.",
      effect:
        'Birds stand for a freedom Jane longs for and for the fragility others see in her. By refusing the image, she refuses to be something small that can be caught and kept. The motif lets a student link the opening page to the central proposal scene, which shows whole-text knowledge.',
    },
    {
      technique: 'Fire and ice as a language for temperament',
      example:
        'Jane saves Rochester from a burning bed in Chapter 15. St John admits “I am cold: no fervour infects me”, and Jane replies “Whereas I am hot, and fire dissolves ice” (Chapter 33). Marriage to him would leave her “forced to keep the fire of my nature continually low” (Chapter 34).',
      effect:
        'Brontë builds a consistent code: fire is passion and life, ice is duty without love. Rochester belongs with fire, dangerously so, since fire nearly kills him twice; St John belongs with cold, and Jane fears being extinguished. Tracking the code shows how the novel weighs the two men without needing to say so.',
    },
    {
      technique: 'Personification of the mind: reason, conscience and feeling as speakers',
      example:
        '“Unjust!—unjust!” said my reason (Chapter 2). In Chapter 16 Jane is “Arraigned at my own bar”, with Memory and Reason giving evidence, and passes sentence on herself. In Chapter 27 “my very conscience and reason turned traitors against me”, Feeling cries “Oh, comply!”, and yet “Still indomitable was the reply”.',
      effect:
        "Inner conflict becomes dialogue, or even a trial, so the reader watches Jane argue with herself. It dramatises the novel's concern with passion and judgement, and it presents her choices as reasoned rather than impulsive. The Chapter 27 version is the subtlest: conscience and reason change sides, and the reply that holds firm is given to no single faculty. One reading is that it is Jane's whole self speaking, which is why its first words are “I care for myself”.",
    },
    {
      technique: 'Gothic imagery, often explained away',
      example:
        "The laugh on the third storey is “a curious laugh; distinct, formal, mirthless” (Chapter 11). Meeting a strange horse and dog at dusk, Jane thinks of Bessie's “Gytrash”, until the rider falls and “The man, the human being, broke the spell at once” (Chapter 12).",
      effect:
        'Brontë builds suspense with Gothic conventions and then punctures it with the ordinary. The pattern trains the reader to expect explanations, which makes the one unexplained event, the voice across the moors in Chapter 35, all the more striking.',
    },
    {
      technique: 'Biblical allusion',
      example:
        "Chapter 26 ends with Jane's despair in words adapted from Psalm 69, “the waters came into my soul”. In Chapter 38 she is “bone of his bone and flesh of his flesh”, echoing Genesis 2:23. The novel's last words are St John's “Amen; even so come, Lord Jesus!”, from Revelation 22:20.",
      effect:
        "Scripture gives Jane's private feelings the weight of sacred history and places her marriage within a Christian order. For readers who knew the Bible, the allusions can also be read as showing that Jane's passion was not irreligious, an answer to critics who called the book anti-Christian.",
    },
    {
      technique: 'Shifts into the present tense',
      example:
        'Chapter 11 opens in the present: “A new chapter in a novel is something like a new scene in a play”. Chapter 28 begins “Two days are passed. It is a summer evening”, as Jane stands alone at Whitcross.',
      effect:
        'The change of tense pulls the reader into the moment, as if Jane were reliving it as she writes. It marks two turning points, arrival at Thornfield and destitution after leaving it, and makes the second especially stark.',
    },
  ],

  structureForm: [
    {
      heading: 'A fictional autobiography',
      body: "The first edition's title page reads Jane Eyre. An Autobiography, “Edited by Currer Bell”, so the novel presented itself as a real woman's memoir. Jane narrates as a wife of ten years (“I have now been married ten years”, Chapter 38), and she chooses what to tell. In Chapter 10 she says plainly that “this is not to be a regular autobiography”, then passes eight years “almost in silence”, having given “to the first ten years of my life” almost as many chapters. The form makes the story subjective and intimate: we have only Jane's version of Rochester, St John and above all Bertha, which is itself a point for evaluation.",
    },
    {
      heading: 'Five places, five stages',
      body: "The novel moves through five settings, each a stage in Jane's growth, which is why it is called a bildungsroman: Gateshead (Chapters 1 to 4), where she learns injustice; Lowood (5 to 10), where she learns discipline; Thornfield (11 to 27, with a return to Gateshead in 21 and 22), where she learns love; Moor House and Morton (28 to 35), where she finds family, work and money; and the ruins of Thornfield and then Ferndean (36 to 38), where she marries. Each of the first four stages ends with Jane leaving, and each departure is a choice more fully her own than the last: she is sent from Gateshead, advertises her way out of Lowood, flees Thornfield and freely returns.",
    },
    {
      heading: 'Three volumes, three crises',
      body: "The first edition was published in three volumes, and each volume ends at a turning point. Volume I closes with Chapter 15, the night Jane saves Rochester from the fire and he calls her “My cherished preserver”. Volume II closes with Chapter 26, the broken wedding, ending on Jane's despair in the words of a psalm. Volume III, from Chapter 27, begins with her decision to leave. Knowing this helps explain the novel's rhythm of rising tension and sudden reversal.",
    },
    {
      heading: 'Parallels and doubles',
      body: "Brontë builds meaning through repetition. Jane is locked in the red-room as a child, and Bertha is locked in the third storey as a wife. Mrs Reed tells Brocklehurst that Jane is deceitful, and he repeats the charge before the whole school, calling her a liar. Jane sees her own face in a mirror as a ghost in Chapter 2, and Bertha's face in a mirror in Chapter 25. Two proposals, in Chapter 23 and Chapter 34, mirror each other: one all feeling, one all duty. Noticing these patterns lets you write about structure across the whole text rather than chapter by chapter.",
    },
    {
      heading: 'Gothic suspense inside a realist story',
      body: 'For most of the Thornfield chapters the reader, like Jane, is misled. The laugh, the fire, the wounded Mason and the torn veil are all blamed on Grace Poole, and the truth is withheld until the wedding in Chapter 26. This is the structure of a mystery, and it makes the revelation hit Jane and the reader at the same moment. Afterwards the novel turns towards realism, with poverty on the moors and a village school, before the supernatural voice of Chapter 35 brings the Gothic back at the decisive moment.',
    },
    {
      heading: 'An ending that belongs to St John',
      body: "“Reader, I married him.” is the first sentence of the final chapter, not the last line of the book, which is a common mistake. Chapter 38 then summarises ten years of marriage, Rochester's partial recovery of sight and the birth of a son, and it closes not on Jane but on a letter from St John in India, ending “Amen; even so come, Lord Jesus!”. Why Brontë gives the last word to the man Jane refused is one of the best questions to ask about the novel. One answer is respect for a heroic faith; another is that it sets Jane's earthly happiness beside a very different idea of a good life.",
    },
    {
      heading: 'Dialogue as contest',
      body: "Jane and Rochester's conversations are duels. When he asks in Chapter 14 “do you think me handsome?” she answers “No, sir”, and much of their courtship is played out in teasing, evasion and argument rather than compliments. The proposal scene in Chapter 23 is a debate she wins. By contrast, St John's conversations are closer to commands, and Jane has to fight harder simply to be heard. The shape of the dialogue tells you who has power in each relationship.",
    },
  ],

  vocabulary: [
    {
      term: 'Bildungsroman',
      definition:
        "A novel of growth that follows a character from childhood to maturity. Jane Eyre traces Jane's development from a rebellious ten-year-old at Gateshead to a married woman telling her own story.",
    },
    {
      term: 'Gothic',
      definition:
        "A style of fiction built on fear, mystery and confinement: old houses, secret rooms, strange noises, madness and the supernatural. Brontë uses it at Gateshead and Thornfield, often to make Jane's inner feelings visible.",
    },
    {
      term: 'Byronic hero',
      definition:
        "A dark, moody, passionate man with a guilty secret, named after the poet Lord Byron and his heroes. Rochester is the novel's example: attractive, sarcastic, troubled and morally flawed.",
    },
    {
      term: 'Governess',
      definition:
        "A woman employed to teach children in a private home. Governesses were usually educated and genteel but poor, and were neither family nor servants, which is exactly Jane's awkward position at Thornfield.",
    },
    {
      term: 'Dependant',
      definition:
        "A person who relies on someone else for money and a home. John Reed's taunt in Chapter 1 that Jane is one names her condition at Gateshead, and escaping dependence drives the plot. Editions spell the word both ways.",
    },
    {
      term: 'Pathetic fallacy',
      definition:
        "Giving nature human feelings, or making weather and landscape mirror a character's emotions. The frozen midsummer of Chapter 26 and the lightning-split chestnut are the best examples.",
    },
    {
      term: 'Foil',
      definition:
        "A character who contrasts with another to highlight their qualities. Blanche Ingram is Jane's foil in rank and beauty, and St John is Rochester's foil in temperament.",
    },
    {
      term: 'Double (doppelgänger)',
      definition:
        "A character who reflects a hidden side of another. Many critics read Bertha as Jane's double, the rage and passion that Jane has to control, though that reading can erase Bertha's own story.",
    },
    {
      term: 'Bigamy',
      definition:
        "Marrying one person while still legally married to another, a crime in England. Rochester's attempt to marry Jane while Bertha lives would have been bigamous, which is why the wedding in Chapter 26 cannot go on.",
    },
    {
      term: 'Impediment',
      definition:
        'In a church wedding, a legal reason why the marriage cannot take place. The solicitor Briggs interrupts the ceremony in Chapter 26 to “declare the existence of an impediment”.',
    },
    {
      term: 'Evangelical',
      definition:
        'A strict Protestant movement stressing sin, conversion and self-denial. Mr Brocklehurst is modelled on the Evangelical clergyman who ran the school Charlotte Brontë attended at Cowan Bridge.',
    },
    {
      term: 'Consumption',
      definition:
        "The nineteenth-century name for tuberculosis, a lung disease that was often fatal. Helen Burns dies of it, and Jane is told that Helen's complaint was “consumption, not typhus” (Chapter 9).",
    },
    {
      term: 'Typhus',
      definition:
        "An infectious fever spread in crowded, dirty conditions. The typhus epidemic at Lowood in Chapter 9 exposes the school's neglect of its pupils and leads to its reform.",
    },
    {
      term: 'Apothecary',
      definition:
        'A pharmacist who also gave medical advice, lower in status than a physician. Mr Lloyd, the apothecary called in for the servants, is the first adult to listen to Jane, and he suggests sending her to school.',
    },
    {
      term: 'Automaton',
      definition:
        'A machine made to look and move like a person. Jane asks Rochester in Chapter 23 whether he thinks her one, rejecting the idea that a governess has no feelings.',
    },
    {
      term: 'Seraglio',
      definition:
        "A harem: the women's quarters of a sultan's palace. Rochester's joke about exchanging Jane for “the Grand Turk's whole seraglio” (Chapter 24) makes her feel treated as a possession.",
    },
    {
      term: 'Creole',
      definition:
        "A word whose meaning has varied by region; in the Caribbean it has broadly covered people of any ancestry who belong to the region's culture. Mason's statement uses it of Bertha's mother, and the novel never settles Bertha's ancestry.",
    },
    {
      term: 'Providence',
      definition:
        "God's guidance of events. Jane's rescue at Moor House, her discovery of her cousins and the timely legacy all feel providential, and the novel invites the reader to see a divine plan in them.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "Read the extract from Chapter 2, from “A bed supported on massive pillars of mahogany” to “appearing before the eyes of belated travellers.” Starting with this extract, explore how Brontë presents Jane as a victim of injustice. Write about how Brontë presents Jane in this extract, and how she presents Jane's experience of injustice in the novel as a whole.",
        skill:
          'Extract and whole-text response: language analysis, whole-text knowledge and context',
        guidance: [
          'Open with a clear argument: Brontë presents injustice as something Jane feels physically and names intellectually, and the red-room is where she first does both.',
          'Analyse the extract: the saturated red (“deep red damask”, “crimson cloth”), the shrine-like bed “like a tabernacle”, the “pale throne” of the absent master, and the hyperbole “no jail was ever more secure”.',
          "Comment on method: the adult narrator's calm explanations (“chill, because it seldom had a fire”) set against the child's fear, and the mirror in which Jane sees herself as a “strange little figure”.",
          "Move out to the rest of Chapter 2: “Unjust!—unjust!” said my reason, and Miss Abbot's verdict that she is “less than a servant, for you do nothing for your keep”.",
          "Trace injustice through the novel: Brocklehurst calling her a liar before the school (Chapter 7), Mrs Reed's hidden letter (Chapter 21), and Jane's refusal in Chapter 27 to accept a wrong even from someone she loves.",
          "Use context with a purpose: the dependence of orphaned girls on relatives, and Charlotte Brontë's own time at the Clergy Daughters' School at Cowan Bridge, where her two elder sisters fell ill before they died, and which she used as the model for Lowood.",
          'Conclude with a judgement: does Jane remain a victim, or does the novel show her turning injustice into the strength to choose? Support your answer with the ending.',
        ],
      },
      {
        question:
          "(a) Read the extract from Chapter 12, from “Anybody may blame me who likes” to “stranger than her laugh.” Explore how Brontë uses language and structure to present Jane's frustration in this extract. (b) In this extract, Jane longs for a wider life. Explain the importance of Jane's search for freedom elsewhere in the novel.",
        skill:
          'Two-part response: close language analysis of the extract, then whole-text knowledge',
        guidance: [
          'For part (a), keep entirely to the extract and to method: name techniques and explain their effect.',
          "Analyse the long opening sentence and its repeated “that then”, which enacts Jane's longing to see beyond the horizon.",
          'Analyse the widening vocabulary: “restlessness”, “revolt”, “rebellions”, and the general claim that “women feel just as men feel”.',
          "Explain the bathos of the list “making puddings and knitting stockings”, and the sudden turn to Grace Poole's laugh at the end. Mention Woolf's view that it is “an awkward break”, and offer the counter-reading that the laugh completes the argument.",
          'For part (b), choose three or four moments across the novel rather than retelling the plot: the red-room, leaving Lowood by advertisement, “I am no bird” in Chapter 23, the flight from Thornfield, refusing St John.',
          "Show development: Jane's idea of freedom grows from escape to self-government, and finally to a marriage she chooses as “an independent woman”.",
        ],
      },
      {
        question: 'How far does Brontë present St John Rivers as a good man?',
        skill: 'Whole-text essay: character, methods and interpretation',
        guidance: [
          'Take a position in the introduction: for example, that St John is genuinely good by his own standards, and that the novel shows how goodness without love can become a kind of tyranny.',
          'Give him his due first: he rescues Jane at Moor House, finds her work, tells her the truth about her inheritance and sacrifices his love for Rosamond Oliver to his mission.',
          "Analyse his proposal in Chapter 34: “God and nature intended you for a missionary's wife” and “formed for labour, not for love”, and what the language reveals about how he sees Jane.",
          "Use the imagery of cold: “a cold hard man” (his own words, Chapter 32), “no fervour infects me” (Chapter 33), and Jane's fear that he could “soon kill me” (Chapter 35).",
          "Compare him with Rochester as a foil: passion without principle against principle without warmth, and Jane's refusal of both.",
          "Consider the ending: the novel closes on his letter from India. Is that praise, irony, or both? Use Jane's own words, “the sternness of the warrior Greatheart”.",
          "Use context with care: the final chapter praises his work in India in the language of a Christian warrior, saying he “labours for his race”; weigh that against the novel's wider criticism of religion used to control, as with Brocklehurst.",
          'Conclude with a judgement that says to what extent he is good, rather than a summary.',
        ],
      },
      {
        question:
          "Some readers argue that Jane Eyre is less a love story than a story about power. By considering Brontë's methods, evaluate this view.",
        skill: 'A-level essay: argument, methods, context and critical perspectives',
        guidance: [
          'Define your terms at once: power over money, over bodies, over speech and over the right to tell the story. Then say how far you agree.',
          "Argue that the love story is itself a story about power: the master and his governess, Rochester's disguise as a fortune-teller, the jewels Jane refuses, and “I have her, and will hold her” in Chapter 23.",
          "Examine the balance of power at Ferndean: the inheritance, Rochester's blindness and his repentance. Does the ending create equality, or simply reverse the imbalance?",
          'Bring in the characters whose power is absolute or absent: Mrs Reed, Brocklehurst and St John, and Bertha, who has no voice at all.',
          "Use critical perspectives and test them: feminist readings of Jane's self-assertion; Gilbert and Gubar on Bertha as double; postcolonial readings of Bertha and of St John in India, including Jean Rhys's Wide Sargasso Sea.",
          'Analyse form as power: Jane narrates, addresses the reader and decides what we learn. “Reader, I married him.” puts her in the position of the subject.',
          "Reach a nuanced conclusion: love and power are inseparable in the novel, and Brontë's achievement is to make a love story out of a woman's insistence on power over herself.",
        ],
      },
      {
        question:
          'Explore the significance of Bertha Mason in Jane Eyre. In your answer, consider different interpretations of her role.',
        skill: 'A-level essay: interpretation, context and critical reading',
        guidance: [
          'Start with her function in the plot: the laugh, the fire, the attack on Mason, the torn veil, the revelation at the wedding and the final fire. Without her there is no obstacle and no ending.',
          'Analyse how she is presented: only through others, above all Rochester, and in dehumanising language (“whether beast or human being”, “the clothed hyena”, Chapter 26). Name the effect, and name its prejudice.',
          "Consider the reading of Bertha as Jane's double, the rage Jane learned to govern, linking the red-room to the third storey and Jane's mirror in Chapter 2 to Bertha's in Chapter 25.",
          'Set it against a postcolonial reading: a woman from Jamaica married for “thirty thousand pounds” and confined in England, whose history the novel does not tell. Refer to Wide Sargasso Sea as a response.',
          "Evaluate Rochester's account: how reliable is a husband's story of the wife he imprisoned? Consider how Jane accepts it and what that says about her.",
          'Conclude by judging which reading best accounts for the text, while acknowledging what each leaves out.',
        ],
      },
    ],
    tips: [
      "“Reader, I married him.” opens Chapter 38; it is not the last line. The novel ends with St John's letter. Getting this right, and saying why the ending belongs to St John, marks an answer out.",
      'Refer to chapters, not only events. Saying that Jane decides to leave Thornfield in Chapter 27 is precise evidence; saying that she leaves somewhere in the middle of the book is not.',
      'Remember who is speaking. Jane narrates as a married woman ten years later, so comment on the gap between the child who felt and the adult who judges.',
      'Treat Bertha with care. Analyse the language used about her and say what it reveals, including prejudice, rather than repeating it as description.',
      'Compare the two proposals, in Chapters 23 and 34. Setting Rochester against St John is the quickest way to build a whole-text argument about love, duty and independence.',
      "Use context to explain choices, not as a separate paragraph: governesses' status, charity schools, Evangelical religion and the law on marriage all help explain what Jane risks.",
      'Short, embedded quotations are better than long ones. Jane Eyre is full of memorable phrases, and a few words analysed closely beat a long passage copied out.',
      'Check punctuation against your own edition. Editions of Jane Eyre differ slightly, mostly in punctuation (a colon or a semicolon after “no net ensnares me”) and spelling (dependent or dependant), and in a handful of words. Quote the words of the edition your school uses.',
    ],
  },

  modelAnswer: {
    question: 'How far does Brontë present St John Rivers as a good man?',
    paragraph:
      "Brontë presents St John as a good man whose goodness would destroy Jane, and she refuses to let either half of that judgement cancel the other. He is honest about himself, admitting in Chapter 32 that he is “a cold hard man”, and his proposal in Chapter 34 is built on that coldness: “God and nature intended you for a missionary's wife.” By making “God and nature” the joint subject, St John claims divine authority for what is really his own will, while the antithesis in “formed for labour, not for love” reduces Jane to a tool, recalling her protest to Rochester in Chapter 23 that she is not “an automaton”. Her retort later in the chapter, “I scorn your idea of love”, shows that she can resist a clergyman as firmly as she resisted a lover. Yet Brontë's imagery is carefully double-edged. Jane calls him “pure as the deep sunless source”, a phrase that praises his purity while making it lightless, and in the same sentence she fears he “could soon kill me”. The novel then ends on his letter from India, “Amen; even so come, Lord Jesus!”, which can be read as a tribute to a heroic faith or as Brontë letting him welcome the death he expects while confirming that it was a life Jane was right to refuse. The more convincing reading holds both: St John is good, and Jane is right to say no.",
    commentary: [
      'It answers the question of degree in the first sentence with a two-sided thesis, then proves both sides rather than drifting into a character summary.',
      'Quotations are short, exact and embedded, and each is analysed at word level: “God and nature” as grammatical subject, the antithesis of labour and love, the paradox of a “sunless” purity.',
      'It ranges across the whole text, from Chapter 23 to the final page, and links St John to Rochester through the word “automaton”, which shows structural awareness.',
      'It treats the ending as a deliberate choice by the writer and offers two interpretations before judging between them.',
      'The final sentence evaluates rather than repeats, which is what lifts a competent answer to a strong one.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'The book and the blow',
      summary:
        "On a wet November afternoon ten-year-old Jane hides in a window-seat at Gateshead with Bewick's History of British Birds. Her cousin John Reed finds her and throws the book at her; she falls and cuts her head on the door, fights back, and Mrs Reed orders her locked in the red-room.",
      setting: 'The breakfast-room window-seat at Gateshead Hall, in winter rain',
      who: ['Jane Eyre', 'John Reed', 'Mrs Reed', 'Bessie'],
      quote: 'You are like a murderer—you are like a slave-driver—you are like the Roman emperors!',
      themes: ['Social class and dependence', 'Independence and self-respect'],
      tension: 3,
      significance:
        "Jane's first act of defiance is to name the wrong done to her out loud, the pattern of her whole life.",
    },
    {
      where: 'Chapter 2',
      title: 'The red-room',
      summary:
        "Jane is locked in the room where her uncle died. She sees her reflection as a ghost, rages at the injustice of her treatment, and when a light moves on the wall she believes her uncle's spirit has come. She screams, is refused release by Mrs Reed, and faints.",
      setting: 'The red-room at Gateshead, as daylight fades',
      who: ['Jane Eyre', 'Mrs Reed', 'Bessie'],
      quote: 'Unjust!—unjust!',
      themes: ['Imprisonment, escape and the Gothic', 'Independence and self-respect'],
      tension: 5,
      significance:
        "The novel's first prison, and the first time Jane names injustice for herself.",
    },
    {
      where: 'Chapter 4',
      title: 'The black pillar',
      summary:
        'Mr Brocklehurst comes to interview Jane for Lowood, and Mrs Reed tells him she is deceitful. When he has gone, Jane turns on her aunt and tells her the truth about her cruelty, and feels for the first time a sense of freedom and triumph.',
      setting: 'The breakfast-room at Gateshead Hall, in January',
      who: ['Jane Eyre', 'Mrs Reed', 'Mr Brocklehurst'],
      quote: 'I am not deceitful',
      themes: ['Independence and self-respect', 'Religion and conscience'],
      tension: 4,
      significance: 'Speaking out wins Jane a moment of liberty, though she soon feels its cost.',
    },
    {
      where: 'Chapters 7 and 8',
      title: 'The stool of shame',
      summary:
        'At Lowood, Brocklehurst lectures the half-starved girls on vanity while his wife and daughters arrive in silks and furs. He makes Jane stand on a stool before the school and calls her a liar. Helen Burns comforts her, and Miss Temple later clears her name.',
      setting: 'The schoolroom at Lowood Institution',
      who: ['Jane Eyre', 'Mr Brocklehurst', 'Helen Burns', 'Miss Temple'],
      quote: 'my mission is to mortify in these girls the lusts of the flesh',
      themes: ['Religion and conscience', 'Social class and dependence'],
      tension: 4,
      significance:
        "The novel's sharpest picture of religion used as power, and of the kindness that answers it.",
    },
    {
      where: 'Chapter 9',
      title: 'Resurgam',
      summary:
        'Typhus sweeps through Lowood in the spring. Helen, dying of consumption, lets Jane share her bed and speaks calmly of going to God, and the two girls fall asleep together. A day or two later Jane learns that Miss Temple found her at dawn with her arms round Helen, who had died in the night. Years later a tablet marks the grave with the word Resurgam.',
      setting: "Miss Temple's room at Lowood, at night",
      who: ['Jane Eyre', 'Helen Burns', 'Miss Temple'],
      quote: 'I believe; I have faith: I am going to God.',
      themes: ['Religion and conscience'],
      tension: 4,
      significance:
        "Helen's faith is the first model Jane measures herself against, and does not follow.",
    },
    {
      where: 'Chapters 11 and 12',
      title: 'Thornfield and the laugh',
      summary:
        'Aged about eighteen, Jane arrives at Thornfield as governess to Adèle. Mrs Fairfax shows her the house, and on the third storey she hears a strange laugh, which is blamed on the servant Grace Poole. Pacing that corridor, Jane longs for a wider life.',
      setting: 'The third-storey corridor of Thornfield Hall',
      who: ['Jane Eyre', 'Mrs Fairfax', 'Adèle Varens', 'Grace Poole'],
      quote: 'women feel just as men feel',
      themes: ['Gender and equality', 'Imprisonment, escape and the Gothic'],
      tension: 2,
      significance:
        "The novel's great argument for women's freedom is interrupted by the laugh of the woman hidden upstairs.",
    },
    {
      where: 'Chapter 12',
      title: 'The rider in Hay Lane',
      summary:
        "Walking to Hay with a letter, Jane hears a horse at dusk and thinks of Bessie's tales of the Gytrash. The horse slips on ice and its rider falls; Jane helps him remount. Back at Thornfield she learns he is her employer, Mr Rochester.",
      setting: 'An icy lane near Thornfield, at dusk in January',
      who: ['Jane Eyre', 'Mr Rochester'],
      quote: 'The man, the human being, broke the spell at once.',
      themes: ['Love, passion and judgement', 'Gender and equality'],
      tension: 2,
      significance:
        'Their first meeting reverses the romantic convention: the hero falls, and the heroine helps him up.',
    },
    {
      where: 'Chapter 15',
      title: 'Fire in the night',
      summary:
        "Rochester tells Jane about Adèle's mother, Céline. That night Jane hears the laugh again, finds smoke pouring from Rochester's room and his bed curtains on fire, and puts out the flames with water. He blames Grace Poole and holds Jane's hand as he thanks her.",
      setting: "The gallery and Rochester's bedroom at Thornfield, at night",
      who: ['Jane Eyre', 'Mr Rochester', 'Bertha Mason'],
      quote: 'My cherished preserver, good-night!',
      themes: ['Imprisonment, escape and the Gothic', 'Love, passion and judgement'],
      tension: 4,
      significance:
        "Jane saves Rochester's life, and the danger hidden in the house comes into the open.",
    },
    {
      where: 'Chapters 17 and 18',
      title: 'The house party',
      summary:
        "Rochester fills Thornfield with fashionable guests and appears to court the beautiful Blanche Ingram, who sneers at governesses in Jane's hearing. Jane watches from a window-seat, admits to the reader that she loves him, and judges Blanche shallow.",
      setting: 'The drawing-room at Thornfield, among the guests',
      who: ['Jane Eyre', 'Mr Rochester', 'Blanche Ingram', 'Adèle Varens'],
      quote: 'half of them detestable and the rest ridiculous',
      themes: ['Social class and dependence', 'Love, passion and judgement'],
      tension: 3,
      significance:
        'Class is at its most visible: Jane is present at the party but not part of it.',
    },
    {
      where: 'Chapter 20',
      title: 'A wound in the night',
      summary:
        'A visitor from Jamaica, Richard Mason, is attacked in a room on the third storey. Rochester asks Jane to sit with the bleeding man in silence while he fetches a surgeon, and Mason is sent away before sunrise without an explanation.',
      setting: 'A locked room on the third storey of Thornfield, at night',
      who: ['Jane Eyre', 'Mr Rochester', 'Richard Mason', 'Bertha Mason'],
      themes: ['Imprisonment, escape and the Gothic', 'Race, empire and Bertha Mason'],
      tension: 4,
      significance: "The secret nearly breaks out, and Jane's trust in Rochester is tested.",
    },
    {
      where: 'Chapter 21',
      title: "Mrs Reed's confession",
      summary:
        "Jane returns to Gateshead to her dying aunt. John Reed has died, reportedly by suicide. Mrs Reed confesses that three years earlier she hid a letter from Jane's uncle John Eyre and told him Jane was dead. Jane forgives her; Mrs Reed will not be reconciled.",
      setting: "Mrs Reed's bedroom at Gateshead Hall",
      who: ['Jane Eyre', 'Mrs Reed', 'Bessie', 'John Eyre'],
      quote: 'You were born, I think, to be my torment',
      themes: ['Religion and conscience', 'Social class and dependence'],
      tension: 3,
      significance:
        'The adult Jane can forgive the woman who wronged her, and the uncle who will change her life comes into view.',
    },
    {
      where: 'Chapter 23',
      title: 'The proposal in the orchard',
      summary:
        'On Midsummer-eve Rochester lets Jane believe he will marry Blanche and send her to Ireland. She declares her equality with him, and he proposes. That night a storm breaks, and the great horse-chestnut in the orchard is struck by lightning and split.',
      setting: 'The orchard at Thornfield, on Midsummer-eve',
      who: ['Jane Eyre', 'Mr Rochester'],
      quote: 'I am no bird; and no net ensnares me',
      themes: [
        'Gender and equality',
        'Love, passion and judgement',
        'Independence and self-respect',
      ],
      tension: 4,
      significance:
        'Jane wins her argument for equality, and nature signals at once that the union is flawed.',
    },
    {
      where: 'Chapter 24',
      title: 'Silks and a seraglio',
      summary:
        "Rochester wants to cover Jane in jewels and silks. She refuses to be kept, insists on remaining Adèle's governess at her salary, and writes to her uncle in Madeira, hoping for money of her own.",
      setting: 'Thornfield and a silk warehouse in Millcote',
      who: ['Jane Eyre', 'Mr Rochester', 'Adèle Varens', 'John Eyre'],
      quote: 'I will not be your English Céline Varens.',
      themes: ['Independence and self-respect', 'Gender and equality'],
      tension: 2,
      significance:
        "Jane's letter seeking independence is the one that brings Mason to the wedding.",
    },
    {
      where: 'Chapter 25',
      title: 'The torn veil',
      summary:
        'Two nights before the wedding a woman Jane has never seen enters her room, puts on the wedding veil, looks in the mirror, tears the veil in two and tramples it. Rochester tells Jane it must have been Grace Poole.',
      setting: "Jane's bedroom at Thornfield, at night",
      who: ['Jane Eyre', 'Mr Rochester', 'Bertha Mason'],
      quote: 'Of the foul German spectre—the Vampyre.',
      themes: ['Imprisonment, escape and the Gothic', 'Race, empire and Bertha Mason'],
      tension: 4,
      significance: 'The hidden wife confronts the bride, and destroys the symbol of the marriage.',
    },
    {
      where: 'Chapter 26',
      title: 'The impediment',
      summary:
        'At the altar the solicitor Briggs, with Richard Mason, declares that Rochester is already married. Rochester takes everyone to the third storey and shows them his wife, Bertha, who attacks him. Alone, Jane feels all her hopes die.',
      setting: 'The church near Thornfield, then the hidden room on the third storey',
      who: ['Jane Eyre', 'Mr Rochester', 'Richard Mason', 'Bertha Mason', 'Grace Poole'],
      quote: 'The marriage cannot go on: I declare the existence of an impediment.',
      themes: ['Race, empire and Bertha Mason', 'Love, passion and judgement'],
      tension: 5,
      significance:
        'The mystery is solved at the worst possible moment, and Volume II ends in despair.',
    },
    {
      where: 'Chapter 27',
      title: 'Flight from Thornfield',
      summary:
        'Rochester tells Jane the story of his marriage and begs her to live with him abroad. Although she loves him, and even her conscience and reason seem to side with him, she refuses. After a dream in which a moonlit figure tells her to flee temptation, she slips out of Thornfield in the short summer night with twenty shillings.',
      setting: 'Thornfield Hall at night, then the road at dawn',
      who: ['Jane Eyre', 'Mr Rochester'],
      quote: 'I care for myself.',
      themes: [
        'Independence and self-respect',
        'Religion and conscience',
        'Love, passion and judgement',
      ],
      tension: 5,
      significance: "The novel's moral centre: Jane chooses self-respect over the man she loves.",
    },
    {
      where: 'Chapters 28 and 29',
      title: 'Destitute at Whitcross',
      summary:
        'Set down at a crossroads on the moors, Jane finds she has left her parcel in the coach. She sleeps on the heath, begs for food, and at last, turned away by the servant Hannah, collapses at the door of Moor House, where St John Rivers takes her in.',
      setting: 'The moors around Whitcross, then the door of Moor House',
      who: ['Jane Eyre', 'St John Rivers', 'Diana and Mary Rivers'],
      quote: 'I am absolutely destitute.',
      themes: ['Social class and dependence', 'Independence and self-respect'],
      tension: 4,
      significance: 'Having chosen independence, Jane experiences its cost at its most extreme.',
    },
    {
      where: 'Chapter 33',
      title: 'Twenty thousand pounds',
      summary:
        "St John reveals that he knows Jane's real name, that her uncle John Eyre has died and left her twenty thousand pounds, and that the Rivers are her cousins. Jane insists on dividing the money equally among the four of them.",
      setting: "Jane's cottage at Morton, on a snowy night",
      who: ['Jane Eyre', 'St John Rivers', 'Diana and Mary Rivers', 'John Eyre'],
      quote: 'Were we not four?',
      themes: ['Social class and dependence', 'Independence and self-respect'],
      tension: 2,
      significance: 'Jane gains money and family in one stroke, and values the family more.',
    },
    {
      where: 'Chapter 34',
      title: "The missionary's wife",
      summary:
        'St John asks Jane to go with him to India as his wife and fellow worker. She offers to go as his sister, but he insists on marriage for the sake of the work, and Jane tells him she scorns his idea of love.',
      setting: 'A glen among the hills near Moor House',
      who: ['Jane Eyre', 'St John Rivers'],
      quote: "God and nature intended you for a missionary's wife.",
      themes: ['Religion and conscience', 'Love, passion and judgement', 'Gender and equality'],
      tension: 4,
      significance:
        'The second temptation mirrors the first: duty without love instead of love without law.',
    },
    {
      where: 'Chapter 35',
      title: 'The voice',
      summary:
        "On the verge of giving in to St John, Jane hears a voice cry her name. She recognises it as Rochester's, answers that she is coming, and resolves to find out what has become of him.",
      setting: 'A moonlit room at Moor House, late at night, with only St John still awake',
      who: ['Jane Eyre', 'St John Rivers', 'Mr Rochester'],
      quote: 'Jane! Jane! Jane!',
      themes: ['Love, passion and judgement', 'Imprisonment, escape and the Gothic'],
      tension: 5,
      significance:
        'The one supernatural event the novel never explains is the one that sends Jane home.',
    },
    {
      where: 'Chapter 36',
      title: 'A blackened ruin',
      summary:
        'Jane finds Thornfield burned to a shell. The innkeeper tells her that Bertha set the fire; that Rochester got the servants out and went back for his wife, who leapt from the roof and died; and that as he came down the great staircase the house fell in, costing him an eye and a hand, and then the sight of the other eye.',
      setting: 'The ruins of Thornfield, and the Rochester Arms inn',
      who: ['Jane Eyre', 'Mr Rochester', 'Bertha Mason'],
      quote: 'I saw a blackened ruin.',
      themes: ['Race, empire and Bertha Mason', 'Imprisonment, escape and the Gothic'],
      tension: 4,
      significance:
        "The obstacle to the marriage is removed, at the cost of Bertha's life and Rochester's sight.",
    },
    {
      where: 'Chapter 37',
      title: 'Ferndean',
      summary:
        'Jane finds Rochester at his lonely manor-house in the woods. She tells him she is rich and independent, and they are reconciled; he says he has come to see the hand of God in his suffering, and that he called her name on the same night she heard it.',
      setting: 'Ferndean Manor, deep in a wood, in the rain',
      who: ['Jane Eyre', 'Mr Rochester'],
      quote: 'I am an independent woman now.',
      themes: ['Independence and self-respect', 'Love, passion and judgement'],
      tension: 3,
      significance: 'The lovers meet again as equals, each changed by what they have suffered.',
    },
    {
      where: 'Chapter 38',
      title: 'Reader, I married him',
      summary:
        'Jane and Rochester marry quietly. Ten years on she describes a perfect companionship; Rochester has recovered the sight of one eye and has seen his first-born son. The novel ends with a letter from St John, working in India and expecting to die.',
      setting: 'Ferndean, ten years later',
      who: ['Jane Eyre', 'Mr Rochester', 'St John Rivers', 'Adèle Varens', 'Diana and Mary Rivers'],
      quote: 'Reader, I married him.',
      themes: [
        'Love, passion and judgement',
        'Religion and conscience',
        'Independence and self-respect',
      ],
      tension: 1,
      significance:
        'Jane tells her ending in her own voice, then gives the last word to the man she refused.',
    },
  ],

  relationships: [
    {
      from: 'Jane Eyre',
      to: 'Mr Rochester',
      kind: 'governess and master, then husband and wife',
      note: 'An argument between equals from their first meeting, broken by his secret and remade at Ferndean, when she has money and he has been humbled.',
    },
    {
      from: 'Jane Eyre',
      to: 'St John Rivers',
      kind: 'cousins; a refused proposal',
      note: "He rescues her and nearly masters her. Her refusal of his loveless proposal mirrors her refusal of Rochester's unlawful one.",
    },
    {
      from: 'Mr Rochester',
      to: 'Bertha Mason',
      kind: 'husband and wife',
      note: 'A marriage arranged for money in Jamaica and hidden in England. The reader hears only his side, and she dies in the fire that maims him.',
    },
    {
      from: 'Jane Eyre',
      to: 'Bertha Mason',
      kind: 'rivals who never speak; a double',
      note: "They meet only when Bertha tears Jane's veil and when Jane sees her revealed. Critics read Bertha as the imprisoned rage Jane learned to control.",
    },
    {
      from: 'Jane Eyre',
      to: 'Mrs Reed',
      kind: 'unwanted ward and aunt by marriage',
      note: 'Resentment on one side and defiance on the other. Jane forgives her on her deathbed; Mrs Reed cannot forgive Jane.',
    },
    {
      from: 'Jane Eyre',
      to: 'John Reed',
      kind: 'cousins; victim and bully',
      note: 'His violence begins the novel, and his contempt for her as a dependant names her first injustice.',
    },
    {
      from: 'Jane Eyre',
      to: 'Helen Burns',
      kind: 'school friends',
      note: 'Helen offers love and a faith of endurance. Jane loves her, learns from her, and does not become her.',
    },
    {
      from: 'Jane Eyre',
      to: 'Miss Temple',
      kind: 'pupil and teacher',
      note: "Miss Temple clears Jane's name and shapes her for eight years; when she marries and leaves, Jane's restlessness returns.",
    },
    {
      from: 'Mr Brocklehurst',
      to: 'Jane Eyre',
      kind: 'school treasurer and charity pupil',
      note: "He takes Mrs Reed's word that Jane is a liar and shames her before the school: authority used without justice.",
    },
    {
      from: 'Jane Eyre',
      to: 'Adèle Varens',
      kind: 'governess and pupil',
      note: "Jane's steady care for Adèle continues after the marriage, when she finds her a kinder school.",
    },
    {
      from: 'Mr Rochester',
      to: 'Adèle Varens',
      kind: 'guardian and ward',
      note: 'He denies being her father but gives her a home, a mixture of coldness and generosity typical of him.',
    },
    {
      from: 'Mr Rochester',
      to: 'Blanche Ingram',
      kind: 'supposed suitors',
      note: "He courts her in public to make Jane jealous and tests her greed with a false rumour. She is Jane's foil.",
    },
    {
      from: 'Richard Mason',
      to: 'Bertha Mason',
      kind: 'brother and sister',
      note: 'He visits her, is wounded by her, and at last reveals her existence, stopping the wedding.',
    },
    {
      from: 'Grace Poole',
      to: 'Bertha Mason',
      kind: 'keeper and prisoner',
      note: 'Grace is paid to guard Bertha and is blamed for everything Bertha does, the red herring that hides her.',
    },
    {
      from: 'St John Rivers',
      to: 'Rosamond Oliver',
      kind: 'love renounced',
      note: 'He loves her but will not marry her, choosing his mission over his heart, which shows that his coldness is chosen.',
    },
    {
      from: 'Jane Eyre',
      to: 'Diana and Mary Rivers',
      kind: 'cousins and friends',
      note: 'The first equals Jane lives among. She shares her fortune with them, trading money for family.',
    },
    {
      from: 'Jane Eyre',
      to: 'John Eyre',
      kind: 'niece and uncle who never meet',
      note: 'His letters and legacy shape her life twice: he exposes the bigamy and makes her independent.',
    },
    {
      from: 'Jane Eyre',
      to: 'Bessie',
      kind: 'child and nursemaid',
      note: "The one source of warmth at Gateshead, and the teller of the tales that fill Jane's imagination.",
    },
    {
      from: 'Jane Eyre',
      to: 'Mrs Fairfax',
      kind: 'governess and housekeeper',
      note: 'A kind welcome at Thornfield, and later the voice of ordinary caution about marrying her master.',
    },
  ],

  compareWith: [
    {
      title: 'Great Expectations',
      href: '/revision/texts/great-expectations',
      reason:
        "Another first-person novel in which an orphan looks back on growing up, and in which money from an unexpected source changes the narrator's place in the class system.",
    },
    {
      title: 'Pride and Prejudice',
      href: '/revision/texts/pride-and-prejudice',
      reason:
        "Also set by every GCSE board that sets Jane Eyre: another heroine who refuses a proposal on principle, and a sharp look at marriage, money and women's choices.",
    },
    {
      title: 'Strange Case of Dr Jekyll and Mr Hyde',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        'A respectable house hiding a violent secret, and a divided self: useful for comparing Victorian Gothic and the idea of the double.',
    },
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        'An earlier Gothic novel, told through first-person accounts, that also asks what happens to a being shut out from family and society.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'intimate_relationships',
    'discrimination',
    'colonialism',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: [
    'pre-eminently an anti-Christian composition',
    'an awkward break',
    'Edited by Currer Bell',
    // The first edition's readings in Chapter 2, named in that extract's pointer
    // because the guide prints the Gutenberg wording. They are Brontë's words,
    // but not in the edition this guide follows.
    'kitchens',
    "by undertaker's men",
    'coming up out of',
  ],

  sources: [
    {
      label:
        'Project Gutenberg, Jane Eyre: An Autobiography, eBook #1260 (transcribed from the 1897 Service & Paton illustrated reprint): every quotation, extract and plot fact was copied or read here, with its chapter and speaker checked in context',
      url: 'https://www.gutenberg.org/ebooks/1260',
    },
    {
      label: 'Project Gutenberg #1260 plain text, the file searched for every quotation',
      url: 'https://www.gutenberg.org/cache/epub/1260/pg1260.txt',
    },
    {
      label:
        'Wikisource, Jane Eyre (1st edition, 1847): the title page (An Autobiography, edited by Currer Bell, in three volumes, Smith, Elder and Co.), the volume contents (15, 11 and 12 chapters), and a second text against which the quotations were compared word for word',
      url: 'https://en.wikisource.org/wiki/Jane_Eyre_(1st_edition)',
    },
    {
      label:
        "Wikisource, 1st edition, all 38 chapter pages (Volume 1, Chapters 1 to 15; Volume 2, 1 to 11; Volume 3, 1 to 12): every quoted span and all three extracts searched against them, by chapter, on 25 September 2026. All words matched except the Chapter 2 readings named in that extract, “dependant” for “dependent” (Chapter 1) and “warrior. Great-heart” for “warrior Greatheart” (Chapter 38). The printer's imprint closes modern Chapters 15, 26 and 38, confirming the volume divisions",
      url: 'https://en.wikisource.org/wiki/Jane_Eyre_(1st_edition)/Volume_1/Chapter_1',
    },
    {
      label:
        'Wikisource, 1st edition, Volume II, Chapter XI: ends with the Psalm and “END OF VOLUME II”, confirming that Volume II ends with modern Chapter 26 (Wikipedia gives 16 to 27, which the scan contradicts)',
      url: 'https://en.wikisource.org/wiki/Jane_Eyre_(1st_edition)/Volume_2/Chapter_11',
    },
    {
      label: 'Wikisource, 1st edition, Volume III, Chapter I: opens with modern Chapter 27',
      url: 'https://en.wikisource.org/wiki/Jane_Eyre_(1st_edition)/Volume_3/Chapter_1',
    },
    {
      label:
        "Wikisource, 1st edition, Volume II, Chapter VIII (modern Chapter 23): the first edition's punctuation of the proposal speech, which differs from Gutenberg in commas and colons but not in words",
      url: 'https://en.wikisource.org/wiki/Jane_Eyre_(1st_edition)/Volume_2/Chapter_8',
    },
    {
      label:
        "Wikisource, Jane Eyre versions page: first edition October 1847 by Smith, Elder and Co. under the name Currer Bell; third edition of 1851 the last corrected in the author's lifetime. (Sources differ on the exact day in October, so the guide gives the month only.)",
      url: 'https://en.wikisource.org/wiki/Jane_Eyre',
    },
    {
      label:
        "Wikipedia, Jane Eyre: Elizabeth Rigby's 1848 Quarterly Review verdict; Gilbert and Gubar, The Madwoman in the Attic (Yale, 1979); Jean Rhys, Wide Sargasso Sea (1966); Brocklehurst modelled on William Carus Wilson, an Evangelical minister; Bertha's race never stated",
      url: 'https://en.wikipedia.org/wiki/Jane_Eyre',
    },
    {
      label:
        "Wikipedia, Charlotte Brontë: the Clergy Daughters' School at Cowan Bridge, the deaths of her sisters Maria and Elizabeth, her work as a governess from 1839",
      url: 'https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB',
    },
    {
      label:
        "Wikipedia, Creole peoples: the term's meaning varies by region, and in the Caribbean broadly covers people of any ancestry who belong to the region's culture",
      url: 'https://en.wikipedia.org/wiki/Creole_peoples',
    },
    {
      label:
        "Virginia Woolf, A Room of One's Own, Chapter 4 (Project Gutenberg Australia): quotes the Chapter 12 passage and calls the turn to Grace Poole's laugh “an awkward break”",
      url: 'https://gutenberg.net.au/ebooks02/0200791h.html',
    },
    {
      label:
        'The King James Bible, Project Gutenberg #10: Psalm 69:1-2, Genesis 2:23, John 4:10 and Revelation 22:20, the sources of the allusions named in the language section',
      url: 'https://www.gutenberg.org/ebooks/10',
    },
  ],
}
