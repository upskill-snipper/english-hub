import type { Annotation, CharacterInfo, ThemeInfo } from '@/components/study/InteractiveTextViewer'

/**
 * The authored layer of the Frankenstein reader: the notes on key lines, and
 * the character, theme and context panels. The novel itself is not here. It
 * is src/data/full-texts/frankenstein.ts, which page.tsx merges these onto by
 * section title.
 *
 * WHAT BROKE, AND WHY THIS FILE EXISTS (26 September 2026). The reader said it
 * printed "the 1818 first edition" and printed neither that nor any edition.
 * Its text was typed into page.tsx: 9,357 words of a novel of about 75,000, as
 * eight groups of extracts. Of its 123 paragraphs, 43 differ from the 1831
 * text now held and 33 match no edition of the novel at all: sentences were
 * dropped and words changed ("goodness" for "kindness", which every edition
 * prints), and Chapter 4 ended on sentences from Chapter 5. What was left was
 * mostly the 1831 revision, which the 1818 edition it named does not contain.
 * The reader now prints the whole of Shelley's 1831 text, Project Gutenberg
 * #42324, copied by scripts/fetch-public-domain-prose.mjs and never retyped.
 * That generator's entry says why 1831 and why that file: every other
 * Frankenstein page quotes 1831 and numbers its chapters 1 to 24.
 *
 * EVERY NOTE WAS KEPT AND RE-ANCHORED. The viewer finds a note by searching
 * its section for the note's `text`, so a note typed from memory highlights
 * nothing and nobody notices. Of the old reader's 52 notes, 17 did not match
 * the edition ("wretch-the" for "wretch--the", "wedding night" for
 * "wedding-night", commas missing from "borne away by the waves, and lost").
 * Each `text` below is cut from the held edition, character for character,
 * and src/__tests__/frankenstein-reader-notes-land.test.ts fails if one stops
 * being found once, and only once, in its own section. Three needed more than
 * a character put back:
 *
 * - "I was benevolent; my soul glowed with love and humanity" had been printed
 *   in Chapter 24 under a note about "the Creature's final speech". The line
 *   is from Chapter 10, on the glacier. The note is kept, on the line of his
 *   final speech that makes the argument it describes: "My heart was fashioned
 *   to be susceptible of love and sympathy".
 * - The note on Victor's insults was anchored on the single word "Devil",
 *   which the viewer would have highlighted wherever the letters occur in the
 *   chapter. It now sits on "Devil," I exclaimed.
 * - "I am malicious because I am miserable" is Chapter 17, not 16, and "I
 *   carried pistols and a dagger" is Chapter 22, not 23. Each note now sits in
 *   the chapter the line is in.
 *
 * The quotations inside the notes and panels follow the same edition, and
 * src/__tests__/frankenstein-pages-quote-the-held-text.test.ts checks them
 * with every other Frankenstein page. Corrected with the move: Walton's "I
 * have no friend, Margaret" is Letter II, not his opening letter; the
 * narrator's word is "dæmon"; Alphonse's "springs of existence suddenly gave
 * way:" takes a colon; the 1831 Introduction, not a preface, is where Shelley
 * describes the conversations about galvanism; and the Paradise Lost epigraph
 * is on the 1818 title page, which the 1831 edition this reader prints does
 * not carry.
 *
 * Two claims in the context panel were corrected in review the same day. It
 * said "Polidori's" ghost story became "The Vampyre", while the Introduction
 * this reader now prints says Polidori's was the skull-headed lady and Byron's
 * was the fragment printed with Mazeppa, which The Vampyre grew from. And it
 * said that when Mary Shelley was named as the author "many refused to believe
 * a teenage woman could have written it", for which there was no source; it
 * now says what is recorded, that Walter Scott took the novel for Percy
 * Shelley's and she wrote to correct him.
 */

/**
 * Keyed by the held edition's own section title ("Letter IV", "Chapter V"),
 * which the generator takes from the heading the book prints. A section with
 * no entry is printed without notes.
 */
