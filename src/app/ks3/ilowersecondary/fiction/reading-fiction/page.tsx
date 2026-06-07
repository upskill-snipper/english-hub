import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/fiction/reading-fiction'

const RAO2 = ASSESSMENT_OBJECTIVES.RAO2
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5

const FICTION_PROMPTS = GUIDED_READING_PROMPTS.fiction
const PROMPT_GROUPS = Object.entries(FICTION_PROMPTS) as [
  keyof typeof FICTION_PROMPTS,
  readonly string[],
][]

export const metadata: Metadata = {
  openGraph: {
    title: 'Reading the fiction text (Section A): a guided-reading masterclass',
    description:
      'How to read the single fiction text in Section A of the iLowerSecondary English paper: characters, plot and structure, style and language, using the Teacher’s Guide guided-reading toolkit, plus one original extract with six fully worked questions in Pearson mark style.',
  },
  title: 'Reading the fiction text (Section A): guided-reading masterclass',
  description:
    'How to read the single fiction text in Section A: characters, plot and structure, style and language, with the guided-reading toolkit and one original extract with six worked questions in Pearson mark style.',
  alternates: { canonical: PAGE_URL },
}

type GroupIntro = { key: keyof typeof FICTION_PROMPTS; lead: string }

const GROUP_INTROS: GroupIntro[] = [
  {
    key: 'Characters',
    lead: 'A writer rarely tells you a character outright. You build them from four kinds of evidence: how they look, what they do, how they speak, and how others react to them. Read every named person through these four lenses.',
  },
  {
    key: 'Plot and structure',
    lead: 'Structure is the order in which the writer chooses to release information. Track where the story is set, who is telling it, the tense it uses, the central problem, any early clues planted for later, whether the ending lands as a surprise, and any underlying message.',
  },
  {
    key: 'Style and language',
    lead: 'Style is the writer’s set of deliberate choices: how formal the voice is, how long the sentences run and why, the descriptions that make a scene visible, the precise words chosen, and the devices layered on top. Always move from naming a choice to explaining its effect on the reader.',
  },
]

type Worked = {
  prompt: string
  marks: number
  focus: string
  model: string
  markNote: string
}

const EXTRACT_LINES = [
  'The lift had been broken since March, so Priya took the stairs two at a time, counting the landings under her breath the way she always did when she did not want to think. On the fourth floor a removal man stood in the doorway of flat 4B, balancing a cardboard box stamped FRAGILE in red letters that had begun to smudge.',
  '"You the one from upstairs?" he asked, not unkindly, and shifted the box so she could pass.',
  'Priya nodded and said nothing. The Hendersons had lived in 4B for as long as she had been alive. Mrs Henderson had taught her to fold paper cranes on rainy Sundays; there had been forty-one of them strung across the landing once, turning slowly in the draught.',
  'Now the landing was bare. The walls, where the cranes had hung, were a cleaner, paler grey than the rest, as if the building itself remembered them.',
  'The removal man followed her glance. "Funny," he said, "how a place keeps the shape of people after they\'ve gone."',
  'Priya climbed the last flight slowly. Her own door looked exactly as it always had, and that, for some reason she could not name, felt worse than if it had changed.',
]

