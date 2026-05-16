import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/blogs-journals'

const HAS_BLOGS = NON_FICTION_TEXT_TYPES.includes('blogs')
const HAS_JOURNALS = NON_FICTION_TEXT_TYPES.includes('journals')
const NON_FICTION_TYPE_LIST = NON_FICTION_TEXT_TYPES.join(', ')
const PURPOSE_LIST = NON_FICTION_PURPOSES.join(', ')
const GENRE_PROMPTS = GUIDED_READING_PROMPTS.nonFiction.Genre
const STRUCTURE_PROMPTS = GUIDED_READING_PROMPTS.nonFiction['Text structure']
const PARAGRAPH_PROMPTS = GUIDED_READING_PROMPTS.nonFiction.Paragraphs

export const metadata: Metadata = {
  openGraph: {
    title: 'Blogs & journals — non-fiction text types — iLowerSecondary English',
    description:
      'A reading-and-writing guide to blogs and journals (including diary-style journals) for iLowerSecondary English: conventions, how to identify and analyse them, and how to write one for Section B, with original annotated extracts and model answers.',
  },
  title: 'Blogs & journals — non-fiction text types — iLowerSecondary English',
  description:
    'A reading-and-writing guide to blogs and journals (including diary-style journals): conventions, how to identify and analyse them, and how to write one for Section B, with original annotated extracts and model answers.',
  alternates: { canonical: PAGE_URL },
}

// ── Shared conventions of blogs and journals ────────────────────────
const SHARED_CONVENTIONS: { feature: string; explanation: string }[] = [
  {
    feature: 'Personal voice',
    explanation:
      'The writer is present on the page. We hear an individual — their feelings, doubts and reactions — not a neutral, anonymous report.',
  },
  {
    feature: 'First person',
    explanation:
      'Both forms rely on "I", "me", "my" and "we". The reader sees events through one person’s eyes, which builds intimacy and trust.',
  },
  {
    feature: 'Opinion plus experience',
    explanation:
      'Facts are not enough. The writer braids what happened together with what they thought and felt about it, so the reader gets a viewpoint, not just information.',
  },
  {
    feature: 'Conversational tone',
    explanation:
      'The writing sounds like a person talking to you: contractions, asides, the occasional incomplete sentence for effect, and everyday vocabulary.',
  },
  {
    feature: 'Informal or semi-formal register',
    explanation:
      'Rarely fully formal. A blog can be very informal; a reflective journal is often semi-formal. The register signals how close the writer wants to feel to the reader.',
  },
  {
    feature: 'Direct address',
    explanation:
      'Blogs often speak straight to "you", pulling the reader in. A private journal addresses the self, but a published diary may still nudge the reader.',
  },
  {
    feature: 'Rhetorical questions',
    explanation:
      'Questions the writer answers themselves — "So why did I bother?" — invite the reader to think and keep the tone reflective and engaging.',
  },
]

// ── Features that distinguish the two forms ─────────────────────────
const BLOG_FEATURES: { feature: string; explanation: string }[] = [
  {
    feature: 'Headline or title',
    explanation:
      'A blog post usually opens with a catchy, often informal title designed to make the reader click and read on.',
  },
  {
    feature: 'Headings and subheadings',
    explanation:
      'Longer posts are broken up with subheadings so the reader can skim and navigate quickly on a screen.',
  },
  {
    feature: 'Links and signposting',
    explanation:
      'Blogs point outward — to other posts, sources or pages — and signpost what is coming ("More on that below").',
  },
  {
    feature: 'A call to the reader',
    explanation:
      'Many posts end by inviting comments, shares or replies, which keeps the relationship between writer and reader going.',
  },
  {
    feature: 'Audience-aware register',
    explanation:
      'A blog is written to be read by strangers, so the writer explains background a private diary would assume.',
  },
]

