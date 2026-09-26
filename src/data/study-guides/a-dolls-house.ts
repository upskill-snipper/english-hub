import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A Doll's House, Henrik Ibsen (Et dukkehjem, first published 4 December 1879).
 * A supplement: the existing page at /resources/revision-notes/a-dolls-house
 * keeps its overview, context, themes, characters, key quotations, symbols,
 * exam questions and exemplar points, and this file adds the close-reading
 * passages, language analysis, key vocabulary and the scene data for the
 * animated visuals.
 *
 * WHICH TRANSLATION, AND WHY IT MATTERS HERE (26 September 2026). AQA English
 * Literature B (7717, 3.2.2 Elements of political and social protest writing)
 * requires Michael Meyer's translation in the Bloomsbury Methuen Drama edition,
 * which is in copyright, and its Paper 2 is open book. OCR H472 (Component 01,
 * Section 2, a comparative essay with a pre-1900 poetry text, closed text)
 * names no translation. Both were read from the specifications that day.
 *
 * Every passage, scene-card quotation and quoted phrase below from the play
 * itself is R. Farquharson Sharp's public-domain translation (Everyman's
 * Library, J. M. Dent, 1910; Sharp died in 1945), copied from Project
 * Gutenberg eBook #2542 after reading the whole play in that text. No edition
 * is held in src/data/full-texts for this slug, so the guide test cannot check
 * these words; each was checked against the Gutenberg text by search, and each
 * speaker and act against the same reading.
 *
 * Meyer's wording is quoted only where AQA's own June 2023 7717/2B mark scheme
 * prints it (the June 2022 one confirms the translation but supplies no
 * wording used here), always under 15 words and listed in
 * quotesFromElsewhere, so an AQA student can see where the two translations
 * part company. Nothing else of Meyer's is quoted, because nothing else of his
 * could be checked from here.
 *
 * ARCHER. The Archer text compared below is the Internet Archive scan of a
 * Thomas Nelson reprint of Archer's translation as revised for his Collected
 * Works of Ibsen (Heinemann), not the 1889 first edition, so this file says
 * "Archer's translation" and never "Archer 1889". An earlier draft dated its
 * Archer comparisons to 1889 on the strength of that scan, which could not
 * prove it.
 *
 * THE PAGE ABOVE THIS FILE carries errors this file does not repeat and may
 * not fix: it says every quotation is Archer's 1889 translation, but it mixes
 * Sharp's wording with Archer's, and two lines match neither ("It was almost
 * like being a man", "saving the remnants, the appearance"). Its names
 * Anne-Marie and Helene follow Ibsen's Norwegian (the Archer reprint footnotes
 * "Anne-Marie" as the original's name for the nurse), not the Archer it says
 * it quotes (Anna, Ellen) nor Sharp (Anne, Helen). Its tarantella description
 * has Helmer beating time; in Sharp he plays the piano, then Rank plays while
 * Helmer calls out instructions. They are listed in the report that produced
 * this file.
 *
 * Character names in the scene data follow Sharp and the page (Mrs Linde, Dr
 * Rank). Theme names on the scene cards are the page's own theme titles, so a
 * card's chip matches a heading the student can find above.
 */
export const guide: StudyGuide = {
  slug: 'a-dolls-house',
  title: "A Doll's House",
  author: 'Henrik Ibsen',
  form: 'play',
  scope:
    "The whole play, in three acts, studied in English translation. AQA English Literature B requires Michael Meyer's translation (Bloomsbury Methuen Drama); OCR names no translation. The passages on this part of the page are R. Farquharson Sharp's public-domain translation of 1910.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "Henrik Ibsen's A Doll's House (Et dukkehjem) was first published in 1879. The passages and quotations in this section are from R. Farquharson Sharp's English translation (Everyman's Library, J. M. Dent, 1910), as printed in Project Gutenberg eBook #2542. AQA students: your exam requires Michael Meyer's translation (Bloomsbury Methuen Drama), whose wording differs from Sharp's, so learn and quote Meyer's wording from your own copy. OCR names no translation: quote the one your class has studied.",
  },

  native: {
    overview: '/resources/revision-notes/a-dolls-house',
    context: '/resources/revision-notes/a-dolls-house',
    themes: '/resources/revision-notes/a-dolls-house',
    characters: '/resources/revision-notes/a-dolls-house',
    keyQuotes: '/resources/revision-notes/a-dolls-house',
    structureForm: '/resources/revision-notes/a-dolls-house',
    examPractice: '/resources/revision-notes/a-dolls-house',
    modelAnswer: '/resources/revision-notes/a-dolls-house',
  },

  extracts: [
    {
      title: 'The opening exchange',
      where: 'Act 1, the opening',
      pointer:
        "The first exchange between Nora and Helmer, straight after Nora pays the porter and eats a macaroon or two: from Helmer calling out from his study to the end of his speech about debt, just before Nora moves towards the stove. The text below is Sharp's. Meyer, whom AQA sets, words the pet names differently, so find the passage in your copy by its position rather than by these words.",
      text: 'HELMER. [calls out from his room]. Is that my little lark twittering out there? / NORA. [busy opening some of the parcels]. Yes, it is! / HELMER. Is it my little squirrel bustling about? / NORA. Yes! / HELMER. When did my squirrel come home? / NORA. Just now. [Puts the bag of macaroons into her pocket and wipes her mouth.] Come in here, Torvald, and see what I have bought. / HELMER. Don’t disturb me. [A little later, he opens the door and looks into the room, pen in hand.] Bought, did you say? All these things? Has my little spendthrift been wasting money again? / NORA. Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise. / HELMER. Still, you know, we can’t spend money recklessly. / NORA. Yes, Torvald, we may be a wee bit more reckless now, mayn’t we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money. / HELMER. Yes, after the New Year; but then it will be a whole quarter before the salary is due. / NORA. Pooh! we can borrow until then. / HELMER. Nora! [Goes up to her and takes her playfully by the ear.] The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year’s Eve a slate fell on my head and killed me, and— / NORA. [putting her hands over his mouth]. Oh! don’t say such horrid things. / HELMER. Still, suppose that happened,—what then? / NORA. If that were to happen, I don’t suppose I should care whether I owed money or not. / HELMER. Yes, but what about the people who had lent it? / NORA. They? Who would bother about them? I should not know who they were. / HELMER. That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle.',
      annotations: [
        {
          phrase: 'Is that my little lark twittering out there?',
          note: "Helmer speaks before he is seen, calling from the study that is his territory. The possessive “my”, the diminutive “little” and the verb “twittering” turn Nora's voice into pleasant birdsong rather than speech: something to enjoy, not to listen to. His very first line places her as decoration.",
        },
        {
          phrase: 'Puts the bag of macaroons into her pocket and wipes her mouth.',
          note: 'The stage direction shows deception before a word of it is spoken. Nora hides a harmless pleasure the way a child hides sweets, which trains the audience to watch her conceal things, and to ask why a grown woman in her own home has to.',
        },
        {
          phrase: 'Has my little spendthrift been wasting money again?',
          note: 'A spendthrift wastes money, so the joke is also a charge. The audience soon learns that Nora has been going without to repay a secret loan, which makes the line dramatic irony: Helmer is sure he knows where the money goes, and he is wrong.',
        },
        {
          phrase: 'Pooh! we can borrow until then.',
          note: 'A light remark on the one subject Nora knows better than her husband. Borrowing is exactly what she did to save his life, and his shocked reply shows the audience why she has never been able to tell him.',
        },
        {
          phrase: 'takes her playfully by the ear',
          note: "This is how an adult corrects a naughty child. The gesture is affectionate and controlling at once, and it shows that Helmer's authority works through touch as well as through the names he gives her.",
        },
        {
          phrase: 'That is like a woman!',
          note: 'Helmer turns one careless remark into a verdict on all women. It is the first of his generalisations about what women are, and Act 3 answers it when Nora insists that she must think over things for herself.',
        },
        {
          phrase: 'No debt, no borrowing.',
          note: 'Four clipped words that sound like a motto and work as a moral code. Their certainty is ironic: the life Helmer is so sure of was saved by a debt he knows nothing about.',
        },
        {
          phrase: 'no freedom or beauty about a home life that depends on borrowing and debt',
          note: 'Helmer ties the beauty of a home to its finances. The audience hears the principle before it learns of the hidden loan, so the line becomes a verdict on the Helmer home itself; one reading is that Nora finally agrees with him, in a sense he never intended.',
        },
      ],
      question:
        "Explore how Ibsen presents the Helmers' marriage in this opening exchange. How does the rest of the play reveal what this conversation conceals?",
    },
    {
      title: 'The tarantella rehearsal',
      where: 'Act 2, the end of the act',
      pointer:
        "Near the end of Act 2, after Nora plays the first bars of the Tarantella to stop Helmer going to the letterbox: from the stage direction “HELMER plays and NORA dances” to Helmer's “You can depend on me.” In any translation it is the rehearsal shortly before the maid announces dinner. The text below is Sharp's.",
      text: '[HELMER plays and NORA dances. RANK stands by the piano behind HELMER, and looks on.] / HELMER. [as he plays]. Slower, slower! / NORA. I can’t do it any other way. / HELMER. Not so violently, Nora! / NORA. This is the way. / HELMER. [stops playing]. No, no—that is not a bit right. / NORA. [laughing and swinging the tambourine]. Didn’t I tell you so? / RANK. Let me play for her. / HELMER. [getting up]. Yes, do. I can correct her better then. / [RANK sits down at the piano and plays. NORA dances more and more wildly. HELMER has taken up a position beside the stove, and during her dance gives her frequent instructions. She does not seem to hear him; her hair comes down and falls over her shoulders; she pays no attention to it, but goes on dancing. Enter Mrs Linde.] / MRS LINDE. [standing as if spell-bound in the doorway]. Oh!— / NORA. [as she dances]. Such fun, Christine! / HELMER. My dear darling Nora, you are dancing as if your life depended on it. / NORA. So it does. / HELMER. Stop, Rank; this is sheer madness. Stop, I tell you! [RANK stops playing, and NORA suddenly stands still. HELMER goes up to her.] I could never have believed it. You have forgotten everything I taught you. / NORA. [throwing away the tambourine]. There, you see. / HELMER. You will want a lot of coaching. / NORA. Yes, you see how much I need it. You must coach me up to the last minute. Promise me that, Torvald! / HELMER. You can depend on me.',
      annotations: [
        {
          phrase: 'Slower, slower!',
          note: "Helmer tries to set the pace of Nora's body as he sets her allowance and her diet. The short, repeated commands show the marriage in miniature: he directs, she performs.",
        },
        {
          phrase: 'I can correct her better then.',
          note: 'Helmer gives the piano to Rank so that he is free to watch and instruct. His pleasure in correcting her suggests that the dance matters to him as something he has shaped, not as anything she expresses.',
        },
        {
          phrase: 'She does not seem to hear him',
          note: "Here Nora stops answering to Helmer's voice. The stage direction lets her body say what she cannot: the dance has stopped being his lesson and become her panic.",
        },
        {
          phrase: 'her hair comes down and falls over her shoulders',
          note: 'In a respectable nineteenth-century household, loose hair signals disorder and even abandon. The doll is coming apart in front of the men, and some readers see in the image the first glimpse of the woman who will walk out.',
        },
        {
          phrase: 'you are dancing as if your life depended on it',
          note: "Helmer uses a figure of speech; the audience knows it is literal. Nora's reply, “So it does.”, turns his cliché into dramatic irony, because she believes that once he reads the letter her life as she knows it is over.",
        },
        {
          phrase: 'You have forgotten everything I taught you.',
          note: 'Helmer reads the frantic dance as a failure of his teaching rather than as distress. He sees Nora only in relation to himself, which is the blindness the final act exposes.',
        },
        {
          phrase: 'You must coach me up to the last minute.',
          note: 'Nora plays the helpless pupil to keep him away from the letterbox, and it works because it is the role he wants her in. Her dependence is a strategy here, which complicates any reading of her as simply a victim.',
        },
      ],
      question:
        'How does Ibsen use the tarantella rehearsal to dramatise the pressure on Nora at the end of Act 2? Write about the stage directions as well as the dialogue.',
    },
    {
      title: 'Doll-wife and doll-child',
      where: 'Act 3, the final conversation',
      pointer:
        "Act 3, a few minutes after Nora returns in everyday dress and sits Helmer down at the table: from Nora's “It is perfectly true, Torvald” to Helmer's “Both yours and the children’s, my darling Nora.” It comes shortly before she tells him she is leaving. The text below is Sharp's.",
      text: 'NORA. It is perfectly true, Torvald. When I was at home with papa, he told me his opinion about everything, and so I had the same opinions; and if I differed from him I concealed the fact, because he would not have liked it. He called me his doll-child, and he played with me just as I used to play with my dolls. And when I came to live with you— / HELMER. What sort of an expression is that to use about our marriage? / NORA. [undisturbed]. I mean that I was simply transferred from papa’s hands into yours. You arranged everything according to your own taste, and so I got the same tastes as you—or else I pretended to, I am really not quite sure which—I think sometimes the one and sometimes the other. When I look back on it, it seems to me as if I had been living here like a poor woman—just from hand to mouth. I have existed merely to perform tricks for you, Torvald. But you would have it so. You and papa have committed a great sin against me. It is your fault that I have made nothing of my life. / HELMER. How unreasonable and how ungrateful you are, Nora! Have you not been happy here? / NORA. No, I have never been happy. I thought I was, but it has never really been so. / HELMER. Not—not happy! / NORA. No, only merry. And you have always been so kind to me. But our home has been nothing but a playroom. I have been your doll-wife, just as at home I was papa’s doll-child; and here the children have been my dolls. I thought it great fun when you played with me, just as they thought it great fun when I played with them. That is what our marriage has been, Torvald. / HELMER. There is some truth in what you say—exaggerated and strained as your view of it is. But for the future it shall be different. Playtime shall be over, and lesson-time shall begin. / NORA. Whose lessons? Mine, or the children’s? / HELMER. Both yours and the children’s, my darling Nora.',
      annotations: [
        {
          phrase: 'He called me his doll-child',
          note: "Nora names the role her father gave her, and the compound fuses affection with ownership. It explains the play's title from the inside: the doll's house was her father's before it was Helmer's.",
        },
        {
          phrase: 'I was simply transferred from papa’s hands into yours',
          note: '“Transferred” is the language of property passing between owners, not of a bride choosing a husband. Nora describes her marriage as a handover between two men, which one reading takes to be the social criticism at the centre of the play.',
        },
        {
          phrase: 'or else I pretended to, I am really not quite sure which',
          note: 'Nora admits she cannot tell her own tastes from the ones she performed. The uncertainty is more unsettling than an accusation would be: the self she now has to find may not exist yet.',
        },
        {
          phrase: 'I have existed merely to perform tricks for you, Torvald.',
          note: "“Perform tricks” is what a trained pet does. It recalls Helmer's squirrel and skylark names and her own Act 2 offer that her squirrel would do all her tricks, but now she sees the performance from outside.",
        },
        {
          phrase: 'No, only merry.',
          note: 'Nora separates merriment, the surface gaiety Helmer enjoyed, from happiness. The three words land hard because they are calm: she is not raging at him, she is being exact.',
        },
        {
          phrase: 'our home has been nothing but a playroom',
          note: 'A playroom is where children pretend. Nora reclassifies the respectable family home as a nursery in which two adults have been playing at marriage, which gives the title its full force.',
        },
        {
          phrase: 'here the children have been my dolls',
          note: "The pattern has passed down a generation: Nora has treated her children as she was treated. This is why, in her argument, she must educate herself before she can bring them up, and it answers Helmer's Act 1 lecture on what parents pass on.",
        },
        {
          phrase: 'Playtime shall be over, and lesson-time shall begin.',
          note: 'Helmer concedes some truth but replies as a schoolmaster, keeping himself in charge. His neatly balanced sentence shows that he still cannot picture Nora as an equal, and it hardens her decision.',
        },
        {
          phrase: 'Whose lessons? Mine, or the children’s?',
          note: "Nora's sharp question exposes his assumption that she will be taught alongside the children. It turns his metaphor against him and leads straight to her claim that he is not the man to educate her.",
        },
      ],
      question:
        "How does Ibsen present Nora's new understanding of her life in this passage? How far does the rest of the play support her view that her marriage has been a game?",
    },
  ],

  languageAnalysis: [
    {
      technique: "Diminutives and animal names (Helmer's pet names)",
      example:
        "Act 1: “Is it my little squirrel bustling about?” and, after Krogstad's visit, “My little songbird must never do that again.” In Act 3 Nora hands the names back: “Exactly as before, I was your little skylark, your doll”.",
      effect:
        "The names are affectionate, and that is the point: Helmer's control never feels like control to him. Small animals are pretty, busy and harmless, so every name tells Nora what she is for. The strongest answers track who uses the names. Nora uses them herself in Act 2 to win favours, so she has learned to trade on them, and in Act 3 she quotes them as evidence against him. Meyer's translation, which AQA sets, has its own bird names: AQA's June 2023 mark scheme quotes “my little squanderbird”, so learn the names your copy uses.",
    },
    {
      technique: 'Dramatic irony',
      example:
        'Act 1, end: Helmer tells Nora, whom the audience knows to be a forger, that “Almost everyone who has gone to the bad early in life has had a deceitful mother.” In Act 2 he boasts, “You will see I am man enough to take everything upon myself.”',
      effect:
        'The audience knows what Helmer does not, so his confident speeches are heard twice: as he means them and as the play will test them. His lecture on lying mothers is aimed, without his knowing, at the woman in front of him, and it drives Nora to keep her children away. His boast of manly sacrifice is the promise Act 3 proves empty. Ibsen lets Helmer condemn himself in his own words rather than giving another character the job.',
    },
    {
      technique: 'Symbolic stage direction',
      example:
        'The opening of Act 2: the Christmas Tree stands “stripped of its ornaments and with burnt-down candle-ends on its dishevelled branches”, with Nora walking about uneasily.',
      effect:
        "Ibsen writes the state of Nora's mind into the set. In Act 1 she ordered the tree hidden until it was dressed, a symbol of the family display she maintains; now the display is used up and untidy. Before Nora says a word, an ordinary object has already shown the audience her state of mind. The detail also marks time: the celebration is over, and the reckoning has begun.",
    },
    {
      technique: 'Motif: “the wonderful thing”',
      example:
        "Act 2, Nora to Mrs Linde: “A wonderful thing is going to happen!” Act 3, Nora to Helmer: “It was tonight, when the wonderful thing did not happen”. Helmer's last words: “The most wonderful thing of all—?”",
      effect:
        "The phrase changes meaning each time it returns. First it is the sacrifice Nora hopes and fears Helmer will make, taking her crime upon himself; then it is the test he failed; finally it is the transformation that would make a real marriage possible. That the last hope is Helmer's, spoken to an empty room, is either a flicker of change in him or a sign that he still waits for something to happen to him. Translations differ here: William Archer's translation uses “miracle”, and AQA's June 2023 mark scheme, written for Meyer's translation, refers to “the motif of the miracle”, so look for that word in your copy.",
    },
    {
      technique: 'The language of business and accounts',
      example:
        'Act 1: Nora tells Mrs Linde about “quarterly interest” and “payment in installments”. Act 3: she sits Helmer down with “Torvald, this is a settling of accounts.”',
      effect:
        "Money is Helmer's world, as the new bank manager, and Nora has been secretly fluent in it for years. When she frames the final conversation as a settling of accounts she takes over his vocabulary to judge their marriage, treating it as a contract whose terms have been broken. One reading is that she can only speak with authority by borrowing a man's language; another is that she is showing she has always been capable of it.",
    },
    {
      technique: 'Imagery of disease and inheritance',
      example:
        "Act 1: Dr Rank calls Krogstad one of “those who are morally diseased”; Helmer says every breath the children take in a liar's home is “full of the germs of evil”. Act 2: Rank protests at having to “pay this penalty for another man’s sin”. Act 3: Helmer tells Nora that “all your father’s want of principle has come out in you.”",
      effect:
        "The images connect Rank's inherited illness, Krogstad's reputation and Nora's supposed moral weakness into one idea: that what parents are, children become. Helmer uses it as a weapon, first against Krogstad and then against Nora. One reading is that the play half-accepts the idea, since Nora fears for her children, and half-exposes it, since what she seems really to have inherited is a habit of deferring to men.",
    },
    {
      technique: 'Stage properties: the letterbox and the key',
      example:
        'Act 2: Nora shows Mrs Linde the letter, saying “you can see it through the glass in the letter-box”; asked if her husband keeps the key, she answers “Yes, always.” Act 3: Helmer finds the lock tampered with: “Here is a broken hairpin. Nora, it is one of yours.”',
      effect:
        "From late in Act 2 until late in Act 3 the truth is physically present, visible through glass but locked away, and only Helmer can open it. The box turns the law of the household into an object: information reaches the family through the husband's key. The broken hairpin is a small, precise detail. It suggests that someone, almost certainly Nora, has tried to force the lock, though she quickly blames the children, and that a piece of her own dressing-up was no match for his lock.",
    },
    {
      technique: "Shifts in Nora's register and sentence form",
      example:
        'Act 2: “Your squirrel would run about and do all her tricks”, Nora speaking of herself in the third person to win Helmer round. Act 3: “I have never felt my mind so clear and certain as tonight” and “I must stand quite alone, if I am to understand myself and everything about me.”',
      effect:
        "Early on Nora speaks in exclamations, questions and baby-talk, and even refers to herself as Helmer's pet. In Act 3 her sentences become long, reasoned and built on “I must”. The change in grammar dramatises the change in the person: she moves from being the object of other people's sentences to the subject of her own. AQA's June 2023 mark scheme picks out the same movement in Meyer's wording, from a pet name Nora uses of herself to “I believe that I am first and foremost a human being”.",
    },
    {
      technique: 'Doubling: parallel characters',
      example:
        'Act 1: Krogstad tells Nora that his “one false step, which lost me all my reputation, was nothing more or nothing worse than what you have done.” Act 3: Mrs Linde proposes to him that “Two on the same piece of wreckage would stand a better chance than each on their own.”',
      effect:
        "Ibsen builds Nora a double in Krogstad: both have committed forgery, and both are driven to despair by disgrace or the fear of it. The play never gives Krogstad's motive, and Nora scorns the idea that he ran his risk to save a wife's life, yet the law, as he tells her, cares nothing about motives. Society has ruined him and threatens to ruin her, which invites the reading that the fault lies in the society as much as in them. Mrs Linde and Krogstad then show the marriage the Helmers do not have, made between two people who know the worst of each other. The parallels invite the audience to judge the Helmers against them.",
    },
    {
      technique: 'Ending on an offstage sound',
      example:
        "Act 3, the final stage direction in Sharp's translation: “The sound of a door shutting is heard from below.”",
      effect:
        "The play gives no closing speech and no reconciliation, only the sound of a door below that the audience hears but does not see. Ibsen denies Helmer, and the audience, a final word to settle the question. Translations make the sound louder or quieter: AQA's June 2023 mark scheme puts the words “slammed shut” in quotation marks for this moment, so compare Meyer's final stage direction with Sharp's quieter “shutting”. Either way, the room is left to the man who has just said he will believe in a change.",
    },
  ],

  vocabulary: [
    {
      term: 'Prescribed translation',
      definition:
        "The version of a translated text an exam board requires. AQA English Literature B requires Michael Meyer's translation in the Bloomsbury Methuen Drama edition, and its paper is open book, so quote Meyer's wording accurately. OCR names no translation. Other translations, including Sharp's used in the passages above, word many lines differently.",
    },
    {
      term: 'Doll-wife and doll-child',
      definition:
        "Nora's own words in Act 3 for the roles her husband and her father gave her. The hyphenated compounds fuse love with ownership and explain the title: she has been a plaything in two houses.",
    },
    {
      term: 'Tarantella',
      definition:
        "A fast, whirling folk dance from southern Italy. Nora learned it at Capri during the year in Italy, and is to dance it at the Stenborgs' fancy-dress ball, upstairs from the Helmers, in the Neapolitan fisher-girl's dress Helmer had made for her there.",
    },
    {
      term: 'Macaroon',
      definition:
        "A small almond biscuit. Helmer has forbidden them, afraid, Nora says, that they will spoil her teeth. Eating them in secret, and lying about it, is the smallest of Nora's deceptions and the first the audience sees.",
    },
    {
      term: 'Bond',
      definition:
        "A signed document recording a loan and the conditions for repaying it. Krogstad drew up the bond for the two hundred and fifty pounds (Sharp's figure); Nora signed it, and the bond he returns in Act 3 is what Helmer burns in the stove.",
    },
    {
      term: 'Surety',
      definition:
        "A person who guarantees a loan and must pay if the borrower cannot. Nora's father was meant to sign the bond as surety; he was dying, so Nora signed his name herself and dated it 2 October, three days after his death on 29 September.",
    },
    {
      term: 'Forgery',
      definition:
        "Signing another person's name to deceive. It is the crime Krogstad committed years before the play begins and the crime Nora committed to save Helmer, which makes the two of them doubles.",
    },
    {
      term: 'Spendthrift',
      definition:
        "Someone who wastes money. It is Helmer's teasing name for Nora in the opening scene. Meyer's translation, which AQA sets, uses its own pet names: AQA's June 2023 mark scheme quotes “my little squanderbird”.",
    },
    {
      term: 'Quill-driver',
      definition:
        "A scornful word for a clerk who writes all day. Helmer uses it of Krogstad when he sends the dismissal, and in Krogstad's next scene he applies it bitterly to himself.",
    },
    {
      term: 'Domino',
      definition:
        "A loose cloak, usually hooded, worn with a mask to a masked ball. Helmer wears a black one to the Stenborgs' ball, and in Act 3 Nora throws it round herself as she prepares to rush out into the night.",
    },
    {
      term: 'Black cross',
      definition:
        'The mark Dr Rank tells Nora he will put on his visiting card as soon as he is certain that the end of his illness has begun. Two such cards are found at the top of the letterbox in Act 3: his silent goodbye.',
    },
    {
      term: 'Consumption of the spine',
      definition:
        "Sharp's name for Dr Rank's illness, which Nora says he suffers because his father committed all sorts of excesses. Other translations word the illness differently, so use the term your own copy uses.",
    },
    {
      term: 'Pounds and shillings',
      definition:
        "Sharp turns the Norwegian money into English pounds and shillings. William Archer's translation keeps the Norwegian currency, explained in footnotes: the porter asks for fifty øre, and the loan, Sharp's two hundred and fifty pounds, is twelve hundred dollars, or four thousand eight hundred crowns. If your translation gives different sums, it is the currency that differs, not the plot.",
    },
    {
      term: 'Wedlock',
      definition:
        "Marriage, in its full legal and moral sense. In Sharp's translation it is the word Nora uses, just before she says goodbye, for what their life together would have to become if they were ever to be more than strangers.",
    },
    {
      term: 'Stage direction',
      definition:
        "The playwright's instructions about setting, movement and sound, printed in italics or brackets. Ibsen's are unusually detailed, from the furnished room of the opening to the sound of the door at the end, and they are part of his meaning, not decoration.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the audience knows something a character does not, so the character's words carry a second meaning. Helmer's speeches about lying mothers and manly sacrifice are the play's sharpest examples.",
    },
  ],

  timeline: [
    {
      where: 'Act 1, opening',
      title: 'Christmas Eve homecoming',
      summary:
        'Nora comes home with a Christmas tree and parcels, tips the porter generously and eats macaroons in secret. Helmer calls to her from his study with pet names, teases her about spending and gives her money for the housekeeping.',
      setting: "The Helmers' drawing room, Christmas Eve morning",
      who: ['Nora Helmer', 'Torvald Helmer', 'The Maid'],
      quote: 'Has my little spendthrift been wasting money again?',
      themes: ['Marriage and Gender Roles', 'Money and Independence'],
      tension: 1,
      significance:
        'In a few lines Ibsen sets out the marriage the rest of the play takes apart: he names and manages, she performs and hides.',
    },
    {
      where: 'Act 1, Nora and Mrs Linde',
      title: 'The secret loan',
      summary:
        "Christine Linde, widowed and looking for work, arrives after nearly ten years apart. Told that she is a child who knows nothing of hardship, Nora reveals that she secretly raised the money for the year in Italy that saved Helmer's life, and has repaid it by saving and by copying work.",
      setting: 'The drawing room, Christmas Eve',
      who: ['Nora Helmer', 'Mrs Linde'],
      quote: 'It was like being a man.',
      themes: [
        'Money and Independence',
        'Sacrifice - Male and Female Forms',
        'Identity and Self-Discovery',
      ],
      tension: 2,
      significance:
        "Nora's pride in her secret shows a capable adult hidden inside the “squirrel”, and plants the debt that drives the plot.",
    },
    {
      where: "Act 1, Krogstad's first visit",
      title: 'The forged signature',
      summary:
        "Krogstad, a clerk at the bank and the man who lent Nora the money, demands that she save his post. He points out that her father's signature on the bond is dated three days after his death, and Nora admits she wrote it herself.",
      setting: "The drawing room, Christmas Eve, interrupting the children's game of hide and seek",
      who: ['Nora Helmer', 'Nils Krogstad', 'The Children'],
      quote: 'The law cares nothing about motives.',
      themes: ['Truth versus Deception', 'Money and Independence'],
      tension: 4,
      significance:
        "An act of love becomes a crime in law, and Krogstad's threat starts the play's clock.",
    },
    {
      where: 'Act 1, ending',
      title: 'Poison in the home',
      summary:
        'Helmer refuses to keep Krogstad on and lectures Nora on how a liar poisons his home and his children, blaming deceitful mothers above all. Left alone, Nora tells the Nurse to keep the children away from her.',
      setting: 'The drawing room, Christmas Eve, the tree half-dressed',
      who: ['Nora Helmer', 'Torvald Helmer', 'The Nurse'],
      quote: 'Deprave my little children? Poison my home?',
      themes: ['Heredity and the Sins of the Fathers', 'Truth versus Deception'],
      tension: 3,
      significance:
        "Helmer's certainty that lies infect children becomes the argument Nora later turns on herself when she decides to leave them.",
    },
    {
      where: 'Act 2, opening',
      title: 'The stripped tree',
      summary:
        'On Christmas Day the tree stands stripped and burnt down. Nora asks the Nurse, who gave up her own child to nurse her, whether children forget a mother who goes away, and Mrs Linde comes to mend the fancy-dress costume.',
      setting: 'The drawing room, Christmas Day',
      who: ['Nora Helmer', 'The Nurse', 'Mrs Linde'],
      quote: 'how could you have the heart to put your own child out among strangers?',
      themes: ['Sacrifice - Male and Female Forms', 'The Bourgeois Home as Stage'],
      tension: 2,
      significance:
        "The Nurse's story shows the working women whose sacrifices keep the household running, and quietly foreshadows Nora's leaving.",
    },
    {
      where: 'Act 2, Helmer and Nora',
      title: "Krogstad's dismissal",
      summary:
        "Nora pleads for Krogstad's post with her squirrel-and-skylark routine. Helmer admits his real objection is Krogstad's over-familiar manner, sends the maid out with the letter of dismissal at once, and promises he is strong enough to bear anything.",
      setting: 'The drawing room, Christmas Day',
      who: ['Nora Helmer', 'Torvald Helmer', 'The Maid'],
      quote: 'You will see I am man enough to take everything upon myself.',
      themes: ['Marriage and Gender Roles', 'Truth versus Deception'],
      tension: 3,
      significance:
        "His boast feeds Nora's hope of a “wonderful thing” and sets up the test he fails in Act 3.",
    },
    {
      where: 'Act 2, Nora and Dr Rank',
      title: "Rank's confession",
      summary:
        'Dr Rank tells Nora that his inherited illness is near its end and that he will send her a card marked with a black cross when the end begins. As she works up to asking him for help, he declares his love, and she refuses to ask him for anything.',
      setting: 'The drawing room, Christmas Day, as it grows dark',
      who: ['Nora Helmer', 'Dr Rank'],
      quote: 'Let me pass.',
      themes: ['Heredity and the Sins of the Fathers', 'Performance and the Tarantella'],
      tension: 3,
      significance:
        "Nora's refusal to trade on Rank's love is a clear moral choice made against her own interest.",
    },
    {
      where: "Act 2, Krogstad's letter",
      title: 'The letter in the box',
      summary:
        'Krogstad, now dismissed, demands a higher post at the bank as the price of silence. He guesses that Nora has thought of running away, or of something worse, and warns her against it, then drops his letter into the locked letterbox, to which only Helmer has a key.',
      setting: 'The drawing room and the hall door, Christmas Day',
      who: ['Nora Helmer', 'Nils Krogstad', 'Mrs Linde'],
      quote: 'Torvald, Torvald, there is no hope for us now!',
      themes: ['Truth versus Deception', 'Money and Independence'],
      tension: 4,
      significance:
        'The truth is now physically in the house, visible through glass behind a lock Nora cannot open.',
    },
    {
      where: 'Act 2, ending',
      title: 'The tarantella rehearsal',
      summary:
        'To keep Helmer from the letterbox, Nora begs him to coach her dance and dances more and more wildly while he calls out corrections. He agrees to read nothing until after the ball, and Nora counts the hours she believes she has left.',
      setting: 'The drawing room, Christmas Day, before dinner',
      who: ['Nora Helmer', 'Torvald Helmer', 'Dr Rank', 'Mrs Linde'],
      quote: 'Thirty-one hours to live.',
      themes: ['Performance and the Tarantella', 'Truth versus Deception'],
      tension: 4,
      significance:
        'Performance becomes desperate delay, and her countdown shows how completely she believes her life is at stake.',
    },
    {
      where: 'Act 3, Mrs Linde and Krogstad',
      title: 'Two shipwrecked people',
      summary:
        'While the Helmers are at the ball upstairs, Mrs Linde explains that she broke with Krogstad years ago to support her mother and brothers, and proposes that they marry. He offers to ask for his letter back, but she insists Helmer must read it.',
      setting: "The drawing room, the night of the Stenborgs' ball, with dance music overhead",
      who: ['Mrs Linde', 'Nils Krogstad'],
      quote: 'how would it be if we two shipwrecked people could join forces?',
      themes: ['Truth versus Deception', 'Marriage and Gender Roles'],
      tension: 3,
      significance:
        "A marriage between two people who know each other's worst is set beside the Helmers' just before theirs is tested.",
    },
    {
      where: 'Act 3, after the ball',
      title: "Rank's last visit",
      summary:
        'Helmer brings Nora home still in her Italian costume and boasts of her success to Mrs Linde, who then leaves; alone with Nora, he presses his attentions on her, which she refuses. Rank calls, tells them his examination has brought certainty, jokes that he will be invisible at the next ball and leaves; soon after, his black-crossed cards are found in the letterbox.',
      setting: 'The drawing room, late on the night of the ball',
      who: ['Nora Helmer', 'Torvald Helmer', 'Mrs Linde', 'Dr Rank'],
      quote: 'At the next fancy-dress ball I shall be invisible.',
      themes: ['Heredity and the Sins of the Fathers', 'Performance and the Tarantella'],
      tension: 3,
      significance:
        "Rank's quiet, dignified goodbye stands against the loud scene that follows, and delays the letter a few minutes more.",
    },
    {
      where: 'Act 3, Helmer reads the letter',
      title: 'The first letter',
      summary:
        'Nora, who has resolved to die rather than let Helmer take the blame, is about to rush out when he stops her with the letter. He calls her a hypocrite, a liar and a criminal, blames her father, and says she may stay only for appearances and must not bring up the children.',
      setting: 'The drawing room, late at night',
      who: ['Nora Helmer', 'Torvald Helmer'],
      quote: 'save the remains, the fragments, the appearance',
      themes: ['Truth versus Deception', 'Marriage and Gender Roles'],
      tension: 5,
      significance:
        "Helmer's first thought is for his reputation, the opposite of the sacrifice Nora expected of him.",
    },
    {
      where: 'Act 3, the second letter',
      title: 'I am saved',
      summary:
        'The maid brings a second letter from Krogstad, which returns the bond. Helmer burns the papers, forgives Nora at length and says she has become both wife and child to him, while she goes out to change out of her costume.',
      setting: 'The drawing room, late at night',
      who: ['Nora Helmer', 'Torvald Helmer', 'The Maid'],
      quote: 'I am saved! Nora, I am saved!',
      themes: ['Marriage and Gender Roles', 'Identity and Self-Discovery'],
      tension: 4,
      significance:
        'His instant reversal, and the singular “I”, is the moment Nora sees her marriage clearly.',
    },
    {
      where: 'Act 3, the settling of accounts',
      title: 'The first serious conversation',
      summary:
        'Nora returns in everyday dress, sits Helmer down and tells him that in eight years they have never talked seriously. She says she has been a doll to her father and to him, that she must educate herself, and that she is leaving at once.',
      setting: 'The drawing room, the table set between them',
      who: ['Nora Helmer', 'Torvald Helmer'],
      quote: 'Torvald, this is a settling of accounts.',
      themes: ['Identity and Self-Discovery', 'Marriage and Gender Roles'],
      tension: 5,
      significance:
        "The play's climax is a conversation rather than an event: action gives way to argument.",
    },
    {
      where: 'Act 3, ending',
      title: 'The door',
      summary:
        'Nora exchanges wedding rings with Helmer, leaves her keys and refuses letters or help. She says only a great change in both of them could make a real marriage, and goes; Helmer, alone, clings to a last hope before a door is heard shutting below.',
      setting: 'The drawing room and, offstage, the street door',
      who: ['Nora Helmer', 'Torvald Helmer'],
      quote: 'The most wonderful thing of all—?',
      themes: [
        'Identity and Self-Discovery',
        'Marriage and Gender Roles',
        'The Bourgeois Home as Stage',
      ],
      tension: 5,
      significance:
        'Ibsen ends on an open question and an offstage sound, refusing the reconciliation the audience expects.',
    },
  ],

  relationships: [
    {
      from: 'Torvald Helmer',
      to: 'Nora Helmer',
      kind: 'husband and wife',
      note: 'He treats her as a pet and manages her money, food and dancing; she hides her competence to spare his pride. When his forgiveness proves to be about himself, she leaves.',
    },
    {
      from: 'Nils Krogstad',
      to: 'Nora Helmer',
      kind: 'lender and borrower',
      note: 'His blackmail drives the plot, but he is also her double: both have committed forgery, and both are driven to despair by disgrace or the fear of it.',
    },
    {
      from: 'Mrs Linde',
      to: 'Nora Helmer',
      kind: 'old school friends',
      note: 'Christine first treats Nora as a child, then becomes her confidante and witness, and finally decides that the letter must be read.',
    },
    {
      from: 'Mrs Linde',
      to: 'Nils Krogstad',
      kind: 'former sweethearts',
      note: "She broke with him to marry a man who could support her family. Their second chance, made with open eyes, is often read as the play's picture of a marriage between equals.",
    },
    {
      from: 'Dr Rank',
      to: 'Nora Helmer',
      kind: 'friends',
      note: 'Nora calls him her truest and best friend, and she is about to ask him for help when he declares his love. After that she will not ask him for anything.',
    },
    {
      from: 'Torvald Helmer',
      to: 'Nils Krogstad',
      kind: 'boyhood friends, now manager and clerk',
      note: "Helmer dismisses him partly on moral grounds and partly because Krogstad's familiar manner embarrasses him when other people are present.",
    },
    {
      from: 'Torvald Helmer',
      to: 'Dr Rank',
      kind: 'close friends',
      note: 'Rank bars Helmer from his sickroom because Helmer cannot bear anything ugly, a judgement the final act bears out.',
    },
    {
      from: 'The Nurse',
      to: 'Nora Helmer',
      kind: 'nurse and the child she raised',
      note: 'She gave up her own daughter to nurse Nora. In Act 2 Nora half-asks her to mother the children if they had no other mother, and in Act 3 she leaves them, saying they are in better hands than hers.',
    },
    {
      from: 'Nora Helmer',
      to: 'The Children',
      kind: 'mother and children',
      note: "She plays with them like dolls, keeps them away after Helmer's lecture on lying mothers, and leaves them believing she is not yet fit to bring them up.",
    },
  ],

  compareWith: [
    {
      title: "The Handmaid's Tale",
      href: '/resources/revision-notes/the-handmaids-tale',
      reason:
        "Set beside A Doll's House on AQA's political and social protest writing paper, it shows a woman whose body, money and name are controlled by law and household, and whose ending is as open as Nora's.",
    },
    {
      title: 'Othello',
      href: '/resources/revision-notes/othello',
      reason:
        "Both plays turn on a husband whose response to a small object, a handkerchief or a letter, exposes what his marriage really rests on, and in both the husband's idea of honour is tested: Helmer says that no man would sacrifice his honour for the one he loves. Othello is also a set text for AQA English Literature B, and for OCR from the 2027 exams.",
    },
    {
      title: 'King Lear',
      href: '/revision/texts/king-lear',
      reason:
        'A father who demands that his daughters say what he wants to hear, as Nora says hers did, set against a daughter who refuses. From the 2027 exams it is on the same OCR paper as Ibsen, and it is also an AQA English Literature B set text.',
    },
  ],

  contentGuidance: [
    'crime_injustice',
    'intimate_relationships',
    'mental_health',
    'mortality',
    'discrimination',
  ],

  quotesFromElsewhere: [
    'my little squanderbird',
    'squanderbird',
    'I believe that I am first and foremost a human being',
    'slammed shut',
    'miracle',
    'the motif of the miracle',
  ],

  sources: [
    {
      label:
        "Project Gutenberg eBook #2542, A Doll's House, translated by R. Farquharson Sharp: the whole play read, and every passage and quotation copied from it",
      url: 'https://www.gutenberg.org/cache/epub/2542/pg2542.txt',
    },
    {
      label:
        "Everyman's Library no. 494, A Doll's House and Two Other Plays (J. M. Dent, 1910), Internet Archive scan: Sharp's own note that the translation of A Doll's House is his",
      url: 'https://archive.org/stream/dollshousetwooth00ibseuoft/dollshousetwooth00ibseuoft_djvu.txt',
    },
    {
      label: 'Indiana University library catalogue record for the 1910 Everyman edition',
      url: 'https://iucat.iu.edu/catalog/3960663',
    },
    {
      label: 'Open Library author record: R. Farquharson Sharp, 1864 to 1945',
      url: 'https://openlibrary.org/authors/OL18233A/R._Farquharson_Sharp',
    },
    {
      label:
        "William Archer's translation, Thomas Nelson reprint of the text in Archer's Collected Works of Ibsen (Heinemann), Internet Archive scan: used to compare wording (miracle, currency footnotes, character names) and to check the page above",
      url: 'https://archive.org/stream/dollshouseplayin00ibseuoft/dollshouseplayin00ibseuoft_djvu.txt',
    },
    {
      label:
        'AQA A-level English Literature B (7717) specification, texts and genres: Meyer translation required, Bloomsbury Methuen Drama edition',
      url: 'https://www.aqa.org.uk/subjects/english/a-level/english-7717/specification/subject-content/texts-and-genres',
    },
    {
      label: 'AQA 7717 specification at a glance: Paper 2 is open book',
      url: 'https://www.aqa.org.uk/subjects/english/a-level/english-7717/specification/specification-at-a-glance',
    },
    {
      label:
        "AQA 7717/2B mark scheme, June 2023: Meyer's wording quoted (squanderbird, first and foremost a human being, slammed shut, the motif of the miracle)",
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-77172B-MS-JUN23.PDF',
    },
    {
      label:
        "AQA 7717/2B mark scheme, June 2022: confirms the question is set on Meyer's translation",
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-77172B-MS-JUN22.PDF',
    },
    {
      label:
        'Cambridge OCR A-level English Literature H472 specification, version 2.1: Component 01, Section 2, one pre-1900 drama and one pre-1900 poetry text, closed text; no translation named; King Lear and Othello added to Section 1 for assessment from 2027',
      url: 'https://www.ocr.org.uk/Images/171200-specification-accredited-a-level-gce-english-literature-h472.pdf',
    },
    {
      label: "Wikipedia, A Doll's House: first publication and premiere dates, Norwegian title",
      url: 'https://en.wikipedia.org/wiki/A_Doll%27s_House',
    },
  ],
}
