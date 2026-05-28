import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { GeoFaq, type GeoFaqItem } from '@/components/seo/GeoFaq'

const AIC_FAQS: GeoFaqItem[] = [
  {
    question: 'What is An Inspector Calls about?',
    answer:
      'An Inspector Calls is a 1945 play by J.B. Priestley, set in 1912. As the wealthy Birling family celebrate an engagement, the mysterious Inspector Goole arrives to investigate the suicide of a young working-class woman, Eva Smith. One by one he reveals that every family member helped drive her to her death. It is a morality play arguing for collective social responsibility.',
  },
  {
    question: 'What are the main themes in An Inspector Calls?',
    answer:
      'The central themes are social responsibility, class, gender, age versus youth, and guilt. Priestley’s core argument, voiced by the Inspector, is that "we are members of one body" and responsible for one another. He contrasts the older Birlings, who refuse to change, with Sheila and Eric, who accept their guilt, to urge his 1945 audience towards a fairer society.',
  },
  {
    question: 'What is the most important quotation in An Inspector Calls?',
    answer:
      'The Inspector’s warning that "We don’t live alone. We are members of one body. We are responsible for each other" is the play’s thesis. It rejects Arthur Birling’s capitalist individualism and echoes the communal spirit of the 1945 welfare-state moment, making the line Priestley’s clearest statement of his socialist message.',
  },
  {
    question: 'Who is responsible for Eva Smith’s death in An Inspector Calls?',
    answer:
      'Priestley’s point is that responsibility is collective: every Birling plays a part. Arthur sacks Eva for striking; Sheila has her dismissed from a shop out of jealousy; Gerald keeps her as a mistress; Eric assaults her and steals to support her; and Sybil refuses her charity when she is pregnant. The chain of cause and effect means no single character can disown the blame.',
  },
  {
    question: 'Why did Priestley set the play in 1912 but write it in 1945?',
    answer:
      'Priestley set the play in 1912 so the audience’s hindsight would expose Arthur Birling’s confident predictions, that the Titanic is unsinkable and war impossible, as catastrophically wrong. Writing in 1945, as the Labour government built the welfare state, Priestley used the gap between the two dates to argue that Britain must not return to the selfish inequality of the Edwardian era.',
  },
  {
    question: 'How do I write a grade 9 An Inspector Calls essay?',
    answer:
      'Argue a clear thesis about Priestley’s purpose, then analyse his methods (AO2): dramatic irony in Birling’s speeches, the Inspector as a structural device, the cyclical ending, and the way each character’s reaction tests the audience. Embed short quotations, link them to the socialist message, and weave in 1912 and 1945 context (AO3) only where it sharpens your interpretation.',
  },
]

export const metadata: Metadata = {
  openGraph: {
    title: 'An Inspector Calls revision guide - themes, characters, key quotes - The English Hub',
    description: 'An Inspector Calls GCSE revision - Priestley',
  },
  title: 'An Inspector Calls revision guide - themes, characters, key quotes',
  description:
    "An Inspector Calls GCSE revision - Priestley's play act-by-act with characters, themes, context, key quotes and essays. AQA, Edexcel, OCR, Eduqas.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
  },
}

