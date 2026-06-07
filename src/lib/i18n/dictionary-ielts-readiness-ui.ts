// ─── IELTS readiness UI dictionary shard ────────────────────────────────────
// EN + Khaleeji (Gulf) Arabic for the IELTS "readiness" client cluster that
// previously hard-coded English and leaked when the site switched to Arabic:
//
//   • ielts.readiness.*    + ielts.readinessui.*  → ReadinessReportClient.tsx
//   • ielts.visa.*                                → VisaFinanceChecklistClient.tsx
//   • ielts.admissions.ps.q.*                     → personal-statement/page.tsx
//                                                   (only the 3 QUESTIONS items;
//                                                    the rest of ps.* lives in
//                                                    dictionary-ielts-admissions.ts)
//
// `en` reproduces the ORIGINAL English VERBATIM, including curly apostrophes (’)
// and en-dashes (–), so English mode is visually unchanged.
//
// Khaleeji conventions per the master dictionary header (شنو/شلون/أبغى/وايد/
// الحين/إحنا/روح/شوف/دوّر/سكّر/ببلاش/لحظة); Levantine forms (شو/بحكي/كيفك/ليش)
// are banned. Brand + technical terms stay Latin even inside Arabic text:
// The English Hub, IELTS, UCAS, CAS, ATAS, TB test, UKVI, BRP, London, PDF, CEFR
// B2, Band, gov.uk, the 28-day / 31-day figures, and £ amounts. Tokens like
// {date}, {rate}, {months}, {n} are preserved verbatim for runtime .replace().
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_READINESS_UI_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  // ══ ReadinessReportClient: header / overall ════════════════════════════════
  'ielts.readiness.header.title': {
    en: 'UK Candidate Readiness Report',
    ar: 'تقرير جاهزيتك للدراسة في UK',
    es: 'Informe de preparación para estudiar en el Reino Unido',
  },
  'ielts.readiness.header.subtitle': {
    en: 'Your traffic-light score across English, application, visa & finance, and the move.',
    ar: 'درجتك بنظام الإشارة الضوئية على الإنجليزي، والتقديم، والـ visa والتمويل، والانتقال نفسه.',
    es: 'Tu puntuación tipo semáforo en inglés, solicitud, visado y finanzas, y la mudanza.',
  },
  'ielts.readiness.print.meta': {
    en: 'Generated {date} · The English Hub · IELTS / UK-study preparation',
    ar: 'تم الإنشاء {date} · The English Hub · تحضير IELTS / الدراسة في UK',
    es: 'Generado el {date} · The English Hub · Preparación para IELTS / estudios en el Reino Unido',
  },
  'ielts.readiness.overall.eyebrow': {
    en: 'Overall UK readiness',
    ar: 'الجاهزية الكلية للدراسة في UK',
    es: 'Preparación global para el Reino Unido',
  },
  'ielts.readiness.overall.lead': {
    en: 'A combined view of how ready you are to study in the UK — across your English, your application, visa & finance, and the move itself.',
    ar: 'نظرة شاملة لمدى جاهزيتك للدراسة في UK — على مستوى إنجليزيك، وتقديمك، والـ visa والتمويل، والانتقال نفسه.',
    es: 'Una visión combinada de tu preparación para estudiar en el Reino Unido: tu inglés, tu solicitud, el visado y las finanzas, y la propia mudanza.',
  },

  // ══ Locked / paywall ═══════════════════════════════════════════════════════
  'ielts.readiness.locked.badge': { en: 'Locked', ar: 'مقفّل', es: 'Bloqueado' },
  'ielts.readiness.locked.domain': {
    en: 'Unlock the full report to see this domain’s score, facts and recommendation.',
    ar: 'افتح التقرير الكامل عشان تشوف درجة هذا المجال وحقائقه والتوصية حقّته.',
    es: 'Desbloquea el informe completo para ver la puntuación, los datos y la recomendación de este ámbito.',
  },
  'ielts.readiness.locked.title': {
    en: 'Unlock your full UK Readiness Report',
    ar: 'افتح تقرير جاهزيتك الكامل للدراسة في UK',
    es: 'Desbloquea tu informe completo de preparación para el Reino Unido',
  },
  'ielts.readiness.locked.body': {
    en: 'See your overall traffic-light score, every domain’s sub-score, your red flags and a 7/30/60-day action plan — and export it to PDF. Part of the IELTS plan.',
    ar: 'شوف درجتك الكلية بنظام الإشارة الضوئية، ودرجة كل مجال، والإنذارات الحمراء حقّتك، وخطة عمل لـ 7/30/60 يوم — وصدّرها PDF. جزء من خطة IELTS.',
    es: 'Consulta tu puntuación global tipo semáforo, la subpuntuación de cada ámbito, tus señales de alerta y un plan de acción a 7/30/60 días, y expórtalo a PDF. Forma parte del plan IELTS.',
  },
  'ielts.readiness.locked.cta': {
    en: 'See IELTS plans — {currency}{price}/month',
    ar: 'شوف خطط IELTS — {currency}{price}/شهر',
    es: 'Ver planes de IELTS: {currency}{price}/mes',
  },

  // ══ Target band selector ═══════════════════════════════════════════════════
  'ielts.readiness.target.title': {
    en: 'Your target band',
    ar: 'الـ Band المستهدف حقّك',
    es: 'Tu banda objetivo',
  },
  'ielts.readiness.target.body': {
    en: 'Set the overall band your course requires — English readiness is scored against it.',
    ar: 'حدّد الـ Band الكلي اللي يطلبه تخصصك — جاهزية الإنجليزي تتقيّم مقابله.',
    es: 'Fija la banda global que exige tu curso: la preparación de inglés se puntúa con respecto a ella.',
  },
  'ielts.readiness.target.option_prefix': { en: 'Band', ar: 'Band', es: 'Band' },

  // ══ Per-domain cards ═══════════════════════════════════════════════════════
  'ielts.readiness.domain.weight_prefix': { en: 'Weighted', ar: 'بوزن', es: 'Ponderado' },
  'ielts.readiness.domain.weight_suffix': { en: 'of 100', ar: 'من 100', es: 'de 100' },
  'ielts.readiness.domain.recommend': {
    en: 'Recommendation: ',
    ar: 'التوصية: ',
    es: 'Recomendación: ',
  },
  'ielts.readiness.tool.visa': {
    en: 'Open the Visa & finance checklist',
    ar: 'افتح checklist الـ visa والتمويل',
    es: 'Abrir la lista de comprobación de visado y finanzas',
  },
  'ielts.readiness.tool.academic': {
    en: 'Open the Academic-transition modules',
    ar: 'افتح وحدات الانتقال الأكاديمي',
    es: 'Abrir los módulos de transición académica',
  },

  // ══ Red flags ══════════════════════════════════════════════════════════════
  'ielts.readiness.flags.title': { en: 'Red flags', ar: 'إنذارات حمراء', es: 'Señales de alerta' },
  'ielts.readiness.flags.none': {
    en: 'No red flags right now. Keep your answers up to date as things change.',
    ar: 'ما في إنذارات حمراء الحين. خلّ إجاباتك محدّثة كل ما تتغيّر الأمور.',
    es: 'No hay señales de alerta ahora mismo. Mantén tus respuestas actualizadas a medida que cambien las cosas.',
  },
  'ielts.readiness.flags.high': { en: 'High priority', ar: 'أولوية عالية', es: 'Prioridad alta' },
  'ielts.readiness.flags.medium': {
    en: 'Worth fixing',
    ar: 'يستاهل التصليح',
    es: 'Conviene resolverlo',
  },

  // ══ Next actions ═══════════════════════════════════════════════════════════
  'ielts.readiness.actions.title': {
    en: 'Next actions',
    ar: 'الخطوات الجاية',
    es: 'Próximas acciones',
  },
  'ielts.readiness.actions.7-day': {
    en: 'Next 7 days',
    ar: 'الـ 7 أيام الجاية',
    es: 'Próximos 7 días',
  },
  'ielts.readiness.actions.30-day': {
    en: 'Next 30 days',
    ar: 'الـ 30 يوم الجاية',
    es: 'Próximos 30 días',
  },
  'ielts.readiness.actions.60-day': {
    en: 'Next 60 days',
    ar: 'الـ 60 يوم الجاية',
    es: 'Próximos 60 días',
  },
  'ielts.readiness.actions.empty': {
    en: 'Nothing outstanding here.',
    ar: 'ما في شي متبقّي هنا.',
    es: 'Aquí no hay nada pendiente.',
  },

  // ══ Self-report editor ═════════════════════════════════════════════════════
  'ielts.readiness.selfreport.title': {
    en: 'Update your details',
    ar: 'حدّث بياناتك',
    es: 'Actualiza tus datos',
  },
  'ielts.readiness.selfreport.body': {
    en: 'Your answers are saved on this device and the score updates instantly. English readiness is read automatically from your latest diagnostic and practice.',
    ar: 'إجاباتك محفوظة على هذا الجهاز والدرجة تتحدّث فوراً. جاهزية الإنجليزي تتقرى تلقائياً من آخر diagnostic وتمرين حقّك.',
    es: 'Tus respuestas se guardan en este dispositivo y la puntuación se actualiza al instante. La preparación de inglés se lee automáticamente de tu último diagnóstico y práctica.',
  },
  'ielts.readiness.disclaimer': {
    en: 'This readiness report is preparation guidance only, based on your own answers and your IELTS practice. It is not an official UCAS, university, or UK Visas & Immigration assessment, and not a prediction or guarantee of any outcome.',
    ar: 'تقرير الجاهزية هذا إرشاد تحضيري بس، مبني على إجاباتك أنت وتمرينك في IELTS. مو تقييم رسمي من UCAS أو الجامعة أو UK Visas & Immigration، ومو توقّع ولا ضمان لأي نتيجة.',
    es: 'Este informe de preparación es solo una guía de preparación, basada en tus propias respuestas y tu práctica de IELTS. No es una evaluación oficial de UCAS, de una universidad ni de UK Visas & Immigration, y no es una predicción ni una garantía de ningún resultado.',
  },

  // ══ CTAs ═══════════════════════════════════════════════════════════════════
  'ielts.readiness.cta.plan': {
    en: 'View study plan',
    ar: 'شوف خطة الدراسة',
    es: 'Ver plan de estudio',
  },
  'ielts.readiness.cta.ps': {
    en: 'Personal-Statement Coach',
    ar: 'مدرّب الـ Personal Statement',
    es: 'Asesor de Personal Statement',
  },
  'ielts.readiness.cta.export': {
    en: 'Export / Save as PDF',
    ar: 'تصدير / حفظ PDF',
    es: 'Exportar / Guardar como PDF',
  },

  // ══ Self-report group titles + field labels ════════════════════════════════
  'ielts.readiness.group.application': { en: 'Application', ar: 'التقديم', es: 'Solicitud' },
  'ielts.readiness.group.visa': {
    en: 'Visa & finance',
    ar: 'الـ Visa والتمويل',
    es: 'Visado y finanzas',
  },
  'ielts.readiness.group.academic': {
    en: 'Academic transition',
    ar: 'الانتقال الأكاديمي',
    es: 'Transición académica',
  },

  'ielts.readiness.f.courseClarity': {
    en: 'Course / subject choice',
    ar: 'اختيار التخصص / المادة',
    es: 'Elección de curso / asignatura',
  },
  'ielts.readiness.f.refereeStatus': {
    en: 'UCAS referee',
    ar: 'معرّف UCAS',
    es: 'Referente de UCAS',
  },
  'ielts.readiness.f.transcriptStatus': {
    en: 'Academic transcript',
    ar: 'كشف الدرجات الأكاديمي',
    es: 'Expediente académico',
  },
  'ielts.readiness.f.shortlistDone': {
    en: 'Five UCAS choices shortlisted',
    ar: 'خمس اختيارات UCAS تم اختيارها',
    es: 'Cinco opciones de UCAS preseleccionadas',
  },
  'ielts.readiness.f.q1': {
    en: 'UCAS Q1 drafted',
    ar: 'مسودّة سؤال UCAS الأول جاهزة',
    es: 'Pregunta 1 de UCAS redactada',
  },
  'ielts.readiness.f.q2': {
    en: 'UCAS Q2 drafted',
    ar: 'مسودّة سؤال UCAS الثاني جاهزة',
    es: 'Pregunta 2 de UCAS redactada',
  },
  'ielts.readiness.f.q3': {
    en: 'UCAS Q3 drafted',
    ar: 'مسودّة سؤال UCAS الثالث جاهزة',
    es: 'Pregunta 3 de UCAS redactada',
  },
  'ielts.readiness.f.ps_note': {
    en: 'Tip: run the Personal-Statement Coach to turn your drafts into scored feedback — that lifts this domain further than drafting alone.',
    ar: 'نصيحة: شغّل مدرّب الـ Personal Statement عشان يحوّل مسوّداتك لتقييم بدرجات — هذا يرفع هذا المجال أكثر من المسودّة لحالها.',
    es: 'Consejo: usa el Asesor de Personal Statement para convertir tus borradores en feedback con puntuación; eso eleva este ámbito más que solo redactar.',
  },
  'ielts.readiness.f.passportValid': { en: 'Passport', ar: 'جواز السفر', es: 'Pasaporte' },
  'ielts.readiness.f.fundsEvidence': {
    en: 'Funds evidence',
    ar: 'إثبات الأموال',
    es: 'Prueba de fondos',
  },
  'ielts.readiness.f.sponsor': {
    en: 'Sponsor / scholarship',
    ar: 'راعي / منحة',
    es: 'Patrocinador / beca',
  },
  'ielts.readiness.f.casStage': {
    en: 'CAS / offer stage',
    ar: 'مرحلة CAS / العرض',
    es: 'Fase de CAS / oferta',
  },
  'ielts.readiness.f.tbTest': {
    en: 'TB test (if required)',
    ar: 'TB test (إذا مطلوب)',
    es: 'TB test (si se requiere)',
  },
  'ielts.readiness.f.atas': {
    en: 'ATAS (if required)',
    ar: 'ATAS (إذا مطلوب)',
    es: 'ATAS (si se requiere)',
  },
  'ielts.readiness.f.academicWriting': {
    en: 'Academic-writing confidence',
    ar: 'ثقتك في الكتابة الأكاديمية',
    es: 'Confianza en la escritura académica',
  },
  'ielts.readiness.f.budgeting': {
    en: 'Budgeting confidence',
    ar: 'ثقتك في إدارة الميزانية',
    es: 'Confianza en la gestión del presupuesto',
  },
  'ielts.readiness.f.accommodation': { en: 'Accommodation', ar: 'السكن', es: 'Alojamiento' },
  'ielts.readiness.f.contactHours': {
    en: 'Understand contact hours',
    ar: 'فاهم ساعات التواصل الدراسية',
    es: 'Comprender las horas lectivas',
  },

  'ielts.readiness.tools_note': {
    en: 'Want to go deeper? The interactive Visa & Finance checklist and Academic-transition modules feed these scores automatically — work through them to upgrade these domains from self-report to tool-driven.',
    ar: 'تبغى تتعمّق أكثر؟ checklist الـ Visa والتمويل التفاعلية ووحدات الانتقال الأكاديمي تغذّي هالدرجات تلقائياً — اشتغل عليها عشان ترقّي هالمجالات من تقرير ذاتي إلى مبني على الأدوات.',
    es: '¿Quieres profundizar más? La lista de comprobación interactiva de visado y finanzas y los módulos de transición académica alimentan estas puntuaciones automáticamente: complétalos para mejorar estos ámbitos pasando del autoinforme a algo basado en herramientas.',
  },

  // ══ readinessui.* — option labels (constants resolved via t()) ═════════════
  'ielts.readinessui.colour.green': {
    en: 'On track',
    ar: 'على المسار الصحيح',
    es: 'En buen camino',
  },
  'ielts.readinessui.colour.amber': {
    en: 'Some gaps',
    ar: 'في بعض الثغرات',
    es: 'Algunas carencias',
  },
  'ielts.readinessui.colour.red': { en: 'Needs work', ar: 'يحتاج شغل', es: 'Necesita trabajo' },

  'ielts.readinessui.owner.student': { en: 'Student', ar: 'الطالب', es: 'Estudiante' },
  'ielts.readinessui.owner.parent': { en: 'Parent', ar: 'ولي الأمر', es: 'Padre/madre' },
  'ielts.readinessui.owner.counsellor': { en: 'Counsellor', ar: 'المرشد', es: 'Orientador' },

  'ielts.readinessui.horizon.7day': {
    en: 'Next 7 days',
    ar: 'الـ 7 أيام الجاية',
    es: 'Próximos 7 días',
  },
  'ielts.readinessui.horizon.30day': {
    en: 'Next 30 days',
    ar: 'الـ 30 يوم الجاية',
    es: 'Próximos 30 días',
  },
  'ielts.readinessui.horizon.60day': {
    en: 'Next 60 days',
    ar: 'الـ 60 يوم الجاية',
    es: 'Próximos 60 días',
  },

  'ielts.readinessui.opt.course.decided': { en: 'Decided', ar: 'محدّد', es: 'Decidido' },
  'ielts.readinessui.opt.course.shortlisted': {
    en: 'Shortlisted',
    ar: 'في القائمة المختصرة',
    es: 'Preseleccionado',
  },
  'ielts.readinessui.opt.course.undecided': {
    en: 'Undecided',
    ar: 'ما تحدّد بعد',
    es: 'Sin decidir',
  },

  'ielts.readinessui.opt.referee.secured': { en: 'Secured', ar: 'مؤمّن', es: 'Confirmado' },
  'ielts.readinessui.opt.referee.asked': {
    en: 'Asked, awaiting',
    ar: 'طلبت، بانتظار الرد',
    es: 'Solicitado, a la espera',
  },
  'ielts.readinessui.opt.referee.none': { en: 'Not arranged', ar: 'ما ترتّب', es: 'Sin gestionar' },

  'ielts.readinessui.opt.transcript.ready': { en: 'Ready', ar: 'جاهز', es: 'Listo' },
  'ielts.readinessui.opt.transcript.requested': {
    en: 'Requested',
    ar: 'تم الطلب',
    es: 'Solicitado',
  },
  'ielts.readinessui.opt.transcript.none': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },

  'ielts.readinessui.opt.passport.valid': { en: 'Valid', ar: 'ساري', es: 'Válido' },
  'ielts.readinessui.opt.passport.expiring': {
    en: 'Expiring / renewing',
    ar: 'قارب ينتهي / قيد التجديد',
    es: 'Caducando / renovando',
  },
  'ielts.readinessui.opt.passport.no': {
    en: 'Not valid yet',
    ar: 'مو ساري بعد',
    es: 'Aún no válido',
  },

  'ielts.readinessui.opt.funds.ready': {
    en: 'Ready (28-day rule met)',
    ar: 'جاهز (قاعدة الـ 28 يوم متحقّقة)',
    es: 'Listos (regla de 28 días cumplida)',
  },
  'ielts.readinessui.opt.funds.gathering': {
    en: 'Gathering',
    ar: 'قيد التجميع',
    es: 'Reuniéndolos',
  },
  'ielts.readinessui.opt.funds.none': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },

  'ielts.readinessui.opt.sponsor.self': {
    en: 'Self-funded',
    ar: 'تمويل ذاتي',
    es: 'Autofinanciado',
  },
  'ielts.readinessui.opt.sponsor.confirmed': {
    en: 'Sponsor confirmed',
    ar: 'الراعي مؤكّد',
    es: 'Patrocinador confirmado',
  },
  'ielts.readinessui.opt.sponsor.applying': {
    en: 'Applying',
    ar: 'قيد التقديم',
    es: 'Solicitando',
  },
  'ielts.readinessui.opt.sponsor.unknown': { en: 'Unknown', ar: 'غير معروف', es: 'Desconocido' },

  'ielts.readinessui.opt.cas.received': {
    en: 'CAS received',
    ar: 'تم استلام CAS',
    es: 'CAS recibido',
  },
  'ielts.readinessui.opt.cas.offer': { en: 'Offer holder', ar: 'حامل عرض قبول', es: 'Con oferta' },
  'ielts.readinessui.opt.cas.applying': { en: 'Applying', ar: 'قيد التقديم', es: 'Solicitando' },
  'ielts.readinessui.opt.cas.notstarted': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },

  'ielts.readinessui.opt.na': { en: 'Not applicable', ar: 'لا ينطبق', es: 'No aplicable' },
  'ielts.readinessui.opt.tb.done': { en: 'Done', ar: 'تم', es: 'Hecho' },
  'ielts.readinessui.opt.tb.outstanding': { en: 'Outstanding', ar: 'متبقّي', es: 'Pendiente' },
  'ielts.readinessui.opt.atas.granted': { en: 'Granted', ar: 'تم منحه', es: 'Concedido' },
  'ielts.readinessui.opt.atas.outstanding': { en: 'Outstanding', ar: 'متبقّي', es: 'Pendiente' },

  'ielts.readinessui.opt.confidence.confident': { en: 'Confident', ar: 'واثق', es: 'Seguro' },
  'ielts.readinessui.opt.confidence.some': { en: 'Some', ar: 'شوي', es: 'Algo' },
  'ielts.readinessui.opt.confidence.low': { en: 'Low', ar: 'ضعيفة', es: 'Baja' },

  'ielts.readinessui.opt.accom.sorted': { en: 'Sorted', ar: 'مرتّب', es: 'Resuelto' },
  'ielts.readinessui.opt.accom.searching': { en: 'Searching', ar: 'أدوّر', es: 'Buscando' },
  'ielts.readinessui.opt.accom.notstarted': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },

  'ielts.readinessui.opt.contact.understand': {
    en: 'Yes, I understand',
    ar: 'إي، فاهم',
    es: 'Sí, lo entiendo',
  },
  'ielts.readinessui.opt.contact.unsure': { en: 'Unsure', ar: 'مو متأكّد', es: 'No estoy seguro' },

  // ══ VisaFinanceChecklistClient: header ═════════════════════════════════════
  'ielts.visa.header.title': {
    en: 'Visa & finance checklist',
    ar: 'checklist الـ Visa والتمويل',
    es: 'Lista de comprobación de visado y finanzas',
  },
  'ielts.visa.header.subtitle': {
    en: 'Work through the UK Student-route money and document rules to get a clear can-apply status.',
    ar: 'اشتغل على قواعد الأموال والمستندات لمسار الـ Student visa في UK عشان تطلع بحالة واضحة تقدر تقدّم.',
    es: 'Repasa las normas de dinero y documentos de la ruta Student del Reino Unido para obtener un estado claro de si puedes solicitarlo.',
  },
  'ielts.visa.disclaimer': {
    en: 'This is preparation guidance only, not immigration advice, and not affiliated with UK Visas & Immigration. Rules and amounts change — always check the current requirements on ',
    ar: 'هذا إرشاد تحضيري بس، مو استشارة هجرة، ومو تابع لـ UK Visas & Immigration. القواعد والمبالغ تتغيّر — دايم تأكّد من المتطلبات الحالية على ',
    es: 'Esto es solo una guía de preparación, no asesoramiento de inmigración, y no está afiliado a UK Visas & Immigration. Las normas y los importes cambian: comprueba siempre los requisitos actuales en ',
  },

  // ══ Status traffic light (STATUS_META + eyebrow/columns/synced) ════════════
  'ielts.visa.status.eyebrow': {
    en: 'Visa & finance readiness',
    ar: 'جاهزية الـ Visa والتمويل',
    es: 'Preparación de visado y finanzas',
  },
  'ielts.visa.status.ready.label': {
    en: 'Ready to apply',
    ar: 'جاهز للتقديم',
    es: 'Listo para solicitar',
  },
  'ielts.visa.status.ready.blurb': {
    en: 'Your core visa and finance items are in place. Confirm your CAS dates, then book your visa appointment.',
    ar: 'بنود الـ visa والتمويل الأساسية حقّتك جاهزة. أكّد تواريخ الـ CAS، وبعدين احجز موعد الـ visa.',
    es: 'Tus elementos básicos de visado y finanzas están en orden. Confirma las fechas de tu CAS y luego reserva tu cita para el visado.',
  },
  'ielts.visa.status.notyet.label': {
    en: 'Not yet — items outstanding',
    ar: 'مو بعد — في بنود متبقّية',
    es: 'Todavía no: hay elementos pendientes',
  },
  'ielts.visa.status.notyet.blurb': {
    en: 'You are on track but a few items still need finishing before you can submit a strong visa application.',
    ar: 'إنت على المسار الصحيح بس في كم بند لازم تخلّصه قبل ما تقدر تقدّم طلب visa قوي.',
    es: 'Vas por buen camino, pero aún faltan algunos elementos por terminar antes de poder presentar una solicitud de visado sólida.',
  },
  'ielts.visa.status.blocked.label': {
    en: 'Blocked — must resolve first',
    ar: 'متوقّف — لازم تحلّه أول',
    es: 'Bloqueado: hay que resolverlo primero',
  },
  'ielts.visa.status.blocked.blurb': {
    en: 'One or more items would block a visa application right now. Resolve the blocking items below before applying.',
    ar: 'في بند أو أكثر بيوقف طلب الـ visa الحين. حلّ البنود الموقِفة تحت قبل ما تقدّم.',
    es: 'Uno o más elementos bloquearían una solicitud de visado ahora mismo. Resuelve los elementos bloqueantes de abajo antes de solicitarlo.',
  },
  'ielts.visa.status.blocking': {
    en: 'Blocking items',
    ar: 'بنود موقِفة',
    es: 'Elementos bloqueantes',
  },
  'ielts.visa.status.outstanding': { en: 'Still to do', ar: 'لسّا باقي', es: 'Aún por hacer' },
  'ielts.visa.status.synced': {
    en: 'Your answers feed the Visa & finance domain of your UK Candidate Readiness Report automatically.',
    ar: 'إجاباتك تغذّي مجال الـ Visa والتمويل في تقرير جاهزيتك للدراسة في UK تلقائياً.',
    es: 'Tus respuestas alimentan automáticamente el ámbito de visado y finanzas de tu informe de preparación para el Reino Unido.',
  },

  // ══ computeStatus() messages (keys resolved at render) ═════════════════════
  'ielts.visa.msg.passport.invalid': {
    en: 'Passport is not valid — you cannot apply without one.',
    ar: 'جواز السفر مو ساري — ما تقدر تقدّم من دونه.',
    es: 'El pasaporte no es válido: no puedes solicitarlo sin uno.',
  },
  'ielts.visa.msg.passport.expiring': {
    en: 'Passport is expiring / being renewed — make sure it covers your whole course.',
    ar: 'جواز السفر قارب ينتهي / قيد التجديد — تأكّد إنه يغطّي فترة تخصصك كاملة.',
    es: 'El pasaporte está caducando / en renovación: asegúrate de que cubra todo tu curso.',
  },
  'ielts.visa.msg.funds.none': {
    en: 'No maintenance-funds evidence yet — this is the top visa-refusal cause.',
    ar: 'ما في إثبات أموال معيشة بعد — هذا أكثر سبب لرفض الـ visa.',
    es: 'Aún no hay prueba de fondos de manutención: esta es la principal causa de denegación del visado.',
  },
  'ielts.visa.msg.funds.gathering': {
    en: 'Still gathering funds evidence — finish before the 28-day clock can be relied on.',
    ar: 'لسّا تجمّع إثبات الأموال — خلّصه قبل ما تعتمد على عدّاد الـ 28 يوم.',
    es: 'Todavía reuniendo la prueba de fondos: termínala antes de poder contar con el plazo de 28 días.',
  },
  'ielts.visa.msg.held.no': {
    en: 'Funds have not been held for 28 consecutive days — the balance must not dip below the required amount.',
    ar: 'الأموال ما انحفظت 28 يوم متتالية — الرصيد لازم ما ينزل تحت المبلغ المطلوب أبداً.',
    es: 'Los fondos no se han mantenido durante 28 días consecutivos: el saldo no debe bajar del importe requerido.',
  },
  'ielts.visa.msg.held.na': {
    en: 'Confirm your funds will be held for 28 consecutive days before you apply.',
    ar: 'أكّد إن أموالك بتنحفظ 28 يوم متتالية قبل ما تقدّم.',
    es: 'Confirma que tus fondos se mantendrán durante 28 días consecutivos antes de solicitarlo.',
  },
  'ielts.visa.msg.statement.stale': {
    en: 'Your closing statement is older than 31 days — get a fresh statement dated within 31 days of applying.',
    ar: 'كشف الرصيد الختامي حقّك أقدم من 31 يوم — جيب كشف جديد بتاريخ خلال 31 يوم من التقديم.',
    es: 'Tu extracto de cierre tiene más de 31 días: consigue un extracto reciente con fecha dentro de los 31 días previos a la solicitud.',
  },
  'ielts.visa.msg.statement.na': {
    en: 'Make sure your bank statement is dated no more than 31 days before you apply.',
    ar: 'تأكّد إن كشف حسابك البنكي بتاريخ مو أكثر من 31 يوم قبل ما تقدّم.',
    es: 'Asegúrate de que tu extracto bancario tenga una fecha de no más de 31 días antes de solicitarlo.',
  },
  'ielts.visa.msg.cas.notstarted': {
    en: 'No university application started — you need an offer and a CAS before you can apply for the visa.',
    ar: 'ما بدأت أي تقديم جامعي — تحتاج عرض قبول و CAS قبل ما تقدر تقدّم على الـ visa.',
    es: 'No has iniciado ninguna solicitud universitaria: necesitas una oferta y un CAS antes de poder solicitar el visado.',
  },
  'ielts.visa.msg.cas.pending': {
    en: 'CAS not yet received — you cannot submit the visa application until your university issues it.',
    ar: 'الـ CAS ما تم استلامه بعد — ما تقدر تقدّم طلب الـ visa لين جامعتك تصدره.',
    es: 'CAS aún no recibido: no puedes presentar la solicitud de visado hasta que tu universidad lo emita.',
  },
  'ielts.visa.msg.sponsor.unknown': {
    en: 'Funding source unconfirmed — confirm whether you are self-funded, sponsored or applying for a scholarship.',
    ar: 'مصدر التمويل مو مؤكّد — أكّد إذا إنت تمويل ذاتي، أو عندك راعي، أو تقدّم على منحة.',
    es: 'Fuente de financiación sin confirmar: confirma si te autofinancias, tienes patrocinador o estás solicitando una beca.',
  },
  'ielts.visa.msg.sponsor.applying': {
    en: 'Scholarship / sponsor application pending — have a self-funded backup ready in case it is unsuccessful.',
    ar: 'طلب المنحة / الراعي معلّق — خلّ عندك خطة تمويل ذاتي احتياطية إذا ما نجح.',
    es: 'Solicitud de beca / patrocinador pendiente: ten preparado un plan de autofinanciación de respaldo por si no prospera.',
  },
  'ielts.visa.msg.tb.outstanding': {
    en: 'TB test outstanding — if required for your country it must be done before you apply.',
    ar: 'الـ TB test متبقّي — إذا مطلوب لبلدك لازم يتسوّى قبل ما تقدّم.',
    es: 'TB test pendiente: si se requiere para tu país, debe realizarse antes de solicitarlo.',
  },
  'ielts.visa.msg.atas.outstanding': {
    en: 'ATAS clearance outstanding — if required for your course it must be granted before your CAS is used.',
    ar: 'تصريح الـ ATAS متبقّي — إذا مطلوب لتخصصك لازم يتمنح قبل ما يُستخدم الـ CAS حقّك.',
    es: 'Aprobación ATAS pendiente: si se requiere para tu curso, debe concederse antes de usar tu CAS.',
  },

  // ══ Maintenance-funds calculator ═══════════════════════════════════════════
  'ielts.visa.funds.title': {
    en: 'Maintenance funds you must evidence',
    ar: 'أموال المعيشة اللي لازم تثبتها',
    es: 'Fondos de manutención que debes acreditar',
  },
  'ielts.visa.funds.body': {
    en: 'Pick where you will study and your course length (capped at 9 months) to see the total you must hold.',
    ar: 'اختر وين بتدرس وطول تخصصك (بحد أقصى 9 أشهر) عشان تشوف المبلغ الكلي اللي لازم تحتفظ فيه.',
    es: 'Elige dónde vas a estudiar y la duración de tu curso (con un máximo de 9 meses) para ver el total que debes tener.',
  },
  'ielts.visa.funds.location': {
    en: 'Where will you study?',
    ar: 'وين بتدرس؟',
    es: '¿Dónde vas a estudiar?',
  },
  'ielts.visa.funds.london': { en: 'In London', ar: 'في London', es: 'En London' },
  'ielts.visa.funds.outside': { en: 'Outside London', ar: 'خارج London', es: 'Fuera de London' },
  'ielts.visa.funds.months': {
    en: 'Months to evidence (max 9)',
    ar: 'عدد الأشهر للإثبات (الحد الأقصى 9)',
    es: 'Meses a acreditar (máx. 9)',
  },
  'ielts.visa.funds.month_one': { en: '{n} month', ar: '{n} شهر', es: '{n} mes' },
  'ielts.visa.funds.month_other': { en: '{n} months', ar: '{n} أشهر', es: '{n} meses' },
  'ielts.visa.funds.total': {
    en: 'Maintenance funds to evidence',
    ar: 'أموال المعيشة المطلوب إثباتها',
    es: 'Fondos de manutención a acreditar',
  },
  'ielts.visa.funds.formula': {
    en: '£{rate}/month × {months} months (course-fee balance is in addition).',
    ar: '£{rate}/شهر × {months} أشهر (رصيد رسوم التخصص ينضاف فوق هذا).',
    es: '£{rate}/mes × {months} meses (el saldo de las tasas del curso se suma aparte).',
  },
  'ielts.visa.funds.note': {
    en: 'Official-financial-sponsor and Student-loan cases follow different evidence rules — check gov.uk.',
    ar: 'حالات الراعي المالي الرسمي و Student loan تتبع قواعد إثبات مختلفة — راجع gov.uk.',
    es: 'Los casos de patrocinador financiero oficial y de Student loan siguen normas de prueba distintas: consulta gov.uk.',
  },

  // ══ Funds tri-state + evidence/sponsor fields ══════════════════════════════
  'ielts.visa.f.fundsHeld': {
    en: 'Funds held 28 consecutive days?',
    ar: 'الأموال محفوظة 28 يوم متتالية؟',
    es: '¿Fondos mantenidos 28 días consecutivos?',
  },
  'ielts.visa.f.fundsHeld_hint': {
    en: 'Balance must not dip below the required amount at any point.',
    ar: 'الرصيد لازم ما ينزل تحت المبلغ المطلوب في أي لحظة.',
    es: 'El saldo no debe bajar del importe requerido en ningún momento.',
  },
  'ielts.visa.f.statementFresh': {
    en: 'Statement dated within 31 days?',
    ar: 'الكشف بتاريخ خلال 31 يوم؟',
    es: '¿Extracto con fecha dentro de los 31 días?',
  },
  'ielts.visa.f.statementFresh_hint': {
    en: 'Your closing statement must be no older than 31 days when you apply.',
    ar: 'كشف الرصيد الختامي حقّك لازم ما يكون أقدم من 31 يوم وقت التقديم.',
    es: 'Tu extracto de cierre no debe tener más de 31 días cuando solicites.',
  },
  'ielts.visa.tri.held': {
    en: 'Yes — held 28 days',
    ar: 'إي — محفوظة 28 يوم',
    es: 'Sí, mantenidos 28 días',
  },
  'ielts.visa.tri.notheld': { en: 'Not yet', ar: 'مو بعد', es: 'Todavía no' },
  'ielts.visa.tri.unsure': {
    en: 'Unsure / planning',
    ar: 'مو متأكّد / أخطّط',
    es: 'No estoy seguro / planificando',
  },
  'ielts.visa.tri.fresh': {
    en: 'Yes — within 31 days',
    ar: 'إي — خلال 31 يوم',
    es: 'Sí, dentro de 31 días',
  },
  'ielts.visa.tri.stale': {
    en: 'No / too old',
    ar: 'لا / قديم وايد',
    es: 'No / demasiado antiguo',
  },

  'ielts.visa.f.fundsEvidence': {
    en: 'Funds evidence ready?',
    ar: 'إثبات الأموال جاهز؟',
    es: '¿Prueba de fondos lista?',
  },
  'ielts.visa.opt.funds.ready': { en: 'Ready', ar: 'جاهز', es: 'Lista' },
  'ielts.visa.opt.funds.gathering': { en: 'Gathering', ar: 'قيد التجميع', es: 'Reuniéndola' },
  'ielts.visa.opt.funds.none': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },

  'ielts.visa.f.sponsor': {
    en: 'Sponsor / scholarship',
    ar: 'راعي / منحة',
    es: 'Patrocinador / beca',
  },
  'ielts.visa.opt.sponsor.self': { en: 'Self-funded', ar: 'تمويل ذاتي', es: 'Autofinanciado' },
  'ielts.visa.opt.sponsor.confirmed': {
    en: 'Sponsor confirmed',
    ar: 'الراعي مؤكّد',
    es: 'Patrocinador confirmado',
  },
  'ielts.visa.opt.sponsor.applying': { en: 'Applying', ar: 'قيد التقديم', es: 'Solicitando' },
  'ielts.visa.opt.sponsor.unknown': {
    en: 'Not sure yet',
    ar: 'مو متأكّد بعد',
    es: 'Aún no estoy seguro',
  },

  // ══ Documents & stages ═════════════════════════════════════════════════════
  'ielts.visa.docs.title': {
    en: 'Documents & application stage',
    ar: 'المستندات ومرحلة التقديم',
    es: 'Documentos y fase de la solicitud',
  },
  'ielts.visa.docs.body': {
    en: 'Work through each item. TB test and ATAS only apply to some countries / courses — mark “Not applicable” if so.',
    ar: 'اشتغل على كل بند. الـ TB test والـ ATAS ينطبقون بس على بعض الدول / التخصصات — حدّد ”لا ينطبق“ إذا كذا.',
    es: 'Repasa cada elemento. El TB test y el ATAS solo se aplican a algunos países / cursos: marca "No aplicable" si es tu caso.',
  },
  'ielts.visa.f.passport': {
    en: 'Passport valid for the whole course?',
    ar: 'جواز السفر ساري طول فترة التخصص؟',
    es: '¿Pasaporte válido durante todo el curso?',
  },
  'ielts.visa.opt.passport.yes': { en: 'Valid', ar: 'ساري', es: 'Válido' },
  'ielts.visa.opt.passport.expiring': {
    en: 'Expiring / renewing',
    ar: 'قارب ينتهي / قيد التجديد',
    es: 'Caducando / renovando',
  },
  'ielts.visa.opt.passport.no': { en: 'Not valid yet', ar: 'مو ساري بعد', es: 'Aún no válido' },
  'ielts.visa.f.cas': { en: 'CAS stage', ar: 'مرحلة الـ CAS', es: 'Fase de CAS' },
  'ielts.visa.opt.cas.received': { en: 'CAS received', ar: 'تم استلام CAS', es: 'CAS recibido' },
  'ielts.visa.opt.cas.requested': {
    en: 'Offer holder / requested',
    ar: 'حامل عرض / تم الطلب',
    es: 'Con oferta / solicitado',
  },
  'ielts.visa.opt.cas.applying': {
    en: 'Applying / awaiting offer',
    ar: 'قيد التقديم / بانتظار العرض',
    es: 'Solicitando / a la espera de oferta',
  },
  'ielts.visa.opt.cas.notstarted': { en: 'Not started', ar: 'ما بدأ', es: 'Sin empezar' },
  'ielts.visa.f.tb': {
    en: 'TB test (if applicable for your country)',
    ar: 'TB test (إذا ينطبق على بلدك)',
    es: 'TB test (si aplica para tu país)',
  },
  'ielts.visa.opt.na': { en: 'Not applicable', ar: 'لا ينطبق', es: 'No aplicable' },
  'ielts.visa.opt.tb.yes': { en: 'Done', ar: 'تم', es: 'Hecho' },
  'ielts.visa.opt.tb.no': {
    en: 'Required — outstanding',
    ar: 'مطلوب — متبقّي',
    es: 'Requerido: pendiente',
  },
  'ielts.visa.f.atas': {
    en: 'ATAS (if applicable for your course)',
    ar: 'ATAS (إذا ينطبق على تخصصك)',
    es: 'ATAS (si aplica para tu curso)',
  },
  'ielts.visa.opt.atas.yes': { en: 'Granted', ar: 'تم منحه', es: 'Concedido' },
  'ielts.visa.opt.atas.no': {
    en: 'Required — outstanding',
    ar: 'مطلوب — متبقّي',
    es: 'Requerido: pendiente',
  },

  // ══ English requirement guidance ═══════════════════════════════════════════
  'ielts.visa.english.title': {
    en: 'English requirement (CEFR B2)',
    ar: 'متطلب الإنجليزي (CEFR B2)',
    es: 'Requisito de inglés (CEFR B2)',
  },
  'ielts.visa.english.body': {
    en: 'Degree-level study generally needs CEFR B2, which usually maps to around IELTS 6.0–6.5 overall (with minimum component scores set by each university). Check your offer letter for the exact band — your English readiness is scored separately in your Readiness Report.',
    ar: 'الدراسة على مستوى الدرجة الجامعية تحتاج عادةً CEFR B2، اللي يقابل تقريباً IELTS 6.0–6.5 كلي (مع حد أدنى لدرجات كل مهارة تحدّده كل جامعة). شوف رسالة العرض حقّتك للـ Band المضبوط — جاهزية إنجليزيك تتقيّم بشكل منفصل في تقرير الجاهزية.',
    es: 'Los estudios de nivel universitario suelen requerir CEFR B2, que normalmente equivale a alrededor de IELTS 6.0–6.5 en total (con puntuaciones mínimas por componente fijadas por cada universidad). Consulta tu carta de oferta para la banda exacta: tu preparación de inglés se puntúa por separado en tu informe de preparación.',
  },
  'ielts.visa.english.cta': {
    en: 'See my English readiness',
    ar: 'شوف جاهزية إنجليزيي',
    es: 'Ver mi preparación de inglés',
  },

  // ══ Footer nav ═════════════════════════════════════════════════════════════
  'ielts.visa.cta.report': {
    en: 'Back to Readiness Report',
    ar: 'رجوع لتقرير الجاهزية',
    es: 'Volver al informe de preparación',
  },
  'ielts.visa.cta.transition': {
    en: 'Academic-transition modules',
    ar: 'وحدات الانتقال الأكاديمي',
    es: 'Módulos de transición académica',
  },

  // ══ Locked teaser (free users) ═════════════════════════════════════════════
  'ielts.visa.locked.title': {
    en: 'Unlock the Visa & Finance checklist',
    ar: 'افتح checklist الـ Visa والتمويل',
    es: 'Desbloquea la lista de comprobación de visado y finanzas',
  },
  'ielts.visa.locked.body': {
    en: 'Work through the UK Student-route money and document rules — maintenance funds, the 28-day rule, CAS, TB test and ATAS — and get a clear can-apply / not-yet / blocked status that feeds your Readiness Report. Part of the IELTS plan.',
    ar: 'اشتغل على قواعد الأموال والمستندات لمسار الـ Student visa في UK — أموال المعيشة، وقاعدة الـ 28 يوم، والـ CAS، والـ TB test، والـ ATAS — وخذ حالة واضحة تقدر تقدّم / مو بعد / متوقّف تغذّي تقرير جاهزيتك. جزء من خطة IELTS.',
    es: 'Repasa las normas de dinero y documentos de la ruta Student del Reino Unido (fondos de manutención, la regla de 28 días, CAS, TB test y ATAS) y obtén un estado claro de puedes-solicitar / todavía-no / bloqueado que alimenta tu informe de preparación. Forma parte del plan IELTS.',
  },
  'ielts.visa.locked.example': {
    en: 'Example: outside London, 9 months',
    ar: 'مثال: خارج London، 9 أشهر',
    es: 'Ejemplo: fuera de London, 9 meses',
  },
  'ielts.visa.locked.example_note': {
    en: 'Unlock to calculate yours and track every item.',
    ar: 'افتح عشان تحسب مبلغك وتتابع كل بند.',
    es: 'Desbloquéalo para calcular el tuyo y hacer seguimiento de cada elemento.',
  },
  'ielts.visa.locked.item1': {
    en: 'Maintenance-funds calculator (London vs outside)',
    ar: 'حاسبة أموال المعيشة (London مقابل خارجها)',
    es: 'Calculadora de fondos de manutención (London frente a fuera)',
  },
  'ielts.visa.locked.item2': {
    en: '28-day hold + 31-day statement checks',
    ar: 'فحص حفظ الـ 28 يوم + كشف الـ 31 يوم',
    es: 'Comprobaciones de retención de 28 días + extracto de 31 días',
  },
  'ielts.visa.locked.item3': {
    en: 'CAS, passport, TB test & ATAS tracking',
    ar: 'متابعة الـ CAS، وجواز السفر، والـ TB test، والـ ATAS',
    es: 'Seguimiento de CAS, pasaporte, TB test y ATAS',
  },

  // ══ Personal-Statement Coach: QUESTIONS array (the 3 UCAS 2026 questions) ══
  'ielts.admissions.ps.q.q1.label': {
    en: 'Why do you want to study this course or subject?',
    ar: 'ليش تبغى تدرس هذا التخصص أو المادة؟',
    es: '¿Por qué quieres estudiar este curso o asignatura?',
  },
  'ielts.admissions.ps.q.q1.helper': {
    en: 'Explain your motivation and how this course fits your goals. Be specific about what draws you to the subject - not a neighbouring one.',
    ar: 'اشرح دافعك وكيف هذا التخصص يناسب أهدافك. كن محدّد عن اللي يجذبك لهذه المادة بالذات - مو مادة قريبة منها.',
    es: 'Explica tu motivación y cómo encaja este curso con tus objetivos. Sé concreto sobre qué te atrae de la asignatura, no de una cercana.',
  },
  'ielts.admissions.ps.q.q1.placeholder': {
    en: 'Why this subject, specifically? What sparked and what sustains your interest…',
    ar: 'ليش هذه المادة بالذات؟ شنو اللي أشعل اهتمامك وشنو اللي يخلّيه مستمر…',
    es: '¿Por qué esta asignatura en concreto? Qué despertó y qué mantiene tu interés…',
  },
  'ielts.admissions.ps.q.q2.label': {
    en: 'How have your qualifications and studies helped you to prepare for this course or subject?',
    ar: 'كيف ساعدتك مؤهلاتك ودراستك تتحضّر لهذا التخصص أو المادة؟',
    es: '¿Cómo te han ayudado tus titulaciones y estudios a prepararte para este curso o asignatura?',
  },
  'ielts.admissions.ps.q.q2.helper': {
    en: 'Link your subjects, qualifications and academic skills to the demands of the course, with concrete examples of what you learned.',
    ar: 'اربط موادك ومؤهلاتك ومهاراتك الأكاديمية بمتطلبات التخصص، مع أمثلة ملموسة عن اللي تعلّمته.',
    es: 'Relaciona tus asignaturas, titulaciones y competencias académicas con las exigencias del curso, con ejemplos concretos de lo que aprendiste.',
  },
  'ielts.admissions.ps.q.q2.placeholder': {
    en: 'Which subjects, projects or qualifications prepared you, and what did each teach you…',
    ar: 'أي مواد أو مشاريع أو مؤهلات حضّرتك، وشنو علّمك كل واحد منها…',
    es: 'Qué asignaturas, proyectos o titulaciones te prepararon, y qué te enseñó cada uno…',
  },
  'ielts.admissions.ps.q.q3.label': {
    en: 'What else have you done to prepare outside of education, and why are these experiences useful?',
    ar: 'شنو سوّيت غير كذا عشان تتحضّر خارج التعليم، وليش هالتجارب مفيدة؟',
    es: '¿Qué más has hecho para prepararte fuera de los estudios, y por qué son útiles esas experiencias?',
  },
  'ielts.admissions.ps.q.q3.helper': {
    en: 'Describe wider experiences (work, volunteering, reading, projects, responsibilities) and reflect on why each matters for this course.',
    ar: 'اوصف تجارب أوسع (شغل، تطوّع، قراءة، مشاريع، مسؤوليات) وتأمّل ليش كل وحدة منها تهمّ لهذا التخصص.',
    es: 'Describe experiencias más amplias (trabajo, voluntariado, lecturas, proyectos, responsabilidades) y reflexiona sobre por qué cada una importa para este curso.',
  },
  'ielts.admissions.ps.q.q3.placeholder': {
    en: 'What have you done beyond the classroom, and why is it useful for this course…',
    ar: 'شنو سوّيت خارج الفصل، وليش هو مفيد لهذا التخصص…',
    es: 'Qué has hecho fuera del aula, y por qué es útil para este curso…',
  },
}
