export type DailyQuote = {
  text: string
  author: string
  work: string
  topic: string
}

export const DAILY_QUOTES: DailyQuote[] = [
  // ============================================================
  // SHAKESPEARE — Macbeth (10)
  // ============================================================
  { text: "Look like the innocent flower, but be the serpent under't.", author: "William Shakespeare", work: "Macbeth", topic: "appearance vs reality" },
  { text: "Is this a dagger which I see before me?", author: "William Shakespeare", work: "Macbeth", topic: "guilt" },
  { text: "Will all great Neptune's ocean wash this blood clean from my hand?", author: "William Shakespeare", work: "Macbeth", topic: "guilt" },
  { text: "Out, damned spot! Out, I say!", author: "William Shakespeare", work: "Macbeth", topic: "guilt" },
  { text: "Fair is foul, and foul is fair.", author: "William Shakespeare", work: "Macbeth", topic: "appearance vs reality" },
  { text: "Stars, hide your fires; let not light see my black desires.", author: "William Shakespeare", work: "Macbeth", topic: "ambition" },
  { text: "I have no spur to prick the sides of my intent.", author: "William Shakespeare", work: "Macbeth", topic: "ambition" },
  { text: "Life's but a walking shadow, a poor player.", author: "William Shakespeare", work: "Macbeth", topic: "despair" },
  { text: "Unsex me here, and fill me from the crown to the toe.", author: "William Shakespeare", work: "Macbeth", topic: "power" },
  { text: "By the pricking of my thumbs, something wicked this way comes.", author: "William Shakespeare", work: "Macbeth", topic: "supernatural" },

  // ============================================================
  // SHAKESPEARE — Romeo and Juliet (10)
  // ============================================================
  { text: "But soft, what light through yonder window breaks?", author: "William Shakespeare", work: "Romeo and Juliet", topic: "love" },
  { text: "A plague on both your houses!", author: "William Shakespeare", work: "Romeo and Juliet", topic: "conflict" },
  { text: "My only love sprung from my only hate!", author: "William Shakespeare", work: "Romeo and Juliet", topic: "love" },
  { text: "What's in a name? That which we call a rose...", author: "William Shakespeare", work: "Romeo and Juliet", topic: "identity" },
  { text: "These violent delights have violent ends.", author: "William Shakespeare", work: "Romeo and Juliet", topic: "fate" },
  { text: "O, I am fortune's fool!", author: "William Shakespeare", work: "Romeo and Juliet", topic: "fate" },
  { text: "Parting is such sweet sorrow.", author: "William Shakespeare", work: "Romeo and Juliet", topic: "love" },
  { text: "Wisely and slow; they stumble that run fast.", author: "William Shakespeare", work: "Romeo and Juliet", topic: "conflict" },
  { text: "It is the east, and Juliet is the sun.", author: "William Shakespeare", work: "Romeo and Juliet", topic: "love" },
  { text: "O brawling love! O loving hate!", author: "William Shakespeare", work: "Romeo and Juliet", topic: "conflict" },

  // ============================================================
  // SHAKESPEARE — Much Ado About Nothing (10)
  // ============================================================
  { text: "Sigh no more, ladies, sigh no more.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "love" },
  { text: "I do love nothing in the world so well as you.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "love" },
  { text: "There was a star danced, and under that was I born.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "identity" },
  { text: "O, what men dare do! What men may do!", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "honour" },
  { text: "Speak low, if you speak love.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "love" },
  { text: "She is fallen into a pit of ink.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "reputation" },
  { text: "Are you good men and true?", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "appearance vs reality" },
  { text: "I would my horse had the speed of your tongue.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "wit" },
  { text: "Friendship is constant in all other things save the office of love.", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "friendship" },
  { text: "For which of my bad parts didst thou first fall in love with me?", author: "William Shakespeare", work: "Much Ado About Nothing", topic: "wit" },

  // ============================================================
  // POETRY — AQA Power & Conflict (15)
  // ============================================================
  { text: "I met a traveller from an antique land.", author: "Percy Bysshe Shelley", work: "Ozymandias", topic: "power" },
  { text: "Look on my Works, ye Mighty, and despair!", author: "Percy Bysshe Shelley", work: "Ozymandias", topic: "power" },
  { text: "The hand that mocked them, and the heart that fed.", author: "Percy Bysshe Shelley", work: "Ozymandias", topic: "power" },
  { text: "Nothing beside remains. Round the decay of that colossal wreck.", author: "Percy Bysshe Shelley", work: "Ozymandias", topic: "power" },
  { text: "A hundred agonies in black and white.", author: "Carol Ann Duffy", work: "War Photographer", topic: "suffering" },
  { text: "In his dark room he is finally alone.", author: "Carol Ann Duffy", work: "War Photographer", topic: "conflict" },
  { text: "Suddenly he awoke and was running — raw.", author: "Ted Hughes", work: "Bayonet Charge", topic: "conflict" },
  { text: "His bloody life in my bloody hands.", author: "Simon Armitage", work: "Remains", topic: "guilt" },
  { text: "Probably armed, possibly not.", author: "Simon Armitage", work: "Remains", topic: "conflict" },
  { text: "His mate's eyes widened in his face.", author: "Simon Armitage", work: "Remains", topic: "guilt" },
  { text: "I pinned one onto your lapel, crimped petals.", author: "Jane Weir", work: "Poppies", topic: "loss" },
  { text: "Bent double, like old beggars under sacks.", author: "Wilfred Owen", work: "Dulce et Decorum Est", topic: "conflict" },
  { text: "What passing-bells for these who die as cattle?", author: "Wilfred Owen", work: "Anthem for Doomed Youth", topic: "conflict" },
  { text: "Half a league, half a league, half a league onward.", author: "Alfred Lord Tennyson", work: "The Charge of the Light Brigade", topic: "conflict" },
  { text: "The mind-forg'd manacles I hear.", author: "William Blake", work: "London", topic: "power" },

  // ============================================================
  // POETRY — AQA Love & Relationships (15)
  // ============================================================
  { text: "How do I love thee? Let me count the ways.", author: "Elizabeth Barrett Browning", work: "Sonnet 43", topic: "love" },
  { text: "I love thee to the depth and breadth and height my soul can reach.", author: "Elizabeth Barrett Browning", work: "Sonnet 43", topic: "love" },
  { text: "Love is not love which alters when it alteration finds.", author: "William Shakespeare", work: "Sonnet 116", topic: "love" },
  { text: "Let me not to the marriage of true minds admit impediments.", author: "William Shakespeare", work: "Sonnet 116", topic: "love" },
  { text: "It is the star to every wandering bark.", author: "William Shakespeare", work: "Sonnet 116", topic: "love" },
  { text: "I wander thro' each charter'd street.", author: "William Blake", work: "London", topic: "power" },
  { text: "In every cry of every man, in every infant's cry of fear.", author: "William Blake", work: "London", topic: "suffering" },
  { text: "That's my last Duchess painted on the wall.", author: "Robert Browning", work: "My Last Duchess", topic: "power" },
  { text: "I gave commands; then all smiles stopped together.", author: "Robert Browning", work: "My Last Duchess", topic: "power" },
  { text: "Stung by the splendour of a sudden thought.", author: "Robert Browning", work: "Porphyria's Lover", topic: "obsession" },
  { text: "And strangled her. No pain felt she.", author: "Robert Browning", work: "Porphyria's Lover", topic: "obsession" },
  { text: "Shall I compare thee to a summer's day?", author: "William Shakespeare", work: "Sonnet 18", topic: "love" },
  { text: "My mistress' eyes are nothing like the sun.", author: "William Shakespeare", work: "Sonnet 130", topic: "love" },
  { text: "I think of you with love when it rains.", author: "Daljit Nagra", work: "Singh Song!", topic: "love" },
  { text: "She looked at me like she knew what i was thinking.", author: "Simon Armitage", work: "Mother, any distance", topic: "family" },

  // ============================================================
  // AN INSPECTOR CALLS — Priestley (15)
  // ============================================================
  { text: "We are members of one body. We are responsible for each other.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "responsibility" },
  { text: "If men will not learn that lesson, they will be taught it in fire.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "responsibility" },
  { text: "We don't live alone. We are members of one body.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "community" },
  { text: "Public men have responsibilities as well as privileges.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "responsibility" },
  { text: "The girl's dead though.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "consequence" },
  { text: "You're not the kind of father a chap could go to.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "family" },
  { text: "I'll never, never do it again to anybody.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "regret" },
  { text: "But these girls aren't cheap labour — they're people.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "class" },
  { text: "The Titanic — unsinkable, absolutely unsinkable.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "dramatic irony" },
  { text: "I'm ashamed of you as well — yes, both of you.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "generational conflict" },
  { text: "Between us we drove that girl to commit suicide.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "guilt" },
  { text: "A man has to make his own way — has to look after himself.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "capitalism" },
  { text: "It frightens me the way you talk.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "generational conflict" },
  { text: "Each of you helped to kill her.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "responsibility" },
  { text: "She was pretty and warm-hearted — and intensely grateful.", author: "J.B. Priestley", work: "An Inspector Calls", topic: "exploitation" },

  // ============================================================
  // A CHRISTMAS CAROL — Dickens (15)
  // ============================================================
  { text: "Bah! Humbug!", author: "Charles Dickens", work: "A Christmas Carol", topic: "isolation" },
  { text: "I wear the chain I forged in life.", author: "Charles Dickens", work: "A Christmas Carol", topic: "guilt" },
  { text: "Are there no prisons? Are there no workhouses?", author: "Charles Dickens", work: "A Christmas Carol", topic: "poverty" },
  { text: "Mankind was my business! The common welfare was my business!", author: "Charles Dickens", work: "A Christmas Carol", topic: "responsibility" },
  { text: "I will honour Christmas in my heart, and try to keep it all the year.", author: "Charles Dickens", work: "A Christmas Carol", topic: "redemption" },
  { text: "Hard and sharp as flint, secret, and self-contained, and solitary as an oyster.", author: "Charles Dickens", work: "A Christmas Carol", topic: "isolation" },
  { text: "Old Marley was as dead as a door-nail.", author: "Charles Dickens", work: "A Christmas Carol", topic: "death" },
  { text: "A squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!", author: "Charles Dickens", work: "A Christmas Carol", topic: "greed" },
  { text: "God bless us, every one!", author: "Charles Dickens", work: "A Christmas Carol", topic: "compassion" },
  { text: "If they would rather die, they had better do it.", author: "Charles Dickens", work: "A Christmas Carol", topic: "poverty" },
  { text: "This boy is Ignorance. This girl is Want.", author: "Charles Dickens", work: "A Christmas Carol", topic: "social responsibility" },
  { text: "The cold within him froze his old features.", author: "Charles Dickens", work: "A Christmas Carol", topic: "isolation" },
  { text: "Darkness is cheap, and Scrooge liked it.", author: "Charles Dickens", work: "A Christmas Carol", topic: "greed" },
  { text: "Scrooge was better than his word. He did it all, and more.", author: "Charles Dickens", work: "A Christmas Carol", topic: "redemption" },
  { text: "He carried his own low temperature always about with him.", author: "Charles Dickens", work: "A Christmas Carol", topic: "isolation" },

  // ============================================================
  // JEKYLL & HYDE — Stevenson (15)
  // ============================================================
  { text: "Man is not truly one, but truly two.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "duality" },
  { text: "If he be Mr Hyde, I shall be Mr Seek.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "mystery" },
  { text: "He gave an impression of deformity without any nameable malformation.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "evil" },
  { text: "Satan's signature upon a face.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "evil" },
  { text: "The pleasures which I made haste to seek in my disguise.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "duality" },
  { text: "I learned to recognise the thorough and primitive duality of man.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "duality" },
  { text: "I was slowly losing hold of my original and better self.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "identity" },
  { text: "With ape-like fury, he was trampling his victim underfoot.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "violence" },
  { text: "All human beings are commingled out of good and evil.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "duality" },
  { text: "The large handsome face of Dr Jekyll grew pale to the very lips.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "fear" },
  { text: "My devil had been long caged; he came out roaring.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "repression" },
  { text: "I felt younger, lighter, happier in body.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "temptation" },
  { text: "He had in his hand a heavy cane, with which he was trifling.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "violence" },
  { text: "It was the curse of mankind that these polar twins were bound together.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "duality" },
  { text: "There was something abnormal and misbegotten in the very essence of the creature.", author: "Robert Louis Stevenson", work: "Dr Jekyll and Mr Hyde", topic: "evil" },

  // ============================================================
  // OF MICE AND MEN — Steinbeck (10)
  // ============================================================
  { text: "A guy needs somebody — to be near him.", author: "John Steinbeck", work: "Of Mice and Men", topic: "loneliness" },
  { text: "I could live so easy and maybe have a girl.", author: "John Steinbeck", work: "Of Mice and Men", topic: "dreams" },
  { text: "Tell me about the rabbits, George.", author: "John Steinbeck", work: "Of Mice and Men", topic: "dreams" },
  { text: "We got a future. We got somebody to talk to.", author: "John Steinbeck", work: "Of Mice and Men", topic: "friendship" },
  { text: "I ought to of shot that dog myself, George.", author: "John Steinbeck", work: "Of Mice and Men", topic: "regret" },
  { text: "Ain't many guys travel around together. I don't know why.", author: "John Steinbeck", work: "Of Mice and Men", topic: "loneliness" },
  { text: "I seen hundreds of men come by on the road.", author: "John Steinbeck", work: "Of Mice and Men", topic: "loneliness" },
  { text: "A guy sets alone out here at night, maybe readin' books.", author: "John Steinbeck", work: "Of Mice and Men", topic: "isolation" },
  { text: "We could live offa the fatta the lan'.", author: "John Steinbeck", work: "Of Mice and Men", topic: "dreams" },
  { text: "I never get to talk to nobody. I get awful lonely.", author: "John Steinbeck", work: "Of Mice and Men", topic: "loneliness" },

  // ============================================================
  // LORD OF THE FLIES — Golding (10)
  // ============================================================
  { text: "Maybe there is a beast... maybe it's only us.", author: "William Golding", work: "Lord of the Flies", topic: "evil" },
  { text: "The thing is — fear can't hurt you any more than a dream.", author: "William Golding", work: "Lord of the Flies", topic: "fear" },
  { text: "Kill the beast! Cut his throat! Spill his blood!", author: "William Golding", work: "Lord of the Flies", topic: "savagery" },
  { text: "Ralph wept for the end of innocence.", author: "William Golding", work: "Lord of the Flies", topic: "loss of innocence" },
  { text: "Which is better — to be a pack of painted savages?", author: "William Golding", work: "Lord of the Flies", topic: "civilisation" },
  { text: "The rules are the only thing we've got!", author: "William Golding", work: "Lord of the Flies", topic: "civilisation" },
  { text: "What are we? Humans? Or animals? Or savages?", author: "William Golding", work: "Lord of the Flies", topic: "savagery" },
  { text: "He found himself understanding the wearisomeness of this life.", author: "William Golding", work: "Lord of the Flies", topic: "despair" },
  { text: "The world, that understandable and lawful world, was slipping away.", author: "William Golding", work: "Lord of the Flies", topic: "loss of innocence" },
  { text: "The conch exploded into a thousand white fragments.", author: "William Golding", work: "Lord of the Flies", topic: "power" },

  // ============================================================
  // OTHER SET TEXTS (25)
  // ============================================================

  // The Tempest — Shakespeare (5)
  { text: "We are such stuff as dreams are made on.", author: "William Shakespeare", work: "The Tempest", topic: "dreams" },
  { text: "Hell is empty, and all the devils are here.", author: "William Shakespeare", work: "The Tempest", topic: "evil" },
  { text: "O brave new world, that has such people in't!", author: "William Shakespeare", work: "The Tempest", topic: "discovery" },
  { text: "This thing of darkness I acknowledge mine.", author: "William Shakespeare", work: "The Tempest", topic: "power" },
  { text: "Full fathom five thy father lies.", author: "William Shakespeare", work: "The Tempest", topic: "death" },

  // The Merchant of Venice — Shakespeare (3)
  { text: "If you prick us, do we not bleed?", author: "William Shakespeare", work: "The Merchant of Venice", topic: "prejudice" },
  { text: "The quality of mercy is not strained.", author: "William Shakespeare", work: "The Merchant of Venice", topic: "mercy" },
  { text: "All that glisters is not gold.", author: "William Shakespeare", work: "The Merchant of Venice", topic: "appearance vs reality" },

  // Great Expectations — Dickens (3)
  { text: "I loved her against reason, against promise, against peace.", author: "Charles Dickens", work: "Great Expectations", topic: "love" },
  { text: "Suffering has been stronger than all other teaching.", author: "Charles Dickens", work: "Great Expectations", topic: "suffering" },
  { text: "In a word, I was too cowardly to do what I knew to be right.", author: "Charles Dickens", work: "Great Expectations", topic: "guilt" },

  // Animal Farm — Orwell (4)
  { text: "All animals are equal, but some are more equal than others.", author: "George Orwell", work: "Animal Farm", topic: "power" },
  { text: "Four legs good, two legs bad.", author: "George Orwell", work: "Animal Farm", topic: "propaganda" },
  { text: "The creatures outside looked from pig to man, and from man to pig.", author: "George Orwell", work: "Animal Farm", topic: "corruption" },
  { text: "Napoleon is always right.", author: "George Orwell", work: "Animal Farm", topic: "propaganda" },

  // Jane Eyre — Bronte (3)
  { text: "I am no bird; and no net ensnares me.", author: "Charlotte Bronte", work: "Jane Eyre", topic: "independence" },
  { text: "I would always rather be happy than dignified.", author: "Charlotte Bronte", work: "Jane Eyre", topic: "identity" },
  { text: "Do you think, because I am poor, I am soulless and heartless?", author: "Charlotte Bronte", work: "Jane Eyre", topic: "class" },

  // Frankenstein — Shelley (3)
  { text: "Beware; for I am fearless, and therefore powerful.", author: "Mary Shelley", work: "Frankenstein", topic: "power" },
  { text: "I ought to be thy Adam, but I am rather the fallen angel.", author: "Mary Shelley", work: "Frankenstein", topic: "rejection" },
  { text: "I, the miserable and the abandoned, am an abortion.", author: "Mary Shelley", work: "Frankenstein", topic: "isolation" },

  // Blood Brothers — Russell (2)
  { text: "Tell me it's not true. Say it's just a story.", author: "Willy Russell", work: "Blood Brothers", topic: "fate" },
  { text: "Do we blame superstition for what came to pass?", author: "Willy Russell", work: "Blood Brothers", topic: "class" },

  // Pride and Prejudice — Austen (2)
  { text: "My good opinion once lost is lost forever.", author: "Jane Austen", work: "Pride and Prejudice", topic: "pride" },
  { text: "Vanity and pride are different things.", author: "Jane Austen", work: "Pride and Prejudice", topic: "pride" },
]

/**
 * Returns the quote of the day based on the current calendar day.
 * Cycles through all 150 quotes over the course of the year.
 */
export function getQuoteOfTheDay(): DailyQuote {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  )
  return DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length]
}
