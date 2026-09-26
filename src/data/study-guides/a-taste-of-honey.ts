import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A Taste of Honey, Shelagh Delaney (first performed 27 May 1958; published
 * 1959). A complete guide, written to replace the thin coverage the text had.
 *
 * HOW THE QUOTATIONS WERE CHECKED. Every quotation here was found verbatim in
 * the Internet Archive's full-text index of the 1959 Grove Press edition
 * (tasteofhoneyplay01dela), searched item by item so that each hit returns the
 * speaker label and the lines around it; most were also found in a second 1959
 * printing (tasteofhoney0000unse_h9w3) and in Grove's Seven Plays of the Modern
 * Theater. The 1982 Methuen student edition is NOT in that index (a search of
 * it for "Helen" returns nothing), so no quotation was checked against it; an
 * earlier draft of this note said otherwise. Jo's "I don't want to be a
 * mother" line is also printed by the British Library. Scene placement was
 * fixed by chaining neighbouring lines and by the Grove running heads
 * ("[ACT II", "SCENE II]"), then checked against the GradeSaver summaries.
 *
 * WHAT THE EXISTING PAGE GOT WRONG, found in the course of this check. The
 * /resources/english-literature/caie/a-taste-of-honey page was read for
 * orientation only and nothing was copied from it. It places Jo's "I really do
 * live at the same time as myself" in Act 1; Geof is not in Act 1, and the
 * surrounding lines (Geof pushes her away with his mop) put it in Act 2,
 * Scene 2. It gives Geof's surname as Ingham; the text calls him Geoffrey
 * Ingram. It also prints several lines that no scanned edition contains in
 * that form, including "I'm not just somebody's mother", "You've got to get
 * rid of this baby, Jo" and "You know I'm not really dark, don't you?". Its
 * "The dream has gone but the baby is real enough" is a misquotation, not an
 * invention: Geof says it in Act 2, Scene 2 with contractions, and the Smiths
 * reworded it in a song. An earlier draft of this guide called it a Morrissey
 * lyric that is not in the play, and a tip told students so; both were wrong.
 * None of those lines is used here.
 *
 * PAGE NUMBERS are not given. The scanned editions and the study sites
 * paginate differently (one line sits on page 23 of one edition and 26 of
 * another), so every moment is located by act, scene and the action around it.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to and summarised. The nursery rhymes and songs in the play are
 * described, never quoted.
 */
