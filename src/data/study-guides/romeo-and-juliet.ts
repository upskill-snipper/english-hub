import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Romeo and Juliet, William Shakespeare. A SUPPLEMENT to the existing guide at
 * /revision/texts/romeo-and-juliet, which already carries the overview,
 * context, themes, characters, quotations, act-by-act language notes, essay
 * plans and a model paragraph. This file adds what that page lacked: close
 * reading of printed extracts and a vocabulary, plus the timeline and
 * character map the animated visuals are drawn from.
 *
 * Every quotation, extract and phrase quoted in prose was copied from the byte
 * copy of Project Gutenberg #1513 held at src/data/full-texts/romeo-and-juliet.ts,
 * and its speaker and scene were checked by reading the whole play in that
 * edition, not by searching for the phrase alone.
 *
 * TWO THINGS THE NEXT EDITOR SHOULD KNOW.
 * - The held edition has no Prologue: the generator drops the Chorus sonnet
 *   before Act 1, Scene 1 (the Act 2 Chorus survives, at the end of 1.5). So
 *   the Prologue is described here, from the Gutenberg text online, but never
 *   quoted, because the quotation test could not check it.
 * - Editions differ in a few words. Gutenberg reads "name" where the Folger
 *   edition reads "word" in Juliet's line about the rose, and "rest" where the
 *   Folger reads "rust" in her last line. Lines where editions disagree were
 *   avoided as quotations.
 */
