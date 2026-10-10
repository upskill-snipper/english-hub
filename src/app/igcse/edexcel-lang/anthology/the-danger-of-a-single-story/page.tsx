import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  BookMarked,
  GitCompare,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'The Danger of a Single Story - IGCSE Language A Anthology - The English Hub',
    description:
      'The Chimamanda Ngozi Adichie talk for Edexcel IGCSE Language A: language features, structural analysis, key vocabulary and Paper 1 practice.',
    images: [
      {
        url: '/api/og?title=The+Danger+of+a+Single+Story+-+IGCSE+Language+A+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Danger of a Single Story - IGCSE Language A Anthology - The English Hub',
      },
    ],
  },
  title: 'The Danger of a Single Story - IGCSE Language A Anthology',
  description:
    'The Chimamanda Ngozi Adichie talk for Edexcel IGCSE Language A: language features, structural analysis, key vocabulary and Paper 1 practice.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

// Checked by script against the anthology on 26 September 2026. Until then
// quotation 2 began with a lower-case "stories" and quotation 3 with a capital
// "When", neither as printed, and the notes placed the lines in "the TED talk"
// rather than in the extract the exam prints. Line numbers in the notes are the
// anthology's.
const verifiedTedLines = [
  {
    id: 1,
    label: 'On the cumulative effect of a single story',
    text: '"…as only one thing, over and over again, and that is what they become."',
    context:
      'Lines 73-74 of the extract, where Adichie sums up how a single story is made. Repetition does the damage: what is said about a people often enough becomes what they are taken to be.',
  },
  {
    id: 2,
    label: 'On the importance of stories',
    text: '"Stories matter. Many stories matter."',
    context:
      'Line 75: two short sentences after the long one at lines 73-74. The second repeats the first with one word added, turning the extract from the danger to the remedy: no single story is enough.',
  },
  {
    id: 3,
    label: 'Closing image - paradise regained',
    text: '"…when we reject the single story, … we regain a kind of paradise."',
    context:
      'The last sentence of the extract (lines 82-83), which Adichie announces as her closing thought. She borrows the image of paradise regained from the Alice Walker story just before it, so rejecting the single story is framed as getting back something that was lost.',
  },
]

const languageFeatures = [
  {
    technique: 'Anecdote',
    explanation:
      'After introducing herself as a storyteller, Adichie begins with a personal anecdote about her childhood reading, establishing intimacy with the audience and grounding her argument in lived experience rather than abstract theory.',
  },
  {
    technique: 'Repetition',
    explanation:
      'The phrase "single story" recurs throughout the text like a refrain, reinforcing the central concept and ensuring it stays in the audience\'s mind. The repetition mirrors how single stories themselves are reinforced through repeated telling.',
  },
  // Until 26 September 2026 this said her emotive language conveyed the
  // frustration and hurt of being stereotyped. The extract voices neither: the
  // roommate story is told with humour, and the strongest feeling it names is
  // her own shame in Guadalajara (line 69).
  {
    technique: 'Emotive language',
    explanation:
      'Adichie keeps her most emotive language for her own mistake rather than for the wrongs done to her: the roommate story is told with humour, but in Guadalajara she feels a shame strong enough to overwhelm her. Morally weighted nouns late in the extract, shame, dignity and paradise, raise the emotional register as the argument turns from anecdote to principle, so the audience is moved as well as persuaded.',
  },
  {
    technique: 'Contrast / antithesis',
    explanation:
      'Adichie contrasts the destructive and constructive uses of stories using parallel pairs, showing that narrative is a tool that can cut both ways.',
  },
  // This was "Rhetorical question" until 26 September 2026. The extract's only
  // question is her mother's "Don't you know...?" at dinner, not one put to the
  // audience, so the technique could not be evidenced from the anthology text.
  {
    technique: 'Humour',
    explanation:
      'Adichie uses gentle, self-aware humour, as when her roommate asks to hear her "tribal music" and is disappointed when Adichie produces her tape of Mariah Carey. The humour disarms the audience before she makes the serious point that the roommate had a single story of Africa.',
  },
  {
    technique: 'List of three',
    explanation:
      "Triadic structures give Adichie's arguments a persuasive, rhythmic quality. The clearest is at lines 52-53, where three phrases in a row, each beginning with the same two words, set out what the roommate's single story rules out, building to the gravest loss: any connection between equals.",
  },
  // Until 26 September 2026 this said the text addresses its audience
  // "throughout". It says "you" to the audience once, at line 1; the only
  // other "you" is her mother's, at the dinner table. Until 10 October 2026 it
  // also said that in between she draws them in through "we": between lines 1
  // and 82 the only "we" that includes the audience is at line 14, and the
  // others mean her family or the people around her in Nigeria.
  {
    technique: 'Direct address',
    explanation:
      'As a talk, the text speaks to a listening audience. Adichie speaks to them directly at the start, where she promises to tell them a few personal stories (line 1), and again at the end, where she announces her closing thought (line 82). Line 1 is the only place she addresses them with a second-person pronoun; in between, the only pronoun that includes them is the first person plural of her first lesson (line 14). This creates a sense of personal conversation, breaking down the barrier between speaker and listener.',
  },
  {
    technique: 'Inclusive pronouns',
    explanation:
      'Adichie uses "we" at her first lesson (line 14) and in her last sentence (lines 82-83) to include herself and the audience in both the problem and the remedy. She does not exempt herself from the tendency to create single stories: at line 61 she admits, in the first person, that she too is guilty.',
  },
  {
    technique: 'Irony',
    explanation:
      'There is irony in a Nigerian child who had never left Nigeria writing stories about white, blue-eyed characters who played in the snow. Adichie uses this to show how powerfully imported narratives shape imagination, even when they bear no relation to lived reality.',
  },
  {
    technique: 'Metaphor',
    explanation:
      'The "single story" itself functions as a metaphor - one narrative standing in for an entire culture or identity. The metaphor makes an abstract idea tangible and memorable.',
  },
]

