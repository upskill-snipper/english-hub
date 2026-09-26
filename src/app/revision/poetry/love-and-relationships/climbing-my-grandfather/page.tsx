'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────────── */

const climbingMyGrandfatherPoem: PoemData = {
  title: 'Climbing My Grandfather',
  poet: 'Andrew Waterhouse',
  // NOTE: "Climbing My Grandfather" (Andrew Waterhouse, 2000) remains in copyright:
  // Waterhouse died in 2001, so UK copyright runs to the end of 2071. To avoid reproducing
  // the poem, each line below is a PARAPHRASE in the site's own words, not the poet's
  // text, and the annotations quote only short phrases. Students must read the full poem
  // in the AQA Love and Relationships anthology.
  //
  // What this replaced, 25 September 2026: the array printed most of the poem line by
  // line, which is reproduction, not fair dealing, and what it printed was not the poem.
  // Its closing third was out of order, five of its lines are not in the poem at all, and
  // six bracketed summaries stood in for lines, some describing details the poem does not
  // contain. It now follows the published poem, one entry per line in order, as a single
  // unbroken stanza. Each annotation sits on the line it discusses; notes written for the
  // invented lines were rewritten for the real ones, and the languageDevices lineRefs
  // below were moved to match. On 26 September 2026 the paraphrases were checked against
  // the text AQA prints in its published anthology (Past and present: poetry anthology,
  // sample, filestore.aqa.org.uk AQA-8702-TG-POEMS.PDF, p. 18), and the rest of the page
  // was brought into line with it (see the note above keyQuotes). The page now quotes 19
  // of the poem's words, counted once, against the guard's cap of 20. That cap is low:
  // POEM_WORDS in src/__tests__/helpers/poets.ts records the poem as 135 words when the
  // anthology text runs to about 196.
  lines: [
    {
      text: '[Paraphrase] The speaker chooses to climb with no safety equipment at all, neither rope nor net.',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'The poem opens by establishing the central conceit: the speaker will climb his grandfather like a mountaineer scaling a rock face. "Free" means without safety equipment; this is an act of trust and vulnerability.',
          color: '#ef4444',
        },
        {
          type: 'Tone',
          note: 'The opening statement of a decision is confident and deliberate. The speaker chooses to engage with his grandfather openly, without emotional protection or barriers.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "[Paraphrase] He starts at the bottom, with his grandfather's worn, dusty, split leather shoes;",
      annotations: [
        {
          type: 'Starting point',
          note: "The climb begins at the feet, with the grandfather's shoes. Their age, dust and cracks hint at a long life of work without making the grandfather pitiable.",
          color: '#10b981',
        },
        {
          type: 'Structure',
          note: "The opening word of the line signals the beginning of a methodical, bottom-to-top ascent. The poem will move steadily upward through the grandfather's body.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] then climbs without difficulty up onto the trouser legs,',
      annotations: [
        {
          type: 'Climbing diction',
          note: '"Scramble" is technical mountaineering language for an informal climb between walking and proper climbing. The metaphor is precise, not decorative.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] pressing his fingers into the woven cloth to find something to hold.',
      annotations: [
        {
          type: 'Physical verbs',
          note: 'The verbs of pressing and straining for a hold are effortful, physical actions. Knowing a grandparent takes work: close engagement, not distant observation.',
          color: '#3b82f6',
        },
        {
          type: 'Tactile imagery',
          note: 'The woven fabric of the trousers becomes a textured rock face with ridges to grip. The mundane detail of clothing is transformed into geological terrain.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] Where the shirt juts out above him like a rock overhang, he alters',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The shirt juts out like a rock overhang that the climber must work around. The mountaineering metaphor is sustained with geological precision.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: "[Paraphrase] course and moves sideways along the grandfather's belt",
      annotations: [
        {
          type: 'Climbing diction',
          note: '"Traverse" is a technical climbing term for moving sideways across a rock face rather than straight up. Once again, the metaphor uses real mountaineering vocabulary.',
          color: '#ef4444',
        },
        {
          type: 'Ascent',
          note: 'Each item of clothing becomes a stage of the climb. The body is mapped from below as a landscape: shoes, then trousers, then the overhang of the shirt and the ledge of the belt.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] to reach a hand marked with soil. The fingernails',
      annotations: [
        {
          type: 'Detail',
          note: '"Earth-stained" suggests the grandfather is a man of the outdoors \u2014 perhaps a gardener or farmer. The detail places him in nature and reinforces the landscape metaphor.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] are broken and rough, which makes them easy to grip,',
      annotations: [
        {
          type: 'Tactile imagery',
          note: 'The broken nails are like cracked rock, and "good purchase" is climbing terminology for a reliable handhold. The body is presented as solid, dependable terrain.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "[Paraphrase] and the finger's skin feels thick and slippery-smooth",
      annotations: [
        {
          type: 'Tactile imagery',
          note: "An old man's skin is described with tenderness rather than disgust. The physical detail creates intimacy: the speaker knows his grandfather's body through touch.",
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] like ice that is somehow warm. Along the arm he comes across',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Warm ice" is a contradiction. Ice is cold, but the grandfather\'s skin has the smoothness of ice with the warmth of life. The phrase captures the strangeness and tenderness of an old body.',
          color: '#ef4444',
        },
        {
          type: 'Verb choice',
          note: 'The verb of discovery frames the climb as exploration. The grandfather is uncharted territory; each new feature is a discovery. The body is a continent to be mapped.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] a shiny raised line where an old wound healed, and sets his feet',
      annotations: [
        {
          type: 'History',
          note: 'A scar is a record of a wound, a piece of history written on the body. "Glassy ridge" makes it sound geological \u2014 even injury becomes part of the landscape.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] carefully into the marks of long-ago stitching, then keeps going.' },
    {
      text: '[Paraphrase] At the shoulder, which is still strong, he pauses to recover for a time',
      annotations: [
        {
          type: 'Strength',
          note: "The grandfather's shoulder is presented as enduring and powerful, still strong in old age. The metaphor of the mountain reinforces his solidity: he is something that has lasted.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] in its shadow, taking care not to glance below,',
      annotations: [
        {
          type: 'Pace',
          note: 'The climb slows here: the speaker rests in the shadow of the shoulder and avoids looking below. From this point he takes his time with the neck, mouth, cheek, eyes and hair; the most intimate territory is approached carefully.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '[Paraphrase] because climbing is risky, and then he hauls' },
    {
      text: "[Paraphrase] himself up by the slack skin of the grandfather's neck",
      annotations: [
        {
          type: 'Detail',
          note: 'The slack skin at the neck continues the landscape metaphor: the grandfather has been shaped by time, like a mountain shaped by wind and rain, and a sign of age becomes a handhold.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] to reach the smiling lips, where he drinks between the teeth.',
      annotations: [
        {
          type: 'Reciprocity',
          note: "The grandfather's smile reveals that he is awake and aware throughout, and enjoying the game. The climb is not a one-way exploration but a shared moment.",
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] Feeling restored, he crosses the cheek, which is like a slope of loose stones,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The word the poem uses for the cheek suggests scree, the loose broken rock on a mountain slope, so the cheek becomes a slope to cross with care. The face is mapped with the same geological precision as the rest of the body.',
          color: '#ef4444',
        },
      ],
    },
    { text: "[Paraphrase] to gaze deep into his grandfather's brown eyes and watch one pupil" },
    {
      text: '[Paraphrase] widen and narrow gradually. Next he goes on up across',
      annotations: [
        {
          type: 'Final ascent',
          note: 'The face and head are the last and highest territory. Each feature, from mouth and cheek to eyes, forehead and hair, is a separate stage of the summit attempt.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] the brow, where the lines are evenly spread out',
      annotations: [
        {
          type: 'Tactile imagery',
          note: "The forehead's wrinkles become evenly spaced, easy holds, giving texture and grip on the rock face. Signs of age are again turned into help for the climber; the image is funny and tender at once.",
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] and simple to climb, towards the thick hair, pale and soft' },
    {
      text: '[Paraphrase] up at this height, as he strains towards the very top,',
      annotations: [
        {
          type: 'Climax',
          note: '"Summit" completes the metaphor: the highest point of the climb is the top of the grandfather\'s head, where the white hair reads like snow at altitude. The long look into his eyes a few lines earlier is the most intimate moment of the ascent.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] where, out of breath, he is able only to lie back',
      annotations: [
        {
          type: 'Physical effort',
          note: 'The speaker reaches the top so exhausted that all he can do is lie there: fully knowing someone is hard work, and the rest at the summit is earned.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] and look up at birds and clouds turning in circles overhead,',
      annotations: [
        {
          type: 'Imagery',
          note: 'From the summit, the top of the head, the view is of sky and birds: the speaker has climbed high enough to see what the grandfather sees. The perspective is shared.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "[Paraphrase] sensing the warmth of his grandfather's body, aware of",
      annotations: [
        {
          type: 'Intimacy',
          note: "Sensing the grandfather's body heat is extraordinarily close: warmth like this is felt only at very intimate distances. The line ends on the verb of knowing and leaves it hanging; the line break delays what is known.",
          color: '#ec4899',
        },
      ],
    },
    {
      text: "[Paraphrase] the slow, steady beat of the old man's good heart.",
      annotations: [
        {
          type: 'Double meaning',
          note: '"Good heart" works literally (a steady, healthy heartbeat) and metaphorically (the grandfather\'s kind nature). The two meanings fuse \u2014 physical and moral worth are inseparable.',
          color: '#ef4444',
        },
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
    "<p>Given Waterhouse's <strong>posthumous publication</strong> and early death, the poem has acquired additional layers of meaning. The view from the summit, of open sky and wheeling birds, can be read as the grandfather looking towards heaven, or as the infinite, ungraspable nature of truly knowing another person.</p>" +
    '<p>The poem may also reflect on <strong>intergenerational connection</strong> \u2014 how a grandchild can bridge the gap between generations through patient, loving attention to physical detail.</p>',

  contextAr:
    '<p><strong>Andrew Waterhouse (1958\u20132001)</strong> \u0634\u0627\u0639\u0631 \u0625\u0646\u062c\u0644\u064a\u0632\u064a \u0648\u0646\u0627\u0634\u0637 \u0628\u064a\u0626\u064a \u0645\u0646 Northumberland. \u0641\u0627\u0632 \u0628\u062c\u0627\u0626\u0632\u0629 Forward Prize \u0644\u0623\u062d\u0633\u0646 \u0645\u062c\u0645\u0648\u0639\u0629 \u0623\u0648\u0644\u0649 \u0639\u0646 \u062f\u064a\u0648\u0627\u0646\u0647 <em>In</em> (2000). \u0644\u0644\u0623\u0633\u0641\u060c \u0623\u0646\u0647\u0649 \u062d\u064a\u0627\u062a\u0647 \u0628\u0646\u0641\u0633\u0647 \u0633\u0646\u0629 2001\u060c \u0648\u0647\u0630\u0627 \u0627\u0644\u0644\u064a \u062e\u0644\u0651\u0649 \u0634\u0639\u0631\u0647 \u062b\u0642\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0644\u0628 \u0628\u0639\u062f \u0631\u062d\u064a\u0644\u0647.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>"Climbing My Grandfather"</strong> \u0627\u0646\u062a\u0634\u0631\u062a \u0641\u064a \u062f\u064a\u0648\u0627\u0646 <em>In</em> (2000). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 extended metaphor \u0648\u0627\u062d\u062f\u0629 \u2014 \u062a\u0633\u0644\u0651\u0642 \u062c\u0628\u0644 \u2014 \u0639\u0634\u0627\u0646 \u062a\u0633\u062a\u0643\u0634\u0641 \u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0628\u062c\u062f\u0651\u0647.</p>' +
    '<p>\u0627\u0644\u0640<strong>extended metaphor</strong> \u0644\u062a\u0633\u0644\u0651\u0642 \u0627\u0644\u062c\u0628\u0627\u0644 \u062a\u062d\u0648\u0651\u0644 \u0641\u0639\u0644 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062c\u062f\u0651 \u0625\u0644\u0649 \u0631\u062d\u0644\u0629 \u062c\u0633\u062f\u064a\u0629. \u062c\u0633\u0645 \u0627\u0644\u062c\u062f\u0651 \u064a\u0635\u064a\u0631 \u0645\u0646\u0638\u0631 \u0637\u0628\u064a\u0639\u064a \u064a\u0633\u062a\u0643\u0634\u0641\u060c \u0648\u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u062a\u0635\u064a\u0631 \u062a\u0636\u0627\u0631\u064a\u0633\u060c \u0648\u0645\u0644\u0627\u0645\u062d \u0627\u0644\u0648\u062c\u0647 \u062a\u0635\u064a\u0631 \u062a\u0643\u0648\u064a\u0646\u0627\u062a \u062c\u064a\u0648\u0644\u0648\u062c\u064a\u0629.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 <strong>\u0625\u064a\u062c\u0627\u0628\u064a\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644</strong>. \u0639\u0643\u0633 \u0648\u0627\u064a\u062f \u0642\u0635\u0627\u064a\u062f \u062b\u0627\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0637\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0644\u064a \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0635\u0631\u0627\u0639 \u0648\u0627\u0644\u0641\u0642\u062f \u0648\u0627\u0644\u0635\u0639\u0648\u0628\u0627\u062a\u060c "Climbing My Grandfather" \u062a\u0642\u062f\u0651\u0645 \u062d\u0628 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0643\u0645\u0635\u062f\u0631 \u062f\u0647\u0634\u0629 \u0648\u062f\u0641\u0621 \u0648\u0627\u0643\u062a\u0634\u0627\u0641.</p>' +
    '<p>بحكم <strong>نشر الديوان قريب من رحيل Waterhouse المبكّر</strong>، القصيدة اكتسبت طبقات معاني إضافية. المنظر من القمة، السما المفتوحة والطيور اللي تحوم، يحتمل قراءتين: الجدّ يتطلّع لورا فوق نحو السماء، أو إن معرفة الإنسان الثاني فعلاً شي لا محدود ولا يدركه أحد.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0630\u0644\u0643 \u064a\u062d\u062a\u0645\u0644 \u0625\u0646\u0647\u0627 \u062a\u062a\u0623\u0645\u0651\u0644 \u0641\u064a <strong>\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u064a\u0627\u0644</strong> \u2014 \u0643\u064a\u0641 \u0627\u0644\u062d\u0641\u064a\u062f \u064a\u0642\u062f\u0631 \u064a\u0633\u062f \u0627\u0644\u0641\u062c\u0648\u0629 \u0628\u064a\u0646 \u062c\u064a\u0644\u064a\u0646 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0627\u0644\u0635\u0628\u0648\u0631 \u0648\u0627\u0644\u0645\u062d\u0628\u0651 \u0644\u0643\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u062c\u0633\u062f\u064a\u0629.</p>',

  summary:
    'Lines 1–4: The speaker decides to climb his grandfather "free", with no rope or net, starting at the old, cracked shoes and making an easy "scramble" onto the trousers, where he digs his fingers into the cloth for a hold.\n\n' +
    'Lines 5–12: Where the shirt overhangs he changes direction and moves sideways along the belt (a "traverse") to an "earth-stained" hand, whose broken nails give "good purchase". A finger feels icy-smooth yet warm (line 10), and on the arm he finds a scar, a "glassy ridge", and sets his feet carefully in the marks of its old stitches.\n\n' +
    'Lines 13–17: He rests in the shadow of the still-strong shoulder, keeping his eyes off the drop because climbing is risky, then hauls himself up the slack skin of the neck to the grandfather\'s "smiling mouth", where he stops to drink.\n\n' +
    'Lines 18–27: Revived, he crosses the cheek, looks into the grandfather\'s eyes and sees one pupil widen and narrow, then climbs over the evenly lined forehead to the thick white hair, reaching for the "summit". At the top, out of breath, he can only lie and watch birds and clouds wheel overhead, feeling the grandfather\'s warmth and knowing the "slow pulse" of his "good heart". The poem ends not on conquest but on rest and closeness.',

  summaryAr:
    'البداية (الأبيات 1–4): المتكلّم يقرّر يتسلّق جدّه "free" (بدون معدّات أمان)، بلا حبل ولا شبكة. يبدأ من الحذاء القديم المتشقّق، ويسوّي "scramble" (تسلّق سهل) على البنطلون، ويغرز أصابعه في القماش عشان يمسك.\n\n' +
    'نص التسلّق (الأبيات 5–12): عند القميص البارز يغيّر اتجاهه ويمشي عرضياً على الحزام ("traverse")، لين يوصل ليد "earth-stained" (ملطّخة بتراب)، أظافرها المتكسّرة تعطي "good purchase" (قبضة زينة). جلد الإصبع أملس مثل الثلج بس دافي (البيت 10)، وعلى الذراع يلقى أثر جرح، "glassy ridge" (نتوء زجاجي)، ويحط رجوله بحذر في آثار الغرز القديمة.\n\n' +
    'الاستراحة (الأبيات 13–17): يرتاح في ظل الكتف اللي لين الحين قوي، ويبعد عيونه عن الهاوية لأن التسلّق فيه خطر، وبعدين يسحب نفسه على جلد الرقبة المرتخي لين "smiling mouth" (الفم المبتسم)، ويوقف يشرب.\n\n' +
    'القمة (الأبيات 18–27): يعبر الخد، ويطالع في عيون جدّه ويشوف البؤبؤ يتّسع ويضيق، وبعدين يتسلّق الجبهة وتجاعيدها المتباعدة لين الشعر الأبيض الكثيف، ويمد يده لـ"summit" (القمة). هناك، وهو لاهث، ما يقدر إلا يستلقي ويطالع الطيور والسحاب تحوم، ويحسّ بدفء جدّه ويعرف "slow pulse" (النبض البطيء) لـ"good heart" (قلبه الطيّب). القصيدة تخلص مو على انتصار، بل على راحة وقرب.',

  formAndStructure:
    'Form: A single, unbroken stanza of free verse, 27 lines long, with no regular rhyme scheme or metre. The lack of formal constraint mirrors the free, exploratory nature of the climb: the speaker finds his way over his grandfather without a set route.\n\n' +
    'Single stanza: The poem is one continuous block of text, reflecting the unbroken, sustained effort of the climb. There are no stanza breaks, although the speaker does rest twice: at the shoulder (line 13) and at the summit (line 24).\n\n' +
    'Sustained metaphor: The whole poem is built on a single extended metaphor, the grandfather as a mountain, held with remarkable consistency from "scramble" (line 3) and "traverse" (line 6) to "summit" (line 23), which gives the poem its structural coherence.\n\n' +
    "Ascending structure: The poem moves upward through the grandfather's body: shoes, trousers, shirt, belt, hand, arm, shoulder, neck, mouth, cheek, eyes, forehead, hair. The reader ascends with the speaker, and the momentum builds towards the top.\n\n" +
    'Enjambment: Lines frequently run into each other, mimicking the continuous, hand-over-hand movement of climbing. Line 26 ends on the verb of knowing, and the break holds back what is known until the last line.\n\n' +
    'Present tense: The climb is narrated in the present tense, making it feel immediate and ongoing. The speaker discovers his grandfather in real time, and the reader discovers him alongside.\n\n' +
    'Pace: The climb slows twice. The rest in the shade of the shoulder, with its warning that climbing is risky, comes near the middle; at the summit the speaker is out of breath and can only lie still, so the poem ends in stillness and closeness rather than triumph.',

  formAndStructureAr:
    'الشكل (Form): مقطع واحد متواصل من free verse، طوله 27 بيت، بدون نظام قافية منتظم ولا metre ثابت. غياب القيود الشكلية يعكس الطبيعة الحرّة الاستكشافية للتسلّق: المتكلّم يلقى طريقه على جسم جدّه بدون مسار محدّد من قبل.\n\n' +
    'مقطع واحد (Single stanza): القصيدة مكتوبة ككتلة نص واحدة متواصلة، عشان تعكس الجهد المتواصل اللي ما ينقطع للتسلّق. ما فيه فواصل بين المقاطع، مع إن المتكلّم يرتاح مرتين: عند الكتف (البيت 13) وعند القمة (البيت 24).\n\n' +
    'الاستعارة الممتدة (Sustained metaphor): القصيدة كلها مبنية على extended metaphor واحدة: الجدّ كأنه جبل، والقصيدة تتمسّك فيها بثبات ملفت من "scramble" (البيت 3) و"traverse" (البيت 6) لين "summit" (البيت 23)، وهذا يعطيها تماسك بنيوي.\n\n' +
    'البنية الصاعدة (Ascending structure): القصيدة تتحرّك لفوق عبر جسم الجدّ: الحذاء، البنطلون، القميص، الحزام، اليد، الذراع، الكتف، الرقبة، الفم، الخد، العيون، الجبهة، الشعر. القارئ يصعد مع المتكلّم، والزخم يتراكم لين القمة.\n\n' +
    'Enjambment: الأبيات تنساب من واحد للثاني بشكل متكرّر، تحاكي حركة التسلّق المستمرّة (يد فوق يد). والبيت 26 يخلص على فعل المعرفة، والكسر يأجّل الشي المعروف لين البيت الأخير.\n\n' +
    'الزمن الحاضر (Present tense): التسلّق مروي في الزمن الحاضر، فيحس به القارئ كأنه مباشر ومستمر. المتكلّم يكتشف جدّه في الوقت الفعلي، والقارئ يكتشفه معاه.\n\n' +
    'الإيقاع (Pace): التسلّق يبطّئ مرتين. الاستراحة في ظل الكتف، مع التنبيه إن التسلّق فيه خطر، تجي قريب من النص؛ وعند القمة المتكلّم لاهث وما يقدر إلا يستلقي بدون حركة، فالقصيدة تخلص على سكون وقرب مو على انتصار.',

  // NOTE: the viewer prints `quote` and `example` between quotation marks. Until
  // 26 September 2026 these quoted lines the poem does not contain (a cliff of
  // the face, a bristled chin, a grandfather grinning back), gave it 25 lines
  // when it has 27, placed the rest at the shoulder near the summit, and quoted
  // 135 words of it in all against a cap of 20. Each quotation is now a short
  // phrase checked word for word against the AQA anthology (Past and present:
  // poetry anthology, sample, filestore.aqa.org.uk AQA-8702-TG-POEMS.PDF, p. 18).
  keyQuotes: [
    {
      quote: 'free',
      analysis:
        'The poem opens on a decision: the speaker will climb his grandfather "free", which in climbing means with no ropes or other protection, and line 1 names both the rope and the net he does without. Free climbing needs trust and courage: he approaches his grandfather with no emotional barriers, willing to be vulnerable.',
      themes: ['Family', 'Trust', 'Vulnerability'],
      analysisAr:
        'القصيدة تبدأ بقرار: المتكلّم بيتسلّق جدّه "free"، وهذا في التسلّق معناه بدون حبال ولا أي حماية، والبيت الأول يسمّي الحبل والشبكة اللي بيستغني عنهم. والتسلّق الحرّ يطلب ثقة وشجاعة: المتكلّم يقترب من جدّه بدون حواجز عاطفية، مستعد إنه يكون عرضة للأذى.',
      themesAr: ['العائلة', 'الثقة', 'الانكشاف العاطفي'],
    },
    {
      quote: 'traverse',
      analysis:
        '"Traverse" (line 6) is precise climbing vocabulary for moving sideways across a rock face, as "scramble" (line 3) is for easy ground between walking and climbing. The exact terms make the metaphor precise, not decorative: the shirt becomes an overhang and the belt a ledge.',
      themes: ['Extended Metaphor', 'Effort', 'Precision'],
      analysisAr:
        '"traverse" (البيت 6) مفردة دقيقة من تسلّق الجبال، معناها التحرّك جانبياً على وجه الصخر، مثل ما "scramble" (البيت 3) معناها التسلّق السهل بين المشي والتسلّق الحقيقي. والمصطلحات الدقيقة تخلّي الاستعارة محكمة مو مجرّد زينة: القميص يصير نتوء صخري والحزام يصير حافّة.',
      themesAr: ['Extended Metaphor', 'الجهد', 'الدقّة'],
    },
    {
      quote: 'earth-stained',
      analysis:
        '"Earth-stained" (line 7) places the grandfather in nature, perhaps a gardener or an outdoor worker, and so reinforces the landscape metaphor: even the soil on his hand belongs to the mountain.',
      themes: ['Work', 'Identity', 'Nature'],
      analysisAr:
        'كلمة "earth-stained" (البيت 7) تحط الجدّ في الطبيعة، يحتمل إنه مزارع أو رجّال يشتغل برّا، وهذا يقوّي استعارة المنظر الطبيعي: حتى التراب اللي على يده جزء من الجبل.',
      themesAr: ['الشغل', 'الهوية', 'الطبيعة'],
    },
    {
      quote: 'good purchase',
      analysis:
        'The grandfather’s broken nails give "good purchase" (line 8), the climber’s term for a reliable hold. Damage becomes help: what time has worn rough is exactly what lets the grandchild hold on, and the body is presented as solid, dependable terrain.',
      themes: ['Dependability', 'Trust', 'Family'],
      analysisAr:
        'أظافر الجدّ المتكسّرة تعطي "good purchase" (البيت 8)، وهو مصطلح المتسلّقين للقبضة الموثوقة. الضرر يصير مساعدة: اللي خشّنه الزمن هو بالضبط اللي يخلّي الحفيد يقدر يمسك، والجسم مقدّم على إنه تضاريس صلبة يعتمد عليها.',
      themesAr: ['الاعتمادية', 'الثقة', 'العائلة'],
    },
    {
      quote: 'like warm ice',
      analysis:
        '"Warm ice" (line 10) is an oxymoron. Ice is cold and smooth, but the grandfather’s skin has the smoothness of ice with the warmth of life. The simile captures the strangeness and tenderness of an old body.',
      themes: ['Age', 'Tenderness', 'Touch'],
      analysisAr:
        '"warm ice" (البيت 10) oxymoron (تناقض ظاهري). الثلج بارد وأملس، بس جلد الجدّ عنده نعومة الثلج مع دفء الحياة. والتشبيه يلتقط غرابة الجسم الكبير في السن وفي نفس الوقت حنانه.',
      themesAr: ['العمر', 'الحنان', 'اللمس'],
    },
    {
      quote: 'glassy ridge',
      analysis:
        'A scar is a record of an old wound, a piece of history written on the body. "Glassy ridge" (line 11) makes it sound geological, so even injury becomes part of the landscape, and the speaker sets his feet gently in the marks of its stitches: he treads carefully on his grandfather’s past.',
      themes: ['History', 'Body', 'Memory'],
      analysisAr:
        'الجرح سجل لإصابة قديمة، قطعة تاريخ مكتوبة على الجسم. وعبارة "glassy ridge" (البيت 11) تخلّيه يطلع كأنه شي جيولوجي، فحتى الإصابة تصير جزء من المنظر الطبيعي، والمتكلّم يحط رجوله بلطف في آثار الغرز: يمشي بحذر على ماضي جدّه.',
      themesAr: ['التاريخ', 'الجسم', 'الذاكرة'],
    },
    {
      quote: 'smiling mouth',
      analysis:
        'The grandfather’s smile (line 17) shows that he is awake and enjoying the game, and a few lines later the speaker watches one of his pupils widen and narrow. The climb is not a one-way exploration of a still body but a shared, living moment.',
      themes: ['Reciprocity', 'Love', 'Family'],
      analysisAr:
        'ابتسامة الجدّ (البيت 17) تبيّن إنه صاحي ومستانس باللعبة، وبعد كم بيت المتكلّم يشوف بؤبؤ عينه يتّسع ويضيق. التسلّق مو استكشاف من طرف واحد لجسم ساكن، بل لحظة حيّة مشتركة.',
      themesAr: ['التبادل', 'الحب', 'العائلة'],
    },
    {
      quote: 'good heart',
      analysis:
        'At the summit, lying still against the grandfather’s warmth, the speaker feels the "slow pulse" of his "good heart" (line 27). "Good heart" works literally (a steady, healthy beat) and metaphorically (the grandfather’s kind nature), and the two meanings fuse.',
      themes: ['Intimacy', 'Love', 'Character'],
      analysisAr:
        'عند القمة، وهو مستلقي بدون حركة على دفء جدّه، المتكلّم يحسّ بـ"slow pulse" (النبض البطيء) لـ"good heart" (البيت 27). و"good heart" تشتغل حرفياً (نبض ثابت وصحي) ومجازياً (طبيعة الجدّ الطيّبة)، والمعنيين يندمجون مع بعض.',
      themesAr: ['الحميمية', 'الحب', 'الشخصية'],
    },
  ],

  // lineRef is the entry's index in `lines`: one entry per line, so line N is N - 1.
  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'summit',
      effect:
        'The grandfather-as-mountain metaphor is sustained throughout the poem with genuine climbing vocabulary, from "scramble" and "traverse" to "summit" (line 23). Every physical detail of the grandfather is translated into the terms of mountaineering, creating a unified, coherent conceit.',
      lineRef: 22,
      effectAr:
        'استعارة الجدّ-كأنه-جبل ممتدّة في القصيدة كلها، بمفردات تسلّق فعلية من "scramble" و"traverse" لين "summit" (البيت 23). كل تفصيلة جسدية في الجدّ تتترجم إلى مصطلحات تسلّق جبال، وهذا يخلق conceit موحّد ومتماسك.',
    },
    {
      device: 'Tactile imagery',
      example: 'good purchase',
      effect:
        'The poem is dominated by the sense of touch. The speaker understands his grandfather through physical contact: the cloth of the trousers, the broken nails, the smooth skin, the stitched scar. Touch becomes a language of love.',
      lineRef: 7,
      effectAr:
        'القصيدة يسيطر عليها حاسّة اللمس. المتكلّم يفهم جدّه عن طريق التواصل الجسدي: قماش البنطلون، والأظافر المتكسّرة، والجلد الأملس، والجرح المخيّط. اللمس يصير لغة من لغات الحب.',
    },
    {
      device: 'Oxymoron',
      example: 'like warm ice',
      effect:
        "Ice is cold; the grandfather's skin is warm. The contradiction holds together the smoothness of aged skin and the warmth of a living body in one perfect phrase.",
      lineRef: 9,
      effectAr:
        'الثلج بارد؛ وجلد الجدّ دافي. التناقض يجمع نعومة الجلد الكبير في السن مع دفء جسم حيّ، في عبارة واحدة كاملة.',
    },
    {
      device: 'Climbing diction',
      example: 'traverse',
      effect:
        'Waterhouse uses authentic mountaineering vocabulary rather than vague metaphor. The technical precision makes the conceit feel honest and earned, not decorative.',
      lineRef: 5,
      effectAr:
        'Waterhouse يستخدم مفردات تسلّق حقيقية، مو استعارة فضفاضة. الدقّة التقنية تخلّي الـconceit يحسّ القارئ إنه صادق ومستحَق، مو مجرّد زينة.',
    },
    {
      device: 'Enjambment',
      example: 'slow pulse',
      effect:
        'Lines run into each other, mimicking the continuous, hand-over-hand motion of climbing. Line 26 ends on the verb of knowing, so the object of that knowledge, the "slow pulse" of the last line, arrives only after a pause.',
      lineRef: 25,
      effectAr:
        'الأبيات تنساب من واحد للثاني، عشان تحاكي حركة التسلّق المستمرّة (يد فوق يد). والبيت 26 يخلص على فعل المعرفة، فالشي المعروف، "slow pulse" في البيت الأخير، ما يوصل إلا بعد توقّف.',
    },
    {
      device: 'Double meaning',
      example: 'good heart',
      effect:
        '"Good heart" works literally (a healthy heartbeat) and metaphorically (the grandfather’s kind nature). The two meanings fuse: physical and moral worth become inseparable.',
      lineRef: 26,
      effectAr:
        '"Good heart" تشتغل حرفياً (نبض قلب صحي) ومجازياً (طبيعة الجدّ الطيّبة). والمعنيين يندمجون: القيمة الجسدية والأخلاقية تصير ما تنفصل عن بعضها.',
    },
    {
      device: 'Personification (reversed)',
      example: 'glassy ridge',
      effect:
        'Rather than giving nature human qualities, Waterhouse turns the human body into geography. The grandfather becomes a landscape, suggesting he is as vast, ancient and worthy of exploration as a mountain.',
      lineRef: 10,
      effectAr:
        'بدل ما يعطي الطبيعة صفات إنسانية (personification)، Waterhouse يعكس العملية ويحوّل الجسم البشري إلى جغرافيا. الجدّ يصير منظر طبيعي، وهذا يلمّح إنه شاسع وقديم ويستحق الاستكشاف مثل أي جبل.',
    },
    {
      device: 'Reciprocity',
      example: 'smiling mouth',
      effect:
        'The grandfather is not a passive mountain: his mouth is smiling (line 17), and his pupil widens and narrows as the speaker looks into his eyes (lines 19 to 20). The climb becomes a shared moment; the grandfather knows he is being known.',
      lineRef: 16,
      effectAr:
        'الجدّ مو جبل ساكن: فمه يبتسم (البيت 17)، وبؤبؤه يتّسع ويضيق لمن المتكلّم يطالع في عيونه (الأبيات 19 و20). التسلّق يصير لحظة مشتركة؛ الجدّ عارف إنه يُعرَف.',
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
    question: 'What does the phrase "good heart" in the final line achieve?',
    type: 'multiple-choice',
    options: [
      'It suggests the grandfather has a heart condition',
      'It fuses literal meaning (a steady heartbeat) with metaphorical meaning (his kind nature) - physical and moral worth become inseparable',
      'It shows the speaker is a doctor',
      'It marks the end of the climb',
    ],
    correctIndex: 1,
    explanation:
      'Lying still at the summit and feeling the heartbeat represents the deepest possible knowledge. "Good heart" works literally (a steady, healthy beat) and metaphorically (his kind nature) - the double meaning is the line\'s power.',
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
    question: 'What does the decision to climb "free", with no rope or net, suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker is reckless',
      'The speaker approaches the relationship with trust and vulnerability - no safety nets, just genuine connection',
      'Mountain climbing is dangerous',
      'The grandfather is very tall',
    ],
    correctIndex: 1,
    explanation:
      'Climbing "free" means climbing with no safety equipment, so the speaker approaches the relationship with complete trust. There is vulnerability in truly knowing someone, but the speaker chooses openness.',
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
      'The poem progresses upward from the shoes through the trousers, belt, hand, arm, shoulder, neck and face to the summit of the head. Each body part reveals something about the grandfather - his earth-marked hands, an old scar, his smile, his warm skin.',
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
      'Trust and vulnerability - climbing "free", with no rope or net (line 1)',
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
      'Climbing "free" (line 1) - trust and openness',
      'Body parts as landscape features - an "earth-stained" hand, a scar as a "glassy ridge"',
      'The "good heart" of the final line - literal and metaphorical warmth',
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
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Climbing My Grandfather by Andrew Waterhouse - Analysis & Annotations"
        description="Line-by-line analysis of Climbing My Grandfather with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_label_love_and_relationships')}
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

      {/* Copyright notice - Climbing My Grandfather is in copyright (Waterhouse estate). The
          viewer below paraphrases every line; only short phrases are quoted, in the notes. Until
          25 September 2026 this notice said the poem was reproduced in fair-dealing extracts,
          while the viewer printed most of it. */}
      <aside
        role="note"
        aria-label="Copyright and fair-dealing notice"
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-[12px] leading-relaxed text-amber-900 dark:text-amber-200"
      >
        <p>
          <strong>Note on the poem text below:</strong> The poem is in copyright, so it is not
          printed here. Each line below is a paraphrase in our own words, not Waterhouse&rsquo;s
          text, and the notes quote only short phrases, for criticism and review under CDPA 1988
          s.30. The poem is printed in full in the AQA Love &amp; Relationships anthology and in
          Waterhouse&rsquo;s collection <em>In</em> (2000): read it there before quoting it in an
          exam.
        </p>
      </aside>

      <InteractivePoemViewer poem={climbingMyGrandfatherPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          {t('rev.poetry.shared.compare_with')}
        </h2>
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
          <strong>Rights notice:</strong> &copy; the Andrew Waterhouse estate (1958–2001). The poem
          is from his collection <em>In</em> (The Rialto, 2000). Quotations from
          <em>Climbing My Grandfather</em> are short fair-dealing extracts under CDPA 1988 &sect;30
          (criticism, review, quotation). For full text, students should consult the board-licensed
          AQA Love &amp; Relationships anthology or Waterhouse&rsquo;s collection <em>In</em>{' '}
          (2000).
        </p>
        <p>
          The poem itself is not printed on this page: each line in the poem viewer is a paraphrase
          in our own words, and only short phrases are quoted, for criticism and review under UK
          fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). All quotations
          remain the intellectual property of the rights holders.
        </p>
      </footer>
    </div>
  )
}
