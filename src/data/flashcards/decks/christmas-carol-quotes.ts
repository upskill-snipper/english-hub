// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'christmas-carol-quotes',
  title: 'A Christmas Carol - Key Quotations',
  description: 'Essential quotes for GCSE Literature',
  category: 'Literature',
  board: 'AQA',
  cards: [
    {
      id: 'cc-1',
      front: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
      back: `Stave 1. Introduces Scrooge as miserly and mean. "Tight-fisted" = unwilling to spend. "Grindstone" = relentless, mechanical labour. Dickens establishes Scrooge as everything wrong with Victorian capitalism.`,
    },
    {
      id: 'cc-2',
      front: '"Solitary as an oyster"',
      back: `Stave 1. Simile showing Scrooge\'s isolation. Oysters are hard-shelled and closed off - like Scrooge. But oysters also contain pearls - hinting at the goodness hidden within.`,
    },
    {
      id: 'cc-3',
      front: '"Are there no prisons? Are there no workhouses?"',
      back: `Stave 1. Scrooge\'s response to being asked for charity. Rhetorical questions. Shows his Malthusian attitude - he believes the poor deserve punishment, not help. Dickens satirises this Victorian mindset.`,
    },
    {
      id: 'cc-4',
      front:
        '"If they would rather die, they had better do it, and decrease the surplus population"',
      back: `Stave 1. Scrooge echoing Thomas Malthus\'s theory. "Surplus population" = the poor are expendable. This is Scrooge at his worst - completely dehumanising the poor. The Ghost of Christmas Present throws this back at him.`,
    },
    {
      id: 'cc-5',
      front: '"I wear the chain I forged in life"',
      back: `Stave 1. Marley\'s ghost. Metaphor: the chain represents his sins and selfishness. "Forged" = he created it himself. Message: we are responsible for our own moral choices. The chain gets heavier with every selfish act.`,
    },
    {
      id: 'cc-6',
      front: '"Mankind was my business"',
      back: `Stave 1. Marley\'s ghost. The most important line in the novella. "Business" has a double meaning - Marley now realises that caring for others should have been his real purpose, not making money.`,
    },
    {
      id: 'cc-7',
      front: '"A solitary child, neglected by his friends"',
      back: `Stave 2. Ghost of Christmas Past shows young Scrooge alone at school. "Solitary" and "neglected" generate sympathy. Explains WHY Scrooge became cold - he was hurt first. Dickens asks the reader to understand, not just judge.`,
    },
    {
      id: 'cc-8',
      front: '"Another idol has displaced me... a golden one"',
      back: `Stave 2. Belle breaking off the engagement. "Idol" = something worshipped. Money has replaced love. "Golden" - ironic because gold should be precious but here it represents loss.`,
    },
    {
      id: 'cc-9',
      front: '"God bless us, every one!"',
      back: `Stave 3. Tiny Tim\'s famous line. Inclusive - "every one" means all of society, not just the rich. Tim\'s generosity contrasts with Scrooge\'s selfishness. He blesses even those who have nothing to do with him.`,
    },
    {
      id: 'cc-10',
      front: '"If these shadows remain unaltered by the Future, the child will die"',
      back: `Stave 3. The Ghost of Christmas Present about Tiny Tim. "Shadows" = visions of what may come. The conditional "if" gives Scrooge a choice - and therefore responsibility. Dickens makes the consequence of inaction personal.`,
    },
    {
      id: 'cc-11',
      front: '"This boy is Ignorance. This girl is Want."',
      back: `Stave 3. Two wretched children hidden under the Ghost\'s robe. Allegory for society\'s failures. "Beware them both" - Dickens\'s direct message to Victorian readers. Ignorance is the most dangerous because uneducated people cannot help themselves.`,
    },
    {
      id: 'cc-12',
      front: '"I will honour Christmas in my heart, and try to keep it all the year"',
      back: `Stave 4. Scrooge\'s promise of change. "Honour" = respect and celebrate. "All the year" = not just at Christmas. This transformation is Dickens\'s model for social reform - change must be sustained, not seasonal.`,
    },
    {
      id: 'cc-13',
      front:
        '"He became as good a friend, as good a master, and as good a man, as the good old city knew"',
      back: `Stave 5. Tricolon showing Scrooge\'s complete transformation. "Friend, master, man" - personal, professional, moral. Dickens shows that change is possible at any age.`,
    },
  ],
}

export default deck
