import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A Streetcar Named Desire, Tennessee Williams (first performed on Broadway on
 * 3 December 1947, directed by Elia Kazan; published 1947). A supplement: the
 * page at /revision/texts/a-streetcar-named-desire keeps its overview,
 * context, themes, characters and key quotations, and this file adds what it
 * lacked (passages for close reading, language analysis, structure and form,
 * vocabulary, exam practice and a model paragraph) together with the timeline
 * and character map the visuals draw.
 *
 * HOW THE QUOTATIONS WERE CHECKED. Every quotation here was found verbatim in
 * the Internet Archive's full-text index, searched item by item, in two UK
 * editions: the Methuen Drama Student Edition (2009, with commentary and notes;
 * streetcarnamedde0000will_p2e3) and Penguin's A Streetcar Named Desire and
 * Other Plays (2000; streetcarnamedde0000will_w6f3). Each hit returns the
 * speaker label and the words either side, which fixed who speaks; scenes were
 * fixed from the running heads and the Methuen notes' page references. Most
 * lines were also found in two American printings (New Directions 1980,
 * streetcarnamedde00will_0; New American Library 1947, streetcarnamedde00will).
 *
 * THE EDITIONS DIFFER, and this matters for students who learn quotations from
 * websites. The UK editions split Blanche's Scene 9 line: she says "I don't want
 * realism.", Mitch answers, and she then says "I'll tell you what I want.
 * Magic!" The American editions print "I don't want realism. I want magic!" as
 * one speech. The UK editions do not contain the Scene 2 line "a woman's charm
 * is fifty per cent illusion", which the American ones do, and they word
 * Blanche's "soft people" speech in Scene 5 and her memory of the dance floor in
 * Scene 6 differently. Only words both UK editions print are quoted here.
 *
 * THE PAGE ABOVE THIS SUPPLEMENT. Checked against the same editions, it carries
 * errors that are not repeated here: "Deliberate cruelty is not forgivable" is
 * said to Stanley in Scene 10, not to Mitch in Scene 11 (Blanche is describing
 * a visit from Mitch that never happened); "The Kowalskis and the DuBois have
 * different notions" is Stanley's, in Scene 2, not Stella's in Scene 4; Mitch
 * says "You're not clean enough", not "You are not clean enough", and the
 * page's "You're not clean enough - I don't want to marry you any more" joins
 * two separate lines in the wrong order; its Scene 1 quotation drops "then"
 * from "and then transfer to one called Cemeteries" without an ellipsis; the
 * song Blanche sings in Scene 7 has music by Harold Arlen and words by Yip
 * Harburg and Billy Rose; Mitch's cigarette case is shown in Scene 3, at the
 * start of the courtship, not at its climax; and the 1951 film did not cut a
 * punishment of Stanley but added one, ending with Stella resolving to leave
 * him.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to and summarised. The song in Scene 7 is described, never
 * quoted.
 */
