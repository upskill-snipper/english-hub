import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  PenTool,
  Sparkles,
  Target,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import {
  getBoundaryForGrade,
  gradeNineToLetterEquivalent,
} from '@/lib/board/grade-boundaries'

// Grade-specific skill lists for every 9-1 grade. Each entry has five lit
// and five lang bullets, a short summary paragraph, and 3-4 "key skills"
// cards. These are condensed benchmarks — the grade-5, grade-7 and grade-9
// pages have richer companion content with essay examples.

type GradeKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type GradeData = {
  grade: GradeKey
  title: string
  tagline: string
  summary: string
  litSkills: string[]
  langSkills: string[]
  keySkills: { title: string; body: string }[]
  prev?: GradeKey
  next?: GradeKey
}

const GRADE_DATA: Record<GradeKey, GradeData> = {
  '1': {
    grade: '1',
    title: 'Grade 1',
    tagline: 'Starting point — a foundational grade.',
    summary:
      'A Grade 1 answer shows you have engaged with the text and written something down. At this level we\'re looking for basic reading, simple responses, and a willingness to put pen to paper. Every grade above this is built by adding layers — so it matters that the foundation exists.',
    litSkills: [
      'Names the main characters or poets',
      'Picks out one or two lines from the text you\'ve read',
      'Gives a short opinion: what you liked or disliked',
      'Understands the basic story or situation of the poem',
      'Writes in full sentences most of the time',
    ],
    langSkills: [
      'Answers the question even if briefly',
      'Picks out at least one word or phrase from the source',
      'Writes in sentences that mostly make sense',
      'Uses capital letters and full stops some of the time',
      'Attempts a creative piece with characters or a setting',
    ],
    keySkills: [
      {
        title: 'Write something for every question',
        body: 'Blank answers score zero. Even a single sentence puts you on the board. If you\'re stuck, write what you DO know — a character name, one thing that happens, one word you liked.',
      },
      {
        title: 'Use capital letters and full stops',
        body: 'This is worth more marks than you think. Start every sentence with a capital letter, end every sentence with a full stop. That alone can shift you toward Grade 2.',
      },
      {
        title: 'Copy quotes carefully',
        body: 'If you use a quote, copy it exactly and put it in quote marks. Even if you only use one quote in the whole essay, it proves you have read the text.',
      },
    ],
    next: '2',
  },
  '2': {
    grade: '2',
    title: 'Grade 2',
    tagline: 'You\'re showing basic reading and simple ideas.',
    summary:
      'A Grade 2 answer shows you understand the surface of the text — you know what happens, you can name the main characters, and you can write a simple response. Your writing is mostly understandable, with some attempt to use quotes or details from the source.',
    litSkills: [
      'Describes what happens in the text, in order',
      'Recognises one or two main themes (e.g. love, fear)',
      'Uses at least 2–3 quotes, even if briefly',
      'Writes in paragraphs (not one long block)',
      'Makes a simple comment on what the writer shows us',
    ],
    langSkills: [
      'Finds 2–3 relevant words or phrases in the source',
      'Makes a simple comment on how those words make the reader feel',
      'Writes creative or transactional pieces with a clear beginning and end',
      'Uses capital letters and full stops more consistently',
      'Varies sentence openers occasionally (not every sentence starts with "The")',
    ],
    keySkills: [
      {
        title: 'Use PEE: Point, Evidence, Explanation',
        body: 'The basic paragraph shape: make a point, quote the text, then say WHY it matters. Even three short sentences in that order lift you toward Grade 3.',
      },
      {
        title: 'Name the techniques you see',
        body: 'If you spot a metaphor, simile, or repetition — name it. You don\'t need to say much about it yet. Just naming shows you recognise the writer\'s methods.',
      },
      {
        title: 'Plan before you write',
        body: 'Even two minutes of planning — writing down three ideas — will make your answer feel organised rather than random.',
      },
    ],
    prev: '1',
    next: '3',
  },
  '3': {
    grade: '3',
    title: 'Grade 3',
    tagline: 'Basic reading with some attempt at analysis.',
    summary:
      'At Grade 3 you\'re beginning to comment on HOW the writer does things, not just WHAT they say. You can name some techniques, pick out relevant quotes, and write organised paragraphs. Your answer shows effort and structure, even if the analysis is still surface-level.',
    litSkills: [
      'Writes in clear paragraphs with a point in each',
      'Uses at least 4–5 quotes across the essay, chosen to match the question',
      'Names at least 2 techniques (metaphor, simile, imagery, etc.)',
      'Makes some comment on why the writer chose particular words',
      'Shows an awareness that the text has themes, even if not fully explained',
    ],
    langSkills: [
      'Picks out the right kind of evidence for each question type',
      'Attempts a simple comment on how language affects the reader',
      'Structures creative writing with a clear opening and ending',
      'Uses a range of simple punctuation (full stops, commas, question marks)',
      'Shows some vocabulary choices for effect in their own writing',
    ],
    keySkills: [
      {
        title: 'Always finish your PEE paragraphs',
        body: 'Lots of Grade 3 answers quote well but stop after "this shows..." — push yourself to explain WHAT it shows and WHY the writer chose those words.',
      },
      {
        title: 'Embed quotes into your sentence',
        body: 'Instead of "The quote is: ...", weave the words in: "Shakespeare describes the dagger as a \'fatal vision\'." This lifts the whole paragraph.',
      },
      {
        title: 'Use one subject-specific word per paragraph',
        body: 'Words like \'metaphor\', \'imagery\', \'contrast\', \'tone\'. Using them accurately — even once per paragraph — shows GCSE-level thinking.',
      },
    ],
    prev: '2',
    next: '4',
  },
  '4': {
    grade: '4',
    title: 'Grade 4',
    tagline: 'A standard pass — the threshold for most sixth-forms.',
    summary:
      'Grade 4 is the "standard pass" in the 9–1 system. Your answer shows consistent engagement, covers the question, uses quotes with purpose, and makes simple but clear comments on technique. Everything works — just not yet at an analytical or evaluative level.',
    litSkills: [
      'Writes a focused introduction that answers the question directly',
      'Uses 5–6 embedded quotes with clear purpose',
      'Names at least 3 techniques and makes a comment on each',
      'Shows awareness of at least one piece of context (when, where, why)',
      'Concludes with a short summary of your argument',
    ],
    langSkills: [
      'Picks 3–4 sharp quotes per question and comments on each',
      'Attempts to link language choices to specific effects',
      'Shows some variety in sentence structure (short for impact, longer for detail)',
      'Creative writing includes characterisation, setting, and some descriptive detail',
      'Accurate spelling of common words and most technical terms',
    ],
    keySkills: [
      {
        title: 'Use PEEL: Point, Evidence, Explanation, Link',
        body: 'Push beyond PEE. The final "L" is a sentence that either links back to the question or to a broader theme. This is the single biggest lift from Grade 3 to Grade 4.',
      },
      {
        title: 'Learn 10 strong quotes per text',
        body: 'Grade 4 answers rely on memory. Pick 10 quotes per set text that cover the key themes and characters, and practise embedding them.',
      },
      {
        title: 'Write one context sentence per answer',
        body: 'One accurate contextual link — "Victorian readers would have recognised this as..." — lifts Lit answers from Grade 3 to Grade 4 territory.',
      },
      {
        title: 'Plan for 3 paragraphs minimum',
        body: 'Three strong PEEL paragraphs beat six weak ones. Plan before writing: what\'s my argument? What three points support it?',
      },
    ],
    prev: '3',
    next: '5',
  },
  '5': {
    grade: '5',
    title: 'Grade 5',
    tagline: 'A strong pass — clear, consistent analysis.',
    summary:
      'Grade 5 answers are clear, well-structured, and start to analyse rather than describe. This is a strong pass and a real achievement. You\'re explaining HOW writers create effects, using terminology correctly, and weaving context into your points. For the full companion guide with essay examples, see the Grade 5 dedicated page.',
    litSkills: [
      'Clear understanding of the text and its themes',
      'Relevant references and quotations used as evidence',
      'Clear explanation of the effect of writer\'s methods',
      'Some use of subject terminology',
      'Ideas clearly organised in paragraphs',
    ],
    langSkills: [
      'Clear comments on language effects with relevant examples',
      'Attempts to explain how structure affects the reader',
      'Clear evaluation with some convincing opinions',
      'Creative writing shows varied vocabulary and sentence structures',
      'Transactional writing is well-organised with appropriate tone',
    ],
    keySkills: [
      {
        title: 'See the dedicated Grade 5 guide',
        body: 'The Grade 5 page has full essay comparison examples across six set texts and board-specific boundary tables. Follow the link at the bottom of this page.',
      },
    ],
    prev: '4',
    next: '6',
  },
  '6': {
    grade: '6',
    title: 'Grade 6',
    tagline: 'A solid pass — analysis with sustained focus.',
    summary:
      'Grade 6 is where analysis takes over from description. Your answer stays focused on the question throughout, makes thoughtful points about HOW writers create meaning, and uses terminology accurately. You can compare and contrast, and your writing shows awareness of the wider text — not just the extract in front of you.',
    litSkills: [
      'Sustained focus on the question — no drifting off-topic',
      'Analyses at least 3 writer\'s techniques in detail per question',
      'Uses 6–8 embedded quotes chosen for precision',
      'Links close reading to whole-text themes',
      'Integrates context as part of analysis, not as a separate paragraph',
    ],
    langSkills: [
      'Clear analysis of how language choices affect reader response',
      'Comments on structural features (openings, shifts, endings) with purpose',
      'Evaluation is supported by evidence and feels convincing',
      'Creative writing uses varied structure to build atmosphere or tension',
      'Transactional writing tailors tone + register to audience and purpose',
    ],
    keySkills: [
      {
        title: 'Zoom in on specific words',
        body: 'Instead of quoting a whole line, pick ONE word and spend a sentence on why that word matters. "Fatal" — not "fated" or "deadly" — carries both meanings at once.',
      },
      {
        title: 'Use "however" and "whereas" to contrast',
        body: 'Grade 6 essays compare: two characters, two moments, two poems. Signal this explicitly with connectors. Contrast drives sharper analysis.',
      },
      {
        title: 'Read the question twice, highlight key words',
        body: 'Most Grade 6 students know the text but drift off-question. Underline the two or three key words in the prompt and make sure EVERY paragraph answers them.',
      },
      {
        title: 'Know your 15 quotes per text cold',
        body: 'Grade 6 answers need quote flexibility. Drill 15 quotes per set text across themes and characters so you can pick the perfect one for any question.',
      },
    ],
    prev: '5',
    next: '7',
  },
  '7': {
    grade: '7',
    title: 'Grade 7',
    tagline: 'Thoughtful, developed response — top third of the cohort.',
    summary:
      'Grade 7 is where you start to move from "strong" to "impressive". Your answer reads like a thoughtful argument, not a checklist of techniques. You analyse effects on the reader with precision, you integrate multiple interpretations, and your writing feels confident. For the full companion guide with essay comparisons, see the Grade 7 dedicated page.',
    litSkills: [
      'Thoughtful, developed response with a sustained argument',
      'Careful selection of evidence, chosen for precision not quantity',
      'Analyses multiple layers of meaning in a single quote',
      'Integrates context as part of interpretation',
      'Uses subject terminology accurately and naturally',
    ],
    langSkills: [
      'Thoughtful evaluation with multiple interpretations',
      'Analyses structure and language together, not separately',
      'Creative writing has a strong voice and stylistic choices',
      'Transactional writing adapts tone skilfully across audiences',
      'Accurate and varied punctuation including semicolons, colons, dashes',
    ],
    keySkills: [
      {
        title: 'See the dedicated Grade 7 guide',
        body: 'The Grade 7 page has essay comparison examples + topic-specific "how to push to top band" pointers. Follow the link at the bottom of this page.',
      },
    ],
    prev: '6',
    next: '8',
  },
  '8': {
    grade: '8',
    title: 'Grade 8',
    tagline: 'Convincing, conceptualised — top 10% territory.',
    summary:
      'Grade 8 answers conceptualise — they see the text as doing something bigger. You argue with confidence, choose evidence precisely, and track the writer\'s method across the whole text. Your context is part of your argument, not a tacked-on paragraph. You can hold two interpretations at once and weigh them.',
    litSkills: [
      'Conceptualised argument — the essay has a clear thesis, not just themes',
      'Precise, selective quotations (6–10 max, each doing real work)',
      'Analyses techniques AT the sentence, paragraph and whole-text level',
      'Integrates multiple interpretations and weighs them against evidence',
      'Context threaded through the analysis as part of meaning-making',
    ],
    langSkills: [
      'Sophisticated analysis of how writer controls reader response',
      'Evaluates with precision — weighing what works, what could differ',
      'Creative writing has a distinctive voice and crafted structure',
      'Transactional writing is persuasive, polished, tonally exact',
      'Punctuation used for rhetorical effect as well as accuracy',
    ],
    keySkills: [
      {
        title: 'Have a thesis, not just a theme',
        body: 'A Grade 7 essay might say "Shakespeare presents jealousy as destructive." A Grade 8 essay says "Shakespeare presents jealousy as a constructed performance, not an innate emotion — Iago teaches Othello how to feel it." Lead with argument, not theme.',
      },
      {
        title: 'Read BETWEEN the lines',
        body: 'Grade 8 essays spot what the text leaves out, what it shifts away from, what\'s unspoken. Ask: what\'s missing? What\'s the writer avoiding?',
      },
      {
        title: 'Integrate context as tension, not backdrop',
        body: 'Instead of "Victorian society was patriarchal, which is why...", write "Dickens both reproduces AND troubles the Victorian patriarchal frame by..."  Context becomes part of the argument.',
      },
      {
        title: 'Hold two readings at once',
        body: 'Mention an alternative interpretation and show how your reading is stronger. "While some argue X, the text more clearly supports Y because..."',
      },
    ],
    prev: '7',
    next: '9',
  },
  '9': {
    grade: '9',
    title: 'Grade 9',
    tagline: 'The top grade — exceptional, original, critical.',
    summary:
      'Grade 9 is reserved for exceptional work: original thought, critical perception, and a convincing personal voice. Your argument challenges easy readings, you cite specific critics or contexts by name, and your writing shows control at every level. For the full companion guide with essay comparisons, see the Grade 9 dedicated page.',
    litSkills: [
      'Original, critical thesis that engages with scholarly interpretations',
      'Evidence chosen and sequenced as an argument, not a list',
      'Analysis moves between specific words, patterns, and whole-text design',
      'Challenges easy readings and defends a harder one',
      'Context cited with specificity (named figures, dates, movements)',
    ],
    langSkills: [
      'Critical evaluation with awareness of how texts construct their own rhetoric',
      'Structural analysis integrated with linguistic analysis seamlessly',
      'Creative writing shows deliberate genre choices + layered voice',
      'Transactional writing is publishable-quality — rhythmic, exact, controlled',
      'Every stylistic choice can be justified',
    ],
    keySkills: [
      {
        title: 'See the dedicated Grade 9 guide',
        body: 'The Grade 9 page has essay comparison examples + critic citations + "Grade 8 vs Grade 9" contrast. Follow the link at the bottom of this page.',
      },
    ],
    prev: '8',
  },
}

