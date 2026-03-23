"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-amber-700",
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  badge?: string;
  colour?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {badge && (
            <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-gray-100 px-5 py-5">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Context Example Box ────────────────────────────────────── */

function ContextExample({
  text,
  point,
  analysis,
}: {
  text: string;
  point: string;
  analysis: string;
}) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-accent-50/40 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-accent-600">{text}</p>
      <p className="mt-1 text-sm font-semibold text-gray-800">{point}</p>
      <p className="mt-2 text-sm text-gray-700">{analysis}</p>
    </div>
  );
}

/* ─── Timeline Event ─────────────────────────────────────────── */

function TimelineEvent({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
          {year}
        </span>
        <div className="mt-1 h-full w-px bg-amber-200" />
      </div>
      <p className="pb-6 text-sm text-gray-700">{event}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function VictorianContextPage() {
  return (
    <>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {[
            { href: "/", label: "Home" },
            { href: "/resources", label: "Resources" },
            { href: "/resources/context", label: "Context" },
          ].map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-primary">Victorian Era</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider">
              1837 -- 1901
            </span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">A Christmas Carol</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Jekyll &amp; Hyde</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Victorian Era Context
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600 leading-relaxed">
            The Victorian period transformed Britain from a rural society into the
            world&apos;s first industrial superpower. Understanding these seismic
            social changes is essential for analysing Dickens and Stevenson.
          </p>
        </div>

        {/* Timeline */}
        <Section id="timeline" title="Key Timeline" badge="1837-1901" defaultOpen>
          <div className="grid gap-0 sm:grid-cols-2">
            <div>
              <TimelineEvent year="1837" event="Victoria becomes Queen at age 18. The British Empire is expanding rapidly." />
              <TimelineEvent year="1834" event="The Poor Law Amendment Act creates the workhouse system, designed to deter the poor from seeking help." />
              <TimelineEvent year="1842" event="The Mines Act bans women and children under 10 from working underground." />
              <TimelineEvent year="1843" event="Dickens publishes A Christmas Carol, attacking Victorian attitudes to poverty." />
              <TimelineEvent year="1848" event="The Communist Manifesto is published. Revolutions sweep across Europe." />
              <TimelineEvent year="1859" event="Darwin publishes On the Origin of Species, shaking religious certainty." />
            </div>
            <div>
              <TimelineEvent year="1867" event="The Second Reform Act extends the vote to more working-class men." />
              <TimelineEvent year="1870" event="The Education Act introduces elementary schooling for all children." />
              <TimelineEvent year="1886" event="Stevenson publishes The Strange Case of Dr Jekyll and Mr Hyde." />
              <TimelineEvent year="1888" event="Jack the Ripper murders in Whitechapel highlight urban poverty and crime." />
              <TimelineEvent year="1891" event="Free elementary education is established for all children." />
              <TimelineEvent year="1901" event="Queen Victoria dies. The Edwardian era begins." />
            </div>
          </div>
        </Section>

        <div className="mt-5 space-y-5">
          {/* Social Class System */}
          <Section id="class" title="The Social Class System" colour="bg-amber-600">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Victorian society was rigidly hierarchical. The <strong>upper class</strong> (aristocracy
                and landed gentry) held political power and vast wealth. The growing <strong>middle class</strong> --
                factory owners, merchants, professionals -- gained economic influence but craved
                social respectability. The <strong>working class</strong> and the destitute poor lived in
                overcrowded slums, working gruelling hours for meagre wages.
              </p>
              <p>
                Social mobility was extremely limited. The Victorians believed in &ldquo;self-help&rdquo;
                and that poverty was often the fault of the individual -- a moral failing rather
                than a systemic problem. This attitude is exactly what Dickens attacks through
                Scrooge&apos;s famous dismissal of the poor: &ldquo;Are there no prisons? Are there no workhouses?&rdquo;
              </p>
              <p>
                The concept of the <strong>&ldquo;deserving&rdquo; vs &ldquo;undeserving&rdquo; poor</strong> was
                central to Victorian thinking. Only those deemed morally worthy were considered
                entitled to charity, while others were seen as lazy or sinful.
              </p>
            </div>
          </Section>

          {/* Industrial Revolution */}
          <Section id="industry" title="The Industrial Revolution" colour="bg-gray-700">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Britain was the birthplace of the Industrial Revolution. By the mid-nineteenth
                century, factories, railways, and mass production had transformed the landscape.
                Cities like Manchester, Birmingham, and London swelled with workers seeking employment.
              </p>
              <p>
                <strong>Child labour</strong> was rampant. Children as young as five worked in mines,
                factories, and as chimney sweeps. The conditions were dangerous and often fatal.
                Dickens himself experienced child labour when his father was imprisoned for debt
                and young Charles was sent to work in a blacking factory -- an experience that
                haunted his writing for life.
              </p>
              <p>
                The gap between rich and poor widened dramatically. Benjamin Disraeli famously
                described Britain as <strong>&ldquo;Two Nations&rdquo;</strong> -- the rich and the poor --
                who lived as though in different countries, with no understanding of each other.
              </p>
            </div>
          </Section>

          {/* Poor Laws and Workhouses */}
          <Section id="poor-laws" title="Poor Laws & Workhouses" colour="bg-amber-800">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The <strong>1834 Poor Law Amendment Act</strong> was designed to reduce the cost of
                looking after the poor. It established <strong>workhouses</strong> -- deliberately grim
                institutions where conditions were made worse than the lowest-paid job outside.
                This was the principle of <strong>&ldquo;less eligibility&rdquo;</strong>: if the workhouse
                was awful enough, only the truly desperate would enter.
              </p>
              <p>
                Families were separated upon entry. Food was minimal and monotonous (often gruel).
                Inmates wore uniforms and followed strict schedules. The workhouse carried enormous
                social stigma -- entering one was seen as a mark of moral failure.
              </p>
              <p>
                Dickens was a fierce critic of the workhouse system. In A Christmas Carol, the
                charity collectors tell Scrooge that many would &ldquo;rather die&rdquo; than enter the
                workhouse -- to which Scrooge replies they &ldquo;had better do it, and decrease the
                surplus population.&rdquo; This echoes the real views of Thomas Malthus, whose
                population theories influenced Victorian social policy.
              </p>
            </div>
          </Section>

          {/* Religion and Science */}
          <Section id="religion-science" title="Religion vs Science" colour="bg-violet-700">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The Victorian era saw an unprecedented clash between <strong>religious faith</strong> and
                <strong> scientific discovery</strong>. For centuries, Christianity had provided a stable
                framework for understanding the world. The Bible was considered literal truth.
              </p>
              <p>
                <strong>Charles Darwin&apos;s On the Origin of Species (1859)</strong> shattered this certainty.
                Evolution by natural selection suggested that humans were not divinely created but
                had evolved from earlier species. This created a crisis of faith that permeated
                Victorian literature and culture.
              </p>
              <p>
                In Jekyll and Hyde, Stevenson explores the tension between rational science and
                moral restraint. Jekyll&apos;s experiments represent the Victorian fear that science
                without morality could unleash humanity&apos;s worst instincts. The duality of
                Jekyll/Hyde also reflects the era&apos;s obsession with <strong>respectability</strong> --
                maintaining a moral public face while hiding private desires.
              </p>
            </div>
          </Section>

          {/* Gender Roles */}
          <Section id="gender" title="Gender Roles" colour="bg-rose-700">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Victorian society enforced strict gender roles. Women were expected to embody the
                <strong> &ldquo;Angel in the House&rdquo;</strong> ideal -- pure, domestic, obedient, and morally
                superior to men. Middle- and upper-class women were confined to the domestic sphere;
                they could not vote, own property after marriage (until 1882), or enter most professions.
              </p>
              <p>
                Men, by contrast, occupied the <strong>public sphere</strong>: politics, business, and
                professional life. Masculinity was tied to rationality, self-control, and financial
                provision. The pressure to maintain respectability was immense.
              </p>
              <p>
                In Jekyll and Hyde, the absence of significant female characters reflects the male
                homosocial world of Victorian professional life. The story&apos;s focus on secrecy and
                repression mirrors the pressures men faced to conform to strict moral codes.
              </p>
            </div>
          </Section>

          {/* Crime and Punishment */}
          <Section id="crime" title="Crime & Punishment" colour="bg-red-800">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Victorian cities were plagued by crime, much of it driven by poverty. Overcrowded
                slums, lack of sanitation, and the gin trade created breeding grounds for
                theft, violence, and prostitution.
              </p>
              <p>
                The <strong>Metropolitan Police</strong> was established in 1829, but public trust was
                slow to develop. The justice system was harsh: over 200 offences carried the death
                penalty at the start of the century, and transportation to penal colonies (such as
                Australia) was common.
              </p>
              <p>
                Gothic literature -- including Jekyll and Hyde -- drew heavily on Victorian anxieties
                about urban crime. Stevenson set his novella in the dark streets of London (though he
                was inspired by Edinburgh&apos;s Old Town), creating an atmosphere of menace that
                reflected real fears about what lurked in the city&apos;s shadows.
              </p>
            </div>
          </Section>

          {/* Key Figures */}
          <Section id="figures" title="Key Figures & Events" colour="bg-primary">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Queen Victoria", detail: "Reigned 1837-1901. Her long reign gave the era its name and its emphasis on morality and duty." },
                { name: "Charles Dickens", detail: "The most popular novelist of the age. Used fiction to expose poverty, injustice, and the failures of institutions." },
                { name: "Charles Darwin", detail: "Published On the Origin of Species (1859). Revolutionised science and triggered a crisis of religious faith." },
                { name: "Thomas Malthus", detail: "Economist who argued population growth would outstrip food supply. His ideas influenced the harsh Poor Laws." },
                { name: "Karl Marx", detail: "Co-authored The Communist Manifesto (1848). Critiqued capitalism and class exploitation." },
                { name: "Florence Nightingale", detail: "Pioneered modern nursing during the Crimean War. Challenged gender norms by working in public life." },
                { name: "Jack the Ripper", detail: "Unidentified serial killer (1888). The murders exposed the squalor of London's East End." },
                { name: "Robert Louis Stevenson", detail: "Published Jekyll and Hyde (1886). Explored duality, repression, and the dark side of respectability." },
              ].map((fig) => (
                <div key={fig.name} className="rounded-lg bg-gray-50 p-4">
                  <h3 className="text-sm font-bold text-gray-900">{fig.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{fig.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Linking Context to Texts */}
          <Section id="linking" title="How to Link Context to Your Texts" badge="Exam skill" colour="bg-accent">
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The key to top marks is <strong>embedding context into your analysis</strong>, not
                bolting it on as a separate paragraph. Here are model examples showing how to do this.
              </p>

              <h3 className="text-base font-bold text-gray-900 pt-2">A Christmas Carol</h3>
              <div className="space-y-3">
                <ContextExample
                  text="A Christmas Carol"
                  point="Scrooge's dismissal of the poor reflects Malthusian thinking"
                  analysis="When Scrooge says the poor should die and 'decrease the surplus population,' Dickens directly echoes Thomas Malthus's argument that population growth among the poor was a social threat. Dickens uses Scrooge as a mouthpiece for these callous ideas so that, when Scrooge is later transformed, the reader sees the moral bankruptcy of such attitudes. Dickens is urging his middle-class readership to reject Malthusian indifference and embrace Christian charity."
                />
                <ContextExample
                  text="A Christmas Carol"
                  point="The workhouse references reflect the 1834 Poor Law"
                  analysis="Scrooge's question -- 'Are there no prisons? Are there no workhouses?' -- directly references the institutions created by the 1834 Poor Law Amendment Act. Dickens presents these as instruments of cruelty, not charity. By making Scrooge advocate for them, Dickens forces the reader to confront the inhumanity of a system that punished people for being poor. The novella was published just nine years after the Act, making this a pointed political critique."
                />
              </div>

              <h3 className="text-base font-bold text-gray-900 pt-4">Jekyll and Hyde</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Jekyll and Hyde"
                  point="The duality theme reflects Victorian repression"
                  analysis="Jekyll's transformation into Hyde dramatises the Victorian obsession with respectability. In an era when gentlemen were expected to suppress all 'base' impulses, Stevenson suggests that such extreme repression creates a dangerous alter ego. Hyde represents everything Victorian society refused to acknowledge about human nature -- violence, desire, and selfishness -- lurking beneath a polished exterior."
                />
                <ContextExample
                  text="Jekyll and Hyde"
                  point="Scientific experimentation reflects post-Darwin anxieties"
                  analysis="Jekyll's experiments echo the Victorian fear that science was advancing faster than morality. After Darwin's theory of evolution challenged the idea that humans were fundamentally different from animals, there was widespread anxiety about humanity's 'animal' nature. Stevenson taps into this by showing Jekyll's science literally transforming him into a creature of pure instinct -- a devolution from civilised man to beast."
                />
              </div>

              <div className="mt-6 rounded-xl border border-accent-100 bg-accent-50/50 p-5">
                <h3 className="text-sm font-bold text-gray-900">Sentence starters for context</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;A Victorian reader would have understood this as...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Dickens/Stevenson uses [character/event] to critique the Victorian belief that...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;This reflects the nineteenth-century tension between...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Perhaps [the writer] intended to challenge the prevailing attitude that...&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/resources/context"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Eras
          </Link>
          <Link
            href="/resources/context/elizabethan-jacobean"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            Elizabethan &amp; Jacobean
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
