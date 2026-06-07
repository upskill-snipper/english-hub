import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/articles'

const ARTICLES_TYPE = NON_FICTION_TEXT_TYPES.find((t) => t === 'newspaper and magazine articles')!

type Convention = {
  name: string
  what: string
  effect: string
}

const CONVENTIONS: Convention[] = [
  {
    name: 'Headline',
    what: 'A short, bold title at the top, often using a strong verb, a pun or a play on words, and usually written in the present tense even about past events.',
    effect:
      'It grabs attention and tells the reader the topic in a few words. A news headline is plain and factual; a feature headline is more playful, signalling a lighter, more personal piece.',
  },
  {
    name: 'Strapline / standfirst',
    what: 'A line under the headline (strapline in news, standfirst in features) that expands on it in a sentence or two before the article proper begins.',
    effect:
      'It bridges the headline and the article, giving the reader just enough extra information to decide whether to read on.',
  },
  {
    name: 'Byline',
    what: 'A short line naming the writer, sometimes with a role or location, e.g. “By a Year 9 reporter”.',
    effect:
      'It signals who is responsible for the article and, in a feature or column, prepares the reader for a personal voice and a stated viewpoint.',
  },
  {
    name: 'Lead / opening',
    what: 'The first paragraph. In a news report it answers who, what, where and when at once; in a feature it may open with an anecdote, a question or a scene.',
    effect:
      'The lead decides whether the reader continues. A factual lead promises information; a vivid or questioning opening promises a story and a point of view.',
  },
  {
    name: 'Inverted pyramid (news)',
    what: 'The news report structure: the most important facts first, then supporting detail, then background, with the least essential information last.',
    effect:
      'The reader gets the key facts even if they stop early, and an editor can cut from the bottom without losing the core story.',
  },
  {
    name: 'Feature structure',
    what: 'A feature or opinion piece builds more like an essay: an engaging opening, a developed middle that explores the subject, and a deliberate ending that returns to the opening idea or lands a final point.',
    effect:
      'This shape lets the writer develop a viewpoint and carry the reader through it, rather than front-loading bare facts.',
  },
  {
    name: 'Quotations',
    what: 'The words of named people, set in speech marks and attributed, e.g. a pupil, an organiser or an expert.',
    effect:
      'Quotations add authority and a human voice, and let the writer present opinion through someone else while the report itself stays balanced.',
  },
  {
    name: 'Subheadings',
    what: 'Short labels that break a longer feature into sections.',
    effect:
      'They let the reader navigate and scan, and signal a change of focus from one part of the argument to the next.',
  },
  {
    name: 'Balanced report vs opinion column',
    what: 'A news report presents more than one side and keeps the writer’s own view out of it; an opinion column openly argues a single position in the first person.',
    effect:
      'The reader trusts a report to inform them fairly, but reads a column expecting persuasion and a clear stance - knowing which is which is itself a reading skill.',
  },
  {
    name: 'Register: formal vs lively',
    what: 'News uses a fairly formal, impersonal register; features and columns use a livelier, more personal register with rhetorical questions, direct address and varied sentence lengths.',
    effect:
      'Register tells the reader how seriously and how personally to take the piece, and is one of the clearest clues to purpose and viewpoint.',
  },
]

type Annotation = {
  text: string
  note: string
}

type WorkedExample = {
  id: string
  label: string
  title: string
  kind: string
  annotated: Annotation[]
}

