'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Crown,
  Landmark,
  Lightbulb,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  body: string[]
  keyPoint: string
  examLink: string
}

const CONTEXT_SECTIONS: ContextSection[] = [
  {
    title: '1912 Setting vs 1945 Writing — The Dramatic Irony Gap',
    body: [
      'Priestley made a deliberate and politically motivated decision to set the play in 1912 but write it in 1945. The 33-year gap between setting and writing is the source of the play\u2019s most powerful dramatic device: the audience knows what the characters do not. When Birling predicts the Titanic is "unsinkable, absolutely unsinkable," the audience knows it sank within weeks, killing over 1,500 people. When he dismisses the threat of war, the audience has lived through two world wars that killed over 80 million people. Every confident prediction Birling makes is catastrophically wrong.',
      'This dramatic irony is not merely comic. Priestley uses it to discredit the entire capitalist philosophy Birling represents. If Birling is wrong about facts — the Titanic, war, social progress — then Priestley invites the audience to conclude he is equally wrong about values. His individualist creed ("a man has to look after himself and his own") is presented as belonging to a world that history has already destroyed.',
      'The 1945 audience was uniquely positioned to receive this message. They had survived the Blitz, rationing, and six years of collective sacrifice. They had just elected a Labour government in a landslide. They knew, from lived experience, that Birling\u2019s world had been swept away by exactly the forces he denied.',
    ],
    keyPoint:
      'The gap between 1912 and 1945 turns the entire play into an argument from hindsight. Priestley asks: if you can see that Birling was wrong about the past, can you see that he is wrong about the future?',
    examLink:
      'Always identify both dates (1912 setting, 1945 writing) in your introduction. The dramatic irony only works because of the gap between them. This is the most important piece of AO3 context for the play.',
  },
  {
    title: 'The Titanic and World War One',
    body: [
      'The RMS Titanic sank on 15 April 1912, just weeks after the play\u2019s fictional setting. It was the largest ship ever built and was widely described as "unsinkable" in the press. When Birling repeats this claim, the audience immediately recognises his folly. The Titanic disaster became a symbol of the hubris of the Edwardian age: the belief that technology, wealth, and progress had conquered nature and eliminated risk.',
      'World War One began in August 1914, two years after the play\u2019s setting. Birling\u2019s confident prediction that "there isn\u2019t a chance of war" is even more devastating than his Titanic prediction. The war killed approximately 17 million people, including nearly 900,000 British soldiers. It shattered the confidence of the Edwardian ruling class and began the dismantling of the old social order that Birling represents.',
      'Priestley himself fought in the trenches of WWI. He was wounded, buried alive by a trench mortar shell, and gassed. His wartime experience shaped his lifelong commitment to social justice and his belief that the old class system must never be allowed to return.',
    ],
    keyPoint:
      'The Titanic and WWI are not just background facts — they are the historical evidence that proves Birling wrong and the Inspector right. Priestley uses the audience\u2019s knowledge of these events to make his political argument irrefutable.',
    examLink:
      'When discussing dramatic irony, be specific about the historical events. Don\u2019t just say "the audience knows Birling is wrong" — explain what they know (the Titanic sank, WWI happened) and what this tells them about Birling\u2019s judgment.',
  },
  {
    title: 'Priestley\u2019s Socialism and the Beveridge Report',
    body: [
      'J.B. Priestley (1894\u20131984) was a committed democratic socialist throughout his adult life. His political views were shaped by three formative experiences: fighting in the trenches of WWI as an infantryman in the Duke of Wellington\u2019s Regiment (he was wounded by a trench mortar in 1916 and later gassed), witnessing the mass unemployment and poverty of the 1930s during his English Journey (1934), and broadcasting his Postscripts on BBC radio during WWII. In 1942 he co-founded the Common Wealth Party with Sir Richard Acland, a small left-wing party that argued for common ownership and a more ethical politics.',
      'The Postscripts, broadcast on BBC radio on Sunday evenings after the nine o’clock news from June to October 1940, reached an estimated 16 million listeners — roughly a third of the adult population. Priestley argued that Britain was fighting not just against Nazism but for a fairer society at home. He called for an end to the class system, the creation of a welfare state, and the rejection of the selfish individualism that had produced the Depression. The first series was dropped in October 1940 after complaints from inside government; a brief second run in 1941 was also cut short.',
      'The Beveridge Report (Social Insurance and Allied Services), authored by Sir William Beveridge and published in November 1942, proposed a comprehensive welfare state to fight the "five giants" of Want, Disease, Ignorance, Squalor, and Idleness. It sold over 600,000 copies and generated enormous public enthusiasm for post-war reform. Priestley was a vocal supporter. An Inspector Calls, written in the winter of 1944–1945, is the dramatic expression of the same argument: that British society must take collective responsibility for its members.',
    ],
    keyPoint:
      'Priestley did not write An Inspector Calls as a neutral exploration of ideas. He wrote it as an argument for socialism, the welfare state, and the political programme of the 1945 Labour government. The Inspector is Priestley\u2019s mouthpiece.',
    examLink:
      'Naming Priestley\u2019s Postscripts and the Beveridge Report in your essay demonstrates sophisticated AO3 knowledge. These show that the play was part of a wider political movement, not an isolated literary work.',
  },
  {
    title: 'The Post-War Welfare State',
    body: [
      'The Labour government elected in July 1945 under Clement Attlee implemented the most radical programme of social reform in British history. It created the National Health Service (1948), which provided free healthcare for all citizens regardless of income. It expanded national insurance to provide unemployment benefits, pensions, and sickness pay. It built millions of council houses to address the housing crisis. It nationalised key industries including coal, steel, railways, and utilities.',
      'These reforms were the practical expression of the Inspector\u2019s message: "We are members of one body. We are responsible for each other." The welfare state was built on the principle that society has a collective duty to protect its weakest members — precisely the argument Birling rejects.',
      'Priestley\u2019s play was written during the election campaign of 1945 and first performed in 1946. The audience would have understood the Inspector\u2019s final speech as a direct endorsement of the reforms being implemented around them. The play is not set in a political vacuum — it is a weapon in a specific political argument about the kind of society Britain should build after the war.',
    ],
    keyPoint:
      'The welfare state is the historical answer to the Inspector\u2019s challenge. When Birling asks "if we were all responsible for everything \u2026 it would be very awkward," the 1945 audience knew that the country had just voted to make exactly that responsibility into law.',
    examLink:
      'Mentioning the NHS, national insurance, or council housing as concrete examples of the Inspector\u2019s principles in action elevates your AO3 from general knowledge to specific, politically literate analysis.',
  },
  {
    title: 'The Class System in Edwardian England',
    body: [
      'Edwardian England (roughly 1901\u20131914) was rigidly divided by class. At the top were the aristocracy and landed gentry, followed by the upper-middle class of wealthy industrialists and professionals, the lower-middle class of clerks and shopkeepers, and at the bottom the working class — factory workers, servants, labourers — who made up the vast majority of the population.',
      'The Birlings occupy the upper-middle class. Arthur Birling is a self-made manufacturer who has accumulated wealth but lacks the social status of the aristocracy. His aspiration to a knighthood and his eagerness to connect with Gerald Croft\u2019s family (Gerald\u2019s mother is "Lady Croft") reveal his anxiety about social position. He is wealthy but not yet fully established, which makes him both powerful (over workers like Eva) and insecure (in the presence of his social superiors).',
      'Eva Smith occupies the bottom of this hierarchy. As a working-class woman with no family connections, she has no economic security, no political voice, and no institutional protection. She can be sacked by Birling, dismissed by Sheila, used by Gerald, assaulted by Eric, and denied charity by Sybil, all without consequence. The class system grants the Birlings impunity and denies Eva agency.',
      'Priestley exposes this system as morally indefensible. The play\u2019s argument is that class is not a natural order but a man-made structure that enables exploitation. By 1945, much of the audience agreed: the Labour landslide was a vote to dismantle the class system the Birlings represent.',
    ],
    keyPoint:
      'Class in the play is not just a backdrop — it is the mechanism through which every injustice operates. Without the class system, Birling could not fire Eva, Sybil could not deny her charity, and Gerald and Eric could not exploit her with impunity.',
    examLink:
      'Describe the specific positions within the class system rather than generalising. Birling is upper-middle class aspiring upward; Eva is working class with no safety net. This precision improves your AO3 marks.',
  },
  {
    title: 'Women\u2019s Rights: 1912 vs 1945',
    body: [
      'In 1912, women could not vote in parliamentary elections. The suffragette movement was at its height — Emmeline Pankhurst and the WSPU were staging increasingly militant protests — but full female suffrage would not be achieved until 1928. Women had limited access to education, few employment options beyond domestic service, factory work, or shop work, and were legally subordinate to their husbands in marriage.',
      'Working-class women like Eva were doubly oppressed: by their class and by their gender. Eva has no legal recourse when she is sacked, no institutional protection when she is exploited by Gerald and Eric, and no welfare support when she is pregnant. The charity committee that should have helped her instead punishes her for having "fine feelings" above her class.',
      'By 1945, women had gained the vote, had worked in factories and the armed services during WWII, and were increasingly demanding equal treatment. The welfare state created after 1945 provided some protections — maternity benefits, healthcare, housing — that would have saved Eva. Priestley\u2019s play argues that these protections are essential and that the treatment of women like Eva must never be repeated.',
      'The contrast between Sheila and Sybil illustrates the generational shift in women\u2019s attitudes. Sybil enforces patriarchal morality by punishing Eva for being pregnant and unmarried. Sheila rejects patriarchal control by returning Gerald\u2019s ring and demanding the right to make her own moral judgments. Priestley uses Sheila to represent the modern, independent woman he hoped would emerge from the post-war settlement.',
    ],
    keyPoint:
      'Gender and class intersect throughout the play. Eva suffers not just because she is poor but because she is a poor woman in a society that grants men unchecked power over women\u2019s bodies, employment, and welfare.',
    examLink:
      'When discussing gender in AO3, mention the suffragette movement (1912 context) and women\u2019s wartime roles (1945 context). This dual-date approach mirrors the play\u2019s own structure.',
  },
  {
    title: 'The 1945 Labour Landslide and Priestley\u2019s Influence',
    body: [
      'The general election of July 1945 produced one of the most dramatic results in British political history. Despite Winston Churchill\u2019s enormous popularity as a war leader, the Labour Party under Clement Attlee won a landslide victory with 393 seats to the Conservatives\u2019 164. The swing was driven by a widespread desire for social change: voters did not want to return to the poverty, unemployment, and inequality of the pre-war years.',
      'Priestley\u2019s influence on this political moment should not be underestimated. His Postscripts broadcasts had reached millions and articulated the case for a post-war welfare state in accessible, emotional terms. He argued that the collective sacrifice of the war years had earned the British people the right to a fairer society. His plays, including An Inspector Calls, translated these political arguments into dramatic form.',
      'The play was written in the winter of 1944\u20131945 and, because no London theatre was available, was first performed in the Soviet Union in 1945 \u2014 in simultaneous productions at the Kamerny Theatre in Moscow (directed by Aleksandr Tairov) and the Leningrad Theatre Comedy. The London premiere followed at the New Theatre (now the No\u00ebl Coward Theatre) on 1 October 1946, directed by Basil Dean. Priestley\u2019s timing was deliberate: the play is a contribution to the political argument that was being settled at the ballot box. The Inspector\u2019s final speech is not a general moral plea but a specific political endorsement of the Labour programme.',
      'Understanding this context transforms the play from a detective story into a political intervention. Every dramatic choice Priestley makes — the 1912 setting, the dramatic irony, the generational split, the cyclical ending — serves his argument that Britain must embrace collective responsibility or face the consequences.',
    ],
    keyPoint:
      'An Inspector Calls is not politically neutral. It was written to support the Labour government\u2019s programme of welfare reform and to warn against a return to Edwardian-era individualism.',
    examLink:
      'The 1945 election result is the single most important piece of context for understanding Priestley\u2019s purpose. Mention it in your conclusion to show that the play was designed to shape political attitudes, not just tell a story.',
  },
  {
    title: 'Priestley and Time: J.W. Dunne\u2019s Influence',
    body: [
      'Priestley was deeply interested in theories of time, particularly those of the philosopher J.W. Dunne, whose books An Experiment with Time (1927) and The Serial Universe (1934) argued that past, present and future coexist and can be glimpsed in dreams. Dunne\u2019s ideas shaped Priestley\u2019s "Time Plays" of the 1930s and 1940s \u2014 Dangerous Corner (1932), Time and the Conways (1937), I Have Been Here Before (1937), and An Inspector Calls itself.',
      'The cyclical ending of An Inspector Calls \u2014 the family is about to be questioned again about a real suicide just after they have congratulated themselves on escaping \u2014 has been read in Dunnean terms: the Inspector has glimpsed the future, and the Birlings are being given a second chance to learn before that future arrives. Read this way, the Inspector becomes a figure of moral time-travel rather than (or as well as) a supernatural spirit or police officer.',
      'Some critics also link the Inspector to the medieval morality-play tradition, in which an allegorical figure (Death, Conscience, or God) arrives to test the soul. Priestley adapts this older form into a modern, political theatre that asks the audience to confront its own moral position before history forces it to.',
    ],
    keyPoint:
      'The Inspector\u2019s identity is deliberately unresolvable. He works simultaneously as a police inspector, a Dunne-style time visitor with foreknowledge of the war, a morality-play conscience figure, and Priestley\u2019s socialist mouthpiece. Different readings reinforce, rather than compete with, his function.',
    examLink:
      'A brief mention of Dunne\u2019s time theory, or of the morality-play tradition, can lift a top-grade answer. Use it to argue that Priestley deliberately makes the Inspector ambiguous so that the audience cannot dismiss the message by discrediting the messenger.',
  },
  {
    title: 'Critical Perspectives: Marxist, Feminist, Morality-Play',
    body: [
      'Marxist readings treat the Inspector as Priestley\u2019s mouthpiece, the Birlings as representatives of the bourgeoisie, and Eva as the exploited proletariat. On this reading the play stages a class trial: capitalism (Birling) is the accused, the Inspector is prosecutor, and the audience is jury. The cyclical ending suggests that capitalism cannot be reformed from within \u2014 Arthur and Sybil will not change, so change must come from below or from the next generation.',
      'Feminist readings emphasise how Eva is silenced and objectified. She has no voice on stage; her body is named, described and exploited by every man she meets; even Sybil, a woman, polices the patriarchal moral code against her. Sheila\u2019s arc \u2014 returning the engagement ring, refusing male authority \u2014 has been read as a movement toward female autonomy, though some feminist critics note that Priestley still routes the political argument through male voices (Birling and the Inspector).',
      'Morality-play readings see the Inspector as a modern Everyman figure \u2014 Conscience, Death, or even a Christ-figure arriving to judge sinners. The biblical register ("one body" echoes 1 Corinthians 12) supports this reading, as does the Inspector\u2019s name pun on "ghoul" and the play\u2019s allegorical clarity (each Birling embodies a different deadly sin against the poor: greed, vanity, lust, snobbery, violence).',
      'Priestley also borrowed from the European avant-garde: the Italian playwright Luigi Pirandello\u2019s Six Characters in Search of an Author (1921) anticipates the way Priestley blurs the line between dramatic illusion and uncomfortable reality, especially in the play\u2019s self-aware ending.',
    ],
    keyPoint:
      'The play sustains multiple critical readings because Priestley designed it to work on several levels at once: as detective thriller, political tract, morality play and metaphysical puzzle. Strong essays signal awareness of this layering rather than reducing it to a single message.',
    examLink:
      'You do not need to name a critical school by label, but referencing competing readings (the Inspector as policeman vs. ghost vs. conscience) demonstrates the kind of conceptualised response examiners reward at the top bands.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Timeline                                                             */
/* ────────────────────────────────────────────────────────────────────── */

type TimelineEvent = {
  year: string
  event: string
  relevance: string
}

const TIMELINE: TimelineEvent[] = [
  {
    year: '1903',
    event: 'WSPU founded by Emmeline Pankhurst',
    relevance: 'Women\u2019s suffrage movement intensifying as Eva lives',
  },
  {
    year: '1912',
    event: 'The play is set',
    relevance: 'Edwardian confidence, rigid class system, no welfare state',
  },
  {
    year: 'Apr 1912',
    event: 'RMS Titanic sinks',
    relevance: 'Birling\u2019s "unsinkable" prediction proven catastrophically wrong',
  },
  {
    year: '1914\u201318',
    event: 'World War One',
    relevance: 'Birling\u2019s "no chance of war" prediction destroyed; 17 million dead',
  },
  {
    year: '1918',
    event: 'Representation of the People Act',
    relevance: 'Some women gain the vote; beginning of democratic expansion',
  },
  {
    year: '1926',
    event: 'General Strike',
    relevance: 'Workers challenge the capitalist system Birling defends',
  },
  { year: '1928', event: 'Equal Franchise Act', relevance: 'All women over 21 gain the vote' },
  {
    year: '1930s',
    event: 'Great Depression',
    relevance: 'Mass unemployment proves Birling\u2019s capitalism has failed',
  },
  {
    year: '1934',
    event: 'Priestley\u2019s English Journey',
    relevance: 'Documents poverty and inequality; shapes Priestley\u2019s socialism',
  },
  {
    year: '1939\u201345',
    event: 'World War Two',
    relevance: 'Collective sacrifice strengthens the case for the welfare state',
  },
  {
    year: '1940',
    event: 'Priestley\u2019s Postscripts broadcasts',
    relevance: '16 million listeners hear the case for post-war reform',
  },
  {
    year: '1942',
    event: 'Priestley co-founds the Common Wealth Party with Sir Richard Acland',
    relevance: 'Priestley moves from radio commentator to active socialist politics',
  },
  {
    year: 'Nov 1942',
    event: 'Beveridge Report published',
    relevance:
      'Blueprint for the welfare state; addresses the "five giants"; sells 600,000+ copies',
  },
  {
    year: '1944–45',
    event: 'An Inspector Calls written',
    relevance: 'Composed in the closing months of WWII as Britain debates post-war reform',
  },
  {
    year: '1945',
    event: 'Soviet premieres (Moscow & Leningrad); Labour wins landslide July',
    relevance: 'Play first staged at the Kamerny Theatre, Moscow; Attlee defeats Churchill',
  },
  {
    year: '1 Oct 1946',
    event: 'London premiere at the New Theatre',
    relevance: 'The welfare state is being built as the audience watches; directed by Basil Dean',
  },
  {
    year: '1948',
    event: 'NHS founded',
    relevance: 'The ultimate expression of "we are members of one body"',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function ContextPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls/context',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="An Inspector Calls" textType="play" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/an-inspector-calls"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to An Inspector Calls
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
              <Calendar className="size-3" />
              Historical Context
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/20 px-3 py-1 text-xs text-teal-600">
              <Sparkles className="size-3" />
              AO3 — Context
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            An Inspector Calls &mdash; Context
          </h1>
          <p className="mt-2 text-lg text-ink-500">by J.B. Priestley &mdash; 1945</p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Historical and social context for GCSE literature. Covers the 1912 setting, 1945 writing
            date, Priestley&rsquo;s socialism, the welfare state, the class system, women&rsquo;s
            rights, and the Labour landslide.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">AO3 — What examiners want</p>
              <p>
                AO3 rewards you for showing how <strong>context shapes meaning</strong>. Do not
                simply list historical facts — explain how the 1912 setting and 1945 writing date
                affect the audience&rsquo;s response to the play. The best AO3 answers explain{' '}
                <em>why</em> Priestley made specific choices, not just <em>when</em> things
                happened.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="size-5 text-teal-600" />
            <h2 className="font-serif text-2xl font-bold text-ink-900">Key Timeline</h2>
          </div>
          <div className="relative ml-4 border-l-2 border-teal-400/20 pl-6 space-y-4">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-teal-400 bg-cream-50" />
                <div className="rounded-lg border border-ink-100/80 bg-cream-100/50 p-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-teal-700">{item.year}</span>
                    <span className="text-sm font-medium text-ink-700">{item.event}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-500">{item.relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Context sections */}
        {CONTEXT_SECTIONS.map((section, idx) => (
          <section key={section.title} className="mt-12">
            <div className="flex items-start gap-3 mb-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-clay-300/10">
                <BookOpen className="size-5 text-clay-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink-900">{section.title}</h2>
            </div>

            {/* Body paragraphs */}
            <div className="mt-4 rounded-xl border border-teal-400/15 bg-cream-100/60 p-5 space-y-3">
              {section.body.map((para, pi) => (
                <p key={pi} className="text-sm leading-relaxed text-ink-600">
                  {para}
                </p>
              ))}
            </div>

            {/* Key point */}
            <div className="mt-4 rounded-xl border border-teal-400/20 bg-teal-500/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                Key Point
              </p>
              <p className="text-sm leading-relaxed text-ink-700 font-medium">{section.keyPoint}</p>
            </div>

            {/* Exam link */}
            <div className="mt-3 rounded-xl border border-clay-300/20 bg-clay-200/8 p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-500" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-clay-600">
                    Using This in Your Essay
                  </p>
                  <p className="text-sm leading-relaxed text-ink-600">{section.examLink}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            {idx < CONTEXT_SECTIONS.length - 1 && <div className="mt-10 border-t border-ink-100" />}
          </section>
        ))}

        {/* Quick reference table */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
            Quick Reference: 1912 vs 1945
          </h2>
          <div className="overflow-x-auto rounded-xl border border-teal-400/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-500/8">
                  <th className="px-4 py-3 text-left font-bold text-teal-700 uppercase tracking-wider text-xs">
                    Topic
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700 uppercase tracking-wider text-xs">
                    1912 (Setting)
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-clay-600 uppercase tracking-wider text-xs">
                    1945 (Writing)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100/60">
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Voting rights</td>
                  <td className="px-4 py-3 text-ink-600">
                    No women could vote; limited male suffrage
                  </td>
                  <td className="px-4 py-3 text-ink-600">Universal adult suffrage since 1928</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Welfare</td>
                  <td className="px-4 py-3 text-ink-600">
                    No welfare state; charity-based poor relief
                  </td>
                  <td className="px-4 py-3 text-ink-600">
                    NHS, national insurance, council housing being built
                  </td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Class system</td>
                  <td className="px-4 py-3 text-ink-600">
                    Rigid hierarchy; workers had minimal rights
                  </td>
                  <td className="px-4 py-3 text-ink-600">
                    Labour government; class barriers being challenged
                  </td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Economy</td>
                  <td className="px-4 py-3 text-ink-600">
                    Laissez-faire capitalism; no minimum wage
                  </td>
                  <td className="px-4 py-3 text-ink-600">
                    Nationalised industries; regulated economy
                  </td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Women</td>
                  <td className="px-4 py-3 text-ink-600">
                    Suffragettes campaigning; limited employment
                  </td>
                  <td className="px-4 py-3 text-ink-600">
                    Women had proved capability in wartime roles
                  </td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Birling\u2019s world</td>
                  <td className="px-4 py-3 text-ink-600">
                    Confident, stable, and about to be destroyed
                  </td>
                  <td className="px-4 py-3 text-ink-600">
                    Already destroyed; audience sees the ruins
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">Continue studying</h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, and key quotes for An Inspector Calls.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/an-inspector-calls/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/key-quotes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Key Quotes
            </Link>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-ink-100 pt-4 text-xs text-ink-400">
          Short quotations (&le;15 words each) reproduced under the fair dealing provision of the
          Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and
          educational study. <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text
          available from your school or local library.
        </p>
      </div>
    </div>
  )
}