const JOURNAL_FEATURES: { feature: string; explanation: string }[] = [
  {
    feature: 'Dated entries',
    explanation:
      'A journal or diary is organised by date. Each entry is a snapshot of one moment, so the structure is chronological.',
  },
  {
    feature: 'Present or recent-past tense',
    explanation:
      'Entries are usually written close to the events, so they feel immediate: "Today everything changed."',
  },
  {
    feature: 'Private, unfiltered feeling',
    explanation:
      'A diary often reads as if no one else will see it, so the emotion can be raw and the thoughts unguarded.',
  },
  {
    feature: 'Reflection over time',
    explanation:
      'Read across several entries, a journal shows change — a mood, a hope or an opinion shifting from one date to the next.',
  },
  {
    feature: 'Self-address',
    explanation:
      'The writer often talks to themselves or to the diary itself, working a problem out on the page.',
  },
]

// ── How to identify these text types when reading ───────────────────
const IDENTIFY_CLUES: { clue: string; whatItTells: string }[] = [
  {
    clue: 'A date or "Dear Diary" style opening',
    whatItTells:
      'Strong signal of a journal or diary entry. Look for a series of dated entries and chronological order.',
  },
  {
    clue: 'A title, subheadings, or a sign-off inviting comments',
    whatItTells:
      'Points to a blog post — content shaped for a screen audience the writer cannot see.',
  },
  {
    clue: 'Heavy first person and emotive opinion',
    whatItTells:
      'Common to both, and separates them from a report or a set of instructions, which stay impersonal.',
  },
  {
    clue: 'Direct address to "you" and rhetorical questions',
    whatItTells:
      'Suggests the writer wants a relationship with a reader — typical of a blog, sometimes of a published diary.',
  },
  {
    clue: 'Mixed purpose: to inform and to express an opinion',
    whatItTells:
      'Blogs and journals rarely have one purpose; they recount experience while also persuading you to see it a certain way.',
  },
]

// ── Steps for analysing language and structure when reading ─────────
const ANALYSIS_STEPS: { step: string; detail: string }[] = [
  {
    step: 'Name the form and how you know',
    detail:
      'State whether it is a blog or a journal and give the evidence (a date, a subheading, a sign-off). This anchors a purpose-and-viewpoint answer.',
  },
  {
    step: 'Track the viewpoint',
    detail:
      'Find where the writer states an opinion or a feeling. Quote the exact words and explain what attitude they reveal.',
  },
  {
    step: 'Comment on register and tone',
    detail:
      'Is it informal or semi-formal? Pick a contraction, a piece of slang or a careful, reflective phrase and link it to the writer’s relationship with the reader.',
  },
  {
    step: 'Analyse one language choice closely',
    detail:
      'Choose a single loaded verb, adjective or image and explain its effect — examiners credit precise word-level comment, not unexplained lifts.',
  },
  {
    step: 'Explain the structure',
    detail:
      'For a journal, comment on the chronological, dated structure and any shift between entries. For a blog, comment on the title, subheadings and the closing call to the reader.',
  },
  {
    step: 'End with the effect on the reader',
    detail:
      'Say how a real reader responds — drawn in, persuaded, made to reflect — and tie it back to the writer’s purpose.',
  },
]

// ── How to write a blog or journal for Section B ────────────────────
const WRITING_MOVES: { move: string; detail: string }[] = [
  {
    move: 'Decode form, audience and purpose',
    detail:
      'Underline the form word ("blog" or "diary"), the audience and the purpose in the task before you plan. Match all three from the first line.',
  },
  {
    move: 'Open in the form at once',
    detail:
      'A diary opens with a date or "Dear Diary"; a blog opens with a title and a hook. Signal the form in your very first lines.',
  },
  {
    move: 'Lead with a clear personal voice',
    detail:
      'Use the first person and an honest opinion early. A flat, impersonal opening loses the form straight away.',
  },
  {
    move: 'Braid event and feeling',
    detail:
      'Do not just list what happened. After each event, give your reaction, so the reader gets your viewpoint as well as the facts.',
  },
  {
    move: 'Use the form’s structural conventions',
    detail:
      'A blog can use a subheading and a sign-off that invites comments. A diary uses dated entries and reflects across them. Use these deliberately for marks.',
  },
  {
    move: 'Vary sentences and proofread',
    detail:
      'Mix short, punchy sentences with longer reflective ones, use a rhetorical question, then check punctuation and spelling — accuracy is separately rewarded.',
  },
]

