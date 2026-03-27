"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

/* ─── Types ──────────────────────────────────────────────────── */

type QuoteQuestion = {
  id: string;
  quote: string;
  speaker: string;
  location: string;
  technique: string;
  theme: string;
  /** Distractor options per category — each array of 3 wrong answers */
  wrongSpeakers: string[];
  wrongLocations: string[];
  wrongTechniques: string[];
  wrongThemes: string[];
};

type TextData = {
  slug: string;
  title: string;
  author: string;
  colour: string;
  questions: QuoteQuestion[];
};

type QuestionCategory = "speaker" | "location" | "technique" | "theme";

type AnswerRecord = {
  questionId: string;
  category: QuestionCategory;
  correct: boolean;
};

type SessionState = {
  currentIndex: number;
  currentCategory: number;
  answers: AnswerRecord[];
  selectedAnswer: string | null;
  showFeedback: boolean;
  finished: boolean;
};

type SavedProgress = {
  correctByQuote: Record<string, Set<QuestionCategory>>;
  wrongIds: string[];
  totalCorrect: number;
  totalAnswered: number;
};

/* ─── Category labels ────────────────────────────────────────── */

const CATEGORIES: { key: QuestionCategory; label: string; icon: string }[] = [
  { key: "speaker", label: "Who said it?", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" },
  { key: "location", label: "Where in the text?", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
  { key: "technique", label: "What technique?", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" },
  { key: "theme", label: "What theme?", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
];

/* ─── Quote data ─────────────────────────────────────────────── */

const TEXT_DATA: TextData[] = [
  {
    slug: "macbeth",
    title: "Macbeth",
    author: "William Shakespeare",
    colour: "from-red-900 to-red-700",
    questions: [
      {
        id: "qt-mac-1",
        quote: "Fair is foul, and foul is fair",
        speaker: "The Witches",
        location: "Act 1, Scene 1",
        technique: "Chiasmus",
        theme: "Appearance vs Reality",
        wrongSpeakers: ["Macbeth", "Lady Macbeth", "Banquo"],
        wrongLocations: ["Act 2, Scene 1", "Act 3, Scene 4", "Act 5, Scene 1"],
        wrongTechniques: ["Metaphor", "Soliloquy", "Dramatic irony"],
        wrongThemes: ["Ambition", "Guilt", "Kingship"],
      },
      {
        id: "qt-mac-2",
        quote: "Stars, hide your fires; / Let not light see my black and deep desires",
        speaker: "Macbeth",
        location: "Act 1, Scene 4",
        technique: "Personification",
        theme: "Ambition",
        wrongSpeakers: ["Lady Macbeth", "Banquo", "Malcolm"],
        wrongLocations: ["Act 1, Scene 7", "Act 2, Scene 2", "Act 3, Scene 1"],
        wrongTechniques: ["Chiasmus", "Simile", "Alliteration"],
        wrongThemes: ["Supernatural", "Kingship", "Fate"],
      },
      {
        id: "qt-mac-3",
        quote: "Look like th'innocent flower, / But be the serpent under't",
        speaker: "Lady Macbeth",
        location: "Act 1, Scene 5",
        technique: "Simile / Biblical allusion",
        theme: "Appearance vs Reality",
        wrongSpeakers: ["Macbeth", "The Witches", "Duncan"],
        wrongLocations: ["Act 1, Scene 7", "Act 2, Scene 3", "Act 3, Scene 2"],
        wrongTechniques: ["Metaphor", "Soliloquy", "Oxymoron"],
        wrongThemes: ["Guilt", "Fate", "Violence"],
      },
      {
        id: "qt-mac-4",
        quote: "Is this a dagger which I see before me, / The handle toward my hand?",
        speaker: "Macbeth",
        location: "Act 2, Scene 1",
        technique: "Rhetorical question",
        theme: "Guilt",
        wrongSpeakers: ["Lady Macbeth", "Banquo", "Ross"],
        wrongLocations: ["Act 1, Scene 3", "Act 3, Scene 4", "Act 5, Scene 5"],
        wrongTechniques: ["Simile", "Chiasmus", "Imperative"],
        wrongThemes: ["Kingship", "Gender", "Fate"],
      },
      {
        id: "qt-mac-5",
        quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
        speaker: "Macbeth",
        location: "Act 2, Scene 2",
        technique: "Hyperbole",
        theme: "Guilt",
        wrongSpeakers: ["Lady Macbeth", "Macduff", "Malcolm"],
        wrongLocations: ["Act 1, Scene 5", "Act 3, Scene 1", "Act 5, Scene 1"],
        wrongTechniques: ["Metaphor", "Alliteration", "Dramatic irony"],
        wrongThemes: ["Ambition", "Supernatural", "Power"],
      },
      {
        id: "qt-mac-6",
        quote: "Out, damned spot! Out, I say!",
        speaker: "Lady Macbeth",
        location: "Act 5, Scene 1",
        technique: "Imperative / Repetition",
        theme: "Guilt",
        wrongSpeakers: ["Macbeth", "The Doctor", "Gentlewoman"],
        wrongLocations: ["Act 1, Scene 5", "Act 2, Scene 2", "Act 3, Scene 4"],
        wrongTechniques: ["Simile", "Soliloquy", "Metaphor"],
        wrongThemes: ["Ambition", "Supernatural", "Kingship"],
      },
      {
        id: "qt-mac-7",
        quote: "Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty",
        speaker: "Lady Macbeth",
        location: "Act 1, Scene 5",
        technique: "Imperative / Invocation",
        theme: "Gender",
        wrongSpeakers: ["Macbeth", "The Witches", "Hecate"],
        wrongLocations: ["Act 1, Scene 7", "Act 2, Scene 2", "Act 3, Scene 2"],
        wrongTechniques: ["Rhetorical question", "Simile", "Dramatic irony"],
        wrongThemes: ["Guilt", "Fate", "Violence"],
      },
      {
        id: "qt-mac-8",
        quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage",
        speaker: "Macbeth",
        location: "Act 5, Scene 5",
        technique: "Extended metaphor",
        theme: "Death",
        wrongSpeakers: ["Lady Macbeth", "Malcolm", "Banquo"],
        wrongLocations: ["Act 2, Scene 1", "Act 3, Scene 4", "Act 4, Scene 3"],
        wrongTechniques: ["Simile", "Personification", "Oxymoron"],
        wrongThemes: ["Ambition", "Supernatural", "Kingship"],
      },
      {
        id: "qt-mac-9",
        quote: "By the pricking of my thumbs, / Something wicked this way comes",
        speaker: "Second Witch",
        location: "Act 4, Scene 1",
        technique: "Rhyming couplet",
        theme: "Supernatural",
        wrongSpeakers: ["Macbeth", "Lady Macbeth", "Banquo"],
        wrongLocations: ["Act 1, Scene 1", "Act 3, Scene 5", "Act 5, Scene 3"],
        wrongTechniques: ["Metaphor", "Personification", "Hyperbole"],
        wrongThemes: ["Guilt", "Ambition", "Gender"],
      },
      {
        id: "qt-mac-10",
        quote: "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er",
        speaker: "Macbeth",
        location: "Act 3, Scene 4",
        technique: "Extended metaphor",
        theme: "Violence",
        wrongSpeakers: ["Lady Macbeth", "Macduff", "Ross"],
        wrongLocations: ["Act 2, Scene 2", "Act 4, Scene 1", "Act 5, Scene 5"],
        wrongTechniques: ["Simile", "Alliteration", "Dramatic irony"],
        wrongThemes: ["Supernatural", "Kingship", "Fate"],
      },
    ],
  },
  {
    slug: "christmas-carol",
    title: "A Christmas Carol",
    author: "Charles Dickens",
    colour: "from-emerald-800 to-emerald-600",
    questions: [
      {
        id: "qt-acc-1",
        quote: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!",
        speaker: "The Narrator",
        location: "Stave One",
        technique: "Exclamatory / Direct address",
        theme: "Greed",
        wrongSpeakers: ["Scrooge", "Bob Cratchit", "Fred"],
        wrongLocations: ["Stave Two", "Stave Three", "Stave Five"],
        wrongTechniques: ["Metaphor", "Simile", "Repetition"],
        wrongThemes: ["Redemption", "Family", "Christmas"],
      },
      {
        id: "qt-acc-2",
        quote: "Are there no prisons? Are there no workhouses?",
        speaker: "Scrooge",
        location: "Stave One",
        technique: "Rhetorical question",
        theme: "Poverty",
        wrongSpeakers: ["The Narrator", "Fred", "Marley's Ghost"],
        wrongLocations: ["Stave Two", "Stave Four", "Stave Five"],
        wrongTechniques: ["Simile", "Metaphor", "Hyperbole"],
        wrongThemes: ["Family", "Christmas", "Isolation"],
      },
      {
        id: "qt-acc-3",
        quote: "Mankind was my business!",
        speaker: "Marley's Ghost",
        location: "Stave One",
        technique: "Exclamatory / Semantic shift",
        theme: "Social Responsibility",
        wrongSpeakers: ["Scrooge", "The Narrator", "Ghost of Christmas Present"],
        wrongLocations: ["Stave Two", "Stave Three", "Stave Five"],
        wrongTechniques: ["Simile", "Alliteration", "Dramatic irony"],
        wrongThemes: ["Greed", "Family", "Christmas"],
      },
      {
        id: "qt-acc-4",
        quote: "I will honour Christmas in my heart, and try to keep it all the year",
        speaker: "Scrooge",
        location: "Stave Five",
        technique: "Declarative / Pledge",
        theme: "Redemption",
        wrongSpeakers: ["Fred", "Bob Cratchit", "The Narrator"],
        wrongLocations: ["Stave One", "Stave Three", "Stave Four"],
        wrongTechniques: ["Rhetorical question", "Simile", "Personification"],
        wrongThemes: ["Poverty", "Isolation", "Greed"],
      },
      {
        id: "qt-acc-5",
        quote: "This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy",
        speaker: "Ghost of Christmas Present",
        location: "Stave Three",
        technique: "Allegory / Personification",
        theme: "Social Responsibility",
        wrongSpeakers: ["Scrooge", "Marley's Ghost", "The Narrator"],
        wrongLocations: ["Stave One", "Stave Two", "Stave Four"],
        wrongTechniques: ["Simile", "Metaphor", "Hyperbole"],
        wrongThemes: ["Family", "Christmas", "Isolation"],
      },
      {
        id: "qt-acc-6",
        quote: "Solitary as an oyster",
        speaker: "The Narrator",
        location: "Stave One",
        technique: "Simile",
        theme: "Isolation",
        wrongSpeakers: ["Scrooge", "Bob Cratchit", "Fred"],
        wrongLocations: ["Stave Two", "Stave Three", "Stave Five"],
        wrongTechniques: ["Metaphor", "Personification", "Alliteration"],
        wrongThemes: ["Greed", "Redemption", "Poverty"],
      },
      {
        id: "qt-acc-7",
        quote: "Old Marley was as dead as a door-nail",
        speaker: "The Narrator",
        location: "Stave One",
        technique: "Simile / Cliche",
        theme: "Death",
        wrongSpeakers: ["Scrooge", "Marley's Ghost", "Fred"],
        wrongLocations: ["Stave Two", "Stave Four", "Stave Five"],
        wrongTechniques: ["Metaphor", "Personification", "Hyperbole"],
        wrongThemes: ["Redemption", "Christmas", "Family"],
      },
      {
        id: "qt-acc-8",
        quote: "He had been Tim's blood horse all the way from church, and had come home rampant",
        speaker: "The Narrator",
        location: "Stave Three",
        technique: "Metaphor",
        theme: "Family",
        wrongSpeakers: ["Scrooge", "Bob Cratchit", "Mrs Cratchit"],
        wrongLocations: ["Stave One", "Stave Two", "Stave Five"],
        wrongTechniques: ["Simile", "Personification", "Alliteration"],
        wrongThemes: ["Greed", "Isolation", "Death"],
      },
    ],
  },
  {
    slug: "inspector-calls",
    title: "An Inspector Calls",
    author: "J.B. Priestley",
    colour: "from-amber-800 to-amber-600",
    questions: [
      {
        id: "qt-aic-1",
        quote: "We are members of one body. We are responsible for each other",
        speaker: "Inspector Goole",
        location: "Act Three",
        technique: "Declarative / Metaphor",
        theme: "Social Responsibility",
        wrongSpeakers: ["Sheila Birling", "Mr Birling", "Eric Birling"],
        wrongLocations: ["Act One", "Act Two", "Stage Directions"],
        wrongTechniques: ["Simile", "Rhetorical question", "Dramatic irony"],
        wrongThemes: ["Social Class", "Gender", "Love"],
      },
      {
        id: "qt-aic-2",
        quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish",
        speaker: "Inspector Goole",
        location: "Act Three",
        technique: "Tricolon / Prophetic warning",
        theme: "Social Responsibility",
        wrongSpeakers: ["Mr Birling", "Eric Birling", "Sheila Birling"],
        wrongLocations: ["Act One", "Act Two", "Stage Directions"],
        wrongTechniques: ["Simile", "Metaphor", "Oxymoron"],
        wrongThemes: ["Love", "Gender", "Youth"],
      },
      {
        id: "qt-aic-3",
        quote: "But these girls aren't cheap labour -- they're people",
        speaker: "Sheila Birling",
        location: "Act One",
        technique: "Antithesis / Corrective",
        theme: "Social Class",
        wrongSpeakers: ["Inspector Goole", "Eric Birling", "Mrs Birling"],
        wrongLocations: ["Act Two", "Act Three", "Stage Directions"],
        wrongTechniques: ["Simile", "Metaphor", "Tricolon"],
        wrongThemes: ["Love", "Guilt", "Capitalism"],
      },
      {
        id: "qt-aic-4",
        quote: "The Titanic -- she sails next week... unsinkable, absolutely unsinkable",
        speaker: "Mr Birling",
        location: "Act One",
        technique: "Dramatic irony",
        theme: "Arrogance",
        wrongSpeakers: ["Inspector Goole", "Gerald Croft", "Eric Birling"],
        wrongLocations: ["Act Two", "Act Three", "Stage Directions"],
        wrongTechniques: ["Metaphor", "Simile", "Personification"],
        wrongThemes: ["Social Responsibility", "Gender", "Love"],
      },
      {
        id: "qt-aic-5",
        quote: "I'm not a child, don't forget. I've a right to know",
        speaker: "Sheila Birling",
        location: "Act Two",
        technique: "Imperative / Assertive declarative",
        theme: "Generational Divide",
        wrongSpeakers: ["Eric Birling", "Mrs Birling", "Inspector Goole"],
        wrongLocations: ["Act One", "Act Three", "Stage Directions"],
        wrongTechniques: ["Simile", "Metaphor", "Dramatic irony"],
        wrongThemes: ["Social Responsibility", "Capitalism", "Love"],
      },
      {
        id: "qt-aic-6",
        quote: "A man has to make his own way -- has to look after himself",
        speaker: "Mr Birling",
        location: "Act One",
        technique: "Repetition / Declarative",
        theme: "Capitalism",
        wrongSpeakers: ["Gerald Croft", "Inspector Goole", "Eric Birling"],
        wrongLocations: ["Act Two", "Act Three", "Stage Directions"],
        wrongTechniques: ["Simile", "Metaphor", "Tricolon"],
        wrongThemes: ["Gender", "Love", "Youth"],
      },
      {
        id: "qt-aic-7",
        quote: "You're squiffy",
        speaker: "Sheila Birling",
        location: "Act One",
        technique: "Colloquialism",
        theme: "Appearance vs Reality",
        wrongSpeakers: ["Mr Birling", "Mrs Birling", "Gerald Croft"],
        wrongLocations: ["Act Two", "Act Three", "Stage Directions"],
        wrongTechniques: ["Metaphor", "Simile", "Dramatic irony"],
        wrongThemes: ["Social Responsibility", "Capitalism", "Gender"],
      },
      {
        id: "qt-aic-8",
        quote: "We don't live alone. We are members of one body",
        speaker: "Inspector Goole",
        location: "Act Three",
        technique: "Metaphor / Short declarative",
        theme: "Community",
        wrongSpeakers: ["Sheila Birling", "Eric Birling", "Mr Birling"],
        wrongLocations: ["Act One", "Act Two", "Stage Directions"],
        wrongTechniques: ["Simile", "Dramatic irony", "Personification"],
        wrongThemes: ["Capitalism", "Gender", "Love"],
      },
    ],
  },
  {
    slug: "jekyll-and-hyde",
    title: "Jekyll & Hyde",
    author: "Robert Louis Stevenson",
    colour: "from-violet-900 to-violet-700",
    questions: [
      {
        id: "qt-jh-1",
        quote: "Man is not truly one, but truly two",
        speaker: "Dr Jekyll",
        location: "Chapter 10 (Henry Jekyll's Full Statement)",
        technique: "Antithesis",
        theme: "Duality",
        wrongSpeakers: ["Utterson", "Enfield", "Lanyon"],
        wrongLocations: ["Chapter 1", "Chapter 4", "Chapter 8"],
        wrongTechniques: ["Simile", "Metaphor", "Personification"],
        wrongThemes: ["Secrecy", "Violence", "Religion"],
      },
      {
        id: "qt-jh-2",
        quote: "I learned to recognise the thorough and primitive duality of man",
        speaker: "Dr Jekyll",
        location: "Chapter 10 (Henry Jekyll's Full Statement)",
        technique: "Abstract noun / Scientific register",
        theme: "Human Nature",
        wrongSpeakers: ["Utterson", "Lanyon", "Enfield"],
        wrongLocations: ["Chapter 1", "Chapter 5", "Chapter 8"],
        wrongTechniques: ["Simile", "Dramatic irony", "Personification"],
        wrongThemes: ["Secrecy", "Violence", "Victorian Society"],
      },
      {
        id: "qt-jh-3",
        quote: "If he be Mr Hyde, I shall be Mr Seek",
        speaker: "Utterson",
        location: "Chapter 2 (Search for Mr Hyde)",
        technique: "Pun / Wordplay",
        theme: "Secrecy",
        wrongSpeakers: ["Dr Jekyll", "Enfield", "Lanyon"],
        wrongLocations: ["Chapter 1", "Chapter 4", "Chapter 10"],
        wrongTechniques: ["Metaphor", "Simile", "Alliteration"],
        wrongThemes: ["Duality", "Violence", "Religion"],
      },
      {
        id: "qt-jh-4",
        quote: "Trampled calmly over the child's body",
        speaker: "Enfield (narrating)",
        location: "Chapter 1 (Story of the Door)",
        technique: "Oxymoron",
        theme: "Violence",
        wrongSpeakers: ["Utterson", "Dr Jekyll", "Lanyon"],
        wrongLocations: ["Chapter 4", "Chapter 8", "Chapter 10"],
        wrongTechniques: ["Simile", "Metaphor", "Alliteration"],
        wrongThemes: ["Duality", "Secrecy", "Science"],
      },
      {
        id: "qt-jh-5",
        quote: "Satan's signature upon a face",
        speaker: "Utterson",
        location: "Chapter 2 (Search for Mr Hyde)",
        technique: "Alliteration / Religious imagery",
        theme: "Evil",
        wrongSpeakers: ["Dr Jekyll", "Enfield", "Lanyon"],
        wrongLocations: ["Chapter 1", "Chapter 4", "Chapter 10"],
        wrongTechniques: ["Simile", "Oxymoron", "Pun"],
        wrongThemes: ["Duality", "Secrecy", "Science"],
      },
      {
        id: "qt-jh-6",
        quote: "With ape-like fury",
        speaker: "The Maid (witness)",
        location: "Chapter 4 (The Carew Murder Case)",
        technique: "Simile / Darwinian allusion",
        theme: "Evolution",
        wrongSpeakers: ["Utterson", "Dr Jekyll", "Enfield"],
        wrongLocations: ["Chapter 1", "Chapter 2", "Chapter 10"],
        wrongTechniques: ["Metaphor", "Personification", "Oxymoron"],
        wrongThemes: ["Secrecy", "Duality", "Religion"],
      },
      {
        id: "qt-jh-7",
        quote: "All human beings, as we meet them, are commingled out of good and evil",
        speaker: "Dr Jekyll",
        location: "Chapter 10 (Henry Jekyll's Full Statement)",
        technique: "Universal statement / Abstract nouns",
        theme: "Morality",
        wrongSpeakers: ["Utterson", "Lanyon", "Enfield"],
        wrongLocations: ["Chapter 1", "Chapter 4", "Chapter 8"],
        wrongTechniques: ["Simile", "Alliteration", "Dramatic irony"],
        wrongThemes: ["Secrecy", "Violence", "Science"],
      },
      {
        id: "qt-jh-8",
        quote: "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse",
        speaker: "Dr Jekyll",
        location: "Chapter 10 (Henry Jekyll's Full Statement)",
        technique: "Repetition / Comparative adjectives",
        theme: "Addiction",
        wrongSpeakers: ["Utterson", "Lanyon", "Enfield"],
        wrongLocations: ["Chapter 2", "Chapter 4", "Chapter 8"],
        wrongTechniques: ["Simile", "Personification", "Oxymoron"],
        wrongThemes: ["Secrecy", "Violence", "Religion"],
      },
    ],
  },
  {
    slug: "romeo-and-juliet",
    title: "Romeo & Juliet",
    author: "William Shakespeare",
    colour: "from-rose-700 to-rose-500",
    questions: [
      {
        id: "qt-rj-1",
        quote: "A pair of star-cross'd lovers take their life",
        speaker: "Chorus (Prologue)",
        location: "Prologue",
        technique: "Foreshadowing / Metaphor",
        theme: "Fate",
        wrongSpeakers: ["Romeo", "Juliet", "Friar Lawrence"],
        wrongLocations: ["Act 1, Scene 5", "Act 2, Scene 2", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Personification", "Oxymoron"],
        wrongThemes: ["Conflict", "Family", "Power"],
      },
      {
        id: "qt-rj-2",
        quote: "O, she doth teach the torches to burn bright!",
        speaker: "Romeo",
        location: "Act 1, Scene 5",
        technique: "Personification / Hyperbole",
        theme: "Love",
        wrongSpeakers: ["Juliet", "Benvolio", "Mercutio"],
        wrongLocations: ["Prologue", "Act 2, Scene 2", "Act 3, Scene 1"],
        wrongTechniques: ["Simile", "Metaphor", "Alliteration"],
        wrongThemes: ["Fate", "Conflict", "Death"],
      },
      {
        id: "qt-rj-3",
        quote: "My only love sprung from my only hate!",
        speaker: "Juliet",
        location: "Act 1, Scene 5",
        technique: "Antithesis",
        theme: "Love",
        wrongSpeakers: ["Romeo", "Nurse", "Lady Capulet"],
        wrongLocations: ["Act 2, Scene 2", "Act 3, Scene 5", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Metaphor", "Personification"],
        wrongThemes: ["Fate", "Death", "Power"],
      },
      {
        id: "qt-rj-4",
        quote: "But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun",
        speaker: "Romeo",
        location: "Act 2, Scene 2",
        technique: "Metaphor / Celestial imagery",
        theme: "Love",
        wrongSpeakers: ["Juliet", "Mercutio", "Benvolio"],
        wrongLocations: ["Act 1, Scene 5", "Act 3, Scene 1", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Personification", "Alliteration"],
        wrongThemes: ["Conflict", "Death", "Fate"],
      },
      {
        id: "qt-rj-5",
        quote: "These violent delights have violent ends",
        speaker: "Friar Lawrence",
        location: "Act 2, Scene 6",
        technique: "Repetition / Foreshadowing",
        theme: "Fate",
        wrongSpeakers: ["Romeo", "Juliet", "The Prince"],
        wrongLocations: ["Act 1, Scene 5", "Act 3, Scene 1", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Metaphor", "Oxymoron"],
        wrongThemes: ["Love", "Family", "Power"],
      },
      {
        id: "qt-rj-6",
        quote: "A plague o' both your houses!",
        speaker: "Mercutio",
        location: "Act 3, Scene 1",
        technique: "Exclamatory / Curse",
        theme: "Conflict",
        wrongSpeakers: ["Romeo", "Tybalt", "The Prince"],
        wrongLocations: ["Act 1, Scene 1", "Act 2, Scene 2", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Metaphor", "Alliteration"],
        wrongThemes: ["Love", "Fate", "Power"],
      },
      {
        id: "qt-rj-7",
        quote: "O, I am fortune's fool!",
        speaker: "Romeo",
        location: "Act 3, Scene 1",
        technique: "Alliteration / Personification",
        theme: "Fate",
        wrongSpeakers: ["Juliet", "Mercutio", "Friar Lawrence"],
        wrongLocations: ["Act 1, Scene 5", "Act 2, Scene 2", "Act 5, Scene 3"],
        wrongTechniques: ["Simile", "Metaphor", "Oxymoron"],
        wrongThemes: ["Love", "Family", "Power"],
      },
      {
        id: "qt-rj-8",
        quote: "Death, that hath suck'd the honey of thy breath, / Hath had no power yet upon thy beauty",
        speaker: "Romeo",
        location: "Act 5, Scene 3",
        technique: "Personification / Dramatic irony",
        theme: "Death",
        wrongSpeakers: ["Juliet", "Friar Lawrence", "The Prince"],
        wrongLocations: ["Act 2, Scene 2", "Act 3, Scene 5", "Prologue"],
        wrongTechniques: ["Simile", "Alliteration", "Oxymoron"],
        wrongThemes: ["Conflict", "Family", "Power"],
      },
      {
        id: "qt-rj-9",
        quote: "For never was a story of more woe / Than this of Juliet and her Romeo",
        speaker: "The Prince",
        location: "Act 5, Scene 3",
        technique: "Rhyming couplet",
        theme: "Love",
        wrongSpeakers: ["Romeo", "Friar Lawrence", "Chorus"],
        wrongLocations: ["Prologue", "Act 3, Scene 1", "Act 2, Scene 6"],
        wrongTechniques: ["Simile", "Metaphor", "Personification"],
        wrongThemes: ["Conflict", "Power", "Fate"],
      },
    ],
  },
];

/* ─── LS keys ────────────────────────────────────────────────── */

const LS_PROGRESS = "teh-quote-tester-progress";
const LS_WRONG = "teh-quote-tester-wrong";

/* ─── Helpers ────────────────────────────────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOptions(correct: string, wrongs: string[]): string[] {
  return shuffle([correct, ...wrongs.slice(0, 3)]);
}

function getCorrectAnswer(q: QuoteQuestion, cat: QuestionCategory): string {
  switch (cat) {
    case "speaker": return q.speaker;
    case "location": return q.location;
    case "technique": return q.technique;
    case "theme": return q.theme;
  }
}

function getWrongOptions(q: QuoteQuestion, cat: QuestionCategory): string[] {
  switch (cat) {
    case "speaker": return q.wrongSpeakers;
    case "location": return q.wrongLocations;
    case "technique": return q.wrongTechniques;
    case "theme": return q.wrongThemes;
  }
}

/* ─── Component ──────────────────────────────────────────────── */

export default function QuoteTesterPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [session, setSession] = useState<SessionState | null>(null);
  const [questionOrder, setQuestionOrder] = useState<QuoteQuestion[]>([]);
  const [mounted, setMounted] = useState(false);
  const [retryWrongMode, setRetryWrongMode] = useState(false);

  /* Persisted progress: which quotes have been fully mastered, wrong IDs */
  const [masteredQuotes, setMasteredQuotes] = useState<Record<string, string[]>>({});
  const [wrongQuoteIds, setWrongQuoteIds] = useState<string[]>([]);

  /* Load from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_PROGRESS);
      if (saved) setMasteredQuotes(JSON.parse(saved));
    } catch { /* ignore */ }
    try {
      const saved = localStorage.getItem(LS_WRONG);
      if (saved) setWrongQuoteIds(JSON.parse(saved));
    } catch { /* ignore */ }
    setMounted(true);
  }, []);

  /* Save progress */
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_PROGRESS, JSON.stringify(masteredQuotes));
  }, [masteredQuotes, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_WRONG, JSON.stringify(wrongQuoteIds));
  }, [wrongQuoteIds, mounted]);

  const activeText = useMemo(() => TEXT_DATA.find((t) => t.slug === activeSlug), [activeSlug]);

  /* Current question data */
  const currentQuestion = session && !session.finished ? questionOrder[session.currentIndex] : null;
  const currentCatInfo = session ? CATEGORIES[session.currentCategory] : null;

  /* Build options for current question */
  const options = useMemo(() => {
    if (!currentQuestion || !currentCatInfo) return [];
    const correct = getCorrectAnswer(currentQuestion, currentCatInfo.key);
    const wrongs = getWrongOptions(currentQuestion, currentCatInfo.key);
    return buildOptions(correct, wrongs);
  }, [currentQuestion, currentCatInfo]);

  /* Stats */
  const sessionCorrect = session ? session.answers.filter((a) => a.correct).length : 0;
  const sessionTotal = session ? session.answers.length : 0;

  const getMasteredCount = useCallback(
    (slug: string) => {
      return (masteredQuotes[slug] || []).length;
    },
    [masteredQuotes]
  );

  const getTotalCount = useCallback((slug: string) => {
    const text = TEXT_DATA.find((t) => t.slug === slug);
    return text ? text.questions.length : 0;
  }, []);

  /* Start a new session */
  const startSession = useCallback(
    (slug: string, retryWrong = false) => {
      const text = TEXT_DATA.find((t) => t.slug === slug);
      if (!text) return;

      setActiveSlug(slug);
      setRetryWrongMode(retryWrong);

      let questions = [...text.questions];
      if (retryWrong) {
        questions = questions.filter((q) => wrongQuoteIds.includes(q.id));
        if (questions.length === 0) {
          questions = [...text.questions];
          setRetryWrongMode(false);
        }
      }

      const shuffledQuestions = shuffle(questions);
      setQuestionOrder(shuffledQuestions);
      setSession({
        currentIndex: 0,
        currentCategory: 0,
        answers: [],
        selectedAnswer: null,
        showFeedback: false,
        finished: false,
      });
    },
    [wrongQuoteIds]
  );

  /* Handle answer selection */
  const handleAnswer = useCallback(
    (answer: string) => {
      if (!session || !currentQuestion || !currentCatInfo || session.showFeedback) return;

      const correct = getCorrectAnswer(currentQuestion, currentCatInfo.key);
      const isCorrect = answer === correct;

      const record: AnswerRecord = {
        questionId: currentQuestion.id,
        category: currentCatInfo.key,
        correct: isCorrect,
      };

      /* Track wrong IDs for retry mode */
      if (!isCorrect && !wrongQuoteIds.includes(currentQuestion.id)) {
        setWrongQuoteIds((prev) => [...prev, currentQuestion.id]);
      }

      setSession((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          selectedAnswer: answer,
          showFeedback: true,
          answers: [...prev.answers, record],
        };
      });
    },
    [session, currentQuestion, currentCatInfo, wrongQuoteIds]
  );

  /* Advance to next question / category */
  const handleNext = useCallback(() => {
    if (!session) return;

    const nextCategory = session.currentCategory + 1;

    if (nextCategory < CATEGORIES.length) {
      /* Move to next category for same quote */
      setSession((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          currentCategory: nextCategory,
          selectedAnswer: null,
          showFeedback: false,
        };
      });
    } else {
      /* Check if all 4 categories were correct for this quote */
      const lastFourAnswers = session.answers.slice(-4);
      const allCorrect =
        lastFourAnswers.length === 4 && lastFourAnswers.every((a) => a.correct);

      if (allCorrect && activeSlug && currentQuestion) {
        /* Mark as mastered */
        setMasteredQuotes((prev) => {
          const existing = prev[activeSlug] || [];
          if (!existing.includes(currentQuestion.id)) {
            return { ...prev, [activeSlug]: [...existing, currentQuestion.id] };
          }
          return prev;
        });
        /* Remove from wrong list */
        setWrongQuoteIds((prev) => prev.filter((id) => id !== currentQuestion.id));
      }

      const nextIndex = session.currentIndex + 1;

      if (nextIndex < questionOrder.length) {
        setSession((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            currentIndex: nextIndex,
            currentCategory: 0,
            selectedAnswer: null,
            showFeedback: false,
          };
        });
      } else {
        /* Session complete */
        setSession((prev) => {
          if (!prev) return prev;
          return { ...prev, finished: true };
        });
      }
    }
  }, [session, questionOrder, activeSlug, currentQuestion]);

  /* Reset to text selection */
  const backToMenu = useCallback(() => {
    setActiveSlug(null);
    setSession(null);
    setQuestionOrder([]);
    setRetryWrongMode(false);
  }, []);

  /* ─── Render ─────────────────────────────────────────────── */

  if (!mounted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2E86C1] border-t-transparent" />
      </div>
    );
  }

  /* ─── Text selection screen ────────────────────────────── */
  if (!activeSlug || !session) {
    return (
      <>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quote Tester
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Test your knowledge of key GCSE Literature quotes. For each quote you will
            identify the speaker, its location in the text, the technique used, and the
            theme it links to. Track your progress and retry the ones you get wrong.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEXT_DATA.map((text) => {
            const mastered = getMasteredCount(text.slug);
            const total = getTotalCount(text.slug);
            const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
            const wrongCount = text.questions.filter((q) =>
              wrongQuoteIds.includes(q.id)
            ).length;

            return (
              <div
                key={text.slug}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:shadow-md"
              >
                <div className={`bg-gradient-to-br ${text.colour} px-5 py-5 text-white`}>
                  <h3 className="text-xl font-bold">{text.title}</h3>
                  <p className="mt-0.5 text-sm text-white/70">{text.author}</p>
                  <p className="mt-2 text-xs text-white/60">
                    {total} quotes &middot; {mastered} mastered
                  </p>
                </div>

                <div className="px-5 py-4">
                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#1A5276] to-[#2E86C1] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => startSession(text.slug)}
                      className="rounded-lg bg-[#1A5276] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1A5276]/90"
                    >
                      Start Test
                    </button>
                    {wrongCount > 0 && (
                      <button
                        onClick={() => startSession(text.slug, true)}
                        className="rounded-lg border-2 border-[#2E86C1] px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                      >
                        Test Me Again ({wrongCount} wrong)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall stats */}
        <div className="mt-10 rounded-xl border border-[#2E86C1]/20 bg-primary/5 p-6">
          <h3 className="text-lg font-bold text-foreground">How it works</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A5276]" />
              <span>
                <strong>Four questions per quote.</strong> For each quote you must identify
                the speaker, location, technique, and theme.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A5276]" />
              <span>
                <strong>Instant feedback.</strong> See whether you are right or wrong
                immediately, with the correct answer highlighted.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A5276]" />
              <span>
                <strong>Mastery tracking.</strong> Get all four categories correct on a
                quote to mark it as mastered. Your progress saves automatically.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A5276]" />
              <span>
                <strong>Test me again.</strong> Focus on the quotes you got wrong to
                strengthen your weakest areas.
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  }

  /* ─── Session finished ─────────────────────────────────── */
  if (session.finished) {
    const totalQ = session.answers.length;
    const correctQ = session.answers.filter((a) => a.correct).length;
    const pct = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;

    /* Group answers by question */
    const byQuestion: Record<string, AnswerRecord[]> = {};
    session.answers.forEach((a) => {
      if (!byQuestion[a.questionId]) byQuestion[a.questionId] = [];
      byQuestion[a.questionId].push(a);
    });

    const wrongQIds = Object.keys(byQuestion).filter((qId) =>
      byQuestion[qId].some((a) => !a.correct)
    );
    const perfectQIds = Object.keys(byQuestion).filter(
      (qId) => byQuestion[qId].length === 4 && byQuestion[qId].every((a) => a.correct)
    );

    return (
      <>
        <div className="mb-8">
          <button
            onClick={backToMenu}
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to texts
          </button>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Session Complete!
          </h1>
          {retryWrongMode && (
            <p className="mt-1 text-sm font-medium text-primary">
              Retry Mode -- focusing on previously wrong answers
            </p>
          )}
        </div>

        {/* Score card */}
        <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <div className={`bg-gradient-to-br ${activeText?.colour || "from-gray-700 to-gray-500"} p-8 text-center text-white`}>
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">
              {activeText?.title}
            </p>
            <div className="mt-4 text-6xl font-extrabold">{pct}%</div>
            <p className="mt-2 text-lg text-white/80">
              {correctQ} of {totalQ} correct
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{questionOrder.length}</div>
                <div className="text-xs text-muted-foreground">Quotes tested</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">{perfectQIds.length}</div>
                <div className="text-xs text-muted-foreground">Fully correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">{wrongQIds.length}</div>
                <div className="text-xs text-muted-foreground">Need practice</div>
              </div>
            </div>

            {/* Performance badge */}
            <div className="mt-6 rounded-lg border border-border bg-muted p-4 text-center">
              {pct >= 90 ? (
                <p className="text-sm font-semibold text-emerald-700">
                  Outstanding! You know these quotes inside out.
                </p>
              ) : pct >= 70 ? (
                <p className="text-sm font-semibold text-primary">
                  Great work! A few more to nail down -- try the retry mode.
                </p>
              ) : pct >= 50 ? (
                <p className="text-sm font-semibold text-amber-500">
                  Good effort! Keep practising to strengthen your recall.
                </p>
              ) : (
                <p className="text-sm font-semibold text-red-500">
                  Keep going! Use the retry mode to focus on your weak spots.
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => startSession(activeSlug)}
                className="rounded-lg bg-[#1A5276] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1A5276]/90"
              >
                Test Again (All Quotes)
              </button>
              {wrongQIds.length > 0 && (
                <button
                  onClick={() => startSession(activeSlug, true)}
                  className="rounded-lg border-2 border-[#2E86C1] px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Retry Wrong Answers ({wrongQIds.length})
                </button>
              )}
              <button
                onClick={backToMenu}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted"
              >
                Choose Another Text
              </button>
            </div>
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="mx-auto mt-8 max-w-lg">
          <h3 className="mb-4 text-lg font-bold text-foreground">Breakdown by quote</h3>
          <div className="space-y-3">
            {questionOrder.map((q) => {
              const records = byQuestion[q.id] || [];
              const allRight = records.length === 4 && records.every((r) => r.correct);
              const correctCount = records.filter((r) => r.correct).length;
              return (
                <div
                  key={q.id}
                  className={`rounded-lg border p-4 ${
                    allRight
                      ? "border-emerald-200 bg-emerald-50/50"
                      : "border-red-200 bg-red-50/30"
                  }`}
                >
                  <p className="text-sm font-semibold italic text-foreground">
                    &ldquo;{q.quote.length > 60 ? q.quote.slice(0, 60) + "..." : q.quote}&rdquo;
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      {CATEGORIES.map((cat, idx) => {
                        const rec = records[idx];
                        return (
                          <span
                            key={cat.key}
                            className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold ${
                              rec?.correct
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {cat.key === "speaker"
                              ? "Who"
                              : cat.key === "location"
                              ? "Where"
                              : cat.key === "technique"
                              ? "Tech"
                              : "Theme"}
                          </span>
                        );
                      })}
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {correctCount}/4
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  /* ─── Active quiz ──────────────────────────────────────── */
  const progressPct =
    questionOrder.length > 0
      ? Math.round(
          ((session.currentIndex * CATEGORIES.length + session.currentCategory) /
            (questionOrder.length * CATEGORIES.length)) *
            100
        )
      : 0;

  const correctAnswerForCurrent = currentQuestion && currentCatInfo
    ? getCorrectAnswer(currentQuestion, currentCatInfo.key)
    : "";

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={backToMenu}
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Exit test
        </button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {activeText?.title}
            </h1>
            {retryWrongMode && (
              <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                Retry Mode
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-muted-foreground">
              Score: {sessionCorrect}/{sessionTotal}
            </div>
            <div className="text-xs text-muted-foreground">
              Quote {session.currentIndex + 1} of {questionOrder.length}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1A5276] to-[#2E86C1] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Category steps */}
      <div className="mb-6 flex items-center gap-1">
        {CATEGORIES.map((cat, idx) => {
          const isDone = idx < session.currentCategory;
          const isCurrent = idx === session.currentCategory;
          const answer = session.answers.find(
            (a) =>
              a.questionId === currentQuestion?.id && a.category === cat.key
          );
          return (
            <div key={cat.key} className="flex items-center gap-1">
              <div
                className={`flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all ${
                  isDone && answer?.correct
                    ? "bg-emerald-100 text-emerald-700"
                    : isDone && !answer?.correct
                    ? "bg-red-500/10 text-red-500"
                    : isCurrent
                    ? "bg-[#1A5276] text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                </svg>
                <span className="hidden sm:inline">
                  {cat.key === "speaker"
                    ? "Who"
                    : cat.key === "location"
                    ? "Where"
                    : cat.key === "technique"
                    ? "Technique"
                    : "Theme"}
                </span>
              </div>
              {idx < CATEGORIES.length - 1 && (
                <div className={`h-0.5 w-3 ${isDone ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Quote card */}
      {currentQuestion && currentCatInfo && (
        <div className="mx-auto max-w-2xl">
          <div className={`overflow-hidden rounded-2xl border border-border bg-card shadow-md`}>
            {/* Quote display */}
            <div className={`bg-gradient-to-br ${activeText?.colour || "from-gray-700 to-gray-500"} px-6 py-8 text-white`}>
              <p className="text-center text-xs font-medium uppercase tracking-wider text-white/60">
                Identify the quote
              </p>
              <p className="mt-4 text-center text-lg font-semibold italic leading-relaxed sm:text-xl">
                &ldquo;{currentQuestion.quote}&rdquo;
              </p>
            </div>

            {/* Question */}
            <div className="p-6">
              <div className="mb-5 flex items-center gap-2">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={currentCatInfo.icon} />
                </svg>
                <h2 className="text-lg font-bold text-foreground">{currentCatInfo.label}</h2>
              </div>

              {/* Answer options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {options.map((option) => {
                  const isSelected = session.selectedAnswer === option;
                  const isCorrectOption = option === correctAnswerForCurrent;
                  const showFeedback = session.showFeedback;

                  let btnClass =
                    "w-full rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-all ";

                  if (showFeedback) {
                    if (isCorrectOption) {
                      btnClass +=
                        "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-200";
                    } else if (isSelected && !isCorrectOption) {
                      btnClass +=
                        "border-red-400 bg-red-50 text-red-500 ring-2 ring-red-200";
                    } else {
                      btnClass += "border-border bg-muted text-muted-foreground";
                    }
                  } else {
                    btnClass +=
                      "border-border bg-card text-muted-foreground hover:border-[#2E86C1] hover:bg-primary/5 cursor-pointer";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={showFeedback}
                      className={btnClass}
                    >
                      <div className="flex items-center gap-2">
                        {showFeedback && isCorrectOption && (
                          <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {showFeedback && isSelected && !isCorrectOption && (
                          <svg className="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback message */}
              {session.showFeedback && (
                <div className="mt-5">
                  <div
                    className={`rounded-lg p-4 ${
                      session.selectedAnswer === correctAnswerForCurrent
                        ? "border border-emerald-200 bg-emerald-50"
                        : "border border-red-200 bg-red-50"
                    }`}
                  >
                    {session.selectedAnswer === correctAnswerForCurrent ? (
                      <p className="text-sm font-semibold text-emerald-800">
                        Correct! Well done.
                      </p>
                    ) : (
                      <p className="text-sm text-red-800">
                        <span className="font-semibold">Not quite.</span> The correct
                        answer is{" "}
                        <span className="font-bold">{correctAnswerForCurrent}</span>.
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleNext}
                    className="mt-4 w-full rounded-lg bg-[#1A5276] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1A5276]/90"
                  >
                    {session.currentCategory < CATEGORIES.length - 1
                      ? "Next Question"
                      : session.currentIndex < questionOrder.length - 1
                      ? "Next Quote"
                      : "See Results"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Session stats bar */}
          <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-md">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">
                Correct:{" "}
                <span className="font-bold text-emerald-600">{sessionCorrect}</span>
              </span>
              <span className="text-muted-foreground">
                Wrong:{" "}
                <span className="font-bold text-red-500">
                  {sessionTotal - sessionCorrect}
                </span>
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              {sessionTotal > 0
                ? `${Math.round((sessionCorrect / sessionTotal) * 100)}% accuracy`
                : "No answers yet"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
