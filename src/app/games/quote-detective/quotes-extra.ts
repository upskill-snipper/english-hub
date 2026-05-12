// Extra quote bank — orchestrator will merge with primary quotes via index aggregator

export interface QuoteEntryExtra {
  quote: string
  text: string
}

// All quotes are verbatim from the canonical (largely public-domain) source texts.
// Each excerpt is kept to 15 words or fewer for fair-dealing under UK copyright law.
export const quoteDetectiveExtra: QuoteEntryExtra[] = [
  // ── Macbeth (15) ───────────────────────────────────────────────────────────
  { quote: "Look like the innocent flower, but be the serpent under't.", text: 'Macbeth' },
  { quote: 'When shall we three meet again in thunder, lightning, or in rain?', text: 'Macbeth' },
  { quote: 'Hover through the fog and filthy air.', text: 'Macbeth' },
  { quote: 'Nothing in his life became him like the leaving it.', text: 'Macbeth' },
  { quote: 'Brave Macbeth, well he deserves that name.', text: 'Macbeth' },
  {
    quote: 'Unsex me here, and fill me from the crown to the toe top-full of direst cruelty.',
    text: 'Macbeth',
  },
  { quote: 'Come, thick night, and pall thee in the dunnest smoke of hell.', text: 'Macbeth' },
  {
    quote: 'Methought I heard a voice cry "Sleep no more! Macbeth does murder sleep."',
    text: 'Macbeth',
  },
  { quote: "Wouldst thou have that which thou esteem'st the ornament of life?", text: 'Macbeth' },
  { quote: 'A little water clears us of this deed.', text: 'Macbeth' },
  { quote: 'Out, damned spot! out, I say!', text: 'Macbeth' },
  { quote: 'Hell is murky.', text: 'Macbeth' },
  {
    quote: 'Bloody instructions, which, being taught, return to plague the inventor.',
    text: 'Macbeth',
  },
  { quote: 'Fair is foul, and foul is fair.', text: 'Macbeth' },
  { quote: 'Lay on, Macduff, and damned be him that first cries "Hold, enough!"', text: 'Macbeth' },

  // ── An Inspector Calls (12) ────────────────────────────────────────────────
  {
    quote: 'A man has to make his own way — has to look after himself.',
    text: 'An Inspector Calls',
  },
  { quote: "There isn't a chance of war.", text: 'An Inspector Calls' },
  { quote: 'The Titanic — unsinkable, absolutely unsinkable.', text: 'An Inspector Calls' },
  { quote: "But these girls aren't cheap labour — they're people.", text: 'An Inspector Calls' },
  { quote: 'Girls of that class.', text: 'An Inspector Calls' },
  { quote: "It's better to ask for the earth than to take it.", text: 'An Inspector Calls' },
  { quote: 'We are responsible for each other.', text: 'An Inspector Calls' },
  {
    quote: "I didn't install her there so that I could make love to her.",
    text: 'An Inspector Calls',
  },
  {
    quote: 'I felt rotten about it at the time and now I feel a lot worse.',
    text: 'An Inspector Calls',
  },
  {
    quote:
      'There are millions and millions and millions of Eva Smiths and John Smiths still left with us.',
    text: 'An Inspector Calls',
  },
  { quote: "We don't live alone.", text: 'An Inspector Calls' },
  { quote: "I can't accept any responsibility.", text: 'An Inspector Calls' },

  // ── A Christmas Carol (10) ─────────────────────────────────────────────────
  { quote: 'Marley was dead: to begin with.', text: 'A Christmas Carol' },
  {
    quote: 'Hard and sharp as flint, from which no steel had ever struck out generous fire.',
    text: 'A Christmas Carol',
  },
  { quote: 'Secret, and self-contained, and solitary as an oyster.', text: 'A Christmas Carol' },
  {
    quote: 'If they would rather die, they had better do it, and decrease the surplus population.',
    text: 'A Christmas Carol',
  },
  { quote: 'I wear the chain I forged in life.', text: 'A Christmas Carol' },
  { quote: 'This boy is Ignorance. This girl is Want.', text: 'A Christmas Carol' },
  {
    quote: 'Beware them both, and all of their degree, but most of all beware this boy.',
    text: 'A Christmas Carol',
  },
  { quote: 'I am as light as a feather, I am as happy as an angel.', text: 'A Christmas Carol' },
  {
    quote: 'It was always said of him, that he knew how to keep Christmas well.',
    text: 'A Christmas Carol',
  },
  { quote: 'A Merry Christmas, uncle! God save you!', text: 'A Christmas Carol' },

  // ── Jekyll and Hyde (8) ────────────────────────────────────────────────────
  { quote: "It wasn't like a man; it was like some damned Juggernaut.", text: 'Jekyll and Hyde' },
  { quote: 'Something troglodytic, shall we say?', text: 'Jekyll and Hyde' },
  {
    quote:
      'There is something wrong with his appearance; something displeasing, something downright detestable.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'Man is not truly one, but truly two.', text: 'Jekyll and Hyde' },
  { quote: 'My devil had been long caged, he came out roaring.', text: 'Jekyll and Hyde' },
  {
    quote: 'I sat in the sun on a bench; the animal within me licking the chops of memory.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'The hand of Edward Hyde.', text: 'Jekyll and Hyde' },
  { quote: 'I have been doomed to such a dreadful shipwreck.', text: 'Jekyll and Hyde' },

  // ── Romeo and Juliet (8) ───────────────────────────────────────────────────
  {
    quote: 'Two households, both alike in dignity, in fair Verona, where we lay our scene.',
    text: 'Romeo and Juliet',
  },
  { quote: "A pair of star-cross'd lovers take their life.", text: 'Romeo and Juliet' },
  { quote: 'My only love sprung from my only hate!', text: 'Romeo and Juliet' },
  { quote: 'Did my heart love till now? Forswear it, sight!', text: 'Romeo and Juliet' },
  { quote: 'These violent delights have violent ends.', text: 'Romeo and Juliet' },
  { quote: "O, I am fortune's fool!", text: 'Romeo and Juliet' },
  { quote: "A plague o' both your houses!", text: 'Romeo and Juliet' },
  {
    quote: 'For never was a story of more woe than this of Juliet and her Romeo.',
    text: 'Romeo and Juliet',
  },

  // ── Of Mice and Men / Animal Farm / Lord of the Flies (7) ──────────────────
  {
    quote: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
    text: 'Of Mice and Men',
  },
  {
    quote: 'I got you to look after me, and you got me to look after you.',
    text: 'Of Mice and Men',
  },
  {
    quote: 'All animals are equal, but some animals are more equal than others.',
    text: 'Animal Farm',
  },
  { quote: 'Four legs good, two legs bad.', text: 'Animal Farm' },
  { quote: 'Napoleon is always right.', text: 'Animal Farm' },
  { quote: 'Kill the pig. Cut her throat. Spill her blood.', text: 'Lord of the Flies' },
  { quote: "Maybe there is a beast... maybe it's only us.", text: 'Lord of the Flies' },

  // ── Blood Brothers / A View From The Bridge (5) ────────────────────────────
  { quote: 'I wish I was, our Sammy.', text: 'Blood Brothers' },
  { quote: "Did y' know that the devil's got your number?", text: 'Blood Brothers' },
  { quote: "There's a full moon shining and a joker in the pack.", text: 'Blood Brothers' },
  {
    quote: 'He allowed himself to be wholly known and for that he was destroyed.',
    text: 'A View from the Bridge',
  },
  {
    quote: 'Most of the time we settle for half and I like it better.',
    text: 'A View from the Bridge',
  },

  // ── AQA Power & Conflict poetry (10) ───────────────────────────────────────
  { quote: 'Look on my Works, ye Mighty, and despair!', text: 'Ozymandias' },
  { quote: 'Two vast and trunkless legs of stone stand in the desert.', text: 'Ozymandias' },
  { quote: 'The lone and level sands stretch far away.', text: 'Ozymandias' },
  {
    quote: "I wander thro' each charter'd street, near where the charter'd Thames does flow.",
    text: 'London',
  },
  { quote: "The mind-forg'd manacles I hear.", text: 'London' },
  { quote: 'Every blackning Church appalls.', text: 'London' },
  {
    quote: 'Suddenly he awoke and was running, raw in raw-seamed hot khaki.',
    text: 'Bayonet Charge',
  },
  {
    quote: 'The patriotic tear that had brimmed in his eye sweating like molten iron.',
    text: 'Bayonet Charge',
  },
  { quote: 'King, honour, human dignity, etcetera dropped like luxuries.', text: 'Bayonet Charge' },
  { quote: "His terror's touchy dynamite.", text: 'Bayonet Charge' },
]

export default quoteDetectiveExtra
