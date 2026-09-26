import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Of Mice and Men, John Steinbeck (1937). A supplement: the existing page at
 * /revision/texts/of-mice-and-men keeps its overview, context, themes,
 * characters, key quotations and essay material, and this file adds the close
 * reading, language, structure, vocabulary and exam practice it lacked, with the
 * timeline and character map for the animations.
 *
 * HOW THE QUOTATIONS WERE CHECKED (25 September 2026). The novel is in UK
 * copyright and no licensed copy is held in src/data/full-texts, so every
 * quotation here was checked word for word against three scans of the published
 * text on the Internet Archive: the Penguin Classics edition (introduction by
 * Susan Shillinglaw; its text is the Viking Compass edition of 1963), the World
 * Publishing Company edition of 1947, and a third digital copy. A quotation is
 * used only where the Penguin text and at least one other agree. Attribution
 * (speaker and chapter) was read from the passage itself, not from any guide.
 *
 * WHERE THE EDITIONS DISAGREE, NOTHING IS QUOTED. The Penguin text has "The
 * silence came into the room" in Chapter 3 where the 1947 edition has "come";
 * Slim's "if I got old" in the Penguin is "if I get old" in the others; Candy's
 * "four years ago" is "four year ago" in one; Slim's "Godlike" eyes are
 * "God-like" in 1947. None of those lines is quoted.
 *
 * CORRECTIONS TO THE PAGE ABOVE, recorded so that the next editor fixes them
 * there rather than here:
 * - A heron does NOT kill a water snake in Chapter 1. In Chapter 1 a heron flies
 *   off when the men arrive and a water snake swims unharmed. Only in Chapter 6
 *   does a heron take a snake, and a second snake then escapes. structureForm
 *   and the Chapter 6 extract below say so.
 * - "I want you to stay with me, Lennie." is George's line in Chapter 1. In
 *   Chapter 6 he says "I want you to stay with me here.", and his last words
 *   before the shot are "Sure, right now. I gotta. We gotta."
 * - Curley's line in Chapter 3 is "Come on, ya big bastard." Candy's is "I
 *   ought to of shot that dog myself, George." (not "oughtta").
 * - "Tell about the rabbits, George" does not occur in that form. George's
 *   Chapter 1 complaint runs "so easy and so nice"; Curley's wife says she
 *   "can't talk to nobody but Curley"; Slim's "whole damn world" has "damn".
 * - The main page renders no model paragraph, so native.modelAnswer points at
 *   /extract-walkthrough, the only page that has one. That paragraph quotes
 *   "tell about the rabbits, George" as Lennie's last words (not in the text),
 *   and the same page's line 25 puts a heron eating a snake in the opening
 *   pages. Both need fixing there.
 *
 * FACT-CHECKED 26 September 2026, independently of the writer: every quotation
 * and attribution re-read in context in the Penguin Classics scan, with the 1947
 * World edition and the digital copy as second and third witnesses; the plot
 * read chapter by chapter against the summaries, timeline and relationships;
 * the Penguin introduction for the 1936 letter, the working title, Soledad, the
 * itinerant workers and the stage and film dates; the 4ET1 specification
 * (Issue 3) and the June 2024 Paper 1R mark scheme for the exam facts. Fixed
 * then: Candy's money (three hundred and fifty of a six-hundred-dollar price,
 * not enough to buy outright), who is present in three scenes, the moment of
 * the fish simile, Crooks taunting rather than warning, Whit's Friday joke,
 * Slim's authority, and several readings that had been stated as facts.
 *
 * COPYRIGHT. The novella is about 29,700 words, so under fair-dealing.ts it is a
 * long work: no quotation over 14 words, and 400 words at most on the page.
 * Phrases in the prose are, wherever possible, parts of quotations already used
 * on a scene card or in an extract note, so that they add nothing to the total.
 * Racial slurs spoken by characters are described, never printed.
 */