const data: TextGuideData = {
  title: 'An Inspector Calls',
  author: 'J.B. Priestley',
  year: 'Written 1944-45; first performed Moscow 1945; London premiere 1 Oct 1946',
  yearAr: 'مكتوبة 1944-45؛ أول عرض في Moscow 1945؛ العرض الافتتاحي في London 1 أكتوبر 1946',
  category: 'Play',
  badge: 'AQA / Edexcel / OCR / Eduqas / Edexcel IGCSE',
  intro:
    'J.B. Priestley wrote An Inspector Calls in 1944-1945 but deliberately set it in spring 1912 - before the sinking of the Titanic (April 1912), the First World War, and the creation of the welfare state. The play uses a mysterious police inspector to expose how every member of the wealthy Birling family has contributed to the death of a young working-class woman. It is at once a detective thriller, a morality play and a socialist argument for collective responsibility.',
  introAr:
    'كتب J.B. Priestley مسرحية An Inspector Calls في الفترة 1944-1945، بس تعمّد إنه يحط أحداثها في ربيع 1912 - قبل غرق Titanic (أبريل 1912)، وقبل الحرب العالمية الأولى، وقبل تأسيس دولة الرفاه. المسرحية تستخدم مفتش شرطة غامض عشان يكشف شلون ساهم كل واحد من أفراد عائلة Birling الثرية في موت بنت صغيرة من الطبقة العاملة. هي في نفس الوقت رواية بوليسية، ومسرحية أخلاقية، وحجة اشتراكية لصالح المسؤولية الجماعية.',
  quickInfo: {
    genre: 'Well-made play / Morality play',
    setting:
      'The Birlings\u2019 dining room, Brumley (fictional North Midlands industrial town), spring 1912',
    length: 'Three-act play (continuous action, single evening)',
    published: 'Premiered Moscow & Leningrad 1945; London premiere 1 October 1946, New Theatre',
  },
  quickInfoAr: {
    genre: 'مسرحية مُحكَمة الصنعة / مسرحية أخلاقية',
    setting: 'غرفة طعام آل Birling، في Brumley (مدينة صناعية خيالية في شمال الميدلاندز)، ربيع 1912',
    length: 'مسرحية من ثلاثة فصول (أحداث متواصلة في أمسية وحدة)',
    published:
      'العرض الأول في Moscow و Leningrad 1945؛ العرض الافتتاحي في London 1 أكتوبر 1946، New Theatre',
  },
  plotSummary: [
    'The play opens on the Birling family celebrating the engagement of Sheila Birling to Gerald Croft, the son of a rival industrialist. Arthur Birling delivers a confident after-dinner speech praising capitalism and dismissing the idea that people should look after one another. He predicts the Titanic is unsinkable and that war is impossible. The doorbell rings, and Inspector Goole arrives to investigate the death of a young woman named Eva Smith, who has killed herself by swallowing disinfectant.',
    'In Act One, the Inspector reveals that Arthur Birling sacked Eva from his factory for leading a strike over pay. Sheila then recognises Eva as a shop girl she had dismissed from Milwards out of jealous spite. Gerald admits he kept Eva - now calling herself Daisy Renton - as his mistress before ending the affair. Each revelation peels back the family\u2019s respectable surface to expose selfishness and exploitation underneath.',
    'In Act Two, the Inspector turns to Sybil Birling, who chaired a charity committee that refused Eva help when she was pregnant and desperate. Sybil insists the father of the child should bear full responsibility, not realising that the father is her own son Eric. When Eric is exposed in Act Three, the full chain of responsibility is laid bare: every Birling played a part in driving Eva to her death.',
    'After the Inspector leaves with a final speech about shared responsibility, the family fractures. Gerald and Arthur discover that no inspector by that name exists on the police force and that no girl has died at the infirmary. The older Birlings celebrate their apparent escape, but Sheila and Eric remain shaken. The telephone rings: a real inspector is on his way to investigate a suicide. The cycle begins again.',
  ],
  plotSummaryAr: [
    'تفتح المسرحية على عائلة Birling وهي تحتفل بخطوبة Sheila Birling من Gerald Croft، اللي هو ابن صناعي منافس. يلقي Arthur Birling خطبة واثقة بعد العشاء يمدح فيها الرأسمالية ويرفض فكرة إن الناس لازم تهتم ببعضها. ويتنبأ بإن سفينة Titanic ما تغرق وإن الحرب مستحيلة. يرنّ جرس الباب، ويوصل Inspector Goole عشان يحقق في وفاة بنت شابة اسمها Eva Smith، اللي قتلت نفسها بشُربها مادة مطهّرة.',
    'في الفصل الأول، يكشف المفتش إن Arthur Birling طرد Eva من مصنعه لأنها قادت إضراباً يطالب برفع الأجور. وبعدها تتعرّف Sheila على Eva كبائعة في محل Milwards كانت قد سبّبت في فصلها من باب الغيرة الحقودة. ويعترف Gerald بإنه احتفظ بـ Eva - اللي صارت تسمّي نفسها Daisy Renton - كعشيقة قبل ما ينهي العلاقة. كل اعتراف يكشف القشرة المحترمة للعائلة ويعرّي الأنانية والاستغلال اللي تحتها.',
    'في الفصل الثاني، يتوجه المفتش إلى Sybil Birling، اللي ترأست لجنة خيرية رفضت تساعد Eva لمّا كانت حامل ومحتاجة. تصرّ Sybil على إن أب الطفل لازم يتحمل المسؤولية كاملة، وهي ما تدري إن الأب هو ابنها Eric. ولمّا يتعرّى Eric في الفصل الثالث، تنكشف سلسلة المسؤولية كاملة: كل فرد من آل Birling شارك في دفع Eva لموتها.',
    'بعد ما يغادر المفتش بخطبة ختامية عن المسؤولية المشتركة، تتصدّع العائلة. يكتشف Gerald و Arthur إنه ما في مفتش بهذا الاسم في الشرطة، وإنه ما في بنت ماتت في المستشفى. كبار آل Birling يحتفلون بهروبهم الظاهري، لكن Sheila و Eric يظلّون مهزوزين. يرنّ التلفون: مفتش حقيقي في طريقه عشان يحقق في حالة انتحار. وتبدأ الدورة من جديد.',
  ],
  characters: [
    {
      name: 'Arthur Birling',
      role: 'Prosperous factory owner and family patriarch',
      roleAr: 'صاحب مصنع ثري ورب العائلة',
      body: 'Birling is a self-made businessman obsessed with profit, reputation and his upcoming knighthood. His speeches about progress and individual responsibility are deliberately undercut by dramatic irony - the audience knows his predictions about the Titanic and war are catastrophically wrong. He represents the capitalist ruling class that Priestley wanted post-war Britain to reject.',
      bodyAr:
        'Birling رجل أعمال صنع نفسه بنفسه، مهووس بالربح والسمعة ولقب الفروسية اللي ينتظره. خطبه عن التقدم والمسؤولية الفردية مقصود إنها تنهار تحت ضربات السخرية الدرامية - الجمهور يدري إن توقعاته عن Titanic وعن الحرب طلعت غلط طلعة كارثية. هو يمثّل الطبقة الرأسمالية الحاكمة اللي بغى Priestley إن بريطانيا ما بعد الحرب ترفضها.',
    },
    {
      name: 'Sybil Birling',
      role: 'Arthur\u2019s wife and charity committee chair',
      roleAr:
        '\u0632\u0648\u062c\u0629 Arthur \u0648\u0631\u0626\u064a\u0633\u0629 \u0644\u062c\u0646\u0629 \u062e\u064a\u0631\u064a\u0629',
      body: 'Cold, snobbish and rigidly class-conscious, Sybil is the most resistant to the Inspector\u2019s message. She refuses to believe that her actions at the charity had consequences and consistently blames the lower classes for their own suffering. Priestley uses her to expose how charitable institutions could be instruments of class prejudice rather than genuine aid.',
      bodyAr:
        '\u0628\u0627\u0631\u062f\u0629 \u0648\u0645\u062a\u0639\u062c\u0631\u0641\u0629 \u0648\u0645\u062a\u0634\u0628\u0651\u062b\u0629 \u0628\u062d\u062f\u0648\u062f \u0627\u0644\u0637\u0628\u0642\u0629\u060c Sybil \u0647\u064a \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0642\u0627\u0648\u0645\u0629\u064b \u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u0641\u062a\u0634. \u062a\u0631\u0641\u0636 \u062a\u0635\u062f\u0651\u0642 \u0625\u0646 \u062a\u0635\u0631\u0651\u0641\u0627\u062a\u0647\u0627 \u0641\u064a \u0627\u0644\u0644\u062c\u0646\u0629 \u0627\u0644\u062e\u064a\u0631\u064a\u0629 \u062a\u0631\u062a\u0651\u0628 \u0639\u0644\u064a\u0647\u0627 \u0639\u0648\u0627\u0642\u0628\u060c \u0648\u062a\u062d\u0645\u0651\u0644 \u0627\u0644\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0641\u0642\u064a\u0631\u0629 \u0628\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0645\u0639\u0627\u0646\u0627\u062a\u0647\u0627 \u0647\u064a. \u064a\u0633\u062a\u0639\u0645\u0644\u0647\u0627 Priestley \u0639\u0634\u0627\u0646 \u064a\u0643\u0634\u0641 \u0643\u064a\u0641 \u0635\u0627\u0631\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062e\u064a\u0631\u064a\u0629 \u0623\u062f\u0648\u0627\u062a \u0644\u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062a\u062d\u064a\u0651\u0632 \u0627\u0644\u0637\u0628\u0642\u064a \u0628\u062f\u0644 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0639\u0648\u0646 \u062d\u0642\u064a\u0642\u064a.',
    },
    {
      name: 'Sheila Birling',
      role: 'The Birlings\u2019 daughter',
      roleAr: '\u0628\u0646\u062a \u0622\u0644 Birling',
      body: 'Sheila begins the play as a naive, sheltered young woman but undergoes the most complete moral transformation. She quickly accepts her guilt, sees through Gerald\u2019s deception and challenges her parents\u2019 refusal to change. By the end she functions almost as the Inspector\u2019s ally, representing the younger generation that Priestley believed could build a better society.',
      bodyAr:
        '\u062a\u0628\u062f\u0623 Sheila \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629 \u0643\u0628\u0646\u062a \u0633\u0627\u0630\u062c\u0629 \u0645\u062d\u0645\u064a\u0629\u060c \u0644\u0643\u0646\u0647\u0627 \u062a\u0645\u0631\u0651 \u0628\u0623\u0643\u0628\u0631 \u062a\u062d\u0648\u0651\u0644 \u0623\u062e\u0644\u0627\u0642\u064a \u0641\u064a \u0627\u0644\u0646\u0635. \u062a\u062a\u0642\u0628\u0651\u0644 \u0630\u0646\u0628\u0647\u0627 \u0628\u0633\u0631\u0639\u0629\u060c \u0648\u062a\u0643\u0634\u0641 \u062e\u062f\u0627\u0639 Gerald\u060c \u0648\u062a\u062a\u062d\u062f\u0651\u0649 \u0631\u0641\u0636 \u0623\u0628\u0648\u0627\u0647\u0627 \u0644\u0644\u062a\u063a\u064a\u0651\u0631. \u0648\u0628\u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629 \u062a\u0634\u062a\u063a\u0644 \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0643\u062d\u0644\u064a\u0641\u0629 \u0644\u0644\u0645\u0641\u062a\u0634\u060c \u0648\u062a\u0645\u062b\u0651\u0644 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0623\u0635\u063a\u0631 \u0627\u0644\u0644\u064a \u0622\u0645\u0646 Priestley \u0628\u0625\u0646\u0647 \u0642\u0627\u062f\u0631 \u064a\u0628\u0646\u064a \u0645\u062c\u062a\u0645\u0639 \u0623\u062d\u0633\u0646.',
    },
    {
      name: 'Eric Birling',
      role: 'The Birlings\u2019 son',
      roleAr: '\u0648\u0644\u062f \u0622\u0644 Birling',
      body: 'Awkward, heavy-drinking and initially overshadowed, Eric is revealed to have forced himself on Eva and stolen money from his father\u2019s firm to support her. Like Sheila, he accepts responsibility and is appalled by his parents\u2019 attempt to cover things up. His alcoholism hints at deeper dysfunction beneath the Birling family\u2019s polished exterior.',
      bodyAr:
        '\u0645\u062d\u0631\u064e\u062c\u060c \u0648\u0645\u062f\u0645\u0646 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0628\u060c \u0648\u0645\u064f\u0638\u0644\u064e\u0651\u0644 \u0641\u064a \u0627\u0644\u0628\u062f\u0627\u064a\u0629\u060c \u064a\u062a\u0643\u0634\u0651\u0641 \u0625\u0646 Eric \u0641\u0631\u0636 \u0646\u0641\u0633\u0647 \u0639\u0644\u0649 Eva \u0648\u0633\u0631\u0642 \u0641\u0644\u0648\u0633 \u0645\u0646 \u0634\u0631\u0643\u0629 \u0623\u0628\u0648\u0647 \u0639\u0634\u0627\u0646 \u064a\u0635\u0631\u0641 \u0639\u0644\u064a\u0647\u0627. \u0645\u062b\u0644 Sheila\u060c \u064a\u062a\u0642\u0628\u0651\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0648\u064a\u062a\u0642\u0632\u0651\u0632 \u0645\u0646 \u0645\u062d\u0627\u0648\u0644\u0629 \u0623\u0628\u0648\u0627\u0647 \u064a\u0637\u0645\u0633\u0648\u0646 \u0627\u0644\u0641\u0636\u064a\u062d\u0629. \u0625\u062f\u0645\u0627\u0646\u0647 \u0639\u0644\u0649 \u0627\u0644\u0643\u062d\u0648\u0644 \u064a\u0644\u0645\u0651\u062d \u0644\u062e\u0644\u0644 \u0623\u0639\u0645\u0642 \u062a\u062d\u062a \u0627\u0644\u0633\u0637\u062d \u0627\u0644\u0645\u0635\u0642\u0648\u0644 \u0644\u0639\u0627\u0626\u0644\u0629 Birling.',
    },
    {
      name: 'Gerald Croft',
      role: 'Sheila\u2019s fianc\u00e9, son of Sir George Croft',
      roleAr: '\u062e\u0637\u064a\u0628 Sheila \u0648\u0627\u0628\u0646 Sir George Croft',
      body: 'Gerald occupies a complex middle ground. His affair with Daisy Renton contained genuine feeling, but he ultimately abandoned her when it suited him. After the Inspector leaves, he leads the effort to discredit the investigation, aligning himself with the older generation rather than with Sheila and Eric.',
      bodyAr:
        '\u064a\u062d\u062a\u0644 Gerald \u0645\u0646\u0637\u0642\u0629 \u0648\u0633\u0637\u0649 \u0645\u0639\u0642\u0651\u062f\u0629. \u0639\u0644\u0627\u0642\u062a\u0647 \u0628\u0640 Daisy Renton \u0643\u0627\u0646\u062a \u062a\u062d\u0648\u064a \u0645\u0634\u0627\u0639\u0631 \u0635\u0627\u062f\u0642\u0629\u060c \u0644\u0643\u0646\u0647 \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u062a\u062e\u0644\u0651\u0649 \u0639\u0646\u0647\u0627 \u0644\u0645\u0651\u0627 \u0646\u0627\u0633\u0628\u0647. \u0648\u0628\u0639\u062f \u0645\u0627 \u064a\u063a\u0627\u062f\u0631 \u0627\u0644\u0645\u0641\u062a\u0634\u060c \u064a\u0642\u0648\u062f \u062d\u0645\u0644\u0629 \u0644\u062a\u0634\u0648\u064a\u0647 \u0627\u0644\u062a\u062d\u0642\u064a\u0642\u060c \u0648\u064a\u0635\u0637\u0641\u0651 \u0645\u0639 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0623\u0643\u0628\u0631 \u0628\u062f\u0644 \u0645\u0627 \u064a\u0635\u0637\u0641\u0651 \u0645\u0639 Sheila \u0648 Eric.',
    },
    {
      name: 'Inspector Goole',
      role: 'The investigating inspector',
      roleAr:
        '\u0627\u0644\u0645\u0641\u062a\u0634 \u0627\u0644\u0630\u064a \u064a\u0642\u0648\u062f \u0627\u0644\u062a\u062d\u0642\u064a\u0642',
      body: 'Authoritative, morally relentless and possibly supernatural, the Inspector controls the pace and direction of the evening. His name puns on "ghoul" and his origins are never explained. Priestley uses him as a dramatic device to voice the play\u2019s socialist argument: that we are all responsible for one another.',
      bodyAr:
        '\u0635\u0627\u062d\u0628 \u0633\u0644\u0637\u0629\u060c \u0648\u0635\u0627\u0631\u0645 \u0623\u062e\u0644\u0627\u0642\u064a\u0627\u064b\u060c \u0648\u0631\u0628\u0645\u0627 \u062e\u0627\u0631\u0642 \u0644\u0644\u0637\u0628\u064a\u0639\u0629\u060c \u064a\u062a\u062d\u0643\u0651\u0645 \u0627\u0644\u0645\u0641\u062a\u0634 \u0628\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0623\u0645\u0633\u064a\u0629 \u0648\u0627\u062a\u062c\u0627\u0647\u0647\u0627. \u0627\u0633\u0645\u0647 "Goole" \u064a\u0644\u0639\u0628 \u0639\u0644\u0649 \u0643\u0644\u0645\u0629 "ghoul" (\u0634\u0628\u062d \u0622\u0643\u0644 \u0627\u0644\u0644\u062d\u0645)\u060c \u0648\u0623\u0635\u0648\u0644\u0647 \u0645\u0627 \u062a\u0646\u0634\u0631\u062d \u0623\u0628\u062f\u0627\u064b. \u064a\u0633\u062a\u0639\u0645\u0644\u0647 Priestley \u0643\u0623\u062f\u0627\u0629 \u062f\u0631\u0627\u0645\u064a\u0629 \u0639\u0634\u0627\u0646 \u064a\u0648\u0635\u0644 \u062d\u062c\u0629 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u064a\u0629: \u0625\u0646 \u0625\u062d\u0646\u0627 \u0643\u0644\u0646\u0627 \u0645\u0633\u0624\u0648\u0644\u064a\u0646 \u0639\u0646 \u0628\u0639\u0636\u0646\u0627 \u0627\u0644\u0628\u0639\u0636.',
    },
    {
      name: 'Eva Smith / Daisy Renton',
      role: 'The unseen working-class victim',
      roleAr: 'الضحيّة من الطبقة العاملة، اللي ما تظهر على المسرح',
      body: 'Eva never appears on stage but is the moral centre of the play. She represents every exploited worker, every abandoned woman, every person failed by the class system. Whether she is one girl or several is deliberately ambiguous - Priestley\u2019s point is that countless Evas exist and that their suffering is collective, not individual.',
      bodyAr:
        'ما تظهر Eva على المسرح أبداً، لكنّها المركز الأخلاقي للمسرحية. تمثّل كل عاملة استُغلّت، وكل بنت تخلّى عنها الناس، وكل شخص خذلته المنظومة الطبقية. هل هي بنت واحدة أو عدّة بنات؟ الغموض مقصود - مقصد Priestley إن في عدد لا يُحصى من Eva-ات موجودات، وإنّ معاناتهنّ جماعية مو فردية.',
    },
    {
      name: 'Edna',
      role: 'The Birlings\u2019 maid',
      roleAr: '\u062e\u0627\u062f\u0645\u0629 \u0622\u0644 Birling',
      body: 'Edna has very few lines, but her silent presence throughout the evening is a constant reminder of the class divide inside the Birling household. She serves the family who treat people like Eva as disposable, and her quiet deference underlines the power imbalance that the play exposes.',
      bodyAr:
        '\u0639\u0646\u062f Edna \u0633\u0637\u0648\u0631 \u0642\u0644\u064a\u0644\u0629 \u062c\u062f\u0627\u064b\u060c \u0644\u0643\u0646 \u062d\u0636\u0648\u0631\u0647\u0627 \u0627\u0644\u0635\u0627\u0645\u062a \u0637\u0648\u0644 \u0627\u0644\u0623\u0645\u0633\u064a\u0629 \u062a\u0630\u0643\u064a\u0631 \u062f\u0627\u0626\u0645 \u0628\u0627\u0644\u0641\u062c\u0648\u0629 \u0627\u0644\u0637\u0628\u0642\u064a\u0629 \u062f\u0627\u062e\u0644 \u0628\u064a\u062a Birling. \u062a\u062e\u062f\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0627\u0644\u0644\u064a \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0646\u0627\u0633 \u0645\u062b\u0644 Eva \u0639\u0644\u0649 \u0623\u0646\u0647\u0645 \u064a\u064f\u0631\u0645\u0648\u0646\u060c \u0648\u062e\u0636\u0648\u0639\u0647\u0627 \u0627\u0644\u0647\u0627\u062f\u0626 \u064a\u0639\u0632\u0651\u0632 \u062e\u0644\u0644 \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0644\u064a \u062a\u0641\u0636\u062d\u0647 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629.',
    },
  ],
  themes: [
    {
      title: 'Social responsibility',
      titleAr:
        '\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629',
      body: 'The Inspector\u2019s central message is that society is not made up of isolated individuals but of interconnected people who owe duties to one another. Priestley wrote the play as an argument for the welfare state then being built in Britain: if we ignore the vulnerable, the consequences will eventually reach us all.',
      bodyAr:
        '\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062c\u0648\u0647\u0631\u064a\u0629 \u0644\u0644\u0645\u0641\u062a\u0634 \u0625\u0646 \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0645\u0627 \u064a\u062a\u0631\u0643\u0651\u0628 \u0645\u0646 \u0623\u0641\u0631\u0627\u062f \u0645\u0646\u0641\u0635\u0644\u064a\u0646\u060c \u0625\u0646\u0645\u0627 \u0645\u0646 \u0646\u0627\u0633 \u0645\u062a\u0631\u0627\u0628\u0637\u064a\u0646 \u0639\u0644\u064a\u0647\u0645 \u0648\u0627\u062c\u0628\u0627\u062a \u062a\u062c\u0627\u0647 \u0628\u0639\u0636\u0647\u0645 \u0627\u0644\u0628\u0639\u0636. \u0643\u062a\u0628 Priestley \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629 \u0643\u062d\u062c\u0629 \u0644\u0635\u0627\u0644\u062d \u062f\u0648\u0644\u0629 \u0627\u0644\u0631\u0641\u0627\u0647 \u0627\u0644\u0644\u064a \u0643\u0627\u0646\u062a \u062a\u062a\u0623\u0633\u0633 \u0641\u064a \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627 \u062d\u064a\u0646\u0647\u0627: \u0625\u0630\u0627 \u062a\u062c\u0627\u0647\u0644\u0646\u0627 \u0627\u0644\u0645\u0633\u062a\u0636\u0639\u0641\u064a\u0646\u060c \u0641\u0625\u0646 \u0627\u0644\u0639\u0648\u0627\u0642\u0628 \u0631\u0627\u062d \u062a\u0648\u0635\u0644\u0646\u0627 \u0643\u0644\u0646\u0627 \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629.',
    },
    {
      title: 'Class',
      titleAr: '\u0627\u0644\u0637\u0628\u0642\u0629',
      body: 'The Birlings sit at the top of an Edwardian class hierarchy and treat those beneath them as expendable. Eva is sacked, exploited and rejected at every turn because she lacks money, status and connections. Priestley exposes how class privilege insulates the wealthy from accountability while crushing those without power.',
      bodyAr:
        '\u064a\u062d\u062a\u0644 \u0622\u0644 Birling \u0642\u0645\u0629 \u0627\u0644\u0647\u0631\u0645 \u0627\u0644\u0637\u0628\u0642\u064a \u0641\u064a \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u0625\u062f\u0648\u0627\u0631\u062f\u064a\u060c \u0648\u064a\u0639\u0627\u0645\u0644\u0648\u0646 \u0627\u0644\u0644\u064a \u062a\u062d\u062a\u0647\u0645 \u0643\u0623\u0646\u0647\u0645 \u0642\u0627\u0628\u0644\u0648\u0646 \u0644\u0644\u0627\u0633\u062a\u063a\u0646\u0627\u0621. \u062a\u064f\u0637\u0631\u062f Eva \u0648\u062a\u064f\u0633\u062a\u063a\u0644\u0651 \u0648\u062a\u064f\u0631\u0641\u0636 \u0641\u064a \u0643\u0644 \u0645\u0646\u0639\u0637\u0641 \u0644\u0623\u0646\u0647\u0627 \u062a\u0641\u062a\u0642\u0631 \u0644\u0644\u0645\u0627\u0644 \u0648\u0627\u0644\u0645\u0643\u0627\u0646\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0641. \u064a\u0641\u0636\u062d Priestley \u0643\u064a\u0641 \u064a\u062d\u0645\u064a \u0627\u0644\u0627\u0645\u062a\u064a\u0627\u0632 \u0627\u0644\u0637\u0628\u0642\u064a \u0627\u0644\u0623\u062b\u0631\u064a\u0627\u0621 \u0645\u0646 \u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629\u060c \u0628\u064a\u0646\u0645\u0627 \u064a\u0633\u062d\u0642 \u0627\u0644\u0644\u064a \u0645\u0627 \u0639\u0646\u062f\u0647\u0645 \u0633\u0644\u0637\u0629.',
    },
    {
      title: 'Gender',
      titleAr:
        '\u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a',
      body: 'Eva\u2019s experiences highlight the double oppression of being both working-class and female in 1912. She is sacked from a factory, dismissed from a shop, used as a mistress, and denied charitable help when pregnant. Priestley shows how patriarchal power allows men like Gerald, Eric and Alderman Meggarty to exploit women with impunity.',
      bodyAr:
        '\u062a\u062c\u0627\u0631\u0628 Eva \u062a\u0643\u0634\u0641 \u0627\u0644\u0642\u0647\u0631 \u0627\u0644\u0645\u0632\u062f\u0648\u062c \u0627\u0644\u0644\u064a \u062a\u0639\u0627\u0646\u064a\u0647 \u0627\u0644\u0645\u0631\u0623\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0641\u064a 1912. \u062a\u064f\u0637\u0631\u062f \u0645\u0646 \u0627\u0644\u0645\u0635\u0646\u0639\u060c \u0648\u062a\u064f\u0641\u0635\u0644 \u0645\u0646 \u0627\u0644\u0645\u062d\u0644\u060c \u0648\u062a\u064f\u0633\u062a\u0639\u0645\u0644 \u0643\u0639\u0634\u064a\u0642\u0629\u060c \u0648\u062a\u064f\u062d\u0631\u0645 \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u062e\u064a\u0631\u064a\u0629 \u0648\u0647\u064a \u062d\u0627\u0645\u0644. \u064a\u0628\u064a\u0651\u0646 Priestley \u0643\u064a\u0641 \u062a\u0633\u0645\u062d \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0623\u0628\u0648\u064a\u0629 \u0644\u0631\u062c\u0627\u0644 \u0645\u062b\u0644 Gerald \u0648 Eric \u0648 Alderman Meggarty \u0628\u0627\u0633\u062a\u063a\u0644\u0627\u0644 \u0627\u0644\u0646\u0633\u0627\u0621 \u0628\u062f\u0648\u0646 \u0623\u064a \u0639\u0642\u0627\u0628.',
    },
    {
      title: 'Age versus youth',
      titleAr:
        '\u0627\u0644\u0633\u0646 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0634\u0628\u0627\u0628',
      body: 'The generational divide is central to the play\u2019s optimism. Arthur and Sybil refuse to accept responsibility and learn nothing; Sheila and Eric are genuinely changed by the evening. Priestley, writing for a 1945 audience, was asking the younger generation to reject their parents\u2019 values and build a fairer post-war world.',
      bodyAr:
        '\u0627\u0644\u0641\u062c\u0648\u0629 \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u064a\u0627\u0644 \u0645\u062d\u0648\u0631 \u0627\u0644\u062a\u0641\u0627\u0624\u0644 \u0641\u064a \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629. Arthur \u0648 Sybil \u064a\u0631\u0641\u0636\u0648\u0646 \u064a\u062a\u0642\u0628\u0651\u0644\u0648\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0648\u0645\u0627 \u064a\u062a\u0639\u0644\u0651\u0645\u0648\u0646 \u0634\u064a\u061b \u0628\u064a\u0646\u0645\u0627 Sheila \u0648 Eric \u064a\u062a\u063a\u064a\u0651\u0631\u0648\u0646 \u0641\u0639\u0644\u0627\u064b \u0628\u0639\u062f \u0647\u0627\u064a \u0627\u0644\u0623\u0645\u0633\u064a\u0629. Priestley\u060c \u0627\u0644\u0644\u064a \u064a\u0643\u062a\u0628 \u0644\u062c\u0645\u0647\u0648\u0631 1945\u060c \u0643\u0627\u0646 \u064a\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0623\u0635\u063a\u0631 \u0625\u0646\u0647 \u064a\u0631\u0641\u0636 \u0642\u064a\u0645 \u0622\u0628\u0627\u0621\u0647 \u0648\u064a\u0628\u0646\u064a \u0639\u0627\u0644\u0645 \u0645\u0627 \u0628\u0639\u062f \u0627\u0644\u062d\u0631\u0628 \u0628\u0635\u0648\u0631\u0629 \u0623\u0639\u062f\u0644.',
    },
    {
      title: 'Guilt and responsibility',
      titleAr:
        '\u0627\u0644\u0630\u0646\u0628 \u0648\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629',
      body: 'Each character reacts differently to their guilt. Sheila is openly remorseful, Eric is anguished, Gerald is evasive, Sybil is defiant and Arthur is concerned only with public reputation. Priestley uses these contrasting responses to test his audience: which reaction do you recognise in yourself?',
      bodyAr:
        '\u0643\u0644 \u0634\u062e\u0635\u064a\u0629 \u062a\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0630\u0646\u0628 \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629. Sheila \u0646\u0627\u062f\u0645\u0629 \u0628\u0635\u0631\u0627\u062d\u0629\u060c Eric \u0645\u062a\u0639\u0630\u0650\u0651\u0628\u060c Gerald \u0645\u062a\u0647\u0631\u0651\u0628\u060c Sybil \u0645\u062a\u062d\u062f\u0651\u064a\u0629\u060c \u0648 Arthur \u0645\u0627 \u064a\u0647\u0645\u0651\u0647 \u0625\u0644\u0627 \u0633\u0645\u0639\u062a\u0647 \u0627\u0644\u0639\u0627\u0645\u0629. \u064a\u0633\u062a\u0639\u0645\u0644 Priestley \u0647\u0630\u064a \u0627\u0644\u0631\u062f\u0648\u062f \u0627\u0644\u0645\u062a\u0628\u0627\u064a\u0646\u0629 \u0639\u0634\u0627\u0646 \u064a\u062e\u062a\u0628\u0631 \u062c\u0645\u0647\u0648\u0631\u0647: \u0634\u0646\u0648 \u0627\u0644\u0631\u062f \u0627\u0644\u0644\u064a \u062a\u0634\u0648\u0641\u0647 \u0641\u064a \u0646\u0641\u0633\u0643 \u0623\u0646\u062a\u061f',
    },
    {
      title: 'Power',
      titleAr: '\u0627\u0644\u0633\u0644\u0637\u0629',
      body: 'Power operates through wealth, gender, age and social position throughout the play. Birling has the power to fire workers; Sybil has the power to deny charity; Gerald and Eric have the power to exploit a vulnerable woman. The Inspector temporarily inverts these hierarchies, subjecting the powerful to moral scrutiny they have never before faced.',
      bodyAr:
        '\u062a\u0639\u0645\u0644 \u0627\u0644\u0633\u0644\u0637\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062b\u0631\u0648\u0629 \u0648\u0627\u0644\u0646\u0648\u0639 \u0648\u0627\u0644\u0633\u0646\u0651 \u0648\u0627\u0644\u0645\u0643\u0627\u0646\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0639\u0644\u0649 \u0637\u0648\u0644 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629. \u0639\u0646\u062f Birling \u0627\u0644\u0633\u0644\u0637\u0629 \u0639\u0634\u0627\u0646 \u064a\u0637\u0631\u062f \u0627\u0644\u0639\u0645\u0627\u0644\u061b \u0648\u0639\u0646\u062f Sybil \u0627\u0644\u0633\u0644\u0637\u0629 \u0639\u0634\u0627\u0646 \u062a\u0631\u0641\u0636 \u0627\u0644\u0625\u062d\u0633\u0627\u0646\u061b \u0648\u0639\u0646\u062f Gerald \u0648 Eric \u0627\u0644\u0633\u0644\u0637\u0629 \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u063a\u0644\u0651\u0648\u0646 \u0627\u0645\u0631\u0623\u0629 \u0636\u0639\u064a\u0641\u0629. \u064a\u0642\u0644\u0628 \u0627\u0644\u0645\u0641\u062a\u0634 \u0647\u0630\u064a \u0627\u0644\u0647\u0631\u0645\u064a\u0627\u062a \u0628\u0634\u0643\u0644 \u0645\u0624\u0642\u062a\u060c \u0648\u064a\u064f\u062e\u0636\u0639 \u0627\u0644\u0623\u0642\u0648\u064a\u0627\u0621 \u0644\u062a\u062f\u0642\u064a\u0642 \u0623\u062e\u0644\u0627\u0642\u064a \u0645\u0627 \u0648\u0627\u062c\u0647\u0648\u0647 \u0642\u0628\u0644.',
    },
  ],
  historicalContext: [
    'Priestley set the play in 1912, a year of imperial confidence before the First World War shattered the old European order. The Edwardian upper-middle class that the Birlings represent believed in progress, empire and the superiority of the free market. Priestley chose this date so the audience would recognise that every one of Birling\u2019s confident predictions - about peace, the Titanic, and the impossibility of strikes - turned out to be disastrously wrong.',
    'Priestley was a committed democratic socialist who had fought in the First World War and witnessed the unemployment and poverty of the 1930s. His wartime radio broadcasts, the Postscripts, reached millions and argued that Britain should never return to the inequality of the pre-war years. An Inspector Calls is the dramatic expression of the same argument: that unchecked capitalism destroys lives and that society must take collective responsibility for its weakest members.',
    'The play was written in 1945, the year the Labour government of Clement Attlee was elected with a landslide majority. Attlee\u2019s government created the National Health Service, expanded national insurance and built the modern welfare state. Priestley\u2019s audience would have understood the Inspector\u2019s closing speech as a direct endorsement of these reforms - a warning that the alternative was a return to the cruelty of 1912.',
    'Priestley uses dramatic irony extensively because the audience knows what the characters do not. When Birling calls the Titanic unsinkable and dismisses the threat of war, the audience recognises his arrogance and short-sightedness. This technique turns the play into an argument about hindsight and foresight: the audience is asked to learn from history in a way the Birlings refuse to.',
  ],
  historicalContextAr: [
    'حطّ Priestley أحداث المسرحية في 1912، اللي كانت سنة ثقة إمبراطورية قبل ما تحطّم الحرب العالمية الأولى النظام الأوروبي القديم. الطبقة الإدواردية الوسطى-العليا اللي يمثّلها آل Birling كانت تؤمن بالتقدّم والإمبراطورية وتفوّق السوق الحر. اختار Priestley هذا التاريخ عشان الجمهور يلاحظ إن كل توقّع واثق من توقعات Birling - عن السلام، وعن Titanic، وعن استحالة الإضرابات - طلع غلط غلطة كارثية.',
    'Priestley كان اشتراكياً ديمقراطياً ملتزماً، قاتل في الحرب العالمية الأولى وشاف البطالة والفقر في الثلاثينات. إذاعاته في زمن الحرب، الـ Postscripts، وصلت ملايين، وكان يحاجج إن بريطانيا ما تلازم ترجع للتفاوت اللي كان قبل الحرب. An Inspector Calls هي التعبير الدرامي لنفس الحجّة: إن الرأسمالية المفلوتة تدمّر الأرواح، وإن المجتمع لازم يتحمّل المسؤولية الجماعية عن أضعف أفراده.',
    'كُتبت المسرحية في 1945، السنة اللي انتُخبت فيها حكومة العمال برئاسة Clement Attlee بأغلبية كاسحة. حكومة Attlee أسّست National Health Service ووسّعت التأمين الوطني وبنت دولة الرفاه الحديثة. جمهور Priestley كان راح يفهم خطبة المفتش الختامية كتأييد مباشر لهذي الإصلاحات - وكتحذير إن البديل هو الرجوع لقسوة 1912.',
    'يستعمل Priestley السخرية الدرامية بكثرة لأن الجمهور يعرف اللي ما تعرفه الشخصيات. لمّا يسمّي Birling السفينة Titanic "لا تغرق" ويرفض تهديد الحرب، يلاحظ الجمهور غروره وقصر نظره. هذي التقنية تحوّل المسرحية إلى حجة عن النظر للخلف والنظر للأمام: الجمهور يُطلب منه يتعلّم من التاريخ بطريقة آل Birling يرفضون يتعلّمونها.',
  ],
  quotations: [
    {
      quote: '"We are members of one body. We are responsible for each other."',
      who: 'Inspector Goole - Act 3',
      whoAr: 'Inspector Goole \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'The play\u2019s thesis statement, delivered as the Inspector\u2019s final warning. It echoes the communal ethos of the 1945 welfare-state moment.',
      analysisAr:
        '\u0647\u0630\u064a \u0623\u0637\u0631\u0648\u062d\u0629 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u064a\u0629\u060c \u062a\u062c\u064a \u0643\u062a\u062d\u0630\u064a\u0631 \u062e\u062a\u0627\u0645\u064a \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0634. \u062a\u0631\u062f\u0651\u062f \u0631\u0648\u062d \u0627\u0644\u062c\u0645\u0627\u0639\u0629 \u0641\u064a \u0644\u062d\u0638\u0629 \u062f\u0648\u0644\u0629 \u0627\u0644\u0631\u0641\u0627\u0647 1945.',
    },
    {
      quote: '"Fire and blood and anguish."',
      who: 'Inspector Goole - Act 3',
      whoAr: 'Inspector Goole - الفصل 3',
      analysis:
        'A prophetic reference to the two world wars the audience already knows about, lending the Inspector an almost supernatural authority.',
      analysisAr:
        'إشارة نبوءية للحربين العالميتين اللي يعرفهن الجمهور أصلاً، تمنح المفتش سلطة شبه خارقة للطبيعة.',
    },
    {
      quote: '"The Titanic \u2014 unsinkable, absolutely unsinkable."',
      who: 'Arthur Birling - Act 1',
      whoAr: 'Arthur Birling \u2014 \u0627\u0644\u0641\u0635\u0644 1',
      analysis:
        'Dramatic irony at its sharpest. Birling\u2019s certainty immediately marks him as a man whose judgment cannot be trusted.',
      analysisAr:
        '\u0633\u062e\u0631\u064a\u0629 \u062f\u0631\u0627\u0645\u064a\u0629 \u0641\u064a \u0623\u062d\u062f\u0651 \u0635\u0648\u0631\u0647\u0627. \u062b\u0642\u0629 Birling \u062a\u0639\u0644\u0651\u0645\u0647 \u0639\u0644\u0649 \u0637\u0648\u0644 \u0643\u0631\u062c\u0651\u0627\u0644 \u0645\u0627 \u064a\u064f\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u062d\u0643\u0645\u0647.',
    },
    {
      quote:
        '"If we were all responsible for everything that happened to everybody \u2026 it would be very awkward."',
      who: 'Arthur Birling - Act 3',
      whoAr: 'Arthur Birling - الفصل 3',
      analysis:
        'Birling reduces a moral question to a practical inconvenience, revealing the hollowness of capitalist individualism.',
      analysisAr:
        'يختزل Birling سؤالاً أخلاقياً إلى مجرّد إزعاج عملي، ويكشف بهالطريقة فراغ الفردانية الرأسمالية.',
    },
    {
      quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
      who: 'Sheila Birling - Act 1',
      whoAr: 'Sheila Birling \u2014 \u0627\u0644\u0641\u0635\u0644 1',
      analysis:
        'Sheila\u2019s awakening to social responsibility, phrased simply but powerfully against her father\u2019s economic logic.',
      analysisAr:
        '\u0635\u062d\u0648\u0629 Sheila \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629\u060c \u062a\u0635\u064a\u063a\u0647\u0627 \u0628\u0643\u0644\u0645\u0627\u062a \u0628\u0633\u064a\u0637\u0629 \u0644\u0643\u0646 \u0642\u0648\u064a\u0629 \u0641\u064a \u0645\u0648\u0627\u062c\u0647\u0629 \u0645\u0646\u0637\u0642 \u0623\u0628\u0648\u0647\u0627 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a.',
    },
    {
      quote: '"I\u2019ll never, never do it again to anybody."',
      who: 'Sheila Birling - Act 1',
      whoAr: 'Sheila Birling - الفصل 1',
      analysis:
        'Sheila is the first character to accept guilt fully, modelling the moral change Priestley wants from his audience.',
      analysisAr:
        'Sheila هي أول شخصية تتقبّل الذنب كاملاً، وتقدّم نموذج التحوّل الأخلاقي اللي يبغاه Priestley من جمهوره.',
    },
    {
      quote: '"You\u2019re not the kind of father a chap could go to."',
      who: 'Eric Birling - Act 3',
      whoAr: 'Eric Birling \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'Eric\u2019s accusation exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority.',
      analysisAr:
        '\u0627\u062a\u0647\u0627\u0645 Eric \u064a\u0641\u0636\u062d \u0627\u0644\u0625\u0641\u0644\u0627\u0633 \u0627\u0644\u0639\u0627\u0637\u0641\u064a \u0627\u0644\u0644\u064a \u062a\u062d\u062a \u0633\u0644\u0637\u0629 Birling \u0627\u0644\u0623\u0628\u0648\u064a\u0629.',
    },
    {
      quote: '"We don\u2019t live alone. We are members of one body."',
      who: 'Inspector Goole - Act 3',
      whoAr: 'Inspector Goole \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'A compressed restatement of the play\u2019s core socialist message, linking individual action to communal consequence.',
      analysisAr:
        '\u0625\u0639\u0627\u062f\u0629 \u0635\u064a\u0627\u063a\u0629 \u0645\u0643\u062b\u0651\u0641\u0629 \u0644\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u064a\u0629 \u0627\u0644\u062c\u0648\u0647\u0631\u064a\u0629 \u0644\u0644\u0645\u0633\u0631\u062d\u064a\u0629\u060c \u062a\u0631\u0628\u0637 \u0628\u064a\u0646 \u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0641\u0631\u062f\u064a \u0648\u0627\u0644\u0639\u0627\u0642\u0628\u0629 \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629.',
    },
    {
      quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
      who: 'Inspector Goole - Act 1',
      whoAr: 'Inspector Goole \u2014 \u0627\u0644\u0641\u0635\u0644 1',
      analysis:
        'The Inspector directly challenges Birling\u2019s belief that wealth entitles him to immunity from scrutiny.',
      analysisAr:
        '\u0627\u0644\u0645\u0641\u062a\u0634 \u064a\u062a\u062d\u062f\u0651\u0649 \u0631\u0623\u0633\u0627\u064b \u0642\u0646\u0627\u0639\u0629 Birling \u0628\u0625\u0646 \u0627\u0644\u062b\u0631\u0648\u0629 \u062a\u0633\u062a\u062d\u0642\u0651 \u062d\u0635\u0627\u0646\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629.',
    },
    {
      quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
      who: 'Sheila Birling - Act 3',
      whoAr: 'Sheila Birling \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'Sheila cuts through her parents\u2019 evasion, insisting that the moral lesson matters regardless of the Inspector\u2019s identity.',
      analysisAr:
        'Sheila \u062a\u0642\u0637\u0639 \u062a\u0647\u0631\u0651\u0628 \u0623\u0628\u0648\u0647\u0627 \u0648\u0623\u0645\u0651\u0647\u0627\u060c \u0648\u062a\u0635\u0631\u0651 \u0625\u0646 \u0627\u0644\u062f\u0631\u0633 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a \u064a\u0647\u0645\u0651 \u0628\u063a\u0636\u0651 \u0627\u0644\u0646\u0638\u0631 \u0639\u0646 \u0647\u0648\u064a\u0629 \u0627\u0644\u0645\u0641\u062a\u0634.',
    },
    {
      quote: '"I was quite justified."',
      who: 'Sybil Birling - Act 2',
      whoAr: 'Sybil Birling \u2014 \u0627\u0644\u0641\u0635\u0644 2',
      analysis:
        'Sybil\u2019s stubborn self-righteousness. She refuses to accept guilt even when the evidence is overwhelming.',
      analysisAr:
        '\u0635\u0644\u0627\u0628\u0629 \u0628\u0650\u0631\u0651 Sybil \u0627\u0644\u0630\u0627\u062a\u064a. \u062a\u0631\u0641\u0636 \u062a\u062a\u0642\u0628\u0651\u0644 \u0627\u0644\u0630\u0646\u0628 \u062d\u062a\u0649 \u0644\u0645\u0651\u0627 \u062a\u0643\u0648\u0646 \u0627\u0644\u0623\u062f\u0644\u0629 \u0642\u0627\u0637\u0639\u0629.',
    },
    {
      quote: '"Girls of that class\u2014"',
      who: 'Sybil Birling - Act 2',
      whoAr: 'Sybil Birling \u2014 \u0627\u0644\u0641\u0635\u0644 2',
      analysis:
        'An interrupted phrase that exposes Sybil\u2019s deep-rooted class prejudice as instinctive and unexamined.',
      analysisAr:
        '\u0639\u0628\u0627\u0631\u0629 \u0645\u0642\u0637\u0648\u0639\u0629 \u062a\u0641\u0636\u062d \u0627\u0644\u062a\u062d\u064a\u0651\u0632 \u0627\u0644\u0637\u0628\u0642\u064a \u0627\u0644\u0639\u0645\u064a\u0642 \u0639\u0646\u062f Sybil \u0643\u062a\u062d\u064a\u0651\u0632 \u063a\u0631\u064a\u0632\u064a \u0645\u0627 \u064a\u062e\u0636\u0639 \u0644\u0623\u064a \u062a\u0623\u0645\u0651\u0644.',
    },
    {
      quote: '"I didn\u2019t feel about her as she felt about me."',
      who: 'Gerald Croft - Act 2',
      whoAr: 'Gerald Croft \u2014 \u0627\u0644\u0641\u0635\u0644 2',
      analysis:
        'Gerald\u2019s admission reveals the power imbalance in his relationship with Daisy: he could leave, she could not.',
      analysisAr:
        '\u0627\u0639\u062a\u0631\u0627\u0641 Gerald \u064a\u0643\u0634\u0641 \u0627\u062e\u062a\u0644\u0627\u0644 \u0627\u0644\u0633\u0644\u0637\u0629 \u0641\u064a \u0639\u0644\u0627\u0642\u062a\u0647 \u0645\u0639 Daisy: \u0647\u0648 \u064a\u0642\u062f\u0631 \u064a\u0645\u0634\u064a\u060c \u0648\u0647\u064a \u0645\u0627 \u062a\u0642\u062f\u0631.',
    },
    {
      quote:
        '"The way some of these cranks talk and write now, you\u2019d think everybody has to look after everybody else."',
      who: 'Arthur Birling - Act 1',
      whoAr: 'Arthur Birling - الفصل 1',
      analysis:
        'Birling dismisses socialism before the Inspector arrives, setting up the dramatic reversal that follows.',
      analysisAr:
        'Birling يرفض الاشتراكية قبل ما يوصل المفتش، ويهيّئ بهذا الطريق الانقلاب الدرامي اللي يجي بعده.',
    },
    {
      quote:
        '"One Eva Smith has gone \u2014 but there are millions and millions and millions of Eva Smiths and John Smiths still left with us."',
      who: 'Inspector Goole - Act 3',
      whoAr: 'Inspector Goole \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'The Inspector universalises Eva\u2019s suffering, turning a single case into a political argument about systemic injustice. The tripled "millions" insists on scale: this is not exceptional suffering but structural.',
      analysisAr:
        '\u0627\u0644\u0645\u0641\u062a\u0634 \u064a\u0639\u0645\u0651\u0645 \u0645\u0639\u0627\u0646\u0627\u0629 Eva\u060c \u0648\u064a\u062d\u0648\u0651\u0644 \u062d\u0627\u0644\u0629 \u0648\u062d\u062f\u0629 \u0625\u0644\u0649 \u062d\u062c\u0629 \u0633\u064a\u0627\u0633\u064a\u0629 \u0639\u0646 \u0627\u0644\u0638\u0644\u0645 \u0627\u0644\u0645\u0645\u0646\u0647\u062c. \u062a\u0643\u0631\u0627\u0631 "millions" \u062b\u0644\u0627\u062b \u0645\u0631\u0627\u062a \u064a\u0635\u0631\u0651 \u0639\u0644\u0649 \u0627\u0644\u062d\u062c\u0645: \u0647\u0630\u0627 \u0645\u0648 \u0623\u0644\u0645 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u060c \u0647\u0630\u0627 \u0623\u0644\u0645 \u0628\u0646\u064a\u0648\u064a.',
    },
    {
      quote: '"You began to learn something. And now you\u2019ve stopped."',
      who: 'Sheila Birling - Act 3',
      whoAr: 'Sheila Birling \u2014 \u0627\u0644\u0641\u0635\u0644 3',
      analysis:
        'Sheila accuses Gerald and her parents of moral regression, sharpening the generational divide at the play\u2019s climax.',
      analysisAr:
        'Sheila \u062a\u062a\u0651\u0647\u0645 Gerald \u0648\u0623\u0628\u0648\u0647\u0627 \u0648\u0623\u0645\u0651\u0647\u0627 \u0628\u0627\u0644\u062a\u0631\u0627\u062c\u0639 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u060c \u0648\u062a\u062d\u062f\u0651 \u0627\u0644\u0641\u062c\u0648\u0629 \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u064a\u0627\u0644 \u0641\u064a \u0630\u0631\u0648\u0629 \u0627\u0644\u0645\u0633\u0631\u062d\u064a\u0629.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'aic-1',
    question: 'What event is the Birling family celebrating at the start of the play?',
    type: 'multiple-choice',
    options: [
      "Arthur's knighthood",
      "Sheila's engagement to Gerald",
      "Eric's graduation",
      'A business deal',
    ],
    correctIndex: 1,
    explanation:
      "The play opens with the Birlings celebrating Sheila's engagement to Gerald Croft, the son of a rival industrialist. This occasion of family pride makes the Inspector's revelations all the more devastating.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'aic-2',
    question: 'How did Eva Smith die?',
    type: 'multiple-choice',
    options: [
      'She was murdered',
      'She died in a factory accident',
      'She swallowed disinfectant',
      'She drowned',
    ],
    correctIndex: 2,
    explanation:
      'Eva Smith killed herself by swallowing disinfectant. This painful, desperate method of suicide reflects the extreme suffering she endured after being failed by every member of the Birling family.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'aic-3',
    question: 'Why did Arthur Birling sack Eva Smith from his factory?',
    type: 'multiple-choice',
    options: [
      'She was late to work',
      'She led a strike over pay',
      'She stole from the factory',
      'She argued with customers',
    ],
    correctIndex: 1,
    explanation:
      "Birling sacked Eva for leading a strike demanding higher wages. This reveals his attitude that workers are disposable and profit matters more than people, establishing Priestley's critique of capitalism.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'aic-4',
    question: 'Which character undergoes the most complete moral transformation in the play?',
    type: 'multiple-choice',
    options: ['Arthur Birling', 'Gerald Croft', 'Sheila Birling', 'Sybil Birling'],
    correctIndex: 2,
    explanation:
      "Sheila begins as naive and sheltered but quickly accepts her guilt, sees through Gerald's deception, and challenges her parents' refusal to change. She represents the younger generation Priestley believed could build a better society.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'aic-5',
    question: 'When was An Inspector Calls written, and when is it set?',
    type: 'multiple-choice',
    options: [
      'Written 1912, set 1945',
      'Written 1945, set 1912',
      'Written 1945, set 1945',
      'Written 1912, set 1912',
    ],
    correctIndex: 1,
    explanation:
      "Priestley wrote the play in 1945 but deliberately set it in 1912, before two world wars and the creation of the welfare state. This creates dramatic irony: the audience knows Birling's confident predictions are catastrophically wrong.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'aic-6',
    question: 'What is the significance of Arthur Birling saying the Titanic is "unsinkable"?',
    type: 'multiple-choice',
    options: [
      'It shows he is knowledgeable about ships',
      'It creates dramatic irony that undermines his authority and judgement',
      "It foreshadows Eva's death",
      'It proves he is a reliable narrator',
    ],
    correctIndex: 1,
    explanation:
      "Since the audience knows the Titanic sank in 1912, Birling's confident prediction creates powerful dramatic irony. It signals that his other certainties about capitalism and social stability are equally wrong, undermining everything he says.",
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'aic-7',
    question: 'Why did Sheila have Eva dismissed from Milwards?',
    type: 'multiple-choice',
    options: [
      'Eva was rude to her',
      'Out of jealous spite because a dress suited Eva better',
      'Eva stole from the shop',
      "Sheila's mother told her to",
    ],
    correctIndex: 1,
    explanation:
      'Sheila had Eva dismissed from Milwards out of jealous spite because Eva looked better in a dress. This shows how privilege allows the upper classes to ruin working-class lives on a whim.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'aic-8',
    question: "What was Gerald's relationship with Eva/Daisy Renton?",
    type: 'multiple-choice',
    options: [
      'She was his employee',
      'She was his cousin',
      'He kept her as his mistress',
      'She was his childhood friend',
    ],
    correctIndex: 2,
    explanation:
      'Gerald kept Eva (now calling herself Daisy Renton) as his mistress. Although their relationship contained genuine feeling, he ultimately abandoned her when it suited him, treating her as disposable.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'aic-9',
    question: 'Why is it significant that Inspector Goole\'s name sounds like "ghoul"?',
    type: 'multiple-choice',
    options: [
      'It suggests he is a frightening character',
      'It implies he may be supernatural, acting as a ghostly moral agent',
      'It is a coincidence with no significance',
      'It means he works at night',
    ],
    correctIndex: 1,
    explanation:
      'The name "Goole" puns on "ghoul," suggesting the Inspector may be a supernatural figure - a ghost of the future, a moral conscience, or a divine agent. His mysterious origins are never explained, making him a dramatic device for Priestley\'s socialist message.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'aic-10',
    question:
      "What does Sybil Birling's refusal of Eva's charity application reveal about her character?",
    type: 'multiple-choice',
    options: [
      'She is a compassionate but overworked woman',
      'She uses charitable institutions as instruments of class prejudice rather than genuine aid',
      'She did not recognise Eva',
      'She followed the committee rules fairly',
    ],
    correctIndex: 1,
    explanation:
      'Sybil refused Eva help because she used the name "Birling," which offended Sybil. Priestley uses her to expose how charitable institutions could be instruments of class prejudice, punishing the poor rather than helping them.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'aic-11',
    question: "How does Eric contribute to Eva's downfall?",
    type: 'multiple-choice',
    options: [
      'He fired her from a job',
      'He forced himself on her, got her pregnant, and stole money to support her',
      'He reported her to the police',
      'He refused to marry her',
    ],
    correctIndex: 1,
    explanation:
      "Eric forced himself on Eva when drunk, got her pregnant, and then stole money from his father's firm to support her. His alcoholism hints at deeper dysfunction beneath the Birling family's polished exterior.",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'aic-12',
    question: 'What happens at the very end of the play?',
    type: 'multiple-choice',
    options: [
      'The family celebrates',
      'A real inspector phones to say he is on his way to investigate a suicide',
      'Eva is found alive',
      'Gerald calls off the engagement',
    ],
    correctIndex: 1,
    explanation:
      'The telephone rings and a real inspector announces he is on his way. The cycle begins again, suggesting the Birlings cannot escape their responsibility. This ending gives the play its devastating final twist.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'aic-13',
    question:
      'What is the dramatic purpose of the play being set in a single room on a single evening?',
    type: 'multiple-choice',
    options: [
      'It saves money on set design',
      'It creates claustrophobic tension and follows the classical unities of time and place',
      'It shows the family never leaves home',
      'It was required by the theatre company',
    ],
    correctIndex: 1,
    explanation:
      "The single setting creates intense claustrophobia. There is no escape from the Inspector's questioning. Priestley follows the classical unities of time and place, tightening the dramatic tension as each revelation peels back the family's respectable surface.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'aic-14',
    question:
      'What does Priestley suggest about the difference between the older and younger generations?',
    type: 'multiple-choice',
    options: [
      'The older generation is wiser',
      'Both generations are equally guilty but the younger generation can still change',
      'Only the young are guilty',
      'The older generation accepts responsibility more readily',
    ],
    correctIndex: 1,
    explanation:
      "While both generations share guilt, Sheila and Eric accept responsibility and are horrified by their parents' refusal to change. Arthur and Sybil celebrate their apparent escape. Priestley's message is that the younger generation can build a better, more equal society if they learn from these mistakes.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'aic-15',
    question:
      "Priestley was a committed socialist. How does the Inspector's final speech reflect this?",
    type: 'multiple-choice',
    options: [
      'He calls for higher taxes',
      'He argues that "we are members of one body" and must be responsible for each other',
      'He asks the family to donate to charity',
      'He warns about the dangers of trade unions',
    ],
    correctIndex: 1,
    explanation:
      'The Inspector\'s speech that "we are members of one body" is Priestley\'s direct socialist argument for collective responsibility. Written in 1945, it speaks to the post-war audience about building the welfare state and rejecting the selfish individualism Birling represents.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'aic-16',
    question: 'Why is Eva Smith never seen on stage?',
    type: 'multiple-choice',
    options: [
      'The actress was unavailable',
      'Her absence makes her a symbol of all exploited workers, not just one individual',
      'Priestley forgot to include her',
      'It was too expensive to hire another actor',
    ],
    correctIndex: 1,
    explanation:
      "Eva never appears because she represents every exploited worker, every abandoned woman, every person failed by the class system. Whether she is one girl or several is deliberately ambiguous - Priestley's point is that countless Evas exist and their suffering is collective.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'aic-17',
    question: 'How does Priestley use the 1912 setting to create dramatic irony about capitalism?',
    type: 'multiple-choice',
    options: [
      '1912 was the best year for capitalism',
      "Birling's confident predictions about progress and peace are known by the audience to be catastrophically wrong",
      'The audience would not recognise the date',
      'It makes the play feel old-fashioned',
    ],
    correctIndex: 1,
    explanation:
      'Birling confidently predicts there will be no war and that workers should look after themselves. The 1945 audience, having lived through two world wars and the creation of the welfare state, knows he is spectacularly wrong. This undermines his capitalist ideology and makes his authority a target for critique.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'aic-18',
    question:
      'What is the effect of Gerald leading the effort to discredit the Inspector after he leaves?',
    type: 'multiple-choice',
    options: [
      'It shows Gerald is a detective',
      'It aligns him with the older generation, choosing self-preservation over moral growth',
      'It proves the Inspector was fake',
      'It shows Gerald is the smartest character',
    ],
    correctIndex: 1,
    explanation:
      "Gerald's eagerness to prove the Inspector was a fraud reveals his alignment with the older generation's values. Rather than accepting responsibility like Sheila and Eric, he chooses self-preservation, showing that class loyalty overrides personal conscience.",
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'aic-19',
    question:
      'How does Priestley use the structure of the play to reinforce his message about collective responsibility?',
    type: 'multiple-choice',
    options: [
      'Each act focuses on a different theme',
      "The chain of responsibility is revealed link by link, showing every Birling contributed to one woman's destruction",
      'The acts get progressively shorter',
      'The play uses flashbacks',
    ],
    correctIndex: 1,
    explanation:
      "The Inspector reveals each family member's guilt one by one, building a chain of responsibility. This structure shows that Eva's death was not caused by any single person but by the cumulative effect of a selfish society. Each revelation makes the net of guilt wider.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'aic-20',
    question: 'What role does Edna the maid play in the wider themes of the play?',
    type: 'multiple-choice',
    options: [
      'She provides comic relief',
      'Her silent presence is a constant reminder of the class divide inside the Birling household',
      "She is the Inspector's secret ally",
      'She represents Eva Smith',
    ],
    correctIndex: 1,
    explanation:
      'Edna has very few lines, but her quiet presence throughout the evening is a constant reminder of the class divide. She serves the family who treat people like Eva as disposable, and her deference underlines the power imbalance the play exposes.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Social Responsibility',
    summary:
      "Priestley's central argument is that we are all responsible for each other, not just for ourselves.",
    keyPoints: [
      'The Inspector\'s final speech: "We are members of one body"',
      "Each Birling contributed to Eva's death through selfish actions",
      'Written in 1945, the play argues for the welfare state and collective care',
      "Birling's capitalist individualism is presented as morally bankrupt",
      'Eva represents all exploited workers, making her suffering universal',
    ],
  },
  {
    topic: 'Class and Privilege',
    summary:
      'The play exposes how the wealthy use their power to exploit and destroy working-class lives.',
    keyPoints: [
      'Birling sacks Eva for demanding fair wages',
      'Sheila uses her social position to have Eva dismissed on a whim',
      "Sybil's charity committee punishes rather than helps the poor",
      'Gerald treats Eva/Daisy as disposable once the affair is over',
      'Eva has no safety net: each rejection pushes her closer to death',
    ],
  },
  {
    topic: 'Generational Divide',
    summary:
      "Priestley contrasts the older Birlings' refusal to change with the younger generation's capacity for growth.",
    keyPoints: [
      'Sheila and Eric accept guilt; Arthur and Sybil deny it',
      'Gerald aligns with the older generation by trying to discredit the Inspector',
      "Priestley's hope lies with the young: they can build a fairer society",
      'The older generation prioritises reputation over moral truth',
      'The final phone call suggests those who refuse to learn will face consequences again',
    ],
  },
  {
    topic: 'Dramatic Irony (1912 vs 1945)',
    summary: 'Setting the play in 1912 while writing in 1945 creates devastating dramatic irony.',
    keyPoints: [
      'Birling predicts the Titanic is "unsinkable" and war is impossible',
      'The 1945 audience knows these predictions are spectacularly wrong',
      "This undermines Birling's capitalist ideology throughout the play",
      'Priestley uses hindsight to argue for social change',
      'The gap between 1912 and 1945 makes the need for collective responsibility urgent',
    ],
  },
  {
    topic: 'Gender and Power',
    summary: 'Women in the play are controlled by men and punished by a patriarchal system.',
    keyPoints: [
      'Eva is exploited by men at every stage: sacked, used, abandoned, refused help',
      'Sheila is initially defined by her engagement to Gerald',
      'Sybil enforces patriarchal values by blaming Eva for her own suffering',
      "Eric's assault on Eva goes unpunished because of his class and gender",
      'Priestley shows how gender and class intersect to destroy vulnerable women',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Priestley present the theme of social responsibility in An Inspector Calls?',
  'How does Priestley use the character of Sheila to convey his message about the younger generation?',
  "How does Priestley use dramatic irony to undermine Arthur Birling's views?",
  'How does Priestley present the Inspector as a dramatic device for his socialist message?',
  'How does Priestley explore the treatment of women through the character of Eva Smith?',
]

export default async function AnInspectorCallsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="An Inspector Calls - Complete GCSE Study Guide"
        description="In-depth study guide for An Inspector Calls covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <LearningResourceJsonLd
        name="An Inspector Calls revision guide"
        description="GCSE-aligned study guide for Priestley's An Inspector Calls, covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/an-inspector-calls"
        about="An Inspector Calls"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
          },
        ]}
      />
      <section aria-labelledby="aic-direct-answer" className="mx-auto mt-8 max-w-3xl px-4">
        <h2 id="aic-direct-answer" className="sr-only">
          An Inspector Calls: quick summary
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">An Inspector Calls</strong> is a 1945 play by J.B.
          Priestley, set in 1912. As the wealthy Birling family celebrate an engagement, the
          mysterious Inspector Goole arrives to investigate the suicide of a young working-class
          woman, Eva Smith, and reveals that every family member helped drive her to her death. It
          is a morality play arguing that "we are members of one body" and responsible for one
          another, studied across the AQA, Edexcel, OCR, Eduqas and Edexcel IGCSE specifications.
        </p>
      </section>
      <TextStudyHub
        textName="An Inspector Calls"
        textType="play"
        examBoard={userBoardLabel}
        basePath="/revision/texts/an-inspector-calls"
        subPages={[
          {
            id: 'acts',
            href: '/revision/texts/an-inspector-calls/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/an-inspector-calls/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/an-inspector-calls/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/an-inspector-calls/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/an-inspector-calls/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/an-inspector-calls/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Priestley present the theme of social responsibility in An Inspector Calls?',
          'How does Priestley use the character of Sheila to convey his message?',
          'How does Priestley explore the theme of class in An Inspector Calls?',
          'How does Priestley present the Inspector as a dramatic device?',
          'How does Priestley use the generational divide to convey his ideas?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="An Inspector Calls"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <section className="mx-auto mt-12 max-w-3xl px-4">
        <GeoFaq faqs={AIC_FAQS} heading="An Inspector Calls: frequently asked questions" />
      </section>
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations (&le;15 words each) reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational
        study. <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text available from
        your school or local library.
      </p>
    </>
  )
}