// ── Original annotated extracts (100% original) ─────────────────────
const ANNOTATED_EXTRACTS: {
  id: string
  label: string
  kind: string
  extract: string[]
  annotations: { feature: string; evidence: string; effect: string }[]
}[] = [
  {
    id: 'extract-blog',
    label: 'Extract 1',
    kind: 'Blog post — original',
    extract: [
      'Why I Started Walking to School (And Why I Won’t Stop)',
      'Let me be honest with you: three weeks ago, the idea of leaving the house twenty minutes earlier sounded like a punishment. Who chooses that? I did, in the end — and I am genuinely glad I did.',
      'The first morning was awful. My bag felt heavier, the sky looked like it might fall on me, and I counted every single lamp post on the way. But here is the strange part. By the second week, that quiet half-hour had become the calmest part of my day.',
      'So, would I recommend it? Honestly, yes. Try it for one week. Tell me in the comments how morning three goes — I promise it gets easier.',
    ],
    annotations: [
      {
        feature: 'Informal title with parenthesis',
        evidence: '"Why I Started Walking to School (And Why I Won’t Stop)"',
        effect:
          'A catchy, conversational headline typical of a blog — it teases the post’s argument and makes the reader want to click.',
      },
      {
        feature: 'Direct address and conversational tone',
        evidence: '"Let me be honest with you"',
        effect:
          'Speaking straight to "you" with a contraction builds an instant, friendly relationship with an unseen reader.',
      },
      {
        feature: 'Rhetorical question',
        evidence: '"Who chooses that?"',
        effect:
          'The writer answers their own question, keeping the tone playful and reflective and pulling the reader into the thought.',
      },
      {
        feature: 'Opinion braided with experience',
        evidence:
          '"The first morning was awful… By the second week, that quiet half-hour had become the calmest part of my day."',
        effect:
          'The writer recounts events but immediately layers feeling on top, giving a clear viewpoint, not a neutral report.',
      },
      {
        feature: 'Closing call to the reader',
        evidence: '"Tell me in the comments how morning three goes"',
        effect:
          'A typical blog sign-off that invites a response and keeps the writer–reader relationship going.',
      },
    ],
  },
  {
    id: 'extract-journal',
    label: 'Extract 2',
    kind: 'Journal / diary entry — original',
    extract: [
      'Tuesday, 9 April',
      'I am writing this with the lamp still on because I cannot make my brain be quiet. Today the results went up, and for one whole hour I refused to look.',
      'When I finally did, my hands were not steady. I had passed — not brilliantly, but enough. I am not sure why I expected the worst. Perhaps it is easier to plan for disappointment than to hope.',
      'Tomorrow I will tell Mum properly. Tonight, just this page knows. I think I am proud. I think, tomorrow, I might even believe it.',
    ],
    annotations: [
      {
        feature: 'Dated entry',
        evidence: '"Tuesday, 9 April"',
        effect:
          'The date marks this as one journal entry — a snapshot of a single moment in a chronological sequence.',
      },
      {
        feature: 'Present-tense immediacy',
        evidence: '"I am writing this with the lamp still on"',
        effect:
          'Writing close to the event makes the entry feel immediate and unfiltered, as if we are with the writer right now.',
      },
      {
        feature: 'Private, raw feeling',
        evidence: '"I cannot make my brain be quiet"',
        effect:
          'The honest, unguarded emotion is typical of a diary that seems written for the writer alone.',
      },
      {
        feature: 'Self-address and reflection',
        evidence: '"I am not sure why I expected the worst."',
        effect:
          'The writer works a feeling out on the page, a hallmark of reflective journal writing.',
      },
      {
        feature: 'Forward-looking close',
        evidence: '"Tomorrow I will tell Mum properly."',
        effect:
          'Ending with the next day hints at change across entries and shows the journal’s reflective, evolving structure.',
      },
    ],
  },
]

