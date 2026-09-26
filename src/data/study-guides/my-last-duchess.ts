import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * My Last Duchess, Robert Browning. A supplement: the page at
 * /revision/poetry/power-and-conflict/my-last-duchess keeps its overview,
 * context, key quotations, language analysis and form and structure, and this
 * file adds themes, the poem's people, passages for close reading, vocabulary,
 * exam practice and a model answer, mounted below it.
 *
 * TWO PRINTINGS OF THE POEM. The prescribed text is the anthology's (Issue 8,
 * February 2026, pages 65 to 66): 56 lines in one continuous verse paragraph,
 * with the subtitle Ferrara, lines 1 to 49 on page 65 and 50 to 56 on page 66
 * (line spacing measured from the Pearson PDF; there are no stanza breaks). The
 * edition held in src/data/full-texts/my-last-duchess.ts is Myra Reynolds's
 * Selections (Gutenberg #28041), an American printing. Compared word by word
 * they are identical except in five places: the held edition has Fra for Frà
 * (lines 3, 6 and 16), favor for favour (line 25) and pretense for pretence
 * (line 50). The anthology also uses single quotation marks for reported speech
 * and spaced dashes where the held edition has double hyphens.
 *
 * So no quotation in this file uses any of those five words, except where the
 * passages have to (Extract A has Fra, Extract C has pretense), because the
 * test checks passages against the held edition; each says so beside it. The
 * painter's name is written Frà, the anthology's spelling, wherever it is not
 * inside quotation marks. Line numbers follow the anthology throughout.
 *
 * AQA prints the same 56 lines with the same numbering (checked against the
 * June 2023 8702/2 paper, which reproduces the poem), differing from Pearson
 * only in two commas (lines 16 and 43). So every line reference here holds for
 * both boards.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, and this file does not repeat: its line 14
 * reads "made that spot", where both printings have "called that spot"; its
 * line 3 has a semicolon after "now" where both have a colon; its form section
 * and enjambment example split "She thanked men" across a line break the poem
 * does not have; its context and quiz say Lucrezia de' Medici died at 17 (she
 * was 16) and call Barbara of Austria the Count of Tyrol's niece (she was his
 * sister). Reported to the editor, not fixed here.
 *
 * RE-CHECKED 26 September 2026. Two claims in the first draft did not survive:
 * it credited Louis S. Friedland's 1936 article with naming the envoy as
 * Nikolaus Madruz, which no source read here supports (Wikipedia gives the
 * Madruz identification uncited), and it read Claus of Innsbruck as a
 * compliment to the envoy on the strength of that identification. Both are
 * gone. Wording about the November 2023 examiners' report now follows what the
 * report says rather than what it implies.
 *
 * FACT-CHECKED 26 September 2026, second pass, against freshly downloaded
 * copies of every source. What did not survive:
 * - Corson's exchange with Browning was said to be in "the 1886 edition". The
 *   Gutenberg transcriber's note gives 1886, but that is the first edition; the
 *   Note to the Third Edition describes visiting Browning in Venice a month
 *   before his death, so it postdates December 1889.
 * - Frà Pandolf's compliments were said to be repeated "word for word". The
 *   Duke introduces them with "perhaps": they are what he imagines the painter
 *   might have said, not a memory.
 * - A practice question said the Duke "demanded" that his wife change. He says
 *   he chose never to stoop to telling her, so he expected rather than
 *   demanded.
 * - Smaller things: "a young woman" (the poem gives no age), "as he says twice"
 *   of a phrase that appears once in that form, "the only way left to him",
 *   "the envoy speaks for him" of a man who never speaks, "sittings" for a
 *   portrait done in a day, dramatic irony claimed for what the same sentence
 *   called a deliberate pose, and readings stated as facts.
 */
