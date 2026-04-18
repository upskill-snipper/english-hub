'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

const dulce: PoemData = {
  title: 'Dulce et Decorum Est',
  poet: 'Wilfred Owen',
  lines: [
    {
      text: 'Bent double, like old beggars under sacks,',
      annotations: [
        {
          type: 'Simile',
          note: 'The soldiers are compared to "old beggars" - the opposite of the patriotic image of strong young heroes. They are humiliated, broken, prematurely aged.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The opening line immediately demolishes the romantic view of war. These are not heroes - they are crushed and pitiful.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Knock-kneed, coughing like hags, we cursed through sludge,',
      annotations: [
        {
          type: 'Simile',
          note: '"Like hags" - compared to ugly old women. Owen uses ugly, undignified comparisons to strip away the glamour of war.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Cursed through sludge" - the harsh language and ugly setting (sludge) destroy any nobility. War is mud and obscenity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Till on the haunting flares we turned our backs,',
      annotations: [
        {
          type: 'Diction',
          note: '"Haunting flares" - the flares illuminate no-man\'s land. They are "haunting" - they will never leave the soldiers\' minds.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And towards our distant rest began to trudge.',
      annotations: [
        {
          type: 'Verb',
          note: '"Trudge" - heavy, exhausted walking. There is no marching here. The men can barely move.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Men marched asleep. Many had lost their boots,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Marched asleep" - paradox. The men are so exhausted they sleep while walking. The image is shocking and pitiful.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'But limped on, blood-shod. All went lame; all blind;',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Blood-shod" - their feet are wrapped in blood instead of boots. The metaphor is grotesque and physical.',
          color: '#10b981',
        },
        {
          type: 'Repetition',
          note: '"All went lame; all blind" - the totality of suffering. No one is exempt. The repetition of "all" hammers home the universal misery.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Drunk with fatigue; deaf even to the hoots',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Drunk with fatigue" - exhaustion is so extreme it resembles drunkenness. The men cannot think straight.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of gas-shells dropping softly behind.',
      annotations: [
        {
          type: 'Foreshadowing',
          note: '"Dropping softly" - the deceptive quietness of gas shells, more terrifying than explosive ones. The line ends with the calm before horror.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Gas! GAS! Quick, boys!—An ecstasy of fumbling,',
      annotations: [
        {
          type: 'Capitalisation',
          note: '"Gas! GAS!" - the second is in capitals, mimicking the rising panic. The poem suddenly accelerates from exhausted trudging to terror.',
          color: '#a855f7',
        },
        {
          type: 'Oxymoron',
          note: '"Ecstasy of fumbling" - "ecstasy" usually means joy, but here it means a frenzied, panicked state. The combination is shocking.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The volta of the poem. The pace transforms. War\'s horror is no longer creeping - it is immediate.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Fitting the clumsy helmets just in time;',
      annotations: [
        {
          type: 'Diction',
          note: '"Clumsy helmets" - the gas masks are awkward and slow to put on. The men barely make it.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'But someone still was yelling out and stumbling,',
      annotations: [
        {
          type: 'Tragedy',
          note: 'One man fails to get his mask on. Owen focuses on a single victim - the personal becomes universal.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And flound\'ring like a man in fire or lime...',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a man in fire or lime" - the gas burns the lungs and skin like fire or quicklime. The simile makes the abstract horror concrete.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Dim, through the misty panes and thick green light,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Misty panes" - the speaker sees through his own gas mask\'s eyepieces. "Thick green light" - the chlorine gas. The colour is unnatural and sickly.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'As under a green sea, I saw him drowning.',
      annotations: [
        {
          type: 'Simile',
          note: '"Under a green sea" - the speaker imagines the gas as water. "I saw him drowning" - chlorine gas attacks the lungs, filling them with fluid. The man literally drowns on dry land.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'A devastating image. The man drowns in poison gas while the speaker watches helplessly through his mask.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'In all my dreams, before my helpless sight,',
      annotations: [
        {
          type: 'Trauma',
          note: '"In all my dreams" - the poem moves to the speaker\'s present. Years later, the memory still haunts him. This is what we now call PTSD.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'He plunges at me, guttering, choking, drowning.',
      annotations: [
        {
          type: 'Tricolon',
          note: '"Guttering, choking, drowning" - three present-tense verbs make the death immediate. "Guttering" is what a candle does as it dies - a chilling, slow extinction.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'The accumulating verbs make the moment unbearable. The dead man returns in dreams, still dying.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'If in some smothering dreams, you too could pace',
      annotations: [
        {
          type: 'Direct address',
          note: '"You too" - Owen addresses the reader directly, especially those who romanticise war. This is the poem\'s argumentative purpose.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Behind the wagon that we flung him in,',
      annotations: [
        {
          type: 'Diction',
          note: '"Flung him in" - undignified, brutal disposal of the body. Even in death, the soldier is not treated with respect. There is no glory.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And watch the white eyes writhing in his face,',
      annotations: [
        {
          type: 'Imagery',
          note: '"White eyes writhing" - the eyes have rolled back in agony. "Writhing" suggests living movement in a dead face. Horrific.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'His hanging face, like a devil\'s sick of sin;',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a devil\'s sick of sin" - even a devil would be disgusted. The simile is shocking and bitter, reversing normal expectations.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'If you could hear, at every jolt, the blood',
      annotations: [
        {
          type: 'Aural imagery',
          note: '"At every jolt" - the cart bumps along, the body jolts. Owen wants the reader to hear and feel each terrible moment.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Come gargling from the froth-corrupted lungs,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Gargling" - obscene, ugly sound. "Froth-corrupted lungs" - the chlorine has destroyed the lungs from within. Owen refuses to look away.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Obscene as cancer, bitter as the cud',
      annotations: [
        {
          type: 'Simile',
          note: 'Two similes: "obscene as cancer" and "bitter as the cud". Both are unpleasant, ordinary diseases. War is not heroic - it is degrading.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of vile, incurable sores on innocent tongues,—',
      annotations: [
        {
          type: 'Imagery',
          note: '"Innocent tongues" - emphasises that these are young men who did nothing wrong. The "incurable sores" cannot be healed by victory or memorial.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'My friend, you would not tell with such high zest',
      annotations: [
        {
          type: 'Direct address',
          note: '"My friend" - sarcastic, bitter. The line is addressed to those who promote war. "High zest" - the enthusiasm with which they tell their lies.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'To children ardent for some desperate glory,',
      annotations: [
        {
          type: 'Pathos',
          note: '"Children" - emphasising the youth of soldiers. "Desperate glory" - the longing for honour that gets young men killed. They are too young to know better.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The old Lie: Dulce et decorum est',
      annotations: [
        {
          type: 'Capital "Lie"',
          note: 'The capitalisation of "Lie" emphasises its enormity. This is not just untrue - it is THE Lie, a foundational deception.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Pro patria mori.',
      annotations: [
        {
          type: 'Latin',
          note: 'The full Latin: "Dulce et decorum est pro patria mori" - "It is sweet and fitting to die for one\'s country". From the Roman poet Horace. Owen ends by quoting (and demolishing) the very motto used to recruit soldiers.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The poem\'s ending exposes the "Lie" by name. After everything we have just witnessed, the patriotic Latin sounds obscene.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Wilfred Owen (1893-1918)</h3>
    <p>Owen was an English poet and soldier. He fought in the trenches of the First World War and was killed in action one week before the Armistice in November 1918. He was 25. Most of his war poetry was published posthumously by his friend Siegfried Sassoon.</p>

    <h3>Composition (1917-1918)</h3>
    <p>"Dulce et Decorum Est" was written in October 1917 while Owen was being treated for shell shock at Craiglockhart War Hospital in Edinburgh. He had been sent there after a series of traumatic experiences in the trenches.</p>

    <h3>The Title</h3>
    <p>The title comes from the Roman poet <strong>Horace</strong>: "Dulce et decorum est pro patria mori" - "It is sweet and fitting to die for one\'s country". This Latin tag was widely used in patriotic propaganda to encourage young men to enlist. Owen calls it "the old Lie".</p>

    <h3>Chlorine Gas</h3>
    <p>Chemical weapons (chlorine, phosgene, mustard gas) were first used in WW1 and caused horrific deaths. Chlorine gas attacks the lungs, causing the victim to drown in their own bodily fluids. Soldiers had to put on masks within seconds of an attack.</p>

    <h3>Owen\'s Purpose</h3>
    <p>Owen wrote in his preface: "My subject is War, and the pity of War. The Poetry is in the pity." He saw it as his duty to expose the truth of war to those at home who supported it. The poem was originally addressed to <strong>Jessie Pope</strong>, a popular jingoistic poet whose work encouraged young men to enlist.</p>

    <h3>Trench Warfare</h3>
    <p>WW1 trench warfare was characterised by terrible conditions: mud, cold, rats, lice, disease, and constant shelling. Soldiers spent days under bombardment, often unable to move. The exhaustion and trauma described in the poem were universal experiences.</p>
  `,

  summary: `Stanza 1 - Exhaustion: Soldiers stagger back from the front line "like old beggars". They are exhausted, lame, blind, marching half-asleep through mud. Some have lost their boots. They cannot hear the gas shells dropping behind them.

Stanza 2 - The gas attack: Suddenly there is a shout - "Gas! GAS!" The men scramble to put on their gas masks. But one soldier fails. Through the misty panes of his mask, the speaker watches him drown in poison gas as if "under a green sea".

Stanza 3 (short) - Trauma: The speaker reveals that this scene returns in his dreams. The dying man "plunges at me, guttering, choking, drowning". The trauma is permanent.

Stanza 4 - Direct address: Owen addresses the reader (and especially those who promote war). He invites us to witness the dead soldier\'s body being thrown into a wagon. He describes the body in graphic detail - the writhing eyes, the gargling blood, the corrupted lungs. He concludes that anyone who saw this would not tell young soldiers "the old Lie": that it is sweet and fitting to die for one\'s country.

Overall meaning: The poem is a savage attack on the patriotic propaganda that sent young men to die in WW1. Owen uses graphic, ugly imagery to expose the gap between the romantic ideal of war and its actual horror. The poem is a moral argument: those who promote war are lying to children.`,

  formAndStructure: `Form: Loosely structured into four stanzas of varying lengths. The form mirrors the chaos of war - it cannot be neatly contained.

Rhyme scheme: Alternating ABAB rhyme throughout, but with deliberate disruptions and pararhymes (near-rhymes). The rhyme provides a tense order beneath the chaotic content.

Metre: Mostly iambic pentameter, but Owen frequently breaks the metre to mirror the disrupted reality of the trenches. The rhythm staggers and stumbles like the soldiers.

Four-stanza structure: Each stanza has a different function:
- Stanza 1 (8 lines): Slow, exhausted - sets the scene of trench retreat.
- Stanza 2 (6 lines): Fast, panicked - the gas attack.
- Stanza 3 (2 lines): Short, isolated - the trauma in the speaker\'s mind.
- Stanza 4 (12 lines): Long, argumentative - direct address to the reader.

Volta: There are two turns. The first is "Gas! GAS!" - the sudden shift from exhaustion to terror. The second is "If in some smothering dreams" - the shift from past event to present argument.

Tense shifts: The poem moves from past tense (the experience) to present tense (the recurring trauma) to conditional ("If you could hear..."). Owen makes the past inescapable.

Direct address: The poem ends by speaking directly to the reader ("My friend"). This breaks the fourth wall - we are no longer just witnesses, we are accused.

Sound: Heavy use of harsh consonants ("trudge", "sludge", "guttering") and unpleasant vowel sounds. The poem is deliberately ugly to mirror the ugliness of war.`,

  keyQuotes: [
    {
      quote: 'Bent double, like old beggars under sacks',
      analysis:
        'The opening line immediately demolishes the romantic view of war. The soldiers are not strong young heroes but "old beggars" - prematurely aged, humiliated, crushed under the weight of their packs. The simile reverses every patriotic image.',
      themes: ['Reality of war', 'Suffering', 'Anti-heroic'],
    },
    {
      quote: 'Knock-kneed, coughing like hags, we cursed through sludge',
      analysis:
        'Owen uses ugly, undignified comparisons - the soldiers are like "hags" (ugly old women). They "cursed" - using obscenity, not glorious speech. They moved through "sludge" - mud and filth. Every word destroys nobility.',
      themes: ['Reality of war', 'Degradation', 'Anti-heroic'],
    },
    {
      quote: 'GAS! Quick, boys! - An ecstasy of fumbling',
      analysis:
        'The capitalisation captures the rising panic. The oxymoron "ecstasy of fumbling" pairs an emotion of joy with frantic incompetence. "Ecstasy" comes from a Greek word meaning "standing outside oneself" - the soldiers are dissociated by terror.',
      themes: ['Panic', 'Trauma', 'Sudden violence'],
    },
    {
      quote: 'As under a green sea, I saw him drowning',
      analysis:
        'The chlorine gas is imagined as a green sea. The dying man "drowns" because gas fills the lungs with fluid. The simile makes an alien chemical death feel familiar - and the helplessness of the speaker watching through his own mask is heartbreaking.',
      themes: ['Death', 'Helplessness', 'Chemical warfare'],
    },
    {
      quote: 'He plunges at me, guttering, choking, drowning',
      analysis:
        'The tricolon of present-tense verbs makes the moment immediate and inescapable. "Guttering" is what a candle does as it dies - the soldier\'s life flickers out slowly. The use of present tense shows the trauma never ends - the dead man is always dying in the speaker\'s mind.',
      themes: ['Trauma', 'PTSD', 'Lasting impact'],
    },
    {
      quote: 'His hanging face, like a devil\'s sick of sin',
      analysis:
        'A shocking simile that reverses expectations. Even a devil - the embodiment of evil - would be sickened by what war does. Owen invokes religious imagery to suggest war is worse than damnation.',
      themes: ['Horror', 'Evil', 'Disgust'],
    },
    {
      quote: 'My friend, you would not tell with such high zest / To children',
      analysis:
        'Owen addresses the reader directly. "My friend" is bitterly sarcastic. "Children" emphasises the youth of soldiers - they are not adults making informed choices but boys deceived by lies. The accusation is moral and personal.',
      themes: ['Argument', 'Moral outrage', 'Youth'],
    },
    {
      quote: 'The old Lie: Dulce et decorum est / Pro patria mori',
      analysis:
        'The poem ends by naming "the old Lie" - the Latin phrase claiming it is sweet and fitting to die for your country. After everything we have just witnessed, the patriotic motto sounds obscene. The capital "L" on "Lie" makes it monumental - a foundational deception that has killed millions.',
      themes: ['Anti-war', 'Patriotism critique', 'Deception'],
    },
  ],

  languageDevices: [
    {
      device: 'Simile',
      example: 'like old beggars under sacks ... like a devil\'s sick of sin ... obscene as cancer',
      effect:
        'Owen\'s similes consistently use ugly, degrading comparisons. Soldiers are like beggars, hags, devils, cancer victims. Every comparison strips away any romantic or heroic image of war. The cumulative effect is overwhelming disgust.',
      lineRef: 1,
    },
    {
      device: 'Sensory imagery',
      example: 'guttering, choking, drowning ... blood gargling from froth-corrupted lungs',
      effect:
        'Owen forces the reader to see, hear, and almost taste the horror. The sensory details are deliberately graphic and unpleasant. The reader cannot look away - just as the speaker cannot escape the memory.',
      lineRef: 16,
    },
    {
      device: 'Direct address',
      example: 'If in some smothering dreams, you too could pace ... My friend',
      effect:
        'In the final stanza, Owen addresses the reader directly, especially those who romanticise war. The "you" forces complicity. We are no longer passive witnesses - we are part of the lie if we don\'t see the truth.',
      lineRef: 17,
    },
    {
      device: 'Volta',
      example: 'Gas! GAS! Quick, boys!',
      effect:
        'The poem accelerates from slow, exhausted trudging to immediate panic. The shift in pace mirrors the unpredictability of war - peace and horror are seconds apart.',
      lineRef: 9,
    },
    {
      device: 'Latin allusion',
      example: 'Dulce et decorum est / Pro patria mori',
      effect:
        'Owen quotes Horace\'s patriotic motto only to demolish it. The Latin sounds high-minded and noble - until you place it after the description of a man drowning in poison gas. The juxtaposition is the poem\'s entire argument.',
      lineRef: 27,
    },
    {
      device: 'Tricolon',
      example: 'guttering, choking, drowning',
      effect:
        'Three present-tense verbs in a row make the death immediate and inescapable. The accumulation creates a sense of slow suffocation. The fact that they are present tense - happening now, in the speaker\'s mind - is devastating.',
      lineRef: 16,
    },
    {
      device: 'Diction',
      example: 'sludge, trudge, fumbling, gargling, froth-corrupted',
      effect:
        'Owen\'s word choices are deliberately ugly. The harsh consonants and unpleasant sounds make the poem itself feel disgusting. The language enacts the horror it describes.',
      lineRef: 2,
    },
  ],
}

const comparisons = [
  {
    title: 'The Soldier',
    poet: 'Rupert Brooke',
    href: '/revision/poetry/eduqas/the-soldier',
    reason:
      'The most famous Eduqas pairing. Owen exposes the horror of war; Brooke romanticises death in battle. Brooke\'s "England" is exactly the lie Owen attacks. A perfect study in contrasting WW1 voices.',
    themes: ['War', 'Patriotism', 'Anti-war'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems expose the human cost of war. Hardy shows the suffering at home; Owen shows it at the front. Both use bitter irony to undermine patriotic narratives.',
    themes: ['War', 'Suffering', 'Irony'],
  },
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/eduqas/london',
    reason:
      'Both poets attack the institutions of power that cause suffering. Blake\'s "blood down Palace walls" and Owen\'s "the old Lie" share a moral outrage against systems that exploit ordinary people.',
    themes: ['Institutional critique', 'Power', 'Suffering'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'de-1', question: 'What does the Latin title mean?', type: 'multiple-choice', options: ['War is wonderful', '"It is sweet and fitting to die for one\'s country" — a phrase Owen calls "the old Lie"', 'Soldiers are brave', 'Death is natural'], correctIndex: 1, explanation: 'The title comes from Horace\'s Odes: "Dulce et decorum est pro patria mori" — it is sweet and fitting to die for one\'s country. Owen calls this "the old Lie" and the poem is designed to demolish it.', topic: 'Context', difficulty: 'foundation' },
  { id: 'de-2', question: 'What event does the poem describe?', type: 'multiple-choice', options: ['A victory celebration', 'Exhausted soldiers caught in a gas attack, with one soldier dying horribly', 'A training exercise', 'A homecoming parade'], correctIndex: 1, explanation: 'The poem describes exhausted WWI soldiers retreating from the front when gas shells land. One soldier fails to get his mask on in time and dies a horrific death, drowning in his own fluids.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'de-3', question: 'What does "Bent double, like old beggars under sacks" achieve?', type: 'multiple-choice', options: ['It shows soldiers are strong', 'The simile strips soldiers of all heroism — they are broken, aged, and dehumanised by war', 'It describes their uniforms', 'It shows they are resting'], correctIndex: 1, explanation: 'The opening simile immediately demolishes the image of heroic soldiers. They are "bent double" like elderly beggars — exhausted, broken, and completely unheroic. War has aged and dehumanised them.', topic: 'Language', difficulty: 'foundation' },
  { id: 'de-4', question: 'What does "drowning" imagery suggest about the gas attack?', type: 'multiple-choice', options: ['The soldiers are swimming', 'The dying soldier is submerged in poison gas as if drowning in a green sea — the speaker watches helplessly', 'It describes rain', 'The trenches are flooded'], correctIndex: 1, explanation: 'Owen describes watching the dying soldier "as under a green sea, I saw him drowning." The gas creates a green, liquid-like substance. The speaker is helpless behind his mask, watching a man drown in poison.', topic: 'Language', difficulty: 'higher' },
  { id: 'de-5', question: 'What does "the blood / Come gargling from the froth-Loss-corrupted lungs" convey?', type: 'multiple-choice', options: ['The soldier is recovering', 'The graphic, visceral detail forces the reader to confront the true horror of death in war — destroying any notion of glory', 'It describes a cough', 'The soldier is drinking'], correctIndex: 1, explanation: 'This is deliberately shocking. Owen uses graphic, disgusting detail to make the reader experience the horror. "Gargling" and "froth-corrupted" are designed to sicken — this is what "dying for one\'s country" actually looks like.', topic: 'Language', difficulty: 'higher' },
  { id: 'de-6', question: 'Who was Wilfred Owen?', type: 'multiple-choice', options: ['A general who planned battles', 'A WWI soldier-poet who wrote from direct trench experience, killed one week before the Armistice', 'A journalist', 'A Victorian poet'], correctIndex: 1, explanation: 'Wilfred Owen (1893-1918) served in the trenches of WWI. He wrote from direct experience and was killed on 4 November 1918, just one week before the war ended.', topic: 'Context', difficulty: 'foundation' },
  { id: 'de-7', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'Loosely based on a sonnet structure with iambic pentameter, but broken and disrupted by the horror', 'Free verse', 'Rhyming couplets'], correctIndex: 1, explanation: 'The poem uses rough iambic pentameter and a loosely sonnet-like structure (two 14-line sections). But the form is deliberately disrupted — like the soldiers\' bodies and minds, the traditional form is broken by war.', topic: 'Structure', difficulty: 'higher' },
  { id: 'de-8', question: 'Who is Owen addressing when he says "My friend, you would not tell..."?', type: 'multiple-choice', options: ['His mother', 'Jessie Pope (and anyone who glorifies war) — the poem is a direct attack on pro-war propaganda', 'Another soldier', 'A doctor'], correctIndex: 1, explanation: 'Owen originally dedicated the poem to Jessie Pope, a civilian poet who wrote jingoistic, pro-war poetry encouraging young men to enlist. Owen\'s poem is a devastating rebuttal.', topic: 'Context', difficulty: 'higher' },
  { id: 'de-9', question: 'How does Owen use the dream/nightmare imagery in stanza 3?', type: 'multiple-choice', options: ['To create a peaceful scene', 'The dying soldier haunts Owen\'s dreams — the present tense "In all my dreams" shows the trauma is ongoing, not past', 'To describe actual sleep', 'To show the soldier recovered'], correctIndex: 1, explanation: 'The short third stanza shifts to present tense — "In all my dreams, before my helpless sight, / He plunges at me." This is PTSD: the dying soldier\'s image permanently haunts Owen\'s sleeping and waking life.', topic: 'Structure', difficulty: 'grade-9' },
  { id: 'de-10', question: 'How does the final word "Lie" function in the poem?', type: 'multiple-choice', options: ['It refers to lying down', 'Capitalised "Lie" — the entire poem has been building evidence to prove that dying for one\'s country is NOT sweet or fitting but horrific', 'It is a small detail', 'It describes dishonesty in general'], correctIndex: 1, explanation: 'The capitalised "Lie" is the poem\'s verdict. Everything before it — the exhaustion, the gas attack, the graphic death — serves as evidence. The poem is a legal prosecution against pro-war propaganda.', topic: 'Themes', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Dulce et Decorum Est attacks the glorification of war, exposes the horrific reality of combat, and argues that dying for one\'s country is "the old Lie."', keyPoints: ['Anti-war — the poem demolishes the idea that war is glorious', 'The horror of gas warfare — graphic, visceral detail', 'PTSD — the dying soldier haunts Owen\'s dreams', '"The old Lie" — pro-war propaganda is exposed as false'] },
  { topic: 'Language & Imagery', summary: 'Owen uses simile, graphic sensory detail, drowning imagery, and a direct address to destroy the myth of heroic war.', keyPoints: ['"Bent double, like old beggars" — soldiers stripped of heroism', '"Green sea" / "drowning" — gas attack as suffocation', '"Blood gargling from froth-corrupted lungs" — deliberately sickening', '"My friend" — direct, sarcastic address to pro-war propagandists'] },
  { topic: 'Structure & Form', summary: 'A disrupted sonnet-like structure with iambic pentameter that breaks down under the weight of horror — form mirrors content.', keyPoints: ['Loosely sonnet-like — traditional form broken by war', 'Three sections: exhaustion, gas attack, haunting aftermath', 'Present tense in stanza 3 — trauma is ongoing', 'Final "Lie" capitalised — the poem\'s devastating verdict'] },
]

const ESSAY_PROMPTS = [
  'How does Owen present the reality of war in Dulce et Decorum Est?',
  'Compare how the experience of conflict is presented in Dulce et Decorum Est and one other poem from the anthology.',
  'How does Owen use language and structure to challenge the idea that dying for one\'s country is glorious?',
]

export default function DulceEduqasPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Dulce et Decorum Est
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Wilfred Owen &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Dulce et Decorum Est"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Dulce et Decorum Est"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={dulce} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for war poetry comparison questions.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and
        Patents Act 1988, s.30). No commercial use is intended. All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