// ── Practice questions with model answers ───────────────────────────
const PRACTICE_QUESTIONS: {
  q: string
  marks: string
  model: string
  markNote: string
}[] = [
  {
    q: 'Read Extract 1. How can you tell this is a blog post rather than a private diary entry? Give two pieces of evidence.',
    marks: '(2 marks)',
    model:
      'It is a blog because it has an informal headline — "Why I Started Walking to School (And Why I Won’t Stop)" — and because it speaks to an audience it cannot see, ending with a direct call to the reader: "Tell me in the comments how morning three goes." A private diary would not have a title designed to attract clicks or invite comments.',
    markNote:
      'One mark for each appropriate piece of evidence (e.g. the catchy title, direct address to "you", the closing call for comments). A precise reference, not a vague gist, is required.',
  },
  {
    q: 'Look at the word "awful" in Extract 1 ("The first morning was awful"). What does this word suggest about the writer’s experience, and why has the writer chosen it?',
    marks: '(2 marks)',
    model:
      'The strongly negative word "awful" suggests the writer found the first walk genuinely unpleasant and hard, not just mildly annoying. The writer chooses this blunt, emotive word so the later turnaround feels more convincing and honest, which makes the eventual recommendation more persuasive to the reader.',
    markNote:
      'One mark for the meaning the word carries (strongly negative / unpleasant); one mark for the effect linked to the writer’s purpose. An unexplained lift is not credited.',
  },
  {
    q: 'Read Extract 2. How does the writer use structure to show a change in feeling across the entry?',
    marks: '(4 marks)',
    model:
      'The entry is structured chronologically through the evening. It opens with anxiety — "I cannot make my brain be quiet" and the hour spent refusing to look at the results — placing the reader inside the worst moment first. The structure then moves to the discovery ("I had passed") and ends by looking forward to "Tomorrow", closing on cautious pride: "I think I am proud." This shift from sleepless dread at the start to tentative hope at the end shows the writer’s feelings changing over a single night, which is exactly how a reflective journal entry works.',
    markNote:
      'Two developed points (the chronological evening structure; the move from dread to hope, including the forward-looking close), each with evidence and an explanation of the effect (2 + 2).',
  },
  {
    q: 'Compare the tone of Extract 1 and Extract 2. Explain how each writer’s tone suits the form they are writing in.',
    marks: '(4 marks)',
    model:
      'Extract 1 has a light, conversational, semi-public tone that suits a blog: the contraction-rich, direct address ("Let me be honest with you") and the playful rhetorical question "Who chooses that?" build a friendly relationship with strangers who might read and comment. Extract 2 has a quieter, more private and reflective tone that suits a diary: short, hesitant sentences and self-address ("I am not sure why I expected the worst") read as if no one else will see them. Both use the first person and braid feeling with events, but the blog reaches outward to an audience while the journal turns inward, and each tone matches its form’s purpose.',
    markNote:
      'Two developed points of comparison (e.g. outward conversational tone of the blog versus inward reflective tone of the diary), each with evidence and a clear link to form and purpose (2 + 2). Reward an explicit, developed contrast over an implicit one.',
  },
]

