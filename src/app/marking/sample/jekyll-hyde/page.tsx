import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/* ─── Metadata ────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Jekyll & Hyde Model Essays — Grade 5, 7 & 9 | The English Hub',
  description:
    "Three fully-annotated model essays answering 'How does Stevenson present the theme of duality?' at Grade 5, 7 and 9, with AO breakdowns, paragraph annotations and marker commentary. AQA, Edexcel, OCR & Eduqas.",
  keywords: [
    'Jekyll and Hyde',
    'model essay',
    'GCSE English Literature',
    'duality',
    'grade 5 essay',
    'grade 7 essay',
    'grade 9 essay',
    'AQA',
    'Edexcel',
    'OCR',
    'Eduqas',
    'Stevenson',
    'exam revision',
  ],
}

/* ─── Types ───────────────────────────────────────────────── */

interface Annotation {
  quote: string
  kind: 'strength' | 'improve' | 'technique'
  comment: string
}

interface AnnotatedParagraph {
  label: string
  text: string
  annotations: Annotation[]
}

interface ModelEssay {
  grade: 5 | 7 | 9
  title: string
  boards: string[]
  paper: string
  question: string
  wordCount: number
  commentary: string
  paragraphs: AnnotatedParagraph[]
  aos: { code: string; label: string; score: number; max: number }[]
  gradeJustification: string
  improvements: string[]
}

/* ─── Board guard ─────────────────────────────────────────── */

const SUPPORTED_BOARDS = ['AQA', 'Edexcel', 'OCR', 'Eduqas'] as const

/* ─── Essay data ──────────────────────────────────────────── */

