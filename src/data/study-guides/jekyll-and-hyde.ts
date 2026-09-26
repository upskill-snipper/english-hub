import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Strange Case of Dr Jekyll and Mr Hyde, Robert Louis Stevenson (1886). A
 * SUPPLEMENT: the page at /revision/texts/jekyll-and-hyde keeps its overview,
 * context, themes, characters, key quotations and essay material, and this file
 * adds what it lacked, the close-reading extracts and the vocabulary, with the
 * timeline and character map that the animated visuals draw.
 *
 * Every extract, annotated phrase, scene-card quotation and quoted phrase in the
 * prose below was copied from the byte copy of Project Gutenberg #43 held at
 * src/data/full-texts/jekyll-and-hyde.ts, after reading the whole novella, so
 * that speaker and chapter were checked in context and not by searching for the
 * phrase alone. Glosses of allusions and period words are sourced below.
 *
 * WHERE THIS DISAGREES WITH THE PAGE ABOVE, THIS FILE IS RIGHT, and the page is
 * due a fix (see the audit notes for that route):
 * - "all human beings, as we meet them, are commingled out of good and evil" is
 *   Jekyll's, in Chapter 10. The page's key quotations give it to Utterson.
 * - "younger, lighter, happier" is a triplet of comparatives, not an oxymoron,
 *   as chapters/page.tsx calls it.
 * - "like a district of some city in a nightmare" is Soho in Chapter 4, not
 *   Chapter 1, and "the moment I choose, I can be rid of Mr. Hyde" is Chapter 3,
 *   not Chapter 2.
 * - Hyde's letter in Chapter 5 is only reported, never quoted, so nothing of it
 *   but its signature appears here.
 * - "audibly shattered" reports a sound and is not onomatopoeia, and Hyde's body
 *   is said to have "grown in stature" in Chapter 10; chapters/page.tsx and
 *   essay-plans/page.tsx say otherwise.
 *
 * Re-verified on 25 September 2026 by a second pass that read the whole held
 * edition again and checked every quoted span's chapter and speaker in context;
 * the publication facts and each gloss were re-checked against the sources below.
 *
 * Fact-checked adversarially on 26 September 2026. Every quotation still matched,
 * but the prose had drifted from the text in places, now corrected: it said speed
 * was "one of the few things" witnesses agree on, where Chapter 4 says they agreed
 * on one point only, a sense of deformity; it put the cabinet "above" the
 * dissecting rooms (it is up a flight of stairs at the far end of the theatre);
 * it called Lanyon's narrative a letter; it gave Hyde's meeting with Utterson as
 * "at ten" (the text says only that the street was quiet "by ten o'clock"); and
 * it stated as fact several readings, such as the note being "forged", that are
 * Utterson's suspicion or the critic's interpretation.
 *
 * Extract passages that run over more than one paragraph join the paragraphs
 * with " / ", which the page renders as a line break. The held edition stores
 * its paragraph breaks as escaped newlines, so a passage joined any other way
 * cannot be matched against it; with " / " each paragraph is checked on its own.
 */
