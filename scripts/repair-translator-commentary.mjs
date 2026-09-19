// ─── Replace the strings where the translator talked to itself ──────────────
//
// 63 entries across 33 bilingual content.ts files had the translation model's
// own commentary written into the `ar` field and rendered to readers. Live on
// /ar/analysis/ai-feedback-head-to-head before this ran:
//
//   "(Note: There seems to be a mix-up in the last part of the translation due
//    to an untranslated phrase "academic register". Here is the corrected
//    version without commentary or preamble as per your instructions.)"
//
// Others carried Russian ("параграф", "пунктуация"), Thai
// ("โครงสร้างห้าส่วน"), Vietnamese ("bằng"), French ("différence") or Spanish
// ("género") where Arabic should have been.
//
// Stripping the commentary automatically was tried first and rejected: it left
// the surrounding sentence in three alphabets, which is not a translation
// either. These are hand-written instead, keyed by file and entry id so each
// replacement is exact.
//
// Modern Standard Arabic, which is what exam revision copy should be. The
// generated files claim a Khaleeji register, but the entries that attempted it
// are the broken ones. Titles, board names and AO codes stay in Latin, which is
// the convention these files already state.
//
//   node scripts/repair-translator-commentary.mjs --write

import { readFileSync, writeFileSync } from 'node:fs'

const R = 'src/app/resources'
const LANG = R + '/english-language'
const LIT = R + '/english-literature'
const NOTES = R + '/revision-notes'

