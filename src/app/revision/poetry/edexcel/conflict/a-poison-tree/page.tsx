'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const aPoisonTree: PoemData = {
  title: 'A Poison Tree',
  poet: 'William Blake',
  lines: [
    {
      text: 'I was angry with my friend;',
      annotations: [
        {
          type: 'Opening',
          note: 'Blake opens with a stark, simple admission. The blunt declarative is almost childlike, but it sets up the cause-and-effect parable that follows.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I told my wrath, my wrath did end.',
      annotations: [
        {
          type: 'Resolution',
          note: 'Honesty resolves anger immediately. The repetition of "wrath" alongside the rhyming "end" makes the cure feel obvious and natural.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I was angry with my foe:',
      annotations: [
        {
          type: 'Parallelism',
          note: 'The line mirrors line 1 exactly except for "friend"/"foe". Blake invites us to compare the two situations side by side.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'I told it not, my wrath did grow.',
      annotations: [
        {
          type: 'Volta',
          note: 'Suppression makes anger grow. The rhyme of "foe"/"grow" links concealment with expansion. This is the central thesis of the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'The opening stanza states the moral plainly before the metaphor is developed. Anger that is not spoken takes root.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And I waterd it in fears,',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'Anger is now a plant being cultivated. "Fears" become water \u2014 the speaker\u2019s anxiety nourishes resentment.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Night & morning with my tears:',
      annotations: [
        {
          type: 'Imagery',
          note: 'The image of constant tending suggests obsession. "Night & morning" implies that grief and anger occupy every moment.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And I sunned it with smiles,',
      annotations: [
        {
          type: 'Deception',
          note: 'False smiles act as sunlight. Blake exposes how social politeness can mask &mdash; and even feed &mdash; hidden hatred.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And with soft deceitful wiles.',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The hissing "s" sounds in "soft", "deceitful" and "wiles" evoke a serpent &mdash; a clear echo of the Eden story to come.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The plant of anger is fed by every kind of dishonesty. Blake makes hypocrisy sound seductive and dangerous.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And it grew both day and night,',
      annotations: [
        {
          type: 'Time imagery',
          note: 'The repetition of "day and night" doubles the relentlessness of the growth. Anger becomes a permanent project.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Till it bore an apple bright;',
      annotations: [
        {
          type: 'Allusion',
          note: 'A direct allusion to Genesis: the apple that grew in Eden. "Bright" suggests beauty hiding poison \u2014 like the forbidden fruit.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The metaphor crystallises into a single tempting image. The fruit of suppressed anger looks attractive but is deadly.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And my foe beheld it shine.',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Beheld" is biblical and reverent. The foe sees the fruit as something precious \u2014 the speaker has successfully baited the trap.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And he knew that it was mine.',
      annotations: [
        {
          type: 'Possession',
          note: 'The foe recognises ownership, which provokes desire and envy. The brevity of the line suggests cold inevitability.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And into my garden stole.',
      annotations: [
        {
          type: 'Eden reference',
          note: 'The "garden" cements the Eden allusion. The foe enters at night \u2014 stealing into a private space, breaking moral boundaries.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'When the night had veild the pole;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Veild" suggests concealment and ritual. The pole star is hidden \u2014 the moral compass is gone, conscience is suspended.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In the morning glad I see;',
      annotations: [
        {
          type: 'Disturbing tone',
          note: '"Glad" is the most chilling word in the poem. The speaker rejoices at his enemy\u2019s death, revealing how completely anger has corrupted him.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The volta to the speaker\u2019s satisfaction is the moral horror at the centre of the poem.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'My foe outstretched beneath the tree.',
      annotations: [
        {
          type: 'Final image',
          note: 'The corpse lies beneath the tree of poison. The poem ends not with redemption but with quiet triumph \u2014 a moral warning to the reader.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Blake leaves us with a tableau: the speaker, the tree and the dead foe. Suppressed anger has killed.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757&ndash;1827)</h3>
    <p>Blake was a Romantic poet, painter and printmaker, almost entirely outside the literary establishment of his time. He combined poetry with hand-coloured engravings and was deeply religious in an unorthodox way, hostile to organised religion and to social injustice.</p>

    <h3>Songs of Innocence and of Experience (1794)</h3>
    <p>"A Poison Tree" appears in <em>Songs of Experience</em>, the darker companion volume to <em>Songs of Innocence</em>. The two volumes show the same world from opposing perspectives: the experienced speaker has seen how deceit, repression and institutional cruelty corrupt human nature.</p>

    <h3>Religion and the Bible</h3>
    <p>The poem is saturated with biblical imagery. The "garden", the "apple" and the foe lying "beneath the tree" all echo the Fall of Man in Genesis. But Blake reverses the moral: in the Bible, the serpent tempts Eve; here, it is the speaker who plays the serpent and grows the poisonous fruit himself.</p>

    <h3>Honesty vs. repression</h3>
    <p>Blake was influenced by the radical writer Emanuel Swedenborg and the political upheavals of the 1790s, including the French and American Revolutions. He believed honest expression of emotion was a moral duty &mdash; suppression caused real harm. The poem dramatises that belief.</p>
  `,

  contextAr: `
    <h3>William Blake (1757\u20131827)</h3>
    <p>Blake \u0648\u0627\u062d\u062f \u0645\u0646 \u0634\u0639\u0631\u0627\u0621 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u0629 \u0627\u0644\u0623\u0648\u0627\u0626\u0644\u060c \u0648\u0631\u0633\u0651\u0627\u0645 \u0648\u062d\u0641\u0651\u0627\u0631 \u0643\u0645\u0627\u0646. \u0643\u0627\u0646 \u064a\u0634\u062a\u063a\u0644 \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0628\u0631\u0648\u062d\u0647\u060c \u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0623\u062f\u0628\u064a\u0629 \u0641\u064a \u0632\u0645\u0646\u0647. \u0643\u0627\u0646 \u064a\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u062d\u0641\u0631 \u0627\u0644\u064a\u062f\u0648\u064a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u060c \u0648\u0645\u062a\u062f\u064a\u0651\u0646 \u0628\u0637\u0631\u064a\u0642\u0629 \u063a\u064a\u0631 \u062a\u0642\u0644\u064a\u062f\u064a\u0629 \u2014 \u064a\u0642\u0641 \u0636\u062f \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0627\u0644\u0645\u0646\u0638\u0651\u0645\u0629 \u0648\u0636\u062f \u0627\u0644\u0638\u0644\u0645 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a.</p>

    <h3>Songs of Innocence and of Experience (1794)</h3>
    <p>"A Poison Tree" \u0646\u0634\u0631\u062a \u0641\u064a <em>Songs of Experience</em>\u060c \u0648\u0647\u064a \u0627\u0644\u062c\u0632\u0621 \u0627\u0644\u0623\u0638\u0644\u0645 \u0645\u0646 \u0627\u0644\u062f\u064a\u0648\u0627\u0646\u060c \u064a\u0642\u0627\u0628\u0644\u0647\u0627 <em>Songs of Innocence</em>. \u0627\u0644\u062f\u064a\u0648\u0627\u0646\u0627\u0646 \u064a\u0628\u064a\u0651\u0646\u0648\u0646 \u0646\u0641\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 \u0645\u0646 \u0632\u0627\u0648\u064a\u062a\u064a\u0646 \u0645\u062a\u0639\u0627\u0643\u0633\u062a\u064a\u0646: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0641\u064a \u0627\u0644\u0640Experience \u0639\u0627\u0634 \u0648\u0634\u0627\u0641 \u0643\u064a\u0641 \u0627\u0644\u062e\u062f\u0627\u0639 \u0648\u0627\u0644\u0643\u0628\u062a \u0648\u0627\u0644\u0642\u0633\u0648\u0629 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u064a\u0629 \u064a\u0641\u0633\u062f\u0648\u0646 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0628\u0634\u0631\u064a\u0629.</p>

    <h3>\u0627\u0644\u062f\u064a\u0646 \u0648\u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0645\u0642\u062f\u0651\u0633</h3>
    <p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0634\u0628\u0639\u0629 \u0628\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062f\u064a\u0646\u064a\u0629. \u0627\u0644\u0640"garden" \u0648\u0627\u0644\u0640"apple" \u0648\u0627\u0644\u0639\u062f\u0648\u0651 \u0627\u0644\u0644\u064a \u064a\u0631\u0642\u062f "beneath the tree" \u0643\u0644\u0647\u0627 \u062a\u0631\u062f\u0651\u062f \u0642\u0635\u0651\u0629 \u0633\u0642\u0648\u0637 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0641\u064a \u0633\u0641\u0631 \u0627\u0644\u062a\u0643\u0648\u064a\u0646 (Genesis). \u0628\u0633 Blake \u064a\u0642\u0644\u0628 \u0627\u0644\u062f\u0631\u0633: \u0641\u064a \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0645\u0642\u062f\u0651\u0633\u060c \u0627\u0644\u062d\u064a\u0651\u0629 \u0647\u064a \u0627\u0644\u0644\u064a \u062a\u063a\u0648\u064a \u062d\u0648\u0627\u0621\u061b \u0647\u0646\u0627\u060c \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0646\u0641\u0633\u0647 \u0647\u0648 \u0627\u0644\u0644\u064a \u064a\u0644\u0639\u0628 \u062f\u0648\u0631 \u0627\u0644\u062d\u064a\u0651\u0629\u060c \u0648\u0647\u0648 \u0627\u0644\u0644\u064a \u064a\u0631\u0628\u0651\u064a \u0627\u0644\u062b\u0645\u0631\u0629 \u0627\u0644\u0645\u0633\u0645\u0648\u0645\u0629 \u0628\u064a\u062f\u0647.</p>

    <h3>\u0627\u0644\u0635\u062f\u0642 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0643\u0628\u062a</h3>
    <p>Blake \u062a\u0623\u062b\u0651\u0631 \u0628\u0627\u0644\u0643\u0627\u062a\u0628 \u0627\u0644\u0631\u0627\u062f\u064a\u0643\u0627\u0644\u064a Emanuel Swedenborg \u0648\u0628\u0627\u0644\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 \u0641\u064a \u062a\u0633\u0639\u064a\u0646\u064a\u0627\u062a \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u062b\u0627\u0645\u0646 \u0639\u0634\u0631\u060c \u0648\u0645\u0646\u0647\u0627 \u0627\u0644\u062b\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 \u0648\u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629. \u0643\u0627\u0646 \u064a\u0624\u0645\u0646 \u0625\u0646 \u0627\u0644\u062a\u0639\u0628\u064a\u0631 \u0627\u0644\u0635\u0627\u062f\u0642 \u0639\u0646 \u0627\u0644\u0627\u0646\u0641\u0639\u0627\u0644\u0627\u062a \u0648\u0627\u062c\u0628 \u0623\u062e\u0644\u0627\u0642\u064a \u2014 \u0648\u0625\u0646 \u0627\u0644\u0643\u0628\u062a \u064a\u0633\u0628\u0651\u0628 \u0636\u0631\u0631 \u062d\u0642\u064a\u0642\u064a. \u0648\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062c\u0633\u0651\u062f \u0647\u0627\u0644\u0627\u0639\u062a\u0642\u0627\u062f.</p>
  `,

  summary: `Stanza 1: The speaker contrasts two reactions to anger. With his friend, he speaks honestly about his feelings and the anger fades. With his foe, he hides his anger \u2014 and it grows.

Stanza 2: The speaker tends his anger like a plant. He waters it with fears and tears, and feeds it with false smiles and deceitful tricks. The metaphor makes anger sound like something he is actively cultivating.

Stanza 3: The anger grows day and night until it produces a "bright" apple. The foe sees the fruit and recognises it belongs to the speaker. The biblical Eden imagery is now obvious.

Stanza 4: At night, the foe sneaks into the speaker\u2019s garden to steal the apple. In the morning, the speaker is "glad" to find his foe lying dead beneath the tree. The poem ends in chilling triumph: suppressed anger has produced a fatal weapon.

Overall meaning: Blake warns that hidden anger is far more destructive than open anger. The poem is a parable about honesty, repression and the moral damage we do to ourselves when we hide what we feel. The speaker may have killed his enemy, but he has also corrupted himself.`,

  summaryAr: `Stanza 1: المتكلّم يقارن بين ردّتين على الغضب. مع صديقه، يتكلّم بصراحة عن مشاعره — والغضب يخمد. مع عدوّه، يخفي غضبه — والغضب يزيد ويكبر.

Stanza 2: المتكلّم يربّي غضبه كأنه نبتة. يسقيه بالخوف والدموع، ويغذّيه بابتسامات كاذبة وحيل ماكرة. الاستعارة تخلّي الغضب يطلع شي يزرعه المتكلّم بإرادته، مو شي يصير له بدون قصد.

Stanza 3: الغضب يكبر ليل ونهار، لين يطلع منه تفّاحة "bright" (مشعّة). العدوّ يشوف الثمرة ويعرف إنها تخصّ المتكلّم. وصور Eden المقدّسة الحين تصير واضحة.

Stanza 4: في الليل، العدوّ يتسلّل لحديقة المتكلّم عشان يسرق التفّاحة. في الصباح، المتكلّم "glad" (مسرور) لأنه يلقى عدوّه ميّت تحت الشجرة. القصيدة تنتهي بنشوة موحشة: الغضب المكبوت طلّع منه سلاح قاتل.

المعنى العام: Blake يحذّر إن الغضب المخفي أخطر بكثير من الغضب الظاهر. القصيدة مَثَل عن الصدق والكبت والضرر الأخلاقي اللي نسوّيه لأنفسنا لمّا نخفي إلّي نحسّه. المتكلّم ممكن قتل عدوّه، بس في نفس الوقت أفسد روحه هو نفسه.`,

  formAndStructure: `Form: Four quatrains in rhyming couplets (AABB), giving the poem a deceptively simple, song-like quality. The form resembles a nursery rhyme or a moral fable for children, which makes the dark content all the more disturbing.

Metre: Mostly trochaic tetrameter (four feet, falling rhythm). The trochaic beat is unusual in English poetry and creates an insistent, almost incantatory pulse, like a chant or a spell.

Rhyme scheme: The neat AABB couplets create a sense of inevitability. Each pair of rhymes feels like a closing of the trap, mirroring how the speaker steadily closes the trap on his foe.

Structural symmetry: Stanza 1 sets up the parallel between friend and foe. Stanzas 2 and 3 develop the metaphor of the growing tree. Stanza 4 delivers the dark consequence. The poem works as a tight cause-and-effect argument.

Volta: There is a turning point in line 4, when "I told it not, my wrath did grow." From here on, the poem stops describing two situations and follows just one \u2014 the suppression \u2014 to its terrible conclusion.

Repetition and parallelism: The repetition of "I" at the start of so many lines makes the speaker the centre of moral attention. The parallel structures of "I waterd it... I sunned it..." emphasise his active cultivation of evil.

Punctuation: Blake uses semicolons and full stops to slow the poem down, making each step in the moral collapse feel deliberate.`,

  formAndStructureAr: `Form: أربعة quatrains على شكل أبيات مزدوجة القافية (AABB)، يعطي القصيدة جو بسيط شبيه بالأغنية. الشكل يذكّرنا بأناشيد الأطفال (nursery rhyme) أو بقصّة أخلاقيّة للصغار — وهذا يخلّي المضمون المظلم أكثر إزعاجاً بالتباين.

Metre (الوزن): القصيدة في معظمها على trochaic tetrameter (أربع تفعيلات، إيقاع نازل من مشدّد لغير مشدّد). الـtrochee نادر في الشعر الإنجليزي ويخلق نبض إلحاحي تقريباً كأنه تعويذة أو ترتيل.

Rhyme scheme: الـcouplets المنتظمة على AABB تعطي إحساس بالحتميّة. كل زوج من القوافي يحسّسك إنه يغلق فخّ — وهذا يعكس كيف إن المتكلّم بهدوء يغلق الفخّ على عدوّه.

التماثل البنائي: الـStanza 1 يبني التوازي بين الصديق والعدوّ. الـStanzas 2 و3 يطوّرون استعارة الشجرة اللي تكبر. والـStanza 4 يوصل النتيجة المظلمة. القصيدة تشتغل كحجّة سبب-ونتيجة محكمة.

Volta: نقطة التحوّل في البيت الرابع، "I told it not, my wrath did grow." من هنا، القصيدة تبطّل توصف وضعين، وتركّز على وضع واحد بس — الكبت — لين توصل لنهايته الفظيعة.

Repetition و parallelism: تكرار "I" في بداية أبيات كثيرة يخلّي المتكلّم هو مركز المساءلة الأخلاقية. والبنية المتوازية "I waterd it... I sunned it..." تأكّد إنه هو اللي يزرع الشر بإيده.

Punctuation: Blake يستخدم الفواصل المنقوطة (semicolons) والنقاط عشان يبطّئ القصيدة، فكل خطوة من خطوات الانهيار الأخلاقي تحسّ إنها مدروسة.`,

  keyQuotes: [
    {
      quote: 'I told it not, my wrath did grow',
      analysis:
        'The poem\u2019s thesis. The simple monosyllabic phrase "told it not" is paired with the active verb "grow" \u2014 silence becomes a kind of nourishment. The end-rhyme of "foe" and "grow" links concealment with expansion in the reader\u2019s ear.',
      themes: ['Anger', 'Repression', 'Internal conflict'],
      analysisAr:
        '\u0647\u0630\u064a \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u064a\u0629 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0627\u0644\u0639\u0628\u0627\u0631\u0629 \u0627\u0644\u0628\u0633\u064a\u0637\u0629 \u0623\u062d\u0627\u062f\u064a\u0629 \u0627\u0644\u0645\u0642\u0637\u0639 "told it not" \u062a\u064a\u064a \u064a\u0645 \u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0646\u0634\u0637 "grow" \u2014 \u0641\u064a\u0635\u064a\u0631 \u0627\u0644\u0633\u0643\u0648\u062a \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u063a\u0630\u0627\u0621 \u064a\u0637\u0639\u0651\u0645 \u0627\u0644\u063a\u0636\u0628. \u0648\u0627\u0644\u0642\u0627\u0641\u064a\u0629 \u0628\u064a\u0646 "foe" \u0648"grow" \u062a\u0631\u0628\u0637 \u0627\u0644\u0625\u062e\u0641\u0627\u0621 \u0628\u0627\u0644\u0646\u0645\u0648 \u0641\u064a \u0623\u0630\u0646 \u0627\u0644\u0642\u0627\u0631\u0626.',
      themesAr: [
        '\u0627\u0644\u063a\u0636\u0628',
        '\u0627\u0644\u0643\u0628\u062a',
        '\u0627\u0644\u0635\u0631\u0627\u0639 \u0627\u0644\u062f\u0627\u062e\u0644\u064a',
      ],
    },
    {
      quote: 'And I waterd it in fears',
      analysis:
        'The metaphor of anger as a plant takes hold. "Watered" makes fear sound nourishing rather than draining \u2014 the speaker is actively keeping his anger alive. The unusual spelling "waterd" (Blake\u2019s own) adds a slightly archaic, parable-like feel.',
      themes: ['Anger', 'Fear', 'Deception'],
      analysisAr:
        '\u0647\u0646\u0627 \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u063a\u0636\u0628 \u0643\u0623\u0646\u0647 \u0646\u0628\u062a\u0629 \u062a\u062a\u0631\u0633\u0651\u062e. \u0643\u0644\u0645\u0629 "Watered" \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u062e\u0648\u0641 \u064a\u0637\u0644\u0639 \u0634\u064a \u064a\u063a\u0630\u0651\u064a\u060c \u0645\u0648 \u0634\u064a \u064a\u0633\u062a\u0646\u0632\u0641 \u2014 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0628\u0634\u0643\u0644 \u0641\u0639\u0651\u0627\u0644 \u064a\u062e\u0644\u0651\u064a \u063a\u0636\u0628\u0647 \u062d\u064a. \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621 \u0627\u0644\u063a\u0631\u064a\u0628 "waterd" (Blake \u0646\u0641\u0633\u0647 \u064a\u0643\u062a\u0628\u0647 \u0643\u0630\u0627) \u064a\u0639\u0637\u064a \u0625\u062d\u0633\u0627\u0633 \u0639\u062a\u064a\u0642 \u0634\u0628\u064a\u0647 \u0628\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0623\u0645\u062b\u0627\u0644.',
      themesAr: [
        '\u0627\u0644\u063a\u0636\u0628',
        '\u0627\u0644\u062e\u0648\u0641',
        '\u0627\u0644\u062e\u062f\u0627\u0639',
      ],
    },
    {
      quote: 'And with soft deceitful wiles',
      analysis:
        'The sibilance ("soft", "deceitful", "wiles") evokes a serpent and looks ahead to the Eden imagery. Blake exposes the danger of the "soft" mask of social politeness: a smile can be a weapon when it hides genuine feeling.',
      themes: ['Deception', 'Hypocrisy', 'Internal conflict'],
      analysisAr:
        '\u0627\u0644\u0640sibilance \u0641\u064a "soft" \u0648"deceitful" \u0648"wiles" \u064a\u0633\u062a\u062d\u0636\u0631 \u0641\u062d\u064a\u062d \u0627\u0644\u062d\u064a\u0651\u0629\u060c \u0648\u064a\u0648\u0645\u0651\u064a \u0639\u0644\u0649 \u0635\u0648\u0631 Eden \u0627\u0644\u0644\u064a \u0628\u062a\u0637\u0644\u0639 \u0628\u0639\u062f\u064a\u0646. Blake \u064a\u0643\u0634\u0641 \u062e\u0637\u0648\u0631\u0629 \u0642\u0646\u0627\u0639 \u0627\u0644\u0645\u062c\u0627\u0645\u0644\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0627\u0644\u0640"soft": \u0627\u0644\u0627\u0628\u062a\u0633\u0627\u0645\u0629 \u062a\u0642\u062f\u0631 \u062a\u0643\u0648\u0646 \u0633\u0644\u0627\u062d \u0644\u0645\u0651\u0627 \u062a\u062e\u0641\u064a \u0648\u0631\u0627\u0647\u0627 \u0634\u0639\u0648\u0631 \u062d\u0642\u064a\u0642\u064a.',
      themesAr: [
        '\u0627\u0644\u062e\u062f\u0627\u0639',
        '\u0627\u0644\u0646\u0641\u0627\u0642',
        '\u0627\u0644\u0635\u0631\u0627\u0639 \u0627\u0644\u062f\u0627\u062e\u0644\u064a',
      ],
    },
    {
      quote: 'Till it bore an apple bright',
      analysis:
        'The metaphor crystallises into a single image. The "apple" is a direct allusion to Eden, while "bright" suggests beauty masking poison. The plant of anger has produced a tempting weapon \u2014 hatred made visible and irresistible.',
      themes: ['Religion', 'Temptation', 'Anger'],
      analysisAr:
        '\u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u062a\u062a\u0628\u0644\u0648\u0631 \u0641\u064a \u0635\u0648\u0631\u0629 \u0648\u0627\u062d\u062f\u0629. \u0627\u0644\u0640"apple" \u0625\u0634\u0627\u0631\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0640Eden\u060c \u0648\u0643\u0644\u0645\u0629 "bright" \u062a\u0648\u062d\u064a \u0628\u062c\u0645\u0627\u0644 \u064a\u062e\u0641\u064a \u0648\u0631\u0627\u0647 \u0633\u0645\u0651. \u0646\u0628\u062a\u0629 \u0627\u0644\u063a\u0636\u0628 \u0623\u0646\u062a\u062c\u062a \u0633\u0644\u0627\u062d \u0645\u063a\u0631\u064a \u2014 \u062d\u0642\u062f \u0635\u0627\u0631 \u0645\u0631\u0626\u064a \u0648\u0645\u0627 \u064a\u0642\u062f\u0631 \u0627\u0644\u0639\u062f\u0648\u0651 \u064a\u0642\u0627\u0648\u0645\u0647.',
      themesAr: [
        '\u0627\u0644\u062f\u064a\u0646',
        '\u0627\u0644\u0625\u063a\u0631\u0627\u0621',
        '\u0627\u0644\u063a\u0636\u0628',
      ],
    },
    {
      quote: 'And into my garden stole',
      analysis:
        'The verb "stole" carries both meanings: the foe creeps in stealthily and also commits theft. The "garden" makes the Eden parallel inescapable. The foe is being cast as Adam, but the speaker has set the trap rather than God.',
      themes: ['Religion', 'Deception', 'Conflict'],
      analysisAr:
        '\u0627\u0644\u0641\u0639\u0644 "stole" \u064a\u062d\u0645\u0644 \u0627\u0644\u0645\u0639\u0646\u064a\u064a\u0646: \u0627\u0644\u0639\u062f\u0648\u0651 \u064a\u062f\u062e\u0644 \u0628\u062e\u0641\u064a\u0629\u060c \u0648\u064a\u0633\u0631\u0642 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a. \u0648\u0643\u0644\u0645\u0629 "garden" \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u062a\u0648\u0627\u0632\u064a \u0645\u0639 Eden \u0645\u0627 \u064a\u0645\u0643\u0646 \u062a\u062c\u0627\u0648\u0632\u0647. \u0627\u0644\u0639\u062f\u0648\u0651 \u0647\u0646\u0627 \u064a\u0644\u0639\u0628 \u062f\u0648\u0631 Adam\u060c \u0628\u0633 \u0627\u0644\u0644\u064a \u0646\u0635\u0628 \u0627\u0644\u0641\u062e\u0651 \u0647\u0648 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u060c \u0645\u0648 \u0627\u0644\u0644\u0647.',
      themesAr: [
        '\u0627\u0644\u062f\u064a\u0646',
        '\u0627\u0644\u062e\u062f\u0627\u0639',
        '\u0627\u0644\u0635\u0631\u0627\u0639',
      ],
    },
    {
      quote: 'In the morning glad I see',
      analysis:
        'The most chilling line in the poem. "Glad" is a single short word that exposes how completely anger has corrupted the speaker. Morning, traditionally an image of rebirth and hope, becomes the moment of moral death.',
      themes: ['Anger', 'Corruption', 'Moral collapse'],
      analysisAr:
        '\u0623\u0643\u062b\u0631 \u0628\u064a\u062a \u064a\u0642\u0634\u0639\u0631\u0651 \u0644\u0647 \u0627\u0644\u0628\u062f\u0646 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0643\u0644\u0645\u0629 "Glad" \u2014 \u0643\u0644\u0645\u0629 \u0642\u0635\u064a\u0631\u0629 \u0648\u062d\u062f\u0647\u0627 \u2014 \u062a\u0643\u0634\u0641 \u0644\u064a \u0623\u064a \u062f\u0631\u062c\u0629 \u0648\u0635\u0644 \u0641\u0633\u0627\u062f \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0628\u0633\u0628\u0628 \u0627\u0644\u063a\u0636\u0628. \u0627\u0644\u0635\u0628\u0627\u062d\u060c \u0627\u0644\u0644\u064a \u0639\u0627\u062f\u0629\u064b \u064a\u0631\u0645\u0632 \u0644\u0644\u0648\u0644\u0627\u062f\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648\u0627\u0644\u0623\u0645\u0644\u060c \u064a\u062a\u062d\u0648\u0651\u0644 \u0644\u062d\u0638\u0629 \u0645\u0648\u062a \u0623\u062e\u0644\u0627\u0642\u064a.',
      themesAr: [
        '\u0627\u0644\u063a\u0636\u0628',
        '\u0627\u0644\u0641\u0633\u0627\u062f',
        '\u0627\u0644\u0627\u0646\u0647\u064a\u0627\u0631 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a',
      ],
    },
    {
      quote: 'My foe outstretched beneath the tree',
      analysis:
        'The closing tableau. The tree is now a gallows; the foe is laid out like a sacrifice. The poem ends in stillness \u2014 the speaker offers no remorse, no judgement, no commentary. The reader is forced to supply the moral.',
      themes: ['Death', 'Anger', 'Internal conflict'],
      analysisAr:
        '\u0627\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u062e\u062a\u0627\u0645\u064a. \u0627\u0644\u0634\u062c\u0631\u0629 \u0627\u0644\u062d\u064a\u0646 \u0635\u0627\u0631\u062a \u0645\u0634\u0646\u0642\u0629\u061b \u0648\u0627\u0644\u0639\u062f\u0648\u0651 \u0645\u0645\u062f\u0648\u062f \u062a\u062d\u062a\u0647\u0627 \u0643\u0623\u0646\u0647 \u0623\u0636\u062d\u064a\u0629. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0647\u064a \u0628\u0633\u0643\u0648\u0646 \u2014 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0645\u0627 \u064a\u0642\u062f\u0651\u0645 \u0646\u062f\u0645 \u0648\u0644\u0627 \u062d\u0643\u0645 \u0648\u0644\u0627 \u062a\u0639\u0644\u064a\u0642. \u0627\u0644\u0642\u0627\u0631\u0626 \u0647\u0648 \u0627\u0644\u0644\u064a \u0645\u062c\u0628\u0648\u0631 \u064a\u0633\u062a\u0646\u062a\u062c \u0627\u0644\u0639\u0628\u0631\u0629 \u0628\u0646\u0641\u0633\u0647.',
      themesAr: [
        '\u0627\u0644\u0645\u0648\u062a',
        '\u0627\u0644\u063a\u0636\u0628',
        '\u0627\u0644\u0635\u0631\u0627\u0639 \u0627\u0644\u062f\u0627\u062e\u0644\u064a',
      ],
    },
    {
      quote: 'I was angry with my friend / I was angry with my foe',
      analysis:
        'The opening parallel sets up the entire argument. The grammatical mirror invites comparison: same anger, two outcomes. The reader knows immediately that the difference will be moral as well as practical.',
      themes: ['Repression', 'Honesty', 'Conflict'],
      analysisAr:
        '\u0627\u0644\u062a\u0648\u0627\u0632\u064a \u0641\u064a \u0627\u0644\u0645\u0642\u062f\u0651\u0645\u0629 \u064a\u0628\u0646\u064a \u0627\u0644\u062d\u062c\u0651\u0629 \u0643\u0644\u0651\u0647\u0627. \u0627\u0644\u0645\u0631\u0622\u0629 \u0627\u0644\u0646\u062d\u0648\u064a\u0651\u0629 \u062a\u062f\u0639\u0648 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629: \u0646\u0641\u0633 \u0627\u0644\u063a\u0636\u0628\u060c \u0646\u062a\u064a\u062c\u062a\u064a\u0646 \u0645\u062e\u062a\u0644\u0641\u062a\u064a\u0646. \u0627\u0644\u0642\u0627\u0631\u0626 \u0645\u0646 \u0627\u0644\u0623\u0648\u0651\u0644 \u064a\u0639\u0631\u0641 \u0625\u0646 \u0627\u0644\u0641\u0631\u0642 \u0645\u0627 \u0631\u0627\u062d \u064a\u0643\u0648\u0646 \u0639\u0645\u0644\u064a \u0628\u0633\u060c \u0628\u0644 \u0623\u062e\u0644\u0627\u0642\u064a.',
      themesAr: [
        '\u0627\u0644\u0643\u0628\u062a',
        '\u0627\u0644\u0635\u062f\u0642',
        '\u0627\u0644\u0635\u0631\u0627\u0639',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'And I waterd it in fears / Night & morning with my tears',
      effect:
        'Anger becomes a plant the speaker cultivates. The metaphor grows across the whole poem, ending with the "apple" and the body beneath the "tree". It dramatises how nourishing resentment turns it into something deadly.',
      lineRef: 5,
      effectAr:
        '\u0627\u0644\u063a\u0636\u0628 \u064a\u062a\u062d\u0648\u0651\u0644 \u0644\u0646\u0628\u062a\u0629 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0639\u062a\u0646\u064a \u0641\u064a\u0647\u0627. \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u062a\u0643\u0628\u0631 \u0639\u0628\u0631 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627\u060c \u0648\u062a\u0646\u062a\u0647\u064a \u0628\u0627\u0644\u0640"apple" \u0648\u0627\u0644\u062c\u062b\u0651\u0629 \u062a\u062d\u062a \u0627\u0644\u0640"tree". \u062a\u062c\u0633\u0651\u062f \u0643\u064a\u0641 \u0625\u0646 \u062a\u063a\u0630\u064a\u0629 \u0627\u0644\u062d\u0642\u062f \u062a\u062e\u0644\u0651\u064a\u0647 \u0634\u064a \u0642\u0627\u062a\u0644.',
    },
    {
      device: 'Biblical allusion',
      example: 'Till it bore an apple bright',
      effect:
        'Direct echo of the Genesis story of the Fall. The garden, the apple and the tree all evoke Eden. Blake reverses the moral: the speaker plays the serpent, growing his own forbidden fruit \u2014 hatred dressed as beauty.',
      lineRef: 11,
      effectAr:
        '\u0635\u062f\u0649 \u0645\u0628\u0627\u0634\u0631 \u0644\u0642\u0635\u0651\u0629 \u0627\u0644\u0633\u0642\u0648\u0637 \u0641\u064a \u0633\u0641\u0631 \u0627\u0644\u062a\u0643\u0648\u064a\u0646 (Genesis). \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0648\u0627\u0644\u062a\u0641\u0651\u0627\u062d\u0629 \u0648\u0627\u0644\u0634\u062c\u0631\u0629 \u0643\u0644\u0651\u0647\u0627 \u062a\u0633\u062a\u062d\u0636\u0631 Eden. \u0648Blake \u064a\u0642\u0644\u0628 \u0627\u0644\u0639\u0628\u0631\u0629: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0647\u0648 \u0627\u0644\u0644\u064a \u064a\u0644\u0639\u0628 \u062f\u0648\u0631 \u0627\u0644\u062d\u064a\u0651\u0629\u060c \u0648\u064a\u0631\u0628\u0651\u064a \u062b\u0645\u0631\u062a\u0647 \u0627\u0644\u0645\u062d\u0631\u0651\u0645\u0629 \u0628\u0646\u0641\u0633\u0647 \u2014 \u062d\u0642\u062f \u0645\u062a\u0644\u0628\u0651\u0633 \u0628\u062b\u0648\u0628 \u062c\u0645\u0627\u0644.',
    },
    {
      device: 'Sibilance',
      example: 'And with soft deceitful wiles',
      effect:
        'The hissing "s" sounds suggest a serpent and reinforce the Eden allusion. Sibilance also makes the speaker\u2019s deceit feel insidious and seductive, slipping past moral defences.',
      lineRef: 8,
      effectAr:
        '\u0641\u062d\u064a\u062d \u062d\u0631\u0641 "s" \u064a\u0648\u062d\u064a \u0628\u0627\u0644\u062d\u064a\u0651\u0629 \u0648\u064a\u0623\u0643\u0651\u062f \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0644\u0640Eden. \u0648\u0627\u0644\u0640sibilance \u0628\u0639\u062f \u062a\u062e\u0644\u0651\u064a \u062e\u062f\u0627\u0639 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u062d\u0633\u0651 \u0625\u0646\u0647 \u0645\u0627\u0643\u0631 \u0648\u0645\u063a\u0648\u064a\u060c \u064a\u062a\u0633\u0644\u0651\u0644 \u0639\u0628\u0631 \u0627\u0644\u062d\u0648\u0627\u062c\u0632 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u0628\u062f\u0648\u0646 \u0645\u0627 \u062a\u062d\u0633\u0651 \u0641\u064a\u0647.',
    },
    {
      device: 'Parallelism',
      example: 'I was angry with my friend / I was angry with my foe',
      effect:
        'The grammatical mirroring of lines 1 and 3 sets up a moral comparison. Identical structure but different outcome forces the reader to focus on the single variable: did the speaker speak his anger or hide it?',
      lineRef: 0,
      effectAr:
        '\u0627\u0644\u0645\u0631\u0622\u0629 \u0627\u0644\u0646\u062d\u0648\u064a\u0629 \u0628\u064a\u0646 \u0627\u0644\u0628\u064a\u062a 1 \u0648\u0627\u0644\u0628\u064a\u062a 3 \u062a\u0628\u0646\u064a \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629. \u0646\u0641\u0633 \u0627\u0644\u062a\u0631\u0643\u064a\u0628\u060c \u0628\u0633 \u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u2014 \u0647\u0630\u0627 \u064a\u062c\u0628\u0631 \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0631\u0643\u0651\u0632 \u0639\u0644\u0649 \u0627\u0644\u0645\u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0648\u062d\u064a\u062f: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u062a\u0643\u0644\u0651\u0645 \u0628\u063a\u0636\u0628\u0647 \u0648\u0644\u0651\u0627 \u062e\u0628\u0651\u0627\u0647\u061f',
    },
    {
      device: 'Trochaic metre',
      example: 'In the morning glad I see',
      effect:
        'The falling trochaic rhythm gives the poem a hypnotic, chant-like quality, almost a nursery rhyme. The simple beat makes the moral horror at the end land harder by contrast.',
      lineRef: 16,
      effectAr:
        '\u0627\u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0646\u0627\u0632\u0644 \u0644\u0644\u0640trochee \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0637\u0627\u0628\u0639 \u0645\u0646\u0648\u0651\u0645 \u0634\u0628\u064a\u0647 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0644\u060c \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0645\u062b\u0644 \u0623\u0646\u0634\u0648\u062f\u0629 \u0623\u0637\u0641\u0627\u0644. \u0627\u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0628\u0633\u064a\u0637 \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0631\u0639\u0628 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u064a\u0636\u0631\u0628 \u0623\u0642\u0648\u0649 \u0628\u0627\u0644\u062a\u0628\u0627\u064a\u0646.',
    },
    {
      device: 'Personal pronoun "I"',
      example: 'I waterd / I sunned / I see',
      effect:
        'The speaker repeats "I" as the active subject of every act of cultivation. Blake makes clear that suppressed anger is something we choose to grow \u2014 it is not something that happens to us.',
      lineRef: 5,
      effectAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0643\u0631\u0651\u0631 "I" \u0643\u0641\u0627\u0639\u0644 \u0646\u0634\u0637 \u0641\u064a \u0643\u0644 \u0641\u0639\u0644 \u0645\u0646 \u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u062a\u0631\u0628\u064a\u0629. Blake \u064a\u0648\u0636\u0651\u062d \u0625\u0646 \u0627\u0644\u063a\u0636\u0628 \u0627\u0644\u0645\u0643\u0628\u0648\u062a \u0634\u064a \u0646\u062e\u062a\u0627\u0631 \u0646\u0632\u0631\u0639\u0647 \u0628\u0646\u0641\u0633\u0646\u0627 \u2014 \u0645\u0648 \u0634\u064a \u064a\u0635\u064a\u0631 \u0644\u0646\u0627 \u0628\u062f\u0648\u0646 \u0625\u0631\u0627\u062f\u062a\u0646\u0627.',
    },
  ],
}

const comparisons = [
  {
    title: 'Half-caste',
    poet: 'John Agard',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems are about anger that finds expression. Blake\u2019s speaker bottles it up with fatal results; Agard\u2019s speaker turns his rage into defiant, public performance. Compare the two responses to injustice.',
    themes: ['Anger', 'Honesty', 'Conflict'],
  },
  {
    title: 'The Destruction of Sennacherib',
    poet: 'Lord Byron',
    href: '/revision/poetry/edexcel/conflict/the-destruction-of-sennacherib',
    reason:
      'Both poems use biblical imagery to dramatise destruction. Byron stages divine wrath; Blake stages human wrath disguised as something divine. Compare the moral framing of violence.',
    themes: ['Religion', 'Anger', 'Death'],
  },
  {
    title: 'Cousin Kate',
    poet: 'Christina Rossetti',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems centre on suppressed feeling that turns to bitter hatred. Rossetti\u2019s speaker, like Blake\u2019s, is unable to release her anger \u2014 and it corrodes her from within.',
    themes: ['Anger', 'Betrayal', 'Internal conflict'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'apt-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'Growing fruit trees',
      'How suppressed anger grows into something deadly when left unexpressed',
      'A friendship story',
      'A recipe',
    ],
    correctIndex: 1,
    explanation:
      'Blake explores how suppressed anger festers and grows like a poisonous plant, ultimately destroying the person it is directed at. Expressed anger ("I told my wrath") ends quickly.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'apt-2',
    question: 'What does the apple symbolise?',
    type: 'multiple-choice',
    options: [
      'Healthy eating',
      'Temptation and the deadly fruit of suppressed anger — echoing the forbidden fruit in Eden',
      'A gift',
      'Autumn harvest',
    ],
    correctIndex: 1,
    explanation:
      "The apple alludes to the forbidden fruit in the Garden of Eden. The speaker's anger has grown into something tempting but deadly — the foe eats it and dies.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'apt-3',
    question: 'What is the contrast in the opening stanza?',
    type: 'multiple-choice',
    options: [
      'Day vs night',
      'Expressed anger (with a friend, which ends) vs suppressed anger (with a foe, which grows)',
      'Love vs hate',
      'Past vs present',
    ],
    correctIndex: 1,
    explanation:
      'The first two lines show anger expressed openly to a friend, which resolves. The second two show anger hidden from a foe, which grows. Communication vs suppression.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'apt-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Four quatrains with AABB rhyme — simple, nursery-rhyme-like form',
      'Free verse',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      'Four quatrains with simple AABB rhyme. The nursery-rhyme quality is deliberate — Blake wrote it for Songs of Experience, using childlike form for dark adult content.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'apt-5',
    question: 'What does "I watered it in fears" suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker cried on the tree',
      'The speaker nurtures their anger with fear and deceit, making it grow stronger',
      'The speaker is gardening',
      'Rain falls on the tree',
    ],
    correctIndex: 1,
    explanation:
      'The extended metaphor presents anger as a plant that the speaker deliberately nurtures with negative emotions — fears, tears, sunning it with "deceitful wiles".',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'apt-6',
    question: 'Who wrote the poem and what is its context?',
    type: 'multiple-choice',
    options: [
      'Wordsworth in 1800',
      'William Blake, published in Songs of Experience (1794) — exploring how innocence is corrupted',
      'Byron in 1816',
      'Keats in 1819',
    ],
    correctIndex: 1,
    explanation:
      'Blake published it in Songs of Experience (1794). The collection explores how the adult world corrupts innocence — in this case, how social convention (hiding anger) creates deadly outcomes.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'apt-7',
    question: 'What is disturbing about the final stanza?',
    type: 'multiple-choice',
    options: [
      'Nothing — it is happy',
      'The speaker is "glad" the foe is dead — they feel no guilt, showing how suppressed anger has corrupted them entirely',
      'The foe survives',
      'The tree is cut down',
    ],
    correctIndex: 1,
    explanation:
      'The speaker sees the foe "outstretched beneath the tree" and is glad. The lack of guilt shows how nurturing anger has morally corrupted the speaker — they have become the poison.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'apt-8',
    question: 'How does Blake use the Garden of Eden allusion?',
    type: 'multiple-choice',
    options: [
      'To celebrate nature',
      'The poisonous apple echoes the forbidden fruit — anger creates its own tempting, deadly Eden',
      'To describe a real garden',
      'It is coincidental',
    ],
    correctIndex: 1,
    explanation:
      "The apple, the tree, and the garden echo Genesis. But Blake's Eden is inverted — the speaker is both serpent (tempter) and God (cultivator), and the fruit is anger, not knowledge.",
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'apt-9',
    question: 'What does the extended metaphor of the tree represent?',
    type: 'multiple-choice',
    options: [
      "Nature's beauty",
      'Anger as a living thing that grows when nurtured — suppressed wrath is organic, deliberate, and ultimately lethal',
      'A family tree',
      'Environmental concerns',
    ],
    correctIndex: 1,
    explanation:
      'The tree is anger itself — planted by suppression, watered by tears and fears, sunned by deceit. It grows from emotion into a physical, deadly force. Blake shows anger as something cultivated, not spontaneous.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'apt-10',
    question: 'Which poem pairs well with A Poison Tree for comparing attitudes to conflict?',
    type: 'multiple-choice',
    options: [
      'To Autumn',
      'The Destruction of Sennacherib by Byron',
      'Westminster Bridge',
      'I Started Early',
    ],
    correctIndex: 1,
    explanation:
      'Both A Poison Tree and The Destruction of Sennacherib explore destruction and the consequences of conflict, though Blake focuses on personal/emotional conflict and Byron on military destruction.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'A Poison Tree explores the danger of suppressed anger, the corruption of honesty, and how concealed emotions grow into something deadly.',
    keyPoints: [
      'Suppressed anger grows and kills; expressed anger resolves',
      'The speaker deliberately nurtures their anger',
      'Biblical allusion — the poisonous apple echoes Eden',
      'Moral corruption — the speaker feels glad, not guilty',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Blake uses an extended tree/plant metaphor, biblical allusion, and deceptively simple language to explore the deadly growth of anger.',
    keyPoints: [
      'Extended metaphor — anger as a tree that grows when nurtured',
      'Eden allusion — the apple as temptation and death',
      '"Watered it in fears" — anger fed by negative emotions',
      '"Glad" — the speaker\'s lack of guilt shows moral corruption',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quatrains with AABB rhyme — the childlike nursery-rhyme form masks dark, adult content about anger and death.',
    keyPoints: [
      'AABB rhyme — simple form for complex moral content',
      'Songs of Experience — paired with Songs of Innocence',
      'Contrast in opening — expressed vs suppressed anger',
      'Narrative progression — planting to harvesting death',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Blake present the dangers of suppressed anger in A Poison Tree?',
  'Compare how conflict is explored in A Poison Tree and one other poem from the anthology.',
  'How does Blake use the extended metaphor of the tree to convey his message about anger?',
]

export default function APoisonTreePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="A Poison Tree by William Blake — Analysis & Annotations"
        description="Line-by-line analysis of A Poison Tree with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Edexcel Poetry', url: 'https://theenglishhub.app/revision/poetry/edexcel' },
          {
            name: 'A Poison Tree',
            url: 'https://theenglishhub.app/revision/poetry/edexcel/a-poison-tree',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Conflict cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">A Poison Tree</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Edexcel Conflict anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="A Poison Tree"
        textType="poem"
        examBoard="Edexcel"
        cluster="Conflict"
        variant="compact"
      />
      <InlineStudyEngine
        textName="A Poison Tree"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={aPoisonTree} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with A Poison Tree from the Edexcel Conflict cluster.
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
          &ldquo;A Poison Tree&rdquo; by William Blake (1794) is in the public domain. All
          quotations on this page are used for the purpose of criticism, review and educational
          study under fair dealing (s.30 Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
