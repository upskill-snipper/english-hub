'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Disabled',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
  author: {
    '@type': 'Person',
    name: 'Wilfred Owen',
    birthDate: '1893',
    deathDate: '1918',
  },
  datePublished: '1917',
  inLanguage: 'en',
  about: ['War', 'Loss', 'Disability', 'Masculinity', 'Regret'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry — Paper 1 Section B',
  },
}

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Disabled',
  poet: 'Wilfred Owen',
  lines: [
    {
      text: 'He sat in a wheeled chair, waiting for dark,',
      annotations: [
        {
          type: 'Opening image',
          note: 'Owen begins with stillness. "Sat" and "waiting" reduce the soldier to passivity. We meet him already broken — there is no battlefield in this poem, only its aftermath.',
          color: '#3b82f6',
        },
        {
          type: 'Symbolism',
          note: '"Waiting for dark" is literal (he is waiting for someone to wheel him to bed) and symbolic (he is waiting for death). Dark is preferable to the daylight that exposes what he has lost.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And shivered in his ghastly suit of grey,',
      annotations: [
        {
          type: 'Diction',
          note: '"Ghastly" means horrifying but also pale, deathly. "Suit of grey" — the hospital uniform — drains him of colour. The line strips him of vitality before we even know what has happened.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Legless, sewn short at elbow. Through the park',
      annotations: [
        {
          type: 'Key quote',
          note: '"Legless, sewn short at elbow." A flat, brutal sentence. Owen withholds emotion — he simply states the body. The empty sleeves "sewn short" make the absence of limbs visible in the cloth itself.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Voices of boys rang saddening like a hymn,',
      annotations: [
        {
          type: 'Auditory imagery',
          note: 'Boys playing in the park — but their voices are "saddening", not joyful. The simile "like a hymn" turns play into mourning. The young soldier hears his own lost youth.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Voices of play and pleasure after day,',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The soft "p" and "s" sounds of "play and pleasure" make the line itself sound youthful and light — and unreachable. The world he can no longer enter is sketched in sound.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Till gathering sleep had mothered them from him.',
      annotations: [
        {
          type: 'Personification',
          note: '"Mothered them from him" — sleep is personified as a mother gathering her children inside. The soldier is locked outside maternal warmth. The image is heart-breaking: motherhood is the one thing that no longer comes for him.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'About this time Town used to swing so gay',
      annotations: [
        {
          type: 'Tonal shift',
          note: 'Stanza 2 turns into memory. "Town used to swing so gay" introduces the pre-war world — alive, social, sexually exciting. "Gay" here means joyful and bright.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'When glow-lamps budded in the light blue trees,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Glow-lamps budded" — street lamps appearing at dusk are imagined as flowers opening. The whole town seems alive and growing. Owen makes pre-war life feel almost spring-like.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And girls glanced lovelier as the air grew dim, —',
      annotations: [
        {
          type: 'Loss',
          note: 'The girls "glanced lovelier" — the verb is fleeting, and so is the moment. The em-dash leaves the line trailing, mirroring how the memory fades into present pain.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In the old times, before he threw away his knees.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Before he threw away his knees." Owen places the verb of agency on the soldier himself. He didn\'t lose his knees — he "threw [them] away". The phrasing is bitter, almost contemptuous, blaming his younger self for enlisting.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Now he will never feel again how slim',
      annotations: [
        {
          type: 'Sensory loss',
          note: '"Never feel again how slim" — both physical and emotional. He cannot touch a girl\'s waist; nor can he feel desired in return. Owen mourns the loss of touch, not of love.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "Girls' waists are, or how warm their subtle hands;",
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Slim", "warm", "subtle" — the line is rich with body memory. Owen makes us feel what the soldier has lost by rebuilding it on the page in three soft adjectives.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'All of them touch him like some queer disease.',
      annotations: [
        {
          type: 'Key quote',
          note: 'Devastating reversal. He used to touch girls; now they touch him as if he is contaminated. "Queer" here means strange or unsettling. Disability is rewritten as repulsion.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'There was an artist silly for his face,',
      annotations: [
        {
          type: 'Memory of beauty',
          note: 'Stanza 3 looks back further. "Silly for his face" — an artist was infatuated with him. The soldier was once a model of young male beauty. The casual "silly" makes his old life seem easy and admired.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'For it was younger than his youth, last year.',
      annotations: [
        {
          type: 'Time',
          note: '"Last year" — the speed is shocking. He has aged years in months. The word "younger" used twice in one line crystallises the loss of youth.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Now, he is old; his back will never brace;',
      annotations: [
        {
          type: 'Body imagery',
          note: '"His back will never brace" — military posture is gone. The verb "brace" carries the soldierly idea of standing to attention; now he can\'t even sit upright.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "He's lost his colour very far from here,",
      annotations: [
        {
          type: 'Euphemism',
          note: '"Lost his colour" understates massively. The reader must fill in: he has lost blood, in France, on the battlefield. The geographic distance ("very far from here") matches the emotional distance.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Poured it down shell-holes till the veins ran dry,',
      annotations: [
        {
          type: 'Key quote',
          note: 'A horrifying image. His blood is "poured" into the holes left by shells, as if he has emptied himself into the war. "Veins ran dry" makes the soldier into something drained — a vessel emptied for nothing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And half his lifetime lapsed in the hot race,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Hot race" — the rush of battle. Half his "lifetime" lapsed in a single charge. War compresses years into seconds and then steals them.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And leap of purple spurted from his thigh.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Leap of purple" — arterial blood, painted as an athletic movement. The "leap" recalls the sporting young man of an earlier stanza. His own blood is the last thing of his that can leap.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'One time he liked a blood-smear down his leg,',
      annotations: [
        {
          type: 'Irony',
          note: "Stanza 4 enters his pre-war head. Once, blood from a football match was a badge of pride. The juxtaposition with the previous stanza's arterial bleeding is brutal.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'After the matches carried shoulder-high.',
      annotations: [
        {
          type: 'Imagery of glory',
          note: 'Carried "shoulder-high" by his teammates — the very image of triumphant young manhood. Owen sets this celebration against the wheelchair in stanza 1. He used to be lifted up; now he cannot stand.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "It was after football, when he'd drunk a peg,",
      annotations: [
        {
          type: 'Casual masculinity',
          note: 'The world of the pre-war young man: football, beer ("a peg"), pals. The casualness sharpens the loss; we see the easiness of the life that has ended.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "He thought he'd better join. — He wonders why.",
      annotations: [
        {
          type: 'Key quote',
          note: 'The single most damning line in the poem. He enlisted on a drunken whim — "He thought he\'d better join." The em-dash and the four-word follow-up — "He wonders why." — drop the entire weight of the war onto a single, casual decision.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Someone had said he'd look a god in kilts,",
      annotations: [
        {
          type: 'Vanity',
          note: 'He joined partly to look good in a Scottish regiment\'s kilt. "A god in kilts" is the language of the recruiting poster. Owen exposes how thin the soldier\'s motivations were.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "That's why; and maybe, too, to please his Meg;",
      annotations: [
        {
          type: 'Trivial reasons',
          note: 'He enlisted for vanity and to impress a girl. Owen lists his reasons in deliberately small terms — there is no grand patriotism, no real conviction. The casualness of "his Meg" makes the cost feel even more horrific.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Aye, that was it, to please the giddy jilts,',
      annotations: [
        {
          type: 'Diction',
          note: '"Giddy jilts" — flighty girls who flirt and reject. Owen uses Scottish/dialect vocabulary that fits the kilted regiment. The bitterness is in the phrase: he gave his legs for the approval of girls who didn\'t care.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "He asked to join. He didn't have to beg;",
      annotations: [
        {
          type: 'Recruiting culture',
          note: 'He volunteered. Owen blames the recruiting culture as much as the soldier — "He didn\'t have to beg" because the army was hungry for any young body, even underage ones.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Smiling they wrote his lie: aged nineteen years.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Smiling they wrote his lie." The recruiting officers knowingly accepted his false age. He was probably 17. The smiling is what condemns them: they enlisted a child and pretended not to notice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Germans he scarcely thought of; all their guilt,',
      annotations: [
        {
          type: 'Politics',
          note: 'He had no political reason to fight. "Germans he scarcely thought of" — Owen pointedly removes the official justification of the war. The actual enemy was not really on his mind.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "And Austria's, did not move him. And no fears",
      annotations: [
        {
          type: 'Pacifist undertone',
          note: 'Owen quietly indicates that the political case for the war did not motivate him. The line implies the official war narrative was irrelevant to ordinary recruits — a powerful pacifist note.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Of Fear came yet. He thought of jewelled hilts',
      annotations: [
        {
          type: 'Romantic illusion',
          note: '"Jewelled hilts" — sword handles studded with jewels. He imagined war as a Romantic adventure with beautiful weapons. The pre-war recruit is full of illustrated-magazine images, not reality.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'For daggers in plaid socks; of smart salutes;',
      annotations: [
        {
          type: 'Imagery of glamour',
          note: 'Daggers in tartan socks (the Scottish "sgian-dubh"), smart salutes — the glamour of the uniform. Owen lists the recruiting-poster images that drew the boy in.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And care of arms; and leave; and pay arrears;',
      annotations: [
        {
          type: 'Mundane attractions',
          note: 'Owen mixes the heroic ("smart salutes") with the trivial ("pay arrears"). The recruit thought of regular wages as much as glory. War was a job and a costume drama.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Esprit de corps; and hints for young recruits.',
      annotations: [
        {
          type: 'Officialese',
          note: 'The French phrase "esprit de corps" (group spirit) and "hints for young recruits" both come from official army literature. Owen lets the language of recruiting expose itself.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And soon, he was drafted out with drums and cheers.',
      annotations: [
        {
          type: 'Departure',
          note: '"Drums and cheers" is the noisy, ceremonial send-off. Owen will end the poem in silence — the contrast between his cheering departure and his silent return is one of the poem\'s key structural ironies.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    {
      text: 'Some cheered him home, but not as crowds cheer Goal.',
      annotations: [
        {
          type: 'Anti-climax',
          note: 'Stanza 5 returns to the present and to homecoming. "Some cheered him home, but not as crowds cheer Goal." The football comparison is devastating — winning a goal got more cheers than coming back wounded from war.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Only a solemn man who brought him fruits',
      annotations: [
        {
          type: 'Diminished reception',
          note: 'No crowds, no parade — just one "solemn man" with fruit. The hospital welcome is private and small. Owen drains all the colour from the homecoming.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Thanked him; and then enquired about his soul.',
      annotations: [
        {
          type: 'Religious bitterness',
          note: 'A clergyman, presumably. After thanking him, the man immediately turns to his "soul" — an institutional response that gives the soldier no comfort. Owen, who lost his Christian faith in the war, is bitter about this kind of religious greeting.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Now, he will spend a few sick years in institutes,',
      annotations: [
        {
          type: 'Future',
          note: '"A few sick years in institutes" — the soldier\'s future is reduced to a flat statement. "Sick years" is a brutal phrase: the years themselves are diseased. Owen offers no recovery, no redemption.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And do what things the rules consider wise,',
      annotations: [
        {
          type: 'Diction',
          note: '"What things the rules consider wise" — the language is deadening. He has no agency. The "rules" decide everything; he is a body to be managed.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And take whatever pity they may dole.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Take whatever pity they may dole." "Dole" suggests both charity and reluctance — pity given out grudgingly in small portions. He must accept whatever scraps of compassion the world will give him.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Tonight he noticed how the women's eyes",
      annotations: [
        {
          type: 'Female gaze',
          note: 'The poem has been preoccupied with how girls look at him. Now Owen returns to it for the climax. "The women\'s eyes" — plural, generalised — they no longer see him.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Passed from him to the strong men that were whole.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The cruellest line. The women\'s eyes "passed from him to the strong men that were whole." Sexual desirability has shifted entirely to the able-bodied. He is invisible. The word "whole" carries the full force: it means physically intact, but also human in a way he no longer is.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "How cold and late it is! Why don't they come",
      annotations: [
        {
          type: 'Voice',
          note: 'For the first time in the poem we hear the soldier\'s actual voice. "How cold and late it is!" — childlike, almost petulant. He is reduced to waiting for nurses to put him to bed.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "And put him into bed? Why don't they come?",
      annotations: [
        {
          type: 'Closing image',
          note: 'The poem ends with a question — repeated and unanswered. "Why don\'t they come?" is unbearably plaintive. He cannot move himself, and no one is hurrying. The reader is left in the silence after the question.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Wilfred Owen (1893–1918)</h3>
    <p>Owen is the most-studied of the British First World War poets. He fought as a Lieutenant in the Manchester Regiment, was hospitalised for shell-shock at Craiglockhart in 1917 (where he met Siegfried Sassoon), and was killed in action on 4 November 1918 — exactly one week before the Armistice. He was 25.</p>

    <h3>Composition</h3>
    <p>"Disabled" was written at <strong>Craiglockhart War Hospital in October 1917</strong>, where Owen was being treated for shell-shock. The poem was inspired by a young amputee Owen saw at the hospital and by photographs of wounded soldiers in the wards. Owen showed the draft to Sassoon, who praised it.</p>

    <h3>Publication</h3>
    <p>The poem was first published in 1920, two years after Owen\'s death, in his posthumous <em>Poems</em> (edited by Sassoon, Chatto &amp; Windus). Owen had only seen four of his poems in print during his lifetime. His mother, Susan Owen, devoted years to ensuring his work survived.</p>

    <h3>Recruitment culture</h3>
    <p>The poem condemns the wartime recruiting culture that pressured boys — many under-age — into volunteering. Posters, music-hall songs, and white-feather campaigns shamed young men into the army. Owen himself was older when he enlisted, but he saw at first hand how easily teenagers were swept up: "Smiling they wrote his lie: aged nineteen years."</p>

    <h3>Disability and the home front</h3>
    <p>By 1918 there were <strong>over 41,000 amputees</strong> from the British forces alone. Many returned to small pensions, social isolation, and a country that quickly looked away. "Disabled" insists on the human cost that the official narrative tried to hide.</p>

    <h3>Owen\'s preface</h3>
    <p>Owen wrote a famous draft preface to his planned 1918 collection: "My subject is War, and the pity of War. The Poetry is in the pity." "Disabled" exemplifies that programme: there is no glorification, only patient attention to a single wounded man.</p>
  `,

  summary: `Stanza 1 (lines 1–6): A young soldier, both legs amputated and one arm gone above the elbow, sits in a wheelchair in a hospital park "waiting for dark". The voices of boys playing in the park sound mournful to him; sleep eventually carries them away.

Stanza 2 (lines 7–13): He remembers the town before the war — full of light, music and pretty girls. Now he can no longer feel a girl\'s waist. Women treat him "like some queer disease." He has lost the body that used to make him desirable.

Stanza 3 (lines 14–21): He remembers being painted by an artist who admired his face, "younger than his youth, last year". Now he is aged. His blood was poured into shell-holes; "half his lifetime lapsed in the hot race" of battle.

Stanza 4 (lines 22–37): The longest stanza, looking back at his enlistment. He joined on a drunken whim after a football match, partly because someone said he\'d "look a god in kilts" and partly to impress a girl called Meg. He thought nothing of Germany or Austria. The recruiting officers smiled and wrote his false age in the records. He was drafted out "with drums and cheers".

Stanza 5 (lines 38–47): The homecoming. No crowds, just "a solemn man" with fruit. He will now spend "a few sick years in institutes". The women\'s eyes "passed from him to the strong men that were whole". The poem ends with him asking, twice, "Why don\'t they come?" — waiting helplessly for someone to put him to bed.

Overall meaning: A devastating portrait of a young veteran whose life has been emptied by the war he was tricked into joining. Owen attacks recruiting culture, wartime glamour and the indifference of the home front. The "pity" Owen promised in his preface is here directed at one specific, ordinary young man.`,

  formAndStructure: `Form: Five stanzas of irregular length (six, seven, eight, sixteen, ten lines). The fourth stanza — the recruitment scene — is by far the longest, mirroring how the foolish decision to enlist still dominates the soldier\'s thinking.

Rhyme scheme: ABABCD CCDCED CCEFCC FF GFAGBHCBHCC IFFCGCDCDD — irregular, with frequent half-rhymes and pararhymes (a technique Owen pioneered, where consonants match but vowels don\'t — e.g. "park / dark", "hilts / kilts"). The almost-rhymes feel like a body that doesn\'t quite work properly.

Iambic pentameter: The metre is loosely iambic pentameter but Owen continually disrupts it. The breaks in rhythm match the soldier\'s broken body and broken life.

Time structure: The poem moves between the bleak present (stanzas 1, 5) and remembered past (stanzas 2, 3, 4). The structure is itself a kind of trauma: he keeps drifting back to who he was, and being pulled into who he is now.

Volta: There are several minor turns. The largest is at the start of stanza 4, where the poem zooms further back to the moment of enlistment — and at the close of stanza 5, where the soldier\'s own voice finally enters: "How cold and late it is!"

Caesura: Owen uses heavy mid-line stops ("Legless, sewn short at elbow.") to fragment the lines. The fractured movement of the verse mirrors the fractured movement of the soldier\'s body.

Closing question: The final two lines are a repeated question. Owen ends not with a moral but with helplessness: "Why don\'t they come?" The poem refuses to provide an answer.`,

  keyQuotes: [
    {
      quote: 'Legless, sewn short at elbow',
      analysis:
        'A flat, brutal sentence that withholds emotion. Owen simply states the body. "Sewn short at elbow" focuses on the empty cloth — the absence of the limb made visible in the way the suit has been altered. The plainness is what makes it unbearable.',
      themes: ['Disability', 'Loss', 'Body'],
    },
    {
      quote: 'before he threw away his knees',
      analysis:
        'A devastating phrasing. Owen places the verb of agency on the soldier himself — he didn\'t lose his knees, he "threw [them] away". The word choice blames the younger self for enlisting, and the casual idiom (you "throw away" something cheap) reveals the soldier\'s bitterness about his own naivety.',
      themes: ['Regret', 'Self-blame', 'Disability'],
    },
    {
      quote: 'All of them touch him like some queer disease',
      analysis:
        'A complete reversal of pre-war life. Where once he could touch girls, now they recoil from him as if he is contaminated. "Queer" here means strange or unsettling — and "disease" makes disability into something contagious in the social imagination. Owen exposes how disability is not just a physical condition but a social exile.',
      themes: ['Disability', 'Isolation', 'Touch'],
    },
    {
      quote: 'Poured it down shell-holes till the veins ran dry',
      analysis:
        'A horrifying metaphor. The soldier\'s blood is "poured" into the holes left by shell explosions, as if he has emptied himself into the war. "Veins ran dry" makes him a vessel drained for nothing. Owen turns sacrifice into waste — the blood didn\'t buy anything.',
      themes: ['War', 'Sacrifice', 'Loss'],
    },
    {
      quote: "He thought he'd better join. — He wonders why.",
      analysis:
        'The most damning line in the poem. He enlisted on a drunken whim — "he thought he\'d better join". The em-dash and the four-word follow-up — "He wonders why." — drop the entire cost of the war onto a casual, half-conscious decision. There was no real reason; only a moment of bravado.',
      themes: ['Recruitment', 'Regret', 'Naivety'],
    },
    {
      quote: 'Smiling they wrote his lie: aged nineteen years',
      analysis:
        'A condemnation of the recruiting officers. They knowingly accepted his false age — he was probably 17. "Smiling" is the killing word: they enlisted a child and pretended not to notice. Owen blames the system as much as the boy.',
      themes: ['Recruitment', 'Institutional guilt', 'Age'],
    },
    {
      quote: "the women's eyes / Passed from him to the strong men that were whole",
      analysis:
        'The cruellest line in the poem. After all the soldier\'s memories of being attractive to girls, the women now look past him to "the strong men that were whole". "Whole" carries the full force: it means physically intact, but also human in a way he no longer is. He has been erased from the field of desire.',
      themes: ['Disability', 'Masculinity', 'Erasure'],
    },
    {
      quote: "Why don't they come?",
      analysis:
        'The poem\'s closing line, repeated. The soldier cannot move himself; he is waiting for nurses to put him to bed. The childlike, helpless tone — "Why don\'t they come?" — is unbearable. Owen ends not with a statement but with an unanswered question, leaving the reader in the silence.',
      themes: ['Helplessness', 'Disability', 'Waiting'],
    },
  ],

  languageDevices: [
    {
      device: 'Pararhyme',
      example: 'park / dark; hilts / kilts',
      effect:
        'Owen pioneered pararhyme — rhymes where the consonants match but the vowels don\'t. The almost-rhymes leave the ear unsettled, like a body that doesn\'t quite work properly. Throughout "Disabled" the technique creates a sense of brokenness in the very sound of the poem.',
      lineRef: 1,
    },
    {
      device: 'Caesura',
      example: 'Legless, sewn short at elbow.',
      effect:
        "A heavy mid-line stop that fragments the verse. The fractured rhythm mirrors the soldier's fractured body. Owen uses caesura repeatedly to refuse the smoothness of pre-war pastoral verse.",
      lineRef: 3,
    },
    {
      device: 'Personification',
      example: 'gathering sleep had mothered them from him',
      effect:
        'Sleep is personified as a mother. The soldier is locked outside maternal warmth — sleep mothers everyone except him. The image makes his loneliness intimate and devastating.',
      lineRef: 6,
    },
    {
      device: 'Juxtaposition',
      example: 'a blood-smear down his leg / After the matches carried shoulder-high',
      effect:
        'Owen juxtaposes football blood (a badge of glory) with battlefield blood (the loss of his legs). The same bodily image carries opposite meanings — pre-war pride against post-war ruin.',
      lineRef: 22,
    },
    {
      device: 'Bathos',
      example: 'Esprit de corps; and hints for young recruits',
      effect:
        'Owen mixes high official language ("esprit de corps") with banal fillers ("hints for young recruits"). The recruiting culture is exposed as a mishmash of phrases, none of them connected to the reality of war.',
      lineRef: 35,
    },
    {
      device: 'Repetition / closing question',
      example: "Why don't they come? … Why don't they come?",
      effect:
        'The poem ends with a question repeated twice. There is no answer. Owen refuses resolution — the helpless waiting is the final image. The repetition makes the silence after the question deafening.',
      lineRef: 47,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/igcse/edexcel/poetry/war-photographer',
    reason:
      "Both poems sit on the home front and look at the human cost of war. Owen forces us to look at one wounded man; Duffy's photographer mediates suffering through images that the public will quickly forget. Compare how each poem indicts the indifference of those at home.",
    themes: ['War', 'Witness', 'Suffering'],
  },
  {
    title: 'Out, Out—',
    poet: 'Robert Frost',
    href: '/igcse/edexcel/poetry/out-out',
    reason:
      "Both poems describe a young person whose life is destroyed by a single instant. Frost's farm boy loses his hand to a saw; Owen's soldier loses his legs to a shell. Both poems end in indifference — the world simply moves on.",
    themes: ['Mortality', 'Indifference', 'Youth'],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/igcse/edexcel/poetry/ozymandias',
    reason:
      'Both poems undo a heroic image of masculinity. Shelley\'s "sneer of cold command" is reduced to rubble; Owen\'s recruit, who once played football and chased glory, is reduced to a wheelchair. Compare how each poet exposes the emptiness of conquering masculinity.',
    themes: ['Masculinity', 'Loss', 'Empire vs. trench'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function DisabledPage() {
  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Disabled</h1>
            <p className="text-body-sm text-muted-foreground">
              Wilfred Owen (1893&ndash;1918) &middot; written October 1917, published posthumously
              1920 in <em>Poems</em> (Chatto &amp; Windus) &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Disabled" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for Disabled.
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
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

      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Spec aligned: Pearson Edexcel IGCSE 4ET1
      </footer>
    </div>
  )
}