// ── Original short writing task and model ───────────────────────────
const WRITING_TASK = {
  prompt:
    'Your school is running a “Try Something New” month. Write a blog post for the school website encouraging students your own age to try one new activity for a week, describing your own experience and persuading them to take part.',
  formNote:
    'Form: blog post. Audience: students your own age. Purpose: to recount experience and to persuade.',
  model: [
    'One Week, One New Thing — Just Try It',
    'I am going to be straight with you: I almost did not sign up. A whole week of doing something new, every single day? It sounded exhausting, and a small, lazy part of me wanted to scroll past the poster. I am so glad I did not.',
    'I chose chess club, mostly because the room was warm and I knew nobody there. The first session was uncomfortable. I lost three games in eleven minutes, which I think is a school record, and I nearly did not go back. But here is the thing nobody tells you about trying something new: the awkward part does not last. By Thursday I had won a game. By Friday I was the one explaining the rules to someone newer than me.',
    'So why am I telling you this? Because the only thing standing between you and a week like mine is one slightly nervous walk into a room. You do not have to be good at the new thing. You just have to turn up. Pick something this week — anything — and give it five days. Then come back and tell me in the comments how day one went. I promise it is worth it.',
  ],
  modelNote:
    'A Section B response is marked on WAO1 (form, communication and purpose) and WAO2 (grammar, punctuation and spelling). This model establishes the blog form immediately with an informal title and direct address, braids personal experience with persuasion, varies sentence length, uses a rhetorical question and a closing call to the reader, and keeps punctuation and spelling controlled.',
}

