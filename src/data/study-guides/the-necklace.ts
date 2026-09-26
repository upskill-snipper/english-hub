import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Necklace, Guy de Maupassant (La Parure, 1884), in David Coward's English
 * translation. A complete guide: the text had only a placeholder page.
 *
 * THE TEXT. The prescribed wording is Coward's translation, which is in
 * copyright, and the older free translations online are NOT it. Every quotation
 * here was copied from the story as the student studies it: pages 32-37 of the
 * Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026),
 * Part 2, read from Pearson's own PDF on 25 September 2026. The story runs to
 * 239 numbered lines, and every line reference was checked against the
 * anthology's margin numbering (all forty-seven margin numbers matched a
 * sequential count). Page breaks in that printing fall after lines 49, 96, 142,
 * 189 and 233. Issue 8 changed one apostrophe in this text (line 164,
 * jewellers'); nothing quoted here is affected.
 *
 * The anthology's acknowledgements (Part 2) say the text is taken from A Day in
 * the Country and Other Stories, Oxford University Press, 2009, pp. 168-176,
 * reproduced by permission of Oxford University Press. The 1990 date for the
 * translation's first publication comes from the Open Library and Internet
 * Archive records of the World's Classics edition (ISBN 0192826425).
 *
 * FACT-CHECK, 26 September 2026. The acknowledgement once read "Translation
 * © David Coward 1990". Neither the anthology (which prints no © line for this
 * text) nor any catalogue record reachable from here states who holds the
 * copyright, so the line was an inference presented as a fact and was removed.
 * The acknowledgement now says only what the anthology and the catalogues
 * (Open Library, the Library of Congress record LCCN 89034216) confirm: the
 * translation is Coward's, first published by OUP in 1990, and in copyright.
 * If the book's copyright page is checked, a named © line can go back.
 *
 * The story is in copyright (as a translation) and is 2,995 words long, so the
 * whole page may quote 299 of them (fair-dealing.ts). The guide works from a
 * fixed set of short phrases and reuses them; everything else is paraphrase and
 * line reference. The three French phrases in the context section come from the
 * 1885 Flammarion text on Wikisource and are listed in quotesFromElsewhere.
 *
 * ONE READING THIS GUIDE CORRECTS. Many summaries say Mathilde's pride stops
 * her confessing. In the text it is Loisel who dictates the letter about the
 * broken catch (lines 154-157) and first proposes replacing the necklace
 * (lines 159-160). The guide says so, and presents the pride reading as one
 * reading among others.
 */