// Corrected on 26 September 2026 against the anthology and the study guide.
// The climax was put at the roommate story, told "painfully"; the guide and the
// text put the turn at line 61 and the peak at her shame in Guadalajara, and
// the roommate story is told with humour. Fide was missing from the sequence,
// the ending was called a call to action (it is a promise), and the time note
// now names the two looks back to Fide's family. On 10 October 2026 its "one
// jump forward, at line 54" became the three markers of time the extract has
// (lines 42, 54 and 61-62), and the development note became broadly
// chronological: the extract never says how old she was when she found
// African books, so it cannot show that this came before Fide.
// Paragraph lengths were measured from the line spacing of Pearson's PDF: a
// plain text dump shows paragraph breaks at lines 16, 26, 51 and 56 that the
// printed page does not have.
const structuralAnalysis = {
  opening:
    'Adichie opens by introducing herself as a storyteller who will tell a few personal stories (line 1), then begins the first: a childhood spent reading British and American books. Starting with gentle, self-deprecating humour about her early reading and writing, rather than with direct argument, disarms the audience.',
  development:
    "The text follows Adichie's life broadly in order: childhood reading, discovering African literature, Fide's family when she was eight, her American roommate when she went to university at 19, and a visit to Mexico a few years before the talk. Each anecdote builds the argument that single stories are everywhere and affect everyone.",
  climax:
    'The turning point comes at line 61: having described how her roommate misjudged her, Adichie admits that she too is guilty. The emotional peak follows in Guadalajara, where she feels first surprise and then shame at people simply living ordinary lives (lines 67-69). The roommate story is told with humour rather than pain; the strongest feeling in the extract is her shame at her own single story.',
  resolution:
    "Adichie resolves by widening her argument from personal experience to a principle: stories have been used to harm, but they can also empower and repair the dignity they break (lines 75-77). She ends not on accusation but on hope, borrowing Alice Walker's image of paradise regained for the closing thought she announces at line 82.",
  perspective:
    'First person throughout: "I" grounds the argument in personal experience, and the inclusive plural of her first lesson and her last sentence widens it to the audience. This is a deliberate rhetorical choice: by making herself both victim and perpetrator of single stories, Adichie removes any sense of moral superiority.',
  paragraphing:
    "The anthology prints the extract in short paragraphs of one to eight lines, suited to oral delivery. Early on, the lessons are folded into paragraphs that also carry the story, as at lines 14-15 and 40-41; at the end, the principle gets short paragraphs of its own (lines 73-74 and 75-77). The one-line paragraph at line 48 lets the roommate's assumption about the stove land on its own.",
  time: "Broadly chronological (childhood to adulthood), told from the present of the talk. Markers of time carry it forward in jumps of years, at lines 42, 54 and 61-62, and twice she looks back to Fide's family (lines 42 and 59-60), which ties the anecdotes together. The chronological structure mirrors a journey of understanding: the speaker grows as the text progresses.",
  openingClosing:
    "The opening uses a specific, small-scale anecdote (a child reading); the closing, after one more story, Alice Walker's, makes a large-scale, universal claim that reaches every place and every listener. This movement from particular to universal gives the text its persuasive arc.",
}

