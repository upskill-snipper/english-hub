// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'inspector-calls-quotes',
  title: 'An Inspector Calls - Key Quotations',
  description: 'Essential quotes for GCSE Literature',
  category: 'Literature',
  board: 'AQA',
  cards: [
    {
      id: 'ic-1',
      front: '"We are members of one body. We are responsible for each other."',
      back: `Act 3. The Inspector\'s final speech. "One body" = organic metaphor for society. Directly states Priestley\'s socialist message. Echoes Christian teaching - deliberate, as the Birlings claim to be moral.`,
    },
    {
      id: 'ic-2',
      front:
        '"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"',
      back: `Act 3. The Inspector\'s warning. Written in 1945, set in 1912 - Priestley\'s audience knew the "fire and blood" meant WWI and WWII. Tricolon builds to "anguish." Still relevant today.`,
    },
    {
      id: 'ic-3',
      front: '"The Titanic - unsinkable, absolutely unsinkable"',
      back: `Act 1. Birling\'s confident prediction. Dramatic irony - the audience knows the Titanic sank. Undermines everything Birling says. If he is wrong about this, he is wrong about everything.`,
    },
    {
      id: 'ic-4',
      front: '"A man has to make his own way - has to look after himself"',
      back: `Act 1. Birling\'s capitalist philosophy. Direct opposite of the Inspector\'s message. "His own" and "himself" = entirely selfish. Birling sees community as weakness.`,
    },
    {
      id: 'ic-5',
      front: '"But these girls aren\'t cheap labour - they\'re people"',
      back: `Act 1. Sheila challenging her father. Shows her growing awareness. "People" = asserting the workers\' humanity. This is the beginning of Sheila\'s moral awakening.`,
    },
    {
      id: 'ic-6',
      front: '"I\'ll never, never do it again to anybody"',
      back: `Act 2. Sheila\'s response after hearing about her role in Eva\'s death. Repetition of "never" = genuine remorse. Contrast with her parents who refuse to accept blame. Sheila represents hope for change.`,
    },
    {
      id: 'ic-7',
      front: '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
      back: `Act 2. Eric to Birling. Reveals the family\'s dysfunction. Birling is a failure as a father - too busy with business to connect with his son. Priestley shows that capitalism damages families.`,
    },
    {
      id: 'ic-8',
      front: '"I was in that state when a chap easily turns nasty"',
      back: `Act 3. Eric about the night he forced himself on Eva. "That state" = drunk. Euphemism for assault. Eric takes some responsibility but also deflects it. Priestley shows how privilege enables harm.`,
    },
    {
      id: 'ic-9',
      front:
        '"She was a pretty, lively sort of girl... and she needed not only money but advice, sympathy, friendliness"',
      back: `Act 2. Gerald describing Eva/Daisy. Shows he genuinely cared - but also that his "care" came from a position of power. He rescued her but also controlled her.`,
    },
    {
      id: 'ic-10',
      front: '"The girl\'s dead and we all helped to kill her"',
      back: `Act 3. The Inspector\'s blunt accusation. Collective guilt. "We all" = no one can escape responsibility. The verb "kill" - not "contributed to her death" - is deliberately shocking.`,
    },
    {
      id: 'ic-11',
      front: '"I\'m ashamed of you as well - yes, both of you"',
      back: `Act 3. Sheila to her parents. Generational reversal - the child judges the parents. "Ashamed" = strong moral condemnation. Priestley positions the younger generation as the moral future.`,
    },
    {
      id: 'ic-12',
      front: '"Everything\'s all right now, Sheila. What about this ring?"',
      back: `Act 3. Gerald trying to return to normal. The ring symbolises their superficial relationship. Gerald has learned nothing. Priestley shows that some people will never change.`,
    },
  ],
}

export default deck