export const guide: StudyGuide = {
  slug: 'the-necklace',
  title: 'The Necklace',
  author: 'Guy de Maupassant',
  form: 'short-story',
  scope:
    'The complete short story The Necklace by Guy de Maupassant, first published in French as La Parure in 1884, in the English translation by David Coward printed on pages 32-37 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, for English Language A. It runs to 239 numbered lines. Line and page references in this guide follow that printing. Other English translations are not the prescribed text, and their wording differs.',
  rights: {
    status: 'copyright',
    acknowledgement:
      'The Necklace (La Parure) by Guy de Maupassant, 1884, translated by David Coward. The translation is in copyright (©); the anthology reproduces it by permission of Oxford University Press and prints no © notice naming a holder, so none is named here. From A Day in the Country and Other Stories, Oxford University Press, 2009, pp. 168-176 (the collection was first published by Oxford University Press in 1990), as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026). Quoted here in short extracts for criticism and review.',
  },
  workLength: {
    words: 2995,
    basis:
      'Counted from the story as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pp. 32-37, extracted from Pearson’s PDF with the title, the byline, running heads, page footers, the two footnotes and the margin line numbers removed: 239 lines, 2,995 words split on spaces. Counting each part of a hyphenated word separately, as the quotation counter does, gives 3,013; the lower figure is recorded so the limit errs tight, treating the story as a short work quoted at most one tenth.',
  },

  overview: {
    summary: [
      'The Necklace follows one woman across more than ten years in 239 lines. Mathilde is pretty, but she was born into a family of very minor civil servants and has no dowry, so she marries a junior clerk at the Ministry of Education and lives in a modest Paris apartment. She is tormented by the gap between that life and the luxury she believes she was made for, and spends her days dreaming of grand rooms, elegant dinners and admiring men. When her husband proudly brings home an invitation to a reception at the Ministry, she weeps because she has nothing to wear. He gives her the four hundred francs he had been saving for a gun, and she borrows a diamond necklace from Madame Forestier, a rich friend from her convent school.',
      'At the reception she is a triumph, the prettiest woman there, and she dances until about four in the morning while her husband dozes in a side-room. At home, in front of the mirror, she finds the necklace gone. After a fruitless search, and a letter to Madame Forestier claiming the catch is being repaired, the Loisels buy a replacement in the Palais Royal for thirty-six thousand francs: eighteen thousand from an inheritance left by Loisel’s father, the rest borrowed at ruinous interest. Madame Forestier takes it back without opening the case.',
      'Then come ten years of poverty. The maid is dismissed, the couple move to an attic, Mathilde does the heaviest housework herself and her husband takes extra work in the evenings, until every franc and all the interest has been repaid. By then she looks old, with red hands and a rough voice. One Sunday on the Champs-Élysées she meets Madame Forestier, still young and beautiful, and, proud that the debt is paid, tells her the whole story. Madame Forestier’s reply, in the last two lines, is that the lost necklace was an imitation worth not much more than five hundred francs. The story stops there.',
      'The ending is famous, but it is not a trick for its own sake. It makes the reader reread everything before it: the dreams, the ball, the decision to hide the loss, the ten years of labour. Is the story a moral fable in which vanity is punished, or a sharper picture of a society that measures a woman by her appearance and lets the rich wear imitations without question? This guide argues for the second reading while taking the first seriously. Remember throughout that you are reading David Coward’s English translation of a French story: the words you analyse are his choices as well as Maupassant’s, and other translations found online are not the text you are examined on.',
    ],
  },

  context: [
    {
      heading: 'Guy de Maupassant (1850-1893)',
      body: 'Maupassant was born on 5 August 1850 in Normandy, in northern France. He served in the army during the Franco-Prussian War of 1870-71 and then spent most of the 1870s as a clerk in Paris, first at the Ministry of the Navy and from 1878 at the Ministry of Public Instruction, the ministry the anthology’s translation calls the Ministry of Education. So he knew from the inside the world of government offices that Loisel works in. His mentor was the novelist Gustave Flaubert, a family friend who guided his early writing. Fame came in 1880 with the story Boule de Suif, and in roughly the next decade he wrote some three hundred short stories as well as six novels. He died in Paris on 6 July 1893, aged 42, after a period of serious illness.',
    },
    {
      heading: 'La Parure, 1884',
      body: 'The story was first published in French as La Parure on 17 February 1884 in the newspaper Le Gaulois, to which Maupassant contributed, and it appears in the collection Contes du jour et de la nuit (Tales of Day and Night), in the edition published by Marpon and Flammarion in 1885. The French title is worth knowing. A parure can be a matched set of jewels, but the word also means finery or adornment in general. So the title points beyond the single object to the whole business of dressing up to be admired, which is what Mathilde longs for and what the story examines. Its first readers met it in a Paris newspaper, and its streets, from the rue des Martyrs to the Champs-Élysées, were real places in that city.',
    },
    {
      heading: 'Reading a translation',
      body: 'The anthology prints David Coward’s translation, first published in 1990 in A Day in the Country and Other Stories (Oxford University Press, The World’s Classics), and taken for the anthology from the 2009 Oxford edition. Every word you quote is Coward’s choice as well as Maupassant’s, and good answers know it. Where Coward writes that Mathilde was born “apparently by some error of Fate”, the French has “comme par une erreur du destin”, as if by an error of destiny: his apparently keeps the narrator’s doubt. Loisel’s chatty slang, such as “big nobs” and “Wait a sec.”, is Coward’s way of giving him a voice an English reader hears as ordinary and a little comic. The French necklace is a “rivière de diamants”, and rivière is a word English also borrowed for a necklace of diamonds or other precious stones. At the end Madame Forestier says hers was “fausse”, false. Older, free translations online are not the prescribed text and their wording differs, so never learn quotations from them.',
    },
    {
      heading: 'Paris in the story',
      body: 'Maupassant sets the story in real places. The Loisels live in the rue des Martyrs, an old street running through the 9th and 18th arrondissements up towards Montmartre, named after the martyrdom of Saint Denis, the first bishop of Paris. One reading notices that a couple who will suffer for ten years live on the street of the martyrs, though the text never comments on it. The replacement necklace is bought in the Palais Royal, whose arcades had been known since the 1780s for luxury shops selling goods such as fine jewellery. The final meeting happens on the Champs-Élysées, which the anthology footnotes as a famous street in Paris, where Mathilde has gone for a Sunday stroll: on a break from her heavy working week she walks straight into the life she lost.',
    },
    {
      heading: 'Money and what it measures',
      body: 'The story is precise about money, and the sums are worth doing. Mathilde asks for 400 francs for a dress, exactly the amount Loisel had been setting aside for a gun and hunting trips. The replacement necklace costs 36,000 francs, ninety times that sum; Loisel’s inheritance covers 18,000 and the rest is borrowed, some of it from usurers, moneylenders who charge extortionate interest. The lost necklace, it turns out, was worth not much more than 500 francs, only a little more than she asked for the dress. Loisel’s extra copying work pays five sous a page. The anthology footnotes the sou as a coin of very small value: after the franc was introduced, sou was the everyday name for the five-centime coin, a twentieth of a franc, so each page earned a quarter of a franc. Set that against 36,000 francs and the figures show how the debt consumed the couple’s evenings as well as their days. None of these sums needs converting into modern money for the point to land.',
    },
    {
      heading: 'Women, marriage and appearance',
      body: 'The first paragraph describes a world in which a girl’s future depends on the dowry, the money or property her family brings to a marriage, and on whom she marries. The French Civil Code of 1804 had established the supremacy of a husband over his wife. The narrator says bluntly that “Women have neither rank nor class”, and that for women beauty, grace and charm take the place of birth and connections. On this account Mathilde has only her looks to trade on, and nowhere to trade them except in marriage and in society. That is why the dress and the jewels matter so much to her: in her eyes they are not trivial accessories but the only currency she has. The story can be read as sympathetic to her predicament even while it mocks her dreams.',
    },
    {
      heading: 'Realism and the twist ending',
      body: 'Maupassant learned his craft from Flaubert, and his first success, Boule de Suif, appeared in Les Soirées de Médan (1880), a collection by Émile Zola and five other writers that set out to show the Franco-Prussian War realistically and unheroically, in the spirit of the movement called Naturalism. The Necklace shares that realism: exact prices, real streets, grease on the saucepans. It is also built around a final reversal, and it is known above all for its twist ending, a hallmark of Maupassant’s style; it has been adapted for film, television, radio and the stage. The combination matters. Because the world of the story is so solid and ordinary, the ending does not feel like a conjuring trick. It feels like something that could happen, which is what makes it hurt.',
    },
  ],

  themes: [
    {
      title: 'Vanity and desire',
      body: 'Mathilde’s desire is the engine of the plot. The opening shows her tormented by things another woman of her station would not even notice, and dreaming, sentence after sentence, of silk, silver and admiration. When she finds the diamond necklace “her heart began to beat with immoderate desire”, and immoderate, meaning beyond reasonable limits, is the narrator’s judgement as well as a description. At the ball she has everything she wanted and dances “intoxicated with pleasure”, a metaphor of drunkenness that hints at loss of control. The obvious reading is moral: vanity leads to ruin, and the ten years of labour are its punishment. That reading has evidence, but it leaves something out. Her desire is not only for things; it is for being seen and valued, and the story shows a world in which beauty is almost the only value open to her. On balance the story seems less interested in condemning her wanting than in showing what it costs, and who sets the price.',
    },
    {
      title: 'Class and money',
      body: 'Every scene is marked by class. Mathilde’s misery is that she lives among peeling walls and battered chairs while believing she belongs among footmen and drawing-rooms, and she avoids her rich school friend because the visits leave her unhappy. The ball lets her pass for one of the rich, until her husband brings “a commonplace coat” that gives her away among women in furs. After the loss there begins for Mathilde “the grindingly horrible life of the very poor”, and Maupassant lists the labour precisely: dishes, sheets, rubbish, water carried up the stairs, haggling at the grocer’s. By the end Madame Forestier fails to recognise her, and is taken aback to be spoken to so familiarly by what she takes for “a common woman in the street”. One reading is that the story mocks Mathilde’s snobbery. A stronger one is that it shows how rigid the lines between classes were, so that one lost object could push a family across them for a decade.',
    },
    {
      title: 'Appearance and reality',
      body: 'The story is full of things that are not what they seem, and the final line turns that into its structure. The necklace looks like diamonds and is “only an imitation necklace”; the replacement looks identical and is real, so Madame Forestier has, without knowing it, been holding real diamonds for ten years. Mathilde at the ball looks like a society lady, but the coat and the old cab, which the narrator imagines coming out only at night “as if ashamed to parade their poverty”, tell the truth about her. Mirrors mark the key moments: she tries the jewels on in Madame Forestier’s mirror and discovers the loss in front of her own. Even the letter about the broken catch is a false appearance. The sharpest irony is that the rich woman could wear an imitation without anyone doubting it, while the poor couple could not risk being seen to have lost it. Appearance, the story suggests, is trusted according to who wears it.',
    },
    {
      title: 'Pride, honesty and sacrifice',
      body: 'Why do the Loisels not simply tell Madame Forestier? The text gives no debate at all, and that silence is worth noticing. It is Loisel who dictates the letter about the broken catch, and Loisel who first says they must replace the necklace; Mathilde’s fear surfaces later in a run of rhetorical questions ending “Would she not have concluded she was a thief?” So the concealment is shared, and it seems driven as much by fear of shame as by vanity. What follows is costly honesty of another kind: they repay every franc and all the interest. The narrator says Mathilde faced poverty “quickly and heroically”, and there seems little irony in that word. Loisel’s sacrifices frame the story, from the gun he gives up to the rest of his life that he mortgages. At the end Mathilde’s pride has changed its object: she smiles “a proud, innocent smile” not at her looks but at having paid. The tragedy is that her one great act of integrity rested on a lie, and was unnecessary.',
    },
    {
      title: 'Fate and chance',
      body: 'The story begins and ends with the idea of chance. Mathilde was born into a family of very minor civil servants “apparently by some error of Fate”, and near the end the narrator steps forward to wonder what might have happened had she not lost the necklace, exclaiming “How little is needed to make or break us!” The loss itself is pure accident: the text never shows the moment, and the couple can only guess it fell in the cab. Yet the plot shows choices turning accident into catastrophe: to borrow, to hide the loss, to replace rather than confess. One reading takes the narrator at its word and sees the characters as the playthings of a fickle world. The more convincing reading is that the narrator’s sighs about fate are part of the irony. Chance supplies one lost necklace; people, and the fear of what others will think, supply the ten years.',
    },
    {
      title: 'Women, beauty and marriage',
      body: 'The narrator’s generalisation near the start, that “Women have neither rank nor class” and that beauty and charm stand in for birth, sets out the rules of Mathilde’s world. With no dowry and no means of meeting a rich man, she went along with a junior clerk’s proposal, and her husband is kind, contented and eager to please, the man who cries out in delight over a stew. The marriage is not unhappy on his side: he gives up his gun money without argument and for ten years works evenings, often into the early hours. Mathilde barely sees him. At the ball he dozes in a side-room with three other husbands while their wives enjoy themselves, a detail that is funny and sad at once. The ending offers a bleak comparison between the two women: Madame Forestier, rich, is still young and beautiful, while Mathilde’s beauty, the one asset the opening said a woman had, has been spent on the debt. One reading is that the story is harsh to Mathilde; another is that it is harsh to the system that made her looks her only fortune.',
    },
  ],

  characters: [
    {
      name: 'Mathilde Loisel',
      role: 'The protagonist: a clerk’s wife who longs for luxury',
      body: 'She is not named at first. Her surname reaches the page only on the printed invitation at line 44, her husband is the first to call her Mathilde, at line 64, and the narrator calls her Madame Loisel, a married title, from line 74; she gives her own full name only at line 221, to a friend who no longer recognises her. She is pretty and, in her own eyes, wronged by birth. She can be ungrateful, as when she tosses the invitation aside, and calculating, as when she works out how much she can ask for without drawing a refusal. But the second half shows another side. Once the debt is certain she faces it quickly, does the hardest work and repays everything. She ends coarsened in looks and voice but, by her own account, glad. Whether she has learned anything is open: she still sits by the window remembering the ball, and her last expression is a proud smile.',
    },
    {
      name: 'Monsieur Loisel',
      role: 'Mathilde’s husband, a junior clerk in the Ministry of Education',
      body: 'He is never given a first name and we rarely see his thoughts, yet he carries much of the story’s moral weight. He is contented, delighted by stew, and eager to please: he works hard to get the invitation, gives up the four hundred francs saved for a gun and Sunday lark-shooting, and suggests first flowers and then Madame Forestier. At the ball he dozes in a side-room. After the loss he is the practical one. He retraces their route, goes to the police, the newspapers and the cab companies, dictates the letter about the broken catch and proposes the replacement. He ages five years in a week, then pays with his inheritance and borrows at ruinous rates, and for ten years he works evenings on top of his job. Maupassant gives him no final scene: the story ends before he learns the truth, which makes his sacrifice among the most painful things in it. In Coward’s English his speech is colloquial and a little comic, which may be why readers overlook him.',
    },
    {
      name: 'Madame Forestier',
      role: 'Mathilde’s rich friend from convent school',
      body: 'Her first name, Jeanne, is spoken only once, by Mathilde at the final meeting. She is generous at first: she opens her jewel casket, tells Mathilde to choose whatever she likes and lends the necklace without hesitation. When it comes back late she is put out, saying she might have needed it, but she does not open the case. Ten years later she is still young and beautiful, and she does not recognise her old friend. Her response to the confession is sympathy: she is very upset and takes both of Mathilde’s hands. Nothing in the text says she ever claimed the necklace was real; Mathilde simply assumed it. One reading is that she is careless in the way the rich can afford to be. Another is that she is simply decent, and her last words are a kindness that comes ten years too late. Either way she is a foil: the life Mathilde wanted, lived without effort.',
    },
    {
      name: 'The Breton maid',
      role: 'The Loisels’ young servant',
      body: 'A young peasant girl from Brittany, in north-west France, does the household chores at the start. She has no name and no words, but the sight of her sets Mathilde brooding on regrets and fantasies: having one servant reminds her how far she is from footmen. The maid is dismissed as soon as the debt begins, and from then on Mathilde does the servant’s work herself, dressed like any working-class woman. The maid is a small, silent measure of the Loisels’ place in society, and of how far they fall.',
    },
    {
      name: 'The narrator',
      role: 'The third-person storyteller',
      body: 'The narrator stands outside the story, knows everything and has opinions. It generalises about women, judges Mathilde’s desire as immoderate, and notes that another woman of her station would not even have noticed what tortures her. That distance creates irony. Yet the narrator also pities her, calls her acceptance of poverty heroic, and near the end breaks into questions and exclamations about fate as if moved by her story. It never says that the necklace is false; that is left to Madame Forestier in the last line, which is what makes the ending possible. Whether to trust the narrator’s comments, or to read them as part of the irony, is one of the best questions to argue about.',
    },
  ],

  keyQuotes: [
    {
      text: 'apparently by some error of Fate',
      where: 'The narrator, line 1 (p. 32)',
      analysis:
        'The first sentence gives Mathilde’s view of herself: a grand power, Fate with a capital letter, has put her in the wrong family. But “apparently” is the narrator’s raised eyebrow. From the first line the reader is asked to sympathise with her and to doubt her at the same time, and that double view runs through the story.',
    },
    {
      text: 'she felt that she was intended for a life of refinement and luxury',
      where: 'The narrator, lines 12-13 (p. 32)',
      analysis:
        'The verb “felt” and the passive “was intended” show a belief, not a fact: she thinks luxury is her destiny, owed to her rather than earned. The abstract nouns refinement and luxury are vague because the life she imagines has never existed for her. The whole plot tests this belief.',
    },
    {
      text: 'Ah! Stew! Splendid!',
      where: 'Monsieur Loisel, lines 26-27 (p. 32)',
      analysis:
        'Three short exclamations of simple delight, placed in the middle of a sentence full of her dreams of fine dining. The bathos is comic, dropping the reader from fantasy to the dinner table, but also sad: his contentment is the one real happiness in the room, and she cannot share it.',
    },
    {
      text: 'What earthly use is that to me?',
      where: 'Mathilde, line 47 (p. 32)',
      analysis:
        'Her first words in the story are a sulky rhetorical question, thrown at the invitation her husband worked hard to get. “Earthly” is dismissive, as if the ministry reception were beneath her. The reader sees her ingratitude, but also that she already knows what the invitation will expose: that she has nothing to wear.',
    },
    {
      text: 'There’s nothing so humiliating as to look poor',
      where: 'Mathilde, line 82 (p. 33)',
      analysis:
        'This is the story’s key admission. She does not fear being poor so much as looking poor, which makes appearance the thing that matters most. The superlative structure, “nothing so humiliating”, turns a social embarrassment into the worst thing she can imagine, and it prepares for the ten years in which she will be poor, and look it.',
    },
    {
      text: 'her heart began to beat with immoderate desire',
      where: 'The narrator, line 96 (p. 33)',
      analysis:
        'The physical detail of the racing heart makes the necklace an object of almost romantic passion. “Immoderate” is the narrator’s judgement slipped into the description: her desire goes beyond reasonable limits. The moment she chooses the necklace is the moment the reader is warned about where desire leads.',
    },
    {
      text: 'She danced ecstatically, wildly, intoxicated with pleasure',
      where: 'The narrator, line 108 (p. 34)',
      analysis:
        'The two adverbs pile up without a conjunction, so the sentence itself seems to whirl. The metaphor “intoxicated” suggests drunkenness and loss of judgement: this is her one night of fulfilment, and it is presented as a kind of delirium. The joy is real, but the language hints that it cannot last.',
    },
    {
      text: 'a commonplace coat violently at odds with the elegance of her dress',
      where: 'The narrator, line 116 (p. 34)',
      analysis:
        'The coat is the truth of her status breaking through the borrowed glamour. “Violently” is a surprisingly strong adverb for a clash of clothes, which shows how painful the contrast feels to her. The women in furs around her make the coat a sign of class, and she runs rather than be seen in it.',
    },
    {
      text: 'as if ashamed to parade their poverty in the full light of day',
      where: 'The narrator, line 125 (p. 34)',
      analysis:
        'Personification gives the old night cabs the Loisels’ own shame. Carried home in one, Mathilde travels in a vehicle that shares her secret: she, too, can only shine after dark. The image of daylight exposing poverty foreshadows the second half, when her poverty will be visible to everyone.',
    },
    {
      text: 'He mortgaged the rest of his life',
      where: 'The narrator, lines 175-176 (p. 35)',
      analysis:
        'A financial metaphor for a human cost: Loisel pledges not a house but his future years. It follows a list of ever smaller loans, down to as little as sixty francs, and opens a long sentence heavy with worry about the future. It reminds the reader that the husband, who wanted nothing for himself, pays as much as his wife.',
    },
    {
      text: 'Then began for Madame Loisel the grindingly horrible life of the very poor.',
      where: 'The narrator, line 186 (p. 35)',
      analysis:
        'Inverted word order puts the verb before its subject, so the sentence reads like the opening of a new chapter in her life. “Grindingly” suggests labour that wears away, like the nails worn down a few lines later. The hyperbole of the opening, when shabby curtains were torture, now meets real hardship.',
    },
    {
      text: 'wearing down her pink nails on the greasy pots and saucepans',
      where: 'The narrator, line 191 (p. 36)',
      analysis:
        'The pink of her nails recalls the pink flesh of the trout she dreamed of at line 31, so the colour of luxury becomes the colour of labour. The contrast between delicate pink and grease is physical and exact. Her body records the cost of the debt in a way the compressed narrative does not.',
    },
    {
      text: 'They lived like this for ten years.',
      where: 'The narrator, line 200 (p. 36)',
      analysis:
        'A seven-word sentence standing as its own paragraph compresses a decade. After more than forty lines spent on the single night of the ball and the loss, the flatness is shocking: the years that pay for one evening are compressed into a few paragraphs of summary. The structure makes the reader feel the disproportion.',
    },
    {
      text: 'How little is needed to make or break us!',
      where: 'The narrator, line 211 (p. 36)',
      analysis:
        'The narrator speaks directly, with the inclusive “us”, turning Mathilde’s story into a general lesson about chance. Placed just before the final meeting, it is also a trap: the reader thinks the moral has been delivered, and the last line then shows that even less was needed than anyone knew.',
    },
    {
      text: 'And she smiled a proud, innocent smile.',
      where: 'The narrator, lines 235-236 (p. 37)',
      analysis:
        'Her pride has changed its object: not her looks but the debt paid in full. “Innocent” carries a double meaning. She is innocent of the truth, and in a sense innocent of any crime, and the smile is the last moment of her ignorance before the revelation. The reader, not yet knowing either, shares it.',
    },
    {
      text: 'But it was only an imitation necklace.',
      where: 'Madame Forestier, line 238 (p. 37)',
      analysis:
        'The revelation comes in a plain sentence, in Madame Forestier’s voice rather than the narrator’s. “Only” carries all the irony: ten years and thirty-six thousand francs were spent replacing something of little value. The line makes the reader reread the whole story as a tragedy of appearances.',
    },
  ],

  extracts: [
    {
      title: 'Mathilde’s dream life',
      where: 'Lines 12-35 (p. 32)',
      pointer:
        'Lines 12-35 on p. 32: from the start of the paragraph at line 12, where the narrator returns to her unhappiness, to the end of the short paragraph at line 35 that lists what she would have given anything to be.',
      summary:
        'The narrator describes Mathilde’s constant unhappiness at the shabby apartment and at the sight of her young maid, then follows her into her daydreams: quiet antechambers, footmen, silk-hung drawing-rooms and intimate conversations with famous men. At dinner, while her husband cries out in delight at a stew, she dreams of silverware, tapestries and exquisite dishes. The passage ends with her belief that she was made for fine things and her longing to be envied and in demand.',
      annotations: [
        {
          phrase: 'was torture to her',
          note: 'Hyperbole: peeling walls and ugly curtains are described as torture, and the narrator adds that another woman of her station would not have noticed them. The gap between cause and feeling is the first source of irony.',
        },
        {
          phrase: 'She dreamed of silent antechambers',
          note: 'The first of four clauses that open with she dreamed of. An antechamber is a room where visitors wait before entering a grander one, so even her fantasy begins with waiting to be admitted.',
        },
        {
          phrase: 'a three-day-old cloth',
          note: 'A precise, unglamorous detail of the real table. The hyphenated compound counts the days of dirt, and it sits beside her dreams of elegant dinners and gleaming silverware like a price tag on reality.',
        },
        {
          phrase: 'Sphinx-like smiles',
          note: 'In her fantasy she is enigmatic and admired, answering compliments with the mysterious smile of the Sphinx. The mythical allusion shows how theatrical and borrowed her idea of society is.',
        },
        {
          phrase: 'the pink flesh of a trout',
          note: 'Sensuous food imagery that contrasts with the husband’s stew. Remember the colour: it returns at line 191, when her pink nails are worn down on greasy pans.',
        },
        {
          phrase: 'God had made her for such things',
          note: 'She believes her longing is a divine plan, which echoes the Fate of line 1. The belief makes her dissatisfaction feel like injustice rather than envy, and the plot will test it harshly.',
        },
      ],
      question:
        'How does the writer use language in lines 12-35 to present Mathilde’s longing for a different life?',
    },
    {
      title: 'The ball and the way home',
      where: 'Lines 103-128 (p. 34)',
      pointer:
        'Lines 103-128 on p. 34: from the paragraph at line 103 where the day of the reception arrives, to the end of line 128, when the couple are back in their apartment and Loisel is thinking of work.',
      summary:
        'At the reception Mathilde is the prettiest woman in the room; the men want to be introduced and to waltz with her, and even the Minister notices her. She dances in a haze of triumph until about four in the morning, while her husband dozes in a side-room. Her plain coat brings her back to reality, she hurries away from the women in furs, and the couple find only a shabby old cab to take them home.',
      annotations: [
        {
          phrase: 'She was the prettiest woman there',
          note: 'A plain superlative, stated without irony: for one night she really is what she dreamed of being. The simplicity makes her success seem undeniable, which makes the fall that follows harder.',
        },
        {
          phrase: 'intoxicated with pleasure',
          note: 'The metaphor of drunkenness suggests joy that has gone beyond control, and it links back to the immoderate desire of line 96. Her happiness is presented as a kind of delirium.',
        },
        {
          phrase: 'floating on a cloud of happiness',
          note: 'An image of weightlessness at the height of her triumph. It sets up the fall a few lines later, when her ordinary coat drags her back down to earth.',
        },
        {
          phrase: 'dozing in a small, empty side-room',
          note: 'The husband’s evening, told in one sentence beside her glorious one. The contrast is comic and sad: he waits, dozing and uncomplaining, with three other husbands, which shows the marriage’s imbalance.',
        },
        {
          phrase: 'a commonplace coat',
          note: 'The coat is the first object that tells the truth about her. Against the women in rich furs it marks her class, and she runs down the stairs rather than be seen in it.',
        },
        {
          phrase: 'For her it was all over',
          note: 'On the surface this means the evening has ended. On a second reading it is foreshadowing: within minutes the necklace will be gone and the life she knew is over too.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 103-128 to present the contrast between Mathilde’s triumph and her return to reality?',
    },
    {
      title: 'The final meeting',
      where: 'Lines 212-239 (pp. 36-37)',
      pointer:
        'Lines 212-239 on pp. 36-37: from the paragraph at line 212, when Mathilde goes for a Sunday stroll, to the last line of the story.',
      summary:
        'Ten years later, on a Sunday walk along the Champs-Élysées, Mathilde sees Madame Forestier, who is still young and beautiful. Now that the debt is paid she decides to tell her everything. Madame Forestier does not recognise her at first. Mathilde explains that she lost the necklace and replaced it, and smiles with pride that the difference was never noticed, before Madame Forestier reveals that the original was an imitation of little value.',
      annotations: [
        {
          phrase: 'still young, still beautiful, and still attractive',
          note: 'The repetition of still, in a list of three, shows that time has not touched the rich woman, and it is placed just after Mathilde has been described as looking old. The comparison is brutal.',
        },
        {
          phrase: 'a common woman in the street',
          note: 'Seen through Madame Forestier’s eyes, Mathilde has become exactly what she once feared looking like. The phrase shows how completely class is read from appearance.',
        },
        {
          phrase: 'And it was all on your account.',
          note: 'Mathilde’s accusation is proud and a little reproachful, and it is deeply ironic: she thinks she is revealing a sacrifice made on her friend’s behalf, but she is about to learn it was for nothing.',
        },
        {
          phrase: 'and I’m glad',
          note: 'Her contentment is simple and sincere, a sign of the dignity she has found in paying. It makes the final line crueller, because the reader sees her happiness just before it is undermined.',
        },
        {
          phrase: 'a proud, innocent smile',
          note: 'Innocent here means unknowing as well as guiltless. The narrator’s last description of Mathilde freezes her in the moment before the truth, which leaves the reader to imagine her face afterwards.',
        },
        {
          phrase: 'five hundred francs',
          note: 'Set against thirty-six thousand francs and ten years, the figure is the story’s final irony. The ellipsis that follows in the anthology leaves the consequences unspoken.',
        },
      ],
      question:
        'How does the writer use language, form and structure in lines 212-239 to create a powerful ending to the story?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Narrative irony',
      example:
        'The first sentence (line 1): Mathilde was born into a family of very minor civil servants “apparently by some error of Fate”.',
      effect:
        'The capital letter turns Fate into a grand power that has wronged her, but “apparently” signals that this is her view, reported with a raised eyebrow. From the first line the reader is invited to sympathise and to doubt at once, and that double view runs through the whole story.',
    },
    {
      technique: 'Anaphora and listing',
      example:
        '“She dreamed of” opens four clauses in lines 17-29, each followed by a list of luxuries: antechambers and footmen, drawing-rooms and trinkets, dinners and silverware, exquisite dishes.',
      effect:
        'The repeated opening builds the dream world sentence by sentence, so it grows richer and more detailed than the real apartment, which gets one short list of walls, chairs and curtains. The reader feels how much of Mathilde’s life is lived in her head.',
    },
    {
      technique: 'Juxtaposition and bathos',
      example:
        'Loisel’s delighted “Ah! Stew! Splendid!” (lines 26-27) set against her dream of “the pink flesh of a trout” (line 31), in the same long sentence.',
      effect:
        'The three short exclamations interrupt the fantasy and drop the reader to the dinner table, which is comic. The contrast is sad too: the husband’s contentment, which she cannot share, is the one real happiness in the room, and it goes unnoticed.',
    },
    {
      technique: 'Hyperbole',
      example:
        'The shabby apartment “was torture to her” (line 15); at lines 37-38 she weeps for days on end.',
      effect:
        'The vocabulary of suffering is far too big for its cause, which makes her misery seem self-indulgent. Set against the second half, where hardship is real and the narrator turns to concrete lists of chores, the early hyperbole looks in hindsight like a luxury of its own.',
    },
    {
      technique: 'Personification',
      example:
        'The old cabs that emerge only after dusk, “as if ashamed to parade their poverty in the full light of day” (line 125).',
      effect:
        'The cab is given the Loisels’ own feelings. Just after her triumph, Mathilde is carried home in a vehicle that shares her secret: she can shine only by night. It is the first sign that the evening’s glamour will not survive daylight.',
    },
    {
      technique: 'Symbolism',
      example:
        'The necklace, found in a black satinwood case (line 95); “a commonplace coat” (line 116); the mirrors at lines 88-91 and 129.',
      effect:
        'The necklace stands for everything Mathilde thinks she lacks, which is why its falseness devastates: the thing that made her feel she belonged was an imitation. The coat is its opposite, the truth of her status. Mirrors appear when she admires herself, and she discovers the loss while taking a last look at herself, as if vanity and loss were one moment.',
    },
    {
      technique: 'Rhetorical questions and free indirect style',
      example:
        'After the replacement is returned: “Would she not have concluded she was a thief?” (lines 184-185). At the final meeting Mathilde asks herself whether to speak and answers that she will (lines 215-216).',
      effect:
        'The narration slips into Mathilde’s anxious thoughts without quotation marks, so the reader shares her fear. The questions also reveal a motive for the concealment that has little to do with vanity: the terror of being thought a thief.',
    },
    {
      technique: 'Authorial intrusion and exclamation',
      example:
        'Lines 210-211: the narrator wonders what might not have happened had she not lost the necklace, and exclaims “How little is needed to make or break us!”',
      effect:
        'For once the narrator speaks directly, with an inclusive “us” that draws the reader into the moral. Placed just before the revelation, it is also a trap: the reader thinks the lesson has been given, and then the last line shows how much less was needed than anyone knew.',
    },
    {
      technique: 'Dialogue and register',
      example:
        'Loisel’s slang in Coward’s translation, “the dickens of a job” and “big nobs” (lines 49-51) and “Wait a sec.” (line 119), against Mathilde’s sulky “What earthly use is that to me?” (line 47), which she mutters.',
      effect:
        'The contrast in voices characterises the marriage: he is warm, eager and ordinary; she is dissatisfied and superior. Because the slang is the translator’s choice of English, it is worth saying so: Coward makes Loisel sound like a good-natured clerk an English reader would recognise.',
    },
    {
      technique: 'Colour and physical detail',
      example:
        '“the pink flesh of a trout” in her dreams (line 31); later she is “wearing down her pink nails on the greasy pots and saucepans” (line 191), and by line 206 “her hands were red”.',
      effect:
        'Pink links fantasy and labour: the delicate colour of luxury becomes the colour of nails worn down by work, and then gives way to raw red hands. The body keeps count of the ten years that the narrative compresses.',
    },
  ],

  structureForm: [
    {
      heading: 'A short story built for one reversal',
      body: 'The Necklace has one central character, one object and a plot that runs in a straight line to a revelation in the final two lines that changes the meaning of everything. The revelation is not explained, and no reaction follows it. The last words belong to Madame Forestier and trail off in an ellipsis, so the reader is left to supply Mathilde’s response, and Loisel’s, who is not even there. Strong answers treat the ending as the story’s key, not just its surprise: it makes the reader reconsider the dreams, the concealment and the labour.',
    },
    {
      heading: 'Two halves hinged on a loss',
      body: 'The loss comes at lines 129-131, a little past the middle of a 239-line story, and it divides the story in two. The first half rises through desire, the invitation, the borrowing and the triumph at the ball; the second falls through the search, the debt and ten years of labour. Details mirror across the hinge: dreams of footmen become the dismissed maid, delicate pink becomes worn nails, the casket of jewels becomes the replacement in its case, and the triumph at the Ministry becomes the stroll on the Champs-Élysées. Pointing out these pairs is an efficient way to show structural understanding.',
    },
    {
      heading: 'Pace: one night in scene, ten years in summary',
      body: 'Maupassant spends over forty lines on the night of the ball and the loss (lines 103-146), moment by moment, and then passes over ten years in a few paragraphs of summary, giving the passing of time a paragraph of its own: “They lived like this for ten years.” (line 200). The contrast in pace is itself meaningful. The evening she lived for passes in a few hours of full detail; the years that pay for it pass in summary, in lists of chores and one sentence of seven words. The reader feels the disproportion between one night and its cost.',
    },
    {
      heading: 'Frame and echo',
      body: 'The story begins and ends with Mathilde and Madame Forestier. At the start Mathilde avoids her rich friend because the visits make her unhappy; she goes to her three times, to borrow the necklace, to return the replacement and, in the street, to confess. Mirrors frame the loss, and a window frames her memories: in the last section she sits by the window thinking of that evening long ago, just as in the opening she lived in her dreams. The echoes suggest that Mathilde’s inner life has changed less than her outer life. She still dreams, but now of the past rather than the future.',
    },
    {
      heading: 'An omniscient narrator who comments',
      body: 'The narrator is third person and omniscient, and unusually free with opinions: general statements about women (lines 7-11), judgements such as “immoderate”, and the exclamations at lines 210-211. At the same time it keeps the one fact that matters hidden until the end. That combination creates the story’s irony. Because the narrator seems to tell us everything, even what to think, we do not suspect it is withholding the most important thing of all.',
    },
    {
      heading: 'Clues on a second reading',
      body: 'Does the ending play fair? On a second reading there are hints. Madame Forestier lends the necklace at once and without fuss; the jeweller whose name is inside the case says he supplied only the case, not the necklace (line 163); and when it is returned Madame Forestier does not open the case (line 183). None of these proves anything, which is why the ending surprises, but together they suggest Maupassant left the truth in plain sight. An answer that notices them shows it understands how the structure works.',
    },
    {
      heading: 'Dialogue and silence',
      body: 'Dialogue carries the crisis. At lines 137-142 the couple’s exchanges shrink to a few words each, down to a one-word reply, in a rhythm of rising panic. The final scene is almost entirely direct speech, as if the narrator steps back and lets the characters speak. Silence matters as much: the narrator never shows the couple discussing whether to confess, and never shows Mathilde’s reaction to the truth. What is left out asks the reader to fill it in.',
    },
    {
      heading: 'Names arrive late',
      body: 'Mathilde is nameless until her surname appears on an official invitation (line 44), and her first name is spoken first by her husband (line 64); the narrator calls her Madame Loisel, a married title, from line 74. Madame Forestier’s first name, Jeanne, appears only once, at line 217, when Mathilde greets her. Being called by her first name by a woman in the street is exactly what takes Madame Forestier aback, so the intimacy of the name marks the intimacy of the confession to come.',
    },
  ],

  vocabulary: [
    {
      term: 'dowry (line 2)',
      definition:
        'Money or property a bride’s family gives when she marries. Without one, Mathilde had little chance of marrying a rich man.',
    },
    {
      term: 'civil servants (line 2)',
      definition:
        'People employed in government departments. Very minor civil servants are low-ranking office workers, like Loisel.',
    },
    {
      term: 'guile (line 9)',
      definition: 'Clever, sometimes crafty, skill in getting what you want.',
    },
    {
      term: 'hierarchy (line 10)',
      definition:
        'A system of ranks from top to bottom. The narrator claims a woman’s place in it depends on charm rather than birth.',
    },
    {
      term: 'antechambers (line 17)',
      definition:
        'Small rooms leading into larger, grander ones, where visitors wait to be received.',
    },
    {
      term: 'liveried (line 18)',
      definition: 'Wearing livery, the uniform of servants in a grand household.',
    },
    {
      term: 'soup-tureen (line 26)',
      definition: 'A deep covered dish for serving soup or stew at the table.',
    },
    {
      term: 'Sphinx-like (line 31)',
      definition:
        'Mysterious and hard to read, like the Sphinx, the riddling creature of Greek myth.',
    },
    { term: 'peevishly (line 46)', definition: 'In an irritable, sulky way.' },
    { term: 'disconcerted (line 56)', definition: 'Unsettled and thrown off balance.' },
    { term: 'posy (line 80)', definition: 'A small bunch of flowers, worn or carried.' },
    { term: 'casket (line 88)', definition: 'A small box for jewels or other valuables.' },
    { term: 'immoderate (line 96)', definition: 'Beyond reasonable limits; excessive.' },
    { term: 'diffidently (line 98)', definition: 'Shyly and without confidence.' },
    { term: 'homage (line 110)', definition: 'Public honour or respect paid to someone.' },
    { term: 'hackney cabs (line 124)', definition: 'Horse-drawn carriages for hire.' },
    { term: 'disconsolately (line 146)', definition: 'Unhappily, beyond comfort.' },
    { term: 'usurers (line 175)', definition: 'Moneylenders who charge unfairly high interest.' },
    {
      term: 'privation (line 178)',
      definition: 'Lack of the basic things needed to live comfortably.',
    },
    {
      term: 'sous (line 199)',
      definition:
        'As the anthology’s footnote says, coins of very small value: a sou was the everyday name for five centimes, a twentieth of a franc.',
    },
    { term: 'uncouth (line 204)', definition: 'Rough in manners and lacking refinement.' },
    {
      term: 'omniscient narrator',
      definition:
        'A narrator who stands outside the story and knows everything, including the characters’ thoughts.',
    },
    {
      term: 'free indirect style',
      definition:
        'Third-person narration that takes on a character’s thoughts in her own terms, as in the questions at lines 184-185.',
    },
    {
      term: 'twist ending',
      definition: 'A final revelation that reverses the meaning of what came before.',
    },
    {
      term: 'bathos',
      definition:
        'A sudden drop from the elevated to the ordinary or comic, as when Loisel’s stew interrupts Mathilde’s dreams.',
    },
    {
      term: 'irony',
      definition:
        'A gap between what is said or expected and what is true; here, above all, the gap between what the Loisels believe and what the last line reveals.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore how the writer presents Mathilde Loisel’s dissatisfaction with her life in The Necklace. In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language, form and structure analysis of character',
        guidance: [
          'Open with an overview: her dissatisfaction is both real suffering and self-deception, and the narrator lets us see both.',
          'Analyse the opening: “apparently by some error of Fate”, the narrator’s generalisation about women, and the hyperbole of “was torture to her”.',
          'Explore the dream passage (lines 17-32): the repeated “She dreamed of”, the lists of luxury, and the bathos of the stew.',
          'Show how dissatisfaction drives the plot: her reaction to the invitation, her tears, her calculation over the four hundred francs, and her fear of looking poor.',
          'Show how the structure tests it: the triumph at the ball, the coat that brings her down to earth, and ten years of real hardship to set against the imagined kind.',
          'Consider the ending: she still sits by the window remembering, so has her dissatisfaction changed, or only its object?',
          'Conclude with a judgement on whether the story condemns her, pities her, or does both.',
        ],
      },
      {
        question:
          'How does the writer use the ending of The Necklace to shape the reader’s response to the whole story? In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Structure and form: the whole text read through its ending',
        guidance: [
          'Begin with what the last two lines reveal and how bluntly they do it, in Madame Forestier’s voice rather than the narrator’s.',
          'Analyse the lead-up: the narrator’s exclamation about how little it takes to make or break us, then Mathilde’s “proud, innocent smile”, the last moment of her ignorance.',
          'Show how the ending makes the reader reread earlier moments: the jeweller who supplied only the case, the case that is never opened, the letter about the catch.',
          'Explore the irony of value: thirty-six thousand francs and ten years against a necklace worth not much more than five hundred francs.',
          'Discuss what is left out: no reaction from Mathilde, no final scene for Loisel, and an ellipsis instead of a conclusion.',
          'Weigh two readings, a cruel joke on a vain woman or a tragedy about shame and a society that trusts appearances, and argue for the one you find more convincing.',
        ],
      },
      {
        question:
          'Explore how the writer presents the effects of losing the necklace on Monsieur and Madame Loisel. In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language and structure analysis of theme and change',
        guidance: [
          'Start with the moment of loss (lines 129-146): the exclamation, the short panicked dialogue, and Mathilde sitting in her evening gown by the empty grate, unable to think.',
          'Analyse Loisel’s response: the search, the letter he dictates, the replacement he proposes, and the fact that he ages five years in a week.',
          'Explore the language of debt: the borrowing in ever smaller sums, the usurers, and the metaphor “He mortgaged the rest of his life”.',
          'Examine the ten years: the list of chores, the “pink nails” on greasy pans, and the one-sentence paragraph at line 200.',
          'Show the change in Mathilde: her red hands and gruff voice, but also the courage the narrator calls heroic.',
          'End by judging whether the loss destroys the Loisels, or reveals qualities the first half hid.',
        ],
      },
      {
        question:
          'Explore how the writer presents the relationship between Mathilde and her husband in The Necklace. In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language and structure analysis of relationship',
        guidance: [
          'Set up the imbalance: he is contented and eager to please; she is dissatisfied and barely sees him.',
          'Analyse the dinner table (lines 25-32) and the contrast between his exclamations and her dreams.',
          'Explore the invitation scene: his pride, her irritation, his dismay at her tears, and the gun money he gives up after turning pale.',
          'Look at the ball: she dances while he dozes with other husbands, and his practical worry about the cold against her wish to slip away unseen.',
          'Examine the crisis: who acts and who decides, including the letter she writes at his dictation.',
          'Consider the ending: the debt makes them partners, but he is absent from the revelation. What does that absence suggest?',
        ],
      },
      {
        question:
          'Compare how the writers of The Necklace and The Story of an Hour present a woman whose hopes are overturned by a final reversal. In your answer you should consider the writers’ use of language, form and structure, and support your points with examples from both texts.',
        skill: 'Comparison of two anthology texts',
        guidance: [
          'Open with the shared shape: each story follows a woman’s inner life and ends with a reversal in its final lines that makes the reader reread everything.',
          'Compare what each woman hopes for, Mathilde luxury and admiration, Mrs Mallard freedom, and how each writer shows it: Maupassant’s dream lists, Chopin’s view from the open window.',
          'Compare the narrators: Maupassant’s comments openly and generalises; Chopin’s stays close to Mrs Mallard and withdraws in the last line.',
          'Compare the endings: Chopin uses dramatic irony, since the reader knows what the doctors do not; Maupassant surprises the reader as much as the character.',
          'Use context carefully: both are nineteenth-century stories about women whose lives are shaped by marriage and money.',
          'Keep both texts in every paragraph, and end with a judgement about which ending is crueller, and why.',
        ],
      },
    ],
    tips: [
      'Quote only the anthology’s wording, which is David Coward’s translation. Versions of The Necklace found free online are older translations with different wording, and a quotation from one of them will not match the text in front of you.',
      'Name the translator when it matters. Maupassant presents the plot and structure, but a point about a single English word is strongest when it shows you know the word is Coward’s choice.',
      'Do not blame everything on Mathilde’s pride without checking the text. It is Loisel who dictates the letter and first proposes replacing the necklace, and the questions at lines 184-185 show her fear of being thought a thief. Precise answers notice this.',
      'Do not invent a sequel. The story stops at Madame Forestier’s words, and nothing says whether the Loisels get anything back. A guess presented as fact is not credited; a point about what the silence means is.',
      'Use line numbers and the shape of the story. Saying that the loss falls just past the middle, or that ten years pass in a single short paragraph, shows structural understanding in a sentence.',
      'Track the narrator’s attitude. The move from irony to sympathy, from “immoderate” desire to endurance it calls heroic, is one of the richest things to analyse, and it is language, form and structure at once.',
      'Use the numbers: four hundred francs, thirty-six thousand, five hundred, and five sous a page. The arithmetic of the story is part of its irony.',
      'Treat the ending as a key, not just a twist. The best answers explain what it changes about the whole story, rather than simply saying it is surprising.',
    ],
  },

  modelAnswer: {
    question:
      'Explore how the writer presents Mathilde Loisel’s dissatisfaction with her life in The Necklace.',
    paragraph:
      'Maupassant presents Mathilde’s dissatisfaction as both real suffering and self-deception, and the narrator’s irony lets the reader feel both at once. The first sentence says she was born into a family of very minor civil servants “apparently by some error of Fate”: the capital letter makes Fate a grand power that has wronged her, but “apparently” quietly marks this as her view of herself rather than the narrator’s. Her longing is then built through repetition, as “She dreamed of” opens clause after clause, so that the dream world grows richer and more detailed than the real apartment. Maupassant sharpens this with bathos. Her husband lifts the lid of the soup-tureen and cries “Ah! Stew! Splendid!”, three exclamations of simple contentment, while in her head she is being served “the pink flesh of a trout”. The juxtaposition is comic, but it is also sad, because the man who loves her is exactly what she cannot see. The colour returns much later, when she is “wearing down her pink nails on the greasy pots and saucepans”, so the colour of luxury becomes the colour of labour. One reading is that the story simply punishes her vanity. The more convincing one is that it exposes a society in which, as the narrator says, “Women have neither rank nor class”, and a pretty girl’s looks are her only fortune.',
    commentary: [
      'It opens with an argument, not a summary: dissatisfaction as both suffering and self-deception, which the rest of the paragraph then proves.',
      'It zooms in on single words, the capital letter of Fate and the adverb apparently, and explains what each does to the reader.',
      'It names techniques precisely, repetition and bathos, and shows how they work together instead of listing them.',
      'It links a detail in the opening to one near the end, the pink of the trout and the pink of her nails, which shows understanding of the whole story’s structure.',
      'It ends by weighing two readings and choosing one, with a reason drawn from the narrator’s own words about women, which is how context is used well: from inside the text.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-38 (p. 32)',
      title: 'The unhappy dreamer',
      summary:
        'Mathilde, pretty but born into a family of minor civil servants and with no dowry, marries a junior clerk. She is tormented by their modest apartment, dreams of luxury and admirers, and avoids her rich friend from convent school.',
      setting: 'The Loisels’ small apartment in Paris',
      who: ['Mathilde Loisel', 'Monsieur Loisel', 'The Breton maid'],
      quote: 'apparently by some error of Fate',
      themes: ['Vanity and desire', 'Class and money', 'Women, beauty and marriage'],
      tension: 2,
      significance:
        'The opening sets up the belief the whole plot will test: that she was made for a life she does not have.',
    },
    {
      where: 'Lines 39-73 (pp. 32-33)',
      title: 'The invitation',
      summary:
        'Loisel proudly brings home an invitation to a reception at the Ministry on 18 January. Mathilde tosses it aside and weeps because she has nothing to wear, then asks for four hundred francs, the sum he had saved for a gun.',
      setting: 'The apartment, one evening',
      who: ['Mathilde Loisel', 'Monsieur Loisel'],
      quote: 'What earthly use is that to me?',
      themes: ['Vanity and desire', 'Pride, honesty and sacrifice'],
      tension: 3,
      significance:
        'Loisel’s first sacrifice, made without complaint, shows the imbalance in the marriage that runs through the story.',
    },
    {
      where: 'Lines 74-102 (pp. 33-34)',
      title: 'Borrowing the necklace',
      summary:
        'Still unhappy because she has no jewellery, Mathilde takes her husband’s advice and visits Madame Forestier, who opens her jewel casket. Mathilde finds a diamond necklace in a black satinwood case and borrows it.',
      setting: 'The apartment, then Madame Forestier’s home',
      who: ['Mathilde Loisel', 'Monsieur Loisel', 'Madame Forestier'],
      quote: 'her heart began to beat with immoderate desire',
      themes: ['Vanity and desire', 'Appearance and reality'],
      tension: 3,
      significance:
        'The object at the centre of the story is chosen, and nobody says what it is worth.',
    },
    {
      where: 'Lines 103-114 (p. 34)',
      title: 'The ball',
      summary:
        'At the reception Mathilde is the prettiest woman there, admired by every man and noticed by the Minister. She dances until about four in the morning while her husband dozes in a side-room.',
      setting: 'The reception at the Ministry',
      who: ['Mathilde Loisel', 'Monsieur Loisel'],
      quote: 'She danced ecstatically, wildly, intoxicated with pleasure',
      themes: ['Vanity and desire', 'Women, beauty and marriage'],
      tension: 4,
      significance:
        'Her one night of fulfilment is the high point of the first half, and everything after it is paid for.',
    },
    {
      where: 'Lines 115-128 (p. 34)',
      title: 'The coat and the cab',
      summary:
        'Her plain everyday coat brings her down to earth among women in furs, so she hurries out. There is no cab in sight, and the couple walk to the Seine before finding an old night cab to take them home to the rue des Martyrs.',
      setting: 'The streets of Paris and the Seine embankment before dawn',
      who: ['Mathilde Loisel', 'Monsieur Loisel'],
      quote: 'as if ashamed to parade their poverty in the full light of day',
      themes: ['Class and money', 'Appearance and reality'],
      tension: 3,
      significance:
        'Reality returns through objects: the coat and the cab tell the truth about the Loisels before the loss is discovered.',
    },
    {
      where: 'Lines 129-160 (pp. 34-35)',
      title: 'The loss',
      summary:
        'In front of the mirror Mathilde finds the necklace gone. Loisel searches the streets, the police, the newspapers and the cab companies, dictates a letter claiming the catch is being repaired, and after a week says they must replace it.',
      setting: 'The Loisels’ apartment, and the streets of Paris',
      who: ['Mathilde Loisel', 'Monsieur Loisel'],
      quote: 'The necklace was no longer round her throat!',
      themes: ['Fate and chance', 'Pride, honesty and sacrifice'],
      tension: 5,
      significance:
        'The narrator’s exclamation mark carries Mathilde’s shock into the narration itself, at the hinge of the story just past its middle: from here the plot falls as steeply as it rose.',
    },
    {
      where: 'Lines 161-185 (p. 35)',
      title: 'The replacement',
      summary:
        'In a shop in the Palais Royal they find a diamond necklace they think is identical, priced at forty thousand francs and theirs for thirty-six thousand. Loisel uses his inheritance and borrows the rest at ruinous interest. Madame Forestier takes it back in a huff and does not open the case.',
      setting: 'Jewellers’ shops in Paris, and Madame Forestier’s house',
      who: ['Mathilde Loisel', 'Monsieur Loisel', 'Madame Forestier'],
      quote: 'He mortgaged the rest of his life',
      themes: ['Class and money', 'Pride, honesty and sacrifice'],
      tension: 4,
      significance:
        'The choice to conceal and replace, rather than confess, turns an accident into ten years of debt.',
    },
    {
      where: 'Lines 186-203 (pp. 35-36)',
      title: 'Ten years of poverty',
      summary:
        'They dismiss the maid and move to an attic. Mathilde does the heaviest housework and haggles for every penny, while Loisel works evenings doing accounts and copying, until after ten years every debt and all the interest is repaid.',
      setting: 'An attic room, the stairs and the local shops',
      who: ['Mathilde Loisel', 'Monsieur Loisel', 'The Breton maid'],
      quote: 'Then began for Madame Loisel the grindingly horrible life of the very poor.',
      themes: ['Class and money', 'Pride, honesty and sacrifice'],
      tension: 3,
      significance:
        'Ten years pass in a few paragraphs, which makes the reader feel how little the one night weighed against them.',
    },
    {
      where: 'Lines 204-211 (p. 36)',
      title: 'What might have been',
      summary:
        'Mathilde now looks old, with untidy hair, red hands and a gruff voice. Sometimes she sits by the window remembering the evening she was beautiful, and the narrator wonders aloud how different life might have been.',
      setting: 'The attic, by the window',
      who: ['Mathilde Loisel', 'The narrator'],
      quote: 'How little is needed to make or break us!',
      themes: ['Fate and chance', 'Women, beauty and marriage'],
      tension: 2,
      significance:
        'The narrator’s moral seems to close the story, just before the last scene overturns it.',
    },
    {
      where: 'Lines 212-239 (pp. 36-37)',
      title: 'The meeting on the Champs-Élysées',
      summary:
        'On a Sunday stroll Mathilde meets Madame Forestier, still young and beautiful, who does not recognise her. Proud that the debt is paid, Mathilde tells her everything, and Madame Forestier reveals that the lost necklace was an imitation worth very little.',
      setting: 'The Champs-Élysées on a Sunday',
      who: ['Mathilde Loisel', 'Madame Forestier'],
      quote: 'But it was only an imitation necklace.',
      themes: ['Appearance and reality', 'Fate and chance', 'Pride, honesty and sacrifice'],
      tension: 5,
      significance:
        'The last line reverses the meaning of the ten years and sends the reader back to the beginning.',
    },
  ],

  relationships: [
    {
      from: 'Mathilde Loisel',
      to: 'Monsieur Loisel',
      kind: 'husband and wife',
      note: 'Unequal at first: he gives and she takes, barely seeing him. The debt makes them partners in labour, but the story never shows them talking about their feelings, and he is absent from the final revelation.',
    },
    {
      from: 'Mathilde Loisel',
      to: 'Madame Forestier',
      kind: 'old school friends, poor and rich',
      note: 'Mathilde avoids her because the visits leave her unhappy, borrows from her, deceives her and finally confesses with pride. The friendship frames the plot, and its last words reverse the meaning of everything.',
    },
    {
      from: 'Mathilde Loisel',
      to: 'The Breton maid',
      kind: 'mistress and servant',
      note: 'The maid’s presence feeds Mathilde’s sense of lack. After the loss the maid is dismissed and Mathilde does the work herself, so she becomes, in effect, what she once employed.',
    },
    {
      from: 'Monsieur Loisel',
      to: 'Madame Forestier',
      kind: 'linked by a loan and a lie',
      note: 'They never speak on the page. He suggests the borrowing and later dictates the letter that deceives her, so her necklace shapes ten years of his life without her knowing.',
    },
    {
      from: 'The narrator',
      to: 'Mathilde Loisel',
      kind: 'storyteller and subject',
      note: 'Ironic at first, judging her desire as immoderate, the narrator grows more sympathetic, calling her heroic and lamenting her fate. The shift guides how the reader feels about her.',
    },
  ],

  compareWith: [
    {
      title: 'The Story of an Hour, Kate Chopin',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'Both nineteenth-century stories in the same anthology follow a woman’s inner life to a reversal in the final lines, which undoes Mrs Mallard’s hoped-for freedom as surely as it undoes Mathilde’s ten years of repayment.',
    },
    {
      title: 'Disabled, Wilfred Owen',
      href: '/igcse/edexcel/poetry/disabled',
      reason:
        'Both present someone remembering a time of glamour and admiration after a choice made partly from vanity has cost them their youth: Owen’s soldier is old before his time, and Mathilde looks old at the end.',
    },
    {
      title: 'Significant Cigarettes, Rose Tremain',
      href: '/revision/texts/significant-cigarettes',
      reason:
        'Both turn on money and luck: Lev studies a twenty-pound note and decides the English were lucky, while Maupassant’s narrator exclaims how little it takes to make or break a life.',
    },
  ],

  contentGuidance: ['discrimination'],

  quotesFromElsewhere: ['comme par une erreur du destin', 'rivière de diamants', 'fausse'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pp. 32-37: The Necklace as prescribed, David Coward’s translation, 239 numbered lines. Every quotation and line number was checked against this printing, and the margin numbers matched a sequential line count throughout. The contents lists it at p. 32; the acknowledgements give A Day in the Country and Other Stories, Oxford University Press, 2009, pp. 168-176, reproduced by permission of Oxford University Press; the Issue 8 change list records one change to this text, at line 164 (jewellers’)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Open Library, ISBN 0192826425: A Day in the Country and Other Stories, Oxford University Press, 1990, The World’s Classics (the Internet Archive copy of the same ISBN carries the Library of Congress record, LCCN 89034216: Oxford University Press, 1990, translated with an introduction by David Coward). The source of the 1990 date in the acknowledgement; neither record states a copyright holder, so none is claimed',
      url: 'https://openlibrary.org/isbn/0192826425',
    },
    {
      label:
        'Wellcome Collection catalogue: A Day in the Country and Other Stories, translated with an introduction by David Coward, Oxford University Press, World’s Classics, 1998 reissue (ISBN 0192838636), confirming the translator and publisher',
      url: 'https://wellcomecollection.org/works/gxqz6u8v',
    },
    {
      label:
        'Wikipedia, The Necklace: first published 17 February 1884 in Le Gaulois; known for its twist ending, a hallmark of Maupassant’s style; film and stage adaptations',
      url: 'https://en.wikipedia.org/wiki/The_Necklace',
    },
    {
      label:
        'Wikipedia, List of short stories by Guy de Maupassant: La parure, Le Gaulois, 17 February 1884 (second source for the date)',
      url: 'https://en.wikipedia.org/wiki/List_of_short_stories_by_Guy_de_Maupassant',
    },
    {
      label:
        'Wikisource, Contes du jour et de la nuit (C. Marpon et E. Flammarion, 1885), La Parure: the French text, source of the three French phrases quoted in the context section (comme par une erreur du destin; rivière de diamants; la mienne était fausse) and of the rue des Martyrs and the ministère de l’instruction publique',
      url: 'https://fr.wikisource.org/wiki/Contes_du_jour_et_de_la_nuit_(%C3%A9d._Flammarion,_1885)/La_Parure',
    },
    {
      label:
        'Wikipédia (French), La Parure: Le Gaulois, 17 February 1884; the husband a petit commis du ministère de l’Instruction publique; the collection Contes du jour et de la nuit',
      url: 'https://fr.wikipedia.org/wiki/La_Parure',
    },
    {
      label:
        'Wikipedia, Guy de Maupassant: born 5 August 1850, Château de Miromesnil, Normandy; died 6 July 1893, Passy, Paris, aged 42; volunteered in 1870 in the Franco-Prussian War; clerk in the Navy Department, then from 1878 the Ministry of Public Instruction; Flaubert his literary guardian; Boule de Suif 1880; about 300 short stories and six novels; contributing editor to Le Gaulois among other papers',
      url: 'https://en.wikipedia.org/wiki/Guy_de_Maupassant',
    },
    {
      label:
        'Encyclopedia.com, Maupassant, (Henri René Albert) Guy de: Ministry of the Navy 1872-77, Ministry of Education 1878-80; army service 1870-71; Flaubert a fellow Norman and family friend; more than 300 short stories in about ten years; confined at Passy in 1892 before his death in 1893',
      url: 'https://www.encyclopedia.com/arts/encyclopedias-almanacs-transcripts-and-maps/maupassant-henri-rene-albert-guy-de',
    },
    {
      label:
        'Wikipedia, Les Soirées de Médan: 1880; six authors, Zola, Maupassant, Huysmans, Céard, Hennique and Alexis; all the stories concern the Franco-Prussian War; aim to promote Naturalism by treating the war realistically and unheroically; Boule de Suif launched Maupassant’s career',
      url: 'https://en.wikipedia.org/wiki/Les_Soir%C3%A9es_de_M%C3%A9dan',
    },
    {
      label: 'Wikipedia, Le Gaulois: founded 1868; Maupassant among its contributing editors',
      url: 'https://en.wikipedia.org/wiki/Le_Gaulois',
    },
    {
      label:
        'Wiktionary, parure (French): a set of jewellery; finery; adornment. Wiktionary, rivière (English): a necklace of diamonds or other precious stones',
      url: 'https://en.wiktionary.org/wiki/parure',
    },
    {
      label:
        'Wikipedia, Rue des Martyrs: runs through the 9th and 18th arrondissements towards Montmartre; named after Saint Denis, first bishop of Paris, and his companions',
      url: 'https://en.wikipedia.org/wiki/Rue_des_Martyrs',
    },
    {
      label:
        'Wikipedia, Palais-Royal: its arcades held shops selling luxury goods such as fine jewellery, and it was a centre of Parisian leisure from the 1780s',
      url: 'https://en.wikipedia.org/wiki/Palais-Royal',
    },
    {
      label:
        'Wikipédia (French), Sou: after the franc was introduced, sou remained the everyday name for a twentieth of a franc, the bronze five-centime coin, as in Balzac and Hugo',
      url: 'https://fr.wikipedia.org/wiki/Sou',
    },
    {
      label:
        'Wikipedia, Napoleonic Code: the Civil Code of 1804 established the supremacy of the husband over his wife and children',
      url: 'https://en.wikipedia.org/wiki/Napoleonic_Code',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, The Story of an Hour (pp. 30-31), Disabled (p. 25) and Significant Cigarettes (pp. 38-41), checked for the three comparison notes',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
  ],
}
