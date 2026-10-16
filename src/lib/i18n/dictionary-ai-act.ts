/**
 * dictionary-ai-act.ts - EU AI Act (Reg (EU) 2024/1689) user-facing copy.
 *
 * Curated EN + Khaleeji (Gulf) Arabic for two compliance surfaces:
 *  - `ai_oversight.*`     - the in-product human-review/contest control
 *                           (RequestHumanReviewButton, Art 14 human oversight)
 *  - `ai_marking_notice.*`- the accurate AI-generated-result disclosure shown
 *                           on the marking results page (Art 13/50). This
 *                           REPLACES the generic `ai_label.*` content notice
 *                           on that surface - the old label claimed "Reviewed
 *                           by humans", which is false for B2C AI marking.
 *
 * Wired into the resolver's curated tier (before placeholder/audit
 * supplements) in dictionary.ts so it always wins over junk entries.
 */

export const AI_ACT_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── Art 14 - in-product human oversight (RequestHumanReviewButton) ──
  'ai_oversight.button': {
    en: 'Request a human review',
    ar: 'اطلب مراجعة بشرية',
    es: 'Solicitar una revisión humana',
  },
  'ai_oversight.dialog_title': {
    en: 'Request a human review',
    ar: 'اطلب مراجعة بشرية',
    es: 'Solicitar una revisión humana',
  },
  // 16 October 2026: promised "a human will check your work and respond", and
  // on success "A human will review your work". The request is saved to
  // human_review_requests, which no staff screen, cron job or email reads, so
  // nobody is told of it. Until Calum decides how requests reach a person, the
  // copy says what happens: it is saved, and no reply is promised.
  'ai_oversight.dialog_description': {
    en: 'This grade and feedback were written by AI. The grade is a practice estimate, not an official result. You can save a review request with this essay, but review requests are not yet seen by our team, so we cannot promise a reply. If you are in a class on the site, your teacher can review your mark.',
    ar: 'هالدرجة والملاحظات كتبها الذكاء الاصطناعي. الدرجة تقدير للتدريب، مو نتيجة رسمية. تقدر تحفظ طلب مراجعة مع هالمقال، بس طلبات المراجعة ما يشوفها فريقنا للحين، فما نقدر نوعدك برد. وإذا انت في صف على الموقع، معلمك يقدر يراجع درجتك.',
    es: 'Esta nota y los comentarios los ha escrito la IA. La nota es una estimación para practicar, no un resultado oficial. Puedes guardar una solicitud de revisión con esta redacción, pero nuestro equipo todavía no ve las solicitudes de revisión, así que no podemos prometerte una respuesta. Si estás en una clase de la web, tu profesor puede revisar tu nota.',
  },
  'ai_oversight.reason_label': {
    en: 'Tell us what looks wrong (optional)',
    ar: 'قل لنا وش اللي ما يبيّن صحيح (اختياري)',
    es: 'Dinos qué parece incorrecto (opcional)',
  },
  'ai_oversight.reason_placeholder': {
    en: 'For example: the grade seems too low, or the feedback misses part of my answer. You can leave this blank.',
    ar: 'مثلاً: الدرجة تبيّن واطية وايد، أو الملاحظات فاتها جزء من جوابي. تقدر تتركها فاضية.',
    es: 'Por ejemplo: la nota parece demasiado baja, o los comentarios omiten parte de mi respuesta. Puedes dejarlo en blanco.',
  },
  'ai_oversight.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'ai_oversight.submit': { en: 'Request review', ar: 'اطلب المراجعة', es: 'Solicitar revisión' },
  'ai_oversight.submitting': { en: 'Saving…', ar: 'يتم الحفظ…', es: 'Guardando…' },
  'ai_oversight.success': {
    en: 'Your request is saved with this essay. We cannot promise a reply yet.',
    ar: 'انحفظ طلبك مع هالمقال. ما نقدر نوعدك برد للحين.',
    es: 'Tu solicitud se ha guardado con esta redacción. Todavía no podemos prometerte una respuesta.',
  },
  'ai_oversight.success_with_ref': {
    en: 'Request saved. Your reference number is {ref}. We cannot promise a reply yet.',
    ar: 'انحفظ الطلب. رقمك المرجعي هو {ref}. ما نقدر نوعدك برد للحين.',
    es: 'Solicitud guardada. Tu número de referencia es {ref}. Todavía no podemos prometerte una respuesta.',
  },
  'ai_oversight.error': {
    en: 'Could not save your request. Please try again.',
    ar: 'ما قدرنا نحفظ طلبك. حاول مرة ثانية.',
    es: 'No se pudo guardar tu solicitud. Inténtalo de nuevo.',
  },
  'ai_oversight.default_detail_marking': {
    en: 'Please have a person review this AI-predicted marking grade.',
    ar: 'الرجاء مراجعة هذي الدرجة المقدّرة بالذكاء الاصطناعي من قبل شخص بشري.',
    es: 'Por favor, haz que una persona revise esta nota de corrección estimada por IA.',
  },
  'ai_oversight.default_detail_essay-feedback': {
    en: 'Please have a person review this AI essay feedback.',
    ar: 'الرجاء مراجعة ملاحظات المقال المكتوبة بالذكاء الاصطناعي من قبل شخص بشري.',
    es: 'Por favor, haz que una persona revise estos comentarios de redacción generados por IA.',
  },
  'ai_oversight.default_detail_cefr': {
    en: 'Please have a person review this AI CEFR assessment.',
    ar: 'الرجاء مراجعة تقييم CEFR المُجرى بالذكاء الاصطناعي من قبل شخص بشري.',
    es: 'Por favor, haz que una persona revise esta evaluación CEFR generada por IA.',
  },

  // ─── Art 13/50 - accurate AI marking-result disclosure ──────────────
  // Replaces the generic "Made with AI · Reviewed by humans" content
  // label on the marking results page (no human reviews B2C marks).
  'ai_marking_notice.title': {
    en: 'This result was generated by AI',
    ar: 'هذي النتيجة تكوّنت بالذكاء الاصطناعي',
    es: 'Este resultado fue generado por IA',
  },
  'ai_marking_notice.body': {
    en: 'This mark, grade and feedback were produced automatically by an AI system (Anthropic’s Claude model). It has not been checked by a human and may be wrong or inconsistent. The grade is a predicted, indicative grade for practice - it is NOT an official exam result, and for boards other than AQA it is derived from AQA grade boundaries. If your school has given you a teacher-linked account, your teacher can review and change this mark. To have a person re-check this result, use the “Request a human review” button below.',
    ar: 'هالعلامة والدرجة والملاحظات تكوّنت تلقائياً بنظام ذكاء اصطناعي (نموذج Claude من Anthropic). ما شيّكها إنسان وممكن تكون غلط أو غير متّسقة. الدرجة تقديرية وإرشادية للتدريب - هي مو نتيجة امتحان رسمية، وللمجالس غير AQA تنحسب على أساس حدود درجات AQA. إذا مدرستك عطتك حساب مربوط بمعلّم، يقدر معلّمك يراجع ويعدّل هالدرجة. وعشان يعيد شخص بشري فحص هالنتيجة، استخدم زر «اطلب مراجعة بشرية» تحت.',
    es: 'Esta calificación, nota y comentarios fueron producidos automáticamente por un sistema de IA (el modelo Claude de Anthropic). No han sido revisados por una persona y pueden ser incorrectos o inconsistentes. La nota es una nota estimada e indicativa para practicar: NO es un resultado oficial de examen y, para juntas examinadoras distintas de AQA, se deriva de los umbrales de calificación de AQA. Si tu escuela te ha dado una cuenta vinculada a un profesor, tu profesor puede revisar y cambiar esta nota. Para que una persona vuelva a comprobar este resultado, usa el botón «Solicitar una revisión humana» de abajo.',
  },
  'ai_marking_notice.link': {
    en: 'AI transparency & your rights',
    ar: 'شفافية الذكاء الاصطناعي وحقوقك',
    es: 'Transparencia de la IA y tus derechos',
  },

  // ─── Smart IP - student "awaiting teacher review" state ─────────────
  // Shown on /marking/results/[id] when a teacher-linked (b2b_class)
  // submission has NOT yet been approved by a teacher. The hard rule:
  // students never see a draft AI mark for teacher-set work - only the
  // teacher-approved feedback, once it exists.
  'marking.results.awaiting_title': {
    en: 'Awaiting teacher review',
    ar: 'بانتظار مراجعة المعلّم',
    es: 'En espera de la revisión del profesor',
  },
  'marking.results.awaiting_body': {
    en: 'Your work has been submitted and is waiting for your teacher to review it. Your feedback and mark will appear here once your teacher has checked and approved them. You will not see an automated mark for teacher-set work before then.',
    ar: 'انرسل شغلك وهو بانتظار معلّمك يراجعه. ملاحظاتك ودرجتك بتبيّن هني أول ما يشيّكها معلّمك ويعتمدها. ما بتشوف درجة تلقائية للشغل اللي حدّده المعلّم قبل جذي.',
    es: 'Tu trabajo ha sido enviado y está a la espera de que tu profesor lo revise. Tus comentarios y tu nota aparecerán aquí una vez que tu profesor los haya comprobado y aprobado. No verás una nota automática del trabajo asignado por el profesor antes de eso.',
  },
  'marking.results.awaiting_status': {
    en: 'Status: waiting for teacher approval',
    ar: 'الحالة: بانتظار اعتماد المعلّم',
    es: 'Estado: esperando la aprobación del profesor',
  },

  // ─── School pupils: AI feedback first, the teacher's decision after ──
  // Calum decided on 12 October 2026 that a school pupil sees their AI
  // feedback straight away, labelled as AI, exactly as an individual pupil
  // does; the teacher reviews afterwards and may change the mark, and the
  // pupil then sees the teacher's decision. The three `awaiting_*` keys above
  // promise the opposite ("You will not see an automated mark for
  // teacher-set work before then") and are no longer rendered. The keys
  // below replace them, one honest message per status.
  'ai_marking_notice.body_reviewed': {
    en: 'The predicted grade and feedback below were produced automatically by an AI system (Anthropic’s Claude model). A person has since reviewed this essay, and their decision is shown above. The predicted grade is indicative, for practice, and is NOT an official exam result.',
    ar: 'الدرجة المتوقعة والملاحظات اللي تحت تكوّنت تلقائياً بنظام ذكاء اصطناعي (نموذج Claude من Anthropic). بعدها راجع شخص هالمقالة، وقراره معروض فوق. الدرجة المتوقعة إرشادية للتدريب، وهي مو نتيجة امتحان رسمية.',
    es: 'La nota prevista y los comentarios de abajo fueron producidos automáticamente por un sistema de IA (el modelo Claude de Anthropic). Después, una persona ha revisado esta redacción y su decisión aparece arriba. La nota prevista es indicativa, para practicar, y NO es un resultado oficial de examen.',
  },
  'marking.results.school_review_note': {
    en: 'Your teacher will look at this AI mark and may change it. If they do, their decision will appear on this page.',
    ar: 'معلّمك بيشوف درجة الذكاء الاصطناعي هذي وممكن يعدّلها. وإذا عدّلها، قراره بيبيّن في هالصفحة.',
    es: 'Tu profesor revisará esta nota de la IA y puede cambiarla. Si lo hace, su decisión aparecerá en esta página.',
  },
  'marking.results.review.heading_teacher': {
    en: 'Your teacher’s decision',
    ar: 'قرار معلّمك',
    es: 'La decisión de tu profesor',
  },
  'marking.results.review.heading_reviewer': {
    en: 'A reviewer’s decision',
    ar: 'قرار المراجِع',
    es: 'La decisión de un revisor',
  },
  'marking.results.review.approved': {
    en: 'This mark has been checked and approved.',
    ar: 'هالدرجة تشيّكت وانعتمدت.',
    es: 'Esta nota ha sido revisada y aprobada.',
  },
  'marking.results.review.reviewed': {
    en: 'This essay has been reviewed. A mark shown here replaces the AI’s predicted grade.',
    ar: 'هالمقالة تراجعت. أي درجة معروضة هني تحل محل الدرجة المتوقعة من الذكاء الاصطناعي.',
    es: 'Esta redacción ha sido revisada. La nota que aparece aquí sustituye a la nota prevista por la IA.',
  },
  'marking.results.review.returned': {
    en: 'This essay has been sent back to you with comments.',
    ar: 'هالمقالة انرجعت لك مع ملاحظات.',
    es: 'Te han devuelto esta redacción con comentarios.',
  },
  'marking.results.review.mark_label': { en: 'Mark', ar: 'الدرجة', es: 'Nota' },
  'marking.results.review.comments_label': {
    en: 'Comments',
    ar: 'الملاحظات',
    es: 'Comentarios',
  },
  'marking.results.unmarked_title': {
    en: 'Not marked yet',
    ar: 'ما تصحّحت للحين',
    es: 'Aún sin corregir',
  },
  'marking.results.unmarked_body': {
    en: 'This essay was saved but has not been marked yet. If marking did not finish, submit it again from Mark an essay.',
    ar: 'انحفظت هالمقالة بس ما تصحّحت للحين. إذا التصحيح ما خلص، سلّمها مرة ثانية من «صحّح مقالة».',
    es: 'Esta redacción se guardó, pero aún no se ha corregido. Si la corrección no terminó, vuelve a enviarla desde Corregir redacción.',
  },
  'marking.results.reviewing_title': {
    en: 'Your teacher is reviewing this mark',
    ar: 'معلّمك يراجع هالدرجة',
    es: 'Tu profesor está revisando esta nota',
  },
  'marking.results.reviewing_body': {
    en: 'Your teacher is checking the AI’s mark for this essay and may change it. Their decision will appear here when they have finished.',
    ar: 'معلّمك يشيّك درجة الذكاء الاصطناعي لهالمقالة وممكن يعدّلها. قراره بيبيّن هني أول ما يخلّص.',
    es: 'Tu profesor está comprobando la nota de la IA para esta redacción y puede cambiarla. Su decisión aparecerá aquí cuando termine.',
  },
  'marking.results.rejected_title': {
    en: 'No mark has been released',
    ar: 'ما انعطت درجة',
    es: 'No se ha publicado ninguna nota',
  },
  'marking.results.rejected_body': {
    en: 'Your teacher has reviewed this essay and has not released a mark for it. Ask your teacher if you would like to know why.',
    ar: 'معلّمك راجع هالمقالة وما عطى لها درجة. اسأل معلّمك إذا تبي تعرف السبب.',
    es: 'Tu profesor ha revisado esta redacción y no ha publicado una nota para ella. Pregúntale a tu profesor si quieres saber por qué.',
  },
  'marking.results.unavailable_title': {
    en: 'This result is not available',
    ar: 'هالنتيجة مو متوفرة',
    es: 'Este resultado no está disponible',
  },
  'marking.results.unavailable_body': {
    en: 'The result for this essay cannot be shown at the moment.',
    ar: 'ما نقدر نعرض نتيجة هالمقالة الحين.',
    es: 'El resultado de esta redacción no se puede mostrar en este momento.',
  },
  'marking.results.next.redraft_body_prefilled': {
    en: 'Rewrite the parts the feedback picks out, then submit the new version. The board, paper and question are filled in for you, so it is marked against the same mark scheme.',
    ar: 'أعد كتابة الأجزاء اللي أشارت لها الملاحظات، وبعدين سلّم النسخة الجديدة. البورد والورقة والسؤال معبّين لك، عشان تنصحّح على نفس دليل التصحيح.',
    es: 'Reescribe las partes que señalan los comentarios y envía la nueva versión. El consejo examinador, el examen y la pregunta ya vienen rellenados, para que se corrija con el mismo esquema de corrección.',
  },

  // ─── School pupils: essay feedback goes to the teacher ───────────────
  // The standalone AI essay feedback (/dashboard/essay-feedback and the
  // inline panels on /practice and the Mock Exam Mode) stores its result
  // where no teacher can see it. A school pupil is pointed at Mark an essay
  // instead, whose submissions reach their teacher.
  'marking.school_route.title': {
    en: 'Your teacher sees your essays',
    ar: 'معلّمك يشوف مقالاتك',
    es: 'Tu profesor ve tus redacciones',
  },
  'marking.school_route.body': {
    en: 'Your school marks essays through Mark an essay, so your teacher can see your work and check the AI’s mark. Your AI feedback still appears straight away.',
    ar: 'مدرستك تصحّح المقالات من خلال «صحّح مقالة»، عشان يقدر معلّمك يشوف شغلك ويشيّك درجة الذكاء الاصطناعي. وملاحظات الذكاء الاصطناعي تبيّن لك على طول.',
    es: 'Tu escuela corrige las redacciones a través de Corregir redacción, para que tu profesor pueda ver tu trabajo y comprobar la nota de la IA. Los comentarios de la IA te siguen apareciendo al momento.',
  },
}
