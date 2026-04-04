"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

type QuoteEntry = {
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
  cards: QuoteEntry[];
};

type QuizMode = "who-said-it" | "complete-the-quote" | "which-text";

type QuizQuestion = {
  id: string;
  mode: QuizMode;
  quoteEntry: QuoteEntry;
  sourceText: string;
  /** The displayed prompt */
  prompt: string;
  /** The correct answer string */
  correctAnswer: string;
  /** 4 total options (including correct) */
  options: string[];
  /** Explanation shown on review */
  explanation: string;
};

type QuizResult = {
  question: QuizQuestion;
  chosenAnswer: string | null;
  correct: boolean;
  timeExpired: boolean;
};

type SavedState = {
  bestScores: Record<string, number>; // "slug-mode" -> best percentage
  totalQuizzes: number;
  totalCorrect: number;
  totalAnswered: number;
};

/* ─── Quote data (mirrored from flashcards) ──────────────────── */

const TEXT_SETS: TextSet[] = [
  {
    slug: "macbeth",
    title: "Macbeth",
    author: "William Shakespeare",
    colour: "from-red-900 to-red-700",
    cards: [
      { id: "mac-1", quote: "Fair is foul, and foul is fair", character: "Witches", act: "Act 1, Scene 1", analysis: "Establishes the theme of moral inversion from the very opening. The chiasmus creates a sense of the world turned upside down.", themes: ["Supernatural", "Appearance vs Reality"] },
      { id: "mac-2", quote: "Stars, hide your fires; / Let not light see my black and deep desires", character: "Macbeth", act: "Act 1, Scene 4", analysis: "Macbeth's aside reveals his ambition is already forming before Lady Macbeth's influence. Light/dark imagery links to the play's moral framework.", themes: ["Ambition", "Appearance vs Reality", "Guilt"] },
      { id: "mac-3", quote: "Look like th'innocent flower, / But be the serpent under't", character: "Lady Macbeth", act: "Act 1, Scene 5", analysis: "Biblical allusion to the serpent in Eden positions Lady Macbeth as a tempter figure. The simile contrasts beauty with deadly intent.", themes: ["Appearance vs Reality", "Gender", "Power"] },
      { id: "mac-4", quote: "Is this a dagger which I see before me, / The handle toward my hand?", character: "Macbeth", act: "Act 2, Scene 1", analysis: "The rhetorical question shows Macbeth's psychological torment. The dagger could be supernatural temptation or guilt-driven hallucination.", themes: ["Guilt", "Supernatural", "Ambition"] },
      { id: "mac-5", quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?", character: "Macbeth", act: "Act 2, Scene 2", analysis: "Hyperbolic imagery -- even the god of the ocean cannot cleanse his guilt. The blood symbolises the permanent moral stain of regicide.", themes: ["Guilt", "Kingship", "Violence"] },
      { id: "mac-6", quote: "Out, damned spot! Out, I say!", character: "Lady Macbeth", act: "Act 5, Scene 1", analysis: "Lady Macbeth's sleepwalking reveals her subconscious guilt. Ironic reversal of her earlier confidence about washing away the blood.", themes: ["Guilt", "Gender", "Madness"] },
      { id: "mac-7", quote: "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er", character: "Macbeth", act: "Act 3, Scene 4", analysis: "Extended metaphor of a river of blood shows Macbeth has reached the point of no return. 'Tedious' is chillingly casual.", themes: ["Violence", "Guilt", "Power"] },
      { id: "mac-8", quote: "Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty", character: "Lady Macbeth", act: "Act 1, Scene 5", analysis: "Lady Macbeth invokes spirits to remove her femininity, equating womanhood with weakness. Challenges Jacobean gender norms.", themes: ["Gender", "Supernatural", "Power"] },
      { id: "mac-9", quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage", character: "Macbeth", act: "Act 5, Scene 5", analysis: "Macbeth's nihilistic soliloquy after Lady Macbeth's death. The theatrical metaphor suggests life is meaningless performance.", themes: ["Ambition", "Death", "Fate"] },
      { id: "mac-10", quote: "By the pricking of my thumbs, / Something wicked this way comes", character: "Second Witch", act: "Act 4, Scene 1", analysis: "The Witches now call Macbeth 'wicked' -- he has become more evil than the supernatural forces that tempted him.", themes: ["Supernatural", "Evil", "Fate"] },
    ],
  },
  {
    slug: "christmas-carol",
    title: "A Christmas Carol",
    author: "Charles Dickens",
    colour: "from-emerald-800 to-emerald-600",
    cards: [
      { id: "acc-1", quote: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!", analysis: "The exclamatory 'Oh!' breaks the fourth wall. 'Tight-fisted' and 'grindstone' create imagery of miserliness and relentless, joyless work.", themes: ["Greed", "Isolation"] },
      { id: "acc-2", quote: "Are there no prisons? Are there no workhouses?", character: "Scrooge", analysis: "Scrooge's rhetorical questions echo the cruel Malthusian attitudes of the Victorian upper class. Dickens uses Scrooge to satirise those who blamed the poor.", themes: ["Poverty", "Social Responsibility"] },
      { id: "acc-3", quote: "Mankind was my business!", character: "Marley's Ghost", analysis: "Marley's desperate cry serves as the moral thesis of the novella. 'Business' is recontextualised from commerce to compassion.", themes: ["Social Responsibility", "Redemption"] },
      { id: "acc-4", quote: "I will honour Christmas in my heart, and try to keep it all the year", character: "Scrooge", analysis: "Scrooge's pledge marks his completed transformation. 'All the year' extends Christmas generosity beyond a single day.", themes: ["Redemption", "Generosity", "Christmas"] },
      { id: "acc-5", quote: "This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy", character: "Ghost of Christmas Present", analysis: "The allegorical children personify society's failings. Dickens warns that ignorance is more dangerous than want itself.", themes: ["Poverty", "Social Responsibility", "Education"] },
      { id: "acc-6", quote: "Solitary as an oyster", analysis: "Simile establishing Scrooge's self-imposed isolation. An oyster is hard-shelled but contains a pearl -- foreshadowing the goodness hidden within.", themes: ["Isolation", "Redemption"] },
      { id: "acc-7", quote: "He had been Tim's blood horse all the way from church, and had come home rampant", analysis: "Bob Cratchit carrying Tiny Tim shows paternal love despite poverty. Family love compensates for material lack.", themes: ["Family", "Poverty", "Love"] },
      { id: "acc-8", quote: "Old Marley was as dead as a door-nail", analysis: "The blunt opening establishes a matter-of-fact narrative voice. Dickens then subverts expectations by making the dead character central.", themes: ["Death", "Supernatural"] },
    ],
  },
  {
    slug: "inspector-calls",
    title: "An Inspector Calls",
    author: "J.B. Priestley",
    colour: "from-amber-800 to-amber-600",
    cards: [
      { id: "aic-1", quote: "We are members of one body. We are responsible for each other", character: "Inspector Goole", analysis: "The Inspector's final speech articulates Priestley's socialist message. 'One body' echoes Christian theology and socialist collectivism.", themes: ["Social Responsibility", "Community"] },
      { id: "aic-2", quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish", character: "Inspector Goole", analysis: "Prophetic warning referencing both World Wars. 'Fire and blood and anguish' is a tricolon of destruction.", themes: ["Social Responsibility", "War", "Power"] },
      { id: "aic-3", quote: "But these girls aren't cheap labour -- they're people", character: "Sheila Birling", analysis: "Sheila's moral growth is shown as she recognises workers' humanity. She rejects her father's capitalist view of workers as commodities.", themes: ["Social Class", "Gender", "Responsibility"] },
      { id: "aic-4", quote: "The Titanic -- she sails next week... unsinkable, absolutely unsinkable", character: "Mr Birling", analysis: "Dramatic irony: the audience knows the Titanic sank. Birling's confident repetition establishes him as foolish and overconfident.", themes: ["Dramatic Irony", "Capitalism", "Arrogance"] },
      { id: "aic-5", quote: "I'm not a child, don't forget. I've a right to know", character: "Sheila Birling", analysis: "Sheila asserts her maturity and independence, challenging the patriarchal family structure. Represents generational change.", themes: ["Gender", "Generational Divide"] },
      { id: "aic-6", quote: "You're squiffy", character: "Sheila", analysis: "Colloquial slang for drunk. Reveals Eric's alcoholism is an open secret the family ignores. The Birlings prioritise appearances over truth.", themes: ["Appearance vs Reality", "Family"] },
      { id: "aic-7", quote: "A man has to make his own way -- has to look after himself", character: "Mr Birling", analysis: "Birling's individualist philosophy is the antithesis of the Inspector's message. Priestley presents this capitalist self-interest as morally bankrupt.", themes: ["Capitalism", "Social Responsibility"] },
      { id: "aic-8", quote: "We don't live alone. We are members of one body", character: "Inspector Goole", analysis: "The metaphor of 'one body' implies society functions like a human body -- if one part suffers, all are affected.", themes: ["Social Responsibility", "Community", "Equality"] },
    ],
  },
  {
    slug: "jekyll-and-hyde",
    title: "Jekyll and Hyde",
    author: "Robert Louis Stevenson",
    colour: "from-violet-900 to-violet-700",
    cards: [
      { id: "jh-1", quote: "Man is not truly one, but truly two", character: "Dr Jekyll", analysis: "Jekyll's realisation encapsulates the novella's central theme: duality of human nature. 'Truly' repeated suggests a fundamental truth society refuses to acknowledge.", themes: ["Duality", "Science", "Victorian Society"] },
      { id: "jh-2", quote: "I learned to recognise the thorough and primitive duality of man", character: "Dr Jekyll", analysis: "'Primitive' suggests the duality is ancient and innate. 'Thorough' means it permeates every aspect of human nature.", themes: ["Duality", "Science", "Human Nature"] },
      { id: "jh-3", quote: "If he be Mr Hyde, I shall be Mr Seek", character: "Utterson", analysis: "Wordplay on hide-and-seek creates dark humour but also establishes the detective-story structure. Reflects the Victorian gentleman's need to understand and control.", themes: ["Secrecy", "Victorian Society", "Curiosity"] },
      { id: "jh-4", quote: "Trampled calmly over the child's body", analysis: "The oxymoron 'trampled calmly' is deeply unsettling -- Hyde's violence is casual, not passionate. Stevenson shows evil as indifferent.", themes: ["Violence", "Evil", "Duality"] },
      { id: "jh-5", quote: "Satan's signature upon a face", character: "Utterson", analysis: "Religious imagery marks Hyde as diabolical. 'Signature' suggests the devil has claimed him. Reflects Victorian pseudoscience of physiognomy.", themes: ["Evil", "Religion", "Appearance"] },
      { id: "jh-6", quote: "With ape-like fury", analysis: "Hyde's animalistic behaviour references Darwinian evolution -- he is a regression to a primitive state. Stevenson links moral degeneration to physical devolution.", themes: ["Evolution", "Violence", "Duality"] },
      { id: "jh-7", quote: "All human beings, as we meet them, are commingled out of good and evil", character: "Dr Jekyll", analysis: "'Commingled' means thoroughly mixed -- good and evil cannot be separated. The universal 'all human beings' makes this about humanity, not just Jekyll.", themes: ["Duality", "Human Nature", "Morality"] },
      { id: "jh-8", quote: "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse", character: "Dr Jekyll", analysis: "'Slowly' repeated shows the gradual, insidious nature of evil's encroachment. 'Incorporated' shows Hyde consuming Jekyll.", themes: ["Duality", "Addiction", "Identity"] },
    ],
  },
  {
    slug: "romeo-and-juliet",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    colour: "from-rose-700 to-rose-500",
    cards: [
      { id: "rj-1", quote: "A pair of star-cross'd lovers take their life", act: "Prologue", analysis: "The Prologue's spoiler establishes fate as a central force. 'Star-cross'd' blends astrology with destiny.", themes: ["Fate", "Love", "Death"] },
      { id: "rj-2", quote: "O, she doth teach the torches to burn bright!", character: "Romeo", act: "Act 1, Scene 5", analysis: "Romeo's first sight of Juliet uses light imagery -- she outshines artificial light. The personification elevates Juliet to something transcendent.", themes: ["Love", "Light/Dark", "Beauty"] },
      { id: "rj-3", quote: "My only love sprung from my only hate!", character: "Juliet", act: "Act 1, Scene 5", analysis: "Antithesis of 'love' and 'hate' captures the central paradox. 'Only' repeated shows the absolute nature of both emotions.", themes: ["Love", "Conflict", "Fate"] },
      { id: "rj-4", quote: "But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun", character: "Romeo", act: "Act 2, Scene 2", analysis: "Celestial imagery -- Juliet as 'the sun' makes her the centre of Romeo's universe, the source of light and life.", themes: ["Love", "Light/Dark", "Nature"] },
      { id: "rj-5", quote: "These violent delights have violent ends", character: "Friar Lawrence", act: "Act 2, Scene 6", analysis: "The Friar's warning foreshadows the tragedy. The repetition of 'violent' links passion directly to destruction.", themes: ["Fate", "Love", "Death", "Violence"] },
      { id: "rj-6", quote: "A plague o' both your houses!", character: "Mercutio", act: "Act 3, Scene 1", analysis: "Mercutio's dying curse blames both families equally. 'Plague' invokes disease and divine punishment. His death is the play's turning point.", themes: ["Conflict", "Fate", "Family"] },
      { id: "rj-7", quote: "O, I am fortune's fool!", character: "Romeo", act: "Act 3, Scene 1", analysis: "After killing Tybalt, Romeo sees himself as a puppet of fate. 'Fortune's fool' uses alliteration and personification to blame destiny.", themes: ["Fate", "Violence", "Responsibility"] },
      { id: "rj-8", quote: "Death, that hath suck'd the honey of thy breath, / Hath had no power yet upon thy beauty", character: "Romeo", act: "Act 5, Scene 3", analysis: "Dramatic irony: Juliet is not actually dead. Death is personified as a lover, jealously guarding Juliet.", themes: ["Death", "Love", "Fate", "Beauty"] },
      { id: "rj-9", quote: "For never was a story of more woe / Than this of Juliet and her Romeo", act: "Act 5, Scene 3", analysis: "The Prince's closing couplet provides formal closure. 'Her Romeo' shows possession in death -- they finally belong to each other.", themes: ["Love", "Death", "Fate", "Family"] },
    ],
  },
];

/* ─── All unique characters across texts (for "Who said it?" distractors) ── */

function getAllCharacters(): string[] {
  const chars = new Set<string>();
  for (const set of TEXT_SETS) {
    for (const card of set.cards) {
      if (card.character) chars.add(card.character);
    }
  }
  return Array.from(chars);
}

/* ─── Helpers ────────────────────────────────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], count: number, exclude?: T): T[] {
  const filtered = exclude != null ? arr.filter((x) => x !== exclude) : [...arr];
  return shuffle(filtered).slice(0, count);
}

/** Remove a random contiguous chunk from quote text to create a fill-in-the-blank */
function createBlank(quote: string): { blanked: string; answer: string } {
  const words = quote.split(/\s+/);
  if (words.length <= 3) {
    // Very short quote -- blank out the whole thing
    return { blanked: "___________", answer: quote };
  }
  const blankLen = Math.min(Math.max(2, Math.floor(words.length * 0.35)), 5);
  const maxStart = words.length - blankLen;
  const start = Math.floor(Math.random() * (maxStart + 1));
  const answer = words.slice(start, start + blankLen).join(" ");
  const blanked = [
    ...words.slice(0, start),
    "___________",
    ...words.slice(start + blankLen),
  ].join(" ");
  return { blanked, answer };
}

function generateWrongCompletions(correctAnswer: string, sourceSet: TextSet, allSets: TextSet[]): string[] {
  // Grab random snippet-length phrases from other quotes
  const snippets: string[] = [];
  const allCards = allSets.flatMap((s) => s.cards);
  for (const card of shuffle(allCards)) {
    const words = card.quote.split(/\s+/);
    if (words.length < 3) continue;
    const len = Math.min(correctAnswer.split(/\s+/).length, words.length);
    const start = Math.floor(Math.random() * Math.max(1, words.length - len));
    const snippet = words.slice(start, start + len).join(" ");
    if (snippet !== correctAnswer && !snippets.includes(snippet)) {
      snippets.push(snippet);
    }
    if (snippets.length >= 3) break;
  }
  // Pad if needed
  while (snippets.length < 3) {
    snippets.push("...");
  }
  return snippets.slice(0, 3);
}

function gradeFromPercentage(pct: number): string {
  if (pct >= 90) return "Grade 9";
  if (pct >= 80) return "Grade 8";
  if (pct >= 70) return "Grade 7";
  if (pct >= 60) return "Grade 6";
  if (pct >= 50) return "Grade 5";
  if (pct >= 40) return "Grade 4";
  if (pct >= 30) return "Grade 3";
  if (pct >= 20) return "Grade 2";
  return "Grade 1";
}

/* ─── Question generation ────────────────────────────────────── */

function generateQuiz(
  selectedTexts: string[],
  mode: QuizMode,
  questionCount: number
): QuizQuestion[] {
  const activeSets = TEXT_SETS.filter((s) => selectedTexts.includes(s.slug));
  const allCharacters = getAllCharacters();
  const allTitles = TEXT_SETS.map((s) => s.title);

  // Gather eligible cards
  let pool: { card: QuoteEntry; set: TextSet }[] = [];
  for (const set of activeSets) {
    for (const card of set.cards) {
      // For "who-said-it" mode, only include cards that have a character
      if (mode === "who-said-it" && !card.character) continue;
      pool.push({ card, set });
    }
  }

  pool = shuffle(pool).slice(0, questionCount);

  return pool.map(({ card, set }, idx) => {
    const qid = `q-${idx}-${card.id}`;

    if (mode === "who-said-it") {
      const correct = card.character!;
      const wrongs = pickRandom(allCharacters, 3, correct);
      return {
        id: qid,
        mode,
        quoteEntry: card,
        sourceText: set.title,
        prompt: `Who said: "${card.quote}"?`,
        correctAnswer: correct,
        options: shuffle([correct, ...wrongs]),
        explanation: `This quote is spoken by ${correct} in ${set.title}${card.act ? ` (${card.act})` : ""}. ${card.analysis}`,
      };
    }

    if (mode === "complete-the-quote") {
      const { blanked, answer } = createBlank(card.quote);
      const wrongs = generateWrongCompletions(answer, set, TEXT_SETS);
      return {
        id: qid,
        mode,
        quoteEntry: card,
        sourceText: set.title,
        prompt: `Complete the quote: "${blanked}"`,
        correctAnswer: answer,
        options: shuffle([answer, ...wrongs]),
        explanation: `The full quote is: "${card.quote}"${card.character ? ` -- ${card.character}` : ""}, ${set.title}. ${card.analysis}`,
      };
    }

    // which-text
    const correct = set.title;
    const wrongs = pickRandom(allTitles, 3, correct);
    return {
      id: qid,
      mode,
      quoteEntry: card,
      sourceText: set.title,
      prompt: `Which text is this quote from? "${card.quote}"`,
      correctAnswer: correct,
      options: shuffle([correct, ...wrongs]),
      explanation: `This quote is from ${set.title} by ${set.author}.${card.character ? ` Spoken by ${card.character}.` : ""} ${card.analysis}`,
    };
  });
}

/* ─── LocalStorage key ───────────────────────────────────────── */

const LS_KEY = "teh-quote-tester";

function loadSavedState(): SavedState {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return { bestScores: {}, totalQuizzes: 0, totalCorrect: 0, totalAnswered: 0 };
}

function saveSavedState(state: SavedState) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

/* ─── Constants ──────────────────────────────────────────────── */

const QUESTION_COUNT = 10;
const TIMER_SECONDS = 30;

const MODE_LABELS: Record<QuizMode, string> = {
  "who-said-it": "Who Said It?",
  "complete-the-quote": "Complete the Quote",
  "which-text": "Which Text?",
};

const MODE_DESCRIPTIONS: Record<QuizMode, string> = {
  "who-said-it": "Identify which character speaks the quote.",
  "complete-the-quote": "Fill in the missing words from the quote.",
  "which-text": "Identify which GCSE text the quote comes from.",
};

/* ─── Component ──────────────────────────────────────────────── */

export default function QuoteTesterPage() {
  /* ── Setup state ── */
  const [mounted, setMounted] = useState(false);
  const [selectedTexts, setSelectedTexts] = useState<string[]>(["macbeth"]);
  const [selectedMode, setSelectedMode] = useState<QuizMode>("who-said-it");
  const [timerEnabled, setTimerEnabled] = useState(false);

  /* ── Quiz state ── */
  const [quizActive, setQuizActive] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerLocked, setAnswerLocked] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  /* ── Timer ── */
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Saved state ── */
  const [saved, setSaved] = useState<SavedState>({
    bestScores: {},
    totalQuizzes: 0,
    totalCorrect: 0,
    totalAnswered: 0,
  });

  /* Load from localStorage */
  useEffect(() => {
    setSaved(loadSavedState());
    setMounted(true);
  }, []);

  /* Timer logic */
  useEffect(() => {
    if (!quizActive || !timerEnabled || answerLocked || quizFinished) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(TIMER_SECONDS);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizActive, timerEnabled, currentIdx, answerLocked, quizFinished]);

  /* Auto-lock when timer runs out */
  useEffect(() => {
    if (timerEnabled && timeLeft === 0 && quizActive && !answerLocked && !quizFinished) {
      handleLockAnswer(null, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  /* Derived */
  const currentQuestion = questions[currentIdx] ?? null;
  const correctCount = results.filter((r) => r.correct).length;
  const percentage = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

  /* ── Handlers ── */

  const toggleText = useCallback((slug: string) => {
    setSelectedTexts((prev) => {
      if (prev.includes(slug)) {
        if (prev.length <= 1) return prev; // Must have at least one
        return prev.filter((s) => s !== slug);
      }
      return [...prev, slug];
    });
  }, []);

  const startQuiz = useCallback(() => {
    const qs = generateQuiz(selectedTexts, selectedMode, QUESTION_COUNT);
    if (qs.length === 0) return;
    setQuestions(qs);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswerLocked(false);
    setResults([]);
    setQuizFinished(false);
    setShowReview(false);
    setQuizActive(true);
    setTimeLeft(TIMER_SECONDS);
  }, [selectedTexts, selectedMode]);

  const handleSelectAnswer = useCallback(
    (answer: string) => {
      if (answerLocked) return;
      setSelectedAnswer(answer);
    },
    [answerLocked]
  );

  const handleLockAnswer = useCallback(
    (overrideAnswer?: string | null, timeExpired = false) => {
      if (!currentQuestion) return;
      const chosen = overrideAnswer !== undefined ? overrideAnswer : selectedAnswer;
      const correct = chosen === currentQuestion.correctAnswer;
      setAnswerLocked(true);
      if (!timeExpired && chosen === null) return; // Don't lock if nothing selected and not time expired
      setResults((prev) => [
        ...prev,
        {
          question: currentQuestion,
          chosenAnswer: chosen,
          correct,
          timeExpired,
        },
      ]);
    },
    [currentQuestion, selectedAnswer]
  );

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      // Quiz over
      setQuizFinished(true);
      setQuizActive(false);

      // Save stats
      const finalResults = results;
      const finalCorrect = finalResults.filter((r) => r.correct).length;
      const pct = Math.round((finalCorrect / finalResults.length) * 100);
      setSaved((prev) => {
        const key = `${selectedTexts.sort().join(",")}-${selectedMode}`;
        const bestScores = { ...prev.bestScores };
        if (!bestScores[key] || pct > bestScores[key]) {
          bestScores[key] = pct;
        }
        const next = {
          bestScores,
          totalQuizzes: prev.totalQuizzes + 1,
          totalCorrect: prev.totalCorrect + finalCorrect,
          totalAnswered: prev.totalAnswered + finalResults.length,
        };
        saveSavedState(next);
        return next;
      });
      return;
    }
    setCurrentIdx((i) => i + 1);
    setSelectedAnswer(null);
    setAnswerLocked(false);
    setTimeLeft(TIMER_SECONDS);
  }, [currentIdx, questions.length, results, selectedTexts, selectedMode]);

  const handleTryAgain = useCallback(() => {
    // Restart same quiz
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswerLocked(false);
    setResults([]);
    setQuizFinished(false);
    setShowReview(false);
    setQuizActive(true);
    setTimeLeft(TIMER_SECONDS);
  }, []);

  const handleNewQuiz = useCallback(() => {
    setQuizActive(false);
    setQuizFinished(false);
    setShowReview(false);
    setQuestions([]);
    setResults([]);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswerLocked(false);
  }, []);

  /* ── Loading state ── */
  if (!mounted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  /* ── Results screen ── */
  if (quizFinished && !showReview) {
    const wrongResults = results.filter((r) => !r.correct);
    return (
      <>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quiz Complete!
          </h1>
        </div>

        {/* Score card */}
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-md">
          <div className="text-6xl font-black text-foreground">{percentage}%</div>
          <div className="mt-2 text-xl font-bold text-primary">{gradeFromPercentage(percentage)}</div>
          <p className="mt-3 text-muted-foreground">
            You got <span className="font-semibold text-foreground">{correctCount}</span> out of{" "}
            <span className="font-semibold text-foreground">{results.length}</span> correct.
          </p>

          {/* Progress bar */}
          <div className="mx-auto mt-5 h-3 w-full max-w-xs overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${percentage}%`,
                background: percentage >= 70 ? "#10b981" : percentage >= 40 ? "#f59e0b" : "#ef4444",
              }}
            />
          </div>

          {/* Feedback */}
          <p className="mt-4 text-sm text-muted-foreground">
            {percentage >= 90
              ? "Outstanding! You really know your quotes."
              : percentage >= 70
                ? "Great work -- keep revising to push even higher."
                : percentage >= 50
                  ? "A solid effort. Review the quotes you missed and try again."
                  : "Keep practising! Use the flashcards to build your knowledge."}
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleTryAgain}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Try Again
            </button>
            <button
              onClick={handleNewQuiz}
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
            >
              New Quiz
            </button>
            {wrongResults.length > 0 && (
              <button
                onClick={() => setShowReview(true)}
                className="rounded-lg border border-primary bg-card px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                Review Wrong Answers ({wrongResults.length})
              </button>
            )}
          </div>
        </div>

        {/* Lifetime stats */}
        <div className="mx-auto mt-8 max-w-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-2xl font-bold text-foreground">{saved.totalQuizzes}</div>
              <div className="text-xs text-muted-foreground">Quizzes Taken</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-2xl font-bold text-foreground">{saved.totalCorrect}</div>
              <div className="text-xs text-muted-foreground">Total Correct</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-2xl font-bold text-foreground">
                {saved.totalAnswered > 0
                  ? Math.round((saved.totalCorrect / saved.totalAnswered) * 100)
                  : 0}
                %
              </div>
              <div className="text-xs text-muted-foreground">Overall Accuracy</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ── Review wrong answers ── */
  if (showReview) {
    const wrongResults = results.filter((r) => !r.correct);
    return (
      <>
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Review Wrong Answers
          </h1>
          <p className="mt-2 text-muted-foreground">
            You got {wrongResults.length} question{wrongResults.length !== 1 ? "s" : ""} wrong.
            Study the explanations below.
          </p>
        </div>

        <div className="space-y-4">
          {wrongResults.map((result, idx) => (
            <div
              key={result.question.id}
              className="overflow-hidden rounded-xl border border-red-200 bg-card shadow-md"
            >
              <div className="border-b border-red-100 bg-red-50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-500">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-red-800">
                    {result.question.prompt}
                  </span>
                </div>
              </div>
              <div className="px-5 py-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-red-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-medium">Your answer:</span>{" "}
                    {result.chosenAnswer ?? <em className="text-muted-foreground">Time expired -- no answer</em>}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-medium">Correct answer:</span>{" "}
                    {result.question.correctAnswer}
                  </span>
                </div>
                <div className="mt-3 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.question.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={handleTryAgain}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Try Again
          </button>
          <button
            onClick={handleNewQuiz}
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
          >
            New Quiz
          </button>
          <button
            onClick={() => setShowReview(false)}
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
          >
            Back to Score
          </button>
        </div>
      </>
    );
  }

  /* ── Active quiz ── */
  if (quizActive && currentQuestion) {
    return (
      <>
        {/* Top bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-primary">
              {MODE_LABELS[selectedMode]}
            </span>
            <h2 className="text-xl font-bold text-foreground">
              Question {currentIdx + 1} of {questions.length}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Score so far */}
            <span className="text-sm font-medium text-muted-foreground">
              Score: {results.filter((r) => r.correct).length} / {results.length}
            </span>
            {/* Timer */}
            {timerEnabled && !answerLocked && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold ${
                  timeLeft <= 10
                    ? "bg-red-500/10 text-red-500"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {timeLeft}s
              </span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
          <p className="text-lg font-semibold text-foreground leading-relaxed">
            {currentQuestion.prompt}
          </p>

          {/* Source text badge */}
          {selectedMode !== "which-text" && (
            <span className="mt-2 inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
              {currentQuestion.sourceText}
            </span>
          )}

          {/* Options */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              let classes =
                "w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition ";

              if (answerLocked) {
                if (isCorrect) {
                  classes += "border-emerald-500 bg-emerald-50 text-emerald-800";
                } else if (isSelected && !isCorrect) {
                  classes += "border-red-400 bg-red-50 text-red-500";
                } else {
                  classes += "border-border bg-muted text-muted-foreground";
                }
              } else if (isSelected) {
                classes += "border-primary bg-primary/5 text-foreground ring-2 ring-primary/20";
              } else {
                classes +=
                  "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer";
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={answerLocked}
                  className={classes}
                >
                  <span className="flex items-center gap-2">
                    {answerLocked && isCorrect && (
                      <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {answerLocked && isSelected && !isCorrect && (
                      <svg className="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation after answer */}
          {answerLocked && (
            <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handleNewQuiz}
              className="text-sm font-medium text-muted-foreground hover:text-muted-foreground transition"
            >
              Quit Quiz
            </button>
            {!answerLocked ? (
              <button
                onClick={() => handleLockAnswer()}
                disabled={selectedAnswer === null}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                {currentIdx + 1 >= questions.length ? "See Results" : "Next Question"}
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

  /* ── Setup screen (default) ── */
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Quote Tester
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Test your knowledge of key GCSE Literature quotes. Choose your texts, pick a quiz mode,
          and see how well you really know your quotations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: configuration */}
        <div className="space-y-6">
          {/* Text selection */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-md">
            <h2 className="text-lg font-bold text-foreground">Choose Your Texts</h2>
            <p className="mt-1 text-sm text-muted-foreground">Select one or more texts to be tested on.</p>
            <div className="mt-4 space-y-2">
              {TEXT_SETS.map((set) => {
                const isActive = selectedTexts.includes(set.slug);
                return (
                  <button
                    key={set.slug}
                    onClick={() => toggleText(set.slug)}
                    className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition ${
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-border"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
                        isActive
                          ? "border-primary bg-primary"
                          : "border-border"
                      }`}
                    >
                      {isActive && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{set.title}</div>
                      <div className="text-xs text-muted-foreground">{set.author}</div>
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {set.cards.length} quotes
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode selection */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-md">
            <h2 className="text-lg font-bold text-foreground">Quiz Mode</h2>
            <div className="mt-4 space-y-2">
              {(Object.keys(MODE_LABELS) as QuizMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition ${
                    selectedMode === mode
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-border"
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      selectedMode === mode
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  >
                    {selectedMode === mode && (
                      <div className="h-2 w-2 rounded-full bg-card" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {MODE_LABELS[mode]}
                    </div>
                    <div className="text-xs text-muted-foreground">{MODE_DESCRIPTIONS[mode]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Timer toggle */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-md">
            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-foreground">Timer</h2>
                <p className="text-sm text-muted-foreground">{TIMER_SECONDS} seconds per question</p>
              </div>
              <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  timerEnabled ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setTimerEnabled((v) => !v)}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-card transition-transform ${
                    timerEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
            </label>
          </div>

          {/* Start button */}
          <button
            onClick={startQuiz}
            className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:shadow-md hover:brightness-110"
          >
            Start Quiz ({QUESTION_COUNT} Questions)
          </button>
        </div>

        {/* Right: stats + tips */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-md">
            <h2 className="text-lg font-bold text-foreground">Your Stats</h2>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{saved.totalQuizzes}</div>
                <div className="text-xs text-muted-foreground">Quizzes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{saved.totalCorrect}</div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {saved.totalAnswered > 0
                    ? Math.round((saved.totalCorrect / saved.totalAnswered) * 100)
                    : 0}
                  %
                </div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-bold text-foreground">Quiz Tips</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Start with one text</strong> and work through all three modes
                  before mixing texts together.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Use the timer</strong> to simulate exam pressure. In the real
                  exam, you need to recall quotes quickly.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Review wrong answers carefully.</strong> Read the explanations and
                  then try the quiz again.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Combine with flashcards.</strong> Use the{" "}
                  <Link href="/resources/study-tools/flashcards" className="font-semibold text-primary underline underline-offset-2 hover:text-foreground">
                    Quote Flashcards
                  </Link>{" "}
                  tool to learn quotes before testing yourself here.
                </span>
              </li>
            </ul>
          </div>

          {/* Mode info */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-md">
            <h2 className="text-lg font-bold text-foreground">About the Modes</h2>
            <dl className="mt-3 space-y-3">
              <div>
                <dt className="text-sm font-semibold text-foreground">Who Said It?</dt>
                <dd className="text-sm text-muted-foreground">
                  You see a quote and must identify the character who speaks it. Tests your
                  knowledge of which characters are associated with key ideas.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">Complete the Quote</dt>
                <dd className="text-sm text-muted-foreground">
                  A section of the quote is blanked out and you must select the correct missing
                  words. Tests precise recall of quotation wording.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">Which Text?</dt>
                <dd className="text-sm text-muted-foreground">
                  You see a quote and must identify which GCSE text it comes from. Best attempted
                  with multiple texts selected.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