const WORKED: Worked[] = [
  {
    prompt: 'Why does Priya count the landings under her breath as she climbs? (1)',
    marks: 1,
    focus: 'Inference',
    model:
      'She counts the landings to distract herself and avoid thinking about something that is troubling her.',
    markNote:
      'RAO2, 1 mark. A single accurate inference earns the mark. The text states she does it “when she did not want to think,” so credit any answer that reads this as deliberate distraction or avoidance. Simply writing “to count the stairs” is literal and gains nothing.',
  },
  {
    prompt:
      'What impression do we get of Priya’s relationship with Mrs Henderson? Use evidence from the extract. (2)',
    marks: 2,
    focus: 'Character',
    model:
      'We get the impression the relationship was close and affectionate. Mrs Henderson “taught her to fold paper cranes on rainy Sundays,” a patient, shared activity that suggests warmth and a long friendship across generations, reinforced by the detail that the Hendersons had lived there “as long as she had been alive.”',
    markNote:
      'RAO2-style 2-mark item. One mark for a valid impression (close / warm / long-standing / fond); one mark for appropriate supporting evidence that is explained, not just lifted. Quoting “paper cranes” with no comment on what it shows would not gain the second mark.',
  },
  {
    prompt:
      'Explain how the writer uses the description of the walls “a cleaner, paler grey than the rest” to affect the reader. (2)',
    marks: 2,
    focus: 'Language',
    model:
      'The writer uses the pale patch as visual evidence of absence: the lighter grey is the negative space left by the cranes, so the reader pictures what is missing rather than what is there. This makes the loss concrete and quietly sad, suggesting the people who have gone have left a mark even though they are no longer present.',
    markNote:
      'RAO4/RAO5-style 2-mark item. One mark for explaining the deeper meaning (the colour shows what has been removed / signals loss); one mark for the effect on the reader (sadness, a sense of absence made visible). An unexplained lift of the phrase is not credited.',
  },
  {
    prompt:
      'The removal man says it is “funny … how a place keeps the shape of people after they’ve gone.” What does this line suggest about the message of the extract? (2)',
    marks: 2,
    focus: 'Inference / message',
    model:
      'The line suggests the extract’s underlying message is that people leave a lasting trace on the places and lives they were part of, even after they move on. The removal man, a stranger passing through, voices the idea the whole extract has been building through the bare landing and the paler wall, giving it the weight of a quiet truth rather than just Priya’s private feeling.',
    markNote:
      'RAO5-style 2-mark item. One mark for identifying a reasonable message (absence/memory; people leave a lasting mark); one mark for developing it by linking the spoken line to the surrounding detail. A vague “it is about being sad” without textual grounding earns limited credit.',
  },
  {
    prompt:
      'How does the writer use sentence length in the final paragraph to shape the ending? (4)',
    marks: 4,
    focus: 'Structure / language',
    model:
      'The writer slows the pace with the longer sentence “Her own door looked exactly as it always had, and that, for some reason she could not name, felt worse than if it had changed,” using the embedded clause “for some reason she could not name” to delay and complicate the feeling, which mirrors Priya’s own struggle to understand it. Placing this at the very end, after the shorter, plainer sentences earlier in the extract, makes the ending land on uncertainty rather than resolution, leaving the reader with the same unsettled feeling Priya cannot name.',
    markNote:
      'RAO4 + RAO5, 4 marks (two developed points). Two marks for a developed point on the long final sentence and its delayed/embedded structure with explained effect; two marks for a second developed point on its position after shorter sentences and the unresolved ending it creates. Each point needs evidence plus an explanation of effect; naming “a long sentence” with no effect caps the response.',
  },
  {
    prompt:
      'Choose one word from the extract that you think is especially effective and explain its impact. (1)',
    marks: 1,
    focus: 'Vocabulary impact',
    model:
      'The word “remembered” is especially effective. By saying the building “remembered” the Hendersons, the writer gives the building human feeling, which makes the sense of loss stronger because even the bricks seem to miss them.',
    markNote:
      'RAO4, 1 mark. Credit any defensible choice (e.g. “remembered,” “bare,” “smudge,” “draught”) with a clear explanation of its impact. The mark is for the explained effect, not the choice alone; an answer that names a word without saying why it works is not credited.',
  },
]

const PITFALLS = [
  {
    label: 'Treating fiction like a non-fiction text',
    text: 'The fiction text is read the same way the markers expect everywhere: deduce, infer and interpret. It is not a comprehension hunt for facts. The marks are in what the writer implies through character, structure and language, not in what is stated on the surface.',
  },
  {
    label: 'Naming a device without an effect',
    text: 'Spotting a simile, a short sentence or some alliteration earns nothing on its own. Every observation must be followed by what it does to the reader. The guided-reading prompts deliberately end on impact for this reason.',
  },
  {
    label: 'Retelling the story',
    text: 'Summarising what happens is not analysis. The questions ask why the writer made a choice and what effect it has - answer that question, not “what happened next.”',
  },
  {
    label: 'Lifting without explaining',
    text: 'Copying a phrase and stopping there proves only that you found it. For any 2-mark or 4-mark item you must expand the quotation into an explained point about meaning or effect.',
  },
]

