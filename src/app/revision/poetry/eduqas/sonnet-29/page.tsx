'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

/* ── Poem data ─────────────────────────────────────────────────────── */

const sonnet29: PoemData = {
  title: 'Sonnet 29',
  poet: 'Elizabeth Barrett Browning',
  // Printed as the Eduqas anthology for examination from 2027 prints it (WJEC 2024,
  // ISBN 978-1-86085-774-4, page 8), read from the PDF's text layer on 10 October 2026
  // and checked against an image of the page. The PDF sets narrow no-break spaces after
  // some words in lines 5 to 8; they are printed here as plain spaces. Eduqas prints a
  // comma before "everywhere" in line 11 and none after "insphere thee" in line 10, where
  // the 1906 edition on Project Gutenberg (#2002) has the reverse. The AQA page for this
  // sonnet (src/app/revision/poetry/love-and-relationships/sonnet-29) prints the same
  // words from AQA's anthology, with its own marks.
  lines: [
    {
      text: 'I think of thee!—my thoughts do twine and bud',
      annotations: [
        {
          type: 'Opening',
          note: 'The sonnet opens with an exclamation, "I think of thee!", and at once turns the thought into an image: her thoughts "twine and bud" like a climbing plant.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'About thee, as wild vines, about a tree,',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'Her thoughts are "wild vines" growing around a tree, the beloved. The image is loving, but also a little smothering: the vines cling and spread.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Put out broad leaves, and soon there’s nought to see' },
    {
      text: 'Except the straggling green which hides the wood.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The vines grow so thickly that "nought" can be seen but "the straggling green which hides the wood". Her thoughts of him have hidden the man himself.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Yet, O my palm-tree, be it understood',
      annotations: [
        {
          type: 'Turning point',
          note: '"Yet" marks the poem’s turn, early, at line 5. She addresses him as "my palm-tree", tall and upright, and refuses to let her thoughts stand in for him.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'I will not have my thoughts instead of thee' },
    {
      text: 'Who art dearer, better! Rather, instantly',
      annotations: [
        {
          type: 'Rhythm',
          note: '"Who art dearer, better! Rather, instantly": three words of falling rhythm in a row break the iambic pattern, as if feeling has overtaken the verse.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Renew thy presence; as a strong tree should,',
      annotations: [
        {
          type: 'Imperative',
          note: '"Renew thy presence" is a command, not a wish. "as a strong tree should" gives him a part to play: he is to assert himself, not wait to be imagined.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Rustle thy boughs and set thy trunk all bare,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The tree is to "Rustle thy boughs and set thy trunk all bare": to shake off the vines of her thoughts and stand there, real and visible.',
          color: '#10b981',
        },
      ],
    },
    { text: 'And let these bands of greenery which insphere thee' },
    {
      text: 'Drop heavily down,—burst, shattered, everywhere!',
      annotations: [
        {
          type: 'Violent imagery',
          note: '"Drop heavily down,—burst, shattered, everywhere!" The dash, the commas and the heavy verbs break the line apart as the leaves of her thoughts fall and shatter.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Because, in this deep joy to see and hear thee',
      annotations: [
        {
          type: 'Sensory language',
          note: 'In his presence she will "see and hear" him and "breathe" a new air: real senses replace the imagined thinking of the octave.',
          color: '#10b981',
        },
      ],
    },
    { text: 'And breathe within thy shadow a new air,' },
    {
      text: 'I do not think of thee—I am too near thee.',
      annotations: [
        {
          type: 'Paradox',
          note: 'The final line reverses the first: "I do not think of thee". She does not stop loving him; she no longer needs to think of him, because he is there: "I am too near thee."',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>Elizabeth Barrett Browning</strong> (1806-1861) was one of the most celebrated poets of her day. For years she lived largely as an invalid in her father’s house in London.</p>
<p>In January 1845 the poet Robert Browning wrote to her, admiring her poems. They met that May, and in September 1846 they married in secret and left for Italy. Her father, who did not want his children to marry, never forgave her.</p>
<p>Sonnet 29 comes from <em>Sonnets from the Portuguese</em>, a sequence of 44 love sonnets she wrote during the courtship and published in 1850. The title made the poems look like translations from Portuguese, though they are her own. Most of the famous love sonnets before hers had been written by men about women; here a woman speaks her own desire, and it is the man who is described, as a "palm-tree".</p>`,

  contextAr: `<p><strong>Elizabeth Barrett Browning</strong> (1806-1861) كانت من أشهر شعراء زمانها. وعاشت سنين طويلة شبه مريضة طريحة في بيت أبوها في لندن.</p>
<p>في يناير 1845 كتب لها الشاعر Robert Browning رسالة يمدح فيها قصائدها. والتقوا في مايو من نفس السنة، وفي سبتمبر 1846 تزوّجوا بالسر وسافروا إيطاليا. وأبوها، اللي ما كان يبي عياله يتزوّجون، ما سامحها أبداً.</p>
<p>Sonnet 29 من مجموعة <em>Sonnets from the Portuguese</em>، سلسلة من 44 سونيتة حب كتبتها وقت الخطوبة ونشرتها سنة 1850. العنوان يخلّي القصائد تبان كأنها مترجمة من البرتغالية، بس هي قصائدها هي. وأغلب سونيتات الحب المشهورة قبلها كتبها رجال عن نساء؛ هنا امرأة تتكلّم عن رغبتها هي، والرجل هو اللي ينوصف، كـ"palm-tree".</p>`,

  summary: `LINES 1 TO 4: The speaker thinks of her absent beloved so much that her thoughts grow around him like wild vines around a tree, putting out leaves until nothing can be seen of the tree itself.

LINES 5 TO 8: But she will not accept thoughts in place of the man, who is "dearer, better". She asks him to come back at once ("Renew thy presence"), as a strong tree should...

LINES 9 TO 11: ...to rustle his branches, set his trunk bare and let the greenery that hides him fall, "burst, shattered, everywhere".

LINES 12 TO 14: In the "deep joy" of seeing and hearing him, breathing "a new air" in his shadow, she will not think of him at all: "I am too near thee."`,

  summaryAr: `الأبيات 1 إلى 4: المتكلّمة تفكّر في حبيبها الغايب لدرجة إن أفكارها تنمو حواليه مثل كروم برّية حوالين شجرة، وتطلّع أوراق لين ما يبان شي من الشجرة نفسها.

الأبيات 5 إلى 8: بس هي ما ترضى بأفكار بدال الرجل نفسه، اللي هو "dearer, better". تطلب منه يرجع فوراً ("Renew thy presence")، مثل ما الشجرة القوية لازم تسوّي...

الأبيات 9 إلى 11: ...يهزّ أغصانه، ويكشف جذعه، ويخلّي الخضرة اللي مغطّيته تطيح، "burst, shattered, everywhere".

الأبيات 12 إلى 14: في الـ"deep joy" إنها تشوفه وتسمعه، وتتنفّس "a new air" في ظلّه، ما راح تفكّر فيه أبداً: "I am too near thee."`,

  formAndStructure: `FORM: A Petrarchan sonnet: fourteen lines, an octave (lines 1 to 8) rhymed ABBAABBA and a sestet (lines 9 to 14) rhymed CDCDCD. The first rhyme is only a half-rhyme: "bud" against "wood", "understood" and "should".

METRE: Iambic pentameter, with variations. Line 7 breaks into falling pairs of syllables, "dearer, better! Rather", as feeling breaks the rhythm. Lines 10, 12 and 14 end on an extra, unstressed syllable: the rhymes "insphere thee", "hear thee" and "near thee".

TURN: A Petrarchan sonnet usually turns at line 9. This one turns early: "Yet" at line 5 refuses thoughts in place of the man, and the command that begins at "Rather, instantly" in line 7 runs on past the end of the octave. The sestet closes with a reason, "Because", and a reversal.

ARGUMENT: The last line answers the first. "I think of thee!" becomes "I do not think of thee—I am too near thee": once he is present, thinking is no longer needed.

VOICE: Dashes and exclamation marks (lines 1, 7, 11 and 14) give the poem the sound of a voice speaking in strong feeling, and it addresses the beloved throughout, with the intimate "thee", "thy" and "art".`,

  formAndStructureAr: `الشكل: Petrarchan sonnet: أربعطعش بيت، octave (الأبيات 1 إلى 8) قافيته ABBAABBA، وsestet (الأبيات 9 إلى 14) قافيته CDCDCD. أول قافية ناقصة (half-rhyme): "bud" مقابل "wood" و"understood" و"should".

الوزن: iambic pentameter مع تنويعات. البيت 7 ينكسر لأزواج مقاطع نازلة، "dearer, better! Rather"، كأن المشاعر كسرت الإيقاع. والأبيات 10 و12 و14 تنتهي بمقطع زيادة غير منبور: القوافي "insphere thee" و"hear thee" و"near thee".

الانعطاف (volta): الـPetrarchan sonnet عادةً ينعطف عند البيت 9. هذي تنعطف بدري: "Yet" في البيت 5 ترفض الأفكار بدال الرجل، والأمر اللي يبدأ عند "Rather, instantly" في البيت 7 يكمل لبعد نهاية الـoctave. والـsestet يختم بسبب، "Because"، وبانقلاب.

الحجّة: البيت الأخير يرد على الأول. "I think of thee!" تصير "I do not think of thee—I am too near thee": لمّا يكون موجود، ما في حاجة للتفكير.

الصوت: الشرطات وعلامات التعجّب (الأبيات 1 و7 و11 و14) تعطي القصيدة صوت إنسان يتكلّم بمشاعر قوية، وهي تخاطب الحبيب من أولها لآخرها، بالضماير الحميمة "thee" و"thy" و"art".`,

  keyQuotes: [
    {
      quote: 'I think of thee!—my thoughts do twine and bud',
      analysis:
        'The exclamation announces her love; the metaphor that follows makes her thoughts a climbing plant that "twine" around him and "bud". Love is growing, but it is also starting to cover him.',
      themes: ['Love', 'Longing', 'Nature'],
      analysisAr:
        'التعجّب يعلن حبّها؛ والاستعارة اللي بعده تخلّي أفكارها نبتة متسلّقة "twine" حواليه و"bud". الحب قاعد ينمو، بس بعد قاعد يبدأ يغطّيه.',
      themesAr: ['الحب', 'الشوق', 'الطبيعة'],
    },
    {
      quote: 'Except the straggling green which hides the wood',
      analysis:
        'Her thoughts have grown so thick that they hide the beloved, "the wood" of the tree. "straggling" makes the growth untidy and out of control: imagining him has taken the place of the man.',
      themes: ['Longing', 'Absence', 'Imagination'],
      analysisAr:
        'أفكارها صارت كثيفة لدرجة إنها تخبّي الحبيب، "the wood" حق الشجرة. وكلمة "straggling" تخلّي النمو عشوائي وخارج السيطرة: تخيّله صار ياخذ مكان الرجل نفسه.',
      themesAr: ['الشوق', 'الغياب', 'الخيال'],
    },
    {
      quote: 'Yet, O my palm-tree, be it understood',
      analysis:
        'The turn comes early. "Yet" sets her against her own thoughts, and "O my palm-tree" names the beloved as tall, strong and upright. The formal "be it understood" sounds like a declaration she wants on record.',
      themes: ['Love', 'Desire', 'Power'],
      analysisAr:
        'الانعطاف يجي بدري. "Yet" تحطّها ضد أفكارها، و"O my palm-tree" تسمّي الحبيب طويل وقوي ومستقيم. والصيغة الرسمية "be it understood" تبان كأنها إعلان تبيه يكون موثّق.',
      themesAr: ['الحب', 'الرغبة', 'القوة'],
    },
    {
      quote: 'Who art dearer, better!',
      analysis:
        'Two comparatives and an exclamation: the real man is "dearer" and "better" than any thought of him. The broken rhythm of the line suggests that feeling has overtaken her.',
      themes: ['Love', 'Presence'],
      analysisAr:
        'صيغتين تفضيل وتعجّب: الرجل الحقيقي "dearer" و"better" من أي فكرة عنه. والإيقاع المكسور في البيت يوحي إن المشاعر غلبتها.',
      themesAr: ['الحب', 'الحضور'],
    },
    {
      quote: 'Renew thy presence; as a strong tree should',
      analysis:
        'A direct command. A Victorian woman asks for what she wants, and the man is cast as the "strong tree" whose part is to act. Love here means presence, not distant longing.',
      themes: ['Desire', 'Presence', 'Gender'],
      analysisAr:
        'أمر مباشر. امرأة فيكتورية تطلب اللي تبيه، والرجل في دور الـ"strong tree" اللي دوره إنه يتحرّك. الحب هنا يعني الحضور، مو الشوق من بعيد.',
      themesAr: ['الرغبة', 'الحضور', 'الجندر'],
    },
    {
      quote: 'Drop heavily down,—burst, shattered, everywhere!',
      analysis:
        'The most violent line in the poem. Heavy stresses, a dash and a string of verbs ("burst, shattered") break the line as the imagined greenery falls away. Her thoughts must be destroyed for the real man to be seen.',
      themes: ['Desire', 'Imagination', 'Release'],
      analysisAr:
        'أعنف بيت في القصيدة. نبرات ثقيلة، وشرطة، وسلسلة أفعال ("burst, shattered") تكسّر البيت والخضرة المتخيّلة تطيح. لازم أفكارها تنهدم عشان الرجل الحقيقي يبان.',
      themesAr: ['الرغبة', 'الخيال', 'التحرّر'],
    },
    {
      quote: 'I do not think of thee—I am too near thee.',
      analysis:
        'The paradox resolves the poem. Thinking of him was a sign of absence; when he is near, she has no need to. The final "thee" puts the beloved in the last word of the poem.',
      themes: ['Love', 'Presence', 'Paradox'],
      analysisAr:
        'المفارقة تحلّ القصيدة. التفكير فيه كان علامة غياب؛ ولمّا يكون قريب، ما تحتاجه. والـ"thee" الأخيرة تحط الحبيب في آخر كلمة في القصيدة.',
      themesAr: ['الحب', 'الحضور', 'المفارقة'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted
  // (a-device-card-cites-the-line-it-quotes.test.tsx).
  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'my thoughts do twine and bud / About thee, as wild vines, about a tree',
      effect:
        'Her thoughts are vines and the beloved a tree. The metaphor runs through the octave and into the sestet, where the tree is told to shake the vines off. Longing becomes growth that smothers what it loves.',
      lineRef: 0,
      effectAr:
        'أفكارها كروم والحبيب شجرة. والاستعارة تمتد على الـoctave كله وتدخل الـsestet، حيث الشجرة تنطلب منها تنفض الكروم عنها. الشوق يصير نمو يخنق اللي يحبّه.',
    },
    {
      device: 'Direct address',
      example: 'Yet, O my palm-tree, be it understood',
      effect:
        'She speaks to him directly, with the "O" of formal address and the private name "my palm-tree". The address turns the poem from description to demand.',
      lineRef: 4,
      effectAr:
        'تخاطبه مباشرة، بـ"O" المخاطبة الرسمية والاسم الخاص "my palm-tree". والمخاطبة تحوّل القصيدة من وصف إلى طلب.',
    },
    {
      device: 'Imperative',
      example: 'Rather, instantly / Renew thy presence',
      effect:
        'The verbs of command ("Renew", "Rustle", "set", "let") give the woman the active voice. The sentence runs across the end of the octave, pushing the turn earlier than the form expects.',
      lineRef: 6,
      effectAr:
        'أفعال الأمر ("Renew" و"Rustle" و"set" و"let") تعطي المرأة الصوت الفاعل. والجملة تعدّي نهاية الـoctave، وتدفع الانعطاف أبكر من اللي يتوقّعه الشكل.',
    },
    {
      device: 'Caesura',
      example: 'Drop heavily down,—burst, shattered, everywhere!',
      effect:
        'The dash and commas break the line into pieces, so its sound enacts what it describes: leaves bursting and scattering. The exclamation ends it in triumph.',
      lineRef: 10,
      effectAr:
        'الشرطة والفواصل تكسّر البيت لقطع، فصوته يجسّد اللي يوصفه: أوراق تنفجر وتتبعثر. والتعجّب يختمه بانتصار.',
    },
    {
      device: 'Feminine rhyme',
      example: 'insphere thee … hear thee … near thee',
      effect:
        'The D rhymes of the sestet end on an extra, unstressed "thee". The beloved is placed at the end of lines 10, 12 and 14, and the poem ends on him.',
      lineRef: 9,
      effectAr:
        'قوافي D في الـsestet تنتهي بـ"thee" زيادة غير منبورة. الحبيب ينحط في نهاية الأبيات 10 و12 و14، والقصيدة تنتهي عليه.',
    },
    {
      device: 'Paradox',
      example: 'I think of thee! … I do not think of thee—I am too near thee.',
      effect:
        'The last line contradicts the first, and both are true. The poem travels from thinking about him in absence to being with him, where thought gives way to presence.',
      lineRef: 0,
      effectAr:
        'البيت الأخير يناقض الأول، والاثنين صحيحين. القصيدة تمشي من التفكير فيه وهو غايب إلى إنها معاه، حيث الفكر يفسح المجال للحضور.',
    },
  ],
}

export default function Sonnet29EduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Sonnet 29 by Elizabeth Barrett Browning - Analysis & Annotations"
        description="Sonnet 29 (I think of thee) by Elizabeth Barrett Browning, printed as the Eduqas anthology prints it, with line-by-line study notes and themes for Eduqas GCSE English Literature."
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_to_eduqas_poetry')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Sonnet 29</h1>
            <p className="text-body-sm text-muted-foreground">
              Elizabeth Barrett Browning (1850) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Sonnet 29"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={sonnet29} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Sonnet 29 by Elizabeth Barrett Browning is in the public domain. The poem is printed as it
        appears in the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), for first
        assessment in 2027, page 8.
      </footer>
    </div>
  )
}
