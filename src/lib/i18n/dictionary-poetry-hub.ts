/**
 * Poetry-hub i18n dictionary entries (poetry_hub.*).
 *
 * Covers the cluster hub + guide pages for OCR, Edexcel, Eduqas,
 * the AQA Love & Relationships and AQA Worlds and Lives anthologies.
 *
 * Kept in a separate module to avoid merge churn on the main
 * dictionary.ts. Imported and merged into the main DICTIONARY
 * at module init.
 *
 * Conventions:
 *   - Brand + board names (OCR, Edexcel, AQA, Eduqas, WJEC) stay Latin.
 *   - Poet names + poem titles stay Latin (standard Gulf practice).
 *   - Khaleeji forms preferred (شنو/شلون/أبغى/ذاكر/وايد/إحنا/شوف/دوّر).
 *   - Levantine forms banned (شو/كيفك/بحكي/ليش).
 */

import type { Dictionary } from './dictionary'

export const POETRY_HUB_DICTIONARY: Dictionary = {
  // ─── Poetry hub: OCR cluster (Towards a World Unknown) ──────────────
  'poetry_hub.ocr.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.ocr.back_to_anthology': {
    en: 'Back to OCR Anthology',
    ar: 'رجوع لمختارات OCR',
    es: 'Volver a la antología de OCR',
  },
  'poetry_hub.ocr.badge_spec': {
    en: 'OCR GCSE English Literature J352',
    ar: 'OCR GCSE English Literature J352',
    es: 'OCR GCSE English Literature J352',
  },
  'poetry_hub.ocr.badge_anthology': {
    en: 'OCR Towards a World Unknown',
    ar: 'OCR Towards a World Unknown',
    es: 'OCR Towards a World Unknown',
  },
  'poetry_hub.ocr.hero_title': {
    en: 'Towards a World Unknown',
    ar: 'Towards a World Unknown',
    es: 'Towards a World Unknown',
  },
  'poetry_hub.ocr.hero_lead': {
    en: "OCR's poetry anthology, Towards a World Unknown, has 45 poems in three clusters of 15. You study one cluster, the one your school chooses.",
    ar: 'مختارات الشعر من OCR، Towards a World Unknown، فيها ٤٥ قصيدة في ثلاث مجموعات، كل مجموعة ١٥ قصيدة. تذاكر مجموعة وحدة بس، اللي تختارها مدرستك.',
    es: 'La antología de poesía de OCR, Towards a World Unknown, tiene 45 poemas en tres clusters de 15. Estudias un solo cluster, el que elija tu centro.',
  },
  'poetry_hub.ocr.which_cluster': {
    en: 'Which cluster do I study?',
    ar: 'أي مجموعة أذاكر؟',
    es: '¿Qué cluster estudio?',
  },
  'poetry_hub.ocr.which_cluster_body': {
    en: 'Check with your teacher which of the three clusters your class is studying. The exam asks about that cluster only: one of its poems compared with a poem you have not seen, then one other poem of your choice.',
    ar: 'اسأل معلمك أي مجموعة من الثلاث فصلك يذاكرها. الامتحان يسأل عن هذي المجموعة بس: قصيدة منها تقارنها بقصيدة ما شفتها قبل، وبعدين قصيدة ثانية من اختيارك.',
    es: 'Pregunta a tu profesor cuál de los tres clusters estudia tu clase. El examen solo pregunta por ese cluster: uno de sus poemas comparado con un poema que no has visto, y después otro poema que tú eliges.',
  },
  'poetry_hub.ocr.three_clusters': {
    en: 'The Three Clusters',
    ar: 'المجموعات الثلاث',
    es: 'Los tres clusters',
  },
  'poetry_hub.ocr.poems_count': { en: 'poems', ar: 'قصائد', es: 'poemas' },
  'poetry_hub.ocr.study': { en: 'Study', ar: 'ذاكر', es: 'Estudiar' },
  'poetry_hub.ocr.about_pages_title': {
    en: 'About these study pages',
    ar: 'حول صفحات المذاكرة هاي',
    es: 'Acerca de estas páginas de estudio',
  },
  'poetry_hub.ocr.about_pages_body': {
    en: "Where a poem is out of copyright we can print it in full, with annotations; where it is still in copyright we quote it only briefly. Most of OCR's 45 poems are in copyright, and two have a study page on this site so far. OCR publishes the anthology free of charge at ocr.org.uk.",
    ar: 'إذا القصيدة خرجت من حقوق النشر نقدر ننشرها كاملة مع الشروحات، وإذا بعدها محفوظة الحقوق نقتبس منها شي قليل بس. أغلب قصائد OCR الـ٤٥ محفوظة الحقوق، وثنتين منها بس لها صفحة مذاكرة في الموقع لين الحين. OCR تنشر المختارات مجاناً على ocr.org.uk.',
    es: 'Si un poema ya no tiene derechos de autor, podemos publicarlo completo, con anotaciones; si todavía los tiene, solo lo citamos brevemente. La mayoría de los 45 poemas de OCR tienen derechos de autor, y por ahora dos tienen página de estudio en este sitio. OCR publica la antología gratis en ocr.org.uk.',
  },
  'poetry_hub.ocr.different_board_title': {
    en: 'Studying a different exam board?',
    ar: 'تذاكر بورد امتحان ثاني؟',
    es: '¿Estudias una junta examinadora distinta?',
  },
  'poetry_hub.ocr.different_board_body': {
    en: 'Head back to the Poetry hub to switch boards or explore unseen poetry techniques and general poetry skills that apply to every exam board.',
    ar: 'ارجع لـ Hub الشعر عشان تغيّر البورد أو تستكشف أساليب الشعر غير المرئي ومهارات الشعر العامة اللي تنطبق على كل البوردات.',
    es: 'Vuelve al hub de Poesía para cambiar de junta o explorar técnicas de poesía desconocida y destrezas generales de poesía que se aplican a todas las juntas examinadoras.',
  },
  'poetry_hub.ocr.back_to_hub': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de Poesía',
  },
  'poetry_hub.ocr.cluster.lr.title': {
    en: 'Love and Relationships',
    ar: 'الحب والعلاقات',
    es: 'Love and Relationships',
  },
  'poetry_hub.ocr.cluster.lr.desc': {
    en: 'Love, desire and loss, from Keats and Emily Brontë to Carol Ann Duffy, Jackie Kay and Raymond Antrobus.',
    ar: 'الحب والرغبة والفقد، من Keats و Emily Brontë إلى Carol Ann Duffy و Jackie Kay و Raymond Antrobus.',
    es: 'Amor, deseo y pérdida, desde Keats y Emily Brontë hasta Carol Ann Duffy, Jackie Kay y Raymond Antrobus.',
  },
  'poetry_hub.ocr.cluster.conflict.title': { en: 'Conflict', ar: 'الصراع', es: 'Conflict' },
  'poetry_hub.ocr.cluster.conflict.desc': {
    en: 'War, power and division, from Byron and Wordsworth to Gillian Clarke, John Agard and Caleb Femi.',
    ar: 'الحرب والسلطة والانقسام، من Byron و Wordsworth إلى Gillian Clarke و John Agard و Caleb Femi.',
    es: 'Guerra, poder y división, desde Byron y Wordsworth hasta Gillian Clarke, John Agard y Caleb Femi.',
  },
  'poetry_hub.ocr.cluster.ya.title': {
    en: 'Youth and Age',
    ar: 'الشباب والشيخوخة',
    es: 'Youth and Age',
  },
  'poetry_hub.ocr.cluster.ya.desc': {
    en: 'Childhood, growing up and growing old, from Blake and Hardy to Sylvia Plath, Langston Hughes and Warsan Shire.',
    ar: 'الطفولة والكبر والشيخوخة، من Blake و Hardy إلى Sylvia Plath و Langston Hughes و Warsan Shire.',
    es: 'Infancia, crecimiento y vejez, desde Blake y Hardy hasta Sylvia Plath, Langston Hughes y Warsan Shire.',
  },
  'poetry_hub.ocr.all_15': { en: 'All 15 Poems', ar: 'كل الـ١٥ قصيدة', es: 'Los 15 poemas' },
  'poetry_hub.ocr.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.ocr.explore_other_clusters': {
    en: 'Explore other clusters',
    ar: 'استكشف المجموعات الثانية',
    es: 'Explora otros clusters',
  },
  'poetry_hub.ocr.cluster_lead': {
    en: 'The 15 poems OCR sets for this cluster, as the anthology has stood since OCR revised it for first teaching in September 2022.',
    ar: 'الـ١٥ قصيدة اللي تحددها OCR لهذي المجموعة، حسب المختارات من يوم راجعتها OCR للتدريس من سبتمبر ٢٠٢٢.',
    es: 'Los 15 poemas que OCR fija para este cluster, tal como está la antología desde que OCR la revisó para empezar a enseñarse en septiembre de 2022.',
  },
  'poetry_hub.ocr.exam_title': {
    en: 'How it is examined',
    ar: 'شلون يجي في الامتحان',
    es: 'Cómo se evalúa',
  },
  'poetry_hub.ocr.exam_body': {
    en: 'In J352/02 Exploring poetry and Shakespeare, Section A, you answer one question on your cluster, in two parts. Part (a) prints a poem from the cluster beside a poem you have not seen and asks you to compare them (20 marks, about 45 minutes). Part (b) asks you to explore one other poem from the anthology, from memory (20 marks, about 30 minutes). You may not take the anthology into the exam.',
    ar: 'في J352/02 Exploring poetry and Shakespeare، القسم A، تجاوب على سؤال واحد عن مجموعتك، وله جزئين. الجزء (a) يطبع قصيدة من المجموعة جنب قصيدة ما شفتها قبل ويطلب منك تقارن بينهم (٢٠ درجة، حوالي ٤٥ دقيقة). الجزء (b) يطلب منك تحلل قصيدة ثانية من المختارات من الذاكرة (٢٠ درجة، حوالي ٣٠ دقيقة). ما يسمحون لك تدخل المختارات معك الامتحان.',
    es: 'En J352/02 Exploring poetry and Shakespeare, sección A, respondes a una pregunta sobre tu cluster, en dos partes. La parte (a) imprime un poema del cluster junto a un poema que no has visto y te pide compararlos (20 puntos, unos 45 minutos). La parte (b) te pide analizar otro poema de la antología, de memoria (20 puntos, unos 30 minutos). No puedes llevar la antología al examen.',
  },
  'poetry_hub.ocr.no_study_page': {
    en: 'No study page yet',
    ar: 'ما في صفحة مذاكرة لين الحين',
    es: 'Aún sin página de estudio',
  },
  'poetry_hub.ocr.added_2022': {
    en: 'Added in 2022',
    ar: 'أُضيفت في ٢٠٢٢',
    es: 'Añadido en 2022',
  },
  'poetry_hub.ocr.on_edexcel_pages': {
    en: 'On our Pearson Edexcel Conflict pages',
    ar: 'في صفحاتنا لـ Pearson Edexcel، مجموعة Conflict',
    es: 'En nuestras páginas de Pearson Edexcel, Conflict',
  },
  'poetry_hub.ocr.on_igcse_pages': {
    en: 'On our International GCSE pages',
    ar: 'في صفحاتنا لـ International GCSE',
    es: 'En nuestras páginas de International GCSE',
  },
  'poetry_hub.ocr.wider_title': {
    en: 'Wider reading on this site',
    ar: 'قراءات إضافية في الموقع',
    es: 'Lecturas complementarias en este sitio',
  },
  'poetry_hub.ocr.wider_body': {
    en: "These poems are not in OCR's anthology. OCR's specification asks you to read beyond your cluster, because part (a) sets a poem you have not seen, and these are annotated in full.",
    ar: 'هذي القصائد مو موجودة في مختارات OCR. منهج OCR يطلب منك تقرا أكثر من مجموعتك، لأن الجزء (a) يجيب قصيدة ما شفتها قبل، وهذي القصائد مشروحة كاملة.',
    es: 'Estos poemas no están en la antología de OCR. La especificación de OCR te pide leer más allá de tu cluster, porque la parte (a) pone un poema que no has visto, y estos están anotados por completo.',
  },
  'poetry_hub.ocr.wider.edexcel_relationships': {
    en: 'Set by Pearson Edexcel GCSE (Relationships), not by OCR.',
    ar: 'مقررة في Pearson Edexcel GCSE (Relationships)، مو في OCR.',
    es: 'La fija Pearson Edexcel GCSE (Relationships), no OCR.',
  },
  'poetry_hub.ocr.wider.aqa_and_edexcel': {
    en: 'Set by AQA (Love and Relationships) and Pearson Edexcel GCSE (Relationships), not by OCR.',
    ar: 'مقررة في AQA (Love and Relationships) وفي Pearson Edexcel GCSE (Relationships)، مو في OCR.',
    es: 'La fijan AQA (Love and Relationships) y Pearson Edexcel GCSE (Relationships), no OCR.',
  },
  'poetry_hub.ocr.wider.not_in_anthology': {
    en: "Not in OCR's anthology.",
    ar: 'مو موجودة في مختارات OCR.',
    es: 'No está en la antología de OCR.',
  },
  'poetry_hub.ocr.wider.removed_2022': {
    en: 'In this cluster until OCR revised the anthology in 2022; no longer set.',
    ar: 'كانت في هذي المجموعة لين راجعت OCR المختارات في ٢٠٢٢؛ ما عادت مقررة.',
    es: 'Estuvo en este cluster hasta que OCR revisó la antología en 2022; ya no se fija.',
  },
  'poetry_hub.ocr.removed_title': {
    en: 'No longer set',
    ar: 'ما عادت مقررة',
    es: 'Ya no se fijan',
  },
  'poetry_hub.ocr.removed_body': {
    en: 'OCR replaced five poems in this cluster in 2022: {list}. A revision guide that lists any of them was written for the earlier anthology.',
    ar: 'OCR بدّلت خمس قصائد في هذي المجموعة في ٢٠٢٢: {list}. أي دليل مراجعة يذكر وحدة منها مكتوب للمختارات القديمة.',
    es: 'OCR sustituyó cinco poemas de este cluster en 2022: {list}. Una guía de repaso que incluya alguno de ellos se escribió para la antología anterior.',
  },
  'poetry_hub.ocr.rights_body': {
    en: 'Most of these poems are still in copyright, so this site quotes them only briefly, for criticism and review under the fair dealing provisions of the Copyright, Designs and Patents Act 1988. OCR publishes the anthology free of charge at ocr.org.uk.',
    ar: 'أغلب هذي القصائد بعدها محفوظة الحقوق، فالموقع يقتبس منها شي قليل بس، للنقد والمراجعة حسب أحكام الاستخدام العادل في Copyright, Designs and Patents Act 1988. OCR تنشر المختارات مجاناً على ocr.org.uk.',
    es: 'La mayoría de estos poemas siguen protegidos por derechos de autor, así que este sitio solo los cita brevemente, con fines de crítica y reseña según las disposiciones de uso legítimo de la Copyright, Designs and Patents Act 1988. OCR publica la antología gratis en ocr.org.uk.',
  },
  'poetry_hub.ocr.pnw_notice.badge': {
    en: 'Not an OCR cluster',
    ar: 'مو مجموعة من OCR',
    es: 'No es un cluster de OCR',
  },
  'poetry_hub.ocr.pnw_notice.title': {
    en: 'OCR has no Power and the Natural World cluster',
    ar: 'ما في مجموعة اسمها Power and the Natural World في OCR',
    es: 'OCR no tiene un cluster Power and the Natural World',
  },
  'poetry_hub.ocr.pnw_notice.body': {
    en: "OCR's anthology, Towards a World Unknown, has three clusters: Love and Relationships, Conflict, and Youth and Age. This page used to list a fourth, Power and the Natural World, with fifteen poems. OCR has never set that cluster. Of those fifteen, one is an OCR poem: Boat Stealing, from the 1799 Prelude, which is in Conflict.",
    ar: 'مختارات OCR، Towards a World Unknown، فيها ثلاث مجموعات: Love and Relationships و Conflict و Youth and Age. هذي الصفحة كانت تعرض مجموعة رابعة اسمها Power and the Natural World فيها ١٥ قصيدة. OCR عمرها ما قررت هذي المجموعة. من هذي الـ١٥، وحدة بس من قصائد OCR: Boat Stealing من The Prelude نسخة ١٧٩٩، وهي في مجموعة Conflict.',
    es: 'La antología de OCR, Towards a World Unknown, tiene tres clusters: Love and Relationships, Conflict y Youth and Age. Esta página mostraba un cuarto, Power and the Natural World, con quince poemas. OCR nunca ha fijado ese cluster. De esos quince, uno es un poema de OCR: Boat Stealing, de The Prelude de 1799, que está en Conflict.',
  },
  'poetry_hub.ocr.pnw_notice.choose_cluster': {
    en: "Choose one of OCR's three clusters",
    ar: 'اختار وحدة من مجموعات OCR الثلاث',
    es: 'Elige uno de los tres clusters de OCR',
  },
  'poetry_hub.ocr.pnw_notice.elsewhere_title': {
    en: 'Where some of those poems are set',
    ar: 'وين تنقرر بعض هذي القصائد',
    es: 'Dónde se fijan algunos de esos poemas',
  },
  'poetry_hub.ocr.pnw_notice.aqa_pc': {
    en: 'AQA, Power and Conflict',
    ar: 'AQA، مجموعة Power and Conflict',
    es: 'AQA, Power and Conflict',
  },
  'poetry_hub.ocr.pnw_notice.edexcel_tp': {
    en: 'Pearson Edexcel GCSE, Time and Place',
    ar: 'Pearson Edexcel GCSE، مجموعة Time and Place',
    es: 'Pearson Edexcel GCSE, Time and Place',
  },
  'poetry_hub.ocr.pnw_notice.ocr_conflict': {
    en: 'OCR, Conflict',
    ar: 'OCR، مجموعة Conflict',
    es: 'OCR, Conflict',
  },
  'poetry_hub.ocr.pnw_notice.wider': {
    en: 'Not set by OCR: wider reading',
    ar: 'مو مقررة في OCR: قراءة إضافية',
    es: 'No la fija OCR: lectura complementaria',
  },

  // OCR comparison-guide
  'poetry_hub.ocr.cg.title': {
    en: 'How to Write a Poetry Comparison',
    ar: 'شلون تكتب مقارنة شعرية',
    es: 'Cómo escribir una comparación de poesía',
  },
  'poetry_hub.ocr.cg.lead': {
    en: 'A step-by-step guide to writing a top-band OCR poetry comparison essay. Covers structure, technique, and the most common mistakes students make.',
    ar: 'دليل خطوة خطوة لكتابة مقال مقارنة شعرية بأعلى درجة لـ OCR. يغطّي البنية والأسلوب وأكثر الأخطاء الشائعة عند الطلاب.',
    es: 'Una guía paso a paso para escribir una redacción de comparación de poesía de OCR de banda alta. Cubre la estructura, la técnica y los errores más comunes que cometen los estudiantes.',
  },
  'poetry_hub.ocr.cg.what_asks_title': {
    en: 'What the OCR exam asks you to do',
    ar: 'شنو يطلب منك امتحان OCR',
    es: 'Qué te pide hacer el examen de OCR',
  },
  'poetry_hub.ocr.cg.time_label': { en: 'Time', ar: 'الوقت', es: 'Tiempo' },
  'poetry_hub.ocr.cg.time_value': {
    en: 'About 75 minutes: 45 for part (a), 30 for part (b)',
    ar: 'حوالي ٧٥ دقيقة: ٤٥ للجزء (a) و٣٠ للجزء (b)',
    es: 'Unos 75 minutos: 45 para la parte (a) y 30 para la (b)',
  },
  'poetry_hub.ocr.cg.marks_label': { en: 'Marks', ar: 'الدرجات', es: 'Puntos' },
  'poetry_hub.ocr.cg.marks_value': {
    en: '40 marks: 20 for each part',
    ar: '٤٠ درجة: ٢٠ لكل جزء',
    es: '40 puntos: 20 por parte',
  },
  'poetry_hub.ocr.cg.assess_label': { en: 'Assessment', ar: 'التقييم', es: 'Evaluación' },
  'poetry_hub.ocr.cg.assess_value': {
    en: 'AO1 and AO2. Context (AO3) is assessed in the Shakespeare section, not here.',
    ar: 'AO1 و AO2. السياق (AO3) ينقيّم في قسم Shakespeare، مو هني.',
    es: 'AO1 y AO2. El contexto (AO3) se evalúa en la sección de Shakespeare, no aquí.',
  },
  'poetry_hub.ocr.cg.aos_title': {
    en: 'The Assessment Objectives',
    ar: 'أهداف التقييم',
    es: 'Los objetivos de evaluación',
  },
  'poetry_hub.ocr.cg.structure_title': {
    en: 'Recommended Essay Structure',
    ar: 'بنية المقال الموصى بها',
    es: 'Estructura de redacción recomendada',
  },
  'poetry_hub.ocr.cg.connectives_title': {
    en: 'Comparison Connectives',
    ar: 'روابط المقارنة',
    es: 'Conectores de comparación',
  },
  'poetry_hub.ocr.cg.connectives_sim': {
    en: 'For similarities',
    ar: 'للتشابهات',
    es: 'Para similitudes',
  },
  'poetry_hub.ocr.cg.connectives_diff': {
    en: 'For differences',
    ar: 'للاختلافات',
    es: 'Para diferencias',
  },
  'poetry_hub.ocr.cg.quoting_title': {
    en: 'How to Analyse a Quotation',
    ar: 'شلون تحلّل اقتباس',
    es: 'Cómo analizar una cita',
  },
  'poetry_hub.ocr.cg.choosing_title': {
    en: 'Choosing your part (b) poem',
    ar: 'اختيار قصيدة الجزء (b)',
    es: 'Cómo elegir el poema de la parte (b)',
  },
  'poetry_hub.ocr.cg.do': { en: 'Do', ar: 'سوِّ', es: 'Haz' },
  'poetry_hub.ocr.cg.avoid': { en: 'Avoid', ar: 'تجنّب', es: 'Evita' },
  'poetry_hub.ocr.cg.mistakes_title': {
    en: 'Common Mistakes to Avoid',
    ar: 'أخطاء شائعة تجنّبها',
    es: 'Errores comunes que evitar',
  },
  'poetry_hub.ocr.cg.checklist_title': {
    en: 'Top-Band Checklist',
    ar: 'قائمة فحص الدرجة العالية',
    es: 'Lista de verificación de banda alta',
  },
  'poetry_hub.ocr.cg.quotes_in_exam_title': {
    en: 'About quotations in your exam',
    ar: 'حول الاقتباسات في امتحانك',
    es: 'Sobre las citas en tu examen',
  },
  'poetry_hub.ocr.cg.ready_practise': {
    en: 'Ready to practise?',
    ar: 'مستعد للتدريب؟',
    es: '¿Listo para practicar?',
  },
  'poetry_hub.ocr.cg.essay_plans_cta': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de redacción',
  },

  // OCR essay-plans
  'poetry_hub.ocr.ep.title': {
    en: 'Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة الشعر',
    es: 'Planes de redacción de comparación de poesía',
  },
  'poetry_hub.ocr.ep.lead': {
    en: 'Ten practice comparison plans. Their poems are wider reading rather than OCR set poems (plan 4 uses The Destruction of Sennacherib, from Conflict), so use them to practise part (a): comparing a poem with one you have not studied.',
    ar: 'عشر خطط مقارنة للتمرين. قصائدها قراءة إضافية مو من قصائد OCR المقررة (الخطة ٤ فيها The Destruction of Sennacherib من مجموعة Conflict)، فاستخدمها عشان تتمرن على الجزء (a): مقارنة قصيدة بقصيدة ما درستها.',
    es: 'Diez planes de comparación para practicar. Sus poemas son lecturas complementarias, no poemas fijados por OCR (el plan 4 usa The Destruction of Sennacherib, de Conflict), así que úsalos para practicar la parte (a): comparar un poema con otro que no has estudiado.',
  },
  'poetry_hub.ocr.ep.how_to_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.ocr.ep.all_plans': {
    en: 'All 10 Essay Plans',
    ar: 'كل الـ١٠ خطط مقالات',
    es: 'Los 10 planes de redacción',
  },
  'poetry_hub.ocr.ep.quotes_note_title': {
    en: 'A note on quotations',
    ar: 'ملاحظة عن الاقتباسات',
    es: 'Una nota sobre las citas',
  },
  'poetry_hub.ocr.ep.explore': {
    en: 'Explore the anthology',
    ar: 'استكشف المختارات',
    es: 'Explora la antología',
  },
  'poetry_hub.ocr.ep.thematic_focus': {
    en: 'Thematic focus',
    ar: 'التركيز الموضوعي',
    es: 'Enfoque temático',
  },
  'poetry_hub.ocr.ep.intro_label': { en: 'Introduction', ar: 'المقدّمة', es: 'Introducción' },
  'poetry_hub.ocr.ep.point_label': { en: 'Point', ar: 'نقطة', es: 'Punto' },
  'poetry_hub.ocr.ep.conclusion_label': { en: 'Conclusion', ar: 'الخاتمة', es: 'Conclusión' },
  'poetry_hub.ocr.ep.exam_tip': { en: 'Exam tip', ar: 'نصيحة امتحان', es: 'Consejo de examen' },

  // OCR themes
  'poetry_hub.ocr.themes.title': {
    en: 'Themes and Wider Reading',
    ar: 'المواضيع والقراءات الإضافية',
    es: 'Temas y lecturas complementarias',
  },
  'poetry_hub.ocr.themes.lead': {
    en: "Themes that run through OCR's three clusters, mapped to poems that explore them. Most of these poems are wider reading, not OCR set poems, and each is badged to say which.",
    ar: 'مواضيع تمرّ في مجموعات OCR الثلاث، مع قصائد تتناولها. أغلب هذي القصائد قراءة إضافية مو من قصائد OCR المقررة، وكل وحدة عليها علامة توضح.',
    es: 'Temas que recorren los tres clusters de OCR, con poemas que los exploran. La mayoría de estos poemas son lecturas complementarias, no poemas fijados por OCR, y cada uno lleva una etiqueta que lo indica.',
  },
  'poetry_hub.ocr.themes.how_title': {
    en: 'How to use this page',
    ar: 'شلون تستخدم الصفحة هاي',
    es: 'Cómo usar esta página',
  },
  'poetry_hub.ocr.themes.poem_singular': { en: 'poem', ar: 'قصيدة', es: 'poema' },
  'poetry_hub.ocr.themes.poem_plural': { en: 'poems', ar: 'قصائد', es: 'poemas' },
  'poetry_hub.ocr.themes.notes_title': {
    en: 'About these study notes',
    ar: 'حول ملاحظات المذاكرة هاي',
    es: 'Acerca de estos apuntes de estudio',
  },
  'poetry_hub.ocr.themes.explore_more': {
    en: 'Explore more',
    ar: 'استكشف أكثر',
    es: 'Explora más',
  },
  'poetry_hub.ocr.themes.comparison_guide_cta': {
    en: 'Comparison Guide',
    ar: 'دليل المقارنة',
    es: 'Guía de comparación',
  },

  // ─── Poetry hub: Edexcel cluster ───────────────────────────────────
  'poetry_hub.edexcel.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.edexcel.back_to_anthology': {
    en: 'Back to Edexcel Poetry',
    ar: 'رجوع لشعر Edexcel',
    es: 'Volver a la poesía de Edexcel',
  },
  'poetry_hub.edexcel.badge_spec': {
    en: 'Pearson Edexcel GCSE English Literature (1ET0)',
    ar: 'Pearson Edexcel GCSE English Literature (1ET0)',
    es: 'Pearson Edexcel GCSE English Literature (1ET0)',
  },
  'poetry_hub.edexcel.badge_spec_short': {
    en: 'Pearson Edexcel GCSE English Literature',
    ar: 'Pearson Edexcel GCSE English Literature',
    es: 'Pearson Edexcel GCSE English Literature',
  },
  'poetry_hub.edexcel.hero_title': {
    en: 'Edexcel Poetry Anthology',
    ar: 'مختارات شعر Edexcel',
    es: 'Antología de poesía de Edexcel',
  },
  'poetry_hub.edexcel.hero_lead': {
    en: 'The Edexcel anthology contains two themed collections of fifteen poems each. You only study one cluster - either Conflict or Time and Place. Pick yours below and start with annotated study pages, key quotations and comparison practice.',
    ar: 'مختارات Edexcel فيها مجموعتين موضوعيتين، كل وحدة فيها خمستعش قصيدة. تذاكر مجموعة وحدة بس - يا Conflict يا Time and Place. اختر اللي مالك تحت وابدأ بصفحات مذاكرة مع شروحات واقتباسات أساسية وتدريب على المقارنة.',
    es: 'La antología de Edexcel contiene dos colecciones temáticas de quince poemas cada una. Solo estudias un cluster: Conflict o Time and Place. Elige el tuyo abajo y empieza con páginas de estudio anotadas, citas clave y práctica de comparación.',
  },
  'poetry_hub.edexcel.info_note': {
    en: 'Edexcel poetry is assessed in Paper 2, Section A. You will answer one comparison question on a named anthology poem and one of your own choice from the same cluster, plus an unseen poetry question.',
    ar: 'شعر Edexcel يتقيّم في Paper 2, Section A. بتجاوب على سؤال مقارنة وحد على قصيدة معيّنة من المختارات مع قصيدة من اختيارك من نفس المجموعة، زائد سؤال شعر غير مرئي.',
    es: 'La poesía de Edexcel se evalúa en Paper 2, Section A. Responderás a una pregunta de comparación sobre un poema concreto de la antología y otro de tu elección del mismo cluster, además de una pregunta de poesía desconocida.',
  },
  'poetry_hub.edexcel.choose_cluster': {
    en: 'Choose your cluster',
    ar: 'اختر مجموعتك',
    es: 'Elige tu cluster',
  },
  'poetry_hub.edexcel.fifteen_poems': { en: '15 poems', ar: '١٥ قصيدة', es: '15 poemas' },
  'poetry_hub.edexcel.cluster.conflict.title': { en: 'Conflict', ar: 'الصراع', es: 'Conflict' },
  'poetry_hub.edexcel.cluster.conflict.desc': {
    en: 'Poems exploring the many faces of conflict - war and bloodshed, personal and political battles, family tensions, prejudice, and inner emotional turmoil. Includes Blake, Owen, Byron, Tennyson, Hardy, Rossetti, Agard and Zephaniah.',
    ar: 'قصائد تستكشف وجوه الصراع المختلفة - الحرب والدم، المعارك الشخصية والسياسية، توتّرات العائلة، التحيّز، والاضطراب العاطفي الداخلي. تشمل Blake و Owen و Byron و Tennyson و Hardy و Rossetti و Agard و Zephaniah.',
    es: 'Poemas que exploran las múltiples caras del conflicto: guerra y derramamiento de sangre, batallas personales y políticas, tensiones familiares, prejuicio y agitación emocional interior. Incluye a Blake, Owen, Byron, Tennyson, Hardy, Rossetti, Agard y Zephaniah.',
  },
  'poetry_hub.edexcel.cluster.conflict.cta': {
    en: 'Study the Conflict cluster',
    ar: 'ذاكر مجموعة Conflict',
    es: 'Estudiar el cluster Conflict',
  },
  'poetry_hub.edexcel.cluster.tp.title': {
    en: 'Time and Place',
    ar: 'الزمان والمكان',
    es: 'Time and Place',
  },
  'poetry_hub.edexcel.cluster.tp.desc': {
    en: 'Poems rooted in landscape, memory and journeys - from Keats and Wordsworth to Dickinson, Hardy, Fanthorpe and Grace Nichols. The cluster explores how place shapes identity and how time alters our relationship with where we have lived.',
    ar: 'قصائد جذورها في الطبيعة والذكرى والرحلات - من Keats و Wordsworth إلى Dickinson و Hardy و Fanthorpe و Grace Nichols. المجموعة تستكشف شلون المكان يشكّل الهوية وشلون الزمن يغيّر علاقتنا بالمكان اللي عشنا فيه.',
    es: 'Poemas arraigados en el paisaje, la memoria y los viajes, desde Keats y Wordsworth hasta Dickinson, Hardy, Fanthorpe y Grace Nichols. El cluster explora cómo el lugar moldea la identidad y cómo el tiempo altera nuestra relación con los lugares donde hemos vivido.',
  },
  'poetry_hub.edexcel.cluster.tp.cta': {
    en: 'Study the Time and Place cluster',
    ar: 'ذاكر مجموعة Time and Place',
    es: 'Estudiar el cluster Time and Place',
  },
  'poetry_hub.edexcel.diff_aqa_title': {
    en: 'How is Edexcel different from AQA?',
    ar: 'شلون Edexcel يختلف عن AQA؟',
    es: '¿En qué se diferencia Edexcel de AQA?',
  },
  'poetry_hub.edexcel.diff_aqa_b1': {
    en: 'Edexcel students study one cluster (Conflict or Time and Place), not both.',
    ar: 'طلاب Edexcel يذاكرون مجموعة وحدة (Conflict أو Time and Place)، مو الثنتين.',
    es: 'Los estudiantes de Edexcel estudian un cluster (Conflict o Time and Place), no ambos.',
  },
  'poetry_hub.edexcel.diff_aqa_b2': {
    en: 'The exam asks you to compare a named poem with one of your choice from the same cluster.',
    ar: 'الامتحان يطلب منك تقارن قصيدة معيّنة مع قصيدة من اختيارك من نفس المجموعة.',
    es: 'El examen te pide comparar un poema concreto con otro de tu elección del mismo cluster.',
  },
  'poetry_hub.edexcel.diff_aqa_b3': {
    en: 'There is an unseen poetry question in the same paper, just like AQA.',
    ar: 'في سؤال شعر غير مرئي في نفس الورقة، مثل AQA.',
    es: 'Hay una pregunta de poesía desconocida en la misma prueba, igual que en AQA.',
  },
  'poetry_hub.edexcel.diff_aqa_b4': {
    en: 'Some poets overlap with the AQA anthology (Blake, Wordsworth, Owen, Tennyson) but the specific poems are different.',
    ar: 'كم شاعر يتداخلون مع مختارات AQA (Blake و Wordsworth و Owen و Tennyson) بس القصائد المحدّدة مختلفة.',
    es: 'Algunos poetas coinciden con la antología de AQA (Blake, Wordsworth, Owen, Tennyson), pero los poemas concretos son distintos.',
  },
  'poetry_hub.edexcel.conflict.hero_title': {
    en: 'Conflict Cluster',
    ar: 'مجموعة Conflict',
    es: 'Cluster Conflict',
  },
  'poetry_hub.edexcel.conflict.hero_lead': {
    en: 'All 15 poems in the Edexcel Conflict anthology. Conflict is explored in many forms - war and violence, prejudice and racism, family tension, internal struggle and the politics of class.',
    ar: 'كل الـ١٥ قصيدة في مختارات Conflict لـ Edexcel. الصراع يتم استكشافه بأشكال متعدّدة - الحرب والعنف، التحيّز والعنصرية، توتّر العائلة، الصراع الداخلي، وسياسات الطبقة.',
    es: 'Los 15 poemas de la antología Conflict de Edexcel. El conflicto se explora de muchas formas: guerra y violencia, prejuicio y racismo, tensión familiar, lucha interior y la política de clase.',
  },
  'poetry_hub.edexcel.tp.hero_title': {
    en: 'Time and Place Cluster',
    ar: 'مجموعة Time and Place',
    es: 'Cluster Time and Place',
  },
  'poetry_hub.edexcel.tp.hero_lead': {
    en: 'All 15 poems in the Edexcel Time and Place anthology. From Romantic celebrations of nature to modern poems about migration, identity and belonging, the cluster explores how places shape us and how time changes the way we see them.',
    ar: 'كل الـ١٥ قصيدة في مختارات Time and Place لـ Edexcel. من احتفاءات الرومانسية بالطبيعة إلى قصائد حديثة عن الهجرة والهوية والانتماء، المجموعة تستكشف شلون الأماكن تشكّلنا وشلون الزمن يغيّر طريقتنا في رؤيتها.',
    es: 'Los 15 poemas de la antología Time and Place de Edexcel. Desde las celebraciones románticas de la naturaleza hasta poemas modernos sobre la migración, la identidad y la pertenencia, el cluster explora cómo los lugares nos moldean y cómo el tiempo cambia la forma en que los vemos.',
  },
  'poetry_hub.edexcel.study_pages': {
    en: 'Study pages',
    ar: 'صفحات المذاكرة',
    es: 'Páginas de estudio',
  },
  'poetry_hub.edexcel.other_in_cluster': {
    en: 'Other poems in the cluster',
    ar: 'قصائد ثانية في المجموعة',
    es: 'Otros poemas del cluster',
  },
  'poetry_hub.edexcel.other_in_cluster_lead': {
    en: 'Full study pages for these poems are in development. Many are still in copyright, so we will provide key quotations, analysis and comparison notes rather than the full text.',
    ar: 'صفحات المذاكرة الكاملة لهاي القصائد قيد التطوير. كثير منها لا تزال محفوظة حقوقها، ولها بنوفّر اقتباسات أساسية وتحليل وملاحظات مقارنة بدل النص كامل.',
    es: 'Las páginas de estudio completas de estos poemas están en desarrollo. Muchos siguen bajo derechos de autor, así que ofreceremos citas clave, análisis y notas de comparación en lugar del texto completo.',
  },
  'poetry_hub.edexcel.quotes_only': { en: 'Quotes only', ar: 'اقتباسات بس', es: 'Solo citas' },
  'poetry_hub.edexcel.study_this_poem': {
    en: 'Study this poem',
    ar: 'ذاكر هاي القصيدة',
    es: 'Estudiar este poema',
  },
  'poetry_hub.edexcel.comparison_tip': {
    en: 'Comparison tip',
    ar: 'نصيحة مقارنة',
    es: 'Consejo de comparación',
  },
  'poetry_hub.edexcel.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.edexcel.ep.title': {
    en: 'Edexcel Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة شعر Edexcel',
    es: 'Planes de redacción de comparación de poesía de Edexcel',
  },
  'poetry_hub.edexcel.ep.lead': {
    en: 'Ten ready-made comparison plans across both Edexcel clusters. Each plan opens to reveal a thesis, three full paragraphs with evidence and analysis, a conclusion and a tailored exam tip.',
    ar: 'عشر خطط مقارنة جاهزة عبر المجموعتين لـ Edexcel. كل خطة تفتح لتكشف عن أطروحة وثلاث فقرات كاملة بالأدلّة والتحليل وخاتمة ونصيحة امتحان موجّهة.',
    es: 'Diez planes de comparación listos para los dos clusters de Edexcel. Cada plan se despliega para mostrar una tesis, tres párrafos completos con evidencia y análisis, una conclusión y un consejo de examen adaptado.',
  },
  'poetry_hub.edexcel.ep.how_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.edexcel.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: Eduqas anthology ──────────────────────────────────
  'poetry_hub.eduqas.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.eduqas.badge_anthology': {
    en: 'Eduqas anthology, exams from 2027',
    ar: 'مختارات Eduqas، امتحانات من ٢٠٢٧',
    es: 'Antología de Eduqas, exámenes desde 2027',
  },
  'poetry_hub.eduqas.hero_title': {
    en: 'WJEC Eduqas Poetry',
    ar: 'شعر WJEC Eduqas',
    es: 'Poesía de WJEC Eduqas',
  },
  'poetry_hub.eduqas.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'تنبيه الحقوق:',
    es: 'Aviso de derechos:',
  },
  'poetry_hub.eduqas.comparison_heading': {
    en: 'Comparison Question Practice',
    ar: 'تدريب على سؤال المقارنة',
    es: 'Práctica de la pregunta de comparación',
  },
  'poetry_hub.eduqas.comparison_how_title': {
    en: 'How the Eduqas comparison question works',
    ar: 'شلون يشتغل سؤال المقارنة لـ Eduqas',
    es: 'Cómo funciona la pregunta de comparación de Eduqas',
  },
  'poetry_hub.eduqas.comparison_how_body': {
    en: 'Component 1 Section B will give you one named poem and ask you to compare it with another poem from the anthology of your choice. Choose your second poem carefully - it must share a clear theme or contrast.',
    ar: 'Component 1 Section B بيعطيك قصيدة معيّنة ويطلب منك تقارنها بقصيدة ثانية من المختارات من اختيارك. اختر القصيدة الثانية بعناية - لازم يكون فيها موضوع واضح مشترك أو تباين.',
    es: 'El Component 1 Section B te dará un poema concreto y te pedirá que lo compares con otro poema de la antología de tu elección. Elige tu segundo poema con cuidado: debe compartir un tema claro o un contraste.',
  },
  'poetry_hub.eduqas.comparison_tip_intro': {
    en: 'Strong pairings to practise. Each pair shares a clear thematic link, letting you draw both similarities and contrasts.',
    ar: 'أزواج قوية للتدرّب. كل زوج يشترك في رابط موضوعي واضح، يخلّيك تستخرج التشابهات والتباينات.',
    es: 'Emparejamientos sólidos para practicar. Cada pareja comparte un vínculo temático claro, lo que te permite trazar tanto similitudes como contrastes.',
  },
  'poetry_hub.eduqas.love_betrayal_title': {
    en: 'Love & betrayal pair',
    ar: 'زوج الحب والخيانة',
    es: 'Pareja de amor y traición',
  },
  'poetry_hub.eduqas.love_betrayal_desc': {
    en: 'A Victorian comparison anchor',
    ar: 'مرتكز مقارنة فيكتوري',
    es: 'Un ancla de comparación victoriana',
  },
  'poetry_hub.eduqas.love_betrayal_body': {
    en: 'Sonnet 29 (Barrett Browning) and Cousin Kate (Rossetti) are both Victorian, both from female speakers, and both about absent or lost lovers: a strong pairing for the comparison question.',
    ar: 'Sonnet 29 (Barrett Browning) و Cousin Kate (Rossetti) كلاهما فيكتوري، كلاهما من متحدّثات نساء، وكلاهما عن حبيب غائب أو مفقود: زوج قوي لسؤال المقارنة.',
    es: 'Sonnet 29 (Barrett Browning) y Cousin Kate (Rossetti) son ambos victorianos, ambos de voces femeninas y ambos sobre amantes ausentes o perdidos: una pareja sólida para la pregunta de comparación.',
  },
  'poetry_hub.eduqas.war_identity_title': {
    en: 'War & identity pair',
    ar: 'زوج الحرب والهوية',
    es: 'Pareja de guerra e identidad',
  },
  'poetry_hub.eduqas.war_identity_desc': {
    en: 'Two wars, two erasures',
    ar: 'حربين، محوين',
    es: 'Dos guerras, dos borraduras',
  },
  'poetry_hub.eduqas.war_identity_body': {
    en: "Hardy's Drummer Hodge (Second Boer War, 1899) and Owen's Disabled (WWI) both interrogate what war takes from young men. Strong contrast in form, voice, and the kind of loss each poet exposes.",
    ar: 'Drummer Hodge لـ Hardy (حرب البوير الثانية، ١٨٩٩) و Disabled لـ Owen (الحرب العالمية الأولى) كلاهما يستجوب شنو الحرب تأخذه من الشباب. تباين قوي في الشكل والصوت ونوع الخسارة اللي يكشفه كل شاعر.',
    es: 'Drummer Hodge de Hardy (Segunda Guerra de los Bóeres, 1899) y Disabled de Owen (Primera Guerra Mundial) interrogan ambos qué le arrebata la guerra a los jóvenes. Fuerte contraste en la forma, la voz y el tipo de pérdida que expone cada poeta.',
  },
  'poetry_hub.eduqas.boer_note': {
    en: 'Note: Drummer Hodge is a Boer War poem (1899), not WWI.',
    ar: 'ملاحظة: Drummer Hodge قصيدة حرب البوير (١٨٩٩)، مو الحرب العالمية الأولى.',
    es: 'Nota: Drummer Hodge es un poema de la Guerra de los Bóeres (1899), no de la Primera Guerra Mundial.',
  },
  'poetry_hub.eduqas.copyright_only': {
    en: 'In copyright: no study page yet',
    ar: 'محفوظة الحقوق: ما في صفحة مذاكرة لين الحين',
    es: 'Con derechos de autor: aún sin página de estudio',
  },
  'poetry_hub.eduqas.pd_soon': {
    en: 'Public domain: no study page yet',
    ar: 'ملك عام: ما في صفحة مذاكرة لين الحين',
    es: 'Dominio público: aún sin página de estudio',
  },
  'poetry_hub.eduqas.in_copyright_aria': {
    en: 'In copyright: no study page yet',
    ar: 'محفوظة الحقوق: ما في صفحة مذاكرة لين الحين',
    es: 'Con derechos de autor: aún sin página de estudio',
  },
  'poetry_hub.eduqas.theme.childhood_nature': {
    en: 'Childhood & Nature',
    ar: 'الطفولة والطبيعة',
    es: 'Infancia y naturaleza',
  },
  'poetry_hub.eduqas.theme.love': {
    en: 'Love & Relationships',
    ar: 'الحب والعلاقات',
    es: 'Amor y relaciones',
  },
  'poetry_hub.eduqas.theme.war': {
    en: 'War & Conflict',
    ar: 'الحرب والصراع',
    es: 'Guerra y conflicto',
  },
  'poetry_hub.eduqas.theme.identity': {
    en: 'Identity & Voice',
    ar: 'الهوية والصوت',
    es: 'Identidad y voz',
  },
  'poetry_hub.eduqas.cb_pick': {
    en: 'Pick a poem with strong thematic links',
    ar: 'اختر قصيدة لها روابط موضوعية قوية',
    es: 'Elige un poema con vínculos temáticos sólidos',
  },
  'poetry_hub.eduqas.cb_plan': {
    en: 'Plan three points of comparison',
    ar: 'خطط ثلاث نقاط مقارنة',
    es: 'Planifica tres puntos de comparación',
  },
  'poetry_hub.eduqas.cb_connectives': {
    en: 'Use connectives: similarly, in contrast, whereas',
    ar: 'استخدم الروابط: بنفس الطريقة، بالمقابل، بينما',
    es: 'Usa conectores: del mismo modo, por el contrario, mientras que',
  },
  'poetry_hub.eduqas.cb_quote': {
    en: 'Quote from both poems in every paragraph',
    ar: 'اقتبس من القصيدتين في كل فقرة',
    es: 'Cita de ambos poemas en cada párrafo',
  },
  'poetry_hub.eduqas.cb_form': {
    en: 'Comment on form and structure, not just language',
    ar: 'علّق على الشكل والبنية، مو بس اللغة',
    es: 'Comenta la forma y la estructura, no solo el lenguaje',
  },
  'poetry_hub.eduqas.cb_context': {
    en: "Link analysis to context and the poet's intention",
    ar: 'اربط التحليل بالسياق ونيّة الشاعر',
    es: 'Vincula el análisis al contexto y a la intención del poeta',
  },
  'poetry_hub.eduqas.ep.title': {
    en: 'Eduqas Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة شعر Eduqas',
    es: 'Planes de redacción de comparación de poesía de Eduqas',
  },
  'poetry_hub.eduqas.ep.lead': {
    en: 'Ready-made comparison plans for the Eduqas anthology examined from summer 2027. Each plan provides a thesis, three full paragraphs with evidence and analysis, a conclusion and an exam tip.',
    ar: 'خطط مقارنة جاهزة لمختارات Eduqas اللي تنمتحن من صيف ٢٠٢٧. كل خطة توفّر أطروحة وثلاث فقرات كاملة بالأدلّة والتحليل وخاتمة ونصيحة امتحان.',
    es: 'Planes de comparación listos para la antología de Eduqas que se examina desde el verano de 2027. Cada plan ofrece una tesis, tres párrafos completos con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'poetry_hub.eduqas.ep.how_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.eduqas.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: AQA Love & Relationships ──────────────────────────
  'poetry_hub.lr.back_to_poetry': { en: 'Back to Poetry', ar: 'رجوع للشعر', es: 'Volver a Poesía' },
  'poetry_hub.lr.back_to_hub': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de Poesía',
  },
  'poetry_hub.lr.badge_spec': {
    en: 'AQA GCSE English Literature',
    ar: 'AQA GCSE English Literature',
    es: 'AQA GCSE English Literature',
  },
  'poetry_hub.lr.badge_aqa_only': { en: 'AQA Only', ar: 'AQA بس', es: 'Solo AQA' },
  'poetry_hub.lr.hero_title': {
    en: 'Love & Relationships Poetry',
    ar: 'شعر الحب والعلاقات',
    es: 'Poesía de Love & Relationships',
  },
  'poetry_hub.lr.hero_lead': {
    en: 'Master all 15 poems in the AQA Love and Relationships anthology. Each study page includes annotations, key quotations, context, and comparison notes to help you write top-grade essays.',
    ar: 'أتقن كل الـ١٥ قصيدة في مختارات AQA Love and Relationships. كل صفحة مذاكرة فيها شروحات واقتباسات أساسية وسياق وملاحظات مقارنة عشان تساعدك تكتب مقالات بأعلى درجة.',
    es: 'Domina los 15 poemas de la antología AQA Love and Relationships. Cada página de estudio incluye anotaciones, citas clave, contexto y notas de comparación para ayudarte a escribir redacciones de la máxima nota.',
  },
  'poetry_hub.lr.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'تنبيه الحقوق:',
    es: 'Aviso de derechos:',
  },
  'poetry_hub.lr.studied': { en: 'studied', ar: 'مذاكرة', es: 'estudiados' },
  'poetry_hub.lr.of': { en: 'of', ar: 'من', es: 'de' },
  'poetry_hub.lr.poems_studied': {
    en: 'poems studied',
    ar: 'قصيدة مذاكرة',
    es: 'poemas estudiados',
  },
  'poetry_hub.lr.study_this_poem': {
    en: 'Study this poem',
    ar: 'ذاكر هاي القصيدة',
    es: 'Estudiar este poema',
  },
  'poetry_hub.lr.theme.romantic': {
    en: 'Romantic Love',
    ar: 'الحب الرومانسي',
    es: 'Amor romántico',
  },
  'poetry_hub.lr.theme.family': { en: 'Family Love', ar: 'حب العائلة', es: 'Amor familiar' },
  'poetry_hub.lr.theme.distance_loss': {
    en: 'Distance & Loss',
    ar: 'البُعد والفقد',
    es: 'Distancia y pérdida',
  },
  'poetry_hub.lr.theme.identity_possession': {
    en: 'Identity & Possession',
    ar: 'الهوية والامتلاك',
    es: 'Identidad y posesión',
  },
  'poetry_hub.lr.study_tips_title': {
    en: 'Study Tips: Comparing Love & Relationships',
    ar: 'نصائح المذاكرة: مقارنة الحب والعلاقات',
    es: 'Consejos de estudio: comparar Love & Relationships',
  },
  'poetry_hub.lr.tip_pair_title': {
    en: 'Pair contrasting perspectives',
    ar: 'اجمع وجهات نظر متباينة',
    es: 'Empareja perspectivas contrastantes',
  },
  'poetry_hub.lr.tip_speaker_title': {
    en: 'Examine the speaker, not the poet',
    ar: 'افحص المتحدّث، مو الشاعر',
    es: 'Examina al hablante, no al poeta',
  },
  'poetry_hub.lr.tip_methods_title': {
    en: 'Compare methods, not just content',
    ar: 'قارن الأساليب، مو بس المحتوى',
    es: 'Compara métodos, no solo contenido',
  },
  'poetry_hub.lr.tip_quotes_title': {
    en: 'Learn 2-3 key quotes per poem',
    ar: 'احفظ ٢-٣ اقتباسات أساسية لكل قصيدة',
    es: 'Aprende 2-3 citas clave por poema',
  },
  'poetry_hub.lr.ready_explore_title': {
    en: 'Ready to explore more poetry?',
    ar: 'مستعد تستكشف شعر أكثر؟',
    es: '¿Listo para explorar más poesía?',
  },
  'poetry_hub.lr.cg.title': {
    en: 'Comparison Guide: Love & Relationships',
    ar: 'دليل المقارنة: الحب والعلاقات',
    es: 'Guía de comparación: Love & Relationships',
  },
  'poetry_hub.lr.cg.lead': {
    en: 'A practical guide to writing top-grade comparison essays on the AQA Love and Relationships cluster. Frames, theses, pairings and worked examples.',
    ar: 'دليل عملي لكتابة مقالات مقارنة بأعلى درجة على مجموعة AQA Love and Relationships. أطر وأطروحات وأزواج وأمثلة محلولة.',
    es: 'Una guía práctica para escribir redacciones de comparación de la máxima nota sobre el cluster AQA Love and Relationships. Marcos, tesis, emparejamientos y ejemplos resueltos.',
  },
  'poetry_hub.lr.cg.frames_title': {
    en: 'Paragraph Frames',
    ar: 'أطر الفقرات',
    es: 'Marcos de párrafo',
  },
  'poetry_hub.lr.cg.thesis_title': {
    en: 'Thesis Levels',
    ar: 'مستويات الأطروحة',
    es: 'Niveles de tesis',
  },
  'poetry_hub.lr.cg.pairings_title': {
    en: 'Strong Pairings',
    ar: 'أزواج قوية',
    es: 'Emparejamientos sólidos',
  },
  'poetry_hub.lr.ep.title': {
    en: 'Love & Relationships Essay Plans',
    ar: 'خطط مقالات الحب والعلاقات',
    es: 'Planes de redacción de Love & Relationships',
  },
  'poetry_hub.lr.ep.lead': {
    en: 'Ten ready-made comparison essay plans for the AQA Love and Relationships cluster. Each plan provides a thesis, paragraphs with evidence and analysis, a conclusion and an exam tip.',
    ar: 'عشر خطط مقالات مقارنة جاهزة لمجموعة AQA Love and Relationships. كل خطة توفّر أطروحة وفقرات بالأدلّة والتحليل وخاتمة ونصيحة امتحان.',
    es: 'Diez planes de redacción de comparación listos para el cluster AQA Love and Relationships. Cada plan ofrece una tesis, párrafos con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'poetry_hub.lr.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: AQA Worlds and Lives ──────────────────────────────
  'poetry_hub.wl.back_to_poetry': { en: 'Back to Poetry', ar: 'رجوع للشعر', es: 'Volver a Poesía' },
  'poetry_hub.wl.back_to_hub': {
    en: 'Back to poetry hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de poesía',
  },
  'poetry_hub.wl.badge_spec': {
    en: 'AQA GCSE English Literature (8702)',
    ar: 'AQA GCSE English Literature (8702)',
    es: 'AQA GCSE English Literature (8702)',
  },
  'poetry_hub.wl.badge_anthology': {
    en: 'Worlds and Lives',
    ar: 'Worlds and Lives',
    es: 'Worlds and Lives',
  },
  'poetry_hub.wl.hero_title': {
    en: 'AQA Worlds and Lives Anthology',
    ar: 'مختارات AQA Worlds and Lives',
    es: 'Antología AQA Worlds and Lives',
  },
  'poetry_hub.wl.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.wl.soon_title': {
    en: 'Detailed study pages coming soon',
    ar: 'صفحات مذاكرة تفصيلية قريباً',
    es: 'Páginas de estudio detalladas próximamente',
  },
  'poetry_hub.wl.soon_cta_pc': {
    en: 'Power and Conflict (full)',
    ar: 'Power and Conflict (كامل)',
    es: 'Power and Conflict (completo)',
  },
  'poetry_hub.wl.soon_cta_lr': {
    en: 'Love and Relationships (full)',
    ar: 'Love and Relationships (كامل)',
    es: 'Love and Relationships (completo)',
  },
  'poetry_hub.wl.all_poems_heading': {
    en: 'All 15 Worlds and Lives poems',
    ar: 'كل الـ١٥ قصيدة لـ Worlds and Lives',
    es: 'Los 15 poemas de Worlds and Lives',
  },
  'poetry_hub.wl.soon_badge': { en: 'Soon', ar: 'قريباً', es: 'Próximamente' },
  'poetry_hub.wl.themes_heading': {
    en: 'Key themes across the anthology',
    ar: 'المواضيع الأساسية عبر المختارات',
    es: 'Temas clave en toda la antología',
  },
  'poetry_hub.wl.theme_identity_title': {
    en: 'Identity and heritage',
    ar: 'الهوية والإرث',
    es: 'Identidad y herencia',
  },
  'poetry_hub.wl.theme_place_title': {
    en: 'Place and landscape',
    ar: 'المكان والطبيعة',
    es: 'Lugar y paisaje',
  },
  'poetry_hub.wl.theme_power_title': {
    en: 'Power and politics',
    ar: 'السلطة والسياسة',
    es: 'Poder y política',
  },
  'poetry_hub.wl.theme_belonging_title': {
    en: 'Belonging and migration',
    ar: 'الانتماء والهجرة',
    es: 'Pertenencia y migración',
  },
  'poetry_hub.wl.priority_title': {
    en: 'Want a poem prioritised?',
    ar: 'تبي قصيدة بأولوية؟',
    es: '¿Quieres priorizar un poema?',
  },
}
