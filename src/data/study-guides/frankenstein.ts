import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Frankenstein, Mary Shelley (1818; revised 1831). A SUPPLEMENT: the page at
 * /revision/texts/frankenstein already carries the overview, context, themes,
 * characters, key quotations, language notes, essay questions and a model
 * paragraph, so this file adds only what it lacked: extracts for close reading,
 * structure and form, and a glossary, plus the timeline and character map that
 * the animated visuals draw.
 *
 * EDITION. Since 26 September 2026 the 1831 text is held, Introduction and all,
 * as src/data/full-texts/frankenstein.ts (eBook #42324 below), and
 * study-guides.test.ts checks every quotation here against it. Two phrases
 * from Shelley's 1831 Introduction had been listed in quotesFromElsewhere while
 * nothing was held; the Introduction is held now, so they are checked like any
 * other quotation. The 1818 reading "bloody as they may be", which the guide
 * quotes to show where the editions differ, is listed there instead: it is in
 * #41445 and in no 1831 text.
 *
 * Before that no byte copy was held, and the test could not check these
 * quotations for us. Every quotation and every printed
 * extract here was copied from Project Gutenberg eBook #42324, which is
 * transcribed from a photo-reprint of the 1831 edition, and confirmed with a
 * normalised search of that whole text, with the chapter found from the
 * heading above each hit rather than from memory. Each was then searched in
 * eBook #41445 (the 1818 first edition) and in eBook #84 (an 1831-based text
 * with modernised punctuation). Where the wording differs between editions the
 * guide says so. Chapter numbers are the 1831 numbering, 1 to 24, which is the
 * numbering the rest of the Frankenstein pages use.
 *
 * RE-VERIFIED 25 September 2026 by a second pass that checked every quoted
 * phrase in this file, prose included, against #42324, #41445 and #84 held in
 * memory, and read the context of each to confirm speaker and chapter. It
 * corrected: Victor's arrest in Ireland, which happens at the end of Chapter 20
 * although the examination is Chapter 21; the Creature's demand for a companion,
 * first made at the end of Chapter 16; the Creature's papers, taken from Victor's
 * "laboratory", not his workshop; Walton's "blasted by cowardice and
 * indecision", which does not say whose cowardice; the pursuit route (by ship
 * towards the Black Sea, not across it); and Ruskin's coinage of "pathetic
 * fallacy", which is 1856, not the whole run of Modern Painters. Britannica
 * refused automated reads, so the context facts are now sourced to pages that
 * were actually read.
 *
 * CHECKED AGAIN 26 September 2026 by an adversarial pass that fetched #42324,
 * #41445 and #84 afresh and searched every quotation and extract (all three
 * extracts match #42324 as continuous passages). It corrected: the Creature's
 * "an impulse, which I detested", where 1831 has a comma the timeline had
 * dropped; the claim that Elizabeth's "cousin" is a trace of 1818 left in the
 * 1831 letters, when 1831 Chapter 1 itself says "We called each other
 * familiarly by the name of cousin"; the Godwin dedication, which is not on
 * the 1818 title page and is not in the 1831 text; the reason 1831 has 24
 * chapters; Justine's condemnation, which the summary had skipped; and the
 * Science and Society pairing, which is a choice of two texts, not a fixed
 * pair.
 *
 * Things the verification turned up, recorded so the next editor does not
 * reintroduce them:
 * - The Creature's threat is "I shall be with you on your wedding-night"
 *   (Chapter 20). Victor twice remembers it as "I will be with you", once later
 *   in Chapter 20 and once in Chapter 22, then repeats it correctly near the end
 *   of Chapter 22. So "I will" is in the novel, but as Victor's recollection,
 *   not the Creature's words.
 * - "Shall each man find a wife for his bosom..." is Chapter 20, interrupted by
 *   "cried he", not Chapters 16-17.
 * - "I am the cousin of the unhappy child who was murdered" is Elizabeth's
 *   evidence at Justine's trial (Chapter 8), and reads "I am," said she, "the
 *   cousin...". It is not Justine's line.
 * - The novel never uses the name "Mer de Glace": it says "the sea of ice" and
 *   Montanvert.
 */