// Until 26 September 2026 this said she argues that stereotypes are untrue
// only in being incomplete, and that the antidote is a balance of stories.
// Both come from parts of the talk the anthology cuts: the extract never uses
// "stereotype", "incomplete" or "balance". What it shows instead is below.
const writersPurpose = {
  achieve:
    "Adichie wants to persuade her audience that relying on a single story about any group of people is dangerous. She does not claim that single stories are false: Fide's family really was poor. Her point, shown through the anecdotes rather than stated, is that a story told alone leaves out everything else that is true.",
  readerFeel:
    'She wants the audience to recognise their own single stories, as she recognises hers, without feeling attacked: her humour and her confession at line 61 make that possible. She also wants them to leave hopeful that more stories can repair what a single story breaks.',
  message:
    "Her central argument is that stories carry power, and that a single story, whether about Africa, about Mexicans or about any people, flattens complexity, rules out connection between equals and can break a people's dignity. The antidote is not fewer stories but more.",
}

// Every headword below is in the anthology extract, spelled as it prints it
// (American -ize). Until 26 September 2026 the list included stereotype,
// authenticity and narrative, which the extract does not use, and gave
// "patronising" and "humanise".
const keyVocabulary = [
  {
    // The sentence runs on to line 76, where malign is: cited as 75-76 since
    // 10 October 2026, not line 75 alone.
    word: 'dispossess',
    definition:
      'To deprive someone of land, property, or other belongings; Adichie names it, with malign, as something stories have been used to do (lines 75-76).',
  },
  {
    word: 'malign',
    definition: 'To speak about someone in a spitefully critical manner; to slander.',
  },
  {
    word: 'patronizing',
    definition: 'Treating someone with an apparent kindness that reveals a feeling of superiority.',
  },
  {
    word: 'abject',
    definition:
      'Wretched and hopeless; the single image of Mexican immigrants that Adichie admits she had absorbed.',
  },
  {
    word: 'impressionable',
    definition: 'Easily influenced or affected, especially by new ideas or experiences.',
  },
  {
    word: 'vulnerable',
    definition: 'Open to emotional or physical harm; exposed.',
  },
  { word: 'perception', definition: 'The way in which something is understood or interpreted.' },
  {
    word: 'catastrophe',
    definition:
      'A sudden disaster or great misfortune; in the single story of Africa that Adichie’s roommate held, Africa was nothing but catastrophe.',
  },
  {
    word: 'synonymous',
    definition:
      'So closely linked as to seem to mean the same thing; Adichie says that in America immigration had become synonymous with Mexicans.',
  },
  {
    word: 'humanize',
    definition:
      'To make something more humane or civilised; to portray someone as a full, complex person.',
  },
  {
    word: 'empower',
    definition:
      'To give someone power or confidence; Adichie sets it against dispossess and malign as a use of stories.',
  },
  {
    // Until 26 September 2026 glossed as "the assumed story about a group". At
    // line 49 it is the roommate's position towards Adichie herself; the
    // sentence ends on line 50, so it is cited as 49-50.
    word: 'default',
    definition:
      "A preselected option or position adopted automatically; here, the roommate's automatic attitude to Adichie as an African, before she had even seen her (lines 49-50).",
  },
]

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'The Danger of a Single Story'