export const NOTES: Record<string, Annotation[]> = {
  'Letter I': [
    {
      type: 'theme',
      text: 'no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings',
      note: "Dramatic irony: Walton's confidence foreshadows the catastrophe to come. The reader knows this optimism is tragically misplaced.",
    },
    {
      type: 'language',
      text: 'the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight',
      note: 'Romantic sublime: Walton reimagines danger as beauty, reflecting the Romantic fascination with extreme landscapes and the power of imagination over reality.',
    },
    {
      type: 'context',
      text: 'discovering a passage near the pole',
      note: 'Alludes to the real quest for the Northwest Passage that obsessed 18th- and 19th-century explorers. Shelley links scientific exploration to dangerous ambition.',
    },
    {
      type: 'quote',
      text: 'nothing contributes so much to tranquillise the mind as a steady purpose',
      note: 'Key quote: Walton echoes Victor\'s obsessive single-mindedness. Shelley suggests that "steady purpose" can be self-destructive when it becomes fixation.',
    },
  ],
  'Letter II': [
    {
      type: 'character',
      text: 'I have no friend, Margaret',
      note: "Walton's loneliness mirrors both Victor's self-imposed isolation and the Creature's enforced solitude. All three narrators suffer from lack of companionship.",
    },
  ],
  'Letter IV': [
    {
      type: 'theme',
      text: 'a being which had the shape of a man, but apparently of gigantic stature',
      note: 'The Creature is introduced before Victor, seen at a distance as a mysterious giant. Shelley builds suspense by withholding identity.',
    },
  ],
  'Chapter IV': [
    {
      type: 'quote',
      text: 'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge',
      note: "Victor directly warns Walton. This makes the entire narrative a cautionary tale - the embedded narrative structure gives Victor's story moral weight.",
    },
    {
      type: 'theme',
      text: 'I seemed to have lost all soul or sensation but for this one pursuit',
      note: "Victor's obsessive isolation from family, friends, and nature mirrors the Creature's later enforced isolation. Both are cut off from human connection.",
    },
    {
      type: 'language',
      text: 'my workshop of filthy creation',
      note: '"Filthy" suggests both physical disgust and moral corruption. The phrase inverts the divine act of creation - God\'s work is holy; Victor\'s is unclean.',
    },
  ],
  'Chapter V': [
    {
      type: 'language',
      text: 'It was on a dreary night of November',
      note: 'Gothic atmosphere: darkness, rain, a dying candle. Shelley uses pathetic fallacy to signal that this act of creation is unnatural and doomed.',
    },
    {
      type: 'context',
      text: 'I might infuse a spark of being into the lifeless thing',
      note: "Alludes to galvanism - Luigi Galvani's experiments making dead frogs' legs twitch with electricity. Contemporary readers would have recognised this as cutting-edge science.",
    },
    {
      type: 'theme',
      text: 'the beauty of the dream vanished, and breathless horror and disgust filled my heart',
      note: "The gap between ambition and reality. Victor's horror is not at what the Creature does but at what it looks like - a shallow, appearance-based rejection that Shelley critiques.",
    },
    {
      type: 'character',
      text: 'I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt',
      note: "The dream links creation with death: Elizabeth transforms into Victor's dead mother. Shelley foreshadows Elizabeth's murder and suggests Victor's obsession corrupts love itself.",
    },
    {
      type: 'quote',
      text: 'I beheld the wretch--the miserable monster whom I had created',
      note: 'Victor denies the Creature humanity instantly. "Wretch" and "monster" are labels that justify his abandonment. The Creature\'s outstretched hand suggests he wants connection, not harm.',
    },
  ],
  'Chapter X': [
    {
      type: 'language',
      text: 'the solemn silence of this glorious presence-chamber of imperial Nature',
      note: 'The Romantic sublime: nature as a cathedral ("presence-chamber") that dwarfs humanity. Mont Blanc was a key Romantic landscape - Percy Shelley wrote a poem about it the same year.',
    },
    {
      type: 'character',
      text: '"Devil," I exclaimed',
      note: 'Victor calls the Creature "Devil," "vile insect," and "dæmon" - all dehumanising labels. The Creature\'s eloquent, rational speech contrasts sharply with Victor\'s emotional abuse.',
    },
    {
      type: 'quote',
      text: 'I ought to be thy Adam; but I am rather the fallen angel',
      note: "The Creature references Milton's Paradise Lost, comparing himself to both Adam (who deserved love) and Satan (who was cast out). This is one of the most important quotes in the novel.",
    },
    {
      type: 'quote',
      text: 'I was benevolent and good; misery made me a fiend',
      note: "The novel's central nature-vs-nurture argument in one sentence. The Creature was born innocent; society's cruelty made him violent.",
    },
    {
      type: 'context',
      text: 'The desert mountains and dreary glaciers are my refuge',
      note: 'The Creature is exiled to extreme landscapes that mirror his exclusion from society. The Arctic frame and Alpine setting both symbolise isolation and the limits of human endurance.',
    },
    {
      type: 'theme',
      text: 'I felt what the duties of a creator towards his creature were',
      note: 'Victor briefly acknowledges his parental responsibility - but this insight is fleeting. He will ultimately refuse to honour it, with catastrophic consequences.',
    },
  ],
  'Chapter XI': [
    {
      type: 'theme',
      text: 'I was a poor, helpless, miserable wretch; I knew, and could distinguish, nothing; but feeling pain invade me on all sides, I sat down and wept',
      note: "The Creature's birth parallels a newborn's experience - helpless, overwhelmed by sensation. Shelley draws on Locke's tabula rasa (blank slate) philosophy: the Creature begins with no knowledge, no language, no morality.",
    },
    {
      type: 'language',
      text: 'I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects',
      note: "The fire is symbolic: knowledge (like Prometheus's stolen fire) can both warm and burn. This mirrors the novel's central argument about science and discovery.",
    },
  ],
  'Chapter XII': [
    {
      type: 'context',
      text: 'The old man, whom I soon perceived to be blind',
      note: "De Lacey's blindness is symbolically important: he is the only character who judges the Creature without seeing him. Their brief conversation is the closest the Creature comes to acceptance.",
    },
    {
      type: 'character',
      text: 'the gentle manners of these people',
      note: 'The De Lacey family represents the ideal domestic harmony that both Victor and the Creature lack. Their kindness teaches the Creature virtue, making his later rejection even more devastating.',
    },
    {
      type: 'theme',
      text: 'I had been accustomed, during the night, to steal a part of their store for my own consumption; but when I found that in doing this I inflicted pain on the cottagers, I abstained',
      note: 'The Creature develops empathy and moral reasoning through observation - a powerful demonstration of nature-versus-nurture. He chooses to sacrifice his own comfort for others.',
    },
    {
      type: 'quote',
      text: 'a godlike science',
      note: "Language as divine power. The Creature's desire to learn language reflects his desire for human connection. Ironically, his eloquence later makes his suffering more articulate but does not prevent his rejection.",
    },
  ],
  'Chapter XV': [
    {
      type: 'context',
      text: "'Paradise Lost,' a volume of 'Plutarch's Lives,' and the 'Sorrows of Werter.'",
      note: "These three books represent foundational texts: Milton on creation and rebellion, Plutarch on heroism and civic virtue, Goethe on emotional suffering. They shape the Creature's intellectual and moral development.",
    },
    {
      type: 'quote',
      text: 'Many times I considered Satan as the fitter emblem of my condition',
      note: "The Creature identifies with Milton's Satan - not out of evil, but out of exile. Like Satan, he was cast out by his creator and denied belonging. Shelley makes the reader question who the real villain is.",
    },
    {
      type: 'language',
      text: 'Hateful day when I received life!',
      note: 'Echoes Job 3:3 ("Let the day perish wherein I was born") and Satan\'s lament in Paradise Lost. The Creature curses his own existence - the ultimate indictment of his creator\'s irresponsibility.',
    },
  ],
  'Chapter XVI': [
    {
      type: 'theme',
      text: 'My protectors had departed, and had broken the only link that held me to the world',
      note: "The De Lacey family's rejection is the turning point. The Creature was benevolent while he had hope of acceptance; their flight destroys that hope and triggers his descent into violence.",
    },
    {
      type: 'character',
      text: 'this little creature was unprejudiced, and had lived too short a time to have imbibed a horror of deformity',
      note: "The Creature's naive hope that a child might accept him reveals his desperate longing for connection. William's immediate revulsion - learned prejudice - destroys this last hope.",
    },
    {
      type: 'theme',
      text: 'I, too, can create desolation',
      note: "A dark parody of Victor's act of creation. Victor created life irresponsibly; the Creature creates death deliberately. Both acts stem from the same source: unchecked power without moral guidance.",
    },
  ],
  'Chapter XVII': [
    {
      type: 'quote',
      text: 'I am malicious because I am miserable',
      note: "One of the novel's most important lines. The Creature articulates a clear causal chain: society made him suffer, suffering made him cruel. This is Shelley's Rousseauian argument that humanity corrupts the naturally good.",
    },
  ],
  'Chapter XX': [
    {
      type: 'theme',
      text: 'a race of devils would be propagated upon the earth',
      note: "Victor's fear of reproduction reveals anxieties about female autonomy and uncontrollable creation. The female creature is destroyed because she might have independent will - a profoundly gendered act of control.",
    },
    {
      type: 'language',
      text: 'trembling with passion, tore to pieces the thing on which I was engaged',
      note: 'Victor "tore to pieces" the female creature - violent, destructive language that mirrors the Creature\'s murders. Victor\'s act of destruction is as visceral as any killing in the novel.',
    },
    {
      type: 'theme',
      text: 'Shall each man," cried he, "find a wife for his bosom, and each beast have his mate, and I be alone?',
      note: "The Creature's plea echoes the loneliness that pervades the novel. He asks only for what every living thing has - companionship - and is denied even this basic need.",
    },
    {
      type: 'character',
      text: 'You are my creator, but I am your master;--obey!',
      note: 'A complete inversion of the creator-creation hierarchy. The Creature claims authority over Victor, just as Victor once played God. The power dynamic has reversed entirely.',
    },
    {
      type: 'quote',
      text: 'Beware; for I am fearless, and therefore powerful',
      note: "The Creature's most chilling threat. Having nothing left to lose, he is beyond intimidation. Power through desperation - Shelley shows that the truly dangerous being is one stripped of all hope.",
    },
    {
      type: 'quote',
      text: 'I shall be with you on your wedding-night',
      note: "The most important piece of dramatic irony in the novel. Victor interprets this as a threat to himself; the reader suspects it means Elizabeth. Victor's self-absorption blinds him to the real danger.",
    },
  ],
  'Chapter XXII': [
    {
      type: 'theme',
      text: 'I carried pistols and a dagger constantly about me',
      note: 'Victor arms himself to protect himself, not Elizabeth. His self-absorption is fatal: he interprets "I shall be with you on your wedding-night" as a threat to his own life, never considering Elizabeth as the target.',
    },
  ],
  'Chapter XXIII': [
    {
      type: 'language',
      text: 'the whole truth rushed into my mind, my arms dropped, the motion of every muscle and fibre was suspended',
      note: "Shelley renders Victor's horror physically: paralysis, blood tingling, sensory suspension. The body understands what the mind refused to anticipate.",
    },
    {
      type: 'quote',
      text: 'She was there, lifeless and inanimate, thrown across the bed, her head hanging down, and her pale and distorted features half covered by her hair',
      note: "Elizabeth's death scene echoes Gothic art - the pale female victim, the bridal bed becoming a deathbed. Shelley critiques how women are sacrificed to male ambition and conflict.",
    },
    {
      type: 'context',
      text: 'her bloodless arms and relaxed form flung by the murderer on its bridal bier',
      note: 'The wedding night becomes a funeral. Shelley subverts the marriage plot - the expected happy ending of a novel - into Gothic horror, reflecting the impossibility of domestic happiness when moral debts remain unpaid.',
    },
    {
      type: 'theme',
      text: 'the pale yellow light of the moon illuminate the chamber',
      note: 'The "pale yellow light" echoes the "dull yellow eye" of the Creature\'s birth in Chapter 5. Moonlight links creation and death, connecting both scenes in a cycle of tragedy.',
    },
    {
      type: 'character',
      text: 'A grin was on the face of the monster; he seemed to jeer, as with his fiendish finger he pointed towards the corpse of my wife',
      note: "The Creature's grin mirrors the moment of his own creation, when he smiled at Victor and reached out a hand. Victor's rejection of that first gesture has come full circle in horrific symmetry.",
    },
  ],
  'Chapter XXIV': [
    {
      type: 'theme',
      text: 'revenge alone endowed me with strength and composure',
      note: 'Victor and the Creature become mirror images: both driven by revenge, both self-destructive, both isolated. Their pursuer-pursued dynamic has made them indistinguishable in their obsession.',
    },
    {
      type: 'quote',
      text: 'I am satisfied: miserable wretch! you have determined to live, and I am satisfied',
      note: "The Creature wants Victor alive to suffer. This inverts the creator-creation relationship: the Creature now controls Victor's existence, just as Victor once controlled his.",
    },
    {
      type: 'context',
      text: 'I am returning to England. I have lost my hopes of utility and glory;--I have lost my friend',
      note: "Walton turns back, though because his crew demand it rather than by his own choice. His retreat represents the novel's moral resolution: some ambitions must be abandoned.",
    },
    {
      type: 'character',
      text: 'one vast hand was extended, in colour and apparent texture like that of a mummy',
      note: "The Creature's outstretched hand over Victor's corpse mirrors Chapter 5, where he reached out to his creator at birth. The gesture that began in hope ends in grief.",
    },
    {
      type: 'quote',
      text: 'My heart was fashioned to be susceptible of love and sympathy',
      note: "The Creature's final speech returns to his core argument: isolation destroyed his goodness. This repetition across the novel gives his words cumulative moral force.",
    },
    {
      type: 'language',
      text: 'I shall ascend my funeral pile triumphantly, and exult in the agony of the torturing flames',
      note: "Promethean imagery: fire - the element of creation and knowledge - becomes the instrument of self-destruction. The Creature's planned immolation closes the mythic circle opened by the subtitle.",
    },
    {
      type: 'theme',
      text: 'He was soon borne away by the waves, and lost in darkness and distance',
      note: "The novel's final image is ambiguous: we never see the Creature die. Shelley refuses closure, leaving the questions of justice, responsibility, and humanity permanently open.",
    },
  ],
}

