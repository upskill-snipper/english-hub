'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Lightbulb,
  Sparkles,
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
    title: 'Post-WWII Britain',
    body: [
      'Lord of the Flies was published in 1954, less than a decade after the end of World War Two. The war had shattered any remaining Victorian confidence in progress and civilisation. Britain had survived the Blitz, endured rationing, and witnessed the Holocaust \u2014 the industrialised murder of six million Jews by a nation previously regarded as one of the most cultured in Europe.',
      'The revelation of the concentration camps forced a fundamental rethinking of human nature. If the citizens of Goethe and Beethoven could commit genocide, then civilisation was clearly no guarantee of decency. Golding\u2019s novel asks the question that haunted the post-war generation: is evil an aberration, or is it a permanent feature of human nature that civilisation merely suppresses?',
      'Britain in the early 1950s was also dealing with the decline of its empire. India had gained independence in 1947, and colonial territories across Africa and Asia were demanding self-rule. The confidence of the British ruling class \u2014 the class represented by the boys\u2019 public-school background \u2014 was being challenged on every front.',
    ],
    keyPoint:
      'The post-war context is essential to understanding Golding\u2019s pessimism. He is not writing a theoretical argument about human nature \u2014 he is responding to historical evidence that civilisation can collapse into barbarism. The Holocaust proved that the beast is real.',
    examLink:
      'Reference WWII and the Holocaust when discussing Golding\u2019s views on human nature. Examiners reward candidates who show that the novel is a response to specific historical events, not an abstract philosophical exercise.',
  },
  {
    title: 'Golding\u2019s War Experience',
    body: [
      'William Golding (1911\u20131993) served in the Royal Navy during World War Two. He commanded a rocket-launching ship during the D-Day landings at Normandy in June 1944 and saw combat in the Atlantic. His wartime experience fundamentally changed his understanding of human nature.',
      'Before the war, Golding later admitted, he had believed in the essential goodness of humanity. The war destroyed this belief. He witnessed ordinary men \u2014 not monsters, not psychopaths, but ordinary sailors and soldiers \u2014 commit acts of cruelty when given the opportunity and the permission of authority. He concluded that civilisation is a thin veneer and that savagery lies just beneath the surface of every human being.',
      'Golding said of his wartime experience: "I began to see what people were capable of doing. Anyone who moved through those years without understanding that man produces evil as a bee produces honey, must have been blind or wrong in the head." This conviction is the philosophical foundation of Lord of the Flies.',
    ],
    keyPoint:
      'Golding\u2019s war service is the biographical origin of the novel\u2019s thesis. He did not theorise about human evil \u2014 he observed it first-hand in ordinary men under extraordinary circumstances. The boys on the island are his dramatic experiment to test this observation.',
    examLink:
      'Quote Golding\u2019s "man produces evil as a bee produces honey" statement. This single sentence encapsulates his worldview and provides a powerful AO3 reference that examiners recognise.',
  },
  {
    title: 'The Atomic Age',
    body: [
      'The atomic bombs dropped on Hiroshima (6 August 1945) and Nagasaki (9 August 1945) killed over 200,000 people and inaugurated a new era of existential fear. For the first time in human history, humanity possessed the technology to destroy itself entirely. The nuclear arms race between the United States and the Soviet Union dominated the 1950s, and the threat of annihilation was ever-present.',
      'Lord of the Flies is set during a nuclear war. The boys are being evacuated from Britain when their plane is shot down. The dead parachutist \u2014 the "beast from air" \u2014 is a casualty of the aerial conflict happening above the island. The island itself is scarred by the crash, described as a "scar" in the landscape, connecting the boys\u2019 arrival to the violence of the wider war.',
      'Golding uses the nuclear context to frame the boys\u2019 savagery within a larger argument: the adults who sent them away are engaged in the same violence on a global scale. The naval officer who "rescues" the boys at the end is himself part of a warship. There is no rescue \u2014 only a transfer from one arena of human violence to another.',
    ],
    keyPoint:
      'The atomic age provides the novel\u2019s framing device and its bleakest insight: the boys\u2019 island is a microcosm of the adult world. The adults have not transcended savagery; they have merely industrialised it. The naval officer represents civilisation\u2019s failure, not its triumph.',
    examLink:
      'Mention the nuclear war setting and the dead parachutist. These details connect the boys\u2019 behaviour to the adult world and support the argument that savagery is universal, not confined to children on an island.',
  },
  {
    title: 'Response to The Coral Island',
    body: [
      'R.M. Ballantyne\u2019s The Coral Island (1858) is a Victorian adventure novel in which three British boys \u2014 Ralph, Jack and Peterkin \u2014 are shipwrecked on a Pacific island and thrive through courage, resourcefulness and Christian virtue. They encounter "savages" (Pacific Islanders depicted in deeply racist terms) and pirates, but the boys remain morally upright throughout. The novel reflects the supreme confidence of Victorian Britain in its own civilisation and racial superiority.',
      'Golding deliberately names his protagonists Ralph and Jack as a direct reference to Ballantyne\u2019s characters. Lord of the Flies is a systematic demolition of The Coral Island\u2019s assumptions. Where Ballantyne\u2019s boys maintain civilised standards, Golding\u2019s descend into savagery. Where Ballantyne locates evil in racial "others," Golding locates it within the British boys themselves.',
      'The naval officer at the end of Lord of the Flies explicitly references The Coral Island: "I should have thought that a pack of British boys would have been able to put up a better show than that \u2014 I mean \u2014" The officer\u2019s stammering inability to finish the sentence reveals that Ballantyne\u2019s comfortable assumptions have been proved wrong.',
    ],
    keyPoint:
      'Lord of the Flies is an anti-Coral Island. Golding takes the same premise \u2014 British boys stranded on a tropical island \u2014 and reaches the opposite conclusion. Where Ballantyne saw civilisation as innate, Golding sees it as learned, fragile and easily destroyed.',
    examLink:
      'Reference The Coral Island by name. Examiners reward candidates who show that Golding wrote the novel as a deliberate challenge to Victorian optimism about British civilisation and childhood innocence.',
  },
  {
    title: 'Original Sin and Human Nature',
    body: [
      'Golding was deeply influenced by the Christian doctrine of original sin: the belief that all human beings are born with an innate tendency toward evil, inherited from the Fall of Adam and Eve in the Garden of Eden. This theological position shapes every aspect of the novel.',
      'The island itself functions as a fallen Eden. It is initially described in paradisiacal terms \u2014 fruit, lagoon, warm beaches \u2014 but the boys corrupt it through violence, fire and the killing of the sow. Simon\u2019s glade, the most Edenic space on the island, becomes the site of the Lord of the Flies: a pig\u2019s head swarming with insects, a literal corruption of paradise.',
      'Simon functions as a Christ figure: he is the only character who understands the true nature of the beast, he retreats to a solitary place to meditate, and he is murdered by the other boys when he tries to bring them the truth. His death is described in sacrificial, almost liturgical language. Golding \u2014 a Christian \u2014 presents Simon\u2019s murder as the re-enactment of humanity\u2019s oldest crime: the killing of the innocent by the guilty.',
    ],
    keyPoint:
      'Original sin provides the novel\u2019s philosophical framework. Golding argues that evil is not created by bad environments or bad systems \u2014 it is inherent in human nature. The island is a controlled experiment that proves the doctrine: remove civilisation and the Fall happens again.',
    examLink:
      'Reference original sin and the Eden parallels when discussing Golding\u2019s message. This shows sophisticated understanding of the novel\u2019s theological underpinning. Connect the island\u2019s initial beauty to its corruption.',
  },
  {
    title: 'The Cold War',
    body: [
      'The Cold War (1947\u20131991) between the United States and the Soviet Union defined the geopolitical context in which Golding wrote. The two superpowers divided the world into hostile blocs, accumulated vast nuclear arsenals, and fought proxy wars across Asia, Africa and Latin America. The threat of nuclear annihilation was a constant reality.',
      'The novel\u2019s setting \u2014 an evacuation during a nuclear war \u2014 reflects Cold War anxieties directly. The boys are not simply stranded; they are casualties of the adult world\u2019s failure to coexist peacefully. The dead parachutist, mistaken for the beast, is literally a product of the war above.',
      'The division between Ralph and Jack mirrors the Cold War binary of democracy versus authoritarianism. Ralph leads through consent, assembly and debate; Jack leads through fear, ritual and force. Golding shows that both systems are unstable and that the authoritarian one, while destructive, is psychologically more powerful because it appeals to humanity\u2019s darker instincts.',
    ],
    keyPoint:
      'The Cold War is the novel\u2019s backdrop and its ultimate irony. The boys reproduce on their island the same conflict that the adults are waging globally. There is no safe space; there is no civilisation untouched by the will to dominate.',
    examLink:
      'Link the Ralph\u2013Jack conflict to the Cold War tension between democracy and authoritarianism. This elevates your analysis from character study to political commentary.',
  },
  {
    title: 'The Nobel Prize and Literary Legacy',
    body: [
      'William Golding was awarded the Nobel Prize in Literature in 1983, with the committee citing his novels for illuminating "the human condition in the world of today." Lord of the Flies, his first and most famous novel, has been in continuous print since 1954 and is one of the most widely studied texts in English-speaking schools worldwide.',
      'The novel\u2019s enduring relevance lies in its refusal to offer comfort. Every generation that studies it confronts the same question: is civilisation strong enough to contain human savagery? The answer Golding gives \u2014 an uncertain, qualified "only just, and not always" \u2014 remains as unsettling today as it was in 1954.',
      'Golding wrote eleven further novels, including The Inheritors (1955), Pincher Martin (1956) and Rites of Passage (1980), all of which explore extreme situations that test the limits of human morality. But Lord of the Flies remains his defining achievement: a novel that changed how we think about children, civilisation and the darkness within.',
    ],
    keyPoint:
      'The Nobel Prize confirmed Golding\u2019s status as one of the twentieth century\u2019s most important writers. Lord of the Flies endures because its central question \u2014 what are humans really like when the rules are removed? \u2014 never becomes irrelevant.',
    examLink:
      'Mentioning the Nobel Prize is useful in a conclusion to show that Golding\u2019s ideas have been recognised as significant well beyond the classroom. It adds weight to your discussion of his purpose.',
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
  { year: '1858', event: 'R.M. Ballantyne publishes The Coral Island', relevance: 'The Victorian adventure novel Golding directly challenges' },
  { year: '1911', event: 'William Golding born in Cornwall', relevance: 'Raised in a middle-class family; father was a schoolteacher' },
  { year: '1939\u201345', event: 'World War Two', relevance: 'Golding serves in Royal Navy; witnesses human capacity for evil' },
  { year: '1944', event: 'D-Day \u2014 Golding commands a landing craft', relevance: 'Direct combat experience shapes his view of human nature' },
  { year: '1945', event: 'Atomic bombs dropped on Hiroshima and Nagasaki', relevance: 'Inaugurates the nuclear age; provides the novel\u2019s wartime setting' },
  { year: '1945', event: 'Holocaust revealed to the wider public', relevance: 'Proves that "civilised" nations can commit industrial-scale evil' },
  { year: '1947', event: 'Cold War begins', relevance: 'The geopolitical conflict that frames the novel\u2019s evacuation scenario' },
  { year: '1954', event: 'Lord of the Flies published by Faber and Faber', relevance: 'Initially slow sales; rejected by 21 publishers before acceptance' },
  { year: '1963', event: 'Peter Brook\u2019s film adaptation released', relevance: 'Brings the novel to a wider audience; acclaimed for its realism' },
  { year: '1983', event: 'Golding awarded the Nobel Prize in Literature', relevance: 'International recognition of his contribution to literature' },
  { year: '1993', event: 'Golding dies, aged 81', relevance: 'Lord of the Flies remains his most studied and debated work' },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function LOTFContextPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Lord of the Flies", url: "https://theenglishhub.app/revision/texts/lord-of-the-flies" },
          { name: "Context", url: "https://theenglishhub.app/revision/texts/lord-of-the-flies/context" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Lord of the Flies" textType="novel" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/lord-of-the-flies"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Lord of the Flies
          </a>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
              <Calendar className="size-3" />
              Historical Context
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/20 px-3 py-1 text-xs text-teal-600">
              <Sparkles className="size-3" />
              AO3 &mdash; Context
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Lord of the Flies &mdash; Context
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by William Golding &mdash; 1954
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Historical and social context for GCSE literature. Covers post-WWII
            Britain, Golding&rsquo;s war experience, the atomic age, The Coral
            Island, original sin, the Cold War and the Nobel Prize.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">AO3 &mdash; What examiners want</p>
              <p>
                AO3 rewards you for showing how <strong>context shapes
                meaning</strong>. Do not simply list facts about WWII &mdash;
                explain how Golding&rsquo;s war experience and the atomic age
                shape his view of human nature and the novel&rsquo;s argument.
                The best answers show <em>why</em> Golding chose to challenge
                Victorian optimism about childhood innocence.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="size-5 text-teal-600" />
            <h2 className="font-serif text-2xl font-bold text-ink-900">
              Key Timeline
            </h2>
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
              <h2 className="font-serif text-2xl font-bold text-ink-900">
                {section.title}
              </h2>
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
              <p className="text-sm leading-relaxed text-ink-700 font-medium">
                {section.keyPoint}
              </p>
            </div>

            {/* Exam link */}
            <div className="mt-3 rounded-xl border border-clay-300/20 bg-clay-200/8 p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-500" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-clay-600">
                    Using This in Your Essay
                  </p>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {section.examLink}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            {idx < CONTEXT_SECTIONS.length - 1 && (
              <div className="mt-10 border-t border-ink-100" />
            )}
          </section>
        ))}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, key quotes and essay plans for Lord of the Flies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/lord-of-the-flies/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/lord-of-the-flies/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/lord-of-the-flies/key-quotes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Key Quotes
            </a>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-ink-100 pt-4 text-xs text-ink-400">
          Short quotations (&le;15 words each) reproduced under the fair dealing
          provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism, review and educational study.{' '}
          <em>Lord of the Flies</em> by William Golding is published by Faber and
          Faber. Full text available from your school or local library.
        </p>
      </div>
    </div>
  )
}
