// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'jekyll-hyde-quotes',
  title: 'Jekyll and Hyde - Key Quotations',
  description: 'Essential quotes for GCSE Literature',
  category: 'Literature',
  board: 'AQA',
  cards: [
    {
      id: 'jh-1',
      front: '"Mr Hyde was pale and dwarfish, he gave an impression of deformity"',
      back: `Chapter 1. Hyde\'s appearance reflects Victorian ideas that evil shows physically (physiognomy). "Dwarfish" = smaller, less evolved. "Impression" = people sense something wrong but cannot explain it.`,
    },
    {
      id: 'jh-2',
      front: '"Trampled calmly over the child\'s body"',
      back: `Chapter 1. Hyde\'s first act of violence. "Trampled" = animalistic, brutal. "Calmly" = the most disturbing word - no remorse. The juxtaposition shows Hyde lacks basic human empathy.`,
    },
    {
      id: 'jh-3',
      front: '"If he be Mr Hyde, I shall be Mr Seek"',
      back: `Chapter 2. Utterson\'s wordplay. Foreshadows the pursuit of truth. Also echoes "hide and seek" - a child\'s game, but here the stakes are deadly.`,
    },
    {
      id: 'jh-4',
      front: '"Man is not truly one, but truly two"',
      back: `Chapter 10. Jekyll\'s central revelation. Duality of human nature - good and evil coexist in everyone. Stevenson challenges Victorian hypocrisy: people pretended to be good while hiding their desires.`,
    },
    {
      id: 'jh-5',
      front: '"My devil had been long caged, he came out roaring"',
      back: `Chapter 10. Jekyll describing Hyde breaking free. "Devil" = religious imagery of evil. "Caged" = repression. "Roaring" = uncontrollable, animalistic. Stevenson suggests repression makes evil stronger.`,
    },
    {
      id: 'jh-6',
      front:
        '"The pleasures which I made haste to seek in my disguise were, as I have said, undignified"',
      back: `Chapter 10. Jekyll admits to enjoying Hyde\'s freedom. "Disguise" = Hyde is a mask. "Undignified" = a euphemism - Stevenson lets Victorian readers imagine the worst. The vagueness makes it more disturbing.`,
    },
    {
      id: 'jh-7',
      front: '"With ape-like fury"',
      back: `Chapter 4. Hyde murdering Sir Danvers Carew. Simile comparing Hyde to a primate. Darwin\'s theory of evolution was controversial - Hyde represents devolution, a return to animal instinct.`,
    },
    {
      id: 'jh-8',
      front:
        '"The door... which was equipped with neither bell nor knocker, was blistered and distained"',
      back: `Chapter 1. The door to Jekyll\'s laboratory. Symbolises the hidden, shameful side of respectable life. "Blistered and distained" = decayed, neglected - like the morality it conceals.`,
    },
    {
      id: 'jh-9',
      front: '"I learned to recognise the thorough and primitive duality of man"',
      back: `Chapter 10. "Primitive" = primal, basic. "Thorough" = complete, inescapable. Jekyll discovers that duality is not a flaw - it is fundamental to human nature.`,
    },
    {
      id: 'jh-10',
      front: '"I was slowly losing hold of my original and better self"',
      back: `Chapter 10. Jekyll losing control. "Original" = the real, authentic self. "Better" = moral judgement. "Slowly" = gradual, creeping loss - more frightening than sudden change.`,
    },
  ],
}

export default deck