export const CHARACTERS: CharacterInfo[] = [
  {
    name: 'Victor Frankenstein',
    description:
      "A brilliant but fatally irresponsible scientist from Geneva. Victor's obsessive ambition drives him to create life, but his immediate rejection of his creation sets in motion every tragedy in the novel. He embodies the dangers of knowledge without ethics, ambition without compassion, and power without responsibility. His narrative is self-pitying and unreliable - he positions himself as victim while consistently failing to act.",
    keyQuotes: [
      '"I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body."',
      '"Learn from me... how dangerous is the acquirement of knowledge."',
      '"I beheld the wretch--the miserable monster whom I had created."',
    ],
  },
  {
    name: 'The Creature',
    description:
      "Victor's creation, born innocent and driven to violence by universal rejection. The Creature is articulate, emotionally complex, and deeply human in his longing for companionship. His eloquent narrative occupies the centre of the novel, and Shelley ensures the reader sympathises with him. He learns language, morality, and empathy through observation - then learns hatred through experience.",
    keyQuotes: [
      '"I ought to be thy Adam; but I am rather the fallen angel."',
      '"I was benevolent and good; misery made me a fiend."',
      '"If I cannot inspire love, I will cause fear."',
    ],
  },
  {
    name: 'Robert Walton',
    description:
      "An Arctic explorer whose letters frame the entire novel. Walton mirrors Victor in his dangerous ambition and loneliness, but ultimately turns his ship back, at his crew's demand. He is the only character who learns from the tragedy, making him the novel's moral compass and surrogate for the reader.",
    keyQuotes: [
      '"I have no friend, Margaret."',
      '"I am returning to England. I have lost my hopes of utility and glory."',
    ],
  },
  {
    name: 'Elizabeth Lavenza',
    description:
      "Victor's adopted sister and later his wife. Elizabeth is gentle, devoted, and ultimately sacrificed to the conflict between Victor and his creation. Her murder on their wedding night is the culmination of Victor's failure to confront consequences. Shelley uses her death to critique how women become collateral damage in male ambition and rivalry.",
    keyQuotes: [
      '"I have a pretty present for my Victor."',
      '"She was there, lifeless and inanimate, thrown across the bed."',
    ],
  },
  {
    name: 'Henry Clerval',
    description:
      "Victor's closest friend, representing warmth, creativity, and human connection - everything Victor sacrifices in his pursuit of forbidden knowledge. Clerval studies Oriental languages and dreams of adventure, but his ambition is social and cultural, not transgressive. His murder by the Creature strips Victor of his last meaningful friendship.",
    keyQuotes: ['"He was a being formed in the very poetry of nature."'],
  },
  {
    name: 'Alphonse Frankenstein',
    description:
      "Victor's loving and dutiful father. Alphonse represents the stable, nurturing family structure that Victor abandons in pursuit of his obsession. His death from grief after Elizabeth's murder completes the destruction of Victor's entire domestic world - the family that should have anchored him is annihilated.",
    keyQuotes: [
      '"The springs of existence suddenly gave way: he was unable to rise from his bed."',
    ],
  },
  {
    name: 'Justine Moritz',
    description:
      "A servant in the Frankenstein household, wrongly convicted and executed for William's murder. Justine is the novel's clearest example of institutional injustice - she confesses under pressure from her confessor and is executed despite Elizabeth's defence. Her death implicates both the legal system and Victor, who knows the truth but stays silent.",
    keyQuotes: ['"God knows... how entirely I am innocent."'],
  },
]

