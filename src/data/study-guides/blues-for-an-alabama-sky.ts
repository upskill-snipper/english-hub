import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Blues for an Alabama Sky, Pearl Cleage (first produced 1995, Alliance
 * Theatre, Atlanta). A complete guide for Cambridge IGCSE Literature in English
 * (0475), where it is a drama set text for 2026 and 2027.
 *
 * HOW THE QUOTATIONS WERE CHECKED. Every quotation was found verbatim in the
 * Internet Archive's full-text index of two scanned editions: the Dramatists
 * Play Service acting edition (New York, 1999) and the Theatre Communications
 * Group collection Flyin' West and Other Plays (New York, 1999, two scanned
 * copies). The index returns the matched words with the lines around them, so
 * the speaker and the neighbouring action could be confirmed as well as the
 * wording.
 *
 * THE ENDING DIFFERS BETWEEN EDITIONS. A fact-check found that an earlier
 * draft of this guide called the repeated "Hot enough for you?" the last line
 * of the play without qualification. It is not in the 1999 editions: their
 * final stage direction (recovered phrase by phrase from the index) has Angel
 * refill a glass, sit at the open window, think, and drink as the lights fade,
 * with no stranger and no line. The stranger and the repeated line are in the
 * revised text published by Nick Hern Books in 2022 and staged at the National
 * Theatre: LitCharts prints that final direction and line at page 104 (the
 * Nick Hern edition has 104 pages), and the National Theatre synopsis
 * describes the same ending. The guide therefore attributes the repeat to the
 * 2022 edition every time it mentions it. Most lines were also found in the dialogue printed on the LitCharts
 * quotations page, and several in the Gale Drama for Students essays. Scene
 * placement comes from the scene-by-scene synopses of the National Theatre
 * learning guide, Save My Exams, LitCharts and Gale, checked against the lines
 * around each quotation.
 *
 * WHAT WAS LEFT OUT. The National Theatre guide transcribes its lines from the
 * 2025 recording of the production and is loose in places ("I am tired of negro
 * dreams ... break you heart"); none of its wording was used unless an edition
 * confirmed it. It also calls Guy Angel's cousin; Gale explains that this is
 * the story Angel tells Leland to hide that Guy is gay, and every other source
 * treats the two as old friends, as this guide does. Gale says Guy met Angel in Alabama; the play says Savannah,
 * Georgia. Where the synopses disagree (the ring Leland brings in Act 2,
 * Scene 4 is a small diamond ring that was his mother's in the 1999 text, and
 * his grandmother's in the National Theatre synopsis) this guide says less.
 * Gale also says Angel and Delia part without a word; both 1999 editions give
 * them a two-word goodbye each, which is why the guide says "barely a word".
 *
 * THE EXISTING PAGE at /resources/english-literature/caie/blues-for-an-alabama-sky
 * was read for orientation only. Its seven quotations, among them "Harlem is
 * the place where everybody comes to be free", were searched for in both
 * editions and none was found; nothing from it is used here.
 *
 * PAGE NUMBERS are not given. The acting edition, the TCG collection and the
 * 2022 Nick Hern Books edition paginate differently, so every moment is located
 * by act, scene and the action around it.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to and summarised. The songs Angel sings are never quoted.
 */
export const guide: StudyGuide = {
  slug: 'blues-for-an-alabama-sky',
  title: 'Blues for an Alabama Sky',
  author: 'Pearl Cleage',
  form: 'play',
  scope:
    'The whole play, in two acts of five scenes each. For Cambridge IGCSE Literature in English (0475) it is a drama set text for examination in 2026 and 2027, on Paper 2 (Drama), where for each text you choose between a question on a printed passage and an essay question (across your two texts you answer one of each), and on Paper 3 (Drama, Open Text), where you may take a clean, unannotated copy of the play into the exam. Editions are paginated differently, so this guide locates every moment by act, scene and what is happening, not by page. The UK edition (Nick Hern Books, 2022) also ends slightly differently from the American editions of 1999: see the note on “Hot enough for you?”.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Pearl Cleage. Quotations were checked against the Dramatists Play Service acting edition (New York, 1999) and Flyin’ West and Other Plays (Theatre Communications Group, New York, 1999); the play is published in the UK by Nick Hern Books (2022). Quoted for criticism and review.',
  },
  workLength: {
    words: 20000,
    basis:
      'Estimated, not counted: the Dramatists Play Service acting edition runs to about 80 pages, the TCG collection prints the play across about 100 pages (pp. 87-186) and the Nick Hern Books edition has 104, and a page of dramatic dialogue carries roughly 200 to 250 words. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      'Harlem, New York, in the summer of 1930. The Harlem Renaissance, the great flowering of Black American music, writing and art in the 1920s, is fading as the Great Depression takes hold, and the play follows five people trying to hold on to their dreams while the money and the jobs disappear. Angel Allen, a nightclub singer, has just been sacked from the Cotton Club and dropped by her gangster lover. Her oldest friend Guy Jacobs, a gay costume designer, takes her in and never stops believing that Josephine Baker will send for him to design for her in Paris. Across the hall lives Delia Patterson, a young social worker trying to open a family planning clinic in Harlem, helped by Sam Thomas, a doctor who delivers babies at Harlem Hospital and loves the city’s nightlife.',
      'Into this makeshift family walks Leland Cunningham, a young widower from Alabama who helps Guy carry a drunken Angel home in the first scene. Leland is religious, conservative and grieving: his wife and baby son died in childbirth, and Angel looks like his wife. Angel does not love him, but with no job and no prospects she sees in him security. Act 1 is full of comedy, parties and plans. Act 2 darkens quickly: Leland’s contempt for Guy’s sexuality breaks up a tea party, Angel finds she is pregnant and agrees to marry him, and the clinic is set on fire.',
      'Then Guy’s dream comes true. Josephine Baker invites him to Paris, and he buys Angel a ticket too. Angel asks Sam to perform an abortion, which was illegal, and he agrees. When she tells Leland the truth, he shoots Sam in the back. In the final scene, two weeks later, Guy leaves for Paris and takes Delia in Angel’s place; Angel slips back into the apartment and, after the briefest farewell to Delia, sits alone at the window working out what to do next.',
      'The play is a portrait of ordinary people at the end of a famous era: the singers, dressmakers, social workers and doctors who lived through the Harlem Renaissance but are not in the history books. It asks what freedom means for Black Americans who came north to escape the South, and especially for a Black woman whose only currency is her looks. Cleage refuses an easy ending. Angel, the most vivid character on stage, makes the choices that break the group apart, and the play leaves you to decide whether she is a selfish survivor, a victim of her time, or both.',
    ],
  },

  context: [
    {
      heading: 'Pearl Cleage',
      body: 'Pearl Cleage was born on 7 December 1948 in Springfield, Massachusetts, and grew up in Detroit, where her father, the Reverend Albert Cleage, founded the Shrine of the Black Madonna and became a leading civil rights figure. She studied playwriting at Howard University and graduated from Spelman College in Atlanta in 1971, then worked as press secretary and speechwriter for Maynard Jackson, Atlanta’s first Black mayor, before writing full time. She has written plays, essays, poetry and best-selling novels, and she calls herself “a child of the Black Arts Movement”, the 1960s and 1970s movement that made art out of Black political experience. Her plays are known for putting Black women’s lives, and the choices open to them, at the centre of American history.',
    },
    {
      heading: 'The play’s history',
      body: 'Blues for an Alabama Sky was first produced in 1995 at the Alliance Theatre in Atlanta, which had also staged Cleage’s Flyin’ West (1992). In 1996 it was performed as part of the Cultural Olympiad that accompanied the Atlanta Olympic Games. In 2022 the National Theatre in London revived it in a production directed by Lynette Linton, with Samira Wiley as Angel and Giles Terera as Guy, and Nick Hern Books published a UK edition the same year. So a play written in the 1990s looks back sixty-five years to 1930, and it is worth asking what an American audience of the 1990s, in a decade of fierce argument about abortion rights, would hear in it.',
    },
    {
      heading: 'The Harlem Renaissance and its end',
      body: 'In the Great Migration of the early twentieth century, vast numbers of Black Americans left the segregated South, with its Jim Crow laws and racial violence, for Northern cities. Harlem, in upper Manhattan, became the unofficial capital of Black America, and in the 1920s it produced an explosion of music, writing and art now called the Harlem Renaissance, with figures such as the poet Langston Hughes, who is a friend of Guy’s in the play. Clubs like the Cotton Club, where Angel and Guy worked, made stars of Black performers, but served white audiences only. Cleage’s note on time and place says the creative high of the Renaissance has given way to “the harsher realities of the Great Depression”: the play is set just as the party ends.',
    },
    {
      heading: 'The Great Depression and Prohibition',
      body: 'The Wall Street Crash of October 1929 began the Great Depression, the worst economic collapse in modern American history, and Black workers were among the hardest hit. In the play the nightclubs are closing, there is no singing work for Angel, and Guy and Angel face eviction. The play is also set during Prohibition (1920 to 1933), when making and selling alcohol was illegal across the United States. The friends drink freely, bootleg liquor and French champagne alike, while Leland, offered champagne by Guy, asks whether it is not still Prohibition: a small sign of how differently the Southern churchgoer and the Harlem bohemians see the rules.',
    },
    {
      heading: 'Margaret Sanger and the Harlem clinic',
      body: 'Delia’s clinic is based on a real one. In 1930 the birth control campaigner Margaret Sanger opened a branch of her clinic in Harlem, on Seventh Avenue near 138th Street, with an all-Black advisory council that included doctors, nurses and clergy, and with the co-operation of Harlem churches including Abyssinian Baptist. Contraception was controversial and abortion was illegal, so women who sought one risked dangerous back-street operations. Sam’s warning that “The Garveyites are already charging genocide” reflects a real argument: followers of Marcus Garvey, the Black nationalist leader, feared that white-led birth control campaigns aimed to reduce the Black population. The play lets both sides of that argument speak.',
    },
    {
      heading: 'Real people offstage',
      body: 'Cleage places her invented characters among real ones who never appear. Josephine Baker, an American-born dancer and singer, had become a star in the Paris music halls in the late 1920s; for Guy she is proof that a Black artist can be celebrated and free abroad. The Reverend Adam Clayton Powell Jr, whom Delia must persuade, preaches at Abyssinian Baptist Church in the play; historically he was then in his early twenties, succeeded his father as its pastor in 1937 and was elected to Congress in 1944. Langston Hughes, Margaret Sanger and the musician Fats Waller are mentioned too. Mixing history and fiction in this way makes the characters feel like real people living through real events.',
    },
    {
      heading: 'Being gay in 1930 Harlem',
      body: 'Harlem in the 1920s had a lively gay social world, including drag balls, and in the play Guy moves among Harlem Renaissance writers such as Langston Hughes and the openly gay Bruce Nugent, and remembers the Hamilton Lodge drag ball as a gold mine for his costumes. But sex between men was a crime in every American state in 1930, and violence against gay men was common. In the play Guy reports that Bruce and another man were attacked round the corner for holding hands, and Guy himself is threatened by young men near the store, some of whom Leland knows. Guy’s refusal to hide is an act of courage, and his longing for Paris is partly a longing for a place where he can be himself.',
    },
  ],

  themes: [
    {
      title: 'Dreams and reality',
      body: 'The play is built on a contrast between two ways of facing hard times. Guy dreams big and works for his dream, sending sketches and then costumes to Josephine Baker until she sends for him. Angel has given up on dreams and wants only safety. In Act 1, Scene 3 she dismisses Guy to Delia as “a dreamer” and plans to hitch her star to somebody “a little closer to home”; in Act 1, Scene 5 she tells Leland “I’m tired of Negro dreams”. For most of the play the audience may side with Angel’s realism, because Guy’s Paris looks like a fantasy. The ending reverses that: Guy’s dream comes true, and Angel’s practical choice leads to disaster. Cleage seems to suggest that dreams are not escapism but survival, the thing that got Guy and Angel out of Savannah in the first place. Yet the play does not simply reward the dreamer. Harlem itself was a dream, and in the final scene Guy admits it lasted only “a red-hot minute”.',
    },
    {
      title: 'The Depression and economic survival',
      body: 'Money drives almost every decision. Angel loses her job, her flat and most of her clothes in one night because they all depended on Nick; there is no singing work because the Depression has emptied the clubs; an audition turns out to be an offer to become another gangster’s mistress; and an eviction notice arrives on the door. When Guy asks what she sees in Leland, her answer is brutally honest: a rent cheque that will not bounce. The play is careful not to sneer at her. For a Black woman in 1930, with few jobs open to her, marriage was an economic strategy. Cleage shows how poverty narrows choices until love, art and even friendship become things only the secure can afford.',
    },
    {
      title: 'Women’s choices and reproductive rights',
      body: 'Delia’s clinic and Angel’s pregnancy make the same question personal and political: who decides what happens to a woman’s body? Delia argues that “A woman shouldn’t have to make a baby every time she makes love”, and Sam, who delivers babies to “exhausted women and stone-broke men”, supports her while warning that many in Harlem distrust birth control led by white women. Angel’s choice is harder for an audience, because she lies, uses Leland and chooses Paris over a child. Cleage does not make her a heroine, but the play insists that the choice was hers to make, and it shows the violent cost of a world where men like Leland believe it is theirs. It is significant that the man who shoots Sam does so in the name of the son he has lost, while Angel’s own wishes count for nothing with him.',
    },
    {
      title: 'Sexuality, prejudice and violence',
      body: 'Guy is the play’s most openly free character: he intends to walk where he pleases, wearing what he pleases, even after young men confront him in the street. Leland brings the prejudice of his Southern religion into the apartment, calling a story about men flirting an “abomination”, and Guy throws him out. Angel, meanwhile, hides Guy’s sexuality from Leland for as long as she can. Cleage connects the prejudices: the same man who cannot accept Guy cannot accept Angel’s freedom over her body. One reading is that his faith gives him a language for contempt, and that contempt ends in violence. The play also shows prejudice within the Black community, not only between Black and white, and Cleage makes a point of showing it.',
    },
    {
      title: 'Harlem, the South and escape',
      body: 'Every character is on a journey. Guy and Angel escaped Savannah for Harlem; Leland has come from Alabama after his wife’s death; Guy looks past Harlem to Paris. Harlem was supposed to be the promised land, but the play shows it becoming another trap, with no jobs, street violence and closing clubs. Leland, by contrast, remembers the South fondly and sees Harlem as a place of sin, and his memory of an Alabama sky thick with stars gives the play its title. The title itself mixes the two worlds: the blues is a music born in the South and sung in Harlem, and the play suggests that the pain the characters fled has followed them north.',
    },
    {
      title: 'Friendship and chosen family',
      body: 'Guy, Angel, Delia and Sam form a family by choice rather than by blood. Guy takes Angel in without a second thought, even hiding that he lost his job defending her; Sam shares a drink with everyone to toast the twins he has just delivered and cures Angel’s hangover; Delia lends Angel her new dress. This warmth is what makes the ending so painful. Angel’s choices break the family apart: Sam is dead, Delia leaves without looking back, and Guy sails without her. Yet even at the end Guy has paid the rent ahead so that Angel will have somewhere to live, a last act of love. One reading is that the play is less a tragedy about a murder than about the loss of this small community.',
    },
  ],

  characters: [
    {
      name: 'Angel Allen',
      role: 'A nightclub singer, 34, sacked from the Cotton Club',
      body: 'Angel is the centre of the play, glamorous, funny, quick-tongued and desperate. Cleage’s cast list describes her as thirty-four but looking five years younger, and her fading youth matters: her beauty is the only security she has ever had. She grew up in Savannah and came north with Guy, having survived Miss Lillie’s, the brothel where she and Guy first met, and she has learned to depend on men for money and a roof. Her lover Nick, a gangster, has married someone else; her audition is really an offer to become another man’s mistress; so she turns to Leland, whom she does not love. When Guy’s ticket to Paris offers her freedom she seizes it, ends her pregnancy and tells Leland the truth, with fatal results. Critics disagree about her. One reading sees a selfish woman who uses everyone; another sees a victim of a world that offers a Black woman nothing but her body to trade. Cleage said she had to accept writing a character who does not triumph, and the final image of Angel at the window, calm and thinking about what comes next, is neither punishment nor victory.',
    },
    {
      name: 'Guy Jacobs',
      role: 'A costume designer, about thirty, Angel’s oldest friend',
      body: 'Guy is witty, generous and fearless. He lost his own job at the Cotton Club defending Angel and kept it from her so that she would not panic. He lives openly as a gay man, tells Delia to “Learn to spot the romance”, a motto for his whole way of living, since he looks for beauty and possibility even in hard times, sprinkles his talk with French, drinks champagne whenever he can and keeps a large picture of Josephine Baker on the wall, certain that she will send for him. He is the play’s great dreamer, but he is not idle: he sends sketches, then costumes, and works for anyone who will pay. When the invitation to Paris comes, his first thought is to buy Angel a ticket too. Many readers see him as the moral centre of the play, although he can be exasperated by Angel, and his closing memories of their youth in Savannah show that his love for her goes back to the worst days of both their lives.',
    },
    {
      name: 'Delia Patterson',
      role: 'A social worker, 25, the neighbour across the hall',
      body: 'Delia is earnest, principled and shy, especially with men. She is working to open a family planning clinic in Harlem and must persuade the Reverend Powell and the deacons of Abyssinian Baptist Church to support it. Sam helps her rehearse and challenges her, and their relationship grows from arguments about the clinic into love. She is Angel’s opposite, careful where Angel is reckless, but the two women are drawn to each other: Angel lends Delia confidence and borrows her new dress. Sam’s murder and the scandal in the papers devastate her, and in the last scene she takes Angel’s place on the voyage to Paris. Her final, almost wordless parting from Angel is one of the play’s saddest moments.',
    },
    {
      name: 'Sam Thomas',
      role: 'A doctor at Harlem Hospital, 40',
      body: 'Sam is warm, teasing and dedicated. He delivers babies day and night but stays out late in the clubs, because the music reminds him that his patients are more than injuries and emergencies. He supports Delia’s clinic yet understands why many Black Harlemites suspect it, and his questions make her speech stronger. He has helped Angel end a pregnancy before, and when she asks again he is reluctant, partly out of concern for Leland, but agrees. His line to Angel about Leland, that the news will kill him, is a terrible irony, because it is Sam who dies. His death shows the price paid by the people who help women make their own choices.',
    },
    {
      name: 'Leland Cunningham',
      role: 'A widower from Alabama, 28, Angel’s suitor',
      body: 'Leland is polite, serious and deeply religious, recently arrived in Harlem. His wife died in childbirth, and the baby with her, and he is drawn to Angel because she looks like his wife. He brings Angel a modest dress, makes her a rocking chair and dreams of a family, and he is genuinely in love, which makes him a more complex figure than a simple villain. But he wants Angel to be someone she is not, he is disgusted by Guy’s sexuality, he carries a gun, and he knows the young men who threaten gay men on the street. When Angel tells him she has ended the pregnancy, he shoots Sam in the back. Cleage lets us understand his grief without excusing his violence.',
    },
    {
      name: 'Josephine Baker',
      role: 'Offstage: the real American-born star of the Paris stage',
      body: 'Josephine Baker never appears, but her picture hangs in Guy’s apartment and her cables drive the plot. For Guy she represents everything Harlem cannot give him: fame, money and freedom from American racism. For Angel, who mocks “The myth of the magical Josephine”, she is a fantasy who never pays the rent. The fact that she does finally send for Guy is the play’s great reversal, and it is what makes Angel’s choices matter.',
    },
    {
      name: 'Nick',
      role: 'Offstage: Angel’s gangster lover',
      body: 'Nick, an Italian gangster, kept Angel in an apartment and has just married another woman, which is why Angel makes a scene at the Cotton Club and is sacked. He then arranges an audition for her with a friend that turns out to be a proposition. He never appears, but one reading is that he stands for the white men with money who have shaped Angel’s life, and for the way she has survived by depending on them.',
    },
  ],

  keyQuotes: [
    {
      text: 'Everybody in Harlem is singing the blues.',
      where: 'Angel, Act 1, Scene 1',
      analysis:
        'Guy tells the sacked Angel she can still sing the blues, and she turns his encouragement into a verdict on the whole city. The line works on two levels: blues singers are ten a penny, so she cannot stand out, and everyone in Depression Harlem has reason to be sad. It announces the title’s music as the play’s mood, and it shows Angel’s habit of cutting hope down with a joke.',
    },
    {
      text: 'For prospects, you gotta look past 125th Street.',
      where: 'Guy, to Angel, Act 1, Scene 3',
      analysis:
        '125th Street is the main street of Harlem, so Guy is telling Angel that Harlem itself has become too small. The casual vernacular (“gotta”) makes this sound like everyday advice, but it is the heart of his philosophy: freedom lies beyond where you happen to be. Ironically Harlem was once the place they looked towards from Savannah; now it is the limit.',
    },
    {
      text: 'Guy’s a dreamer. He always was and he always will be',
      where: 'Angel, to Delia, Act 1, Scene 3',
      analysis:
        'Angel sums up her oldest friend with affection and contempt at once. The balanced repetition of “always was” and “always will be” fixes Guy as someone who will never change, and Angel goes on to say she will hitch her star to someone closer to home. The line is dramatic irony: Guy’s dream will come true, and Angel’s realistic plan will fail.',
    },
    {
      text: 'Is that your dream? Singing for gangsters?',
      where: 'Guy, to Angel, Act 1, Scene 3',
      analysis:
        'Angel has just mocked Guy as a genius with a dream while she is only a woman out of a job, and he turns the word back on her. The two sharp questions expose how low her hopes have sunk: the audition Nick has arranged is with one of his gangster friends. The exchange sets his dream directly against her survival, and it foreshadows what the audition really is.',
    },
    {
      text: 'White women teaching colored women how to stop having children.',
      where: 'Sam, to Delia, Act 1, Scene 3',
      analysis:
        'Sam voices what he thinks family planning means to many Black men in Harlem. The blunt fragment, with no main verb, and the contrast of “White women” with “colored women” turn Delia’s kindly project into a story of racial power. He supports the clinic, so this is a warning rather than his own view, and it shows Cleage refusing to make the debate simple.',
    },
    {
      text: 'A woman shouldn’t have to make a baby every time she makes love!',
      where: 'Delia, to Sam, Act 1, Scene 3',
      analysis:
        'Shy Delia bursts out with the play’s clearest statement of women’s rights. The exclamation and the frank phrasing are shocking from a character who is so shy with men, and the parallel of “make a baby” with “makes love” insists that pleasure and motherhood are different things. It prepares us for Angel’s choice in Act 2.',
    },
    {
      text: 'You look a lot like somebody I used to know back home.',
      where: 'Leland, to Angel, Act 1, Scene 4',
      analysis:
        'Leland explains why he noticed Angel, and the vague “somebody” turns out to be his dead wife. The hesitation before the line in the stage directions shows grief he can hardly speak. From the start, then, his love is for a likeness, and “back home” ties that likeness to Alabama: he wants Angel to restore the life he lost.',
    },
    {
      text: 'I plan to walk where I please, wearing what I please, whenever I please.',
      where: 'Guy, to Angel, Act 2, Scene 1',
      analysis:
        'After a confrontation with young men near the store, Guy refuses to hide. The triple repetition of “please” builds a rhythm of defiance, each clause claiming another freedom: place, appearance, time. It is a statement of pride in the face of homophobic violence, and it makes Guy the character who most fully lives the freedom the others only talk about.',
    },
    {
      text: 'Because you let me see how beautiful I was.',
      where: 'Guy, to Angel, Act 2, Scene 1',
      analysis:
        'In the middle of their quarrel about Leland, Guy explains why he stands by Angel. The simple, past-tense sentence reaches back to their past, suggesting that she once gave him a sense of his own worth when nobody else did. It is the emotional key to their friendship, and it makes her later abandonment of him more painful.',
    },
    {
      text: 'in Alabama, there’s still such a thing as abomination!',
      where: 'Leland, to Guy, Act 2, Scene 1',
      analysis:
        'Leland’s response to Guy’s story about men flirting uses the language of the Bible to condemn homosexuality. “Still” reveals his view of the North as a place where morals have collapsed, and Alabama as a place of order. The word “abomination” turns a friend’s anecdote into sin, and Guy orders him out: the first open crack in the group.',
    },
    {
      text: 'trying to lean on one more weak Negro who can’t finish what he started',
      where: 'Angel, to Leland, Act 2, Scene 1',
      analysis:
        'Angel tells Leland the only thing she fears is another weak man. It is a challenge to his manhood, spoken in the same exchange in which she sees that he carries a gun, so it is loaded with danger. Her taunt about finishing what he started hangs over Act 2, Scene 4, when Leland acts decisively in the worst way.',
    },
    {
      text: 'that Alabama sky where the stars are so thick it’s bright as day',
      where: 'Leland, to Angel, Act 2, Scene 2',
      analysis:
        'In his proposal Leland describes the night he first saw Angel, when Harlem’s sky seemed like home. The image of stars so thick that night becomes day is the most lyrical moment in the play, and it echoes the play’s title. It shows Leland’s tenderness and nostalgia, but also that he loves an idea of home, and of a wife, that Angel can never be.',
    },
    {
      text: 'This is my chance to live free, Doc, and I’m taking it.',
      where: 'Angel, to Sam, Act 2, Scene 3',
      analysis:
        'Angel explains why she wants to end her pregnancy and sail to Paris. The simple, decisive sentence and the affectionate “Doc” make it sound reasonable, even brave. But she has just agreed to marry Leland, and Sam’s question about him hangs over the line, so the audience hears freedom and selfishness in the same breath, which is exactly the judgement the play asks us to weigh.',
    },
    {
      text: 'Pretend I’m Anna. Pretend I love you.',
      where: 'Angel, to Leland, Act 2, Scene 4',
      analysis:
        'Angel finally tells Leland what their relationship has been. The two short imperatives, both beginning “Pretend”, strip away the romance: he wanted a copy of his dead wife, and she acted a love she did not feel. It is her most honest moment and the one that tips Leland into violence, so honesty and catastrophe arrive together.',
    },
    {
      text: 'I didn’t lose the baby. I got rid of it.',
      where: 'Angel, to Leland, Act 2, Scene 4',
      analysis:
        'After Leland grabs her and demands that she look at him, Angel drops the lie about a miscarriage. The two short, flat sentences are brutally plain: the first denies his version, the second states hers, and the harsh phrase “got rid of it” refuses any softening. It is the line that turns Leland’s grief into rage against Sam.',
    },
    {
      text: 'for a red-hot minute, we did',
      where: 'Guy, to Delia, Act 2, Scene 5',
      analysis:
        'Guy looks back on what Harlem was meant to be, a place where Black people could come together and flourish, and admits that it lasted only briefly. The slangy “red-hot minute” is full of heat and jazz-age energy, but “minute” makes it fleeting. It works as an elegy for the Harlem Renaissance itself, spoken by a man on the point of leaving for Paris.',
    },
    {
      text: 'Tawdry and tainted and running for our natural lives!',
      where: 'Guy, to Delia, Act 2, Scene 5',
      analysis:
        'Delia says the newspaper story about Sam’s death sounds tawdry, and Guy agrees and includes everyone. The alliteration of “Tawdry and tainted” owns the scandal instead of denying it, and “running for our natural lives” turns shame into survival. It is close to the play’s own attitude: nobody here is pure, and nobody deserves to be judged by the headlines.',
    },
    {
      text: 'Hot enough for you?',
      where:
        'Angel, to Leland, Act 1, Scene 2; in the 2022 Nick Hern Books edition, also the last line of the play',
      analysis:
        'Angel first speaks these flirtatious words from the window to Leland, a passer-by she does not remember meeting the night before. In the 2022 UK edition, which ends as the National Theatre production did, she says them again at the very end, from the same window, to another well-dressed stranger. The 1999 American editions have no stranger and no line: Angel simply sits at the window and drinks. In either version the final direction calls the moment “clearly reminiscent” of her first sight of Leland, so the play comes full circle. Whether her return to the window is resilience or a trap is the question the ending leaves open.',
    },
  ],

  extracts: [
    {
      title: 'Sam and Delia rehearse the clinic speech',
      where: 'Act 1, Scene 3',
      pointer:
        'In Delia’s apartment, from Delia suggesting Sam cut back on his nightlife to her angry reply that a woman should not have to make a baby every time she makes love.',
      summary:
        'Sam has come to help Delia prepare the speech that must win over the church for her clinic, and has dozed off. Teased about his late nights, he explains that the music keeps him human after days of hard labours and emergencies. Then he starts asking the hostile questions the deacons will ask: the families he treats want jobs, not birth control, and some Harlem voices already call white-led family planning an attack on the race. Delia is furious, but his challenge makes her argument stronger.',
      annotations: [
        {
          phrase: 'forget about the soul',
          note: 'Sam explains why he needs Harlem’s nightlife. Setting body against soul shows he sees his patients as whole people, and suggests that music and pleasure are necessities, not luxuries, in hard times.',
        },
        {
          phrase: 'exhausted women and stone-broke men',
          note: 'Two compressed adjectives, one for each sex, sketch Depression poverty. Women are worn out by childbirth and men by unemployment, and the phrase explains why family planning matters and why it is not enough.',
        },
        {
          phrase: 'The Garveyites are already charging genocide',
          note: 'A real historical argument enters the play. The legal-sounding “charging” and the huge word “genocide” show how high the stakes are, and prepare for the fire later set at the clinic.',
        },
        {
          phrase: 'every time she makes love',
          note: 'Delia’s outburst closes the passage. Her frankness surprises Sam and the audience, and the argument that began as a rehearsal can be read as the first spark of their romance.',
        },
      ],
      question:
        'Explore the ways in which Cleage makes this conversation between Sam and Delia both entertaining and serious.',
    },
    {
      title: 'The tea party breaks up',
      where: 'Act 2, Scene 1',
      pointer:
        'In Guy’s apartment, from Guy beginning his story about the party where men admired one another to Angel asking Leland to wait for her downstairs.',
      summary:
        'The friends have gathered for tea to celebrate Guy sending his costumes to Josephine Baker. Guy tells a story about a party where men were eyeing and flirting with one another. Leland is appalled, tells Guy not to bring God into it and calls it an abomination. Guy, standing, orders him out. Angel, caught between her oldest friend and the man she means to marry, cries out to stop Guy and then, helplessly, asks Leland to wait for her downstairs.',
      annotations: [
        {
          phrase: 'Men flirting with men?',
          note: 'Guy has just described the men at the party (“Admiring. Sizing up. Flirting.”), and Leland throws the last word back as an incredulous question, as if it were obscene. The comfortable atmosphere of the tea party changes instantly.',
        },
        {
          phrase: 'such a thing as abomination',
          note: 'Biblical language, from the Old Testament condemnation of sex between men, is used as a weapon. Leland frames Alabama as moral and New York as corrupt, so the clash is regional and religious as well as personal.',
        },
        {
          phrase: 'Get out.',
          note: 'Guy’s reply is two words, a sharp contrast with his usual flowing, witty speech. The stage direction has him standing, so his body as well as his voice asserts that this is his home and his life.',
        },
        {
          phrase: 'Will you wait for me downstairs for just a minute, honey?',
          note: 'Angel chooses Leland’s feelings over Guy’s dignity. The endearment “honey” and the soothing “just a minute” show her managing a man she needs, and the audience sees how far she will go for security.',
        },
      ],
      question: 'How does Cleage make this such a tense and revealing moment in the play?',
    },
    {
      title: 'Angel tells Leland the truth',
      where: 'Act 2, Scene 4',
      pointer:
        'In Guy’s apartment, from Angel’s outburst beginning “Listen to me, Alabama” to Leland grabbing her arms and turning her towards him roughly.',
      summary:
        'Leland has arrived with the rocking chair he made, and Angel has told him she lost the baby and is going to Paris. When Leland, thinking of the two sons he has now lost, asks whether she holds it against him, she explodes: this is not about him or the dead mothers and babies of the past, and she is leaving him, Harlem and all its ghosts. She says she wants no babies at all. He accuses her of lying, and she throws back that lies are all he ever wanted from her. He seizes her and demands that she look at him, and she tells him the truth.',
      annotations: [
        {
          phrase: 'Listen to me, Alabama.',
          note: 'Angel has used his home state as a teasing nickname since their first date; here it sounds like a dismissal, reducing him to the South she fled. The imperative takes control of a conversation he has dominated.',
        },
        {
          phrase: 'I’m not that kind of colored woman!',
          note: 'Angel rejects the role of the self-sacrificing mother that Leland and his religion expect. The exclamation shows her claiming an identity of her own, however selfish it looks.',
        },
        {
          phrase: 'all those crying colored ghosts',
          note: 'Alliteration and personification turn the history of Black suffering into voices that will not let her live. Angel wants to escape the past itself, which is what Guy and Leland have each tried to do in different ways.',
        },
        {
          phrase: 'Pretend I’m Anna. Pretend I love you.',
          note: 'Naming Leland’s dead wife is Angel’s cruellest and most honest act; the repeated imperative exposes their relationship as a performance on both sides.',
        },
      ],
      question:
        'Explore the ways in which Cleage makes this such a dramatic and disturbing moment in the play.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Vernacular speech and the rhythms of Black American English',
      example:
        'Guy’s “For prospects, you gotta look past 125th Street” and Angel’s “hitch my star to somebody a little closer to home”.',
      effect:
        'Cleage writes in the relaxed, witty idiom of 1930s Harlem, with contractions, slang and street names. It makes the characters sound real and rooted in a real place, and when they shift into more formal language, as Delia does in her speech to the church, the audience notices the performance.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'Sam warns Angel that ending the pregnancy will kill Leland; Angel calls Guy a dreamer who will never change.',
      effect:
        'The audience learns to hear the characters’ confident predictions with dread. Guy’s dream does come true, and the person killed by Angel’s decision is not Leland but Sam, so the irony sharpens the tragedy.',
    },
    {
      technique: 'Repetition and tricolon',
      example: 'Guy’s “walk where I please, wearing what I please, whenever I please”.',
      effect:
        'The three-part pattern, each clause ending on the same word, gives Guy’s defiance the rhythm of a manifesto. Cleage uses repetition for emphasis at key moments, as in Angel’s double “Pretend” in Act 2, Scene 4.',
    },
    {
      technique: 'Lyrical imagery',
      example:
        'Leland’s memory of “that Alabama sky where the stars are so thick it’s bright as day”, with stars “twinkling at me like a promise”.',
      effect:
        'In a play of quick-fire banter, Leland’s proposal slows into poetry. The image of light and plenty shows his tenderness and his longing for home, and the simile of the promise is poignant because he cannot keep his.',
    },
    {
      technique: 'Wit, sarcasm and comic deflation',
      example:
        'Guy on the Reverend Powell: “That Negro ought to quit preaching and go on into full-time show business.” Angel on Josephine: “The myth of the magical Josephine.”',
      effect:
        'Humour is how these characters survive. Guy’s jokes puncture pomposity; Angel’s sarcasm protects her from disappointment. The comedy of Act 1 makes the audience love the group, so its destruction in Act 2 hurts more.',
    },
    {
      technique: 'Symbolic objects and motifs',
      example:
        'Josephine Baker’s picture on the wall, the champagne, the dresses (Delia’s new dress, Leland’s modest gift), the rocking chair, and the gun Angel notices in Act 2, Scene 1.',
      effect:
        'Objects carry the characters’ hopes and threats. The picture and the champagne mean Paris; the dresses show who each woman is expected to be; the rocking chair is Leland’s dream of family; and the gun, seen before it is fired, builds foreboding.',
    },
    {
      technique: 'Stage directions and the pause',
      example:
        'The frequent “(A beat.)”, and the final direction in which Angel sits at the open window, not in panic or remorse but thinking, “figuring out what is, and what is next”.',
      effect:
        'Cleage’s directions tell actors where silence speaks. The pauses let an audience read what the characters will not say, and the final direction insists that Angel is calm and thinking, not collapsing, which shapes how we judge her.',
    },
  ],

  structureForm: [
    {
      heading: 'Two acts, ten scenes, a few weeks',
      body: 'The play has two acts of five scenes each. Act 1 moves day by day across less than a fortnight (early on a Sunday morning, that Sunday afternoon, Wednesday, the following Sunday evening, Friday), so time feels full of possibility. Act 2 jumps in larger steps (two weeks later, two weeks later, the next day, the next day, two weeks later), and the pace quickens towards catastrophe: the proposal, then the fire and the invitation, then the abortion and the shooting, fall on three consecutive days. The shift in rhythm mirrors the shift from comedy to tragedy.',
    },
    {
      heading: 'A realist setting: two apartments and a street',
      body: 'The action takes place in Guy’s apartment, in Delia’s apartment across the hall, and on the street or stoop outside the building. This naturalistic set makes Harlem feel close and crowded: characters overhear, drop in and watch from windows, and the private and the public keep colliding. The window is especially important, because it is where Angel first flirts with Leland and where she sits at the end.',
    },
    {
      heading: 'Parallel stories',
      body: 'Three stories run side by side: Guy’s pursuit of Paris, Delia’s fight for the clinic, and Angel’s search for security. Cleage pairs the couples too. Delia and Sam grow together through honest argument; Angel and Leland are drawn together by need and fantasy. Both romances are destroyed by the same bullet.',
    },
    {
      heading: 'Foreshadowing and a circular ending',
      body: 'The shooting does not come from nowhere. Leland’s rigid faith, his knowledge of the men who threaten Guy, and the gun Angel sees in Act 2, Scene 1 all prepare for it, so the audience feels dread as well as shock. The ending returns to Act 1, Scene 2: the final stage direction sits Angel at the open window in a moment it calls “clearly reminiscent” of the afternoon she first saw Leland. The 2022 Nick Hern Books edition completes the echo, sending a well-dressed stranger past the window and giving Angel the words she first spoke to Leland; the 1999 American editions end with her drinking alone. This circular structure suggests she is trapped in a pattern, but it can also be read as endurance.',
    },
    {
      heading: 'Historical drama and melodrama',
      body: 'The play mixes invented characters with real, offstage ones, which is a technique of historical fiction. The Financial Times reviewer of the 2022 revival heard a hint of Tennessee Williams in the play; his A Streetcar Named Desire is another play about a fading Southern-born beauty who depends on the kindness of men. The violent climax has the heightened feeling of melodrama. But Cleage, who spoke of creating “a character that doesn’t triumph”, refuses the neat moral ending of melodrama: no one is simply punished or rewarded.',
    },
    {
      heading: 'The title and the blues',
      body: 'The blues is a musical form born among Black Southerners, built on repetition and on turning pain into song. The play has the shape of a blues: the same troubles come round again, and suffering is voiced with humour and style. The title joins the music of Harlem to Leland’s Alabama sky, the South the characters left and cannot escape.',
    },
  ],

  vocabulary: [
    {
      term: 'Harlem Renaissance',
      definition:
        'The flowering of Black American literature, music and art centred on Harlem in the 1920s; by 1930, when the play is set, it was fading.',
    },
    {
      term: 'Great Depression',
      definition:
        'The economic collapse that followed the Wall Street Crash of 1929, bringing mass unemployment and poverty through the 1930s.',
    },
    {
      term: 'Great Migration',
      definition:
        'The movement of Black Americans from the segregated rural South to Northern cities in the early twentieth century, which made Harlem a centre of Black life.',
    },
    {
      term: 'Jim Crow',
      definition:
        'The laws and customs that enforced racial segregation and discrimination in the American South.',
    },
    {
      term: 'Prohibition',
      definition:
        'The national ban on making and selling alcohol in the United States from 1920 to 1933; illegally made or sold drink was called bootleg liquor.',
    },
    {
      term: 'Cotton Club',
      definition:
        'A famous Harlem nightclub where Black performers entertained white-only audiences; Angel and Guy both work there until the first scene.',
    },
    {
      term: 'family planning',
      definition:
        'Deciding whether and when to have children, especially through contraception; Delia’s clinic would offer advice on it.',
    },
    {
      term: 'Garveyites',
      definition:
        'Followers of Marcus Garvey, a Black nationalist leader who preached racial pride and self-reliance; some opposed white-led birth control.',
    },
    {
      term: 'deacon board',
      definition:
        'The group of lay leaders who help run a Baptist church; Delia must win its support for her clinic.',
    },
    {
      term: 'cable',
      definition:
        'A telegram sent by undersea cable, the fastest way to send a message from Paris to New York in 1930; Josephine Baker’s cables drive Guy’s plot.',
    },
    {
      term: 'brownstone',
      definition:
        'A New York terraced town house faced with brown sandstone; Sam offers his parents’ brownstone as a new home for the clinic.',
    },
    {
      term: 'abomination',
      definition:
        'Something hateful and wicked, a word from the Bible; Leland uses it to condemn homosexuality.',
    },
    {
      term: 'the blues',
      definition:
        'A musical form created by Black Southerners, built on repetition and on expressing sorrow; also a word for sadness.',
    },
    {
      term: 'dramatic irony',
      definition:
        'When the audience understands the significance of words or events better than the characters do.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 2, Scene 4, from Leland’s arrival with the rocking chair to his exit. Explore the ways in which Cleage makes this such a dramatic and disturbing moment in the play.',
        skill: 'Close analysis of a printed passage, in the context of the whole play',
        guidance: [
          'Open with the situation: Angel has just returned from ending her pregnancy, and the audience knows what Leland does not, so every tender gesture is painful to watch.',
          'Analyse the rocking chair and Leland’s plans for a family as dramatic irony, and his grief for his wife and son as the reason his hopes are so fragile.',
          'Track the shift in Angel’s language, from the lie about a miscarriage to “Listen to me, Alabama” and “Pretend I’m Anna”: short imperatives, naming and rejection.',
          'Look at the stage directions for physical threat, such as Leland grabbing her arms, and at how the pace speeds up towards his exit.',
          'Connect back to the gun Angel noticed in Act 2, Scene 1 and to her taunt about a weak man who cannot finish what he started, so the violence feels both shocking and prepared.',
          'Give a personal response: is the audience’s sympathy with Angel, with Leland, or divided, and how does Cleage make it so?',
        ],
      },
      {
        question: 'To what extent does Cleage encourage you to sympathise with Angel?',
        skill: 'Whole-text essay on character and the writer’s methods',
        guidance: [
          'Set up both readings in your introduction: Angel as a selfish woman who uses the people who love her, and Angel as a victim of poverty, racism and men.',
          'Build sympathy from Act 1: the sacking, the lost home, the false audition, and the history in Savannah that Guy recalls in the last scene.',
          'Then weigh the harder evidence: she uses Leland for “A rent check that won’t bounce”, lies to him, and her choice leads to Sam’s death.',
          'Analyse key lines closely, such as “I’m tired of Negro dreams” and “This is my chance to live free, Doc”, for what they show about her fear and her hunger for freedom.',
          'Consider the ending: the final stage direction insists she is calm and thinking, not collapsing, and in the 2022 UK edition she greets a new stranger with “Hot enough for you?”, the words she first spoke to Leland. Is that resilience or a trap?',
          'Conclude with your own judgement, for example that Cleage makes us understand Angel without asking us to approve of her.',
        ],
      },
      {
        question: 'In what ways does Cleage make Guy’s dream of Paris so important to the play?',
        skill: 'Whole-text essay on theme and structure',
        guidance: [
          'Explain what Paris and Josephine Baker mean to Guy: artistic success, money, and freedom from American racism and homophobia.',
          'Show how Cleage keeps the dream in view through objects and speech: the picture on the wall, the champagne, the French phrases, the cables.',
          'Contrast Guy’s dream with Angel’s realism, using her mockery of him as a dreamer and his advice to look past 125th Street.',
          'Analyse the structural reversal in Act 2, Scene 3, when the dream comes true and triggers Angel’s decisions.',
          'End with the final scene: Guy leaves with Delia, and his speech about Harlem’s “red-hot minute” suggests that dreams both save and cost people.',
        ],
      },
      {
        question:
          'Read Act 1, Scene 3, from Delia suggesting Sam cut back on his nightlife to her angry reply about making babies. How does Cleage make this conversation between Sam and Delia so revealing?',
        skill: 'Close analysis of a printed passage',
        guidance: [
          'Say what the conversation reveals about each character: Sam’s humanity and humour, Delia’s idealism and hidden passion.',
          'Analyse the argument about the clinic, including “exhausted women and stone-broke men” and the Garveyites’ charge of genocide, and link it to the real history of Sanger’s Harlem clinic.',
          'Show how the teasing tone turns serious and then personal, and how the argument begins their romance.',
          'Link forward to the fire at the clinic and to Sam’s death, so the passage becomes darker in the light of the whole play.',
        ],
      },
      {
        question: 'To what extent does Cleage portray Leland Cunningham as a villain?',
        skill: 'Whole-text essay on character',
        guidance: [
          'Begin with first impressions: the stranger who helps Guy carry Angel home, polite, well dressed and religious.',
          'Analyse his grief and tenderness, especially his memory of the Alabama sky and his gifts of the dress and the rocking chair.',
          'Examine his prejudice: the abomination speech, his acquaintance with the young men who threaten Guy, and his disapproval of the clinic.',
          'Consider what he wants from Angel, using her accusation that he wanted her to pretend to be Anna.',
          'Weigh how far Cleage makes him a villain, and how far a man destroyed by grief and by rigid beliefs, and reach a clear judgement: his violence ends the play’s hopes, but the play has taught us where it came from.',
        ],
      },
    ],
    tips: [
      'Locate every quotation by act and scene, and say what is happening. For Paper 3 you have a clean copy, but time spent hunting for lines is time lost; for Paper 2 you need short quotations by heart.',
      'Keep the history working for your argument. A sentence on the Depression or on Margaret Sanger is only useful if it explains a character’s choice, such as why Angel sees marriage as survival.',
      'Do not treat Angel as simply good or bad. Strong answers show how Cleage makes the audience hold two judgements at once, and they use the ending to test those judgements.',
      'Write about the play as theatre: stage directions, pauses, the window, the objects on stage and the gunshot all matter as much as dialogue.',
      'Notice the shift in tone between the acts. Arguing that the comedy of Act 1 makes the tragedy of Act 2 more painful is a whole-text point that examiners reward.',
      'Use short, precise quotations and analyse single words, such as “still” in Leland’s abomination speech or “minute” in Guy’s red-hot minute.',
    ],
  },

  modelAnswer: {
    question: 'To what extent does Cleage encourage you to sympathise with Angel?',
    paragraph:
      'Cleage makes it hard to condemn Angel even at her most selfish, because she shows us how few choices a Black woman had in 1930. When Angel tells Leland “I’m tired of Negro dreams”, the phrase sounds cynical, but she speaks it on the night she returns from the false audition, where she was wanted as a mistress, not a singer. Her weariness has been earned. The word “Negro” widens her disappointment from one bad night to a whole people’s broken promises, and it explains why she turns from Guy’s Paris to Leland’s security: dreams, for her, have always cost more than they paid. Yet Cleage does not let sympathy become excuse. When Angel finally tells Leland “Pretend I’m Anna. Pretend I love you”, the repeated imperative is devastatingly honest, and it is honesty the audience has waited for; but it arrives only after she has lied to him and drawn Sam into her secret, and minutes later Sam is dead. So the play asks us to understand Angel’s hunger for freedom while seeing clearly who pays for it.',
    commentary: [
      'It answers the question of extent directly in the first sentence and keeps a balanced judgement throughout, ending with a clear, qualified view rather than choosing one side.',
      'Each quotation is short, precisely located in its dramatic moment, and followed by analysis of individual words and techniques: the weight of “Negro”, the repeated imperative “Pretend”.',
      'Context is used to explain a character’s choice (the few options for a Black woman in 1930) rather than bolted on as history.',
      'It shows whole-text knowledge by linking two scenes and using structure, the timing of Sam’s death, to judge Angel, which lifts it above a character sketch.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'Three o’clock in the morning',
      summary:
        'Guy and a stranger, Leland, help a drunken Angel home. She has been sacked from the Cotton Club for a scene with Nick, her gangster lover, who has married someone else. Delia wakes and comes over, Guy talks of Paris, and he admits to Delia that he was sacked too, for defending Angel, but asks her not to tell Angel.',
      setting: 'Guy’s apartment in Harlem, summer 1930',
      who: ['Angel Allen', 'Guy Jacobs', 'Leland Cunningham', 'Delia Patterson'],
      quote: 'Everybody in Harlem is singing the blues.',
      themes: ['The Depression and economic survival', 'Friendship and chosen family'],
      tension: 3,
      significance:
        'Everything Angel depended on has gone in one night, and the man who will change her life has already walked in and out.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Sunday: a new home and a face at the window',
      summary:
        'Angel, hungover, moves in with Guy. Delia brings news of the Reverend Powell and her clinic; Sam drops in and cures Angel’s headache; Angel dances Delia round the room. Left alone, Angel sees Leland passing her window, flirts with him and arranges a stroll with him for the next Sunday evening.',
      setting: 'Guy’s apartment, Sunday afternoon',
      who: ['Angel Allen', 'Guy Jacobs', 'Delia Patterson', 'Sam Thomas', 'Leland Cunningham'],
      quote: 'Hot enough for you?',
      themes: ['Friendship and chosen family', 'Women’s choices and reproductive rights'],
      tension: 2,
      significance:
        'The friends are at their happiest, and the window meeting sets up the image the play will end on (and, in the 2022 edition, its last words).',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Wednesday: dreams and a dress',
      summary:
        'Angel has found no work. Guy brings news of an audition Nick has arranged with a friend, urges her to look beyond Harlem, and they plan to go to Langston Hughes’s homecoming party. Angel borrows Delia’s new dress and calls Guy a dreamer. Sam helps Delia rehearse her speech to the church and warns her about the opposition.',
      setting: 'Guy’s apartment and Delia’s apartment across the hall, Wednesday',
      who: ['Angel Allen', 'Guy Jacobs', 'Delia Patterson', 'Sam Thomas'],
      quote: 'For prospects, you gotta look past 125th Street.',
      themes: ['Dreams and reality', 'Women’s choices and reproductive rights'],
      tension: 2,
      significance:
        'The two philosophies of the play, Guy’s dreaming and Angel’s realism, are set out side by side, along with the clinic debate.',
    },
    {
      where: 'Act 1, Scene 4',
      title: 'Sunday: the church says yes, and a kiss',
      summary:
        'Delia and Sam return in triumph: the church will support the clinic. Leland arrives for his date, and the others go out to the theatre. Alone with Angel, Leland tells her his wife died in childbirth and the baby too, and that Angel looks like her. Angel, who admits she does not go to church, kisses him.',
      setting: 'Guy’s apartment, Sunday evening',
      who: ['Angel Allen', 'Leland Cunningham', 'Guy Jacobs', 'Delia Patterson', 'Sam Thomas'],
      quote: 'You look a lot like somebody I used to know back home.',
      themes: ['Harlem, the South and escape', 'Women’s choices and reproductive rights'],
      tension: 2,
      significance:
        'Leland’s grief explains what he wants from Angel: a replacement for the wife he lost.',
    },
    {
      where: 'Act 1, Scene 5',
      title: 'Friday: a cable and a false audition',
      summary:
        'Guy pins a silk costume on Delia; the clinic’s landlord wants to cancel the lease after anonymous calls and letters. A cable from Paris says Guy’s sketches are loved; now he must send Josephine finished costumes. Angel returns from her audition: it was a proposition, not a job. Leland, bringing her a dress as a gift, declares his love and promises to take care of her.',
      setting: 'Guy’s apartment and the stoop, Friday evening',
      who: ['Guy Jacobs', 'Delia Patterson', 'Leland Cunningham', 'Angel Allen'],
      quote: 'I’m tired of Negro dreams. All they ever do is break your heart.',
      themes: ['Dreams and reality', 'The Depression and economic survival'],
      tension: 3,
      significance:
        'Angel gives up on dreams and turns to Leland for security, the choice that drives Act 2.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Two weeks later: the tea party',
      summary:
        'Guy comes home from a confrontation with young men near the store. At his tea party, a story about men flirting provokes Leland to call it an abomination, and Guy throws him out. Angel defends her plan to marry for money; Sam and Delia kiss for the first time; outside, Angel sees that Leland carries a gun.',
      setting: 'Guy’s apartment, Delia’s apartment and the street, Sunday afternoon',
      who: ['Guy Jacobs', 'Angel Allen', 'Leland Cunningham', 'Sam Thomas', 'Delia Patterson'],
      quote: 'in Alabama, there’s still such a thing as abomination!',
      themes: ['Sexuality, prejudice and violence', 'The Depression and economic survival'],
      tension: 4,
      significance:
        'The group cracks open, and the gun that will be fired in Act 2, Scene 4 appears for the first time.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Two weeks later: the proposal',
      summary:
        'Angel is pregnant, and there is an eviction notice on the door. Guy, sure that Josephine will send for him, will not panic, and they quarrel. Leland, who has stayed away for two weeks, returns, describes the starry night he first saw her, and asks her to marry him. She accepts and tells him about the baby.',
      setting: 'The stoop and Guy’s apartment',
      who: ['Angel Allen', 'Sam Thomas', 'Guy Jacobs', 'Leland Cunningham'],
      quote: 'that Alabama sky where the stars are so thick it’s bright as day',
      themes: ['Harlem, the South and escape', 'The Depression and economic survival'],
      tension: 3,
      significance:
        'The title image arrives in a proposal built on need on one side and fantasy on the other.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The next day: fire, and a ticket to Paris',
      summary:
        'The clinic has been set on fire, and Sam offers his parents’ brownstone instead. Guy arrives with an invitation from Josephine Baker and passage to Paris, and a ticket for Angel. Angel, engaged and pregnant, decides to go; she tells Sam she does not want the baby, and he reluctantly agrees to help her.',
      setting: 'Delia’s apartment and Guy’s apartment',
      who: ['Delia Patterson', 'Sam Thomas', 'Guy Jacobs', 'Angel Allen'],
      quote: 'This is my chance to live free, Doc, and I’m taking it.',
      themes: ['Dreams and reality', 'Women’s choices and reproductive rights'],
      tension: 4,
      significance:
        'Guy’s dream comes true and gives Angel a way out, which sets the tragedy in motion.',
    },
    {
      where: 'Act 2, Scene 4',
      title: 'The next day: the rocking chair and the gunshot',
      summary:
        'Angel returns after the abortion. Leland arrives with a rocking chair he has made and a ring. She tells him she miscarried and is going to Paris; when he asks whether she blames him for the sons he has lost, she turns on him, and then tells him the truth. He guesses that Sam helped her, leaves, and shoots Sam in the back outside.',
      setting: 'Guy’s apartment and the street outside',
      who: ['Angel Allen', 'Guy Jacobs', 'Leland Cunningham', 'Sam Thomas'],
      quote: 'Pretend I’m Anna. Pretend I love you.',
      themes: ['Women’s choices and reproductive rights', 'Sexuality, prejudice and violence'],
      tension: 5,
      significance:
        'The climax: Angel’s honesty and Leland’s rage destroy the one man who helped everybody.',
    },
    {
      where: 'Act 2, Scene 5',
      title: 'Two weeks later: departures',
      summary:
        'The papers have turned Sam’s death into a scandal, and Angel has vanished. Guy, packed for Paris, has paid the rent ahead in case she returns, remembers their youth in Savannah and invites Delia in Angel’s place. Angel slips back; she and Delia part with barely a word. Alone, Angel sits calmly at the open window, working out what comes next; in the 2022 edition a well-dressed stranger passes.',
      setting: 'Guy’s apartment, two weeks later',
      who: ['Guy Jacobs', 'Delia Patterson', 'Angel Allen'],
      quote: 'for a red-hot minute, we did',
      themes: [
        'Friendship and chosen family',
        'Dreams and reality',
        'Harlem, the South and escape',
      ],
      tension: 3,
      significance:
        'The family has broken up; the circular ending leaves Angel exactly where she began, and the audience to judge her.',
    },
  ],

  relationships: [
    {
      from: 'Angel Allen',
      to: 'Guy Jacobs',
      kind: 'oldest friends, chosen family',
      note: 'Together since their youth in Savannah, they live like brother and sister. Guy supports and forgives her; her choices strain the bond until she disappears, yet he still pays her rent before he sails.',
    },
    {
      from: 'Angel Allen',
      to: 'Leland Cunningham',
      kind: 'lovers, then engaged',
      note: 'She wants security and he wants his dead wife back. Both are pretending, and when Angel ends the pretence the relationship ends in violence.',
    },
    {
      from: 'Delia Patterson',
      to: 'Sam Thomas',
      kind: 'colleagues, then lovers',
      note: 'Their romance grows from honest argument about the clinic, a mirror image of Angel and Leland, and is cut short by Sam’s murder.',
    },
    {
      from: 'Guy Jacobs',
      to: 'Leland Cunningham',
      kind: 'enemies',
      note: 'Leland’s religious homophobia collides with Guy’s refusal to hide; Guy throws him out of his home in Act 2, Scene 1.',
    },
    {
      from: 'Angel Allen',
      to: 'Delia Patterson',
      kind: 'neighbours and opposites',
      note: 'The reckless singer and the careful social worker learn from each other, but after Sam’s death they part with barely a word.',
    },
    {
      from: 'Sam Thomas',
      to: 'Angel Allen',
      kind: 'doctor and friend',
      note: 'He has helped her before and helps her again, reluctantly, and he pays for it with his life.',
    },
    {
      from: 'Leland Cunningham',
      to: 'Sam Thomas',
      kind: 'killer and victim',
      note: 'Leland first sees Sam as a respectable man he can talk to; when he learns what Sam has done, he shoots him in the back.',
    },
    {
      from: 'Guy Jacobs',
      to: 'Delia Patterson',
      kind: 'neighbours and confidants',
      note: 'Guy trusts Delia with his secrets from the first scene, and in the last he takes her to Paris in Angel’s place.',
    },
    {
      from: 'Guy Jacobs',
      to: 'Josephine Baker',
      kind: 'dreamer and idol',
      note: 'Her picture watches over his work, and her invitation at last turns his dream into a ticket.',
    },
    {
      from: 'Angel Allen',
      to: 'Nick',
      kind: 'former lovers',
      note: 'Her dependence on a gangster’s money explains her fear of poverty and her search for another man to rely on.',
    },
  ],

  compareWith: [
    {
      title: 'A Taste of Honey',
      href: '/revision/texts/a-taste-of-honey',
      reason:
        'Another drama set text on the same Cambridge papers, in which a pregnancy, a gay best friend and a mother who depends on men raise the same questions about women’s choices and chosen family.',
    },
    {
      title: 'Princess & the Hustler',
      href: '/revision/texts/princess-and-the-hustler',
      reason:
        'Another modern drama on the 2027 Cambridge list, where a Black family’s private dreams play out against real history kept offstage, as the Harlem Renaissance and Josephine Baker are here.',
    },
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        'A Cambridge drama text for 2026: the Financial Times reviewer of the 2022 revival heard a hint of Tennessee Williams in Cleage’s play, and Blanche, like Angel, is a fading beauty who survives by depending on men.',
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'A Cambridge prose set text set in 1930s Alabama, showing the Jim Crow South that Guy and Angel escaped and that Leland remembers so fondly.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'intimate_relationships',
    'addiction',
    'discrimination',
    'mythological_religious',
  ],

  quotesFromElsewhere: ['a child of the Black Arts Movement', 'a character that doesn’t triumph'],

  sources: [
    {
      label:
        'Internet Archive full-text search of the Dramatists Play Service acting edition (1999), used to confirm every quotation and its speaker',
      url: 'https://archive.org/details/bluesforalabamas0000clea',
    },
    {
      label:
        'Internet Archive full-text search of Flyin’ West and Other Plays (Theatre Communications Group, 1999), two scanned copies',
      url: 'https://archive.org/details/flyinwestotherpl0000clea',
    },
    {
      label:
        'LitCharts, Blues for an Alabama Sky quotations with the surrounding dialogue, including the final stage direction and last line of the 2022 edition (p. 104)',
      url: 'https://www.litcharts.com/lit/blues-for-an-alabama-sky/quotes',
    },
    {
      label:
        'National Theatre, Blues for an Alabama Sky Learning Guide (2025): scene-by-scene synopsis and context',
      url: 'https://images.nationaltheatre.org.uk/uploads/2025/09/Blues-for-an-Alabama-Sky_Learning-Guide_National-Theatre.pdf',
    },
    {
      label:
        'Gale, Drama for Students: Blues for an Alabama Sky (plot, characters, critical essays by Liz Brent, Joyce Hart and Laura Kryhoski; Cleage quotations from her introduction and the Chicago Sun-Times interview)',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/blues-alabama-sky',
    },
    {
      label: 'Save My Exams, Blues for an Alabama Sky scene-by-scene plot summary (CIE IGCSE)',
      url: 'https://www.savemyexams.com/igcse/english-literature/cie/21/revision-notes/2-drama-closed-book/blues-for-an-alabama-sky/blues-for-an-alabama-sky-plot-summary/',
    },
    {
      label: 'The Black Drama School, on the character ages in Cleage’s cast list',
      url: 'https://www.theblackdramaschool.org/thecoloredcritic/bluesforanalabamasky',
    },
    {
      label:
        'Nick Hern Books, Blues for an Alabama Sky (2022): publication, NT revival, set-text status and the Financial Times review of the revival',
      url: 'https://www.nickhernbooks.co.uk/blues-for-an-alabama-sky',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027: Papers 2 and 3 set texts and format',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label: 'Cambridge IGCSE Literature in English 0475 syllabus for 2026',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label: 'Wikipedia, Pearl Cleage: birth, family, education, Alliance Theatre premieres',
      url: 'https://en.wikipedia.org/wiki/Pearl_Cleage',
    },
    {
      label:
        'Margaret Sanger Papers Project (NYU), Margaret Sanger and the Harlem Branch Birth Control Clinic',
      url: 'https://sanger.hosting.nyu.edu/articles/harlem/',
    },
    {
      label:
        'Wikipedia, Adam Clayton Powell Jr.: born 1908, pastor of Abyssinian Baptist from 1937, elected to Congress 1944',
      url: 'https://en.wikipedia.org/wiki/Adam_Clayton_Powell_Jr.',
    },
    {
      label:
        'Wikipedia, Sodomy laws in the United States: a felony in every state before 1962, when Illinois became the first to repeal',
      url: 'https://en.wikipedia.org/wiki/Sodomy_laws_in_the_United_States',
    },
  ],
}
