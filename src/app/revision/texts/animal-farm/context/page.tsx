'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Lightbulb,
  Sparkles,
  Users,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

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
    title: 'The Russian Revolution of 1917',
    body: [
      'In February 1917 the Russian people overthrew Tsar Nicholas II, ending centuries of autocratic rule. In October of the same year, the Bolsheviks, led by Vladimir Lenin, seized power in a second revolution and established the world\u2019s first socialist state. The Bolsheviks promised equality, workers\u2019 control and an end to exploitation \u2014 principles directly mirrored in Old Major\u2019s speech and the Seven Commandments.',
      'The revolution was followed by a brutal civil war (1917\u20131922) in which the Bolsheviks fought the White Army (loyalists, foreign-backed forces) to consolidate power. The Battle of the Cowshed in the novel parallels this conflict. The revolution also led to widespread famine and suffering, despite its utopian promises.',
      'Orwell\u2019s novel traces the arc from revolutionary hope to totalitarian oppression. The Rebellion in Chapter 2 represents the October Revolution; the expulsion of Snowball represents Trotsky\u2019s exile; Napoleon\u2019s consolidation of power mirrors Stalin\u2019s rise to absolute authority. The allegorical structure is precise and deliberate.',
    ],
    keyPoint:
      'The Russian Revolution is the historical foundation of the entire novel. Every major plot event \u2014 the Rebellion, the power struggle, the show trials, the betrayals \u2014 maps directly onto events between 1917 and the 1940s. Understanding the allegory is essential for AO3.',
    examLink:
      'Name the key historical parallels explicitly: Old Major = Marx/Lenin, Napoleon = Stalin, Snowball = Trotsky, Boxer = the proletariat, the dogs = NKVD/secret police. Examiners reward precise allegorical identification over vague references to "Russia."',
  },
  {
    title: 'Stalin vs Trotsky',
    body: [
      'After Lenin\u2019s death in 1924, a power struggle erupted between Joseph Stalin and Leon Trotsky. Trotsky was an intellectual, a brilliant orator and a committed internationalist who believed the revolution should spread worldwide. Stalin was a pragmatist and political operator who believed in "socialism in one country" and who used bureaucratic control to accumulate power quietly.',
      'Stalin won the struggle not through superior ideas but through institutional manipulation. He controlled party appointments, built a network of loyalists and gradually marginalised Trotsky. By 1929 Trotsky was expelled from the Soviet Union; in 1940 he was assassinated on Stalin\u2019s orders in Mexico.',
      'The Snowball\u2013Napoleon rivalry mirrors this precisely. Snowball is eloquent, visionary and popular (the windmill debates), while Napoleon is silent, strategic and ruthless. Napoleon does not defeat Snowball in argument \u2014 he has him expelled by force (the trained dogs). After Snowball\u2019s expulsion, Napoleon rewrites history to make Snowball a traitor and claims his ideas as his own, just as Stalin adopted Trotsky\u2019s industrialisation programme while denouncing him as a fascist agent.',
    ],
    keyPoint:
      'The Stalin\u2013Trotsky parallel is the structural engine of the novel\u2019s middle section. Orwell shows that in a revolution without democratic safeguards, the ruthless political operator will always defeat the principled intellectual.',
    examLink:
      'When writing about Napoleon and Snowball, always link to Stalin and Trotsky. Compare their methods: Snowball persuades, Napoleon coerces. This contrast illuminates Orwell\u2019s argument that power without accountability produces tyranny.',
  },
  {
    title: 'Orwell\u2019s Democratic Socialism',
    body: [
      'George Orwell (1903\u20131950) was a committed democratic socialist who believed passionately in equality, workers\u2019 rights and freedom of speech. He was not opposed to socialism \u2014 he was opposed to the totalitarian version of socialism that Stalin had created in the Soviet Union.',
      'This distinction is crucial for understanding Animal Farm. Orwell does not argue that the Rebellion was wrong or that the animals\u2019 desire for equality was foolish. He argues that the revolution was betrayed by leaders who used socialist rhetoric to establish a new form of tyranny. The novel is not anti-socialist; it is anti-Stalinist.',
      'Orwell joined the POUM (Workers\u2019 Party of Marxist Unification) militia in the Spanish Civil War in 1936 and fought on the Republican side against Franco\u2019s fascists. He was shot through the throat and nearly killed. More crucially, he witnessed the Soviet-backed communists suppressing and murdering their own allies \u2014 including members of the POUM. This experience of socialist-on-socialist violence is the biographical origin of Animal Farm.',
      'Orwell\u2019s essay "Why I Write" (1946) states his position clearly: "Every line of serious work that I have written since 1936 has been written, directly or indirectly, against totalitarianism and for democratic socialism." Animal Farm is the purest expression of this dual commitment.',
    ],
    keyPoint:
      'Orwell is not attacking the revolution\u2019s ideals \u2014 he is mourning their betrayal. The novel\u2019s power comes from the gap between what the revolution promised and what it delivered. Orwell\u2019s anger is directed at the pigs, not at the principles they corrupted.',
    examLink:
      'Always distinguish between Orwell\u2019s socialism and his criticism of Stalinism. Examiners penalise essays that present the novel as "anti-communist" without nuance. Orwell supported the revolution\u2019s goals; he condemned the methods used to betray them.',
  },
  {
    title: 'The Spanish Civil War',
    body: [
      'The Spanish Civil War (1936\u20131939) was a conflict between the elected Republican government (supported by socialists, communists and anarchists) and General Franco\u2019s Nationalists (supported by Hitler and Mussolini). It was a rehearsal for World War II and a defining experience for the European left.',
      'Orwell travelled to Spain in December 1936 intending to report on the war and instead joined the militia to fight. He described the early days of revolutionary Barcelona with genuine excitement: workers controlled the factories, class distinctions had disappeared and there was a sense of genuine equality. This experience shaped his vision of what socialism could be.',
      'The turning point came in May 1937, when Soviet-backed communists attacked their own left-wing allies in Barcelona. Orwell\u2019s POUM comrades were arrested, imprisoned and in some cases murdered. The Soviet Union, supposedly fighting for the same cause, was using the war to eliminate any socialist movement it could not control.',
      'This experience \u2014 watching a revolution betrayed from within by its own supposed leaders \u2014 is the direct inspiration for Animal Farm. The pigs do not defeat an external enemy; they betray their own supporters. Orwell had watched this happen in real life.',
    ],
    keyPoint:
      'Spain taught Orwell that the greatest threat to socialist ideals comes not from the right but from those who claim to represent the left while pursuing personal power. Animal Farm is the fictional expression of this devastating lesson.',
    examLink:
      'Referencing the Spanish Civil War demonstrates sophisticated contextual understanding. It shows examiners that you know why Orwell wrote the novel \u2014 not as an abstract political argument but as a response to events he personally witnessed and survived.',
  },
  {
    title: 'Allegory and Satire as Genres',
    body: [
      'Animal Farm is both an allegory and a satire. An allegory is a narrative in which characters, events and settings represent abstract ideas or historical figures. A satire uses humour, irony and exaggeration to criticise human behaviour and institutions. Orwell combines both: the allegorical framework maps the story onto the Russian Revolution, while the satirical tone exposes the absurdity and cruelty of totalitarian power.',
      'The choice of animals is itself satirical. By depicting Soviet leaders as pigs, Orwell literalises the metaphor of greedy, self-serving rulers. The farmyard setting reduces the grandeur of revolution to the mundane reality of a barnyard, stripping away the propaganda and rhetoric that totalitarian regimes use to justify themselves.',
      'Orwell subtitled the novel "A Fairy Story," which is both ironic and strategic. The fairy-story form \u2014 simple, allegorical, morally clear \u2014 makes the political argument accessible to a wide audience. It also provides cover: a "fairy story" about animals is harder to censor than a direct attack on the Soviet Union.',
    ],
    keyPoint:
      'The allegorical form is not decoration \u2014 it is the argument. By telling the story of the Russian Revolution through animals, Orwell strips away the justifications and reveals the naked mechanics of power. The simplicity of the form makes the corruption impossible to deny.',
    examLink:
      'Use the terms "allegory" and "satire" precisely. Allegory means one-to-one correspondence between the narrative and its historical referent. Satire means the use of irony and exaggeration to criticise. Examiners value candidates who distinguish between these techniques.',
  },
  {
    title: 'Publication Difficulties in 1945',
    body: [
      'Orwell completed Animal Farm in February 1944, but the novel was rejected by four publishers before being accepted by Secker and Warburg. The reason was political: the Soviet Union was Britain\u2019s ally in the war against Nazi Germany, and publishing a savage attack on Stalin was considered diplomatically dangerous.',
      'Jonathan Cape initially accepted the manuscript but withdrew after consulting the Ministry of Information. The publisher\u2019s reader explicitly warned that the book would damage Anglo-Soviet relations. T.S. Eliot, then an editor at Faber and Faber, rejected it on both political and literary grounds, suggesting that the pigs were made "too sympathetic" and that the novel needed "more public-spirited pigs."',
      'The publication difficulties themselves prove Orwell\u2019s point. In his proposed preface "The Freedom of the Press" (written for the novel but not published in his lifetime), Orwell argued that censorship in Britain was not imposed by the state but was self-imposed by intellectuals who refused to criticise the Soviet Union. The novel\u2019s struggle to find a publisher is real-world evidence of the propaganda and silencing it describes.',
    ],
    keyPoint:
      'The publication history is itself part of the novel\u2019s argument. Orwell could not get a book about censorship and propaganda published because of censorship and self-censorship. The irony is devastating and deliberate.',
    examLink:
      'Mentioning the publication difficulties in your essay demonstrates high-level AO3 knowledge. It shows the examiner that you understand the novel was not an abstract exercise but a politically dangerous act at the time of its writing.',
  },
  {
    title: 'Cold War Relevance',
    body: [
      'Animal Farm was published in August 1945, just as the wartime alliance between Britain, America and the Soviet Union was collapsing. Within two years, the Cold War had begun: the world was divided between the capitalist West and the communist East, and the ideological conflict that would define the second half of the twentieth century was under way.',
      'The novel\u2019s timing was perfect. What had been diplomatically awkward in 1944 became politically powerful in 1947. Animal Farm was adopted by the American CIA as a propaganda tool during the Cold War: it funded translations, distributed copies behind the Iron Curtain and commissioned an animated film adaptation (1954). Orwell, who died in 1950, did not authorise or benefit from these uses.',
      'The Cold War co-option of the novel is itself ironic. Orwell wrote Animal Farm as a left-wing critique of Stalinism, not as a right-wing defence of capitalism. The novel\u2019s final scene \u2014 in which pigs and humans are indistinguishable \u2014 condemns both sides equally. The CIA\u2019s appropriation of the novel involved ignoring its anti-capitalist implications, which is a form of the selective reading Orwell spent his career attacking.',
    ],
    keyPoint:
      'The Cold War made Animal Farm globally famous, but its appropriation by Western propaganda agencies distorted Orwell\u2019s message. The novel criticises all concentrations of power, not just Soviet ones.',
    examLink:
      'Mention the Cold War context briefly to show awareness of how the novel was received, but be careful not to reduce it to an anti-communist tract. Orwell\u2019s target is totalitarianism in all its forms, and the final scene condemns capitalists and communists equally.',
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
  { year: '1903', event: 'Eric Arthur Blair (George Orwell) born in India', relevance: 'Raised in the British colonial system he later critiqued' },
  { year: '1917', event: 'Russian Revolution', relevance: 'The historical foundation of the entire novel\u2019s allegory' },
  { year: '1924', event: 'Lenin dies; Stalin vs Trotsky power struggle begins', relevance: 'Paralleled by Napoleon vs Snowball conflict' },
  { year: '1929', event: 'Trotsky expelled from the Soviet Union', relevance: 'Paralleled by Snowball\u2019s expulsion in Chapter 5' },
  { year: '1930s', event: 'Stalin\u2019s Great Purge and show trials', relevance: 'Paralleled by the animal confessions and executions in Chapter 7' },
  { year: '1936\u201339', event: 'Spanish Civil War', relevance: 'Orwell fights, is wounded, witnesses Soviet betrayal of allies' },
  { year: '1937', event: 'Barcelona May Days \u2014 communists attack allies', relevance: 'Direct inspiration for the pigs\u2019 betrayal of the revolution' },
  { year: '1938', event: 'Orwell publishes Homage to Catalonia', relevance: 'Documents his Spanish experience; establishes anti-Stalinist position' },
  { year: '1943\u201344', event: 'Orwell writes Animal Farm', relevance: 'Completed February 1944 during the wartime Soviet alliance' },
  { year: '1944\u201345', event: 'Four publishers reject the manuscript', relevance: 'Self-censorship proves Orwell\u2019s point about propaganda' },
  { year: 'Aug 1945', event: 'Animal Farm published by Secker and Warburg', relevance: 'Published as the wartime alliance collapses and the Cold War begins' },
  { year: '1945', event: 'WWII ends; Cold War begins', relevance: 'Novel\u2019s anti-Stalin message becomes politically valuable to the West' },
  { year: '1950', event: 'Orwell dies of tuberculosis, aged 46', relevance: 'Does not live to see the Cold War appropriation of his work' },
  { year: '1954', event: 'CIA-funded animated film adaptation', relevance: 'Novel co-opted as Western propaganda; ending altered to remove anti-capitalist critique' },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function AnimalFarmContextPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Animal Farm" textType="novella" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/animal-farm"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
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
            Animal Farm &mdash; Context
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by George Orwell &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Historical and social context for GCSE literature. Covers the Russian
            Revolution, Stalin vs Trotsky, Orwell&rsquo;s democratic socialism,
            the Spanish Civil War, allegory and satire, publication difficulties
            and Cold War relevance.
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
                meaning</strong>. Do not simply list facts about the Russian
                Revolution &mdash; explain how the allegorical parallels affect
                the reader&rsquo;s understanding of Orwell&rsquo;s purpose. The
                best answers show <em>why</em> Orwell chose to tell this story
                through animals on a farm.
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

        {/* Allegory quick-reference */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
            Quick Reference: Allegorical Parallels
          </h2>
          <div className="overflow-x-auto rounded-xl border border-teal-400/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-500/8">
                  <th className="px-4 py-3 text-left font-bold text-teal-700 uppercase tracking-wider text-xs">
                    Character / Event
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-clay-600 uppercase tracking-wider text-xs">
                    Historical Parallel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100/60">
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Old Major</td>
                  <td className="px-4 py-3 text-ink-600">Karl Marx / Vladimir Lenin</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Napoleon</td>
                  <td className="px-4 py-3 text-ink-600">Joseph Stalin</td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Snowball</td>
                  <td className="px-4 py-3 text-ink-600">Leon Trotsky</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Squealer</td>
                  <td className="px-4 py-3 text-ink-600">Pravda / state propaganda</td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Boxer</td>
                  <td className="px-4 py-3 text-ink-600">The loyal proletariat (working class)</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">The Dogs</td>
                  <td className="px-4 py-3 text-ink-600">NKVD / secret police</td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Mr Jones</td>
                  <td className="px-4 py-3 text-ink-600">Tsar Nicholas II</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">Mr Frederick</td>
                  <td className="px-4 py-3 text-ink-600">Adolf Hitler / Nazi Germany</td>
                </tr>
                <tr className="bg-cream-50">
                  <td className="px-4 py-3 font-medium text-ink-700">Mr Pilkington</td>
                  <td className="px-4 py-3 text-ink-600">Britain / the Western Allies</td>
                </tr>
                <tr className="bg-cream-100/40">
                  <td className="px-4 py-3 font-medium text-ink-700">The Windmill</td>
                  <td className="px-4 py-3 text-ink-600">Soviet industrialisation / Five-Year Plans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, key quotes and essay plans for Animal Farm.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/animal-farm/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/animal-farm/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/animal-farm/key-quotes"
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
          <em>Animal Farm</em> by George Orwell is published by Penguin Books.
          Full text available from your school or local library.
        </p>
      </div>
    </div>
  )
}