export const THEMES: ThemeInfo[] = [
  {
    name: 'Dangerous Ambition & Hubris',
    description:
      "Victor's relentless pursuit of forbidden knowledge leads to catastrophe. Shelley draws on the Prometheus myth (referenced in the subtitle) to warn against human overreach. The desire to rival God is presented not as heroic but as reckless and destructive. Walton's parallel ambition provides a contrast: he alone turns back.",
    evidence: [
      '"Learn from me... how dangerous is the acquirement of knowledge." (Ch. 4)',
      'Victor compares himself to an "archangel who aspired to omnipotence" (Ch. 24)',
      "Walton abandons his polar voyage after hearing Victor's story, though at his crew's demand",
    ],
  },
  {
    name: 'Creation & Parental Responsibility',
    description:
      "The novel's central moral question: does a creator owe duties to their creation? Victor abandons the Creature at birth, and every subsequent tragedy flows from that act of irresponsibility. Shelley argues that bringing something into existence - whether child, creation, or scientific discovery - carries an absolute obligation of care.",
    evidence: [
      'Victor flees the moment the Creature opens its eyes (Ch. 5)',
      'The Creature\'s plea: "I ought to be thy Adam" acknowledges the creator\'s duty (Ch. 10)',
      'Victor destroys the female creature, denying the Creature even the possibility of companionship (Ch. 20)',
    ],
  },
  {
    name: 'Isolation & Loneliness',
    description:
      'All three narrators suffer from profound isolation. Victor cuts himself off from family to pursue his work. The Creature is denied any human connection. Walton laments having no friend. Shelley shows that loneliness is not merely painful but morally corrosive - it drives both Victor and the Creature toward destruction.',
    evidence: [
      'Walton\'s second letter: "I have no friend, Margaret" (Letter II)',
      'Victor: "I seemed to have lost all soul or sensation but for this one pursuit" (Ch. 4)',
      'The Creature: "Shall each man... find a wife for his bosom... and I be alone?" (Ch. 20)',
    ],
  },
  {
    name: 'Nature versus Nurture',
    description:
      "The Creature is born innocent and becomes violent only after repeated rejection. His eloquent account of learning language, empathy, and morality from the De Lacey family - then being brutalised by society - is Shelley's powerful Rousseauian argument that environment, not innate character, shapes moral development.",
    evidence: [
      'The Creature learns compassion by observing the De Laceys (Ch. 12)',
      '"I was benevolent and good; misery made me a fiend" (Ch. 10)',
      "William's rejection triggers the Creature's first killing (Ch. 16)",
    ],
  },
  {
    name: 'Science Without Ethics',
    description:
      'Written in the age of galvanism and rapid scientific progress, the novel asks what happens when knowledge outstrips moral responsibility. Victor never pauses to consider the ethical implications of creating life. Shelley suggests that science without conscience is monstrous - a warning that resonates with debates about AI, genetic engineering, and biotechnology today.',
    evidence: [
      '"My workshop of filthy creation" - the language of corruption, not progress (Ch. 4)',
      "Victor's failure to consider what life would be like for his creation",
      'The subtitle, The Modern Prometheus, frames scientific ambition as divine transgression',
    ],
  },
  {
    name: 'Prejudice & Appearance',
    description:
      'Every character who sees the Creature rejects him based on appearance alone. The De Laceys, William, the villagers - all react with horror before the Creature can speak. Only the blind De Lacey engages with him as a person. Shelley critiques a society that judges worth by surface, arguing that true monstrosity lies in moral failure, not physical form.',
    evidence: [
      'Victor\'s immediate revulsion: "I beheld the wretch" despite having chosen "beautiful" features (Ch. 5)',
      'De Lacey, who is blind, is the only character to show the Creature kindness (Ch. 15)',
      'The Creature\'s self-awareness: "I am malicious because I am miserable" - society\'s rejection created the monster (Ch. 17)',
    ],
  },
]

