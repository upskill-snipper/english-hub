"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

/* ─── Types ──────────────────────────────────────────────────── */

type Flashcard = {
  id: string;
  quote: string;
  character?: string;
  act?: string;
  analysis: string;
  themes: string[];
};

type TextSet = {
  slug: string;
  title: string;
  author: string;
  colour: string;
  cards: Flashcard[];
};

/* ─── Flashcard data ─────────────────────────────────────────── */

const FLASHCARD_SETS: TextSet[] = [
  {
    slug: "macbeth",
    title: "Macbeth",
    author: "William Shakespeare",
    colour: "from-red-900 to-red-700",
    cards: [
      {
        id: "mac-1",
        quote: "Fair is foul, and foul is fair",
        character: "Witches",
        act: "Act 1, Scene 1",
        analysis: "Establishes the theme of moral inversion from the very opening. The chiasmus creates a sense of the world turned upside down. Everything in the play will challenge appearances vs reality.",
        themes: ["Supernatural", "Appearance vs Reality"],
      },
      {
        id: "mac-2",
        quote: "Stars, hide your fires; / Let not light see my black and deep desires",
        character: "Macbeth",
        act: "Act 1, Scene 4",
        analysis: "Macbeth's aside reveals his ambition is already forming before Lady Macbeth's influence. The imperative 'hide' shows conscious concealment of evil. Light/dark imagery links to the play's moral framework.",
        themes: ["Ambition", "Appearance vs Reality", "Guilt"],
      },
      {
        id: "mac-3",
        quote: "Look like th'innocent flower, / But be the serpent under't",
        character: "Lady Macbeth",
        act: "Act 1, Scene 5",
        analysis: "Biblical allusion to the serpent in Eden positions Lady Macbeth as a tempter figure. The simile contrasts beauty ('flower') with deadly intent ('serpent'), reinforcing the theme of deceptive appearances.",
        themes: ["Appearance vs Reality", "Gender", "Power"],
      },
      {
        id: "mac-4",
        quote: "Is this a dagger which I see before me, / The handle toward my hand?",
        character: "Macbeth",
        act: "Act 2, Scene 1",
        analysis: "The rhetorical question shows Macbeth's psychological torment. The dagger could be supernatural temptation or guilt-driven hallucination. Either way, it shows the murder consuming his mind before the act itself.",
        themes: ["Guilt", "Supernatural", "Ambition"],
      },
      {
        id: "mac-5",
        quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
        character: "Macbeth",
        act: "Act 2, Scene 2",
        analysis: "Hyperbolic imagery -- even the god of the ocean cannot cleanse his guilt. The blood symbolises the permanent moral stain of regicide. Contrasts Lady Macbeth's dismissive 'A little water clears us of this deed.'",
        themes: ["Guilt", "Kingship", "Violence"],
      },
      {
        id: "mac-6",
        quote: "Out, damned spot! Out, I say!",
        character: "Lady Macbeth",
        act: "Act 5, Scene 1",
        analysis: "Lady Macbeth's sleepwalking reveals her subconscious guilt. The imperative shows desperation. Ironic reversal of her earlier confidence -- she now cannot wash away the imagined blood she once dismissed.",
        themes: ["Guilt", "Gender", "Madness"],
      },
      {
        id: "mac-7",
        quote: "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er",
        character: "Macbeth",
        act: "Act 3, Scene 4",
        analysis: "Extended metaphor of a river of blood shows Macbeth has reached the point of no return. 'Tedious' is chillingly casual -- murder has become mundane to him. Shows moral deterioration.",
        themes: ["Violence", "Guilt", "Power"],
      },
      {
        id: "mac-8",
        quote: "Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty",
        character: "Lady Macbeth",
        act: "Act 1, Scene 5",
        analysis: "Lady Macbeth invokes spirits to remove her femininity, equating womanhood with weakness and compassion. Challenges Jacobean gender norms. 'Crown to toe' suggests total transformation; 'direst' is superlative evil.",
        themes: ["Gender", "Supernatural", "Power"],
      },
      {
        id: "mac-9",
        quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage",
        character: "Macbeth",
        act: "Act 5, Scene 5",
        analysis: "Macbeth's nihilistic soliloquy after Lady Macbeth's death. The theatrical metaphor ('player', 'stage') suggests life is meaningless performance. 'Walking shadow' implies insubstantiality -- his ambition has led to emptiness.",
        themes: ["Ambition", "Death", "Fate"],
      },
      {
        id: "mac-10",
        quote: "By the pricking of my thumbs, / Something wicked this way comes",
        character: "Second Witch",
        act: "Act 4, Scene 1",
        analysis: "The Witches now call Macbeth 'wicked' -- he has become more evil than the supernatural forces that tempted him. The rhyming couplet creates an ominous, spell-like quality. Shows Macbeth's complete moral fall.",
        themes: ["Supernatural", "Evil", "Fate"],
      },
    ],
  },
  {
    slug: "christmas-carol",
    title: "A Christmas Carol",
    author: "Charles Dickens",
    colour: "from-emerald-800 to-emerald-600",
    cards: [
      {
        id: "acc-1",
        quote: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!",
        analysis: "The exclamatory 'Oh!' breaks the fourth wall, drawing readers in. 'Tight-fisted' and 'grindstone' create imagery of miserliness and relentless, joyless work. Dickens establishes Scrooge as the embodiment of capitalist greed.",
        themes: ["Greed", "Isolation"],
      },
      {
        id: "acc-2",
        quote: "Are there no prisons? Are there no workhouses?",
        character: "Scrooge",
        analysis: "Scrooge's rhetorical questions echo the cruel Malthusian attitudes of the Victorian upper class. Dickens uses Scrooge to satirise those who believed poverty was the poor's own fault. These words haunt him when the Ghost of Christmas Present repeats them.",
        themes: ["Poverty", "Social Responsibility"],
      },
      {
        id: "acc-3",
        quote: "Mankind was my business!",
        character: "Marley's Ghost",
        analysis: "Marley's desperate cry serves as the moral thesis of the novella. 'Business' is recontextualised from commerce to compassion. Dickens argues that true purpose lies in caring for others, not accumulating wealth.",
        themes: ["Social Responsibility", "Redemption"],
      },
      {
        id: "acc-4",
        quote: "I will honour Christmas in my heart, and try to keep it all the year",
        character: "Scrooge",
        analysis: "Scrooge's pledge marks his completed transformation. 'Honour' and 'heart' show emotional awakening. 'All the year' extends Christmas generosity beyond a single day -- Dickens's message that kindness should be constant.",
        themes: ["Redemption", "Generosity", "Christmas"],
      },
      {
        id: "acc-5",
        quote: "This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy",
        character: "Ghost of Christmas Present",
        analysis: "The allegorical children personify society's failings. Dickens warns that ignorance (of poverty, of others' suffering) is more dangerous than want itself. A direct challenge to his middle-class readers to educate themselves about social inequality.",
        themes: ["Poverty", "Social Responsibility", "Education"],
      },
      {
        id: "acc-6",
        quote: "Solitary as an oyster",
        analysis: "Simile establishing Scrooge's self-imposed isolation. An oyster is hard-shelled and closed off, but contains a pearl -- foreshadowing the goodness hidden within Scrooge. Dickens suggests isolation is a choice that can be reversed.",
        themes: ["Isolation", "Redemption"],
      },
      {
        id: "acc-7",
        quote: "He had been Tim's blood horse all the way from church, and had come home rampant",
        analysis: "Bob Cratchit carrying Tiny Tim shows paternal love despite poverty. 'Blood horse' and 'rampant' are terms of strength and vitality, contrasting with Tim's fragility. Family love compensates for material lack.",
        themes: ["Family", "Poverty", "Love"],
      },
      {
        id: "acc-8",
        quote: "Old Marley was as dead as a door-nail",
        analysis: "The blunt opening establishes a matter-of-fact narrative voice. The cliche 'dead as a door-nail' is deliberately mundane -- Dickens then subverts expectations by making the dead character central to the plot. Sets up the supernatural framework.",
        themes: ["Death", "Supernatural"],
      },
    ],
  },
  {
    slug: "inspector-calls",
    title: "An Inspector Calls",
    author: "J.B. Priestley",
    colour: "from-amber-800 to-amber-600",
    cards: [
      {
        id: "aic-1",
        quote: "We are members of one body. We are responsible for each other",
        character: "Inspector Goole",
        analysis: "The Inspector's final speech articulates Priestley's socialist message. 'One body' echoes Christian theology and socialist collectivism. The declarative sentences are emphatic and moralistic -- the Inspector speaks as Priestley's mouthpiece.",
        themes: ["Social Responsibility", "Community"],
      },
      {
        id: "aic-2",
        quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish",
        character: "Inspector Goole",
        analysis: "Prophetic warning referencing both World Wars (the play is set in 1912, written in 1945). 'Fire and blood and anguish' is a tricolon of destruction. Priestley warns his 1945 audience not to repeat pre-war social failures.",
        themes: ["Social Responsibility", "War", "Power"],
      },
      {
        id: "aic-3",
        quote: "But these girls aren't cheap labour -- they're people",
        character: "Sheila Birling",
        analysis: "Sheila's moral growth is shown as she recognises workers' humanity. The dash creates a corrective pause. She rejects her father's capitalist view of workers as commodities, representing the younger generation's capacity for change.",
        themes: ["Social Class", "Gender", "Responsibility"],
      },
      {
        id: "aic-4",
        quote: "The Titanic -- she sails next week... unsinkable, absolutely unsinkable",
        character: "Mr Birling",
        analysis: "Dramatic irony: the audience knows the Titanic sank. Birling's confident repetition ('absolutely unsinkable') establishes him as foolish and overconfident. Priestley undermines capitalist certainty from the play's opening.",
        themes: ["Dramatic Irony", "Capitalism", "Arrogance"],
      },
      {
        id: "aic-5",
        quote: "I'm not a child, don't forget. I've a right to know",
        character: "Sheila Birling",
        analysis: "Sheila asserts her maturity and independence, challenging the patriarchal family structure. Her demand for truth contrasts with her parents' desire to conceal. Represents generational change and female empowerment.",
        themes: ["Gender", "Generational Divide"],
      },
      {
        id: "aic-6",
        quote: "You're squiffy",
        character: "Sheila (to Eric)",
        analysis: "Colloquial slang for drunk, used casually by Sheila. Reveals Eric's alcoholism is an open secret the family ignores. Priestley shows the Birlings prioritise appearances over addressing real problems within their own family.",
        themes: ["Appearance vs Reality", "Family"],
      },
      {
        id: "aic-7",
        quote: "A man has to make his own way -- has to look after himself",
        character: "Mr Birling",
        analysis: "Birling's individualist philosophy is the antithesis of the Inspector's message. Priestley presents this capitalist self-interest as morally bankrupt. The repetition of 'has to' shows Birling treats selfishness as natural law.",
        themes: ["Capitalism", "Social Responsibility"],
      },
      {
        id: "aic-8",
        quote: "We don't live alone. We are members of one body",
        character: "Inspector Goole",
        analysis: "The metaphor of 'one body' implies society functions like a human body -- if one part suffers, all are affected. Directly counters Birling's individualism. 'We' is inclusive, refusing to let anyone opt out of social responsibility.",
        themes: ["Social Responsibility", "Community", "Equality"],
      },
    ],
  },
  {
    slug: "jekyll-and-hyde",
    title: "Jekyll and Hyde",
    author: "Robert Louis Stevenson",
    colour: "from-violet-900 to-violet-700",
    cards: [
      {
        id: "jh-1",
        quote: "Man is not truly one, but truly two",
        character: "Dr Jekyll",
        analysis: "Jekyll's realisation encapsulates the novella's central theme: duality of human nature. Stevenson challenges Victorian assumptions of moral certainty. 'Truly' repeated suggests this is a fundamental truth society refuses to acknowledge.",
        themes: ["Duality", "Science", "Victorian Society"],
      },
      {
        id: "jh-2",
        quote: "I learned to recognise the thorough and primitive duality of man",
        character: "Dr Jekyll",
        analysis: "'Primitive' suggests the duality is ancient and innate, not a product of civilisation. 'Thorough' means it permeates every aspect of human nature. Jekyll's scientific language ('recognise', 'learned') frames this as objective discovery.",
        themes: ["Duality", "Science", "Human Nature"],
      },
      {
        id: "jh-3",
        quote: "If he be Mr Hyde, I shall be Mr Seek",
        character: "Utterson",
        analysis: "Wordplay on hide-and-seek creates dark humour but also establishes the detective-story structure. Utterson's determination to pursue the mystery reflects the Victorian gentleman's need to understand and control. Dramatic irony -- what he finds destroys his worldview.",
        themes: ["Secrecy", "Victorian Society", "Curiosity"],
      },
      {
        id: "jh-4",
        quote: "Trampled calmly over the child's body",
        analysis: "The oxymoron 'trampled calmly' is deeply unsettling -- Hyde's violence is casual, not passionate. The child victim emphasises his complete lack of morality. Stevenson shows evil as indifferent rather than dramatic.",
        themes: ["Violence", "Evil", "Duality"],
      },
      {
        id: "jh-5",
        quote: "Satan's signature upon a face",
        character: "Utterson (describing Hyde)",
        analysis: "Religious imagery marks Hyde as diabolical. 'Signature' suggests the devil has claimed him -- or that evil is literally written on his body. Reflects the Victorian pseudoscience of physiognomy (reading character from appearance).",
        themes: ["Evil", "Religion", "Appearance"],
      },
      {
        id: "jh-6",
        quote: "With ape-like fury",
        analysis: "Hyde's animalistic behaviour references Darwinian evolution -- he is a regression to a primitive state. 'Ape-like' would have disturbed Victorian readers still debating Darwin. Stevenson links moral degeneration to physical devolution.",
        themes: ["Evolution", "Violence", "Duality"],
      },
      {
        id: "jh-7",
        quote: "All human beings, as we meet them, are commingled out of good and evil",
        character: "Dr Jekyll",
        analysis: "'Commingled' means thoroughly mixed -- good and evil cannot be separated. This contradicts Jekyll's experiment, which tried to isolate them. The universal 'all human beings' makes this a statement about humanity, not just Jekyll.",
        themes: ["Duality", "Human Nature", "Morality"],
      },
      {
        id: "jh-8",
        quote: "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse",
        character: "Dr Jekyll",
        analysis: "'Slowly' repeated shows the gradual, insidious nature of evil's encroachment. 'Incorporated' (made into one body) shows Hyde consuming Jekyll. The comparative 'better/worse' simplifies the complex reality of their shared identity.",
        themes: ["Duality", "Addiction", "Identity"],
      },
    ],
  },
  {
    slug: "romeo-and-juliet",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    colour: "from-rose-700 to-rose-500",
    cards: [
      {
        id: "rj-1",
        quote: "A pair of star-cross'd lovers take their life",
        act: "Prologue",
        analysis: "The Prologue's spoiler establishes fate as a central force. 'Star-cross'd' blends astrology with destiny -- the stars are literally against them. 'Take their life' has a double meaning: living their life and ending it.",
        themes: ["Fate", "Love", "Death"],
      },
      {
        id: "rj-2",
        quote: "O, she doth teach the torches to burn bright!",
        character: "Romeo",
        act: "Act 1, Scene 5",
        analysis: "Romeo's first sight of Juliet uses light imagery -- she outshines artificial light. The personification of torches learning from her elevates Juliet to something transcendent. Iambic pentameter underscores the poetry of first love.",
        themes: ["Love", "Light/Dark", "Beauty"],
      },
      {
        id: "rj-3",
        quote: "My only love sprung from my only hate!",
        character: "Juliet",
        act: "Act 1, Scene 5",
        analysis: "Antithesis of 'love' and 'hate' captures the central paradox. 'Only' repeated shows the absolute, all-or-nothing nature of both emotions. The exclamation mark conveys Juliet's shock at discovering Romeo is a Montague.",
        themes: ["Love", "Conflict", "Fate"],
      },
      {
        id: "rj-4",
        quote: "But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun",
        character: "Romeo",
        act: "Act 2, Scene 2",
        analysis: "The balcony scene's most famous lines use celestial imagery. Juliet as 'the sun' makes her the centre of Romeo's universe, the source of light and life. 'Breaks' suggests dawn -- Juliet brings a new beginning.",
        themes: ["Love", "Light/Dark", "Nature"],
      },
      {
        id: "rj-5",
        quote: "These violent delights have violent ends",
        character: "Friar Lawrence",
        act: "Act 2, Scene 6",
        analysis: "The Friar's warning foreshadows the tragedy. The repetition of 'violent' links passion directly to destruction. 'Delights' becoming 'ends' shows how quickly joy turns to death in the play's compressed timeframe.",
        themes: ["Fate", "Love", "Death", "Violence"],
      },
      {
        id: "rj-6",
        quote: "A plague o' both your houses!",
        character: "Mercutio",
        act: "Act 3, Scene 1",
        analysis: "Mercutio's dying curse blames both families equally. 'Plague' invokes disease and divine punishment. His death is the play's turning point -- comedy becomes tragedy. He is the innocent victim of a feud that is not his own.",
        themes: ["Conflict", "Fate", "Family"],
      },
      {
        id: "rj-7",
        quote: "O, I am fortune's fool!",
        character: "Romeo",
        act: "Act 3, Scene 1",
        analysis: "After killing Tybalt, Romeo sees himself as a puppet of fate. 'Fortune's fool' uses alliteration and personification to blame destiny rather than his own impulsive violence. Raises the question: is the tragedy fated or self-inflicted?",
        themes: ["Fate", "Violence", "Responsibility"],
      },
      {
        id: "rj-8",
        quote: "Death, that hath suck'd the honey of thy breath, / Hath had no power yet upon thy beauty",
        character: "Romeo",
        act: "Act 5, Scene 3",
        analysis: "Dramatic irony: Juliet is not actually dead. 'Honey' makes her breath sweet and precious. Death is personified as a lover, jealously guarding Juliet -- but even death cannot diminish her beauty. Romeo misreads the signs tragically.",
        themes: ["Death", "Love", "Fate", "Beauty"],
      },
      {
        id: "rj-9",
        quote: "For never was a story of more woe / Than this of Juliet and her Romeo",
        act: "Act 5, Scene 3",
        analysis: "The Prince's closing couplet provides formal closure. 'Her Romeo' shows possession in death -- they finally belong to each other, not their families. The rhyming couplet ('woe'/'Romeo') seals the tragedy with poetic finality.",
        themes: ["Love", "Death", "Fate", "Family"],
      },
    ],
  },
];

