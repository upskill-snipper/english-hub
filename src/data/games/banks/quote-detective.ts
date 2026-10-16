import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Quote Detective: say which GCSE set text each quotation is from.
 *
 * Moved out of src/app/games/quote-detective/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * HOW THE QUOTATIONS WERE CHECKED (found writing those explanations, which
 * name each speaker and scene). Words AND speaker, act, chapter or stave, since
 * a guard that checks only words has missed misattributions on this site
 * before. The 73 from public-domain texts were found word for word in the held
 * editions (src/data/full-texts: Macbeth, Romeo and Juliet, A Christmas Carol,
 * Jekyll and Hyde, Animal Farm) with their speaker and section. The 37 from
 * texts in copyright (An Inspector Calls, Lord of the Flies, Of Mice and Men,
 * To Kill a Mockingbird) were checked against the text's study guide where it
 * quotes the line, two scans of the published Of Mice and Men on the Internet
 * Archive, and published quotation sources for the rest.
 *
 * WHAT WAS WRONG. Ten quotations were not the text's words:
 *
 *   - "He was as solitary as an oyster." is in no edition of A Christmas
 *     Carol. Stave One describes Scrooge as "Secret, and self-contained, and
 *     solitary as an oyster.", which is now the quotation.
 *   - "We are all responsible for each other." is the usual paraphrase of the
 *     Inspector. He says "We are responsible for each other." (Act 3), which is
 *     now the quotation.
 *   - "The girl had been happy - hadn't she?" is in no printing of An
 *     Inspector Calls and was found in no source. It is replaced by Gerald's
 *     "I didn't feel about her as she felt about me." (Act 2), which
 *     src/data/study-guides/an-inspector-calls.ts checked against the
 *     published text.
 *   - "Tell me about the rabbits, George." is a famous misquotation that
 *     Steinbeck never wrote (src/data/study-guides/of-mice-and-men.ts says the
 *     same). It is replaced by Lennie's "I remember about the rabbits,
 *     George." (Chapter 1), found in both scans.
 *   - "Mockingbirds don't do one thing but sing their hearts out for us."
 *     joined the start of one of Miss Maudie's sentences to the end of
 *     another. It is now her first sentence, as the To Kill a Mockingbird
 *     guide quotes it.
 *   - "what real courage is, ... courage is a man with a gun." cut the words
 *     in which Atticus rejects that idea, so it said the opposite of what he
 *     means. It is now "I wanted you to see what real courage is." (Chapter
 *     11).
 *   - "You never really understand a person until you climb into his skin."
 *     had lost the middle of Atticus's sentence (Chapter 3) with no ellipsis;
 *     the ellipsis now marks the cut.
 *   - "Bah! Humbug!", "The rules! You're breaking the rules!" and "Ain't many
 *     guys travel around together. I don't know why." each ran across a speech
 *     tag (Scrooge's, Ralph's, Slim's) with no ellipsis; one now marks it, as
 *     in the site's other corrected quotations.
 *
 * THREE QUOTATIONS SHORTENED (16 October 2026, by the second reader). The site
 * quotes a text in copyright to at most FAIR_DEALING.quoteWords words
 * (src/lib/study-guides/fair-dealing.ts), and three ran to fifteen. Each was
 * cut by deletion only, and an ellipsis marks the cut: Lennie's line about
 * looking after each other (Of Mice and Men, Chapter 1) loses "and"; Eric's
 * line to his father (An Inspector Calls, Act 3) stops at "go to", as
 * src/data/study-guides/an-inspector-calls.ts quotes it; Curley's wife's threat
 * to Crooks (Chapter 4) loses "on a tree".
 * src/__tests__/no-game-quotes-over-the-fair-dealing-limit.test.ts holds them.
 *
 * Every other quotation, and every answer, is unchanged.
 */

export interface QuoteEntry {
  quote: string
  text: string
}

export const QUOTE_BANK: QuoteEntry[] = [
  // Macbeth
  { quote: 'Is this a dagger which I see before me, the handle toward my hand?', text: 'Macbeth' },
  { quote: "Out, out, brief candle! Life's but a walking shadow.", text: 'Macbeth' },
  { quote: "Look like the innocent flower, but be the serpent under't.", text: 'Macbeth' },
  { quote: "Will all great Neptune's ocean wash this blood clean from my hand?", text: 'Macbeth' },
  { quote: 'Fair is foul, and foul is fair.', text: 'Macbeth' },
  // An Inspector Calls
  {
    quote: 'We are members of one body. We are responsible for each other.',
    text: 'An Inspector Calls',
  },
  { quote: 'They will be taught it in fire and blood and anguish.', text: 'An Inspector Calls' },
  { quote: "The young ones. They're more impressionable.", text: 'An Inspector Calls' },
  { quote: 'We are responsible for each other.', text: 'An Inspector Calls' },
  // A Christmas Carol. Corrected 2 October 2026 against the held edition (Project
  // Gutenberg #46, src/data/full-texts/a-christmas-carol.ts). Scrooge's Stave One
  // questions are "Are there no prisons?" and "And the Union workhouses?"; "Are
  // there no workhouses?" is the Spirit's, in Stave Three. The chain speech had
  // lost its speech tag with no ellipsis, and the edition prints "grind-stone".
  { quote: 'Are there no prisons? ... And the Union workhouses?', text: 'A Christmas Carol' },
  {
    quote: 'I wear the chain I forged in life... I made it link by link',
    text: 'A Christmas Carol',
  },
  {
    quote: 'Mankind was my business. The common welfare was my business.',
    text: 'A Christmas Carol',
  },
  { quote: 'Secret, and self-contained, and solitary as an oyster.', text: 'A Christmas Carol' },
  {
    quote: 'I will honour Christmas in my heart, and try to keep it all the year.',
    text: 'A Christmas Carol',
  },
  // Jekyll & Hyde
  // Corrected 2 October 2026 against the held edition (Project Gutenberg #43,
  // src/data/full-texts/jekyll-and-hyde.ts): Utterson's pun runs across a speech tag,
  // which the ellipsis marks, and two later Jekyll and Hyde lines had lost "as I have
  // said" and "as we meet them" with no ellipsis. The second is restored; the first is
  // marked as cut, because restoring it would break this page's fifteen-word limit.
  { quote: 'Man is not truly one, but truly two.', text: 'Jekyll and Hyde' },
  { quote: 'If he be Mr Hyde... I shall be Mr Seek.', text: 'Jekyll and Hyde' },
  { quote: "Satan's signature upon a face.", text: 'Jekyll and Hyde' },
  { quote: 'I felt younger, lighter, happier in body.', text: 'Jekyll and Hyde' },
  // Romeo & Juliet
  { quote: 'But soft, what light through yonder window breaks?', text: 'Romeo and Juliet' },
  { quote: "A plague o' both your houses!", text: 'Romeo and Juliet' },
  { quote: 'These violent delights have violent ends.', text: 'Romeo and Juliet' },
  { quote: 'My only love sprung from my only hate!', text: 'Romeo and Juliet' },
  { quote: 'Parting is such sweet sorrow.', text: 'Romeo and Juliet' },
  // Animal Farm
  {
    quote: 'All animals are equal, but some animals are more equal than others.',
    text: 'Animal Farm',
  },
  { quote: 'Four legs good, two legs bad.', text: 'Animal Farm' },
  {
    quote: 'The creatures outside looked from pig to man, and from man to pig.',
    text: 'Animal Farm',
  },
  { quote: 'Napoleon is always right.', text: 'Animal Farm' },
  // Lord of the Flies
  { quote: "Maybe there is a beast... maybe it's only us.", text: 'Lord of the Flies' },
  {
    quote: "The thing is -- fear can't hurt you any more than a dream.",
    text: 'Lord of the Flies',
  },
  {
    quote: "Ralph wept for the end of innocence, the darkness of man's heart.",
    text: 'Lord of the Flies',
  },
  { quote: 'Kill the beast! Cut his throat! Spill his blood!', text: 'Lord of the Flies' },
  // Of Mice and Men
  {
    quote: "A guy needs somebody ... A guy goes nuts if he ain't got nobody.",
    text: 'Of Mice and Men',
  },
  {
    quote: 'I got you to look after me, ... you got me to look after you.',
    text: 'Of Mice and Men',
  },
  {
    quote: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
    text: 'Of Mice and Men',
  },
  { quote: 'I remember about the rabbits, George.', text: 'Of Mice and Men' },

  // ── Additional Macbeth quotes (public domain) ──────────────────────────────
  {
    quote: 'Stars, hide your fires; let not light see my black and deep desires.',
    text: 'Macbeth',
  },
  { quote: 'Come, you spirits that tend on mortal thoughts, unsex me here.', text: 'Macbeth' },
  { quote: 'I dare do all that may become a man; who dares do more is none.', text: 'Macbeth' },
  { quote: 'By the pricking of my thumbs, something wicked this way comes.', text: 'Macbeth' },
  {
    quote: "Yet do I fear thy nature; ... too full o' th' milk of human kindness.",
    text: 'Macbeth',
  },
  { quote: "What's done cannot be undone.", text: 'Macbeth' },
  { quote: 'Double, double toil and trouble; fire burn and cauldron bubble.', text: 'Macbeth' },
  { quote: "There's daggers in men's smiles.", text: 'Macbeth' },
  {
    quote: 'It is a tale told by an idiot, full of sound and fury, signifying nothing.',
    text: 'Macbeth',
  },
  {
    quote: "I am in blood stepp'd in so far",
    text: 'Macbeth',
  },
  { quote: 'So foul and fair a day I have not seen.', text: 'Macbeth' },
  { quote: "Screw your courage to the sticking place, and we'll not fail.", text: 'Macbeth' },
  { quote: 'All the perfumes of Arabia will not sweeten this little hand.', text: 'Macbeth' },
  {
    quote: 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.',
    text: 'Macbeth',
  },
  { quote: 'Full of scorpions is my mind, dear wife!', text: 'Macbeth' },

  // ── Additional An Inspector Calls quotes (<=15 words, fair dealing) ────────
  {
    quote: 'Public men, Mr Birling, have responsibilities as well as privileges.',
    text: 'An Inspector Calls',
  },
  {
    quote: "You're not the kind of father a chap could go to ...",
    text: 'An Inspector Calls',
  },
  {
    quote: 'If we were all responsible for everything ... it would be very awkward.',
    text: 'An Inspector Calls',
  },
  { quote: "I'm ashamed of you as well - yes both of you.", text: 'An Inspector Calls' },
  { quote: "I didn't feel about her as she felt about me.", text: 'An Inspector Calls' },
  { quote: 'Just used her for the end of a stupid drunken evening.', text: 'An Inspector Calls' },
  { quote: "You began to learn something. And now you've stopped.", text: 'An Inspector Calls' },
  {
    quote: 'A man has to mind his own business and look after himself.',
    text: 'An Inspector Calls',
  },
  { quote: "We don't live alone. We are members of one body.", text: 'An Inspector Calls' },
  { quote: 'Each of you helped to kill her.', text: 'An Inspector Calls' },

  // ── Additional A Christmas Carol quotes (public domain) ────────────────────
  {
    quote: 'Oh! But he was a tight-fisted hand at the grind-stone, Scrooge!',
    text: 'A Christmas Carol',
  },
  { quote: 'Bah! ... Humbug!', text: 'A Christmas Carol' },
  { quote: 'Old Marley was as dead as a door-nail.', text: 'A Christmas Carol' },
  { quote: 'I will live in the Past, the Present, and the Future.', text: 'A Christmas Carol' },
  {
    quote: 'The cold within him froze his old features, nipped his pointed nose.',
    text: 'A Christmas Carol',
  },
  { quote: 'God bless us, every one!', text: 'A Christmas Carol' },
  { quote: 'Darkness is cheap, and Scrooge liked it.', text: 'A Christmas Carol' },
  { quote: 'No warmth could warm, no wintry weather chill him.', text: 'A Christmas Carol' },
  { quote: 'He carried his own low temperature always about with him.', text: 'A Christmas Carol' },
  {
    quote: 'I am as light as a feather, ... I am as merry as a schoolboy.',
    text: 'A Christmas Carol',
  },

  // ── Additional Jekyll and Hyde quotes (public domain) ──────────────────────
  {
    quote: 'I learned to recognise the thorough and primitive duality of man.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'that man is not truly one, but truly two.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'The pleasures which I made haste to seek in my disguise were... undignified.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'He had always been known for charities; he was now no less distinguished for religion.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'All human beings, as we meet them, are commingled out of good and evil.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'The moment I choose, I can be rid of Mr Hyde.', text: 'Jekyll and Hyde' },
  {
    quote: 'He is not easy to describe. There is something wrong with his appearance.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'That child of Hell had nothing human; nothing lived in him but fear and hatred.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'I was slowly losing hold of my original and better self.', text: 'Jekyll and Hyde' },
  { quote: 'The fog still slept on the wing above the drowned city.', text: 'Jekyll and Hyde' },

  // ── Additional Romeo and Juliet quotes (public domain) ─────────────────────
  { quote: 'O Romeo, Romeo! Wherefore art thou Romeo?', text: 'Romeo and Juliet' },
  {
    quote: 'That which we call a rose by any other name would smell as sweet.',
    text: 'Romeo and Juliet',
  },
  {
    quote: 'For never was a story of more woe than this of Juliet and her Romeo.',
    text: 'Romeo and Juliet',
  },
  { quote: 'O, she doth teach the torches to burn bright!', text: 'Romeo and Juliet' },
  { quote: 'Wisely and slow; they stumble that run fast.', text: 'Romeo and Juliet' },
  {
    quote: 'Good night, good night! Parting is such sweet sorrow',
    text: 'Romeo and Juliet',
  },
  { quote: 'Do you bite your thumb at us, sir?', text: 'Romeo and Juliet' },
  { quote: 'Thus with a kiss I die.', text: 'Romeo and Juliet' },
  { quote: 'Then I defy you, stars!', text: 'Romeo and Juliet' },
  { quote: 'My bounty is as boundless as the sea, my love as deep.', text: 'Romeo and Juliet' },

  // ── Additional Animal Farm quotes (<=15 words, fair dealing) ───────────────
  { quote: 'The only good human being is a dead one.', text: 'Animal Farm' },
  { quote: 'I will work harder!', text: 'Animal Farm' },
  { quote: 'All animals are equal.', text: 'Animal Farm' },
  { quote: 'Man serves the interests of no creature except himself.', text: 'Animal Farm' },
  {
    quote: 'Donkeys live a long time. None of you has ever seen a dead donkey.',
    text: 'Animal Farm',
  },

  // ── Additional Lord of the Flies quotes (<=15 words, fair dealing) ─────────
  { quote: "The rules! ... You're breaking the rules!", text: 'Lord of the Flies' },
  { quote: 'What are we? Humans? Or animals? Or savages?', text: 'Lord of the Flies' },
  {
    quote: "We've got to have rules and obey them. After all, we're not savages.",
    text: 'Lord of the Flies',
  },
  {
    quote: 'Fancy thinking the Beast was something you could hunt and kill!',
    text: 'Lord of the Flies',
  },
  {
    quote: 'The world, that understandable and lawful world, was slipping away.',
    text: 'Lord of the Flies',
  },

  // ── Additional Of Mice and Men quotes (<=15 words, fair dealing) ───────────
  {
    quote: "every damn one of 'em's got a little piece of land in his head.",
    text: 'Of Mice and Men',
  },
  {
    quote: "A guy sets alone out here at night, maybe readin' books or thinkin'.",
    text: 'Of Mice and Men',
  },
  {
    quote: "I could get you strung up ... so easy it ain't even funny.",
    text: 'Of Mice and Men',
  },
  { quote: "We could live offa the fatta the lan'.", text: 'Of Mice and Men' },
  {
    quote: "Ain't many guys travel around together ... I don't know why.",
    text: 'Of Mice and Men',
  },

  // ── To Kill a Mockingbird quotes (<=15 words, fair dealing) ────────────────
  {
    quote: 'You never really understand a person until you ... climb into his skin.',
    text: 'To Kill a Mockingbird',
  },
  {
    quote: "Mockingbirds don't do one thing but make music for us to enjoy.",
    text: 'To Kill a Mockingbird',
  },
  {
    quote: "The one thing that doesn't abide by majority rule is a person's conscience.",
    text: 'To Kill a Mockingbird',
  },
  {
    quote: 'I wanted you to see what real courage is.',
    text: 'To Kill a Mockingbird',
  },
  {
    quote: 'People generally see what they look for, and hear what they listen for.',
    text: 'To Kill a Mockingbird',
  },
]

export const ALL_TEXTS = [
  'Macbeth',
  'An Inspector Calls',
  'A Christmas Carol',
  'Jekyll and Hyde',
  'Romeo and Juliet',
  'Animal Farm',
  'Lord of the Flies',
  'Of Mice and Men',
  'To Kill a Mockingbird',
]

export const BANK: GameBank<QuoteEntry> = {
  slug: 'quote-detective',
  items: QUOTE_BANK,
  // No two quotations are the same, and the quotation is what the student sees.
  key: (q) => q.quote,
  answer: (q) => q.text,
  // The page deals the right title and three others drawn at random from
  // ALL_TEXTS, so no question has a fixed set of options.
  options: () => null,
  tag: (q) => q.text,
}