// Until 26 September 2026 this set a "List four things" retrieval question on
// her childhood reading for 4 marks, a language-only question and a
// structure-only question, each for 12. No 4EA1 paper asks any of those. On
// every Pearson 4EA1/01 paper and mark scheme checked (the SAMs, the 2017 extra
// assessment material, the June 2019 examiners' report, the 2021 papers, June
// 2023, November 2023, May 2024, November 2024, which set this very text, and
// the June 2025 mark scheme and examiners' report) Questions 1-3 are on the
// unseen Text One, Question 4 (12 marks, AO2) is the only question on the
// anthology text and always asks about language AND structure together on one
// grid, and Question 5 (22 marks, AO3) compares the anthology text with the
// unseen one; the exam never pairs two anthology texts. The retrieval question
// was also sent to Q2, a Text One question, so it was marked as the wrong
// question. The labels are what questionIdForPracticeType in
// PracticeMarkingButton reads: "12 marks" maps to Q4, and "22 marks" maps to
// nothing, which is why q3 renders no button. Keep the space before "marks".
const examPractice = {
  q1: {
    question:
      'How does the writer, Chimamanda Ngozi Adichie, use language and structure to build a persuasive argument? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
  },
  q2: {
    question:
      'How does the writer, Chimamanda Ngozi Adichie, use language and structure to convey the impact of stereotypes? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
    modelOutline: [
      // Until 26 September 2026 this point said emotive language about the
      // roommate made the reader feel frustration. The extract never voices
      // frustration: Adichie tells that story without anger, through humour and
      // anticlimax, as the study guide notes, so the point now says so.
      "Adichie presents the patronising assumptions of her American roommate with gentle humour rather than anger: she calls the roommate's pity well-meaning and lets the anticlimax of the Mariah Carey tape expose it, so the reader sees what it is to be reduced to a single narrative without the speaker ever sounding bitter.",
      'The repetition of the phrase "single story" throughout the text reinforces the central concept and mirrors how stereotypes are themselves reinforced through repetition, creating a cumulative effect on the audience.',
      'Antithetical pairings - stories that diminish set against stories that empower - present narrative as a tool with dual potential, sharpening the argument that storytelling power must be used responsibly.',
      "Adichie's use of personal anecdote - her own single story of her family's house boy, Fide - is particularly effective because it removes moral superiority: she includes herself as both perpetrator and victim of stereotyping, which strengthens her credibility.",
      "Structurally, the anecdotes are arranged as mirrors: the roommate's pity for Adichie repeats the child's pity for Fide's family, and Adichie then turns the charge on herself with her confession about Mexico. Moving from being misjudged to misjudging leaves no one, speaker or audience, outside the problem, so the impact of stereotypes is shown to be shared.",
    ],
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about stereotypes and how people see one another.',
    type: 'Comparison - 22 marks',
  },
}