export async function GradeTargetPage({ grade }: { grade: GradeKey }) {
  const board = await getServerBoard()
  const boardConfig = board ? getBoardConfig(board) : null
  const data = GRADE_DATA[grade]
  const boundary = boardConfig ? getBoundaryForGrade(board, grade) : null
  const displayLabel = boardConfig ? boundary?.label ?? `Grade ${grade}` : `Grade ${grade}`
  const letterEquiv = gradeNineToLetterEquivalent(grade)

  return (
    <div className="space-y-8 pb-16">
      <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" render={<Link href="/revision/grade-targets" />}>
        <ArrowLeft className="size-3.5" />
        All grade targets
      </Button>

      {/* Hero */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Target className="size-3" />
            {displayLabel}
          </span>
          {letterEquiv && boardConfig?.category === 'igcse-language-a' && (
            <span className="text-xs text-muted-foreground">≈ 9-1 Grade {grade}</span>
          )}
        </div>
        <h1 className="text-heading-lg font-heading text-foreground sm:text-display-sm">
          {data.title}: {data.tagline}
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">{data.summary}</p>
      </section>

      {/* Boundary % */}
      {boundary && boundary.percent !== null && boardConfig && (
        <section className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">
              {boardConfig.shortName} {boundary.label} Boundary
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            You need approximately <span className="font-semibold text-primary">{boundary.percent}%</span> of total marks to reach {boundary.label} in {boardConfig.shortName}. This shifts slightly year to year, so always check the latest boundaries.
            {boundary.systemNote && <> <span className="italic">{boundary.systemNote}</span></>}
          </p>
        </section>
      )}

      {/* Skill checklists */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <CheckCircle2 className="size-4.5 text-cyan-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What {data.title} looks like</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="size-4 text-blue-400" />
              English Literature ({data.title})
            </h3>
            <ul className="space-y-2.5">
              {data.litSkills.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <PenTool className="size-4 text-violet-400" />
              English Language ({data.title})
            </h3>
            <ul className="space-y-2.5">
              {data.langSkills.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key skills */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Sparkles className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">How to get there</h2>
        </div>

        <div className="space-y-4">
          {data.keySkills.map((skill, i) => (
            <div key={skill.title} className="rounded-xl border border-border/40 bg-background/50 p-5">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {i + 1}. {skill.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{skill.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to adjacent grades */}
      <section className="grid gap-3 sm:grid-cols-2">
        {data.prev && (
          <Link
            href={`/revision/grade-targets/grade-${data.prev}`}
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border"
          >
            <ArrowLeft className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Previous grade</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Grade {data.prev}
              </p>
            </div>
          </Link>
        )}
        {data.next && (
          <Link
            href={`/revision/grade-targets/grade-${data.next}`}
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border sm:col-start-2"
          >
            <div className="flex-1 text-right">
              <p className="text-xs text-muted-foreground">Next grade</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Grade {data.next}
              </p>
            </div>
            <ArrowRight className="size-4 text-muted-foreground" />
          </Link>
        )}
      </section>
    </div>
  )
}
