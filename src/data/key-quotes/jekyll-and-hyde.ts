/**
 * Moved out of src/app/revision/texts/jekyll-and-hyde/key-quotes/page.tsx on 24
 * October 2026 so the text quests can read it (src/lib/games/quest/build.ts).
 * The page renders it as before.
 */

import type { FlatKeyQuote } from './types'

/* ─── Types ──────────────────────────────────────────────────── */

export type KeyQuote = {
  quote: string
  speaker: string
  chapter: string
  analysis: string
}

export type ThemeQuotes = {
  theme: string
  colour: string
  quotes: KeyQuote[]
}

/* ─── Data ───────────────────────────────────────────────────── */

// Corrected 2 October 2026 against the held edition (Project Gutenberg #43,
// src/data/full-texts/jekyll-and-hyde.ts): "If I am the chief of sinners" is Chapter 6,
// not 10.
export const QUOTES_BY_THEME: ThemeQuotes[] = [
  {
    theme: 'Duality of Man',
    colour: 'bg-emerald-400',
    quotes: [
      {
        quote: 'Man is not truly one, but truly two.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll\'s central thesis, delivered with axiomatic force. The repetition of "truly" insists on authenticity. Yet the statement is also self-serving: it frames Jekyll\'s experiment as philosophical inquiry rather than moral transgression.',
      },
      {
        quote: 'I learned to recognise the thorough and primitive duality of man.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          '"Primitive" locates duality before civilisation -- it cannot be educated or moralised away. "Thorough" means complete: every aspect of human nature is divided. A Freudian critical lens can be applied retrospectively, though Freud\'s model of the unconscious came decades after Stevenson.',
      },
      {
        quote:
          'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'The passive constructions suggest involuntary change, like addiction. The repetition of "slowly" creates an insidious rhythm. "Incorporated" -- literally "made into one body" -- is darkly ironic: Jekyll wanted separation but gets merging.',
      },
      {
        quote: 'All human beings, as we meet them, are commingled out of good and evil.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          '"Commingled" means thoroughly mixed -- the two cannot be divided. The universal "all human beings" extends the argument to the reader. Stevenson\'s point is that duality is the human condition, not Jekyll\'s personal failing.',
      },
      {
        quote: 'I bring the life of that unhappy Henry Jekyll to an end.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll refers to himself in the third person, demonstrating that his identity has already fragmented beyond repair. "That unhappy Henry Jekyll" distances him from himself. The statement functions as both confession and suicide note.',
      },
    ],
  },
  {
    theme: 'Repression and Victorian Society',
    colour: 'bg-blue-400',
    quotes: [
      {
        quote:
          'I concealed my pleasures; and... I stood already committed to a profound duplicity of life.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Concealment, not pleasure, is Jekyll\'s defining behaviour. "Profound duplicity" indicts the social system that taught him to hide. Stevenson shows that Victorian respectability manufactures hypocrisy as a matter of course.',
      },
      {
        quote:
          'Many a man would have even blazoned such irregularities as I was guilty of; but from the high views that I had set before me, I regarded and hid them with an almost morbid sense of shame.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll\'s "irregularities" are never specified. "Morbid sense of shame" connects shame to sickness. The irony is that his "high views" -- his moral ambitions -- produce the very duplicity they claim to combat.',
      },
      {
        quote:
          'No sir, I make it a rule of mine: the more it looks like Queer Street, the less I ask.',
        speaker: 'Enfield',
        chapter: 'Chapter 1',
        analysis:
          'Enfield\'s "rule" of deliberate ignorance embodies the Victorian code of silence. "Queer Street" (trouble) is precisely where questions are most needed. Stevenson shows how gentlemanly discretion enables evil to operate unchallenged.',
      },
      {
        quote:
          'Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile... lean, long, dusty, dreary...',
        speaker: 'Narrator',
        chapter: 'Chapter 1',
        analysis:
          'The opening description establishes Utterson as emotionally repressed. "Never lighted by a smile" suggests permanent suppression of feeling -- a milder version of Jekyll\'s self-denial. Even the novella\'s most sympathetic character is defined by what he hides.',
      },
    ],
  },
  {
    theme: 'Science and Morality',
    colour: 'bg-amber-400',
    quotes: [
      {
        quote: 'I hesitated long before I put this theory to the test of practice.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll acknowledges hesitation but proceeds anyway. "Theory" versus "practice" marks the boundary between thinking about evil and enacting it. His hesitation makes his decision more culpable, not less: he knew the risk.',
      },
      {
        quote:
          'The temptation of a discovery so singular and profound at last overcame the suggestions of alarm.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          '"Temptation" and "suggestions of alarm" frame the scientific decision in moral terms. Jekyll is a secular Eve, unable to resist forbidden knowledge. Stevenson presents unrestrained curiosity as a form of sin.',
      },
      {
        quote:
          'O God! I screamed, and O God! again and again; for there before my eyes... there stood Henry Jekyll!',
        speaker: 'Lanyon',
        chapter: 'Chapter 9',
        analysis:
          'Lanyon\'s horror at witnessing the transformation represents conventional science confronting the unimaginable. The repetition of "O God!" conveys spiritual as well as intellectual shock. The experience kills Lanyon: some knowledge is literally fatal.',
      },
      {
        quote:
          'This was the shocking thing; that the slime of the pit seemed to utter cries and voices; that the amorphous dust gesticulated and sinned.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll describes the transformation in Gothic, almost biblical language. "Slime of the pit" evokes Hell. "Amorphous dust" reduces human identity to formlessness. Stevenson elevates the experiment from chemistry to theology: Jekyll has violated a sacred boundary.',
      },
    ],
  },
  {
    theme: 'Good vs Evil',
    colour: 'bg-rose-400',
    quotes: [
      {
        quote:
          'I felt younger, lighter, happier in body; within I was conscious of a heady recklessness.',
        speaker: 'Jekyll as Hyde',
        chapter: 'Chapter 10',
        analysis:
          'The first transformation feels good. Evil is experienced as liberation -- younger, lighter, freer. "Heady recklessness" suggests intoxication. Stevenson makes evil seductive to explain why it is so hard to resist.',
      },
      {
        quote:
          'The pleasures which I made haste to seek in my disguise were, as I have said, undignified; I would scarce use a harder term.',
        speaker: 'Jekyll',
        chapter: 'Chapter 10',
        analysis:
          'Jekyll euphemises his sins as merely "undignified." The vagueness forces the reader to imagine the worst. The minimising phrase "scarce use a harder term" is either honest self-assessment or dangerous self-deception.',
      },
      {
        quote: 'If I am the chief of sinners, I am the chief of sufferers also.',
        speaker: 'Jekyll',
        chapter: 'Chapter 6',
        analysis:
          "Jekyll positions himself as both perpetrator and victim. The balanced clause structure equates sin and suffering, which evades moral responsibility. Stevenson invites the reader to question whether Jekyll's pain excuses his crimes.",
      },
      {
        quote:
          'There is something wrong with his appearance; something displeasing, something down-right detestable.',
        speaker: 'Enfield',
        chapter: 'Chapter 1',
        analysis:
          "The triple escalation creates mounting unease without naming the source. Stevenson makes evil unnameable -- felt instinctively, beyond rational description. This technique is central to the novella's Gothic horror.",
      },
      {
        quote: "Satan's signature upon a face.",
        speaker: 'Utterson',
        chapter: 'Chapter 2',
        analysis:
          "Hyde's face is read as a diabolical text. The metaphor connects evil to the visible body, reflecting the Victorian pseudo-science of physiognomy. Stevenson both uses and critiques this: Hyde does look evil, but his evil is deeper than appearance.",
      },
    ],
  },
  {
    theme: 'Secrecy and Silence',
    colour: 'bg-violet-400',
    quotes: [
      {
        quote: 'If he be Mr. Hyde... I shall be Mr. Seek.',
        speaker: 'Utterson',
        chapter: 'Chapter 2',
        analysis:
          'The pun frames the narrative as a game of concealment. "Hyde/Seek" encapsulates the novella\'s structure: truth is hidden, and the reader must seek it. The children\'s game reference trivialises a deadly serious investigation.',
      },
      {
        quote:
          'The door, which was equipped with neither bell nor knocker, was blistered and distained.',
        speaker: 'Narrator',
        chapter: 'Chapter 1',
        analysis:
          'The sinister back door lacks any means of announcing a visitor -- it is designed for secrecy. "Blistered and distained" makes moral decay physical. The door is the novella\'s central symbol: the threshold between the respectable and the hidden.',
      },
      {
        quote: 'Let us make a bargain never to refer to this again.',
        speaker: 'Enfield',
        chapter: 'Chapter 1',
        analysis:
          'The "bargain" formalises silence as a social contract between gentlemen. "Never" is absolute. Stevenson shows that Victorian discretion is not courtesy but active conspiracy to ignore disturbing truths.',
      },
      {
        quote:
          'I have had a shock... and I shall never recover... I sometimes think if we knew all, we should be more glad to get away.',
        speaker: 'Lanyon',
        chapter: 'Chapter 6',
        analysis:
          'Lanyon\'s broken, cryptic language models the novella\'s own method: truth is disclosed in fragments, never fully. "If we knew all" suggests that complete knowledge would be unbearable. Stevenson presents ignorance as a form of self-preservation.',
      },
    ],
  },
  {
    theme: 'Violence and Respectability',
    colour: 'bg-red-400',
    quotes: [
      {
        quote:
          'With ape-like fury, he was trampling his victim under foot and hailing down a storm of blows.',
        speaker: 'Narrator',
        chapter: 'Chapter 4',
        analysis:
          '"Ape-like" connects Hyde to Darwinian regression -- the animal within the civilised man. "Storm of blows" makes violence elemental. "Trampling" and "under foot" reduce the victim to something beneath Hyde\'s feet. Stevenson presents the murder as de-evolution.',
      },
      {
        quote: 'The stick... had broken in the middle under the stress of this insensate cruelty.',
        speaker: 'Narrator',
        chapter: 'Chapter 4',
        analysis:
          'The gentleman\'s cane breaks under uncivilised force. The civilised instrument is destroyed by the savagery it conceals. "Insensate" means beyond reason -- violence has left the human realm entirely.',
      },
      {
        quote: 'The bones were audibly shattered and the body jumped upon the roadway.',
        speaker: 'Narrator',
        chapter: 'Chapter 4',
        analysis:
          '"Audibly shattered" forces the reader to hear the violence. "Jumped" gives the dead body an uncanny, puppet-like animation. Stevenson\'s forensic precision creates the novella\'s most viscerally disturbing moment.',
      },
    ],
  },
]

export const FLAT: FlatKeyQuote[] = QUOTES_BY_THEME.flatMap((section) => section.quotes)
  .filter((q) => q.analysis)
  .map((q) => ({ quote: q.quote, speaker: q.speaker, where: q.chapter, analysis: q.analysis }))