export default async function ReadingFictionPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Fiction',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/fiction',
          },
          { name: 'Reading fiction', url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {await t('ks3.page.bc.home')}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/fiction" className="hover:text-foreground">
          {await t('ks3.page.bc.fiction')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.fiction.reading_fiction.bc')}</span>
      </p>

      <h1>Reading the fiction text in Section A</h1>
      <p className="lead">
        Section A gives you one fiction text alongside the non-fiction. The skill it tests is not
        finding facts but reading a writer&rsquo;s choices: what they imply about a character, why
        they ordered the story the way they did, and how their language works on you. This
        masterclass uses the iLowerSecondary Teacher&rsquo;s Guide guided-reading framework to show
        you exactly how to read a fiction extract under exam conditions, and ends with one original
        passage and six fully worked questions in Pearson mark style.
      </p>

      <section className="my-10">
        <h2>The objectives this draws on</h2>
        <p>
          Questions on the fiction text are weighted towards three reading objectives. You do not
          need to memorise the codes, but you should recognise what each is asking you to do,
          because every model answer below is built to satisfy them.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
          {[RAO2, RAO4, RAO5].map((ao) => (
            <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {ao.code}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{ao.descriptor}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          In short: work out what is implied ({RAO2.code}), explain how the language works (
          {RAO4.code}), and judge the writer&rsquo;s purpose and the overall effect on you (
          {RAO5.code}). See the specification page for how every objective is weighted across the
          paper.
        </p>
      </section>

      <section className="my-10">
        <h2>The guided-reading toolkit</h2>
        <p>
          The Teacher&rsquo;s Guide gives a set of guided-reading prompts for fiction, grouped into
          three areas. Run a fiction extract through every prompt below before you answer anything
          &mdash; the answers to the exam questions are almost always hiding behind one of them.
        </p>
        <div className="not-prose my-6 space-y-5">
          {PROMPT_GROUPS.map(([group, prompts]) => {
            const intro = GROUP_INTROS.find((g) => g.key === group)
            return (
              <div key={group} className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                  {group}
                </p>
                {intro ? <p className="text-sm leading-relaxed mb-4">{intro.lead}</p> : null}
                <ul className="space-y-2">
                  {prompts.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary font-mono">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <p className="text-sm text-muted-foreground">
          Notice the pattern in the style and language prompts: each one ends by asking for the{' '}
          <em>reason</em> or the <em>impact</em>. That is the single most important habit &mdash;
          never stop at naming a feature.
        </p>
      </section>

      <section className="my-10">
        <h2>How to work through an extract</h2>
        <p>A reliable order under timed conditions, built from the toolkit above:</p>
        <ol className="not-prose my-4 space-y-2">
          {[
            'Read the whole extract once for the situation: who, where, what is the problem.',
            'Re-read for character: appearance, actions, speech, and what others say about them.',
            'Map the structure: narrator, tense, the order of information, early clues, how it ends.',
            'Mark the language: a short sentence and why, a long sentence and why, a vivid description, a strong word, any device - and the effect of each.',
            'Only now read the questions, and answer the one in front of you, not the story.',
          ].map((s, i) => (
            <li key={s} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">{i + 1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="my-10">
        <h2>One worked extract with six questions</h2>
        <p>
          The passage below is an original extract written for this guide. Read it in full, run it
          through the toolkit, then attempt each question before comparing with the model answer and
          the mark note. The six questions deliberately span inference, character, language and
          structure.
        </p>
        <article className="not-prose my-6 rounded-xl border border-border/60 bg-card p-5 sm:p-6">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
            Fiction · original extract
          </p>
          <h3 className="text-base font-semibold mb-3">
            Extract &mdash; &ldquo;The paler grey&rdquo;
          </h3>
          <div className="space-y-3 border-l-2 border-primary/30 pl-4">
            {EXTRACT_LINES.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
        </article>
        <div className="not-prose my-6 space-y-4">
          {WORKED.map((q, qi) => (
            <div key={qi} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-mono text-primary text-sm">Q{qi + 1}.</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {q.focus}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {q.marks} mark{q.marks === 1 ? '' : 's'}
                </span>
              </div>
              <p className="text-sm font-medium mb-2">{q.prompt}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                <span className="font-medium text-foreground">Model answer: </span>
                {q.model}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Mark note: </span>
                {q.markNote}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Marks and phrasing above follow the style of the published mark scheme &mdash; exact
          wording, order and number of items vary between papers.
        </p>
      </section>

      <section className="my-10">
        <h2>Common pitfalls to avoid</h2>
        <div className="not-prose my-6 space-y-3">
          {PITFALLS.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-destructive/30 bg-destructive/5 p-5"
            >
              <p className="flex items-baseline gap-2 text-sm font-medium mb-1">
                <span className="text-destructive font-mono">×</span>
                <span>{p.label}</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Checklist before you answer a fiction question</h2>
        <ul className="not-prose my-4 space-y-2">
          {[
            'Have I read the whole extract and run it through the character, structure and language prompts?',
            'Am I answering the question asked, not retelling the plot?',
            'Have I gone beyond the literal to what the writer implies?',
            'Have I followed every feature I name with its effect on the reader?',
            'For 2-mark and 4-mark items, have I explained my evidence rather than just quoting it?',
          ].map((c) => (
            <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">☐</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
