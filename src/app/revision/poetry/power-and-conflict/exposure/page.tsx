'use client'

import Link from 'next/link'
import { ArrowLeft, Swords, Snowflake, Clock, Skull, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  InteractivePoemViewer,
  type PoemData,
} from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Power of Nature', icon: Snowflake, color: 'bg-sky-500/10 text-sky-400' },
  { label: 'Reality of Conflict', icon: Swords, color: 'bg-red-500/10 text-red-400' },
  { label: 'Suffering', icon: Skull, color: 'bg-amber-500/10 text-clay-600' },
  { label: 'Futility / Loss', icon: HelpCircle, color: 'bg-purple-500/10 text-purple-400' },
  { label: 'Passage of Time', icon: Clock, color: 'bg-emerald-500/10 text-emerald-400' },
]

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'exp-1',
    question: 'What is the main enemy of the soldiers in Exposure?',
    type: 'multiple-choice',
    options: ['The German army', 'The weather and the agonising wait — nature, not combat', 'Their commanding officers', 'Disease in the trenches'],
    correctIndex: 1,
    explanation: 'Owen presents the soldiers\' greatest enemy not as enemy combatants but as the "merciless iced east winds" and the endless, futile waiting. The refrain "But nothing happens" emphasises this.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'exp-2',
    question: 'What is the effect of the refrain "But nothing happens"?',
    type: 'multiple-choice',
    options: ['It creates excitement and suspense', 'It emphasises the futility and monotony of trench warfare — the anticlimax is the point', 'It shows the soldiers are safe', 'It indicates the war is nearly over'],
    correctIndex: 1,
    explanation: 'The devastating refrain appears at the end of multiple stanzas. The anticlimax is the poem\'s central argument: soldiers die not in heroic battle but in agonising, purposeless waiting.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'exp-3',
    question: 'What does "merciless iced east winds that knive us" suggest about nature?',
    type: 'multiple-choice',
    options: ['Nature is a comforting presence', 'Nature is personified as a cruel, deliberate attacker — a weapon as dangerous as any enemy', 'The soldiers enjoy the cold weather', 'The wind is gentle and refreshing'],
    correctIndex: 1,
    explanation: 'Owen personifies the wind as a merciless, deliberate attacker. The verb "knive" (Owen\'s own coinage) turns nature into a weapon, blurring the line between the weather and the enemy.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'exp-4',
    question: 'What does the rhetorical question "What are we doing here?" express?',
    type: 'multiple-choice',
    options: ['Curiosity about geography', 'The soldiers\' bewilderment and growing sense of the war\'s futility', 'Excitement about being at the front', 'A request for new orders'],
    correctIndex: 1,
    explanation: 'This direct question breaks the descriptive mode to express the soldiers\' deep confusion about the purpose of their suffering. It hints at the futility that Owen felt characterised the war.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'exp-5',
    question: 'How does Owen subvert the traditional symbolism of dawn in the poem?',
    type: 'multiple-choice',
    options: ['Dawn brings rescue and hope', 'Dawn brings "poignant misery" — it reveals suffering rather than offering salvation', 'Dawn signals the end of the war', 'Dawn is not mentioned in the poem'],
    correctIndex: 1,
    explanation: 'Dawn is usually a symbol of hope and new beginnings, but Owen subverts this: "The poignant misery of dawn begins to grow." Dawn here brings only more visible suffering, not relief.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'exp-6',
    question: 'What is the significance of the half-rhymes Owen uses throughout?',
    type: 'multiple-choice',
    options: ['He could not find proper rhymes', 'They create a sense of dissonance and incompleteness, mirroring the soldiers\' disturbed mental state', 'They make the poem easier to read', 'They are a mistake by the printer'],
    correctIndex: 1,
    explanation: 'Owen\'s half-rhymes (e.g., "knive us" / "nervous", "silent" / "salient") create deliberate dissonance. The failure to rhyme properly mirrors the wrongness of war and the soldiers\' fractured psychological state.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'exp-7',
    question: 'Who was Wilfred Owen, and when was Exposure written?',
    type: 'multiple-choice',
    options: ['A Victorian poet who wrote about the Industrial Revolution', 'A WWI soldier-poet who wrote from direct experience of trench warfare, writing Exposure in 1917-18', 'A WWII war correspondent', 'A Romantic poet who opposed Napoleon'],
    correctIndex: 1,
    explanation: 'Wilfred Owen was a soldier in the trenches of World War I. He wrote Exposure in 1917-18 from direct personal experience. He was killed on 4 November 1918, one week before the Armistice.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'exp-8',
    question: 'What does "Dawn massing in the east her melancholy army" suggest?',
    type: 'multiple-choice',
    options: ['The army is preparing to attack at dawn', 'Dawn is personified as a military general, making nature itself an enemy force attacking the soldiers', 'The sun is rising normally', 'The soldiers are excited about morning'],
    correctIndex: 1,
    explanation: 'Dawn is personified as a female general gathering an army of clouds. Nature becomes a military force just as lethal as the human enemy — the soldiers are attacked from all sides.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'exp-9',
    question: 'How does the structure of each stanza reinforce the poem\'s message of futility?',
    type: 'multiple-choice',
    options: ['Each stanza builds to a climactic action scene', 'Each stanza builds tension through sensory description then deflates with the anticlimax "But nothing happens"', 'The stanzas get progressively shorter', 'The stanzas alternate between hope and despair equally'],
    correctIndex: 1,
    explanation: 'Each eight-line stanza builds atmospheric tension through vivid imagery, only to be deflated by the short, blunt final line. This repeated anticlimax structurally enacts the soldiers\' experience of endless, purposeless suffering.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'exp-10',
    question: 'Which poem from the Power and Conflict anthology best contrasts with Exposure in its presentation of soldiers?',
    type: 'multiple-choice',
    options: ['The Charge of the Light Brigade by Tennyson', 'Tissue by Imtiaz Dharker', 'The Emigrée by Carol Rumens', 'London by William Blake'],
    correctIndex: 0,
    explanation: 'Tennyson glorifies soldiers\' courage and noble sacrifice, while Owen strips war of all heroism, showing only futile suffering. They offer opposing views of the soldier\'s role: one heroic, one devastatingly anti-heroic.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary: 'Exposure presents the futility and horror of trench warfare, with nature as the true enemy and the soldiers\' suffering rendered meaningless by inaction.',
    keyPoints: [
      'Futility — "But nothing happens" — suffering without purpose or progress',
      'Power of nature — the weather is more deadly than the enemy',
      'Suffering — physical and psychological torment described in agonising detail',
      'Loss of faith — the soldiers question God, duty, and the purpose of war',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary: 'Owen uses personification, synaesthesia, half-rhyme, and a sustained semantic field of cold and death to immerse the reader in the soldiers\' suffering.',
    keyPoints: [
      '"Merciless iced east winds that knive us" — nature personified as a deliberate attacker',
      '"Dawn massing in the east her melancholy army" — dawn as a military general',
      'Half-rhymes create deliberate dissonance, reflecting the wrongness of war',
      'Synaesthesia ("Watching, we hear") — senses blurred by exhaustion and exposure',
    ],
  },
  {
    topic: 'Structure & Form',
    summary: 'Eight-line stanzas with half-rhyme and a devastating refrain. Each stanza builds tension only to deflate with "But nothing happens."',
    keyPoints: [
      'Refrain "But nothing happens" — structural embodiment of futility',
      'Half-rhyme — creates dissonance and a sense that nothing resolves properly',
      'Each stanza builds and deflates — mirroring the soldiers\' experience',
      'Present tense — places the reader in the trenches with the soldiers',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Owen present the suffering of soldiers in Exposure?',
  'Compare how the power of nature is presented in Exposure and one other poem from the anthology.',
  'How does Owen use language and structure to convey the futility of war in Exposure?',
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    title: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    reason:
      'Both present the horror of WWI, but while Exposure shows soldiers enduring passive suffering from the elements, Bayonet Charge captures the terrifying momentum of active combat. Compare how each poet conveys the dehumanising impact of war.',
  },
  {
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/power-and-conflict/storm-on-the-island',
    reason:
      'Both poems personify nature as a hostile, attacking force. Heaney\'s storm batters an island community, while Owen\'s weather slowly kills soldiers in the trenches. Compare the power of nature and how each poet uses it as an extended metaphor.',
  },
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred, Lord Tennyson',
    link: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
    reason:
      'Tennyson glorifies soldiers\' bravery and sacrifice in battle, while Owen strips war of all heroism, showing only futile suffering. Compare how each poet presents the role of the ordinary soldier and the purpose (or purposelessness) of conflict.',
  },
]

