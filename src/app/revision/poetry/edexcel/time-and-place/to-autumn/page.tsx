'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const toAutumn: PoemData = {
  title: 'To Autumn',
  poet: 'John Keats',
  lines: [
    {
      text: 'Season of mists and mellow fruitfulness,',
      annotations: [
        {
          type: 'Apostrophe',
          note: 'The poem opens by directly addressing autumn as if it were a person. This is the first move in personifying the season throughout the ode.',
          color: '#a855f7',
        },
        {
          type: 'Sound',
          note: '"Mists and mellow" pairs sibilance with the soft "m" sound, creating a hushed, gentle opening. The line itself sounds drowsy.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'One of the most famous opening lines in English poetry. Keats establishes the abundant, soft mood that defines the whole ode.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Close bosom-friend of the maturing sun;',
      annotations: [
        {
          type: 'Personification',
          note: 'Autumn and the sun are imagined as close friends working together to ripen the fruit. The image is intimate, almost domestic.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Conspiring with him how to load and bless',
      annotations: [
        {
          type: 'Verb',
          note: '"Conspiring" is a slightly unsettling word \u2014 conspiracy is usually negative. Keats uses it playfully: autumn and the sun are plotting together to overload the world with fruit.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'With fruit the vines that round the thatch-eves run;',
      annotations: [
        {
          type: 'Setting',
          note: 'The English cottage detail \u2014 vines around the thatched eaves \u2014 anchors the poem in a specific rural place. Keats wrote the ode after a walk near Winchester.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To bend with apples the moss\u2019d cottage-trees,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The branches are weighed down ("bend") with so much fruit. "Moss\u2019d" suggests the trees are old and well-loved \u2014 part of the landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And fill all fruit with ripeness to the core;',
      annotations: [
        {
          type: 'Abundance',
          note: '"To the core" implies total saturation. The ripeness goes all the way through every fruit \u2014 nothing is shallow or partial.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Keats packs the line with sensory richness. The whole stanza is about overflow, fullness, and the season at its absolute peak.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'To swell the gourd, and plump the hazel shells',
      annotations: [
        {
          type: 'Verb choices',
          note: '"Swell" and "plump" are verbs of expansion. Keats makes us feel the fruit physically growing larger, almost ready to burst.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'With a sweet kernel; to set budding more,',
      annotations: [
        {
          type: 'Excess',
          note: 'Even at autumn\u2019s peak, the season is still creating new buds. Keats hints that the abundance has gone beyond natural limits.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And still more, later flowers for the bees,',
      annotations: [
        {
          type: 'Repetition',
          note: '"Still more" emphasises the unstoppable generosity of the season. The bees will keep finding new flowers \u2014 nature seems endless.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Until they think warm days will never cease,',
      annotations: [
        {
          type: 'Irony',
          note: '"Will never cease" \u2014 but they will. The bees, fooled by the abundance, do not realise winter is coming. Keats hints at the fragility of the moment.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'For Summer has o\u2019er-brimm\u2019d their clammy cells.',
      annotations: [
        {
          type: 'Tactile',
          note: '"Clammy cells" is a precise, slightly damp tactile image. The honeycomb is overflowing \u2014 the season cannot hold any more.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The end of stanza one. The world is so full it spills over. This is the absolute peak before any decline begins.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Who hath not seen thee oft amid thy store?',
      annotations: [
        {
          type: 'Personification',
          note: 'Autumn is now imagined as a person sitting amid stored grain. The rhetorical question makes the personified figure feel familiar \u2014 we have all glimpsed her.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Sometimes whoever seeks abroad may find',
      annotations: [
        {
          type: 'Indefiniteness',
          note: 'Keats uses vague, drifting language: "sometimes", "whoever", "may find". The mood of stanza two is dreamy and indefinite, fitting the lull of the harvest.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thee sitting careless on a granary floor,',
      annotations: [
        {
          type: 'Image',
          note: 'Autumn is now an idle figure resting on the granary floor. The harvest is in; there is nothing more to do but rest. "Careless" means free of care, not negligent.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The personification crystallises into a single visual portrait. Autumn becomes a real, almost paintable person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Thy hair soft-lifted by the winnowing wind;',
      annotations: [
        {
          type: 'Sensory',
          note: 'The winnowing wind separates grain from chaff. Keats turns this practical farm image into something almost erotic: hair gently lifted by the breeze.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Or on a half-reap\u2019d furrow sound asleep,',
      annotations: [
        {
          type: 'Sleep',
          note: 'Autumn falls asleep mid-task, in a "half-reap\u2019d furrow". The image suggests the season\u2019s drowsy peacefulness, but also a quiet warning: time is passing while she sleeps.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Drows\u2019d with the fume of poppies, while thy hook',
      annotations: [
        {
          type: 'Drugged',
          note: 'Poppies were associated with opium. Autumn is in a kind of narcotic sleep \u2014 the season itself is dreamy and slowed down.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Spares the next swath and all its twined flowers:',
      annotations: [
        {
          type: 'Pause',
          note: 'The reaping has paused. The flowers among the grain are spared because the worker is asleep. A moment of suspended time.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And sometimes like a gleaner thou dost keep',
      annotations: [
        {
          type: 'Working figure',
          note: 'The gleaner is a poor labourer who picks up grain left after the harvest. Autumn becomes a humble, working figure \u2014 not a queen but a peasant.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Steady thy laden head across a brook;',
      annotations: [
        {
          type: 'Balance',
          note: 'The image of carrying a heavy basket across a stream is delicate and precise. Autumn must hold "steady" \u2014 the moment of balance is fragile.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Or by a cyder-press, with patient look,',
      annotations: [
        {
          type: 'Patience',
          note: 'The cider press squeezes apples slowly. "Patient" suggests acceptance of slow time, of waiting for the season to finish.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thou watchest the last oozings hours by hours.',
      annotations: [
        {
          type: 'Time',
          note: '"Hours by hours" stretches time. The "last oozings" of cider are slow, drop by drop \u2014 a gentle but unmistakable image of the season ending.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The end of stanza two. Time is now visibly passing. "Last" is the first hint that this season cannot last forever.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Where are the songs of spring? Ay, where are they?',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'The third stanza opens with a question about absence. Spring\u2019s music is gone. The line momentarily seems to mourn what is lost.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Think not of them, thou hast thy music too,\u2014',
      annotations: [
        {
          type: 'Volta',
          note: 'Keats answers his own question. Don\u2019t mourn spring \u2014 autumn has its own music. The dash extends the moment, opening into the new soundscape that follows.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'The turning point of the ode. Autumn is given equal status with spring \u2014 every season has its own value.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'While barred clouds bloom the soft-dying day,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Bloom" is the verb used for spring flowers, but here it describes evening clouds. Keats applies spring\u2019s vocabulary to autumn\u2019s sky \u2014 the seasons are united.',
          color: '#10b981',
        },
        {
          type: 'Oxymoron',
          note: '"Soft-dying" yokes gentleness with death. Autumn is dying, but softly, beautifully \u2014 not a tragedy but a quiet end.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And touch the stubble-plains with rosy hue;',
      annotations: [
        {
          type: 'Colour',
          note: 'The "stubble-plains" \u2014 fields after the harvest \u2014 are touched with rosy light. Even bareness is beautiful in this golden hour.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Then in a wailful choir the small gnats mourn',
      annotations: [
        {
          type: 'Sound',
          note: '"Wailful choir" personifies the gnats as a singing chorus mourning the day. Even the smallest creatures contribute to autumn\u2019s music.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Among the river sallows, borne aloft',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Sallows" are willow trees by the river. The specific botanical word grounds the elevated music in a real landscape.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Or sinking as the light wind lives or dies;',
      annotations: [
        {
          type: 'Image',
          note: 'The gnats rise and fall with the breeze. The image is visual and aural at once \u2014 the music of autumn moves with the air itself.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And full-grown lambs loud bleat from hilly bourn;',
      annotations: [
        {
          type: 'Time marker',
          note: '"Full-grown lambs" \u2014 the lambs of spring are now fully grown. The phrase quietly reminds us how much time has passed since the previous season.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Hedge-crickets sing; and now with treble soft',
      annotations: [
        {
          type: 'Music',
          note: 'Crickets join the autumn choir. The sound becomes layered \u2014 like an actual musical composition with different voices.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The red-breast whistles from a garden-croft;',
      annotations: [
        {
          type: 'Bird',
          note: 'The robin (red-breast) is traditionally associated with autumn and winter in England. Keats lets the robin add a clear, bright note to the soundscape.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And gathering swallows twitter in the skies.',
      annotations: [
        {
          type: 'Final image',
          note: 'Swallows gather to migrate \u2014 they are about to leave for winter. The poem ends with departure and movement, but the tone is calm rather than tragic.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The closing line is bittersweet. Autumn ends with the swallows leaving, but the music and beauty of the season are complete in themselves.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Keats (1795&ndash;1821)</h3>
    <p>Keats was a second-generation Romantic poet, alongside Byron and Shelley. He died of tuberculosis at the age of just 25, having produced an extraordinary body of work in the last few years of his life. He was deeply attentive to sensory experience and to the relationship between beauty and mortality.</p>

    <h3>September 1819</h3>
    <p>Keats wrote "To Autumn" on 19 September 1819, the day after a walk near Winchester. He described the walk in a letter: "How beautiful the season is now \u2014 How fine the air. A temperate sharpness about it... I never lik\u2019d stubble fields so much as now... somehow a stubble plain looks warm \u2014 in the same way that some pictures look warm."</p>

    <h3>One of the great odes</h3>
    <p>"To Autumn" is the last of Keats\u2019s great odes, following "Ode to a Nightingale", "Ode on a Grecian Urn" and "Ode on Melancholy". Many critics regard it as the most perfectly achieved poem of his short career.</p>

    <h3>Romantic context</h3>
    <p>Romantic poets celebrated the natural world and direct sensory experience. "To Autumn" is unusual among Keats\u2019s odes in that it stays entirely outside, in the world, with no abstract questioning. It is a poem of acceptance \u2014 of the season, of time and of mortality.</p>

    <h3>Time and Place in this poem</h3>
    <p>For the Edexcel Time and Place cluster, "To Autumn" is essential because it captures a single specific time (a few days in mid-September 1819) in a single specific place (the countryside outside Winchester). The poem is rooted in a real walk on a real day \u2014 yet it manages to feel universal.</p>
  `,

  contextAr: `
    <h3>John Keats (1795&ndash;1821)</h3>
    <p><strong>John Keats</strong> \u0634\u0627\u0639\u0631 \u0631\u0648\u0645\u0627\u0646\u0633\u064a \u0645\u0646 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u062b\u0627\u0646\u064a\u060c \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628 \u0645\u0639 Byron \u0648 Shelley. \u062a\u0648\u0641\u0651\u064a \u0628\u0627\u0644\u0633\u0644\u0651 \u0648\u0639\u0645\u0631\u0647 25 \u0633\u0646\u0629 \u0628\u0633\u060c \u0648\u0643\u0627\u0646 \u0642\u062f \u0623\u0646\u062a\u062c \u0625\u0646\u062a\u0627\u062c\u0627\u064b \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0627\u064b \u0641\u064a \u0622\u062e\u0631 \u0633\u0646\u0648\u0627\u062a \u062d\u064a\u0627\u062a\u0647. \u0643\u0627\u0646 \u0645\u0646\u062a\u0628\u0647\u0627\u064b \u0628\u0639\u0645\u0642 \u0644\u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u062d\u0633\u0651\u064a\u0629\u060c \u0648\u0644\u0644\u0639\u0644\u0627\u0642\u0629 \u0628\u064a\u0646 \u0627\u0644\u062c\u0645\u0627\u0644 \u0648\u0627\u0644\u0641\u0646\u0627\u0621.</p>

    <h3>\u0633\u0628\u062a\u0645\u0628\u0631 1819</h3>
    <p>Keats \u0643\u062a\u0628 "To Autumn" \u064a\u0648\u0645 19 \u0633\u0628\u062a\u0645\u0628\u0631 1819\u060c \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0644\u064a \u0639\u0642\u0628 \u0645\u0634\u064a\u0629 \u0642\u0631\u0628 Winchester. \u0648\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u064a\u0629 \u0641\u064a \u0631\u0633\u0627\u0644\u0629: "\u0643\u0645 \u0647\u064a \u062c\u0645\u064a\u0644\u0629 \u0627\u0644\u0641\u0635\u0648\u0644 \u0627\u0644\u062d\u064a\u0646 \u2014 \u0648\u0643\u0645 \u0647\u0648 \u0644\u0637\u064a\u0641 \u0627\u0644\u0647\u0648\u0627\u0621. \u0641\u064a\u0647 \u062d\u062f\u0651\u0629 \u0645\u0639\u062a\u062f\u0644\u0629... \u0645\u0627 \u062d\u0628\u0651\u064a\u062a \u062d\u0642\u0648\u0644 \u0627\u0644\u0642\u0634\u0651 \u0628\u0642\u062f \u0645\u0627 \u0623\u062d\u0628\u0651\u0647\u0627 \u0627\u0644\u062d\u064a\u0646... \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u0627\u060c \u062d\u0642\u0644 \u0642\u0634\u0651 \u064a\u0628\u062f\u0648 \u062f\u0627\u0641\u0626\u0627\u064b \u2014 \u0645\u062b\u0644 \u0645\u0627 \u0628\u0639\u0636 \u0627\u0644\u0644\u0648\u062d\u0627\u062a \u062a\u0628\u062f\u0648 \u062f\u0627\u0641\u0626\u0629."</p>

    <h3>\u0648\u062d\u062f\u0629 \u0645\u0646 \u0627\u0644\u0642\u0635\u0627\u0626\u062f \u0627\u0644\u0639\u0638\u064a\u0645\u0629 (odes)</h3>
    <p>"To Autumn" \u0622\u062e\u0631 \u0627\u0644\u0642\u0635\u0627\u0626\u062f \u0627\u0644\u0639\u0638\u064a\u0645\u0629 (odes) \u0639\u0646\u062f Keats\u060c \u0628\u0639\u062f "Ode to a Nightingale" \u0648 "Ode on a Grecian Urn" \u0648 "Ode on Melancholy". \u0648\u0627\u064a\u062f \u0646\u0642\u0651\u0627\u062f \u064a\u0639\u062a\u0628\u0631\u0648\u0646\u0647\u0627 \u0623\u0643\u062b\u0631 \u0642\u0635\u064a\u062f\u0629 \u0648\u0635\u0644\u062a \u0644\u0643\u0645\u0627\u0644 \u0634\u0643\u0644\u064a \u0641\u064a \u0645\u0633\u064a\u0631\u062a\u0647 \u0627\u0644\u0642\u0635\u064a\u0631\u0629.</p>

    <h3>\u0627\u0644\u0633\u064a\u0627\u0642 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a</h3>
    <p>\u0627\u0644\u0634\u0639\u0631\u0627\u0621 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u0648\u0646 \u0627\u062d\u062a\u0641\u0644\u0648\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0637\u0628\u064a\u0639\u064a \u0648\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u062d\u0633\u064a\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629. "To Autumn" \u063a\u064a\u0631 \u0627\u0639\u062a\u064a\u0627\u062f\u064a\u0629 \u0628\u064a\u0646 \u0642\u0635\u0627\u0626\u062f Keats \u0627\u0644\u0640odes \u0644\u0623\u0646\u0647\u0627 \u062a\u0628\u0642\u0649 \u062a\u0645\u0627\u0645\u0627\u064b \u0641\u064a \u0627\u0644\u062e\u0627\u0631\u062c\u060c \u0641\u064a \u0627\u0644\u0639\u0627\u0644\u0645\u060c \u0628\u0644\u0627 \u0623\u064a\u0651 \u062a\u0633\u0627\u0624\u0644 \u062a\u062c\u0631\u064a\u062f\u064a. \u0647\u064a \u0642\u0635\u064a\u062f\u0629 \u0642\u0628\u0648\u0644 \u2014 \u0642\u0628\u0648\u0644 \u0644\u0644\u0641\u0635\u0644\u060c \u0644\u0644\u0648\u0642\u062a\u060c \u0648\u0644\u0644\u0641\u0646\u0627\u0621.</p>

    <h3>\u0627\u0644\u0632\u0645\u0627\u0646 \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0641\u064a \u0647\u0627\u0644\u0642\u0635\u064a\u062f\u0629</h3>
    <p>\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0645\u062c\u0645\u0648\u0639\u0629 Edexcel Time and Place\u060c "To Autumn" \u0642\u0635\u064a\u062f\u0629 \u062c\u0648\u0647\u0631\u064a\u0629 \u0644\u0623\u0646\u0647\u0627 \u062a\u0644\u062a\u0642\u0637 \u0632\u0645\u0627\u0646\u0627\u064b \u0645\u062d\u062f\u0651\u062f\u0627\u064b \u0628\u0639\u064a\u0646\u0647 (\u0623\u064a\u0627\u0645 \u0642\u0644\u064a\u0644\u0629 \u0645\u0646\u062a\u0635\u0641 \u0633\u0628\u062a\u0645\u0628\u0631 1819) \u0641\u064a \u0645\u0643\u0627\u0646 \u0645\u062d\u062f\u0651\u062f \u0628\u0639\u064a\u0646\u0647 (\u0631\u064a\u0641 \u062e\u0627\u0631\u062c Winchester). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u062a\u062c\u0630\u0651\u0631\u0629 \u0641\u064a \u0645\u0634\u064a\u0629 \u062d\u0642\u064a\u0642\u064a\u0629 \u0641\u064a \u064a\u0648\u0645 \u062d\u0642\u064a\u0642\u064a \u2014 \u0648\u0645\u0639 \u0643\u0630\u0627 \u062a\u0646\u062c\u062d \u0625\u0646\u0647\u0627 \u062a\u062d\u0633\u0651 \u0643\u0648\u0646\u064a\u0629.</p>
  `,

  summary: `Stanza 1 \u2014 the harvest at its peak: Keats addresses autumn directly. He describes the season conspiring with the sun to ripen and overload the world with fruit. Vines hang heavy around cottage eaves, apple branches bend, gourds swell, hazel shells plump up, and bees fill their honeycombs. Everything is overflowing.

Stanza 2 \u2014 autumn personified: Autumn is imagined as a person, glimpsed in different rural scenes. She sits "careless" on a granary floor with her hair lifted by the wind. She sleeps in a half-reaped field, drowsed by poppies. She works as a gleaner crossing a brook with a heavy load. She watches cider drip from a press, hour by hour. The mood is dreamy and slow.

Stanza 3 \u2014 the music of autumn: Keats begins by asking about the songs of spring, then immediately answers his own question: autumn has its own music. He describes the sounds of evening: gnats wailing, lambs bleating from the hills, crickets singing, a robin whistling, and gathering swallows twittering as they prepare to migrate. The poem ends with the swallows in the sky \u2014 about to leave, but still here.

Overall meaning: An ode of pure acceptance. Where most poems about autumn mourn the coming of winter, Keats refuses to mourn. He celebrates the season\u2019s abundance, its quiet labour, and its own particular music. The poem is about the value of one specific time of year in one specific place \u2014 and, by extension, about accepting time itself.`,

  summaryAr: `\u0627\u0644\u0645\u0642\u0637\u0639 1 \u2014 \u0627\u0644\u062d\u0635\u0627\u062f \u0641\u064a \u0630\u0631\u0648\u062a\u0647: Keats \u064a\u062e\u0627\u0637\u0628 \u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0628\u0627\u0634\u0631\u0629. \u0648\u064a\u0635\u0641 \u0627\u0644\u0641\u0635\u0644 \u0648\u0647\u0648 \u064a\u062a\u0622\u0645\u0631 \u0645\u0639 \u0627\u0644\u0634\u0645\u0633 \u0639\u0634\u0627\u0646 \u064a\u0646\u0636\u0651\u062c\u0648\u0646 \u0643\u0644 \u0634\u064a \u0648\u064a\u0639\u0628\u0651\u0648\u0646 \u0627\u0644\u062f\u0646\u064a\u0627 \u0641\u0627\u0643\u0647\u0629. \u0627\u0644\u0643\u0631\u0648\u0645 \u062a\u062a\u062f\u0644\u0651\u0649 \u062b\u0642\u064a\u0644\u0629 \u062d\u0648\u0644 \u0623\u0641\u0627\u0631\u064a\u0632 \u0627\u0644\u0623\u0643\u0648\u0627\u062e\u060c \u0648\u0623\u063a\u0635\u0627\u0646 \u0627\u0644\u062a\u0641\u0651\u0627\u062d \u062a\u0646\u062d\u0646\u064a\u060c \u0648\u062b\u0645\u0627\u0631 \u0627\u0644\u0642\u0631\u0639 \u062a\u0646\u062a\u0641\u062e\u060c \u0648\u0623\u0635\u062f\u0627\u0641 \u0627\u0644\u0628\u0646\u062f\u0642 \u062a\u0645\u062a\u0644\u0626\u060c \u0648\u0627\u0644\u0646\u062d\u0644 \u064a\u0639\u0645\u0651\u0631 \u0634\u0645\u0639\u0647. \u0643\u0644 \u0634\u064a \u0637\u0627\u0641\u062d.

\u0627\u0644\u0645\u0642\u0637\u0639 2 \u2014 \u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0634\u062e\u0651\u0635\u0627\u064b: \u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u062a\u062e\u064a\u0651\u0644 \u0643\u0623\u0646\u0647 \u0634\u062e\u0635\u060c \u064a\u064f\u0644\u0645\u062d \u0641\u064a \u0645\u0634\u0627\u0647\u062f \u0631\u064a\u0641\u064a\u0629 \u0645\u062e\u062a\u0644\u0641\u0629. \u062a\u062c\u0644\u0633 "careless" (\u0645\u0631\u062a\u0627\u062d\u0629) \u0639\u0644\u0649 \u0623\u0631\u0636\u064a\u0629 \u0628\u064a\u062f\u0631 (granary)\u060c \u0648\u0634\u0639\u0631\u0647\u0627 \u062a\u0644\u0627\u0639\u0628\u0647 \u0631\u064a\u062d \u0627\u0644\u062a\u0630\u0631\u064a\u0629 (winnowing wind). \u062a\u0646\u0627\u0645 \u0641\u064a \u062d\u0642\u0644 \u0646\u064f\u0635\u0641 \u0645\u062d\u0635\u0648\u062f\u060c \u062a\u062e\u062f\u0651\u0631\u0647\u0627 \u0631\u0648\u0627\u0626\u062d \u0627\u0644\u062e\u0634\u062e\u0627\u0634 (poppies). \u062a\u0634\u062a\u063a\u0644 \u0643\u0640gleaner (\u0644\u0642\u0651\u0627\u0637\u0629 \u0633\u0646\u0627\u0628\u0644) \u062a\u0639\u0628\u0631 \u062c\u062f\u0648\u0644\u0627\u064b \u0648\u062d\u0645\u0644\u0647\u0627 \u062b\u0642\u064a\u0644. \u062a\u062a\u0641\u0631\u0651\u062c \u0639\u0644\u0649 \u0639\u0635\u064a\u0631 \u0627\u0644\u062a\u0641\u0627\u062d \u064a\u0642\u0637\u0631 \u0645\u0646 \u0645\u0639\u0635\u0631\u0629 (cider press)\u060c \u0633\u0627\u0639\u0629 \u0639\u0642\u0628 \u0633\u0627\u0639\u0629. \u0648\u0627\u0644\u062c\u0648 \u062d\u0627\u0644\u0645 \u0648\u0628\u0637\u064a\u0621.

\u0627\u0644\u0645\u0642\u0637\u0639 3 \u2014 \u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u062e\u0631\u064a\u0641: Keats \u064a\u0628\u062f\u0623 \u0628\u0633\u0624\u0627\u0644 \u0639\u0646 \u0623\u063a\u0627\u0646\u064a \u0627\u0644\u0631\u0628\u064a\u0639\u060c \u062b\u0645 \u064a\u062c\u0627\u0648\u0628 \u0639\u0644\u0649 \u0633\u0624\u0627\u0644\u0647 \u0628\u0646\u0641\u0633\u0647 \u0641\u0648\u0631\u0627\u064b: \u0627\u0644\u062e\u0631\u064a\u0641 \u0639\u0646\u062f\u0647 \u0645\u0648\u0633\u064a\u0642\u0627\u0647 \u0627\u0644\u062e\u0627\u0635\u0651\u0629. \u0648\u064a\u0635\u0641 \u0623\u0635\u0648\u0627\u062a \u0627\u0644\u0645\u0633\u0627\u0621: \u0627\u0644\u0628\u0639\u0648\u0636 \u064a\u0646\u0648\u062d\u060c \u0627\u0644\u062e\u0631\u0627\u0641 \u0627\u0644\u0643\u0628\u064a\u0631\u0629 \u062a\u062b\u063a\u0648 \u0645\u0646 \u0627\u0644\u062a\u0644\u0627\u0644\u060c \u0627\u0644\u0635\u0631\u0627\u0635\u064a\u0631 \u062a\u063a\u0646\u0651\u064a\u060c \u0623\u0628\u0648 \u0627\u0644\u062d\u0646\u0651\u0627\u0621 (red-breast) \u064a\u0635\u0641\u0651\u0631\u060c \u0648\u0637\u064a\u0648\u0631 \u0627\u0644\u0633\u0646\u0648\u0646\u0648 (swallows) \u062a\u062a\u062c\u0645\u0651\u0639 \u0648\u062a\u0632\u0642\u0632\u0642 \u0648\u0647\u064a \u062a\u062a\u062c\u0647\u0651\u0632 \u0644\u0644\u0647\u062c\u0631\u0629. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0647\u064a \u0648\u0627\u0644\u0633\u0646\u0648\u0646\u0648 \u0641\u064a \u0627\u0644\u0633\u0645\u0627\u0621 \u2014 \u0639\u0644\u0649 \u0648\u0634\u0643 \u0627\u0644\u0631\u062d\u064a\u0644\u060c \u0628\u0633 \u0644\u0627\u0632\u0627\u0644\u062a \u0647\u0646\u0627.

\u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a: ode \u0645\u0646 \u0627\u0644\u0642\u0628\u0648\u0644 \u0627\u0644\u062e\u0627\u0644\u0635. \u0641\u064a \u062d\u064a\u0646 \u0625\u0646 \u0623\u063a\u0644\u0628 \u0627\u0644\u0642\u0635\u0627\u0626\u062f \u0639\u0646 \u0627\u0644\u062e\u0631\u064a\u0641 \u062a\u0646\u0648\u062d \u0639\u0644\u0649 \u0642\u062f\u0648\u0645 \u0627\u0644\u0634\u062a\u0627\u0621\u060c Keats \u064a\u0631\u0641\u0636 \u0625\u0646\u0647 \u064a\u0646\u0648\u062d. \u064a\u062d\u062a\u0641\u0644 \u0628\u0648\u0641\u0631\u0629 \u0627\u0644\u0641\u0635\u0644\u060c \u0648\u0639\u0645\u0644\u0647 \u0627\u0644\u0647\u0627\u062f\u0626\u060c \u0648\u0645\u0648\u0633\u064a\u0642\u0627\u0647 \u0627\u0644\u062e\u0627\u0635\u0651\u0629. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0639\u0646 \u0642\u064a\u0645\u0629 \u0648\u0642\u062a \u0645\u062d\u062f\u0651\u062f \u0645\u0646 \u0627\u0644\u0633\u0646\u0629 \u0641\u064a \u0645\u0643\u0627\u0646 \u0645\u062d\u062f\u0651\u062f \u2014 \u0648\u0628\u0627\u0644\u0627\u0645\u062a\u062f\u0627\u062f\u060c \u0639\u0646 \u0642\u0628\u0648\u0644 \u0627\u0644\u0648\u0642\u062a \u0628\u0646\u0641\u0633\u0647.`,

  formAndStructure: `Form: Three eleven-line stanzas. Each stanza has a slightly different rhyme scheme but they share an overall pattern (ABAB CDEDCCE in stanza 1; ABAB CDECDDE in stanzas 2 and 3). The form is unique to this ode \u2014 Keats invented a new shape for it.

Three-stage structure: The three stanzas correspond to three stages of autumn. Stanza 1 is the peak of harvest abundance. Stanza 2 is the slow, drowsy middle of harvest, with autumn personified. Stanza 3 is the late evening of the season, dominated by sound rather than sight.

Time progression: The ode moves from morning ripening (stanza 1), through afternoon resting (stanza 2), to evening music (stanza 3). The reader experiences not just an autumn day but the whole arc of the season compressed into three stanzas.

Volta: The turn comes at the start of stanza 3: "Where are the songs of spring? Ay, where are they? / Think not of them, thou hast thy music too." Keats refuses to mourn what is past and instead celebrates what is here.

Iambic pentameter: The lines are mostly in regular iambic pentameter, giving the ode a stately, almost classical pulse. The metre is calm and unhurried \u2014 the form itself is in no rush.

Apostrophe: The whole poem addresses autumn directly, as "thee" and "thou". This sustained personification is what gives the ode its intimacy: Keats is in conversation with the season, not just describing it.

Sound: Keats packs the poem with assonance, alliteration and rich vowel sounds ("mists and mellow fruitfulness", "soft-lifted by the winnowing wind"). The poem is meant to be felt in the mouth as well as understood by the mind.`,

  formAndStructureAr: `\u0627\u0644\u0634\u0643\u0644: \u062b\u0644\u0627\u062b\u0629 \u0645\u0642\u0627\u0637\u0639 \u0643\u0644 \u0648\u0627\u062d\u062f \u0641\u064a\u0647\u0645 \u0623\u062d\u062f \u0639\u0634\u0631 \u0628\u064a\u062a\u0627\u064b. \u0643\u0644 \u0645\u0642\u0637\u0639 \u0639\u0646\u062f\u0647 \u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 \u0645\u062e\u062a\u0644\u0641 \u0634\u0648\u064a\u0651\u060c \u0628\u0633 \u064a\u062a\u0634\u0627\u0631\u0643\u0648\u0646 \u0646\u0645\u0637\u0627\u064b \u0639\u0627\u0645\u0651\u0627\u064b (ABAB CDEDCCE \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 1\u061b ABAB CDECDDE \u0641\u064a \u0627\u0644\u0645\u0642\u0627\u0637\u0639 2 \u0648 3). \u0627\u0644\u0634\u0643\u0644 \u062e\u0627\u0635\u0651 \u0628\u0647\u0627\u0644\u0640ode \u062a\u062d\u062f\u064a\u062f\u0627\u064b \u2014 Keats \u0627\u062e\u062a\u0631\u0639 \u0634\u0643\u0644\u0627\u064b \u062c\u062f\u064a\u062f\u0627\u064b \u0644\u0647\u0627.

\u0627\u0644\u0628\u0646\u064a\u0629 \u0630\u0627\u062a \u062b\u0644\u0627\u062b \u0645\u0631\u0627\u062d\u0644: \u0627\u0644\u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u062b\u0644\u0627\u062b\u0629 \u062a\u0648\u0627\u0641\u0642 \u062b\u0644\u0627\u062b \u0645\u0631\u0627\u062d\u0644 \u0645\u0646 \u0627\u0644\u062e\u0631\u064a\u0641. \u0627\u0644\u0645\u0642\u0637\u0639 1 \u0630\u0631\u0648\u0629 \u0648\u0641\u0631\u0629 \u0627\u0644\u062d\u0635\u0627\u062f. \u0627\u0644\u0645\u0642\u0637\u0639 2 \u0648\u0633\u0637 \u0627\u0644\u062d\u0635\u0627\u062f \u0627\u0644\u0628\u0637\u064a\u0621 \u0627\u0644\u0646\u0627\u0639\u0633\u060c \u0648\u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0634\u062e\u0651\u0635. \u0627\u0644\u0645\u0642\u0637\u0639 3 \u0645\u0633\u0627\u0621 \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0645\u062a\u0623\u062e\u0651\u0631\u060c \u064a\u0647\u064a\u0645\u0646 \u0639\u0644\u064a\u0647 \u0627\u0644\u0635\u0648\u062a \u0628\u062f\u0644 \u0627\u0644\u0628\u0635\u0631.

\u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0632\u0645\u0646: \u0627\u0644\u0640ode \u062a\u062a\u062d\u0631\u0651\u0643 \u0645\u0646 \u0646\u0636\u062c \u0627\u0644\u0635\u0628\u062d (\u0627\u0644\u0645\u0642\u0637\u0639 1)\u060c \u0625\u0644\u0649 \u0631\u0627\u062d\u0629 \u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631 (\u0627\u0644\u0645\u0642\u0637\u0639 2)\u060c \u0625\u0644\u0649 \u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0645\u0633\u0627\u0621 (\u0627\u0644\u0645\u0642\u0637\u0639 3). \u0648\u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u062c\u0631\u0651\u0628 \u0645\u0648 \u064a\u0648\u0645 \u062e\u0631\u064a\u0641\u060c \u0628\u0644 \u0642\u0648\u0633 \u0627\u0644\u0641\u0635\u0644 \u0643\u0644\u0651\u0647 \u0645\u0636\u063a\u0648\u0637 \u0641\u064a \u062b\u0644\u0627\u062b\u0629 \u0645\u0642\u0627\u0637\u0639.

Volta: \u0627\u0644\u0627\u0646\u0639\u0637\u0627\u0641 \u064a\u062c\u064a \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u0645\u0642\u0637\u0639 3: "Where are the songs of spring? Ay, where are they? / Think not of them, thou hast thy music too." Keats \u064a\u0631\u0641\u0636 \u0625\u0646\u0647 \u064a\u0646\u0648\u062d \u0639\u0644\u0649 \u0645\u0627 \u0645\u0636\u0649\u060c \u0648\u0628\u062f\u0644 \u0630\u0644\u0643 \u064a\u062d\u062a\u0641\u0644 \u0628\u0645\u0627 \u0647\u0648 \u062d\u0627\u0636\u0631.

Iambic pentameter: \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u063a\u0627\u0644\u0628 iambic pentameter \u0645\u0646\u062a\u0638\u0645\u060c \u064a\u0639\u0637\u064a \u0627\u0644\u0640ode \u0646\u0628\u0636\u0627\u064b \u0648\u0642\u0648\u0631\u0627\u064b \u0634\u0628\u0647 \u0643\u0644\u0627\u0633\u064a\u0643\u064a. \u0648\u0627\u0644\u0648\u0632\u0646 \u0647\u0627\u062f\u0626 \u063a\u064a\u0631 \u0645\u0633\u062a\u0639\u062c\u0644 \u2014 \u0627\u0644\u0634\u0643\u0644 \u0628\u0646\u0641\u0633\u0647 \u0645\u0627 \u0639\u0646\u062f\u0647 \u0639\u062c\u0644\u0629.

Apostrophe: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u062a\u062e\u0627\u0637\u0628 \u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0628\u0627\u0634\u0631\u0629\u060c \u0628\u0636\u0645\u0627\u0626\u0631 "thee" \u0648"thou". \u0647\u0627\u0644\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0645\u0645\u062a\u062f\u0651 \u0647\u0648 \u0627\u0644\u0644\u064a \u064a\u0639\u0637\u064a \u0627\u0644\u0640ode \u062d\u0645\u064a\u0645\u064a\u062a\u0647\u0627: Keats \u0641\u064a \u0645\u062d\u0627\u062f\u062b\u0629 \u0645\u0639 \u0627\u0644\u0641\u0635\u0644\u060c \u0645\u0648 \u0645\u062c\u0631\u0651\u062f \u0648\u0635\u0641 \u0644\u0647.

\u0627\u0644\u0635\u0648\u062a: Keats \u064a\u062d\u0634\u0648 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0640assonance \u0648 alliteration \u0648\u0623\u0635\u0648\u0627\u062a \u062d\u0631\u0643\u064a\u0629 \u063a\u0646\u064a\u0629 ("mists and mellow fruitfulness", "soft-lifted by the winnowing wind"). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0639\u0645\u0648\u0644\u0629 \u0639\u0634\u0627\u0646 \u062a\u064f\u062d\u0633\u0651 \u0641\u064a \u0627\u0644\u0641\u0645 \u0628\u0642\u062f \u0645\u0627 \u062a\u064f\u0641\u0647\u0645 \u0628\u0627\u0644\u0639\u0642\u0644.`,

  keyQuotes: [
    {
      quote: 'Season of mists and mellow fruitfulness',
      analysis:
        'One of the most famous opening lines in English poetry. The sibilant "s" sounds and soft "m" sounds create a hushed, drowsy atmosphere from the very first phrase. "Fruitfulness" (an unusual abstract noun) sums up the entire stanza\u2019s focus on abundance.',
      themes: ['Abundance', 'Time', 'Season'],
      analysisAr:
        '\u0648\u062d\u062f\u0629 \u0645\u0646 \u0623\u0634\u0647\u0631 \u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0634\u0639\u0631 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a. \u0623\u0635\u0648\u0627\u062a \u0627\u0644\u0640"s" \u0627\u0644\u0635\u0641\u064a\u0631\u064a\u0629 \u0648\u0627\u0644\u0640"m" \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u062a\u062e\u0644\u0642 \u062c\u0648\u0651\u0627\u064b \u0635\u0627\u0645\u062a\u0627\u064b \u0646\u0627\u0639\u0633\u0627\u064b \u0645\u0646 \u0623\u0648\u0644 \u0639\u0628\u0627\u0631\u0629. \u0648\u0643\u0644\u0645\u0629 "Fruitfulness" (\u0627\u0633\u0645 \u062a\u062c\u0631\u064a\u062f\u064a \u063a\u064a\u0631 \u0645\u0639\u062a\u0627\u062f) \u062a\u0644\u062e\u0651\u0635 \u062a\u0631\u0643\u064a\u0632 \u0627\u0644\u0645\u0642\u0637\u0639 \u0643\u0644\u0651\u0647 \u0639\u0644\u0649 \u0627\u0644\u0648\u0641\u0631\u0629.',
      themesAr: [
        '\u0627\u0644\u0648\u0641\u0631\u0629',
        '\u0627\u0644\u0648\u0642\u062a',
        '\u0627\u0644\u0641\u0635\u0644',
      ],
    },
    {
      quote: 'Conspiring with him how to load and bless / With fruit',
      analysis:
        '"Conspiring" is a slightly unsettling word \u2014 conspiracies are usually negative \u2014 but Keats uses it playfully. Autumn and the sun are working together, almost plotting, to overload the world. The pairing of "load" and "bless" suggests both physical weight and spiritual generosity.',
      themes: ['Personification', 'Abundance', 'Generosity'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "Conspiring" \u0645\u0632\u0639\u062c\u0629 \u0634\u0648\u064a\u0651 \u2014 \u0627\u0644\u0645\u0624\u0627\u0645\u0631\u0627\u062a \u0639\u0627\u062f\u0629 \u0633\u0644\u0628\u064a\u0629 \u2014 \u0628\u0633 Keats \u064a\u0633\u062a\u062e\u062f\u0645\u0647\u0627 \u0628\u0645\u0631\u062d. \u0627\u0644\u062e\u0631\u064a\u0641 \u0648\u0627\u0644\u0634\u0645\u0633 \u064a\u0634\u062a\u063a\u0644\u0648\u0646 \u0645\u0639 \u0628\u0639\u0636\u060c \u0634\u0628\u0647 \u064a\u062a\u0622\u0645\u0631\u0648\u0646\u060c \u0639\u0634\u0627\u0646 \u064a\u062b\u0642\u0651\u0644\u0648\u0646 \u0627\u0644\u062f\u0646\u064a\u0627. \u0648\u0627\u0642\u062a\u0631\u0627\u0646 "load" \u0648"bless" \u064a\u0644\u0645\u0651\u062d \u0644\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u0627\u062f\u064a \u0648\u0627\u0644\u0643\u0631\u0645 \u0627\u0644\u0631\u0648\u062d\u064a \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a.',
      themesAr: [
        '\u0627\u0644\u062a\u0634\u062e\u064a\u0635',
        '\u0627\u0644\u0648\u0641\u0631\u0629',
        '\u0627\u0644\u0643\u0631\u0645',
      ],
    },
    {
      quote: 'Until they think warm days will never cease',
      analysis:
        'A quietly devastating line. The bees, lulled by the abundance, do not realise winter is coming. The phrase "will never cease" sounds optimistic, but Keats has framed it inside the bees\u2019 deluded perspective \u2014 we know better.',
      themes: ['Time', 'Illusion', 'Mortality'],
      analysisAr:
        '\u0628\u064a\u062a \u0645\u062f\u0645\u0651\u0631 \u0628\u0647\u062f\u0648\u0621. \u0627\u0644\u0646\u062d\u0644\u060c \u0627\u0644\u0644\u064a \u0647\u062f\u0651\u0623\u062a\u0647 \u0627\u0644\u0648\u0641\u0631\u0629\u060c \u0645\u0627 \u064a\u062f\u0631\u0643 \u0625\u0646 \u0627\u0644\u0634\u062a\u0627\u0621 \u064a\u0627\u064a\u064a. \u0648\u0639\u0628\u0627\u0631\u0629 "will never cease" \u062a\u0633\u0645\u0639 \u0645\u062a\u0641\u0627\u0626\u0644\u0629\u060c \u0628\u0633 Keats \u0623\u0637\u0651\u0631\u0647\u0627 \u062f\u0627\u062e\u0644 \u0648\u062c\u0647\u0629 \u0646\u0638\u0631 \u0627\u0644\u0646\u062d\u0644 \u0627\u0644\u0645\u062e\u062f\u0648\u0639\u0629 \u2014 \u0648\u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0639\u0631\u0641 \u0623\u0643\u062b\u0631 \u0645\u0646\u0647\u0645.',
      themesAr: [
        '\u0627\u0644\u0648\u0642\u062a',
        '\u0627\u0644\u0648\u0647\u0645',
        '\u0627\u0644\u0641\u0646\u0627\u0621',
      ],
    },
    {
      quote: 'Thee sitting careless on a granary floor',
      analysis:
        'The personification of autumn becomes a single visual portrait: a figure resting amid stored grain. "Careless" means free of care, not negligent \u2014 the season is at peace because the work is done. Keats turns autumn into a real, paintable being.',
      themes: ['Personification', 'Stillness', 'Harvest'],
      analysisAr:
        '\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u062e\u0631\u064a\u0641 \u064a\u062a\u0628\u0644\u0648\u0631 \u0641\u064a \u0628\u0648\u0631\u062a\u0631\u064a\u0647 \u0628\u0635\u0631\u064a \u0648\u0627\u062d\u062f: \u0634\u062e\u0635\u064a\u0629 \u062a\u0633\u062a\u0631\u064a\u062d \u0648\u0633\u0637 \u062d\u0628\u0648\u0628 \u0645\u062e\u0632\u0651\u0646\u0629. \u0643\u0644\u0645\u0629 "Careless" \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u062a\u062d\u0631\u0651\u0631\u0629 \u0645\u0646 \u0627\u0644\u0647\u0645\u0651\u060c \u0645\u0648 \u0645\u0647\u0645\u0644\u0629 \u2014 \u0627\u0644\u0641\u0635\u0644 \u0641\u064a \u0633\u0644\u0627\u0645 \u0644\u0623\u0646 \u0627\u0644\u0634\u063a\u0644 \u062e\u0644\u0635. Keats \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u062e\u0631\u064a\u0641 \u0625\u0644\u0649 \u0643\u0627\u0626\u0646 \u062d\u0642\u064a\u0642\u064a \u064a\u0645\u0643\u0646 \u0631\u0633\u0645\u0647.',
      themesAr: [
        '\u0627\u0644\u062a\u0634\u062e\u064a\u0635',
        '\u0627\u0644\u0633\u0643\u0648\u0646',
        '\u0627\u0644\u062d\u0635\u0627\u062f',
      ],
    },
    {
      quote: 'Drows\u2019d with the fume of poppies',
      analysis:
        'Poppies were associated with opium and sleep. Autumn is in a kind of narcotic dream, slowed almost to a stop. The image is sensual but also slightly dangerous \u2014 oblivion is close to the surface of the season.',
      themes: ['Sleep', 'Slowness', 'Sensuality'],
      analysisAr:
        '\u0627\u0644\u062e\u0634\u062e\u0627\u0634 (poppies) \u0643\u0627\u0646 \u0645\u0631\u062a\u0628\u0637\u0627\u064b \u0628\u0627\u0644\u0623\u0641\u064a\u0648\u0646 \u0648\u0627\u0644\u0646\u0648\u0645. \u0627\u0644\u062e\u0631\u064a\u0641 \u0641\u064a \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u062d\u0644\u0645 \u0627\u0644\u0645\u062e\u062f\u0651\u0631\u060c \u0623\u0628\u0637\u0623 \u0645\u0627 \u064a\u0643\u0648\u0646. \u0648\u0627\u0644\u0635\u0648\u0631\u0629 \u062d\u0633\u0651\u064a\u0629 \u0644\u0643\u0646 \u0641\u064a\u0647\u0627 \u062e\u0637\u0631 \u0634\u0648\u064a\u0651 \u2014 \u0627\u0644\u0646\u0633\u064a\u0627\u0646 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0633\u0637\u062d \u0627\u0644\u0641\u0635\u0644.',
      themesAr: [
        '\u0627\u0644\u0646\u0648\u0645',
        '\u0627\u0644\u0628\u0637\u0621',
        '\u0627\u0644\u062d\u0633\u0651\u064a\u0629',
      ],
    },
    {
      quote: 'Where are the songs of spring? Ay, where are they?',
      analysis:
        'The volta. For a moment Keats seems to mourn the lost spring. But the next line refuses to: "Think not of them, thou hast thy music too." The ode\u2019s great act of acceptance is to refuse the temptation of nostalgia and turn fully to the present.',
      themes: ['Acceptance', 'Time', 'Music'],
      analysisAr:
        '\u0627\u0644\u0640volta. \u0644\u0644\u062d\u0638\u0629 \u064a\u0628\u062f\u0648 Keats \u0643\u0623\u0646\u0647 \u064a\u0646\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u0631\u0628\u064a\u0639 \u0627\u0644\u0644\u064a \u0631\u0627\u062d. \u0628\u0633 \u0627\u0644\u0628\u064a\u062a \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647 \u064a\u0631\u0641\u0636 \u0647\u0630\u0627: "Think not of them, thou hast thy music too." \u0648\u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0639\u0638\u064a\u0645 \u0644\u0644\u0642\u0628\u0648\u0644 \u0641\u064a \u0627\u0644\u0640ode \u0647\u0648 \u0631\u0641\u0636 \u0625\u063a\u0631\u0627\u0621 \u0627\u0644\u062d\u0646\u064a\u0646 \u0648\u0627\u0644\u062a\u0648\u062c\u0651\u0647 \u0643\u0627\u0645\u0644\u0627\u064b \u0644\u0644\u062d\u0627\u0636\u0631.',
      themesAr: [
        '\u0627\u0644\u0642\u0628\u0648\u0644',
        '\u0627\u0644\u0648\u0642\u062a',
        '\u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649',
      ],
    },
    {
      quote: 'While barred clouds bloom the soft-dying day',
      analysis:
        '"Bloom" is the verb used for spring flowers, here applied to evening clouds. Keats borrows spring\u2019s vocabulary for autumn\u2019s sky. "Soft-dying" yokes gentleness with death \u2014 the day is ending, but beautifully, without struggle.',
      themes: ['Beauty', 'Death', 'Time'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "Bloom" \u0641\u0639\u0644 \u064a\u064f\u0633\u062a\u062e\u062f\u0645 \u0644\u0632\u0647\u0648\u0631 \u0627\u0644\u0631\u0628\u064a\u0639\u060c \u0648\u0647\u0646\u0627 \u062a\u0646\u0637\u0628\u0642 \u0639\u0644\u0649 \u0633\u062d\u0628 \u0627\u0644\u0645\u0633\u0627\u0621. Keats \u064a\u0633\u062a\u0639\u064a\u0631 \u0645\u0641\u0631\u062f\u0627\u062a \u0627\u0644\u0631\u0628\u064a\u0639 \u0644\u0633\u0645\u0627\u0621 \u0627\u0644\u062e\u0631\u064a\u0641. \u0648\u0639\u0628\u0627\u0631\u0629 "Soft-dying" \u062a\u0631\u0628\u0637 \u0627\u0644\u0631\u0642\u0651\u0629 \u0628\u0627\u0644\u0645\u0648\u062a \u2014 \u0627\u0644\u064a\u0648\u0645 \u064a\u0646\u062a\u0647\u064a\u060c \u0644\u0643\u0646 \u0628\u062c\u0645\u0627\u0644\u060c \u0628\u0644\u0627 \u0635\u0631\u0627\u0639.',
      themesAr: [
        '\u0627\u0644\u062c\u0645\u0627\u0644',
        '\u0627\u0644\u0645\u0648\u062a',
        '\u0627\u0644\u0648\u0642\u062a',
      ],
    },
    {
      quote: 'And gathering swallows twitter in the skies',
      analysis:
        'The closing line. Swallows gather before migrating \u2014 they are about to leave for winter. The poem ends not with departure itself but with the moment just before. Autumn is complete; what comes next is implied but not described. The ode ends in stillness.',
      themes: ['Departure', 'Migration', 'Time'],
      analysisAr:
        '\u0627\u0644\u0628\u064a\u062a \u0627\u0644\u062e\u062a\u0627\u0645\u064a. \u0627\u0644\u0633\u0646\u0648\u0646\u0648 \u064a\u062a\u062c\u0645\u0651\u0639\u0648\u0646 \u0642\u0628\u0644 \u0627\u0644\u0647\u062c\u0631\u0629 \u2014 \u0647\u0645 \u0639\u0644\u0649 \u0648\u0634\u0643 \u0627\u0644\u0631\u062d\u064a\u0644 \u0644\u0644\u0634\u062a\u0627\u0621. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0627 \u062a\u0646\u062a\u0647\u064a \u0628\u0627\u0644\u0631\u062d\u064a\u0644 \u0628\u0646\u0641\u0633\u0647\u060c \u0628\u0644 \u0628\u0627\u0644\u0644\u062d\u0638\u0629 \u0627\u0644\u0644\u064a \u0642\u0628\u0644\u0647 \u0645\u0628\u0627\u0634\u0631\u0629. \u0627\u0644\u062e\u0631\u064a\u0641 \u0627\u0643\u062a\u0645\u0644\u061b \u0648\u0645\u0627 \u064a\u062c\u064a \u0628\u0639\u062f\u064a\u0646 \u0645\u062a\u0636\u0645\u0651\u0646 \u0644\u0643\u0646\u0647 \u0645\u0627 \u064a\u064f\u0648\u0635\u0641. \u0627\u0644\u0640ode \u062a\u0646\u062a\u0647\u064a \u0628\u0633\u0643\u0648\u0646.',
      themesAr: [
        '\u0627\u0644\u0631\u062d\u064a\u0644',
        '\u0627\u0644\u0647\u062c\u0631\u0629',
        '\u0627\u0644\u0648\u0642\u062a',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'Thee sitting careless on a granary floor',
      effect:
        'Autumn is personified throughout the ode as a woman: working, resting, watching. The sustained personification turns the season into a companion the speaker knows. The whole poem is essentially an address to her.',
      lineRef: 13,
      effectAr:
        '\u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0634\u062e\u0651\u0635 \u0637\u0648\u0644 \u0627\u0644\u0640ode \u0643\u0627\u0645\u0631\u0623\u0629: \u062a\u0634\u062a\u063a\u0644\u060c \u062a\u0633\u062a\u0631\u064a\u062d\u060c \u062a\u062a\u0641\u0631\u0651\u062c. \u0648\u0627\u0644\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0645\u0645\u062a\u062f\u0651 \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u0641\u0635\u0644 \u0625\u0644\u0649 \u0631\u0641\u064a\u0642\u0629 \u064a\u0639\u0631\u0641\u0647\u0627 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u0628\u062c\u0648\u0647\u0631\u0647\u0627 \u0645\u062e\u0627\u0637\u0628\u0629 \u0644\u0647\u0627.',
    },
    {
      device: 'Sensory imagery',
      example: 'mists and mellow fruitfulness / plump the hazel shells / clammy cells',
      effect:
        'Keats packs the ode with tactile, visual and even tasteable details. The reader can almost feel the swelling fruit and the damp honeycomb. Romantic poetry valued direct sensory experience as a route to truth.',
      lineRef: 0,
      effectAr:
        'Keats \u064a\u062d\u0634\u0648 \u0627\u0644\u0640ode \u0628\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0645\u0633\u064a\u0629 \u0648\u0628\u0635\u0631\u064a\u0629 \u0648\u062d\u062a\u0649 \u062a\u0633\u062a\u0630\u0648\u0642\u0647\u0627. \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0643\u0627\u062f \u064a\u062d\u0633\u0651 \u0627\u0644\u0641\u0627\u0643\u0647\u0629 \u0648\u0647\u064a \u062a\u0646\u062a\u0641\u062e \u0648\u0627\u0644\u0634\u0645\u0639 \u0627\u0644\u0631\u0637\u0628. \u0648\u0627\u0644\u0634\u0639\u0631 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a \u0642\u062f\u0651\u0631 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u062d\u0633\u0651\u064a\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0643\u0637\u0631\u064a\u0642 \u0625\u0644\u0649 \u0627\u0644\u062d\u0642\u064a\u0642\u0629.',
    },
    {
      device: 'Sound patterning',
      example: 'soft-lifted by the winnowing wind',
      effect:
        'Alliteration ("soft", "lifted"), assonance ("soft", "winnowing"), and the gentle "w" sounds combine to make the line itself feel like a soft breeze. The form imitates the content.',
      lineRef: 14,
      effectAr:
        'Alliteration \u0628\u064a\u0646 "soft" \u0648"lifted"\u060c assonance \u0628\u064a\u0646 "soft" \u0648"winnowing"\u060c \u0648\u0623\u0635\u0648\u0627\u062a "w" \u0627\u0644\u0646\u0627\u0639\u0645\u0629\u060c \u0643\u0644\u0651\u0647\u0627 \u062a\u062a\u0636\u0627\u0641\u0631 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u064a\u062a \u0628\u0646\u0641\u0633\u0647 \u064a\u062d\u0633\u0651 \u0643\u0623\u0646\u0647 \u0646\u0633\u064a\u0645 \u062e\u0641\u064a\u0641. \u0627\u0644\u0634\u0643\u0644 \u064a\u0642\u0644\u0651\u062f \u0627\u0644\u0645\u062d\u062a\u0648\u0649.',
    },
    {
      device: 'Three-stage structure',
      example: 'stanza 1 ripening, stanza 2 resting, stanza 3 evening',
      effect:
        'Each stanza marks a different stage of the season and a different time of day. The reader experiences a whole autumn in three movements. The structure carries the meaning: time is passing, gently but inevitably.',
      lineRef: 11,
      effectAr:
        '\u0643\u0644 \u0645\u0642\u0637\u0639 \u064a\u0639\u0644\u0651\u0645 \u0639\u0644\u0649 \u0645\u0631\u062d\u0644\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0641\u0635\u0644 \u0648\u0648\u0642\u062a \u0645\u062e\u062a\u0644\u0641 \u0645\u0646 \u0627\u0644\u064a\u0648\u0645. \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u062c\u0631\u0651\u0628 \u062e\u0631\u064a\u0641\u0627\u064b \u0643\u0627\u0645\u0644\u0627\u064b \u0641\u064a \u062b\u0644\u0627\u062b \u062d\u0631\u0643\u0627\u062a. \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0639\u0646\u0649: \u0627\u0644\u0648\u0642\u062a \u064a\u0645\u0631\u0651\u060c \u0628\u0631\u0642\u0651\u0629 \u0628\u0633 \u0628\u062d\u062a\u0645\u064a\u0629.',
    },
    {
      device: 'Volta',
      example:
        'Where are the songs of spring? Ay, where are they? / Think not of them, thou hast thy music too',
      effect:
        'The turn at the start of stanza 3 refuses nostalgia. Keats opens the door to mourning spring and then closes it again. The ode\u2019s philosophical move is this refusal \u2014 a celebration of the present in its own right.',
      lineRef: 23,
      effectAr:
        '\u0627\u0644\u0627\u0646\u0639\u0637\u0627\u0641 \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u0645\u0642\u0637\u0639 3 \u064a\u0631\u0641\u0636 \u0627\u0644\u062d\u0646\u064a\u0646. Keats \u064a\u0641\u062a\u062d \u0627\u0644\u0628\u0627\u0628 \u0644\u0644\u0646\u0648\u0627\u062d \u0639\u0644\u0649 \u0627\u0644\u0631\u0628\u064a\u0639 \u062b\u0645 \u064a\u0633\u0643\u0651\u0631\u0647 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629. \u0648\u0627\u0644\u062d\u0631\u0643\u0629 \u0627\u0644\u0641\u0644\u0633\u0641\u064a\u0629 \u0644\u0644\u0640ode \u0647\u064a \u0647\u0627\u0644\u0631\u0641\u0636 \u2014 \u0627\u062d\u062a\u0641\u0627\u0644 \u0628\u0627\u0644\u062d\u0627\u0636\u0631 \u0628\u062d\u0642\u0651\u0647 \u0647\u0648.',
    },
    {
      device: 'Apostrophe',
      example: 'Season of mists... thou hast thy music too',
      effect:
        'The whole poem is addressed to autumn. Apostrophe (direct address to an absent or non-human being) gives the ode its intimate, conversational tone. Autumn is not just observed \u2014 she is spoken to.',
      lineRef: 24,
      effectAr:
        '\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u0645\u062e\u0627\u0637\u0628\u0629 \u0645\u0648\u062c\u0651\u0647\u0629 \u0644\u0644\u062e\u0631\u064a\u0641. \u0627\u0644\u0640apostrophe (\u0645\u062e\u0627\u0637\u0628\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0634\u064a \u063a\u0627\u0626\u0628 \u0623\u0648 \u063a\u064a\u0631 \u0628\u0634\u0631\u064a) \u062a\u0639\u0637\u064a \u0627\u0644\u0640ode \u0646\u0628\u0631\u062a\u0647\u0627 \u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0650\u0631\u0629. \u0627\u0644\u062e\u0631\u064a\u0641 \u0645\u0648 \u0641\u0642\u0637 \u0645\u0644\u0627\u062d\u0638 \u2014 \u0647\u0648 \u0645\u0643\u0644\u064e\u0651\u0645.',
    },
  ],
}

const comparisons = [
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
    reason:
      'Both poems are Romantic celebrations of a specific time in a specific place. Wordsworth captures a city dawn; Keats captures a country autumn. Compare how each poet uses an exact, fleeting moment to create a wider feeling.',
    themes: ['Beauty', 'Time', 'Romanticism'],
  },
  {
    title: 'Adlestrop',
    poet: 'Edward Thomas',
    href: '/revision/poetry/edexcel/time-and-place',
    reason:
      'Both poems describe an English landscape at a moment of stillness. Keats\u2019s autumn afternoon and Thomas\u2019s hot summer station share a sense of suspended, almost holy quietness.',
    themes: ['Place', 'Stillness', 'Nature'],
  },
  {
    title: 'I started Early \u2013 Took my Dog',
    poet: 'Emily Dickinson',
    href: '/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog',
    reason:
      'Both poems give nature an almost human personality. Keats personifies autumn as a peaceful figure; Dickinson personifies the sea as an aggressive suitor. Compare the very different relationships each speaker has with the natural world.',
    themes: ['Personification', 'Nature', 'Encounter'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ta-1',
    question: 'What is the poem celebrating?',
    type: 'multiple-choice',
    options: [
      'Spring',
      'The richness and beauty of autumn — presented as a season of fulfilment rather than decay',
      'Winter',
      'Summer',
    ],
    correctIndex: 1,
    explanation:
      "Keats celebrates autumn as a season of abundance and beauty rather than decline, presenting it as the culmination of the year's growth.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'ta-2',
    question: 'How is Autumn personified?',
    type: 'multiple-choice',
    options: [
      'As a warrior',
      'As a relaxed figure sitting, sleeping, and gleaning among the harvest',
      'As a child',
      'As an old man',
    ],
    correctIndex: 1,
    explanation:
      'Autumn is personified as a figure sitting on a granary floor, sleeping in a half-reaped furrow, and watching cider press. Each image shows abundance and leisure.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'ta-3',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Three stanzas of 11 lines each — an ode form',
      'A sonnet',
      'Quatrains',
    ],
    correctIndex: 1,
    explanation:
      'An ode with three regular 11-line stanzas, each with a consistent rhyme scheme. The ode form is suited to celebrating a subject with elevated language.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'ta-4',
    question: 'How does each stanza focus on a different sense?',
    type: 'multiple-choice',
    options: [
      "They don't",
      'Stanza 1: sight/touch (ripeness), Stanza 2: sight (personification), Stanza 3: sound (music)',
      'All focus on smell',
      'All focus on taste',
    ],
    correctIndex: 1,
    explanation:
      'Each stanza emphasises a different sensory experience — tactile abundance (1), visual personification (2), and aural music (3) — creating a complete sensory immersion in autumn.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'ta-5',
    question: 'When was the poem written?',
    type: 'multiple-choice',
    options: [
      '1850',
      '19 September 1819, after Keats walked through the water-meadows near Winchester',
      '1794',
      '1914',
    ],
    correctIndex: 1,
    explanation:
      'Written on 19 September 1819 after an evening walk near Winchester. Keats was deeply moved by the warm stubble-fields and the gathering swallows.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'ta-6',
    question: 'What does "Where are the songs of Spring?" acknowledge?',
    type: 'multiple-choice',
    options: [
      'Spring is better',
      'The passing of time — but Keats immediately insists autumn has its own, equally beautiful music',
      'Spring will return',
      'The speaker is sad',
    ],
    correctIndex: 1,
    explanation:
      'The rhetorical question briefly acknowledges loss, but Keats immediately asserts that autumn has its own beauty: "Think not of them, thou hast thy music too."',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ta-7',
    question: 'What does "Close bosom-friend of the maturing sun" suggest?',
    type: 'multiple-choice',
    options: [
      'The sun is hot',
      'Autumn and the sun are intimate allies working together to bring fruit to perfect ripeness',
      'Sunburn',
      'The sun is setting',
    ],
    correctIndex: 1,
    explanation:
      'Autumn and the sun are presented as intimate friends conspiring to ripen everything. The warmth of their relationship mirrors the warmth of the season.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ta-8',
    question: 'How does Keats handle the theme of mortality?',
    type: 'multiple-choice',
    options: [
      'He ignores it',
      "Autumn's beauty is heightened by its transience — the beauty is more precious because it is fleeting",
      'He fears death directly',
      'He celebrates immortality',
    ],
    correctIndex: 1,
    explanation:
      'Keats (who was dying of tuberculosis) creates beauty from transience. Autumn is beautiful precisely because it is passing — the awareness of endings makes the present more vivid.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'ta-9',
    question: 'What is the effect of the gathering swallows at the end?',
    type: 'multiple-choice',
    options: [
      'Spring is coming',
      'The swallows preparing to migrate signal the end of autumn and approaching winter — beauty accompanied by gentle farewell',
      'The birds are feeding',
      'It describes morning',
    ],
    correctIndex: 1,
    explanation:
      "The gathering swallows are preparing to leave for winter. This final image is both beautiful and poignant — autumn's music includes its own farewell.",
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'ta-10',
    question: 'Why is To Autumn considered one of the greatest English poems?',
    type: 'multiple-choice',
    options: [
      'It rhymes well',
      'It perfectly balances sensory richness with philosophical depth — celebrating beauty while acknowledging its transience',
      'It is very old',
      'It is very long',
    ],
    correctIndex: 1,
    explanation:
      'To Autumn achieves a rare balance: it is sensorially rich (every line is full of texture, sound, and colour) while carrying profound philosophical weight about time, mortality, and acceptance.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'To Autumn celebrates the richness of the season while gently acknowledging mortality and the passage of time.',
    keyPoints: [
      'Abundance — autumn as fulfilment rather than decay',
      'Transience — beauty is more precious because it is fleeting',
      'Acceptance — the poem embraces endings rather than fearing them',
      'Keats was dying — personal mortality informs the gentle farewell',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Keats uses personification, sensory imagery across all five senses, and rich, accumulative language to immerse the reader in autumn.',
    keyPoints: [
      'Autumn personified as a relaxed figure among the harvest',
      '"Close bosom-friend of the maturing sun" — intimate alliance',
      'Multi-sensory — sight, touch, taste, smell, sound',
      '"Gathering swallows" — gentle farewell image',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'An ode in three 11-line stanzas, each focused on a different sense, progressing from abundance to acceptance.',
    keyPoints: [
      'Ode form — elevated celebration',
      'Three stanzas: ripeness (1), personification (2), music (3)',
      'Progression from morning to evening — time passing',
      'Regular rhyme scheme — orderly celebration',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Keats present the beauty of autumn in To Autumn?',
  'Compare how nature is presented in To Autumn and one other poem from the anthology.',
  'How does Keats use language and structure to explore the relationship between beauty and transience?',
]

export default function ToAutumnPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="To Autumn by John Keats — Analysis & Annotations"
        description="Line-by-line analysis of To Autumn with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Edexcel Poetry', url: 'https://theenglishhub.app/revision/poetry/edexcel' },
          { name: 'To Autumn', url: 'https://theenglishhub.app/revision/poetry/edexcel/to-autumn' },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/time-and-place" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Time and Place cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">To Autumn</h1>
            <p className="text-body-sm text-muted-foreground">
              John Keats &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="To Autumn"
        textType="poem"
        examBoard="Edexcel"
        cluster="Time and Place"
        variant="compact"
      />
      <InlineStudyEngine
        textName="To Autumn"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={toAutumn} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with To Autumn from the Edexcel Time and Place cluster.
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;To Autumn&rdquo; by John Keats (1819) is in the public domain. All quotations on
          this page are used for the purpose of criticism, review and educational study under fair
          dealing (s.30 Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
