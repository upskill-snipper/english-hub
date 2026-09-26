import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Great Gatsby, F. Scott Fitzgerald (1925). A SUPPLEMENT: the page at
 * /revision/texts/the-great-gatsby keeps its overview, context, themes,
 * characters and key quotations, and this file adds what it lacked: annotated
 * passages, language analysis, structure and form, a glossary, exam practice
 * and a model answer, plus the timeline and character map the animations draw.
 * The theme titles and character names used in the timeline and the character
 * map are the ones that page uses, so the two halves of the page agree.
 *
 * EDITION. No byte copy of the novel is held in src/data/full-texts, so the
 * test cannot check these quotations. They follow the first edition (Charles
 * Scribner's Sons, New York, 10 April 1925) as transcribed on Wikisource from
 * scans of that edition. On 26 September 2026 every quotation, every printed
 * passage and every phrase quoted in this file's prose was searched for,
 * chapter by chapter, in two complete copies held in memory: the Wikisource
 * 1925 text and Project Gutenberg eBook #64317. Each was then read in context
 * to confirm the speaker and the chapter. Plot facts in the summaries and notes
 * were read in the same copies.
 *
 * THE TWO COPIES DIFFER, and a student's edition may follow either. Gutenberg
 * #64317 descends from a British-spelled transcription: it prints "grey",
 * "neighbour", "judgements", "petrol-pumps" (1925: "gaspumps"), "tomorrow",
 * "further" and, on the last page, "orgiastic" where the first edition prints
 * "orgastic". The quotations in this guide's prose were chosen to be identical
 * in both copies apart from spelling; the three printed passages follow 1925,
 * and the one variant a student is likely to meet in them ("orgastic" or
 * "orgiastic") is explained where it occurs.
 *
 * WHAT THE CHECK FOUND ON THE PAGE ABOVE, recorded so the next editor can fix
 * it there (this file does not repeat any of it):
 * - Its key quotation for Myrtle's death, "Her face was smeared with a mixture
 *   of blood and dust", is not in the novel in either copy. The novel says she
 *   "mingled her thick dark blood with the dust" (Chapter 7); "smeared" belongs
 *   to Daisy's tears in Chapter 5.
 * - Its plot summary has Gatsby throw his shirts "onto the bed". In the novel
 *   they cover "the table" (Chapter 5).
 * - Its theme on wealth calls Gatsby's house an imitation of a French chateau;
 *   the novel says "some Hôtel de Ville in Normandy", a town hall (Chapter 1).
 * - It calls "rotten crowd" Nick's last words to Gatsby. He calls back a
 *   goodbye and a thank-you for breakfast afterwards (Chapter 8).
 * - It says Nick ends things with Jordan after Gatsby's death. The break comes
 *   in a telephone call on the morning of the day Gatsby dies (Chapter 8);
 *   their last meeting is in Chapter 9.
 */
export const guide: StudyGuide = {
  slug: 'the-great-gatsby',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  form: 'novel',
  scope:
    "The whole novel: nine chapters narrated by Nick Carraway, covering the summer of 1922 on Long Island and in New York, from his dinner with the Buchanans in June to his return to the Middle West in the autumn. Chapter numbers are the novel's own, I to IX, which every edition shares.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published by Charles Scribner's Sons, New York, on 10 April 1925. Quotations and passages follow the text of that first edition as transcribed on Wikisource, checked against Project Gutenberg eBook #64317. Many British editions print British spellings (grey, neighbour, colour) and differ in a few words, so check a quotation in your own copy before you learn it.",
  },
  workLength: {
    words: 48000,
    basis:
      'Counted chapter by chapter on 26 September 2026: 48,143 words in Project Gutenberg #64317 and about 48,500 in the Wikisource transcription of the 1925 first edition, which carries some page furniture. Chapter 7 is the longest at about 8,800 words.',
  },

  native: {
    overview: '/revision/texts/the-great-gatsby',
    context: '/revision/texts/the-great-gatsby',
    themes: '/revision/texts/the-great-gatsby',
    characters: '/revision/texts/the-great-gatsby',
    keyQuotes: '/revision/texts/the-great-gatsby',
  },

  extracts: [
    {
      title: 'Gatsby and the green light',
      where: 'Chapter 1, the close of the chapter',
      pointer:
        "The close of Chapter 1, after Nick drives home from dinner with the Buchanans and sits out in his yard. From “The wind had blown off, leaving a loud, bright night”, part-way through the second-to-last paragraph, to “alone again in the unquiet darkness.”, the chapter's last words.",
      text: `The wind had blown off, leaving a loud, bright night, with wings beating in the trees and a persistent organ sound as the full bellows of the earth blew the frogs full of life. The silhouette of a moving cat wavered across the moonlight, and turning my head to watch it, I saw that I was not alone—fifty feet away a figure had emerged from the shadow of my neighbor’s mansion and was standing with his hands in his pockets regarding the silver pepper of the stars. Something in his leisurely movements and the secure position of his feet upon the lawn suggested that it was Mr. Gatsby himself, come out to determine what share was his of our local heavens.

I decided to call to him. Miss Baker had mentioned him at dinner, and that would do for an introduction. But I didn’t call to him, for he gave a sudden intimation that he was content to be alone—he stretched out his arms toward the dark water in a curious way, and, far as I was from him, I could have sworn he was trembling. Involuntarily I glanced seaward—and distinguished nothing except a single green light, minute and far away, that might have been the end of a dock. When I looked once more for Gatsby he had vanished, and I was alone again in the unquiet darkness.`,
      annotations: [
        {
          phrase:
            'a persistent organ sound as the full bellows of the earth blew the frogs full of life',
          note: 'Nature is imagined as a church organ, with the earth itself working the bellows. The night feels alive, fertile and faintly sacred, which prepares for the almost worshipful gesture Gatsby is about to make. It also sets up a contrast with the next page: Chapter 2 opens on the valley of ashes, where the earth grows nothing but ash.',
        },
        {
          phrase: 'regarding the silver pepper of the stars',
          note: "A startling domestic metaphor: the stars are shaken across the sky like seasoning. It shrinks the heavens to something small enough to own, and “silver” hints at money. Nick's playful tone keeps Gatsby at a distance even as the image makes him grand.",
        },
        {
          phrase: 'come out to determine what share was his of our local heavens',
          note: "The language of business meets the language of heaven. “Share” is the language of the stock market, the world of money Nick has come East to join, so Gatsby's first appearance frames his longing as a claim or an investment. One reading is that his dream is tangled with acquisition from the start. Another is that Nick, the bond salesman, can only describe wonder in the terms he knows. Both are worth arguing.",
        },
        {
          phrase: 'he stretched out his arms toward the dark water in a curious way',
          note: "A gesture of reaching, pleading or worship, made towards something the reader cannot yet see. Fitzgerald brings it back on the last page of the novel, where it is no longer one man's gesture but everyone's, so the first image of Gatsby becomes the final image of the book.",
        },
        {
          phrase: 'I could have sworn he was trembling',
          note: 'Nick is not sure what he sees. “Could have sworn” admits that this is an impression, formed at fifty feet in the dark. It is an early sign that everything we learn about Gatsby comes through an observer who is interpreting, and perhaps romanticising, what he watches.',
        },
        {
          phrase: 'a single green light, minute and far away',
          note: "The novel's central symbol arrives without explanation. “Single” isolates it, “minute” shrinks it, and “far away” fixes the distance that Gatsby's life is spent trying to close. Only in Chapter 4 does Jordan explain why Gatsby lives across the bay from Daisy, and only in Chapter 5 does Gatsby say the light is at the end of her dock, so for now it is pure longing without an object.",
        },
        {
          phrase: 'alone again in the unquiet darkness',
          note: 'The chapter ends on absence. Gatsby vanishes as suddenly as he appeared, and “unquiet” gives the darkness the restlessness of the man who stood in it. The effect is suspense: Gatsby has been mentioned and glimpsed but not met, and he will not speak until Chapter 3.',
        },
      ],
      question:
        'Explore the significance of this passage, the first sight of Gatsby, in the novel as a whole. You should consider how Fitzgerald presents Gatsby here and how the passage looks forward to the ending.',
    },
    {
      title: 'The valley of ashes',
      where: 'Chapter 2, the first two paragraphs',
      pointer:
        'The opening of Chapter 2, where “the motor road hastily joins the railroad”, to the end of the second paragraph, “brood on over the solemn dumping ground.”',
      text: `About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land. This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of ash-gray men, who move dimly and already crumbling through the powdery air. Occasionally a line of gray cars crawls along an invisible track, gives out a ghastly creak, and comes to rest, and immediately the ash-gray men swarm up with leaden spades and stir up an impenetrable cloud, which screens their obscure operations from your sight.

But above the gray land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg. The eyes of Doctor T. J. Eckleburg are blue and gigantic—their retinas are one yard high. They look out of no face, but, instead, from a pair of enormous yellow spectacles which pass over a nonexistent nose. Evidently some wild wag of an oculist set them there to fatten his practice in the borough of Queens, and then sank down himself into eternal blindness, or forgot them and moved away. But his eyes, dimmed a little by many paintless days, under sun and rain, brood on over the solemn dumping ground.`,
      annotations: [
        {
          phrase: 'the motor road hastily joins the railroad',
          note: 'The whole description is in the present tense, unlike the story around it, as if the valley is still there as Nick writes: permanent, while the characters only pass through it. The road even seems to flinch, hurrying to “shrink away” from the land, which tells the reader how to feel before anything is described.',
        },
        {
          phrase: 'a fantastic farm where ashes grow like wheat',
          note: "An inverted pastoral. The farm, the traditional picture of American plenty, now grows only the city's waste. “Fantastic” means both grotesque and unreal. One reading finds the American Dream here in miniature: the promise of fertile land turned into a dumping ground for the wealth of the Eggs.",
        },
        {
          phrase:
            'with a transcendent effort, of ash-gray men, who move dimly and already crumbling',
          note: 'The workers are made of the same ash as the landscape, as if the valley has produced them. “Transcendent effort” is mock-heroic, a grand phrase spent on men who are “already crumbling”. To the passing traveller the poor here are barely human, and the novel later asks whether the rich see George Wilson, who lives here, any differently.',
        },
        {
          phrase: 'They look out of no face',
          note: "Eyes without a face: watching, with no person behind the watching. In Chapter 8 the grieving Wilson looks at them and says “God sees everything”, and Michaelis answers “That's an advertisement.” Both readings stay live. One persuasive view is that the eyes are a sales sign mistaken for God, which is Fitzgerald's comment on a society that worships what it buys.",
        },
        {
          phrase: 'some wild wag of an oculist',
          note: "Comic alliteration deflates the solemnity. The watching god of the valley was put up by a joker trying to “fatten his practice”, who then went blind himself or moved away. The irony is layered: an eye doctor's advert outlives his sight, and the only watcher over the valley is a sales pitch.",
        },
        {
          phrase: 'brood on over the solemn dumping ground',
          note: "Personification gives the faded eyes a mind that broods, and “solemn” turns a rubbish tip into something like a graveyard or a church. The paragraph ends on waste, which is where the chapter's glamour will end too: the party in Myrtle's flat finishes with Tom breaking her nose.",
        },
      ],
      question:
        'How does Fitzgerald use setting in this passage to present ideas about American society? Refer closely to the language of the passage and to at least one later moment in the novel that takes place in the valley of ashes.',
    },
    {
      title: 'Boats against the current',
      where: 'Chapter 9, the last four paragraphs',
      pointer:
        "The novel's closing page, after Nick rubs out the word scrawled on Gatsby's steps and lies down on the beach. From “Most of the big shore places were closed now” to the last sentence of the book.",
      text: `Most of the big shore places were closed now and there were hardly any lights except the shadowy, moving glow of a ferryboat across the Sound. And as the moon rose higher the inessential houses began to melt away until gradually I became aware of the old island here that flowered once for Dutch sailors’ eyes—a fresh, green breast of the new world. Its vanished trees, the trees that had made way for Gatsby’s house, had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an esthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.

And as I sat there brooding on the old, unknown world, I thought of Gatsby’s wonder when he first picked out the green light at the end of Daisy’s dock. He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it. He did not know that it was already behind him, somewhere back in that vast obscurity beyond the city, where the dark fields of the republic rolled on under the night.

Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter—to-morrow we will run faster, stretch out our arms farther. . . . And one fine morning———

So we beat on, boats against the current, borne back ceaselessly into the past.`,
      annotations: [
        {
          phrase: 'the inessential houses began to melt away',
          note: "Nick's imagination strips away the present. The mansions, Gatsby's among them, are “inessential”, a dismissive word for so much money, and as they dissolve the island returns to what it was before anyone built on it. The novel ends by stepping back to the island as the Dutch sailors saw it.",
        },
        {
          phrase: 'a fresh, green breast of the new world',
          note: 'Green returns, now as the colour of an untouched continent, so the green light turns out to be the last trace of an older and larger longing. The image is maternal and sensual at once. A postcolonial reading adds that the island was not empty when the Dutch sailors saw it: the world was only new to the people looking at it, so even the original dream was a partial view.',
        },
        {
          phrase: 'pandered in whispers to the last and greatest of all human dreams',
          note: "A startling verb. To pander is to feed someone's desires, often in a corrupt way, and a pander is a go-between who procures lovers. Even at its purest moment, then, the dream of America is imagined as a seduction. The sentence is reverent and suspicious at once, which is the novel's attitude to dreaming in miniature.",
        },
        {
          phrase: 'commensurate to his capacity for wonder',
          note: "This was the last time in history that human beings met something equal to their capacity for wonder. The implication is that ever since, dreams have outgrown anything the world can offer. That is exactly Gatsby's problem in Chapter 5, when Daisy “tumbled short of his dreams” through no fault of her own.",
        },
        {
          phrase: 'He did not know that it was already behind him',
          note: "The paradox at the heart of the ending. Gatsby's dream lay in the past, in Louisville in 1917 and in the West he came from, while he believed it lay ahead across the bay. The following image of “the dark fields of the republic” widens the sentence from one man to a nation.",
        },
        {
          phrase: 'the orgastic future that year by year recedes before us',
          note: 'The pronoun shifts from Gatsby to “us”, drawing the reader into the pattern. The future “recedes” like a shore seen from a boat moving the wrong way. The first edition prints “orgastic”, from the word for the peak of intense pleasure; many later editions print “orgiastic”, meaning wild and unrestrained. Check which your copy prints before you quote it.',
        },
        {
          phrase: 'So we beat on, boats against the current, borne back ceaselessly into the past',
          note: 'The last sentence moves like rowing, with the alliterating b-sounds of “beat”, “boats” and “borne” falling like oar strokes. It holds two readings in balance. “Beat on” can sound heroic, a refusal to stop; “borne back ceaselessly” says the effort fails. The strongest reading keeps both: the novel admires the striving while it records the defeat.',
        },
      ],
      question:
        "‘Gatsby's story ends in failure, but the novel's last page refuses to call his dream foolish.’ How far do you agree? Refer closely to this passage and to the novel as a whole.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Symbolism: the green light',
      example:
        'Chapter 1: Gatsby reaches towards “a single green light, minute and far away”. Chapter 5, with Daisy beside him: “His count of enchanted objects had diminished by one.”',
      effect:
        'The light means most when it is furthest away. Once Daisy is in the room it shrinks back into “a green light on a dock”, which suggests Gatsby loves the longing more than the thing longed for. In Chapter 9 Nick links it to the “fresh, green breast of the new world” the Dutch sailors saw, so a private symbol becomes a national one. Green is also the colour of spring and, in America, of banknotes. A strong essay does not pin the light to one meaning: its power lies in being hope that can attach itself to anything.',
    },
    {
      technique: 'Colour imagery: white, gold and yellow',
      example:
        "Daisy and Jordan are first seen “both in white” (Chapter 1). Nick imagines Daisy “High in a white palace the king's daughter, the golden girl” (Chapter 7). At Gatsby's party the orchestra plays “yellow cocktail music” (Chapter 3).",
      effect:
        "White suggests purity and innocence, but in the novel it is also the colour of the “white palaces” of East Egg, spotless because other people do the dirty work. Gold and yellow are the colours of money and glamour, and Fitzgerald sours them: the billboard over the valley of ashes wears “enormous yellow spectacles”, and after Myrtle's death the police suppose Wilson went looking for a “yellow car”. Tracking one colour through the novel and watching its meaning darken is a reliable way into a whole-text answer.",
    },
    {
      technique: "Sound imagery and metaphor: Daisy's voice",
      example:
        "“Her voice is full of money,” Gatsby says (Chapter 7), and Nick develops it: “the jingle of it, the cymbals' song of it”.",
      effect:
        "The metaphor turns a sound into wealth: Nick hears the “jingle” of coins in her voice. This is metaphor rather than true synaesthesia, which mixes the senses, as the “yellow cocktail music” of Chapter 3 does. It rewrites the first description of Daisy's voice in Chapter 1, which carried “a promise that she had done gay, exciting things just a while since”: what Nick first heard as romance he now hears as class. The line is Gatsby's, which is revealing. He understands exactly what he loves in her, and loves it anyway. In Chapter 5 Nick thinks her voice held Gatsby most because it “couldn't be over-dreamed”, so the voice is where Gatsby's idealism and Daisy's wealth meet.",
    },
    {
      technique: 'Pathetic fallacy and weather',
      example:
        'The reunion in Chapter 5 takes place in “pouring rain”, and once Daisy and Gatsby have talked there are “twinkle-bells of sunshine in the room”. The confrontation in Chapter 7 falls on a day that is “almost the last, certainly the warmest, of the summer”.',
      effect:
        "The weather mirrors feeling so closely that Nick makes a joke of it: Gatsby greets the sunshine “like a weather man”. The heat of Chapter 7 does more than reflect tempers. It makes the characters restless and reckless enough to drive into the city, and the end of the summer marks the end of Gatsby's hope. By Chapter 9 there is “blue smoke of brittle leaves” in the air as Nick decides to go home. Ask whether the weather is decoration or something closer to fate.",
    },
    {
      technique: 'Religious imagery and the absent God',
      example:
        "George Wilson, looking at the eyes of Doctor T. J. Eckleburg, says “God sees everything”; Michaelis replies “That's an advertisement” (Chapter 8). In Chapter 6 Gatsby is “a son of God” who must be about “His Father's business”.",
      effect:
        "The novel borrows the language of religion and hands it to commerce. Wilson's God is a faded oculist's advert; Gatsby's Father's business turns out to be “the service of a vast, vulgar, and meretricious beauty”. Nick's phrasing echoes the Gospel story of the boy Jesus found in the Temple, which makes Gatsby's self-creation both sacred and close to blasphemy. One convincing reading is that Fitzgerald shows a society that has kept the hunger for faith and lost anything worth putting in it.",
    },
    {
      technique: 'Foreshadowing and prolepsis',
      example:
        'Before the fatal drive home in Chapter 7, Nick writes a one-sentence paragraph: “So we drove on toward death through the cooling twilight.”',
      effect:
        "Because Nick narrates after the events, he can tell us the ending before it happens. The flat, rhythmic sentence stands alone, and the next paragraph jumps to the evidence given at the inquest. The effect is tragic inevitability rather than suspense: we know a death is coming, and the question becomes who will pay for it. Earlier warnings work in the same way, such as Jordan's “I hate careless people” in Chapter 3 and the car in the ditch at the end of Gatsby's party.",
    },
    {
      technique: 'Listing and accumulation',
      example:
        "Gatsby throws his shirts before Daisy, “shirts of sheer linen and thick silk and fine flannel”, until she sobs “They're such beautiful shirts” (Chapter 5). Chapter 4 opens with a long catalogue of the guests Nick wrote down on an old timetable.",
      effect:
        "Lists pile things up without ranking them, and the effect is excess. The shirts are Gatsby's wealth made visible, offered in place of the words he cannot find, and Daisy's tears answer the objects rather than the man. The guest list is comic and grotesque, full of absurd names, and it records a crowd who enjoyed Gatsby's hospitality while knowing nothing about him. Both lists end in emptiness: in Chapter 9, “Nobody came” to the funeral.",
    },
    {
      technique: 'Irony through a catchphrase',
      example:
        "Gatsby calls Nick, Tom and others “old sport” from Chapter 3 onwards. At the Plaza Hotel Tom snaps: “Don't you call me ‘old sport’!” (Chapter 7).",
      effect:
        "The phrase sounds borrowed, an affectation that fits the Oxford story Gatsby tells about himself. Repetition wears it thin, so the reader hears the effort behind it. Tom's outburst shows that old money can hear the imitation, and that Gatsby's manners, however polished, mark him as an outsider. Yet by the end it carries warmth too: on the night of the accident, Gatsby's “Good night, old sport” to Nick sounds less like a pose than like trust.",
    },
  ],

  structureForm: [
    {
      heading: 'A retrospective first-person narrator',
      body: 'Nick tells the story after it is over. He writes from the Middle West, having come back “from the East last autumn” (Chapter 1), and in Chapter 9 he says “After two years I remember the rest of that day”. He even pauses in Chapter 3 to reread his own manuscript: “Reading over what I have written so far”. Everything we see of Gatsby is therefore selected, ordered and judged by someone who knows how it ends. That is why the novel can open with a verdict, “Gatsby turned out all right at the end”, and close with a meditation rather than an event. The frame also explains the elegiac tone. The book is an act of remembering, and memory is its subject as much as its method.',
    },
    {
      heading: 'How reliable is Nick?',
      body: "Nick presents himself as a fair witness: “I am one of the few honest people that I have ever known” (Chapter 3). Yet he contradicts himself. In Chapter 1 there was “something gorgeous” about Gatsby; in Chapter 8 “I disapproved of him from beginning to end”. He arranges the tea that restarts an affair, and in Chapter 9 Jordan turns his own words on him, calling him “another bad driver” and admitting “I thought you were rather an honest, straightforward person.” One reading treats Nick as unreliable, a man dazzled by Gatsby's glamour who hides his own part in the damage. A more convincing reading is that the contradictions are the point. Nick describes himself as “within and without”, both admirer and judge, and the novel asks the reader to hold both attitudes as he does. Either way, a strong essay never treats Nick's opinions as Fitzgerald's without arguing for it.",
    },
    {
      heading: 'Gatsby in fragments',
      body: "Gatsby is withheld. He is glimpsed at the end of Chapter 1, gossiped about in Chapter 2, and met only in Chapter 3, where guests trade rumours that “he killed a man once”. His past arrives in pieces and out of order. Jordan tells the Louisville story of 1917 in her own voice in Chapter 4; Nick sets out the truth about James Gatz and Dan Cody in Chapter 6; Gatsby's own account of courting Daisy comes in Chapter 8; and his father brings the boyhood schedule in Chapter 9. The reader assembles Gatsby as Nick did, which keeps the mystery alive and makes a point: Gatsby is a man made of other people's stories, including his own. Because we meet the legend before the man, the novel's question is always how far the two can be told apart.",
    },
    {
      heading: 'Chapter 5 at the centre, Chapter 7 at the crisis',
      body: "The nine chapters cover one summer, from a June dinner to Nick's departure in the autumn. The reunion of Gatsby and Daisy falls in Chapter 5, the exact middle, so the first half builds towards it and the second half falls away from it. Chapter 7 is by far the longest, about half as long again as any other, and most of it covers a single day: the hottest of the summer, the confrontation at the Plaza, and Myrtle's death that evening. The shape resembles a tragedy's rise, turning point and catastrophe, and it places the moment Gatsby gets what he wanted at the point where his dream starts to shrink.",
    },
    {
      heading: 'Set pieces that end in damage',
      body: "The novel is built around a few large social scenes, and each one ends badly. The party in Myrtle's New York flat (Chapter 2) ends when Tom breaks her nose. Gatsby's party (Chapter 3), part of which is told in the present tense as if it were always going on (“The lights grow brighter as the earth lurches away from the sun”), ends with a car in a ditch. The party Daisy attends (Chapter 6) leaves her “appalled by West Egg”. The Plaza suite (Chapter 7) ends in Gatsby's exposure and the drive home. The pattern teaches the reader to expect the glitter to crack, and the repeated car accidents rehearse the death to come.",
    },
    {
      heading: 'The climax at second hand',
      body: "Nick witnesses none of the three deaths. Myrtle's is told through Michaelis, “the principal witness at the inquest” (Chapter 7); Wilson's walk to West Egg is pieced together from movements that “were afterward traced” (Chapter 8); Gatsby's death is reconstructed from what the chauffeur heard and what Nick found at the pool. Only in Chapter 9 does Tom admit what he told Wilson, and the inquest settles on Wilson as a man “deranged by grief” so that the case stays simple. The gaps are moral as well as structural. The reader has to infer Tom's part, as Nick does, and the careful, almost legal reconstruction of events contrasts with the carelessness that caused them.",
    },
    {
      heading: 'A circular ending',
      body: "The last pages return to the first. The green light of Chapter 1 comes back; the West that Nick left comes back as he goes home; and the gesture of reaching across water that introduced Gatsby becomes, in the final paragraphs, a gesture everyone makes. The shift from “Gatsby” to “we” turns a character study into a statement about hope and time. Some readers find the ending consoling, a tribute to Gatsby's capacity for wonder; others find it bleak, since the boats are always carried backwards. The best answers show how the prose keeps both possibilities open.",
    },
    {
      heading: 'Tragedy, romance and crime',
      body: "The novel borrows from several forms. It has the shape of a tragedy: an exceptional figure, an error of judgement in his refusal to let the past go, and a fall that exposes the society around him. It has the materials of a romance, a poor officer and a rich girl parted by war. And it has the underworld of a crime story, with bootlegging, a fixed baseball series and a shooting. Fitzgerald's working titles included Trimalchio in West Egg, after the newly rich host of lavish feasts in the Satyricon, a Roman work of fiction by Petronius, and the novel itself says that when Gatsby's parties stop “his career as Trimalchio was over” (Chapter 7). The final title, with its showman's word Great, can be read as sincere praise, as irony, or as both.",
    },
  ],

  vocabulary: [
    {
      term: 'old sport',
      definition:
        "Gatsby's habitual way of addressing other men, an affected phrase that sounds borrowed from a class he was not born into. Tom's “Don't you call me ‘old sport’!” in Chapter 7 shows how it grates on the old rich.",
    },
    {
      term: 'bootlegger',
      definition:
        'Someone who made, smuggled or sold alcohol illegally during Prohibition. Party guests call Gatsby one in Chapter 4, and in Chapter 7 Tom claims that Gatsby and Wolfshiem bought up shops in New York and Chicago and “sold grain alcohol over the counter”.',
    },
    {
      term: 'Prohibition',
      definition:
        "The nationwide ban on making, transporting and selling alcoholic drinks in the United States, in force from January 1920 until its repeal in December 1933. It created the illegal trade that pays for Gatsby's parties.",
    },
    {
      term: 'East Egg and West Egg',
      definition:
        "The two fictional peninsulas on Long Island where the novel is set, “identical in contour and separated only by a courtesy bay” (Chapter 1). The Buchanans' inherited wealth is in East Egg; Nick and Gatsby live in West Egg, “the less fashionable of the two”.",
    },
    {
      term: 'courtesy bay',
      definition:
        "Nick's joke for the water between the two Eggs: a bay only by courtesy, too small to deserve the name. The joke matters, because this narrow stretch of water is the distance Gatsby spends the novel trying to close.",
    },
    {
      term: 'valley of ashes',
      definition:
        'The grey wasteland between West Egg and New York where George and Myrtle Wilson live, overlooked by the billboard eyes of Doctor T. J. Eckleburg. It is the waste that the wealth of the Eggs leaves behind, and the place where Myrtle dies.',
    },
    {
      term: 'the bond business',
      definition:
        "Nick's work in New York: selling bonds, a kind of investment. He comes East in 1922 to “learn the bond business” because “Everybody I knew was in the bond business” (Chapter 1), during the boom in stocks and credit that ended in the Wall Street Crash of 1929.",
    },
    {
      term: 'the Middle West',
      definition:
        "Nick's name for the central United States, where he grew up. In Chapter 9 he counts all five main characters as Westerners and decides that “this has been a story of the West, after all”.",
    },
    {
      term: 'Platonic',
      definition:
        'Relating to the Greek philosopher Plato, who taught that the perfect idea of a thing is more real than any physical copy. Nick says Gatsby “sprang from his Platonic conception of himself” (Chapter 6): the man is a copy of an ideal he invented at seventeen.',
    },
    {
      term: 'meretricious',
      definition:
        'Attractive in a showy, cheap or false way; the word comes from the Latin for a prostitute. Gatsby serves “a vast, vulgar, and meretricious beauty” (Chapter 6), so even his dream is described as something bought.',
    },
    {
      term: 'Trimalchio',
      definition:
        "A character in the Satyricon, a first-century Roman work of fiction by Petronius: a former slave grown rich who throws extravagant dinner parties. Nick applies the name to Gatsby as a party-giver in Chapter 7, and it was among Fitzgerald's working titles for the novel.",
    },
    {
      term: 'orgastic',
      definition:
        'The word the first edition prints on the last page, formed from orgasm, a peak of intense pleasure. Many later editions print “orgiastic”, meaning wild and unrestrained. Check which your own copy prints and quote that.',
    },
    {
      term: 'inquest',
      definition:
        "A legal inquiry into the cause of a sudden or violent death. Michaelis is “the principal witness at the inquest” into Myrtle's death (Chapter 7), and the novel's account of that evening is partly built from his evidence.",
    },
    {
      term: 'Jazz Age',
      definition:
        'A name for the 1920s in the United States, a decade of jazz, new wealth and changing manners. The term was already in use, but Fitzgerald helped popularise it with his 1922 story collection Tales of the Jazz Age, published three years before this novel.',
    },
    {
      term: 'old money and new money',
      definition:
        "Old money is wealth inherited across generations, like Tom's; new money is wealth recently made, like Gatsby's. The novel maps the division onto East and West Egg, and in the end old money wins.",
    },
    {
      term: 'retrospective narration',
      definition:
        'Telling a story after it has happened, looking back. Nick writes once the summer is over (in Chapter 9 he says “After two years I remember the rest of that day”), so he can judge, foreshadow and mourn as he narrates.',
    },
    {
      term: 'unreliable narrator',
      definition:
        'A narrator whose account the reader has reason to doubt, through bias, ignorance or self-interest. Critics disagree about how far Nick fits the term, which is why it makes a good essay question.',
    },
    {
      term: 'synaesthesia',
      definition:
        "Describing one sense in terms of another, as in the “yellow cocktail music” of Gatsby's party (Chapter 3), where a sound is given a colour.",
    },
    {
      term: 'motif',
      definition:
        'An image, object or idea that recurs through a text and gathers meaning as it goes. In this novel: the green light, eyes, cars and driving, clocks, and the weather.',
    },
    {
      term: 'prolepsis',
      definition:
        'A flash-forward: telling the reader something that will happen later. “So we drove on toward death through the cooling twilight” (Chapter 7) is a clear example.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "‘Gatsby is less a tragic hero than a victim of other people's carelessness.’ How far do you agree with this view?",
        skill: 'Critical-view essay: whole-text argument',
        guidance: [
          'Define the terms first. A tragic hero falls because of something in himself; a victim falls because of what others do. Decide where you stand and say so in your introduction.',
          'Build the case for the view: Daisy is driving the car that kills Myrtle and stays with Tom; Tom tells Wilson whose car it was (Chapter 9); Nick calls them “careless people” who let others “clean up the mess they had made”.',
          "Build the case against it: Gatsby has a flaw of his own, his refusal to accept time. Answering Nick with “Why of course you can!” (Chapter 6), he wants Daisy to tell Tom “I never loved you”, which would have, in Nick's words, “obliterated four years”.",
          "Use structure: the dream begins to shrink in Chapter 5, the moment it comes true, before anyone careless has touched it. The last page widens Gatsby's failure into everyone's, which supports a tragic reading.",
          "Use context with purpose: Gatsby's money comes from bootlegging, so he is not innocent of the careless, lawless world that destroys him.",
          'Conclude with a judgement that weighs both, for example that Gatsby is a tragic hero whose flaw only becomes fatal because he lives among careless people.',
        ],
      },
      {
        question:
          'Explore the ways Fitzgerald presents the relationship between love and money in The Great Gatsby.',
        skill: 'Whole-text essay: language, structure and context',
        guidance: [
          "Start with Gatsby's own diagnosis, “Her voice is full of money” (Chapter 7), and analyse how Nick develops it into the image of Daisy as “the golden girl”.",
          'Trace the Louisville story in Chapter 8. It excited Gatsby that many men had loved Daisy, because “it increased her value in his eyes”, and Nick reports that Gatsby let her believe he was from her own class.',
          'Compare the other couples. Tom buys Myrtle a dog and keeps her in a flat; Tom and Daisy are held together by “their money or their vast carelessness” (Chapter 9).',
          "Look closely at Daisy's choice at the Plaza. She tells Gatsby “I love you now” but will not deny Tom: “I did love him once”, she says, “but I loved you too.” Ask whether she chooses a man or a world.",
          'Bring in context where it explains something: the boom of the early 1920s, Prohibition money, and a marriage market in which a girl like Daisy was raised to marry wealth.',
          'Argue a line through the essay, for instance that the novel does not show money corrupting love so much as revealing that, in this world, the two were never separate.',
        ],
      },
      {
        question:
          'How far is Nick Carraway a reliable guide to the events and people of the novel?',
        skill: 'Whole-text essay: narrative method',
        guidance: [
          "Set out Nick's claims about himself: his father's advice in the opening paragraph and “I am one of the few honest people that I have ever known” (Chapter 3).",
          'Test them against his actions and his contradictions: he arranges the reunion, never tells Tom that Daisy was driving the car, and says both that there was “something gorgeous” about Gatsby and that “I disapproved of him from beginning to end”.',
          "Examine the limits of what he can know: the deaths are told at second hand, through Michaelis's evidence at the inquest and movements that were “afterward traced”.",
          "Weigh Jordan's charge in Chapter 9 that he is “another bad driver”, and his reply that he is “five years too old to lie to myself”.",
          'Reach a verdict that separates facts from feelings. Nick may report events accurately and still be partial in his judgements; say what the novel gains from a narrator who is “within and without”.',
        ],
      },
      {
        question:
          "Re-read the short passage in Chapter 7 from Gatsby's words “Her voice is full of money” to “the golden girl”. How does Fitzgerald present Daisy here, and how does the passage connect with her presentation elsewhere in the novel?",
        skill: 'Passage-based essay: language analysis and whole-text links',
        guidance: [
          "Notice who speaks. The insight is Gatsby's, and Nick only grasps it once Gatsby says it: “That was it. I'd never understood before.”",
          "Analyse the sound imagery: “the jingle of it, the cymbals' song of it” turns charm into coins you can hear.",
          "Analyse the fairy-tale image of Daisy “High in a white palace”: she becomes a princess in a tower, a prize to be won, and white and gold carry the novel's colour meanings.",
          "Link backwards to the first description of her voice in Chapter 1, and forwards to Chapter 9, where Daisy “hadn't sent a message or a flower” to the funeral.",
          'Consider whether Daisy is presented fairly. She seldom speaks for herself, and a feminist reading asks what choices she had in a world where, as she says in Chapter 1, the best thing a girl can be is “a beautiful little fool”.',
        ],
      },
    ],
    tips: [
      'Check every quotation in your own copy before you learn it. Editions differ: the first edition prints “orgastic” on the last page and many later ones print “orgiastic”, and British editions often change American spellings.',
      'Keep Nick and Fitzgerald apart. Nick is a character with his own reasons for telling the story this way; when you quote him, ask why the novel gives us this narrator rather than assuming he speaks for the author.',
      "Use chapter numbers. Gatsby's past is told out of order, so say where each piece comes from: Chapter 4 for Louisville through Jordan, Chapter 6 for James Gatz, Chapter 8 for Gatsby's own account, Chapter 9 for his father.",
      "Make context explain, not decorate. Prohibition explains Gatsby's money, the war explains how a penniless officer met a rich girl, and the boom explains Nick's bond business. Tie each fact to a moment in the text.",
      'Argue about symbols rather than decoding them. The green light is not simply Daisy or simply the American Dream: show how its meaning shifts between Chapters 1, 5 and 9.',
      "Take the novel's prejudices seriously. Nick dismisses Tom's racist outbursts as “impassioned gibberish” (Chapter 7), but many readers find the novel's own portrait of Wolfshiem an antisemitic stereotype. The best answers comment on this directly rather than passing over it.",
      'Write about Daisy as a person with choices, not only as a symbol. Her few direct statements, such as her wish for her daughter to be “a beautiful little fool”, reward close analysis.',
      'For a critical-view question, quote the view only once and then test it: agree in part, disagree in part, and say which side is stronger and why.',
    ],
  },

  modelAnswer: {
    question:
      "‘Gatsby is less a tragic hero than a victim of other people's carelessness.’ How far do you agree with this view?",
    paragraph:
      "The view is persuasive about the plot but not about the novel's design. It is true that others decide Gatsby's fate: Daisy is driving the car that kills Myrtle, and Tom admits in Chapter 9 that he told Wilson whose car it was. Nick's verdict that Tom and Daisy are “careless people” who “smashed up things and creatures” makes them sound childishly destructive, and the phrase “things and creatures” flattens Myrtle and Gatsby into objects. Yet Fitzgerald gives Gatsby a flaw of his own, and it is the flaw of a tragic hero rather than the helplessness of a victim. When Nick warns him “You can't repeat the past”, Gatsby's reply, “Why of course you can!”, is not bravado but conviction: he wants Daisy to tell Tom “I never loved you”, so that she has “obliterated four years with that sentence”. That demand is impossible, and it is his, not Tom's. The structure confirms it. In Chapter 5, the middle of the novel, when Daisy is finally beside him, “His count of enchanted objects had diminished by one”: the dream starts to shrink at the very moment it comes true, before anyone careless has touched it. Gatsby is destroyed by careless people, but he had already staked everything on a past that could not be recovered, which is why the novel mourns him as a tragic figure rather than merely pitying him.",
    commentary: [
      'It answers the question in its first sentence and qualifies the view rather than simply agreeing or disagreeing: the plot supports it, the design does not.',
      "It gives the case for the view fairly before turning, with precise evidence (who was driving, and Tom's admission in Chapter 9) rather than general claims.",
      "Quotations are short, embedded in the writer's own sentences and analysed: the phrase “things and creatures” is read for what it does to Myrtle and Gatsby.",
      "It defines tragedy through the text itself. The flaw is Gatsby's refusal to accept time, shown in his own words rather than asserted.",
      "It uses structure as evidence, placing the Chapter 5 line at the novel's midpoint to show the dream failing before the catastrophe.",
      'It ends with a judgement that holds both sides of the debate and says which matters more, which is what a critical-view question asks for.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'Dinner in East Egg',
      summary:
        'Nick, newly settled in West Egg, dines with his cousin Daisy and her husband Tom and meets Jordan Baker. Jordan tells him that Tom has a woman in New York, and Daisy hopes aloud that her young daughter will grow up to be “a beautiful little fool”.',
      setting: "The Buchanans' house in East Egg on a June evening",
      who: ['Nick Carraway', 'Daisy Buchanan', 'Tom Buchanan', 'Jordan Baker'],
      quote:
        'I hope she’ll be a fool—that’s the best thing a girl can be in this world, a beautiful little fool.',
      themes: ['Wealth: old money versus new money', 'Class and social mobility'],
      tension: 2,
      significance:
        'Introduces the world of old money that Gatsby will try to enter, and the unhappy marriage at its centre.',
    },
    {
      where: 'Chapter 1',
      title: 'The green light',
      summary:
        'Home again, Nick sees his neighbour Gatsby for the first time, standing alone on his lawn at night. Gatsby stretches out his arms towards the water, where Nick can make out only a small green light at the end of a dock, and then he vanishes.',
      setting: "Nick's lawn in West Egg at night, looking across the bay",
      who: ['Nick Carraway', 'Jay Gatsby'],
      quote: 'a single green light, minute and far away',
      themes: ['The past and longing', 'Love and idealisation', 'Illusion versus reality'],
      tension: 2,
      significance: "The novel's central image, and a gesture its last page repeats.",
    },
    {
      where: 'Chapter 2',
      title: 'The valley of ashes and the flat',
      summary:
        "Tom forces Nick off the train at the valley of ashes to meet his mistress, Myrtle Wilson, whose husband George runs the garage there. At a drunken party in the flat Tom keeps for her in New York, Myrtle repeats Daisy's name and Tom breaks her nose with his open hand.",
      setting: 'The valley of ashes, then a flat on 158th Street, New York',
      who: ['Nick Carraway', 'Tom Buchanan', 'Myrtle Wilson', 'George Wilson'],
      quote: 'This is a valley of ashes',
      themes: ['Class and social mobility', 'The American Dream and its corruption'],
      tension: 3,
      significance:
        "Shows the violence behind Tom's wealth and the poverty that the glamour of the Eggs depends on.",
    },
    {
      where: 'Chapter 3',
      title: "Gatsby's party",
      summary:
        "Nick attends one of Gatsby's enormous parties, where guests who have never met their host trade rumours about him. Nick talks to a man who turns out to be Gatsby himself, and the night ends with a guest's car in a ditch beside the road.",
      setting: "Gatsby's mansion and gardens in West Egg on a summer night",
      who: ['Nick Carraway', 'Jay Gatsby', 'Jordan Baker'],
      quote:
        'I believe that on the first night I went to Gatsby’s house I was one of the few guests who had actually been invited.',
      themes: ['Illusion versus reality', 'Class and social mobility'],
      tension: 2,
      significance:
        'Gatsby is met only after his legend, which is how the novel will keep presenting him.',
    },
    {
      where: 'Chapter 4',
      title: "Wolfshiem and Jordan's story",
      summary:
        "Gatsby drives Nick to New York, tells him a doubtful life story and introduces Meyer Wolfshiem, whom he names as the man who fixed the 1919 World's Series. That afternoon Jordan tells Nick that Gatsby loved Daisy in Louisville in 1917 and bought his house to be across the bay from her.",
      setting:
        "Gatsby's car on the road to New York, a Forty-second Street cellar restaurant, and the tea-garden of the Plaza Hotel",
      who: ['Nick Carraway', 'Jay Gatsby', 'Meyer Wolfshiem', 'Jordan Baker'],
      quote: 'Gatsby bought that house so that Daisy would be just across the bay.',
      themes: [
        'The American Dream and its corruption',
        'Love and idealisation',
        'The past and longing',
      ],
      tension: 2,
      significance: "Explains the green light and ties Gatsby's romance to crime.",
    },
    {
      where: 'Chapter 5',
      title: 'The reunion',
      summary:
        'Nick invites Daisy to tea, and Gatsby arrives pale and tense in the pouring rain. After an awkward start the two talk alone; then Gatsby shows Daisy his house and throws his shirts before her until she cries, and tells her about the green light on her dock.',
      setting: "Nick's cottage and Gatsby's mansion in West Egg, in rain and then sunshine",
      who: ['Nick Carraway', 'Jay Gatsby', 'Daisy Buchanan'],
      quote: 'His count of enchanted objects had diminished by one.',
      themes: ['Love and idealisation', 'Illusion versus reality', 'The past and longing'],
      tension: 3,
      significance: 'Gatsby gets what he wanted, and the dream begins to shrink at once.',
    },
    {
      where: 'Chapter 6',
      title: 'James Gatz',
      summary:
        "Nick reveals that Gatsby was born James Gatz of North Dakota, the son of poor farmers, and reinvented himself at seventeen when he rowed out to Dan Cody's yacht. Daisy dislikes Gatsby's next party, and afterwards Gatsby insists to Nick that the past can be repeated.",
      setting: "Gatsby's house and gardens, during and after a party",
      who: ['Nick Carraway', 'Jay Gatsby', 'Daisy Buchanan', 'Tom Buchanan'],
      quote: 'Why of course you can!',
      themes: ['The American Dream and its corruption', 'The past and longing'],
      tension: 3,
      significance: "Sets Gatsby's self-invention and his central delusion side by side.",
    },
    {
      where: 'Chapter 7',
      title: 'The Plaza Hotel',
      summary:
        "On the hottest day of the summer Gatsby tells Nick that Daisy's voice is full of money, and the group drives into New York and takes a suite at the Plaza. Tom exposes Gatsby's bootlegging, and Daisy, pressed to say she never loved Tom, cannot: she tells Gatsby she loves him now, but she did love Tom once.",
      setting: "The Buchanans' house in East Egg, then a suite at the Plaza Hotel, New York",
      who: ['Nick Carraway', 'Jay Gatsby', 'Daisy Buchanan', 'Tom Buchanan', 'Jordan Baker'],
      quote: 'Her voice is full of money',
      themes: [
        'Wealth: old money versus new money',
        'Class and social mobility',
        'Love and idealisation',
      ],
      tension: 4,
      significance: "Old money closes ranks, and Gatsby's dream breaks against Daisy's past.",
    },
    {
      where: 'Chapter 7',
      title: 'The death car',
      summary:
        "Driving home through the valley of ashes in Gatsby's car, Daisy hits and kills Myrtle, who has run out into the road. Gatsby tells Nick he will say he was driving, and he keeps watch outside the Buchanans' house in the moonlight while Tom and Daisy sit together inside at the kitchen table.",
      setting: "The road by Wilson's garage, then the Buchanans' grounds at night",
      who: [
        'Daisy Buchanan',
        'Jay Gatsby',
        'Myrtle Wilson',
        'George Wilson',
        'Tom Buchanan',
        'Nick Carraway',
      ],
      quote: 'So we drove on toward death through the cooling twilight.',
      themes: [
        'Wealth: old money versus new money',
        'Illusion versus reality',
        'Love and idealisation',
      ],
      tension: 5,
      significance: 'The catastrophe, and the moment Tom and Daisy retreat into their marriage.',
    },
    {
      where: 'Chapter 8',
      title: "Gatsby's death",
      summary:
        "In the early morning Gatsby tells Nick about loving Daisy in 1917, and Nick calls back across the lawn that Gatsby is worth more than all of them. That afternoon George Wilson, believing the owner of the car was Myrtle's lover and killer, finds Gatsby in his swimming pool, shoots him, and then kills himself.",
      setting: "Gatsby's house and swimming pool in West Egg",
      who: ['Nick Carraway', 'Jay Gatsby', 'George Wilson'],
      quote: 'They’re a rotten crowd',
      themes: ['The American Dream and its corruption', 'Illusion versus reality'],
      tension: 5,
      significance: "The dream's end, brought about by a man the rich never noticed.",
    },
    {
      where: 'Chapter 9',
      title: 'The funeral',
      summary:
        "Almost nobody comes to Gatsby's funeral. Wolfshiem will not come, Daisy sends no message, and only Nick, Gatsby's father, the minister, a few servants, the postman and the owl-eyed man from the library stand in the rain. Gatsby's father shows Nick the schedule his son wrote as a boy.",
      setting: "Gatsby's house, then a cemetery in the rain",
      who: ['Nick Carraway', 'Henry C. Gatz', 'Meyer Wolfshiem'],
      quote: 'But it wasn’t any use. Nobody came.',
      themes: ['The American Dream and its corruption', 'Class and social mobility'],
      tension: 3,
      significance:
        "The crowd that enjoyed Gatsby's hospitality abandons him, and the self-made man is revealed as a boy with a plan.",
    },
    {
      where: 'Chapter 9',
      title: 'Boats against the current',
      summary:
        "Nick decides to go back West. Before he leaves he sees Jordan for the last time, and a chance meeting with Tom on Fifth Avenue reveals that Tom told Wilson who owned the car. On his last night he lies on the beach below Gatsby's empty house and thinks of the island as Dutch sailors once saw it, and of Gatsby's belief in the green light.",
      setting: "Fifth Avenue, then the beach below Gatsby's house at night",
      who: ['Nick Carraway', 'Jordan Baker', 'Tom Buchanan'],
      quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
      themes: ['The past and longing', 'The American Dream and its corruption'],
      tension: 2,
      significance:
        "Turns one man's failure into a statement about everyone's relationship with hope and time.",
    },
  ],

  relationships: [
    {
      from: 'Jay Gatsby',
      to: 'Daisy Buchanan',
      kind: 'former lovers',
      note: "They fell in love in Louisville in 1917, when he was a penniless officer, and she married Tom while Gatsby was overseas. When they meet again almost five years later, Gatsby has built a whole life to win her back, but he loves an idea of her more than the woman. After Myrtle's death Daisy stays with Tom and sends nothing to Gatsby's funeral.",
    },
    {
      from: 'Tom Buchanan',
      to: 'Daisy Buchanan',
      kind: 'husband and wife',
      note: "Married in Louisville with enormous display (Chapter 4), they are not happy: Tom is openly unfaithful, and Daisy is weary and cynical. Yet at every crisis they close ranks, and after Myrtle's death Nick sees them at the kitchen table looking as if they were “conspiring together”.",
    },
    {
      from: 'Tom Buchanan',
      to: 'Myrtle Wilson',
      kind: 'lovers',
      note: "Tom keeps Myrtle in a flat in New York and shows her off in public. She sees him as a way out of the valley of ashes; he treats her as a possession, and breaks her nose when she says his wife's name.",
    },
    {
      from: 'George Wilson',
      to: 'Myrtle Wilson',
      kind: 'husband and wife',
      note: "George is devoted but powerless, and Myrtle says he “wasn't fit to lick my shoe”. When he discovers her affair he locks her in and plans to take her West, and her death drives him to kill Gatsby and then himself.",
    },
    {
      from: 'Nick Carraway',
      to: 'Jay Gatsby',
      kind: 'neighbours, then friends',
      note: 'Nick begins by disapproving of Gatsby and ends as the only person who stands by him, left in charge of the funeral because “no one else was interested”. On the last morning he calls out that Gatsby is worth the whole bunch put together, which he says was the only compliment he ever gave him.',
    },
    {
      from: 'Nick Carraway',
      to: 'Jordan Baker',
      kind: 'summer romance',
      note: "Nick is drawn to Jordan's cool confidence while knowing she is “incurably dishonest”. The affair ends in a telephone call on the day of Gatsby's death, and at their last meeting she turns his claim to honesty against him.",
    },
    {
      from: 'Nick Carraway',
      to: 'Daisy Buchanan',
      kind: 'cousins',
      note: "Daisy is Nick's “second cousin once removed”, which gives him his way into East Egg. He arranges her reunion with Gatsby and later judges her, with Tom, as one of the “careless people”.",
    },
    {
      from: 'Nick Carraway',
      to: 'Tom Buchanan',
      kind: 'college acquaintances',
      note: "Nick knew Tom at college and is pushed around by him, meeting Myrtle only because Tom insists. In Chapter 9 he refuses at first to shake Tom's hand, then does, feeling “as though I were talking to a child”.",
    },
    {
      from: 'Jay Gatsby',
      to: 'Meyer Wolfshiem',
      kind: 'business partners',
      note: "Wolfshiem claims he made Gatsby, raising him “up out of nothing”, and Tom links the two through bootlegging. Wolfshiem will not come to the funeral, a measure of how conditional Gatsby's friendships were.",
    },
    {
      from: 'Tom Buchanan',
      to: 'Jay Gatsby',
      kind: 'rivals',
      note: "Tom investigates Gatsby, mocks his pink suit and his Oxford claim, and exposes his bootlegging at the Plaza. Afterwards he tells Wilson whose car it was, which leads directly to Gatsby's death.",
    },
    {
      from: 'George Wilson',
      to: 'Jay Gatsby',
      kind: 'strangers joined by a death',
      note: "Wilson has to find out Gatsby's name before he can find him. Misled into believing Gatsby killed Myrtle and was her lover, he shoots him, so the poorest man in the novel destroys its great self-made man while the Buchanans go free.",
    },
  ],

  compareWith: [
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        "Another American classic in which a dreamer's version of the past is destroyed by a brutal, practical man, with class at the centre of the conflict: Blanche against Stanley, Gatsby against Tom.",
    },
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        "A tragedy of an outsider who has risen into a closed society, idealises a woman, and is destroyed partly by another man's manipulation, which makes it a strong partner for asking whether Gatsby is a tragic hero.",
    },
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        'A love story shaped by money and class, told by a retrospective first-person narrator, in which a poor outsider loves across a social divide and the outcome turns on wealth.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'crime_injustice',
    'intimate_relationships',
    'mental_health',
    'addiction',
    'discrimination',
  ],

  sources: [
    {
      label:
        "Wikisource, The Great Gatsby (1925), transcribed from scans of the Charles Scribner's Sons first edition, chapters 1 to 9 (base text for every quotation and passage)",
      url: 'https://en.wikisource.org/wiki/The_Great_Gatsby_(1925)',
    },
    {
      label:
        'Project Gutenberg eBook #64317, The Great Gatsby (second check of every quotation; British-spelled text with "orgiastic" on the last page)',
      url: 'https://www.gutenberg.org/ebooks/64317',
    },
    {
      label:
        "Wikipedia, The Great Gatsby: publication by Charles Scribner's Sons on 10 April 1925, and Trimalchio in West Egg among the working titles",
      url: 'https://en.wikipedia.org/wiki/The_Great_Gatsby',
    },
    {
      label:
        'Gottesman Libraries, Teachers College, Columbia University: "Today in History: F. Scott Fitzgerald Publishes The Great Gatsby" (publication date and publisher, second source)',
      url: 'https://library.tc.columbia.edu/blog/content/2025/april/today-in-history-f-scott-fitzgerald-publishes-the-great-gatsby.php',
    },
    {
      label:
        'Wikipedia, Trimalchio: a character in the Satyricon by Petronius, a former slave grown wealthy, known for lavish dinner parties; Trimalchio and Trimalchio in West Egg among the working titles',
      url: 'https://en.wikipedia.org/wiki/Trimalchio',
    },
    {
      label:
        'Wikipedia, Prohibition in the United States: began 17 January 1920 when the Volstead Act took effect; repealed 5 December 1933',
      url: 'https://en.wikipedia.org/wiki/Prohibition_in_the_United_States',
    },
    {
      label:
        'Wikipedia, Jazz Age: the term was in use before 1920 and Fitzgerald further popularised it with Tales of the Jazz Age (1922)',
      url: 'https://en.wikipedia.org/wiki/Jazz_Age',
    },
    {
      label:
        "Wikipedia, Tales of the Jazz Age: published by Charles Scribner's Sons, 22 September 1922",
      url: 'https://en.wikipedia.org/wiki/Tales_of_the_Jazz_Age',
    },
    {
      label: 'Online Etymology Dictionary, meretricious: from Latin meretrix, a prostitute',
      url: 'https://www.etymonline.com/word/meretricious',
    },
    {
      label:
        'Bible Gateway, Luke 2:41-49 (King James Version): the boy Jesus in the Temple, "about my Father\'s business", which Chapter 6 echoes',
      url: 'https://www.biblegateway.com/passage/?search=Luke%202%3A41-49&version=KJV',
    },
  ],
}