/* ── Poem data ─────────────────────────────────────────────────── */

const exposureData: PoemData = {
  title: 'Exposure',
  poet: 'Wilfred Owen',

  lines: [
    // Stanza 1
    { text: 'Our brains ache, in the merciless iced east winds that knive us...', annotations: [
      { type: 'Language', note: 'Opening with collective "Our" immerses the reader in the soldiers\' shared suffering. The ellipsis trails off into exhausted silence.', color: '#60a5fa' },
      { type: 'Imagery', note: '"Merciless iced east winds that knive us" -- nature is personified as a cruel, deliberate attacker. The verb "knive" (an Owen coinage) makes the wind a weapon.', color: '#f59e0b' },
    ]},
    { text: 'Wearied we keep awake because the night is silent...', annotations: [
      { type: 'Structure', note: 'Inversion ("Wearied we") foregrounds exhaustion. The silence is threatening -- they cannot sleep because quiet may mean an imminent attack.', color: '#a78bfa' },
    ]},
    { text: 'Low drooping flares confuse our memory of the salient...', annotations: [
      { type: 'Imagery', note: 'Flares distort perception and memory, blurring the boundary between reality and hallucination. "Salient" is a military term for a bulge in the front line.', color: '#f59e0b' },
    ]},
    { text: 'Worried by silence, sentries whisper, curious, nervous,', annotations: [
      { type: 'Language', note: 'List of adjectives ("curious, nervous") builds tension. Sibilance in "silence, sentries, whisper" creates a hushed, anxious atmosphere.', color: '#60a5fa' },
    ]},
    { text: 'But nothing happens.', annotations: [
      { type: 'Refrain', note: 'The devastating refrain. The anticlimax is the poem\'s central point: the soldiers\' greatest enemy is not combat but the agonising wait and exposure to the elements.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 2
    { text: 'Watching, we hear the mad gusts tugging on the wire,', annotations: [
      { type: 'Language', note: 'Synaesthesia -- "Watching, we hear" blends senses, reflecting disorientation. "Mad gusts" personifies the wind as insane and unpredictable.', color: '#60a5fa' },
    ]},
    { text: 'Like twitching agonies of men among its brambles.', annotations: [
      { type: 'Imagery', note: 'Simile compares barbed wire to brambles and wind-shaken wire to dying men twitching. Nature and war horror merge.', color: '#f59e0b' },
    ]},
    { text: 'Northward, incessantly, the flickering gunnery rumbles,', annotations: [
      { type: 'Sound', note: 'Onomatopoeia in "flickering" and "rumbles" creates a background soundscape of distant, constant bombardment.', color: '#34d399' },
    ]},
    { text: 'Far off, like a dull rumour of some other war.', annotations: [
      { type: 'Imagery', note: 'The fighting feels remote and unreal, emphasising the soldiers\' isolation. "Some other war" suggests detachment from the conflict\'s purpose.', color: '#f59e0b' },
    ]},
    { text: 'What are we doing here?', annotations: [
      { type: 'Language', note: 'Direct rhetorical question breaks the descriptive mode. Expresses bewilderment and hints at the futility the soldiers feel.', color: '#60a5fa' },
    ]},
    { text: '' },

    // Stanza 3
    { text: 'The poignant misery of dawn begins to grow...', annotations: [
      { type: 'Imagery', note: 'Dawn, usually a symbol of hope, instead brings "poignant misery". Owen subverts expectations -- light reveals suffering rather than salvation.', color: '#f59e0b' },
    ]},
    { text: 'We only know war lasts, rain soaks, and clouds sag stormy.' },
    { text: 'Dawn massing in the east her melancholy army', annotations: [
      { type: 'Personification', note: 'Dawn is personified as a female general gathering an army of clouds. Nature becomes a military force attacking the soldiers, just as lethal as the human enemy.', color: '#f59e0b' },
    ]},
    { text: 'Attacks once more in ranks on shivering ranks of grey,', annotations: [
      { type: 'Structure', note: '"Ranks on ranks" creates ambiguity -- it could describe rows of clouds or rows of soldiers. The repetition emphasises the relentless, wave-like assault of cold.', color: '#a78bfa' },
    ]},
    { text: 'But nothing happens.', annotations: [
      { type: 'Refrain', note: 'Repeated refrain reinforces the cyclical, pointless nature of their suffering. Despite dawn\'s "attack", the stalemate continues.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 4
    { text: 'Sudden successive flights of bullets streak the silence.', annotations: [
      { type: 'Sound', note: 'Sibilance and plosive alliteration ("Sudden successive") mimics the rapid burst of gunfire cutting through quiet. A rare moment of action.', color: '#34d399' },
    ]},
    { text: 'Less deadly than the air that shudders black with snow,', annotations: [
      { type: 'Key idea', note: 'The central paradox of the poem: bullets are "less deadly" than the weather. The cold kills more soldiers than the enemy.', color: '#ef4444' },
    ]},
    { text: 'With sidelong flowing flakes that flock, pause, and renew,', annotations: [
      { type: 'Language', note: 'Snowflakes are described with the verb "flock", suggesting living creatures gathering. The rhythm of "flock, pause, and renew" mimics the stop-start pattern of snowfall.', color: '#60a5fa' },
    ]},
    { text: 'We watch them wandering up and down the wind\'s nonchalance,', annotations: [
      { type: 'Personification', note: '"Wind\'s nonchalance" -- the wind is indifferent to the soldiers\' suffering. Nature does not care; it kills without malice or purpose.', color: '#f59e0b' },
    ]},
    { text: 'And turn our backs to our dying.', annotations: [
      { type: 'Key idea', note: 'Devastating understatement. The soldiers passively accept death. "Turn our backs" suggests both resignation and a refusal to confront their fate.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 5
    { text: 'Since we believe not otherwise can kind fires burn;', annotations: [
      { type: 'Imagery', note: 'The soldiers begin to hallucinate about home fires. "Kind fires" contrasts with the hostile cold -- warmth is associated with domestic life, now impossibly remote.', color: '#f59e0b' },
    ]},
    { text: 'Now ever suns smile true on child, or field, or fruit.', annotations: [
      { type: 'Language', note: 'Idyllic imagery of home ("child, or field, or fruit") represents what the soldiers are fighting for, yet also what they can never return to.', color: '#60a5fa' },
    ]},
    { text: 'For God\'s invincible spring our love is made afraid;', annotations: [
      { type: 'Key idea', note: '"God\'s invincible spring" -- the natural cycle of renewal feels impossible. Their love of life and home has been destroyed by the war.', color: '#ef4444' },
    ]},
    { text: 'Therefore, not loath, we lie out here; therefore were born,', annotations: [
      { type: 'Language', note: '"Not loath" -- not unwilling. A deeply ambiguous phrase: have they accepted their fate, or have they simply lost the will to resist?', color: '#60a5fa' },
    ]},
    { text: 'For love of God seems dying.', annotations: [
      { type: 'Key idea', note: 'Deeply ambiguous: either their love of God is dying, or God\'s love for them is dying. Both readings suggest spiritual abandonment and loss of faith.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 6
    { text: 'Tonight, this frost will fasten on this mud and us,', annotations: [
      { type: 'Imagery', note: '"Fasten" suggests the frost gripping them like a predator. The soldiers are becoming part of the landscape, fusing with the mud.', color: '#f59e0b' },
    ]},
    { text: 'Shrivelling many hands, and puckering foreheads crisp.', annotations: [
      { type: 'Imagery', note: 'Graphic physical detail of frostbite. "Shrivelling" and "puckering" describe the body deteriorating. "Crisp" is horrifyingly tactile.', color: '#f59e0b' },
    ]},
    { text: 'The burying-party, picks and shovels in their shaking grasp,', annotations: [
      { type: 'Structure', note: 'The "burying-party" arrives -- the dead are being buried. The men digging are also shaking from the cold, suggesting they will soon follow.', color: '#a78bfa' },
    ]},
    { text: 'Pause over half-known faces. All their eyes are ice,', annotations: [
      { type: 'Imagery', note: '"Half-known faces" -- the dead are barely recognisable, dehumanised by death and cold. "All their eyes are ice" is a chilling metaphor: they have literally frozen.', color: '#f59e0b' },
    ]},
    { text: 'But nothing happens.', annotations: [
      { type: 'Refrain', note: 'Final repetition of the refrain. Even death changes nothing -- the war, the cold, the suffering all continue. The ultimate expression of futility.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 7
    { text: 'Slowly our ghosts drag home: glimpsing the sunk fires, glozed', annotations: [
      { type: 'Imagery', note: 'The soldiers imagine their spirits leaving their bodies and returning home. "Ghosts" implies they are already dead. "Glozed" means glazed or dimmed -- the home fires are fading.', color: '#f59e0b' },
    ]},
    { text: 'With crusted dark-red jewels; crickets jingle there;', annotations: [
      { type: 'Imagery', note: 'Dying embers are "crusted dark-red jewels" -- beautiful yet extinguished. "Crickets jingle" evokes peaceful domestic sounds, painfully distant from the trenches.', color: '#f59e0b' },
    ]},
    { text: 'For hours the innocent mice rejoice, the house is theirs;', annotations: [
      { type: 'Imagery', note: 'Mice have taken over the empty homes. "Innocent" and "rejoice" contrast with the soldiers\' guilt and misery. Life continues at home without them.', color: '#f59e0b' },
    ]},
    { text: 'Shutters and doors, all closed: on us the doors are closed, --', annotations: [
      { type: 'Structure', note: 'Repetition of "closed" with a shift in meaning: first literal (the house is shut up), then metaphorical (they are shut out from home and life). The dash trails into despair.', color: '#a78bfa' },
    ]},
    { text: 'We turn back to our dying.', annotations: [
      { type: 'Refrain', note: 'Variation of the earlier "turn our backs to our dying" -- they cannot escape death. The hallucination of home offers no comfort.', color: '#ef4444' },
    ]},
    { text: '' },

    // Stanza 8
    { text: 'Is it that we are dying?', annotations: [
      { type: 'Language', note: 'Rhetorical question opens the final stanza. The soldiers are so numbed they cannot even tell if they are alive or dead.', color: '#60a5fa' },
    ]},
    { text: 'Slowly our ghosts drag home: glimpsing the sunk fires, glozed' },
    { text: 'With crusted dark-red jewels; crickets jingle there;' },
    { text: 'For hours the innocent mice rejoice, the house is theirs;' },
    { text: 'Shutters and doors, all closed: on us the doors are closed, --', annotations: [
      { type: 'Structure', note: 'The near-exact repetition of stanza 7 creates a haunting, cyclical effect -- the soldiers are trapped in an endless loop of suffering with no resolution.', color: '#a78bfa' },
    ]},
    { text: 'We turn back to our dying.', annotations: [
      { type: 'Refrain', note: 'The poem ends not with death itself but with the perpetual process of dying. There is no climax, no resolution -- only the endless, grinding exposure.', color: '#ef4444' },
    ]},
  ],

  context: `<p><strong>Wilfred Owen</strong> (1893--1918) is widely regarded as the greatest poet of the First World War. He enlisted in 1915 and experienced the horrors of trench warfare on the Western Front first-hand, including the Battle of the Somme.</p>
<p><strong>"Exposure"</strong> was drafted in 1917--18 during one of the coldest winters of the war, when Owen was stationed in the trenches near Beaumont Hamel. The poem draws directly on his letters home, in which he described the unbearable cold as a greater torment than enemy fire.</p>
<p>The poem\'s central argument is that the soldiers\' true enemy is not the opposing army but <strong>the weather itself</strong>. More men died from exposure, trench foot, and hypothermia than from direct combat in many sectors of the Western Front. Owen challenges the patriotic propaganda of the time by showing war as futile, purposeless suffering rather than glorious sacrifice.</p>
<p>Owen was killed in action on <strong>4 November 1918</strong>, just one week before the Armistice. "Exposure" was published posthumously in 1920.</p>`,

  summary: `"Exposure" describes a group of soldiers waiting in the trenches during a freezing winter night. Nothing happens -- no attack comes, no relief arrives. Instead, the men endure the relentless assault of icy winds, snow, and frost.

The poem moves through the long hours of darkness into dawn, but dawn brings no hope, only more cold. The soldiers hallucinate about the warm homes they have left behind, but these visions offer no comfort -- the doors of home are "closed" to them.

By the final stanzas, the men are dying of exposure. A burial party arrives, but even death changes nothing. The refrain "But nothing happens" hammers home the futility: the soldiers are trapped in an endless cycle of suffering without purpose, without glory, and without resolution.

Owen\'s message is bleak and deliberate: war is not heroic combat but passive, meaningless endurance. The real enemy is not the opposing army but the indifferent, merciless forces of nature.`,

  formAndStructure: `FORM:
- 8 stanzas of 5 lines each (quintains), giving the poem a regular, controlled appearance that contrasts with the chaos and suffering it describes.
- Written predominantly in hexameter (six stressed beats per line), creating a slow, heavy rhythm that mirrors the dragging passage of time and the soldiers' exhaustion.
- The final line of each stanza is noticeably shorter (a half-line), creating a dying fall that enacts the energy draining from the soldiers.

RHYME:
- Owen uses PARARHYME (also called half-rhyme or slant rhyme) throughout: "knive us / nervous", "silence / nonchalance", "snow / renew", "wire / war". The almost-but-not-quite rhymes create a sense of dissonance and unease -- nothing in this poem is comfortable or resolved.
- Pararhyme was Owen's signature technique. The consonant sounds match but the vowels shift, producing an unsettling, discordant effect.

REFRAIN:
- "But nothing happens" is repeated at the end of stanzas 1, 3, 5 (as a variation: "For love of God seems dying"), and 6, and echoed in the closing lines. It is the poem's structural backbone and thematic core.

ELLIPSIS:
- Owen uses ellipses ("...") at the ends of several lines, trailing off into silence. This mirrors the soldiers' exhaustion, their inability to finish thoughts, and the endless waiting.

CYCLICAL STRUCTURE:
- Stanzas 7 and 8 repeat almost identical lines, creating a loop. The poem has no resolution or climax -- it enacts the very stalemate it describes.`,

  keyQuotes: [
    {
      quote: 'Our brains ache, in the merciless iced east winds that knive us',
      analysis:
        'The opening line establishes collective suffering ("Our") and personifies the wind as a deliberate, merciless attacker. Owen coins the verb "knive" to make the cold feel like a stabbing weapon. The internal rhyme of "iced" and "east" creates a harsh, cutting sound.',
      themes: ['Power of Nature', 'Suffering'],
    },
    {
      quote: 'merciless iced east winds that knive us',
      analysis:
        'Concentrated personification: the wind is "merciless" (without pity) and actively attacks with knife-like precision. Owen transforms weather into a sentient enemy more dangerous than the opposing army.',
      themes: ['Power of Nature', 'Reality of Conflict'],
    },
    {
      quote: 'But nothing happens',
      analysis:
        'The poem\'s devastating refrain. Its simplicity is its power -- four monosyllabic words that encapsulate the entire experience of trench warfare: endless, purposeless waiting. The anticlimax is the point. "But" creates expectation that is immediately denied.',
      themes: ['Futility / Loss', 'Reality of Conflict'],
    },
    {
      quote: 'Sudden successive flights of bullets streak the silence',
      analysis:
        'A rare moment of action, rendered through sibilance ("Sudden successive...streak the silence") that mimics the hissing sound of bullets. Yet even this violence is immediately overshadowed by the cold, which Owen declares "less deadly" than snow.',
      themes: ['Reality of Conflict', 'Power of Nature'],
    },
    {
      quote: 'Dawn massing in the east her melancholy army',
      analysis:
        'Dawn is personified as a female military commander assembling troops. Owen subverts the conventional association of dawn with hope -- here it brings only another wave of cold and misery. Nature wages its own war against the soldiers.',
      themes: ['Power of Nature', 'Suffering'],
    },
    {
      quote: 'Is it that we are dying?',
      analysis:
        'A haunting rhetorical question that opens the final stanza. The soldiers are so numbed by cold and exhaustion that they cannot distinguish between life and death. It captures the total physical and psychological disintegration caused by exposure.',
      themes: ['Suffering', 'Futility / Loss'],
    },
    {
      quote: 'For love of God seems dying',
      analysis:
        'Deliberately ambiguous: their love of God is fading, or God\'s love for them is dying. Either reading suggests spiritual abandonment. Owen, who had been deeply religious, implies that the horrors of war have destroyed faith itself.',
      themes: ['Futility / Loss', 'Suffering'],
    },
    {
      quote: 'All their eyes are ice',
      analysis:
        'A stark, monosyllabic metaphor describing the frozen dead. The short vowel sounds create a cold, hard effect. The dead soldiers\' eyes, once full of life, are now literally and metaphorically frozen -- they reflect nothing.',
      themes: ['Suffering', 'Power of Nature'],
    },
    {
      quote: 'Shutters and doors, all closed: on us the doors are closed',
      analysis:
        'Repetition of "closed" shifts from literal to metaphorical: the physical doors of home are shut, and so are the doors to life, warmth, and hope. The soldiers are permanently excluded from the world they fought to protect.',
      themes: ['Futility / Loss', 'Suffering'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification of weather',
      example: 'merciless iced east winds that knive us',
      effect:
        'The wind is given human cruelty ("merciless") and weaponised action ("knive"). Throughout the poem, nature is the true antagonist -- more dangerous than the enemy army. This personification reinforces Owen\'s argument that war\'s greatest suffering comes not from combat but from the elements.',
      lineRef: 0,
    },
    {
      device: 'Pararhyme (half-rhyme)',
      example: 'knive us / nervous; silence / nonchalance; snow / renew',
      effect:
        'Owen\'s signature technique. The consonants match but the vowels shift, producing sounds that almost rhyme but never quite resolve. This creates a persistent sense of discomfort and incompleteness that mirrors the soldiers\' unresolved suffering and the poem\'s refusal to offer closure.',
      lineRef: 3,
    },
    {
      device: 'Rhetorical questions',
      example: 'What are we doing here?',
      effect:
        'Breaks the descriptive mode with a direct, unanswerable question. It voices the soldiers\' bewilderment and sense of purposelessness. There is no answer because the war itself has no justifiable purpose in Owen\'s view.',
      lineRef: 11,
    },
    {
      device: 'Semantic field of suffering',
      example: 'ache, wearied, shivering, shrivelling, dying',
      effect:
        'A sustained vocabulary of pain, exhaustion, and physical deterioration runs through the entire poem. This relentless accumulation of suffering words creates an oppressive atmosphere and prevents the reader from finding any comfort or relief.',
      lineRef: 0,
    },
    {
      device: 'Sibilance',
      example: 'Sudden successive flights of bullets streak the silence',
      effect:
        'The repeated "s" sounds mimic the hissing whistle of bullets and the whispering wind. Sibilance creates a tense, hushed atmosphere throughout the poem, reflecting the soldiers\' anxious vigilance in the freezing dark.',
      lineRef: 18,
    },
    {
      device: 'Ellipsis',
      example: 'Our brains ache, in the merciless iced east winds that knive us...',
      effect:
        'Owen uses trailing ellipses at the ends of lines to suggest thoughts left unfinished, energy fading, and the endless, unresolvable nature of the soldiers\' wait. The dots visually enact the soldiers trailing off into silence and exhaustion.',
      lineRef: 0,
    },
    {
      device: 'Juxtaposition (home vs. trenches)',
      example: 'kind fires burn / All their eyes are ice',
      effect:
        'Owen repeatedly contrasts the warmth and safety of home ("kind fires", "crickets jingle", "innocent mice") with the frozen horror of the trenches. This juxtaposition emphasises what the soldiers have lost and highlights the unbridgeable gap between civilian life and the reality of war.',
      lineRef: 24,
    },
  ],
}

/* ── Page component ────────────────────────────────────────────── */

export default function ExposurePage() {
  return (
    <div className="space-y-8">
      {/* ── Navigation ── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <Snowflake className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Exposure</h1>
            <p className="text-body-sm text-muted-foreground">
              Wilfred Owen &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
          </div>
        </div>
      </div>

      {/* ── Theme tokens ── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t.label} variant="secondary" className={t.color}>
            <t.icon className="size-3 mr-1" />
            {t.label}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ── */}
      <StudyTools
        textName="Exposure"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Exposure"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={exposureData} />

      {/* ── Comparison poems ── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Compare With
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
                <p className="text-sm text-card-foreground leading-relaxed">
                  {c.reason}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from Exposure by Wilfred Owen reproduced freely.
      </p>
    </div>
  )
}