export const CONTEXT_NOTES = `THIS TEXT

This reader prints the whole novel in the text Mary Shelley revised for the 1831 edition, with her new Introduction and the 1818 Preface. Chapter numbers are the 1831 numbering, 1 to 24, which the rest of the Frankenstein pages use; the 1818 first edition divides the same story into three volumes, numbering each volume's chapters from one.

ROMANTICISM AND THE NOVEL

Frankenstein was written during the height of the Romantic movement (roughly 1780-1850), and its themes, settings, and concerns are deeply Romantic. Understanding this context is essential for GCSE analysis.

THE ROMANTIC SUBLIME
The novel's Alpine and Arctic settings reflect the Romantic fascination with sublime landscapes - vast, terrifying natural spaces that dwarf humanity and inspire both awe and terror. Mont Blanc, where the Creature confronts Victor in Chapter 10, was a key Romantic landmark. Percy Bysshe Shelley wrote his poem "Mont Blanc" during the same 1816 summer that Mary began Frankenstein. The sublime landscape serves as a backdrop for the novel's most important moral confrontations.

SCIENCE AND GALVANISM
Luigi Galvani's experiments in the 1780s and 1790s demonstrated that electrical current could make dead frogs' legs twitch, suggesting that electricity might be the "spark of life." His nephew Giovanni Aldini publicly applied electrical current to the bodies of executed criminals, causing their limbs to move. These experiments were widely discussed and raised genuine questions about whether science could reanimate the dead. Mary Shelley acknowledged this influence in her 1831 Introduction, which opens this reader, describing how conversations at the Villa Diodati turned to whether "galvanism had given token of such things."

THE VILLA DIODATI AND THE GHOST STORY COMPETITION
In the summer of 1816 (the "Year Without a Summer," caused by the eruption of Mount Tambora), Mary Godwin (not yet married to Percy Shelley), Percy Shelley, Lord Byron, John Polidori, and Claire Clairmont gathered at the Villa Diodati near Lake Geneva. Confined indoors by incessant rain, Byron proposed that each person write a ghost story. Mary's contribution became Frankenstein. Byron soon gave his up, and the fragment he printed with Mazeppa became the starting point of Polidori's "The Vampyre" (1819), often called the first modern vampire story.

PROMETHEUS AND CLASSICAL MYTH
The novel's subtitle, "The Modern Prometheus," connects Victor to the Greek Titan who stole fire from the gods and gave it to humanity, for which he was punished by being chained to a rock while an eagle ate his liver daily. In some versions of the myth, Prometheus also created humans from clay. Shelley uses both aspects: Victor steals the "fire" of creation and is punished by eternal suffering. The Promethean myth frames scientific ambition as simultaneously heroic and transgressive.

MILTON'S PARADISE LOST
The Creature reads Milton's epic poem and identifies with both Adam (the first creation, who deserved his creator's love) and Satan (the fallen angel, cast out and denied belonging). The title page of the 1818 first edition carried an epigraph from Paradise Lost: "Did I request thee, Maker, from my clay / To mould me man?" The 1831 edition printed here does not. This question - whether a creation can hold its creator accountable - drives the entire narrative.

MARY SHELLEY'S PERSONAL CONTEXT
Mary Shelley's mother, Mary Wollstonecraft (author of A Vindication of the Rights of Woman), died eleven days after giving birth to her. This biographical fact infuses the novel's exploration of creation, birth, and parental responsibility with personal urgency. Mary herself lost her first child, a premature daughter, in 1815 and recorded dreams of the baby coming back to life. The novel's anxieties about creation, death, and the responsibilities of parenthood are deeply personal.

PUBLICATION AND RECEPTION
Frankenstein was published anonymously on 1 January 1818. Some reviewers took it for Percy Shelley's work: Walter Scott did, reviewing it in Blackwood's Edinburgh Magazine, and Mary Shelley wrote to him to say that she was the author. Percy Shelley wrote the preface and edited the manuscript, leading to ongoing debates about authorship and collaboration. The 1831 revised edition, with Mary's new introduction, is the version most widely read today, though the 1818 text is preferred by many scholars for its rawer, more radical vision.`