export const guide: StudyGuide = {
  slug: 'of-mice-and-men',
  title: 'Of Mice and Men',
  author: 'John Steinbeck',
  form: 'novella',
  scope:
    'The whole novella, in six chapters, as set for Pearson Edexcel International GCSE English Literature (4ET1), Component 1, Section C (Modern Prose). That paper is closed book, so no edition is prescribed; Pearson recommends the Penguin Red Classics edition of 2006. References here are by chapter and moment rather than page, so they work in any copy.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© John Steinbeck 1937. First published in the USA by Covici-Friede and in Great Britain by William Heinemann in 1937; published in the UK by Penguin Books. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 29700,
    basis:
      'Counted from two independent scans of the published text on the Internet Archive, from the first sentence of Chapter 1 to the last line of Chapter 6, by a plain space-separated word count: the Penguin Classics edition gives 29,703 words, a second digital copy 29,681 (recounted on 26 September 2026). The Penguin introduction and the chapter headings are excluded.',
  },

  native: {
    overview: '/revision/texts/of-mice-and-men',
    context: '/revision/texts/of-mice-and-men',
    themes: '/revision/texts/of-mice-and-men',
    characters: '/revision/texts/of-mice-and-men',
    keyQuotes: '/revision/texts/of-mice-and-men',
    // The main page renders no model paragraph; the only one is on this sub-page,
    // and it is flagged in the header below for correction there.
    modelAnswer: '/revision/texts/of-mice-and-men/extract-walkthrough',
  },

  extracts: [
    {
      title: 'Candy’s dog',
      where: 'Chapter 3, the bunk house on Friday evening',
      pointer:
        'From Carlson coming in, turning on the second light and complaining that Candy’s old dog stinks, to the single shot in the distance and every head turning towards Candy. Whit’s interruption about a letter printed in a pulp magazine falls in the middle, and is part of the effect.',
      summary:
        'Carlson argues that Candy’s old, stiff, nearly blind sheepdog should be shot, and offers to do it himself with his Luger. Candy pleads that he has had the dog since it was a pup and looks to Slim for support; Slim agrees with Carlson, and Candy gives in. Carlson leads the dog out into the dark. George and Whit try to start a game of cards and cannot. For minutes the men make awkward small talk and fall silent again, until a shot sounds outside. Candy rolls over and faces the wall.',
      annotations: [
        {
          phrase: 'He ain’t no good to you, Candy.',
          note: 'Carlson judges the dog purely by its use. The same test is waiting for Candy, who lost a hand on this ranch and fears being thrown out when he can no longer work, so the reader hears a verdict on the old man as well as on the animal.',
        },
        {
          phrase: 'Slim’s opinions were law',
          note: 'Once Slim sides with Carlson the argument is over. Power on the ranch works here not through the boss but through the respect of the men, and Steinbeck shows that respect being used to end a life, however calmly.',
        },
        {
          phrase: 'He did not look down at the dog at all.',
          note: 'Candy’s grief is shown through what he refuses to do. There is no interior thought, only a gesture, which is the method of a play script: the reader has to supply the feeling, and feels it more for doing so.',
        },
        {
          phrase: 'And the silence lasted.',
          note: 'A short sentence that seems to last as long as the wait itself. The narrator describes nobody’s feelings; the silence becomes the event, and the men’s failed attempts at cards and small talk only stretch it further.',
        },
        {
          phrase: 'It came out of the night and invaded the room.',
          note: 'Personification: the silence is an intruder from outside, like the death being carried out in the dark beyond the door. It is an unusually figurative sentence for a narrator who mostly describes plainly, which is why it lands.',
        },
        {
          phrase: 'Every head turned toward him.',
          note: 'The shot gets one plain sentence; what the narrator dwells on is its effect on the watchers. The men look at Candy because they know what they have done to him, so the scene is about shared guilt as much as about the dog.',
        },
      ],
      question:
        'How does Steinbeck present Candy and the other men in this passage? Go on to explore how the killing of the dog prepares the reader for the end of the novel.',
    },
    {
      title: 'Crooks and Lennie in the harness room',
      where: 'Chapter 4, Crooks’s room off the barn, Saturday night',
      pointer:
        'From Lennie appearing silently in Crooks’s open doorway to Crooks’s speech about the hundreds of men he has seen with land in their heads, just before Candy’s voice answers from the barn. Read the chapter’s opening description of the room with it.',
      summary:
        'With most of the men gone into town, Lennie wanders into Crooks’s room. Crooks orders him out, explaining that he is kept out of the bunk house because he is black, and then lets him stay. Realising that Lennie will not repeat anything, he talks freely. He torments Lennie with the idea that George might never come back, backs off when Lennie turns threatening, and admits that he was really talking about his own loneliness. He remembers his childhood on his father’s chicken ranch, then scorns the dream of land.',
      annotations: [
        {
          phrase: 'I ain’t wanted in the bunk house',
          note: 'Crooks states his exclusion as plain fact, without self-pity, and then turns it on Lennie by shutting him out in return. Steinbeck shows how being excluded teaches the excluded to exclude.',
        },
        {
          phrase: 'a mauled copy of the California civil code for 1905',
          note: 'From the opening description of the room. Crooks owns a battered book of the state’s laws, and they do nothing to protect him here. One reading is bitter irony; another is that it shows a proud man who knows he has rights and cannot use them.',
        },
        {
          phrase: 'Crooks’ face lighted with pleasure in his torture.',
          note: 'An uncomfortable sentence. Steinbeck refuses to make Crooks a saintly victim: loneliness and humiliation have made him cruel, and the one man weaker than him becomes his target. The reader is asked to understand the cruelty without excusing it.',
        },
        {
          phrase: 'A guy goes nuts if he ain’t got nobody.',
          note: 'The centre of the passage and arguably of the whole novella. The double negative and the plain slang give it the weight of speech rather than argument, and it comes from the man with most reason to know.',
        },
        {
          phrase: 'a little piece of land in his head',
          note: 'Crooks has watched the same dream arrive and leave with every worker. Placing the land inside a man’s head rather than under his feet turns it into a fantasy, and the rest of the novel proves him right.',
        },
        {
          phrase: 'Just like heaven.',
          note: 'Crooks compares the dream to heaven: longed for by everyone and reached by nobody. The religious comparison widens the passage from one ranch to a whole culture’s hope, and it is one of the bleakest judgements in the book.',
        },
      ],
      question:
        'How does Steinbeck present Crooks’s loneliness in this passage, and how does it connect with the loneliness of other characters in the novel?',
    },
    {
      title: 'The pool at the end',
      where: 'Chapter 6, the opening paragraphs',
      pointer:
        'The opening paragraphs of Chapter 6, from its first sentence to Lennie kneeling to drink at the pool’s edge, before he begins to talk to himself. Read them beside the first two paragraphs of Chapter 1.',
      summary:
        'Late in the afternoon the pool is still and shaded while the sunlight climbs the slopes of the Gabilan mountains. A water snake swims up the pool to a heron standing in the shallows, and the heron seizes and swallows it. A gust of wind passes and dies. The heron waits, and a second small snake swims up. Then Lennie comes silently out of the brush, the heron flies off down the river, and the second snake escapes into the reeds.',
      annotations: [
        {
          phrase: 'The deep green pool of the Salinas River was still',
          note: 'The chapter’s first words echo the novella’s first sentence, where the river runs deep and green. The return tells the reader at once that the story has come full circle, and, when Lennie arrives, that he has done exactly what George told him to.',
        },
        {
          phrase: 'A silent head and beak lanced down',
          note: 'The heron is reduced to a head and a beak, a weapon striking without a sound, and lanced is a spear’s action. Steinbeck places a killing in nature just before the killing the chapter is moving towards.',
        },
        {
          phrase: 'motionless and waiting',
          note: 'After the first kill the heron simply waits for the next snake. Nature has no malice here and no pity. One reading is that the human world of the novel works the same way, taking the powerless one after another.',
        },
        {
          phrase: 'as silently as a creeping bear moves',
          note: 'The bear image from Chapter 1 returns, but now Lennie moves silently instead of heavily: he has learned to hide. The simile makes him both a hunted animal and, to the men searching for him, a dangerous one.',
        },
        {
          phrase: 'The little snake slid in among the reeds',
          note: 'The second snake escapes because Lennie’s arrival scares the heron away. It is easily missed, and it complicates the pattern: a small moment of chance mercy that makes what follows, when there is no escape for Lennie, harder to bear.',
        },
      ],
      question:
        'How does Steinbeck use the setting at the start of Chapter 6 to prepare the reader for the ending? Refer to the opening of Chapter 1 in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Animal imagery for Lennie',
      example:
        'Chapter 1: Lennie walks “the way a bear drags his paws” and drinks “snorting into the water like a horse”. In Chapter 6 he arrives “as silently as a creeping bear moves”.',
      effect:
        'Lennie is described through animals again and again, and rarely from the inside. The imagery stresses his strength and his innocence at once, since an animal cannot be wicked. It also shows how the world sees him: Crooks taunts him that without George he would be tied up “with a collar, like a dog”, and the novella ends with Lennie shot as Candy’s dog was shot. The unsettling reading is that the imagery prepares us to accept that ending; the sympathetic one is that it makes the killing an act of care towards someone the law would treat as a beast. Both deserve a place in an answer.',
    },
    {
      technique: 'Dialect and non-standard grammar',
      example:
        'Candy, Chapter 3: “I ought to of shot that dog myself, George.” Lennie’s part of the dream in Chapter 1: to “live off the fatta the lan’”.',
      effect:
        'Steinbeck writes the men’s speech as it sounds, with dropped letters, double negatives and words run together. It is realism, and arguably respect too, because these voices are given the novel’s most important lines. Candy’s grammar breaks down but his meaning is exact: the mistake was letting a stranger do it, and many readers see George acting on that lesson in Chapter 6. The run-together phrase for the farm echoes the Book of Genesis (45:18), where Pharaoh promises Joseph’s family the fat of the land, so the men’s dream borrows, without knowing it, the language of a promised land.',
    },
    {
      technique: 'Repetition and refrain',
      example:
        'In Chapter 1 George tells the dream “as though he had said them many times before”, and Lennie knows the responses. In Chapter 6 Lennie asks him once more: “Tell how it’s gonna be.”',
      effect:
        'The dream is a ritual, closer to a prayer or a bedtime story than a plan, and both men know their parts. Repetition builds comfort for the characters and dread for the reader, because every telling brings nearer the last one. In Chapter 6 George tells it to keep Lennie looking away across the river. The most comforting words in the book become the means of the killing, and that double function is the ending’s whole horror and tenderness.',
    },
    {
      technique: 'Colour symbolism: red',
      example:
        'Chapter 2: “Her fingernails were red.”, and Curley’s wife’s mules carry “red ostrich feathers”. In Chapter 3 George tells Slim that the girl in Weed wore “a red dress”.',
      effect:
        'Red marks Curley’s wife as the men see her: dangerous, sexual, a warning sign. It also ties her to Weed, so the colour quietly predicts what will happen when Lennie touches something soft that belongs to a woman. A careful answer adds that the red is her own choice, a costume in a place with nothing else to look at, and that the novel later shows the lonely girl beneath it.',
    },
    {
      technique: 'Light, shade and the end of the day',
      example:
        'Chapter 2: as Curley’s wife appears, “the rectangle of sunshine in the doorway was cut off”. Chapter 6, before the shot: “The shadow in the valley was blue and soft.”',
      effect:
        'Steinbeck times his scenes by the light. Most chapters move from daylight towards dusk or dark, and the last two carry the reader from afternoon light into evening. Curley’s wife enters the story by blocking the sun, a sign that the men will see her as trouble. The fading light of Chapter 6 is a quiet, almost gentle image for a death. This is pathetic fallacy without storms: an ordinary evening for ordinary men, which makes the ending feel like something that simply happens.',
    },
    {
      technique: 'Foreshadowing',
      example:
        'In Chapter 3 Carlson says the way to shoot Candy’s dog is “right in the back of the head”. In Chapter 6 George shoots Lennie in exactly that place, with Carlson’s own Luger.',
      effect:
        'The novella is built from rehearsals: a dead mouse, drowned puppies, the dog, Lennie’s puppy, Curley’s wife. Each death is larger than the last, so the end feels inevitable rather than sudden. The dog scene matters most, because Candy’s regret can be read as giving George the terrible logic he follows. This is tragedy built by pattern, which is why readers so often feel they saw the ending coming and still hoped it would not arrive.',
    },
    {
      technique: 'An echoed simile',
      example:
        'Chapter 3: as Lennie catches his fist, “Curley was flopping like a fish on a line”. Chapter 5: as Lennie shakes Curley’s wife, “her body flopped like a fish”.',
      effect:
        'The same image at the two moments in the novel when Lennie’s strength overwhelms a person links them on purpose. Both times Lennie acts in panic and cannot let go, so the simile shows the reader what he cannot understand: how little effort his strength needs. A fish on a line is caught and helpless, and the echo makes the second scene, which Steinbeck keeps brief, far more shocking than the first.',
    },
    {
      technique: 'Time slowed and stopped',
      example:
        'Chapter 5, after the death: “a moment settled and hovered”, sound and movement stop, and “the meanness and the plannings and the discontent” leave Curley’s wife’s face.',
      effect:
        'This is the novella’s most openly lyrical writing, saved for this moment. The narrator stops the clock, like a stage tableau. The list joined by and (polysyndeton) strips away, one by one, everything the men judged her by, until her face is “sweet and young”. One reading is that she is only allowed to be seen as a person once she can no longer speak; another is that the narrator gives her the tenderness the ranch never did. The first is more uncomfortable; decide which you find more convincing, and say why.',
    },
    {
      technique: 'Heightened, royal language for Slim',
      example:
        'Chapter 2: Slim moves “with a majesty only achieved by royalty and master craftsmen” and is “the prince of the ranch”.',
      effect:
        'Hyperbole like this is rare in the novella’s plain narration, so it marks Slim at once as the ranch’s moral authority. That matters at the end, when his verdict is the one the reader is invited to trust. Yet the same man drowned four of the new puppies and agreed that Candy’s dog should die. His authority is the ranch’s code of necessity, calm and unsentimental, and a thoughtful answer can question it as well as admire it.',
    },
    {
      technique: 'Names and namelessness',
      example:
        'Curley’s wife is never given a name. Crooks is known by a name that matches the crooked back Candy describes in Chapter 2. On meeting Lennie Small, Carlson jokes that he is not small at all.',
      effect:
        'Names on the ranch are labels given by others. Curley’s wife exists only as a possession, even Slim’s dog Lulu has a name, and Crooks is reduced to his injury. Lennie’s surname is an irony Carlson notices and jokes about. The pattern tells the reader that identity here is granted by the powerful, which is why George and Lennie’s habit of calling each other by name, over and over, sounds like an act of care.',
    },
  ],

  structureForm: [
    {
      heading: 'A novel written like a play',
      body: 'In an April 1936 letter to his agents, quoted in the introduction to the Penguin edition, Steinbeck called the book a “playable novel”: written so that it could be staged almost as it stands, with chapters for curtains. You can see the method on every page. Each of the six chapters is a single scene in a single place: the pool, the bunk house twice, Crooks’s room, the barn, and the pool again. Each opens with a descriptive paragraph that works like a stage direction and then moves almost entirely into dialogue. The narrator seldom enters anyone’s mind, so the reader watches like an audience and judges people by what they say and do. A stage version opened on Broadway on 23 November 1937 and won the New York Drama Critics’ Circle award, and a film followed in 1939.',
    },
    {
      heading: 'The pool at both ends',
      body: 'The novella begins and ends at the same pool on the Salinas River, the place George told Lennie in Chapter 1 to come and hide in the brush if he ever got into trouble. The structure is circular: after three days nobody has moved forward, and the dream is further away than when it was first told. Read the wildlife closely, because it is often misremembered. In Chapter 1 a heron flies off when the men arrive, and a water snake swims across the pool “like a little periscope”, unharmed. Only in Chapter 6 does a heron catch and swallow a water snake, and a second snake then escapes when Lennie scares the heron away. The difference between the two scenes is the point: the peaceful evening of the opening has become a place where the weak are taken.',
    },
    {
      heading: 'Three days: the time scheme',
      body: 'The action is squeezed into a long weekend. The men start work at Friday noon (in Chapter 3 Whit laughs that “ya come on a Friday”, when a man who only wants to look a ranch over arrives on Saturday afternoon and eats free until Monday), Chapter 4 tells us “It was Saturday night.” and Chapter 5 “It was Sunday afternoon.” Chapter 1 must therefore be the Thursday evening and Chapter 6 the Sunday evening. In that time the dream goes from a story to a sum of money to nothing. The speed is part of the tragedy: there is no time for anything to change, and every scene pushes towards the barn on Sunday.',
    },
    {
      heading: 'Hope rises, and is struck down',
      body: 'The plot has a repeated rhythm: the dream grows more possible, and violence follows at once. In Chapter 3 Candy’s savings suddenly bring the farm within reach, and within minutes Curley attacks Lennie. In Chapter 4 Crooks offers to work on the farm for nothing but his keep, then Curley’s wife arrives and humiliates him, and he withdraws the offer with “Jus’ foolin’.” In Chapter 5 Candy comes into the barn with fresh plans and finds her body. Each high point is placed directly before a fall, so the reader learns to fear good news. One reading is that the structure argues what Crooks says outright: the dream exists to be lost.',
    },
    {
      heading: 'A chain of deaths',
      body: 'Deaths in the novella come in rising order, each a rehearsal for the next: the dead mouse Lennie has broken by stroking it (Chapter 1), the four puppies Slim drowns because their mother cannot feed them all (Chapter 2), Candy’s dog (Chapter 3), Lennie’s own puppy and then Curley’s wife (Chapter 5), and Lennie (Chapter 6). The first four are animals, so the pattern trains the reader to see the last two in the ranch’s own terms, as creatures that are weak or no longer useful. The dog is the hinge. Candy tells George, “I ought to of shot that dog myself, George.” In Chapter 6 George does not leave Lennie to strangers, and he uses Carlson’s Luger.',
    },
    {
      heading: 'Chapters 1 and 6 mirror each other',
      body: 'The last chapter replays the first. Both begin with a description of the pool and the mountains in the late light of the day; in both Lennie offers to go and live alone in a cave, and George refuses; in both George recites the dream. In Chapter 1 he answers the offer with “I want you to stay with me, Lennie.” In Chapter 6 he says “I want you to stay with me here.” The first line is often misquoted as George’s last words before the shot. They are not: his last words to Lennie are “Sure, right now. I gotta. We gotta.”, an answer to Lennie’s plea to get the farm now which also means the thing George has to do. That double meaning is the ending in miniature.',
    },
    {
      heading: 'An ending that refuses to explain',
      body: 'The final words go to Carlson, who has understood nothing: “Now what the hell ya suppose is eatin’ them two guys?” Ending on incomprehension leaves the judgement with the reader, who knows what the ranch does not. The Penguin introduction records that Steinbeck’s original title was “Something That Happened”, a phrase that refuses to blame, and the narrator never tells us whether George did right. Slim’s “You hadda, George.” offers one verdict; Carlson’s question shows how little the world will notice. The strongest answers weigh both rather than treating Slim’s words as the author’s.',
    },
  ],

  vocabulary: [
    {
      term: 'Bindle',
      definition:
        'A blanket roll holding a worker’s few belongings, carried on the back. George unslings his at the pool in Chapter 1. Bindle stiff, the insult Curley’s wife throws at the men in Chapter 4, means a tramp who carries one.',
    },
    {
      term: 'Itinerant worker',
      definition:
        'A labourer who moves from job to job following seasonal work. The Penguin introduction notes that for decades before 1930 California’s wheat and fruit were largely harvested by such men, mostly single. George’s Chapter 1 speech about men who blow their stake and move on describes them.',
    },
    {
      term: 'Stake',
      definition:
        'A sum of money saved up to start something. Most ranch hands work up a stake and spend it in town; George and Lennie mean to keep theirs for the farm.',
    },
    {
      term: 'Swamper',
      definition:
        'A cleaner and odd-job man. It is Candy’s work, given to him after he lost his hand working on this ranch.',
    },
    {
      term: 'Jerkline skinner',
      definition:
        'A mule driver who controls a whole team with a single line to the lead animals. Slim is one, able to drive as many as twenty mules, and it is the skill behind his standing on the ranch.',
    },
    {
      term: 'Bucking barley',
      definition:
        'Lifting and loading heavy sacks of grain. George and Lennie are hired as buckers, work the boss says needs no brains at all.',
    },
    {
      term: 'Stable buck',
      definition:
        'The ranch’s name for its stable hand, which is Crooks’s job. The men use the title in place of his name, as in the shouts for him in Chapter 2.',
    },
    {
      term: 'Harness room',
      definition:
        'The small shed leaning off the barn wall where harness is kept and mended. Crooks sleeps there, apart from the white men in the bunk house.',
    },
    {
      term: 'Canned',
      definition:
        'Sacked from a job. Candy expects to be canned as soon as he can no longer do his work, and George fears the fight with Curley will get them canned.',
    },
    {
      term: 'Solitaire',
      definition:
        'A card game for one player. George lays out solitaire again and again at the bunk-house table, a small, repeated image of the solitude the novella is about.',
    },
    {
      term: 'Soledad',
      definition:
        'The real town nearest the ranch, in California’s Salinas Valley. Its name is Spanish for solitude, a meaning the Penguin introduction points out.',
    },
    {
      term: 'Weed',
      definition:
        'A real town in northern California, where George and Lennie last worked. They fled it after Lennie took hold of a girl’s dress and would not let go, and a party of men set out to lynch him.',
    },
    {
      term: 'Luger',
      definition:
        'A semi-automatic pistol. Carlson owns one, uses it on Candy’s dog, and finds it missing from his bag after Curley’s wife is found; in Chapter 6 it is George who has it.',
    },
    {
      term: 'Golden Gloves',
      definition:
        'A set of American amateur boxing competitions. Whit says Curley reached the finals, which explains Curley’s readiness to pick fights with bigger men.',
    },
    {
      term: 'Lynching',
      definition:
        'Killing by a mob, without a trial. The men of Weed set out to lynch Lennie; Curley’s wife threatens Crooks with it; Candy fears Curley will want Lennie lynched.',
    },
    {
      term: 'The American Dream',
      definition:
        'The belief that anyone in America can build a better life by hard work. Pearson’s own mark scheme credits the phrase to the historian James Truslow Adams, in 1931.',
    },
    {
      term: 'Novella',
      definition:
        'A work of fiction longer than a short story and shorter than a novel. At about 30,000 words Of Mice and Men is one, and its compression is part of its power.',
    },
    {
      term: 'Foreshadowing',
      definition:
        'Hints of what will happen later. The dead mouse, the Weed story, Candy’s dog and the puppy all foreshadow the deaths at the end.',
    },
    {
      term: 'Microcosm',
      definition:
        'A small world that stands for a larger one. The ranch, with its owner, workers, a black stable hand and a lonely woman, can be read as a microcosm of 1930s American society and its hierarchy.',
    },
    {
      term: 'Tragedy',
      definition:
        'A story in which a sympathetic character is destroyed by forces including their own nature. Lennie’s strength and his love of soft things are what bring him down, which is why the ending feels tragic rather than merely cruel.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore how Steinbeck presents loneliness in Of Mice and Men. In your answer, refer to the context of the novel.',
        skill:
          'Whole-text essay: close knowledge of the novel, critical style, informed personal response and context',
        guidance: [
          'Open with an argument, not a definition: for example, that loneliness is the condition of almost everyone on the ranch, and that the novella shows it being made by how these men work and live rather than by anyone’s character.',
          'Start with George’s speech in Chapter 1 about ranch hands who have no family and belong nowhere, and show how the friendship is defined against it. Link it to the itinerant workers, mostly single men, who harvested California’s crops.',
          'Take the outsiders one at a time, each isolated for a different reason: Candy by age and injury, Crooks by race, Curley’s wife as the only woman on the ranch. Give each one short, exact quotation, such as Crooks’s “A guy goes nuts if he ain’t got nobody.”',
          'Show that loneliness makes people cruel as well as sad: Crooks tormenting Lennie, Curley’s wife threatening Crooks. This is where a strong answer moves beyond sympathy.',
          'Use setting and detail: the name of Soledad, George’s games of solitaire, Crooks’s room apart from the bunk house.',
          'End with Chapter 6. As George walks away with Slim, is he less alone than before or more? Give your own judgement and a reason for it.',
        ],
      },
      {
        question:
          'How does Steinbeck present the importance of dreams in Of Mice and Men? In your answer, refer to the context of the novel.',
        skill:
          'Whole-text essay: close knowledge of the novel, critical style, informed personal response and context',
        guidance: [
          'State a view at once: for example, that the dream keeps the men going and is also what makes the ending unbearable, because Steinbeck lets it come within reach.',
          'Explain the farm dream through its ritual retelling in Chapter 1, and how George and Lennie share the lines between them.',
          'Trace the moment in Chapter 3 when Candy’s money makes it real: “This thing they had never really believed in was coming true.”',
          'Compare the other dreams: Crooks’s offer to join them and its withdrawal, Curley’s wife’s hopes of the movies, even Curley’s pride in his boxing, which ends with his crushed hand. Each is broken or abandoned.',
          'Bring in context: the American Dream, the Great Depression and its effect on working men’s hopes, and the title’s source in Robert Burns’s poem To a Mouse, about carefully laid plans that go wrong.',
          'Conclude on George’s admission in Chapter 5, “I think I knowed we’d never do her.” Was the dream ever possible, or was believing in it the point? You might argue that Lennie is the only one who dies still believing.',
        ],
      },
      {
        question:
          'Explore the significance of Curley’s wife in Of Mice and Men. In your answer, refer to the context of the novel.',
        skill:
          'Whole-text essay: close knowledge of the novel, critical style, informed personal response and context',
        guidance: [
          'Argue from the start that Steinbeck shows her first as the men see her and only later as she sees herself, and that the order matters.',
          'Chapter 2: her entrance blocking the light, the red nails and feathered mules, and George’s instant hostility. Ask how much of this is her and how much is the men’s view of her.',
          'Chapter 4: her threat to Crooks. Do not excuse it; explain it. She is powerless everywhere except over the one man the ranch ranks below her by race.',
          'Chapter 5: her confession to Lennie about the film career she believes she lost, and her loneliness two weeks into her marriage: “You can talk to people, but I can’t talk to nobody but Curley.”',
          'Context: the narrow choices open to young women in 1930s America, marriage as an escape, Hollywood as the dream of escape, and the fact that she is never named.',
          'End on her place in the plot. Her death destroys the dream, but decide whether Steinbeck blames her, as Candy does over her body, or the ranch that left her with nobody to talk to.',
        ],
      },
      {
        question:
          'Explore the ways in which Steinbeck presents power and powerlessness on the ranch. In your answer, refer to the context of the novel.',
        skill:
          'Whole-text essay: close knowledge of the novel, critical style, informed personal response and context',
        guidance: [
          'Map the hierarchy: the boss and his son Curley at the top, Slim by respect, the ordinary hands below, and then Candy, Crooks, Curley’s wife and Lennie.',
          'Distinguish kinds of power: the boss’s is economic, since he can sack anyone; Curley’s is inherited and violent; Slim’s rests on respect, and his word is taken on any subject. Even Curley backs down from him in Chapter 3.',
          'Analyse how the powerless turn on each other, above all in Chapter 4, when Curley’s wife’s threat leaves Crooks shrinking against the wall.',
          'Use Candy’s dog and Candy’s fear that he too will be thrown away when he is no longer useful.',
          'Context: the Depression, workers with no job security, the racism of the time, and the threat of lynching that hangs over Crooks and later over Lennie.',
          'Finish with Lennie, the strongest man on the ranch and one of the least powerful. That paradox deserves a paragraph of its own.',
        ],
      },
      {
        question:
          'Explore how Steinbeck presents the friendship between George and Lennie. In your answer, refer to the context of the novel.',
        skill:
          'Whole-text essay: close knowledge of the novel, critical style, informed personal response and context',
        guidance: [
          'Argue that the friendship is both a burden and the only thing either man has, and that Steinbeck never lets the reader forget either side.',
          'Chapter 1: George’s outburst about how easy life would be without Lennie, followed at once by his shame, and then the dream they tell together.',
          'Chapter 3: George’s confession to Slim about the cruel joke at the Sacramento River, and Slim’s observation that hardly any men travel together.',
          'Context: hands were hired for a month or so and then moved on alone, as Slim describes, which is why the boss in Chapter 2 suspects George of taking Lennie’s pay. He cannot imagine any other reason for the care.',
          'The ending: George tells the dream once more and shoots Lennie before Curley’s men can reach him. Weigh the readings: mercy, as Slim’s “You hadda, George.” suggests; a lesson learned from Candy; or the failure of a world with no place for Lennie.',
          'Give your own judgement, and show that you have weighed the alternative.',
        ],
      },
    ],
    tips: [
      'This is a closed-book paper: you will not have the novel in the exam. Learn a bank of short quotations, five to ten words each, for every major character and theme, and learn them exactly. An accurate short phrase is worth more than a paraphrased speech.',
      'Check famous lines against the text before you learn them. George says “I want you to stay with me, Lennie.” in Chapter 1, not before the shot, and Curley’s wife says she “can’t talk to nobody but Curley”: the last two words matter.',
      'Pearson’s published mark scheme for the June 2024 paper (4ET1, Paper 1R) shows one Of Mice and Men question on the American Dream and one on the relationship between Curley and his wife. Expect a theme, a character or a relationship, traced across the whole novel.',
      'Context should work as evidence inside your argument. The Depression explains why Candy is terrified of losing his job and why Curley’s wife has so few ways out; it does not need a paragraph of dates.',
      'Do not call George and Lennie Dust Bowl migrants. They are ranch hands who have worked their way round California, and George tells Slim they were both born in Auburn. Steinbeck wrote about the Dust Bowl families separately, in The Grapes of Wrath (1939).',
      'Keep the narrator’s view and the characters’ views apart. Slim, Candy and Crooks each judge the ending or the dream; Steinbeck rarely does. When you say what the novel suggests, name the method that suggests it: a description, an echo, the placing of a scene.',
      'Write about the violence precisely and briefly. What earns credit is understanding why Curley’s wife dies and why George acts, not a retelling of how.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'Two men at the pool',
      summary:
        'On a hot evening George Milton and Lennie Small leave the highway to camp by a pool on the Salinas River, a quarter of a mile from the ranch where they start work tomorrow. George takes a dead mouse from Lennie, lets fly about the trouble Lennie causes, and tells him to hide in the brush here if he ever gets into trouble.',
      setting: 'A pool on the Salinas River, a few miles south of Soledad, at dusk',
      who: ['George Milton', 'Lennie Small'],
      quote: 'Behind him walked his opposite',
      themes: ['Friendship and companionship', 'Nature and circularity'],
      tension: 2,
      significance:
        'Almost everything the ending needs is set down here: the pool, the dead mouse, the flight from Weed and the hiding place in the brush.',
    },
    {
      where: 'Chapter 1',
      title: 'The dream told by heart',
      summary:
        'Lennie begs George to tell him about the future again. George recites the lives of lonely ranch hands who have nobody, then the difference that they have each other, then the little farm with its rabbits, which Lennie will tend if he stays out of trouble.',
      setting: 'By the camp fire at the pool, after dark',
      who: ['George Milton', 'Lennie Small'],
      quote: 'With us it ain’t like that. We got a future.',
      themes: ['The American Dream', 'Loneliness and isolation', 'Friendship and companionship'],
      tension: 1,
      significance:
        'The ritual both men know by heart returns, much of it in the same words, in the last minutes of the novella.',
    },
    {
      where: 'Chapter 2',
      title: 'The bunk house and the boss',
      summary:
        'On Friday morning Candy, the one-handed swamper, shows them their bunks. The boss is suspicious that George answers for Lennie. Curley, the boss’s son, sizes Lennie up for a fight, and Candy gossips about Curley’s glove and his new wife.',
      setting: 'The ranch bunk house, mid-morning',
      who: ['George Milton', 'Lennie Small', 'Candy', 'The boss', 'Curley'],
      quote: 'I never seen one guy take so much trouble for another guy.',
      themes: ['Friendship and companionship', 'Power, prejudice and discrimination'],
      tension: 2,
      significance:
        'The boss cannot imagine a friendship without a profit in it, which tells us what kind of world the two men have walked into.',
    },
    {
      where: 'Chapter 2',
      title: 'A girl in the doorway',
      summary:
        'Curley’s wife appears in the doorway, saying she is looking for Curley. When she has gone, George furiously warns Lennie to keep away from her. Then Slim, the respected mule driver, comes in, and Carlson suggests that Candy’s old dog should be shot.',
      setting: 'The bunk house doorway, in bright late-morning sun',
      who: ["Curley's Wife", 'George Milton', 'Lennie Small', 'Slim', 'Carlson'],
      quote: 'the rectangle of sunshine in the doorway was cut off',
      themes: ['Loneliness and isolation', 'Power, prejudice and discrimination'],
      tension: 3,
      significance:
        'Trouble gathers in a single scene: Curley’s wife, George’s alarm at her, and the first suggestion that Candy’s dog should be shot.',
    },
    {
      where: 'Chapter 3',
      title: 'George confides in Slim',
      summary:
        'In the evening George tells Slim how he came to travel with Lennie, confesses the cruel joke that nearly drowned Lennie in the Sacramento River, and explains what really happened in Weed.',
      setting: 'The bunk house at dusk, under the table light',
      who: ['George Milton', 'Slim'],
      themes: ['Friendship and companionship', 'Loneliness and isolation'],
      tension: 2,
      significance:
        'For once George talks openly about himself, and Slim’s calm understanding prepares for his role at the very end.',
    },
    {
      where: 'Chapter 3',
      title: 'Candy’s dog',
      summary:
        'Carlson presses Candy to let him shoot the old dog, Slim agrees, and Candy gives in. The men sit in an unbearable silence until a single shot sounds outside, and Candy turns to the wall.',
      setting: 'The bunk house, after dark',
      who: ['Candy', 'Carlson', 'Slim', 'George Milton', 'Whit'],
      quote: 'And the silence lasted.',
      themes: ['Power, prejudice and discrimination', 'Loneliness and isolation'],
      tension: 4,
      significance:
        'The rehearsal for the ending: an old companion killed because he is no longer useful, and a stranger allowed to do it.',
    },
    {
      where: 'Chapter 3',
      title: 'The dream comes within reach',
      summary:
        'Candy overhears George telling Lennie about the farm and offers three hundred and fifty dollars, his compensation, savings and wages due, to join them. The place costs six hundred; with a month’s wages from George and Lennie they would have four hundred and fifty, and George bets they could swing it. Then Candy says he should have shot his dog himself.',
      setting: 'The bunk house, later the same evening',
      who: ['George Milton', 'Lennie Small', 'Candy'],
      quote: 'This thing they had never really believed in was coming true.',
      themes: ['The American Dream', 'Friendship and companionship'],
      tension: 3,
      significance:
        'The highest point of hope in the novella, and Steinbeck places it minutes before the fight.',
    },
    {
      where: 'Chapter 3',
      title: 'Curley’s hand',
      summary:
        'Curley picks on Lennie, who does not defend himself until George shouts at him to. Lennie catches Curley’s fist and crushes his hand. Slim makes Curley agree to say he caught it in a machine, so that George and Lennie keep their jobs.',
      setting: 'The bunk house',
      who: ['Curley', 'Lennie Small', 'George Milton', 'Slim', 'Carlson', 'Candy', 'Whit'],
      quote: 'Curley was flopping like a fish on a line',
      themes: ['Power, prejudice and discrimination'],
      tension: 4,
      significance:
        'Lennie’s strength is shown to be uncontrollable once he is frightened, and Curley now has a grudge.',
    },
    {
      where: 'Chapter 4',
      title: 'Crooks’s room',
      summary:
        'On Saturday night, with most of the men in town, Lennie visits Crooks in the harness room. Crooks torments him with the idea that George might not come back, then admits his own loneliness. Candy joins them, and Crooks asks to work on the farm too.',
      setting: 'Crooks’s room, a shed off the barn, by electric light',
      who: ['Crooks', 'Lennie Small', 'Candy'],
      quote: 'A guy goes nuts if he ain’t got nobody.',
      themes: [
        'Loneliness and isolation',
        'Power, prejudice and discrimination',
        'The American Dream',
      ],
      tension: 3,
      significance:
        'The three men the ranch has left behind briefly become a group, and even Crooks lets himself hope.',
    },
    {
      where: 'Chapter 4',
      title: 'The weak ones',
      summary:
        'Curley’s wife comes looking for company and mocks the men for being left behind. When Crooks tells her to leave, she threatens him with lynching, and he shrinks into silence. After she goes, George arrives to fetch Lennie, and Crooks takes back his request to join the farm.',
      setting: 'Crooks’s room, later that night',
      who: ["Curley's Wife", 'Crooks', 'Candy', 'Lennie Small', 'George Milton'],
      quote: 'They left all the weak ones here',
      themes: ['Power, prejudice and discrimination', 'Loneliness and isolation'],
      tension: 4,
      significance:
        'The powerless turn on each other, and the dream loses its fourth believer before the chapter ends.',
    },
    {
      where: 'Chapter 5',
      title: 'Sunday afternoon in the barn',
      summary:
        'Lennie has accidentally killed his puppy. Curley’s wife finds him and tells him about the life she hoped for and her unhappy marriage. She lets him stroke her hair; when she pulls away he panics, holds on, and kills her. He partly covers her with hay and creeps away towards the hiding place by the river.',
      setting: 'The great barn, while the men play horseshoes outside',
      who: ['Lennie Small', "Curley's Wife"],
      quote: 'You can talk to people, but I can’t talk to nobody but Curley.',
      themes: [
        'Loneliness and isolation',
        'The American Dream',
        'Power, prejudice and discrimination',
      ],
      tension: 5,
      significance:
        'Two of the loneliest people on the ranch finally talk, and the conversation destroys them both.',
    },
    {
      where: 'Chapter 5',
      title: 'The dream dies',
      summary:
        'Candy finds the body and fetches George, who admits he thinks he knew from the first that the farm would never happen. The men set off after Lennie, Curley swearing to kill him, and Carlson finds that his Luger is missing from his bag.',
      setting: 'The barn, as the light fades',
      who: ['Candy', 'George Milton', 'Curley', 'Slim', 'Carlson', 'Whit'],
      quote: 'I think I knowed we’d never do her.',
      themes: ['The American Dream', 'Friendship and companionship'],
      tension: 4,
      significance:
        'The dream ends before Lennie does: George’s admission comes with Lennie still alive in the brush.',
    },
    {
      where: 'Chapter 6',
      title: 'Back at the pool',
      summary:
        'In the late afternoon a heron takes a water snake from the pool. Lennie arrives, as George told him to, and sits watching the trail. In his fear he imagines his Aunt Clara scolding him, and then a gigantic rabbit telling him George will leave him.',
      setting: 'The pool on the Salinas River, late afternoon',
      who: ['Lennie Small', 'Aunt Clara'],
      quote: 'A silent head and beak lanced down',
      themes: ['Nature and circularity', 'Loneliness and isolation'],
      tension: 3,
      significance:
        'The circle closes, and the fullest view the narrator gives of Lennie’s mind is these imagined voices of guilt, both speaking in his own voice.',
    },
    {
      where: 'Chapter 6',
      title: 'The last telling',
      summary:
        'George arrives first, tells the dream once more while Lennie looks across the river, and shoots him before Curley’s men can reach him. He lets the men believe he took the gun from Lennie. Slim leads him away, while Carlson wonders what is wrong with them.',
      setting: 'The pool, as evening comes',
      who: ['George Milton', 'Lennie Small', 'Slim', 'Curley', 'Carlson'],
      quote: 'You hadda, George. I swear you hadda.',
      themes: ['Friendship and companionship', 'The American Dream', 'Nature and circularity'],
      tension: 5,
      significance:
        'The dream is used for the last time as comfort, and the book ends on a man who has understood nothing of what he saw.',
    },
  ],

  relationships: [
    {
      from: 'George Milton',
      to: 'Lennie Small',
      kind: 'travelling companions; carer and cared-for',
      note: 'George complains that Lennie keeps him from an easy life, but needs him as much as he is needed: Lennie is the reason the dream is worth telling. The relationship ends with George choosing how Lennie dies rather than leave it to Curley.',
    },
    {
      from: 'George Milton',
      to: 'Slim',
      kind: 'confidant',
      note: 'Slim is the only man George trusts with the truth about Weed. At the end Slim is the one who understands what George has done, and leads him away.',
    },
    {
      from: 'Candy',
      to: 'George Milton',
      kind: 'partners in the dream',
      note: 'Candy’s savings turn the farm from a story into a plan. In the barn after the death he asks George whether the two of them can still buy it, and knows the answer before George speaks.',
    },
    {
      from: 'Candy',
      to: 'Carlson',
      kind: 'old man and the man who shoots his dog',
      note: 'Carlson presses until Candy gives in, and thinks himself kind for offering to do it. Candy’s regret about letting a stranger do it is often read as shaping George’s choice at the end.',
    },
    {
      from: 'Curley',
      to: 'Lennie Small',
      kind: 'bully and target',
      note: 'Curley picks on Lennie for being big. Lennie crushes his hand in panic, and Curley’s grudge turns into the hunt for Lennie in Chapter 5.',
    },
    {
      from: 'Curley',
      to: "Curley's Wife",
      kind: 'husband and wife, married two weeks',
      note: 'They spend the novella looking for each other, he from jealousy and she from boredom and loneliness. She tells Lennie she does not like him; after her death he wants revenge more than he shows grief.',
    },
    {
      from: 'Crooks',
      to: 'Lennie Small',
      kind: 'reluctant host, then brief friend',
      note: 'Crooks begins by shutting Lennie out and tormenting him, and ends by saying he is a nice fellow. For one evening Lennie’s company lets Crooks forget his isolation.',
    },
    {
      from: "Curley's Wife",
      to: 'Crooks',
      kind: 'threat and victim',
      note: 'She has power over almost nobody on the ranch, but the ranch ranks Crooks below her by race, and in Chapter 4 she uses that, threatening him with lynching until he withdraws completely.',
    },
    {
      from: 'Lennie Small',
      to: "Curley's Wife",
      kind: 'listener who cannot understand her',
      note: 'She tells Lennie what she says she has told nobody before, and he answers with rabbits and his love of soft things. The one real conversation she has on the ranch leads to her death.',
    },
  ],

  compareWith: [
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'On the same modern prose list and also set in 1930s America: compare Crooks, shut out of the bunk house, with Tom Robinson, and the lynch mobs of Weed and the ranch with the mob that comes to Maycomb’s jail.',
    },
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        'Also on the modern prose list, and another tragedy that closes on a man who has not understood what he has just seen: set the District Commissioner’s last thoughts beside Carlson’s final question.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'discrimination',
    'crime_injustice',
    'intimate_relationships',
    'mental_health',
    'addiction',
  ],

  quotesFromElsewhere: ['playable novel', 'Something That Happened'],

  sources: [
    {
      label:
        'Of Mice and Men, Penguin Classics edition with an introduction by Susan Shillinglaw (text based on the Viking Compass edition of 1963), scanned on the Internet Archive. Every quotation checked against it; also the source for the 1936 letter, the working title, the Broadway opening, the award and the 1939 film.',
      url: 'https://archive.org/details/of-mice-and-men-john-steinbeck_202512',
    },
    {
      label:
        'Of Mice and Men, World Publishing Company edition, Cleveland, 1947, by arrangement with Viking; Digital Library of India scan on the Internet Archive. Second check of every quotation.',
      url: 'https://archive.org/details/in.ernet.dli.2015.507266',
    },
    {
      label:
        'Of Mice and Men, digital copy on the Internet Archive. Third check, and the word count.',
      url: 'https://archive.org/details/of-mice-and-men_202401',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) specification, Issue 3, August 2025: Component 1 Section C, closed book, and the recommended Penguin Red Classics edition (Appendix 3).',
    },
    {
      label:
        'Pearson, Mark Scheme (Results) June 2024, 4ET1 Paper 1R, publications code 4ET1_01R_2406_MS: the two Of Mice and Men questions, the American Dream and James Truslow Adams, the Burns title, and the To Kill a Mockingbird and Things Fall Apart details used in compareWith.',
    },
    {
      label:
        'NobelPrize.org, John Steinbeck: Facts (born 1902, died 1968, Nobel Prize 1962; Of Mice and Men and migrant workers).',
      url: 'https://www.nobelprize.org/prizes/literature/1962/steinbeck/facts/',
    },
    {
      label:
        'The King James Bible, Genesis 45:18, Project Gutenberg eBook 10, for the fat of the land.',
      url: 'https://www.gutenberg.org/ebooks/10',
    },
    {
      label:
        'Wikipedia summaries used for vocabulary: Weed, California; Soledad, California; Golden Gloves; Luger pistol.',
      url: 'https://en.wikipedia.org/wiki/Weed,_California',
    },
  ],
}