export default async function BlogsJournalsPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
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
    { name: 'Blogs & journals', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/text-types" className="hover:text-foreground">
          Text types
        </Link>
        <span> · </span>
        <span>Blogs &amp; journals</span>
      </p>

      <h1>Blogs &amp; journals</h1>
      <p className="lead">
        A reading-and-writing guide to blogs and journals &mdash; including diary-style journals
        &mdash; as non-fiction text types. Learn the conventions, how to identify and analyse them
        when reading, and how to write one confidently for Section B.
      </p>

      {/* ── Where these sit in the spec ───────────────────────────── */}
      <section className="my-10">
        <h2>Where blogs and journals sit on the paper</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Non-fiction text types
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              The qualification lists these non-fiction text types: {NON_FICTION_TYPE_LIST}.{' '}
              {HAS_BLOGS && HAS_JOURNALS
                ? 'Both blogs and journals appear on that list, so an unseen reading text in Section A could be either, and Section B may ask you to write one.'
                : 'These are the forms you may meet in Section A and write in Section B.'}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Typical purposes
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              Non-fiction writing can aim to: {PURPOSE_LIST}. Blogs and journals usually combine
              more than one &mdash; they recount and inform while also expressing a strong personal
              opinion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Shared conventions ────────────────────────────────────── */}
      <section className="my-10">
        <h2>Conventions both forms share</h2>
        <p className="text-sm text-muted-foreground">
          Blogs and journals are personal, voice-led non-fiction. These features run through both.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {SHARED_CONVENTIONS.map((c) => (
            <div key={c.feature} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {c.feature}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{c.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What separates the two forms ──────────────────────────── */}
      <section className="my-10">
        <h2>What tells a blog apart from a journal</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/40 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Blog &mdash; written for an audience
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {BLOG_FEATURES.map((f) => (
                <li key={f.feature}>
                  <span className="font-semibold text-foreground">{f.feature}.</span>{' '}
                  {f.explanation}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Journal / diary &mdash; written close to the moment
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {JOURNAL_FEATURES.map((f) => (
                <li key={f.feature}>
                  <span className="font-semibold text-foreground">{f.feature}.</span>{' '}
                  {f.explanation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Identifying them when reading ─────────────────────────── */}
      <section className="my-10">
        <h2>How to identify them when reading</h2>
        <p className="text-sm text-muted-foreground">
          In Section A you must work out the text type quickly. Scan for these clues before you
          answer.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60 bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="p-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Clue in the text
                </th>
                <th className="p-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  What it tells you
                </th>
              </tr>
            </thead>
            <tbody>
              {IDENTIFY_CLUES.map((c) => (
                <tr key={c.clue} className="border-b border-border/60 last:border-0 align-top">
                  <td className="p-4 font-semibold text-foreground">{c.clue}</td>
                  <td className="p-4 text-muted-foreground leading-relaxed">{c.whatItTells}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Analysing language and structure ──────────────────────── */}
      <section className="my-10">
        <h2>Analysing the language and structure when reading</h2>
        <p className="text-sm text-muted-foreground">
          Work through these steps to turn a blog or journal extract into a full reading answer.
        </p>
        <ol className="not-prose mt-4 space-y-3">
          {ANALYSIS_STEPS.map((s, i) => (
            <li key={s.step} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm font-semibold text-foreground">
                {i + 1}. {s.step}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          You can also use the Teacher&rsquo;s Guide non-fiction prompts as a checklist.{' '}
          <strong>Genre:</strong> {GENRE_PROMPTS.join(' ')} <strong>Text structure:</strong>{' '}
          {STRUCTURE_PROMPTS.join(' ')} <strong>Paragraphs:</strong> {PARAGRAPH_PROMPTS.join(' ')}
        </p>
      </section>

      {/* ── Original annotated extracts ───────────────────────────── */}
      <section className="my-10">
        <h2>Annotated original extracts</h2>
        <p className="text-sm text-muted-foreground">
          Two short, fully original extracts &mdash; one blog post, one journal entry &mdash;
          annotated for their features. Neither is reproduced from any past paper.
        </p>
        <div className="not-prose mt-4 space-y-6">
          {ANNOTATED_EXTRACTS.map((p) => (
            <div key={p.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {p.label}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{p.kind}</p>
              <div className="space-y-2 rounded-lg border border-border/60 bg-background p-4">
                {p.extract.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'text-sm font-semibold text-foreground leading-relaxed'
                        : 'text-sm text-foreground leading-relaxed'
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Feature annotations
              </p>
              <ul className="space-y-3">
                {p.annotations.map((a) => (
                  <li
                    key={a.feature}
                    className="rounded-lg border border-primary/40 bg-background p-3"
                  >
                    <p className="text-sm font-semibold text-foreground">{a.feature}</p>
                    <p className="mt-1 text-sm text-foreground italic leading-relaxed">
                      {a.evidence}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.effect}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice questions and model answers ──────────────────── */}
      <section className="my-10">
        <h2>Practice questions and model answers</h2>
        <p className="text-sm text-muted-foreground">
          Four questions on the extracts above, with model answers written in the Pearson mark
          style.
        </p>
        <ol className="not-prose mt-4 space-y-4">
          {PRACTICE_QUESTIONS.map((item, i) => (
            <li key={i} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                {i + 1}. {item.q}{' '}
                <span className="font-normal text-muted-foreground">{item.marks}</span>
              </p>
              <div className="mt-2 rounded-lg border border-primary/40 bg-background p-3">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Model answer
                </p>
                <p className="text-sm text-foreground leading-relaxed">{item.model}</p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Mark scheme guidance
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.markNote}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── How to write one for Section B ────────────────────────── */}
      <section className="my-10">
        <h2>Writing a blog or journal for Section B</h2>
        <p className="text-sm text-muted-foreground">
          Section B asks for one extended piece in a set form, for a set audience and purpose. These
          moves keep you in the form.
        </p>
        <ol className="not-prose mt-4 space-y-3">
          {WRITING_MOVES.map((m, i) => (
            <li key={m.move} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm font-semibold text-foreground">
                {i + 1}. {m.move}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Original writing task and model ───────────────────────── */}
      <section className="my-10">
        <h2>Practice writing task and model</h2>
        <div className="not-prose rounded-xl border border-primary/40 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Original Section B-style task
          </p>
          <p className="text-sm text-foreground leading-relaxed">{WRITING_TASK.prompt}</p>
          <p className="mt-2 text-xs text-muted-foreground">{WRITING_TASK.formNote}</p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Model response &mdash; original
          </p>
          <div className="space-y-2 rounded-lg border border-border/60 bg-background p-4">
            {WRITING_TASK.model.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-sm font-semibold text-foreground leading-relaxed'
                    : 'text-sm text-foreground leading-relaxed'
                }
              >
                {para}
              </p>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {WRITING_TASK.modelNote}
          </p>
        </div>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