export const guide: StudyGuide = {
  slug: 'romeo-and-juliet',
  title: 'Romeo and Juliet',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: the sonnet Prologue spoken by the Chorus, five acts, and the second Chorus sonnet before Act 2.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First printed in 1597, and in a longer text in 1599. Quotations and extracts follow the modern-spelling Project Gutenberg edition (eBook #1513). Editions differ in a few words: in the balcony scene, for example, the rose smells as sweet by any other name in this edition and by any other word in the Folger edition. Check a quotation against the edition you will use in the exam.',
  },

  native: {
    overview: '/revision/texts/romeo-and-juliet',
    context: '/revision/texts/romeo-and-juliet',
    themes: '/revision/texts/romeo-and-juliet',
    characters: '/revision/texts/romeo-and-juliet',
    keyQuotes: '/revision/texts/romeo-and-juliet',
    languageAnalysis: '/revision/texts/romeo-and-juliet',
    structureForm: '/revision/texts/romeo-and-juliet',
    examPractice: '/revision/texts/romeo-and-juliet',
    modelAnswer: '/revision/texts/romeo-and-juliet',
  },

  extracts: [
    {
      title: 'The first meeting: a sonnet for two voices',
      where: 'Act 1, Scene 5',
      pointer:
        "From Romeo's “If I profane with my unworthiest hand”, which follows Tybalt's angry exit from the feast, to Juliet's “You kiss by the book.”, just before the Nurse calls Juliet away to her mother.",
      text: "ROMEO / [To Juliet.] If I profane with my unworthiest hand / This holy shrine, the gentle sin is this, / My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss. / JULIET / Good pilgrim, you do wrong your hand too much, / Which mannerly devotion shows in this; / For saints have hands that pilgrims' hands do touch, / And palm to palm is holy palmers' kiss. / ROMEO / Have not saints lips, and holy palmers too? / JULIET / Ay, pilgrim, lips that they must use in prayer. / ROMEO / O, then, dear saint, let lips do what hands do: / They pray, grant thou, lest faith turn to despair. / JULIET / Saints do not move, though grant for prayers' sake. / ROMEO / Then move not while my prayer's effect I take. / Thus from my lips, by thine my sin is purg'd. / [Kissing her.] / JULIET / Then have my lips the sin that they have took. / ROMEO / Sin from my lips? O trespass sweetly urg'd! / Give me my sin again. / JULIET / You kiss by the book.",
      summary:
        "At Capulet's feast, moments after Tybalt storms out, Romeo takes Juliet's hand. The fourteen lines they speak between them form a sonnet built on the image of a pilgrim at a saint's shrine, and as it closes he kisses her. A new quatrain begins, and a second kiss is asked for, before the Nurse interrupts.",
      annotations: [
        {
          phrase: 'This holy shrine',
          note: "Romeo treats Juliet's hand as a saint's shrine and his own as unworthy to touch it. Desire is dressed in the language of worship, which flatters her and makes a bold touch sound like devotion.",
        },
        {
          phrase: 'two blushing pilgrims',
          note: 'His lips become pilgrims, red and shy, ready to smooth away the rough touch of his hand with a kiss. The personification makes the request playful and humble at the same time.',
        },
        {
          phrase: 'Good pilgrim, you do wrong your hand too much',
          note: 'Juliet answers in the same form and even on the same rhymes, this and kiss, so she is his equal from her first words. Rather than be flattered off balance, she corrects his conceit.',
        },
        {
          phrase: "palm to palm is holy palmers' kiss",
          note: "A pun: palmers were pilgrims, and pressed palms are already a kind of kiss. Juliet turns his religious image back on him to keep him at a hand's distance, witty and in control.",
        },
        {
          phrase: "Saints do not move, though grant for prayers' sake",
          note: "A saint's statue stays still but answers prayers. Juliet consents to the kiss while seeming only to allow it, a graceful way of saying yes that keeps her modesty intact.",
        },
        {
          phrase: "by thine my sin is purg'd",
          note: "The sonnet's closing couplet ends as Romeo takes “my prayer's effect”, the kiss (this edition prints the stage direction one line later), and this line starts a new quatrain. The kiss is a sin and her lips absolve it, so religion, the language of the Friar who will marry them, is already the language of their love.",
        },
        {
          phrase: 'You kiss by the book',
          note: 'This can be heard as praise, that he kisses expertly, or as teasing, that he kisses by the rules just as he talks by them. Either way the second sonnet is cut off unfinished, as their love will be.',
        },
      ],
      question:
        'Starting with this extract, how does Shakespeare present the love between Romeo and Juliet? Write about how Shakespeare presents their love in this extract and in the play as a whole.',
    },
    {
      title: "Mercutio's death",
      where: 'Act 3, Scene 1',
      pointer:
        "From Mercutio's “I am hurt.”, straight after Tybalt wounds him and runs off with his followers, to Romeo's “And in my temper soften'd valour's steel.”, just before Benvolio returns to report that Mercutio is dead.",
      text: "MERCUTIO / I am hurt. / A plague o' both your houses. I am sped. / Is he gone, and hath nothing? / BENVOLIO / What, art thou hurt? / MERCUTIO / Ay, ay, a scratch, a scratch. Marry, 'tis enough. / Where is my page? Go villain, fetch a surgeon. / [Exit Page.] / ROMEO / Courage, man; the hurt cannot be much. / MERCUTIO / No, 'tis not so deep as a well, nor so wide as a church door, but 'tis / enough, 'twill serve. Ask for me tomorrow, and you shall find me a / grave man. I am peppered, I warrant, for this world. A plague o' both / your houses. Zounds, a dog, a rat, a mouse, a cat, to scratch a man to / death. A braggart, a rogue, a villain, that fights by the book of / arithmetic!—Why the devil came you between us? I was hurt under your / arm. / ROMEO / I thought all for the best. / MERCUTIO / Help me into some house, Benvolio, / Or I shall faint. A plague o' both your houses. / They have made worms' meat of me. / I have it, and soundly too. Your houses! / [Exeunt Mercutio and Benvolio.] / ROMEO / This gentleman, the Prince's near ally, / My very friend, hath got his mortal hurt / In my behalf; my reputation stain'd / With Tybalt's slander,—Tybalt, that an hour / Hath been my cousin. O sweet Juliet, / Thy beauty hath made me effeminate / And in my temper soften'd valour's steel.",
      summary:
        "Romeo has stepped between Mercutio and Tybalt to stop their fight, and Tybalt has wounded Mercutio under Romeo's arm and fled. Mercutio jokes about the wound, curses both families, blames Romeo for coming between them, and is helped away to die. Left alone, Romeo blames his love for Juliet for making him unmanly.",
      annotations: [
        {
          phrase: "A plague o' both your houses",
          note: "Mercutio, neither a Montague nor a Capulet, curses both families, not only Tybalt's, three times in this passage and once more in a broken “Your houses!” He names the feud itself as his killer. The word plague also looks ahead to the outbreak of disease that stops Friar John's letter in Act 5, Scene 2.",
        },
        {
          phrase: 'Ay, ay, a scratch, a scratch',
          note: "Understatement, and a last joke about cats: the man who mocked Tybalt as the “Prince of cats” is killed by what he calls a scratch. Wit is Mercutio's armour to the very end.",
        },
        {
          phrase: 'grave man',
          note: 'The dying pun: ask for him tomorrow, he says, and you will find him a grave man, serious for once, and in his grave. His comedy survives into his death, and with his death the play stops being able to laugh.',
        },
        {
          phrase: 'Why the devil came you between us?',
          note: "The blunt question, and the complaint that he was hurt under Romeo's arm, put the responsibility on Romeo. His attempt to make peace is what gave Tybalt his opening, so the play makes us ask whether good intentions can be to blame.",
        },
        {
          phrase: 'I thought all for the best.',
          note: "Six plain words against Mercutio's torrent of insults and jokes. It could be the Friar's motto too: in this play, doing what seems best keeps making things worse.",
        },
        {
          phrase: 'Thy beauty hath made me effeminate',
          note: 'Romeo blames love, and Juliet, for making him soft. In Verona a man proves himself by fighting, and this is the moment Romeo accepts that code again, a few minutes after refusing it.',
        },
        {
          phrase: "soften'd valour's steel",
          note: "A metaphor from metalwork: his temper, meaning both his character and the hardness of a blade, has been softened. Moments later he asks for “fire-ey'd fury” to guide him and kills Tybalt.",
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents ideas about violence and masculinity in Romeo and Juliet. Write about how these ideas are presented in this extract and in the play as a whole.',
    },
    {
      title: "Capulet's rage",
      where: 'Act 3, Scene 5',
      pointer:
        "From Capulet's “Soft. Take me with you, take me with you, wife.” to the Nurse's “You are to blame, my lord, to rate her so.”, straight after Lady Capulet tells him that Juliet will not marry Paris.",
      text: "CAPULET / Soft. Take me with you, take me with you, wife. / How, will she none? Doth she not give us thanks? / Is she not proud? Doth she not count her blest, / Unworthy as she is, that we have wrought / So worthy a gentleman to be her bridegroom? / JULIET / Not proud you have, but thankful that you have. / Proud can I never be of what I hate; / But thankful even for hate that is meant love. / CAPULET / How now, how now, chopp'd logic? What is this? / Proud, and, I thank you, and I thank you not; / And yet not proud. Mistress minion you, / Thank me no thankings, nor proud me no prouds, / But fettle your fine joints 'gainst Thursday next / To go with Paris to Saint Peter's Church, / Or I will drag thee on a hurdle thither. / Out, you green-sickness carrion! Out, you baggage! / You tallow-face! / LADY CAPULET / Fie, fie! What, are you mad? / JULIET / Good father, I beseech you on my knees, / Hear me with patience but to speak a word. / CAPULET / Hang thee young baggage, disobedient wretch! / I tell thee what,—get thee to church a Thursday, / Or never after look me in the face. / Speak not, reply not, do not answer me. / My fingers itch. Wife, we scarce thought us blest / That God had lent us but this only child; / But now I see this one is one too much, / And that we have a curse in having her. / Out on her, hilding. / NURSE / God in heaven bless her. / You are to blame, my lord, to rate her so.",
      summary:
        "Lady Capulet has just told her husband that Juliet refuses to marry Paris, adding “I would the fool were married to her grave.” Capulet cannot believe it, mocks Juliet's careful answer and orders her to church on Thursday. When she kneels to plead he threatens her and calls her a curse on the family. Lady Capulet protests at his fury, but only the Nurse speaks up for Juliet herself.",
      annotations: [
        {
          phrase: 'Unworthy as she is',
          note: 'Capulet presents the match as a gift his daughter has not earned. Marriage is something fathers and suitors arrange between them, and her part in it is gratitude.',
        },
        {
          phrase: "chopp'd logic",
          note: "He dismisses Juliet's careful distinction between being proud and being thankful as hair-splitting. He will not argue with her, only overrule her.",
        },
        {
          phrase: 'Thank me no thankings, nor proud me no prouds',
          note: 'He turns her own words into mocking verbs and nouns. The wordplay is contemptuous rather than witty: it throws her language back at her instead of answering it.',
        },
        {
          phrase: 'drag thee on a hurdle thither',
          note: "A hurdle was the sledge on which criminals were dragged to execution. Capulet speaks of his daughter's refusal as a crime, and of her wedding as the punishment for it.",
        },
        {
          phrase: 'Out, you green-sickness carrion!',
          note: 'Green-sickness was an illness of young women that left them pale; carrion is rotting flesh. The insults attack her body, and carrion is grimly prophetic of the tomb she will lie in.',
        },
        {
          phrase: 'Good father, I beseech you on my knees',
          note: 'Juliet kneels, the posture of the obedient daughter he wants, and asks only to be heard. His answer includes “Speak not, reply not, do not answer me.”',
        },
        {
          phrase: 'My fingers itch.',
          note: 'Three words that suggest he wants to strike her. Whether he does is a choice for each production, but the threat alone shows how close his anger has come to force.',
        },
        {
          phrase: 'this one is one too much',
          note: 'A cruel reversal of Act 1, Scene 2, where he told Paris his daughter was the only hope he had left: “The earth hath swallowed all my hopes but she.” The only child is now a curse.',
        },
        {
          phrase: 'You are to blame, my lord, to rate her so.',
          note: "To rate is to scold. Lady Capulet objects only to her husband's temper (“Fie, fie! What, are you mad?”); the Nurse is the one who blesses and defends Juliet, and Capulet silences her; within minutes she will be advising Juliet to marry Paris.",
        },
      ],
      question:
        'Starting with this extract, how does Shakespeare present the relationship between Juliet and her father? Write about how Shakespeare presents it in this extract and in the play as a whole.',
    },
  ],

  vocabulary: [
    {
      term: 'Wherefore',
      definition:
        'Why, not where. When Juliet asks “O Romeo, Romeo, wherefore art thou Romeo?” (2.2) she is asking why he has to be Romeo, a Montague, not where he is. Her next line, “Deny thy father and refuse thy name”, makes the meaning plain.',
    },
    {
      term: 'Star-crossed',
      definition:
        "Thwarted by the stars, and so unlucky: the Prologue's word for the lovers, from the belief that the stars shaped a person's fortune. Romeo returns to the idea when he fears “Some consequence yet hanging in the stars” (1.4), cries “Then I defy you, stars!” (5.1), and hopes in the tomb to “shake the yoke of inauspicious stars” (5.3).",
    },
    {
      term: 'Ghostly',
      definition:
        'Spiritual, to do with the soul rather than with ghosts. Romeo calls Friar Lawrence “my ghostly father” (2.3), and Juliet greets him as “my ghostly confessor” (2.6).',
    },
    {
      term: 'Shrift',
      definition:
        "Confession to a priest, and the forgiveness that follows it. Going to shrift is Juliet's excuse for leaving the house on her wedding day (2.4 and 2.5), and the Friar warns Romeo that “Riddling confession finds but riddling shrift” (2.3).",
    },
    {
      term: 'Palmer',
      definition:
        "A pilgrim, named from the palm leaf pilgrims brought back from the Holy Land. Juliet puns on it at the lovers' first meeting: “palm to palm is holy palmers' kiss” (1.5).",
    },
    {
      term: 'County',
      definition:
        "Count, a nobleman's title. Paris is “The County Paris” (3.5), and Capulet also calls him “this noble earl” (3.4).",
    },
    {
      term: 'Coz',
      definition:
        "Short for cousin, used for any relative and for close friends. Romeo and Benvolio are cousins (“Farewell, my coz”, 1.1), and Capulet calls Tybalt, his wife's nephew, “gentle coz” (1.5).",
    },
    {
      term: 'Humour',
      definition:
        "Mood or temperament. Elizabethans inherited the belief that the body held four humours, blood, phlegm, yellow bile and black bile, whose balance shaped a person's temperament. Montague fears his son's gloom: “Black and portentous must this humour prove” (1.1).",
    },
    {
      term: 'Choler',
      definition:
        "Anger, and the name of the humour thought to cause it. The play opens with a servants' pun on choler, colliers and collar: “if we be in choler, we'll draw” (1.1), meaning if we are angry we will draw our swords.",
    },
    {
      term: 'Envious',
      definition:
        "Jealous, but also spiteful or malicious, a stronger word than today. Romeo's “envious moon” (2.2) is jealous of Juliet's beauty; the “envious thrust” that kills Mercutio, in Benvolio's account (3.1), is a malicious one.",
    },
    {
      term: 'Prince of Cats',
      definition:
        "Mercutio's mocking name for Tybalt (“More than Prince of cats”, 2.4), because Tybalt is also the name of the cat in the stories of Reynard the Fox. In 3.1 he calls him “Good King of Cats”, and, wounded, says he has only “a scratch”.",
    },
    {
      term: 'Marry',
      definition:
        'An exclamation, originally an oath by the Virgin Mary, meaning something like indeed. Lady Capulet puns on it: “Marry, that marry is the very theme / I came to talk of” (1.3).',
    },
    {
      term: 'Anon',
      definition:
        "Soon, at once; also the reply to a call, like coming. The Nurse's “Anon, anon!” (1.5) and Juliet's “Anon, good Nurse!” (2.2) both answer voices offstage.",
    },
    {
      term: 'Beshrew',
      definition:
        'A mild curse, meaning woe to, often used as little more than an exclamation. The Nurse says “Beshrew my very heart” (3.5) as she praises Paris over Romeo.',
    },
    {
      term: 'Minion',
      definition: "Here, a pert or saucy girl: Capulet's sneering “Mistress minion you” (3.5).",
    },
    {
      term: 'Fettle',
      definition:
        "To make ready. Capulet orders Juliet to “fettle your fine joints 'gainst Thursday next” (3.5).",
    },
    {
      term: 'Hurdle',
      definition:
        "A sledge on which criminals were dragged to execution. Capulet threatens to “drag thee on a hurdle thither” (3.5), speaking of his daughter's refusal as though it were a crime.",
    },
    {
      term: 'Green-sickness',
      definition:
        "An illness of young women marked by a pale complexion. Capulet's insult in 3.5 mocks Juliet's pale, tear-stained face. Romeo had used the same colour for virginity in 2.2, calling the moon's livery “sick and green”.",
    },
    {
      term: 'Baggage',
      definition:
        'A contemptuous word for a worthless woman. Capulet uses it twice in 3.5, the second time in “Hang thee young baggage, disobedient wretch!”',
    },
    {
      term: 'Hilding',
      definition:
        'A worthless, good-for-nothing person. Capulet ends his attack on his daughter with “Out on her, hilding” (3.5).',
    },
    {
      term: 'Rate',
      definition:
        'To scold. The Nurse tells Capulet he is to blame “to rate her so” (3.5), and is told to hold her tongue.',
    },
    {
      term: 'Runagate',
      definition:
        "A runaway or fugitive: Lady Capulet's name for the banished Romeo, “that same banish'd runagate” (3.5), as she plans to have him poisoned in Mantua.",
    },
    {
      term: 'Mouse-hunt',
      definition:
        'A chaser of women. In 4.4 Lady Capulet teases her husband that he has been “a mouse-hunt in your time”, and once she has left the stage he says “A jealous-hood, a jealous-hood!” It is her word for him, not his for himself.',
    },
    {
      term: 'Apothecary',
      definition:
        "A seller of medicines and drugs. The starving apothecary in Mantua sells Romeo poison although, as he says, “Mantua's law / Is death to any he that utters them” (5.1).",
    },
    {
      term: 'Jointure',
      definition:
        "The property settled on a wife to support her if she is widowed. When Capulet takes Montague's hand and calls it “my daughter's jointure” (5.3), a handshake stands in for the marriage settlement the two families never made.",
    },
    {
      term: 'Chorus',
      definition:
        'In this play, a single speaker who stands outside the action and addresses the audience directly, in the Prologue and again before Act 2.',
    },
    {
      term: 'Sonnet',
      definition:
        "A fourteen-line poem, usually in iambic pentameter. Shakespeare's form has three quatrains and a closing couplet. The play contains three: the Prologue, the Chorus before Act 2, and the lovers' first conversation in 1.5, which they speak between them.",
    },
    {
      term: 'Petrarchan',
      definition:
        "In the manner of the Italian poet Petrarch, whose sonnets to Laura, a woman he could not have, were imitated by English poets of the sixteenth century: a suffering lover and an unattainable lady. Romeo's love for Rosaline, who has sworn to stay chaste, talks like this in 1.1, and Mercutio mocks it: “Now is he for the numbers that Petrarch flowed in” (2.4).",
    },
    {
      term: 'Oxymoron',
      definition:
        "Two contradictory words set side by side. Romeo's “O brawling love! O loving hate!” (1.1) can be read as a young man performing confusion; Juliet's “Beautiful tyrant, fiend angelical” (3.2) reads as real confusion, about a husband who has just killed her cousin.",
    },
    {
      term: 'Chiasmus',
      definition:
        "A mirrored, ABBA order of words or ideas. Juliet's “Too early seen unknown, and known too late!” (1.5) runs early, unknown, known, late. The Friar's “These violent delights have violent ends” (2.6) is sometimes called one, but its two halves run in the same order: it is repetition and parallelism, not chiasmus.",
    },
    {
      term: 'Pun',
      definition:
        'A play on two meanings of one word. Dying, Mercutio says that if you ask for him tomorrow you will find him a “grave man” (3.1): serious, and in his grave. The Prologue does the same with the word civil, used twice in one line: the blood shed is that of fellow citizens, and the hands that shed it ought to be civilised. That is a double meaning, not a tricolon.',
    },
    {
      term: 'Tricolon',
      definition:
        "A pattern of three parallel words or phrases. Juliet's “past hope, past cure, past help!” (4.1) builds her despair to a climax in three steps.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the audience knows what a character does not. In 3.4 Capulet promises Paris that Juliet “will be rul'd / In all respects by me”, while Juliet, who will “not come down tonight”, is spending her wedding night with Romeo.",
    },
    {
      term: 'Aubade',
      definition:
        'A dawn song or poem about lovers parting at daybreak. Act 3, Scene 5 opens as one, with Juliet insisting “It was the nightingale, and not the lark” and Romeo answering that it was the lark.',
    },
    {
      term: 'Soliloquy',
      definition:
        'A speech in which a character alone on stage speaks their thoughts aloud. Before she drinks the potion (4.3) Juliet talks herself through every fear of the vault: “My dismal scene I needs must act alone.”',
    },
    {
      term: 'Foil',
      definition:
        "A character who contrasts with another and so shows up their qualities. Mercutio, who mocks love, is Romeo's foil; in the first scene Benvolio (“I do but keep the peace”) and Tybalt (“I hate the word”) are foils to each other.",
    },
  ],

  timeline: [
    {
      where: 'Act 1, Prologue',
      title: 'The Chorus tells the ending',
      summary:
        'Before any character appears, a Chorus speaks a fourteen-line sonnet. It sets the play in Verona, describes an old quarrel between two families of equal rank that has broken out again, and tells the audience that a pair of lovers born to those families will die, and that only their deaths will end the feud.',
      setting: 'The stage, before the action begins',
      who: ['Chorus'],
      themes: ['Fate and destiny', 'Conflict and violence', 'Love'],
      tension: 2,
      significance:
        'The audience knows the ending from the first minute, so the play asks how and why the lovers die, not whether they will.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'A brawl in the streets',
      summary:
        'Capulet servants pick a quarrel with Montague servants. Benvolio tries to part them, Tybalt attacks him, citizens join in, Capulet calls for his sword and Montague has to be held back. Prince Escalus stops the fight and warns Capulet and Montague that if they disturb the streets again their lives will pay for it. Afterwards Benvolio finds Romeo miserable, in love with a woman who has sworn to stay chaste.',
      setting: 'A public place in Verona',
      who: [
        'Benvolio',
        'Tybalt',
        'Lord Capulet',
        'Lady Capulet',
        'Lord Montague',
        'Prince Escalus',
        'Romeo',
      ],
      quote:
        'What, drawn, and talk of peace? I hate the word / As I hate hell, all Montagues, and thee',
      themes: ['Conflict and violence', 'Honour and reputation', 'Love'],
      tension: 3,
      significance:
        "The feud reaches from the servants to the heads of the houses, and the Prince's death sentence hangs over every fight that follows.",
    },
    {
      where: 'Act 1, Scenes 2 and 3',
      title: 'A suitor for Juliet',
      summary:
        "Paris asks Capulet for Juliet. Capulet says she is not yet fourteen, asks him to wait two years and to win her heart, because his consent depends on hers. A servant who cannot read asks Romeo to read the guest list for Capulet's feast, and Benvolio persuades Romeo to go, since Rosaline will be there. At home, Lady Capulet asks Juliet to consider Paris, and Juliet agrees only to look at him.",
      setting: "A street in Verona, then a room in Capulet's house",
      who: ['Lord Capulet', 'Paris', 'Romeo', 'Benvolio', 'Lady Capulet', 'The Nurse', 'Juliet'],
      quote: 'My will to her consent is but a part',
      themes: ['Youth versus age', 'Love'],
      tension: 1,
      significance:
        "Capulet's early patience makes his fury in Act 3, Scene 5 more shocking, and chance, in the shape of a servant who cannot read, sends Romeo to the feast.",
    },
    {
      where: 'Act 1, Scene 4',
      title: 'Queen Mab and a warning',
      summary:
        "Romeo, Mercutio and Benvolio, masked, set off for the feast. Romeo has had a dream that troubles him, and Mercutio mocks dreams in a dazzling speech about Queen Mab, the fairies' midwife, which grows darker as it goes on. As they leave, Romeo fears that something fated will begin that night and end in his early death.",
      setting: "A street near Capulet's house, at night",
      who: ['Romeo', 'Mercutio', 'Benvolio'],
      quote: 'my mind misgives / Some consequence yet hanging in the stars',
      themes: ['Fate and destiny'],
      tension: 2,
      significance:
        'Romeo foresees his own death before he has even seen Juliet, so fate is felt from the first night.',
    },
    {
      where: 'Act 1, Scene 5',
      title: 'The feast',
      summary:
        "Romeo sees Juliet and forgets Rosaline. Tybalt recognises his voice as a Montague's and wants to fight, but Capulet overrules him, and Tybalt leaves vowing that the intrusion will turn bitter. Romeo and Juliet speak a sonnet between them and kiss. Only afterwards does each learn from the Nurse that the other belongs to the enemy house.",
      setting: "A hall in Capulet's house, during the feast",
      who: ['Romeo', 'Juliet', 'Tybalt', 'Lord Capulet', 'The Nurse', 'Benvolio'],
      quote: 'My only love sprung from my only hate!',
      themes: ['Love', 'Conflict and violence', 'Light and darkness'],
      tension: 3,
      significance:
        "Love and the feud meet in the same room: the kiss and Tybalt's promise of revenge come within minutes of each other.",
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The balcony',
      summary:
        'Romeo climbs into the Capulet orchard and overhears Juliet at her window wishing he had another name. He answers her, and they exchange vows. Juliet worries that it is all too fast, then asks him, if he means marriage, to send word of where and when, by a messenger she will send to him at nine the next morning.',
      setting: "Capulet's orchard, beneath Juliet's window, at night",
      who: ['Romeo', 'Juliet', 'The Nurse'],
      quote: "It is too rash, too unadvis'd, too sudden",
      themes: ['Love', 'Light and darkness', 'Fate and destiny'],
      tension: 2,
      significance:
        'Juliet, not Romeo, turns love into a plan for marriage, and her own warning about haste hangs over everything that follows.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The Friar agrees',
      summary:
        'At dawn Friar Lawrence gathers herbs and reflects that the same plant can heal or poison. Romeo asks him to marry him to Juliet that day. The Friar mocks how quickly Romeo has forgotten Rosaline, but agrees, hoping the marriage will end the feud.',
      setting: "Friar Lawrence's cell, at dawn",
      who: ['Friar Lawrence', 'Romeo'],
      quote: "this alliance may so happy prove, / To turn your households' rancour to pure love",
      themes: ['Love', 'Youth versus age', 'Conflict and violence'],
      tension: 2,
      significance:
        "The Friar's good intention sets the tragedy in motion, and his speech on plants that heal and kill prepares for the potion and the poison.",
    },
    {
      where: 'Act 2, Scenes 4 to 6',
      title: 'A secret wedding',
      summary:
        "Benvolio reports that Tybalt has sent a letter to Romeo's father's house, which Mercutio guesses is a challenge. The Nurse finds Romeo, who tells her Juliet should come to Friar Lawrence's cell that afternoon to be married. Back at Capulet's house the Nurse teases Juliet by delaying the news. At the cell the Friar warns Romeo to love moderately, and takes the couple off to be married.",
      setting: "A street, Capulet's garden, and Friar Lawrence's cell",
      who: ['Mercutio', 'Benvolio', 'Romeo', 'The Nurse', 'Juliet', 'Friar Lawrence'],
      quote: 'These violent delights have violent ends',
      themes: ['Love', 'Fate and destiny', 'Youth versus age'],
      tension: 2,
      significance:
        "The marriage happens offstage, the day after the lovers meet, and the Friar's warning is spoken at the very moment he helps them.",
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Two deaths and a banishment',
      summary:
        "Tybalt calls Romeo a villain. Romeo, now secretly his kinsman, refuses to fight, so Mercutio fights instead. When Romeo steps between them, Tybalt wounds Mercutio under Romeo's arm, and Mercutio is helped away cursing both houses and dies. Tybalt returns and Romeo kills him. The Prince banishes Romeo and warns that if he is found in Verona he will die.",
      setting: 'A public place in Verona, on a hot day',
      who: [
        'Mercutio',
        'Benvolio',
        'Tybalt',
        'Romeo',
        'Prince Escalus',
        'Lady Capulet',
        'Lord Montague',
      ],
      quote: "A plague o' both your houses",
      themes: ['Conflict and violence', 'Honour and reputation', 'Fate and destiny'],
      tension: 5,
      significance:
        'The turning point: within minutes the play moves from comedy to tragedy, and Romeo is cut off from the wife he married only hours before.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Juliet hears the news',
      summary:
        "Juliet longs for night and for Romeo. The Nurse arrives so confused with grief that Juliet at first thinks Romeo is dead, then learns that he has killed Tybalt and been banished. She turns on him in a rush of contradictions, then defends him, and decides that the word banished is worse than Tybalt's death.",
      setting: "A room in Capulet's house",
      who: ['Juliet', 'The Nurse'],
      quote: 'Beautiful tyrant, fiend angelical',
      themes: ['Love', 'Conflict and violence', 'Light and darkness'],
      tension: 4,
      significance:
        "Juliet chooses her husband over her family, and the Nurse's “Shame come to Romeo” is the first crack in their alliance.",
    },
    {
      where: 'Act 3, Scene 3',
      title: 'Banished',
      summary:
        "Hiding in the Friar's cell, Romeo hears that he is banished rather than sentenced to death, and says exile is worse than death. When the Nurse describes Juliet's grief he draws his sword on himself. The Friar stops him, lists his reasons to be thankful, and sends him to Juliet for the night before he escapes to Mantua.",
      setting: "Friar Lawrence's cell",
      who: ['Romeo', 'Friar Lawrence', 'The Nurse'],
      quote: 'There is no world without Verona walls',
      themes: ['Love', 'Youth versus age', 'Fate and destiny'],
      tension: 4,
      significance:
        "Romeo turns a weapon on himself long before the tomb, and the Friar's calm reasoning shows how far adult sense is from young despair.",
    },
    {
      where: 'Act 3, Scene 4',
      title: 'Thursday',
      summary:
        'Late that night Capulet tells Paris that Juliet will marry him. He settles on Wednesday, then changes it to Thursday, without asking her, sure that she will obey him.',
      setting: "A room in Capulet's house, late at night",
      who: ['Lord Capulet', 'Lady Capulet', 'Paris'],
      quote: "I think she will be rul'd / In all respects by me",
      themes: ['Youth versus age', 'Love'],
      tension: 3,
      significance:
        'Dramatic irony at its sharpest: a father promises his daughter to Paris on the night she spends with her husband.',
    },
    {
      where: 'Act 3, Scene 5',
      title: "Dawn, and a father's rage",
      summary:
        'Romeo and Juliet part at dawn, and Juliet has a vision of him dead in a tomb. Lady Capulet tells her she will marry Paris on Thursday. Juliet refuses, and Capulet threatens to throw her into the streets. Her mother will not listen, and the Nurse advises her to marry Paris. Alone, Juliet rejects the Nurse and resolves to go to the Friar, and to die if all else fails.',
      setting: "Juliet's chamber at dawn, overlooking the garden",
      who: ['Romeo', 'Juliet', 'The Nurse', 'Lady Capulet', 'Lord Capulet'],
      quote: 'Hang thee young baggage, disobedient wretch!',
      themes: ['Youth versus age', 'Love', 'Honour and reputation'],
      tension: 5,
      significance:
        'Juliet loses every adult ally in a single scene, and from here she acts alone.',
    },
    {
      where: 'Act 4, Scene 1',
      title: "The Friar's plan",
      summary:
        "At the Friar's cell Juliet parries Paris's talk of their wedding. Alone with the Friar she draws a knife and says she will kill herself rather than marry Paris. He gives her a potion that will make her seem dead for forty-two hours, so that she will be laid in the family vault, where Romeo, warned by letter, will come for her.",
      setting: "Friar Lawrence's cell",
      who: ['Juliet', 'Paris', 'Friar Lawrence'],
      quote: 'Thou shalt continue two and forty hours',
      themes: ['Love', 'Fate and destiny', 'Youth versus age'],
      tension: 4,
      significance:
        'Everything now depends on a letter arriving in time, which the audience, remembering the Prologue, has every reason to doubt.',
    },
    {
      where: 'Act 4, Scenes 2 and 3',
      title: 'Juliet drinks the potion',
      summary:
        "Juliet pretends to repent and begs her father's pardon. Delighted, he brings the wedding forward a day, to the next morning. That night, alone, she imagines waking early in the vault among her ancestors' bones and Tybalt's body, lays a dagger beside her in case the potion fails, and drinks.",
      setting: "Capulet's hall, then Juliet's chamber at night",
      who: ['Juliet', 'Lord Capulet', 'Lady Capulet', 'The Nurse'],
      quote: 'My dismal scene I needs must act alone.',
      themes: ['Love', 'Youth versus age', 'Fate and destiny'],
      tension: 4,
      significance:
        "Capulet's haste shortens the Friar's timetable, and Juliet's courage in facing her fears alone is the play's plainest proof of her love.",
    },
    {
      where: 'Act 4, Scenes 4 and 5',
      title: 'Wedding turned to funeral',
      summary:
        'Capulet stays up all night preparing the wedding feast. At dawn the Nurse finds Juliet apparently dead. Her parents, the Nurse and Paris lament her, the Friar, who knows she is alive, tells them to carry her to church, and Capulet orders that everything prepared for the wedding should serve the funeral instead.',
      setting: "Capulet's house and Juliet's chamber, at dawn",
      who: ['Lord Capulet', 'Lady Capulet', 'The Nurse', 'Paris', 'Friar Lawrence', 'Juliet'],
      quote: 'Death lies on her like an untimely frost',
      themes: ['Fate and destiny', 'Love'],
      tension: 3,
      significance:
        'The family grieves for a death that has not happened, a rehearsal for the one that will.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'News in Mantua',
      summary:
        'Romeo wakes from a happy dream in which Juliet brought him back to life with kisses. His servant Balthasar arrives from Verona to tell him Juliet is dead and buried. Romeo decides at once to return and die beside her, and buys poison from a starving apothecary, though selling it is punishable by death in Mantua.',
      setting: 'A street in Mantua',
      who: ['Romeo', 'Balthasar', 'The Apothecary'],
      quote: 'Then I defy you, stars!',
      themes: ['Fate and destiny', 'Love'],
      tension: 4,
      significance: "Romeo's defiance of fate is exactly what brings about the Prologue's ending.",
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The letter that never went',
      summary:
        'Friar John tells Friar Lawrence that he could not deliver the letter to Romeo: he was shut inside a house suspected of infection, and could not even find a messenger to send it back. Friar Lawrence hurries to the vault alone, knowing that Juliet will wake within three hours.',
      setting: "Friar Lawrence's cell",
      who: ['Friar Lawrence', 'Friar John'],
      quote: 'Unhappy fortune!',
      themes: ['Fate and destiny'],
      tension: 4,
      significance:
        'The plan fails through pure chance, the strongest case in the play for blaming fortune rather than people.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'The tomb',
      summary:
        "Paris is mourning at the Capulet tomb when Romeo arrives to open it. Paris tries to arrest him, and Romeo, who begs him to leave, kills him in the fight. Inside, Romeo finds Juliet still beautiful, takes the poison and dies. The Friar arrives moments too late. Juliet wakes, and, told that Romeo is dead, refuses to leave; when the Friar flees she kills herself with Romeo's dagger.",
      setting: 'The Capulet monument in a churchyard, at night',
      who: ['Paris', 'Romeo', 'Balthasar', 'Friar Lawrence', 'Juliet'],
      quote: 'Thus with a kiss I die.',
      themes: ['Love', 'Fate and destiny', 'Light and darkness'],
      tension: 5,
      significance:
        'Minutes decide the ending: Romeo dies believing Juliet dead just before she wakes.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'A glooming peace',
      summary:
        "The Watch, the Prince and both families gather. Montague reports that his wife has died of grief at Romeo's exile. The Friar tells the whole story, and a letter Romeo left confirms it. The Prince tells the fathers that all are punished, and Capulet and Montague take each other's hand and promise golden statues of each other's child.",
      setting: 'The churchyard, at dawn',
      who: [
        'Prince Escalus',
        'Lord Capulet',
        'Lady Capulet',
        'Lord Montague',
        'Friar Lawrence',
        'Balthasar',
      ],
      quote: 'See what a scourge is laid upon your hate',
      themes: ['Conflict and violence', 'Fate and destiny'],
      tension: 2,
      significance:
        "The feud ends, as the Prologue promised, and the price is the families' only children.",
    },
  ],

  relationships: [
    {
      from: 'Romeo',
      to: 'Juliet',
      kind: 'secret husband and wife',
      note: 'They meet, marry and die within a few days. Juliet is often the more practical of the two, proposing marriage in the balcony scene, and in the end each dies rather than live without the other.',
    },
    {
      from: 'Romeo',
      to: 'Mercutio',
      kind: 'close friends',
      note: "Mercutio mocks Romeo's love and dies fighting the duel Romeo refuses. His death, under Romeo's arm, turns Romeo to revenge.",
    },
    {
      from: 'Romeo',
      to: 'Benvolio',
      kind: 'cousins and friends',
      note: "Benvolio, Montague's nephew, is Romeo's confidant and a would-be peacemaker: he urges Romeo to forget Rosaline, and after Tybalt's death to run.",
    },
    {
      from: 'Tybalt',
      to: 'Romeo',
      kind: 'enemies, then kinsmen by marriage',
      note: "Tybalt wants Romeo dead from the feast onwards. Romeo's refusal to fight him, because Tybalt is now his wife's cousin, is what drives Mercutio to fight in his place.",
    },
    {
      from: 'Friar Lawrence',
      to: 'Romeo',
      kind: 'confessor and penitent',
      note: "Romeo's “ghostly father” scolds him, marries him and talks him out of despair. His advice is often wise, though many readers find his plans rash.",
    },
    {
      from: 'Paris',
      to: 'Romeo',
      kind: 'rivals',
      note: 'They meet only at the tomb, where Romeo kills Paris and then grants his dying wish to be laid beside Juliet.',
    },
    {
      from: 'The Nurse',
      to: 'Juliet',
      kind: 'nurse and confidante',
      note: "She has cared for Juliet since she was a baby and carries her messages to Romeo, but after Capulet's rage she advises her to marry Paris, and Juliet never confides in her again.",
    },
    {
      from: 'Lord Capulet',
      to: 'Juliet',
      kind: 'father and daughter',
      note: 'In Act 1 he asks Paris to win her consent; in Act 3, Scene 5 he threatens to throw her out. His grief at her apparent death, and then her real one, shows the cost of his rage.',
    },
    {
      from: 'Lady Capulet',
      to: 'Juliet',
      kind: 'mother and daughter',
      note: "Formal and distant, she was a mother herself by Juliet's age and presses Paris on her daughter. When Juliet begs for her help against the marriage, she refuses to speak to her.",
    },
    {
      from: 'Friar Lawrence',
      to: 'Juliet',
      kind: 'confessor and helper',
      note: 'He marries her, and when she threatens to kill herself he gives her the potion. In the tomb he leaves her alone when he hears the Watch coming.',
    },
    {
      from: 'Paris',
      to: 'Juliet',
      kind: 'suitor',
      note: 'Paris courts her through her father and treats her as his already: “Thy face is mine” (4.1). Yet he mourns her sincerely at the tomb.',
    },
    {
      from: 'Mercutio',
      to: 'Tybalt',
      kind: 'rivals',
      note: "Mercutio mocks Tybalt as the “Prince of cats” and fights him when Romeo will not. Tybalt kills him with a thrust under Romeo's arm.",
    },
    {
      from: 'Lord Capulet',
      to: 'Tybalt',
      kind: 'uncle and nephew by marriage',
      note: "Tybalt is Lady Capulet's nephew. At the feast Capulet forbids him to attack Romeo under his roof; Tybalt obeys, but promises that the intrusion will turn bitter.",
    },
    {
      from: 'Lord Capulet',
      to: 'Lord Montague',
      kind: 'heads of the feuding houses',
      note: "Neither ever explains the feud, which the Prince says was “bred of an airy word”. Over their children's bodies they take hands and promise golden statues.",
    },
    {
      from: 'Prince Escalus',
      to: 'Mercutio',
      kind: 'kinsmen',
      note: "Mercutio is the Prince's kinsman, so the feud costs the Prince his own family: by the end he has “lost a brace of kinsmen”, Mercutio and Paris.",
    },
  ],

  compareWith: [
    {
      title: 'Much Ado About Nothing',
      href: '/revision/texts/much-ado-about-nothing',
      reason:
        'Another set play on AQA, Edexcel, OCR and Eduqas: in Act 4, Scene 1 a father turns in fury on his only daughter and a friar has her reported dead, so comedy and tragedy are built from the same parts.',
    },
    {
      title: 'The Merchant of Venice',
      href: '/revision/texts/the-merchant-of-venice',
      reason:
        'Jessica leaves her father Shylock to marry Lorenzo, a Christian: another daughter who defies her father across a divided city, with a very different outcome.',
    },
    {
      title: 'Macbeth',
      href: '/revision/texts/macbeth',
      reason:
        "The other Shakespeare tragedy on all five of this text's boards: set its prophecies beside Romeo and Juliet's stars to compare how each play weighs fate against choice.",
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'intimate_relationships',
    'mythological_religious',
  ],

  sources: [
    {
      label:
        'Romeo and Juliet, Project Gutenberg eBook #1513: the edition held as a byte copy in src/data/full-texts, from which every quotation and extract was copied, and against which speakers and scenes were checked by reading the whole play',
      url: 'https://www.gutenberg.org/ebooks/1513',
    },
    {
      label:
        'Project Gutenberg #1513 plain text: the Prologue spoken by the Chorus, which the held copy omits (described in the guide, not quoted)',
      url: 'https://www.gutenberg.org/cache/epub/1513/pg1513.txt',
    },
    {
      label:
        'Folger Shakespeare Library, Romeo and Juliet: first printed as a quarto in 1597 (Q1), and in a different text in 1599 (Q2)',
      url: 'https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/',
    },
    {
      label:
        'Folger Shakespeare Library text, Act 2, Scene 2: reads "By any other word", where Gutenberg reads "name"',
      url: 'https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/read/2/2/',
    },
    {
      label:
        'Folger Shakespeare Library text, Act 5, Scene 3: reads "There rust", where Gutenberg reads "rest"',
      url: 'https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/read/5/3/',
    },
    {
      label:
        'Wikipedia, Romeo and Juliet: Q1 1597 and Q2 1599, the play spanning four to six days, Juliet aged thirteen, Brooke as source. Its composition date (1591 to 1595) differs from the existing page (c. 1594 to 1596), so this file gives no date of writing',
      url: 'https://en.wikipedia.org/wiki/Romeo_and_Juliet',
    },
    {
      label:
        'Wikipedia, Shakespearean sonnet: three quatrains and a couplet; the three sonnets in the play, including the dialogue sonnet of 1.5',
      url: 'https://en.wikipedia.org/wiki/Shakespearean_sonnet',
    },
    {
      label:
        "Alexander Schmidt, Shakespeare Lexicon and Quotation Dictionary (1902), via Perseus: hilding, green-sickness, hurdle, runagate, jointure, mouse-hunt, shrift, palmer, ghostly, coz, county, beshrew, baggage, wherefore, envious (two senses, with Romeo's moon under jealous and Tybalt's thrust under malicious), anon, minion, fettle, rate, marry, star-crossed, choler",
      url: 'http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.03.0079',
    },
    {
      label: 'Wikipedia, Palmer (pilgrim): the palm leaf brought back from the Holy Land',
      url: 'https://en.wikipedia.org/wiki/Palmer_(pilgrim)',
    },
    {
      label: 'Wikipedia, Humorism: the four humours and their supposed effect on temperament',
      url: 'https://en.wikipedia.org/wiki/Humorism',
    },
    {
      label: "Wikipedia, Tybalt: the cat in Reynard the Fox; Lady Capulet's nephew",
      url: 'https://en.wikipedia.org/wiki/Tybalt',
    },
    {
      label:
        'Wikipedia, Petrarch: the sonnets to Laura and English Petrarchism in the sixteenth century',
      url: 'https://en.wikipedia.org/wiki/Petrarch',
    },
    {
      label: 'Wikipedia, Aubade: a song or poem about lovers separating at dawn',
      url: 'https://en.wikipedia.org/wiki/Aubade',
    },
    {
      label: "Wikipedia, Oxymoron: definition, with Romeo's oxymorons from 1.1 as examples",
      url: 'https://en.wikipedia.org/wiki/Oxymoron',
    },
    {
      label: 'Wikipedia, Chiasmus: a reversal of structure in successive phrases',
      url: 'https://en.wikipedia.org/wiki/Chiasmus',
    },
    {
      label: 'Wikipedia, Irony: dramatic irony defined',
      url: 'https://en.wikipedia.org/wiki/Irony',
    },
    { label: 'Wikipedia, Soliloquy: definition', url: 'https://en.wikipedia.org/wiki/Soliloquy' },
    {
      label: 'Wikipedia, Foil (literature): definition, and Romeo and Mercutio as foils',
      url: 'https://en.wikipedia.org/wiki/Foil_(literature)',
    },
    {
      label:
        "Held editions of Much Ado About Nothing (Leonato's fury and the Friar's plan, Act 4, Scene 1) and The Merchant of Venice (Jessica and Lorenzo, Act 2, Scene 3), for the comparisons",
    },
  ],
}