export const guide: StudyGuide = {
  slug: 'frankenstein',
  title: 'Frankenstein',
  author: 'Mary Shelley',
  form: 'novel',
  scope:
    "The whole novel: Walton's four opening letters, Victor's narrative with the Creature's story at its centre, and Walton's closing entries. Chapter numbers here follow the revised 1831 text (Chapters 1 to 24); the 1818 first edition numbers the same material in three volumes.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published anonymously in three volumes in 1818 by Lackington, Hughes, Harding, Mavor and Jones; revised by the author for Henry Colburn and Richard Bentley's Standard Novels in 1831. Extracts and quotations follow the 1831 text in the Project Gutenberg edition (eBook #42324), with its chapter numbers.",
  },

  native: {
    overview: '/revision/texts/frankenstein',
    context: '/revision/texts/frankenstein',
    themes: '/revision/texts/frankenstein',
    characters: '/revision/texts/frankenstein',
    keyQuotes: '/revision/texts/frankenstein',
    languageAnalysis: '/revision/texts/frankenstein',
    examPractice: '/revision/texts/frankenstein',
    modelAnswer: '/revision/texts/frankenstein',
  },

  extracts: [
    {
      title: "Victor's secret toil",
      where: 'Chapter 4 (1818: Volume I, Chapter III)',
      pointer:
        'Two paragraphs a little past the middle of the chapter, from “No one can conceive the variety of feelings” to “I brought my work near to a conclusion”, just before the paragraph that begins “The summer months passed”.',
      text: `No one can conceive the variety of feelings which bore me onwards, like a hurricane, in the first enthusiasm of success. Life and death appeared to me ideal bounds, which I should first break through, and pour a torrent of light into our dark world. A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me. No father could claim the gratitude of his child so completely as I should deserve theirs. Pursuing these reflections, I thought, that if I could bestow animation upon lifeless matter, I might in process of time (although I now found it impossible) renew life where death had apparently devoted the body to corruption.

These thoughts supported my spirits, while I pursued my undertaking with unremitting ardour. My cheek had grown pale with study, and my person had become emaciated with confinement. Sometimes, on the very brink of certainty, I failed; yet still I clung to the hope which the next day or the next hour might realise. One secret which I alone possessed was the hope to which I had dedicated myself; and the moon gazed on my midnight labours, while, with unrelaxed and breathless eagerness, I pursued nature to her hiding-places. Who shall conceive the horrors of my secret toil, as I dabbled among the unhallowed damps of the grave, or tortured the living animal to animate the lifeless clay? My limbs now tremble, and my eyes swim with the remembrance; but then a resistless, and almost frantic, impulse, urged me forward; I seemed to have lost all soul or sensation but for this one pursuit. It was indeed but a passing trance, that only made me feel with renewed acuteness so soon as, the unnatural stimulus ceasing to operate, I had returned to my old habits. I collected bones from charnel-houses; and disturbed, with profane fingers, the tremendous secrets of the human frame. In a solitary chamber, or rather cell, at the top of the house, and separated from all the other apartments by a gallery and staircase, I kept my workshop of filthy creation: my eye-balls were starting from their sockets in attending to the details of my employment. The dissecting room and the slaughter-house furnished many of my materials; and often did my human nature turn with loathing from my occupation, whilst, still urged on by an eagerness which perpetually increased, I brought my work near to a conclusion.`,
      annotations: [
        {
          phrase: 'bore me onwards, like a hurricane',
          note: 'The simile makes Victor the passenger of his own ambition: a hurricane is a force of nature that cannot be steered or stopped. Notice that he is the object of the verb, not its subject. From his first sentence he presents himself as carried along, a habit of self-excuse that runs through his whole narrative.',
        },
        {
          phrase: 'Life and death appeared to me ideal bounds',
          note: 'The oldest boundary of all, between the living and the dead, becomes to Victor merely an idea to be crossed. The image of pouring “a torrent of light into our dark world” casts him as a bringer of enlightenment, a Promethean fire-giver, which is exactly the pride the subtitle warns against.',
        },
        {
          phrase: 'A new species would bless me as its creator and source',
          note: 'Victor imagines himself not as a scientist but as a god, worshipped by a whole species. The irony is savage: the one being he makes will curse him, crying “Cursed, cursed creator” at the start of Chapter 16. His dream of gratitude is also a dream of power over others.',
        },
        {
          phrase: 'No father could claim the gratitude of his child so completely',
          note: "The comparison with fatherhood is the key to the whole novel. Victor wants all of a parent's rights and none of a parent's duties. A strong answer connects this line to Chapter 5, where the moment of birth is followed at once by flight, and to the Creature's charge that Victor has failed in the duty he owes him.",
        },
        {
          phrase: 'I pursued nature to her hiding-places',
          note: "Nature is personified as a woman who hides and is chased. The phrase echoes M. Waldman's lecture in Chapter 3, where modern scientists “show how she works in her hiding places”: Victor has taken his teacher's image and turned discovery into pursuit. One reading, common in feminist criticism, sees science here as a violation of a female nature, and Victor as a man who tries to create life without a woman. Another keeps to the Romantic idea that some secrets should stay hidden. Both make the pursuit sound invasive.",
        },
        {
          phrase: 'the unhallowed damps of the grave',
          note: 'The Gothic vocabulary of graves, damp and the unholy makes the scientific work feel like sacrilege. “Unhallowed” means not made holy, so Victor admits that his work breaks religious as well as natural law, even while he describes it with pride.',
        },
        {
          phrase: 'my workshop of filthy creation',
          note: "The oxymoron joins the sacred word “creation”, the word for God's making of the world, with “filthy”. It condenses the chapter's double view: the older narrator looking back with disgust on a younger self who felt only excitement. The isolated “cell” at the top of the house makes the isolation physical.",
        },
        {
          phrase: 'often did my human nature turn with loathing from my occupation',
          note: "Victor's conscience speaks, and he overrides it. The phrase “human nature” matters: the novel will ask what that is, and whether the Creature has it. Here Victor admits that his own humanity revolted, which undermines his later claim that he was driven by forces he could not resist.",
        },
      ],
      question:
        "Starting with this extract, how does Shelley present Victor's ambition? Write about how Shelley presents Victor's ambition in this extract and in the novel as a whole.",
    },
    {
      title: 'The meeting on the glacier',
      where: 'Chapter 10 (1818: Volume II, Chapter II)',
      pointer:
        "In the middle of the chapter, after the Creature bounds towards Victor across the ice: from Victor's outburst beginning “Devil,” to the Creature's words “Make me happy, and I shall again be virtuous.”",
      text: `“Devil,” I exclaimed, “do you dare approach me? and do not you fear the fierce vengeance of my arm wreaked on your miserable head? Begone, vile insect! or rather, stay, that I may trample you to dust! and, oh! that I could, with the extinction of your miserable existence, restore those victims whom you have so diabolically murdered!”

“I expected this reception,” said the dæmon. “All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things! Yet you, my creator, detest and spurn me, thy creature, to whom thou art bound by ties only dissoluble by the annihilation of one of us. You purpose to kill me. How dare you sport thus with life? Do your duty towards me, and I will do mine towards you and the rest of mankind. If you will comply with my conditions, I will leave them and you at peace; but if you refuse, I will glut the maw of death, until it be satiated with the blood of your remaining friends.”

“Abhorred monster! fiend that thou art! the tortures of hell are too mild a vengeance for thy crimes. Wretched devil! you reproach me with your creation; come on, then, that I may extinguish the spark which I so negligently bestowed.”

My rage was without bounds; I sprang on him, impelled by all the feelings which can arm one being against the existence of another.

He easily eluded me, and said—

“Be calm! I entreat you to hear me, before you give vent to your hatred on my devoted head. Have I not suffered enough, that you seek to increase my misery? Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it. Remember, thou hast made me more powerful than thyself; my height is superior to thine; my joints more supple. But I will not be tempted to set myself in opposition to thee. I am thy creature, and I will be even mild and docile to my natural lord and king, if thou wilt also perform thy part, the which thou owest me. Oh, Frankenstein, be not equitable to every other, and trample upon me alone, to whom thy justice, and even thy clemency and affection, is most due. Remember, that I am thy creature; I ought to be thy Adam; but I am rather the fallen angel, whom thou drivest from joy for no misdeed. Every where I see bliss, from which I alone am irrevocably excluded. I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.”`,
      annotations: [
        {
          phrase: 'Begone, vile insect!',
          note: "Victor's imperatives and insults come in a rush of exclamations. Calling a being eight feet tall an “insect” is absurd, and the absurdity is the point: his words express disgust, not description. The man of reason is the one who has lost control of his language.",
        },
        {
          phrase: 'I expected this reception',
          note: "The Creature's first words to his maker are calm, even ironic. The contrast of register is the extract's most important effect. The reader has been told for nine chapters that this is a monster, and the first thing he shows is self-possession, while Victor raves.",
        },
        {
          phrase: 'All men hate the wretched',
          note: 'An aphorism, a general truth stated as law. The Creature argues from social observation rather than feeling alone, and turns “wretched” from an insult into a description of suffering. The hyperbole of “miserable beyond all living things” then makes him the extreme case that proves the rule.',
        },
        {
          phrase: 'my creator, detest and spurn me, thy creature',
          note: 'The pronouns shift from “you” to “thy” and “thou”, the forms used in prayer and in the Bible. The Creature addresses Victor as a worshipper might address God, and so makes the failure a theological one: a god who spurns his own creation.',
        },
        {
          phrase: 'I will glut the maw of death',
          note: 'The Creature is not only a victim. This is a conditional threat, and the Gothic image of death as a mouth to be filled with blood shows that he can speak the language of vengeance as fluently as the language of reason. A balanced answer quotes both sides of him.',
        },
        {
          phrase:
            'I am thy creature, and I will be even mild and docile to my natural lord and king',
          note: 'The language of a subject to a monarch, and of a covenant. The Creature offers obedience in return for care, which is the bargain of a feudal lord and his people, or of God and Adam. The condition, “if thou wilt also perform thy part”, puts the burden of duty on Victor.',
        },
        {
          phrase: 'I ought to be thy Adam; but I am rather the fallen angel',
          note: "The allusion to Milton's Paradise Lost sets up the novel's central comparison: the Creature should have been the beloved first man, but has been cast out like Satan. The phrase “for no misdeed” that follows is the sting, because Satan fell for his own rebellion and the Creature claims he fell for nothing.",
        },
        {
          phrase: 'I was benevolent and good; misery made me a fiend.',
          note: 'The balanced sentence, split by a semicolon into a before and an after, states the argument from nurture in miniature. Placed at the end of his speech, it works like the conclusion of a legal plea, and the following imperative, “Make me happy”, turns the argument into a demand.',
        },
      ],
      question:
        '(a) Explore how Shelley presents the relationship between Victor and the Creature in this extract. Refer closely to the language of the extract. (b) In this extract the Creature argues that misery has made him what he is. Explain the importance of suffering and rejection elsewhere in the novel.',
    },
    {
      title: "The Creature's farewell",
      where: "Chapter 24, Walton's final entry (1818: Volume III, Chapter VII)",
      pointer:
        "The last page of the novel: from the Creature's words “Fear not that I shall be the instrument of future mischief” to the final sentence, “lost in darkness and distance.”",
      text: `“Fear not that I shall be the instrument of future mischief. My work is nearly complete. Neither yours nor any man’s death is needed to consummate the series of my being, and accomplish that which must be done; but it requires my own. Do not think that I shall be slow to perform this sacrifice. I shall quit your vessel on the ice-raft which brought me thither, and shall seek the most northern extremity of the globe; I shall collect my funeral pile, and consume to ashes this miserable frame, that its remains may afford no light to any curious and unhallowed wretch, who would create such another as I have been. I shall die. I shall no longer feel the agonies which now consume me, or be the prey of feelings unsatisfied, yet unquenched. He is dead who called me into being; and when I shall be no more, the very remembrance of us both will speedily vanish. I shall no longer see the sun or stars, or feel the winds play on my cheeks. Light, feeling, and sense will pass away; and in this condition must I find my happiness. Some years ago, when the images which this world affords first opened upon me, when I felt the cheering warmth of summer, and heard the rustling of the leaves and the warbling of the birds, and these were all to me, I should have wept to die; now it is my only consolation. Polluted by crimes, and torn by the bitterest remorse, where can I find rest but in death?

“Farewell! I leave you, and in you the last of human kind whom these eyes will ever behold. Farewell, Frankenstein! If thou wert yet alive, and yet cherished a desire of revenge against me, it would be better satiated in my life than in my destruction. But it was not so; thou didst seek my extinction, that I might not cause greater wretchedness; and if yet, in some mode unknown to me, thou hadst not ceased to think and feel, thou wouldst not desire against me a vengeance greater than that which I feel. Blasted as thou wert, my agony was still superior to thine; for the bitter sting of remorse will not cease to rankle in my wounds until death shall close them for ever.

“But soon,” he cried, with sad and solemn enthusiasm, “I shall die, and what I now feel be no longer felt. Soon these burning miseries will be extinct. I shall ascend my funeral pile triumphantly, and exult in the agony of the torturing flames. The light of that conflagration will fade away; my ashes will be swept into the sea by the winds. My spirit will sleep in peace; or if it thinks, it will not surely think thus. Farewell.”

He sprung from the cabin-window, as he said this, upon the ice-raft which lay close to the vessel. He was soon borne away by the waves, and lost in darkness and distance.`,
      annotations: [
        {
          phrase: 'Fear not that I shall be the instrument of future mischief',
          note: 'The Creature begins by reassuring Walton, the last human being he will speak to. The formal, almost biblical “Fear not” is the phrase angels use when they appear to people in the King James Bible (Luke 1 and 2, for example), and it gives the monster of the story the last calm, dignified voice in the book.',
        },
        {
          phrase: 'consummate the series of my being',
          note: "He speaks of his own life as a “series” to be completed, the language of a work or a proof. It echoes Victor's view of him as a project, and suggests that he has come to see himself as Victor saw him. The word “consummate” also means to perfect, so his death is imagined as the only perfection open to him.",
        },
        {
          phrase: 'that its remains may afford no light to any curious and unhallowed wretch',
          note: "The fire will destroy the evidence so that no one can repeat Victor's experiment. “Unhallowed” is the word Victor used of his own work in Chapter 4, and “wretch”, once Victor's word for the Creature, is now the Creature's word for a scientist. The novel's language of blame has been turned round.",
        },
        {
          phrase: 'the warbling of the birds',
          note: 'The memory of his first days in the forest, told in Chapter 11, returns as a list of simple sensations: warmth, leaves, birdsong. The 1818 text reads “chirping” here; 1831 has “warbling”. Either way, what he mourns is the innocent life of the senses, the kind of natural innocence Romantic writers prized, which he had before rejection taught him misery.',
        },
        {
          phrase: 'my agony was still superior to thine',
          note: 'Even in grief he competes with Victor, measuring suffering against suffering. The pairing of creator and creature continues past death, and the claim invites a judgement from the reader: is he right, and does it matter who suffered more?',
        },
        {
          phrase: 'I shall ascend my funeral pile triumphantly',
          note: "Fire, the gift of Prometheus, which delighted the Creature when he found the beggars' fire in Chapter 11, returns as the means of his end. He describes his intended death plainly, as a sacrifice and a release rather than a punishment, and the word “triumphantly” claims a victory the rest of the passage denies.",
        },
        {
          phrase: 'lost in darkness and distance',
          note: 'The final sentence denies the reader a death scene. The Creature is last seen alive, receding. The alliteration of “darkness and distance” gives the novel a dying fall, and the open ending leaves his fate, and the verdict on him, to the reader.',
        },
      ],
      question:
        'Discuss the view that the Creature, not Victor, is given the final moral authority in Frankenstein. In your answer, consider this passage and the ending of the novel as a whole, and refer to other readings of the Creature where relevant.',
    },
  ],

  structureForm: [
    {
      heading: 'A story inside a story inside a story',
      body: "Frankenstein is a frame narrative with three narrators, each nested inside the last. Walton's letters to his sister, Margaret Saville, open and close the novel: Letters 1 to 4, and the dated journal entries that follow the heading “Walton, in continuation” late in Chapter 24. Inside them Victor tells Walton his life (Chapters 1 to 10 and 17 to 24). At the centre, in Chapters 11 to 16, Victor repeats the story the Creature told him in the hut on the mountain, and inside that the Creature retells the history of the De Laceys, adding that he has “copies of these letters”, the ones Safie wrote to Felix (Chapter 14), as proof. The structure puts the Creature's voice, the one every other character refuses to hear, at the physical heart of the book, so the reader hears him out before Victor can argue him away. Yet it reaches us at third hand, remembered by Victor and written down by Walton. Every word the Creature says has passed through the man who most wants him condemned.",
    },
    {
      heading: 'Letters, dates and evidence',
      body: "The epistolary opening gives a fantastic story the feel of a document. Walton dates his letters from St Petersburgh in December, from Archangel in March, from the voyage in July and from the ice in August, with the year left blank as “17—”, as if names and dates had been withheld from a true account. The novel keeps producing evidence of this kind: letters from Elizabeth and from Victor's father, the papers the Creature finds “in the pocket of the dress which I had taken from your laboratory”, dress here meaning clothes (“your journal of the four months that preceded my creation”, Chapter 15), and Safie's letters. Most revealing of all, Walton admits in Chapter 24 that Victor asked to see his notes and “corrected and augmented them in many places”, chiefly, Walton adds, in the conversations Victor “held with his enemy”. The narrator whose judgement the reader most needs to question has edited his own record, and the Creature's speeches reach us retouched by the man they accuse. A strong answer can use this to argue that Victor's narrative is also a defence speech.",
    },
    {
      heading: 'Hindsight, foreshadowing and fate',
      body: "Victor narrates after everything has happened, so he knows the ending while he tells the beginning. He foreshadows constantly: his mother's death is “an omen, as it were, of my future misery” (Chapter 3). In the 1831 text he goes further. At the end of Chapter 2, describing how a brief turn away from natural philosophy came to nothing, he says “Destiny was too potent”, a sentence the 1818 text does not contain. One reading is that the revised novel is simply more fatalistic; in her 1831 Introduction Shelley looks back on the book as “the offspring of happy days, when death and grief were but words”. The more useful reading for an exam treats the language of destiny as part of Victor's character: a man who blames fate is a man avoiding blame. Hindsight also shapes what he remembers. The Creature says “I shall be with you on your wedding-night” (Chapter 20). Victor recalls it twice as “I will be with you”, once later in Chapter 20 and once in Chapter 22, before repeating it correctly later in Chapter 22, and each time he reads it, fatally, as a threat to himself. Quote the Creature's own words, “I shall”, in an exam.",
    },
    {
      heading: 'Doubles and reversals',
      body: "The structure is built on mirrors. Walton, alone at the edge of the known world, wants a friend and wants glory, which is Victor's story before it went wrong; Victor says so in Letter 4 (“You seek for knowledge and wisdom, as I once did”). Victor and the Creature mirror each other too: both are shaped by what they read, both are made solitary, both swear revenge, and both end in the Arctic. In Chapter 24 the chase is steered by the one being chased: the Creature leaves messages written on the bark of trees or cut in stone to lead Victor on, one of which reads “My reign is not yet over”, so the pursuer is in truth the one being led. The pattern supports the reading that creator and creation are less opposites than versions of one another. It is worth testing, though: the Creature's last speech is full of remorse, while Victor, dying, renews his request that Walton should “undertake my unfinished work” of destroying him, so the mirror is not exact.",
    },
    {
      heading: 'A circular journey with an open ending',
      body: "The novel begins and ends in the Arctic ice, so Victor's story is enclosed by a voyage that threatens to repeat it. The ending answers the opening. Walton's crew, afraid of being crushed in the ice, demand that if the ship is freed he will turn south; Victor, weak and close to death, rouses himself to urge them on, asking whether they did not “call this a glorious expedition”. On 7 September Walton gives way: “The die is cast; I have consented to return, if we are not destroyed.” He turns back where Victor would not (“Do so, if you will; but I will not”), and whether that is wisdom or failure the novel leaves open, since Walton himself writes that his hopes are “blasted by cowardice and indecision” without saying whether the cowardice is his crew's or his own. The very last sentence leaves the Creature “lost in darkness and distance”, alive when we last see him. His death is promised, never shown, so the book closes on uncertainty rather than on a body.",
    },
    {
      heading: 'Two editions, two sets of chapter numbers',
      body: "The novel exists in two main versions, and editions in print follow one or the other. The 1818 first edition came out anonymously in three volumes of seven, nine and seven chapters, each volume numbering its chapters from I. The revised 1831 edition, published in one volume, numbers its chapters 1 to 24 in one sequence. It has one chapter more than 1818 because the first chapter, heavily rewritten, is divided into two, and it adds Shelley's Introduction, dated 15 October 1831, on how the story began. To convert: 1831 Chapters 1 and 2 are 1818 Volume I, Chapter I; Chapters 3 to 8 are Volume I, Chapters II to VII; Chapters 9 to 17 are Volume II, Chapters I to IX; and Chapters 18 to 24 are Volume III, Chapters I to VII. So the creation scene is Chapter 5 in 1831 and Volume I, Chapter IV in 1818. The wording changes too. In 1818 Elizabeth is Victor's cousin, the daughter of his father's sister; in 1831 she is an orphan whom Victor's mother finds with a poor peasant family by the Lake of Como and brings home. The 1831 text keeps the old word, explaining in Chapter 1 that “We called each other familiarly by the name of cousin”, and her letters still call Alphonse “My uncle”. Check which text your copy prints before you give a chapter number in an exam.",
    },
    {
      heading: 'Speeches, trials and the reader as jury',
      body: "The action repeatedly stops for long, formal speeches: the Creature's plea on the glacier (Chapter 10), his demand for a companion (the end of Chapter 16 and Chapter 17), Victor's address to Walton's sailors and the Creature's farewell (Chapter 24). They are built like pleading in court, and the Creature says so, reminding Victor that “The guilty are allowed, by human laws, bloody as they are, to speak in their own defence before they are condemned” (Chapter 10; the 1818 text reads “bloody as they may be”). Real trials make the pattern literal: Justine's in Chapter 8, where the innocent woman is condemned, and Victor's examination before the magistrate Mr Kirwin in Chapter 21, where the man who is, in a sense, guilty goes free when the grand jury rejects the case. The effect is to make the reader the jury. The novel keeps asking who is to blame, and its structure hands the verdict to us rather than delivering one.",
    },
    {
      heading: 'Gothic form with a scientific core',
      body: "Frankenstein uses the machinery of the Gothic novel: a forbidden secret, graveyards and charnel-houses, a pursuing double, storms at moments of crisis (lightning plays over Mont Blanc on the night Victor returns after William's murder, Chapter 7) and a wedding night that ends in murder. But the source of horror is not a ghost or a curse. It is an experiment. Tellingly, Victor refuses to tell Walton how he did it (“that cannot be”, Chapter 4), so the horror lies in the consequences rather than the method. This blend of Gothic terror with a scientific premise is why the novel is often discussed as an early work of science fiction. The 1818 first edition adds a frame of its own: an epigraph on the title page from Book 10 of Paradise Lost, Adam asking “Did I request thee, Maker, from my clay / To mould me man?”, and a dedication to Shelley's father, William Godwin. Before the story begins, a created being is already questioning his creator.",
    },
  ],

  vocabulary: [
    {
      term: 'Dæmon',
      definition:
        "The spelling the novel uses for one of Victor's names for the Creature. It comes from the Greek daimon, a spirit or lesser divinity that was not necessarily evil; Christian usage later gave the word its sense of a devil, and that is plainly what Victor means by it. Walton first reports it as Victor's word in Letter 4 (“the dæmon, as he called him”), and it tells the reader more about Victor's fear than about the Creature.",
    },
    {
      term: 'Wretch',
      definition:
        'Either a miserable, unfortunate person or a despised, worthless one. Shelley uses both senses: moments after the creation Victor asks how he can “delineate the wretch” he has made (Chapter 5), and the Creature, pleading, says “All men hate the wretched” (Chapter 10).',
    },
    {
      term: 'Fiend',
      definition:
        'A devil or evil spirit, and by extension a cruel person. Victor uses it of the Creature throughout; the Creature uses it of himself, in “misery made me a fiend” (Chapter 10).',
    },
    {
      term: 'Natural philosophy',
      definition:
        'The older name for the study of nature, the forerunner of physics and chemistry. Victor calls it “the genius that has regulated my fate” (Chapter 2).',
    },
    {
      term: 'Alchemy',
      definition:
        "The medieval and Renaissance forerunner of chemistry, which sought to turn base metals into gold and to find a medicine that would give endless life. As a boy Victor reads the old writers on alchemy and the occult, Cornelius Agrippa, Paracelsus and Albertus Magnus, and enters on “the search of the philosopher's stone and the elixir of life” (Chapter 2). In Chapter 3 M. Waldman dismisses such teachers as men who “promised impossibilities, and performed nothing”.",
    },
    {
      term: 'Galvanism',
      definition:
        "Electricity produced by chemical action, named by Alessandro Volta after the Italian physician Luigi Galvani (1737 to 1798), who made the muscles of dead frogs twitch and published his findings in 1791. In the 1831 text Victor hears a theory of “electricity and galvanism” after lightning destroys an oak tree (Chapter 2), and Shelley's 1831 Introduction says that “galvanism had given token of such things”.",
    },
    {
      term: 'Charnel-house',
      definition:
        'A building or vault where the bones of the dead are kept. Victor collects bones “from charnel-houses” (Chapter 4).',
    },
    {
      term: 'Unhallowed',
      definition:
        'Unholy; not made sacred, or against what is sacred. Victor works among “the unhallowed damps of the grave” (Chapter 4), and the Creature uses the same word of any future scientist in his farewell (Chapter 24).',
    },
    {
      term: 'Ardour',
      definition:
        'Passionate eagerness. Victor works “with unremitting ardour” (Chapter 4) and admits in Chapter 5 that he had desired success “with an ardour that far exceeded moderation”.',
    },
    {
      term: 'Countenance',
      definition:
        'A face, or the expression on it. When the Creature approaches on the glacier, Victor sees that “his countenance bespoke bitter anguish, combined with disdain and malignity” (Chapter 10).',
    },
    {
      term: 'Benevolent',
      definition:
        "Kind; wishing good to others. The Creature's claim “I was benevolent and good” (Chapter 10) is the foundation of his case against Victor.",
    },
    {
      term: 'Abhorred',
      definition:
        'Hated with disgust. Victor cries “Abhorred monster!” on the glacier, and the Creature turns the word back on him: “You, my creator, abhor me” (Chapter 10).',
    },
    {
      term: 'Consummate',
      definition:
        'To complete or bring to perfection. The Creature says no death but his own is needed “to consummate the series of my being” (Chapter 24).',
    },
    {
      term: 'The sublime',
      definition:
        "In eighteenth-century aesthetics, and especially in Edmund Burke's A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful (1757), the feeling of awe mixed with terror produced by vastness and power. The Alpine chapters are built on it: Victor finds the “sublime and magnificent scenes” around Chamounix a consolation (Chapter 10).",
    },
    {
      term: 'Gothic',
      definition:
        'A kind of fiction concerned with terror, transgression and the uncanny, often set among ruins, graves and wild landscapes. Frankenstein keeps the Gothic mood but replaces the ghost with an experiment.',
    },
    {
      term: 'Epistolary',
      definition:
        "Written in the form of letters. The novel's frame is epistolary: Walton's letters and journal entries to his sister in England.",
    },
    {
      term: 'Frame narrative',
      definition:
        "A story told inside another story. Walton's letters frame Victor's narrative, which frames the Creature's, which in turn contains the history of the De Laceys.",
    },
    {
      term: 'Prometheus',
      definition:
        'In Greek myth, the Titan who stole fire from Zeus and gave it to humanity. As punishment he was bound to a rock, placed by some accounts in the Caucasus mountains, where an eagle ate his liver, which grew back each night. In several versions of the myth he also shaped the first humans from clay. Both stories, the fire-giver and the maker of people, lie behind the subtitle, The Modern Prometheus.',
    },
    {
      term: 'Hubris',
      definition:
        "Excessive pride that leads a person to overstep human limits, and in Greek tragedy brings about their downfall. Victor's ambition to be the “creator and source” of a new species (Chapter 4) is often discussed as hubris.",
    },
    {
      term: 'Pathetic fallacy',
      definition:
        "Giving human feelings to nature, so that weather or landscape seems to share a character's mood. The term was coined by John Ruskin in the third volume of Modern Painters (1856), long after Frankenstein was written, but the device is everywhere in it, as when “the rain pattered dismally against the panes” on the night of the creation (Chapter 5).",
    },
    {
      term: 'Double (Doppelgänger)',
      definition:
        'A character who mirrors or shadows another. Victor and the Creature, and Victor and Walton, are often read as doubles.',
    },
    {
      term: 'Paradise Lost',
      definition:
        "John Milton's epic poem, first published in ten books in 1667 and rearranged into twelve in 1674 (the numbering modern editions use), retelling Satan's rebellion and the Fall of Adam and Eve. The Creature reads it “as a true history” (Chapter 15) and compares himself both to Adam and to Satan.",
    },
    {
      term: "Plutarch's Lives and the Sorrows of Werter",
      definition:
        "The Creature's other two books (Chapter 15): Plutarch's biographies of famous Greeks and Romans, which he says taught him “high thoughts”, and Goethe's novel The Sorrows of Young Werther (1774), in its old English title, the story of a young man's despair, from which he learned “despondency and gloom”.",
    },
  ],

  timeline: [
    {
      where: 'Letters 1-3',
      title: 'Walton sets out for the Pole',
      summary:
        'Robert Walton writes to his sister, Margaret Saville, in England, first from St Petersburgh and then from Archangel, as he prepares a voyage towards the North Pole. He dreams of discovery and glory, and tells her that he has no friend to share them.',
      setting: 'St Petersburgh and Archangel, in Russia, then the northern sea',
      who: ['Robert Walton'],
      quote:
        'I shall satiate my ardent curiosity with the sight of a part of the world never before visited',
      themes: ['Ambition and hubris', 'Isolation and loneliness'],
      tension: 1,
      significance:
        "Walton's hunger for knowledge and glory is Victor's before it went wrong, so the novel opens on a warning waiting to be heard.",
    },
    {
      where: 'Letter 4',
      title: 'The stranger on the ice',
      summary:
        'With the ship closed in by ice, the crew see a gigantic figure drive a dog-sledge north. Next morning they take aboard a second traveller, his limbs nearly frozen, from a sledge on a drifting fragment of ice. He soon asks which way the first went, and in time decides to tell Walton his story.',
      setting: "Walton's ship, trapped in the Arctic ice",
      who: ['Robert Walton', 'Victor Frankenstein', 'The Creature'],
      quote: 'You seek for knowledge and wisdom, as I once did',
      themes: ['Ambition and hubris'],
      tension: 3,
      significance:
        'Victor tells his life as a cautionary tale, so everything that follows is offered to Walton, and to the reader, as a lesson.',
    },
    {
      where: 'Chapters 1-3',
      title: 'A Geneva childhood and a fatal subject',
      summary:
        'Victor grows up in a loving Genevese family with Elizabeth Lavenza, taken in as a child, and his friend Henry Clerval. At thirteen he discovers Cornelius Agrippa, whom his father dismisses without explaining why. His mother dies of scarlet fever caught nursing Elizabeth, and at seventeen he leaves for the university of Ingolstadt, where a lecture by M. Waldman fires his ambition.',
      setting: 'Geneva and the family house at Belrive, then Ingolstadt',
      who: ['Victor Frankenstein', 'Elizabeth Lavenza', 'Henry Clerval', 'Alphonse Frankenstein'],
      quote: 'Natural philosophy is the genius that has regulated my fate',
      themes: ['Science and ethics', 'Ambition and hubris'],
      tension: 2,
      significance:
        'Victor traces his ruin to these years, and a reader can weigh how far he blames chance, his father and destiny rather than himself.',
    },
    {
      where: 'Chapter 4',
      title: 'The secret toil',
      summary:
        'Victor discovers, he says, the cause of life, and resolves to build a human being about eight feet tall. He works alone for months, collecting bones from charnel-houses and materials from the dissecting room and slaughter-house, blind to the summer and to the friends and family whom he knows his silence is worrying.',
      setting: 'A solitary room at the top of a house in Ingolstadt',
      who: ['Victor Frankenstein'],
      quote:
        'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge',
      themes: ['Science and ethics', 'Ambition and hubris', 'Isolation and loneliness'],
      tension: 3,
      significance:
        'The chapter shows the cost of ambition before the experiment succeeds: Victor sacrifices every human tie to it.',
    },
    {
      where: 'Chapter 5',
      title: 'The creation, and the flight',
      summary:
        'On a dreary November night the Creature opens a dull yellow eye. Victor, horrified by what he has made, runs from the room, then wakes to find the Creature at his bedside, one hand stretched out, and flees again. Next morning Henry Clerval arrives, and Victor collapses into a nervous fever that lasts for months.',
      setting: "Victor's rooms in Ingolstadt, at one in the morning",
      who: ['Victor Frankenstein', 'The Creature', 'Henry Clerval'],
      quote: 'breathless horror and disgust filled my heart',
      themes: ['Creation and responsibility', 'Science and ethics'],
      tension: 5,
      significance:
        "The novel's turning point: every later death follows from Victor's refusal, here, to care for the being he has made.",
    },
    {
      where: 'Chapters 6-8',
      title: "William's murder and Justine's trial",
      summary:
        "A letter tells Victor that his youngest brother, William, has been found dead with the mark of a murderer's finger on his neck. Returning to Geneva, Victor glimpses the Creature in a storm and knows the truth, but says nothing. Justine Moritz, a servant the family loves, is accused when the portrait of Victor's mother is found in her pocket. She is condemned at her trial and executed, having confessed falsely under pressure from her confessor.",
      setting: 'Plainpalais, near Geneva, then the court and prison in Geneva',
      who: [
        'Victor Frankenstein',
        'William Frankenstein',
        'Justine Moritz',
        'Elizabeth Lavenza',
        'Alphonse Frankenstein',
        'The Creature',
      ],
      quote: 'I almost began to think that I was the monster that he said I was',
      themes: ['Creation and responsibility', 'Nature versus nurture'],
      tension: 4,
      significance:
        "An innocent woman dies for the Creature's crime and Victor's silence, and her words about being called a monster anticipate the Creature's whole story.",
    },
    {
      where: 'Chapters 9-10',
      title: 'The meeting on the glacier',
      summary:
        'Sunk in grief and guilt, Victor escapes to the Alps and climbs to Montanvert above the sea of ice. The Creature bounds towards him across the glacier. Victor curses him, but the Creature, calm and eloquent, asks to be heard before he is judged, and leads him to a hut on the mountain to tell his tale.',
      setting: 'The glacier below Montanvert, near Chamounix and Mont Blanc',
      who: ['Victor Frankenstein', 'The Creature'],
      quote: 'I ought to be thy Adam; but I am rather the fallen angel',
      themes: ['Creation and responsibility', 'Nature versus nurture', 'Isolation and loneliness'],
      tension: 4,
      significance:
        'The Creature speaks for the first time, and his reasoning voice overturns everything Victor has told us about him.',
    },
    {
      where: 'Chapters 11-14',
      title: 'Learning to be human',
      summary:
        'The Creature describes his first confused sensations in the forest near Ingolstadt, finding a fire left by beggars, and being driven from a village with stones. Hiding in a hovel against a cottage, he watches the De Laceys, blind old De Lacey, Felix and Agatha, gathers firewood for them at night, and learns to speak and read as Felix teaches the newly arrived Safie.',
      setting: "A hovel against the wall of the De Laceys' cottage",
      who: ['The Creature', 'The De Lacey family', 'Safie'],
      quote:
        'Was I then a monster, a blot upon the earth, from which all men fled, and whom all men disowned?',
      themes: ['Nature versus nurture', 'Isolation and loneliness'],
      tension: 2,
      significance:
        "At the centre of the novel the Creature's education shows him gentle and generous, which makes the rejection to come a test of the reader as much as of him.",
    },
    {
      where: 'Chapter 15',
      title: 'Three books and a rejection',
      summary:
        "The Creature finds Paradise Lost, Plutarch's Lives and the Sorrows of Werter, and reads Victor's journal of his making, found “in the pocket of the dress which I had taken from your laboratory”. He reveals himself to the blind De Lacey, who treats him kindly, until Felix, Safie and Agatha come in and Felix beats him away with a stick.",
      setting: "The De Laceys' cottage",
      who: ['The Creature', 'The De Lacey family', 'Safie'],
      quote: 'Hateful day when I received life!',
      themes: ['Isolation and loneliness', 'Creation and responsibility', 'Nature versus nurture'],
      tension: 4,
      significance:
        'The hope of acceptance is raised as high as it goes and then destroyed, and the Creature now knows exactly who made him and how.',
    },
    {
      where: 'Chapter 16',
      title: 'War on humankind',
      summary:
        'The De Laceys abandon the cottage and the Creature burns it. On his way to Geneva he saves a young girl from a river and is shot by a countryman, probably the companion she had been running from in play. Near Geneva he meets William, kills him on learning that he is a Frankenstein, and places the portrait in the dress of Justine, asleep in a barn.',
      setting: 'The burning cottage, then the countryside near Geneva',
      who: ['The Creature', 'William Frankenstein', 'Justine Moritz'],
      quote: 'Cursed, cursed creator! Why did I live?',
      themes: ['Nature versus nurture', 'Creation and responsibility'],
      tension: 5,
      significance:
        'The Creature crosses into violence, and the novel asks the reader to hold his suffering and his guilt in view at the same time.',
    },
    {
      where: 'Chapter 17',
      title: 'The demand for a companion',
      summary:
        'Repeating the demand that closes Chapter 16, the Creature insists that Victor make him a female companion, promising that the two of them will go to the vast wilds of South America and never be seen again. Victor refuses in anger, is slowly moved by the argument, and at last consents.',
      setting: 'The hut on the mountain above the glacier',
      who: ['Victor Frankenstein', 'The Creature'],
      quote: 'If I cannot inspire love, I will cause fear',
      themes: ['Isolation and loneliness', 'Creation and responsibility'],
      tension: 3,
      significance:
        "Victor accepts a creator's duty for the first time, and the rest of the novel turns on whether he keeps his word.",
    },
    {
      where: 'Chapters 18-20',
      title: 'The second creation destroyed',
      summary:
        'After months of delay Victor travels through England and Scotland with Clerval, then works alone on one of the remotest of the Orkneys. Fearing that the female might reject her mate, or that the pair might have children, he tears her to pieces as the Creature watches at the window. The Creature swears revenge, and Victor sinks the remains at sea.',
      setting: 'A bare island in the Orkneys, by moonlight',
      who: ['Victor Frankenstein', 'The Creature', 'Henry Clerval'],
      quote: 'I shall be with you on your wedding-night',
      themes: ['Creation and responsibility', 'Science and ethics'],
      tension: 5,
      significance:
        "Victor's refusal is arguably both his most responsible act and his most destructive one, which is why it divides readers.",
    },
    {
      where: 'Chapter 21',
      title: "Clerval's murder",
      summary:
        "Led before a magistrate as soon as he lands in Ireland at the end of Chapter 20, Victor is examined by Mr Kirwin about a man found murdered the night before. The body is Henry Clerval's, with the black mark of fingers on his neck. Victor lies for two months on the point of death and is freed only when the grand jury hears proof that he was in the Orkneys at the time.",
      setting: 'A town on the Irish coast, and its prison',
      who: ['Victor Frankenstein', 'Henry Clerval', 'Alphonse Frankenstein'],
      quote: 'the lifeless form of Henry Clerval stretched before me',
      themes: ['Isolation and loneliness', 'Creation and responsibility'],
      tension: 4,
      significance:
        "The Creature's revenge strikes the friend who stood for everything warm in Victor's life, and Victor begins to call himself the murderer.",
    },
    {
      where: 'Chapters 22-23',
      title: 'The wedding night',
      summary:
        'Victor marries Elizabeth, sure that the Creature means to kill him, and the couple sail to Evian for the night. While he searches the passages of the inn for his enemy, Elizabeth is murdered in their room. His father dies of grief days later, and Victor, held for months as mad, finds a magistrate who listens but will not act.',
      setting: 'An inn at Evian, reached by boat along the lake, then Geneva',
      who: ['Victor Frankenstein', 'Elizabeth Lavenza', 'The Creature', 'Alphonse Frankenstein'],
      quote: 'The murderous mark of the fiend’s grasp was on her neck',
      themes: ['Creation and responsibility', 'Isolation and loneliness'],
      tension: 5,
      significance:
        'Victor read the threat as aimed at himself, and his self-absorption cost Elizabeth her life.',
    },
    {
      where: 'Chapter 24',
      title: "The pursuit north, and Victor's death",
      summary:
        "Victor swears vengeance at his family's tomb and follows the Creature along the Rhone to the Mediterranean, by ship towards the Black Sea, and through the wilds of Tartary and Russia to the frozen ocean, led on by messages the Creature leaves him. His story told, he urges Walton's crew to press on, but Walton agrees to turn back, and Victor dies.",
      setting: "The frozen sea, then Walton's ship",
      who: ['Victor Frankenstein', 'The Creature', 'Robert Walton'],
      quote: 'Seek happiness in tranquillity, and avoid ambition',
      themes: ['Ambition and hubris', 'Isolation and loneliness'],
      tension: 4,
      significance:
        "Victor's last advice is a warning against ambition, yet in the same breath he says another may succeed where he failed, so the lesson stays divided.",
    },
    {
      where: "Chapter 24, the Creature's farewell",
      title: "The Creature over Victor's body",
      summary:
        "Walton finds the Creature hanging over Victor's body in the cabin. The Creature grieves, confesses his crimes and his misery, says he will destroy himself on a funeral pile at the northern extremity of the globe, and leaps from the cabin window onto an ice-raft.",
      setting: "Walton's cabin, then the dark ice outside",
      who: ['The Creature', 'Robert Walton', 'Victor Frankenstein'],
      quote:
        'I was the slave, not the master, of an impulse, which I detested, yet could not disobey',
      themes: ['Creation and responsibility', 'Isolation and loneliness', 'Nature versus nurture'],
      tension: 3,
      significance:
        "The last speech in the novel is the Creature's, and the last image leaves him alive, so the question of who is the monster is handed to the reader.",
    },
  ],

  relationships: [
    {
      from: 'Victor Frankenstein',
      to: 'The Creature',
      kind: 'creator and creation',
      note: 'Victor abandons the Creature at birth, and the Creature spends the novel demanding the care he was owed, first by argument and then by murder. By Chapter 24 Victor is the hunter, yet the Creature sets the course of the chase, and each has come to live only for the other. On the glacier Victor admits that he felt for the first time “what the duties of a creator towards his creature were” (Chapter 10), and on his deathbed he still insists he “did right in refusing” to make the companion.',
    },
    {
      from: 'Victor Frankenstein',
      to: 'Robert Walton',
      kind: 'doubles; storyteller and listener',
      note: "Walton is Victor before the fall: ambitious, lonely, hungry for glory. Victor tells him his story as a warning, edits Walton's notes of it, and urges his crew to go on; Walton turns back.",
    },
    {
      from: 'Victor Frankenstein',
      to: 'Elizabeth Lavenza',
      kind: 'adopted sister, then wife',
      note: 'Given to Victor as a child as “a pretty present” (Chapter 1 of the 1831 text), she is loved as a possession to protect, and she is the person he fails to protect. In the 1818 text she is his cousin rather than a foundling.',
    },
    {
      from: 'Victor Frankenstein',
      to: 'Henry Clerval',
      kind: 'closest friends',
      note: 'Clerval nurses Victor through his fever after the creation and travels with him to Scotland. He stands for the warmth and curiosity about people that Victor gave up, and the Creature kills him in revenge for the destroyed female.',
    },
    {
      from: 'The Creature',
      to: 'The De Lacey family',
      kind: 'secret helper and rejected neighbour',
      note: "He learns language, feeling and history by watching them, and helps them in secret. Only the blind father receives him kindly. Felix's violence ends the Creature's hope of joining human society.",
    },
    {
      from: 'The Creature',
      to: 'William Frankenstein',
      kind: 'murderer and child victim',
      note: "The Creature hopes the child is too young to have learned prejudice, but William shrinks from him and names his father. Killing him is the Creature's first act of revenge on his creator's family.",
    },
    {
      from: 'Justine Moritz',
      to: 'Victor Frankenstein',
      kind: 'wrongly condemned servant and silent witness',
      note: "Victor knows Justine is innocent and says nothing, fearing he will be thought mad. The Creature framed her, but Victor's silence lets the verdict stand: hers is the first death he might have spoken against and did not.",
    },
    {
      from: 'Alphonse Frankenstein',
      to: 'Victor Frankenstein',
      kind: 'father and son',
      note: "A loving but distant guide: he dismisses Agrippa as “sad trash” without explaining why, a failure Victor blames for his path. He dies of grief after Elizabeth's murder, a father outliving his hopes for his children.",
    },
    {
      from: 'The Creature',
      to: 'Robert Walton',
      kind: 'confessor and last listener',
      note: "Walton is the last person to hear the Creature speak. He is “at first touched” by his misery, then remembers Victor's warnings about his eloquence and turns on him, and the Creature's final speech is addressed to him, which makes Walton the novel's last judge.",
    },
  ],

  compareWith: [
    {
      title: 'The Strange Case of Dr Jekyll and Mr Hyde',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        "Another nineteenth-century novel on the same GCSE lists in which a scientist's experiment creates a double he cannot control, and a nested structure of documents that delays the truth.",
    },
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        'A novel with Gothic elements on the same GCSE lists about an orphaned outsider, mistreated as a child, who claims the right to be treated as an equal, which makes a sharp comparison with the Creature.',
    },
    {
      title: 'The War of the Worlds',
      href: '/revision/texts/the-war-of-the-worlds',
      reason:
        'The other pre-1900 novel in the Pearson Edexcel A-level prose theme Science and Society, where students study two texts from the theme, at least one of them pre-1900: another first-person witness to a catastrophe that humbles human pride.',
    },
    {
      title: 'Never Let Me Go',
      href: '/revision/texts/never-let-me-go',
      reason:
        "A post-1900 novel in the same Pearson Edexcel A-level Science and Society theme, about people made to serve others whose humanity their society refuses to grant, the Creature's complaint retold.",
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'discrimination',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: [
    // The 1818 title-page epigraph, which the 1831 edition does not print.
    'Did I request thee, Maker, from my clay / To mould me man?',
    // The 1818 wording in Chapter 10, quoted beside the 1831 one.
    'bloody as they may be',
  ],

  sources: [
    {
      label:
        'Project Gutenberg eBook #42324, Frankenstein, transcribed from a photo-reprint of the 1831 edition (the text of every extract and quotation, and of the 1831 Introduction)',
      url: 'https://www.gutenberg.org/ebooks/42324',
    },
    {
      label:
        'Project Gutenberg eBook #41445, Frankenstein, transcribed from a photo-reprint of the 1818 edition (volume and chapter numbering, the title-page epigraph and dedication, and every 1818 wording difference noted)',
      url: 'https://www.gutenberg.org/ebooks/41445',
    },
    {
      label:
        'Project Gutenberg eBook #84, Frankenstein, an 1831-based text with modernised punctuation (third check of each quotation)',
      url: 'https://www.gutenberg.org/ebooks/84',
    },
    {
      label:
        "Project Gutenberg eBook #26, Paradise Lost, twelve-book text (the 1818 epigraph is Adam's lament in Book X)",
      url: 'https://www.gutenberg.org/ebooks/26',
    },
    {
      label:
        'Wikipedia, Frankenstein (first published 1 January 1818, anonymously, by Lackington, Hughes, Harding, Mavor & Jones in three volumes; the revised one-volume edition of 1831 by Henry Colburn and Richard Bentley with a new introduction; dedication to William Godwin, her father; Brian Aldiss on the novel as early science fiction). Publisher names were also read on the title pages in eBooks #41445 and #42324, and the Godwin dedication in #41445 (the 1831 text in #42324 does not carry it)',
      url: 'https://en.wikipedia.org/wiki/Frankenstein',
    },
    {
      label:
        'Wikipedia, Luigi Galvani (9 September 1737 to 4 December 1798; dead frogs\' leg muscles twitching; De viribus electricitatis in motu musculari commentarius, 1791; Volta coined "galvanism" for current produced by chemical action), cross-checked against Wikipedia, Galvanism',
      url: 'https://en.wikipedia.org/wiki/Luigi_Galvani',
    },
    {
      label:
        'Wikipedia, Prometheus (fire stolen from Zeus; in several versions the maker of humanity from clay; bound to a rock, placed by some in the Caucasus, the eagle and the liver that grew back overnight)',
      url: 'https://en.wikipedia.org/wiki/Prometheus',
    },
    {
      label:
        'Wikipedia, Pathetic fallacy (coined by John Ruskin in the third volume of Modern Painters, 1856)',
      url: 'https://en.wikipedia.org/wiki/Pathetic_fallacy',
    },
    {
      label:
        'Wikipedia, A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful (Edmund Burke, 1757; the sublime as fear, vastness and power)',
      url: 'https://en.wikipedia.org/wiki/A_Philosophical_Enquiry_into_the_Origin_of_Our_Ideas_of_the_Sublime_and_Beautiful',
    },
    {
      label:
        'Wikipedia, Paradise Lost (ten books in 1667; twelve books in the second edition of 1674)',
      url: 'https://en.wikipedia.org/wiki/Paradise_Lost',
    },
    {
      label: 'Wikipedia, The Sorrows of Young Werther (Goethe, 1774)',
      url: 'https://en.wikipedia.org/wiki/The_Sorrows_of_Young_Werther',
    },
    {
      label:
        'Project Gutenberg eBook #10, the King James Bible (the angels\' "Fear not" at Luke 1:13, 1:30 and 2:10)',
      url: 'https://www.gutenberg.org/ebooks/10',
    },
    {
      label:
        'Online Etymology Dictionary, demon (the Greek daimon as a lesser divinity or guiding spirit; the evil sense from Christian usage)',
      url: 'https://www.etymonline.com/word/demon',
    },
    {
      label:
        "Pearson Edexcel Level 3 Advanced GCE in English Literature (9ET0) specification, Issue 11, August 2025, Component 2 Prose: the theme Science and Society (Frankenstein and The War of the Worlds pre-1900; The Handmaid's Tale and Never Let Me Go post-1900), read 25 September 2026",
      url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/English%20Literature/2015/Specification%20and%20sample%20assessments/gce2015-a-level-eng-lit-spec.pdf',
    },
    {
      label:
        'Board placement for Jekyll and Hyde and Jane Eyre in compareWith: AQA 8702 and Pearson Edexcel 1ET0 nineteenth-century lists as recorded in src/lib/board/prescribed-texts.ts (read 19 September 2026)',
    },
  ],
}