export const guide: StudyGuide = {
  slug: 'my-last-duchess',
  title: 'My Last Duchess',
  author: 'Robert Browning',
  form: 'poem',
  scope:
    'The whole poem, as printed on pages 65 to 66 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, for English Literature (4ET1) Paper 1 Section B. Line references follow that printing, which numbers every fifth line: 56 lines in one continuous verse paragraph, under the subtitle Ferrara. AQA sets the poem in its Power and Conflict cluster and prints it with the same 56 lines and the same line numbers, so the references here work for AQA students too. The poem is also set by other boards; check line references against your own copy.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Robert Browning (1812-1889); out of copyright. Line references follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), pages 65 to 66. Quotations are also checked against Selections from the Poems and Plays of Robert Browning, edited by Myra Reynolds, Project Gutenberg eBook #28041.',
  },
  workLength: {
    words: 459,
    lines: 56,
    basis:
      "Counted from the anthology printing on pages 65 to 66 (Issue 8, February 2026), read from the Pearson PDF on 25 September 2026 and again on 26 September 2026: 56 lines, words counted with the validator's rule (hyphenated words split), title and subtitle excluded. The held Gutenberg edition gives the same count.",
  },

  native: {
    overview: '/revision/poetry/power-and-conflict/my-last-duchess',
    context: '/revision/poetry/power-and-conflict/my-last-duchess',
    keyQuotes: '/revision/poetry/power-and-conflict/my-last-duchess',
    languageAnalysis: '/revision/poetry/power-and-conflict/my-last-duchess',
    structureForm: '/revision/poetry/power-and-conflict/my-last-duchess',
  },

  themes: [
    {
      title: 'Power and control',
      body: "The Duke's power is visible in the scene itself, not only in the story he tells. He decides when the envoy sits (line 5) and when he rises (line 47), who may draw back the curtain (lines 9 to 10), what explanation a visitor is given for the Duchess's expression (line 6), and even how the two men leave the room (lines 53 to 54). His marriage was the one place where that control failed. He could not decide where his wife's looks went, and the poem implies how he settled the matter: “I gave commands” (line 45). The phrase is frightening because it is administrative. A duke does not act; he orders, and other people act for him. One reading takes the Duke as simply all-powerful, a tyrant who meets no resistance. A more convincing reading notices how much his power depends on things that cannot move: a painted wife, a bronze god, a listener who never speaks. Everything alive in the poem, from a blush to a smile, escaped him, and the portrait is the first version of the Duchess that is seen only when he chooses.",
    },
    {
      title: 'Women as possessions',
      body: "The first thing the Duke says of his wife is that she is his, and that she is a picture: “That's my last Duchess painted on the wall” (line 1). The word last can mean latest, the one before now, or even final, and the first two imply a series, with another Duchess to come. The painting is “That piece” (line 3), a collector's word, and he later describes a statue in the same spirit, as a thing “thought a rarity” (line 55). The next wife is discussed in the same sentence as the dowry: the Count's daughter herself, he insists, “is my object” (line 53). In his sense object means aim, but a modern reader hears the other sense too, and the poem supports that hearing by ending on another possession and on the word me. An alternative reading argues that the Duke's contempt is really for anyone below his rank rather than for women as such, since he sneers just as much at the “officious fool” (line 27) who broke cherries for her. Both readings have support, but the shape of the poem favours the first: it is the woman who ends up behind a curtain.",
    },
    {
      title: 'Pride and the refusal to stoop',
      body: "The Duke states his motive himself, and it is pride. What offended him was that his wife ranked “My gift of a nine-hundred-years-old name” (line 33) with “anybody's gift” (line 34). He thinks of his family name as a present he gave her by marrying her, and he expected gratitude to match its age. The word stoop then organises the rest of his defence: “Who'd stoop to blame / This sort of trifling?” (lines 34 to 35), “E'en then would be some stooping” (line 42), “I choose / Never to stoop” (lines 42 to 43). Speaking to his wife, even if she had accepted correction without arguing back, would have lowered him, so he did not speak to her. The irony, on his own account, is that a conversation might have been all that was needed. He presents this as a principle, closed off with a full stop, and seems to expect the envoy to admire it. A sympathetic reader might say he is bound by the code of an aristocrat of his time. That reading is hard to sustain, because the same man talks very openly to another man's servant about dowries. His dignity forbids only the one conversation that might have saved his marriage.",
    },
    {
      title: 'Jealousy',
      body: "The Duke is jealous, but what he describes is not a rival lover. It is his wife's attention. The “spot of joy” in her cheek (line 21) could, in his account, be called up by anyone and anything: a painter's passing compliment, “The dropping of the daylight in the West” (line 26), a bough of cherries, a ride round the terrace on a white mule. “Sir, 'twas all one!” (line 25) is the heart of his complaint. She took the same pleasure in everything, and his gift sat in the list beside a sunset. Even his admission that “she smiled, no doubt, / Whene'er I passed her” (lines 43 to 44) turns straight into a grievance, because everyone got “Much the same smile” (line 45). Some readers suspect the Duchess of flirting, pointing to “She thanked men” (line 31). The more convincing reading is that the Duke's own evidence clears her. Every example he gives is innocent, and a reader who looks closely finds nothing in his list but courtesy and delight. The jealousy is the Duke's, and so, the poem suggests, is the fault.",
    },
    {
      title: 'Art and the frozen life',
      body: "The poem begins with a painting and ends with a statue, and between them the Duchess changes from a woman into a work of art. The portrait is so lifelike that she is “Looking as if she were alive” (line 2), and when the story of how her smiles stopped is over, the phrase returns, shortened: “As if alive” (line 47). The repetition closes the circle of the story and makes the words as if carry their full weight. The painting preserves exactly what the Duke resented, “The depth and passion of its earnest glance” (line 8), but that glance is now his to reveal or to hide behind a curtain. The examiners' report on the November 2023 Edexcel paper noted that some very able candidates read the portrait as an attempt to fix time, and it is a productive idea: art gives the Duke a wife who can no longer smile at anyone else. There is another way to see it. The painting is also the one place where the Duchess still unsettles people. Strangers still seem to ask “How such a glance came there” (line 12), and the Duke still has to explain her. In that reading, Frà Pandolf's work keeps alive the very joy the Duke tried to stop.",
    },
    {
      title: 'Marriage as a bargain',
      body: "Only in lines 49 to 53 does the reader learn why the envoy is here. He serves a Count whose daughter the Duke means to marry, and the business between the two men includes a dowry. The Duke's language turns smoothly commercial: the Count's “known munificence” (line 49) is “ample warrant” (line 50) that any fair claim for a dowry will be met. Then, as if he heard how that sounded, he adds that the daughter herself is his object, “as I avowed / At starting” (lines 52 to 53). A man who has to repeat that he is not marrying for money invites the suspicion that he is. This ending changes how the whole poem reads. One interpretation is that the Duke has lost control of his tongue and confessed without noticing. The stronger one, supported by his admission that he names the painter “by design” (line 6), is that the Duke knows what he is revealing, and that the story of the last Duchess is a message for the next one, to be carried back by the envoy: this is what I expect of a wife. The best answers do not have to choose outright. The Duke plans his effects, but his pride stops him seeing how they look to anyone who does not share his values, and that gap is where the reader stands.",
    },
  ],

  characters: [
    {
      name: 'The Duke',
      role: 'The speaker: the Duke of Ferrara, showing his art to a visitor while he negotiates his next marriage',
      body: "Everything in the poem comes through the Duke's voice, and Browning lets that voice condemn him without ever making him raise it. He is cultured, courteous and in command of every social moment: he offers seats, draws curtains, names artists and guides his guest downstairs. He is also, on his own account, a man who could not bear his wife's pleasure in a sunset and who chose to give commands rather than speak to her. His self-portrait is full of small evasions. His hesitations, “how shall I say?” and “I know not how” (lines 22 and 32), come from a man who seems to know exactly what he means, and his claim to lack “skill / In speech” (lines 35 to 36) comes in the middle of a brilliant speech. The subtitle Ferrara points to Alfonso II d'Este, fifth Duke of Ferrara, whose first wife, Lucrezia de' Medici, married him at thirteen and died in 1561 at sixteen, amid rumours that she had been poisoned on his orders, though the cause usually given now is tuberculosis. The poem never names its Duke or his wife, though, and none of its effects depends on the history: its Duke is condemned by his own words.",
    },
    {
      name: 'The Duchess',
      role: "The Duke's former wife, seen now only in her portrait and in his account of her",
      body: "The Duchess never speaks. Every detail of her comes from the husband who silenced her, so the reader has to reconstruct her against the grain of his account, and what emerges is attractive: a woman who blushed at compliments, took pleasure in the evening light, was delighted by a bough of cherries someone broke for her, and smiled at everyone, her husband included. Her faults, in his words, are that her heart was “too soon made glad” and that she was “Too easily impressed” (lines 22 to 23). Most readers take the Duke's commands to mean her death. When Hiram Corson, a professor of English literature at Cornell University, told Browning in Venice that readers disagreed about the line, the poet said he meant she was put to death, then added: “Or he might have had her shut up in a convent.” Corson, who had read the line differently himself, printed the exchange in the third edition of his introduction to Browning, prepared after the poet died in December 1889. The poem itself states neither, and its silence is part of the effect. A life has been ended, in one sense or another, by an order, and the Duke moves straight on to dowries. The portrait is all that is left of her, and it still looks, in the Duke's words, “As if alive” (line 47).",
    },
    {
      name: 'The envoy',
      role: "The silent listener: the Count's messenger, sent to arrange the Duke's next marriage",
      body: "The envoy never speaks, yet the whole poem is shaped by his presence. The Duke is performing for him, and his reactions can be read in the gaps. He is invited to sit (line 5), is told he is “not the first” (line 12) to wonder about the Duchess's glance, as if his face had asked the question, and near the end the Duke says “Nay, we'll go / Together down, sir” (lines 53 to 54). One reading is that the envoy, a servant, stood back to let the Duke go first, and the Duke insists on walking beside him as a mark of favour; another is that he was hurrying to leave. Either way, he will carry what he has heard back to his master, which is why the story may be a warning rather than a confession. The reader shares his position: we are “Strangers like you” (line 7) too, shown the portrait by a host we cannot interrupt. Browning gives him no name and no words: whatever he thinks of the Duke, he keeps to himself, and so the judgement the envoy cannot voice is left to the reader.",
    },
    {
      name: 'The Count',
      role: "The envoy's master and the father of the Duke's intended bride; spoken of but never present",
      body: "The Count is present only through the Duke's flattery. His “known munificence” (line 49) is praised in a way that doubles as a demand, since generosity is exactly what the Duke is counting on for the dowry. The relationship is a negotiation between two powerful houses, and the envoy's report will tell the Count what kind of man is asking for his daughter. That leaves the poem with a question it never answers: having heard, through his envoy, what became of the last Duchess, will the Count still send his daughter? In the history the subtitle points to, the real Duke's second marriage was arranged through the Count of Tyrol, and the bride, Barbara of Austria, was the Count's sister, not his daughter; she married Alfonso in 1565. Browning's change, like his invented artists, is a reminder that the poem borrows a setting from history rather than retelling it.",
    },
    {
      name: "The Count's daughter",
      role: 'The next Duchess: the bride under negotiation, never seen or heard',
      body: "She appears in a single clause, as “his fair daughter's self” (line 52), placed in the same sentence as the dowry and described as the Duke's object (line 53). She is the poem's future. The reader leaves knowing something she does not: what this husband does when a wife's smiles are not reserved for him. Some readers see the whole monologue as a set of terms for her, passed through her father's servant. Her silence repeats the Duchess's, and it is one reason the poem is so often read as a criticism of a world in which women were married by negotiation between men.",
    },
    {
      name: 'Frà Pandolf',
      role: 'The painter of the portrait: a friar, and a figure Browning invented',
      body: "His title, Frà, means brother and marks him as a friar, a member of a religious order who is also a painter. The Duke names him twice in the first six lines, the second time, he says, “by design” (line 6), because he wants to answer, before anyone asks, the question every visitor seems to have about the Duchess's expression: her husband's presence was not the only thing that brought that look to her face. The Duke then imagines, in the painter's own voice, the kind of compliment that might have done it (lines 16 to 19), prefacing it with “perhaps” (line 15): that her cloak lay too far over her wrist, or that paint could never capture the flush along her throat. That he can supply the words so readily suggests how the thought rankled. Yet he also calls the painting “a wonder” (line 3) and admires how the painter's hands “Worked busily a day” (line 4). He prizes the artist's work while resenting the artist's courtesy. Frà Pandolf, like the sculptor Claus of Innsbruck, is fictional.",
    },
    {
      name: 'Claus of Innsbruck',
      role: 'The sculptor of the bronze Neptune; also invented',
      body: "He is mentioned only in the last line, as the maker of a bronze of Neptune, the Roman god of the sea, “Taming a sea-horse” (line 55), cast for the Duke. His name brings the poem back to where it began, with the Duke showing a visitor art made for him, and it lets the Duke end, as he began, with a possession. The Duke names him, as he named Frà Pandolf, the way a collector names the makers of his treasures: the maker adds to the value of the thing owned. Innsbruck is a real city, and the historical Duke's second bride lived there until her marriage, so a reader who follows the history may see a link with the Count's court. The poem never says where the Count lives, though, and the safer point is the one the text supports: the last word of the poem is me.",
    },
  ],

  extracts: [
    {
      title: 'The portrait and the curtain',
      where:
        'Lines 1-13, anthology page 65. The anthology prints the painter as Frà Pandolf, with a grave accent; the edition this passage is checked against prints Fra.',
      pointer:
        "From “That's my last Duchess painted on the wall” (line 1) to “Are you to turn and ask thus” (line 13): the poem's first four sentences, ending in the middle of line 13.",
      text: "That's my last Duchess painted on the wall, / Looking as if she were alive. I call / That piece a wonder, now: Fra Pandolf's hands / Worked busily a day, and there she stands. / Will't please you sit and look at her? I said / “Fra Pandolf” by design, for never read / Strangers like you that pictured countenance, / The depth and passion of its earnest glance, / But to myself they turned (since none puts by / The curtain I have drawn for you, but I) / And seemed as they would ask me, if they durst, / How such a glance came there; so, not the first / Are you to turn and ask thus.",
      annotations: [
        {
          phrase: 'my last Duchess',
          note: 'The possessive my comes before anything else about her, and last can mean latest, previous or final. The first two imply a series of wives, and the reader learns in lines 49 to 53 that the next is already being negotiated.',
        },
        {
          phrase: 'Looking as if she were alive',
          note: 'As if concedes, in passing, that she is not alive. The full stop that follows is the first caesura, a pause the Duke glides straight over with I call, returning to his praise of the painting.',
        },
        {
          phrase: 'Worked busily a day',
          note: 'A single day of work produced a portrait that has outlasted the woman. The Duke speaks as a connoisseur admiring a craftsman, which shows what he values in the picture: skill, and ownership.',
        },
        {
          phrase: "Will't please you sit and look at her?",
          note: "A polite question that is really an instruction, the first of the Duke's courtesy formulas. It is answered at line 47 by Will't please you rise, so the visit begins and ends at his command.",
        },
        {
          phrase: '“Fra Pandolf” by design',
          note: 'The Duke admits he names the painter on purpose. He is managing his listener from the start, supplying an explanation for her expression before anyone can ask, which supports reading the poem as calculated rather than careless.',
        },
        {
          phrase: 'since none puts by / The curtain I have drawn for you, but I',
          note: 'The parenthesis interrupts his sentence to make one point: nobody but he may uncover her. The line ends on I, rhyming with by, so the couplet closes on the Duke himself.',
        },
        {
          phrase: 'if they durst',
          note: 'Visitors do not dare to ask. The Duke knows the effect he has on people and seems pleased by it, and the envoy, who is told he is not the first to wonder, is being placed among the silenced.',
        },
      ],
      question:
        "Explore how Browning presents the Duke's control over the portrait and over his visitor in lines 1 to 13. You should make reference to language, form and structure.",
    },
    {
      title: 'Never to stoop',
      where: 'Lines 31-43, anthology page 65',
      pointer:
        "From “She thanked men” (line 31) to “Never to stoop” (line 43): the Duke's explanation of why he never spoke to his wife about her behaviour.",
      text: "She thanked men, – good! but thanked / Somehow – I know not how – as if she ranked / My gift of a nine-hundred-years-old name / With anybody's gift. Who'd stoop to blame / This sort of trifling? Even had you skill / In speech – (which I have not) – to make your will / Quite clear to such an one, and say, “Just this / Or that in you disgusts me; here you miss, / Or there exceed the mark” – and if she let / Herself be lessoned so, nor plainly set / Her wits to yours, forsooth, and made excuse, / – E'en then would be some stooping; and I choose / Never to stoop.",
      annotations: [
        {
          phrase: 'good! but thanked / Somehow',
          note: 'He concedes that thanking people is good, then cannot say what was wrong with how she did it. The dashes and the broken syntax suggest a smooth speaker losing, for a moment, his grip on his own sentence.',
        },
        {
          phrase: 'I know not how',
          note: 'Either genuine vagueness or a pose of gentlemanly delicacy. Both readings damage him: if he cannot name her fault, there may have been none, and if he is pretending, the hesitation is a performance.',
        },
        {
          phrase: 'My gift of a nine-hundred-years-old name',
          note: 'He calls his family name a gift, as if marriage were a favour he granted. The hyphenated compound piles up the centuries, and the enjambment from ranked gives the boast a whole line to itself.',
        },
        {
          phrase: "Who'd stoop to blame / This sort of trifling?",
          note: 'A rhetorical question that invites the envoy to agree. Trifling shrinks her behaviour to nothing, and stoop, the word that governs the rest of the passage, appears here for the first time.',
        },
        {
          phrase: '(which I have not)',
          note: "He claims to lack skill in speech in the middle of one of the most skilful speeches in the anthology. Either this is false modesty, a gentleman's pose, or he believes it, in which case the reader sees what he cannot, which is dramatic irony.",
        },
        {
          phrase: 'Just this / Or that in you disgusts me',
          note: 'The only words he imagines saying to his wife are a rebuke, and even these are hypothetical and put into the mouth of a general you. Disgusts is perhaps the strongest word he uses, and it shows the feeling beneath the polish.',
        },
        {
          phrase: 'and I choose / Never to stoop',
          note: 'The enjambment leaves I choose hanging at the end of the line and lands on Never. Calling it a choice makes the consequence his responsibility, and the full stop closes the argument as if nothing more could be said.',
        },
      ],
      question:
        "Explore how Browning presents the Duke's pride in lines 31 to 43. You should make reference to language, form and structure.",
    },
    {
      title: 'The commands and the next bargain',
      where:
        'Lines 45-56, anthology pages 65 to 66. The anthology spells line 50 pretence, the British form; the edition this passage is checked against is American and prints pretense.',
      pointer:
        'From “This grew; I gave commands” (line 45) to “cast in bronze for me” (line 56), the end of the poem: lines 45 to 49 on page 65, lines 50 to 56 on page 66.',
      text: "This grew; I gave commands; / Then all smiles stopped together. There she stands / As if alive. Will't please you rise? We'll meet / The company below, then. I repeat, / The Count your master's known munificence / Is ample warrant that no just pretense / Of mine for dowry will be disallowed; / Though his fair daughter's self, as I avowed / At starting, is my object. Nay, we'll go / Together down, sir. Notice Neptune, though, / Taming a sea-horse, thought a rarity, / Which Claus of Innsbruck cast in bronze for me!",
      annotations: [
        {
          phrase: 'This grew; I gave commands;',
          note: 'Short clauses cut off by semicolons, delivered without emotion. This is left vague: it could be her smiling or his anger. Gave commands is the language of administration, so the act is never named.',
        },
        {
          phrase: 'Then all smiles stopped together',
          note: 'All and together make the ending total and sudden, and the repeated s sounds hush the line. The euphemism describes a death, most readers agree, entirely through what stopped rather than what was done.',
        },
        {
          phrase: 'As if alive',
          note: 'The phrase from line 2 returns, shorter, and closes the circle of the story. Now the reader knows what as if means, and the Duke passes straight on to the next piece of business.',
        },
        {
          phrase: "Will't please you rise?",
          note: "The courtesy formula from line 5 returns in the same line as As if alive, straight after the Duchess's fate. The speed of the change, from her fate to the company waiting below, is perhaps the most chilling thing about the Duke.",
        },
        {
          phrase: 'known munificence',
          note: "Flattery that is also a hint. Munificence is a grand word, from Latin, for generosity with money, and it makes the Duke's interest in the dowry sound noble when it may be simply acquisitive.",
        },
        {
          phrase: "his fair daughter's self, as I avowed / At starting, is my object",
          note: 'He insists, and says he has insisted before, that he wants the daughter rather than her money. The need to repeat it suggests the opposite, and object, to a modern ear, places her among his possessions.',
        },
        {
          phrase: "Nay, we'll go / Together down, sir",
          note: 'Nay seems to answer something the envoy did rather than said, perhaps stepping back to let the Duke go first. The silent listener acts without a word, and the Duke overrules him.',
        },
        {
          phrase: 'cast in bronze for me',
          note: 'The poem ends on me, the word the whole speech has been circling. A god taming a creature, made to order for the Duke, is the last image the envoy takes downstairs.',
        },
      ],
      question:
        "Explore how Browning connects the Duke's last marriage with his next one in lines 45 to 56. You should make reference to language, form and structure.",
    },
  ],

  vocabulary: [
    {
      term: 'Ferrara (subtitle)',
      definition:
        'A city in northern Italy, ruled in the Renaissance by dukes of the Este family. The anthology prints it under the title, placing the poem in a real court.',
    },
    {
      term: 'Frà (lines 3, 6, 16)',
      definition:
        'Italian for brother: the title of a friar. It tells the reader that the painter, whom Browning invented, is a man of the church.',
    },
    {
      term: 'countenance (line 7)',
      definition: 'A face, or the expression on it. Here, the painted face of the Duchess.',
    },
    {
      term: 'durst (line 11)',
      definition:
        'Dared: an old past tense of dare. Visitors want to ask about her expression but do not dare.',
    },
    {
      term: 'mantle (line 16)',
      definition:
        'A loose cloak. The remark the Duke imagines the painter making, that it covers her wrist too much, is the kind of compliment he resents.',
    },
    {
      term: 'favour (line 25)',
      definition:
        "A gift or token, such as a jewel or ribbon, given as a sign of love or approval and worn by the person who receives it. The Duke's favour at her breast pleased her no more than a sunset.",
    },
    {
      term: 'officious (line 27)',
      definition:
        'Too eager to help or to interfere. The Duke uses it with contempt for whoever broke cherries for her.',
    },
    {
      term: 'trifling (line 35)',
      definition:
        "Frivolous behaviour of no importance. The Duke belittles his wife's warmth with it.",
    },
    {
      term: 'lessoned (line 40)',
      definition:
        'Taught or corrected, as a pupil is. It shows how the Duke imagines speaking to a wife: as a master to a child.',
    },
    {
      term: 'forsooth (line 41)',
      definition:
        'Indeed, truly. Often used, as here, with a sneer, mocking the idea that she might argue back.',
    },
    {
      term: 'munificence (line 49)',
      definition:
        'Lavish generosity, usually from someone rich and powerful. The Duke praises the Count for it because he wants a large dowry.',
    },
    {
      term: 'warrant (line 50)',
      definition: 'A guarantee, or grounds for confidence that something will happen.',
    },
    {
      term: 'pretence (line 50)',
      definition:
        'Here, a claim, in its older sense, not a deception: any fair claim the Duke makes for a dowry.',
    },
    {
      term: 'dowry (line 51)',
      definition: "Money or property that a bride's family gives to her husband when they marry.",
    },
    {
      term: 'avowed (line 52)',
      definition:
        'Declared openly. The Duke says he stated his true aim at the start of the negotiation.',
    },
    {
      term: 'object (line 53)',
      definition:
        "Aim or purpose, in the Duke's sense. A modern reader also hears thing, a possession, and the poem supports both.",
    },
    {
      term: 'Neptune (line 54)',
      definition:
        'The Roman god of the sea. The bronze shows him taming a sea-horse, an image of mastery the Duke admires.',
    },
    {
      term: 'dramatic monologue',
      definition:
        'A poem spoken by one character, not the poet, to a listener who does not reply, in which the speaker reveals more than they intend.',
    },
    {
      term: 'silent listener',
      definition:
        'The person a dramatic monologue addresses, whose reactions are only implied. Here, the envoy.',
    },
    {
      term: 'rhyming couplets in iambic pentameter',
      definition:
        'Pairs of rhyming lines of ten syllables, alternately unstressed and stressed. Sometimes called heroic couplets.',
    },
    {
      term: 'enjambment',
      definition:
        'A sentence running on over the end of a line without a pause. In this poem it muffles the rhymes, so the Duke sounds casual.',
    },
    {
      term: 'caesura',
      definition: 'A pause in the middle of a line, usually marked by punctuation.',
    },
    {
      term: 'euphemism',
      definition:
        "A mild or vague expression used in place of a harsh one. I gave commands is the poem's central example.",
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader understands something the speaker does not. The Duke thinks he is displaying his taste; the reader sees a man condemning himself.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read Sonnet 116 and My Last Duchess. Compare how the writers present their thoughts about relationships in Sonnet 116 and My Last Duchess. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison of two named poems, as set on the November 2023 Edexcel paper: language, form and structure',
        guidance: [
          "Open with a comparative argument, not a summary: Shakespeare's speaker defines an ideal of love that stays constant whatever changes, while Browning's Duke reveals a marriage in which he expected his wife to change without ever telling her so, and stopped her when she did not.",
          'Compare voice. The sonnet speaks in general terms about love and names no partner; the dramatic monologue gives one man, one dead wife and one listener, so its thoughts about relationships come out through a story and through what the speaker lets slip. The word love never appears in My Last Duchess.',
          "Compare time. Sonnet 116 claims that love outlasts time; the Duke uses a portrait to stop time, fixing his wife at the moment of her “earnest glance” (line 8). The examiners' report on this paper noted the idea in some very able answers.",
          'Compare one shared detail closely: both poems mention a cheek, a comparison the mark scheme for this paper also suggests. In Sonnet 116 youthful beauty is what time destroys and love survives; in My Last Duchess the “spot / Of joy” in her cheek (lines 14 to 15) is the evidence the Duke holds against her.',
          "Compare form and structure. The sonnet builds to a closing couplet in which the poet stakes his credibility on his claim; Browning's continuous couplets carry the Duke from “I gave commands” (line 45) to the dowry within six lines, and end on a statue and the word me.",
          "Finish with a judgement on the question: which poem's thoughts about relationships are more certain, which more disturbing, and why.",
        ],
      },
      {
        question:
          'Re-read My Last Duchess and La Belle Dame sans Merci. Compare how the writers present power in relationships between men and women in My Last Duchess and La Belle Dame sans Merci. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison of two named poems: language, form and structure',
        guidance: [
          "Set up the contrast: in Browning's poem the man holds power and uses it; in Keats's ballad the knight tells a story in which a woman held power over him, and he woke to find her gone.",
          "Compare who tells the story. In both poems it is the man involved: the Duke, and the knight. The Duchess is given no words at all, and the lady in Keats's poem speaks only through the knight's report, so in both poems the reader has to judge the man's account.",
          "Compare form: a dramatic monologue to a silent listener, against a ballad in which a questioner's opening stanzas frame the knight's answer. Ask what each form allows the man to hide or to reveal.",
          "Compare the language of control: the Duke's commands, his curtain and his bronze Neptune “Taming a sea-horse” (line 55), against the knight's language of enchantment and captivity.",
          "Compare endings. My Last Duchess returns to the portrait and ends on a statue, with the Duke still in command; Keats's last stanza echoes his first, leaving the knight where he was found. Both structures trap someone: say who, and how.",
          'Conclude by judging which poem questions male power more sharply, and by what means.',
        ],
      },
      {
        question:
          'Re-read My Last Duchess. Compare the ways the writers present a person who is remembered in My Last Duchess and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison with a poem of your choice: language, form and structure',
        guidance: [
          "Choose a second poem that gives a real contrast. Piano and Poem at Thirty-Nine remember a parent with love, and in Remember the speaker asks a loved one to remember them; any of the three throws the Duke's grievance into relief.",
          'Compare who controls the memory. The Duchess is remembered only by the man who silenced her; in Remember, the speaker talks for themselves about how they want to be remembered after death.',
          'Compare what prompts the memory. For the Duke it is a portrait he owns and uncovers at will; in Piano it is music, which carries the speaker back to childhood, unwillingly.',
          "Compare tone. The Duke's memory is a list of complaints delivered calmly, with its chilling line and a half near the end (lines 45 to 46); set it against the tenderness or grief of your second poem.",
          "Compare form: one continuous dramatic monologue in couplets against your second poem's form, such as Rossetti's sonnet or Lawrence's quatrains.",
          'End with a judgement on what each poem suggests remembering someone can be: an act of love, or an act of possession.',
        ],
      },
      {
        question:
          'Re-read My Last Duchess. Compare how the writers present a speaker who tries to influence a listener in My Last Duchess and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison with a poem of your choice: voice and address',
        guidance: [
          'Choose a poem with a clear speaker and listener: If- (advice addressed to a son), Do not go gentle into that good night (a speaker urging a dying father) or Remember (a speaker addressing a loved one) all work.',
          'Say what each speaker wants. The Duke wants a dowry and, arguably, an obedient next wife; state the aim of your second speaker just as precisely.',
          "Compare methods: the Duke's courtesy formulas, such as “Will't please you sit” (line 5), his rhetorical questions and his carefully placed story, against the imperatives, repetitions or conditions of your second poem.",
          "Compare form. The dramatic monologue lets the reader see more than the listener is told; a villanelle's refrains, or a long chain of conditions, persuades in a different way.",
          'Weigh how far each speaker can be trusted. The Duke reveals what he does not intend to; your second speaker may be entirely sincere.',
          'Conclude on which speaker is more persuasive, and to whom: the listener in the poem, or the reader.',
        ],
      },
      {
        question:
          "Compare how poets present the effects of power in 'My Last Duchess' and in one other poem from 'Power and conflict'.",
        skill:
          'AQA-style comparison with a poem from the Power and Conflict cluster, as set on the June 2023 AQA paper: whole-poem argument, methods and ideas',
        guidance: [
          "Decide what the effects of power are before you write: the effect of the Duke's power on the Duchess (silenced, then replaced by a picture), on the envoy (managed from the first line), and on the Duke himself, whose pride leaves him owning art instead of loving a wife.",
          "Choose a second poem that lets you compare, not just list. AQA's mark scheme for the June 2023 question suggested, among others, Ozymandias for views of those who wield power, London for power that controls and represses, and Kamikaze, Remains or Exposure for reactions to being a victim of the power of others.",
          "With Ozymandias, compare two rulers seen through art. The Duke still controls his portrait and his bronze; Shelley's king survives only as a broken statue whose “sneer of cold command” a sculptor recorded. Set that phrase beside “I gave commands” (line 45).",
          'Compare perspective. Browning lets the powerful man speak for himself, so he condemns himself; Shelley reports his tyrant at second hand, through a traveller. Ask which method exposes power more sharply.',
          'Compare structure and endings. My Last Duchess ends with the Duke still in command, moving on to his next marriage and a statue made for him; Ozymandias ends with empty sand. One poem shows power continuing, the other shows it undone by time.',
          'Only My Last Duchess is printed with the AQA question, so learn short, exact quotations from your second poem, and end with a judgement on which poem presents the effects of power more disturbingly.',
        ],
      },
    ],
    tips: [
      'Treat the Duke as a performer. The strongest answers analyse what he is doing to the envoy, not only what he says about the Duchess: every courtesy is also a move in a negotiation.',
      'Read the ending back into the poem. Once the dowry appears (lines 49 to 53), the story of the last Duchess looks like a message for the next one. Answers that notice this, and weigh it against the idea of an unguarded confession, stand out.',
      'Be exact about what the poem does not say. It never states that the Duchess was killed. Most readers take her death to be implied, and Browning himself once allowed another possibility, a convent. Write that the commands strongly suggest her death, and show how the euphemism works, rather than retelling a murder the poem never describes.',
      'Say what the form does, not only what it is. Naming rhyming couplets and iambic pentameter earns little on its own; explaining that enjambment muffles the rhymes, so the Duke sounds casual while speaking in tightly controlled verse, earns a great deal.',
      'Use line references. In the Edexcel International GCSE exam the anthology poems for this section are printed with the paper, and AQA prints the named poem beside its question, so short, exact quotations with line numbers are worth more than long ones learned by heart.',
      "Compare all the way through. The examiners' report on the November 2023 Edexcel paper found that answers which made links between the poems throughout were more focused, and it noted vague comparisons of what neither poem does, such as saying that neither uses alliteration. The Edexcel mark scheme also caps an answer that discusses only one poem at its lower levels.",
      "Explore the word last in the title and first line. The same examiners' report noted answers that asked whether it means there will be no other Duchess or simply that this one is dead. The rest of the poem points one way: another Duchess is being arranged, so last means latest, and she is one of a series.",
      "Weigh history by board. For the Edexcel International GCSE question the mark scheme rewards analysis of language, form and structure and comparison between the poems, so Alfonso II and Lucrezia de' Medici are worth a sentence only when they sharpen a point about the words. AQA's mark scheme says context is assessed throughout its paper, through ideas, perspectives and contextual factors, so for AQA a well-chosen point about the Duke's world, or about the Victorian readers Browning wrote for, earns its place. Other boards that set the poem may differ again: check your own specification.",
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present their thoughts about relationships in Sonnet 116 and My Last Duchess.',
    paragraph:
      "Both poems measure love against change, but they reach opposite conclusions about who should do the changing. Shakespeare defines true love by what it refuses to do: “love is not love / Which alters when it alteration finds”, so constancy belongs to the lover, whatever happens to the beloved. Browning's Duke expects the reverse. He wanted his wife to alter, and when she did not, he stopped her altogether. His complaint that she had “A heart – how shall I say? – too soon made glad” (line 22) turns her generosity into a fault, and the hesitation in the middle is a performance of reluctance by a man who has already passed judgement. Both poems also turn to a face. In Sonnet 116, “rosy lips and cheeks” are what time destroys and love outlasts; in My Last Duchess the cheek is where the offence lies, since the “spot / Of joy” (lines 14 to 15) that a painter's compliment could call up becomes the Duke's evidence against her. Form sharpens the contrast. The sonnet's closing couplet stakes the poet's whole credibility on love's constancy, while the Duke's unbroken couplets carry him from “I gave commands” (line 45) to a dowry in six lines, without a pause for grief. Shakespeare's love lasts until doomsday; the Duke's regard lasted only as long as he was obeyed, and the portrait is the one version of his wife he could control.",
    commentary: [
      'It opens with a comparative argument rather than a description: both poems are in the first sentence, organised around one idea, change against constancy, that runs through the whole paragraph.',
      'Its quotations are short and embedded, and each is analysed for what it does: the hesitation how shall I say is read as a performance, which is the close attention to language the question asks for.',
      'It compares through a precise shared detail, the cheek, instead of a general statement that both poems are about love, so the contrast between affection and accusation is shown rather than asserted.',
      "It treats form as meaning, setting the sonnet's couplet against the Duke's continuous couplets, and it gives line references, which matter when the poems are printed with the paper.",
      "Its last sentence answers the question with a judgement about both poems, closing on the portrait so the comparison ends on Browning's central image.",
    ],
  },

  timeline: [
    {
      where: 'Lines 1-4',
      title: 'The portrait on the wall',
      summary:
        "The Duke draws his visitor's attention to a portrait of his last Duchess, painted so skilfully that she looks alive. He praises it as a wonder and names the painter, Frà Pandolf, whose hands worked busily for a single day.",
      setting: "The Duke's palace at Ferrara, before the curtained portrait",
      who: ['The Duke', 'The envoy', 'The Duchess', 'Frà Pandolf'],
      quote: "That's my last Duchess painted on the wall",
      themes: ['Women as possessions', 'Art and the frozen life'],
      tension: 2,
      significance:
        'The opening line makes the Duchess both a possession and a picture before she is a person.',
    },
    {
      where: 'Lines 5-13',
      title: 'The curtain',
      summary:
        "The Duke invites the envoy to sit and look. He explains that he named the painter on purpose, because every stranger who sees the Duchess's earnest glance seems to want to ask how it came there, and that no one but he draws back the curtain.",
      setting: 'Before the portrait, with the curtain drawn back',
      who: ['The Duke', 'The envoy', 'The Duchess', 'Frà Pandolf'],
      quote: 'since none puts by / The curtain I have drawn for you, but I',
      themes: ['Power and control', 'Art and the frozen life'],
      tension: 2,
      significance:
        'The Duke controls who sees his wife, and he has his explanation ready before anyone can ask.',
    },
    {
      where: 'Lines 13-24',
      title: 'The spot of joy',
      summary:
        'The Duke says his presence was not the only thing that brought a blush of joy to her cheek. Perhaps, he suggests, a passing compliment from the painter, about her cloak or the flush along her throat, was enough, because her heart was too easily made glad and she liked whatever she looked on.',
      setting: 'Recalled: the painting of the portrait',
      who: ['The Duke', 'The Duchess', 'Frà Pandolf'],
      quote: 'A heart – how shall I say? – too soon made glad',
      themes: ['Jealousy', 'Power and control'],
      tension: 3,
      significance:
        "The Duke's evidence against his wife is her happiness, which tells the reader more about him than about her.",
    },
    {
      where: 'Lines 25-34',
      title: 'All one to her',
      summary:
        "He lists what pleased her: the favour he gave her, the sunset, a bough of cherries broken for her in the orchard, the white mule she rode round the terrace. She thanked men, he complains, in a way that ranked his ancient family name with anybody's gift.",
      setting: 'Recalled: the palace, the orchard and the terrace',
      who: ['The Duke', 'The Duchess'],
      quote: 'My gift of a nine-hundred-years-old name',
      themes: ['Jealousy', 'Pride and the refusal to stoop'],
      tension: 3,
      significance:
        'The grievance turns out to be about rank: she did not rate his name above a sunset.',
    },
    {
      where: 'Lines 34-43',
      title: 'Never to stoop',
      summary:
        'The Duke asks who would lower himself to criticise such trifling. Even if he had the skill to tell her exactly what disgusted him, and even if she accepted the lesson without arguing, speaking to her at all would be stooping, and he chooses never to stoop.',
      setting: "The Duke's palace, before the portrait",
      who: ['The Duke', 'The Duchess', 'The envoy'],
      quote: 'and I choose / Never to stoop',
      themes: ['Pride and the refusal to stoop', 'Power and control'],
      tension: 4,
      significance:
        'He states his motive himself: the conversation that might have saved the marriage was beneath him.',
    },
    {
      where: 'Lines 43-47',
      title: 'All smiles stopped',
      summary:
        'She smiled at him whenever he passed, he admits, but she gave much the same smile to everyone. This grew; he gave commands, and all her smiles stopped. The poem never says what the commands were, and returns at once to the painting, where she stands as if alive.',
      setting: 'Before the portrait',
      who: ['The Duke', 'The Duchess'],
      quote: 'I gave commands; / Then all smiles stopped together',
      themes: ['Power and control', 'Art and the frozen life'],
      tension: 5,
      significance:
        'The crisis of the poem is told in a line and a half, as calmly as everything else, which is what makes it so frightening.',
    },
    {
      where: 'Lines 47-53',
      title: 'The dowry',
      summary:
        "The Duke asks the envoy to rise so that they can join the company below. He repeats that the Count's well-known generosity means any fair claim he makes for a dowry will be granted, though, he insists, it is the Count's daughter herself he wants.",
      setting: 'Before the portrait, as the Duke prepares to join the company below',
      who: ['The Duke', 'The envoy', 'The Count', "The Count's daughter"],
      quote: "his fair daughter's self, as I avowed / At starting, is my object",
      themes: ['Marriage as a bargain', 'Women as possessions'],
      tension: 3,
      significance:
        'Only now does the reader learn why the envoy is here: the Duke is arranging his next marriage.',
    },
    {
      where: 'Lines 53-56',
      title: 'Neptune taming a sea-horse',
      summary:
        'The Duke insists that they go down together, then, on the way, points out another treasure: a bronze of the god Neptune taming a sea-horse, a rarity cast for him by Claus of Innsbruck. The poem ends on the word me.',
      setting: 'On the way down to the company, as the Duke points out a bronze statue',
      who: ['The Duke', 'The envoy', 'Claus of Innsbruck'],
      quote: 'Notice Neptune, though, / Taming a sea-horse',
      themes: ['Power and control', 'Art and the frozen life', 'Women as possessions'],
      tension: 4,
      significance:
        'The last image is of a god subduing a creature, owned by a man whose final word is me.',
    },
  ],

  relationships: [
    {
      from: 'The Duke',
      to: 'The Duchess',
      kind: 'husband and wife',
      note: 'A marriage he describes entirely in terms of rank and gratitude. Her pleasure in other things offended him, his commands stopped her smiles, and he now owns her only as a painting.',
    },
    {
      from: 'The Duke',
      to: 'The envoy',
      kind: 'host and messenger',
      note: "The Duke controls every moment of the visit, from sitting to rising to leaving; the envoy's silence lets the story work as a warning, if that is what it is, for him to carry home.",
    },
    {
      from: 'The envoy',
      to: 'The Count',
      kind: 'servant and master',
      note: 'The Duke calls the Count your master. The envoy represents him in the marriage negotiation and will report what he has heard.',
    },
    {
      from: 'The Duke',
      to: 'The Count',
      kind: 'parties to a marriage bargain',
      note: "Two powerful houses negotiating a dowry. The Duke flatters the Count's generosity while making clear what he expects.",
    },
    {
      from: 'The Count',
      to: "The Count's daughter",
      kind: 'father and daughter',
      note: 'Her future is being settled between her father and the Duke through a go-between, and she has no voice in it.',
    },
    {
      from: 'The Duke',
      to: "The Count's daughter",
      kind: 'suitor and intended bride',
      note: 'She is his object in the same sentence as the dowry, and the story of the last Duchess hangs over her.',
    },
    {
      from: 'Frà Pandolf',
      to: 'The Duchess',
      kind: 'painter and sitter',
      note: 'His compliments while he painted her, the Duke suggests, brought the blush he resented, and the portrait is all that is left of her.',
    },
    {
      from: 'The Duke',
      to: 'Frà Pandolf',
      kind: 'owner of the portrait and its painter',
      note: "The Duke praises the painting as a wonder and names the painter on purpose, while making clear that the painter's courtesy was part of the offence.",
    },
    {
      from: 'The Duke',
      to: 'Claus of Innsbruck',
      kind: 'patron and sculptor',
      note: 'The bronze Neptune was cast for the Duke. Like the portrait, it is art that serves his pride.',
    },
  ],

  compareWith: [
    {
      title: 'Sonnet 116 by William Shakespeare',
      href: '/igcse/edexcel/poetry/sonnet-116',
      reason:
        'Paired with My Last Duchess on the November 2023 Edexcel paper: an ideal of love that never alters, set against a husband who could not accept his wife as she was.',
    },
    {
      title: 'La Belle Dame sans Merci by John Keats',
      href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
      reason:
        "Another man's account of a woman who never speaks for herself except through him, with power running the other way, from the lady to the knight.",
    },
    {
      title: 'Remember by Christina Rossetti',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'A speaker who decides for themselves how they wish to be remembered after death, against a woman remembered only in the words of the man who silenced her.',
    },
    {
      title: 'Ozymandias by Percy Bysshe Shelley',
      href: '/revision/poetry/power-and-conflict/ozymandias',
      reason:
        "For AQA's Power and Conflict cluster: another ruler seen through the art made of him, but Shelley's tyrant is exposed by time and ruin, where Browning's Duke exposes himself.",
    },
  ],

  contentGuidance: ['violence', 'crime_injustice', 'mortality', 'intimate_relationships'],

  quotesFromElsewhere: [
    // Sonnet 116, lines 2 to 3 and line 9, as printed on page 59 of the same
    // anthology and on the November 2023 paper ("impediments; love is not
    // love", lower-case). The held src/data/full-texts/sonnet-116.ts prints
    // "Love" with a capital after a full stop; the anthology is followed here.
    // Quoted in the model answer, which compares the two poems.
    'love is not love / Which alters when it alteration finds',
    'rosy lips and cheeks',
    // Browning's reported reply about "I gave commands", from Hiram Corson's
    // Note to the Third Edition of An Introduction to the Study of Robert
    // Browning's Poetry (Project Gutenberg #260), checked word for word there
    // and in the Cornell scan of the third edition (archive.org
    // cu31924072526167).
    'Or he might have had her shut up in a convent.',
    // Ozymandias, line 5, as printed on AQA's specimen 8702/2 paper; quoted in
    // the AQA-style practice question's guidance.
    'sneer of cold command',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 65 to 66 (PDF pages 71 to 72): the prescribed printing. Read on 25 September 2026, and downloaded again and re-read on 26 September 2026, for all 56 lines and their numbering, the subtitle Ferrara, the page break after line 49, the absence of stanza breaks (line positions measured from the PDF: an even 13-point spacing throughout), the spellings Frà, favour and pretence, and the reading called that spot in line 14. Every quotation in this guide was checked against it. Also used for the Sonnet 116 phrases in the model answer (page 59), for La Belle Dame sans Merci, Piano, If- and Remember as described in the practice questions, and for the list of Part 3 poems',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Selections from the Poems and Plays of Robert Browning, edited by Myra Reynolds, Project Gutenberg eBook #28041: the edition held as a byte copy in src/data/full-texts/my-last-duchess.ts, against which every quotation and passage was also checked. Compared line by line with the anthology on 26 September 2026: the words differ in five places only (Fra three times, favor, pretense)',
      url: 'https://www.gutenberg.org/ebooks/28041',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, Monday 6 November 2023: Section B question 2 (Sonnet 116 and My Last Duchess, relationships), used verbatim as the first practice question; question 3 (a named poem and one other from the anthology) as the model for the third and fourth; the note that the poems for Section B are included with the paper',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        "Pearson 4ET1/01 mark scheme, November 2023: indicative content for My Last Duchess and Sonnet 116, including the comparison of rosy lips and cheeks with the spot of joy in the Duchess's cheek; the skills assessed in Section B (language, form and structure; links between the poems); and the rule that the mark cannot progress beyond the top of Level 2 if only one poem has been considered",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240125.pdf',
    },
    {
      label:
        "Pearson 4ET1/01 examiners' report, November 2023: on the Sonnet 116 and My Last Duchess question, that links made throughout produced more focused responses; that some candidates explored whether last means there will be no other Duchess or that she is dead; that some very able candidates saw Browning as trying to fix time through the portrait; and the occasional vague comparison of what neither poem does, such as alliteration",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20240125.pdf',
    },
    {
      label:
        'AQA GCSE English Literature 8702/2 question paper, 24 May 2023: question 26 (the effects of power in My Last Duchess and one other poem from Power and Conflict), used verbatim as the fifth practice question; My Last Duchess printed beside the question with the same 56 lines and line numbers as the Pearson anthology, and no second poem printed',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-QP-JUN23-CR.PDF',
    },
    {
      label:
        'AQA 8702/2 mark scheme, June 2023: indicative content for question 26, including the suggested comparisons with Ozymandias, London, Kamikaze and Remains, and dramatic monologue as a structural point',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-MS-JUN23.PDF',
    },
    {
      label:
        'AQA 8702/2 specimen question paper: the printing of Ozymandias used for the phrase sneer of cold command and for the description of the poem in the fifth practice question',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-87022-SQP.PDF',
    },
    {
      label:
        "Hiram Corson, An Introduction to the Study of Robert Browning's Poetry, third edition, Note to the Third Edition, Project Gutenberg eBook #260: Browning's reply, in the great hall of the Palazzo Rezzonico, about the meaning of I gave commands; Corson's own earlier reading that the commands were not for her death; Corson described as Professor of English Literature in the Cornell University on the title page. The Gutenberg transcriber dates this edition to 1886, but 1886 is the first edition (its preface is signed September 1886), and the Note to the Third Edition mentions visiting Browning in Venice a month before his death, so it was written after December 1889. Checked against the archive.org scans of an 1889 printing without the note (introductiontost00browuoft) and of the third edition with it (cu31924072526167, anintroductiont01corsgoog)",
      url: 'https://www.gutenberg.org/ebooks/260',
    },
    {
      label:
        "Wikipedia, Ca' Rezzonico: the palazzo is in Venice, and Browning died in his son's apartment there in 1889",
      url: 'https://en.wikipedia.org/wiki/Ca%27_Rezzonico',
    },
    {
      label:
        "Wikipedia, My Last Duchess (wikitext read 26 September 2026): first published in Dramatic Lyrics (1842), titled Italy; the epigraph Ferrara indicating Alfonso II d'Este, fifth Duke of Ferrara; Lucrezia married at thirteen and dead at sixteen; the Duke then seeking the hand of Barbara, sister of the Count of Tyrol, who arranged the marriage (cited there to Woolford and Karlin, The Poems of Browning 1841-1846, Longman, 1991); Frà Pandolf and Claus of Innsbruck fictional. The article also names the envoy as Nikolaus Madruz of Innsbruck, without a citation, so this guide does not repeat it",
      url: 'https://en.wikipedia.org/wiki/My_Last_Duchess',
    },
    {
      label:
        "Wikipedia, Lucrezia de' Medici, Duchess of Ferrara: born 14 February 1545, married Alfonso in 1558 at thirteen, died 21 April 1561 at sixteen; the article gives pulmonary tuberculosis as the cause of death, and records the rumours that she was poisoned on her husband's orders",
      url: 'https://en.wikipedia.org/wiki/Lucrezia_de%27_Medici,_Duchess_of_Ferrara',
    },
    {
      label:
        'Wikipedia, Archduchess Barbara of Austria: daughter of the Emperor Ferdinand I, and so sister of Ferdinand II, Count of Tyrol; lived in the care of nuns at Innsbruck until her marriage; married Alfonso II at Ferrara on 5 December 1565',
      url: 'https://en.wikipedia.org/wiki/Archduchess_Barbara_of_Austria',
    },
    {
      label:
        "The Victorian Web, Robert Browning's My Last Duchess: first printed as I. Italy, paired with II. France under the title Italy and France; the historical Duke Alfonso II d'Este; the ducal palace at Ferrara as the setting. It gives Alfonso's death as 1597 where Wikipedia gives 1598, so this guide states neither",
      url: 'https://victorianweb.org/authors/rb/duchess/duchess.html',
    },
    {
      label:
        'Wikipedia, Robert Browning: born 7 May 1812 in Camberwell, died 12 December 1889 in Venice; Dramatic Lyrics (Bells and Pomegranates No. III) published in 1842',
      url: 'https://en.wikipedia.org/wiki/Robert_Browning',
    },
  ],
}
