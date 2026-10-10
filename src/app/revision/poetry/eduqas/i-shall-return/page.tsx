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

const iShallReturn: PoemData = {
  title: 'I Shall Return',
  poet: 'Claude McKay',
  // Printed as the Eduqas anthology for examination from 2027 prints it (WJEC 2024,
  // ISBN 978-1-86085-774-4, page 12), read from the PDF's text layer on 10 October 2026
  // and checked against an image of the page. It matches, word for word and mark for
  // mark, the poem in McKay's Harlem Shadows (Harcourt, Brace, 1922; Project Gutenberg
  // #64989), including the American spelling "realize", which is kept. McKay's birth in
  // Jamaica, about 1890, and his move to the United States in 1912 are from Max Eastman's
  // introduction to that book. That he never went back to Jamaica is from his biographers,
  // and the poem itself names no place.
  lines: [
    {
      text: 'I shall return again; I shall return',
      annotations: [
        {
          type: 'Refrain',
          note: '"I shall return" opens the poem twice in one line. "shall" is the language of a vow: this is a promise, made with certainty, not a wish.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To laugh and love and watch with wonder-eyes',
      annotations: [
        {
          type: 'Compound word',
          note: '"wonder-eyes" is McKay’s own compound: the eyes of a child seeing something for the first time. He imagines returning to see his home afresh.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'At golden noon the forest fires burn,',
      annotations: [
        {
          type: 'Colour imagery',
          note: 'The images are bright and specific: "golden noon", "the forest fires", and in the next line "blue-black smoke" and "sapphire skies". Home is remembered in vivid colour.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Wafting their blue-black smoke to sapphire skies.' },
    {
      text: 'I shall return to loiter by the streams',
      annotations: [
        {
          type: 'Refrain',
          note: 'The second quatrain also opens "I shall return", so the vow begins each section of the poem like a drumbeat.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'That bathe the brown blades of the bending grasses,',
      annotations: [
        {
          type: 'Alliteration',
          note: '"bathe the brown blades of the bending grasses": the alliteration of "bathe", "brown", "blades" and "bending" slows the line and makes the landscape gentle and lush. "bathe" makes the streams caring, almost tender.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And realize once more my thousand dreams',
      annotations: [
        {
          type: 'Diction',
          note: '"realize" here means to make real: he will live again what he has only dreamed of, in his "thousand dreams". Eduqas keeps McKay’s American spelling.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Of waters rushing down the mountain passes.' },
    {
      text: 'I shall return to hear the fiddle and fife',
      annotations: [
        {
          type: 'Sound imagery',
          note: 'The third quatrain turns from sight to sound: "the fiddle and fife / Of village dances", music that belongs to a whole community, not to him alone.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Of village dances, dear delicious tunes' },
    {
      text: 'That stir the hidden depths of native life,',
      annotations: [
        {
          type: 'Belonging',
          note: '"the hidden depths of native life": "native" ties the music to the place where he was born. It reaches something deep in him that his new life cannot.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Stray melodies of dim remembered runes.',
      annotations: [
        {
          type: 'Memory',
          note: '"dim remembered runes": a rune is an old song or charm. "dim" admits that the memory is fading, a first hint of how long he has been away.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I shall return, I shall return again,',
      annotations: [
        {
          type: 'Couplet',
          note: 'The final couplet repeats the vow twice, as the first line did, and then, at last, gives its reason.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To ease my mind of long, long years of pain.',
      annotations: [
        {
          type: 'Volta',
          note: '"To ease my mind of long, long years of pain": only in the last line do we learn that the speaker is suffering. The beauty of every image before it has been the measure of what he misses.',
          color: '#ef4444',
        },
      ],
    },
  ],

  context: `<p><strong>Claude McKay</strong> (about 1890-1948) was born in the hill country of Jamaica. His first books of poems, published in Jamaica, were written in Jamaican dialect.</p>
<p>In 1912 he went to the United States to study agriculture, meaning at first to go home and farm. He stayed, became a writer in New York, and was one of the leading figures of the Harlem Renaissance, the flowering of Black American writing, music and art in 1920s Harlem. He never went back to Jamaica.</p>
<p><em>I Shall Return</em> is in his collection <em>Harlem Shadows</em> (1922). The poem never names the place it longs for, but read alongside McKay’s life it is a poem of exile: an emigrant’s memory of the home he left. McKay wrote it as a sonnet, a traditional English form, and filled it with the colours and music of that home.</p>`,

  contextAr: `<p><strong>Claude McKay</strong> (تقريباً 1890-1948) انولد في المناطق الجبلية في جامايكا. وأول دواوينه، اللي انتشرت في جامايكا، كانت مكتوبة باللهجة الجامايكية.</p>
<p>سنة 1912 راح للولايات المتحدة عشان يدرس الزراعة، وفي البداية كان ناوي يرجع ويشتغل في الفلاحة. بس قعد هناك، وصار كاتب في نيويورك، ومن أبرز وجوه نهضة Harlem (Harlem Renaissance)، وهي ازدهار الأدب والموسيقى والفن عند السود الأمريكان في Harlem في العشرينات. وما رجع جامايكا أبداً.</p>
<p>قصيدة <em>I Shall Return</em> موجودة في ديوانه <em>Harlem Shadows</em> (1922). القصيدة ما تسمّي المكان اللي تشتاق له، بس لمّا تنقرى مع حياة McKay تصير قصيدة غربة: ذكرى مهاجر عن البيت اللي تركه. وكتبها McKay على شكل سونيتة، وهو شكل إنجليزي تقليدي، وعبّاها بألوان وموسيقى ذاك البيت.</p>`,

  summary: `LINES 1 TO 4: The speaker vows to return, to laugh and love and watch, "with wonder-eyes", the forest fires burning at noon and their "blue-black smoke" rising to "sapphire skies".

LINES 5 TO 8: He will return to wander by the streams and the long grass, and to make real again his "thousand dreams" of water rushing down the mountains.

LINES 9 TO 12: He will return to hear "the fiddle and fife" of village dances, tunes that stir "the hidden depths of native life", half-forgotten melodies.

LINES 13 TO 14: He repeats his vow, and gives his reason at last: to ease his mind of "long, long years of pain".`,

  summaryAr: `الأبيات 1 إلى 4: المتكلّم يحلف إنه بيرجع، عشان يضحك ويحب ويتفرّج، "with wonder-eyes"، على حرايق الغابة وقت الظهر و"blue-black smoke" طالع للـ"sapphire skies".

الأبيات 5 إلى 8: بيرجع عشان يتمشّى جنب الجداول والعشب الطويل، ويعيش من جديد "thousand dreams" حقّته عن الماي النازل من الجبال.

الأبيات 9 إلى 12: بيرجع عشان يسمع "the fiddle and fife" حق رقصات القرية، ألحان تحرّك "the hidden depths of native life"، أنغام نصّها منسية.

الأبيات 13 و14: يعيد وعده، وأخيراً يقول السبب: عشان يريّح باله من "long, long years of pain".`,

  formAndStructure: `FORM: A Shakespearean (English) sonnet: fourteen lines rhymed ABAB CDCD EFEF GG, three quatrains and a closing couplet. Eduqas prints it as one block, without breaks between them.

REFRAIN: "I shall return" opens the first quatrain, the second, the third and the couplet, and appears twice in both the first and the thirteenth line. The repetition gives the poem the force of a vow.

METRE: Iambic pentameter. Lines 6 and 8 end on an extra, unstressed syllable ("grasses", "passes"), and the repeated "long, long" in the last line puts two stresses side by side, slowing the poem as it ends.

STRUCTURE: Each quatrain gives a different part of home: the first sights of noon and fire, then water and grass, then music and dance. The couplet turns inward and names the cost of being away: "long, long years of pain". The pain, kept back until the last line, changes how the whole poem reads.

SENSES: Sight ("golden", "blue-black", "sapphire", "brown"), touch ("bathe") and sound ("fiddle and fife", "tunes", "melodies"): the home is remembered with the whole body.`,

  formAndStructureAr: `الشكل: سونيتة شكسبيرية (إنجليزية): أربعطعش بيت، قافيتها ABAB CDCD EFEF GG، يعني ثلاث رباعيات وزوج أبيات في الختام. ونسخة Eduqas تطبعها كتلة وحدة، بدون فواصل بينها.

اللازمة: "I shall return" تفتتح الرباعية الأولى، والثانية، والثالثة، والزوج الأخير، وتجي مرتين في البيت الأول ومرتين في البيت الثالث عشر. والتكرار يعطي القصيدة قوّة الوعد أو القسم.

الوزن: iambic pentameter. البيتين 6 و8 ينتهون بمقطع زيادة غير منبور ("grasses" و"passes")، وتكرار "long, long" في آخر بيت يحط نبرتين جنب بعض، فيبطّئ القصيدة وهي تخلص.

البنية: كل رباعية تعطي جزء مختلف من البيت: الأولى مناظر الظهر والنار، وبعدها الماي والعشب، وبعدها الموسيقى والرقص. والزوج الأخير يلتفت للداخل ويسمّي ثمن الغياب: "long, long years of pain". والألم، اللي تأخّر لين آخر بيت، يغيّر طريقة قراءة القصيدة كلها.

الحواس: البصر ("golden" و"blue-black" و"sapphire" و"brown")، واللمس ("bathe")، والسمع ("fiddle and fife" و"tunes" و"melodies"): البيت ينتذكر بالجسم كله.`,

  keyQuotes: [
    {
      quote: 'I shall return again; I shall return',
      analysis:
        'The vow is made twice in the first line. "shall" expresses determination, and the repetition sounds like someone convincing himself as much as the reader.',
      themes: ['Home', 'Longing', 'Identity'],
      analysisAr:
        'الوعد يتكرّر مرتين في البيت الأول. "shall" تعبّر عن عزم، والتكرار يبان كأن المتكلّم يقنع نفسه مثل ما يقنع القارئ.',
      themesAr: ['البيت', 'الشوق', 'الهوية'],
    },
    {
      quote: 'To laugh and love and watch with wonder-eyes',
      analysis:
        'Return means joy: laughing, loving and seeing with "wonder-eyes", like a child. The repeated "and" piles up the pleasures he has been missing.',
      themes: ['Joy', 'Home', 'Childhood'],
      analysisAr:
        'الرجعة تعني الفرح: الضحك، والحب، والنظر بـ"wonder-eyes" مثل الطفل. وتكرار "and" يكوّم المتع اللي كانت ناقصته.',
      themesAr: ['الفرح', 'البيت', 'الطفولة'],
    },
    {
      quote: 'Wafting their blue-black smoke to sapphire skies',
      analysis:
        'Rich, precise colour: "blue-black" smoke against a "sapphire" sky. Even smoke from a fire is beautiful in memory, and "sapphire" makes the sky a precious stone.',
      themes: ['Nature', 'Memory', 'Beauty'],
      analysisAr:
        'ألوان غنية ودقيقة: دخان "blue-black" مقابل سما "sapphire". حتى دخان النار حلو في الذاكرة، و"sapphire" تخلّي السما حجر كريم.',
      themesAr: ['الطبيعة', 'الذاكرة', 'الجمال'],
    },
    {
      quote: 'That bathe the brown blades of the bending grasses',
      analysis:
        'The alliteration of "bathe", "brown", "blades" and "bending" gives the line a soft, flowing sound, and "bathe" makes the streams tender. The landscape is not just seen but felt.',
      themes: ['Nature', 'Home'],
      analysisAr:
        'الجناس بين "bathe" و"brown" و"blades" و"bending" يعطي البيت صوت ناعم ومنساب، والفعل "bathe" يخلّي الجداول حنونة. المنظر مو بس ينشاف، بل ينحس.',
      themesAr: ['الطبيعة', 'البيت'],
    },
    {
      quote: 'And realize once more my thousand dreams',
      analysis:
        '"realize" means to make real: his "thousand dreams" of home will come true. The number shows how often he has dreamed of it while away.',
      themes: ['Longing', 'Memory', 'Exile'],
      analysisAr:
        'كلمة "realize" تعني يخلّيها حقيقة: "thousand dreams" حقّته عن البيت بتتحقّق. والرقم يبيّن قدّيش حلم فيه وهو بعيد.',
      themesAr: ['الشوق', 'الذاكرة', 'الغربة'],
    },
    {
      quote: 'That stir the hidden depths of native life',
      analysis:
        'The village music reaches "the hidden depths" of a life rooted in its place. "native" connects his identity to his birthplace: this is something his new life cannot give him.',
      themes: ['Identity', 'Belonging', 'Culture'],
      analysisAr:
        'موسيقى القرية توصل لـ"the hidden depths" حق حياة جذورها في مكانها. وكلمة "native" تربط هويّته بمكان ولادته: هذا شي حياته الجديدة ما تقدر تعطيه.',
      themesAr: ['الهوية', 'الانتماء', 'الثقافة'],
    },
    {
      quote: 'To ease my mind of long, long years of pain.',
      analysis:
        'The last line reveals what the beautiful images have been hiding: years of pain in exile. The repeated "long" stretches the line out, so it feels as long as the years it describes.',
      themes: ['Exile', 'Pain', 'Longing'],
      analysisAr:
        'البيت الأخير يكشف اللي كانت الصور الحلوة مخبّيته: سنين ألم في الغربة. وتكرار "long" يمطّ البيت، فيحس القارئ إنه طويل مثل السنين اللي يوصفها.',
      themesAr: ['الغربة', 'الألم', 'الشوق'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted
  // (a-device-card-cites-the-line-it-quotes.test.tsx).
  languageDevices: [
    {
      device: 'Refrain',
      example: 'I shall return again; I shall return',
      effect:
        'The phrase opens each quatrain and the couplet, six times in fourteen lines. Its repetition turns a wish into a vow, and also shows how much the thought fills his mind.',
      lineRef: 0,
      effectAr:
        'العبارة تفتتح كل رباعية والزوج الأخير، ست مرات في أربعطعش بيت. وتكرارها يحوّل الأمنية لوعد، ويبيّن بعد قدّيش الفكرة مالية باله.',
    },
    {
      device: 'Compound word',
      example: 'watch with wonder-eyes',
      effect:
        'The coined compound makes the returning speaker see his home like a child seeing the world for the first time. The alliteration of "watch with wonder-eyes" adds to the line’s music.',
      lineRef: 1,
      effectAr:
        'الكلمة المركّبة المبتكرة تخلّي المتكلّم الراجع يشوف بيته مثل طفل يشوف العالم أول مرة. والجناس في "watch with wonder-eyes" يزيد موسيقى البيت.',
    },
    {
      device: 'Colour imagery',
      example:
        'At golden noon the forest fires burn, / Wafting their blue-black smoke to sapphire skies.',
      effect:
        '"golden", "blue-black" and "sapphire" paint the remembered landscape in rich colour. Memory makes the home brighter and more precious than everyday life.',
      lineRef: 2,
      effectAr:
        '"golden" و"blue-black" و"sapphire" ترسم المنظر المتذكّر بألوان غنية. والذاكرة تخلّي البيت أنور وأغلى من الحياة اليومية.',
    },
    {
      device: 'Alliteration',
      example: 'That bathe the brown blades of the bending grasses',
      effect:
        'The repeated sound that opens "bathe", "brown", "blades" and "bending" is soft and rhythmic, like water lapping, and the feminine ending "grasses" lets the line fall gently away.',
      lineRef: 5,
      effectAr:
        'الصوت المتكرّر في بداية "bathe" و"brown" و"blades" و"bending" ناعم وإيقاعي، مثل الماي وهو يلامس، والنهاية الأنثوية "grasses" تخلّي البيت ينزل بهدوء.',
    },
    {
      device: 'Sound imagery',
      example:
        'I shall return to hear the fiddle and fife / Of village dances, dear delicious tunes',
      effect:
        'The third quatrain moves from sight to sound. The music belongs to a community ("village dances"), so returning means belonging again, not only seeing.',
      lineRef: 8,
      effectAr:
        'الرباعية الثالثة تنتقل من البصر للسمع. والموسيقى ملك جماعة ("village dances")، فالرجعة تعني الانتماء من جديد، مو بس المشاهدة.',
    },
    {
      device: 'Volta',
      example:
        'I shall return, I shall return again, / To ease my mind of long, long years of pain.',
      effect:
        'The closing couplet turns from the beauty of home to the speaker’s own suffering. Held back until the last line, the "pain" reframes everything before it as the longing of exile.',
      lineRef: 12,
      effectAr:
        'الزوج الأخير ينعطف من جمال البيت إلى معاناة المتكلّم نفسه. والـ"pain"، اللي تأخّر لين آخر بيت، يعيد تأطير كل اللي قبله كشوق غربة.',
    },
  ],
}

export default function IShallReturnEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="I Shall Return by Claude McKay - Analysis & Annotations"
        description="I Shall Return by Claude McKay, printed as the Eduqas anthology prints it, with line-by-line study notes and themes for Eduqas GCSE English Literature."
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <BookOpen className="size-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">I Shall Return</h1>
            <p className="text-body-sm text-muted-foreground">
              Claude McKay (Harlem Shadows, 1922) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="I Shall Return"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={iShallReturn} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        I Shall Return by Claude McKay is in the public domain. The poem is printed as it appears in
        the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), for first assessment
        in 2027, page 12.
      </footer>
    </div>
  )
}
