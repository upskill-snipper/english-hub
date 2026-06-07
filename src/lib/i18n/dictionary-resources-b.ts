/**
 * Bucket A wave 5 (part 1) - `resources` namespace repair.
 *
 * These 120 keys previously lived only in ./dictionary-audit-fix.ts with
 * path-segment fake English ("Title"/"Heading"/"Lead"/"Desc"/"B"/"H") and
 * machine-mangled AR, so the public SEO resource pages rendered junk in
 * AR mode. EN values here are authored to match the exact UI position each
 * key occupies (verified against the rendering page/component), using
 * exam-accurate GCSE/IGCSE terminology and the on-brand voice. AR is
 * natural Khaleeji (Gulf register), consistent with src/lib/eal/curriculum.ts.
 *
 * Merged into the master lookup() via ./dictionary.ts (do not edit there).
 *
 * Covers exam-technique (hub, exam-day, essay-structure, question-types,
 * time-management) + poetry hub + study-tools/checklists.
 * Remaining 29 resources.* audit-fix keys (study_tools tail) deferred to
 * wave 5 part 2.
 */

export const RESOURCES_B_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  /* ─── Exam technique - breadcrumbs ─────────────────────────────── */
  'resources.exam_tech.bc.exam_tech': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.bc.home': { en: `Home`, ar: `الرئيسية`, es: `Inicio` },
  'resources.exam_tech.bc.resources': { en: `Resources`, ar: `المصادر`, es: `Recursos` },
  'resources.exam_tech.bc.this': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },

  /* ─── Exam technique hub - "continue exploring" cards ──────────── */
  'resources.exam_tech.cont.all.desc': {
    en: `Browse every revision guide, resource and tool in one place.`,
    ar: `تصفّح كل أدلة المراجعة والمصادر والأدوات في مكان واحد.`,
    es: `Explora todas las guías de repaso, recursos y herramientas en un solo lugar.`,
  },
  'resources.exam_tech.cont.all.label': {
    en: `All resources`,
    ar: `كل المصادر`,
    es: `Todos los recursos`,
  },
  'resources.exam_tech.cont.model.desc': {
    en: `Read graded model answers and see exactly what top responses look like.`,
    ar: `اقرأ نماذج إجابات مصحّحة وشوف بالضبط كيف تكون الإجابة الممتازة.`,
    es: `Lee respuestas modelo calificadas y comprueba exactamente cómo son las mejores respuestas.`,
  },
  'resources.exam_tech.cont.model.label': {
    en: `Model answers`,
    ar: `نماذج الإجابات`,
    es: `Respuestas modelo`,
  },
  'resources.exam_tech.cont.tech.desc': {
    en: `Master every literary technique with clear explanations and examples.`,
    ar: `أتقن كل تقنية أدبية مع شرح واضح وأمثلة.`,
    es: `Domina cada técnica literaria con explicaciones claras y ejemplos.`,
  },
  'resources.exam_tech.cont.tech.label': {
    en: `Literary techniques`,
    ar: `التقنيات الأدبية`,
    es: `Técnicas literarias`,
  },
  'resources.exam_tech.cont.title': {
    en: `Continue exploring`,
    ar: `كمّل استكشافك`,
    es: `Sigue explorando`,
  },

  /* ─── Exam technique hub - section card CTA ────────────────────── */
  'resources.exam_tech.cta.read_guide': {
    en: `Read the guide`,
    ar: `اقرأ الدليل`,
    es: `Leer la guía`,
  },

  /* ─── Exam day page ────────────────────────────────────────────── */
  'resources.exam_tech.day.bc_this': { en: `Exam day`, ar: `يوم الامتحان`, es: `Día del examen` },
  'resources.exam_tech.day.eyebrow': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.day.final_rev': {
    en: `One last revision before the big day`,
    ar: `مراجعة أخيرة قبل اليوم الكبير`,
    es: `Un último repaso antes del gran día`,
  },
  'resources.exam_tech.day.got_this': {
    en: `You have got this`,
    ar: `أنت تقدر عليها`,
    es: `Tú puedes`,
  },
  'resources.exam_tech.day.how_plan': {
    en: `How to plan your answers`,
    ar: `كيف تخطّط لإجاباتك`,
    es: `Cómo planificar tus respuestas`,
  },
  'resources.exam_tech.day.how_read': {
    en: `How to read the paper`,
    ar: `كيف تقرأ ورقة الامتحان`,
    es: `Cómo leer la prueba`,
  },
  'resources.exam_tech.day.last_5': {
    en: `The last 5 minutes`,
    ar: `آخر ٥ دقايق`,
    es: `Los últimos 5 minutos`,
  },
  'resources.exam_tech.day.stay_calm': {
    en: `How to stay calm under pressure`,
    ar: `كيف تبقى هادئ تحت الضغط`,
    es: `Cómo mantener la calma bajo presión`,
  },
  'resources.exam_tech.day.subtitle': {
    en: `Everything you need to walk into your GCSE or IGCSE English exam prepared, calm and ready to do your best.`,
    ar: `كل اللي تحتاجه عشان تدخل امتحان الإنجليزي GCSE أو IGCSE وأنت مستعد وهادئ وجاهز تعطي أحسن ما عندك.`,
    es: `Todo lo que necesitas para entrar en tu examen de inglés de GCSE o IGCSE preparado, tranquilo y listo para dar lo mejor de ti.`,
  },
  'resources.exam_tech.day.title': {
    en: `Exam day advice`,
    ar: `نصائح يوم الامتحان`,
    es: `Consejos para el día del examen`,
  },
  'resources.exam_tech.day.what_bring': {
    en: `What to bring`,
    ar: `وش تجيب معاك`,
    es: `Qué llevar`,
  },

  /* ─── Essay structure page ─────────────────────────────────────── */
  'resources.exam_tech.es.bc_this': {
    en: `Essay structure`,
    ar: `بنية المقال`,
    es: `Estructura de la redacción`,
  },
  'resources.exam_tech.es.conclusion': {
    en: `Conclusion techniques`,
    ar: `تقنيات الخاتمة`,
    es: `Técnicas de conclusión`,
  },
  'resources.exam_tech.es.eyebrow': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.es.how_many': {
    en: `How many paragraphs?`,
    ar: `كم فقرة تكتب؟`,
    es: `¿Cuántos párrafos?`,
  },
  'resources.exam_tech.es.intro': {
    en: `Introduction techniques`,
    ar: `تقنيات المقدّمة`,
    es: `Técnicas de introducción`,
  },
  'resources.exam_tech.es.linking': {
    en: `Linking paragraphs to build an argument`,
    ar: `ربط الفقرات لبناء حجّة متماسكة`,
    es: `Enlazar párrafos para construir un argumento`,
  },
  'resources.exam_tech.es.peel': {
    en: `The PEEL paragraph template`,
    ar: `قالب فقرة PEEL`,
    es: `La plantilla de párrafo PEEL`,
  },
  'resources.exam_tech.es.practise.body': {
    en: `Put these essay structures into practice with timed questions and graded model answers.`,
    ar: `طبّق بنى المقال هذي مع أسئلة موقّتة ونماذج إجابات مصحّحة.`,
    es: `Pon en práctica estas estructuras de redacción con preguntas cronometradas y respuestas modelo calificadas.`,
  },
  'resources.exam_tech.es.practise.cta_model': {
    en: `View model answers`,
    ar: `شوف نماذج الإجابات`,
    es: `Ver respuestas modelo`,
  },
  'resources.exam_tech.es.practise.cta_rev': {
    en: `Exam technique revision`,
    ar: `مراجعة تقنيات الامتحان`,
    es: `Repaso de técnica de examen`,
  },
  'resources.exam_tech.es.practise.title': {
    en: `Practise your essay structure`,
    ar: `تمرّن على بنية مقالك`,
    es: `Practica la estructura de tu redacción`,
  },
  'resources.exam_tech.es.subtitle': {
    en: `Proven templates for introductions, PEEL paragraphs, topic sentences, linking and conclusions - for every GCSE and IGCSE English essay.`,
    ar: `قوالب مجرّبة للمقدّمات وفقرات PEEL والجمل الموضوعية والربط والخواتيم - لكل مقال إنجليزي في GCSE وIGCSE.`,
    es: `Plantillas probadas para introducciones, párrafos PEEL, oraciones temáticas, enlaces y conclusiones, para cada redacción de inglés de GCSE e IGCSE.`,
  },
  'resources.exam_tech.es.title': {
    en: `Essay structure templates`,
    ar: `قوالب بنية المقال`,
    es: `Plantillas de estructura de redacción`,
  },
  'resources.exam_tech.es.topic': {
    en: `Writing strong topic sentences`,
    ar: `كتابة جمل موضوعية قوية`,
    es: `Escribir oraciones temáticas sólidas`,
  },

  /* ─── Exam technique hub - "explore the guides" ────────────────── */
  'resources.exam_tech.explore.subtitle': {
    en: `Four focused guides that cover everything you need to perform under exam conditions.`,
    ar: `أربعة أدلة مركّزة تغطّي كل اللي تحتاجه عشان تأدّي تحت ظروف الامتحان.`,
    es: `Cuatro guías enfocadas que cubren todo lo que necesitas para rendir en condiciones de examen.`,
  },
  'resources.exam_tech.explore.title': {
    en: `Explore the guides`,
    ar: `استكشف الأدلة`,
    es: `Explora las guías`,
  },

  /* ─── Exam technique hub - hero ────────────────────────────────── */
  'resources.exam_tech.hero.eyebrow': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.hero.subtitle': {
    en: `Knowledge alone does not earn top grades - exam technique does. Master timing, question types, essay structure and exam-day strategy.`,
    ar: `المعرفة وحدها ما تجيب أعلى الدرجات - تقنية الامتحان هي اللي تجيبها. أتقن التوقيت وأنواع الأسئلة وبنية المقال واستراتيجية يوم الامتحان.`,
    es: `El conocimiento por sí solo no logra las mejores notas; la técnica de examen sí. Domina el tiempo, los tipos de pregunta, la estructura de la redacción y la estrategia para el día del examen.`,
  },
  'resources.exam_tech.hero.title': {
    en: `Exam technique that turns knowledge into grades`,
    ar: `تقنية امتحان تحوّل المعرفة إلى درجات`,
    es: `Técnica de examen que convierte el conocimiento en notas`,
  },

  /* ─── Question types page ──────────────────────────────────────── */
  'resources.exam_tech.qt.bc_this': {
    en: `Question types`,
    ar: `أنواع الأسئلة`,
    es: `Tipos de pregunta`,
  },
  'resources.exam_tech.qt.eyebrow': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.qt.jump_to': {
    en: `Jump to a question type`,
    ar: `انتقل إلى نوع سؤال`,
    es: `Ir a un tipo de pregunta`,
  },
  'resources.exam_tech.qt.practise.body': {
    en: `Practise every question type with exam-style questions and instant feedback.`,
    ar: `تمرّن على كل نوع سؤال مع أسئلة بنمط الامتحان وملاحظات فورية.`,
    es: `Practica cada tipo de pregunta con preguntas con formato de examen y retroalimentación instantánea.`,
  },
  'resources.exam_tech.qt.practise.cta': {
    en: `Exam technique revision`,
    ar: `مراجعة تقنيات الامتحان`,
    es: `Repaso de técnica de examen`,
  },
  'resources.exam_tech.qt.practise.title': {
    en: `Practise these question types`,
    ar: `تمرّن على أنواع الأسئلة هذي`,
    es: `Practica estos tipos de pregunta`,
  },
  'resources.exam_tech.qt.subtitle': {
    en: `Decode what every question is really asking - how to structure your answer, common mistakes to avoid, and example responses.`,
    ar: `افهم وش يطلبه كل سؤال فعلاً - كيف تركّب إجابتك، والأخطاء الشائعة اللي تتجنّبها، ونماذج إجابات.`,
    es: `Descifra qué pide realmente cada pregunta: cómo estructurar tu respuesta, errores comunes que evitar y respuestas de ejemplo.`,
  },
  'resources.exam_tech.qt.title': {
    en: `How to approach different question types`,
    ar: `كيف تتعامل مع أنواع الأسئلة المختلفة`,
    es: `Cómo abordar los distintos tipos de pregunta`,
  },

  /* ─── Exam technique hub - quick wins ──────────────────────────── */
  'resources.exam_tech.qw.check.b': {
    en: `Always save the last few minutes to proofread for spelling, punctuation and grammar - easy marks are lost here.`,
    ar: `دايماً خلّ آخر دقايق للمراجعة الإملائية والترقيم والقواعد - هنا تضيع درجات سهلة.`,
    es: `Reserva siempre los últimos minutos para revisar la ortografía, la puntuación y la gramática: aquí se pierden puntos fáciles.`,
  },
  'resources.exam_tech.qw.check.h': {
    en: `Check your SPaG`,
    ar: `راجع الإملاء والترقيم`,
    es: `Revisa tu SPaG`,
  },
  'resources.exam_tech.qw.clock.b': {
    en: `Roughly one mark equals one minute. Watch the clock and never overrun a low-mark question.`,
    ar: `تقريباً كل درجة تساوي دقيقة. راقب الساعة ولا تتجاوز الوقت في سؤال قليل الدرجات.`,
    es: `Aproximadamente, un punto equivale a un minuto. Vigila el reloj y nunca te excedas en una pregunta de pocos puntos.`,
  },
  'resources.exam_tech.qw.clock.h': {
    en: `Watch the clock`,
    ar: `راقب الساعة`,
    es: `Vigila el reloj`,
  },
  'resources.exam_tech.qw.plan.b': {
    en: `Spend three to five minutes planning any extended answer - a quick plan keeps you focused and on-question.`,
    ar: `خصّص من ثلاث إلى خمس دقايق لتخطيط أي إجابة مطوّلة - الخطّة السريعة تخلّيك مركّز وملتزم بالسؤال.`,
    es: `Dedica de tres a cinco minutos a planificar cualquier respuesta extensa: un plan rápido te mantiene centrado y ceñido a la pregunta.`,
  },
  'resources.exam_tech.qw.plan.h': {
    en: `Plan before you write`,
    ar: `خطّط قبل ما تكتب`,
    es: `Planifica antes de escribir`,
  },
  'resources.exam_tech.qw.quotes.b': {
    en: `Embed short quotations of two to five words. Precise evidence is far stronger than long copied lines.`,
    ar: `ضمّن اقتباسات قصيرة من كلمتين إلى خمس كلمات. الدليل الدقيق أقوى بكثير من سطور منقولة طويلة.`,
    es: `Integra citas cortas de dos a cinco palabras. La evidencia precisa es mucho más sólida que largas líneas copiadas.`,
  },
  'resources.exam_tech.qw.quotes.h': {
    en: `Embed short quotations`,
    ar: `ضمّن اقتباسات قصيرة`,
    es: `Integra citas cortas`,
  },
  'resources.exam_tech.qw.read.b': {
    en: `Spend the first 10 to 15 minutes reading and annotating before you write a single word.`,
    ar: `خصّص أول ١٠ إلى ١٥ دقيقة للقراءة والتعليق على النص قبل ما تكتب ولا كلمة.`,
    es: `Dedica los primeros 10 a 15 minutos a leer y anotar antes de escribir una sola palabra.`,
  },
  'resources.exam_tech.qw.read.h': {
    en: `Read before you write`,
    ar: `اقرأ قبل ما تكتب`,
    es: `Lee antes de escribir`,
  },
  'resources.exam_tech.qw.subtitle': {
    en: `Five habits that make an immediate difference to your marks in any English exam.`,
    ar: `خمس عادات تفرق فوراً في درجاتك في أي امتحان إنجليزي.`,
    es: `Cinco hábitos que marcan una diferencia inmediata en tus notas en cualquier examen de inglés.`,
  },
  'resources.exam_tech.qw.title': {
    en: `Five quick wins`,
    ar: `خمسة مكاسب سريعة`,
    es: `Cinco victorias rápidas`,
  },

  /* ─── Exam technique hub - revision CTA ────────────────────────── */
  'resources.exam_tech.revcta.body': {
    en: `Put every technique into practice with timed, interactive exam-technique revision.`,
    ar: `طبّق كل تقنية مع مراجعة تفاعلية موقّتة لتقنيات الامتحان.`,
    es: `Pon en práctica cada técnica con un repaso de técnica de examen interactivo y cronometrado.`,
  },
  'resources.exam_tech.revcta.cta': {
    en: `Start exam technique revision`,
    ar: `ابدأ مراجعة تقنيات الامتحان`,
    es: `Empezar el repaso de técnica de examen`,
  },
  'resources.exam_tech.revcta.title': {
    en: `Ready to practise?`,
    ar: `جاهز تتمرّن؟`,
    es: `¿Listo para practicar?`,
  },

  /* ─── Exam technique hub - section cards ───────────────────────── */
  'resources.exam_tech.sec.day.badge': { en: `Be ready`, ar: `جهّز نفسك`, es: `Prepárate` },
  'resources.exam_tech.sec.day.desc': {
    en: `What to bring, how to read the paper, how to stay calm, and what to do in the last five minutes.`,
    ar: `وش تجيب معاك، وكيف تقرأ الورقة، وكيف تبقى هادئ، ووش تسوّي في آخر خمس دقايق.`,
    es: `Qué llevar, cómo leer la prueba, cómo mantener la calma y qué hacer en los últimos cinco minutos.`,
  },
  'resources.exam_tech.sec.day.title': {
    en: `Exam day advice`,
    ar: `نصائح يوم الامتحان`,
    es: `Consejos para el día del examen`,
  },
  'resources.exam_tech.sec.essay.badge': { en: `Structure`, ar: `البنية`, es: `Estructura` },
  'resources.exam_tech.sec.essay.desc': {
    en: `Introduction techniques, PEEL paragraphs, topic sentences, linking and strong conclusions.`,
    ar: `تقنيات المقدّمة، وفقرات PEEL، والجمل الموضوعية، والربط، والخواتيم القوية.`,
    es: `Técnicas de introducción, párrafos PEEL, oraciones temáticas, enlaces y conclusiones sólidas.`,
  },
  'resources.exam_tech.sec.essay.title': {
    en: `Essay structure templates`,
    ar: `قوالب بنية المقال`,
    es: `Plantillas de estructura de redacción`,
  },
  'resources.exam_tech.sec.qtypes.badge': { en: `Decode it`, ar: `افهمه`, es: `Descífralo` },
  'resources.exam_tech.sec.qtypes.desc': {
    en: `How to approach "How does the writer...", comparison, extract-based, essay and creative writing tasks.`,
    ar: `كيف تتعامل مع أسئلة "كيف يستخدم الكاتب..."، والمقارنة، والمقتطف، والمقال، والكتابة الإبداعية.`,
    es: `Cómo abordar las tareas de "¿Cómo logra el escritor...?", comparación, basadas en extractos, redacción y escritura creativa.`,
  },
  'resources.exam_tech.sec.qtypes.title': {
    en: `Question types`,
    ar: `أنواع الأسئلة`,
    es: `Tipos de pregunta`,
  },
  'resources.exam_tech.sec.time.badge': { en: `Pace it`, ar: `وزّع وقتك`, es: `Marca el ritmo` },
  'resources.exam_tech.sec.time.desc': {
    en: `Paper-by-paper timing breakdowns and how to divide time per question without running out.`,
    ar: `تقسيم التوقيت ورقة ورقة، وكيف توزّع الوقت لكل سؤال بدون ما يخلص الوقت.`,
    es: `Desgloses del tiempo prueba por prueba y cómo repartir el tiempo por pregunta sin quedarte corto.`,
  },
  'resources.exam_tech.sec.time.title': {
    en: `Time management`,
    ar: `إدارة الوقت`,
    es: `Gestión del tiempo`,
  },

  /* ─── Time management page ─────────────────────────────────────── */
  'resources.exam_tech.tm.bc_this': {
    en: `Time management`,
    ar: `إدارة الوقت`,
    es: `Gestión del tiempo`,
  },
  'resources.exam_tech.tm.divide': {
    en: `How to divide your time`,
    ar: `كيف توزّع وقتك`,
    es: `Cómo repartir tu tiempo`,
  },
  'resources.exam_tech.tm.eyebrow': {
    en: `Exam technique`,
    ar: `تقنيات الامتحان`,
    es: `Técnica de examen`,
  },
  'resources.exam_tech.tm.golden': {
    en: `The golden rule`,
    ar: `القاعدة الذهبية`,
    es: `La regla de oro`,
  },
  'resources.exam_tech.tm.plan': {
    en: `Build your timing plan`,
    ar: `ابنِ خطّتك الزمنية`,
    es: `Construye tu plan de tiempos`,
  },
  'resources.exam_tech.tm.practise': {
    en: `Practise with timed questions`,
    ar: `تمرّن بأسئلة موقّتة`,
    es: `Practica con preguntas cronometradas`,
  },
  'resources.exam_tech.tm.run_out': {
    en: `What to do if you run out of time`,
    ar: `وش تسوّي إذا خلص وقتك`,
    es: `Qué hacer si te quedas sin tiempo`,
  },
  'resources.exam_tech.tm.subtitle': {
    en: `Paper-by-paper timing breakdowns for AQA, Edexcel, Cambridge IGCSE and OCR - plus what to do if you run out of time.`,
    ar: `تقسيم التوقيت ورقة ورقة لـ AQA وEdexcel وCambridge IGCSE وOCR - بالإضافة لوش تسوّي إذا خلص وقتك.`,
    es: `Desgloses del tiempo prueba por prueba para AQA, Edexcel, Cambridge IGCSE y OCR, además de qué hacer si te quedas sin tiempo.`,
  },
  'resources.exam_tech.tm.title': {
    en: `Time management in English exams`,
    ar: `إدارة الوقت في امتحانات الإنجليزي`,
    es: `Gestión del tiempo en los exámenes de inglés`,
  },

  /* ─── Exam technique hub - why it matters ──────────────────────── */
  'resources.exam_tech.why.body1': {
    en: `Every year, students who know their texts inside out still miss top grades - not because they lack knowledge, but because they run out of time, misread the question, or never learned how to structure an answer under pressure.`,
    ar: `كل سنة، طلاب يعرفون نصوصهم عن ظهر قلب وبرضو يفوتهم أعلى الدرجات - مو لأنهم ما يعرفون، بس لأن الوقت يخلص عليهم، أو يقرون السؤال غلط، أو ما تعلّموا كيف يركّبون إجابة تحت الضغط.`,
    es: `Cada año, estudiantes que se saben sus textos al dedillo siguen sin alcanzar las mejores notas, no por falta de conocimiento, sino porque se quedan sin tiempo, malinterpretan la pregunta o nunca aprendieron a estructurar una respuesta bajo presión.`,
  },
  'resources.exam_tech.why.body2': {
    en: `Exam technique is the difference between knowing the answer and proving it on paper. These guides turn what you know into the marks you deserve.`,
    ar: `تقنية الامتحان هي الفرق بين إنك تعرف الإجابة وإنك تثبتها على الورقة. هالأدلة تحوّل اللي تعرفه إلى الدرجات اللي تستاهلها.`,
    es: `La técnica de examen es la diferencia entre saber la respuesta y demostrarlo sobre el papel. Estas guías convierten lo que sabes en las notas que mereces.`,
  },
  'resources.exam_tech.why.title': {
    en: `Why exam technique matters`,
    ar: `ليش تقنية الامتحان مهمّة`,
    es: `Por qué importa la técnica de examen`,
  },

  /* ─── Poetry hub - assessment objectives ───────────────────────── */
  'resources.poetry.ao.subtitle': {
    en: `Every poetry answer is marked against these assessment objectives. Knowing them tells you exactly what examiners reward.`,
    ar: `كل إجابة شعر تتصحّح حسب أهداف التقييم هذي. معرفتها تقول لك بالضبط وش يكافئ عليه المصحّحون.`,
    es: `Cada respuesta de poesía se califica según estos objetivos de evaluación. Conocerlos te dice exactamente qué premian los examinadores.`,
  },
  'resources.poetry.ao.tip_prefix': { en: `Tip:`, ar: `نصيحة:`, es: `Consejo:` },
  'resources.poetry.ao.title': {
    en: `How poetry is assessed`,
    ar: `كيف يُقيَّم الشعر`,
    es: `Cómo se evalúa la poesía`,
  },

  /* ─── Poetry hub - board badge prefix ──────────────────────────── */
  'resources.poetry.board_prefix': { en: `Tailored for`, ar: `مخصّص لـ`, es: `Adaptado para` },

  /* ─── Poetry hub - card CTAs ───────────────────────────────────── */
  'resources.poetry.cta.start_learning': {
    en: `Start learning`,
    ar: `ابدأ التعلّم`,
    es: `Empezar a aprender`,
  },
  'resources.poetry.cta.view_analysis': {
    en: `View analysis`,
    ar: `شوف التحليل`,
    es: `Ver análisis`,
  },

  /* ─── Poetry hub - hero ────────────────────────────────────────── */
  'resources.poetry.hero.eyebrow': { en: `GCSE poetry`, ar: `شعر GCSE`, es: `Poesía de GCSE` },
  'resources.poetry.hero.no_anthology_prefix': {
    en: `Your exam board`,
    ar: `مجلس امتحانك`,
    es: `Tu junta examinadora`,
  },
  'resources.poetry.hero.no_anthology_suffix': {
    en: `does not set a fixed poetry anthology, so we focus on unseen poetry skills instead. The technique and comparison guides below still apply.`,
    ar: `ما يحدّد مجموعة شعرية ثابتة، عشان كذا نركّز على مهارات الشعر غير المنظور بدالها. أدلة التقنية والمقارنة تحت تنطبق برضو.`,
    es: `no fija una antología de poesía concreta, así que nos centramos en las destrezas de poesía desconocida. Las guías de técnica y comparación de abajo siguen siendo válidas.`,
  },
  'resources.poetry.hero.subtitle': {
    en: `Clear, exam-focused analysis of every anthology poem, plus the techniques and comparison skills you need to score full marks.`,
    ar: `تحليل واضح وموجّه للامتحان لكل قصيدة في المجموعة، بالإضافة للتقنيات ومهارات المقارنة اللي تحتاجها عشان تاخذ الدرجة كاملة.`,
    es: `Análisis claro y enfocado al examen de cada poema de la antología, además de las técnicas y destrezas de comparación que necesitas para sacar la máxima nota.`,
  },
  'resources.poetry.hero.title': {
    en: `Poetry made clear`,
    ar: `الشعر بصورة واضحة`,
    es: `La poesía, clara`,
  },

  /* ─── Poetry hub - anthology card poem count suffix ────────────── */
  'resources.poetry.poems_suffix': { en: `poems`, ar: `قصيدة`, es: `poemas` },

  /* ─── Poetry hub - board sections ──────────────────────────────── */
  'resources.poetry.section.aqa.subtitle': {
    en: `In-depth analysis of all 15 poems in each AQA cluster, with key quotes, themes and comparison links.`,
    ar: `تحليل معمّق لكل الـ ١٥ قصيدة في كل مجموعة AQA، مع الاقتباسات الأساسية والثيمات وروابط المقارنة.`,
    es: `Análisis en profundidad de los 15 poemas de cada cluster de AQA, con citas clave, temas y enlaces de comparación.`,
  },
  'resources.poetry.section.aqa.title': {
    en: `AQA poetry anthology`,
    ar: `مجموعة شعر AQA`,
    es: `Antología de poesía de AQA`,
  },
  'resources.poetry.section.edex_igcse.body': {
    en: `Edexcel IGCSE poetry is covered in our dedicated anthology guides. Use the techniques and comparison resources below alongside them.`,
    ar: `شعر Edexcel IGCSE مغطّى في أدلة المجموعة المخصّصة عندنا. استخدم مصادر التقنيات والمقارنة تحت معاها.`,
    es: `La poesía de Edexcel IGCSE se trata en nuestras guías de antología dedicadas. Usa los recursos de técnicas y comparación de abajo junto con ellas.`,
  },
  'resources.poetry.section.edex_igcse.title': {
    en: `Edexcel IGCSE poetry`,
    ar: `شعر Edexcel IGCSE`,
    es: `Poesía de Edexcel IGCSE`,
  },
  'resources.poetry.section.edexcel.subtitle': {
    en: `Full analysis of the Edexcel Conflict and Time and Place collections, with quotes and comparison guidance.`,
    ar: `تحليل كامل لمجموعتي Conflict وTime and Place من Edexcel، مع الاقتباسات وإرشادات المقارنة.`,
    es: `Análisis completo de las colecciones Conflict y Time and Place de Edexcel, con citas y orientación para la comparación.`,
  },
  'resources.poetry.section.edexcel.title': {
    en: `Edexcel poetry anthology`,
    ar: `مجموعة شعر Edexcel`,
    es: `Antología de poesía de Edexcel`,
  },
  'resources.poetry.section.eduqas.subtitle': {
    en: `Detailed analysis of all 18 poems in the WJEC Eduqas anthology, with themes and comparison links.`,
    ar: `تحليل مفصّل لكل الـ ١٨ قصيدة في مجموعة WJEC Eduqas، مع الثيمات وروابط المقارنة.`,
    es: `Análisis detallado de los 18 poemas de la antología de WJEC Eduqas, con temas y enlaces de comparación.`,
  },
  'resources.poetry.section.eduqas.title': {
    en: `Eduqas poetry anthology`,
    ar: `مجموعة شعر Eduqas`,
    es: `Antología de poesía de Eduqas`,
  },
  'resources.poetry.section.ocr.body': {
    en: `OCR poetry is covered in our dedicated anthology guides. Use the techniques and comparison resources below alongside them.`,
    ar: `شعر OCR مغطّى في أدلة المجموعة المخصّصة عندنا. استخدم مصادر التقنيات والمقارنة تحت معاها.`,
    es: `La poesía de OCR se trata en nuestras guías de antología dedicadas. Usa los recursos de técnicas y comparación de abajo junto con ellas.`,
  },
  'resources.poetry.section.ocr.title': { en: `OCR poetry`, ar: `شعر OCR`, es: `Poesía de OCR` },

  /* ─── Poetry hub - skills + tips + top 10 ──────────────────────── */
  'resources.poetry.skills.subtitle': {
    en: `Master the analytical skills that work across every poem - seen or unseen.`,
    ar: `أتقن المهارات التحليلية اللي تشتغل مع كل قصيدة - منظورة أو غير منظورة.`,
    es: `Domina las destrezas analíticas que sirven para cualquier poema, conocido o desconocido.`,
  },
  'resources.poetry.skills.title': {
    en: `Poetry skills guides`,
    ar: `أدلة مهارات الشعر`,
    es: `Guías de destrezas de poesía`,
  },
  'resources.poetry.tips.subtitle': {
    en: `Quick, practical advice to lift your poetry marks straight away.`,
    ar: `نصايح سريعة وعملية ترفع درجات الشعر عندك من طول.`,
    es: `Consejos rápidos y prácticos para subir tus notas de poesía de inmediato.`,
  },
  'resources.poetry.tips.title': {
    en: `Quick poetry tips`,
    ar: `نصايح شعر سريعة`,
    es: `Consejos rápidos de poesía`,
  },
  'resources.poetry.top10.subtitle': {
    en: `The poems that come up most often in exams - start your revision here.`,
    ar: `القصايد اللي تجي أكثر شي في الامتحانات - ابدأ مراجعتك من هنا.`,
    es: `Los poemas que aparecen con más frecuencia en los exámenes: empieza tu repaso aquí.`,
  },
  'resources.poetry.top10.title': {
    en: `Top 10 most tested poems`,
    ar: `أكثر ١٠ قصايد تجي في الامتحان`,
    es: `Los 10 poemas más examinados`,
  },

  /* ─── Study tools - board badge prefix ─────────────────────────── */
  'resources.study_tools.board_prefix': { en: `Tailored for`, ar: `مخصّص لـ`, es: `Adaptado para` },

  /* ─── Study tools - checklists page ────────────────────────────── */
  'resources.study_tools.checklists.all_covered': {
    en: `Every skill covered - you are exam-ready!`,
    ar: `كل المهارات مغطّاة - أنت جاهز للامتحان!`,
    es: `Todas las destrezas cubiertas: ¡estás listo para el examen!`,
  },
  'resources.study_tools.checklists.check_all': {
    en: `Check all`,
    ar: `حدّد الكل`,
    es: `Marcar todo`,
  },
  'resources.study_tools.checklists.clear_all': {
    en: `Clear all`,
    ar: `امسح الكل`,
    es: `Borrar todo`,
  },
  'resources.study_tools.checklists.of': { en: `of`, ar: `من`, es: `de` },
  'resources.study_tools.checklists.skills_covered': {
    en: `skills covered`,
    ar: `مهارة مغطّاة`,
    es: `destrezas cubiertas`,
  },
  'resources.study_tools.checklists.subtitle': {
    en: `Tick off every skill your exam board assesses. Your progress is saved automatically on this device.`,
    ar: `أشّر على كل مهارة يقيّمها مجلس امتحانك. تقدّمك ينحفظ تلقائياً على هذا الجهاز.`,
    es: `Marca cada destreza que evalúa tu junta examinadora. Tu progreso se guarda automáticamente en este dispositivo.`,
  },
  'resources.study_tools.checklists.tip.confident.body': {
    en: `Only tick a skill once you could explain or demonstrate it under exam conditions.`,
    ar: `لا تأشّر على مهارة إلا لمّا تقدر تشرحها أو تطبّقها تحت ظروف الامتحان.`,
    es: `Marca una destreza solo cuando puedas explicarla o demostrarla en condiciones de examen.`,
  },
  'resources.study_tools.checklists.tip.confident.label': {
    en: `Be honest:`,
    ar: `كن صريح مع نفسك:`,
    es: `Sé honesto:`,
  },
  'resources.study_tools.checklists.tip.prioritise.body': {
    en: `Focus your revision on the unticked items first - they are where the marks are.`,
    ar: `ركّز مراجعتك على البنود غير المؤشّرة أول - هي مكان الدرجات.`,
    es: `Centra tu repaso primero en los elementos sin marcar: ahí es donde están los puntos.`,
  },
  'resources.study_tools.checklists.tip.prioritise.label': {
    en: `Prioritise:`,
    ar: `رتّب الأولويات:`,
    es: `Prioriza:`,
  },
  'resources.study_tools.checklists.tip.revisit.body': {
    en: `Come back a week before the exam and re-check - confidence fades without practice.`,
    ar: `ارجع قبل الامتحان بأسبوع وراجع مرّة ثانية - الثقة تخفّ بدون تمرين.`,
    es: `Vuelve una semana antes del examen y revisa de nuevo: la confianza se desvanece sin práctica.`,
  },
  'resources.study_tools.checklists.tip.revisit.label': {
    en: `Revisit:`,
    ar: `راجع من جديد:`,
    es: `Repasa de nuevo:`,
  },
}