/** file :: entry id -> the Arabic it should have said. */
const REPAIRS = {
  [`src/app/analysis/ai-feedback-head-to-head/content.ts::s8`]:
    'حوّل ثلاث عبارات غير رسمية إلى أسلوب أكاديمي.',
  [`src/app/legal/privacy-qatar-supplement/content.ts::s15`]: 'شبكة Cloudflare العالمية.',

  [`${LANG}/aqa/grade-boundaries/content.ts::s22`]:
    'إملاء وعلامات ترقيم صحيحة في معظمها مع أخطاء طفيفة فقط.',
  [`${LANG}/aqa/grade-boundaries/content.ts::s26`]: 'استُخدمت المصطلحات المتخصصة بدقة في معظمها.',
  [`${LANG}/aqa/grade-boundaries/content.ts::s27`]:
    'قد يفتقر التحليل إلى العمق أو الاتساق - بعض النقاط مطوّرة جيدا وأخرى سطحية.',
  [`${LANG}/aqa/grade-boundaries/content.ts::s28`]:
    'الكتابة واضحة وتوصل المعنى بفعالية مع بعض اللحظات الجاذبة.',

  [`${LANG}/aqa/paper-2/content.ts::s11`]:
    'اقرأ الجزء المحدد من النص بعناية قبل النظر في العبارات.',
  [`${LANG}/aqa/paper-2/content.ts::s13`]:
    'إذا ظللت أكثر من أربعة مربعات فلن تحصل على أي نقاط. تأكد من اختيار أربعة بالضبط.',
  [`${LANG}/aqa/paper-2/content.ts::s16`]: 'عبارات صحيحة بشكل عام لكن النص لا يدعمها.',
  [`${LANG}/aqa/paper-2/content.ts::s47`]: 'البنية المتناوبة (موصى بها)',
  [`${LANG}/aqa/paper-2/content.ts::s49`]: 'لأوجه التشابه:',
  [`${LANG}/aqa/paper-2/content.ts::s92`]:
    'تجاهل الشكل المطلوب. إذا قال السؤال &ldquo;اكتب خطابا&rdquo; فيجب أن تُقرأ إجابتك كخطاب، بمخاطبة مباشرة وأساليب بلاغية.',

  [`${LANG}/edexcel/grade-boundaries/content.ts::s30`]:
    'قد يفتقر التحليل إلى العمق أو الاتساق - بعض النقاط مطوّرة جيدا وأخرى سطحية.',
  [`${LANG}/edexcel/grade-boundaries/content.ts::s31`]:
    'الكتابة واضحة وتوصل المعنى بفعالية مع بعض اللحظات الجاذبة.',
  [`${LANG}/edexcel/grade-boundaries/content.ts::s55`]:
    'تراكيب جمل بسيطة؛ أخطاء متكررة في الإملاء وعلامات الترقيم تعيق إيصال المعنى.',

  [`${LANG}/edexcel/paper-1/content.ts::s30`]:
    'مفردات بسيطة؛ تراكيب جمل محدودة؛ أخطاء في الإملاء وعلامات الترقيم تعيق المعنى.',
  [`${LANG}/edexcel/paper-1/content.ts::s31`]:
    'محاولة لمراعاة الغرض؛ بعض السمات البنائية؛ يبدأ في جذب القارئ.',
  [`${LANG}/edexcel/paper-1/content.ts::s52`]: 'تنويع تراكيب الجمل:',

  [`${LANG}/ocr/grade-boundaries/content.ts::s22`]:
    'تنوع واسع في تراكيب الجمل مستخدم بوعي لتحقيق أثر.',
  [`${LANG}/ocr/grade-boundaries/content.ts::s23`]:
    'إملاء وعلامات ترقيم وقواعد صحيحة في معظمها مع هفوات طفيفة فقط.',
  [`${LANG}/ocr/grade-boundaries/content.ts::s27`]: 'استُخدمت المصطلحات المتخصصة بدقة في معظمها.',
  [`${LANG}/ocr/grade-boundaries/content.ts::s29`]:
    'الكتابة توصل المعنى بفعالية مع بعض اللحظات الجاذبة ووعي بالجمهور.',
  [`${LANG}/ocr/grade-boundaries/content.ts::s32`]:
    'بعض التنوع في تراكيب الجمل واستخدام واعٍ لأنواع الجمل.',

  [`${LANG}/wjec/grade-boundaries/content.ts::s14`]:
    'اقتباسات مختارة بعناية مع استكشاف واف للغة والبنية.',
  [`${LANG}/wjec/grade-boundaries/content.ts::s22`]:
    'إملاء وعلامات ترقيم صحيحة في معظمها مع أخطاء طفيفة فقط.',
  [`${LANG}/wjec/grade-boundaries/content.ts::s27`]:
    'قد يفتقر التحليل إلى العمق أو الاتساق - بعض النقاط مطوّرة جيدا وأخرى سطحية.',
  [`${LANG}/wjec/grade-boundaries/content.ts::s30`]:
    'تُستخدم الفقرات بفعالية مع بعض الوعي بالبنية.',

  [`${LIT}/aqa/grade-boundaries/content.ts::s9`]:
    'تحليل نقدي مقنع واستكشاف في مقتطف شكسبير والمسرحية ككل.',
  [`${LIT}/aqa/grade-boundaries/content.ts::s28`]:
    'استجابة مشروحة إلى حد ما للنصوص، وإن كانت قد تفتقر إلى الاتساق.',

  [`${LIT}/caie/exam-technique/content.ts::s20`]: 'حدد الصورة الكاملة:',
  [`${LIT}/caie/picnic-at-hanging-rock/content.ts::s25`]: 'الزمن والخلود',
  [`${LIT}/caie/picnic-at-hanging-rock/content.ts::s32`]: 'الجزء (أ) - أسئلة مبنية على مقطع',

  [`${LIT}/edexcel/grade-boundaries/content.ts::s17`]:
    'تحليل واثق للشعر غير المدروس يستكشف الشكل والبنية والاختيارات اللغوية.',
  [`${LIT}/edexcel/grade-boundaries/content.ts::s52`]: 'الورقة 1 - شكسبير وأدب ما بعد 1914 (50%)',
  [`${LIT}/edexcel/poetry/content.ts::s15`]: 'مثل [القصيدة أ]، فإن [القصيدة ب] أيضا...',

  [`${LIT}/ocr/paper-1/content.ts::s14`]: 'رواية Pride and Prejudice',

  [`${LIT}/wjec/grade-boundaries/content.ts::s9`]:
    'استكشاف متطور للشعر غير المدروس يراعي الشكل والبنية واللغة بأصالة.',
  [`${LIT}/wjec/grade-boundaries/content.ts::s17`]:
    'تحليل واثق للشعر غير المدروس يستكشف الشكل والبنية والاختيارات اللغوية.',

  [`${R}/poetry/unseen-poetry/content.ts::s9`]: 'وبالطريقة نفسها، فإن القصيدة ب أيضا...',
  [`${R}/poetry/unseen-poetry/content.ts::s11`]: 'مثل القصيدة أ، تعرض القصيدة الثانية...',

  [`${NOTES}/a-streetcar-named-desire/content.ts::s20`]: 'تناول المسرحية كاملة.',
  [`${NOTES}/antony-and-cleopatra/content.ts::s45`]: 'الشرف هو الدافع في معظم المسرحية',
  [`${NOTES}/frankenstein/content.ts::s37`]: 'الفقرة 4 - والتون بوصفه نقيضا:',
  [`${NOTES}/frankenstein/content.ts::s41`]: 'الفقرة 3 - تحول المخلوق:',
  [`${NOTES}/frankenstein/content.ts::s42`]: 'الفقرة 4 - العرض البنائي:',
  [`${NOTES}/jekyll-and-hyde/content.ts::s24`]: 'كيف يعرض ستيفنسون موضوع الازدواجية؟',
  [`${NOTES}/julius-caesar/content.ts::s21`]: 'تناول المسرحية كاملة.',
  [`${NOTES}/othello/content.ts::s28`]: 'استخدم دائما &ldquo;يعرض شكسبير...&rdquo;',
  [`${NOTES}/romeo-and-juliet/content.ts::s43`]: 'البنية الكوميدية التراجيدية',
  [`${NOTES}/sign-of-four/content.ts::s38`]:
    'سؤال نموذجي 3: كيف يستكشف كونان دويل موضوع الإمبراطورية والاستعمار؟',
  [`${NOTES}/things-fall-apart/content.ts::s40`]:
    'كيف يعرض أتشيبي وصول المسيحية وأثرها في أوموفيا؟',
  [`${NOTES}/things-fall-apart/content.ts::s46`]: 'لا تصوّر مجتمع الإيغبو بصورة مثالية.',
  [`${NOTES}/twelfth-night/content.ts::s27`]: 'تناول المسرحية كاملة.',
  [`${NOTES}/woman-in-black/content.ts::s10`]: 'العقلانية في مقابل ما وراء الطبيعة',

  [`${R}/writing-skills/creative-writing/content.ts::s20`]: 'اجمع بين الحواس',
  [`${R}/writing-skills/creative-writing/content.ts::s34`]:
    'الأفعال المتكررة أو العادات اللاواعية تكشف الشخصية بصدق أكبر من الوصف المباشر.',
  [`${R}/writing-skills/creative-writing/content.ts::s84`]: 'البنية الخماسية (الكتابة السردية)',
  [`${R}/writing-skills/grammar-punctuation/content.ts::s1`]: 'القواعد وعلامات الترقيم',
  [`${R}/writing-skills/persuasive-writing/content.ts::s79`]:
    'بنية دائرية: تبدأ وتنتهي بإحصائية &ldquo;35,000 ساعة&rdquo;',

  [`src/app/revision/texts/macbeth/act-1/content.ts::s31`]:
    'استدعاؤها للأرواح يوازي فعل الساحرات، مما يضعها في صف الشر الخارق للطبيعة.',
  [`src/app/revision/texts/macbeth/act-1/content.ts::s42`]:
    'يبلغ تلاعب الليدي ماكبث بتوقعات النوع الاجتماعي أقوى صوره هنا.',
  [`src/app/revision/texts/macbeth/act-3/content.ts::s29`]:
    'يعقد ماكبث العزم على زيارة الساحرات مرة أخرى، ساعيا إلى الأمان عبر انخراط أعمق في ما وراء الطبيعة.',

  [`src/app/toolkit/revision-builder/content.ts::s8`]: 'الأساليب الأدبية',
}

