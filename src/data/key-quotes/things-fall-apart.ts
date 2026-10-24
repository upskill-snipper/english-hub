/**
 * Moved out of src/app/revision/texts/things-fall-apart/key-quotes/page.tsx on
 * 24 October 2026 so the text quests can read it
 * (src/lib/games/quest/build.ts). The page renders it as before.
 */

import type { FlatKeyQuote } from './types'

/* ── Quote data ──────────────────────────────────────────────────────── */

export type KeyQuote = {
  id: number
  quote: string
  speaker: string
  part: string
  context: string
  analysis: string
  themes: string[]
}

export const quotes: KeyQuote[] = [
  {
    id: 1,
    quote: '"the art of conversation ... proverbs are the palm-oil with which words are eaten."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 1',
    context: 'The opening pages, establishing Igbo culture before any colonial contact.',
    analysis:
      "Achebe's most quoted line establishes the sophistication of Igbo culture from the first page. The metaphor elevates speech to the status of a shared meal -- language is nourishment, and proverbs are its richest ingredient. The sentence is itself an example of the technique it describes: an elegant, proverbial statement about the value of proverbs.",
    themes: ['Language & Communication', 'Tradition vs Change'],
  },
  {
    id: 2,
    quote: '"When the moon is shining the cripple becomes hungry for a walk."',
    speaker: 'Narrator (Igbo proverb)',
    part: 'Part 1, Chapter 2',
    context:
      'The narrator sets a quiet, dark night against moonlit nights, when even the old remember their youth.',
    analysis:
      "One of many Igbo proverbs Achebe embeds to demonstrate the culture's rhetorical richness. The proverb celebrates beauty's power to inspire even the most constrained. Achebe uses it to immerse the reader in an Igbo way of thinking -- poetic, metaphorical, rooted in observation of the natural world.",
    themes: ['Language & Communication', 'Tradition vs Change'],
  },
  {
    id: 3,
    quote: '"Okonkwo was clearly cut out for great things."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 1',
    context: "Early description of Okonkwo's rise from poverty to prominence.",
    analysis:
      "The early promise that the novel systematically dismantles. Achebe sets up a trajectory of greatness only to show it collapse under the weight of Okonkwo's own rigidity and the colonial invasion. The reader invests in his success, making his destruction more painful.",
    themes: ['Fate & Chi', 'Masculinity & Fear'],
  },
  {
    id: 4,
    quote: '"He was afraid of being thought weak."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 7',
    context: 'The narrator explains why Okonkwo kills Ikemefuna.',
    analysis:
      "The novel's key character insight, stated with devastating simplicity. Achebe identifies fear -- not strength -- as the driving force behind Okonkwo's aggression. Every act of violence, from the beating of his wives to the killing of Ikemefuna, can be traced back to the fear this sentence names.",
    themes: ['Masculinity & Fear'],
  },
  {
    id: 5,
    quote: '"His whole life was dominated by fear, the fear of failure and of weakness."',
    speaker: 'Narrator',
    part: 'Part 1, Chapter 2',
    context: "Expanding on Okonkwo's psychological portrait.",
    analysis:
      'Achebe makes the diagnosis explicit. The repetition of "fear" hammers the point: Okonkwo\'s ambition is avoidance, not aspiration. He runs from his father\'s image rather than toward his own identity. His strength is reactive, not generative.',
    themes: ['Masculinity & Fear', 'Fate & Chi'],
  },
  {
    id: 6,
    quote: '"When a man says yes his chi says yes also."',
    speaker: 'Narrator (Igbo proverb)',
    part: 'Part 1, Chapter 4',
    context: 'The proverb establishing the relationship between human will and fate.',
    analysis:
      "The Igbo proverb suggests that willpower and destiny are aligned -- effort determines outcome. Achebe establishes this as Okonkwo's worldview, then spends the rest of the novel testing it to destruction. The proverb is both a statement of philosophy and a trap.",
    themes: ['Fate & Chi'],
  },
  {
    id: 7,
    quote: '"He could hardly imagine that Okonkwo was not his real father."',
    speaker: 'Narrator on Ikemefuna',
    part: 'Part 1, Chapter 7',
    context:
      "Ikemefuna's thought on the walk into the forest, when he believes he is being taken home.",
    analysis:
      'Achebe establishes the depth of the father-son bond to make its destruction devastating. The adoption is genuine on both sides. When Okonkwo kills Ikemefuna, the reader understands it as an act of self-mutilation -- he destroys what he loves most to avoid appearing weak.',
    themes: ['Masculinity & Fear', 'Tradition vs Change'],
  },
  {
    id: 8,
    quote: '"My father, they have killed me!"',
    speaker: 'Ikemefuna',
    part: 'Part 1, Chapter 7',
    context: "Ikemefuna's last words as he is struck down in the forest.",
    analysis:
      'The novel\'s most devastating line. Six words concentrate trust, betrayal, love, and horror. Ikemefuna calls Okonkwo "father" at the moment of death -- the child trusts the man who kills him. Achebe\'s restraint makes the horror more effective: no elaboration is needed.',
    themes: ['Masculinity & Fear', 'Tradition vs Change', 'Justice & Power'],
  },
  {
    id: 9,
    quote: '"When did you become a shivering old woman?"',
    speaker: 'Okonkwo to himself',
    part: 'Part 1, Chapter 8',
    context: "Okonkwo's internal monologue after Ikemefuna's death, as grief threatens to surface.",
    analysis:
      'Okonkwo genders his grief as feminine weakness. Achebe shows how toxic masculinity transforms legitimate emotion into shame. The self-addressed question reveals an internal dialogue Okonkwo can never win: his humanity is always at war with his idea of manhood.',
    themes: ['Masculinity & Fear'],
  },
  {
    id: 10,
    quote: '"She should have been a boy."',
    speaker: 'Okonkwo on Ezinma',
    part: 'Part 1, Chapter 8',
    context: "Okonkwo reflects on his favourite daughter's boldness and intelligence.",
    analysis:
      "Okonkwo's highest compliment reveals his deepest limitation. He can only value Ezinma by imagining her as male. Achebe exposes the logical dead-end of a worldview that devalues femininity: Okonkwo loves what Ezinma is but cannot say so within his own framework.",
    themes: ['Masculinity & Fear'],
  },
  {
    id: 11,
    quote: '"I would neither dispute it nor be the one to do it."',
    speaker: 'Obierika',
    part: 'Part 1, Chapter 8',
    context:
      "Obierika discussing Ikemefuna's death with Okonkwo, and what he would do if the Oracle demanded the death of his own son.",
    analysis:
      "Obierika finds a moral middle ground that Okonkwo cannot imagine. He respects tradition without abandoning his conscience. Achebe's subtle argument: Igbo culture has space for ethical nuance, but Okonkwo is too rigid to occupy it.",
    themes: ['Tradition vs Change', 'Justice & Power'],
  },
  {
    id: 12,
    quote: '"The clan was like a lizard; if it lost its tail ... soon grew another."',
    speaker: 'Narrator',
    part: 'Part 3, Chapter 20',
    context:
      'Okonkwo returns from exile to find that, while he was away, others have taken his place in the clan.',
    analysis:
      'Achebe uses an Igbo metaphor to describe cultural adaptability. The proverb suggests the clan can absorb loss and regenerate. But the colonial intrusion will prove to be an amputation the lizard cannot survive -- a loss too deep for regrowth.',
    themes: ['Tradition vs Change', 'Fate & Chi'],
  },
  {
    id: 13,
    quote: '"what is good among one people is an abomination with others."',
    speaker: 'Uchendu',
    part: 'Part 2, Chapter 15',
    context:
      "Uchendu responds to Obierika's account of the destruction of Abame, during Okonkwo's exile in Mbanta.",
    analysis:
      'Uchendu articulates cultural relativism from within Igbo thought itself. Achebe uses an elder to show that the culture already possesses the intellectual tools to understand difference -- countering the colonial claim that only Europeans possess philosophical sophistication.',
    themes: ['Tradition vs Change', 'Colonialism & Cultural Destruction'],
  },
  {
    id: 14,
    quote: '"He felt a relief within as the hymn poured into his parched soul."',
    speaker: 'Narrator on Nwoye',
    part: 'Part 2, Chapter 16',
    context: "Nwoye's first encounter with the Christian missionaries and their music.",
    analysis:
      'Nwoye\'s conversion is sensory and emotional, not intellectual. "Parched" implies long deprivation -- his father\'s rigidity has left him spiritually starving. Achebe shows that Christianity succeeds by offering emotional sustenance to those Igbo culture has wounded.',
    themes: ['Religion', 'Tradition vs Change'],
  },
  {
    id: 15,
    quote: '"Living fire begets cold, impotent ash."',
    speaker: "Narrator on Okonkwo's view of Nwoye",
    part: 'Part 2, Chapter 17',
    context: "Okonkwo's bitter assessment of his son after Nwoye's conversion.",
    analysis:
      'Okonkwo sees his son as proof of hereditary failure. The irony is that Okonkwo\'s own "fire" -- his violence and contempt -- is what created the "ash." Achebe shows how fear of producing weakness produces the very alienation feared. The metaphor is self-fulfilling prophecy.',
    themes: ['Masculinity & Fear', 'Religion'],
  },
  {
    id: 16,
    quote: '"He has put a knife on the things that held us together ... fallen apart."',
    speaker: 'Obierika',
    part: 'Part 3, Chapter 20',
    context:
      'Obierika reflects to Okonkwo on the impact of colonialism after his return from exile.',
    analysis:
      'Obierika directly echoes the novel\'s title. The "knife" metaphor suggests deliberate cutting -- colonialism is not an accident but an act of violence. Achebe gives the diagnosis to his most reflective character; the tragedy is that Okonkwo, who hears it, can only answer with more violence -- precisely what the colonisers want.',
    themes: ['Colonialism & Cultural Destruction', 'Tradition vs Change'],
  },
  {
    id: 17,
    quote: '"The white man is very clever... our clan can no longer act like one."',
    speaker: 'Obierika',
    part: 'Part 3, Chapter 20',
    context: 'Obierika analyses the colonial strategy with Okonkwo.',
    analysis:
      "The most precise diagnosis of the divide-and-rule strategy in the novel. Achebe uses Obierika's intelligence to show that the Igbo understood what was happening but lacked the collective will to resist once the community was already fragmented.",
    themes: ['Colonialism & Cultural Destruction'],
  },
  {
    id: 18,
    quote: '"Does the white man understand our custom about land?"',
    speaker: 'Okonkwo',
    part: 'Part 3, Chapter 20',
    context:
      'Okonkwo asks whether the colonial court can understand Igbo law; Obierika answers him.',
    analysis:
      'The question exposes the fundamental absurdity of colonial justice: foreigners who do not understand local customs are adjudicating disputes rooted in generations of tradition. The answer is no -- and the colonisers have no interest in learning.',
    themes: ['Justice & Power', 'Colonialism & Cultural Destruction'],
  },
  {
    id: 19,
    quote: '"He saw things as black and white. And black was evil."',
    speaker: 'Narrator on Reverend Smith',
    part: 'Part 3, Chapter 22',
    context: "Describing the fundamentalism of Mr Brown's successor.",
    analysis:
      'Achebe uses the colour metaphor to expose the racism embedded in missionary theology. "Black" operates on both literal and figurative levels -- Smith cannot see Igbo culture as anything other than darkness to be dispelled. The sentence structure is deliberately simple, mirroring Smith\'s simplistic worldview.',
    themes: ['Colonialism & Cultural Destruction', 'Religion'],
  },
  {
    id: 20,
    quote: '"one of the greatest men in Umuofia. You drove him to kill himself."',
    speaker: 'Obierika to the District Commissioner',
    part: 'Part 3, Chapter 25',
    context: "Obierika's accusation after Okonkwo's body is discovered.",
    analysis:
      "Obierika delivers the novel's moral verdict. He reclaims Okonkwo's death from the colonial record and places blame where it belongs. The accusation is direct, simple, and unanswerable. Achebe uses Obierika to insist that Okonkwo's life matters on its own terms.",
    themes: ['Colonialism & Cultural Destruction', 'Masculinity & Fear'],
  },
  {
    id: 21,
    quote: '"One could almost write a whole chapter on him. ... but a reasonable paragraph."',
    speaker: 'District Commissioner',
    part: 'Part 3, Chapter 25',
    context: "The Commissioner considers how much space Okonkwo's story deserves in his book.",
    analysis:
      "The Commissioner reduces a human tragedy to a matter of editorial length. Achebe uses this casual calculation to show that colonialism's deepest violence is narrative: the power to decide whose story matters and how much space it deserves.",
    themes: ['Colonialism & Cultural Destruction', 'Language & Communication'],
  },
  {
    id: 22,
    quote: '"The Pacification of the Primitive Tribes of the Lower Niger."',
    speaker: "District Commissioner's book title",
    part: 'Part 3, Chapter 25',
    context: "The novel's final line -- the title of the Commissioner's planned book.",
    analysis:
      'Every word is loaded: "Pacification" disguises violence as peace; "Primitive" denies the culture\'s complexity; "Tribes" reduces a civilisation to an ethnographic category; "Lower Niger" erases specificity. Achebe\'s entire novel exists as a refutation of this title.',
    themes: ['Colonialism & Cultural Destruction', 'Language & Communication', 'Justice & Power'],
  },
]

export const FLAT: FlatKeyQuote[] = quotes
  .filter((q) => q.analysis)
  .map((q) => ({ quote: q.quote, speaker: q.speaker, where: q.part, analysis: q.analysis }))