const EXAMPLES: WorkedExample[] = [
  {
    id: 'example-news',
    label: 'Worked example 1',
    title: 'A news report',
    kind: 'Inform - balanced news report (inverted pyramid)',
    annotated: [
      {
        text: 'PARK CLEAN-UP DRAWS RECORD CROWD',
        note: 'Headline: short, present tense, strong verb “draws”, plain and factual - typical of a news report rather than a feature.',
      },
      {
        text: 'More than 200 volunteers spent Saturday clearing Meadow Park, organisers said.',
        note: 'Strapline: one sentence expanding the headline with the key facts.',
      },
      {
        text: 'By a community reporter',
        note: 'Byline: signals an impersonal reporter, not a named opinion writer.',
      },
      {
        text: 'More than 200 people gave up their Saturday morning to clear litter and replant flower beds in Meadow Park, the largest turnout the annual event has ever had.',
        note: 'Lead: answers who, what, where and when in a single opening sentence - the top of the inverted pyramid.',
      },
      {
        text: '“We expected fifty and got four times that,” said the event organiser, Priya Kaur. “People clearly care about this park.”',
        note: 'Quotation: a named source adds authority and a human voice while the report itself stays neutral.',
      },
      {
        text: 'Volunteers filled ninety bags of rubbish and planted three hundred bulbs. The council provided tools and removed the waste the same afternoon.',
        note: 'Supporting detail: important but secondary facts, placed below the lead as the pyramid widens.',
      },
      {
        text: 'The park had been criticised last year after a survey ranked it among the least-used green spaces in the area.',
        note: 'Background: least essential information, placed last so it could be cut without losing the story. Note the balanced, formal register and absence of the writer’s own opinion.',
      },
    ],
  },
  {
    id: 'example-feature',
    label: 'Worked example 2',
    title: 'A feature / opinion piece',
    kind: 'Argue / express an opinion - opinion column (feature structure)',
    annotated: [
      {
        text: 'WHY EVERY SCHOOL SHOULD ADOPT A PARK',
        note: 'Headline: opens with “Why” and makes a claim - a persuasive, opinion-piece signal rather than a neutral news headline.',
      },
      {
        text: 'Our writer argues that the record park clean-up should be the start, not the end.',
        note: 'Standfirst: openly states this is the writer’s argument, preparing the reader for persuasion.',
      },
      {
        text: 'I stood in Meadow Park on Saturday and watched two hundred strangers become neighbours over a pile of bin bags.',
        note: 'Lead: a first-person anecdote and an image, not a fact-stack - the feature opening promises a story and a viewpoint.',
      },
      {
        text: 'A patch of grass with a future',
        note: 'Subheading: breaks the column into sections and signals a change of focus.',
      },
      {
        text: 'How much does a park actually cost a school? Almost nothing. And what does it give back? Pride, fresh air and a reason to care about somewhere shared.',
        note: 'Rhetorical questions and a lively, personal register build the argument and address the reader directly - clear viewpoint, not balanced reporting.',
      },
      {
        text: 'So here is the challenge: one park, one school, one Saturday a term. The volunteers proved it works. The rest of us only have to copy them.',
        note: 'Ending: a deliberate call to action that returns to the opening event and lands the final point - typical feature structure.',
      },
    ],
  },
]

type ModelQA = {
  q: string
  marks: number
  answer: string
  markNote: string
}

const PRACTICE: ModelQA[] = [
  {
    q: 'Identify and comment on how the news report (Worked example 1) is structured. (3)',
    marks: 3,
    answer:
      'The report uses the inverted-pyramid structure. The lead paragraph delivers the most important facts at once - who (over 200 people), what (cleared the park), where (Meadow Park) and when (Saturday morning) - so a reader who stops there still has the whole story. The supporting detail about bags of rubbish and bulbs comes next, and the least essential background, the criticism from last year, is placed last. This ordering means the reader gets the key information first and the article could be cut from the bottom without losing the core story.',
    markNote:
      'Pearson style: up to 3 marks for identifying organisational choices (fact-first lead, supporting detail, least-important background last) AND commenting on the effect on the reader. Naming “inverted pyramid” without explaining the effect would be capped.',
  },
  {
    q: 'How does the writer of the feature (Worked example 2) make their viewpoint clear? Refer to language. (4)',
    marks: 4,
    answer:
      'The writer uses the first person - “I stood in Meadow Park” - which makes the piece a personal argument rather than a neutral report, so the reader knows from the start that a viewpoint is being offered (2). The writer also uses rhetorical questions, “How much does a park actually cost a school? Almost nothing,” answering their own question to steer the reader towards agreement and make the argument feel obvious and reasonable (2).',
    markNote:
      'Two developed points, each with quoted evidence and an explanation of the effect; two marks per developed point with evidence (RAO4 + RAO5).',
  },
  {
    q: 'What is the effect of the quotation from Priya Kaur in the news report? (2)',
    marks: 2,
    answer:
      'The named quotation adds authority and a human voice, making the report more credible because the information comes from the organiser herself (1). It also lets the writer include an opinion - that people care about the park - without the report itself taking sides, which keeps the news report balanced (1).',
    markNote:
      'One mark for naming the effect (authority / human voice / credibility); one mark for explaining it in relation to the text and the report’s purpose.',
  },
  {
    q: 'Explain one way the register of the feature differs from the register of the news report. (2)',
    marks: 2,
    answer:
      'The news report uses a formal, impersonal register - “organisers said”, no “I” - which signals that its purpose is to inform fairly (1). The feature uses a lively, personal register with direct address and rhetorical questions, which signals that its purpose is to persuade and that it carries the writer’s viewpoint (1).',
    markNote:
      'One mark for identifying the contrast in register; one mark for linking each register to the writer’s purpose and effect on the reader.',
  },
]