export const guide: StudyGuide = {
  slug: 'a-taste-of-honey',
  title: 'A Taste of Honey',
  author: 'Shelagh Delaney',
  form: 'play',
  scope:
    'The whole play, in two acts of two scenes each: Act 1, Scenes 1 and 2, and Act 2, Scenes 1 and 2. For AQA GCSE English Literature (8702) it is a modern prose or drama text on Paper 2, examined closed book, so you need your quotations by heart. For Cambridge IGCSE Literature in English (0475) it is a drama set text on Paper 2 (Drama) or Paper 3 (Drama, Open Text), where you choose between a question on a printed passage and an essay question on the whole play. Editions are paginated differently, so this guide locates every moment by act, scene and what is happening, not by page.',
  rights: {
    status: 'copyright',
    acknowledgement:
      'A Taste of Honey by Shelagh Delaney, first staged 1958. The 1959 Grove Press (New York) edition, against which the quotations were checked, prints the copyright as © 1959 Theatre Workshop (Pioneer Theatres Ltd). Quoted for criticism and review.',
  },
  workLength: {
    words: 17000,
    basis:
      'Estimated, not counted: in the 1959 Grove Press edition the play text ends on about page 88 (the running head of the final exchange reads page 87), and a page of short dramatic dialogue carries roughly 200 words. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      "A Taste of Honey is set in a shabby rented flat in the north of England in the late 1950s. The stage directions place it in Manchester; most accounts place it in Delaney's own Salford, near the docks. Helen, a hard-drinking single mother who lives on the money and gifts of boyfriends, moves into the flat with her teenage daughter, Jo. Jo is still at school, sharp-tongued, artistic and desperate to be independent. Within the first act Helen agrees to marry Peter, a younger man with money and an eye patch, and leaves Jo alone. Jo, meanwhile, is engaged to a Black sailor, Jimmie, who gives her a cheap ring, spends Christmas with her and then goes back to sea.",
      'Act 2 opens months later, in summer. Jo is pregnant, working two jobs, and Jimmie has not come back. She takes in Geof, an art student whose landlady has thrown him out and who she suspects is gay. Geof cooks, cleans, sews clothes for the baby and even proposes to her. Helen visits, fetched by Geof, and the two women fight; then Peter throws Helen out, and she returns to the flat with her luggage, exactly as she arrived at the start. Helen drives Geof away, and when Jo tells her the baby will be Black, Helen goes out for a drink. The play ends with Jo alone, close to giving birth, reciting a nursery rhyme Geof taught her.',
      "The play is less about what happens than about how people talk their way through it. Helen and Jo fight in quick-fire, funny, cruel exchanges, and the comedy is how they survive. The strongest answers argue that Delaney refuses both easy judgements: Helen is a neglectful mother who is also Jo's mirror, and Jo, who swears she is nothing like her mother, repeats Helen's story almost exactly. The title's honey is the brief sweetness each character tastes, a romance, a marriage, a friendship, before the old pattern closes over it again. Whether the ending is hopeful or bleak is the question the play leaves with you.",
    ],
  },

  context: [
    {
      heading: 'Shelagh Delaney and how the play was written',
      body: "Shelagh Delaney was born on 25 November 1938 in Broughton, Salford, the daughter of a bus inspector. She failed the eleven-plus, went to Broughton Secondary Modern and moved at fifteen to Pendleton High School, where she gained five O-levels. She wrote A Taste of Honey at nineteen. The story she liked to tell was that she saw Terence Rattigan's play Variation on a Theme at the Opera House in Manchester, thought she could do better, and was particularly unhappy with the way Rattigan portrayed gay men. Some accounts name a different play. In spring 1958 she sent the script to the director Joan Littlewood with a covering letter that begins “A fortnight ago I didn’t know the theatre existed”. The historian Selina Todd points out that this pose of the naive beginner was partly strategic: Delaney had been writing for years, and the play had begun life as a novel. Delaney died in 2011.",
    },
    {
      heading: 'Theatre Workshop and Joan Littlewood',
      body: "Littlewood's company, Theatre Workshop, had been based at the Theatre Royal, Stratford East, in London since 1953, and it staged the play there on 27 May 1958. It transferred to Wyndham's Theatre in the West End in February 1959. Littlewood reshaped the script: according to the British Library, she pruned it, reorganised the action, added music-hall routines and comic business, and put a live jazz trio on stage. The music linked the scenes, each character had a signature tune, actors danced on and off, and Avis Bunnage, the first Helen, was famous for her asides to the audience. The original typescript, now in the British Library, is darker than the published play, with many more references to death, and gives Peter a gentler side. Critics still argue about how much of the play is Littlewood's, but the British Library's reading of the typescript shows that its dialogue, story and characters were already Delaney's.",
    },
    {
      heading: 'The new realism of the late 1950s',
      body: "John Osborne's Look Back in Anger, staged at the Royal Court in 1956, is usually named as the first play of a new wave that put working-class and lower-middle-class lives on stage, and the label kitchen sink realism, borrowed from John Bratby's paintings, came to describe it. A Taste of Honey belongs to that wave but differs from it in one important way: as Selina Todd argues, it builds the action around women's lives, sex and motherhood rather than an angry young man. The critic Kenneth Tynan praised the characters' “zest for life”; Lindsay Anderson called the play “a work of complete, exhilarating originality”. Not everyone agreed: the Daily Mail sneered that it tasted “of exercise books and marmalade”, a jibe that seems aimed at the author's youth.",
    },
    {
      heading: 'Race in 1950s Britain',
      body: "The British Nationality Act 1948 gave citizenship and the right to settle in Britain to people across the Empire, and the Empire Windrush docked at Tilbury on 21 June 1948 carrying several hundred passengers from the Caribbean. Not every Black Briton was a newcomer, though: Jimmie tells Jo that his family came not from Africa but from Cardiff. Prejudice was open and common. In August and September 1958, three months after the play opened, racist violence broke out in Nottingham and then in Notting Hill in London, where white mobs attacked the homes of West Indian residents. In the play Jo assures Jimmie that her mother is not prejudiced, and Helen's reaction to the news that the baby will be Black proves her wrong. The British Library notes that Littlewood's version sharpened Helen's disgust at that moment.",
    },
    {
      heading: 'Homosexuality, the law and the censor',
      body: "In 1958 sex between men was a crime in Britain. The Wolfenden report of 4 September 1957 had recommended that homosexual behaviour between consenting adults in private should no longer be an offence, but the law in England and Wales did not change until the Sexual Offences Act 1967. Every new play also needed a licence from the Lord Chamberlain, the official theatre censor, until the Theatres Act 1968 abolished the role. The British Library holds the censor's report on this play and describes the censors as confused by its treatment of Geof. Delaney never has Geof say what he is: Jo guesses, teases and interrogates him, and he refuses to confirm or deny it. That silence was partly forced by the times, but it also lets Geof be defined by his kindness rather than by a label.",
    },
    {
      heading: 'Unmarried mothers and women’s choices',
      body: "Jo's pregnancy happens, in Selina Todd's phrase, in a pre-Pill world, and the play's women have few ways to control their lives. Abortion was illegal in Britain until the Abortion Act 1967, which came into force on 27 April 1968. Marriage is the security on offer: Helen marries Peter for his money, and Geof's proposal to Jo is partly an offer of respectability for her and the baby. Having a baby outside marriage brought gossip and shame, and the play shows it through Helen's report of what the neighbours are calling Jo. Delaney also gives her characters a sense of being watched and judged by respectable society, which they answer with jokes. The play was radical for showing a pregnant teenager, a mixed-race baby and a gay man as ordinary people rather than as warnings.",
    },
    {
      heading: 'The film and the play’s afterlife',
      body: 'Tony Richardson directed the film in 1961 from a screenplay he wrote with Delaney, with Rita Tushingham as Jo, Dora Bryan as Helen and Murray Melvin, the stage Geof, repeating his role. It won BAFTAs, including Best British Film and Best British Screenplay, and Tushingham and Melvin won the acting prizes at Cannes. The play reached Broadway in 1960. It later became a set text in schools, and has been revived many times, including at the National Theatre in 2014 and at Trafalgar Studios in the West End in 2019. Morrissey of the Smiths said that much of his reason for writing could be blamed on Delaney. She went on to write The Lion in Love (1960), the autobiographical stories of Sweetly Sings the Donkey (1963) and the films Charlie Bubbles (1967) and Dance with a Stranger (1985).',
    },
  ],

  themes: [
    {
      title: 'Mothers and daughters',
      body: "The play is built around one relationship, and Delaney refuses to make it simple. Helen neglects Jo, cannot tell her what day she was born on, leaves her for Peter and asks outright whether she has ever claimed to be a proper mother. Yet she also discovers Jo's drawings with real pleasure, offers to pay for art school, rages at the ring because she fears Jo is repeating her mistakes, and comes back when Jo is about to give birth. Jo, in turn, mocks and resists her mother while craving her attention: she remembers trying to hold Helen's hands as a child, and admits she wishes Helen were there, even though Geof reminds her they would only quarrel. One reading sees Helen as simply selfish. The more convincing one, supported by Geof's warning that Jo will turn out exactly like her, is that the two women are more alike than either can bear, and that their fighting is the only form of closeness they know.",
    },
    {
      title: 'Poverty and class',
      body: "From the comfortless flat of the opening stage direction onwards, poverty shapes every choice: the room has no heating, a shared bathroom, a bare light bulb and a view of the gasworks. Helen chose it for the rent; Jo's shoes let in water; Jo works in a shoe shop by day and a bar by night to keep the place. Delaney shows how poverty limits imagination as well as comfort. Jo turns down art school because she has had too many different schools in too many different places. Helen's philosophy of life comes down to two words, work or want. The dirty children in the street, whom Jo blames on their parents, are a picture of what her own child may become. Yet the play never asks for pity. Its characters mock their surroundings, and that humour is both a defence and a kind of dignity.",
    },
    {
      title: 'Love, sex and the taste of honey',
      body: "Every relationship in the play offers a brief sweetness and then ends. Jo's romance with Jimmie is tender, playful and over by the New Year; Helen's marriage to Peter lasts only months before he leaves her for another woman; even Geof's devotion ends with him leaving the flat. Delaney separates love from sex and both from marriage. Helen tells Jo that anybody can fall in love, but that love is not the same as the rest of it, and Jo later says she does not know much about love at all. The play's view is not cynical so much as clear-eyed: love and lust are real pleasures, but, as Jo puts it, life is chaotic, and the people who promise to stay rarely do. The one relationship that asks for nothing in return, Jo and Geof's, is the one the play values most, and it is the one Helen breaks up.",
    },
    {
      title: 'Race and prejudice',
      body: "Delaney writes Jimmie as an ordinary, likeable romantic lead rather than as a problem or a joke. He is witty and knowing about how others see him: when Jo asks if his ancestors came from Africa, he tells her they came from Cardiff, and he casts himself as Othello with a mocking self-awareness. Jo insists that her mother is not prejudiced against colour, and the play proves her wrong at its climax, when Helen's first response to the news that the baby will be Black is to reach for a drink. Delaney is honest that prejudice is not only Helen's: Jo herself uses racial stereotypes about Jimmie, and when Geof gives her a doll to practise with, she objects that it is the wrong colour before throwing it down. The play does not preach, but it makes the audience watch the moment prejudice breaks through affection.",
    },
    {
      title: 'Gender, sexuality and care',
      body: "In this play the men who care are not the men society approved of. Geof, whom Jo suspects of being gay, does the cooking, cleaning and sewing and gets ready for the baby, and Jo teases him that motherhood comes more naturally to him than to her, and that he would make someone a good wife. Peter, the conventionally masculine ex-soldier with money, is drunk, sneering and cruel to Geof. Delaney turns the expected roles upside down: the women resist domesticity and the gentlest man embraces it. Jo's cry that she does not want to be a mother or a woman shows how trapped she feels by the roles her body and her society have given her. Geof's sexuality is never named, which the censor's rules made almost inevitable, but the effect is that he is defined by what he does for Jo. Helen's and Peter's insults show the prejudice he lives with; the play's sympathy is plainly with him.",
    },
    {
      title: 'Independence and repetition',
      body: "Jo wants above all to be free: to leave school, earn money, get away from Helen and never marry the way her mother did. The play's tragedy, or its dark comedy, is that she repeats her mother's story step by step. Like Helen, she has a baby by a man who does not stay, is left alone in a squalid room, and meets her mother's accusation that she is man mad with the reply that she is like her. The structure makes the point: Helen arrives with her luggage at the start and again near the end, and Jo says they are back where they started. Yet Jo is not simply doomed. She refuses Geof's proposal, turns down her mother's offer of a home, and near the end tells Helen she feels wonderful and, for the first time in her life, really important. Whether that independence can survive the baby is the question the ending leaves open.",
    },
    {
      title: 'Death, darkness and survival',
      body: "Under the jokes, the play keeps returning to death. Jo's bulbs need a cool, dark place, and Helen answers that that is where we all end up; months later Geof finds them dead under the sofa. Jo is frightened of the darkness inside houses, the river outside is the colour of lead, and in a low moment Jo talks of throwing herself into it. The British Library shows that Delaney's original script had even more of this, which Littlewood cut and lightened with music and comedy. The effect is a play in which survival is always shadowed by the thought of death, and in which humour is how the characters keep going. Jo's line that we do not ask for life but have it thrust upon us sums up the balance: life is not chosen, but once it arrives, it has to be lived, and the baby at the end is new life arriving in the dark.",
    },
  ],

  characters: [
    {
      name: 'Jo',
      role: "Helen's teenage daughter, still at school when the play opens; the central character",
      body: "Jo is clever, funny and fiercely defensive. She reads, draws and notices everything, including her mother's faults, and she answers Helen's cruelty with cruelty of her own. She wants independence badly, but she is also frightened: of the dark, of being left, of becoming her mother, and later of the baby. With Jimmie she is playful and romantic; with Geof she can be brutal, interrogating him about his sexuality on the night he comes to stay, and then begging him not to leave. Delaney does not make her a victim. Jo makes her own choices and defends them, and in Act 2 she refuses both marriage and her mother's offer of a home. The contradiction at her heart, that she both despises and repeats Helen's life, is what makes her feel real. Her line about living at the same time as herself sums her up: she is thoroughly modern, and knows it.",
    },
    {
      name: 'Helen',
      role: "Jo's mother; the opening stage direction bluntly calls her a “semi-whore”",
      body: "The stage direction's label means that Helen lives on money and gifts from boyfriends rather than on work. She drinks, flirts, sings the songs of her youth and treats motherhood as an inconvenience, and many of the play's most shocking lines are hers. Yet Delaney gives her wit, energy and moments of real feeling. She is genuinely impressed by Jo's drawings, begs her to learn from her mistakes, and returns when Jo needs her, even if only because Peter has thrown her out. She is also honest in her way: she admits she never thinks about Jo when she is happy. Near the end the stage directions have her turn and speak straight to the audience, and in the first production Avis Bunnage's asides as Helen were famous, which makes her a kind of music-hall performer as well as a character. The strongest answers treat her neither as a villain nor as a victim, but as a woman whose own choices were as limited as her daughter's.",
    },
    {
      name: 'Peter',
      role: "Peter Smith, Helen's younger boyfriend and then husband; a car salesman with money and an eye patch",
      body: "Peter arrives in Act 1 with a cigar in his mouth, proposes to Helen almost as a joke, and offers her money and a new house. He lost an eye as a soldier, keeps photographs of other women in his wallet, and makes no secret that he finds Jo a nuisance. In Act 2 he turns up drunk and nasty, mocks Jo's pregnancy, insults Geof and takes back the money Helen has left for her daughter. By the final scene he has left Helen for another woman. The British Library notes that in Delaney's original typescript Peter was gentler, even offering Jo a room of her own; Littlewood's production made him coarser. In the finished play he stands for the security money can buy, and for how little it is worth.",
    },
    {
      name: 'Jimmie',
      role: 'A young Black sailor, listed in the script as the Boy; Jo’s boyfriend and the father of her baby',
      body: "Jimmie is the most light-hearted character in the play. He teases Jo, tells her that his family came not from Africa but from Cardiff, compares himself to Othello, and proposes to her with a ring too big for her finger, which she wears on a ribbon round her neck. He used to be a male nurse and is about to go back to sea. He spends Christmas with Jo, promises to come back, and never does, and the play never explains why. Some readers see him as careless, another man who leaves; others argue that the play keeps him deliberately sketchy because what matters is Jo's experience of him, a brief taste of honey. Either way, Delaney writes him with warmth, and his wit is a quiet rebuke to the prejudice around him.",
    },
    {
      name: 'Geof',
      role: 'Geoffrey Ingram, an art student who moves into the flat in Act 2 and looks after the pregnant Jo',
      body: "Geof has been thrown out by his landlady, and Jo guesses, crudely, that he was caught with a man. He neither confirms nor denies it. He is tidy, kind, practical and easily hurt, and he gives Jo the care nobody else does: he cleans, cooks, sews clothes for the baby, buys a doll for her to practise holding, and fetches Helen because he thinks Jo needs her mother. He also loves Jo in his way, kissing her and asking her to marry him, and he tells her he would sooner be dead than away from her. When Helen returns he leaves quietly rather than fight her, asking only that she does not frighten Jo. Geof is the play's clearest picture of a family based on care rather than blood, and his departure is its saddest loss.",
    },
  ],

  keyQuotes: [
    {
      text: 'When you start earning you can start moaning.',
      where: 'Helen, Act 1, Scene 1, in the first minutes of the play',
      analysis:
        'Helen’s answer to Jo’s first complaints about the flat is a neat put-down, balanced on the repeated start. It sets the tone of their relationship: money, not love, is the language of authority, and Helen wins arguments with wit rather than kindness. Jo’s reply, that it cannot be soon enough, plants her longing for independence.',
    },
    {
      text: 'there’s a lovely view of the gasworks',
      where: 'Helen, Act 1, Scene 1',
      analysis:
        'Helen lists the flat’s attractions like an estate agent, but every item is a joke: no heating, a shared bathroom, an industrial view. The irony lets her admit how grim the place is without having to feel it. The historian Selina Todd reads the speech as a pastiche of what was supposed to matter to women in the 1950s.',
    },
    {
      text: 'That’s where we all end up sooner or later.',
      where: 'Helen, Act 1, Scene 1, when Jo says her bulbs must be kept in a cool, dark place',
      analysis:
        'Jo’s bulbs are an image of hope and of something to care for; Helen turns them into a joke about the grave. The line introduces the play’s undercurrent of death and shows the gap between the two women: Jo still hopes things will grow, while Helen has stopped expecting anything to.',
    },
    {
      text: 'I’m too young and beautiful for that.',
      where: 'Jo, Act 1, Scene 1, refusing to marry as Helen did',
      analysis:
        'Jo’s cocky self-praise is a joke, but it also states her plan: she will not repeat her mother’s life. Helen’s answer, that we all end up the same way sooner or later, is a prediction the play fulfils. Dramatic irony runs through the moment, since within a scene Jo is engaged.',
    },
    {
      text: 'You’ve certainly never been affectionate with me.',
      where: 'Jo, Act 1, Scene 1, after Helen calls her jealous in front of Peter',
      analysis:
        'Helen means to embarrass Jo, but Jo’s flat reply cuts through the flirting and the jokes. The adverb certainly makes the statement absolute. For once Jo is not being clever: this is the grievance underneath all her sarcasm, and it explains why Peter’s arrival feels to her like a threat.',
    },
    {
      text: 'It’s the darkness inside houses I don’t like.',
      where:
        'Jo, Act 1, Scene 1, after Peter has gone, when she puts off her bath until morning because it is dark',
      analysis:
        'Jo explains that she is not frightened of the darkness outside. The distinction turns an ordinary fear into a metaphor: what scares her is what happens inside homes, loneliness, neglect and being left. It is one of the play’s quietest lines and one of its most revealing about the damage Helen has done.',
    },
    {
      text: 'Women never have young minds. They are born three thousand years old.',
      where: 'Jimmie, Act 1, Scene 2, teasing Jo on the doorstep',
      analysis:
        'Jimmie’s playful hyperbole flatters Jo’s intelligence and suggests an old wisdom in women that the men in the play lack. Jo replies that he sometimes looks that old himself, and the banter shows their relationship at its happiest: equal, teasing and fond, in contrast to the sparring between Helen and Peter.',
    },
    {
      text: 'whatever else she might be, she isn’t prejudiced against colour',
      where: 'Jo to Jimmie, Act 1, Scene 2',
      analysis:
        'Jimmie has asked what Helen will think when she sees him. Jo’s confident reassurance creates dramatic irony that the play pays off in its final minutes, when Helen’s reaction to the baby proves her wrong. The concession whatever else she might be shows that Jo already knows her mother’s faults, but not all of them.',
    },
    {
      text: 'There’s two w’s in your future. Work or want',
      where: 'Helen, Act 1, Scene 2, just before announcing that she is getting married',
      analysis:
        'Helen dismisses a magazine mystic with a pun on Arabian Nights and a blunt piece of working-class wisdom: you either work or you go without. The alliteration makes it memorable, and the irony is that Helen herself avoids both by marrying money. She follows it by comparing people to drunken drivers careering along.',
    },
    {
      text: 'Have I ever laid claim to being a proper mother?',
      where: 'Helen, Act 1, Scene 2, when Jo asks her to cook',
      analysis:
        'Jo reminds Helen that a proper mother would make her meals, and Helen answers with a rhetorical question that is almost a boast. The formal phrase laid claim sounds mock-grand, as if motherhood were a title she has never bothered to apply for. It is funny, shocking and honest at once, which is how Helen works.',
    },
    {
      text: 'Why don’t you learn from my mistakes?',
      where: 'Helen, Act 1, Scene 2, on her wedding day, after finding Jo’s ring',
      analysis:
        'For once Helen drops the jokes and pleads, adding that it takes half your life to learn from your own. The line shows real fear for Jo and a flash of self-knowledge. But it comes minutes before Helen leaves her alone to marry Peter, so her advice is undercut by her own example.',
    },
    {
      text: 'I’m not sorry and I’m not glad.',
      where: 'Jo, Act 1, Scene 2, as Helen leaves for her wedding',
      analysis:
        'Helen assumes Jo is not sorry to see her go. Jo’s balanced sentence refuses to give her mother either satisfaction. The careful neutrality hides feeling rather than lacking it: earlier in the scene the audience watched Jo cry when Helen went away with Peter, and she is about to be left alone again.',
    },
    {
      text: 'He came in with Christmas and went out with the New Year.',
      where: 'Jo, Act 2, Scene 1, telling Geof about Jimmie',
      analysis:
        'Jo sums up her romance in a joke with a neat balanced structure, which is how she deals with pain. The line tells the audience, without any scene of parting, that Jimmie has gone, and its breezy rhythm contrasts with what she reveals next: she is pregnant.',
    },
    {
      text: 'They say love creates. And I’m certainly creating at the moment.',
      where: 'Jo, Act 2, Scene 1, just before telling Geof she is having a baby',
      analysis:
        'Jo takes a romantic commonplace and makes it literal and bitter: the only thing her love has created is a baby she did not plan. The wordplay is typical of her. It keeps Geof, and the audience, at a distance from how frightened she is, while still telling the truth.',
    },
    {
      text: 'I’ve always wanted to know about people like you.',
      where: 'Jo to Geof, Act 2, Scene 1, on the night he arrives',
      analysis:
        'Jo’s curiosity about Geof’s sexuality is crude and hurtful, and the phrase people like you turns a person into a type. Delaney lets Jo be prejudiced here, and Geof nearly walks out. That she then begs him to stay shows her loneliness is stronger than her prejudice.',
    },
    {
      text: 'I’d sooner be dead than away from you.',
      where: 'Geof, Act 2, Scene 1, when Jo suggests he should move out',
      analysis:
        'Geof’s declaration is the most extreme statement of love in the play. Jo answers that he says it as if he means it, and he insists that he does. It shows how much living with her has given him a purpose, and it makes his quiet departure in the last scene, when Helen pushes him out, all the more painful.',
    },
    {
      text: 'bearing a child doesn’t place one under an obligation to it',
      where: 'Helen to Geof, Act 2, Scene 1, after he tells her Jo will not go out',
      analysis:
        'Helen’s formal, almost legal phrasing is a startling denial of the most basic duty a parent has. Its detachment, one rather than I, sounds like a rule she has worked out to excuse herself. Geof’s quiet reply, that he would have thought it did, speaks for the audience, and the line explains Jo’s mistrust of every promise of care.',
    },
    {
      text: 'You’re man mad.',
      where: 'Helen, Act 2, Scene 1, in the fight over Jo’s pregnancy',
      analysis:
        'In a rapid exchange Helen accuses Jo of throwing herself at the first man she met, and Jo answers simply, “I’m like you.” The short lines work like blows in a boxing match. Jo’s reply turns the accusation back on Helen and states the play’s central idea: the daughter has become the mother.',
    },
    {
      text: 'The famous mother-love act.',
      where: 'Jo, Act 2, Scene 1, when Helen offers her money',
      analysis:
        'Jo treats Helen’s concern as a performance, a stage act, which is apt in a play whose first Helen spoke straight to the audience. The sarcasm protects Jo from hoping. Helen replies that she has not been able to sleep for thinking about her, and Jo’s retort that her sleep must not be disturbed shows she believes none of it.',
    },
    {
      text: 'We don’t ask for life, we have it thrust upon us.',
      where: 'Jo, Act 2, Scene 2, after Geof finds her dead bulbs',
      analysis:
        'The sight of the bulbs sets Jo thinking about death, and she says life is chaotic, a bit of love, a bit of lust. The passive thrust upon us describes her pregnancy as much as existence itself. It is the closest the play comes to a statement of philosophy, and it frightens her enough to ask Geof to hold her hand.',
    },
    {
      text: 'She had so much love for everyone else, but none for me.',
      where: 'Jo, Act 2, Scene 2, holding Geof’s hands',
      analysis:
        'Jo remembers her mother pulling her hands away when she was small. The antithesis between everyone else and none for me is the emotional core of the play: Helen gives love, and sex, freely to men but withholds it from her child. The British Library shows the memory was in Delaney’s original typescript too.',
    },
    {
      text: 'If you don’t watch it, you’ll turn out exactly like her.',
      where: 'Geof, Act 2, Scene 2, answering Jo’s memory of her mother',
      analysis:
        'Geof refuses to let Jo wallow and names what the audience has already seen. Jo insists she is not like Helen at all, and Geof says that in some ways she already is. The exchange puts the idea of inherited patterns at the centre of the play, and leaves open whether Jo can break them.',
    },
    {
      text: 'I really do live at the same time as myself, don’t I?',
      where: 'Jo, Act 2, Scene 2, teasing Geof as he mops the floor',
      analysis:
        'Jo has called Geof an old-fashioned Edwardian and herself contemporary. The odd, delighted phrasing means she is fully present in her own life and her own moment. The line is often singled out as a motto for the play itself, which put the lives of young people of the 1950s on stage as they were being lived.',
    },
    {
      text: 'I don’t want to be a mother. I don’t want to be a woman.',
      where: 'Jo, Act 2, Scene 2, after throwing down the doll Geof gave her',
      analysis:
        'The parallel sentences move from one role to her whole sex, as if being a woman means being trapped by motherhood. It is the rawest moment in the play, coming out of rage and fear rather than wit. The British Library notes that it condenses a much longer, darker passage in Delaney’s original script.',
    },
    {
      text: 'You need somebody to love you while you’re looking for someone to love.',
      where: 'Geof, Act 2, Scene 2',
      analysis:
        'Geof offers himself not as a husband but as someone to love Jo in the meantime. The reversal, somebody to love you and someone to love, makes the line sound like a proverb, and its modesty is what makes it moving. It is the play’s best definition of what Geof is, and of what Jo loses when he goes.',
    },
    {
      text: 'It’s a funny thing, I never have done when I’ve been happy.',
      where: 'Helen, Act 2, Scene 2, admitting she never thought about Jo',
      analysis:
        'Helen confesses, almost casually, that she only remembers her daughter when things go wrong. The chatty opening, it’s a funny thing, makes the admission more shocking. Yet it is also honest in a way few parents would be, and Delaney lets the audience feel both the neglect and the candour.',
    },
    {
      text: 'I feel as though I could take care of the whole world.',
      where: 'Jo, Act 2, Scene 2, to Helen',
      analysis:
        'Jo says that for the first time in her life she feels really important. The hyperbole is joyful and a little defiant: pregnancy, which she dreaded, has given her a sense of power, and she even says she could take care of Helen. It is the play’s strongest note of hope before the final blow.',
    },
    {
      text: 'My baby will be black.',
      where: 'Jo, Act 2, Scene 2, near the end of the play',
      analysis:
        'Jo has first said the baby may be Black, and Helen, as if she has not heard, asks her to say it again. The change from may to will makes the sentence a statement of fact that Jo refuses to soften. Helen’s response, a drink and a cruel joke, proves wrong what Jo told Jimmie about her in Act 1.',
    },
  ],

  extracts: [
    {
      title: 'Moving in: the opening of the play',
      where: 'Act 1, Scene 1',
      pointer:
        'From the opening stage direction, as Helen and Jo enter loaded with baggage, to Helen asking why Jo bothers with her flower bulbs and Jo answering that it is nice to see a few flowers.',
      summary:
        "Helen and Jo arrive at their new rented room with all their luggage. Jo complains at once about the state of it and about living on her mother's earnings from men; Helen answers that she will be entitled to complain when she earns her own money, and defends the room with a string of ironic selling points. Helen, nursing a cold, demands her whisky, and the two squabble about sharing a bed and making coffee. Jo unpacks her bulbs and hopes that this time they will grow, while Helen cannot see why she bothers.",
      annotations: [
        {
          phrase: 'a comfortless flat in Manchester',
          note: 'The opening stage direction, followed by jazz music, sets the realist scene in one bleak adjective and then undercuts it with a music-hall sound.',
        },
        {
          phrase: 'living off her immoral earnings',
          note: 'Jo speaks of her mother in the third person, as if complaining to an audience about her, and the pompous phrase mocks both Helen and respectable disapproval.',
        },
        {
          phrase: 'When you start earning you can start moaning.',
          note: 'Helen’s balanced retort, start earning set against start moaning, wins the argument by wit, and ties authority in this household to money rather than to love.',
        },
        {
          phrase: 'there’s a lovely view of the gasworks',
          note: 'Heavy irony: Helen advertises the flat’s drawbacks as attractions, a way of admitting how grim life is without having to feel it.',
        },
        {
          phrase: 'That’s where we all end up sooner or later.',
          note: 'Helen turns Jo’s hopeful bulbs into a joke about the grave, the first sign of the play’s steady undertow of death.',
        },
        {
          phrase: 'It’s nice to see a few flowers, isn’t it?',
          note: 'Jo’s tag question asks for her mother’s agreement and does not get it; the bulbs become a symbol of her hope and of her need to care for something.',
        },
      ],
      question:
        'How does Delaney make this opening such a revealing introduction to Helen and Jo? Refer closely to the language and the stage directions.',
    },
    {
      title: 'Helen’s visit',
      where: 'Act 2, Scene 1',
      pointer:
        'From Helen’s arrival at the flat, fetched secretly by Geof, to Peter’s drunken entrance. The passage includes the chase round the room and Helen’s offer of money.',
      summary:
        "Helen arrives, and Jo quickly works out that Geof sent for her. When Geof says Jo will not go out, Helen answers that giving birth places a parent under no obligation. She looks at Jo's pregnancy with curiosity, then chases her round the room, accusing her of throwing herself at the first man she met and reporting what the neighbours call her; Jo answers every insult by saying she is only like her mother. Once Geof has been sent to make tea, Helen softens, offers money and says she has been worrying, and Jo mocks the sudden show of concern.",
      annotations: [
        {
          phrase: 'bearing a child doesn’t place one under an obligation to it',
          note: 'Helen’s cold, formal phrasing sounds like a rule she has devised to excuse herself, and Geof’s quiet disagreement speaks for the audience.',
        },
        {
          phrase: 'We’re all made the same, aren’t we?',
          note: 'Helen asks to see Jo’s pregnancy, and for a moment the shared female body draws mother and daughter together before the fight begins.',
        },
        {
          phrase: 'You’re man mad.',
          note: 'Part of a run of short, hammering lines. Jo’s reply that she is like her mother turns every accusation back on the accuser.',
        },
        {
          phrase: 'they all know where I get it from too',
          note: 'Jo answers the neighbours’ gossip by pointing at Helen, so the insult to the daughter becomes an insult to the mother.',
        },
        {
          phrase: 'The famous mother-love act.',
          note: 'Jo treats Helen’s concern as a stage performance, and the sarcasm protects her from hoping that this time her mother means it.',
        },
        {
          phrase: 'your sleep mustn’t be disturbed at any cost',
          note: 'Jo’s sarcasm exposes the selfishness inside Helen’s claim to have lost sleep, and shows she has stopped expecting anything better.',
        },
      ],
      question:
        'How does Delaney make this such a dramatic and revealing confrontation between Helen and Jo?',
    },
    {
      title: 'Jo and Geof wait for the baby',
      where: 'Act 2, Scene 2',
      pointer:
        'From Geof, cleaning, finding the dead bulbs under the sofa, to Geof telling Jo that in some ways she is already like her mother.',
      summary:
        "Late in Jo's pregnancy Geof is cleaning the flat and finds the bulbs she brought in Act 1, dead under the sofa. The discovery sets Jo thinking about death and about how carelessly life begins. Frightened, she asks Geof to hold her hand, and tells him that she used to try to hold her mother's hands as a child but Helen always pulled them away. Geof warns her that she could turn out exactly like Helen, and when she denies it, tells her she already is in some ways.",
      annotations: [
        {
          phrase: 'a bit of love, a bit of lust and there you are',
          note: 'Jo’s casual list describes how babies arrive and how her own life began, making conception sound random and unchosen.',
        },
        {
          phrase: 'We don’t ask for life, we have it thrust upon us.',
          note: 'The passive verb makes life something done to people, a thought that applies to the baby and to Jo herself, the child Helen says she should never have had.',
        },
        {
          phrase: 'Hold my hand, Geof.',
          note: 'A simple imperative that shows how frightened Jo is, and sets up the memory of Helen pulling her hands away.',
        },
        {
          phrase: 'She had so much love for everyone else, but none for me.',
          note: 'The antithesis is the emotional heart of the play: Helen gives her love to men and withholds it from her child.',
        },
        {
          phrase: 'you’ll turn out exactly like her',
          note: 'Geof says aloud what the structure of the play has been showing, and Jo’s denial only confirms how much she fears it.',
        },
      ],
      question:
        'Explore how Delaney makes this moment between Jo and Geof so moving. Consider what it shows about the effects of Helen on her daughter.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Irony and sarcasm as self-defence',
      example:
        'Helen advertising the flat: “there’s a lovely view of the gasworks” (Act 1, Scene 1); Jo mocking Helen’s concern as “The famous mother-love act” (Act 2, Scene 1).',
      effect:
        'Both women say the opposite of what they mean, and the irony lets them name painful truths without admitting that they hurt. The audience laughs, then notices what the laughter is covering. It is also why neither woman can simply say she loves the other.',
    },
    {
      technique: 'Quick-fire repartee',
      example:
        'The fight in Act 2, Scene 1: Helen’s “You’re man mad.” and Jo’s instant reply, “I’m like you.”',
      effect:
        'Short, alternating lines make the arguments move like a comedy double act or a boxing match. The speed shows how practised the two women are at fighting, and it means the sharpest truths land as punchlines before either can take them back.',
    },
    {
      technique: 'Aphorisms and wisecracks',
      example:
        'Helen: “It takes half your life to learn from your own” (Act 1, Scene 2); Jo: “We don’t ask for life, we have it thrust upon us” (Act 2, Scene 2).',
      effect:
        'Characters sum up their experience in neat, quotable generalisations. They sound like folk wisdom, which gives these poor characters a voice of authority, but each is also a way of talking about life in general so as not to talk about the particular pain in front of them.',
    },
    {
      technique: 'Colloquial northern speech',
      example:
        'Jo: “You don’t half knock me about” (Act 1, Scene 2); Helen: “we all end up same way sooner or later” (Act 1, Scene 1).',
      effect:
        'Dropped words and local idioms give the dialogue the rhythms of working-class Lancashire speech and let that voice carry serious drama. The realism makes the characters’ lives feel lived rather than observed, and the humour belongs to them rather than being at their expense.',
    },
    {
      technique: 'Extended metaphor and wordplay',
      example:
        'Helen tells Jo that we all steer our own destiny, then adds at once that we go “Careering along like drunken drivers”; she also puns on “Arabian Knight” (Act 1, Scene 2).',
      effect:
        'Helen’s metaphor claims control and denies it in the same breath: we steer, but we are drunk. It is a precise picture of her own life. The pun on Arabian Nights shows her quickness with words, which Jo has inherited.',
    },
    {
      technique: 'Symbolism: the bulbs',
      example:
        'Jo unpacks her bulbs, hoping they will bloom (Act 1, Scene 1); Geof finds them dead under the sofa (Act 2, Scene 2).',
      effect:
        'The bulbs stand for Jo’s hope and her wish to nurture something. Their death, found just as her baby is due, is an ominous parallel: what she tried to care for in Act 1 was neglected in the dark, as she was. Whether the baby will fare better is left open.',
    },
    {
      technique: 'Imagery of darkness, dirt and death',
      example:
        'Jo: “It’s the darkness inside houses I don’t like” (Act 1, Scene 1); the river is “the colour of lead” (Act 2, Scene 1).',
      effect:
        'The heavy, poisonous colour of the river and the fear of dark rooms build an undertone of threat beneath the comedy. The images link the physical squalor of the setting to the emotional neglect inside the home.',
    },
    {
      technique: 'Rhetorical questions',
      example:
        'Helen: “Have I ever laid claim to being a proper mother?” (Act 1, Scene 2); Jo to Geof: “I really do live at the same time as myself, don’t I?” (Act 2, Scene 2).',
      effect:
        'Helen’s question dares anyone to judge her and gets away with it by being funny. Jo’s, with its tag, asks Geof to confirm her delight in herself. Both show characters using questions to control how others see them.',
    },
    {
      technique: 'Songs, nursery rhymes and direct address',
      example:
        'Helen sings the songs of her youth; Geof recites nursery rhymes to Jo in Act 2, Scene 1, and she repeats one alone at the end of the play (Act 2, Scene 2). The stage directions have Jimmie sing to the audience as he leaves in Act 1, Scene 2, and Helen turn to the audience near the end.',
      effect:
        'The music-hall elements break the illusion of realism and remind the audience they are watching a performance. The nursery rhyme at the close is both comforting and unsettling: Jo, about to become a mother, is still reaching for the words of childhood.',
    },
  ],

  structureForm: [
    {
      heading: 'Two acts, one room',
      body: 'The play has two acts of two scenes each, and almost all of it takes place in the same flat, with the street outside. Act 1 runs from the move into the flat through to Christmas and Helen’s wedding; Act 2 begins in summer, months later, and ends as Jo’s baby is about to be born. Keeping the action in one comfortless room makes the flat a kind of trap: people arrive and leave through its door, but Jo stays, and the audience feels how little room she has.',
    },
    {
      heading: 'A circular structure',
      body: 'The play ends where it began. In the first scene Helen arrives at the flat with her luggage; in the last she arrives again with all her cases, having been thrown out by Peter, and Jo says they are back where they started. The circle makes the play’s argument about repetition: the same pattern of arrival, dependence and departure plays out again, and Jo’s life is repeating her mother’s. But the circle is not closed. At the end Helen has gone out again, the baby has not been born, and the future is left open.',
    },
    {
      heading: 'Parallel scenes and echoes',
      body: 'Delaney builds the play from pairs. Two proposals come early: Peter proposes to Helen in Act 1, Scene 1, and Jimmie to Jo, with a ring, in Act 1, Scene 2. A third, Geof’s, comes in Act 2. Helen leaves Jo and comes back more than once. The bulbs are planted and found dead. The word contemporary is used by Helen of the flat’s wallpaper in the first scene and by Jo of herself in the last. These echoes invite comparison: Jo’s romance is set beside her mother’s, and the audience can see her repeating it even while she insists she is different.',
    },
    {
      heading: 'Realism and music hall',
      body: 'The play is often called kitchen sink realism, and its setting, speech and subjects are realistic. But its first production mixed that realism with music hall. A jazz trio played on stage, music linked the scenes, characters danced on and off, and Helen spoke directly to the audience. The published script keeps much of this: its stage directions call for jazz, have characters dance on and off between scenes, give Helen her own music and send Jimmie off singing to the audience, and its songs, rhymes and double-act exchanges come from the same tradition. The mixture matters: the comedy and the music stop the play becoming a grim case study, and they let characters step outside their misery for a moment, which is how they survive it.',
    },
    {
      heading: 'Time passing between scenes',
      body: 'Large gaps of time fall between scenes and within them. Months pass between the acts, and more time passes within Act 2, Scene 1, between Geof moving in and his proposal. Delaney does not show the big events: Jimmie’s departure, Helen’s wedding, the discovery of the pregnancy and Peter leaving Helen all happen offstage. The audience learns of them afterwards, often in a single joke, such as Jo’s line that Jimmie came in with Christmas and went out with the New Year. The effect is that the play concentrates on how people live with events rather than on the events themselves.',
    },
    {
      heading: 'An open ending',
      body: 'The final scene leaves nearly everything unresolved. Helen has gone out for a drink, saying she will come back. Geof has gone, and Jo, who was resting while Helen sent him away, does not yet know it: the audience knows more than she does. The baby is about to be born. Jo is left alone, reciting Geof’s nursery rhyme. Some readers see the ending as bleak, with Jo abandoned by everyone; others see hope in her calm, and in the image of a young woman who has finally stopped needing her mother. The strongest answers explain the case for both.',
    },
    {
      heading: 'Delaney’s script and Littlewood’s production',
      body: 'The published play is the version shaped in rehearsal by Joan Littlewood’s company, and the British Library’s account of Delaney’s original typescript shows how much changed. The original was darker, with many more references to death and suicide and a different ending in which Jo, in labour, reaches for a knife and asks Helen to hold her hand. Peter was gentler. Knowing this helps explain the play’s form: the comic routines, the music and the shortened exchanges were added partly to balance a very bleak story. It also means the text you study is, in a real sense, a collaboration.',
    },
  ],

  vocabulary: [
    {
      term: 'Kitchen sink realism',
      definition:
        'A label for British plays, films and paintings of the late 1950s and early 1960s that showed working-class domestic life realistically. The name comes from John Bratby’s paintings.',
    },
    {
      term: 'Theatre Workshop',
      definition:
        'Joan Littlewood’s collaborative, experimental and politically engaged theatre company, based at the Theatre Royal, Stratford East, which first staged the play in 1958.',
    },
    {
      term: 'Music hall',
      definition:
        'A popular British variety entertainment of songs, comic routines and direct audience address. Its influence shows in the play’s songs, double acts and asides.',
    },
    {
      term: 'Aside and direct address',
      definition:
        'Lines spoken to the audience rather than to other characters. The printed text has Helen turn to the audience near the end, and in the first production her asides were a famous feature.',
    },
    {
      term: 'Repartee',
      definition:
        'Quick, witty exchanges of replies and retorts. Helen and Jo’s arguments are built on it.',
    },
    {
      term: 'Semi-whore',
      definition:
        'The opening stage direction’s blunt label for Helen: a woman who lives on money and presents from boyfriends rather than a prostitute who is paid by strangers.',
    },
    {
      term: 'Fancy man',
      definition:
        'Old slang for a woman’s lover, especially one outside marriage. Jo tells Helen to get back to her fancy man.',
    },
    {
      term: 'Edwardian and Ted',
      definition:
        'Jo calls Geof an Edwardian, meaning old-fashioned, and a proper Ted. Teddy boys were a 1950s youth style named after their Edwardian-inspired clothes, so the joke works both ways.',
    },
    {
      term: 'Lord Chamberlain',
      definition:
        'The royal official who licensed every new play for performance in Britain until the Theatres Act 1968 ended theatre censorship.',
    },
    {
      term: 'Wolfenden report',
      definition:
        'The 1957 report that recommended homosexual acts between consenting adults in private should no longer be a crime. The law changed in England and Wales in 1967.',
    },
    {
      term: 'Illegitimate',
      definition:
        'An old term for a child born to unmarried parents. It carried heavy social stigma in the 1950s, which is why the neighbours gossip about Jo.',
    },
    {
      term: 'Othello and Desdemona',
      definition:
        'The Black general and his white wife in Shakespeare’s tragedy. Jimmie jokingly casts himself and Jo as the couple, a comparison that is playful and ominous at once.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not, as when Jo assures Jimmie her mother is not prejudiced, or wakes not knowing that Geof has gone.',
    },
    {
      term: 'Motif',
      definition:
        'An image or idea that recurs and gathers meaning, such as the bulbs, the rings, darkness and the idea of starting again.',
    },
    {
      term: 'Circular structure',
      definition:
        'A structure in which the ending returns to the situation of the opening, as when Helen arrives at the flat with her luggage in both the first and the last scene.',
    },
    {
      term: 'Aphorism',
      definition:
        'A short, memorable statement of a general truth. Helen’s work or want and Jo’s line about life being thrust upon us are examples.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Delaney present the relationship between Jo and Helen in A Taste of Honey? Write about what the relationship is like at different points in the play, and how Delaney presents it by the ways she writes.',
        skill: 'Whole-play essay on a relationship, with language and structure',
        guidance: [
          'Open with an argument, not a summary: for example, that the two women fight because they are alike, and that the play shows a daughter repeating her mother’s life while swearing she never will.',
          'Start with the opening scene: the put-down about earning and moaning, and Jo’s complaint that Helen has never been affectionate with her. Show how comedy carries the conflict.',
          'Analyse Helen’s wedding day: her plea that Jo learn from her mistakes, and Jo’s balanced reply that she is neither sorry nor glad. Weigh the real feeling on both sides.',
          'Use the Act 2 fight, especially the exchange ending in Jo’s reply that she is like her mother, and Geof’s later warning that she will turn out exactly like her.',
          'Write about structure: Helen’s two arrivals with her luggage, and Jo’s line that they are back where they started.',
          'End by judging the relationship at the close: Helen leaving for a drink, and whether Jo’s calm suggests she no longer needs her.',
        ],
      },
      {
        question:
          'How does Delaney use the character of Geof to explore ideas about care and masculinity?',
        skill: 'Whole-play essay on a character and the ideas he carries',
        guidance: [
          'Set out Geof’s situation carefully: thrown out by his landlady, suspected by Jo of being gay, never confirming or denying it. Link this to the censorship and the law of the 1950s, briefly.',
          'Analyse Jo’s interrogation on the night he arrives, including her phrase about people like you, and what it shows about prejudice even in Jo.',
          'Show how Geof takes on the caring role: cleaning, cooking, sewing baby clothes and the doll. Compare him with Peter and with the absent Jimmie.',
          'Consider his love for Jo: the kiss, the proposal and his line that he would sooner be dead than away from her. Is the play sympathetic to his wish for a conventional family?',
          'Analyse his departure when Helen returns, and why his quiet exit is one of the saddest moments in the play.',
        ],
      },
      {
        question: 'How far does Delaney encourage you to sympathise with Helen?',
        skill: 'Whole-play essay weighing a character, with a clear personal judgement',
        guidance: [
          'Give a balanced thesis and commit to it: for example, that Delaney makes Helen hard to forgive but impossible to dismiss.',
          'Gather the case against her: leaving Jo for Peter, asking whether she ever claimed to be a proper mother, her claim that bearing a child creates no obligation, and her reaction to the baby.',
          'Gather the case for her: her pleasure in Jo’s drawings, her plea that Jo learn from her mistakes, her return, and her own limited choices as a poor single mother in the 1950s.',
          'Consider how her humour, and in performance her asides to the audience, make her likeable even when she is cruel.',
          'Conclude with a judgement, and explain which moment most shapes it.',
        ],
      },
      {
        question:
          'Explore the ways in which Delaney presents attitudes to race in A Taste of Honey.',
        skill: 'Whole-play essay on a theme, with context used to explain',
        guidance: [
          'Introduce Jimmie as a romantic lead written with warmth and wit, not as a problem. Use his joke about Cardiff and his lines about women being born old.',
          'Analyse Jo’s assurance that her mother is not prejudiced against colour, and explain the dramatic irony it sets up.',
          'Consider Jo’s own attitudes, including the stereotypes she uses about Jimmie and her distress at the doll, so that prejudice is not only Helen’s.',
          'Analyse the climax: Jo’s statement that the baby will be black and Helen’s reaction.',
          'Use context precisely and briefly: Britain after Windrush and the violence in Nottingham and Notting Hill in 1958, a few months after the play opened.',
        ],
      },
      {
        question:
          'Reread the passage in Act 2, Scene 1 from Helen’s arrival to Peter’s entrance. How does Delaney make this such a dramatic and revealing moment in the play?',
        skill: 'Passage-based question: close analysis of dialogue and staging',
        guidance: [
          'Place the passage: Geof has secretly fetched Helen because Jo will not go out, and this is the first time the audience has seen mother and daughter together since Helen left to be married.',
          'Analyse Helen’s claim that bearing a child creates no obligation, and Geof’s response.',
          'Track the rhythm of the fight: the short exchanges, the chase round the room, and Jo’s reply that she is like her mother.',
          'Show the shift in tone when Helen offers money, and Jo’s mockery of the famous mother-love act.',
          'Stay close to the passage but link it briefly to the whole play, for example to Helen’s later return in Act 2, Scene 2.',
        ],
      },
    ],
    tips: [
      'Learn your quotations exactly. AQA is closed book, and several lines attributed to this play online are misquoted or not in it at all. Geof’s line about the dream and the baby, for example, often circulates in the reworded form a Smiths song gave it. If you cannot remember the words, describe the moment precisely instead.',
      'Name the speaker and the act for every quotation. Geof does not appear until Act 2, so any line he says, or any line Jo says to him, belongs there.',
      'Write about the comedy. The jokes are not decoration: they are how the characters survive, and how Delaney makes the audience laugh at something terrible before feeling it.',
      'Treat the stage directions and structure as evidence: the comfortless flat, the jazz, the bulbs, Helen’s luggage in the first and last scenes, and the ending with Jo alone.',
      'Avoid simple verdicts. The best answers show that Delaney gives Helen a case and gives Jo faults, and explain why the play will not choose between them.',
      'Use context to explain a choice Delaney makes, not as a history lesson. One precise sentence about the Lord Chamberlain explains why Geof is never named as gay; a paragraph on the 1950s explains nothing.',
      'Argue about the ending. Is Jo abandoned or free? Use the open ending to show that you are thinking about the whole play.',
      'Say which production detail you mean. The live jazz trio and Avis Bunnage’s asides belong to the first staging, while the dancing between scenes is written into the printed stage directions. Before you quote a stage direction, check that it is in your own copy.',
    ],
  },

  modelAnswer: {
    question: 'How does Delaney present the relationship between Jo and Helen in A Taste of Honey?',
    paragraph:
      "Delaney presents Jo and Helen as enemies who are really mirror images, and the play's cruellest joke is that the daughter who despises her mother's life ends up living it. Their arguments are fought in rapid, comic exchanges, and in the fight in Act 2, Scene 1 the form does the work: when Helen accuses her of being “man mad”, Jo answers in three words, “I’m like you.” The brevity turns the insult into a confession, and the laughter it gets from an audience is uneasy, because Jo is right. Delaney has already prepared this in Act 1, where Jo insists she is “too young and beautiful” to marry as Helen did, only to become engaged within a scene. Yet the play complicates any simple story of inherited failure. In Act 2, Scene 2 Jo remembers that Helen had “so much love for everyone else, but none for me”, and the antithesis explains why her defiance is so fierce: it is the defence of a child who was pushed away. Geof's warning that she will “turn out exactly like her” voices the audience's fear, but the ending leaves it unresolved. When Helen goes out for a drink and Jo is left alone and calm, Delaney allows the possibility that the pattern may, at last, be broken.",
    commentary: [
      'It opens with a clear argument that answers the question, the idea of mirror images, rather than a retelling of the plot.',
      'Quotations are short, exact and embedded, and each is analysed for a specific effect: the brevity of Jo’s reply, the antithesis in her memory of Helen.',
      'It writes about form as well as language, explaining how the rapid comic exchanges shape the audience’s response.',
      'It moves across the whole play, from Act 1 to the final scene, showing whole-text knowledge without summarising.',
      'It weighs an alternative reading and ends on the open ending, turning a character study into a judgement about what the play means.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'Moving in',
      summary:
        'Helen and Jo arrive at a shabby rented flat with all their luggage. Jo complains about the room and about living on her mother’s earnings from men; Helen, nursing a cold and her whisky, defends it with a string of jokes.',
      setting: 'A comfortless flat in Manchester and the street outside',
      who: ['Helen', 'Jo'],
      quote: 'When you start earning you can start moaning.',
      themes: ['Poverty and class', 'Mothers and daughters'],
      tension: 2,
      significance:
        'Sets up the comic, combative relationship at the heart of the play, and the poverty that shapes it.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'Bulbs and drawings',
      summary:
        'Jo unpacks her flower bulbs and hopes they will bloom. Helen finds Jo’s drawings, is surprised by her talent and offers to pay for art school, but Jo, who plans to leave school at Christmas, refuses.',
      setting: 'The flat',
      who: ['Jo', 'Helen'],
      quote: 'That’s where we all end up sooner or later.',
      themes: [
        'Death, darkness and survival',
        'Independence and repetition',
        'Mothers and daughters',
      ],
      tension: 2,
      significance:
        'Introduces the bulbs as a symbol of hope and Jo’s determination to be independent.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'Peter proposes',
      summary:
        'Peter, a younger man Jo realises her mother has been trying to avoid, walks in smoking a cigar and proposes marriage. Jo keeps interrupting, Helen calls her jealous, and Jo answers that her mother has never been affectionate with her.',
      setting: 'The flat',
      who: ['Peter', 'Helen', 'Jo'],
      quote: 'You’ve certainly never been affectionate with me.',
      themes: ['Mothers and daughters', 'Love, sex and the taste of honey'],
      tension: 3,
      significance:
        'The first threat to Jo’s place in her mother’s life, and the first of the play’s proposals.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'Afraid of the dark',
      summary:
        'After Peter has gone, Jo decides it is too dark to go for her bath. She admits that it is the darkness inside houses that frightens her, and Helen asks what she would do if Helen married again.',
      setting: 'The flat, after dark',
      who: ['Jo', 'Helen'],
      quote: 'It’s the darkness inside houses I don’t like.',
      themes: ['Death, darkness and survival', 'Mothers and daughters'],
      tension: 2,
      significance: 'A quiet moment that shows the fear under Jo’s sharpness.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Jimmie’s proposal',
      summary:
        'Outside the flat, Jo’s boyfriend Jimmie, a Black sailor, proposes and gives her a ring too big for her finger, which she ties round her neck. When he asks what Helen will think, Jo insists her mother is not prejudiced.',
      setting: 'The street outside the flat',
      who: ['Jo', 'Jimmie'],
      quote: 'whatever else she might be, she isn’t prejudiced against colour',
      themes: ['Love, sex and the taste of honey', 'Race and prejudice'],
      tension: 2,
      significance:
        'The sweetest scene in the play, and the start of the dramatic irony that pays off at the end.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Helen’s announcement',
      summary:
        'Helen dismisses a magazine mystic, lectures Jo on work and want, and announces she is marrying Peter. Peter arrives with flowers and chocolates, and shows Jo photographs of the new house and, reluctantly, of other women.',
      setting: 'The flat',
      who: ['Helen', 'Jo', 'Peter'],
      quote: 'There’s two w’s in your future. Work or want',
      themes: ['Mothers and daughters', 'Poverty and class', 'Love, sex and the taste of honey'],
      tension: 3,
      significance: 'Helen chooses money and Peter over Jo, and Jo’s jealousy breaks out.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Left alone for Christmas',
      summary:
        'Helen refuses to cook for Jo and goes off with Peter, who talks of a honeymoon, leaving Jo on her own for Christmas. Jo cries on the bed until Jimmie arrives, and she asks him to stay with her over Christmas.',
      setting: 'The flat',
      who: ['Helen', 'Peter', 'Jo', 'Jimmie'],
      quote: 'Have I ever laid claim to being a proper mother?',
      themes: ['Mothers and daughters', 'Love, sex and the taste of honey'],
      tension: 3,
      significance:
        'Helen’s neglect drives Jo to Jimmie, and, the play implies, the baby is conceived.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'The wedding day',
      summary:
        'Dressing for her wedding, Helen finds the ring round Jo’s neck and pulls it off. She rages, then pleads with Jo not to repeat her mistakes, tells her who her father was, and leaves to be married.',
      setting: 'The flat on the morning of Helen’s wedding',
      who: ['Helen', 'Jo'],
      quote: 'Why don’t you learn from my mistakes?',
      themes: ['Mothers and daughters', 'Independence and repetition'],
      tension: 4,
      significance: 'The closest Helen comes to acting as a mother, just before she abandons Jo.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Geof stays the night',
      summary:
        'Months later, in summer, a pregnant Jo comes home from the fair with Geof, an art student thrown out by his landlady. She interrogates him about his sexuality, begs him to stay, and tells him about Jimmie and the baby.',
      setting: 'The same flat, in summer',
      who: ['Jo', 'Geof'],
      quote: 'He came in with Christmas and went out with the New Year.',
      themes: [
        'Gender, sexuality and care',
        'Love, sex and the taste of honey',
        'Independence and repetition',
      ],
      tension: 2,
      significance: 'Jimmie has gone, and a new, unconventional household begins.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Geof’s proposal',
      summary:
        'More time has passed. Geof sews baby clothes while Jo rages against motherhood. He kisses her and asks her to marry him; she refuses and suggests he leave, but he says he could not bear to.',
      setting: 'The flat, some time later, still in summer',
      who: ['Geof', 'Jo'],
      quote: 'I’d sooner be dead than away from you.',
      themes: ['Gender, sexuality and care', 'Love, sex and the taste of honey'],
      tension: 3,
      significance: 'Shows how much Geof depends on Jo, and her refusal of marriage as a way out.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Helen’s visit',
      summary:
        'Fetched secretly by Geof, Helen arrives. She denies any obligation to her daughter, chases Jo round the room in a furious row, and then softens and offers money, which Jo mocks.',
      setting: 'The flat',
      who: ['Helen', 'Geof', 'Jo'],
      quote: 'bearing a child doesn’t place one under an obligation to it',
      themes: ['Mothers and daughters', 'Independence and repetition'],
      tension: 5,
      significance:
        'The play’s fiercest confrontation, in which Jo answers every insult by saying she is like her mother.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Peter takes Helen away',
      summary:
        'Peter bursts in drunk, mocks Jo’s pregnancy, insults Geof and takes back the money Helen left. He refuses to have Jo or Geof in his house. Helen first says she will not go with him, but when Jo refuses to let her stay, she follows him out.',
      setting: 'The flat',
      who: ['Peter', 'Helen', 'Jo', 'Geof'],
      themes: ['Gender, sexuality and care', 'Poverty and class', 'Mothers and daughters'],
      tension: 4,
      significance:
        'Shows the cruelty behind Peter’s money, and how quickly Helen goes back to him once Jo turns her away.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The dead bulbs',
      summary:
        'Late in the pregnancy, Geof finds the bulbs from Act 1 dead under the sofa. Jo talks about death, asks him to hold her hand, and remembers her mother pulling her hands away.',
      setting: 'The flat, cleaned and tidied by Geof',
      who: ['Geof', 'Jo'],
      quote: 'We don’t ask for life, we have it thrust upon us.',
      themes: [
        'Death, darkness and survival',
        'Mothers and daughters',
        'Gender, sexuality and care',
      ],
      tension: 2,
      significance: 'The symbol of hope from the first scene returns dead, just before the birth.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The doll',
      summary:
        'Geof gives Jo a doll to practise holding. Jo throws it down in a burst of rage and fear, and says she does not want the baby or any man.',
      setting: 'The flat',
      who: ['Jo', 'Geof'],
      quote: 'I don’t want to be a mother. I don’t want to be a woman.',
      themes: ['Gender, sexuality and care', 'Race and prejudice', 'Independence and repetition'],
      tension: 4,
      significance: 'Jo’s rawest moment, when her fear of motherhood breaks through the jokes.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Helen moves back in',
      summary:
        'Helen arrives with her cases, thrown out by Peter, and makes Geof feel unwelcome until he goes. Jo defends him, and says they are back where they started.',
      setting: 'The flat',
      who: ['Helen', 'Geof', 'Jo'],
      quote: 'It’s a funny thing, I never have done when I’ve been happy.',
      themes: [
        'Mothers and daughters',
        'Independence and repetition',
        'Gender, sexuality and care',
      ],
      tension: 4,
      significance: 'The circle closes: Helen returns as she arrived, and Geof is pushed out.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Alone at the end',
      summary:
        'Jo tells Helen the baby will be Black. Helen reaches for a drink and goes out, saying she will come back, and Jo, not knowing Geof has gone, is left alone reciting his nursery rhyme.',
      setting: 'The flat, as Jo’s labour approaches',
      who: ['Jo', 'Helen'],
      quote: 'My baby will be black.',
      themes: ['Race and prejudice', 'Mothers and daughters', 'Death, darkness and survival'],
      tension: 5,
      significance:
        'An open ending: Jo is abandoned again, yet calm, and new life is about to arrive.',
    },
  ],

  relationships: [
    {
      from: 'Helen',
      to: 'Jo',
      kind: 'mother and daughter',
      note: 'A relationship of sarcasm, rivalry and need. Helen keeps leaving Jo and keeps coming back; Jo swears she is nothing like her mother and repeats her life almost exactly.',
    },
    {
      from: 'Jo',
      to: 'Jimmie',
      kind: 'engaged lovers',
      note: 'Tender and playful in Act 1. He proposes, spends Christmas with her and goes back to sea, leaving her pregnant, and never returns.',
    },
    {
      from: 'Jo',
      to: 'Geof',
      kind: 'friends and housemates',
      note: 'An unconventional family built on care rather than sex or blood. Geof loves and looks after Jo; she depends on him and refuses to marry him.',
    },
    {
      from: 'Helen',
      to: 'Peter',
      kind: 'engaged, then married',
      note: 'A marriage for money and fun that lasts months. Peter leaves Helen for another woman, sending her back to Jo.',
    },
    {
      from: 'Peter',
      to: 'Jo',
      kind: 'unwilling stepfather and stepdaughter',
      note: 'Jo mocks and provokes him; he finds her a nuisance, and in Act 2 refuses to have her in his house.',
    },
    {
      from: 'Helen',
      to: 'Geof',
      kind: 'rivals for Jo',
      note: 'Geof fetches Helen because he thinks Jo needs her mother. Helen mocks him, and in the last scene pushes him out of the flat.',
    },
    {
      from: 'Peter',
      to: 'Geof',
      kind: 'the conventional man and the gentle one',
      note: 'Peter’s drunken insults show the prejudice Geof lives with, and the contrast shows where the play’s sympathy lies.',
    },
  ],

  compareWith: [
    {
      title: 'Leave Taking',
      href: '/revision/texts/leave-taking',
      reason:
        'Another AQA modern play built around a mother and her daughters, in which a parent’s sacrifices and a daughter’s choices collide in cramped rooms.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'An AQA modern play about a poor northern single mother, class and fate, which also mixes realism with song and direct address to the audience.',
    },
    {
      title: 'Princess & The Hustler',
      href: '/revision/texts/princess-and-the-hustler',
      reason:
        'Set by AQA, and by Cambridge 0475 for 2027: a family drama about race and belonging in Britain a few years after A Taste of Honey was written.',
    },
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        'A Cambridge 0475 drama text for 2026 (not 2027), from a decade earlier, in which a woman who depends on men for security arrives with her luggage at a cramped home and upsets it.',
    },
  ],

  contentGuidance: [
    'intimate_relationships',
    'discrimination',
    'addiction',
    'violence',
    'mental_health',
    'mortality',
  ],

  quotesFromElsewhere: [
    'A fortnight ago I didn’t know the theatre existed',
    'zest for life',
    'a work of complete, exhilarating originality',
    'of exercise books and marmalade',
  ],

  sources: [
    {
      label:
        'Internet Archive full-text search, restricted item by item to scanned editions of the play: the 1959 Grove Press edition (tasteofhoneyplay01dela), a second 1959 printing (tasteofhoney0000unse_h9w3) and Grove’s Seven Plays of the Modern Theater (sevenplaysofmode0000unse_w7j6). Used to confirm the exact words, speaker and surrounding lines of every quotation, the stage directions cited, Geof’s surname, the copyright line, and act placement from the running heads. The 1982 Methuen student edition is not in the full-text index and was not used',
      url: 'https://archive.org/details/tasteofhoneyplay01dela',
    },
    {
      label:
        'LitCharts, A Taste of Honey quotations: dialogue passages by act and scene, used by the first draft (not independently re-read in the fact check, which relied on the scanned editions)',
      url: 'https://www.litcharts.com/lit/a-taste-of-honey/quotes',
    },
    {
      label:
        'LitCharts, Act 1, Scene 1 summary: order of events, the bulbs, the drawings, Peter’s proposal, the darkness',
      url: 'https://www.litcharts.com/lit/a-taste-of-honey/act-1-scene-1',
    },
    {
      label:
        'LitCharts, Act 1, Scene 2 summary: Jimmie, Cardiff, Othello, the wedding day and Jo’s father',
      url: 'https://www.litcharts.com/lit/a-taste-of-honey/act-1-scene-2',
    },
    {
      label:
        'LitCharts, Act 2, Scene 1 summary: Geof’s arrival, the proposal, Helen’s and Peter’s visit',
      url: 'https://www.litcharts.com/lit/a-taste-of-honey/act-2-scene-1',
    },
    {
      label:
        'GradeSaver, A Taste of Honey quotations and analysis: second printing of several dialogue passages, including the ending',
      url: 'https://www.gradesaver.com/a-taste-of-honey/study-guide/quotes',
    },
    {
      label:
        'GradeSaver, Act 2, Scene 2 summary and character list: the doll, Helen’s return, Geof’s departure, the final moments and the nursery rhyme',
      url: 'https://www.gradesaver.com/a-taste-of-honey/study-guide/summary-act-two-scene-two',
    },
    {
      label:
        'British Library, Selina Todd, An introduction to A Taste of Honey (Discovering Literature, archived copy): Delaney’s covering letter, the play beginning as a novel, the flat near Salford docks, the Woolworths ring, the censor and Geof, Littlewood sharpening Helen’s reaction',
      url: 'https://web.archive.org/web/20201221144355/https://www.bl.uk/20th-century-literature/articles/an-introduction-to-a-taste-of-honey',
    },
    {
      label:
        'British Library, Louise Kimpton Nye, Looking at the original script for A Taste of Honey (archived copy): Littlewood’s cuts and additions, the darker original, the gentler Peter, the published doll speech, Tynan’s review',
      url: 'https://web.archive.org/web/20190328094547/https://www.bl.uk/20th-century-literature/articles/looking-at-the-original-script-for-a-taste-of-honey',
    },
    {
      label:
        'British Library, Notes made by Joan Littlewood about the music in A Taste of Honey (archived copy): the Apex Trio on stage, signature tunes, dancing between scenes, Avis Bunnage’s asides to the audience',
      url: 'https://web.archive.org/web/20190331093907/https://www.bl.uk/collection-items/notes-made-by-joan-littlewood-about-the-music-in-a-taste-of-honey',
    },
    {
      label:
        'Wikipedia, A Taste of Honey: first performance 27 May 1958, Wyndham’s transfer 10 February 1959, the 1960 Broadway production, the reviews by Tynan, Lindsay Anderson and the Daily Mail, the 2014 National Theatre revival',
      url: 'https://en.wikipedia.org/wiki/A_Taste_of_Honey',
    },
    {
      label:
        'Wikipedia, Shelagh Delaney: birth, schooling, Variation on a Theme, later works, Morrissey, death in 2011',
      url: 'https://en.wikipedia.org/wiki/Shelagh_Delaney',
    },
    {
      label:
        'Wikipedia, A Taste of Honey (film): 1961, Tony Richardson, cast, BAFTA and Cannes awards',
      url: 'https://en.wikipedia.org/wiki/A_Taste_of_Honey_(film)',
    },
    {
      label:
        'Wikipedia, Joan Littlewood: Theatre Workshop at the Theatre Royal, Stratford East, from 1953',
      url: 'https://en.wikipedia.org/wiki/Joan_Littlewood',
    },
    {
      label:
        'Wikipedia, Kitchen sink realism: John Bratby, David Sylvester, Look Back in Anger (1956)',
      url: 'https://en.wikipedia.org/wiki/Kitchen_sink_realism',
    },
    {
      label: 'Wikipedia, Lord Chamberlain’s Office: theatre censorship until the Theatres Act 1968',
      url: 'https://en.wikipedia.org/wiki/Lord_Chamberlain%27s_Office',
    },
    {
      label:
        'Wikipedia, Wolfenden report: 4 September 1957, and the Sexual Offences Act 1967 in England and Wales',
      url: 'https://en.wikipedia.org/wiki/Wolfenden_report',
    },
    {
      label:
        'Wikipedia, 1958 Notting Hill race riots: dates of the Nottingham and Notting Hill violence, the British Nationality Act 1948',
      url: 'https://en.wikipedia.org/wiki/1958_Notting_Hill_race_riots',
    },
    {
      label: 'Wikipedia, HMT Empire Windrush: docked at Tilbury on 21 June 1948',
      url: 'https://en.wikipedia.org/wiki/HMT_Empire_Windrush',
    },
    {
      label: 'Wikipedia, Abortion Act 1967: in force from 27 April 1968',
      url: 'https://en.wikipedia.org/wiki/Abortion_Act_1967',
    },
    {
      label: 'Wikipedia, Teddy Boy: the 1950s style and the name shortened from Edwardian',
      url: 'https://en.wikipedia.org/wiki/Teddy_Boy',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027: A Taste of Honey on the Papers 2 and 3 drama list',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'AQA GCSE English Literature 8702 subject content: A Taste of Honey among the modern texts',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content',
    },
  ],
}