/* ─── LS key ─────────────────────────────────────────────────── */

const LS_MASTERED = "teh-flashcards-mastered";

/* ─── Component ──────────────────────────────────────────────── */

export default function FlashcardsPage() {
  const [activeSet, setActiveSet] = useState<string>(FLASHCARD_SETS[0].slug);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [mastered, setMastered] = useState<Set<string>>(new Set());
  const [shuffled, setShuffled] = useState(false);
  const [testMode, setTestMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentSet = FLASHCARD_SETS.find((s) => s.slug === activeSet)!;

  /* Load mastered from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_MASTERED);
      if (saved) setMastered(new Set(JSON.parse(saved)));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  /* Save mastered */
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_MASTERED, JSON.stringify([...mastered]));
  }, [mastered, mounted]);

  /* Cards to display */
  const displayCards = useMemo(() => {
    let cards = [...currentSet.cards];
    if (testMode) {
      cards = cards.filter((c) => !mastered.has(c.id));
    }
    if (shuffled) {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
    return cards;
  }, [currentSet, shuffled, testMode, mastered]);

  const masteredInSet = currentSet.cards.filter((c) => mastered.has(c.id)).length;
  const progressPct = Math.round((masteredInSet / currentSet.cards.length) * 100);

  /* Handlers */
  const toggleReveal = useCallback((id: string) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleMastered = useCallback((id: string) => {
    setMastered((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffled(true);
    setRevealed(new Set());
    // Force re-render by toggling
    setShuffled(false);
    setTimeout(() => setShuffled(true), 0);
  }, []);

  const revealAll = useCallback(() => {
    setRevealed(new Set(displayCards.map((c) => c.id)));
  }, [displayCards]);

  const hideAll = useCallback(() => {
    setRevealed(new Set());
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Quote Flashcards
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600 leading-relaxed">
          Pre-made flashcard sets for key GCSE Literature texts. Click any card to reveal the analysis,
          and mark quotes as mastered to track your progress.
        </p>
      </div>

      {/* Text selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {FLASHCARD_SETS.map((set) => (
          <button
            key={set.slug}
            onClick={() => {
              setActiveSet(set.slug);
              setRevealed(new Set());
            }}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              activeSet === set.slug
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {set.title}
          </button>
        ))}
      </div>

      {/* Controls bar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          onClick={handleShuffle}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
          </svg>
          Shuffle
        </button>
        <button
          onClick={revealAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Reveal All
        </button>
        <button
          onClick={hideAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Hide All
        </button>

        <div className="h-5 w-px bg-gray-200" />

        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={testMode}
            onChange={(e) => setTestMode(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent/30"
          />
          <span id="test-mode" className="font-medium">Test mode</span>
          <span className="text-gray-400">(hide mastered)</span>
        </label>

        {/* Progress */}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {masteredInSet} / {currentSet.cards.length} mastered
          </span>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-400 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cards grid */}
      {displayCards.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-200 bg-white p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-3 text-lg font-semibold text-gray-900">All quotes mastered!</p>
          <p className="mt-1 text-sm text-gray-500">
            Turn off test mode or switch to another text to keep revising.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {displayCards.map((card) => {
            const isRevealed = revealed.has(card.id);
            const isMastered = mastered.has(card.id);
            return (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
                  isMastered ? "border-emerald-200 bg-emerald-50/30" : "border-gray-200 hover:shadow-md"
                }`}
              >
                {/* Quote (always visible) */}
                <button
                  onClick={() => toggleReveal(card.id)}
                  className="w-full text-left"
                >
                  <div className={`bg-gradient-to-br ${currentSet.colour} px-5 py-4 text-white`}>
                    <p className="text-sm font-semibold italic leading-relaxed">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    {(card.character || card.act) && (
                      <p className="mt-1.5 text-xs text-white/70">
                        {[card.character, card.act].filter(Boolean).join(" -- ")}
                      </p>
                    )}
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-white/50">
                      {isRevealed ? "Click to hide analysis" : "Click to reveal analysis"}
                    </p>
                  </div>
                </button>

                {/* Analysis (revealed) */}
                {isRevealed && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-sm leading-relaxed text-gray-700">{card.analysis}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.themes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mastered toggle */}
                <div className="border-t border-gray-100 px-5 py-2.5">
                  <button
                    onClick={() => toggleMastered(card.id)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      isMastered
                        ? "text-emerald-600 hover:text-emerald-700"
                        : "text-gray-400 hover:text-accent"
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill={isMastered ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {isMastered ? "Mastered" : "Mark as mastered"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Study tip */}
      <div className="mt-10 rounded-xl border border-accent-100 bg-accent-50/50 p-6">
        <h3 className="text-lg font-bold text-gray-900">Flashcard revision tips</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Test, do not just read.</strong> Try to recall the analysis before clicking to reveal it.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Link quotes to themes.</strong> For each quote, practise explaining how it connects to at least two themes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Use the shuffle feature.</strong> Randomising the order prevents you from relying on sequential memory.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Revisit mastered quotes.</strong> Turn off test mode periodically to make sure you still remember everything.</span>
          </li>
        </ul>
      </div>
    </>
  );
}
