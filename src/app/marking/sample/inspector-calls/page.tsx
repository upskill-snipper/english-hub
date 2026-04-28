import { Metadata } from 'next'
import Link from 'next/link'
import { requireBoard } from '@/lib/board/board-guard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradePredictionCard } from '@/components/marking/GradePredictionCard'
import { AOBreakdown } from '@/components/marking/AOBreakdown'
import { AnnotatedEssay, type Annotation } from '@/components/marking/AnnotatedEssay'

/* ─── Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'An Inspector Calls — Model Essay Bank',
  description:
    'Five fully-annotated model essays for An Inspector Calls at Grades 5, 7 and 9, with AO breakdowns and marker commentary.',
}

/* ─── Types ────────────────────────────────────────────────── */

interface ModelEssay {
  id: string
  grade: 5 | 7 | 9
  title: string
  question: string
  paper: string
  board: string
  confidence: number
  gradeJustification: string
  commentary: string
  paragraphs: string[]
  annotations: Annotation[]
  aos: { code: string; label: string; score: number; max: number }[]
}

/* ─── Essay data ───────────────────────────────────────────── */

const ESSAYS: ModelEssay[] = [
  /* ============================================================
   * Essay 1 — Grade 5: Responsibility
   * ============================================================ */
  {
    id: 'responsibility-g5',
    grade: 5,
    title: 'Grade 5 — Responsibility',
    question: 'How does Priestley present ideas about responsibility?',
    board: 'AQA',
    paper: 'English Literature — Paper 2',
    confidence: 84,
    gradeJustification:
      'Meets Grade 5 descriptors: clear understanding of the theme with relevant textual references. Quotations are used to support points but analysis tends toward identification of meaning rather than exploration of method. Context is present but attached to the end rather than woven into the argument. Spelling, punctuation and grammar are generally accurate.',
    commentary:
      "A clear response that identifies responsibility as a central theme and references relevant characters. To move into Grade 6+, the student should analyse HOW Priestley's language and structural choices shape meaning, and integrate contextual ideas into analytical points rather than adding them as separate sentences.",
    paragraphs: [
      "Priestley presents responsibility as a key theme in An Inspector Calls. The older characters, Mr and Mrs Birling, refuse to accept responsibility for Eva Smith's death, while the younger generation, Sheila and Eric, do accept it. This shows that Priestley wanted the audience to see that everyone in society has a duty to look after others.",
      "Mr Birling refuses to accept any responsibility for Eva's fate. He insists 'a man has to mind his own business and look after himself and his own', which shows that he believes only in self-interest and rejects collective duty. Priestley uses Birling to represent selfish capitalists who only care about profit. The audience would dislike Birling because he does not care about Eva at all.",
      "Sheila, however, accepts responsibility. When she learns what she did, she says she will 'never, never do it again'. The repetition of 'never' shows that she genuinely regrets her actions and wants to change. Priestley uses Sheila to show that the younger generation can learn from their mistakes.",
      "At the end of the play the Inspector says 'we are members of one body'. This is Priestley's message to the audience that everyone is connected and should take responsibility for each other. Priestley was a socialist and believed in a welfare state where people helped one another. He set the play in 1912 but it was first performed in 1945, so the audience could see how attitudes had changed.",
    ],
    annotations: [
      {
        id: 'r5-a1',
        paragraphIndex: 0,
        quote: 'everyone in society has a duty to look after others',
        kind: 'strength',
        comment:
          "Clear thematic overview. To push higher, frame this as Priestley's deliberate dramatic strategy rather than a simple observation.",
      },
      {
        id: 'r5-a2',
        paragraphIndex: 1,
        quote: "'a man has to mind his own business and look after himself and his own'",
        kind: 'technique',
        comment:
          "Relevant quotation, accurately attributed to Mr Birling. Analyse the repetition of 'his own' — this possessive insistence reveals Birling's narrow individualism. This would lift AO2.",
      },
      {
        id: 'r5-a3',
        paragraphIndex: 2,
        quote: "The repetition of 'never' shows",
        kind: 'strength',
        comment:
          "Method identified (repetition). Now explain what the repetition dramatises: Sheila's horror at her own capacity for cruelty.",
      },
      {
        id: 'r5-a4',
        paragraphIndex: 3,
        quote: 'Priestley was a socialist',
        kind: 'improve',
        comment:
          "AO3 context is relevant but bolted on at the end. Integrate it: e.g. 'Writing as a committed socialist, Priestley structures the Inspector's final speech as a direct appeal...'",
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 7, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 6, max: 12 },
      { code: 'AO3', label: 'Context', score: 3, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
  },

  /* ============================================================
   * Essay 2 — Grade 7: Responsibility
   * ============================================================ */
  {
    id: 'responsibility-g7',
    grade: 7,
    title: 'Grade 7 — Responsibility',
    question: 'How does Priestley present ideas about responsibility?',
    board: 'AQA',
    paper: 'English Literature — Paper 2',
    confidence: 89,
    gradeJustification:
      'Meets Grade 7 descriptors: a thoughtful, developed response with sustained focus on the question. Methods are identified and analysed, and context is integrated into the argument rather than bolted on. The response handles multiple characters and structural choices with a clear thesis. To reach Grade 8/9, the student needs more precise word-level analysis and a fully conceptualised argument.',
    commentary:
      "A confident response that moves beyond identification into explanation and, at points, exploration. The structural awareness (opening versus ending) is particularly effective. To push higher, the student should allow individual word choices to drive extended analysis and develop a more original overarching thesis about Priestley's purpose.",
    paragraphs: [
      "Priestley uses An Inspector Calls as a vehicle to interrogate the concept of collective responsibility, contrasting characters who embrace it with those who violently reject it. The play's dramatic structure — set in 1912 but performed in 1945 — allows Priestley to weaponise dramatic irony, ensuring his post-war audience recognises the catastrophic consequences of the Birlings' individualism.",
      "Mr Birling is presented as the embodiment of irresponsibility. His assertion that 'a man has to mind his own business and look after himself and his own' directly contradicts the Inspector's collectivist message. The blunt monosyllables and first-person focus reveal a worldview that is stubbornly self-centred. Priestley positions Birling's speeches at the play's opening so that the Inspector's arrival structurally demolishes them, brick by brick.",
      "By contrast, Sheila's arc traces a movement from complicity to conscience. Her admission that she had the girl 'turned out' of her job is delivered with increasing anguish as the Inspector forces her to confront the human cost of her privilege. Priestley's use of the progressive tense in the stage directions — Sheila 'miserably' acknowledging her guilt — externalises an internal moral reckoning that the older Birlings never undergo.",
      "The Inspector's parting speech functions as Priestley's thesis statement. The declarative 'we are responsible for each other' leaves no ambiguity; the plural pronoun 'we' implicates not only the Birlings but the audience themselves. Writing in 1945, Priestley knew his audience had lived through two world wars triggered, in part, by the selfishness the Birlings represent. The Inspector thus becomes Priestley's mouthpiece for a new social contract — one grounded in empathy and accountability rather than profit and status.",
    ],
    annotations: [
      {
        id: 'r7-a1',
        paragraphIndex: 0,
        quote: 'weaponise dramatic irony',
        kind: 'strength',
        comment:
          'Confident conceptual language that frames the whole-play structure as deliberate authorial strategy. Strong AO1/AO3 integration.',
      },
      {
        id: 'r7-a2',
        paragraphIndex: 1,
        quote: 'blunt monosyllables and first-person focus',
        kind: 'technique',
        comment:
          "Effective AO2: language features are identified and their effect explored. Could push further by contrasting Birling's register with the Inspector's.",
      },
      {
        id: 'r7-a3',
        paragraphIndex: 2,
        quote: 'progressive tense in the stage directions',
        kind: 'technique',
        comment:
          "Impressive AO2 awareness of form (stage directions as text). To reach Grade 9, explore what the adverb 'miserably' reveals about Priestley's manipulation of audience sympathy.",
      },
      {
        id: 'r7-a4',
        paragraphIndex: 3,
        quote: "the plural pronoun 'we' implicates not only the Birlings but the audience",
        kind: 'strength',
        comment:
          'Sophisticated reading that connects language to reception. This is approaching Grade 8 territory.',
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 10, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 9, max: 12 },
      { code: 'AO3', label: 'Context', score: 5, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
  },

  /* ============================================================
   * Essay 3 — Grade 9: Responsibility (conceptualised)
   * ============================================================ */
  {
    id: 'responsibility-g9',
    grade: 9,
    title: 'Grade 9 — Responsibility',
    question: 'How does Priestley present ideas about responsibility?',
    board: 'AQA',
    paper: 'English Literature — Paper 2',
    confidence: 95,
    gradeJustification:
      'Meets Grade 9 descriptors: a perceptive, conceptualised response in which every paragraph advances an original, sustained thesis. Language, form and structure are analysed at word level, with terminology serving interpretation rather than display. Context is woven into the fabric of the argument. The conclusion synthesises ideas rather than restating them.',
    commentary:
      'A fully conceptualised response that treats the play as a political mechanism rather than simply a story about a family. Word-level analysis drives interpretation, structural choices are explored for their dramatic effect, and context is integral to every point. The argument is original, sustained and — crucially — debatable, which is what Grade 9 demands.',
    paragraphs: [
      "Priestley does not merely present responsibility in An Inspector Calls; he engineers a dramatic machine designed to manufacture it. The play's architecture — a sealed dining room, a single evening, an inescapable interrogator — strips away every escape route the Birlings attempt, forcing both characters and audience to confront a discomforting truth: that privilege is not neutral but actively destructive. Responsibility, in Priestley's schema, is not a moral option but a social obligation whose refusal carries existential consequences.",
      "The Birlings' evasion of responsibility is dramatised through language that reveals rather than conceals. Mrs Birling's dismissal of Eva as one of the 'Girls of that class' exposes the ideological scaffolding of class: the demonstrative 'that' performs an act of distancing, converting a human being into a category. Mr Birling complements this linguistic erasure with the doctrine of self-interest — 'a man has to mind his own business and look after himself and his own' — a creed that severs the social bond Eva might have invoked for help. Priestley's distribution of these dismissive registers across the parental couple is structural rather than accidental: it reveals that their irresponsibility is not personal failure but systemic ideology, reproduced within the family unit as naturally as table manners.",
      "Sheila's trajectory offers the counter-argument. Her initial complicity — having Eva dismissed from a shop — is framed as casual cruelty born of unchecked power. Yet Priestley grants Sheila a capacity the older Birlings lack: the ability to be remade by knowledge. Her declaration that she will 'never, never do it again' deploys repetition not as rhetoric but as vow. The adverbial intensification registers the psychological violence of self-recognition — Sheila does not simply regret; she repudiates the version of herself that was capable of such harm. Priestley structures her awakening before the interval, ensuring the audience carries her transformation into the second half as a moral benchmark against which the parents' continued denial is measured.",
      "The Inspector's final speech crystallises Priestley's thesis, but its power derives from what it withholds as much as what it states. The warning of 'fire and blood and anguish' invokes both biblical prophecy and the lived reality of 1945 audiences who had survived the Blitz. Priestley leaves the trinitarian structure unresolved — there is no redemption clause, no offered salvation. Responsibility, in this formulation, is not transactional but unconditional: it demands action regardless of reward. The telephone call that closes the play — another inspector is coming — refuses closure entirely, denying the Birlings and the audience the comfort of finality. Priestley thus transforms the well-made play into something closer to a political act: responsibility is not a lesson to be learned once but a condition to be inhabited permanently.",
      'Ultimately, Priestley presents responsibility as the defining moral test of a society. Those who pass it — Sheila, Eric — are reborn; those who fail — Birling, Sybil — are condemned to repeat history. Writing between the ruins of one war and the memory of another, Priestley understood that responsibility is not sentiment but infrastructure: the invisible architecture upon which any just society must be built. The Inspector, who may not be a real police officer at all, embodies this structural metaphor — he is less a character than a conscience, an apparatus of accountability that a civilised society must construct if it is to survive.',
    ],
    annotations: [
      {
        id: 'r9-a1',
        paragraphIndex: 0,
        quote: 'engineers a dramatic machine designed to manufacture it',
        kind: 'strength',
        comment:
          'Conceptualised thesis from the opening line. The mechanical metaphor frames the entire play as a deliberate political apparatus — this is Grade 9 thinking.',
      },
      {
        id: 'r9-a2',
        paragraphIndex: 1,
        quote: "the demonstrative 'that' performs an act of distancing",
        kind: 'technique',
        comment:
          'Outstanding AO2: a single word is analysed for its ideological function. The structural observation (repetition across characters) elevates this to a whole-text reading.',
      },
      {
        id: 'r9-a3',
        paragraphIndex: 2,
        quote: 'repetition not as rhetoric but as vow',
        kind: 'strength',
        comment:
          'Perceptive distinction that demonstrates critical vocabulary beyond formula. The structural point about the interval is exceptional AO2.',
      },
      {
        id: 'r9-a4',
        paragraphIndex: 3,
        quote: 'Priestley leaves the trinitarian structure unresolved',
        kind: 'technique',
        comment:
          'Form is analysed as meaning: the three-part list is read for what it omits, not just what it contains. This moves analysis beyond identification into genuine interpretation.',
      },
      {
        id: 'r9-a5',
        paragraphIndex: 4,
        quote: 'responsibility is not sentiment but infrastructure',
        kind: 'strength',
        comment:
          'Epigrammatic conclusion that synthesises the entire argument into an original formulation. Demonstrates conceptual control of the whole essay.',
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 12, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 12, max: 12 },
      { code: 'AO3', label: 'Context', score: 6, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
  },

  /* ============================================================
   * Essay 4 — Grade 5: Sheila
   * ============================================================ */
  {
    id: 'sheila-g5',
    grade: 5,
    title: 'Grade 5 — Sheila',
    question: 'How does Priestley use the character of Sheila to convey his message?',
    board: 'AQA',
    paper: 'English Literature — Paper 2',
    confidence: 83,
    gradeJustification:
      "Meets Grade 5 descriptors: clear understanding of Sheila's role with appropriate textual references. Some method identification (stage directions, repetition) but effects are stated rather than explored. Context is present but not integrated. Accurate SPaG throughout.",
    commentary:
      "A clear and relevant response that tracks Sheila's journey from start to finish. Quotations are well chosen but analysis tends to tell the reader what happens rather than explore how Priestley shapes meaning. Context appears as a bolted-on final sentence rather than as an integrated part of the argument.",
    paragraphs: [
      "Priestley uses Sheila to show that young people can change and accept responsibility. At the start of the play, Sheila is presented as a happy young woman who is excited about her engagement to Gerald. She is described in the stage directions as being 'very pleased with life', which shows she is carefree and does not think about the world outside her family.",
      "When the Inspector tells Sheila about Eva Smith, she is upset. She realises that she got Eva sacked from a shop because she was jealous. Sheila says she will 'never, never do it again', which shows she feels guilty and wants to make up for what she did. The repetition of 'never' shows how strongly she feels.",
      'At the end of the play, Sheila is very different from how she was at the start. She stands up to her parents and tells them they should accept responsibility. Priestley uses Sheila to show that the younger generation can learn and improve. He was a socialist and wanted society to change after the war, so Sheila represents the hope for a better future.',
    ],
    annotations: [
      {
        id: 's5-a1',
        paragraphIndex: 0,
        quote: "'very pleased with life'",
        kind: 'technique',
        comment:
          "Good use of stage directions as evidence (AO2). Now analyse: what does Priestley achieve by establishing contentment before the Inspector's arrival? Think about dramatic contrast.",
      },
      {
        id: 's5-a2',
        paragraphIndex: 1,
        quote: "The repetition of 'never' shows how strongly she feels",
        kind: 'improve',
        comment:
          "Identifies method but does not explore its effect. Try: the emphatic repetition dramatises Sheila's horror at her own capacity for casual cruelty — it registers self-recognition, not just regret.",
      },
      {
        id: 's5-a3',
        paragraphIndex: 2,
        quote: 'He was a socialist and wanted society to change',
        kind: 'improve',
        comment:
          "AO3 context is accurate but stapled on. Integrate it into your analysis: 'Priestley, writing for a 1945 audience rebuilding after war, positions Sheila as evidence that social conscience can be awakened.'",
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 7, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 5, max: 12 },
      { code: 'AO3', label: 'Context', score: 3, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
  },

  /* ============================================================
   * Essay 5 — Grade 9: Sheila (conceptualised)
   * ============================================================ */
  {
    id: 'sheila-g9',
    grade: 9,
    title: 'Grade 9 — Sheila',
    question: 'How does Priestley use the character of Sheila to convey his message?',
    board: 'AQA',
    paper: 'English Literature — Paper 2',
    confidence: 94,
    gradeJustification:
      'Meets Grade 9 descriptors: a perceptive, fully conceptualised response that reads Sheila as a structural device as well as a character. Language and form are analysed at word level, with context integrated throughout. The thesis is original and sustained across every paragraph, and the conclusion offers synthesis rather than summary.',
    commentary:
      'A sophisticated response that treats Sheila not merely as a character who changes but as the mechanism through which Priestley converts his audience. Word-level analysis of stage directions, dialogue and structural positioning demonstrates complete command of AO2. Context is never added as decoration — it drives interpretation. The argument is genuinely debatable, which is the hallmark of Grade 9.',
    paragraphs: [
      'Sheila Birling is not simply a character who learns a lesson; she is the instrument through which Priestley converts his audience. Her trajectory from complacent bourgeoise to anguished moral agent enacts the very transformation Priestley demands of post-war Britain: a movement from wilful ignorance to inescapable accountability. By making Sheila the first Birling to break, Priestley ensures her awakening becomes the lens through which every subsequent revelation is filtered.',
      "At the play's opening, Sheila is confined within the dramatic shorthand of the stage directions: 'very pleased with life'. The adverbial intensifier 'very' is telling — it signals not depth of feeling but superficiality, a contentment that has never been tested. Priestley positions this description before the Inspector's entrance so that it functions retrospectively as an indictment: Sheila's pleasure is only possible because she has never been forced to see beyond the walls of the dining room. Her happiness is not innocence but anaesthesia.",
      "The pivotal moment in Sheila's arc is not her confession but her recognition. When she admits to having Eva 'turned out' of employment, the phrasal verb is significant: it externalises guilt as a physical act of expulsion, mirroring the capitalist system's ability to dispose of individuals. Yet Sheila's response — 'I felt rotten about it at the time' — reveals that conscience was always present, merely suppressed by the social permission her class afforded. Priestley suggests that responsibility is not acquired but uncovered: it lies beneath privilege like a nerve beneath skin, waiting for the Inspector's probing to expose it.",
      "Structurally, Priestley positions Sheila's transformation before the interval, a decision of considerable dramatic intelligence. The audience enters the break having witnessed the possibility of change, which reframes the second half: every parental evasion is now measured against the benchmark Sheila has established. Her increasingly confrontational stance toward her parents — adopting the Inspector's interrogative methods — dramatises Priestley's belief that social conscience, once awakened, is not merely personal but contagious. Sheila becomes, in effect, a secondary Inspector, proving that the apparatus of accountability can be internalised and reproduced.",
      "Priestley's final stroke is to deny Sheila a conventional resolution. Unlike her parents, who retreat into the relief of discovering the Inspector may be a fraud, Sheila insists that the reality of their actions remains unchanged. Her refusal to accept the comfortable explanation represents Priestley's most radical proposition: that moral responsibility does not depend on external verification. For a 1945 audience rebuilding a society from rubble, Sheila embodies the conviction that conscience must be self-sustaining — not imposed by inspectors or enforced by institutions, but held as an act of permanent, voluntary vigilance.",
    ],
    annotations: [
      {
        id: 's9-a1',
        paragraphIndex: 0,
        quote: 'instrument through which Priestley converts his audience',
        kind: 'strength',
        comment:
          'Conceptualised thesis that reads character as dramatic function. This immediately signals Grade 9 thinking — Sheila is not just a person in a story but a mechanism of persuasion.',
      },
      {
        id: 's9-a2',
        paragraphIndex: 1,
        quote: 'Her happiness is not innocence but anaesthesia',
        kind: 'strength',
        comment:
          "Original, epigrammatic formulation that demonstrates genuine critical thinking. The medical metaphor reconceptualises Sheila's opening state in a way that is both precise and memorable.",
      },
      {
        id: 's9-a3',
        paragraphIndex: 2,
        quote: 'responsibility is not acquired but uncovered',
        kind: 'technique',
        comment:
          "Exceptional AO1/AO2 fusion: a conceptual claim is built from close analysis of a phrasal verb. This is what markers mean by 'methods analysed in a sophisticated way'.",
      },
      {
        id: 's9-a4',
        paragraphIndex: 3,
        quote: 'a secondary Inspector',
        kind: 'technique',
        comment:
          "Structural reading of character function (AO2). The observation that Sheila adopts the Inspector's methods is perceptive and well evidenced.",
      },
      {
        id: 's9-a5',
        paragraphIndex: 4,
        quote: 'moral responsibility does not depend on external verification',
        kind: 'strength',
        comment:
          "Synthesising conclusion that extracts Priestley's philosophical position from dramatic evidence. Demonstrates the conceptual control that defines Grade 9.",
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 12, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 12, max: 12 },
      { code: 'AO3', label: 'Context', score: 6, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
  },
]

/* ─── Grade colour helpers ─────────────────────────────────── */

function gradeColour(grade: 5 | 7 | 9) {
  switch (grade) {
    case 5:
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40'
    case 7:
      return 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300'
    case 9:
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
  }
}

/* ─── Page (server component) ──────────────────────────────── */

export default async function InspectorCallsSamplePage() {
  /* Board guard — these model essays use the AQA mark scheme (AO1=12, AO2=12,
     AO3=6, AO4=4). An Inspector Calls is also set on Edexcel, OCR and Eduqas,
     but those boards have different AO weightings, so this page is restricted
     to AQA students to avoid misleading mark allocations. */
  await requireBoard(['aqa'], '/marking/sample')

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
          <li className="font-medium text-foreground">An Inspector Calls</li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          An Inspector Calls — Model Essay Bank
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Five fully-annotated model responses across two popular exam questions at Grades 5, 7 and
          9. Each essay includes paragraph-level annotations, AO breakdowns and marker commentary
          explaining why it achieves its grade.
        </p>
      </header>

      {/* ── Essays ──────────────────────────────────────── */}
      <div className="space-y-16">
        {ESSAYS.map((essay) => (
          <section key={essay.id} id={essay.id} aria-labelledby={`heading-${essay.id}`}>
            {/* Title bar */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${gradeColour(essay.grade)}`}
              >
                Grade {essay.grade}
              </span>
              <h2
                id={`heading-${essay.id}`}
                className="font-heading text-xl font-bold text-foreground"
              >
                {essay.title}
              </h2>
            </div>

            {/* Question */}
            <Card className="mb-4 border-muted">
              <CardHeader className="pb-2">
                <CardDescription>Exam question</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium italic text-foreground">{essay.question}</p>
              </CardContent>
            </Card>

            {/* Marker commentary */}
            <Card className="mb-4 border-primary/30 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>{essay.board}</Badge>
                  <CardDescription>{essay.paper}</CardDescription>
                </div>
                <CardTitle className="mt-2 text-base">Marker commentary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground">{essay.commentary}</p>
              </CardContent>
            </Card>

            {/* Grade justification */}
            <Card className="mb-6 border-muted bg-muted/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Grade justification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {essay.gradeJustification}
                </p>
              </CardContent>
            </Card>

            {/* Grade prediction + AO breakdown */}
            <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <GradePredictionCard
                grade={essay.grade}
                confidence={essay.confidence}
                paperLabel={`${essay.board} · ${essay.paper}`}
              />
              <AOBreakdown scores={essay.aos} />
            </div>

            {/* Annotated essay */}
            <AnnotatedEssay paragraphs={essay.paragraphs} annotations={essay.annotations} />

            {/* Divider between essays (except last) */}
            {essay.id !== ESSAYS[ESSAYS.length - 1].id && <hr className="mt-12 border-border" />}
          </section>
        ))}
      </div>

      {/* ── Fair-dealing footer ─────────────────────────── */}
      <footer className="mt-16 rounded-lg border border-border bg-muted/20 px-5 py-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong>Fair dealing notice.</strong> Short quotations from <em>An Inspector Calls</em> by
          J. B. Priestley are reproduced under the fair dealing provisions of the Copyright, Designs
          and Patents Act 1988 (UK), section 30, for the purpose of criticism, review and
          educational use. All quotations are kept to the minimum necessary for analytical
          commentary (no quotation exceeds fifteen words). No quotation is intended to substitute
          for the original work. Students and teachers are encouraged to consult the full text
          alongside these model responses.
        </p>
      </footer>

      {/* ── Footer CTA ─────────────────────────────────── */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking/sample" />}>
          Back to sample essays
        </Button>
        <Button render={<Link href="/marking/submit" />}>Mark your own essay</Button>
      </div>
    </div>
  )
}