const write = process.argv.includes('--write')
const byFile = new Map()
for (const key of Object.keys(REPAIRS)) {
  const [file, id] = key.split('::')
  if (!byFile.has(file)) byFile.set(file, [])
  byFile.get(file).push(id)
}

let applied = 0
const failed = []

for (const [file, ids] of byFile) {
  let source
  try {
    source = readFileSync(file, 'utf8')
  } catch {
    failed.push(`${file}: not found`)
    continue
  }
  let next = source

  for (const id of ids) {
    const arabic = REPAIRS[`${file}::${id}`]
    // Match this entry's ar field only, anchored on its own id.
    const pattern = new RegExp('(\\b' + id + ':\\s*\\{[\\s\\S]*?ar:\\s*)`(?:[^`\\\\]|\\\\.)*`', '')
    if (!pattern.test(next)) {
      failed.push(`${file}::${id}: entry not matched`)
      continue
    }
    next = next.replace(pattern, (_m, head) => head + '`' + arabic + '`')
    applied += 1
  }

  if (write && next !== source) writeFileSync(file, next, 'utf8')
}

console.log(
  (write ? 'Rewrote ' : 'Would rewrite ') +
    applied +
    ' of ' +
    Object.keys(REPAIRS).length +
    ' entries across ' +
    byFile.size +
    ' files.',
)
if (failed.length) {
  console.log('\nNot applied:')
  for (const f of failed) console.log('  ' + f)
  process.exitCode = 1
}
