'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────────── */

const climbingMyGrandfatherPoem: PoemData = {
  title: 'Climbing My Grandfather',
  poet: 'Andrew Waterhouse',
  // RIGHTS NOTE: "Climbing My Grandfather" by Andrew Waterhouse is in copyright (estate / The Rialto / Rialto Press / Faber editions).
  // Full text is not reproduced here. Under fair-dealing for criticism/review (CDPA 1988 s.30),
  // only verified short extracts are quoted; bracketed prose summarises the rest of the poem,
  // which is a single 25-line free-verse block.
  lines: [
    {
      text: 'I decide to do it free, without a rope or net.',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'The poem opens by establishing the central conceit: the speaker will "climb" his grandfather like a mountaineer scaling a rock face. "Free" means without safety equipment \u2014 this is an act of trust and vulnerability.',
          color: '#ef4444',
        },
        {
          type: 'Tone',
          note: '"I decide" is confident and deliberate. The speaker chooses to engage with his grandfather openly, without emotional protection or barriers.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'First, the old brogues, dusty and cracked;',
      annotations: [
        {
          type: 'Starting point',
          note: 'The climb begins at the feet \u2014 the grandfather\'s shoes. "Old", "dusty" and "cracked" hint at age, wear, and a life of work without making the grandfather pitiable.',
          color: '#10b981',
        },
        {
          type: 'Structure',
          note: '"First" signals the beginning of a methodical, bottom-to-top ascent. The poem will move steadily upward through the grandfather\'s body.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[the climb continues onto his trousers: the speaker finds handholds in the corduroy, pushing into the weave to "get a grip" \u2014 fair-dealing summary]',
      annotations: [
        {
          type: 'Tactile imagery',
          note: 'The corduroy of the trousers becomes a textured rock face \u2014 ridges to grip, "splintered" surfaces. The mundane detail of clothing is transformed into geological terrain.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'an easy scramble onto his trousers,',
      annotations: [
        {
          type: 'Climbing diction',
          note: '"Scramble" is technical mountaineering language for an informal climb between walking and proper climbing. The metaphor is precise, not decorative.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'pushing into the weave, trying to get a grip.',
      annotations: [
        {
          type: 'Physical verbs',
          note: '"Pushing" and "trying to get a grip" are effortful, physical actions. Knowing a grandparent takes work \u2014 close engagement, not distant observation.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Onto the belt and shirt: the speaker moves up to the broad chest \u2014 fair-dealing summary; original continues with detail of buckle, shirt, and skin.]',
      annotations: [
        {
          type: 'Ascent',
          note: 'Each item of clothing becomes a stage of the climb. The body is mapped from below as a landscape with belts as ridges and shirts as expansive faces.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'By the overhanging shirt I change',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The shirt "overhangs" like a rock outcrop the climber must navigate around. The mountaineering metaphor is sustained with geological precision.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'direction, traverse along his belt',
      annotations: [
        {
          type: 'Climbing diction',
          note: '"Traverse" is a technical climbing term for moving sideways across a rock face rather than straight up. Once again, the metaphor uses real mountaineering vocabulary.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'to an earth-stained hand. The nails',
      annotations: [
        {
          type: 'Detail',
          note: '"Earth-stained" suggests the grandfather is a man of the outdoors \u2014 perhaps a gardener or farmer. The detail places him in nature and reinforces the landscape metaphor.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'are splintered and give good purchase,',
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Splintered" nails like cracked rock; "give good purchase" is climbing terminology for a reliable handhold. The body is presented as solid, dependable terrain.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[The climb continues onto the arm and shoulder \u2014 fair-dealing summary; the speaker scales the sleeve and feels the strong, steady muscle beneath the cloth.]',
      annotations: [
        {
          type: 'Strength',
          note: "The grandfather's arm is presented as enduring and powerful. The metaphor of the mountain reinforces his solidity \u2014 he is something that has lasted.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'the skin of his finger is smooth and thick',
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Smooth and thick" describes aged skin with tenderness rather than disgust. The physical detail creates intimacy \u2014 the speaker knows his grandfather\'s body through touch.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'like warm ice.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Warm ice" is a contradiction. Ice is cold, but the grandfather\'s skin has the smoothness of ice with the warmth of life. The phrase captures the strangeness and tenderness of an old body.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'On his arm I discover',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Discover" frames the climb as exploration. The grandfather is uncharted territory; each new feature is a discovery. The body is a continent to be mapped.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'the glassy ridge of a scar,',
      annotations: [
        {
          type: 'History',
          note: 'A scar is a record of a wound, a piece of history written on the body. "Glassy ridge" makes it sound geological \u2014 even injury becomes part of the landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[The speaker pauses, then continues up the shoulder, through the white hair "soft and thick", towards the head and face \u2014 fair-dealing summary.]',
      annotations: [
        {
          type: 'Pace',
          note: 'The climb slows as it approaches the summit. The speaker takes time with the hair, the neck, the face \u2014 the most intimate territory is approached carefully.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'gasping for breath I can only lie',
      annotations: [
        {
          type: 'Physical effort',
          note: '"Gasping for breath" makes the climb exhausting \u2014 fully knowing someone is hard work. The speaker has to stop and rest before the final push.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'watching clouds and birds circle,',
      annotations: [
        {
          type: 'Imagery',
          note: 'From this height (near the head), the view is of sky and birds \u2014 the speaker has climbed high enough to see what the grandfather sees. The perspective is shared.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'feeling his heat, knowing',
      annotations: [
        {
          type: 'Intimacy',
          note: '"Feeling his heat" is extraordinarily close \u2014 body heat is felt only at very intimate distances. "Knowing" is left dangling; the line break delays what is known.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'the slow pulse of his good heart.',
      annotations: [
        {
          type: 'Double meaning',
          note: '"Good heart" works literally (a steady, healthy heartbeat) and metaphorically (the grandfather\'s kind nature). The two meanings fuse \u2014 physical and moral worth are inseparable.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[The speaker resumes the climb, reaching for the face: the lined forehead, the cheek, the lips \u2014 fair-dealing summary.]',
      annotations: [
        {
          type: 'Final ascent',
          note: 'The face is the last and highest territory. Each feature is a separate stage of the summit attempt.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Finally, the cliff of the face',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Cliff" suggests both the vertical, imposing nature of the face and its weathered, lined surface. The speaker approaches it like a real climber tackling a wall.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'I rest my feet in the bristle of his chin,',
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Bristle" makes the stubble into footholds \u2014 texture and grip on the cliff. The image is funny and tender at once.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'reach the summit, gaze into his eyes,',
      annotations: [
        {
          type: 'Climax',
          note: '"Summit" completes the metaphor: the highest point of the climb is the grandfather\'s eyes. "Gaze into" is the deepest possible look \u2014 eye contact, soul to soul.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'and grinning back, watch a pulse',
      annotations: [
        {
          type: 'Reciprocity',
          note: '"Grinning back" reveals that the grandfather is awake and aware throughout \u2014 he sees the speaker and smiles. The climb is not a one-way exploration but a shared moment.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'in his weathered neck.',
      annotations: [
        {
          type: 'Detail',
          note: '"Weathered" continues the landscape metaphor \u2014 the grandfather has been shaped by time and exposure, like a mountain shaped by wind and rain.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[The closing lines come to rest in the white hair of the summit, "soft and thick", with the speaker still watching the slow heartbeat \u2014 fair-dealing summary.]',
      annotations: [
        {
          type: 'Final image',
          note: "The poem ends with the speaker at the summit, settled into the grandfather's hair, listening to his heart. The image is one of complete intimacy, trust, and rest.",
          color: '#10b981',
        },
        {
          type: 'Posthumous resonance',
          note: "Given Waterhouse's early death in 2001, the calm intimacy of the closing image has acquired an additional poignancy \u2014 a record of how deeply a grandchild can know a grandparent.",
          color: '#8b5cf6',
        },
      ],
    },
  ],

  context:
    '<p><strong>Andrew Waterhouse (1958\u20132001)</strong> was an English poet and environmentalist from Northumberland. He won the Forward Prize for Best First Collection with <em>In</em> (2000). Tragically, he took his own life in 2001, making his poetry posthumously poignant.</p>' +
    '<p><strong>"Climbing My Grandfather"</strong> was published in <em>In</em> (2000). The poem uses a single sustained metaphor \u2014 climbing a mountain \u2014 to explore the speaker\'s relationship with his grandfather.</p>' +
    "<p>The <strong>extended metaphor of mountaineering</strong> transforms the act of getting to know a grandparent into a physical journey. The grandfather's body becomes a landscape to explore, with clothing as terrain and features as geological formations.</p>" +
    '<p>The poem is <strong>entirely positive</strong>. Unlike many poems in the anthology that explore conflict, loss, or difficulty, "Climbing My Grandfather" presents family love as a source of wonder, warmth, and discovery.</p>' +
    '<p>Given Waterhouse\'s <strong>posthumous publication</strong> and early death, the poem has acquired additional layers of meaning. The final image of "sky" can be read as the grandfather looking towards heaven, or as the infinite, ungraspable nature of truly knowing another person.</p>' +
    '<p>The poem may also reflect on <strong>intergenerational connection</strong> \u2014 how a grandchild can bridge the gap between generations through patient, loving attention to physical detail.</p>',

  contextAr:
    '<p><strong>Andrew Waterhouse (1958\u20132001)</strong> \u0634\u0627\u0639\u0631 \u0625\u0646\u062c\u0644\u064a\u0632\u064a \u0648\u0646\u0627\u0634\u0637 \u0628\u064a\u0626\u064a \u0645\u0646 Northumberland. \u0641\u0627\u0632 \u0628\u062c\u0627\u0626\u0632\u0629 Forward Prize \u0644\u0623\u062d\u0633\u0646 \u0645\u062c\u0645\u0648\u0639\u0629 \u0623\u0648\u0644\u0649 \u0639\u0646 \u062f\u064a\u0648\u0627\u0646\u0647 <em>In</em> (2000). \u0644\u0644\u0623\u0633\u0641\u060c \u0623\u0646\u0647\u0649 \u062d\u064a\u0627\u062a\u0647 \u0628\u0646\u0641\u0633\u0647 \u0633\u0646\u0629 2001\u060c \u0648\u0647\u0630\u0627 \u0627\u0644\u0644\u064a \u062e\u0644\u0651\u0649 \u0634\u0639\u0631\u0647 \u062b\u0642\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0644\u0628 \u0628\u0639\u062f \u0631\u062d\u064a\u0644\u0647.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>"Climbing My Grandfather"</strong> \u0627\u0646\u062a\u0634\u0631\u062a \u0641\u064a \u062f\u064a\u0648\u0627\u0646 <em>In</em> (2000). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 extended metaphor \u0648\u0627\u062d\u062f\u0629 \u2014 \u062a\u0633\u0644\u0651\u0642 \u062c\u0628\u0644 \u2014 \u0639\u0634\u0627\u0646 \u062a\u0633\u062a\u0643\u0634\u0641 \u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0628\u062c\u062f\u0651\u0647.</p>' +
    '<p>\u0627\u0644\u0640<strong>extended metaphor</strong> \u0644\u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u062c\u0628\u0627\u0644 \u062a\u062d\u0648\u0651\u0644 \u0641\u0639\u0644 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062c\u062f\u0651 \u0625\u0644\u0649 \u0631\u062d\u0644\u0629 \u062c\u0633\u062f\u064a\u0629. \u062c\u0633\u0645 \u0627\u0644\u062c\u062f\u0651 \u064a\u0635\u064a\u0631 \u0645\u0646\u0638\u0631 \u0637\u0628\u064a\u0639\u064a \u064a\u0633\u062a\u0643\u0634\u0641\u060c \u0648\u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u062a\u0635\u064a\u0631 \u062a\u0636\u0627\u0631\u064a\u0633\u060c \u0648\u0645\u0644\u0627\u0645\u062d \u0627\u0644\u0648\u062c\u0647 \u062a\u0635\u064a\u0631 \u062a\u0643\u0648\u064a\u0646\u0627\u062a \u062c\u064a\u0648\u0644\u0648\u062c\u064a\u0629.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 <strong>\u0625\u064a\u062c\u0627\u0628\u064a\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644</strong>. \u0639\u0643\u0633 \u0648\u0627\u064a\u062f \u0642\u0635\u0627\u064a\u062f \u062b\u0627\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0637\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0644\u064a \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0635\u0631\u0627\u0639 \u0648\u0627\u0644\u0641\u0642\u062f \u0648\u0627\u0644\u0635\u0639\u0648\u0628\u0627\u062a\u060c "Climbing My Grandfather" \u062a\u0642\u062f\u0651\u0645 \u062d\u0628 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0643\u0645\u0635\u062f\u0631 \u062f\u0647\u0634\u0629 \u0648\u062f\u0641\u0621 \u0648\u0627\u0643\u062a\u0634\u0627\u0641.</p>' +
    '<p>\u0628\u062d\u0643\u0645 <strong>\u0646\u0634\u0631 \u0627\u0644\u062f\u064a\u0648\u0627\u0646 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0631\u062d\u064a\u0644 Waterhouse \u0627\u0644\u0645\u0628\u0643\u0651\u0631</strong>\u060c \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0627\u0643\u062a\u0633\u0628\u062a \u0637\u0628\u0642\u0627\u062a \u0645\u0639\u0627\u0646\u064a \u0625\u0636\u0627\u0641\u064a\u0629. \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u0644\u0640"sky" \u064a\u062d\u062a\u0645\u0644 \u0642\u0631\u0627\u0621\u062a\u064a\u0646: \u0627\u0644\u062c\u062f\u0651 \u064a\u062a\u0637\u0644\u0651\u0639 \u0644\u0648\u0631\u0627 \u0641\u0648\u0642 \u0646\u062d\u0648 \u0627\u0644\u0633\u0645\u0627\u0621\u060c \u0623\u0648 \u0625\u0646 \u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0627\u0644\u062b\u0627\u0646\u064a \u0641\u0639\u0644\u0627\u064b \u0634\u064a \u0644\u0627 \u0645\u062d\u062f\u0648\u062f \u0648\u0644\u0627 \u064a\u062f\u0631\u0643\u0647 \u0623\u062d\u062f.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0630\u0644\u0643 \u064a\u062d\u062a\u0645\u0644 \u0625\u0646\u0647\u0627 \u062a\u062a\u0623\u0645\u0651\u0644 \u0641\u064a <strong>\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u064a\u0627\u0644</strong> \u2014 \u0643\u064a\u0641 \u0627\u0644\u062d\u0641\u064a\u062f \u064a\u0642\u062f\u0631 \u064a\u0633\u062f \u0627\u0644\u0641\u062c\u0648\u0629 \u0628\u064a\u0646 \u062c\u064a\u0644\u064a\u0646 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0627\u0644\u0635\u0628\u0648\u0631 \u0648\u0627\u0644\u0645\u062d\u0628\u0651 \u0644\u0643\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u062c\u0633\u062f\u064a\u0629.</p>',

  summary:
    'Opening (lines 1\u20135): The speaker decides to "climb" his grandfather "free, without a rope or net". He begins at the "old brogues, dusty and cracked" and scrambles onto the trousers, "pushing into the weave, trying to get a grip".\n\n' +
    'Mid-climb (lines 6\u201315): He navigates the overhanging shirt, traverses the belt, and reaches the "earth-stained hand" whose splintered nails "give good purchase". The skin of the finger is "smooth and thick / like warm ice". On the arm he discovers "the glassy ridge of a scar".\n\n' +
    'Pause near the summit (lines 16\u201320): "Gasping for breath", the speaker stops and watches "clouds and birds circle", "feeling his heat, knowing / the slow pulse of his good heart". This intimate rest is the emotional heart of the poem.\n\n' +
    'Summit (lines 21\u201325): Climbing the "cliff of the face", resting his feet in "the bristle of his chin", the speaker reaches the summit and gazes into the grandfather\'s eyes. The grandfather is "grinning back" \u2014 the climb has been a shared, conscious moment all along.',

  summaryAr:
    '\u0627\u0644\u0628\u062f\u0627\u064a\u0629 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 1\u20135): \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0642\u0631\u0651\u0631 \u064a\u0640"\u062a\u0633\u0644\u0651\u0642" \u062c\u062f\u0651\u0647 "free, without a rope or net" (\u0628\u062f\u0648\u0646 \u062d\u0628\u0644 \u0648\u0644\u0627 \u0634\u0628\u0643\u0629 \u0623\u0645\u0627\u0646). \u064a\u0628\u062f\u0623 \u0645\u0646 "old brogues, dusty and cracked" (\u062d\u0630\u0627\u0621 \u0642\u062f\u064a\u0645 \u0645\u062a\u063a\u0628\u0651\u0631 \u0648\u0645\u062a\u0634\u0642\u0651\u0642) \u0648\u064a\u062a\u0633\u0644\u0651\u0642 \u0641\u0648\u0642 \u0639\u0644\u0649 \u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646\u060c \u0648\u0647\u0648 "pushing into the weave, trying to get a grip" (\u064a\u0636\u063a\u0637 \u0641\u064a \u0627\u0644\u0646\u0633\u064a\u062c \u0648\u064a\u062d\u0627\u0648\u0644 \u064a\u0645\u0633\u0643).\n\n' +
    '\u0646\u0635 \u0627\u0644\u062a\u0633\u0644\u0651\u0642 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 6\u201315): \u064a\u062a\u062c\u0627\u0648\u0632 \u0642\u0645\u064a\u0635 \u0646\u0627\u062a\u064a ("overhanging shirt")\u060c \u0648\u064a\u0645\u0634\u064a \u0639\u0631\u0636\u064a\u0627\u064b (traverse) \u0641\u0648\u0642 \u0627\u0644\u062d\u0632\u0627\u0645\u060c \u0648\u064a\u0648\u0635\u0644 \u0644\u0640"earth-stained hand" (\u064a\u062f \u0645\u0644\u0637\u0651\u062e\u0629 \u0628\u062a\u0631\u0627\u0628) \u0623\u0638\u0627\u0641\u0631\u0647\u0627 \u0645\u062a\u0634\u0642\u0651\u0642\u0629 \u0648"give good purchase" (\u062a\u0639\u0637\u064a \u0642\u0628\u0636\u0629 \u0632\u064a\u0646\u0629). \u062c\u0644\u062f \u0627\u0644\u0625\u0635\u0628\u0639 "smooth and thick / like warm ice" (\u0646\u0627\u0639\u0645 \u0648\u0633\u0645\u064a\u0643 / \u0645\u062b\u0644 \u062b\u0644\u062c \u062f\u0627\u0641\u064a). \u0648\u0639\u0644\u0649 \u0627\u0644\u0630\u0631\u0627\u0639 \u064a\u0643\u062a\u0634\u0641 "the glassy ridge of a scar" (\u0646\u062a\u0648\u0621 \u0632\u062c\u0627\u062c\u064a \u0644\u062c\u0631\u062d \u0642\u062f\u064a\u0645).\n\n' +
    '\u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0627\u0644\u0642\u0645\u0629 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 16\u201320): \u0648\u0647\u0648 "gasping for breath" (\u064a\u0644\u0647\u062b)\u060c \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0648\u0642\u0641 \u0648\u064a\u0631\u0627\u0642\u0628 "clouds and birds circle" (\u0627\u0644\u0633\u062d\u0627\u0628 \u0648\u0627\u0644\u0637\u064a\u0648\u0631 \u064a\u062f\u0648\u0631\u0648\u0646)\u060c \u0648\u0647\u0648 "feeling his heat, knowing / the slow pulse of his good heart" (\u064a\u062d\u0633\u0651 \u0628\u062d\u0631\u0627\u0631\u0629 \u062c\u062f\u0651\u0647 \u0648\u064a\u0639\u0631\u0641 \u0646\u0628\u0636 \u0642\u0644\u0628\u0647 \u0627\u0644\u0637\u064a\u0651\u0628 \u0627\u0644\u0628\u0637\u064a\u0621). \u0647\u0630\u064a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0627\u0644\u062d\u0645\u064a\u0645\u0629 \u0647\u064a \u0642\u0644\u0628 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0627\u0644\u0639\u0627\u0637\u0641\u064a.\n\n' +
    '\u0627\u0644\u0642\u0645\u0629 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 21\u201325): \u064a\u062a\u0633\u0644\u0651\u0642 "cliff of the face" (\u062c\u0631\u0641 \u0627\u0644\u0648\u062c\u0647)\u060c \u0648\u064a\u0631\u062a\u0627\u062d \u0628\u0631\u062c\u0648\u0644\u064a\u0646\u0647 \u0641\u064a "bristle of his chin" (\u0634\u0639\u0631 \u0627\u0644\u0644\u062d\u064a\u0629)\u060c \u0648\u064a\u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629 \u0648\u064a\u063a\u0631\u0632 \u0646\u0638\u0631\u0647 \u0641\u064a \u0639\u064a\u0648\u0646 \u062c\u062f\u0651\u0647. \u0627\u0644\u062c\u062f\u0651 "grinning back" (\u064a\u0628\u062a\u0633\u0645 \u0644\u0647) \u2014 \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u062d\u0638\u0629 \u0645\u0634\u062a\u0631\u0643\u0629 \u0648\u0648\u0627\u0639\u064a\u0629 \u0628\u064a\u0646 \u0627\u0644\u0627\u062b\u0646\u064a\u0646.',

  formAndStructure:
    'Form: A single, unbroken stanza of free verse \u2014 25 lines, no regular rhyme scheme or metre. The lack of formal constraints mirrors the free, exploratory nature of the climb \u2014 the speaker discovers the grandfather without a predetermined path.\n\n' +
    'Single stanza: The poem is written as one continuous block of text, reflecting the unbroken, sustained effort of the climb. There are no stanza breaks \u2014 the journey is continuous and committed, with no convenient resting points.\n\n' +
    'Sustained metaphor: The entire poem is built on a single extended metaphor: the grandfather as a mountain. This metaphor is maintained with remarkable consistency from "scramble" and "traverse" to "summit", giving the poem structural coherence.\n\n' +
    "Ascending structure: The poem physically moves upward through the grandfather's body: brogues \u2192 trousers \u2192 belt \u2192 hand \u2192 arm \u2192 chest \u2192 neck \u2192 face \u2192 eyes. The reader ascends with the speaker, creating a sense of building momentum and discovery.\n\n" +
    'Enjambment: Lines frequently run into each other, mimicking the continuous, hand-over-hand movement of climbing. The reader cannot pause \u2014 they must keep moving upward.\n\n' +
    'Present tense: The climb is narrated in present tense, making it feel immediate and ongoing. The speaker is discovering his grandfather in real time, and the reader discovers alongside him.\n\n' +
    'Pace variation: The poem slows at "gasping for breath" before the final push to the summit, mirroring the rhythm of an actual climb. The final "grinning back" provides a quietly comic reveal.',

  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644 (Form): \u0645\u0642\u0637\u0639 \u0648\u0627\u062d\u062f \u0645\u062a\u0648\u0627\u0635\u0644 \u0645\u0646 free verse \u2014 25 \u0628\u064a\u062a\u060c \u0628\u062f\u0648\u0646 \u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 \u0645\u0646\u062a\u0638\u0645 \u0648\u0644\u0627 metre \u062b\u0627\u0628\u062a. \u063a\u064a\u0627\u0628 \u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0634\u0643\u0644\u064a\u0629 \u064a\u0639\u0643\u0633 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u062d\u0631\u0651\u0629 \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641\u064a\u0629 \u0644\u0644\u062a\u0633\u0644\u0651\u0642 \u2014 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0643\u062a\u0634\u0641 \u062c\u062f\u0651\u0647 \u0628\u062f\u0648\u0646 \u0645\u0633\u0627\u0631 \u0645\u062d\u062f\u0651\u062f \u0645\u0646 \u0642\u0628\u0644.\n\n' +
    '\u0645\u0642\u0637\u0639 \u0648\u0627\u062d\u062f (Single stanza): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0643\u0643\u062a\u0644\u0629 \u0646\u0635 \u0648\u0627\u062d\u062f\u0629 \u0645\u062a\u0648\u0627\u0635\u0644\u0629\u060c \u0639\u0634\u0627\u0646 \u062a\u0639\u0643\u0633 \u0627\u0644\u062c\u0647\u062f \u0627\u0644\u0645\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0644\u064a \u0645\u0627 \u064a\u0646\u0642\u0637\u0639 \u0644\u0644\u062a\u0633\u0644\u0651\u0642. \u0645\u0627 \u0641\u064a\u0647 \u0641\u0648\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0642\u0627\u0637\u0639 \u2014 \u0627\u0644\u0631\u062d\u0644\u0629 \u0645\u0633\u062a\u0645\u0631\u0651\u0629 \u0648\u0645\u0644\u062a\u0632\u0645\u0629\u060c \u0648\u0645\u0627 \u0641\u064a\u0647 \u0646\u0642\u0627\u0637 \u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u0645\u0631\u064a\u062d\u0629.\n\n' +
    '\u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u0645\u0645\u062a\u062f\u0629 (Sustained metaphor): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627 \u0645\u0628\u0646\u064a\u0629 \u0639\u0644\u0649 extended metaphor \u0648\u0627\u062d\u062f\u0629: \u0627\u0644\u062c\u062f\u0651 \u0643\u0623\u0646\u0647 \u062c\u0628\u0644. \u0647\u0630\u064a \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u062a\u062a\u0645\u0633\u0651\u0643 \u0641\u064a\u0647\u0627 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u062b\u0628\u0627\u062a \u0645\u0644\u0641\u062a \u0645\u0646 "scramble" \u0648"traverse" \u0644\u064a\u0646 "summit"\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0645\u0627\u0633\u0643 \u0628\u0646\u064a\u0648\u064a.\n\n' +
    '\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0635\u0627\u0639\u062f\u0629 (Ascending structure): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062a\u062d\u0631\u0651\u0643 \u062c\u0633\u062f\u064a\u0627\u064b \u0644\u0648\u0631\u0627 \u0641\u0648\u0642 \u0639\u0628\u0631 \u062c\u0633\u0645 \u0627\u0644\u062c\u062f\u0651: brogues \u2190 trousers \u2190 belt \u2190 hand \u2190 arm \u2190 chest \u2190 neck \u2190 face \u2190 eyes. \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0635\u0639\u062f \u0645\u0639 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a \u0625\u062d\u0633\u0627\u0633 \u0628\u0632\u062e\u0645 \u0645\u062a\u0631\u0627\u0643\u0645 \u0648\u0627\u0643\u062a\u0634\u0627\u0641.\n\n' +
    'Enjambment: \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u062a\u0646\u0633\u0627\u0628 \u0645\u0646 \u0648\u0627\u062d\u062f \u0644\u0644\u062b\u0627\u0646\u064a \u0628\u0634\u0643\u0644 \u0645\u062a\u0643\u0631\u0651\u0631\u060c \u062a\u062d\u0627\u0643\u064a \u062d\u0631\u0643\u0629 \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0651\u0629 (\u064a\u062f \u0641\u0648\u0642 \u064a\u062f). \u0627\u0644\u0642\u0627\u0631\u0626 \u0645\u0627 \u064a\u0642\u062f\u0631 \u064a\u0648\u0642\u0641 \u2014 \u0644\u0627\u0632\u0645 \u064a\u0633\u062a\u0645\u0631 \u064a\u0635\u0639\u062f.\n\n' +
    '\u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 (Present tense): \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0645\u0631\u0648\u064a \u0641\u064a \u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631\u060c \u0641\u064a\u062d\u0633 \u0628\u0647 \u0627\u0644\u0642\u0627\u0631\u0626 \u0643\u0623\u0646\u0647 \u0645\u0628\u0627\u0634\u0631 \u0648\u0645\u0633\u062a\u0645\u0631. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0643\u062a\u0634\u0641 \u062c\u062f\u0651\u0647 \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0641\u0639\u0644\u064a\u060c \u0648\u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0643\u062a\u0634\u0641 \u0645\u0639\u0627\u0647.\n\n' +
    '\u062a\u0646\u0648\u0651\u0639 \u0627\u0644\u0625\u064a\u0642\u0627\u0639 (Pace variation): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0628\u0637\u0651\u0626 \u0639\u0646\u062f "gasping for breath" \u0642\u0628\u0644 \u0627\u0644\u062f\u0641\u0639\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u0644\u0644\u0642\u0645\u0629\u060c \u062a\u062d\u0627\u0643\u064a \u0625\u064a\u0642\u0627\u0639 \u062a\u0633\u0644\u0651\u0642 \u062d\u0642\u064a\u0642\u064a. \u0648\u0627\u0644\u0640"grinning back" \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u064a\u0643\u0634\u0641 \u0644\u062d\u0638\u0629 \u0647\u0627\u062f\u0626\u0629 \u0641\u064a\u0647\u0627 \u0643\u0648\u0645\u064a\u062f\u064a\u0627 \u062e\u0641\u064a\u0641\u0629.',

  keyQuotes: [
    {
      quote: 'I decide to do it free, without a rope or net',
      analysis:
        'Free climbing without safety equipment requires trust and courage. The speaker approaches his grandfather without emotional barriers or protection \u2014 he is willing to be vulnerable.',
      themes: ['Family', 'Trust', 'Vulnerability'],
      analysisAr:
        '\u0627\u0644\u0640free climbing \u0628\u062f\u0648\u0646 \u0645\u0639\u062f\u0651\u0627\u062a \u0623\u0645\u0627\u0646 \u064a\u0637\u0644\u0628 \u062b\u0642\u0629 \u0648\u0634\u062c\u0627\u0639\u0629. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0642\u062a\u0631\u0628 \u0645\u0646 \u062c\u062f\u0651\u0647 \u0628\u062f\u0648\u0646 \u062d\u0648\u0627\u062c\u0632 \u0639\u0627\u0637\u0641\u064a\u0629 \u0648\u0644\u0627 \u062d\u0645\u0627\u064a\u0629 \u2014 \u0647\u0648 \u0645\u0633\u062a\u0639\u062f \u0625\u0646\u0647 \u064a\u0643\u0648\u0646 \u0639\u0631\u0636\u0629 \u0644\u0644\u0623\u0630\u0649.',
      themesAr: [
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
        '\u0627\u0644\u062b\u0642\u0629',
        '\u0627\u0644\u0627\u0646\u0643\u0634\u0627\u0641 \u0627\u0644\u0639\u0627\u0637\u0641\u064a',
      ],
    },
    {
      quote: 'First, the old brogues, dusty and cracked',
      analysis:
        'The climb begins at the feet \u2014 the grandfather\'s shoes. "Old", "dusty" and "cracked" hint at age, wear, and a life of work. The grandfather is grounded, weathered, and real.',
      themes: ['Family', 'Age', 'Detail'],
      analysisAr:
        '\u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u064a\u0628\u062f\u0623 \u0645\u0646 \u0627\u0644\u0631\u062c\u0644\u064a\u0646 \u2014 \u062d\u0630\u0627\u0621 \u0627\u0644\u062c\u062f\u0651. \u0643\u0644\u0645\u0627\u062a "old"\u060c "dusty"\u060c \u0648"cracked" \u062a\u0644\u0645\u0651\u062d \u0644\u0644\u0639\u0645\u0631\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643\u060c \u0648\u062d\u064a\u0627\u0629 \u0634\u063a\u0644 \u0637\u0648\u064a\u0644. \u0627\u0644\u062c\u062f\u0651 \u0645\u0631\u0633\u0651\u062e \u0641\u064a \u0627\u0644\u0623\u0631\u0636\u060c \u0639\u0627\u0634 \u0648\u062f\u062e\u0644 \u062a\u062c\u0627\u0631\u0628\u060c \u0648\u062d\u0642\u064a\u0642\u064a.',
      themesAr: [
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
        '\u0627\u0644\u0639\u0645\u0631',
        '\u0627\u0644\u062a\u0641\u0635\u064a\u0644',
      ],
    },
    {
      quote: 'an easy scramble onto his trousers, / pushing into the weave, trying to get a grip',
      analysis:
        '"Scramble" is technical mountaineering language. The corduroy weave becomes a rock face the speaker tries to grip. Mundane fabric is translated into climbable terrain.',
      themes: ['Extended Metaphor', 'Effort', 'Touch'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "scramble" \u0647\u064a \u0645\u0641\u0631\u062f\u0629 \u062a\u0642\u0646\u064a\u0629 \u0645\u0646 \u0645\u0641\u0631\u062f\u0627\u062a \u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u062c\u0628\u0627\u0644. \u0646\u0633\u064a\u062c \u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646 \u0645\u0646 corduroy \u064a\u0635\u064a\u0631 \u0648\u062c\u0647 \u0635\u062e\u0631\u064a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u062d\u0627\u0648\u0644 \u064a\u0645\u0633\u0643 \u0641\u064a\u0647. \u0642\u0645\u0627\u0634 \u0639\u0627\u062f\u064a \u064a\u062a\u062d\u0648\u0651\u0644 \u0625\u0644\u0649 \u062a\u0636\u0627\u0631\u064a\u0633 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0633\u0644\u0651\u0642.',
      themesAr: [
        'Extended Metaphor',
        '\u0627\u0644\u062c\u0647\u062f',
        '\u0627\u0644\u0644\u0645\u0633',
      ],
    },
    {
      quote: 'traverse along his belt / to an earth-stained hand',
      analysis:
        '"Traverse" is precise climbing vocabulary for moving sideways across a face. "Earth-stained" places the grandfather in nature \u2014 perhaps a gardener or outdoor worker \u2014 reinforcing the landscape metaphor.',
      themes: ['Extended Metaphor', 'Work', 'Identity'],
      analysisAr:
        '"Traverse" \u0645\u0641\u0631\u062f\u0629 \u062f\u0642\u064a\u0642\u0629 \u0645\u0646 \u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u062c\u0628\u0627\u0644\u060c \u0645\u0639\u0646\u0627\u0647\u0627 \u0627\u0644\u062a\u062d\u0631\u0651\u0643 \u062c\u0627\u0646\u0628\u064a\u0627\u064b \u0639\u0644\u0649 \u0648\u062c\u0647 \u0627\u0644\u0635\u062e\u0631. \u0648\u0643\u0644\u0645\u0629 "earth-stained" \u062a\u062d\u0637 \u0627\u0644\u062c\u062f\u0651 \u0641\u064a \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u2014 \u064a\u062d\u062a\u0645\u0644 \u0625\u0646\u0647 \u0645\u0632\u0627\u0631\u0639 \u0623\u0648 \u0631\u062c\u0651\u0627\u0644 \u064a\u0634\u062a\u063a\u0644 \u0628\u0631\u0651\u0627 \u2014 \u0648\u0647\u0630\u0627 \u064a\u0642\u0648\u0651\u064a \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0638\u0631 \u0627\u0644\u0637\u0628\u064a\u0639\u064a.',
      themesAr: [
        'Extended Metaphor',
        '\u0627\u0644\u0634\u063a\u0644',
        '\u0627\u0644\u0647\u0648\u064a\u0629',
      ],
    },
    {
      quote: 'The nails / are splintered and give good purchase',
      analysis:
        '"Splintered" nails like cracked rock; "give good purchase" is climbing terminology for a reliable handhold. The body is presented as solid, dependable terrain.',
      themes: ['Dependability', 'Trust', 'Family'],
      analysisAr:
        '\u0627\u0644\u0623\u0638\u0627\u0641\u0631 "splintered" (\u0645\u062a\u0634\u0642\u0651\u0642\u0629) \u0645\u062b\u0644 \u0635\u062e\u0631 \u0645\u0643\u0633\u0651\u0631\u061b \u0648"give good purchase" \u0645\u0635\u0637\u0644\u062d \u062a\u0633\u0644\u0651\u0642 \u0645\u0639\u0646\u0627\u0647 \u0642\u0628\u0636\u0629 \u0645\u0648\u062b\u0648\u0642\u0629. \u0627\u0644\u062c\u0633\u0645 \u0645\u0642\u062f\u0651\u0645 \u0639\u0644\u0649 \u0625\u0646\u0647 \u062a\u0636\u0627\u0631\u064a\u0633 \u0635\u0644\u0628\u0629 \u064a\u0645\u0643\u0646 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u064a\u0647\u0627.',
      themesAr: [
        '\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f\u064a\u0629',
        '\u0627\u0644\u062b\u0642\u0629',
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
      ],
    },
    {
      quote: 'smooth and thick / like warm ice',
      analysis:
        '"Warm ice" is an oxymoron. Ice is cold and smooth, but the grandfather\'s skin has the smoothness of ice with the warmth of life. The phrase captures the strangeness and tenderness of an old body.',
      themes: ['Age', 'Tenderness', 'Touch'],
      analysisAr:
        '"Warm ice" oxymoron (\u062a\u0646\u0627\u0642\u0636 \u0638\u0627\u0647\u0631\u064a). \u0627\u0644\u062b\u0644\u062c \u0628\u0627\u0631\u062f \u0648\u0623\u0645\u0644\u0633\u060c \u0628\u0633 \u062c\u0644\u062f \u0627\u0644\u062c\u062f\u0651 \u0639\u0646\u062f\u0647 \u0646\u0639\u0648\u0645\u0629 \u0627\u0644\u062b\u0644\u062c \u0645\u0639 \u062f\u0641\u0621 \u0627\u0644\u062d\u064a\u0627\u0629. \u0627\u0644\u0639\u0628\u0627\u0631\u0629 \u062a\u0644\u062a\u0642\u0637 \u063a\u0631\u0627\u0628\u0629 \u0627\u0644\u062c\u0633\u0645 \u0627\u0644\u0643\u0628\u064a\u0631 \u0641\u064a \u0627\u0644\u0633\u0646 \u0648\u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u062d\u0646\u0627\u0646\u0647.',
      themesAr: [
        '\u0627\u0644\u0639\u0645\u0631',
        '\u0627\u0644\u062d\u0646\u0627\u0646',
        '\u0627\u0644\u0644\u0645\u0633',
      ],
    },
    {
      quote: 'the glassy ridge of a scar',
      analysis:
        'A scar is a record of a wound and a piece of history written on the body. "Glassy ridge" makes it sound geological \u2014 even injury becomes part of the landscape.',
      themes: ['History', 'Body', 'Memory'],
      analysisAr:
        '\u0627\u0644\u062c\u0631\u062d \u0647\u0648 \u0633\u062c\u0644 \u0644\u062c\u0631\u062d \u0642\u062f\u064a\u0645\u060c \u0648\u0642\u0637\u0639\u0629 \u062a\u0627\u0631\u064a\u062e \u0645\u0643\u062a\u0648\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0633\u0645. \u0648\u0639\u0628\u0627\u0631\u0629 "glassy ridge" \u062a\u062e\u0644\u0651\u064a\u0647 \u064a\u0637\u0644\u0639 \u0643\u0623\u0646\u0647 \u0634\u064a \u062c\u064a\u0648\u0644\u0648\u062c\u064a \u2014 \u062d\u062a\u0649 \u0627\u0644\u0625\u0635\u0627\u0628\u0629 \u062a\u0635\u064a\u0631 \u062c\u0632\u0621 \u0645\u0646 \u0627\u0644\u0645\u0646\u0638\u0631 \u0627\u0644\u0637\u0628\u064a\u0639\u064a.',
      themesAr: [
        '\u0627\u0644\u062a\u0627\u0631\u064a\u062e',
        '\u0627\u0644\u062c\u0633\u0645',
        '\u0627\u0644\u0630\u0627\u0643\u0631\u0629',
      ],
    },
    {
      quote: 'feeling his heat, knowing / the slow pulse of his good heart',
      analysis:
        '"Feeling his heat" is extraordinarily intimate \u2014 body heat is felt only at very close distances. "Good heart" works literally (a steady, healthy beat) and metaphorically (the grandfather\'s kind nature) \u2014 the two meanings fuse.',
      themes: ['Intimacy', 'Love', 'Character'],
      analysisAr:
        '"Feeling his heat" \u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u2014 \u062d\u0631\u0627\u0631\u0629 \u0627\u0644\u062c\u0633\u0645 \u0645\u0627 \u062a\u0646\u062d\u0633 \u0625\u0644\u0627 \u0645\u0646 \u0645\u0633\u0627\u0641\u0629 \u0642\u0631\u064a\u0628\u0629 \u0648\u0627\u064a\u062f. \u0648"good heart" \u062a\u0634\u062a\u063a\u0644 \u062d\u0631\u0641\u064a\u0627\u064b (\u0646\u0628\u0636 \u062b\u0627\u0628\u062a \u0648\u0635\u062d\u064a) \u0648\u0645\u062c\u0627\u0632\u064a\u0627\u064b (\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u062c\u062f\u0651 \u0627\u0644\u0637\u064a\u0651\u0628\u0629) \u2014 \u0648\u0627\u0644\u0645\u0639\u0646\u064a\u064a\u0646 \u064a\u0646\u062f\u0645\u062c\u0648\u0646 \u0645\u0639 \u0628\u0639\u0636.',
      themesAr: [
        '\u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629',
        '\u0627\u0644\u062d\u0628',
        '\u0627\u0644\u0634\u062e\u0635\u064a\u0629',
      ],
    },
    {
      quote: 'reach the summit, gaze into his eyes, / and grinning back',
      analysis:
        '"Summit" completes the climbing metaphor. The reveal that the grandfather is "grinning back" transforms the poem: the climb has not been a one-way exploration but a shared, conscious moment all along.',
      themes: ['Reciprocity', 'Love', 'Family'],
      analysisAr:
        '"Summit" \u064a\u0643\u0645\u0644 \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u062a\u0633\u0644\u0651\u0642. \u0648\u0627\u0643\u062a\u0634\u0627\u0641 \u0625\u0646 \u0627\u0644\u062c\u062f\u0651 "grinning back" (\u064a\u0628\u062a\u0633\u0645 \u0644\u0647) \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627: \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0645\u0627 \u0643\u0627\u0646 \u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0645\u0646 \u0637\u0631\u0641 \u0648\u0627\u062d\u062f\u060c \u0628\u0644 \u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u062d\u0638\u0629 \u0645\u0634\u062a\u0631\u0643\u0629 \u0648\u0648\u0627\u0639\u064a\u0629 \u0628\u064a\u0646 \u0627\u0644\u0627\u062b\u0646\u064a\u0646.',
      themesAr: [
        '\u0627\u0644\u062a\u0628\u0627\u062f\u0644',
        '\u0627\u0644\u062d\u0628',
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'scramble / traverse / good purchase / cliff / summit',
      effect:
        'The grandfather-as-mountain metaphor is sustained throughout the entire poem using genuine climbing vocabulary. Every physical detail of the grandfather is translated into mountaineering terminology, creating a unified, coherent conceit.',
      lineRef: 0,
      effectAr:
        '\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u062c\u062f\u0651-\u0643\u0623\u0646\u0647-\u062c\u0628\u0644 \u0645\u0645\u062a\u062f\u0651\u0629 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627\u060c \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0641\u0631\u062f\u0627\u062a \u062a\u0633\u0644\u0651\u0642 \u0641\u0639\u0644\u064a\u0629. \u0643\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u062c\u0633\u062f\u064a\u0629 \u0641\u064a \u0627\u0644\u062c\u062f\u0651 \u062a\u062a\u062a\u0631\u062c\u0645 \u0625\u0644\u0649 \u0645\u0635\u0637\u0644\u062d\u0627\u062a \u062a\u0633\u0644\u0651\u0642 \u062c\u0628\u0627\u0644\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0642 conceit \u0645\u0648\u062d\u0651\u062f \u0648\u0645\u062a\u0645\u0627\u0633\u0643.',
    },
    {
      device: 'Tactile imagery',
      example: 'pushing into the weave / smooth and thick / bristle of his chin',
      effect:
        'The poem is dominated by the sense of touch. The speaker understands his grandfather through physical contact \u2014 the textures of clothing, skin, and stubble. Touch becomes a language of love.',
      lineRef: 4,
      effectAr:
        '\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u064a\u0633\u064a\u0637\u0631 \u0639\u0644\u064a\u0647\u0627 \u062d\u0627\u0633\u0651\u0629 \u0627\u0644\u0644\u0645\u0633. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0641\u0647\u0645 \u062c\u062f\u0651\u0647 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u062c\u0633\u062f\u064a \u2014 \u0645\u0644\u0627\u0645\u0633 \u0627\u0644\u0645\u0644\u0627\u0628\u0633\u060c \u0648\u0627\u0644\u062c\u0644\u062f\u060c \u0648\u0634\u0639\u0631 \u0627\u0644\u0644\u062d\u064a\u0629. \u0627\u0644\u0644\u0645\u0633 \u064a\u0635\u064a\u0631 \u0644\u063a\u0629 \u0645\u0646 \u0644\u063a\u0627\u062a \u0627\u0644\u062d\u0628.',
    },
    {
      device: 'Oxymoron',
      example: 'like warm ice',
      effect:
        "Ice is cold; the grandfather's skin is warm. The contradiction holds together the smoothness of aged skin and the warmth of a living body in one perfect phrase.",
      lineRef: 12,
      effectAr:
        '\u0627\u0644\u062b\u0644\u062c \u0628\u0627\u0631\u062f\u061b \u0648\u062c\u0644\u062f \u0627\u0644\u062c\u062f\u0651 \u062f\u0627\u0641\u064a. \u0627\u0644\u062a\u0646\u0627\u0642\u0636 \u064a\u062c\u0645\u0639 \u0646\u0639\u0648\u0645\u0629 \u0627\u0644\u062c\u0644\u062f \u0627\u0644\u0643\u0628\u064a\u0631 \u0641\u064a \u0627\u0644\u0633\u0646 \u0645\u0639 \u062f\u0641\u0621 \u062c\u0633\u0645 \u062d\u064a\u0651\u060c \u0641\u064a \u0639\u0628\u0627\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 \u0643\u0627\u0645\u0644\u0629.',
    },
    {
      device: 'Climbing diction',
      example: 'scramble / traverse / purchase / summit',
      effect:
        'Waterhouse uses authentic mountaineering vocabulary rather than vague metaphor. The technical precision makes the conceit feel honest and earned, not decorative.',
      lineRef: 3,
      effectAr:
        'Waterhouse \u064a\u0633\u062a\u062e\u062f\u0645 \u0645\u0641\u0631\u062f\u0627\u062a \u062a\u0633\u0644\u0651\u0642 \u062d\u0642\u064a\u0642\u064a\u0629\u060c \u0645\u0648 \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0641\u0636\u0641\u0627\u0636\u0629. \u0627\u0644\u062f\u0642\u0651\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u0640conceit \u064a\u062d\u0633\u0651 \u0627\u0644\u0642\u0627\u0631\u0626 \u0625\u0646\u0647 \u0635\u0627\u062f\u0642 \u0648\u0645\u0633\u062a\u062d\u064e\u0642\u060c \u0645\u0648 \u0645\u062c\u0631\u0651\u062f \u0632\u064a\u0646\u0629.',
    },
    {
      device: 'Enjambment',
      example: 'feeling his heat, knowing / the slow pulse of his good heart',
      effect:
        'Lines run into each other, mimicking the continuous, hand-over-hand motion of climbing. The line break across "knowing / the slow pulse" delays the moment of intimate knowledge.',
      lineRef: 18,
      effectAr:
        '\u0627\u0644\u0623\u0628\u064a\u0627\u062a \u062a\u0646\u0633\u0627\u0628 \u0645\u0646 \u0648\u0627\u062d\u062f \u0644\u0644\u062b\u0627\u0646\u064a\u060c \u0639\u0634\u0627\u0646 \u062a\u062d\u0627\u0643\u064a \u062d\u0631\u0643\u0629 \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0651\u0629 (\u064a\u062f \u0641\u0648\u0642 \u064a\u062f). \u0648\u0627\u0644\u0643\u0633\u0631 \u0628\u064a\u0646 "knowing / the slow pulse" \u064a\u0623\u062c\u0651\u0644 \u0644\u062d\u0638\u0629 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u062d\u0645\u064a\u0645\u0629.',
    },
    {
      device: 'Double meaning',
      example: 'the slow pulse of his good heart',
      effect:
        '"Good heart" works literally (a healthy heartbeat) and metaphorically (the grandfather\'s kind nature). The two meanings fuse \u2014 physical and moral worth become inseparable.',
      lineRef: 19,
      effectAr:
        '"Good heart" \u062a\u0634\u062a\u063a\u0644 \u062d\u0631\u0641\u064a\u0627\u064b (\u0646\u0628\u0636 \u0642\u0644\u0628 \u0635\u062d\u064a) \u0648\u0645\u062c\u0627\u0632\u064a\u0627\u064b (\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u062c\u062f\u0651 \u0627\u0644\u0637\u064a\u0651\u0628\u0629). \u0648\u0627\u0644\u0645\u0639\u0646\u064a\u064a\u0646 \u064a\u0646\u062f\u0645\u062c\u0648\u0646 \u2014 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062c\u0633\u062f\u064a\u0629 \u0648\u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u062a\u0635\u064a\u0631 \u0645\u0627 \u062a\u0646\u0641\u0635\u0644 \u0639\u0646 \u0628\u0639\u0636\u0647\u0627.',
    },
    {
      device: 'Personification (reversed)',
      example: 'earth-stained hand / glassy ridge of a scar / cliff of the face',
      effect:
        'Rather than personifying nature, Waterhouse "geographifies" the human body. The grandfather becomes a landscape, suggesting he is as vast, ancient, and worthy of exploration as a mountain.',
      lineRef: 7,
      effectAr:
        '\u0628\u062f\u0644 \u0645\u0627 \u064a\u0639\u0637\u064a \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0635\u0641\u0627\u062a \u0625\u0646\u0633\u0627\u0646\u064a\u0629 (personification)\u060c Waterhouse \u064a\u0639\u0643\u0633 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0648\u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u062c\u0633\u0645 \u0627\u0644\u0628\u0634\u0631\u064a \u0625\u0644\u0649 \u062c\u063a\u0631\u0627\u0641\u064a\u0627. \u0627\u0644\u062c\u062f\u0651 \u064a\u0635\u064a\u0631 \u0645\u0646\u0638\u0631 \u0637\u0628\u064a\u0639\u064a\u060c \u0648\u0647\u0630\u0627 \u064a\u0644\u0645\u0651\u062d \u0625\u0646\u0647 \u0634\u0627\u0633\u0639 \u0648\u0642\u062f\u064a\u0645 \u0648\u064a\u0633\u062a\u062d\u0642 \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0645\u062b\u0644 \u0623\u064a \u062c\u0628\u0644.',
    },
    {
      device: 'Reciprocity',
      example: 'gaze into his eyes, / and grinning back',
      effect:
        'The final reveal that the grandfather is "grinning back" reframes the entire climb as a shared moment. The exploration has not been one-way \u2014 the grandfather has known he was being known.',
      lineRef: 23,
      effectAr:
        '\u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0623\u062e\u064a\u0631 \u0625\u0646 \u0627\u0644\u062c\u062f\u0651 "grinning back" (\u064a\u0628\u062a\u0633\u0645 \u0644\u0647) \u064a\u0639\u064a\u062f \u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u062a\u0633\u0644\u0651\u0642 \u0643\u0644\u0647 \u0643\u0644\u062d\u0638\u0629 \u0645\u0634\u062a\u0631\u0643\u0629. \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0645\u0627 \u0643\u0627\u0646 \u0645\u0646 \u0637\u0631\u0641 \u0648\u0627\u062d\u062f \u2014 \u0627\u0644\u062c\u062f\u0651 \u0643\u0627\u0646 \u0639\u0627\u0631\u0641 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0625\u0646\u0647 \u064a\u064f\u0639\u0631\u064e\u0641.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'cmg-1',
    question: "What is the poem's central extended metaphor?",
    type: 'multiple-choice',
    options: [
      'Swimming in the sea',
      'The speaker climbs their grandfather like a mountain, exploring their relationship through physical ascent',
      'Building a house',
      'Painting a portrait',
    ],
    correctIndex: 1,
    explanation:
      "The entire poem is an extended metaphor: the speaker climbs their grandfather's body as if scaling a mountain, using each physical feature as a handhold to explore their relationship.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'cmg-2',
    question: 'What does the climbing represent?',
    type: 'multiple-choice',
    options: [
      'Literal rock climbing',
      'Getting to know the grandfather deeply - physical closeness represents emotional understanding',
      'Running away from home',
      'A competition',
    ],
    correctIndex: 1,
    explanation:
      'The climb represents the process of truly knowing someone. Each body part the speaker touches reveals something about the grandfather - his work, character, and warmth.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'cmg-3',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets in stanzas',
      'A single continuous stanza of free verse',
      'A sonnet',
      'Quatrains with ABAB rhyme',
    ],
    correctIndex: 1,
    explanation:
      'A single continuous block with no stanza breaks, mirroring the unbroken, sustained effort of climbing. The free verse reflects the natural, organic relationship.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'cmg-4',
    question: 'What does "the slow pulse of his good heart" achieve?',
    type: 'multiple-choice',
    options: [
      'It suggests the grandfather has a heart condition',
      'It fuses literal meaning (a steady heartbeat) with metaphorical meaning (his kind nature) - physical and moral worth become inseparable',
      'It shows the speaker is a doctor',
      'It marks the end of the climb',
    ],
    correctIndex: 1,
    explanation:
      'Pausing near the summit and feeling the heartbeat represents the deepest possible knowledge. "Good heart" works literally (a steady, healthy beat) and metaphorically (his kind nature) - the double meaning is the line\'s power.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'cmg-5',
    question: 'Who wrote the poem?',
    type: 'multiple-choice',
    options: [
      'Seamus Heaney',
      'Andrew Waterhouse (1958-2001), who died by suicide shortly after publication',
      'Simon Armitage',
      'Ted Hughes',
    ],
    correctIndex: 1,
    explanation:
      "Andrew Waterhouse (1958-2001) wrote the poem. He died by suicide in 2001, giving the poem's celebration of familial love an additional poignancy in retrospect.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'cmg-6',
    question: 'What does "without a rope or net" suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker is reckless',
      'The speaker approaches the relationship with trust and vulnerability - no safety nets, just genuine connection',
      'Mountain climbing is dangerous',
      'The grandfather is very tall',
    ],
    correctIndex: 1,
    explanation:
      '"Without a rope or net" suggests the speaker approaches the relationship with complete trust. There is vulnerability in truly knowing someone, but the speaker chooses openness.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'cmg-7',
    question: 'How does the poem use the body to structure its narrative?',
    type: 'multiple-choice',
    options: [
      'Randomly',
      'The speaker climbs from feet to head, with each body part revealing character - creating a journey of discovery',
      'Only the face is described',
      'The body is ignored',
    ],
    correctIndex: 1,
    explanation:
      'The poem progresses upward from feet through knees, chest, and face to the summit of the head. Each body part reveals something about the grandfather - his work-roughened hands, kind eyes, warm skin.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'cmg-8',
    question: 'What does the mountain metaphor suggest about the grandfather?',
    type: 'multiple-choice',
    options: [
      'He is cold and distant',
      'He is vast, solid, enduring, and worth the effort of understanding - like a mountain worth climbing',
      'He is dangerous',
      'He is small',
    ],
    correctIndex: 1,
    explanation:
      'The mountain metaphor presents the grandfather as something vast, ancient, and enduring - worthy of the sustained effort needed to know him fully. He is a landscape to be explored.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'cmg-9',
    question: "How does the lack of stanza breaks reflect the poem's meaning?",
    type: 'multiple-choice',
    options: [
      'It is a printing error',
      'The continuous block mirrors the unbroken, sustained effort of truly knowing someone - no pauses or shortcuts',
      'It makes the poem shorter',
      'It has no connection to meaning',
    ],
    correctIndex: 1,
    explanation:
      'The single block mirrors the continuous, uninterrupted effort of climbing/knowing someone. There are no convenient resting points - the relationship demands sustained engagement.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'cmg-10',
    question: 'Which poem pairs best with Climbing My Grandfather?',
    type: 'multiple-choice',
    options: [
      "Porphyria's Lover",
      'Follower by Seamus Heaney',
      'Neutral Tones',
      'When We Two Parted',
    ],
    correctIndex: 1,
    explanation:
      'Both Climbing My Grandfather and Follower explore admiration for a male family figure (grandfather/father). Both use physical, tactile imagery to convey emotional closeness.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Climbing My Grandfather explores familial love, the process of truly knowing someone, trust, and the enduring presence of family.',
    keyPoints: [
      'Getting to know someone - the climb represents deepening understanding',
      'Trust and vulnerability - "without a rope or net"',
      'Physical closeness as emotional intimacy',
      'The grandfather as enduring, solid, and worth knowing',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Waterhouse uses an extended mountain-climbing metaphor, tactile body imagery, and warmth to celebrate familial intimacy.',
    keyPoints: [
      'Extended metaphor - grandfather as mountain to be climbed',
      '"Without a rope or net" - trust and openness',
      'Body parts as landscape features - hands like ridges, skin like earth',
      '"The slow pulse of his good heart" - literal and metaphorical warmth',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'A single continuous stanza of free verse - the unbroken block mirrors the sustained effort of truly knowing someone.',
    keyPoints: [
      'Single stanza - no breaks, no shortcuts in understanding someone',
      'Free verse - organic, natural rhythm matching the relationship',
      'Upward progression - feet to head mirrors deepening knowledge',
      'Present tense - the relationship is ongoing and alive',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Waterhouse present the relationship between grandchild and grandfather in Climbing My Grandfather?',
  'Compare how family relationships are presented in Climbing My Grandfather and one other poem from the anthology.',
  'How does Waterhouse use the extended metaphor of climbing to explore love and understanding?',
]

const comparePoems = [
  {
    title: 'Mother, any distance',
    poet: 'Simon Armitage',
    link: '/revision/poetry/love-and-relationships/mother-any-distance',
    reason:
      'Both use extended metaphors to explore family bonds. Armitage uses a measuring tape/umbilical cord; Waterhouse uses mountaineering. Both convey love through physical imagery.',
    themes: ['Family', 'Love', 'Extended Metaphor'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason:
      "Both present family members with warmth and tenderness. Causley's parents are idealised in a heavenly setting; Waterhouse's grandfather is a mountain to be explored with love.",
    themes: ['Family', 'Memory', 'Love'],
  },
  {
    title: 'Before You Were Mine',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/love-and-relationships/before-you-were-mine',
    reason:
      "Both explore family relationships through vivid sensory detail. Duffy imaginatively reconstructs her mother's past; Waterhouse physically maps his grandfather's present.",
    themes: ['Family', 'Intimacy', 'Detail'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function ClimbingMyGrandfatherPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Climbing My Grandfather by Andrew Waterhouse - Analysis & Annotations"
        description="Line-by-line analysis of Climbing My Grandfather with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Love and Relationships',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships',
          },
          {
            name: 'Climbing My Grandfather',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/climbing-my-grandfather',
          },
        ]}
      />
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Love and Relationships
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Climbing My Grandfather</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Andrew Waterhouse &middot; <em>In</em> (2000)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Family', 'Love', 'Memory', 'Admiration', 'Connection', 'Understanding'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Climbing My Grandfather"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Climbing My Grandfather"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      {/* Fair-dealing extract notice - Climbing My Grandfather is in copyright (Waterhouse estate).
          Only verified short extracts are quoted; mid-climb passages are summarised in brackets. */}
      <aside
        role="note"
        aria-label="Copyright and fair-dealing notice"
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-[12px] leading-relaxed text-amber-900 dark:text-amber-200"
      >
        <p>
          <strong>Note on the poem text below:</strong> The poem body is reproduced under
          fair-dealing extracts only. Students should refer to Waterhouse&rsquo;s <em>In</em> (The
          Rialto, 2000) or the board-licensed AQA Love &amp; Relationships anthology for the
          complete authoritative 25-line text. Bracketed prose paraphrases passages omitted for
          copyright; quoted material is restricted to short extracts used for analytical purposes
          under CDPA 1988 s.30.
        </p>
      </aside>

      <InteractivePoemViewer poem={climbingMyGrandfatherPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cp.reason}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground space-y-2">
        <p>
          <strong>Rights notice:</strong> &copy; Faber &amp; Faber on behalf of the Andrew
          Waterhouse estate (1958&ndash;2001). Quotations from
          <em>Climbing My Grandfather</em> are short fair-dealing extracts under CDPA 1988 &sect;30
          (criticism, review, quotation). For full text, students should consult the board-licensed
          AQA Love &amp; Relationships anthology or Waterhouse&rsquo;s collection <em>In</em>{' '}
          (2000).
        </p>
        <p>
          Poem text is reproduced for the purpose of private study and educational criticism under
          UK fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial
          use is intended. All quotations remain the intellectual property of the respective rights
          holders.
        </p>
      </footer>
    </div>
  )
}