const WRITING_MODEL_OPENING = [
  'PUPILS TURN WASTE GROUND INTO A GARDEN',
  '',
  'A corner of the school field that was once a dumping ground is now a vegetable garden, after a group of Year 8 pupils spent the term turning it around.',
  '',
  'By a school reporter',
  '',
  'For three years the strip of land behind the sports hall grew nothing but litter. This week it produced its first crop of carrots, picked by the thirty pupils who refused to give up on it.',
  '',
  '“Everyone said it was hopeless,” said the group’s leader, Sam Doyle. “We just kept digging.”',
]

export default async function ArticlesPage() {
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
            name: 'Text types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types',
          },
          { name: 'Newspaper & magazine articles', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/text-types" className="hover:text-foreground">
          {await t('ks3.page.bc.text_types')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.text_types.articles.bc')}</span>
      </p>

      <h1>Newspaper &amp; magazine articles &mdash; reading and writing</h1>
      <p className="lead">
        Newspaper and magazine articles are one of the non-fiction text types you may meet in
        Section A and may be asked to write in Section B. This guide covers the conventions of the
        form, how to analyse an article when you read it, and how to write one for the writing task
        &mdash; with two short original examples, practice questions and model answers.
      </p>

      <section className="my-10">
        <h2>Where this text type sits</h2>
        <p>
          &ldquo;{ARTICLES_TYPE}&rdquo; is listed among the non-fiction text types for this
          qualification, alongside{' '}
          {NON_FICTION_TEXT_TYPES.filter((t) => t !== ARTICLES_TYPE).join(', ')}. Articles can serve
          any of the non-fiction purposes &mdash; {NON_FICTION_PURPOSES.join(', ')} &mdash; and a
          single article often combines several: a news report mainly informs, while an opinion
          column mainly argues or persuades.
        </p>
      </section>

      <section className="my-10">
        <h2>The conventions of the form</h2>
        <p>
          An examiner reading your Section B article, or asking you to comment on one in Section A,
          expects these conventions. For each, the column that earns marks when you analyse is the
          last one &mdash; the effect.
        </p>
        <div className="not-prose my-6 space-y-3">
          {CONVENTIONS.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">{c.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">What it is: </span>
                {c.what}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">Effect on the reader: </span>
                {c.effect}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Analysing an article when you read it</h2>
        <p>
          In Section A you will not be asked &ldquo;list the features&rdquo;. You will be asked how
          the article is <strong>structured (RAO3)</strong> and how its{' '}
          <strong>language and viewpoint (RAO4 and RAO5)</strong> work on the reader. Use the
          conventions above as a checklist, but always finish on effect.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Structure (RAO3)
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ask: is this an inverted-pyramid news report or a feature built like an essay? Where
              is the most important information placed? What do the headline, standfirst,
              subheadings and ending do, and why has the writer ordered the article this way?
            </p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Language &amp; viewpoint (RAO4 / RAO5)
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ask: is the register formal and impersonal (a balanced report) or lively and personal
              (a column)? How do verbs, rhetorical questions, direct address and quotations reveal
              the writer&rsquo;s purpose and viewpoint, and what is the overall effect on the
              reader?
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>Learning toolkit: guided-reading prompts</h2>
        <p>
          These prompts are taken from the iLowerSecondary Teacher&rsquo;s Guide guided-reading
          routine for non-fiction. Ask them of any article before you write an analysis answer
          &mdash; they train you to read like an examiner.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Genre
            </p>
            <ul className="space-y-2">
              {GUIDED_READING_PROMPTS.nonFiction['Genre'].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-mono">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              Text structure
            </p>
            <ul className="space-y-2">
              {GUIDED_READING_PROMPTS.nonFiction['Text structure'].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-mono">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>Two short original examples, annotated</h2>
        <p>
          The two articles below are <strong>original texts written for this page</strong> &mdash;
          they are not reproduced from any real newspaper or magazine, and the events and people in
          them are invented. Read each one through, then study the annotations to see the
          conventions at work.
        </p>

        {EXAMPLES.map((ex) => (
          <div key={ex.id} id={ex.id} className="my-8">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {ex.label}
            </p>
            <h3>{ex.title}</h3>
            <p className="text-sm text-muted-foreground">{ex.kind}</p>
            <div className="not-prose my-4 space-y-3">
              {ex.annotated.map((a, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
                  <p className="text-sm text-foreground leading-relaxed">{a.text}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 border-t border-border/60 pt-2">
                    <span className="font-medium text-foreground">Annotation: </span>
                    {a.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="my-10">
        <h2>Practice questions with model answers</h2>
        <p>
          Attempt each question against the examples above before you read the model answer. The
          model answers are written in the Pearson mark style: identify the choice, then comment on
          its effect on the reader.
        </p>
        <div className="not-prose my-6 space-y-4">
          {PRACTICE.map((qa) => (
            <div key={qa.q} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">
                <span className="font-mono text-primary mr-2">Q</span>
                {qa.q}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Model answer: </span>
                {qa.answer}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2 border-t border-border/60 pt-2">
                <span className="font-medium text-foreground">Mark-scheme note: </span>
                {qa.markNote}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Writing an article for Section B</h2>
        <p>
          If the writing task asks for a newspaper or magazine article, decide first{' '}
          <strong>which kind</strong>: a balanced news report (inform) or a feature / opinion column
          (argue, persuade, express an opinion). Then build it from the conventions: a headline, a
          strapline or standfirst, a byline, and a lead that does its job in the first sentence. A
          news report should follow the inverted pyramid and keep a formal, impersonal register; a
          feature should develop a viewpoint with a lively, personal register and a deliberate
          ending.
        </p>

        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Original article-writing task
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Write a <strong>news report</strong> for your school newsletter about a group of pupils
            who transformed a piece of waste ground into a garden. You should inform your readers
            and include at least one quotation. Write the headline, a strapline, a byline and the
            article. (This is an original task written for this page.)
          </p>
        </div>

        <h3>Model opening</h3>
        <p>
          This is an <strong>original model opening</strong>, not a complete answer &mdash; it shows
          the conventions in place so you can continue it with supporting detail and a background
          paragraph in the inverted-pyramid order.
        </p>
        <div className="not-prose my-4 rounded-xl border border-border/60 bg-card p-5">
          {WRITING_MODEL_OPENING.map((line, i) =>
            line === '' ? (
              <div key={i} className="h-3" aria-hidden="true" />
            ) : (
              <p key={i} className="text-sm text-foreground leading-relaxed">
                {line}
              </p>
            ),
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Notice the plain present-tense headline, the one-sentence strapline, the impersonal
          byline, a lead that answers who/what/where/when at once, and a named quotation for
          authority &mdash; all in a formal register, with no opinion from the writer.
        </p>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