export const guide: StudyGuide = {
  slug: 'jekyll-and-hyde',
  title: 'Strange Case of Dr Jekyll and Mr Hyde',
  author: 'Robert Louis Stevenson',
  form: 'novella',
  scope:
    'The whole novella: ten chapters, from “Story of the Door” to “Henry Jekyll’s Full Statement of the Case”. AQA and Eduqas print the title as The Strange Case of Dr Jekyll and Mr Hyde, and Edexcel and OCR as Dr Jekyll and Mr Hyde; the first edition of 1886 began simply Strange Case.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First published in 1886 by Longmans, Green and Co. in London and by Charles Scribner's Sons in New York. Quotations follow the Project Gutenberg edition (eBook #43).",
  },

  native: {
    overview: '/revision/texts/jekyll-and-hyde',
    context: '/revision/texts/jekyll-and-hyde',
    themes: '/revision/texts/jekyll-and-hyde',
    characters: '/revision/texts/jekyll-and-hyde',
    keyQuotes: '/revision/texts/jekyll-and-hyde',
    languageAnalysis: '/revision/texts/jekyll-and-hyde',
    structureForm: '/revision/texts/jekyll-and-hyde',
    examPractice: '/revision/texts/jekyll-and-hyde',
    modelAnswer: '/revision/texts/jekyll-and-hyde',
  },

  extracts: [
    {
      title: 'Utterson meets Hyde',
      where: 'Chapter 2, “Search for Mr. Hyde”',
      pointer:
        "About two-thirds of the way through Chapter 2, shortly after Hyde gives Utterson his Soho address and before Utterson calls at Jekyll's front door: from Hyde's angry “He never told you” to Utterson's “it is on that of your new friend”.",
      text: `“He never told you,” cried Mr. Hyde, with a flush of anger. “I did not think you would have lied.” / “Come,” said Mr. Utterson, “that is not fitting language.” / The other snarled aloud into a savage laugh; and the next moment, with extraordinary quickness, he had unlocked the door and disappeared into the house. / The lawyer stood awhile when Mr. Hyde had left him, the picture of disquietude. Then he began slowly to mount the street, pausing every step or two and putting his hand to his brow like a man in mental perplexity. The problem he was thus debating as he walked, was one of a class that is rarely solved. Mr. Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation, he had a displeasing smile, he had borne himself to the lawyer with a sort of murderous mixture of timidity and boldness, and he spoke with a husky, whispering and somewhat broken voice; all these were points against him, but not all of these together could explain the hitherto unknown disgust, loathing and fear with which Mr. Utterson regarded him. “There must be something else,” said the perplexed gentleman. “There is something more, if I could find a name for it. God bless me, the man seems hardly human! Something troglodytic, shall we say? or can it be the old story of Dr. Fell? or is it the mere radiance of a foul soul that thus transpires through, and transfigures, its clay continent? The last, I think; for, O my poor old Harry Jekyll, if ever I read Satan’s signature upon a face, it is on that of your new friend.”`,
      annotations: [
        {
          phrase: 'snarled aloud into a savage laugh',
          note: '“Snarled” is a verb more often used of a dog or a wild animal than of a gentleman, so the moment Hyde is challenged his speech breaks down into noise. A laugh is normally a social sound; here, qualified by “savage”, it becomes a threat and a sign of something uncivilised.',
        },
        {
          phrase: 'with extraordinary quickness',
          note: "Hyde's quickness is a detail that recurs: in Chapter 8 Poole says the masked figure in the cabinet had “the same quick, light way with it”. He vanishes before Utterson, or the reader, can take him in, which keeps him a glimpse rather than a portrait.",
        },
        {
          phrase: 'an impression of deformity without any nameable malformation',
          note: "Utterson is a lawyer who works with evidence, yet he cannot point to one actual defect. Stevenson keeps Hyde vague, as in Enfield's account in Chapter 1 (“I can’t describe him”), and one effect is that each reader supplies the horror from their own imagination.",
        },
        {
          phrase: 'a sort of murderous mixture of timidity and boldness',
          note: 'Hyde is timid and bold at once. One reading is that this is the manner of a creature free of conscience but afraid of being caught, which is exactly his position: he shrank back “with a hissing intake of the breath” moments earlier. “Murderous” is a chilling word to choose before anyone has been murdered, and it prepares the reader for Chapter 4.',
        },
        {
          phrase: 'the man seems hardly human',
          note: "The exclamation is the point where Utterson's calm, lawyerly manner gives way. “Hardly human” voices a fear that runs through the novella, that civilised man might slide back towards the animal, a fear critics often link to late-Victorian anxieties about Darwin's theory of evolution.",
        },
        {
          phrase: 'Something troglodytic, shall we say?',
          note: 'A troglodyte is a cave-dweller, so the word pushes Hyde back to a primitive stage of humanity. The hesitant question, “shall we say?”, shows Utterson reaching for a word and not quite finding one, a failure other witnesses to Hyde share.',
        },
        {
          phrase: 'the old story of Dr. Fell',
          note: 'An allusion to a rhyme traditionally credited to Tom Brown, a seventeenth-century Oxford student, about disliking Dr John Fell, the dean of his college, without being able to say why. Utterson briefly wonders whether his disgust is plain prejudice, then rejects that for a spiritual explanation.',
        },
        {
          phrase: 'transpires through, and transfigures, its clay continent',
          note: "“Continent” is an old word for a container, so the body is pictured as a vessel of clay, an ancient image of human flesh. Utterson's final theory is that a foul soul shines out through the body and reshapes it, so the face shows what the man is.",
        },
        {
          phrase: 'Satan’s signature upon a face',
          note: "A signature proves who wrote a document, and this novella turns on signatures: the cheque in Chapter 1, the will, and the handwriting Guest compares in Chapter 5. The metaphor says evil has written itself on Hyde; on a second reading it also hints that Jekyll is Hyde's author.",
        },
      ],
      question:
        'Starting with this extract, how does Stevenson present Mr Hyde as disturbing and threatening? Write about: how Stevenson presents Hyde in this extract; how Stevenson presents Hyde in the novel as a whole.',
    },
    {
      title: 'The murder of Sir Danvers Carew',
      where: 'Chapter 4, “The Carew Murder Case”',
      pointer:
        'The opening paragraph of Chapter 4, from “Nearly a year later, in the month of October” to “the maid fainted”.',
      text: `Nearly a year later, in the month of October, 18—, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few and startling. A maid servant living alone in a house not far from the river, had gone upstairs to bed about eleven. Although a fog rolled over the city in the small hours, the early part of the night was cloudless, and the lane, which the maid’s window overlooked, was brilliantly lit by the full moon. It seems she was romantically given, for she sat down upon her box, which stood immediately under the window, and fell into a dream of musing. Never (she used to say, with streaming tears, when she narrated that experience), never had she felt more at peace with all men or thought more kindly of the world. And as she so sat she became aware of an aged beautiful gentleman with white hair, drawing near along the lane; and advancing to meet him, another and very small gentleman, to whom at first she paid less attention. When they had come within speech (which was just under the maid’s eyes) the older man bowed and accosted the other with a very pretty manner of politeness. It did not seem as if the subject of his address were of great importance; indeed, from his pointing, it sometimes appeared as if he were only inquiring his way; but the moon shone on his face as he spoke, and the girl was pleased to watch it, it seemed to breathe such an innocent and old-world kindness of disposition, yet with something high too, as of a well-founded self-content. Presently her eye wandered to the other, and she was surprised to recognise in him a certain Mr. Hyde, who had once visited her master and for whom she had conceived a dislike. He had in his hand a heavy cane, with which he was trifling; but he answered never a word, and seemed to listen with an ill-contained impatience. And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman. The old gentleman took a step back, with the air of one very much surprised and a trifle hurt; and at that Mr. Hyde broke out of all bounds and clubbed him to the earth. And next moment, with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows, under which the bones were audibly shattered and the body jumped upon the roadway. At the horror of these sights and sounds, the maid fainted.`,
      annotations: [
        {
          phrase: 'a crime of singular ferocity',
          note: "The chapter opens like a newspaper report, naming the public reaction and the victim's “high position” before the crime itself. Stevenson frames the murder as a scandal for respectable London as well as a private horror, which is how Utterson will experience it.",
        },
        {
          phrase: 'never had she felt more at peace with all men',
          note: "The maid's peaceful, romantic mood under a cloudless sky and a full moon is built up so that the violence can break it. The structure is calm first, then sudden horror, and the contrast makes the attack far more shocking than it would be on its own.",
        },
        {
          phrase: 'an aged beautiful gentleman with white hair',
          note: '“Beautiful” is an unusual word for an old man, and with the moonlight on his face and his “innocent and old-world kindness”, Carew is drawn almost as a saint. The more idealised the victim, the more monstrous the attack appears.',
        },
        {
          phrase: 'a heavy cane, with which he was trifling',
          note: "A cane was a gentleman's accessory, a sign of respectability. Hyde toys with it idly before it becomes a weapon, and Utterson later recognises the broken stick as one he gave Jekyll, so a respectable object ties the crime to a respectable man.",
        },
        {
          phrase: 'broke out in a great flame of anger',
          note: 'The fire metaphor makes the anger sudden and consuming. “Broke out” returns a sentence later when Hyde “broke out of all bounds”, and the repetition marks each stage of a loss of restraint, as if something caged were escaping.',
        },
        {
          phrase: '(as the maid described it)',
          note: 'The bracket reminds us that this is a witness statement retold by a narrator. Stevenson keeps the reader at one remove from the violence, as a court or a newspaper would, which suits a novella built from testimonies and documents.',
        },
        {
          phrase: 'with ape-like fury',
          note: "The compound adjective links Hyde to apes. For readers who knew Darwin's argument that humans and apes share ancestors, the image could suggest the animal still inside civilised man, and it is one of several moments that invite us to see Hyde as less than human.",
        },
        {
          phrase: 'hailing down a storm of blows',
          note: 'After the fire of his anger comes a weather metaphor, so Hyde becomes a natural force rather than a person. “Storm” suggests violence that is relentless and without reason, which makes it harder, not easier, for the reader to understand.',
        },
        {
          phrase: 'the bones were audibly shattered',
          note: '“Audibly” tells us the breaking could be heard; it reports a sound rather than imitating one, so this is not onomatopoeia. The horror is in the flat, factual adverb, and in the maid being close enough to hear, which is why the next sentence speaks of “sights and sounds”.',
        },
        {
          phrase: 'the maid fainted',
          note: 'The only witness loses consciousness, so the paragraph ends abruptly and the reader loses the eye-witness. That gap is typical of the novella, in which the most important moments are hidden, interrupted or reported only afterwards.',
        },
      ],
      question:
        "Starting with this extract, how does Stevenson present violence in the novel? Write about: how Stevenson presents Hyde's violence in this extract; how Stevenson presents violence and its effects in the novel as a whole.",
    },
    {
      title: "Jekyll's first transformation",
      where: 'Chapter 10, “Henry Jekyll’s Full Statement of the Case”',
      pointer:
        "Early in Jekyll's statement, just after he first drinks the potion: from “The most racking pangs succeeded” to “the appearance of Edward Hyde”.",
      text: `The most racking pangs succeeded: a grinding in the bones, deadly nausea, and a horror of the spirit that cannot be exceeded at the hour of birth or death. Then these agonies began swiftly to subside, and I came to myself as if out of a great sickness. There was something strange in my sensations, something indescribably new and, from its very novelty, incredibly sweet. I felt younger, lighter, happier in body; within I was conscious of a heady recklessness, a current of disordered sensual images running like a millrace in my fancy, a solution of the bonds of obligation, an unknown but not an innocent freedom of the soul. I knew myself, at the first breath of this new life, to be more wicked, tenfold more wicked, sold a slave to my original evil; and the thought, in that moment, braced and delighted me like wine. I stretched out my hands, exulting in the freshness of these sensations; and in the act, I was suddenly aware that I had lost in stature. / There was no mirror, at that date, in my room; that which stands beside me as I write, was brought there later on and for the very purpose of these transformations. The night however, was far gone into the morning—the morning, black as it was, was nearly ripe for the conception of the day—the inmates of my house were locked in the most rigorous hours of slumber; and I determined, flushed as I was with hope and triumph, to venture in my new shape as far as to my bedroom. I crossed the yard, wherein the constellations looked down upon me, I could have thought, with wonder, the first creature of that sort that their unsleeping vigilance had yet disclosed to them; I stole through the corridors, a stranger in my own house; and coming to my room, I saw for the first time the appearance of Edward Hyde.`,
      annotations: [
        {
          phrase: 'the hour of birth or death',
          note: 'Jekyll compares the change to being born and to dying, and both are true: Hyde is born, and in a sense Jekyll dies. The pairing returns a few paragraphs later as “these agonies of death and birth”, so the image is deliberate rather than casual.',
        },
        {
          phrase: 'I felt younger, lighter, happier in body',
          note: "Three comparative adjectives in a row, a triplet or tricolon, build a rising sense of release. Nothing here contradicts itself, so it is not an oxymoron; what unsettles is that the pleasure is sincere, and that Hyde really is, in Jekyll's later words, “smaller, slighter and younger” than Jekyll.",
        },
        {
          phrase: 'running like a millrace in my fancy',
          note: "A millrace is the fast channel of water that drives a mill wheel: powerful, rushing and hard to stop. The simile makes Jekyll's desires a current he has released but cannot steer, and “disordered” contrasts with the orderly life he shows the public.",
        },
        {
          phrase: 'a solution of the bonds of obligation',
          note: "“Solution” is a chemist's word for dissolving, so Jekyll describes the effect of his drug in the language of his own chemistry: it dissolves the ties of duty that bind a gentleman. Science and morality meet in a single noun.",
        },
        {
          phrase: 'an unknown but not an innocent freedom of the soul',
          note: "The careful qualification, “not an innocent”, admits guilt without naming what the freedom is for. Jekyll never specifies his pleasures, and that silence leaves readers to imagine them, one of the novella's most consistent methods.",
        },
        {
          phrase: 'sold a slave to my original evil',
          note: '“Original evil” echoes the Christian doctrine of original sin, and being sold as a slave may recall St Paul in his letter to the Romans, who calls himself sold under sin; the same chapter speaks of a law warring in his “members”, as Jekyll earlier speaks of “the perennial war among my members”. Jekyll feels freedom and slavery at the same moment, which one reading takes as the logic of addiction.',
        },
        {
          phrase: 'braced and delighted me like wine',
          note: 'The simile compares the change to drink, and later in the statement Jekyll compares himself to a drunkard reasoning with his vice. It supports reading the novella as a study of addiction, and sits pointedly beside Utterson, who drinks gin alone to discipline his taste for good wine.',
        },
        {
          phrase: 'I had lost in stature',
          note: 'Hyde is smaller than Jekyll, which Jekyll later explains by his evil side being “less robust and less developed” than his good. Later still it seems to him that Hyde’s body “had grown in stature” as that side of him was exercised, so the size of Hyde tracks how far Jekyll has indulged him. “Stature” can also mean standing or reputation, so the phrase hints at the social cost as well as the physical change.',
        },
        {
          phrase: 'the constellations looked down upon me',
          note: 'Jekyll imagines the stars watching him “with wonder”, as the “first creature of that sort” they have ever seen. The personification suggests his pride: even in secret he pictures himself as a discoverer admired by the universe, a hint of the arrogance that ruins him.',
        },
        {
          phrase: 'a stranger in my own house',
          note: 'Jekyll becomes an intruder in his own home, creeping past his sleeping servants. The house, with its grand front and its neglected back door, can be read as a picture of the self, and here the self no longer recognises its owner.',
        },
      ],
      question:
        "Starting with this extract, how does Stevenson present Jekyll's attitude to his darker side? Write about: how Stevenson presents Jekyll's feelings in this extract; how Stevenson presents Jekyll's attitude to Hyde in the novel as a whole.",
    },
  ],

  vocabulary: [
    {
      term: 'Countenance',
      definition:
        "A face and its expression. The novella opens on Utterson's “rugged countenance” (Chapter 1), and Jekyll confesses to wearing “a more than commonly grave countenance before the public” (Chapter 10): in this story the face is a public mask.",
    },
    {
      term: "Cain's heresy",
      definition:
        "Utterson's joke in Chapter 1. In Genesis, Cain kills his brother Abel and, asked where Abel is, answers by asking whether he is his brother's keeper. Utterson's heresy is to refuse to police other men's morals: “I let my brother go to the devil in his own way.” The same paragraph says he would rather help than reprove, so the joke hides a kindness, and also a habit of looking away that the plot will test.",
    },
    {
      term: 'Juggernaut',
      definition:
        'An unstoppable, crushing force. The word comes from Jagannath, a Hindi name meaning lord of the world, for a form of Krishna whose huge chariot is drawn in procession at Puri in India; European accounts claimed worshippers were crushed under its wheels, which is now doubted. Enfield says Hyde was “like some damned Juggernaut” (Chapter 1).',
    },
    {
      term: 'Sawbones',
      definition:
        'Slang for a surgeon or doctor. Enfield uses it in Chapter 1 for the doctor the trampled girl had been sent to fetch, a man with an Edinburgh accent who turns “sick and white with the desire to kill” Hyde.',
    },
    {
      term: 'Apocryphal',
      definition:
        "Of doubtful truth or authenticity. Enfield tells Hyde that “the whole business looked apocryphal”, because a man does not usually “walk into a cellar door at four in the morning” and come out with another man's cheque (Chapter 1).",
    },
    {
      term: "Coutts's",
      definition:
        'Coutts and Co., a private bank on the Strand in London, founded in 1692, whose clients have included the royal family. A cheque drawn “on Coutts’s” (Chapter 1) points to a wealthy, respectable account holder, which is what makes it so strange in the hand of a man who has just trampled a child.',
    },
    {
      term: 'Queer Street',
      definition:
        "Old slang for trouble, especially debt, or for shady circumstances. Enfield's rule, “the more it looks like Queer Street, the less I ask” (Chapter 1), sums up the polite silence that lets Hyde go unchallenged for so long.",
    },
    {
      term: 'Holograph',
      definition:
        "Written entirely in the hand of the person who signs it. Jekyll's will is holograph because Utterson refused to help draw it up (Chapter 2), a detail that matters once handwriting becomes evidence in Chapter 5.",
    },
    {
      term: 'M.D., D.C.L., L.L.D., F.R.S.',
      definition:
        "The letters after Jekyll's name in his will (Chapter 2): Doctor of Medicine, Doctor of Civil Law, Doctor of Laws (usually written LL.D.) and Fellow of the Royal Society. The string of honours shows how respectable he is; Hyde, by contrast, has no family that can be traced and has never been photographed (Chapter 4).",
    },
    {
      term: 'Damon and Pythias',
      definition:
        "In Greek legend, two followers of Pythagoras at Syracuse. When Pythias was condemned to death by the tyrant Dionysius I, Damon offered himself as a hostage for him, and their names became a byword for loyal friendship. Lanyon says Jekyll's “unscientific balderdash” would have parted even them (Chapter 2).",
    },
    {
      term: 'Troglodytic',
      definition:
        'Like a troglodyte, a cave-dweller: primitive or brutish. Utterson gropes for the word in Chapter 2, “Something troglodytic, shall we say?”, when he cannot explain his disgust at Hyde.',
    },
    {
      term: 'Dr Fell',
      definition:
        'Utterson wonders whether his loathing of Hyde is “the old story of Dr. Fell” (Chapter 2). The allusion is to a rhyme traditionally credited to Tom Brown, a student at Oxford in the late seventeenth century, about Dr John Fell, the dean of his college, in which the speaker dislikes Fell but cannot say why. The story of how Brown came to write it is probably legend.',
    },
    {
      term: 'Pede claudo',
      definition:
        "Latin for with limping foot, from the closing lines of Horace's Odes (Book 3, Ode 2), where Punishment, though lame, rarely gives up the pursuit of the criminal who has run on ahead. Utterson fears that some old sin of Jekyll's is catching up with him “years after memory has forgotten” it (Chapter 2).",
    },
    {
      term: 'Conveyancing',
      definition:
        "The legal work of drawing up deeds that transfer property. Stevenson's joke in Chapter 2 is that conveyancing is the only thing Utterson feels anything like a scientific passion for, which tells us how dry and cautious he is.",
    },
    {
      term: 'Pall',
      definition:
        'A heavy cloth laid over a coffin, and so any dark covering of smoke or gloom. On the morning after the murder “A great chocolate-coloured pall lowered over heaven” (Chapter 4), and the fog becomes a funeral cloth over London.',
    },
    {
      term: 'Penny numbers',
      definition:
        'Cheap fiction sold in weekly parts at a penny each, such as the sensational serials known as penny dreadfuls. The Soho street where Hyde lodges has a shop selling them, listed alongside “a gin palace” (Chapter 4), which marks it as poor and rough.',
    },
    {
      term: 'Chief of sinners',
      definition:
        'In the First Letter to Timothy (1:15), traditionally attributed to St Paul, the writer calls himself the chief of sinners. Jekyll borrows the phrase in his letter to Utterson in Chapter 6, “If I am the chief of sinners, I am the chief of sufferers also”, asking for pity as well as confessing guilt.',
    },
    {
      term: 'Carbuncle',
      definition:
        'A deep-red gemstone; the same word also names a large, painful boil. In Chapter 5, “the lamps glimmered like carbuncles” in the fog: jewels, but perhaps also sores on the face of the city.',
    },
    {
      term: 'Cabinet',
      definition:
        "An old word for a small private room or study. Jekyll's cabinet, up a flight of stairs behind a door of red baize at the far end of the old dissecting theatre, is where he works, transforms, and at last shuts himself away (Chapters 5 and 8).",
    },
    {
      term: 'Cheval-glass',
      definition:
        'A long mirror in a frame on a swivel, so that it can be tilted. After the break-in Poole whispers that it “has seen some strange things” (Chapter 8). In his statement Jekyll says the mirror that “stands beside me as I write” was brought there “for the very purpose of these transformations” (Chapter 10).',
    },
    {
      term: 'Phial',
      definition:
        "A small glass bottle for medicine. Jekyll's letter tells Lanyon he will know the right drawer by its contents, “some powders, a phial and a paper book” (Chapter 9).",
    },
    {
      term: 'Tincture',
      definition:
        'A medicine made by dissolving a substance in alcohol. Lanyon watches his visitor measure out “a few minims of the red tincture” (Chapter 9), and Jekyll says he “had long since prepared my tincture” before the first experiment (Chapter 10).',
    },
    {
      term: 'Minim',
      definition:
        'A tiny unit of liquid measure, one sixtieth of a fluid drachm, which replaced the drop because drops vary in size. The precise measuring in Chapter 9 makes an impossible transformation begin like an ordinary prescription.',
    },
    {
      term: 'Ebullition',
      definition:
        'Boiling or bubbling up; the word can also mean a sudden outburst of feeling. Both senses fit Chapter 9, where “the ebullition ceased” and the mixture turns dark purple, then watery green, shortly before Hyde drinks it and changes in front of Lanyon.',
    },
    {
      term: 'Hansom',
      definition:
        "A two-wheeled, horse-drawn cab for hire in London, patented by Joseph Hansom in 1834. Lanyon takes one to Jekyll's house (Chapter 9), and Hyde summons one after the change in Regent's Park (Chapter 10).",
    },
    {
      term: 'Transcendental medicine',
      definition:
        'Medicine that claims to go beyond the physical and material towards the spiritual. Hyde taunts Lanyon for having “denied the virtue of transcendental medicine” and for being “bound to the most narrow and material views” (Chapter 9).',
    },
    {
      term: 'Duplicity',
      definition:
        "Usually deceitfulness or double-dealing, from the Latin for double. Jekyll's phrase “a profound duplicity of life” leans on the sense of doubleness, a life split in two, and he insists that he was “in no sense a hypocrite” (Chapter 10).",
    },
    {
      term: 'Duality',
      definition:
        "The state of being double or two-sided. Jekyll's phrase is “the thorough and primitive duality of man” (Chapter 10), and it names the idea at the centre of most readings of the novella.",
    },
    {
      term: 'Polity, denizens',
      definition:
        'A polity is an organised state; denizens are its inhabitants. Jekyll guesses that a person may prove to be “a mere polity of multifarious, incongruous and independent denizens” (Chapter 10): not two selves but a whole crowd of them.',
    },
    {
      term: 'Commingled',
      definition:
        "Mixed together. The line “all human beings, as we meet them, are commingled out of good and evil” is Jekyll's, in his statement (Chapter 10), explaining why Hyde, who alone is “pure evil”, disturbs everyone who meets him.",
    },
    {
      term: 'Captives of Philippi',
      definition:
        "In Acts 16, an earthquake shakes the prison at Philippi where Paul and Silas are held, and all its doors open. Jekyll borrows the image for his drug, which “shook the doors of the prisonhouse of my disposition” and let out whatever stood within (Chapter 10). The allusion has a twist: in Acts the prisoners stay where they are, but in Jekyll's version “that which stood within ran forth”.",
    },
    {
      term: 'Bravos',
      definition:
        'Hired thugs or assassins. Jekyll boasts that men have before “hired bravos to transact their crimes”, but that he was the first to do so “for his pleasures” (Chapter 10).',
    },
    {
      term: 'Familiar',
      definition:
        'In folklore, a spirit that serves a witch or magician. Jekyll calls Hyde “This familiar that I called out of my own soul” (Chapter 10), casting himself as a sorcerer summoning a demon rather than a scientist running an experiment.',
    },
    {
      term: 'Babylonian finger on the wall',
      definition:
        "In the Book of Daniel, a hand writes on the wall of King Belshazzar's palace, and the words are read as God's judgement: he has been weighed and found wanting. Jekyll recalls it after waking as Hyde (Chapter 10), and later admits he chose the better part and was “found wanting in the strength to keep to it”.",
    },
    {
      term: 'Doppelgänger',
      definition:
        'A double of a living person, in folklore often a ghostly one that haunts its original. Hyde is a double with a twist: not a separate being who resembles Jekyll, but Jekyll himself in another body.',
    },
    {
      term: 'Physiognomy',
      definition:
        'The practice of judging character from the face, popular well into the nineteenth century. When Utterson reads “Satan’s signature upon a face” (Chapter 2), he reads Hyde exactly as physiognomy taught people to read faces.',
    },
    {
      term: 'Atavism',
      definition:
        "The reappearance of an ancestral trait lost through evolution. In the 1870s the Italian criminologist Cesare Lombroso popularised the idea that criminals were throwbacks to an earlier stage of humanity. Hyde's “ape-like” violence invites this reading, though Stevenson never uses the word.",
    },
    {
      term: 'Epistolary',
      definition:
        "Told through letters or other documents. The last two chapters are documents, Lanyon's narrative and Jekyll's statement, and the plot before them turns on a will, notes to chemists and a letter signed “Edward Hyde”.",
    },
    {
      term: 'Gothic',
      definition:
        "Fiction built on fear, haunting and secrets, a tradition usually traced to Horace Walpole's The Castle of Otranto (1764). Stevenson brings its locked rooms and monsters into respectable modern London, which is why the novella is often called urban Gothic.",
    },
    {
      term: 'Fin de siècle',
      definition:
        'French for end of the century: the closing years of the nineteenth century, especially the 1890s, a period associated with pessimism and with fears that civilisation might decay. The novella appeared in 1886, and it is often read as an early expression of that mood.',
    },
    {
      term: 'Novella',
      definition:
        "A prose story longer than a short story but shorter than a novel. Stevenson's ten chapters, most of them short, suit a tightly controlled mystery, in which every scene either deepens the secret or hands over a clue.",
    },
  ],

  timeline: [
    {
      where: 'Chapter 1',
      title: "The door and Enfield's story",
      summary:
        'On their Sunday walk, Utterson and his distant kinsman Enfield pass a neglected door. Enfield tells how, at about three one winter morning, he saw a small man trample a girl of eight or ten; the man paid a hundred pounds, partly with a cheque signed by a famous name. The two agree never to mention it again.',
      setting: 'A by-street in a busy quarter of London, on a Sunday',
      who: ['Mr Gabriel John Utterson', 'Richard Enfield', 'Mr Edward Hyde'],
      quote: "It wasn't like a man; it was like some damned Juggernaut.",
      themes: ['Secrecy and reputation', 'Good versus evil'],
      tension: 3,
      significance:
        "The mystery and the gentlemen's habit of silence begin together: their first response to evil is to stop asking about it.",
    },
    {
      where: 'Chapter 2',
      title: 'The will and Mr Seek',
      summary:
        "At home Utterson rereads Jekyll's will, written in Jekyll's own hand: everything goes to his “friend and benefactor Edward Hyde”, who is also to take Jekyll's place after any disappearance of more than three months. Lanyon says Jekyll became “too fanciful” for him more than ten years ago. Haunted by nightmares, Utterson begins to watch the door.",
      setting: "Utterson's house, then Dr Lanyon's house in Cavendish Square",
      who: ['Mr Gabriel John Utterson', 'Dr Hastie Lanyon'],
      quote: 'If he be Mr. Hyde... I shall be Mr. Seek.',
      themes: ['Secrecy and reputation', 'Science and religion'],
      tension: 2,
      significance:
        'The lawyer turns detective, and the novella takes the shape of an investigation told from outside the secret.',
    },
    {
      where: 'Chapter 2',
      title: 'Utterson meets Hyde',
      summary:
        "On a frosty night, some time after ten o'clock, Utterson stops a small man at the door. Hyde gives him a Soho address, accuses him of lying and vanishes inside with a savage laugh. Utterson, disgusted without knowing why, calls at Jekyll's house round the corner, where Poole tells him Hyde has a key and the servants are ordered to obey him.",
      setting: "The by-street at night, then the hall of Jekyll's house",
      who: ['Mr Gabriel John Utterson', 'Mr Edward Hyde', 'Poole'],
      quote: "if ever I read Satan's signature upon a face",
      themes: ['Duality of human nature', 'Good versus evil'],
      tension: 3,
      significance:
        "The first direct sight of Hyde confirms that he produces a revulsion nobody can name, and that he has the run of Jekyll's house.",
    },
    {
      where: 'Chapter 3',
      title: 'Jekyll at ease',
      summary:
        "A fortnight later Utterson stays behind after one of Jekyll's dinners. Jekyll mocks Lanyon as a “hide-bound pedant”, turns pale when Hyde is mentioned, insists the matter is private, and makes Utterson promise to see that Hyde gets his rights if Jekyll is “taken away”.",
      setting: "Jekyll's house, by the fire after a dinner party",
      who: ['Dr Henry Jekyll', 'Mr Gabriel John Utterson'],
      quote: 'the moment I choose, I can be rid of Mr. Hyde',
      themes: ['Duality of human nature', 'Secrecy and reputation'],
      tension: 2,
      significance:
        'Jekyll claims control, and on a second reading the line is heavy with irony, because control is exactly what he loses.',
    },
    {
      where: 'Chapter 4',
      title: 'The Carew murder',
      summary:
        'Nearly a year later, in October, a maid at her moonlit window sees Hyde attack a courteous elderly gentleman with a heavy cane, and faints. The dead man is Sir Danvers Carew, carrying a letter addressed to Utterson, and Utterson recognises the broken stick as one he once gave to Jekyll.',
      setting: 'A lane near the river, under a full moon',
      who: ['Mr Edward Hyde', 'Sir Danvers Carew', 'Mr Gabriel John Utterson'],
      quote: 'with ape-like fury, he was trampling his victim under foot',
      themes: ['Good versus evil', 'Duality of human nature'],
      tension: 5,
      significance:
        "Hyde's violence escalates from a trampled child to murder, and the weapon leads straight back to Jekyll.",
    },
    {
      where: 'Chapter 4',
      title: 'Soho in the fog',
      summary:
        "Utterson takes Inspector Newcomen of Scotland Yard to Hyde's rooms in Soho through the first fog of the season, a “chocolate-coloured pall” over the city. The rooms are luxurious but ransacked; the other half of the stick and a burnt cheque book are found, but Hyde has vanished, and the few who can describe him agree only on a sense of deformity.",
      setting: 'A dingy street in Soho, in a brown morning fog',
      who: ['Mr Gabriel John Utterson'],
      quote: 'like a district of some city in a nightmare',
      themes: ['Secrecy and reputation', 'Repression and Victorian hypocrisy'],
      tension: 3,
      significance:
        "The fog makes London itself a place of concealment, and the respectable doctor's favourite turns out to live in comfort in a disreputable district.",
    },
    {
      where: 'Chapter 5',
      title: 'The letter and the handwriting',
      summary:
        "In his cabinet, up a flight of stairs at the far end of the old dissecting theatre, a deathly sick Jekyll swears he is done with Hyde and hands Utterson a letter signed “Edward Hyde”. Poole says nothing was handed in that day. That evening Utterson's head clerk, Mr Guest, compares it with a note from Jekyll.",
      setting: "Jekyll's cabinet, then Utterson's fireside in the fog",
      who: ['Dr Henry Jekyll', 'Mr Gabriel John Utterson', 'Poole', 'Mr Guest'],
      quote: 'the two hands are in many points identical: only differently sloped',
      themes: ['Secrecy and reputation', 'Duality of human nature'],
      tension: 3,
      significance:
        'Utterson now suspects Jekyll of forging for a murderer, and locks the note in his safe: in effect he chooses to protect a reputation rather than pursue the truth.',
    },
    {
      where: 'Chapter 6',
      title: "Lanyon's shock",
      summary:
        'With Hyde gone, Jekyll returns to society, charity and religion for more than two months, then shuts his door. Utterson finds Lanyon a dying man who refuses to speak of Jekyll. Lanyon dies soon after, leaving a sealed envelope “not to be opened till the death or disappearance of Dr. Henry Jekyll”.',
      setting: "Dr Lanyon's house, then Utterson's business room by candlelight",
      who: ['Mr Gabriel John Utterson', 'Dr Hastie Lanyon', 'Dr Henry Jekyll'],
      quote: 'He had his death-warrant written legibly upon his face.',
      themes: ['Science and religion', 'Secrecy and reputation'],
      tension: 3,
      significance:
        'A sealed document and a silenced witness: Utterson honours the seal rather than read what would explain everything.',
    },
    {
      where: 'Chapter 7',
      title: 'Incident at the window',
      summary:
        'On another Sunday walk Utterson and Enfield step into the court and see Jekyll at a half-open window. He agrees to talk from there, but his smile is suddenly replaced by a look of terror and despair, the window is thrust down, and the two men leave in silence.',
      setting: "The court beneath the windows of Jekyll's cabinet, at sunset",
      who: ['Mr Gabriel John Utterson', 'Richard Enfield', 'Dr Henry Jekyll'],
      quote: 'like some disconsolate prisoner',
      themes: ['Duality of human nature', 'Secrecy and reputation'],
      tension: 4,
      significance:
        'The shortest chapter almost shows the change in front of witnesses, and still all Utterson can say is “God forgive us”, while Enfield only nods.',
    },
    {
      where: 'Chapter 8',
      title: 'The last night',
      summary:
        "On a wild March night Poole fetches Utterson to Jekyll's house, where the servants are huddled in fear. The voice in the cabinet is not Jekyll's, its notes demand a purer drug, and Poole has glimpsed a small masked figure. They break down the door with an axe and find Hyde's body in Jekyll's clothes, no trace of Jekyll, and papers addressed to Utterson.",
      setting: "Jekyll's dissecting theatre and cabinet, at night",
      who: ['Mr Gabriel John Utterson', 'Poole', 'Mr Edward Hyde'],
      quote: 'A dismal screech, as of mere animal terror, rang from the cabinet.',
      themes: ['Duality of human nature', 'Secrecy and reputation'],
      tension: 5,
      significance:
        'The investigation ends with a body but no explanation, and the story has to be handed over to the documents.',
    },
    {
      where: 'Chapter 9',
      title: "Lanyon's narrative",
      summary:
        "Lanyon's narrative explains that Jekyll, by letter, begged him to fetch a drawer of chemicals from the cabinet and hand it at midnight to a messenger. A small man in clothes far too large for him arrived, mixed a potion, offered Lanyon the choice of seeing what followed, drank, and changed into Henry Jekyll before his eyes.",
      setting: "Lanyon's consulting room in Cavendish Square, at midnight",
      who: ['Dr Hastie Lanyon', 'Mr Edward Hyde', 'Dr Henry Jekyll'],
      quote: 'My life is shaken to its roots',
      themes: ['Science and religion', 'Duality of human nature'],
      tension: 5,
      significance:
        'The central secret is revealed through a witness, and a man of science, who cannot survive knowing it.',
    },
    {
      where: 'Chapter 10',
      title: 'The experiment',
      summary:
        "Jekyll's statement explains that he had long hidden his pleasures behind a grave public face, and came to believe that “man is not truly one, but truly two”. His drug released Hyde, smaller and younger, and he set up the house in Soho and the will so that he could live two lives in safety.",
      setting: "Jekyll's cabinet and his house in the square, and the house in Soho",
      who: ['Dr Henry Jekyll', 'Mr Edward Hyde'],
      quote: 'man is not truly one, but truly two',
      themes: [
        'Duality of human nature',
        'Repression and Victorian hypocrisy',
        'Science and religion',
      ],
      tension: 3,
      significance:
        'The confession turns a mystery into a moral study, and invites the reading that the problem was never Hyde alone, but the life that made Jekyll want him.',
    },
    {
      where: 'Chapter 10',
      title: 'Losing control',
      summary:
        "Jekyll wakes as Hyde without taking the drug, gives Hyde up for two months, then relapses, and Hyde murders Carew. After changing unbidden in Regent's Park he needs Lanyon's help, and the changes keep coming. When his salt runs out and new supplies fail, he finishes the statement knowing he will not be Jekyll again.",
      setting: "Jekyll's bedroom, a bench in Regent's Park, and the cabinet in his last week",
      who: ['Dr Henry Jekyll', 'Mr Edward Hyde', 'Sir Danvers Carew', 'Dr Hastie Lanyon'],
      quote: 'I was slowly losing hold of my original and better self',
      themes: ['Duality of human nature', 'Good versus evil'],
      tension: 5,
      significance:
        "The novella ends in Jekyll's own voice at the moment it is about to disappear: his last sentence brings “the life of that unhappy Henry Jekyll to an end”.",
    },
  ],

  relationships: [
    {
      from: 'Dr Henry Jekyll',
      to: 'Mr Edward Hyde',
      kind: 'one man, two selves',
      note: 'Jekyll says he had “more than a father’s interest” in Hyde, while Hyde had “more than a son’s indifference” to him. Pleasure turns to dependence and then to hatred on both sides, until neither can exist without destroying the other.',
    },
    {
      from: 'Mr Gabriel John Utterson',
      to: 'Dr Henry Jekyll',
      kind: 'lawyer and old friend',
      note: "Utterson's loyalty is real, but it takes the form of protecting Jekyll's name. He keeps the will, locks away the note he suspects Jekyll of forging and is slow to break in, and on one reading each act of discretion lets the danger grow.",
    },
    {
      from: 'Mr Gabriel John Utterson',
      to: 'Richard Enfield',
      kind: 'distant kinsmen and walking companions',
      note: 'Their Sunday walks frame the mystery. In Chapter 1 they make a bargain never to speak of Hyde again, and in Chapter 7 they walk away from the window in shocked silence.',
    },
    {
      from: 'Dr Henry Jekyll',
      to: 'Dr Hastie Lanyon',
      kind: 'old friends turned rivals',
      note: "Once close, the two doctors fell out over what Lanyon calls Jekyll's “unscientific balderdash”. Jekyll finally proves his theory to Lanyon, and the proof destroys him.",
    },
    {
      from: 'Mr Gabriel John Utterson',
      to: 'Dr Hastie Lanyon',
      kind: 'old friends',
      note: 'They were “old mates both at school and college”. Lanyon trusts Utterson with his sealed narrative, and Utterson honours the seal even though it holds the answer he is looking for.',
    },
    {
      from: 'Poole',
      to: 'Dr Henry Jekyll',
      kind: 'butler and master',
      note: "After twenty years in the house, Poole knows his master's voice, step and height, and that knowledge convinces him the figure in the cabinet is not Jekyll. His fear is what finally forces the door.",
    },
    {
      from: 'Mr Gabriel John Utterson',
      to: 'Mr Edward Hyde',
      kind: 'pursuer and pursued',
      note: "Utterson casts himself as “Mr. Seek” to Hyde's hide. In the last will Utterson's name replaces Hyde's as heir, a reversal that bewilders him in Chapter 8.",
    },
    {
      from: 'Mr Edward Hyde',
      to: 'Sir Danvers Carew',
      kind: 'murderer and victim',
      note: "A courteous old gentleman meets Hyde, apparently by chance, and his politeness is met with fury. Carew was Utterson's client too, which draws the lawyer deeper into the case.",
    },
    {
      from: 'Mr Gabriel John Utterson',
      to: 'Mr Guest',
      kind: 'lawyer and head clerk',
      note: "Utterson keeps fewer secrets from Guest than from anyone. Guest's eye for handwriting exposes the likeness between Jekyll's and Hyde's hands, and Utterson responds by asking him not to speak of it.",
    },
  ],

  compareWith: [
    {
      title: 'A Christmas Carol',
      href: '/revision/texts/a-christmas-carol',
      reason:
        "Set beside this novella by AQA, Edexcel, OCR and Eduqas: another Victorian London story of a respectable man forced to face what he has made of himself, but Scrooge is transformed towards goodness while Jekyll's transformation runs the other way.",
    },
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        'Also set by AQA and Edexcel: a scientist creates a being he cannot control and the story reaches us through first-person accounts, but the creature is separate from Victor, while Hyde is Jekyll himself.',
    },
    {
      title: 'The Sign of Four',
      href: '/revision/texts/the-sign-of-four',
      reason:
        "On the AQA list with this novella: late-Victorian London, fog and a respectable surface over crime, investigated by a detective who follows the truth wherever it leads, where Utterson keeps stopping short to protect a friend's name.",
    },
    {
      title: 'The War of the Worlds',
      href: '/revision/texts/the-war-of-the-worlds',
      reason:
        'Also set by OCR and Eduqas: another late-Victorian story in which comfortable, civilised England proves far more fragile than it believes.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'addiction',
    'mythological_religious',
    'supernatural',
  ],

  // The first “members” in the note on “sold a slave to my original evil” is
  // quoted from Romans 7:23 (KJV). Jekyll uses the same word, which is the point
  // of the note, but the quotation marks there belong to St Paul.
  quotesFromElsewhere: ['members'],

  sources: [
    {
      label:
        'Strange Case of Dr Jekyll and Mr Hyde, Project Gutenberg eBook #43: the edition held as a byte copy in src/data/full-texts, read in full; every extract, annotated phrase, scene-card quotation and quoted phrase in the prose was copied from it and its speaker and chapter checked in context',
      url: 'https://www.gutenberg.org/ebooks/43',
    },
    {
      label:
        'Internet Archive catalogue record for the 1886 London first edition: "Strange case of Dr. Jekyll and Mr. Hyde", London, Longmans, Green, 1886, titled without "The" (re-checked 25 September 2026)',
      url: 'https://archive.org/details/strangecaseofdrj00stevrich',
    },
    {
      label:
        'Second Story Books bibliographic description of the first American edition: "New York: Charles Scribner\'s Sons, 1886" (re-checked 25 September 2026)',
      url: 'https://www.secondstorybooks.com/pages/books/1371203/robert-louis-stevenson/strange-case-of-dr-jekyll-and-mr-hyde',
    },
    {
      label:
        'Wikipedia, Strange Case of Dr Jekyll and Mr Hyde: Longmans (London) and Scribner\'s (New York) in January 1886, and the title without "The". The two editions\' exact days differ between sources, so the guide gives only the year',
      url: 'https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde',
    },
    {
      label:
        'Bible Gateway, King James Version: Genesis 4:8-9 (Cain), Daniel 5:5 and 5:25-28 (the writing on the wall, weighed and found wanting), Acts 16:25-26 (the prison at Philippi), 1 Timothy 1:15 (chief of sinners), Romans 7:14 (sold under sin)',
      url: 'https://www.biblegateway.com/passage/?search=Genesis+4%3A8-9%3B+Daniel+5%3A5%3B+Daniel+5%3A25-28%3B+Acts+16%3A25-26%3B+1+Timothy+1%3A15&version=KJV',
    },
    {
      label:
        'Bible Gateway, King James Version: Romans 7:14-24 (7:14 "sold under sin"; 7:23 "another law in my members, warring against the law of my mind")',
      url: 'https://www.biblegateway.com/passage/?search=Romans+7%3A14-24&version=KJV',
    },
    {
      label:
        'Bible Gateway, King James Version: Acts 16:25-28 (the doors open, and Paul tells the jailer "we are all here": the prisoners do not flee) and Daniel 5:1 (Belshazzar)',
      url: 'https://www.biblegateway.com/passage/?search=Acts+16%3A25-28%3B+Daniel+5%3A1&version=KJV',
    },
    {
      label: 'The Latin Library, Horace, Odes Book 3, Ode 2, lines 31-32: pede Poena claudo',
      url: 'https://www.thelatinlibrary.com/horace/carm3.shtml',
    },
    {
      label: 'Wikipedia, John Fell (bishop): the rhyme by Tom Brown about Dr Fell',
      url: 'https://en.wikipedia.org/wiki/John_Fell_(bishop)',
    },
    {
      label:
        'Wikipedia, Tom Brown (satirist): 1662-1704, at Christ Church, Oxford, where John Fell was dean; the story of the rhyme is "of apocryphal provenance", so the guide says "traditionally credited"',
      url: 'https://en.wikipedia.org/wiki/Thomas_Brown_(satirist)',
    },
    {
      label: 'Wikipedia, Damon and Pythias: the Pythagoreans, Syracuse and Dionysius I',
      url: 'https://en.wikipedia.org/wiki/Damon_and_Pythias',
    },
    {
      label:
        'Online Etymology Dictionary, juggernaut: Jagannath, Puri, and the doubted accounts of devotees crushed',
      url: 'https://www.etymonline.com/word/juggernaut',
    },
    {
      label: 'Wikipedia, Coutts: founded 1692, 440 Strand, royal clients',
      url: 'https://en.wikipedia.org/wiki/Coutts',
    },
    {
      label:
        'Wiktionary, Queer Street (dated UK slang: hard times, debt, suspicious circumstances)',
      url: 'https://en.wiktionary.org/wiki/Queer_Street',
    },
    { label: 'Wikipedia, Holographic will', url: 'https://en.wikipedia.org/wiki/Holographic_will' },
    {
      label: 'Wikipedia, Doctor of Civil Law',
      url: 'https://en.wikipedia.org/wiki/Doctor_of_Civil_Law',
    },
    {
      label: 'Wikipedia, Doctor of Law (LL.D., Legum Doctor)',
      url: 'https://en.wikipedia.org/wiki/Doctor_of_Law',
    },
    {
      label: 'Wikipedia, Fellow of the Royal Society',
      url: 'https://en.wikipedia.org/wiki/Fellow_of_the_Royal_Society',
    },
    { label: 'Wiktionary, troglodytic', url: 'https://en.wiktionary.org/wiki/troglodytic' },
    {
      label: 'Wiktionary, continent (archaic noun: a container)',
      url: 'https://en.wiktionary.org/wiki/continent',
    },
    { label: 'Wiktionary, conveyancing', url: 'https://en.wiktionary.org/wiki/conveyancing' },
    { label: 'Wiktionary, sawbones', url: 'https://en.wiktionary.org/wiki/sawbones' },
    { label: 'Wiktionary, apocryphal', url: 'https://en.wiktionary.org/wiki/apocryphal' },
    { label: 'Wiktionary, countenance', url: 'https://en.wiktionary.org/wiki/countenance' },
    { label: 'Wiktionary, pall', url: 'https://en.wiktionary.org/wiki/pall' },
    {
      label: 'Wikipedia, Penny dreadful: serial fiction in weekly parts at a penny',
      url: 'https://en.wikipedia.org/wiki/Penny_dreadful',
    },
    {
      label: 'Wiktionary, carbuncle (gemstone and boil)',
      url: 'https://en.wiktionary.org/wiki/carbuncle',
    },
    {
      label: 'Wiktionary, cabinet (archaic: a small private room)',
      url: 'https://en.wiktionary.org/wiki/cabinet',
    },
    { label: 'Wiktionary, cheval glass', url: 'https://en.wiktionary.org/wiki/cheval_glass' },
    { label: 'Wiktionary, tincture', url: 'https://en.wiktionary.org/wiki/tincture' },
    {
      label: 'Wikipedia, Minim (unit): one sixtieth of a fluid drachm, replacing the drop',
      url: 'https://en.wikipedia.org/wiki/Minim_(unit)',
    },
    { label: 'Wiktionary, ebullition', url: 'https://en.wiktionary.org/wiki/ebullition' },
    {
      label: 'Wikipedia, Hansom cab: patented by Joseph Hansom in 1834',
      url: 'https://en.wikipedia.org/wiki/Hansom_cab',
    },
    { label: 'Wiktionary, mill race', url: 'https://en.wiktionary.org/wiki/mill_race' },
    {
      label: 'Wiktionary, duplicity (double-dealing; doubleness; from Latin duplex)',
      url: 'https://en.wiktionary.org/wiki/duplicity',
    },
    { label: 'Wiktionary, polity', url: 'https://en.wiktionary.org/wiki/polity' },
    { label: 'Wiktionary, denizen', url: 'https://en.wiktionary.org/wiki/denizen' },
    {
      label: 'Wiktionary, bravo (historical noun: a hired soldier or assassin)',
      url: 'https://en.wiktionary.org/wiki/bravo',
    },
    {
      label: 'Wikipedia, Familiar (familiar spirits in European folklore)',
      url: 'https://en.wikipedia.org/wiki/Familiar',
    },
    { label: 'Wikipedia, Doppelgänger', url: 'https://en.wikipedia.org/wiki/Doppelg%C3%A4nger' },
    { label: 'Wikipedia, Physiognomy', url: 'https://en.wikipedia.org/wiki/Physiognomy' },
    {
      label: 'Wikipedia, Atavism: Lombroso popularised criminal atavism in the 1870s',
      url: 'https://en.wikipedia.org/wiki/Atavism',
    },
    { label: 'Wikipedia, Epistolary novel', url: 'https://en.wikipedia.org/wiki/Epistolary_novel' },
    {
      label:
        'Wikipedia, Gothic fiction: The Castle of Otranto (1764); Jekyll and Hyde as an 1880s Gothic work',
      url: 'https://en.wikipedia.org/wiki/Gothic_fiction',
    },
    { label: 'Wikipedia, Fin de siècle', url: 'https://en.wikipedia.org/wiki/Fin_de_si%C3%A8cle' },
    {
      label:
        'src/lib/board/prescribed-texts.ts, read from AQA 8702 v1.3, Edexcel 1ET0 Issue 2, OCR J352 v3.0 and Eduqas Version 4 on 19 September 2026: the title each board prints (AQA and Eduqas "The Strange Case of Dr Jekyll and Mr Hyde", Edexcel and OCR "Dr Jekyll and Mr Hyde"), and the 19th-century lists behind compareWith (A Christmas Carol on all four; Frankenstein AQA and Edexcel; The Sign of Four AQA; The War of the Worlds OCR and Eduqas)',
    },
  ],
}
