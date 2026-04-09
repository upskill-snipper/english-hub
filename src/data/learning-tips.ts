// ─── Learning Tips Data ─────────────────────────────────────────────────────
// Categorised tips shown throughout the platform to support student learning.

export type TipCategory =
  | 'study'
  | 'exam'
  | 'grade'
  | 'motivation'
  | 'resource'
  | 'progress'
  | 'course'
  | 'practice'

export interface LearningTip {
  id: string
  category: TipCategory
  text: string
}

export const learningTips: LearningTip[] = [
  // ── Study Tips ──────────────────────────────────────────────────────────
  { id: 's1', category: 'study', text: 'Space your revision over multiple days for better retention -- little and often beats marathon sessions.' },
  { id: 's2', category: 'study', text: 'After reading a section, close the book and write down everything you remember. This active recall strengthens memory.' },
  { id: 's3', category: 'study', text: 'Teach what you have learned to someone else. If you can explain it clearly, you truly understand it.' },
  { id: 's4', category: 'study', text: 'Use colour-coded notes: one colour for key quotations, another for analysis, another for context.' },
  { id: 's5', category: 'study', text: 'Create mind maps linking themes, characters, and quotations to build a web of understanding.' },
  { id: 's6', category: 'study', text: 'Read your set texts more than once. Each re-read reveals new layers of meaning.' },
  { id: 's7', category: 'study', text: 'Write key quotations on sticky notes and place them around your room -- passive exposure helps memory.' },
  { id: 's8', category: 'study', text: 'Alternate between subjects during revision to keep your brain engaged and avoid fatigue.' },
  { id: 's9', category: 'study', text: 'Summarise each chapter or poem in exactly three sentences. Brevity forces understanding.' },
  { id: 's10', category: 'study', text: 'Record yourself explaining a topic, then listen back -- you will spot gaps in your knowledge.' },

  // ── Exam Tips ───────────────────────────────────────────────────────────
  { id: 'e1', category: 'exam', text: 'Read the question twice before starting your answer. Underline the key command words.' },
  { id: 'e2', category: 'exam', text: 'Plan for 3--5 minutes before writing. A structured response always scores higher than a rambling one.' },
  { id: 'e3', category: 'exam', text: 'In timed exams, allocate your time by marks: a 20-mark question deserves twice as long as a 10-mark one.' },
  { id: 'e4', category: 'exam', text: 'Always embed your quotations within your sentences rather than letting them stand alone.' },
  { id: 'e5', category: 'exam', text: 'Use the PEEL structure (Point, Evidence, Explain, Link) to keep paragraphs focused and analytical.' },
  { id: 'e6', category: 'exam', text: 'Leave two minutes at the end to proofread. Fixing small errors can gain you easy marks.' },
  { id: 'e7', category: 'exam', text: 'For language analysis, always name the technique, quote it, then explain the effect on the reader.' },
  { id: 'e8', category: 'exam', text: 'In creative writing, spend the first minute deciding your narrative voice and atmosphere.' },
  { id: 'e9', category: 'exam', text: 'If you get stuck on a question, move on and come back. Do not let one question steal time from others.' },
  { id: 'e10', category: 'exam', text: 'Use discourse markers (however, furthermore, consequently) to show the examiner you can structure an argument.' },

  // ── Grade Tips ──────────────────────────────────────────────────────────
  { id: 'g1', category: 'grade', text: 'Grade 7+ requires developed analysis with embedded quotations -- surface-level comments stay at Grade 5.' },
  { id: 'g2', category: 'grade', text: 'The difference between Grade 6 and Grade 8 often comes down to exploring alternative interpretations.' },
  { id: 'g3', category: 'grade', text: 'To reach Grade 9, link your analysis to context and show how meaning shifts for different audiences.' },
  { id: 'g4', category: 'grade', text: 'Grade 5 answers describe; Grade 7 answers analyse; Grade 9 answers evaluate and challenge.' },
  { id: 'g5', category: 'grade', text: 'Examiners reward perceptive comments about structure as much as language analysis -- do not neglect it.' },
  { id: 'g6', category: 'grade', text: 'Using subject terminology naturally (not forced) is what separates competent from excellent responses.' },
  { id: 'g7', category: 'grade', text: 'A concise, well-developed paragraph is worth more than three vague ones. Quality over quantity.' },

  // ── Motivation Tips ────────────────────────────────────────────────────
  { id: 'm1', category: 'motivation', text: 'Consistent practice beats cramming every time. Even 20 minutes a day makes a real difference.' },
  { id: 'm2', category: 'motivation', text: 'Mistakes are data, not failures. Each wrong answer shows you exactly what to study next.' },
  { id: 'm3', category: 'motivation', text: 'Set small, specific goals for each study session -- "revise Macbeth Act 3" is better than "do English".' },
  { id: 'm4', category: 'motivation', text: 'Celebrate your progress. Compare yourself to where you were last month, not to anyone else.' },
  { id: 'm5', category: 'motivation', text: 'The most successful students are not the cleverest -- they are the most persistent.' },
  { id: 'm6', category: 'motivation', text: 'Feeling stuck is normal. It means you are at the edge of your comfort zone, which is where growth happens.' },

  // ── Resource Tips ──────────────────────────────────────────────────────
  { id: 'r1', category: 'resource', text: 'Use model answers as a benchmark, not a script. Understand why they work, then find your own voice.' },
  { id: 'r2', category: 'resource', text: 'Cross-reference revision notes with your set text to build deeper understanding of each chapter.' },
  { id: 'r3', category: 'resource', text: 'Flashcards work best when you test yourself, not just re-read them. Cover the answer and try to recall.' },
  { id: 'r4', category: 'resource', text: 'Techniques guides are most useful when you practise spotting techniques in real extracts, not just memorising names.' },
  { id: 'r5', category: 'resource', text: 'After reading a model answer, highlight the techniques the writer uses -- then try to replicate them.' },

  // ── Progress Tips ──────────────────────────────────────────────────────
  { id: 'p1', category: 'progress', text: 'Track which topics you find hardest and give them extra time -- this targeted approach is more efficient.' },
  { id: 'p2', category: 'progress', text: 'A dip in scores after trying harder questions is normal. It means you are challenging yourself.' },
  { id: 'p3', category: 'progress', text: 'Review your completed work regularly. You will be surprised how much you have improved.' },
  { id: 'p4', category: 'progress', text: 'Weekly progress checks help you spot patterns. Are your scores improving in literature but not language?' },
  { id: 'p5', category: 'progress', text: 'Aim for steady improvement, not perfection. Moving from Grade 5 to 6 is a genuine achievement.' },

  // ── Course Tips ─────────────────────────────────────────────────────────
  { id: 'c1', category: 'course', text: 'Complete modules in order -- each one builds on the skills and knowledge from the previous one.' },
  { id: 'c2', category: 'course', text: 'Take notes as you work through each module. Writing things down reinforces learning.' },
  { id: 'c3', category: 'course', text: 'Do not rush through modules to finish quickly. Understanding beats speed every time.' },
  { id: 'c4', category: 'course', text: 'After finishing a module, try to summarise the key points without looking back. Test your understanding.' },
  { id: 'c5', category: 'course', text: 'Revisit completed modules before exams -- refreshing your memory is quicker than learning from scratch.' },

  // ── Practice Tips ───────────────────────────────────────────────────────
  { id: 'pr1', category: 'practice', text: 'Use timed mode to build exam stamina. If you can write well under pressure, the real exam feels easier.' },
  { id: 'pr2', category: 'practice', text: 'After writing your answer, compare it to the model answer. Focus on what they did differently, not just what you missed.' },
  { id: 'pr3', category: 'practice', text: 'Practise the question types you find hardest, not just the ones you enjoy. Comfort zones do not build skills.' },
  { id: 'pr4', category: 'practice', text: 'Self-rating honestly helps you improve faster. Be your own toughest critic.' },
  { id: 'pr5', category: 'practice', text: 'Aim to practise at least one exam question per week. Regular practice builds confidence and technique.' },
]

/** Get tips filtered by one or more categories */
export function getTipsByCategory(...categories: TipCategory[]): LearningTip[] {
  if (categories.length === 0) return learningTips
  return learningTips.filter((t) => categories.includes(t.category))
}

/** Get a single random tip from the given categories (or all if none specified) */
export function getRandomTip(...categories: TipCategory[]): LearningTip {
  const pool = categories.length > 0
    ? learningTips.filter((t) => categories.includes(t.category))
    : learningTips
  return pool[Math.floor(Math.random() * pool.length)]
}