// Until 26 September 2026 the Chinese Cinderella pairing said Yen Mah
// challenges a limiting narrative. In the anthology extract she does not: she
// accepts her father's plan for her and thanks him. The Zephaniah pairing
// credited Adichie with direct address throughout; she speaks to the audience
// directly only at the start and the end. On 10 October 2026 "spoken voice"
// became "conversational voice", as the study guide has it: the anthology's
// headnote presents Zephaniah's text as a Guardian article, not a talk.
const comparisonLinks = [
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason:
      'Both are first-person accounts in which a writer looks back on her younger self. Adichie shows the single stories she learned as a child and later met in America; Yen Mah, rejected by her family, shows a father whose pride in her comes with conditions. Compare how each writer uses the distance between the young self and the adult telling the story.',
    themes: ['Identity', 'Childhood', 'Looking back'],
  },
  {
    title: 'Young and Dyslexic',
    author: 'Benjamin Zephaniah (1958-2023)',
    href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    reason:
      'Both writers challenge the single story others told about them: Adichie as an African, Zephaniah as a dyslexic child. Compare how each argues from personal experience in a direct, conversational voice, and where each finds the fault: Zephaniah moves it away from himself, while Adichie admits her own single stories too.',
    themes: ['Identity', 'Challenging assumptions', 'Self-belief'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Adichie warns about the single story of Africa; Alagiah wrestled with being part of the media that helps create it. Compare how each writer handles the ethics of representing African suffering.',
    themes: ['Africa', 'Representation', 'Media ethics'],
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function TheDangerOfASingleStoryPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link & header ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('anth_text.back_to_anthology')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              The Danger of a Single Story
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Chimamanda Ngozi Adichie &middot; Speech / TED Talk transcript
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                {await t('anth_text.badge_lang_a')}
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                {await t('anth_text.badge_paper_1a')}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial notice ───────────────────────────────────────── */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-50/40 p-4 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-4.5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="text-body-sm text-foreground/90 leading-relaxed">
            {/* Until 26 September 2026 this said the anthology text was awaiting
                re-verification against a licensed copy. Pearson publishes it free,
                and the three lines below were matched to it word for word. */}
            <strong className="text-foreground">Quotations checked against the anthology.</strong>{' '}
            The lines quoted below match the text in Pearson&apos;s International GCSE English
            Anthology (Issue 8, February 2026), which Pearson publishes free as a PDF. Use it for
            the full extract.
          </div>
        </div>
      </section>

      {/* ── Verified TED Lines ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('igcse.page.anth.verified_ted_lines')}
          </h2>
          <span className="font-mono text-body-xs text-muted-foreground ms-auto">
            {await t('igcse.page.anth.fair_dealing_extracts')}
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          The lines below are from the 2009 TEDGlobal talk and appear word for word in the anthology
          extract (Issue 8, February 2026).
        </p>
        <div className="space-y-4">
          {verifiedTedLines.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                {extract.label}
              </span>
              <blockquote className="mt-2 border-s-2 border-amber-500/40 ps-4 font-serif text-body text-foreground italic leading-relaxed">
                {extract.text}
              </blockquote>
              <p className="mt-2 text-body-sm text-muted-foreground">{extract.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Language Analysis ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.language_analysis')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Key language features used by Adichie and their effects on the reader. Find a short
          quotation for each in your anthology.
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                  {f.technique}
                </span>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{f.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Structural Analysis ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.structural_analysis')}
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Opening', content: structuralAnalysis.opening },
            { label: 'Development', content: structuralAnalysis.development },
            { label: 'Climax', content: structuralAnalysis.climax },
            { label: 'Resolution', content: structuralAnalysis.resolution },
            { label: 'Narrative perspective', content: structuralAnalysis.perspective },
            { label: 'Paragraph structure', content: structuralAnalysis.paragraphing },
            { label: 'Use of time', content: structuralAnalysis.time },
            { label: 'Opening & closing techniques', content: structuralAnalysis.openingClosing },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Writer's Purpose ───────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.writers_purpose')}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.achieve')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.reader_feel')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.readerFeel}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.message')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.message}
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Vocabulary ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.key_vocabulary')}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyVocabulary.map((v) => (
            <div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3">
              <span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span>
              <p className="mt-1 text-body-xs text-muted-foreground">{v.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Exam Practice ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.exam_practice')}
          </h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
            {await PracticeMarkingButton({
              type: examPractice.q1.type,
              question: examPractice.q1.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>

          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            {await PracticeMarkingButton({
              type: examPractice.q2.type,
              question: examPractice.q2.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-clay-600 uppercase tracking-wider font-semibold">
                {await t('anth_text.exam.model_outline')}
              </span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 text-amber-600 dark:text-clay-600">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
            <p className="mt-2 text-body-sm text-muted-foreground">
              This question can&apos;t be marked here: it needs the unseen passage that the exam
              pairs with this text.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Links ───────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.compare_with')}
          </h2>
        </div>
        {/* 10 October 2026: removed a second sentence, added on 26 September
            2026, that said again that the exam compares this text only with an
            unseen passage. The shared intro (anth_text.compare_with.intro) says so
            itself, so the page said it twice. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Copyright notice ───────────────────────────────────────── */}
      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
          {/* As the anthology's acknowledgements give it. Until 26 September 2026
              this read "Wylie Agency / TED Conferences / Pearson Education", and
              it offered the TED transcript as the full text; the talk online is
              longer and worded differently in places, and the exam prints the
              anthology's version. Since 10 October 2026 it says "full extract",
              not "full text": the anthology prints only part of the talk. */}
          &copy; Chimamanda Ngozi Adichie 2009, reproduced in the anthology by permission of The
          Wylie Agency (UK) Limited. Quotations are short fair-dealing extracts under CDPA 1988
          &sect;30 (criticism, review, quotation). For the full extract, use the Pearson Edexcel
          International GCSE English Anthology (ISBN 978-1-446-93108-0), which Pearson publishes
          free. The TEDGlobal 2009 talk is longer and worded differently in places, so revise from
          the anthology&apos;s version.
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