const ESSAYS: ModelEssay[] = [
  /* ── Grade 5 ─────────────────────────────────────────────── */
  {
    grade: 5,
    title: 'Jekyll & Hyde — Grade 5 response',
    boards: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    paper: 'English Literature',
    question:
      'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?',
    wordCount: 300,
    commentary:
      "A clear response that identifies duality and uses relevant quotations. The student shows awareness of the text's themes but analysis tends towards identification rather than exploration. Context is present but attached rather than integrated into the argument.",
    paragraphs: [
      {
        label: 'Introduction',
        text: 'In The Strange Case of Dr Jekyll and Mr Hyde, Stevenson presents the theme of duality by showing that everyone has a good side and a bad side. Dr Jekyll is a respectable gentleman who creates a potion that lets his evil side come out as Mr Hyde. Stevenson uses the characters of Jekyll and Hyde to show that humans have two natures. This was an important idea in Victorian times because people cared a lot about their reputation and keeping up appearances.',
        annotations: [
          {
            quote: 'everyone has a good side and a bad side',
            kind: 'improve',
            comment:
              "This is too simplified. Stevenson's argument is more nuanced — Jekyll himself says his duality is not simply good versus evil. Try to engage with the complexity: Jekyll's respectable self is also a performance.",
          },
          {
            quote: 'people cared a lot about their reputation',
            kind: 'technique',
            comment:
              'Relevant AO3 but vague. Specify: Victorian gentlemen were expected to maintain public propriety while suppressing desires — this social pressure is what drives Jekyll to his experiment.',
          },
        ],
      },
      {
        label: "Development — Hyde's appearance",
        text: "Stevenson presents Hyde as ugly and frightening to show that he represents the evil side of Jekyll. Mr Enfield describes Hyde as giving 'a strong feeling of deformity' even though he cannot explain exactly what is wrong. This shows that Hyde looks wrong but people cannot say why. Stevenson also describes Hyde as 'hardly human' and compares him to animals like an ape. The word 'hardly' suggests that Hyde has lost almost all of his human qualities because he is pure evil. Victorian readers would have connected this to Darwin's theory of evolution, which suggested that humans evolved from apes and could go backwards.",
        annotations: [
          {
            quote: "'a strong feeling of deformity'",
            kind: 'strength',
            comment:
              "Well-chosen quotation. To improve, note how the word 'feeling' rather than 'appearance' is significant — Hyde's wrongness is perceived instinctively, not rationally, suggesting evil operates below conscious recognition.",
          },
          {
            quote:
              "The word 'hardly' suggests that Hyde has lost almost all of his human qualities",
            kind: 'technique',
            comment:
              "Good attempt at word-level analysis. Push further: 'hardly human' implies Hyde exists on a threshold — he is not fully animal either, which makes him more disturbing than a simple monster.",
          },
        ],
      },
      {
        label: 'Conclusion',
        text: "In conclusion, Stevenson presents duality by creating two characters who are really one person. Jekyll represents the good, respectable side and Hyde represents the evil, hidden side. The novella suggests that trying to separate these two sides is dangerous and leads to destruction. Stevenson's message is that people should accept both parts of their nature rather than trying to hide their dark side. This was a shocking idea for Victorian readers because society expected people to be morally perfect.",
        annotations: [
          {
            quote:
              'Jekyll represents the good, respectable side and Hyde represents the evil, hidden side',
            kind: 'improve',
            comment:
              "This oversimplifies the novella's central argument. Jekyll himself admits he is not purely good — he describes his pleasures as 'undignified' rather than wicked. The duality is more subtle than a simple good/evil split.",
          },
          {
            quote: "Stevenson's message is that people should accept both parts of their nature",
            kind: 'strength',
            comment:
              "A valid interpretation of the novella's moral, clearly stated. Developing this with textual evidence would strengthen it considerably.",
          },
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 7, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 6, max: 12 },
      { code: 'AO3', label: 'Context', score: 3, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
    gradeJustification:
      "This response sits at Grade 5. It demonstrates clear understanding of duality and selects relevant quotations, but analysis tends to explain what happens rather than exploring how Stevenson constructs meaning through language and form. Context is relevant but generalised ('Victorian readers would have...') rather than precisely deployed. The essay identifies methods but does not consistently analyse their effects or connect them to Stevenson's wider purpose.",
    improvements: [
      "Move beyond the simple good/evil binary — engage with Jekyll's own admission that his respectable self was also a kind of performance, not genuine goodness.",
      "Analyse individual words rather than whole phrases — e.g. why 'feeling' rather than 'sight'? Why 'hardly' rather than 'not'?",
      'Integrate context as part of the analytical argument rather than adding it as a separate sentence at the end of a paragraph.',
      "Consider structural choices: why does Stevenson withhold the truth about Jekyll and Hyde's identity until the final chapters? What effect does this narrative structure create?",
    ],
  },

  /* ── Grade 7 ─────────────────────────────────────────────── */
  {
    grade: 7,
    title: 'Jekyll & Hyde — Grade 7 response',
    boards: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    paper: 'English Literature',
    question:
      'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?',
    wordCount: 410,
    commentary:
      "A thoughtful, well-structured response that analyses methods with precision and integrates context effectively. The student sustains focus on duality as a structural and thematic principle rather than a simple character contrast. To reach Grade 8/9, push towards more conceptualised, independent interpretation and explore the novella's form as a vehicle for its meaning.",
    paragraphs: [
      {
        label: 'Introduction — thesis',
        text: "Stevenson presents duality not as a simple opposition between good and evil but as an inescapable condition of human identity, embedded in the very structure of the novella. The narrative form itself enacts duality: the story is fractured across multiple perspectives — Enfield's anecdote, Utterson's investigation, Lanyon's confession, and Jekyll's 'Full Statement' — each offering a partial view that the reader must assemble. This structural fragmentation mirrors the novella's central argument: that identity is never singular or stable, but always composed of competing, contradictory selves. For Stevenson's late-Victorian readership, this was a provocative challenge to the prevailing cult of respectability, which demanded that gentlemen present a unified, morally upright public self.",
        annotations: [
          {
            quote: 'The narrative form itself enacts duality',
            kind: 'strength',
            comment:
              'Excellent structural awareness — the student recognises that form is not separate from meaning but actively produces it. This is confident AO2 work.',
          },
          {
            quote: 'prevailing cult of respectability',
            kind: 'technique',
            comment:
              "Precise, evaluative contextual language. 'Cult' implies Stevenson views Victorian propriety as irrational devotion rather than genuine morality — a subtle but significant interpretive choice.",
          },
        ],
      },
      {
        label: 'Development — the language of Hyde',
        // FLAG: 'no particular malformation' is a paraphrase, not Stevenson's verbatim wording — original is 'although I couldn't specify the point'. Replaced with verified phrase.
        text: "Hyde's physical presentation is Stevenson's most sustained exploration of duality's unsettling nature. When Enfield reports that Hyde gives 'a strong feeling of deformity, although I couldn't specify the point,' Stevenson locates Hyde's horror in a gap between perception and articulation. The rational, classificatory language of Victorian science — which sought to read character from physiognomy — breaks down in Hyde's presence. He cannot be categorised, and this categorical failure is itself the source of terror. Stevenson extends this through animalistic imagery: Hyde moves with 'ape-like fury' and is described as 'troglodytic,' a term that explicitly invokes evolutionary regression. In the context of post-Darwinian anxiety, Hyde embodies the fear that civilisation is merely a veneer over the primitive self — that the gentleman and the beast share not just a body but a nature.",
        annotations: [
          {
            quote: 'gap between perception and articulation',
            kind: 'strength',
            comment:
              "Sophisticated conceptual language that identifies something genuinely interesting about Stevenson's technique. The student is analysing the effect of indescribability itself.",
          },
          {
            quote: 'civilisation is merely a veneer over the primitive self',
            kind: 'technique',
            comment:
              "Well-integrated AO3 — Darwinian context is woven into analysis of language, not bolted on. To push further, consider how this connects to Stevenson's Scottish Presbyterian background and the Calvinist doctrine of innate depravity.",
          },
        ],
      },
      {
        label: "Conclusion — Jekyll's confession",
        text: "The novella's final chapter, 'Henry Jekyll's Full Statement of the Case,' destabilises the duality it has spent its narrative constructing. Jekyll admits that his pleasures were 'undignified' rather than criminal — hardly the monstrous depravity that Hyde's appearance would suggest. This rhetorical understatement reveals that the true duality is not between good and evil but between public performance and private desire: Jekyll is not a good man concealing a monster, but a vain man concealing perfectly ordinary appetites. The pronoun confusion in the final pages — Jekyll alternating between 'I' and 'he' when referring to Hyde — structurally enacts the collapse of the boundary between the two identities. Stevenson refuses to resolve this confusion, leaving the reader with a deeply uncomfortable question: if Jekyll and Hyde cannot be separated even in language, then duality is not a problem to be solved but a condition to be endured.",
        annotations: [
          {
            quote: "'undignified' rather than criminal",
            kind: 'strength',
            comment:
              'Perceptive close reading that challenges the simplistic good/evil interpretation. The student has identified a key detail that most responses overlook.',
          },
          {
            quote: 'pronoun confusion in the final pages',
            kind: 'technique',
            comment:
              "Excellent structural observation. To reach Grade 9, analyse specific pronoun shifts in Jekyll's statement and argue that the grammatical instability is Stevenson's most powerful representation of duality.",
          },
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 10, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 9, max: 12 },
      { code: 'AO3', label: 'Context', score: 5, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
    gradeJustification:
      "This response achieves Grade 7 through sustained analytical focus, precise language analysis, and well-integrated context. The student treats duality as a structural and linguistic phenomenon, not just a thematic one, and identifies genuinely interesting textual details (the pronoun confusion, the gap between perception and articulation). It falls short of Grade 8/9 because the analysis, while confident, does not consistently reach the level of independent, conceptualised interpretation — the student explains Stevenson's methods effectively but could push further into questioning the text's own assumptions.",
    improvements: [
      "Push towards more independent interpretation — for example, argue that Jekyll's confession is itself unreliable, and that the novella's multiple narrators create irresolvable ambiguity rather than progressive revelation.",
      "Engage more precisely with the novella's Gothic genre conventions and how Stevenson both uses and subverts them to explore duality.",
      "Analyse specific pronoun shifts in Jekyll's statement rather than referencing them generally — quote the exact moments where 'I' becomes 'he' and explore the grammatical implications.",
      "Consider alternative critical perspectives: a psychoanalytic reading (Freud's id/ego/superego, published 1923 but applicable retrospectively) could enrich the analysis of internal conflict.",
    ],
  },

  /* ── Grade 9 ─────────────────────────────────────────────── */
  {
    grade: 9,
    title: 'Jekyll & Hyde — Grade 9 response',
    boards: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    paper: 'English Literature',
    question:
      'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?',
    wordCount: 520,
    commentary:
      "A perceptive, conceptualised response that interrogates the novella's treatment of duality with genuine intellectual independence. Language analysis operates at word and syntax level. Context is deployed as an active interpretive tool. The argument is original, sustained, and structurally controlled, holding competing readings in productive tension.",
    paragraphs: [
      {
        label: 'Introduction — conceptual thesis',
        text: "Stevenson's novella does not merely present duality — it performs it, embedding the fracture between self and other into every layer of its narrative architecture. The text's generic identity is itself dual: part detective fiction, part Gothic horror, part confessional autobiography, each mode generating different expectations that Stevenson systematically refuses to resolve. The title's clinical designation, 'Strange Case,' frames the narrative as a forensic investigation, yet the mystery it investigates proves to be not a crime but a condition — the irreducible doubleness of human nature. For Stevenson, writing in 1886, this was a challenge directed at the moral certainties of late-Victorian culture, which insisted on clear boundaries between the respectable and the depraved, the civilised and the primitive, the rational and the bestial. The novella's radical proposition is that these boundaries do not merely blur — they never existed.",
        annotations: [
          {
            quote: 'does not merely present duality — it performs it',
            kind: 'strength',
            comment:
              'Immediately establishes a conceptualised thesis that operates at the level of form as well as content. The student is analysing how the text works, not just what it says.',
          },
          {
            quote: 'these boundaries do not merely blur — they never existed',
            kind: 'technique',
            comment:
              'Epigrammatic formulation that demonstrates genuine critical independence. This is the kind of original proposition that distinguishes Grade 9 from Grade 8.',
          },
        ],
      },
      {
        label: 'Development — the epistemology of Hyde',
        text: "Hyde's resistance to description is Stevenson's most philosophically charged exploration of duality. When Enfield struggles to articulate Hyde's appearance — 'He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable' — the tricolon does not narrow but widens, each attempt at precision producing only a vaguer abstraction. The rhetorical structure enacts an epistemological failure: Victorian empiricism, which promised that careful observation could classify and therefore control the natural world, collapses in Hyde's presence. He is, in Enfield's formulation, 'a strong feeling of deformity' — note that the deformity is a 'feeling,' not a feature. Stevenson displaces Hyde from the domain of the visible into the domain of the affective, suggesting that evil is not a property that can be observed and measured but an atmosphere that contaminates perception itself. The Darwinian language of atavism — Hyde as 'troglodytic,' moving with 'ape-like fury' — further destabilises the boundary between human and animal, implying that the evolutionary hierarchy Victorian science relied upon is as precarious as Jekyll's chemical division of the self.",
        annotations: [
          {
            quote:
              'the tricolon does not narrow but widens, each attempt at precision producing only a vaguer abstraction',
            kind: 'strength',
            comment:
              'Outstanding AO2: the student analyses the rhetorical structure of a quotation rather than simply extracting its content. This demonstrates the ability to read form as meaning.',
          },
          {
            quote: 'displaces Hyde from the domain of the visible into the domain of the affective',
            kind: 'technique',
            comment:
              "Sophisticated critical vocabulary deployed with precision. The distinction between 'visible' and 'affective' is genuinely illuminating and represents independent analytical thinking.",
          },
        ],
      },
      {
        label: 'Conclusion — the collapse of singular identity',
        text: "Jekyll's 'Full Statement of the Case' — itself a title that promises legal clarity but delivers psychological chaos — is the novella's most devastating articulation of duality. Jekyll's admission that his pleasures were 'undignified' rather than wicked is a masterpiece of rhetorical deflection: the adjective 'undignified' belongs to the register of social propriety, not moral philosophy, revealing that Jekyll's terror is less about evil than about exposure. His duality is not between saint and sinner but between the self he performs for society and the desires he cannot publicly acknowledge. The grammatical disintegration of the final pages — where Jekyll writes 'He, I say — I cannot say I' — collapses the first-person singular, the fundamental unit of identity in Western autobiography. The dash itself is a typographical wound, a rupture in the sentence that mirrors the rupture in the self. Stevenson's final stroke of genius is to leave this wound open: there is no healing, no reintegration, no moral restoration. The novella ends not with resolution but with the extinction of its narrator, as if to suggest that duality, once acknowledged, cannot be survived — only, in the writing, briefly witnessed.",
        annotations: [
          {
            quote: "'undignified' rather than wicked",
            kind: 'strength',
            comment:
              'Precise, original close reading. The student has identified the exact word that destabilises the good/evil binary and drawn out its implications with critical rigour.',
          },
          {
            quote: 'The dash itself is a typographical wound',
            kind: 'technique',
            comment:
              'Exceptional AO2 analysis — punctuation is read as meaning. This is the kind of micro-level formal analysis that characterises the strongest Grade 9 responses: nothing in the text is beneath attention.',
          },
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 12, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 12, max: 12 },
      { code: 'AO3', label: 'Context', score: 6, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
    gradeJustification:
      "This response achieves Grade 9 through sustained conceptualised analysis, genuine intellectual independence, and word-level precision. The student does not explain duality — they interrogate it, arguing that the novella's form, language, and narrative structure all enact the doubleness they describe. Context is not background knowledge but an active analytical tool (Darwinian anxiety, Victorian empiricism, the conventions of autobiography). The observation that Jekyll's terror is about 'exposure' rather than 'evil' represents original critical thinking. The analysis of punctuation ('the dash is a typographical wound') demonstrates that the student reads at the level of the sentence, not just the paragraph. The argument is sustained, structurally controlled, and intellectually ambitious.",
    improvements: [
      "Even at this level, the essay could engage with the novella's treatment of space and geography — the duality of London's public streets and private interiors mirrors Jekyll's divided self.",
      "Consider the significance of the all-male world of the novella: some critics read the 'undignified' pleasures as a coded reference to homosexuality in the context of the 1885 Criminal Law Amendment Act.",
      "The essay could explore how Stevenson's own duality — a sickly Calvinist Scotsman writing adventure fiction — informs the novella's anxieties about performance and authenticity.",
    ],
  },
]

/* ─── Colour helpers ──────────────────────────────────────── */

const ANNOTATION_COLOURS: Record<Annotation['kind'], string> = {
  strength: 'border-l-green-500 bg-green-50 dark:bg-green-950/30',
  improve: 'border-l-amber-500 bg-amber-50 dark:bg-amber-950/30',
  technique: 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/30',
}

const ANNOTATION_LABELS: Record<Annotation['kind'], string> = {
  strength: 'Strength',
  improve: 'To improve',
  technique: 'Technique / AO link',
}

const GRADE_COLOUR: Record<number, string> = {
  5: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40',
  7: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
  9: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
}

/* ─── Page ────────────────────────────────────────────────── */

export default function JekyllHydeEssayBankPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ──────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              Marking
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/marking/sample" className="hover:text-primary">
              Sample essays
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">Jekyll &amp; Hyde</li>
        </ol>
      </nav>

      {/* ── Header ──────────────────────────────────────── */}
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          Jekyll &amp; Hyde — Model Essay Bank
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Three original model essays answering &ldquo;How does Stevenson present the theme of
          duality?&rdquo; at Grade 5, 7 and 9. Each essay includes paragraph annotations, AO
          breakdown, grade justification, and targeted improvements.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUPPORTED_BOARDS.map((b) => (
            <Badge key={b} variant="outline">
              {b}
            </Badge>
          ))}
        </div>
      </header>

      {/* ── Jump links ──────────────────────────────────── */}
      <nav aria-label="Jump to grade" className="mb-10 flex flex-wrap gap-2">
        {ESSAYS.map((e) => (
          <a
            key={e.grade}
            href={`#grade-${e.grade}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <span className="font-heading text-base font-extrabold">{e.grade}</span>
            <span>Grade {e.grade}</span>
          </a>
        ))}
      </nav>

      {/* ── Essays ──────────────────────────────────────── */}
      <div className="space-y-16">
        {ESSAYS.map((essay) => (
          <section key={essay.grade} id={`grade-${essay.grade}`} className="scroll-mt-24">
            {/* Grade heading */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl font-heading text-xl font-extrabold ${GRADE_COLOUR[essay.grade]}`}
              >
                {essay.grade}
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">{essay.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {essay.wordCount} words &middot; {essay.boards.join(', ')}
                </p>
              </div>
            </div>

            {/* Question */}
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="py-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-semibold text-primary">Q:</span> {essay.question}
                </p>
              </CardContent>
            </Card>

            {/* Marker commentary */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">Marker commentary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground">{essay.commentary}</p>
              </CardContent>
            </Card>

            {/* AO breakdown */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">AO Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {essay.aos.map((ao) => {
                    const pct = Math.round((ao.score / ao.max) * 100)
                    return (
                      <div key={ao.code} className="space-y-1">
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-semibold">{ao.code}</span>
                          <span className="text-muted-foreground">
                            {ao.score}/{ao.max}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">{ao.label}</p>
                      </div>
                    )
                  })}
                </div>
                <p className="mt-3 text-xs font-medium text-muted-foreground">
                  Total: {essay.aos.reduce((s, a) => s + a.score, 0)}/
                  {essay.aos.reduce((s, a) => s + a.max, 0)}
                </p>
              </CardContent>
            </Card>

            {/* Annotated paragraphs */}
            <div className="mb-6 space-y-6">
              {essay.paragraphs.map((para, pi) => (
                <Card key={pi}>
                  <CardHeader>
                    <CardDescription className="font-semibold uppercase tracking-wider">
                      {para.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-foreground">{para.text}</p>
                    {para.annotations.map((ann, ai) => (
                      <div
                        key={ai}
                        className={`rounded-md border-l-4 p-3 ${ANNOTATION_COLOURS[ann.kind]}`}
                      >
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider">
                          {ANNOTATION_LABELS[ann.kind]}
                        </p>
                        <p className="mb-1 text-sm italic text-muted-foreground">
                          &ldquo;{ann.quote}&rdquo;
                        </p>
                        <p className="text-sm text-foreground">{ann.comment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Grade justification */}
            <Card className="mb-6 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">Grade justification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground">
                  {essay.gradeJustification}
                </p>
              </CardContent>
            </Card>

            {/* What would improve this */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">What would improve this essay?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-foreground">
                  {essay.improvements.map((imp, i) => (
                    <li key={i} className="leading-relaxed">
                      {imp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* ── Footer CTA ──────────────────────────────────── */}
      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking/sample" />}>
          Back to sample essays
        </Button>
        <Button render={<Link href="/marking/submit" />}>Mark your own essay</Button>
      </div>
    </div>
  )
}