export const guide: StudyGuide = {
  slug: 'a-streetcar-named-desire',
  title: 'A Streetcar Named Desire',
  author: 'Tennessee Williams',
  form: 'play',
  scope:
    'The whole play, in eleven scenes, studied for A level and International A level English Literature. Check with your teacher which paper and which kind of question it is set for on your board. Page numbers differ between editions, so this guide locates every moment by scene and by what is happening. Quotations follow the two UK editions most students use, the Penguin text and the Methuen Drama Student Edition, which agree on every line quoted here. American editions word a few lines differently, and where that matters this guide says so.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Tennessee Williams 1947; renewed 1975 by The University of the South. Quotations follow the Penguin text (A Streetcar Named Desire and Other Plays, Penguin, 2000) and the Methuen Drama Student Edition (Methuen Drama, 2009). Quoted for criticism and review.',
  },
  workLength: {
    words: 28000,
    basis:
      'Estimated, not counted: in the Methuen Drama Student Edition the play text runs from the first scene on about page 3 to the final curtain on about page 90 (the running heads returned by the full-text search put Scene 1 on page 11 and the closing stage directions on page 90), at roughly 300 words to a page of dialogue and stage directions. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  native: {
    overview: '/revision/texts/a-streetcar-named-desire',
    context: '/revision/texts/a-streetcar-named-desire',
    themes: '/revision/texts/a-streetcar-named-desire',
    characters: '/revision/texts/a-streetcar-named-desire',
    keyQuotes: '/revision/texts/a-streetcar-named-desire',
  },

  extracts: [
    {
      title: 'Blanche arrives at Elysian Fields',
      where: 'Scene 1, the opening',
      pointer:
        'From the opening stage direction, set on “an evening early in May”, to Blanche alone in the flat, just before Stella arrives, telling herself “I’ve got to keep hold of myself!”',
      summary:
        'The stage directions describe a poor but lively street in New Orleans at dusk, with piano music drifting from a bar round the corner. Blanche appears in white, carrying a valise, and checks a slip of paper against the building as if she cannot believe the address. She explains to Eunice, the upstairs neighbour, the route she was told to take. Eunice lets her into the two rooms, and once she is alone Blanche finds the whisky, drinks half a tumbler, tidies away the evidence and tries to steady herself.',
      annotations: [
        {
          phrase: 'expresses the spirit of the life which goes on here',
          note: 'Williams tells us the blue piano is more than background: it is the voice of the neighbourhood, easy, mixed and alive. Blanche enters a world that already has its own music. The same piano returns at moments of loss and plays over the last stage direction of the play, so the life of the street outlasts her.',
        },
        {
          phrase: 'transfer to one called Cemeteries',
          note: 'These were real New Orleans streetcar routes, but Williams makes the journey an allegory. Desire leads to Cemeteries and then to Elysian Fields, the resting place of the blessed dead in Greek myth. Blanche’s first speech of any length maps the whole play, from longing to death to a kind of afterlife beyond the world.',
        },
        {
          phrase: 'Her delicate beauty must avoid a strong light.',
          note: 'A stage direction addressed to designer and actor as much as to the reader. It fixes the play’s central image in the first minutes: Blanche lives by concealment, and light will be her enemy. Every later scene of exposure, from the paper lantern to the bare bulb, fulfils this sentence.',
        },
        {
          phrase: 'suggests a moth',
          note: 'The comparison works on several levels: moths are pale, fragile and nocturnal, and they are drawn to the very light that burns them. On one reading, Blanche is drawn to Stanley’s world and destroyed by it. The image is sympathetic, which tells us something about how Williams wants her seen before she has said a word.',
        },
        {
          phrase: 'I’ve got to keep hold of myself!',
          note: 'Spoken faintly and to herself, so the audience overhears a private struggle before any other character knows of it. The exclamation shows how close she already is to breaking. Coming straight after the secret drink, it establishes the gap between the poised woman others meet and the frightened one we are shown.',
        },
      ],
      question:
        'Explore how Williams presents Blanche’s arrival in Scene 1, and how far the opening prepares the audience for her fate in the play as a whole.',
    },
    {
      title: 'Mitch and the light',
      where: 'Scene 9',
      pointer:
        'From Mitch’s arrival, unshaven and in his work clothes, while Blanche sits drinking with the polka in her head, to his exit when she screams “Fire! Fire! Fire!” from the window.',
      summary:
        'Mitch has heard Stanley’s account of Blanche’s past. He says he has never seen her in the light, and she defends illusion as kinder than realism, but he tears the paper lantern off the bulb and switches the light on to look at her. Blanche admits that after her husband’s death she sought comfort with strangers, and insists she never lied in her heart. A blind street seller calling out flowers for the dead brings back the deaths she nursed at Belle Reve. Mitch grabs at her, says he no longer wants to marry her, and flees when she screams at the window.',
      annotations: [
        {
          phrase: 'I don’t think I ever seen you in the light.',
          note: 'Mitch’s non-standard grammar marks him as a working man, and the demand behind the line echoes Stanley’s: he wants facts, not charm. Light has meant exposure since Scene 1, so the audience knows what is coming. Mitch is about to do deliberately what Blanche has spent the whole summer preventing.',
        },
        {
          phrase: 'I’ll tell you what I want. Magic!',
          note: 'In the UK editions Blanche first says she does not want realism, Mitch mutters that he guesses not, and only then does she name what she wants. The pause makes the word Magic a deliberate reply rather than a reflex. Many websites print the American wording as one speech, so quote the edition you have.',
        },
        {
          phrase: 'I tell what ought to be truth.',
          note: 'A paradox that Blanche presents as a principle: her lies are a gift, making life what it should be. One reading hears self-deception; another hears Williams defending his own art, since a play is also an invention that tells truths. The strongest answers weigh both and ask what the play shows her lies costing.',
        },
        {
          phrase: 'Flores para los muertos',
          note: 'Spanish for flowers for the dead. The street seller is realistic enough, but she seems to answer Blanche’s thoughts, and her call pulls death into the scene at the moment Blanche confesses. Blanche replies that the opposite of death is desire, which connects the call to the streetcar route of Scene 1.',
        },
        {
          phrase: 'You’re not clean enough to bring in the house with my mother.',
          note: 'Mitch judges Blanche by a sexual double standard: moments earlier he wanted her body, but now he will not marry her. The word clean is cruelly ironic for a woman who bathes obsessively, and invoking his mother shows how far his morality is borrowed from convention rather than felt.',
        },
      ],
      question:
        'Explore how Williams presents the conflict between illusion and truth in Scene 9, and in the play as a whole.',
    },
    {
      title: 'The ending',
      where: 'Scene 11',
      pointer:
        'From the doctor’s ring at the door, when Blanche expects Shep Huntleigh, to the last line of the play, “This game is seven-card stud.”',
      summary:
        'Some weeks after Scene 10, the men are playing poker again while Stella and Eunice pack Blanche’s things. Blanche, dressed for a journey she believes is with an old admirer, comes out to find a doctor and a matron from a state institution. She retreats, and Stanley tears the paper lantern off the bulb and holds it out to her. In the struggle that follows Mitch attacks Stanley and the matron pins Blanche’s arms. The doctor removes his hat and speaks gently, and Blanche leaves on his arm. Stella weeps, Stanley comforts her, and the game resumes.',
      annotations: [
        {
          phrase: 'You want the lantern?',
          note: 'Stanley repeats Mitch’s act from Scene 9, now in front of everyone, and the stage direction says she cries out as if the lantern were herself. The gesture is gratuitous: Blanche is already leaving. It is the play’s clearest picture of cruelty for its own sake, the very thing Blanche said in Scene 10 she could never forgive.',
        },
        {
          phrase: 'Jacket, Doctor?',
          note: 'The matron means a straitjacket, and her flat, clipped question shows an institution that sees a patient, not a person. The doctor replies that it will not be used unless necessary, then removes his hat and becomes, in Williams’s direction, a person. The shift from force to courtesy is what allows Blanche to go quietly.',
        },
        {
          phrase: 'Whoever you are—I have always depended on the kindness of strangers.',
          note: 'Blanche speaks to her captor as if he were a gentleman caller, and the dash before the main clause shows her choosing not to know who he is. The line is dignified and devastating: her life has depended on strangers, from Laurel to this moment, and the strangers have rarely been kind. Her manners survive when almost nothing else does.',
        },
        {
          phrase: 'She sobs with inhuman abandon.',
          note: 'Williams’s stage direction gives Stella’s grief to the body rather than to words. The word inhuman echoes the jungle voices of Scene 10, and the next sentence calls her crying luxurious, so her sorrow is mixed with release. Stanley’s comfort turns sensual at once, which some audiences find the most disturbing moment in the play.',
        },
        {
          phrase: 'This game is seven-card stud.',
          note: 'The last line is Steve’s, and it is about cards. The poker game that began in Scene 3 simply carries on, so the male world of the flat closes over what has happened. The flatness is the point: life goes on, as Eunice told Stella it must, and the audience is left holding the cost.',
        },
      ],
      question:
        '‘The ending of A Streetcar Named Desire offers no comfort to the audience.’ How far do you agree? Refer closely to Scene 11 and to the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Symbolic place names',
      example:
        'Blanche’s directions in Scene 1: take the streetcar named Desire, then “transfer to one called Cemeteries” and get off at Elysian Fields. The lost plantation is Belle Reve, and Blanche tells Mitch in Scene 3 that her own name means “white woods”.',
      effect:
        'Williams uses real New Orleans names and turns them into allegory. Desire leads to death and then to Elysian Fields, the paradise of the blessed dead in Greek myth, so the route is a map of Blanche’s whole story. Belle Reve, a beautiful dream in the playwright’s French, is lost before the play begins, and Blanche’s own name ties her to whiteness and purity, which the play then tests. Naming lets a realistic setting carry symbolic weight without anyone having to explain it.',
    },
    {
      technique: 'Animal imagery',
      example:
        'The long stage direction that introduces Stanley in Scene 1 compares him to a “richly feathered male bird among hens”. Blanche tells Stella that “He acts like an animal, has an animal’s habits!” (Scene 4). In Scene 10 Stanley turns the image on her: “Tiger—tiger!”',
      effect:
        'The imagery belongs to different speakers and means different things. Williams’s own stage direction is half admiring: Stanley is vivid, proud, full of life. Blanche’s version is contempt, and it shows her snobbery as much as his coarseness. When Stanley calls her a tiger in Scene 10, he recasts the woman who called him an animal as a wild thing to be subdued, and the audience sees how language prepares for violence. A strong answer asks whose animal imagery it is before deciding what it proves.',
    },
    {
      technique: 'Light and darkness',
      example:
        'In Scene 3 Blanche asks Mitch to cover the bulb because “I can’t stand a naked light bulb”. In Scene 6 she remembers that after her husband’s death “the searchlight which had been turned on the world was turned off again”.',
      effect:
        'Light runs through the play as a sign of truth, exposure and, for Blanche, love. She hides from electric light because it reveals her age and her past, and she associates her one real love with a searchlight that has gone out. So the same image carries her shame and her grief. When Mitch and then Stanley tear off the lantern, the stage picture makes an abstract theme visible, and the audience feels the cruelty of being made to look.',
    },
    {
      technique: 'Expressionist sound: the polka and the jungle voices',
      example:
        'The Varsouviana first rises “faint in the distance” when Stanley asks about her husband (Scene 1). At the start of Scene 9 the stage directions state that “The music is in her mind”, and in Scene 10 “inhuman jungle voices” rise as Stanley closes in.',
      effect:
        'The play is realistic in its setting, but Williams lets the audience hear what only Blanche hears. The polka was playing when her husband died, so it becomes the sound of her guilt, and a revolver shot in her memory is what stops it. The jungle voices of Scene 10 turn the flat into a nightmare. Sound shows her mind breaking from the inside, which is why writing about the play as heard as well as seen is one mark of a strong answer.',
    },
    {
      technique: 'Contrasting registers',
      example:
        'Blanche reaches for opera and scripture: Mitch arriving with roses is “My Rosenkavalier!” (Scene 5), and she says she has been “casting my pearls before swine” (Scene 10). Stanley speaks in the street idiom of “them coloured lights” (Scene 8) and borrows the language of law and politics, “we have the Napoleonic code” (Scene 2).',
      effect:
        'Blanche’s allusions are a costume: they place her above the people she depends on, and they irritate Stanley because they exclude him. Stanley’s grammar marks him as working class, but he is not inarticulate. He uses the vocabulary of the law in Scene 2 and a governor’s slogan in Scene 8 as weapons, and in Scene 8 he throws back at Stella the insults he has heard from her and her sister. The clash of voices is a class war fought in words.',
    },
    {
      technique: 'Colour symbolism',
      example:
        'The poker players of Scene 3 are “coarse and direct and powerful” as the primary colours. Blanche arrives in white, and by Scene 10 she wears a “soiled and crumpled” white satin evening gown. In Scene 11 she insists her jacket is “Della Robbia blue”.',
      effect:
        'Stanley’s world is painted in bold, simple colours; Blanche’s in white, the colour of her name and of the purity she performs. The soiled gown of Scene 10 shows the performance wearing thin. In Scene 11 she describes her blue as the colour of the Madonna’s robe in old paintings, so at her departure she dresses herself, in her own mind, as the Virgin. One reading finds that pitiful; another finds a last act of dignity.',
    },
    {
      technique: 'Stage directions as a narrating voice',
      example:
        'Blanche’s manner “suggests a moth” (Scene 1); Stanley carries the emblem of “the gaudy seed-bearer” (Scene 1); at the end Stella “sobs with inhuman abandon” (Scene 11).',
      effect:
        'Williams writes stage directions like a novelist, with judgement and imagery that no audience hears spoken. They guide actors and designers, and they tell a reader how to feel about each character. When you quote them, attribute them to Williams, not to a character, and say what they would do on stage: a direction that cannot be acted, such as the moth, still shapes how an actor plays the part.',
    },
    {
      technique: 'Antithesis: truth and lies',
      example:
        'Blanche says in Scene 9, “I tell what ought to be truth.” In Scene 10 Stanley answers her stories with “lies and conceit and tricks”.',
      effect:
        'The play sets two ideas of truth against each other. For Blanche, truth is what life should be; for Stanley, it is what the documents say. Williams does not simply side with either. Stanley is right about the facts and wrong about almost everything else, and Blanche’s fictions are both self-protection and a kind of art. Framing the conflict as an antithesis lets you argue about it rather than just describe it.',
    },
  ],

  structureForm: [
    {
      heading: 'Eleven scenes, not acts',
      body: 'The reading edition is divided into eleven scenes rather than acts, and each scene is a self-contained episode built towards a strong picture: Stanley and Stella coming together with “low, animal moans” near the end of Scene 3, Stanley grinning at Blanche over Stella’s head as the lights fade on Scene 4, Blanche’s scream of fire driving Mitch out at the end of Scene 9. The effect is closer to a sequence of film shots than to a conventional three-act play, and it lets Williams move the story forward in jumps of days and weeks. The acting edition published by Dramatists Play Service is catalogued as a play in three acts, so a production you see may break the eleven scenes with intervals in places the reading edition does not mark.',
    },
    {
      heading: 'A calendar of decline',
      body: 'The play begins on an evening early in May and Scene 7 is set in mid-September; Blanche tells Stanley in Scene 5 that her birthday is the fifteenth of September, and her birthday supper in Scene 8 is the night everything collapses. Scene 11 is set some weeks later. Across one hot summer, Stella’s pregnancy moves towards birth while Blanche moves towards breakdown, and the baby is born between Scenes 10 and 11. The two clocks run in opposite directions: new life for the Kowalskis, and the end of any life Blanche can recognise.',
    },
    {
      heading: 'Two poker nights: a circular structure',
      body: 'Scene 3 and Scene 11 are both poker nights, and the game is named in each: Steve deals “Seven card stud” in Scene 3, and his words in the last line of the play are “This game is seven-card stud.” The echo makes the ending circular. The men’s world was there before Blanche arrived and continues after she has gone, as if she had been a disturbance rather than a person. Eunice gives the same message in words: “Life has got to go on.” Whether that is comforting or chilling is one of the best questions to argue about the ending.',
    },
    {
      heading: 'Realism opened up: expressionist devices',
      body: 'The flat is a realistic set, with a kitchen, a bedroom, curtains instead of a door between them and a street outside. But Williams repeatedly breaks realism to show Blanche’s mind: the polka only she hears, the gunshot in her memory, the “lurid reflections” on the walls in Scenes 10 and 11, and in Scene 10 a back wall that becomes transparent so the street’s violence is seen through it. Jo Mielziner’s original design balanced the realistic and the expressionistic in this way. When you write about form, show how these devices put the audience inside Blanche’s head at the very moments the other characters stop believing her.',
    },
    {
      heading: 'Parallels and repetitions',
      body: 'Williams builds meaning by repeating actions. The paper lantern is torn off twice, by Mitch in Scene 9 and by Stanley in Scene 11. Steve and Eunice’s fight in Scene 5 mirrors Stanley striking Stella in Scene 3, and the quick reconciliation in each shows violence absorbed into ordinary married life. Scene 7 cross-cuts Blanche singing happily in the bath with Stanley telling Stella the story of her past, so the audience hears her illusion and its destruction at the same time. Blanche arrives in Scene 1 depending on the directions of strangers and leaves in Scene 11 on the arm of one.',
    },
    {
      heading: 'What is not shown',
      body: 'Several of the play’s decisive events happen offstage or are only told: the deaths at Belle Reve, the suicide of Blanche’s young husband, her life in Laurel, the birth of Stella’s baby. Most importantly, the rape in Scene 10 is not staged. The scene ends as Stanley carries Blanche to the bed and loud music from the Four Deuces covers the moment, and the play makes clear what has happened through Scene 11. Leaving it unseen does not soften it. The audience has seen enough to know what happened, while Stella, who saw nothing, chooses not to believe it, and one way to read the ending is through that gap between what we know and what she can afford to accept.',
    },
    {
      heading: 'Is it a tragedy?',
      body: 'Blanche has many features of a tragic protagonist: a fall from high estate at Belle Reve, a past error she cannot undo in her cruelty to her husband, and a destruction that seems inevitable from the streetcar route onwards. But she is also a liar, a snob and at times cruel herself, and she never reaches the full recognition of a classical hero; if anyone does, it is Stella, crying “What have I done to my sister?” in Scene 11. The more convincing reading is that Williams writes a modern tragedy in which the fall is social as well as personal: a world that punishes female desire and prefers not to know. Argue it either way, but define what you mean by tragedy first.',
    },
    {
      heading: 'The epigraph',
      body: 'The play opens with four lines from Hart Crane’s poem The Broken Tower, in which the speaker enters “the broken world” to follow the visionary company of love. Crane was an American poet who died in 1932. The epigraph frames Blanche’s story as a search for love in a world that has already broken, and it invites a sympathetic reading of her before a word of the play is spoken. It is worth one sentence in an essay on how Williams shapes our response to her.',
    },
  ],

  vocabulary: [
    {
      term: 'Belle Reve',
      definition:
        'The DuBois family plantation in Mississippi, lost before the play begins. The name is meant as French for beautiful dream, though strictly correct French would be beau rêve, and the lost estate stands for the Old South Blanche cannot let go of.',
    },
    {
      term: 'Elysian Fields',
      definition:
        'The street where the Kowalskis live, a real street in New Orleans. In Greek myth the Elysian Fields were the paradise where the blessed or heroic dead went after death, so the address makes Blanche’s arrival sound like the end of a journey.',
    },
    {
      term: 'Napoleonic code',
      definition:
        'Stanley’s name for Louisiana’s civil law, which descends from French and Spanish law rather than English common law. He cites it in Scene 2 to claim that what belongs to his wife belongs to him, so he wants proof of what happened to Belle Reve.',
    },
    {
      term: 'Varsouviana',
      definition:
        'A dance in three-four time, first conceived as a kind of mazurka and named after Warsaw; the play calls its tune a polka. It was playing when Blanche’s young husband died, and it sounds in her head whenever the past closes in.',
    },
    {
      term: 'Blue piano',
      definition:
        'The music Williams asks for from a bar round the corner, played by Black musicians. It expresses the life of the neighbourhood and returns at key moments, including the final stage direction.',
    },
    {
      term: 'Portières',
      definition:
        'Curtains hung across a doorway. In the Kowalskis’ flat they are all that separates the kitchen, where Blanche sleeps on a folding bed, from the couple’s bedroom. Blanche notices in Scene 1 that there is no door between the two rooms, and the lack of privacy shapes the whole play.',
    },
    {
      term: 'Huey Long',
      definition:
        'Governor of Louisiana from 1928 to 1932 and then a United States senator until he was shot in 1935. His slogan promised that every man would be a king; Stanley quotes it in Scene 8 to justify ruling his own house.',
    },
    {
      term: 'Rosenkavalier',
      definition:
        'From Der Rosenkavalier, a comic opera by Richard Strauss whose title means the knight of the rose. Blanche greets Mitch and his roses with it in Scene 5, casting a working man from the plant as a courtly suitor.',
    },
    {
      term: 'Della Robbia blue',
      definition:
        'A blue associated with the Della Robbia family of Renaissance Florence, famous for glazed terracotta sculpture. Blanche uses it of her jacket in Scene 11 and links it to the robe of the Madonna in old paintings.',
    },
    {
      term: 'Seven-card stud',
      definition:
        'A form of poker. Steve names it as he deals in Scene 3, and it is the last line of the play, which makes the ending circular.',
    },
    {
      term: 'Polack',
      definition:
        'An offensive slur for a Polish person. Blanche uses it of Stanley; in Scene 8 he insists that people from Poland are Poles and that he is fully American. The exchange shows her snobbery and his pride in belonging to post-war America.',
    },
    {
      term: 'Master Sergeant',
      definition:
        'A senior non-commissioned rank in the United States Army. Stella tells Blanche in Scene 1 that Stanley held it in the Engineers’ Corps during the war, and Stanley says in Scene 7 that he and Mitch served in the same outfit.',
    },
    {
      term: 'Straitjacket',
      definition:
        'A garment with long sleeves that tie behind the back, formerly used to restrain patients. The matron’s question in Scene 11 is about one.',
    },
    {
      term: 'Southern belle',
      definition:
        'A young woman of the planter class of the American South, raised to charm, be admired and marry well. Blanche plays the role long after the world that produced it has gone.',
    },
    {
      term: 'Expressionism',
      definition:
        'A style of theatre that shows a character’s inner state through distorted sound, light and setting rather than realism. Williams uses it for the polka, the jungle voices and the lurid reflections of Scenes 10 and 11.',
    },
    {
      term: 'Hamartia',
      definition:
        'In classical tragedy, the error or flaw that brings the hero down. For Blanche it is often identified as her dependence on illusion, or as her cruelty to her husband, which she has never forgiven herself for.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          '‘Blanche is as much the cause of her own destruction as Stanley is.’ How far do you agree with this view of A Streetcar Named Desire?',
        skill: 'Whole-play argument responding to a critical view',
        guidance: [
          'Take a position in the first sentence and keep it: for example, that Blanche’s choices make her vulnerable, but that Stanley, and a society that punishes women’s desire, turn vulnerability into destruction.',
          'Blanche’s part: her drinking, her lies and her contempt for Stanley in Scene 4 (“He acts like an animal, has an animal’s habits!”), which he overhears. Show how she makes an enemy of the man whose home she depends on.',
          'Her past as she tells it in Scene 6: her guilt over her husband’s death, which she herself sees as her fault. Discuss whether guilt is a cause or a wound.',
          'Stanley’s part: the investigation in Scene 7, the ticket in Scene 8, and Scene 10. Argue that exposure is one thing and deliberate cruelty another.',
          'The wider world: Mitch’s double standard in Scene 9, Stella’s choice in Scene 11 (“I couldn’t believe her story and go on living with Stanley.”) and Eunice’s “Life has got to go on.”',
          'Conclude with a weighed judgement, and name the view you find less convincing and why.',
        ],
      },
      {
        question:
          'Explore the ways in which Williams uses music, sound and lighting to present Blanche’s state of mind.',
        skill: 'Dramatic methods across the whole play',
        guidance: [
          'Open by saying why this matters: Williams writes for the stage, and some of his most important meanings are carried by what the audience hears and sees rather than what characters say.',
          'The Varsouviana: its first entry in Scene 1, its link to her husband’s death in Scene 6, its return in Scene 8 as Stanley hands her the ticket, and the opening of Scene 9, where the stage direction says the music is in her mind.',
          'The blue piano as the voice of the neighbourhood, and how it frames Blanche as an outsider from Scene 1 to the final stage direction.',
          'Light: the stage direction that her beauty must avoid a strong light, the paper lantern in Scene 3, and the lantern torn off in Scenes 9 and 11.',
          'Scene 10: the jungle voices, the lurid reflections and the music that covers the end of the scene. Show how the devices make the audience share her terror.',
          'Conclude on what the devices achieve together: the audience is inside Blanche’s mind even as the other characters stop believing her.',
        ],
      },
      {
        question:
          'Re-read Scene 9, from Mitch’s arrival to his exit. Explore Williams’s presentation of the conflict between illusion and truth in this scene and elsewhere in the play.',
        skill: 'Close analysis of a scene linked to the whole play',
        guidance: [
          'Start with the stage picture: Mitch unshaven and in work clothes, Blanche drinking to drown the polka. What do costume and action tell us before anyone speaks?',
          'Analyse the lantern: why Mitch tears it off, and the irony that in Scene 3 he was the one who put it over the bulb at Blanche’s request.',
          'Blanche’s defence of illusion: “I tell what ought to be truth.” Note the UK wording of her reply about magic, and quote accurately from your own edition.',
          'The street seller and Blanche’s memories of death: how the scene moves from truth about her past to the deaths at Belle Reve, and what desire has to do with them.',
          'Mitch’s rejection: “You’re not clean enough to bring in the house with my mother.” Is his truth any more honest than her illusion?',
          'Link outwards: Stanley’s “lies and conceit and tricks” in Scene 10 and the torn lantern in Scene 11. Conclude on whether the play values truth or mourns what it destroys.',
        ],
      },
      {
        question:
          '‘Stella is the character whose choice decides the outcome of the play.’ Explore Williams’s presentation of Stella in the light of this view.',
        skill: 'Character and structure, responding to a critical view',
        guidance: [
          'Define Stella’s position: the sister who left Belle Reve for New Orleans and married Stanley, caught between loyalty to her past and to her marriage.',
          'Scene 3 and Scene 4: she returns to Stanley after he strikes her, and defends to Blanche the things that happen between a man and a woman in the dark. What does Williams suggest about desire and dependence?',
          'Scenes 7 and 8: she defends Blanche against Stanley and is shaken by his cruelty. Show that she is not simply passive.',
          'Scene 11: “I couldn’t believe her story and go on living with Stanley.” Analyse the logic of the sentence: it is not that she disbelieves, but that she cannot afford to believe.',
          'Her grief at the end, “What have I done to my sister?”, and the stage direction that she sobs with inhuman abandon while Stanley comforts her.',
          'Conclude: is Stella’s choice the decisive one, or is it made for her by a world in which she has no other means of survival? Weigh the view rather than simply agreeing.',
        ],
      },
      {
        question:
          'How far does A Streetcar Named Desire present Stanley as a representative of a new America rather than simply as a villain?',
        skill: 'Whole-play argument using context',
        guidance: [
          'Context first, briefly: a play of 1947, just after the Second World War, in which a returning soldier of Polish descent meets the daughter of a lost plantation.',
          'Stanley as the new America: the former Master Sergeant who works at the plant with Mitch, and his insistence in Scene 8 that he is not a Polack but “a one hundred per cent American”.',
          'Stanley’s claims about the Napoleonic code and his demand for evidence in Scene 2: a modern, legalistic mind against Blanche’s old Southern manners.',
          'Williams’s stage directions present him with energy and even admiration in Scene 1. Use them to complicate the villain reading.',
          'But Scene 3, Scene 8 and Scene 10 show violence, and in Scene 11 he tears the lantern from a woman who is already beaten. Ask whether his cruelty is part of what the new America is, or his own.',
          'Conclude with a judgement about how Williams wants the audience to see him, and how far that is a reading of history as well as of a man.',
        ],
      },
    ],
    tips: [
      'Quote from your own edition, and check before you learn. UK and American editions differ in several lines: in the Penguin and Methuen texts Blanche says “I don’t want realism.” and, after Mitch answers, “I’ll tell you what I want. Magic!”, and the line about a woman’s charm being fifty per cent illusion does not appear in them at all.',
      'Watch out for misattributed lines that circulate online. “Deliberate cruelty is not forgivable” is said to Stanley in Scene 10, about a visit from Mitch that Blanche has invented. “The Kowalskis and the DuBois have different notions” is Stanley’s, in Scene 2.',
      'Write about the play as theatre. Williams puts some of his most important meanings into stage directions, music and lighting. Name them, attribute them to Williams, and say what the audience would see and hear.',
      'Resist the easy verdicts. Answers that call Stanley a monster and Blanche a victim, or Blanche a liar and Stanley a realist, read as competent rather than strong. The strongest answers show that Williams gives each of them truth and each of them cruelty, and then argue which matters more.',
      'Use context to sharpen an argument, not as a paragraph of its own. The post-war moment, the decline of the plantation South, the censorship of homosexuality on the 1940s stage and Williams’s family history all help, but only when they explain something in a particular scene.',
      'Know the time scheme: early May in Scene 1, mid-September by Scene 7, the birthday supper in Scene 8, and some weeks later in Scene 11. Precise references to scenes show whole-play knowledge far better than plot summary.',
      'Write about Scene 10 precisely and carefully. Name what happens as rape, analyse the methods Williams uses (Stanley’s language, the jungle voices, the scene ending on music), and do not retell it in detail. What earns credit is analysis of how the moment is staged.',
    ],
  },

  modelAnswer: {
    question: 'Explore how Williams uses light to present Blanche.',
    paragraph:
      'From her first appearance Williams makes light the measure of what Blanche can bear. The stage direction that introduces her warns that “Her delicate beauty must avoid a strong light”, a sentence addressed as much to the lighting designer as to the reader, and it establishes that concealment is her means of survival. In Scene 3 she asks Mitch to cover the bulb because “I can’t stand a naked light bulb”, and the adjective naked is telling: bare light is indecent to her, because it strips away the performance of youth and gentility that she depends on. Yet light is not simply her enemy. In Scene 6 she remembers that after her husband’s death “the searchlight which had been turned on the world was turned off again”, so the same image that threatens her also holds her one experience of love. That doubleness makes Mitch’s remark in Scene 9, “I don’t think I ever seen you in the light”, cruel rather than merely honest. When he tears the lantern from the bulb, Williams turns an abstract theme into a stage picture of exposure, and when Stanley repeats the act in Scene 11 in front of the whole household, the audience is made to see that the demand for truth has become a form of punishment.',
    commentary: [
      'It opens with an argument about the whole play, not a description of one scene, and every later sentence develops that argument.',
      'It analyses a stage direction as a stage direction, saying who it is written for and what it does in performance, which shows awareness of dramatic form.',
      'Each quotation is short and followed by analysis of a single word or image: naked, searchlight, in the light.',
      'It complicates its own point: light is shown to mean love as well as exposure, which keeps the paragraph from becoming a list of examples.',
      'It moves across the play from Scene 1 to Scene 11 and ends on a judgement about Williams’s purpose, the demand for truth becoming punishment, which is the kind of conclusion that separates a strong answer from a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Scene 1',
      title: 'Blanche arrives at Elysian Fields',
      summary:
        'On an evening early in May, Blanche DuBois arrives at her sister’s two-room flat in a poor street in New Orleans. She drinks alone, then tells Stella that Belle Reve, the family plantation, has been lost after a long run of deaths. Stanley comes home, sizes her up and asks whether she was married; the polka rises faintly, and she tells him the boy died.',
      setting: 'The Kowalskis’ two-room flat on Elysian Fields, New Orleans',
      who: ['Blanche', 'Eunice', 'Stella', 'Stanley'],
      quote: 'transfer to one called Cemeteries',
      themes: ['Desire and destruction', 'Fading Southern aristocracy vs industrial modernity'],
      tension: 2,
      significance:
        'The route to the flat maps the whole play, from desire through death, and Blanche arrives with almost nothing left to lose.',
    },
    {
      where: 'Scene 2',
      title: 'The trunk and the Napoleonic code',
      summary:
        'The next evening Stanley, suspecting that Blanche has cheated Stella out of her share of Belle Reve, pulls the furs and costume jewellery out of her trunk. Blanche hands over the papers but snatches back a bundle of love letters and poems from her dead husband. Stanley tells her that Stella is going to have a baby.',
      setting: 'The flat, in the early evening',
      who: ['Stanley', 'Stella', 'Blanche'],
      quote: 'we have the Napoleonic code',
      themes: ['Fading Southern aristocracy vs industrial modernity', 'Gender and power'],
      tension: 3,
      significance:
        'Stanley’s demand for documents against Blanche’s stories sets up the conflict between fact and illusion that drives the play.',
    },
    {
      where: 'Scene 3',
      title: 'The poker night',
      summary:
        'Stanley’s poker game runs late while Blanche meets Mitch, who seems gentler than the other men, and has him cover the bare bulb with a paper lantern. When the radio is turned on, Stanley throws it out of the window and hits Stella. She takes refuge upstairs with Eunice, but comes back down to him when he bellows her name from outside.',
      setting: 'The kitchen and bedroom during a late-night poker game',
      who: ['Stanley', 'Stella', 'Blanche', 'Mitch', 'Eunice', 'Steve'],
      quote: 'Stella! Stella, sweetheart! Stella!',
      themes: ['Violence and gentility', 'Desire and destruction', 'Gender and power'],
      tension: 4,
      significance:
        'Violence and desire are shown bound together in the marriage, and Blanche begins the courtship she hopes will save her.',
    },
    {
      where: 'Scene 4',
      title: 'The morning after',
      summary:
        'Blanche is horrified to find Stella calm and contented after the night’s violence, and proposes asking an old admirer, Shep Huntleigh, for money. She condemns Stanley as an animal, not knowing that he has come in unheard while a train passes and hears every word. When Stella runs to embrace him, he grins at Blanche over her head.',
      setting: 'The flat, the next morning',
      who: ['Blanche', 'Stella', 'Stanley'],
      quote: 'He acts like an animal, has an animal’s habits!',
      themes: ['Fading Southern aristocracy vs industrial modernity', 'Desire and destruction'],
      tension: 3,
      significance:
        'Stanley now knows what Blanche thinks of him, and the struggle for Stella becomes open war.',
    },
    {
      where: 'Scene 5',
      title: 'Soft people',
      summary:
        'Stanley asks Blanche whether she knows a man called Shaw, who thinks he met her at a disreputable hotel in Laurel. She denies it, then confides to Stella that soft people must charm the strong to survive, and that she is frightened. Alone, she kisses a young man collecting for a newspaper and sends him away, then greets Mitch, who arrives with roses.',
      setting: 'The flat on a hot summer evening',
      who: ['Blanche', 'Stanley', 'Stella', 'Mitch'],
      quote: 'shimmer and glow',
      themes: ['Reality vs illusion (the paper lantern)', 'Gender and power'],
      tension: 3,
      significance:
        'Blanche admits that she survives by pleasing men, and the first rumour of her past has already reached Stanley.',
    },
    {
      where: 'Scene 6',
      title: 'The story of Allan Grey',
      summary:
        'After an evening out, Blanche tells Mitch that she married very young and discovered that her husband, Allan Grey, had a male lover. At a dance that night she told him he disgusted her, and he left the dance floor and shot himself. Mitch, whose mother is dying, draws her into his arms and says they need each other.',
      setting: 'The steps and the flat, late at night after a date',
      who: ['Blanche', 'Mitch', 'Allan Grey'],
      quote: 'Sometimes—there’s God—so quickly!',
      themes: ['Desire and destruction', 'Madness and institutionalisation'],
      tension: 3,
      significance:
        'The source of Blanche’s guilt and of the polka in her head is revealed, and for a moment she seems to be saved.',
    },
    {
      where: 'Scene 7',
      title: 'Stanley’s report',
      summary:
        'On a late afternoon in mid-September, Stella prepares Blanche’s birthday supper while Blanche sings in the bath. Stanley tells Stella what he has learned about her life in Laurel: Blanche’s reputation at a hotel called the Flamingo, and her dismissal from her teaching post over a seventeen-year-old boy. He has told Mitch, and he has bought Blanche a bus ticket home.',
      setting: 'The flat, with the table laid for a birthday',
      who: ['Stanley', 'Stella', 'Blanche'],
      quote: 'Sister Blanche is no lily!',
      themes: ['Reality vs illusion (the paper lantern)', 'Gender and power'],
      tension: 4,
      significance:
        'The truth arrives as Stanley’s story, cross-cut with Blanche’s singing, and it ruins her chance with Mitch before she knows.',
    },
    {
      where: 'Scene 8',
      title: 'The birthday supper',
      summary:
        'Mitch’s place at the birthday table stays empty. When Stella tells Stanley his face and fingers are greasy, he hurls his plate to the floor and declares himself king of the house. He gives Blanche her present, a bus ticket back to Laurel, and she runs from the room. Soon afterwards Stella’s labour begins and Stanley takes her to the hospital.',
      setting: 'The flat, at a supper with a birthday cake',
      who: ['Blanche', 'Stella', 'Stanley'],
      quote: 'Ticket! Back to Laurel! On the Greyhound! Tuesday!',
      themes: ['Gender and power', 'Violence and gentility'],
      tension: 4,
      significance:
        'Stanley’s cruelty is now open and deliberate, and Blanche is left alone in the flat.',
    },
    {
      where: 'Scene 9',
      title: 'Mitch and the light',
      summary:
        'Later that evening Mitch arrives, unshaven, having heard Stanley’s story. Blanche defends illusion, but he tears the paper lantern off the bulb to look at her properly. She admits her past, and a street seller’s cry of flowers for the dead brings back the deaths at Belle Reve. Mitch grabs at her, says he does not want to marry her, and flees when she screams fire from the window.',
      setting: 'The flat, later the same evening',
      who: ['Blanche', 'Mitch'],
      quote: 'I don’t think I ever seen you in the light.',
      themes: [
        'Reality vs illusion (the paper lantern)',
        'Gender and power',
        'Madness and institutionalisation',
      ],
      tension: 4,
      significance:
        'Blanche’s last hope of safety is gone, and the illusion that protected her has been torn down in front of her.',
    },
    {
      where: 'Scene 10',
      title: 'Stanley and Blanche',
      summary:
        'Alone and drinking, Blanche has dressed in an old evening gown and a rhinestone tiara. Stanley returns from the hospital, where the baby is not expected before morning. She claims a millionaire has invited her on a cruise and that Mitch came back to apologise; Stanley exposes each story. When she breaks a bottle to defend herself, he overpowers her, and the play makes clear that he rapes her.',
      setting: 'The flat at night, with Stella in hospital',
      who: ['Blanche', 'Stanley'],
      quote: 'We’ve had this date with each other from the beginning!',
      themes: ['Violence and gentility', 'Gender and power', 'Desire and destruction'],
      tension: 5,
      significance:
        'The play’s crisis: Stanley’s victory is complete, and Blanche’s hold on reality breaks.',
    },
    {
      where: 'Scene 11',
      title: 'The kindness of strangers',
      summary:
        'Some weeks later the men play poker again. Stella has agreed to Blanche being taken away, because she cannot believe Blanche’s account of the rape and go on living with Stanley. Blanche, expecting Shep Huntleigh, finds a doctor and a matron from a state institution. She struggles, then leaves quietly on the doctor’s arm. Stella weeps, Stanley comforts her, and the game resumes.',
      setting: 'The flat during another poker night',
      who: ['Blanche', 'Stella', 'Stanley', 'Mitch', 'Eunice', 'Steve', 'The Doctor', 'The Matron'],
      quote: 'I have always depended on the kindness of strangers.',
      themes: [
        'Madness and institutionalisation',
        'Reality vs illusion (the paper lantern)',
        'Gender and power',
      ],
      tension: 5,
      significance:
        'The household closes over what has happened, and the audience is left to judge the cost of Stella’s choice.',
    },
  ],

  relationships: [
    {
      from: 'Blanche',
      to: 'Stella',
      kind: 'sisters',
      note: 'Stella is the younger sister who left Belle Reve for New Orleans and married Stanley. Blanche wants her back in the old world; Stella loves her but chooses her marriage in the end.',
    },
    {
      from: 'Stanley',
      to: 'Stella',
      kind: 'husband and wife',
      note: 'A marriage bound by desire and by violence. Stella returns to him after he strikes her, and in Scene 11 chooses him over her sister.',
    },
    {
      from: 'Blanche',
      to: 'Stanley',
      kind: 'sister-in-law and brother-in-law, then enemies',
      note: 'Mutual suspicion from Scene 1 turns to open war after he overhears her in Scene 4. He investigates her, exposes her, and in Scene 10 rapes her.',
    },
    {
      from: 'Blanche',
      to: 'Mitch',
      kind: 'courtship',
      note: 'Each seems to offer the other a way out of loneliness. Stanley’s report ends it, and in Scene 9 Mitch rejects her by the standards of his mother’s world.',
    },
    {
      from: 'Stanley',
      to: 'Mitch',
      kind: 'friends from the army and the plant',
      note: 'They served in the same unit in the war and work at the same plant. Stanley’s loyalty to Mitch is his excuse for telling him about Blanche, and in Scene 11 Mitch turns on him.',
    },
    {
      from: 'Stella',
      to: 'Eunice',
      kind: 'neighbours and friends',
      note: 'Eunice gives Stella refuge upstairs in Scene 3 and, in Scene 11, the advice that life has to go on, whatever the truth.',
    },
    {
      from: 'Eunice',
      to: 'Steve',
      kind: 'husband and wife',
      note: 'Their loud fight and quick reconciliation in Scene 5 mirror the Kowalskis’ marriage and show violence as part of ordinary life on the street.',
    },
    {
      from: 'Blanche',
      to: 'Allan Grey',
      kind: 'widow and young husband',
      note: 'Blanche married him very young. Her words to him on the night he died are the guilt she carries through the play, heard as the polka in her head.',
    },
    {
      from: 'Blanche',
      to: 'The Doctor',
      kind: 'patient and stranger',
      note: 'The stranger on whose arm she leaves. His courtesy lets her go with dignity, and he represents the institution that will hold her.',
    },
    {
      from: 'The Matron',
      to: 'Blanche',
      kind: 'nurse and patient',
      note: 'The matron restrains Blanche by force in Scene 11, the institution without the doctor’s courtesy.',
    },
  ],

  compareWith: [
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        'A tragedy in which a woman is destroyed by a man’s story about her sexual conduct, useful for comparing Stanley’s investigation and the way each play shows who is believed.',
    },
    {
      title: 'King Lear',
      href: '/revision/texts/king-lear',
      reason:
        'Another tragedy of a figure stripped of home, status and finally sanity, which helps in arguing whether Blanche’s fall has the scale of classical tragedy.',
    },
    {
      title: 'The Great Gatsby',
      href: '/revision/texts/the-great-gatsby',
      reason:
        'An American work about an illusion kept alive against reality, and about old and new money, which sets Blanche’s lost Belle Reve beside Gatsby’s dream.',
    },
  ],

  contentGuidance: [
    'violence',
    'intimate_relationships',
    'mental_health',
    'mortality',
    'addiction',
    'discrimination',
    'crime_injustice',
  ],

  quotesFromElsewhere: ['the broken world'],

  sources: [
    {
      label:
        'A Streetcar Named Desire, Methuen Drama Student Edition (London: Methuen Drama, 2009), with commentary and notes. Internet Archive lending copy, searched with the full-text search only: exact wording and speaker of every quotation; scene placement from the running heads and the page references in the notes; the copyright line (1947, renewed 1975 by The University of the South); the Hart Crane epigraph; the stage directions quoted; the opening date of 3 December 1947 and the original designer, Jo Mielziner, from the commentary; Rose Williams’s lobotomy in 1943.',
      url: 'https://archive.org/details/streetcarnamedde0000will_p2e3',
    },
    {
      label:
        'A Streetcar Named Desire and Other Plays (London: Penguin, 2000). Internet Archive lending copy, full-text search: second, independent check of every quotation and speaker; running heads for Scenes 1, 8 and 9; the copyright line; the cast of the first London production, directed by Laurence Olivier with Vivien Leigh.',
      url: 'https://archive.org/details/streetcarnamedde0000will_w6f3',
    },
    {
      label:
        'A Streetcar Named Desire (New York: New Directions, 1980) and (New York: New American Library, 1947). Internet Archive lending copies, full-text search: used to identify where American editions differ from the UK ones (Scene 2, Scene 5, Scene 6 and Scene 9), and to confirm that the lines quoted here are shared.',
      url: 'https://archive.org/details/streetcarnamedde00will_0',
    },
    {
      label:
        'Internet Archive catalogue records for the Dramatists Play Service acting editions (1947 and 1981), titled a play in three acts.',
      url: 'https://archive.org/details/bwb_O7-DOW-104',
    },
    {
      label:
        'Wikipedia, A Streetcar Named Desire: Broadway opening on 3 December 1947 at the Ethel Barrymore Theatre, directed by Elia Kazan; Pulitzer Prize for Drama, 1948; London opening at the Aldwych Theatre on 12 October 1949, directed by Laurence Olivier; the Desire streetcar line ran from 1920 to 1948.',
      url: 'https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire',
    },
    {
      label:
        'Wikipedia, A Streetcar Named Desire (1951 film): the Production Code changes, including the removal of the reference to Allan Grey’s homosexuality and the new ending in which Stella blames Stanley and resolves to leave him. Used for the correction recorded in this file’s header.',
      url: 'https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire_(1951_film)',
    },
    {
      label:
        'Wikipedia, It’s Only a Paper Moon: published 1933, music by Harold Arlen, words by Yip Harburg and Billy Rose. No lyric is quoted in this guide.',
      url: 'https://en.wikipedia.org/wiki/It%27s_Only_a_Paper_Moon',
    },
    {
      label:
        'Wikipedia, Varsovienne: a mazurka-derived dance in three-four time, named after Warsaw.',
      url: 'https://en.wikipedia.org/wiki/Varsovienne',
    },
    {
      label:
        'Wikipedia, Huey Long: Governor of Louisiana 1928 to 1932, United States senator 1932 to 1935, died 10 September 1935 after being shot; his slogan promising every man a king.',
      url: 'https://en.wikipedia.org/wiki/Huey_Long',
    },
    {
      label:
        'Wikipedia, Elysium: the Greek conception of an afterlife for heroes and, later, the righteous.',
      url: 'https://en.wikipedia.org/wiki/Elysium',
    },
    {
      label:
        'Wikipedia, Louisiana Civil Code: civil law based on the French civil code and Spanish codes.',
      url: 'https://en.wikipedia.org/wiki/Louisiana_Civil_Code',
    },
    {
      label:
        'Wikipedia, Luca della Robbia: Florentine Renaissance sculptor noted for tin-glazed terracotta, a technique passed to his nephew Andrea.',
      url: 'https://en.wikipedia.org/wiki/Luca_della_Robbia',
    },
  ],
}
