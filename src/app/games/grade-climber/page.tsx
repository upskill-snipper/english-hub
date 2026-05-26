'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import type { GCSEGrade } from '@/lib/grades'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ─── Question Bank (155+ across grade levels) ─────────────────────────────────

interface GradeQuestion {
  grade: GCSEGrade
  type: 'technique' | 'meaning' | 'analysis'
  prompt: string
  options: string[]
  correctIndex: number
}

const QUESTION_BANK: GradeQuestion[] = [
  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 3 - Identify the technique (basic)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 3,
    type: 'technique',
    prompt: '"She runs like the wind." What technique is used?',
    options: ['Simile', 'Metaphor', 'Alliteration', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The stars danced in the sky." What technique is used?',
    options: ['Simile', 'Hyperbole', 'Personification', 'Onomatopoeia'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does "cold-hearted" suggest about a character?',
    options: [
      'They are ill',
      'They are unkind and uncaring',
      'They live somewhere cold',
      'They are shy',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Crash! Bang! Wallop!" What technique is this?',
    options: ['Alliteration', 'Onomatopoeia', 'Repetition', 'Simile'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a writer uses short sentences, what effect might this create?',
    options: ['A relaxed mood', 'Tension or urgency', 'Humour', 'Confusion'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Peter Piper picked a peck." What technique is used?',
    options: ['Sibilance', 'Assonance', 'Alliteration', 'Rhyme'],
    correctIndex: 2,
  },
  // NEW Grade 3
  {
    grade: 3,
    type: 'technique',
    prompt: '"The sun smiled down on us." What technique is used?',
    options: ['Simile', 'Personification', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"He was as brave as a lion." What technique is this?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an exclamation mark at the end of a sentence usually show?',
    options: ['A question', 'Strong emotion or surprise', 'A pause', 'The end of a story'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The snake slithered and slid silently." What technique is this?',
    options: ['Onomatopoeia', 'Metaphor', 'Sibilance', 'Hyperbole'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "a heart of stone", what does this mean?',
    options: [
      'They have a medical condition',
      'They are strong',
      'They are unfeeling and cruel',
      'They collect stones',
    ],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Tick tock, tick tock went the clock." What technique is used?',
    options: ['Alliteration', 'Simile', 'Onomatopoeia', 'Metaphor'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does it mean if a writer repeats a word three times?',
    options: [
      'They made a mistake',
      'They want to emphasise that idea',
      'They ran out of vocabulary',
      'It creates rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The wind howled through the trees." What technique is used?',
    options: ['Simile', 'Personification', 'Alliteration', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Big, bad, bold Billy." What technique is this?',
    options: ['Alliteration', 'Rhyme', 'Simile', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a poem uses words like "dark", "shadow" and "cold", what mood is created?',
    options: [
      'Happy and cheerful',
      'Gloomy and threatening',
      'Exciting and fast',
      'Calm and peaceful',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 4 - Identify technique + basic meaning
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 4,
    type: 'technique',
    prompt: '"He was a lion in battle." What technique is this?',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: '"The room fell silent." What does "fell" suggest?',
    options: ['The room collapsed', 'Silence came suddenly', 'Someone tripped', 'It was evening'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a rhetorical question?',
    options: [
      'To confuse the reader',
      'To engage the reader and make them think',
      'To provide an answer',
      'To end a paragraph',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"I\'ve told you a million times!" What technique?',
    options: ['Metaphor', 'Irony', 'Hyperbole', 'Understatement'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: '"The weather wept." What does this suggest?',
    options: [
      'It was raining and the mood is sad',
      'The weather was happy',
      'Someone was crying outside',
      'It was very hot',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"She sells sea shells on the sea shore." This contains which two techniques?',
    options: [
      'Metaphor and simile',
      'Alliteration and sibilance',
      'Personification and hyperbole',
      'Rhyme and rhythm',
    ],
    correctIndex: 1,
  },
  // NEW Grade 4
  {
    grade: 4,
    type: 'technique',
    prompt: '"Life is a rollercoaster." What technique is this?',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'In Romeo and Juliet, what does "star-crossed lovers" mean?',
    options: [
      'They love astronomy',
      'They are destined for misfortune by fate',
      'They met under the stars',
      'They are famous',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"Never, never, never give up." What technique is used here?',
    options: ['Alliteration', 'Repetition', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does the word "lurking" suggest about a character?',
    options: [
      'They are friendly',
      'They are hiding with sinister intent',
      'They are lost',
      'They are sleeping',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The classroom was a zoo." What technique is this?',
    options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'If a poem has a regular rhyme scheme (ABAB), what effect does this create?',
    options: ['Confusion', 'A sense of rhythm and musicality', 'Tension and fear', 'Sadness'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a list of three (tricolon)?',
    options: [
      'Because they can only think of three things',
      'To create emphasis and a sense of completeness',
      'To confuse the reader',
      'To save space',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The leaves whispered in the breeze." What technique is this?',
    options: ['Metaphor', 'Personification', 'Simile', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What is pathetic fallacy?',
    options: [
      'When a character feels sorry for themselves',
      'When weather or nature reflects human emotions',
      'A type of simile',
      'When animals talk',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"Bitter-sweet memories." What technique is this?',
    options: ['Simile', 'Oxymoron', 'Alliteration', 'Personification'],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 5 - Meaning and basic analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Macbeth, what does blood symbolise?',
    options: ['Power and ambition', 'Guilt and violence', 'Love and passion', 'Loyalty and honour'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: '"The fog crept in on little cat feet." What effect does this create?',
    options: [
      'Fear and horror',
      'A sense of stealth and quiet movement',
      'Excitement and energy',
      'Anger and frustration',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'What is the purpose of pathetic fallacy?',
    options: [
      'To describe animals',
      "To reflect characters' emotions through weather/nature",
      'To create humour',
      'To introduce new characters',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: '"It was the best of times, it was the worst of times." This is an example of:',
    options: ['Oxymoron', 'Juxtaposition', 'Irony', 'Euphemism'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?',
    options: [
      'To show he likes seafood',
      'To show he is completely isolated and closed off',
      'To show he lives by the sea',
      'To show he is wealthy',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'Why might a poet use enjambment?',
    options: [
      'To create a pause',
      'To create a sense of flow or urgency',
      'To rhyme more easily',
      'To confuse the reader',
    ],
    correctIndex: 1,
  },
  // NEW Grade 5
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Romeo and Juliet, why does Shakespeare use light and dark imagery?',
    options: [
      'To show the time of day',
      'To contrast love and danger, highlighting the secrecy of their relationship',
      'To describe the weather',
      'To make the play more dramatic for actors',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Ozymandias", what does the "shattered visage" represent?',
    options: [
      'A broken mirror',
      'The decay of power and the impermanence of human achievement',
      'A statue that fell over accidentally',
      'Ancient art techniques',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is a volta in a sonnet?',
    options: [
      'The title',
      'A turn or shift in argument or tone',
      'The final word',
      'A type of rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Jekyll and Hyde, what does the locked door of the laboratory represent?',
    options: [
      'Poor building design',
      'The secrets Hyde conceals and the barrier between respectability and evil',
      'That Jekyll is busy working',
      'Victorian architecture',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "London" by Blake, what does the phrase "mind-forged manacles" suggest?',
    options: [
      'People wear handcuffs',
      'People are mentally imprisoned by society and its institutions',
      'People are creative thinkers',
      'London has many blacksmiths',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'Why does Shelley use an iambic pentameter in "Ozymandias"?',
    options: [
      'Because all poems use it',
      'The regular rhythm mirrors the order Ozymandias tried to impose, while the disruptions reflect the decay of his power',
      'It was the easiest rhythm',
      'To make it rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Bayonet Charge" by Hughes, what does the "hot khaki" suggest?',
    options: [
      'The uniform is fashionable',
      'The physical discomfort and intensity of battle',
      'The soldier is sunbathing',
      'The weather is warm',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Great Expectations, what does Satis House symbolise?',
    options: [
      'Wealth and success',
      "Decay, frozen time, and Miss Havisham's emotional stagnation",
      'A typical Victorian home',
      "Pip's future happiness",
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is a caesura?',
    options: [
      'A type of poem',
      'A deliberate pause or break within a line of poetry',
      'A rhyming couplet',
      'The last line of a stanza',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "The Charge of the Light Brigade", what does "Valley of Death" allude to?',
    options: [
      'A horror film',
      'Psalm 23 from the Bible, suggesting inevitable doom',
      'A famous valley in Crimea',
      'A metaphor for old age',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 6 - More sophisticated analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 6,
    type: 'analysis',
    prompt: 'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?',
    options: [
      'As comic relief',
      'As a mouthpiece for socialist ideas',
      'As a romantic interest',
      'As a symbol of capitalism',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?',
    options: [
      'It describes the weather',
      'It introduces the theme of moral corruption and deception',
      'It is about physical appearance',
      'It describes a battle',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'Complete the analysis: "Stevenson uses the fog in Jekyll and Hyde to symbolise..."',
    options: [
      'The beauty of London',
      'The concealment of truth and moral ambiguity',
      'The industrial revolution',
      'Victorian fashion',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'technique',
    prompt:
      'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?',
    options: [
      'Flashback',
      'An allegory structured like a song/carol',
      'Stream of consciousness',
      'Epistolary form',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Lord of the Flies", what does the conch symbolise?',
    options: [
      'Nature and the wild',
      'Democracy, order and civilisation',
      'Violence and savagery',
      'Isolation and loneliness',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt:
      '"The creatures outside looked from pig to man, and from man to pig." What does Orwell suggest?',
    options: [
      'Pigs are intelligent',
      'The leaders have become indistinguishable from the oppressors',
      'Animals should not be on farms',
      'The revolution succeeded',
    ],
    correctIndex: 1,
  },
  // NEW Grade 6
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Remains" by Armitage, how does the poet present the psychological impact of conflict?',
    options: [
      'The soldier forgets what happened',
      'The use of colloquial language and graphic imagery conveys PTSD and guilt that haunts the speaker',
      'The poem celebrates military service',
      'The soldier feels no guilt',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'How does Shakespeare present the Nurse in Romeo and Juliet as a contrast to Lady Capulet?',
    options: [
      'The Nurse is wealthier',
      'The Nurse provides the warmth and maternal care that Lady Capulet lacks',
      'The Nurse is more educated',
      'They are presented as identical',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: 'In "Exposure" by Owen, what does "merciless iced east winds that knive us" suggest?',
    options: [
      'The soldiers enjoy the cold',
      'Nature is presented as a hostile enemy, as deadly as the opposing forces',
      'The wind is gentle',
      'Owen is describing a kitchen',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: "In Jane Eyre, how does Bronte use the Red Room to develop Jane's character?",
    options: [
      'It shows Jane likes the colour red',
      'The imprisonment reflects her oppression and ignites her passionate desire for freedom and justice',
      'It is simply a bedroom',
      'Jane enjoys being alone',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "My Last Duchess" by Browning, what does the Duke\'s control over the painting reveal?',
    options: [
      'He is an art collector',
      'His possessive, controlling nature and the silencing of women',
      'He misses his wife',
      'He wants to sell the painting',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: "In Frankenstein, why does Shelley frame the narrative with Walton's letters?",
    options: [
      'To make it longer',
      "The epistolary frame creates distance and multiple perspectives, questioning the reliability of the Creature's and Victor's accounts",
      'Because Shelley liked letters',
      'To introduce a romantic subplot',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Checking Out Me History" by Agard, why does the poet use phonetic spelling and dialect?',
    options: [
      'He cannot spell',
      'To assert Caribbean identity and resist the dominance of colonial English',
      'It is a printing error',
      'To make it easier to read',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Tissue" by Dharker, what does paper symbolise?',
    options: [
      'School homework',
      'The fragility and power of human life, identity, and the structures we create',
      'Trees and deforestation',
      "The poet's diary",
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: "In Great Expectations, why does Dickens present Magwitch's return as a shock to Pip?",
    options: [
      'Pip forgot who he was',
      "It shatters Pip's illusions about his benefactor and forces him to confront class prejudice",
      'Magwitch was supposed to be dead',
      'Pip does not recognise him',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 7 - Sophisticated analysis with context
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?',
    options: [
      'Darkness shows it is nighttime',
      "Darkness conceals evil deeds and mirrors the moral decay of Macbeth's character",
      'Darkness represents sadness',
      'Darkness is used for dramatic lighting effects',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?',
    options: [
      'Older characters are wiser',
      'Younger characters represent hope for social change while older ones represent entrenched attitudes',
      'There is no real divide',
      'The young are punished more',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'Complete: "Golding uses Simon as a Christ-like figure to..."',
    options: [
      'Provide comic relief',
      'Symbolise innate human goodness and the sacrifice of innocence',
      'Show the power of democracy',
      'Represent the military',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'meaning',
    prompt: 'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?',
    options: [
      'It was his hometown',
      'Soledad means "solitude" in Spanish, reinforcing themes of loneliness',
      'It was a famous ranch',
      'It had the best weather',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: "How does Dickens use Scrooge's transformation to critique Victorian society?",
    options: [
      'He shows wealth is bad',
      'He suggests individual moral change can address social inequality and neglect of the poor',
      'He promotes Christianity',
      'He shows that ghosts are real',
    ],
    correctIndex: 1,
  },
  // NEW Grade 7
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Owen use sensory imagery in "Exposure" to convey the futility of war?',
    options: [
      'To make the poem more colourful',
      'The emphasis on natural suffering over combat suggests the true enemy is the futility and neglect soldiers endure',
      'To describe a beautiful landscape',
      'To entertain the reader',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Romeo and Juliet, how does the Prologue function as a dramatic device?',
    options: [
      'It introduces the actors',
      'By revealing the tragic ending, Shakespeare shifts focus from what happens to why, creating dramatic irony throughout',
      'It summarises the play for latecomers',
      'It was added by a different writer',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Ozymandias", how does the use of a second-hand account affect the poem\'s message about power?',
    options: [
      'It makes the poem unreliable',
      "The layers of narration mirror the erosion of Ozymandias's legacy, emphasising how power fades through time and retelling",
      'Shelley was too lazy to visit the desert',
      'It makes the poem longer',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Bronte use Bertha Mason in Jane Eyre as a Gothic double for Jane?',
    options: [
      "Bertha is Jane's sister",
      'Bertha represents the suppressed rage and passion that Jane must control to survive in Victorian society',
      'Bertha is purely a plot device for the fire',
      'They look identical',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "London" by Blake, how does the repetition of "every" create meaning?',
    options: [
      'Blake could not think of other words',
      'The relentless repetition emphasises the universality of suffering and the inescapable oppression across all of society',
      'It creates a cheerful rhythm',
      'It is a printing error',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "War Photographer" by Duffy, how does the domestic setting of the darkroom contrast with the war zones?',
    options: [
      'The photographer prefers being at home',
      'The juxtaposition of ordered England with chaotic suffering abroad critiques public indifference to distant conflict',
      'The darkroom represents death',
      'Duffy has never been to a war zone',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Stevenson use Mr Utterson as a narrative device in Jekyll and Hyde?',
    options: [
      'Utterson is the villain',
      "As a rational, respectable Victorian gentleman, his gradual discovery mirrors the reader's journey and heightens the horror of the revelation",
      'Utterson is unimportant',
      'He provides comic relief',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "The Émigrée" by Rumens, how does the poet present memory as resistance?',
    options: [
      'The speaker has a bad memory',
      'The idealised, sunlit memory of the homeland resists the threatening forces that try to obliterate identity and belonging',
      'Memory is shown as unreliable',
      'The poem is about forgetting',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: "In Frankenstein, how does Shelley use the Arctic setting to frame the novel's themes?",
    options: [
      'Shelley liked cold weather',
      "The desolate, frozen landscape mirrors Victor's emotional isolation and the dangerous extremes of unchecked ambition",
      'It provides a holiday backdrop',
      'The Arctic was a popular Victorian destination',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Great Expectations, how does Dickens use Estella to explore the theme of class?',
    options: [
      'Estella is middle class',
      'Estella is raised to weaponise beauty against men, showing how the upper classes perpetuate cruelty through social conditioning',
      'Estella is kind to Pip',
      'She represents the working class',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 8 - Perceptive, evaluative analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?',
    options: [
      'She wants to be a man',
      'She recognises that femininity is equated with weakness in her patriarchal society and must reject it to gain power',
      'She is confused about her identity',
      'She is praying',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'To what extent does Orwell present revolution as inevitably corrupted in "Animal Farm"?',
    options: [
      'Revolution always works perfectly',
      'The cyclical structure suggests revolutionary ideals are corrupted by those who gain power, reflecting the Soviet experience',
      'Only animal revolutions fail',
      'Orwell supports the revolution throughout',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?',
    options: [
      'Short books are easier',
      'The fragmented narrative structure with multiple perspectives mirrors the fractured identity of Jekyll/Hyde',
      'He ran out of ideas',
      'Novellas were popular at the time',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'Evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.',
    options: [
      'It creates humour',
      "The audience knows WWI and WWII are coming, making the Birlings' complacency a powerful critique of capitalist arrogance",
      'It makes the play confusing',
      'It shows the Inspector was wrong',
    ],
    correctIndex: 1,
  },
  // NEW Grade 8
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Browning use the dramatic monologue form in "My Last Duchess" to expose the Duke\'s character?',
    options: [
      'The Duke is honest and self-aware',
      'The single, uninterrupted voice allows the Duke to inadvertently reveal his tyranny, jealousy, and objectification of women while believing he appears reasonable',
      'The monologue is addressed to the audience',
      'Browning had no other characters to include',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'Evaluate how Owen subverts traditional war poetry in "Dulce et Decorum Est".',
    options: [
      'Owen celebrates war',
      'By juxtaposing graphic, visceral imagery with the ironic Latin title, Owen dismantles the patriotic rhetoric that glorified sacrifice and recruited young men',
      'Owen follows traditional conventions',
      'The Latin title is sincere',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "How does Shakespeare use Juliet's soliloquies to challenge patriarchal expectations in Romeo and Juliet?",
    options: [
      'Juliet obeys her father throughout',
      "Juliet's articulate, passionate speeches assert female agency and desire in a society that treats her as property to be exchanged in marriage",
      "Juliet's speeches are unimportant",
      'Shakespeare did not give women soliloquies',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "In Frankenstein, evaluate how Shelley uses the Creature's eloquence to challenge reader expectations.",
    options: [
      'The Creature cannot speak',
      "The Creature's articulate narrative forces the reader to question who the true monster is, subverting the expectation that appearance determines moral worth",
      'The Creature is simply copying Victor',
      'Shelley wanted the Creature to seem educated',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Agard use form and structure in "Checking Out Me History" to mirror his argument?',
    options: [
      'The poem follows a strict sonnet form',
      'The alternation between standard English (for colonial history) and Creole (for Caribbean heroes) structurally enacts the conflict between imposed and authentic identity',
      'The structure is random',
      'Agard uses prose, not poetry',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'Evaluate how Dickens uses the Ghost of Christmas Yet to Come as a departure from the other spirits in "A Christmas Carol".',
    options: [
      'This ghost is friendlier',
      'The silent, shrouded figure represents the terrifying finality of death and compels Scrooge through fear rather than instruction, making the transformation feel psychologically authentic',
      'The ghost speaks throughout',
      'Dickens ran out of ideas for dialogue',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Hughes use irregular rhythm in "Bayonet Charge" to convey the experience of combat?',
    options: [
      'Hughes was a bad poet',
      'The disrupted metre and enjambment physically enact the stumbling, chaotic momentum of a soldier charging into gunfire, rejecting the orderly rhythms of patriotic verse',
      'The rhythm is perfectly regular',
      'Hughes used a metronome',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In Great Expectations, evaluate how Dickens uses first-person retrospective narration to explore self-deception.',
    options: [
      'Pip tells the truth throughout',
      "The older Pip narrating his younger self's mistakes creates dramatic irony, allowing Dickens to critique both Pip's snobbery and the class system that shaped it",
      'The narration is third person',
      'Dickens chose first person at random',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Dharker use the extended metaphor of paper in "Tissue" to explore human fragility?',
    options: [
      'The poem is about recycling',
      'Paper becomes a multivalent symbol for human constructs (maps, money, records) whose apparent permanence disguises their fundamental fragility, just like human life',
      'Paper represents strength',
      'Dharker is describing origami',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In "Poppies" by Weir, how does the domestic imagery create a powerful anti-war statement?',
    options: [
      'The poem is about gardening',
      'By focusing on a mother smoothing a blazer collar and touching a door handle, Weir centres the intimate, private grief that public remembrance ceremonies cannot capture',
      'The imagery is purely decorative',
      'Weir avoids any mention of war',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "How does Bronte use the character of St John Rivers in Jane Eyre to test Jane's values?",
    options: [
      'St John is the ideal husband',
      "St John's cold, dutiful proposal forces Jane to articulate the difference between self-sacrifice and self-annihilation, reaffirming her need for emotional equality",
      'Jane immediately accepts his proposal',
      'St John is a minor character',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 9 - Conceptualised, critical, original
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?',
    options: [
      'The witches are entertaining',
      "The supernatural externalises Macbeth's ambition while creating dramatic tension; it also reflects Jacobean anxieties about fate versus free will",
      'Ghosts were popular in plays',
      'Shakespeare believed in witches',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".',
    options: [
      'Civilisation is always stable',
      'The rapid descent into savagery suggests civilisation is fragile, but characters like Simon and Ralph complicate a purely pessimistic reading',
      'All the boys are savage from the start',
      'The island causes madness',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Steinbeck use the American Dream as both a motivating force and a destructive illusion?',
    options: [
      'The dream always comes true',
      'The dream provides hope and purpose but its impossibility under systemic inequality leads to tragedy, reflecting 1930s socioeconomic realities',
      'Only George believes in it',
      'The dream is about buying a farm',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt: 'To what extent is "A Christmas Carol" a radical text in its Victorian context?',
    options: [
      'It is just a ghost story',
      'While conservative in proposing individual moral reform, its unflinching depiction of poverty and direct address to the reader made it a provocative social critique',
      'Dickens was not political',
      'It only entertains children',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.',
    options: [
      'Macbeth is purely evil',
      "The five-act structure traces Macbeth's hamartia; his soliloquies create sympathy while his actions provoke condemnation, creating a complex moral response",
      'Shakespeare did not plan the structure',
      'Macbeth is entirely a victim',
    ],
    correctIndex: 1,
  },
  // NEW Grade 9
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shelley use the sonnet form ironically in "Ozymandias" to reinforce the poem\'s message?',
    options: [
      'Shelley uses the sonnet because it is easy',
      "The sonnet's traditional associations with permanence and immortality are subverted by its subject matter of decay, and the irregular rhyme scheme itself enacts the dissolution of order",
      'The sonnet form has no significance',
      'Shelley did not choose the form deliberately',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate how Priestley uses time in "An Inspector Calls" to construct his political argument.',
    options: [
      'The play is set in real time',
      "By setting the play in 1912 but writing in 1945, Priestley weaponises the audience's hindsight of two World Wars to demolish the Birlings' complacent capitalism, making the cyclical ending both a warning and a structural inevitability",
      'Time is irrelevant to the play',
      'Priestley chose 1912 at random',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'To what extent does Shelley present Victor Frankenstein as a critique of Romantic individualism in Frankenstein?',
    options: [
      'Victor is purely heroic',
      'Victor embodies the dangerous extreme of Romantic genius; his Promethean ambition to transcend natural limits ultimately destroys those around him, suggesting that unchecked individualism without social responsibility is catastrophic',
      "Shelley supported Victor's experiments",
      'Victor represents the Enlightenment, not Romanticism',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Owen use the gap between the title and the content of "Dulce et Decorum Est" to create a sustained rhetorical argument?',
    options: [
      'The title is simply a label',
      'The entire poem functions as evidence in a rhetorical trial, with the graphic imagery serving as counter-testimony to the Latin maxim, culminating in the direct address that converts the reader from passive observer to complicit participant in the lie',
      'Owen agrees with the Latin phrase',
      'The title was chosen by the publisher',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Bronte uses the Gothic genre in Jane Eyre both to satisfy and to critique Victorian readerly expectations.',
    options: [
      'Bronte follows Gothic conventions without deviation',
      'Bronte deploys Gothic tropes (the madwoman, the brooding hero, the mysterious house) but repurposes them as psychological realism, making Bertha a symbol of patriarchal oppression rather than mere sensationalism, thereby transforming genre fiction into social critique',
      'The Gothic elements are purely decorative',
      'Jane Eyre is not a Gothic novel',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Browning construct dramatic irony through the Duke\'s self-presentation in "My Last Duchess"?',
    options: [
      'The Duke is fully self-aware',
      "The Duke's attempt to present himself as a cultured, reasonable patron inadvertently reveals his pathological need for control; the gap between his self-image and the reader's horrified understanding creates a sustained irony that indicts aristocratic entitlement",
      'There is no irony in the poem',
      'The Duke is presented sympathetically',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically assess how Dickens uses the bildungsroman structure of Great Expectations to interrogate the Victorian myth of self-improvement.',
    options: [
      'Pip successfully improves himself',
      'The novel traces Pip\'s internalisation and eventual rejection of class values; his "great expectations" prove to be founded on criminal wealth, exposing the self-improvement narrative as a mechanism that perpetuates rather than challenges social hierarchy',
      'The novel has no structure',
      "Dickens endorses Pip's snobbery",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Duffy use the metaphor of developing photographs in "War Photographer" to explore the ethics of representing suffering?',
    options: [
      'The poem is about photography techniques',
      "The slow emergence of images in developing fluid mirrors how suffering surfaces in comfortable Western consciousness, while the editor's selection of a few frames from hundreds critiques how media reduces complex humanitarian crises to consumable content",
      'Duffy celebrates photojournalism',
      'The darkroom is purely a setting',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Shakespeare uses the Friar in Romeo and Juliet as both a figure of hope and a structural instrument of tragedy.',
    options: [
      'The Friar is purely a villain',
      "The Friar's well-intentioned interventions (the marriage, the sleeping potion) embody the play's central paradox: that love and reason are insufficient against the structural forces of hatred, suggesting that individual goodwill cannot overcome systemic violence",
      'The Friar is irrelevant to the plot',
      'Shakespeare presents the Friar as infallible',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Blake use the concept of "chartered" in "London" to construct a critique of institutional power?',
    options: [
      'Chartered simply means mapped',
      'The word simultaneously invokes commercial charters (monopolies granted by the Crown) and mapped/controlled spaces, collapsing economic exploitation and spatial control into a single image that indicts how institutional power commodifies both land and human freedom',
      'Blake is describing a pleasant city',
      'The word has no special significance',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'To what extent does Armitage present the speaker in "Remains" as trapped between two selves?',
    options: [
      'The speaker is at peace',
      'The colloquial, anecdotal tone of the retelling clashes with the obsessive, haunted repetition of the final stanzas, suggesting the speaker is permanently fractured between his soldierly self (who must be indifferent) and his human self (who cannot forget), reflecting the impossibility of moral resolution after killing',
      'The speaker has fully recovered',
      'Armitage presents a single coherent voice',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ADDITIONAL QUESTIONS - broader coverage
  // ═══════════════════════════════════════════════════════════════════════════════

  // Grade 3 - additional
  {
    grade: 3,
    type: 'technique',
    prompt: '"Her smile was like sunshine." What technique is used?',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an ellipsis (...) at the end of a sentence usually suggest?',
    options: [
      'The writer forgot to finish',
      'Suspense, a trailing thought, or something left unsaid',
      'A happy ending',
      'A spelling mistake',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The thunder grumbled in the distance." What technique is used?',
    options: ['Simile', 'Alliteration', 'Personification', 'Repetition'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "fiery eyes", what does this suggest?',
    options: [
      'Their eyes are on fire',
      'They are angry or passionate',
      'They need glasses',
      'They are tired',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The buzzing bees flew by." Which technique is "buzzing" an example of?',
    options: ['Alliteration', 'Simile', 'Onomatopoeia', 'Metaphor'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does the word "crept" suggest about how someone is moving?',
    options: [
      'Quickly and loudly',
      'Slowly and secretly',
      'Happily and openly',
      'Clumsily and noisily',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Time is money." What technique is this?',
    options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
    correctIndex: 1,
  },

  // Grade 4 - additional
  {
    grade: 4,
    type: 'technique',
    prompt: '"Alone, alone, all all alone." What technique is used?',
    options: ['Simile', 'Repetition', 'Metaphor', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does it mean if a writer describes a character\'s hands as "trembling"?',
    options: [
      'They are cold',
      'They are nervous, scared, or emotional',
      'They are strong',
      'They are waving hello',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a flashback?',
    options: [
      'Because they forgot to include something',
      "To provide background information and help the reader understand a character's motivations",
      'To confuse the reader',
      'To make the text longer',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The silence was deafening." What technique is this?',
    options: ['Simile', 'Personification', 'Oxymoron', 'Alliteration'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'In Romeo and Juliet, why are the families called "Montagues" and "Capulets"?',
    options: [
      'They are named after real families',
      'The names emphasise that the feud is between entire households, not just individuals',
      'Shakespeare chose them randomly',
      'They are Italian words for love',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The road stretched endlessly before them." What technique is used?',
    options: ['Personification', 'Hyperbole', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What is the effect of a writer using a question as the opening of a text?',
    options: [
      'It shows the writer does not know the answer',
      'It hooks the reader and makes them curious',
      'It is a sign of poor writing',
      'It creates a sad mood',
    ],
    correctIndex: 1,
  },

  // Grade 5 - additional
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Macbeth, why does Lady Macbeth sleepwalk and try to wash her hands?',
    options: [
      'She is tired',
      "Her guilt over Duncan's murder manifests physically, showing she cannot escape her conscience",
      'She has a skin condition',
      'She is cleaning the castle',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Poppies" by Weir, what do poppies symbolise?',
    options: [
      'Spring gardening',
      'Remembrance of those lost in conflict',
      'The colour red',
      'Happiness and celebration',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is free verse?',
    options: [
      'Poetry that is free to read',
      'Poetry without a regular rhyme scheme or metre',
      'A type of sonnet',
      'Poetry written in paragraphs',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Animal Farm, what does the windmill represent?',
    options: [
      'A real windmill on a farm',
      'The promises of industrialisation and progress used to manipulate the working class',
      "Napoleon's favourite building",
      'The power of nature',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt:
      'In "War Photographer" by Duffy, what does "a hundred agonies in black and white" suggest?',
    options: [
      'The photos are very old',
      'Immense suffering is reduced to monochrome images that fail to convey the full horror',
      'The photographer only uses black and white film',
      'There are exactly one hundred photos',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Jekyll and Hyde, why does Hyde become progressively harder to control?',
    options: [
      'Jekyll takes too much potion',
      'The evil side of human nature, once unleashed, grows stronger, suggesting repression only intensifies desire',
      'Hyde exercises more',
      'The potion expires',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is an extended metaphor?',
    options: [
      'A very long sentence',
      'A metaphor that is developed over several lines or throughout a whole text',
      'Two metaphors side by side',
      'A metaphor that is obvious',
    ],
    correctIndex: 1,
  },

  // Grade 6 - additional
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In Romeo and Juliet, how does the oxymoron "loving hate" reflect the play\'s central conflict?',
    options: [
      'Romeo is confused',
      'It captures the paradox of love born from feuding families, where affection and violence are inseparable',
      'Shakespeare made a mistake',
      'It describes Tybalt',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Exposure" by Owen, how does the refrain "But nothing happens" create meaning?',
    options: [
      'It shows the soldiers are bored',
      'The repetition emphasises the futility and monotony of trench warfare, where the real enemy is inaction and exposure rather than combat',
      'Owen ran out of ideas',
      'It means the war is over',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: 'In Animal Farm, why does Orwell have the pigs learn to walk on two legs?',
    options: [
      'Pigs can really walk upright',
      'It visually represents how the revolutionary leaders have adopted the behaviour of the human oppressors they overthrew',
      'It is humorous',
      'The pigs want to exercise',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "The Charge of the Light Brigade", how does Tennyson use rhythm to create meaning?',
    options: [
      'The rhythm is random',
      'The driving metre - anapaestic dimeter with a dactylic refrain - mimics the thundering hooves of the cavalry charge, creating an unstoppable momentum',
      'Tennyson used a metronome',
      'The rhythm slows throughout',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      "In Macbeth, how does Shakespeare use the banquet scene to reveal Macbeth's psychological state?",
    options: [
      'Macbeth is hungry',
      "Banquo's ghost, visible only to Macbeth, dramatises his guilt and paranoia, exposing his crimes in front of the court",
      'The scene is about food',
      'Macbeth performs well at the banquet',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt:
      "In Frankenstein, what does the Creature's request for a companion reveal about his character?",
    options: [
      'He is lonely because he is ugly',
      'His desire for connection shows his fundamental humanity and suggests that isolation, not nature, has made him violent',
      'He wants to create an army',
      'He is copying Victor',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Dulce et Decorum Est", what effect does Owen create by directly addressing "you" in the final stanza?',
    options: [
      'He is talking to his friend',
      'He implicates the reader and propagandists in the lie, making complacency impossible',
      'It is a grammatical error',
      'He is addressing the soldiers',
    ],
    correctIndex: 1,
  },

  // Grade 7 - additional
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "Poppies" by Weir, how does the poet use time to structure the mother\'s grief?',
    options: [
      'The poem follows a strict timeline',
      'The poem moves between past and present, showing how memory and loss collapse time for the grieving mother',
      'Time is irrelevant in the poem',
      'The poem is set entirely in the future',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Animal Farm, how does Orwell use Boxer to represent the working class?',
    options: [
      'Boxer is intelligent and critical',
      "Boxer's strength, loyalty, and eventual betrayal by the pigs illustrate how the ruling class exploits workers' labour and discards them when they are no longer useful",
      'Boxer represents the middle class',
      'Boxer successfully rebels',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Bayonet Charge" by Hughes, how does the shift from "he" to describing a "yellow hare" create meaning?',
    options: [
      'The soldier is hunting',
      "The hare becomes a mirror for the soldier's terror, stripping away patriotic abstractions to reveal the raw, animal instinct for survival",
      'Hughes liked animals',
      'The hare is irrelevant',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In Macbeth, how does Shakespeare present the relationship between Macbeth and Lady Macbeth as a reversal of gender expectations?',
    options: [
      'They have a normal marriage',
      "Lady Macbeth initially dominates through manipulation and questioning Macbeth's masculinity, but as guilt consumes her, she becomes fragile while Macbeth hardens into tyranny",
      'Lady Macbeth is always submissive',
      'Gender is irrelevant in the play',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Checking Out Me History" by Agard, how does the contrast between colonial and Caribbean histories serve the poem\'s argument?',
    options: [
      'Both histories are presented equally',
      'The nursery-rhyme triviality of colonial history (Dick Whittington, Old King Cole) is juxtaposed with the heroic dignity of Caribbean figures, exposing how the curriculum devalues non-white achievement',
      'Agard prefers British history',
      'The poem makes no political argument',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In Jekyll and Hyde, how does Stevenson use the physical contrast between Jekyll and Hyde to explore Victorian anxieties?',
    options: [
      'They look the same',
      "Hyde's smaller, younger, deformed body suggests that the repressed desires of respectable Victorian men are stunted and monstrous, reflecting fears about what lies beneath social propriety",
      'The contrast is purely physical',
      'Stevenson wanted a villain who looked scary',
    ],
    correctIndex: 1,
  },

  // Grade 8 - additional
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Tennyson simultaneously celebrate and question military obedience in "The Charge of the Light Brigade"?',
    options: [
      'Tennyson only celebrates the soldiers',
      "The poem honours the soldiers' bravery and discipline while the refrain about the blunder and the imagery of the valley of death implicitly questions a command structure that sends men to certain death",
      'Tennyson criticises the soldiers',
      'The poem has no political dimension',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In "The Émigrée" by Rumens, evaluate how the poet uses light as a motif to resist political oppression.',
    options: [
      'Light describes the weather',
      "The persistent sunlight in the speaker's memory functions as an act of defiance; no matter how the city is invaded or renamed, the luminous personal memory cannot be conquered, making imagination a form of political resistance",
      'The light fades throughout the poem',
      'Light represents danger',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In Macbeth, evaluate how Shakespeare uses the Porter scene to both relieve and intensify dramatic tension.',
    options: [
      'The Porter scene is a mistake',
      "The comic interlude provides relief after Duncan's murder but its references to hell and equivocation create a thematic bridge, suggesting that Macbeth's castle has literally become hell and that moral ambiguity pervades every level of society",
      'The Porter scene is purely funny',
      'Shakespeare forgot about the murder',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How does Weir use the absence of the soldier\'s voice in "Poppies" to create meaning?',
    options: [
      'The soldier speaks throughout',
      "The son's silence forces the reader to experience loss through the mother's perspective alone, making the poem a powerful statement about the voicelessness of the dead and the private grief of those left behind",
      'The poet forgot to include dialogue',
      'The soldier is too young to speak',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'In "Tissue" by Dharker, evaluate how the final stanza shifts the poem\'s meaning.',
    options: [
      'The final stanza is unrelated',
      'The shift from paper to human skin reframes the entire poem, revealing that the true subject is not paper but the human body itself, suggesting that our most precious structure is also our most fragile',
      'The final stanza repeats the first',
      'Dharker changes topic accidentally',
    ],
    correctIndex: 1,
  },

  // Grade 9 - additional
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shelley construct "Ozymandias" as a meditation on the relationship between art and power?',
    options: [
      'Art and power are unrelated in the poem',
      "The sculptor's art outlasts the king's empire, but the poem itself outlasts both, creating a hierarchy where poetic language triumphs over both political authority and visual representation, making the act of writing an assertion of lasting power over transience",
      "The poem celebrates Ozymandias's power",
      'Shelley believed art was inferior to politics',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate how Owen uses the form of "Exposure" to embody the soldiers\' experience.',
    options: [
      'The form is conventional',
      "The pararhyme (half-rhyme) creates a persistent sense of dissonance and incompleteness that mirrors the soldiers' unresolved trauma, while the shortened final lines of each stanza enact the diminishing of hope and life in the trenches",
      'Owen uses perfect rhyme throughout',
      'The form has no connection to meaning',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt: 'To what extent does Shakespeare present fate as inescapable in Romeo and Juliet?',
    options: [
      'The characters have complete free will',
      "While the Prologue and cosmic imagery suggest fatalistic inevitability, the play simultaneously shows how human choices (Tybalt's aggression, the Friar's schemes, Romeo's impulsiveness) drive the tragedy, creating an unresolvable tension between destiny and agency that makes the play philosophically rich rather than simply predetermined",
      'Shakespeare did not believe in fate',
      'Only Romeo believes in fate',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Hughes use the disruption of patriotic language in "Bayonet Charge" to deconstruct war propaganda?',
    options: [
      'Hughes supports patriotism',
      'The poem systematically dismantles abstractions like "king", "honour", and "human dignity" by placing them inside the physical chaos of a charge, revealing how these concepts dissolve when confronted with the visceral terror of actual combat, suggesting that ideology cannot survive contact with bodily reality',
      'The poem contains no patriotic language',
      'Hughes was a war propagandist',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically assess how Stevenson uses the will and testament in Jekyll and Hyde as both a legal and symbolic device.',
    options: [
      'The will is a minor detail',
      "Jekyll's will, which leaves everything to Hyde, functions as a legal paradox that encodes the novel's central theme: the terrifying possibility that a respectable man might willingly bequeath his identity to his worst self, making the legal document a site of Gothic horror where social order confronts its own dissolution",
      'The will is straightforward',
      'Stevenson included it for realism',
    ],
    correctIndex: 1,
  },

  // Final additions
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In Great Expectations, what does the marshland at the opening of the novel symbolise?',
    options: [
      'A pleasant countryside',
      'The bleak, dangerous, and morally ambiguous world Pip must navigate, foreshadowing the hardships ahead',
      'Dickens liked nature descriptions',
      'The setting is irrelevant',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Dulce et Decorum Est", how does Owen\'s use of the present tense in the second stanza create impact?',
    options: [
      'It is a grammatical mistake',
      'The sudden shift to present tense plunges the reader into the immediacy of the gas attack, removing the safety of retrospective narration and forcing direct witness',
      'Present tense is always used in poetry',
      'Owen forgot to use past tense',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "In Lord of the Flies, evaluate how Golding uses Piggy's glasses as a symbol that evolves throughout the novel.",
    options: [
      'The glasses are just for reading',
      'Initially representing intellectual clarity and civilisation (fire-making), their theft and destruction trace the disintegration of rational thought and democratic values on the island',
      'The glasses have no symbolic value',
      'Golding wore glasses himself',
    ],
    correctIndex: 1,
  },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Map title substrings to set-text slugs so we can filter board-specific questions.
// A question is text-specific if its prompt contains one of these substrings.
const TEXT_REFERENCES: { needle: string; slug: string }[] = [
  { needle: 'Macbeth', slug: 'macbeth' },
  { needle: 'Inspector Calls', slug: 'an-inspector-calls' },
  { needle: 'Christmas Carol', slug: 'a-christmas-carol' },
  { needle: 'Jekyll and Hyde', slug: 'jekyll-and-hyde' },
  { needle: 'Lord of the Flies', slug: 'lord-of-the-flies' },
  { needle: 'Animal Farm', slug: 'animal-farm' },
  { needle: 'Of Mice and Men', slug: 'of-mice-and-men' },
  { needle: 'Romeo and Juliet', slug: 'romeo-and-juliet' },
  { needle: 'Frankenstein', slug: 'frankenstein' },
  { needle: 'Jane Eyre', slug: 'jane-eyre' },
  { needle: 'Great Expectations', slug: 'great-expectations' },
  // Poetry
  { needle: 'Ozymandias', slug: 'ozymandias' },
  { needle: 'London" by Blake', slug: 'london' },
  { needle: 'Exposure', slug: 'exposure' },
  { needle: 'Bayonet Charge', slug: 'bayonet-charge' },
  { needle: 'Remains', slug: 'remains' },
  { needle: 'Charge of the Light Brigade', slug: 'the-charge-of-the-light-brigade' },
  { needle: 'My Last Duchess', slug: 'my-last-duchess' },
  { needle: 'War Photographer', slug: 'war-photographer' },
  { needle: 'Tissue', slug: 'tissue' },
  { needle: 'Checking Out Me History', slug: 'checking-out-me-history' },
  { needle: 'Émigrée', slug: 'the-emigree' },
  { needle: 'Poppies', slug: 'poppies' },
  { needle: 'Dulce et Decorum Est', slug: 'dulce-et-decorum-est' },
]

function questionAvailableForBoard(prompt: string, allowedSlugs: Set<string>): boolean {
  for (const ref of TEXT_REFERENCES) {
    if (prompt.includes(ref.needle) && !allowedSlugs.has(ref.slug)) {
      return false
    }
  }
  return true
}

// ─── Grade Ladder ─────────────────────────────────────────────────────────────

const GRADE_LEVELS: GCSEGrade[] = [3, 4, 5, 6, 7, 8, 9]
const CORRECT_TO_ADVANCE = 3
const WRONG_TO_DROP = 2

function GradeLadder({
  currentGrade,
  maxGradeReached,
}: {
  currentGrade: GCSEGrade
  maxGradeReached: GCSEGrade
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Grade Ladder
      </span>
      {[...GRADE_LEVELS].reverse().map((g) => (
        <div
          key={g}
          className={cn(
            'flex h-8 w-20 items-center justify-center rounded-lg border text-sm font-bold transition-all duration-300',
            g === currentGrade
              ? 'border-primary bg-primary/20 text-primary scale-110 shadow-md shadow-primary/20'
              : g <= maxGradeReached
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-white/[0.06] bg-white/[0.02] text-muted-foreground',
          )}
        >
          {g}
        </div>
      ))}
    </div>
  )
}

// ─── Type labels ──────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  technique: 'Identify the Technique',
  meaning: 'What Does This Mean?',
  analysis: 'Complete the Analysis',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GradeClimberPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter the question bank to only include questions that reference texts the user studies.
  // Generic technique/meaning questions are always included.
  const filteredBank = useMemo(() => {
    if (!board) return QUESTION_BANK
    const allowedSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const filtered = QUESTION_BANK.filter((q) => questionAvailableForBoard(q.prompt, allowedSlugs))
    // Ensure each grade still has at least one question; fall back to full bank otherwise
    const gradesPresent = new Set(filtered.map((q) => q.grade))
    if (gradesPresent.size < 5) return QUESTION_BANK
    return filtered
  }, [board])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [currentGrade, setCurrentGrade] = useState<GCSEGrade>(3)
  const [maxGradeReached, setMaxGradeReached] = useState<GCSEGrade>(3)
  const [correctStreak, setCorrectStreak] = useState(0)
  const [wrongStreak, setWrongStreak] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<GradeQuestion | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set())
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const pickQuestion = useCallback(
    (grade: GCSEGrade, used: Set<number>) => {
      const candidates = filteredBank
        .map((q, i) => ({ q, i }))
        .filter(({ q, i }) => q.grade === grade && !used.has(i))
      if (candidates.length === 0) {
        // Fallback: allow nearby grades
        const nearby = filteredBank
          .map((q, i) => ({ q, i }))
          .filter(({ q, i }) => Math.abs(q.grade - grade) <= 1 && !used.has(i))
        if (nearby.length === 0) return null
        const pick = nearby[Math.floor(Math.random() * nearby.length)]
        return pick
      }
      return candidates[Math.floor(Math.random() * candidates.length)]
    },
    [filteredBank],
  )

  const startNextQuestion = useCallback(
    (grade: GCSEGrade, used: Set<number>) => {
      const picked = pickQuestion(grade, used)
      if (!picked) {
        setGameState('finished')
        return
      }
      setUsedQuestions((prev) => new Set(prev).add(picked.i))
      setCurrentQuestion(picked.q)
      setSelected(null)
      setShowFeedback(false)
    },
    [pickQuestion],
  )

  const handleStart = useCallback(() => {
    const initialGrade: GCSEGrade = 3
    setCurrentGrade(initialGrade)
    setMaxGradeReached(initialGrade)
    setCorrectStreak(0)
    setWrongStreak(0)
    setTotalCorrect(0)
    setTotalAnswered(0)
    setUsedQuestions(new Set())
    setGameState('playing')
    const used = new Set<number>()
    const picked = pickQuestion(initialGrade, used)
    if (picked) {
      setUsedQuestions(new Set([picked.i]))
      setCurrentQuestion(picked.q)
      setSelected(null)
      setShowFeedback(false)
    }
  }, [pickQuestion])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback || !currentQuestion) return
      setSelected(index)
      setShowFeedback(true)
      setTotalAnswered((t) => t + 1)

      const correct = index === currentQuestion.correctIndex
      let nextGrade = currentGrade
      let newCorrectStreak = correctStreak
      let newWrongStreak = wrongStreak

      if (correct) {
        setTotalCorrect((t) => t + 1)
        newCorrectStreak = correctStreak + 1
        newWrongStreak = 0
        if (newCorrectStreak >= CORRECT_TO_ADVANCE && currentGrade < 9) {
          nextGrade = (currentGrade + 1) as GCSEGrade
          newCorrectStreak = 0
        }
      } else {
        newWrongStreak = wrongStreak + 1
        newCorrectStreak = 0
        if (newWrongStreak >= WRONG_TO_DROP && currentGrade > 3) {
          nextGrade = (currentGrade - 1) as GCSEGrade
          newWrongStreak = 0
        }
      }

      setCorrectStreak(newCorrectStreak)
      setWrongStreak(newWrongStreak)
      setCurrentGrade(nextGrade)
      if (nextGrade > maxGradeReached) {
        setMaxGradeReached(nextGrade)
      }

      setTimeout(() => {
        setUsedQuestions((prev) => {
          const next = new Set(prev)
          startNextQuestion(nextGrade, next)
          return next
        })
      }, 1400)
    },
    [
      showFeedback,
      currentQuestion,
      currentGrade,
      correctStreak,
      wrongStreak,
      maxGradeReached,
      startNextQuestion,
    ],
  )

  // Score: maxGradeReached maps to a percentage for GameShell grading
  const scoreValue = totalCorrect
  const maxScoreValue = Math.max(totalAnswered, 1)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="grade-climber"
        title="Grade Climber"
        description={
          boardConfig
            ? `Answer ${boardConfig.shortName} questions at increasing difficulty. Get 3 right to climb, 2 wrong to drop back.`
            : 'Answer questions at increasing difficulty. Get 3 right to climb, 2 wrong to drop back.'
        }
        difficulty="Higher"
        score={scoreValue}
        maxScore={maxScoreValue}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
      >
        {currentQuestion && (
          <div className="flex gap-8">
            {/* Grade Ladder */}
            <div className="hidden shrink-0 sm:block">
              <GradeLadder currentGrade={currentGrade} maxGradeReached={maxGradeReached} />
            </div>

            {/* Question area */}
            <div className="flex flex-1 flex-col gap-6">
              {/* Status row */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                    currentGrade >= 7
                      ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                      : currentGrade >= 5
                        ? 'border-amber-500/20 bg-amber-500/10 text-clay-600'
                        : 'border-blue-500/20 bg-blue-500/10 text-blue-400',
                  )}
                >
                  Grade {currentGrade}
                </span>
                <span className="text-xs text-muted-foreground">
                  {TYPE_LABELS[currentQuestion.type]}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  Streak: {correctStreak}/{CORRECT_TO_ADVANCE} to advance
                </span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                <p className="text-base leading-relaxed text-foreground">
                  {currentQuestion.prompt}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, i) => {
                  const isCorrect = i === currentQuestion.correctIndex
                  const isSelected = i === selected
                  let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                  if (showFeedback) {
                    if (isCorrect)
                      style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                    else if (isSelected) style = 'border-red-500/40 bg-red-500/10 text-red-400'
                    else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showFeedback}
                      className={cn(
                        'rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200',
                        style,
                        !showFeedback && 'cursor-pointer active:translate-y-px',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
