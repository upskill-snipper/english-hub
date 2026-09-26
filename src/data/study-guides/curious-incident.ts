import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Curious Incident of the Dog in the Night-Time: Simon Stephens's stage
 * adaptation (National Theatre, 2012) of Mark Haddon's 2003 novel. A complete
 * guide, written 26 September 2026 to replace a page that analysed the NOVEL.
 *
 * WHY A REWRITE. Both boards that set this text, Pearson Edexcel International
 * GCSE (4ET1) and Eduqas GCSE, prescribe the PLAY. The page this replaces
 * quoted the novel, and quoted it wrongly ("Dad" where Christopher says
 * "Father"), and so taught students lines they could not use. Nothing from that
 * page or from /igcse/edexcel/drama/curious-incident was reused: several of the
 * lines printed there are the novel's, and some are in neither text.
 *
 * QUOTATIONS. No licensed copy of the play is held here. Every quotation was
 * checked against the prescribed edition itself, using Google Books'
 * search-within on the Methuen Drama Critical Scripts schools edition (ISBN
 * 9781408185216, and its ePDF 9781408185407) and on the Methuen Drama Modern
 * Plays ebook (ISBN 9781408173367). Those searches return the text with its
 * speaker labels and page numbers, and the two editions print the play on the
 * same pages (checked on pages 11, 12, 49, 50, 101 and 102). Where the Google
 * snippet did not show the speaker label, the line was either confirmed from an
 * Eduqas question paper, which prints the play verbatim, or not attributed. The
 * eight Eduqas papers read (specimen, 2017, 2018, 2019, October 2020, 2023,
 * 2024, 2025) are the second independent source for most quotations.
 *
 * THE AMERICAN ACTING EDITION (Dramatists Play Service, 2015, on the Internet
 * Archive) was used only as a cross-check. It differs from the British text in
 * places: its opening has "7 minutes" where the Methuen text has "seven
 * minutes", and it gives Mrs Shears stronger language. Students should quote
 * the Methuen text, which is what both boards prescribe.
 *
 * DROPPED. "I think I would make a very good astronaut" is in the play (page
 * 24), but no source showed who speaks it, so it is not quoted. The novel's
 * "Prime numbers are what is left when you have taken all the patterns away"
 * did not appear in the play's searchable text and is not used.
 *
 * FACT-CHECK, 26 September 2026. A second pass re-searched every quotation in
 * the same Methuen editions and found the wording and speakers sound, but the
 * plot wrong in places. The guide had Christopher say "I see everything" at
 * Swindon station and count primes while a policeman questioned him there; in
 * the play both happen on the London train (pages 64 and 66), after the Station
 * Policeman catches him on board. It also left Ed's night visit to the London
 * flat (page 83) out of the timeline, put the Smarties test after Ed's promise
 * to tell the truth (it comes before, pages 48 to 49), described Mrs Alexander's
 * scenes in ways the text did not bear out (on page 55 she refuses to take Toby
 * and suggests ringing his father), and said Christopher and Siobhan share the
 * astronaut passage (Ed is the one who answers it, page 24). All corrected. Beware the
 * Eduqas papers and the 2023 Samuel French acting edition as checks on
 * punctuation: both drop commas the Methuen text prints ("It's a bloody dog,
 * Christopher"), and the acting edition's cast list doubles Roger differently.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; the passages
 * are pointed to and summarised, not printed.
 */
export const guide: StudyGuide = {
  slug: 'curious-incident',
  title: 'The Curious Incident of the Dog in the Night-Time',
  author: 'Mark Haddon (adapted by Simon Stephens)',
  form: 'play',
  scope:
    "The whole play: Simon Stephens's stage adaptation of Mark Haddon's novel, not the novel itself, so quote the play, in which Christopher calls his parents Father and Mother and much of his narration is spoken aloud by his teacher, Siobhan. The play is in two parts, Part One and Part Two, followed by a short Postscript after the curtain call. For Pearson Edexcel International GCSE English Literature (4ET1) it is one of five modern drama texts: in Paper 2 (Component 2), Section A, you answer one essay question from a choice of two on the whole play, and the paper is open book, so you may take in a clean, completely unmarked copy of a prescribed edition. Your centre may instead enter you for the coursework component (Component 3). For Eduqas GCSE English Literature it is a post-1914 drama text in Component 2, Section A: an extract is printed, you are advised to spend about 45 minutes, and you write about the extract and the play as a whole without a copy of the play, so you need short quotations by heart. In both sections the questions reward close knowledge of the play and analysis of how it is written and staged; historical context is not separately assessed there. AQA GCSE English Literature (8702) also sets the play, on Paper 2. Page numbers in this guide are those of the Methuen Drama editions, the Critical Scripts schools edition (ISBN 9781408185216) and the Modern Plays edition, which print the play on the same pages: Part One begins on page 3, Part Two on page 53 and the Postscript on page 103. An American acting edition (Dramatists Play Service, 2015) differs in wording in places, so do not quote from it.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Mark Haddon 2003 (the novel); © Simon Stephens 2012 (the play). The play is published by Methuen Drama, an imprint of Bloomsbury Publishing. Quoted for criticism and review.',
  },
  workLength: {
    words: 20000,
    basis:
      'Estimated, not counted. The play runs from page 3 to page 106 of the Methuen Drama editions, about 104 pages of dialogue and stage directions. The Eduqas extracts, each a page and a half to two pages, run to roughly 300 to 450 words, which suggests about 200 words a page and a play of around 20,000 words. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      "Seven minutes after midnight, fifteen-year-old Christopher Boone is found standing over Wellington, his neighbour Mrs Shears's dog, which has been killed with a garden fork. A policeman tries to lift him by the arm, Christopher hits him, and he is arrested. Released with a caution, and against his father Ed's orders, he decides to find out who killed Wellington and to write the investigation up as a book. From the first scene, his teacher Siobhan reads that book aloud, so the audience hears Christopher's thoughts in her voice while watching him act them out.",
      "In Part One the investigation leads Christopher from door to door along his street, to a neighbour, Mrs Alexander, who tells him that his mother had an affair with Mr Shears, and to a violent row with Ed, who confiscates the book. Searching for it, Christopher finds it in a shirt box in his father's bedroom beside forty-three letters addressed to him. His mother, Judy, whom Ed told him had died two years earlier, is alive and living in London. Ed finds him, admits the lie and then confesses that he killed Wellington himself. By Christopher's logic a man who could kill a dog could kill him, and Part One ends with him deciding to run away to his mother.",
      "Part Two opens with Siobhan proposing that the class turn Christopher's book into a play, which he refuses. He then makes a terrifying journey alone by train and Underground from Swindon to his mother's flat in Willesden, rescuing his pet rat, Toby, from the track on the way. Judy takes him in, but living with her and her partner Roger Shears is unbearable, and she brings him back to Swindon. He sits his A-level maths, Ed gives him a puppy called Sandy, and he gets an A. The last line before the curtain call is a question he asks Siobhan three times, whether all this means he can do anything, and after the curtain call he returns to explain the maths.",
      "The play begins as a murder mystery and solves it at the end of Part One; what it is really about is trust, and what happens to a family when the adults lie. It is also a play about how a person experiences the world, and the staging puts the audience inside Christopher's senses. The strongest answers treat it as a play and not a novel: they write about Siobhan's reading voice, the ensemble who become the station, the stage directions, and the way the play admits, in Part Two, that it is a performance made from Christopher's book.",
    ],
  },

  context: [
    {
      heading: "From Haddon's novel to Stephens's play",
      body: "Mark Haddon's novel was published in 2003 by Jonathan Cape and won the Whitbread Book of the Year. It is told entirely by Christopher in the first person, which is hard to put on a stage. Simon Stephens, who adapted it for the National Theatre, has described transcribing the novel's direct speech to find its dramatic heart, and coming up with the idea of “using Siobhan as a narrator”, because she is one of the few people in the novel who read Christopher's book. That choice explains the play's shape: the book is read aloud, the second half becomes the school's play of the book, and the ending belongs to Christopher and Siobhan together. Stephens and the director, Marianne Elliott, both come from Stockport. In the exam, write about the play, not the novel: the words, the order of events and the staging are Stephens's.",
    },
    {
      heading: 'The National Theatre production',
      body: "The play was first performed in the National Theatre's Cottesloe Theatre from 24 July to 27 October 2012, played in the round, directed by Marianne Elliott with design by Bunny Christie, lighting by Paule Constable, video by Finn Ross, music by Adrian Sutton and movement direction by Scott Graham and Steven Hoggett of Frantic Assembly. It transferred to the Apollo Theatre in the West End in March 2013, where it had to be re-staged for a proscenium arch; after the Apollo's ceiling collapsed during a performance in December 2013 it moved to the Gielgud Theatre in 2014. It won seven Olivier Awards, including Best New Play, in 2013, and on Broadway it won the 2015 Tony Award for Best Play. The script itself is written to be staged in more than one way: in the Postscript the stage directions offer alternatives, such as a triangle made by projection or by the company if lasers are not possible.",
    },
    {
      heading: 'No label for Christopher',
      body: "The play never names a condition for Christopher. Haddon has written that he slightly regrets a diagnosis being printed on the novel's cover, that he did no research beyond photographing the insides of Swindon and Paddington stations, and that the book is, if anything, “a novel about difference”, about being an outsider and seeing the world in a surprising way. Marianne Elliott has said that her company took advice about autism but came to see Christopher as his own individual character rather than an accurate case. For your essay this matters: write about how Stephens presents Christopher's way of seeing, speaking and reacting, and avoid diagnosing him. Examiners reward analysis of the play, and the play itself refuses the label.",
    },
    {
      heading: 'Swindon, London and a real journey',
      body: "Christopher lives at 36 Randolph Street in Swindon, Wiltshire. His mother's letters come from 451c Chapter Road, Willesden, in north-west London. His journey follows a real route, from Swindon station to London Paddington and then across London by Underground, and the real places matter: stations are public spaces packed with signs, announcements and strangers, which is exactly what Christopher finds hardest. The play turns them into a wall of spoken fragments. Later scenes move to Hampstead Heath, where Christopher asks where the planes overhead are going, and back to Swindon, where Judy and Christopher live in a small rented room.",
    },
    {
      heading: 'When the play is set',
      body: "The play updates the story to the present of its first performance. Christopher remembers a beach holiday in Cornwall on 4 July 2006, when he was nine, which places the action around 2012, the year the play opened. The world of the play is the modern one its first audiences knew: mobile phones, CCTV warnings in the station, cash cards and PIN numbers. Before he leaves, Christopher takes his father's cash card from his wallet and repeats a four-digit number to himself as he goes out of the house.",
    },
    {
      heading: 'A special school and an A-level',
      body: "Christopher tells Mrs Alexander that he will be the first person to do an A-level from his school, “because it's a special school”. Mrs Gascoyne doubts the school has the facilities, and it takes Ed's insistence, and an offer to pay, to make it happen. The subplot shows how low other people's expectations of Christopher are, and how much his achievement means to him. It also gives the play its deadline: in Part Two the A-level is the reason he must return to Swindon, and its result is the subject of the final scene.",
    },
  ],

  themes: [
    {
      title: 'Truth and lies',
      body: "Christopher's book announces that he cannot lie, and the plot is a chain of adults' lies coming to light: Ed's story that Judy died of a heart attack, the letters hidden in a shirt box, Ed's silence about Wellington, and the affair Mrs Alexander reveals. Stephens complicates the neat opposition, though. Christopher bends the truth when it suits him, telling Ed he was only chatting with Mrs Alexander: “I wasn't doing investigating.” And truth-telling does not automatically heal. Ed's promise that “I am going to tell you the truth from now on” leads straight to the confession that makes Christopher flee. The play suggests that trust, once broken, is rebuilt slowly through actions, a puppy, a vegetable patch, time, rather than by one honest speech. A strong essay argues that the play is less about lying itself than about what lies do to trust.",
    },
    {
      title: 'Family and parenting',
      body: "Both parents love Christopher and both fail him. Ed fights Mrs Gascoyne for his A-level, “Then get the facilities”, yet lies to him for two years and hits him. Judy's letters admit that she could not cope and left, yet she is honest in a way Ed is not, and in Part Two she leaves Roger and takes Christopher home to Swindon. Stephens gives both parents the same gesture with their son, the fan of spread fingers touching his, which suggests that love here is less a matter of grand feeling than of learning how to reach one particular child. The play is sometimes read as Christopher's story alone. It is at least as much about how hard, and how ordinary, it is to be a parent, and one convincing reading is that Ed and Judy have to grow up as much as their son does.",
    },
    {
      title: 'Independence and bravery',
      body: "Christopher's bravery is concrete. He knocks on strangers' doors, disobeys his father, and travels alone from Swindon to Willesden, a journey the play makes frightening through noise, crowds and the moment he climbs down onto the Underground track to rescue Toby. His own summary in the final scene is plain and proud: “I found my mother. I was brave.” The play also shows quieter kinds of courage in other people: Judy facing her failure in her letters, and Ed admitting the truth, however badly he does it. Independence is not presented as simple, either. At the end Christopher still lives between two homes and depends on others, and the final question, whether one brave journey means he can do anything, is left open.",
    },
    {
      title: 'Difference and ways of seeing',
      body: "The play never names a condition for Christopher. Instead it shows how he perceives: exact ages and times, a dislike of yellow and brown things, screaming when he is touched, taking metaphors literally, noticing every detail of a new place. The staging turns that perception into theatre, so that Swindon station becomes a storm of signs and announcements spoken by the ensemble, and the audience is made to experience the world as overwhelming rather than simply told that it is. One reading sees Christopher as a figure whose difference exposes everyone else's habits, as when he says that most people only glance. A more cautious reading warns that the play risks making a real way of being into spectacle. The best answers notice that the play keeps both his gifts and the strain on the people around him in view.",
    },
    {
      title: 'Order, patterns and fear',
      body: "Numbers are Christopher's refuge. He knows every prime number up to 7507, counts primes to himself after slipping away from a policeman on the London train, and after Ed's confession counts in powers of two until he sticks on the same number, the counting breaking down as he does. Routines and rules, his watch, his colours, the red line Siobhan tells him to imagine on the floor, are ways of controlling a world that arrives too fast. Fear in this play is less about danger than about disorder: crowds, noise, changes of plan. Stephens ends the whole performance with a maths proof after the curtain call, which suggests that order is not only Christopher's defence against fear but also the place where he is most confident and most himself.",
    },
    {
      title: 'Stories and who tells them',
      body: "Christopher writes a book, Siobhan reads it aloud, Ed seizes it and reads from it in anger, and in Part Two it becomes the school play we are watching. That chain of readers raises a question the play keeps asking: whose story is this? Christopher first insists the book is for him and not everybody, yet at the end he accepts Siobhan's news that they turned it into a play, and he insists on explaining his maths after the curtain call, adding a chapter nobody asked for. The play is partly about a boy taking control of how his story is told, and partly about the risk that others will tell it for him. Siobhan's reading voice keeps both possibilities in front of the audience throughout.",
    },
  ],

  characters: [
    {
      name: 'Christopher Boone',
      role: 'Fifteen-year-old detective, writer and runaway, and the author of the book the play is made from',
      body: "Christopher is fifteen years, three months and two days old when the play begins. He lives at 36 Randolph Street in Swindon and attends a special school, where he is to be the first pupil to sit an A-level. He knows every prime number up to 7507, cannot bear to be touched, dislikes yellow and brown, keeps a pet rat called Toby, and takes language literally, so that metaphors seem to him like lies. Stephens never gives him a diagnosis, and the strongest answers follow the play's lead by writing about how he is presented rather than labelling him. He is not a passive figure for others to explain: he investigates against orders, reasons his way through decisions, and makes a journey that frightens him at every step. One reading sees a coming-of-age story in which he wins his independence. Another notices the cost of his behaviour for the people who care for him, which Judy's letters and Ed's exhaustion make plain. The play's fairness to both views is part of its power.",
    },
    {
      name: 'Siobhan',
      role: "Christopher's teacher, who reads his book aloud and guides him",
      body: "Siobhan is twenty-seven, and she is the play's most important structural device as well as a character. She speaks much of Christopher's first-person book aloud, responds to it as his teacher, “This is good, Christopher”, and even disputes it when it reports her words more bluntly than she thinks she said them. In Part Two her voice talks him through the station underpass with an imaginary red line to follow, and in the final scene she hands him his result and tells him they made the play. Stephens gave her the narration because her view of Christopher is so like a reader's; she is, in effect, the audience's guide. One reading makes her the parent Christopher needs. The more careful reading notes that she is steady and honest partly because she is not his parent: when he considers going to live with her, he rules it out himself, because she cannot look after him when school is closed.",
    },
    {
      name: 'Ed Boone',
      role: "Christopher's father, who has brought him up alone since Judy left",
      body: "Ed is fiercely protective and often funny, calling his son mate and battling Mrs Gascoyne for the A-level with an offer of fifty quid. He is also the source of the play's two great deceptions: he told Christopher that his mother had died of a heart attack, hid her letters in a shirt box, and killed Wellington after a row with Mrs Shears, who had become his close friend after Judy left. His temper breaks out in the fight over the book, when he hits Christopher, and his tenderness in the apology and the fan of touching fingers that follows. In his confession he even tells Christopher “we're not that different me and you”, comparing his own rage to his son's. Stephens refuses to make him a villain: the confession is full of pauses and broken sentences, and in the last scenes he tries to earn back trust through small, patient acts, a puppy called Sandy and a vegetable patch. Whether he deserves forgiveness is a question the play leaves to the audience.",
    },
    {
      name: 'Judy Boone',
      role: "Christopher's mother, alive and living in London with Roger Shears",
      body: "For most of Part One, Christopher believes Judy is dead. In Part One she appears in his memories, as on a beach in Cornwall coaxing him to touch her hand instead of screaming, and in her letters, which she speaks aloud while he builds his train set across the stage. The letters are honest about her failure and about how often she felt she could not cope, and they show that she is living in London with Roger. In Part Two she is shocked, loving and overwhelmed in turn, close to breaking before the scene moves on to Hampstead Heath, and in the end she borrows Roger's car and drives Christopher back to Swindon, where they live in one small rented room. Students often judge her harshly for leaving. A stronger answer sets that judgement against the courage of her honesty and the choice she makes at the end.",
    },
    {
      name: 'Mrs Shears',
      role: "Wellington's owner, and a neighbour of the Boones",
      body: "Mrs Shears, whom Ed calls Eileen, opens the play shouting at Christopher over her dead dog, and her anger makes him the first suspect. Ed's confession reveals that the two of them grew close after Judy left, that they quarrelled, and that she threw him out of her house on the night Wellington was killed. She has few lines, but she is the hinge between the two households: her husband, it seems, left her because of his affair with Judy, and her dog is the victim of Ed's rage. Her grief is easy to overlook. The play shows it to us in the first moment and then moves on, as Christopher does.",
    },
    {
      name: 'Roger Shears',
      role: "Mrs Shears's former husband, now living with Judy in London",
      body: "Christopher names Mr Shears his prime suspect because he is the only person Christopher knows who did not like Mrs Shears, and Ed's fury at the name, “That man is evil”, seems to confirm it. The truth is different: Roger's offence against the Boones was his affair with Judy. When Christopher arrives in London, soaked, Roger's first concern is whether Ed has come too, and he is plainly impatient with the boy. Stephens does not make him a monster, but he is the one adult with no bond to Christopher at all, which gives weight to Judy's decision to leave him. In the script's cast list the actor who plays Roger also plays Policeman One and other small parts, a reminder of how the ensemble works.",
    },
    {
      name: 'Mrs Alexander',
      role: 'A neighbour on Randolph Street',
      body: 'Mrs Alexander offers Christopher squash and Battenberg cake while he is knocking on doors, and she is the only neighbour who tries to hold a real conversation with him. She is also the one who tells him the secret his father has kept, that his mother and Mr Shears were very, very good friends, after first making him promise not to tell Ed. When he is about to leave for London she tries to keep him safe: she will not take Toby, and she suggests they ring his father. She is kind, but she is still a stranger to him: when he thinks through who might help him, he decides she is neither a friend nor family. Her position shows how alone Christopher is, and how much can depend on one decent neighbour.',
    },
    {
      name: 'Mrs Gascoyne',
      role: "The figure in authority at Christopher's school",
      body: "Mrs Gascoyne doubts that the school can let Christopher sit an A-level, since nobody there has ever done so, and she meets the full force of Ed's insistence. It is Mrs Gascoyne who wants a school play, the idea that opens Part Two. In the final scene Christopher reports that Ed has told her he will take Further Maths, and she simply says OK. Her small part charts how the adults' expectations of Christopher change, from what he cannot be allowed to do to what he plainly can.",
    },
    {
      name: 'Reverend Peters',
      role: "A clergyman who answers Christopher's questions and invigilates his A-level",
      body: "Christopher asks Reverend Peters where heaven is, and the answer, that it is another kind of place altogether, cannot satisfy a boy who thinks of the universe as something you could map. At the start of Part Two he volunteers to play a policeman in the school play, a comic reminder that the actors are also the people of Christopher's world, and it is he who invigilates Christopher's A-level. He represents a gentler kind of authority than the police: patient, a little absurd, and willing to be part of Christopher's story.",
    },
    {
      name: 'The ensemble',
      role: 'The company of actors who play everyone else, and the world itself',
      body: "The script asks that all actors remain on stage unless told otherwise, and its cast list groups the smaller parts by actor, so that one performer plays Policeman One, a Voice in the station, the neighbour Mr Thompson and Roger. The ensemble watch the scenes, wait to see who will speak, dismantle Christopher's house and build Swindon town centre, and become the roaring crowd of the station, speaking fragments of signs and announcements as the Voices. At the start of Part Two, when Christopher hides from his father, nobody on stage gives Ed a clue where he is. Stephens uses them to make Christopher's world visible: always watching him, always too full, and always being made up in front of us.",
    },
  ],

  keyQuotes: [
    {
      text: 'I do not tell lies.',
      where: "Siobhan, reading aloud from Christopher's book, Part One (p. 4)",
      analysis:
        "The first thing the audience learns about Christopher's mind is spoken by someone else. Siobhan reads the flat, absolute statement while Christopher stays silent, looking up at the policeman, so the claim is framed as writing, something he has made. The line sets up the play's central irony: the boy who cannot lie is surrounded by adults who do, and the rest of the play tests what honesty costs. The book also insists this is not goodness but inability, “It is because I can't tell lies”, which refuses the audience an easy, sentimental view of him.",
    },
    {
      text: "This is good, Christopher. It's quite exciting. I like the details.",
      where: 'Siobhan, commenting on the book as she reads it, Part One (p. 4)',
      analysis:
        "In the middle of reading, Siobhan steps out of Christopher's words and speaks as herself, a teacher responding to a pupil's writing. Stephens establishes at once that we are watching a story being told and received, not simply happening. Her praise of the details matters because the staging is built on them: moments later a policeman enters with the leaf on his shoe that the book has just described, as if the writing summons the scene. The line also shows Siobhan's warmth, and her role as Christopher's first audience.",
    },
    {
      text: "It's a bloody dog, Christopher, a bloody dog.",
      where: 'Ed, just after the police have let Christopher go, Part One (p. 12)',
      analysis:
        "Ed's repetition and his swearing show a man at the end of his patience, and to a first-time audience it sounds like ordinary parental exasperation. On a second viewing it sounds different: Ed killed Wellington, so his insistence that the dog does not matter is also self-protection. Christopher's reply, that he thinks dogs are important too, takes the words literally and morally at once. The gap between what Ed says and what he knows is the play's first dramatic irony, though the audience cannot see it yet.",
    },
    {
      text: "I don't always do what I'm told.",
      where: 'Christopher, to Siobhan, Part One (p. 14)',
      analysis:
        "A short, plain declarative that overturns any idea of Christopher as simply obedient or passive. He goes on to explain that instructions are usually confusing, since people say “Be quiet” without saying how long for, so his disobedience grows out of logic rather than rebellion. The line sets up everything he does next: he investigates against Ed's orders and later travels to London alone. It also prepares a moment that pays off in Part Two, when Judy tells him to be quiet and he asks her how long she needs him to be quiet for.",
    },
    {
      text: "It doesn't have a proper ending.",
      where: 'Christopher, to Siobhan, Part One (p. 26)',
      analysis:
        "After Ed forbids the investigation, Christopher tells Siobhan that his book is finished but unsatisfying, because the murderer is still at large. The line is metatheatrical: a character complains about the shape of the story we are watching. Stephens then gives it an ending Christopher did not plan, the letters and Ed's guilt. Look ahead to the final scene, which ends on a question rather than a neat resolution, and ask whether the play ever gives Christopher, or its audience, a proper ending.",
    },
    {
      text: "I love you very much, Christopher. Don't ever forget that.",
      where: 'Ed, after hitting Christopher, Part One (p. 36)',
      analysis:
        "Ed's declaration comes minutes after he has hit his son on the side of the head, and the imperative sounds almost like a plea. Stephens makes the moment public, since the stage direction has everybody else on stage watching what Ed says, so the audience is asked to weigh love against violence. Christopher's only answer is to ask where his book is, which shows how differently the two of them measure what has happened. The fan of touching fingers that follows is the play's image of how love can reach Christopher: on his terms, not his father's.",
    },
    {
      text: 'I was not a very good mother',
      where: 'Judy, in one of her letters, Part One (p. 44)',
      analysis:
        "Judy's letter is spoken aloud while Christopher builds his train set, and its plain admission is disarming. She blames herself, then almost blames him, wondering whether she might have been better at it if he had been different. That is honest in a way no one else in Part One manages, and it is hard to hear. A strong answer weighs both readings: Judy as the parent who walked away, and Judy as the parent who at least tells the truth about her failure, which Ed has not done.",
    },
    {
      text: 'I killed Wellington, Christopher.',
      where: 'Ed, confessing, Part One (p. 49)',
      analysis:
        "Ed has just promised to tell the truth from now on, and this is the truth he chooses to tell. After lines broken by pauses and hesitation, the short sentence and his son's name land like a blow. Stephens makes the confession both the solution to the detective story and the destruction of trust, because by Christopher's logic a man who killed a dog is dangerous. The irony is sharp: honesty, which the play values, arrives too late and in the wrong way, so that it frightens rather than heals.",
    },
    {
      text: 'Father had murdered Wellington. That meant he could murder me.',
      where: "Siobhan, reading Christopher's book, Part One (p. 50)",
      analysis:
        "Siobhan speaks this while Christopher, alone and folded into a ball, counts in powers of two until he gets stuck repeating the same number. The reasoning is chillingly simple: two short sentences in which the second follows from the first, as in a proof. It is not what Ed meant by confessing, but it is how Christopher processes it, and it drives the whole of Part Two. Setting the words in Siobhan's calm voice over his panicked counting lets the audience hear his logic and see his terror at the same time.",
    },
    {
      text: "It's a book and it's for me and not everybody, just for me",
      where: "Christopher, refusing Siobhan's idea of a play, Part Two (p. 53)",
      analysis:
        "Part Two opens by admitting that it is a performance. Siobhan asks whether the class can make a play out of Christopher's book, and he refuses, insisting the story is private. The irony is that the audience is watching the play he says he does not want. The line raises the question of who owns a story about someone like Christopher, and whether telling it in public is an act of respect or of exposure. In the final scene Siobhan tells him they turned it into a play and he says yes, which suggests his view has changed.",
    },
    {
      text: 'I see everything. Most other people are lazy.',
      where: 'Christopher, on the train to London, Part Two (p. 64)',
      analysis:
        "Christopher turns the usual view of him upside down: he is not missing information, everyone else is. He explains that most people only glance, while he takes in every detail, which is why a new place overwhelms him. Stephens stages the idea directly: as the company build the inside of the train around him, the Voices speak the few simple thoughts an ordinary passenger might have while looking out of the window at a field. The line invites the audience to see his difference as a way of perceiving, even a gift, as well as a difficulty, and it makes the audience's own lazy glancing part of the subject.",
    },
    {
      text: 'Christopher, I am just about holding this together.',
      where: 'Judy, at the flat, as the scene flows on to Hampstead Heath, Part Two (p. 88)',
      analysis:
        "Judy's line is a confession of strain rather than an order. The stage direction that follows is made of short, broken sentences, “She breaks. She cries.”, and then she leaves the room and comes back. The rhythm shows her losing and regaining control, and she returns with a small, practical kindness, an iced lolly. The scene shows the cost of caring for Christopher without making Judy a villain, and it echoes her letter's admission that she often felt she could not take any more.",
    },
    {
      text: 'I can because I went to London on my own.',
      where: 'Christopher, to Siobhan, in the final scene, Part Two (p. 101)',
      analysis:
        "Christopher answers Siobhan's cautious hope with evidence, like a mathematician proving a claim. The simple causal structure, I can because I did, turns his journey into proof of a future he has just listed: more A-levels, university, a flat with a garden. The achievements that follow are spoken in short declaratives, with Siobhan silently looking at him between them, which leaves the audience to judge. Many find the moment moving and hard-won; others hear a boy talking himself into confidence. Both readings can be argued from the text.",
    },
    {
      text: 'Does that mean I can do anything, do you think?',
      where: 'Christopher, the last line before the curtain call, Part Two (p. 102)',
      analysis:
        'The last line before the curtain call is a question, asked three times in slightly different forms; the second time he names Siobhan, as if asking her directly. Christopher, who has spent the play wanting facts, ends by asking for a reassurance nobody can give. Stephens does not let Siobhan answer: the two look at each other for a while and the lights go black. One reading is triumphant, a boy who has earned his confidence. The more convincing reading holds both: he has changed, and the future is genuinely open.',
    },
  ],

  extracts: [
    {
      title: 'The fight over the book',
      where: 'Part One, pages 34 to 36',
      pointer:
        'From Ed reading aloud from the book he has found (“When we were inside the park”) to the stage direction “They make their fingers and thumbs touch each other.”',
      summary:
        "Ed has found Christopher's book and reads out the passage in which Mrs Alexander tells him about his mother and Mr Shears. Furious that his son has been asking questions, Ed makes him repeat everything he was told not to do. Christopher claims he was only chatting. Ed grabs him, Christopher screams and punches him repeatedly, and Ed hits him on the side of the head so hard that Christopher is briefly unconscious. Ed leaves, returns without the book, and apologises while the whole company watches. Christopher asks only where his book is, and the scene ends with father and son touching their spread fingers together.",
      annotations: [
        {
          phrase: "Ed grabs Christopher's arm.",
          note: 'A short, active stage direction with no adverbs. The violence that follows is a string of equally plain sentences, so it feels sudden and hard to stop.',
        },
        {
          phrase: 'I need a drink.',
          note: 'Four words that reveal how Ed copes. He walks away from what he has done instead of facing it, and the audience notices he takes the book with him.',
        },
        {
          phrase: 'Everybody else on stage watches what he says.',
          note: "The ensemble become witnesses, and so the audience is made to judge Ed's apology too. It turns a private family moment into something public and uncomfortable.",
        },
        {
          phrase: 'I only do it because I worry about you',
          note: 'Ed explains his anger as love. The repeated “because” clauses in his speech sound like a man convincing himself as much as his son, which an essay can question.',
        },
        {
          phrase: 'They make their fingers and thumbs touch each other.',
          note: 'The fan gesture is touch that Christopher can bear, unlike the grab that made him scream. It is shared with Judy too, so it becomes a motif of how love must reach him.',
        },
      ],
      question:
        'Write about the relationship between Christopher and his father and how it is presented at different points in the play. Refer to this extract and to the play as a whole.',
    },
    {
      title: "Ed's confession",
      where: 'Part One, pages 46 to 51',
      pointer:
        "From the stage direction in which Christopher moves to the middle of his train track (page 46) to Siobhan's “I had to get out of the house.” (pages 50 to 51)",
      summary:
        "Having read his mother's letters, Christopher curls up in the middle of his train track, hitting the floor, and is sick. Ed comes home, sees the letters and understands. He tries not to cry, admits the lie about Judy and gently cleans Christopher up. Stephens cuts into the scene with Siobhan's test of a Smarties tube with a pencil inside. Then Ed promises to tell the truth from now on and confesses that he killed Wellington after a row with Mrs Shears. Left alone, Christopher counts in powers of two while Siobhan reads his conclusion that his father could murder him too.",
      annotations: [
        {
          phrase: 'Ed stops himself from crying.',
          note: "A stage direction that shows Ed's feeling through what he holds back. The actor must play the effort of control, and the audience sees his guilt before he speaks it.",
        },
        {
          phrase: 'It got out of control.',
          note: 'Ed describes his lie as if it happened to him rather than something he did. The vague pronoun lets him avoid admitting that he lied, which an alert audience will notice.',
        },
        {
          phrase: 'A pencil.',
          note: "Christopher's answer to what his father would think is in the tube shows he assumes others know what he knows. Placed here, it hints that he has never imagined Ed hiding anything.",
        },
        {
          phrase: 'I killed Wellington, Christopher.',
          note: 'The shortest, plainest sentence in a speech full of pauses. The detective story is solved in one line, and its solution destroys the trust Ed has just asked for.',
        },
        {
          phrase: '32768, 32768',
          note: 'The counting that usually calms Christopher gets stuck on one number. Stephens shows his mind jamming under shock without any character having to describe it.',
        },
      ],
      question:
        'Write about how the discovery of the truth is presented in this extract and at other points in the play.',
    },
    {
      title: 'The result and the final question',
      where: 'Part Two, pages 100 to 102',
      pointer:
        "From Siobhan's “It's your result, Christopher.” to the stage direction “Lights black.”",
      summary:
        'Siobhan gives Christopher an envelope, and he reads that he has an A. She asks about his dog and his father, and he talks about the vegetable patch Ed has planted and the maths book Ed has bought him. He then lays out his future: more A-levels, university in another town, a flat with a garden, becoming a scientist. When Siobhan says she hopes so, he gives his reasons, one achievement at a time. She tells him they turned his book into a play, and he asks her, three times, whether all this means he can do anything.',
      annotations: [
        {
          phrase: "It's the best result.",
          note: 'Christopher states it as a fact, not a feeling. Siobhan asks whether he is happy, and his literal answer shows his pride in a form other people can misread.',
        },
        {
          phrase: 'I can do these things.',
          note: "A short sentence that closes a long list of plans. The modal verb turns ambition into certainty, and Siobhan's cautious reply shows she is less sure.",
        },
        {
          phrase: 'We turned it into a play.',
          note: 'The metatheatrical frame closes: what we have watched is the school play made from his book. The line also shows Christopher accepting what he refused at the start of Part Two.',
        },
        {
          phrase: 'The two look at each other for a while.',
          note: 'Stephens refuses to answer the final question. The silent look, then blackout, hands the question to the audience, which is why the ending feels open rather than neat.',
        },
      ],
      question:
        'Explore the significance of the ending of the play. You must consider language, form and structure in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Narration spoken by another character',
      example:
        "Siobhan reads “I do not tell lies” from Christopher's book while he stays silent in front of the policeman (Part One, p. 4), and later speaks his conclusion that his father could murder him over the sound of his counting (p. 50).",
      effect:
        "Christopher's first-person voice is heard in someone else's mouth, so the audience experiences his thoughts and watches him at the same time. It also creates distance: his words become writing that other people read, judge and respond to, which prepares for the play's interest in who tells his story. At moments of crisis the calm reading voice set against his distress makes both more intense.",
    },
    {
      technique: 'Literal language and the rejection of metaphor',
      example:
        "Christopher's book says a metaphor “should be called a lie”, because people do not really have skeletons in their cupboards (Part One, p. 11).",
      effect:
        "His literalism is often funny, and Stephens lets the audience laugh with him rather than at him. It also links language to the theme of truth: for Christopher, saying what is not literally so is a kind of lying, which makes the adults' real lies all the more shocking. In an essay, connect his literal answers to the misunderstandings they cause with Ed and the police.",
    },
    {
      technique: 'Listing and repetition',
      example:
        "Siobhan narrates Christopher's search for his book room by room, sentence after sentence opening the same way: “Then I detected in the utility room” (Part One, p. 37).",
      effect:
        "The repeated sentence opening turns a search of an ordinary house into a methodical investigation, and builds suspense as the rooms run out and only Father's bedroom is left. The list of everyday objects he finds, under the bed and in the drawers, delays the discovery, so the shirt box lands with more force.",
    },
    {
      technique: 'Short declarative sentences',
      example:
        '“I found my mother. I was brave.” (Christopher, Part Two, p. 102), one of a series of short statements in the final scene.',
      effect:
        "Each achievement is stated as a plain fact, like a line in a proof, which suits Christopher's way of thinking and gives the ending its quiet force. The simplicity lets the audience feel the size of what lies behind each sentence, the journey, the letters, the fear, without any character having to spell it out.",
    },
    {
      technique: 'Repetition with variation',
      example:
        "The final question is asked three times: first with “do you think”, then with Siobhan's name, then with neither (Part Two, p. 102).",
      effect:
        'The repetition turns a question into a plea. Each version is slightly more direct, and because Siobhan does not answer, the silence grows with each one. It is the most important structural choice in the ending: the play closes on uncertainty rather than triumph.',
    },
    {
      technique: 'Stage directions as language',
      example:
        "“She breaks. She cries.” (Judy, Part Two, p. 88); “Ed grabs Christopher's arm.” (Part One, p. 35).",
      effect:
        "Stephens writes his stage directions in short, present-tense sentences that read almost like Christopher's own style. They carry much of the emotion the characters cannot say. Quote them as you would dialogue: examiners on both boards credit analysis of how stage directions present character.",
    },
    {
      technique: 'Contrasting registers',
      example:
        "Ed's colloquial “I know I lose my rag occasionally” (Part One, p. 36) set against Christopher's exact “fifteen years and three months and two days” (p. 5).",
      effect:
        'Ed speaks in idioms, slang and swearing, the very figurative language Christopher finds confusing, while Christopher speaks with precision. The clash of registers is a clash of worlds, and it explains many of their misunderstandings. It also makes Ed sound ordinary and human, which is why the audience finds him hard to condemn.',
    },
    {
      technique: 'Numbers as a language of feeling',
      example:
        'Christopher counts prime numbers to himself after slipping away from a policeman on the London train (Part Two, p. 66) and counts in powers of two after the confession, sticking on “32768, 32768” (Part One, p. 50).',
      effect:
        'Numbers do the work that emotional language does for other characters: they show calm, fear and breakdown. The audience learns to read his state from the counting, so when the sequence jams the effect is more disturbing than any description of panic would be.',
    },
    {
      technique: 'A fragmented soundscape',
      example:
        'At Swindon station the Voices speak scraps of signs and notices, such as “Warning CCTV in operation.” (Part Two, p. 57), and at Paddington they crowd in again while Christopher chants left and right to keep himself walking (pp. 69 to 71).',
      effect:
        'The station is written as noise rather than scenery, so the audience hears what Christopher hears: too much information, none of it organised. As the voices pile up the language itself becomes the obstacle he has to cross.',
    },
  ],

  structureForm: [
    {
      heading: 'Two parts and a postscript',
      body: "Part One (pages 3 to 52) is the investigation: the dead dog, the questioning of neighbours, the fight, the discovery of the letters and Ed's confession. It ends with Christopher's mother's address repeated like a chant, until Judy joins in and the light falls. Part Two (pages 53 to 102) is the journey to London, the return to Swindon, the exam and the result. The Postscript (pages 103 to 106) comes after the curtain call, when Christopher returns to explain his maths question. The mystery is solved at the exact midpoint, which tells you what the play thinks matters: not who killed the dog, but what the truth does to a family.",
    },
    {
      heading: 'A book read aloud',
      body: "Much of Christopher's first-person narration is spoken by Siobhan, but not all of it and not only by her. Sometimes other characters answer the book as it is spoken: in the passage about becoming an astronaut (pages 24 to 25), Ed breaks in to reply. Ed reads from it in anger (page 34), and Judy speaks most of her letters (pages 43 to 47), though Siobhan speaks lines of them too. Siobhan also comments on the book as she reads. The effect is that the audience always knows it is hearing a text: Christopher's account of events, which other people receive, question and use. When you write about narration, name who is speaking and why that choice matters at that moment.",
    },
    {
      heading: 'A play about making a play',
      body: "Part Two opens with Siobhan asking whether the class can make a play out of Christopher's book, and Reverend Peters volunteering to be a policeman. From then on the audience is watching, in effect, the school's production of the book. Near the end Siobhan suggests he save the maths for after the curtain call, and in the final scene she tells him “We turned it into a play.” This is metatheatre: the play draws attention to itself as a performance. One reading is that it honours Christopher as the author of his own story; another is that it asks whether a private life should be made into public entertainment. Either way, it gives the ending a second layer.",
    },
    {
      heading: 'The ensemble and a bare stage',
      body: "The script's opening note says all actors remain on stage unless told otherwise, and the cast list groups small parts by actor, so the same performer may play a policeman, a Voice and Roger. The company watch the action, wait to see who will speak first, dismantle Christopher's house and build Swindon town centre, and become the crowd at the station. Nothing on stage is fixed; the world is made and unmade around Christopher. This is where the original production's physical theatre, by Frantic Assembly, took the script's hints furthest, but even in the text the ensemble are a way of showing a world that is always watching him and always too full.",
    },
    {
      heading: 'Scenes that run into one another',
      body: "The opening note also says that “Scenes run into one another without interruption”, whatever the changes of place, time or chronology. So memories break into the present: Ed's story of Judy's death arrives in the middle of Christopher's talk with Siobhan (pages 12 to 15), a Cornwall beach memory interrupts the build-up to the fight (pages 33 to 34), and Siobhan's Smarties-tube test is set inside the scene of Ed's confession (pages 48 to 49). A room becomes Hampstead Heath with no break at all (page 88). The structure imitates the way thought moves, and it lets Stephens place a memory exactly where it will mean most.",
    },
    {
      heading: 'A detective story turned inside out',
      body: "The play borrows the shape of a murder mystery: a body, a suspect, a detective who questions witnesses and names a prime suspect, Mr Shears. But the solution comes from the detective's own home, and the killer is his father. After that the genre changes. Stephens has called the book “a road story”, and Part Two is exactly that: a quest across a country and a city to find a lost parent. Tension in Part One comes from secrets; in Part Two it comes from the journey itself, from noise, crowds and danger. An essay on structure can argue that the change of genre mirrors Christopher's change from observer to actor.",
    },
    {
      heading: 'An ending that asks rather than answers',
      body: 'The last scene is quiet: an envelope, a result, a conversation about a dog and a vegetable patch. It builds to a list of achievements and then to the question asked three times, with no answer before the lights go black. Only after the curtain call does Christopher return, on his own terms, to explain his maths. So the play has two endings: an open emotional one, and a closed logical one, a proof that can be completed. The contrast is worth arguing about. It suggests that some things can be proved and others, like the future and like trust, cannot.',
    },
  ],

  vocabulary: [
    {
      term: 'Adaptation',
      definition:
        "A new version of a work in a different form. Stephens's play adapts Haddon's novel, so its words, order of events and staging are his choices, and you should quote the play, not the novel.",
    },
    {
      term: 'Metatheatre',
      definition:
        'Moments when a play draws attention to itself as a play, as when Siobhan proposes turning the book into a school play, or tells Christopher at the end that they did.',
    },
    {
      term: 'Play-within-a-play',
      definition:
        "A performance staged inside another. Part Two is framed as the school's production of Christopher's book, so the audience watches a play about the making of the play.",
    },
    {
      term: 'Narrator',
      definition:
        "A voice that tells the story. Here the narration is Christopher's first-person book, spoken aloud mostly by Siobhan, sometimes by Christopher, Ed or Judy.",
    },
    {
      term: 'Ensemble (the company)',
      definition:
        'The group of actors who stay on stage and play many roles, voices and even parts of the set. In this play they also watch the action like an audience.',
    },
    {
      term: 'Doubling',
      definition:
        "One actor playing more than one part. The play's cast list groups parts by actor, so the actor who plays Roger also plays Policeman One.",
    },
    {
      term: 'Stage directions',
      definition:
        'The instructions in a script about action, movement and staging. Stephens writes them in short present-tense sentences that carry much of the emotion, so they can be quoted and analysed.',
    },
    {
      term: 'Physical theatre',
      definition:
        "Theatre that tells a story through movement and bodies as much as words. The original production used movement direction by Frantic Assembly to show Christopher's world from inside.",
    },
    {
      term: 'Soundscape',
      definition:
        'A layered composition of sounds and voices. At the stations the Voices speak fragments of signs and announcements to create the noise Christopher experiences.',
    },
    {
      term: 'Motif',
      definition:
        'A recurring image or action that carries meaning. The fan of spread fingers, shared with both Ed and Judy, is a motif of how love can reach Christopher.',
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the audience knows or later realises something a character does not. Ed's early insistence that Wellington does not matter becomes ironic once we know he killed the dog.",
    },
    {
      term: 'Literal language',
      definition:
        'Words meant exactly as they are said. Christopher takes language literally and distrusts metaphor, which he thinks should be called a lie.',
    },
    {
      term: 'Caution',
      definition:
        'A formal police warning given instead of a charge. Christopher receives one for hitting a policeman, and it hangs over his investigation.',
    },
    {
      term: 'Invigilate',
      definition:
        "To supervise an exam. Reverend Peters invigilates Christopher's A-level maths; in London, Christopher insists he must go back to Swindon because the exam has been arranged and Reverend Peters is going to invigilate.",
    },
    {
      term: 'Quod erat demonstrandum',
      definition:
        'Latin words written at the end of a mathematical proof to show that what was to be proved has been proved. Christopher uses them to close his explanation in the Postscript.',
    },
    {
      term: 'Coming-of-age story',
      definition:
        'A story about a young person growing towards independence and self-knowledge. The play can be read as one, though its open final question complicates a simple happy ending.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Stephens present the relationship between Christopher and his father in the play? You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a relationship (the Edexcel International GCSE style)',
        guidance: [
          'Open with an argument, not a summary: for example, that Stephens presents a relationship in which love and damage are tangled together, and in which trust has to be rebuilt through actions rather than words.',
          'Begin with Ed as protector in Part One: his warning to leave the dog alone, his fight with Mrs Gascoyne for the A-level, and his colloquial, affectionate register. Show that the early scenes already contain dramatic irony, because Ed killed Wellington.',
          'Analyse the fight and apology (pages 34 to 36): the plain stage directions of the violence, the ensemble watching Ed apologise, Christopher asking for his book, and the fan of fingers as touch he can bear.',
          "Analyse the confession (pages 48 to 50): Ed's broken, paused speech, the promise to tell the truth, the short confession, and the way Siobhan's reading of Christopher's conclusion turns honesty into terror.",
          'Trace the rebuilding in Part Two: the puppy, Sandy, the vegetable patch and Ed telling Mrs Gascoyne about Further Maths, and argue whether the play forgives Ed, or only shows him beginning to earn trust.',
          'Use the open book well: find two or three precise moments quickly, quote briefly, and spend your time on analysis rather than copying.',
        ],
      },
      {
        question:
          'Explore the significance of Siobhan in the play. You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a character and on dramatic form',
        guidance: [
          "Argue that Siobhan matters as much for the play's form as for its story: she is Christopher's teacher, his reader and the audience's guide.",
          'Analyse the opening (pages 3 to 6): she reads his book aloud, then comments on it as herself, “This is good, Christopher”, so the audience learns at once that it is watching a story being told.',
          "Show her honesty with him, in contrast to his parents' lies, and explore how her calm reading voice is set against his distress, for example over his counting after the confession.",
          'Discuss her role in Part Two: her voice guiding him through the underpass with an imaginary red line, and her proposal to make the book into a play, which frames everything that follows.',
          'End with the final scene: her careful hope, her silent looks, the news that they turned it into a play, and her refusal to answer his last question. Argue what that silence means.',
        ],
      },
      {
        question:
          "Use the opening of the play (Part One, pages 3 to 6, from the dead dog to Christopher's arrest) as your extract. Write about Christopher and how he is presented at different points in the play. In your response you should refer to the extract and the play as a whole, and show your understanding of characters and events in the play.",
        skill: 'Extract and whole-play response on a character (the Eduqas style)',
        guidance: [
          'Start with the extract and stay close to it for the first third of your answer: the stage direction of Christopher frozen beside the dog, his exact answers to the policeman, and his screaming and hitting out when he is lifted by the arm.',
          'Comment on how the opening presents him through two voices at once: Siobhan reading “I do not tell lies” from his book while he stays silent, so we hear his mind and watch his body.',
          "Move to key points in the play as a whole: his defiance, “I don't always do what I'm told”, his reaction to the letters and the confession, and his journey to London.",
          "Show how he changes by the end: the final scene's short declaratives about what he has achieved, and the open question he asks Siobhan.",
          'Use short, remembered quotations and stage directions, since the Eduqas exam is closed book, and write accurately, because spelling, punctuation and grammar are credited in this question.',
        ],
      },
      {
        question:
          'Use Part Two, pages 56 to 67, from Christopher finding Swindon station to the policeman losing track of him on the London train, as your extract. Write about fear and how it is presented at different points in the play. In your response you should refer to the extract and the play as a whole, and show your understanding of characters and events in the play.',
        skill: 'Extract and whole-play response on a theme (the Eduqas style)',
        guidance: [
          'Define the kind of fear the play is interested in: less fear of danger than fear of disorder, noise, crowds, touch and change.',
          "Analyse the extract: the Voices' overlapping fragments, the policeman who grabs him and makes him scream, his speech about seeing everything, and the counting of primes that keeps him calm.",
          'Link to Part One: his terror after the confession, where the counting breaks down, and his reasoning that his father could murder him.',
          "Include other characters' fear: Ed afraid of losing his son, Judy afraid she cannot cope, and argue that fear is what makes the adults lie.",
          'Conclude with courage: fear is what Christopher overcomes, and his claim in the final scene that he was brave only means something because the play has shown how frightened he was.',
        ],
      },
      {
        question:
          'Explore how Stephens uses the ensemble and the staging to show how Christopher experiences the world. You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on dramatic form',
        guidance: [
          "Start with the script's opening note that all actors remain on stage and that scenes run into one another, and explain what kind of theatre this asks for.",
          'Analyse the ensemble as watchers, as the Voices of the station and as the builders of the set, dismantling the house and making Swindon town centre around him.',
          'Discuss how memories are staged inside present scenes, such as the Smarties test inside the confession, and argue that the structure imitates the way Christopher thinks.',
          'Show how the staging creates sympathy and understanding by making the audience hear the station as noise, rather than telling them he finds it hard.',
          'Evaluate: does this approach risk making Christopher a spectacle, or does it treat his perception with respect? Give your view and support it.',
        ],
      },
    ],
    tips: [
      'Write about a play. Name who speaks the narration, quote stage directions, and mention the ensemble. Answers that treat the text as the novel, or call Siobhan simply a character, miss what examiners on both boards credit.',
      "Quote the play's words, not the novel's. Christopher calls his parents Father and Mother, and some lines students remember from the novel do not appear in the play.",
      'Do not diagnose Christopher. The play never names a condition, and neither should you; write about how he is presented, what he says and does, and how the staging shows his way of seeing.',
      'Keep Ed complicated. The strongest essays neither excuse nor simply condemn him: they show love and harm in the same scenes, and they argue about whether the ending forgives him.',
      "Use the ending. The final question and Siobhan's silence are the play's most important structural choice, and almost any theme essay can finish there.",
      'Know the metatheatre. Part Two opens with the idea of a school play and ends with Siobhan saying they made one; mentioning this frame, with its effect, lifts an answer above plot.',
      'For the Edexcel International GCSE open-book paper, know where key moments are in your clean copy so you can find them fast. For Eduqas, learn a bank of short quotations, including stage directions, and start with the printed extract.',
      'Context is not what these sections reward. Spend your time on the play: its language, its structure and its staging.',
    ],
  },

  modelAnswer: {
    question:
      'How does Stephens present the relationship between Christopher and his father in the play? You must consider language, form and structure in your answer.',
    paragraph:
      "Stephens presents the relationship between Christopher and Ed as one in which love and damage are tangled together, and he does it as much through staging as through words. In the fight over the book the stage directions are brutally plain, “Ed grabs Christopher's arm.”, and the short, active sentences move from grabbing to shaking to hitting without pause, so the violence feels sudden and impossible to stop. Yet within a page Ed says “I love you very much, Christopher. Don't ever forget that.” The imperative is almost desperate, as if Ed knows an apology may not be enough, and Christopher's only reply, “Where's my book?”, shows that what matters to him is the loss, not the words. Stephens makes the moment public, since “Everybody else on stage watches what he says”, so the audience becomes a kind of jury, weighing love against a blow. The scene ends with their spread fingers touching, a way of making contact that Christopher can bear, where grabbing made him scream. Because the same gesture returns with Judy in London, it suggests that Stephens sees parental love as real but useless unless it learns to reach Christopher on his terms, which is exactly what Ed has to do, slowly, with Sandy and the vegetable patch at the end.",
    commentary: [
      'It opens with an argument that answers the question directly, love and damage tangled together, and says how Stephens presents it: through staging as well as words.',
      'Each quotation is short, exact and followed at once by analysis of its language: the plain stage-direction sentences, the imperative, the literal reply.',
      'It treats the text as drama. The ensemble watching and the fan gesture are analysed as theatrical choices with an effect on the audience, which is what form means in a play.',
      'It links one scene to the structure of the whole play, the gesture returning with Judy and the rebuilding with Sandy at the end, so the paragraph builds an argument across the text rather than retelling one moment.',
      'It offers a judgement, that love is real but useless unless it adapts, and keeps it as interpretation, which is the informed personal engagement examiners reward.',
    ],
  },

  timeline: [
    {
      where: 'Part One, pp. 3-6',
      title: 'Seven minutes after midnight',
      summary:
        "Christopher stands over Wellington, Mrs Shears's dog, killed with a garden fork. Mrs Shears shouts at him, Siobhan opens his book and reads its first sentences, and when a policeman tries to lift him by the arm Christopher hits him and is arrested.",
      setting: "Mrs Shears's front lawn in Swindon, just after midnight",
      who: ['Christopher Boone', 'Mrs Shears', 'Siobhan', 'The ensemble'],
      quote: 'I do not tell lies.',
      themes: ['Truth and lies', 'Stories and who tells them'],
      tension: 4,
      significance:
        "Sets up the mystery, the book and the play's double voice, with Siobhan speaking Christopher's own words.",
    },
    {
      where: 'Part One, pp. 6-12',
      title: 'The police station and a warning',
      summary:
        "At the police station Christopher refuses to hand over his watch and screams when the sergeant tries to take it. Ed arrives, Christopher is given a caution, and Ed tells him to keep out of other people's business. Christopher announces that he will find out who killed Wellington.",
      setting: 'Swindon police station, then home',
      who: ['Christopher Boone', 'Ed Boone', 'The ensemble'],
      quote: "It's a bloody dog, Christopher, a bloody dog.",
      themes: ['Family and parenting', 'Independence and bravery'],
      tension: 3,
      significance:
        "Ed's order to leave it alone becomes the rule Christopher breaks, and the first hint that Ed has something to hide.",
    },
    {
      where: 'Part One, pp. 12-17',
      title: 'A memory of Mother',
      summary:
        "Siobhan reads Christopher's account of coming home two years earlier to an empty house, and Ed telling him his mother had gone into hospital and then that she had died of a heart attack. Christopher tells Siobhan he is investigating even though Father told him not to.",
      setting: "School, and Christopher's memory of his home two years before",
      who: ['Christopher Boone', 'Siobhan', 'Ed Boone'],
      quote: "I don't always do what I'm told.",
      themes: ['Truth and lies', 'Family and parenting'],
      tension: 2,
      significance:
        "Plants Ed's biggest lie inside a memory, so the audience hears the story Christopher believes before it learns the truth.",
    },
    {
      where: 'Part One, pp. 17-26',
      title: 'Detective work on the street',
      summary:
        "Christopher knocks on his neighbours' doors, meets Mrs Alexander and names Mr Shears his prime suspect. Ed fights Mrs Gascoyne for Christopher's right to sit A-level maths, then explodes when he learns Christopher has been in Mrs Shears's garden, and the investigation is stopped.",
      setting: "Randolph Street, Swindon, and Christopher's school",
      who: ['Christopher Boone', 'Mrs Alexander', 'Ed Boone', 'Mrs Gascoyne', 'Siobhan'],
      quote: "It doesn't have a proper ending.",
      themes: ['Independence and bravery', 'Family and parenting', 'Stories and who tells them'],
      tension: 3,
      significance:
        "Shows Ed as his son's fiercest champion and the person shutting the investigation down, in the same few pages.",
    },
    {
      where: 'Part One, pp. 27-31',
      title: "Mrs Alexander's secret",
      summary:
        'Christopher talks with Mrs Alexander again and they walk to the park, where she makes him promise not to tell his father, then reveals that his mother and Mr Shears were very close before, as Christopher believes, she died. On stage, Ed starts watching their conversation.',
      setting: "The street and the park near Christopher's home",
      who: ['Christopher Boone', 'Mrs Alexander', 'Ed Boone'],
      themes: ['Truth and lies'],
      tension: 3,
      significance:
        'The first adult to tell Christopher a hidden truth is a neighbour, not a parent.',
    },
    {
      where: 'Part One, pp. 32-36',
      title: 'The book, the fight and the fan',
      summary:
        "A memory of his mother on a beach in Cornwall is cut into the moment when Ed finds Christopher's book and reads aloud what Mrs Alexander said. Ed grabs him, Christopher punches him, and Ed hits him on the side of the head. Ed returns without the book, apologises, and they touch hands in a fan.",
      setting: "The Boones' house",
      who: ['Christopher Boone', 'Ed Boone', 'Judy Boone', 'Siobhan', 'The ensemble'],
      quote: "I love you very much, Christopher. Don't ever forget that.",
      themes: ['Family and parenting', 'Truth and lies'],
      tension: 5,
      significance:
        "Ed's violence and tenderness in one scene; the missing book drives the search that follows.",
    },
    {
      where: 'Part One, pp. 37-47',
      title: 'The shirt box and the letters',
      summary:
        "Siobhan narrates Christopher's room-by-room search for his book. In Father's bedroom he finds it in a shirt box with forty-three letters addressed to him in the same handwriting. As Judy speaks her letters aloud, Christopher builds his train set across the stage.",
      setting: "Ed's bedroom",
      who: ['Christopher Boone', 'Siobhan', 'Judy Boone'],
      quote: 'I was not a very good mother',
      themes: ['Truth and lies', 'Family and parenting'],
      tension: 4,
      significance:
        "Mother is alive: the investigation turns from a dead dog to the family's hidden past.",
    },
    {
      where: 'Part One, pp. 46-52',
      title: 'Confession and escape',
      summary:
        "Christopher curls up on his train track, sick and hitting the floor. Ed finds him, admits the lie about Judy and cleans him up; promising to tell the truth from now on, he confesses that he killed Wellington. Terrified, Christopher decides to leave, and Part One ends with his mother's address repeated.",
      setting: "The Boones' house, that evening",
      who: ['Christopher Boone', 'Ed Boone', 'Siobhan', 'Judy Boone'],
      quote: 'Father had murdered Wellington. That meant he could murder me.',
      themes: ['Truth and lies', 'Independence and bravery', 'Order, patterns and fear'],
      tension: 5,
      significance:
        'The mystery is solved at the midpoint, and the solution turns the detective story into a story of flight.',
    },
    {
      where: 'Part Two, pp. 53-56',
      title: 'A play, a rat and a cash card',
      summary:
        "Siobhan asks whether the class can make a play of Christopher's book, and he refuses. He hides from Ed, asks Mrs Alexander to look after Toby, takes Ed's cash card and leaves, as the company take the house apart and build Swindon town centre.",
      setting: "School, then the Boones' house and street",
      who: [
        'Christopher Boone',
        'Siobhan',
        'Mrs Gascoyne',
        'Reverend Peters',
        'Mrs Alexander',
        'Ed Boone',
        'The ensemble',
      ],
      quote: "It's a book and it's for me and not everybody, just for me",
      themes: ['Stories and who tells them', 'Independence and bravery'],
      tension: 3,
      significance:
        'Part Two admits it is a performance, and the set becomes something the company builds around Christopher.',
    },
    {
      where: 'Part Two, pp. 56-67',
      title: 'Swindon station and the London train',
      summary:
        "Christopher finds the station, which becomes a storm of signs and announcements spoken by the Voices. A policeman questions him, and Siobhan's voice guides him through the underpass. The policeman catches him on the London train and grabs him, and Christopher screams; later he slips away and counts prime numbers to himself as the policeman finds him gone.",
      setting: 'Swindon railway station and the train to London',
      who: ['Christopher Boone', 'Siobhan', 'The ensemble'],
      quote: 'I see everything. Most other people are lazy.',
      themes: ['Difference and ways of seeing', 'Order, patterns and fear'],
      tension: 4,
      significance:
        "The audience is placed inside Christopher's senses: the world arrives as he experiences it.",
    },
    {
      where: 'Part Two, pp. 67-76',
      title: 'Paddington and the Underground',
      summary:
        'Through Paddington and into the Underground the noise grows until Christopher can barely walk, and he keeps going by chanting left, right to himself. When Toby escapes onto the track, Christopher climbs down after him, and a stranger pulls him back to the platform.',
      setting: 'Paddington Station and the London Underground',
      who: ['Christopher Boone', 'The ensemble'],
      themes: ['Independence and bravery', 'Order, patterns and fear'],
      tension: 5,
      significance:
        'The height of his bravery: the most frightening place in the play is where he acts to save something he loves.',
    },
    {
      where: 'Part Two, pp. 77-92',
      title: '451c Chapter Road',
      summary:
        "Soaked and exhausted, Christopher reaches his mother's flat and tells her Father said she was dead. Judy howls. A London policeman comes and Judy promises not to let him be taken away; when Ed arrives to apologise, Christopher holds him off with his knife. Life with Judy and Roger soon breaks down, and Judy borrows Roger's car and drives Christopher back to Swindon.",
      setting: "Judy and Roger's flat in Willesden, and Hampstead Heath",
      who: ['Christopher Boone', 'Judy Boone', 'Roger Shears', 'Ed Boone', 'The ensemble'],
      quote: 'Christopher, I am just about holding this together.',
      themes: ['Family and parenting', 'Truth and lies'],
      tension: 4,
      significance:
        'Finding his mother does not end the story: it shows how hard caring for Christopher is, and that Judy was lied about too.',
    },
    {
      where: 'Part Two, pp. 93-102',
      title: 'The exam, Sandy and the result',
      summary:
        "Reverend Peters invigilates Christopher's A-level. Ed tells him he is proud of him and gives him a golden retriever puppy called Sandy. Siobhan hands him his result, an A, and he lists what he has done before asking her whether it means he can do anything.",
      setting: "Swindon: the school, and Ed's house",
      who: ['Christopher Boone', 'Reverend Peters', 'Ed Boone', 'Judy Boone', 'Siobhan'],
      quote: 'Does that mean I can do anything, do you think?',
      themes: ['Independence and bravery', 'Family and parenting', 'Stories and who tells them'],
      tension: 2,
      significance:
        'The play ends on a question rather than an answer, and reveals that what we have watched is the play they made.',
    },
    {
      where: 'Postscript, pp. 103-106',
      title: 'After the curtain call',
      summary:
        'After the bows, Christopher returns to the stage for anyone who wants to stay and explains, step by step, how he answered a question in his maths exam, proving that a triangle with sides of a certain form is right-angled.',
      setting: 'The stage, after the curtain call',
      who: ['Christopher Boone'],
      themes: ['Order, patterns and fear', 'Stories and who tells them'],
      tension: 1,
      significance:
        'Christopher gets the last word in his own language, mathematics, and on his own terms.',
    },
  ],

  relationships: [
    {
      from: 'Christopher Boone',
      to: 'Ed Boone',
      kind: 'son and father',
      note: 'Protective love and repeated lies. Broken by the confession, rebuilt slowly at the end through small acts: a puppy, a vegetable patch, time.',
    },
    {
      from: 'Christopher Boone',
      to: 'Judy Boone',
      kind: 'son and mother',
      note: 'Believed dead for two years, then found alive in London. Her honesty about failing him and her choice to take him home reshape the relationship.',
    },
    {
      from: 'Christopher Boone',
      to: 'Siobhan',
      kind: 'pupil and teacher',
      note: 'The steadiest relationship in the play. She reads his book, guides him and receives his result, but she is not his parent, and he knows it.',
    },
    {
      from: 'Ed Boone',
      to: 'Judy Boone',
      kind: "Christopher's separated parents",
      note: 'Their arguments over how to care for Christopher drove them apart. By the end they live apart but share his care.',
    },
    {
      from: 'Judy Boone',
      to: 'Roger Shears',
      kind: 'partners',
      note: "The affair Mrs Alexander reveals. In London the strain of Christopher living with them breaks it, and Judy leaves in Roger's car.",
    },
    {
      from: 'Ed Boone',
      to: 'Mrs Shears',
      kind: 'close friends, then enemies',
      note: 'She helped Ed after Judy left. After a row she threw him out, and in his rage he killed her dog.',
    },
    {
      from: 'Roger Shears',
      to: 'Mrs Shears',
      kind: 'former husband and wife',
      note: 'Mr Shears left her, it seems because of his affair with Judy, which is why Christopher thinks he is the prime suspect.',
    },
    {
      from: 'Ed Boone',
      to: 'Roger Shears',
      kind: 'rivals',
      note: 'Ed calls him evil and bans his name from the house; Roger is relieved when he hears Ed is not in London.',
    },
    {
      from: 'Christopher Boone',
      to: 'Mrs Alexander',
      kind: 'neighbours',
      note: 'A kind stranger who tells him the truth his father hid, and tries to keep him safe before he leaves for London.',
    },
    {
      from: 'Ed Boone',
      to: 'Mrs Gascoyne',
      kind: 'parent and school',
      note: "Ed battles her for Christopher's right to sit an A-level; by the end she agrees to Further Maths without a fight.",
    },
    {
      from: 'Christopher Boone',
      to: 'Reverend Peters',
      kind: 'pupil and invigilator',
      note: 'His answer about where heaven is cannot satisfy Christopher, but he supervises the exam that proves what Christopher can do.',
    },
  ],

  compareWith: [
    {
      title: 'Kindertransport',
      href: '/revision/texts/kindertransport',
      reason:
        'Another 4ET1 modern drama text about a child separated from a parent, a hidden past found in old papers, and a journey to a new home, with memories staged alongside the present.',
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        "Set by both 4ET1 and Eduqas: a family's secrets are uncovered one by one, and the play ends on a moment that unsettles rather than resolves.",
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        "Also on the Eduqas drama list, with a Narrator who speaks to the audience and frames the story, a useful comparison with Siobhan's reading voice.",
    },
    {
      title: 'A Taste of Honey',
      href: '/revision/texts/a-taste-of-honey',
      reason:
        'An Eduqas drama text about a mother who struggles to cope and a child who has to grow up fast, with the same refusal to make the parent simply a villain.',
    },
  ],

  contentGuidance: ['violence', 'mortality', 'intimate_relationships'],

  quotesFromElsewhere: ['using Siobhan as a narrator', 'a novel about difference', 'a road story'],

  sources: [
    {
      label:
        'The play, Methuen Drama Critical Scripts schools edition (A&C Black/Bloomsbury, 2013, ISBN 9781408185216, one of the two editions Pearson prescribes and the edition Eduqas names), Google Books search-within, 26 September 2026: exact wording, speaker labels and page numbers of every quotation, the character list and opening note (page 2), and the Part One, Part Two and Postscript page numbers (3, 53, 103)',
      url: 'https://books.google.com/books?id=NcVLAQAAQBAJ',
    },
    {
      label:
        'The same edition as an ePDF (ISBN 9781408185407), Google Books search-within: the final page (102), which the paperback record does not return',
      url: 'https://books.google.com/books?id=YXZvAAAAQBAJ',
    },
    {
      label:
        'The play, Methuen Drama Modern Plays edition (A&C Black, 2012, ebook ISBN 9781408173367), Google Books search-within: second check of wording, and confirmation that it prints the play on the same pages as the Critical Scripts edition',
      url: 'https://books.google.com/books?id=W_O5wKqohjwC',
    },
    {
      label:
        "Eduqas GCSE English Literature Component 2 question papers, which print the play verbatim: specimen (Christopher and Ed after the police station), June 2017 (Ed finds Christopher after the letters), June 2018 (Judy's letter), June 2019 (the final scene), October 2020 (arrival at Chapter Road), June 2023 (Judy and the A-level), June 2024 (the search for the book), June 2025 (the fight over the book); with their mark schemes",
      url: 'https://www.physicsandmathstutor.com/past-papers/gcse-english-literature/eduqas-component-2/',
    },
    {
      label:
        'Eduqas, Component 2 Section A: Post-1914 Prose/Drama guidance (closed-book texts, extract questions, timing)',
      url: 'https://www.eduqas.co.uk/media/qatnaki2/component-2-section-a-post-1914-prose-drama.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) specification, Issue 3, August 2025: modern drama list, open-book Component 2, clean-copy rule, prescribed editions',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label: 'Pearson 4ET1 Paper 2 question paper, June 2024 (question style)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-que-20240521.pdf',
    },
    {
      label:
        "Pearson 4ET1 Paper 2 examiners' reports, June 2024 and January 2025 (bravery, Ed as a father, honesty)",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-pef-20250123.pdf',
    },
    {
      label:
        'AQA GCSE English Literature 8702/2 question paper, June 2023 (confirms AQA also sets the play)',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-QP-JUN23-CR.PDF',
    },
    {
      label:
        'The play, Dramatists Play Service acting edition (New York, 2015), Internet Archive search-inside: cross-check of the opening and the final lines only; its wording differs from the British text in places',
      url: 'https://archive.org/details/curiousincidento0000step',
    },
    {
      label:
        'National Theatre, production page: performed 24 July to 27 October 2012 in the Cottesloe Theatre',
      url: 'https://www.nationaltheatre.org.uk/productions/the-curious-incident-of-the-dog-in-the-night-time/',
    },
    {
      label:
        'National Theatre, Staging The Curious Incident: creative team, and the move from an in-the-round space to a proscenium arch theatre in the West End',
      url: 'https://www.nationaltheatre.org.uk/learn-explore/schools/teacher-resources/staging-curious-incident/',
    },
    {
      label:
        'National Theatre, interview with Marianne Elliott (education resource PDF): advice taken, Christopher as an individual character',
      url: 'https://images.nationaltheatre.org.uk/uploads/2022/12/nt_learning_curious_marrianne_elliott_interview.pdf',
    },
    {
      label:
        'Frantic Assembly, production page: movement direction by Scott Graham and Steven Hoggett; seven Olivier Awards including Best New Play',
      url: 'https://www.franticassembly.co.uk/productions/the-curious-incident-of-the-dog-in-the-night-time',
    },
    {
      label:
        'Northern Soul, interview with Simon Stephens: transcribing the direct speech, Siobhan as narrator, the book as a road story, Stephens and Elliott from Stockport',
      url: 'https://www.northernsoul.me.uk/curious-incident-interview-simon-stephens/',
    },
    {
      label:
        "Mark Haddon, 'asperger's & autism' (blog post): no research beyond Swindon and Paddington stations, regret at the cover label, a novel about difference",
      url: 'http://markhaddon.com/blog/aspergers-autism',
    },
    {
      label:
        'Wikipedia, The Curious Incident of the Dog in the Night-Time (play): Apollo transfer March 2013, ceiling collapse December 2013, Gielgud 2014, Broadway 2014, 2013 Oliviers and 2015 Tony Award for Best Play; the Cottesloe staging in the round',
      url: 'https://en.wikipedia.org/wiki/The_Curious_Incident_of_the_Dog_in_the_Night-Time_(play)',
    },
    {
      label:
        'Wikipedia, The Curious Incident of the Dog in the Night-Time (novel): published 2003 by Jonathan Cape; Whitbread Book of the Year',
      url: 'https://en.wikipedia.org/wiki/The_Curious_Incident_of_the_Dog_in_the_Night-Time',
    },
  ],
}
