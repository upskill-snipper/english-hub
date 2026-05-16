'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Users, Quote, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Locale hook ────────────────────────────────────────────── */
// Mirrors useT() — reads the eh-lang cookie and re-renders when the
// language toggle dispatches an `eh-lang-change` event.
function useIsAr(): boolean {
  const [isAr, setIsAr] = useState(false)
  useEffect(() => {
    function read() {
      const m = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
      setIsAr(m?.[1] === 'ar')
    }
    read()
    window.addEventListener('eh-lang-change', read)
    return () => window.removeEventListener('eh-lang-change', read)
  }, [])
  return isAr
}
/* ─── Types ──────────────────────────────────────────────────── */

type CharacterStudy = {
  name: string
  role: string
  analysis: string
  development: string
  keyQuotes: {
    quote: string
    chapter: string
    analysis: string
    chapterAr?: string
    analysisAr?: string
  }[]
  themeLinks: string[]
  examTip: string
  // Khaleeji-AR variants. Character `name` (Dr Henry Jekyll, Mr Hyde,
  // etc.) stays Latin per brand convention. Theme link tags stay in
  // EN since they cross-link to other Latin headings.
  roleAr?: string
  analysisAr?: string
  developmentAr?: string
  examTipAr?: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const CHARACTERS: CharacterStudy[] = [
  {
    name: 'Dr Henry Jekyll',
    role: 'Respected physician and scientist; creator of Mr Hyde',
    roleAr: 'طبيب وعالم محترم؛ مبدع Mr Hyde',
    analysis:
      'Jekyll is a wealthy, well-regarded doctor who has long felt burdened by the need to maintain a respectable public image while suppressing his darker desires. He creates the transformative potion not out of pure evil but from a sincere, if dangerously arrogant, belief that the two sides of human nature can be separated. His tragedy lies in his inability to control the monster he has unleashed. Stevenson uses Jekyll to explore how Victorian society\'s demand for respectability can itself become a destructive force, driving people towards secret transgression rather than honest self-knowledge. Jekyll\'s language in his confession is revealing: he speaks of his "imperious desire" for pleasure and his "morbid sense of shame," showing that his experiment was motivated by a desire to sin without consequences rather than a genuine scientific quest.',
    analysisAr:
      'Jekyll طبيب غني ومحترم، عاش زمان طويل وهو يحس بثقل الحاجة لصورة عامة محترمة، وفي نفس الوقت يكبت رغباته المظلمة. خلق الجرعة المحوّلة مو لأنه شرير صرف، بل عن قناعة صادقة، لكن متغطرسة بشكل خطر، إن جانبَي النفس البشرية يقدر يتفصلون. مأساته إنه ما قدر يسيطر على الوحش اللي طلّقه. Stevenson يستخدم Jekyll عشان يدرس شلون مطالبة المجتمع الفيكتوري بالاحترام تنقلب نفسها قوة هدّامة، تدفع الناس للمعصية بالسر بدل ما يعرفون أنفسهم بصدق. لغة Jekyll في اعترافه كاشفة: يتكلّم عن "imperious desire" للذة، و"morbid sense of shame"، يبيّن إن تجربته دافعها رغبة يخطئ بلا عواقب، مو سعي علمي صادق.',
    development:
      'Jekyll\'s arc is one of progressive loss of control. Initially, the transformations are voluntary and exhilarating: he feels "younger, lighter, happier in body." But over time the balance shifts. Hyde grows stronger and begins appearing without the potion, especially during sleep. Jekyll becomes a prisoner of his own experiment, "slowly losing hold of my original and better self." His final confession is written in the third person ("that unhappy Henry Jekyll"), suggesting his identity has already fragmented beyond repair. Stevenson presents Jekyll\'s decline as a parable of addiction: the freedom that once felt liberating has become a cage.',
    developmentAr:
      'قوس Jekyll هو فقدان السيطرة بشكل متصاعد. في البداية، التحوّلات إرادية ومُبهجة: يحس "younger, lighter, happier in body". لكن مع مرور الوقت يتغيّر التوازن. Hyde يقوى، ويبدأ يطلع بلا جرعة، خصوصاً خلال النوم. Jekyll يصير سجين تجربته، "slowly losing hold of my original and better self". اعترافه الأخير مكتوب بضمير الغائب ("that unhappy Henry Jekyll")، يلمّح إن هويته قد تشظّت لمستوى ما يقبل إصلاح. Stevenson يقدّم انحدار Jekyll كأسطورة عن الإدمان: الحرّية اللي كانت تحس بأنها تحرير صارت قفص.',
    keyQuotes: [
      {
        quote: 'I learned to recognise the thorough and primitive duality of man.',
        chapter: "Chapter 10 -- Henry Jekyll's Full Statement",
        analysis:
          'The word "primitive" suggests duality is primal and ancient, predating civilisation. Jekyll presents this as a scientific discovery, but it is also a confession: he has always known he has a dark side. "Learned to recognise" implies acceptance rather than discovery.',
      },
      {
        quote:
          'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.',
        chapter: "Chapter 10 -- Henry Jekyll's Full Statement",
        analysis:
          'The passive constructions ("losing hold," "becoming incorporated") suggest the process has become involuntary, like addiction. The repetition of "slowly" creates a creeping, insidious rhythm. Jekyll is no longer choosing to become Hyde -- it is happening to him.',
      },
      {
        quote: 'I bring the life of that unhappy Henry Jekyll to an end.',
        chapter: "Chapter 10 -- Henry Jekyll's Full Statement",
        analysis:
          'Jekyll refers to himself in the third person, showing that even at the end he cannot unify his fractured identity. "That unhappy Henry Jekyll" distances him from himself. The statement reads as both confession and suicide note.',
      },
      {
        quote: 'If I am the chief of sinners, I am the chief of sufferers also.',
        chapter: "Chapter 10 -- Henry Jekyll's Full Statement",
        analysis:
          'Jekyll positions himself as both perpetrator and victim. The balanced clause structure ("chief of sinners... chief of sufferers") suggests he sees sin and suffering as equivalent, which evades moral responsibility. Stevenson invites the reader to question whether Jekyll\'s suffering excuses his crimes.',
      },
    ],
    themeLinks: [
      'Duality of Man',
      'Repression & Victorian Society',
      'Science & Morality',
      'Good vs Evil',
    ],
    examTip:
      "When writing about Jekyll, focus on the gap between his stated intentions and his actual behaviour. He claims the experiment was scientific, but his confession reveals it was about enjoying sin without consequences. This self-deception is central to Stevenson's critique of Victorian hypocrisy.",
    examTipAr:
      'لمن تكتب عن Jekyll، ركّز على الفجوة بين نواياه المُعلنة وسلوكه الفعلي. هو يقول إن التجربة علمية، لكن اعترافه يكشف إنها كانت عن الاستمتاع بالخطيئة بلا عواقب. هالخداع للنفس مركزي في نقد Stevenson للنفاق الفيكتوري.',
  },
  {
    name: 'Mr Edward Hyde',
    role: "Jekyll's dark alter ego; embodiment of pure evil",
    roleAr: 'النصف المظلم الثاني لـ Jekyll؛ تجسيد الشر الصرف',
    analysis:
      'Hyde is younger, smaller, and filled with pure malice. Every character who meets him feels an instinctive revulsion they cannot quite explain -- Enfield calls it "something downright detestable," Utterson describes "Satan\'s signature" on his face, and the doctor at the trampling scene turns "sick and white with the desire to kill him." Hyde represents the primal, id-driven self freed from conscience and social restraint. Significantly, he is described as smaller than Jekyll because, as Jekyll explains, his evil side has been "less exercised" -- it has been repressed, not eliminated, and it is stunted from disuse. Stevenson\'s most unsettling achievement with Hyde is making his horror unnameable. Characters struggle to articulate what repels them about him, suggesting that the evil he represents is beyond rational description -- it is felt, not understood.',
    analysisAr:
      'Hyde أصغر، وأقصر، ومليان حقد صرف. كل شخصية تقابله تحس بنفور غريزي ما تقدر تفسّره — Enfield يسميه "something downright detestable"، Utterson يصف وجهه بأنه "Satan\'s signature"، والطبيب اللي حضر مشهد الدوس يصير "sick and white with the desire to kill him". Hyde يمثّل النفس البدائية المدفوعة بالغرائز، متحرّرة من الضمير والقيود الاجتماعية. الملحوظ إنه موصوف بأنه أصغر من Jekyll لأن، كما يشرح Jekyll، جانبه الشرير كان "less exercised" — مكبوت، مو منعدم، ضعيف من قلّة الاستعمال. أعظم إنجاز مزعج لـ Stevenson مع Hyde إنه يخلّي رعبه بلا اسم. الشخصيات تكافح عشان تعبّر عن اللي ينفّرهم منه، وهذا يلمّح إن الشر اللي يمثّله فوق الوصف العقلاني — يتم الإحساس فيه، مو فهمه.',
    development:
      'Hyde grows larger and stronger as the novella progresses, suggesting that evil, once indulged, becomes increasingly dominant. His violence escalates from trampling a child to the frenzied murder of Sir Danvers Carew. Early on, he is cautious and cooperative (producing the cheque after the trampling); by Chapter 4, he is consumed by uncontrolled rage. This escalation mirrors the trajectory of addiction: the initial thrill requires increasing extremes to satisfy. By the end, Hyde has essentially consumed Jekyll, appearing spontaneously and requiring ever larger doses of the potion to be suppressed.',
    developmentAr:
      'Hyde يكبر ويقوى كل ما تتقدّم الرواية، وهذا يلمّح إن الشر، لو خلّيناه يطلع، يصير مسيطر أكثر فأكثر. عنفه يتصاعد من دوس بنت صغيرة لين قتل Sir Danvers Carew الهستيري. في البداية، حذر ومتعاون (يطلع الشيك بعد الدوس)؛ بحلول الفصل الرابع، يستهلكه غضب غير مسيطر عليه. هالتصاعد يعكس مسار الإدمان: الإثارة الأولى تحتاج تطرّفات أكبر عشان تشبع. بحلول النهاية، Hyde قد ابتلع Jekyll تقريباً، يطلع تلقائياً ويحتاج جرعات أكبر فأكبر من الجرعة عشان يتم كبحه.',
    keyQuotes: [
      {
        quote:
          'There was something wrong with his appearance; something displeasing, something downright detestable.',
        chapter: 'Chapter 1 -- Story of the Door',
        analysis:
          'Enfield\'s inability to name what repels him about Hyde is central to the novella\'s Gothic horror. The triple repetition ("something... something... something") creates escalating unease. Stevenson suggests that evil defies rational categorisation -- it is felt instinctively.',
      },
      {
        quote: "Satan's signature upon a face.",
        chapter: 'Chapter 2 -- Search for Mr Hyde',
        analysis:
          "Utterson reads Hyde's appearance as a text: the face is literally signed by the devil. This reflects the Victorian pseudo-science of physiognomy (reading character from appearance). Stevenson both uses and critiques this: Hyde does look evil, but his evil is not really about his face -- it is about what he represents.",
      },
      {
        quote:
          'With ape-like fury, he was trampling his victim underfoot and hailing down a storm of blows.',
        chapter: 'Chapter 4 -- The Carew Murder Case',
        analysis:
          'The simile "ape-like fury" connects Hyde to Darwin\'s theory of evolution, suggesting he represents the animal within the civilised man. "Trampling" and "storm of blows" convey uncontrolled, bestial violence. Stevenson presents Hyde\'s violence as de-evolution -- a regression to a primitive state.',
      },
      {
        quote:
          'I felt younger, lighter, happier in body; within I was conscious of a heady recklessness.',
        chapter: "Chapter 10 -- Henry Jekyll's Full Statement",
        analysis:
          'Jekyll describes becoming Hyde in initially positive terms. The liberation feels good -- this is what makes it so dangerous. "Heady recklessness" suggests intoxication. Stevenson shows that evil is seductive, not merely repulsive, which is why it is so hard to resist.',
      },
    ],
    themeLinks: [
      'Duality of Man',
      'Good vs Evil',
      'Violence & Respectability',
      'Repression & Victorian Society',
    ],
    examTip:
      "When describing Hyde, always note that characters cannot articulate what disturbs them. This is one of Stevenson's most important techniques: evil is presented as something beyond language and reason. This connects to the Gothic genre's fascination with the unnameable.",
    examTipAr:
      'لمن توصف Hyde، لاحظ دايماً إن الشخصيات ما يقدرون يعبّرون عن اللي يزعجهم. هذي من أهم تقنيات Stevenson: الشر معروض كشي فوق اللغة والعقل. هالشي يرتبط بهوس النوع القوطي بكل ما ما يتسمّى.',
  },
  {
    name: 'Mr Gabriel John Utterson',
    role: "Lawyer and narrator figure; Jekyll's loyal friend",
    roleAr: 'محامٍ ومصدر السرد؛ صديق Jekyll الوفي',
    analysis:
      'Utterson is the lens through which the reader experiences the mystery. He is rational, loyal, and deeply committed to propriety, yet he is also genuinely compassionate. His determination to protect Jekyll\'s reputation -- even when the evidence points towards something terrible -- mirrors the wider Victorian tendency to prioritise outward respectability over uncomfortable truths. Stevenson makes Utterson deliberately ordinary so that the Gothic horror strikes harder against a background of measured, lawyerly calm. Utterson is described as "lean, long, dusty, dreary," yet he inspires affection in those around him. He represents the best of Victorian respectability: reliable, discreet, and loyal. But his very virtues contribute to the tragedy: his reluctance to pry, his determination to think the best of Jekyll, and his instinct to protect reputation all delay the discovery of the truth.',
    analysisAr:
      'Utterson هو العدسة اللي القارئ يعيش من خلالها اللغز. عقلاني، وفي، وملتزم بالأدب التزام عميق، ومع هذا رحيم بصدق. إصراره يحمي سمعة Jekyll — حتى لمن الدلائل تشير لشي رهيب — يعكس النزعة الفيكتورية العامة بتقديم مظهر الاحترام على الحقائق المزعجة. Stevenson تعمّد يخلّي Utterson عادياً، عشان الرعب القوطي يطيح أقوى لمن يجي على خلفية هدوء محامٍ متّزن. Utterson موصوف بأنه "lean, long, dusty, dreary"، ومع هذا يلهم محبّة في اللي حواليه. هو يمثّل أفضل ما في الاحترام الفيكتوري: موثوق، كتوم، ووفي. لكن فضائله نفسها تسهم في المأساة: تحفّظه عن التطفّل، إصراره يحسب الخير في Jekyll، وغريزته يحمي السمعة، كلها تأخّر كشف الحقيقة.',
    development:
      "Utterson's arc is one of growing unease. He progresses from mild curiosity about Hyde to active investigation, from trust in Jekyll to suspicion, and finally from controlled inquiry to the violent act of breaking down Jekyll's door. This trajectory mirrors the reader's journey through the novella. Utterson never fully abandons his rational worldview, which is why the final revelations are so devastating: the truth exceeds anything his methodical mind could have imagined.",
    developmentAr:
      'قوس Utterson هو انزعاج يكبر. ينتقل من فضول هادي تجاه Hyde إلى تحقيق فعلي، من ثقة بـ Jekyll إلى شك، وأخيراً من سؤال محسوب إلى الفعل العنيف بكسر باب Jekyll. هالمسار يعكس رحلة القارئ عبر الرواية. Utterson ما يتخلّى تماماً عن منظوره العقلاني، ولهذا الكشوف الأخيرة مدمّرة بهالقدر: الحقيقة تتجاوز أي شي يقدر عقله المنظّم يتصوّره.',
    keyQuotes: [
      {
        quote: 'If he be Mr Hyde, I shall be Mr Seek.',
        chapter: 'Chapter 2 -- Search for Mr Hyde',
        analysis:
          'Utterson\'s pun frames the narrative as a game of concealment and detection. "Hyde/Seek" encapsulates the entire structure of the novella: truth is hidden, and the reader must seek it out alongside Utterson. The pun is also characteristically Victorian -- it uses humour to defuse anxiety.',
      },
      {
        quote: "I incline to Cain's heresy... I let my brother go to the devil in his own way.",
        chapter: 'Chapter 1 -- Story of the Door',
        analysis:
          'Utterson references the biblical Cain, who asked "Am I my brother\'s keeper?" The "heresy" of non-intervention reveals the Victorian gentleman\'s code: discretion above all else. But Stevenson suggests this policy of not interfering enables the evil it refuses to confront.',
      },
      {
        quote:
          'Mr Utterson the lawyer was a man of a rugged countenance, that was never lighted by a smile.',
        chapter: 'Chapter 1 -- Story of the Door',
        analysis:
          'The opening sentence establishes Utterson as austere and emotionally restrained. "Never lighted by a smile" suggests he has suppressed his own pleasures -- a milder version of Jekyll\'s repression. Stevenson implies that all the novella\'s characters exist on a spectrum of self-denial.',
      },
    ],
    themeLinks: ['Secrecy & Silence', 'Repression & Victorian Society', 'Duality of Man'],
    examTip:
      "Utterson is essential for understanding the novella's structure. His rational, methodical perspective is the normality against which the Gothic horror is measured. Show how Stevenson uses Utterson's limitations (his refusal to imagine the unimaginable) to build suspense.",
    examTipAr:
      'Utterson جوهري لفهم بناء الرواية. منظوره العقلاني والمنظّم هو العادي اللي بقياسه ينقاس الرعب القوطي. بيّن شلون Stevenson يستخدم محدوديات Utterson (رفضه يتخيّل اللي ما يتخيّل) عشان يبني التشويق.',
  },
  {
    name: 'Dr Hastie Lanyon',
    role: "Jekyll's former friend and fellow physician",
    roleAr: 'صديق Jekyll السابق وزميله في الطب',
    analysis:
      'Lanyon is a conventional man of science who dismissed Jekyll\'s experiments as "unscientific balderdash." He represents the limits of rational Victorian science: when he witnesses Hyde\'s transformation into Jekyll, the shock is so total that it kills him within weeks. Lanyon cannot accept what he has seen because it violates every framework he possesses for understanding reality. His death dramatises the idea that some knowledge is genuinely dangerous and that confronting the truth of human duality can be fatal. Stevenson uses Lanyon as a warning: the refusal to acknowledge the darkness within is not only intellectually insufficient but physically destructive.',
    analysisAr:
      'Lanyon رجل علم تقليدي، استهزأ بتجارب Jekyll وقال إنها "unscientific balderdash". يمثّل حدود العلم الفيكتوري العقلاني: لمن يشهد تحوّل Hyde إلى Jekyll، الصدمة تكون تامّة لدرجة تقتله خلال أسابيع. Lanyon ما يقدر يستوعب اللي شافه لأنه يخالف كل إطار يملكه عشان يفهم الواقع. موته يجسّد الفكرة إن بعض المعرفة خطرة بصدق، وإن مواجهة حقيقة الازدواجية البشرية ممكن تكون قاتلة. Stevenson يستخدم Lanyon كتحذير: رفض الاعتراف بالظلام في الداخل مو بس فكرياً ناقص، بل مدمّر جسدياً.',
    development:
      'Lanyon\'s most significant development happens off-stage: the reader learns only through his posthumous letter that he witnessed the transformation. Before this, he appears as a jovial, conventional figure dismissive of Jekyll\'s work. The contrast between the "hearty, healthy, dapper" Lanyon of Chapter 2 and the "pale" man with a "death-warrant written legibly upon his face" in Chapter 6 is Stevenson\'s most dramatic character transformation. The horror that kills Lanyon is not physical but epistemological: his entire understanding of reality has been shattered.',
    developmentAr:
      'أهم تطوّر في Lanyon يصير خارج المشهد: ما يعرف القارئ إلا من خلال رسالته بعد موته إنه شهد التحوّل. قبلها، يبيّن كشخصية مرحة وتقليدية تستهين بعمل Jekyll. التضاد بين Lanyon "hearty, healthy, dapper" في الفصل الثاني والرجل "pale" اللي عليه "death-warrant written legibly upon his face" في الفصل السادس هو أكثر تحوّل شخصي درامي عند Stevenson. الرعب اللي يقتل Lanyon مو جسدي بل معرفي: فهمه للواقع كله تشظّى.',
    keyQuotes: [
      {
        quote: 'I have had a shock and I shall never recover.',
        chapter: 'Chapter 6 -- Remarkable Incident of Dr Lanyon',
        analysis:
          'Lanyon\'s flat, clinical language ("shock," "recover") uses medical terminology to describe a spiritual crisis. The finality of "never" shows that this is not ordinary trauma: it is the destruction of a worldview. Stevenson suggests that confronting duality requires a psychological resilience that Lanyon lacks.',
      },
      {
        quote: 'I wish to see or hear no more of Dr Jekyll... I am quite done with that person.',
        chapter: 'Chapter 6 -- Remarkable Incident of Dr Lanyon',
        analysis:
          'Lanyon severs his friendship with Jekyll because the truth is unbearable. "That person" depersonalises Jekyll, suggesting Lanyon can no longer recognise him as the friend he knew. His response mirrors the wider Victorian strategy: if you cannot face a truth, refuse to acknowledge it.',
      },
      {
        quote:
          'O God! I screamed, and O God! again and again; for there before my eyes -- pale and shaken, and half fainting, and groping before him with his hands, like a man restored from death -- there stood Henry Jekyll!',
        chapter: "Chapter 9 -- Dr Lanyon's Narrative",
        analysis:
          'The exclamatory repetition of "O God!" conveys Lanyon\'s terror. "Like a man restored from death" uses simile to grope towards the unimaginable. Stevenson delays the revelation ("there stood Henry Jekyll") to the end of the sentence, replicating the shock for the reader.',
      },
    ],
    themeLinks: ['Science & Morality', 'Secrecy & Silence', 'Duality of Man'],
    examTip:
      "Lanyon is a useful contrast to Jekyll. Both are scientists, but Lanyon represents conventional, empirical science while Jekyll pushes beyond acceptable boundaries. Their friendship breaks because Jekyll's experiments expose truths that Lanyon's framework cannot accommodate.",
    examTipAr:
      'Lanyon تضاد مفيد مع Jekyll. الاثنين علماء، لكن Lanyon يمثّل العلم التقليدي التجريبي، وJekyll يدفع خارج الحدود المقبولة. صداقتهم تنكسر لأن تجارب Jekyll تكشف حقائق إطار Lanyon ما يقدر يستوعبها.',
  },
  {
    name: 'Mr Richard Enfield',
    role: "Utterson's cousin and walking companion",
    roleAr: 'قريب Utterson ورفيقه في المشي',
    analysis:
      'Enfield is a man-about-town who witnesses Hyde trampling the young girl in the opening chapter. His role is primarily structural: he introduces the mystery and models the Victorian gentleman\'s instinct to suppress scandalous knowledge. His agreement with Utterson to "never refer to this again" after their first conversation reflects the culture of silence and repression that pervades the novella. Enfield is described as "well-known" and "a man about town," suggesting a social ease that contrasts with Utterson\'s austerity. Their unlikely friendship ("it was a nut to crack for many") mirrors the theme of duality: even the most mismatched surfaces can conceal deep connections.',
    analysisAr:
      'Enfield رجل اجتماعي يعرف المدينة، يشهد Hyde وهو يدوس البنت الصغيرة في الفصل الأول. دوره أساساً بنيوي: يقدّم اللغز ويجسّد غريزة الجنتلمان الفيكتوري بكبت أي معلومات مفضوحة. اتفاقه مع Utterson إنهم "never refer to this again" بعد أول محادثة يعكس ثقافة الصمت والكبت اللي تسود الرواية كلها. Enfield موصوف بأنه "well-known" و"a man about town"، يلمّح بسهولة اجتماعية تتضاد مع صرامة Utterson. صداقتهم غير المتوقّعة ("it was a nut to crack for many") تعكس محور الازدواجية: حتى أكثر السطوح اختلافاً يقدر يخفي روابط عميقة.',
    development:
      'Enfield does not develop significantly as a character. His function is to introduce the central mystery and to demonstrate the code of secrecy that governs Victorian male relationships. His second appearance (Chapter 7) repeats the pattern of his first: he encounters disturbing information about Jekyll and immediately suppresses it. Stevenson uses this repetition to show how deeply ingrained the habit of silence is.',
    developmentAr:
      'Enfield ما يتطوّر بشكل كبير كشخصية. وظيفته إنه يقدّم اللغز المركزي ويبيّن قانون السرية اللي يحكم العلاقات الذكورية في العصر الفيكتوري. ظهوره الثاني (الفصل السابع) يكرّر نمط الأول: يصادف معلومات مزعجة عن Jekyll ويكبتها فوراً. Stevenson يستخدم هالتكرار عشان يبيّن لي درجة عميقة عادة الصمت متجذّرة.',
    keyQuotes: [
      {
        quote:
          'No sir, I make it a rule of mine: the more it looks like Queer Street, the less I ask.',
        chapter: 'Chapter 1 -- Story of the Door',
        analysis:
          '"Queer Street" was Victorian slang for trouble. Enfield\'s "rule" of deliberate ignorance reflects the wider code of the novella\'s male characters: do not ask, do not probe, do not confront. Stevenson shows how this self-imposed blindness enables evil to flourish unchallenged.',
      },
      {
        quote:
          'The two men put a very black look on him... we were keeping the women off him as best we could, for they were as wild as harpies.',
        chapter: 'Chapter 1 -- Story of the Door',
        analysis:
          'Enfield\'s account of the trampling reveals gendered reactions to Hyde. The men control their disgust ("a very black look"); the women are openly hostile ("wild as harpies"). Stevenson suggests that women, less constrained by the male code of suppression, respond more honestly to evil.',
      },
    ],
    themeLinks: ['Secrecy & Silence', 'Repression & Victorian Society'],
    examTip:
      "Enfield's importance lies in what he represents, not who he is. His instinct to suppress knowledge and avoid questions embodies the Victorian culture of silence that allows Jekyll/Hyde to operate unchallenged. Use him to discuss the theme of secrecy.",
  },
  {
    name: 'Poole',
    role: "Jekyll's loyal head butler",
    analysis:
      "Poole is Jekyll's most faithful servant, and it is his desperate visit to Utterson in Chapter 8 that triggers the novella's climax. Poole's loyalty transcends the master-servant relationship: he is genuinely terrified for Jekyll's safety and brave enough to act on his fear by breaking the code of deference. His observation that the voice behind the locked door \"has changed\" -- that it no longer sounds like his master -- provides the most chilling evidence that something fundamental has gone wrong. Stevenson uses Poole to show that the transformation is not merely internal but has become externally observable, even to those without scientific understanding.",
    development:
      "Poole moves from dutiful service to frightened disobedience. His decision to seek help from Utterson and to break down Jekyll's door represents a rupture in the Victorian social order: a servant overriding his master's explicit instructions. That Poole is driven to this extreme demonstrates how completely the situation has spiralled beyond normal social conventions.",
    keyQuotes: [
      {
        quote:
          'That thing was not my master... My master is a tall, fine build of a man, and this was more of a dwarf.',
        chapter: 'Chapter 8 -- The Last Night',
        analysis:
          'Poole recognises that the figure behind the door is physically different from Jekyll. "That thing" dehumanises Hyde and registers Poole\'s horror. The contrast between "tall, fine build" and "dwarf" encapsulates the physical manifestation of Jekyll\'s moral shrinkage.',
      },
      {
        quote: "I've been afraid for about a week... and I can bear it no more.",
        chapter: 'Chapter 8 -- The Last Night',
        analysis:
          'Poole\'s simple, direct language contrasts with the elaborate circumlocutions of the gentlemen. His emotional honesty -- "I can bear it no more" -- is more human and more courageous than Utterson\'s professional caution. Stevenson suggests that loyalty and instinct can see truths that reason misses.',
      },
    ],
    themeLinks: ['Secrecy & Silence', 'Duality of Man', 'Violence & Respectability'],
    examTip:
      "Poole's role in the climax demonstrates that the transformation has become visible to ordinary people. Use his testimony to discuss how Stevenson builds suspense and prepares the reader for the final revelation.",
  },
  {
    name: 'Sir Danvers Carew',
    role: "Elderly MP; Hyde's murder victim",
    analysis:
      'Sir Danvers Carew appears only to be murdered. He is described as a man of "beautiful" manners and "well-founded self-content" -- the epitome of Victorian respectability. His murder by Hyde is the novella\'s most violent scene, described through the eyes of a horrified maidservant. Stevenson makes Carew a symbol of everything Hyde attacks: age, civility, social standing, and the genteel surface of Victorian life. The brutality of the murder (the cane breaks in half from the force of the blows) is disproportionate to any provocation, suggesting that Hyde\'s violence is directed not at Carew as an individual but at the values he represents.',
    development:
      "Carew does not develop as a character. His function is structural: his murder raises the stakes from trampling to homicide, demonstrates Hyde's escalating violence, and forces Utterson into active investigation. The murder also provides the broken cane -- the physical evidence that links Hyde to Jekyll, since Utterson recognises it as a gift he once gave to Jekyll.",
    keyQuotes: [
      {
        quote:
          'An aged and beautiful gentleman with white hair, drew near... and bowed... with a very pretty manner of politeness.',
        chapter: 'Chapter 4 -- The Carew Murder Case',
        analysis:
          'Carew\'s gentle courtesy makes the subsequent murder all the more horrific. "Beautiful," "white hair," and "pretty manner" cast him as the innocent victim of a random, savage attack. Stevenson maximises the contrast between victim and attacker to heighten the Gothic horror.',
      },
      {
        quote: 'The bones were audibly shattered and the body jumped upon the roadway.',
        chapter: 'Chapter 4 -- The Carew Murder Case',
        analysis:
          'The forensic detail ("audibly shattered") forces the reader to hear the violence. "Jumped upon the roadway" makes the dead body seem to move of its own accord, adding a ghastly, puppet-like quality. Stevenson uses precise physical description to create the novella\'s most viscerally disturbing moment.',
      },
    ],
    themeLinks: ['Violence & Respectability', 'Good vs Evil', 'Duality of Man'],
    examTip:
      "Carew's murder is essential evidence for the theme of violence beneath respectability. The killing of the most respectable character by the least respectable demonstrates Stevenson's argument that Victorian civilisation contains the seeds of its own destruction.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function JekyllAndHydeCharactersPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Dr Jekyll and Mr Hyde',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
          },
          {
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde/characters',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Jekyll and Hyde" textType="novella" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/jekyll-and-hyde" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Jekyll and Hyde
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Users className="mr-1 size-3 text-emerald-400" />
                Character Study
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Characters — Deep Study
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Detailed analysis of every major character with key quotations, character development,
              theme links, and exam tips for top-grade responses.
            </p>
          </div>
        </section>

        {/* Characters */}
        <div className="mt-10 space-y-10">
          {CHARACTERS.map((ch) => (
            <section key={ch.name}>
              <div className="mb-5 flex items-center gap-3">
                <Users className="size-5 text-emerald-400" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{ch.name}</h2>
                  <p className="text-body-sm text-muted-foreground">{ch.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{ch.analysis}</p>
                  </CardContent>
                </Card>

                {/* Character Development */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">
                      Character Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{ch.development}</p>
                  </CardContent>
                </Card>

                {/* Key Quotes */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Quote className="size-5 text-violet-400" />
                      <CardTitle className="text-heading-md font-heading">Key Quotations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {ch.keyQuotes.map((q, i) => (
                      <div key={i} className="space-y-1.5">
                        <p className="text-body-md font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </p>
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.chapter}
                        </p>
                        <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Theme links */}
                <Card className="border-l-4 border-l-emerald-400">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-foreground mb-2">Theme links</p>
                    <div className="flex flex-wrap gap-2">
                      {ch.themeLinks.map((theme) => (
                        <Badge key={theme} variant="outline" className="text-muted-foreground">
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Exam tip */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-clay-600" />
                      <p className="text-sm font-semibold text-foreground">Exam tip</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{ch.examTip}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis Stevenson is in the
          public domain. All quotations are reproduced freely.
        </p>
      </div>
    </div>
  )
}
