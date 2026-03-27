"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-slate-700",
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
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
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
      <p className="mt-1 text-sm font-semibold text-foreground">{point}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Timeline Event ─────────────────────────────────────────── */

function TimelineEvent({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-800">
          {year}
        </span>
        <div className="mt-1 h-full w-px bg-slate-200" />
      </div>
      <p className="pb-6 text-sm text-muted-foreground">{event}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function TwentiethCenturyContextPage() {
  return (
    <>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {[
            { href: "/", label: "Home" },
            { href: "/resources", label: "Resources" },
            { href: "/resources/context", label: "Context" },
          ].map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-primary">Twentieth Century</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider">
              1900 -- 1999
            </span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">An Inspector Calls</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Lord of the Flies</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Animal Farm</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Blood Brothers</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Twentieth-Century Context
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            The twentieth century reshaped Britain through two world wars, the birth of
            the welfare state, Cold War tensions, and Thatcher&apos;s revolution. These
            upheavals are the backdrop to some of the most studied GCSE texts.
          </p>
        </div>

        {/* Timeline */}
        <Section id="timeline" title="Key Timeline" badge="1900-1999" defaultOpen>
          <div className="grid gap-0 sm:grid-cols-2">
            <div>
              <TimelineEvent year="1912" event="The Titanic sinks. Priestley sets An Inspector Calls in this year of Edwardian confidence." />
              <TimelineEvent year="1914" event="World War I begins. 17 million will die. The old class certainties begin to crack." />
              <TimelineEvent year="1917" event="The Russian Revolution. The Tsar is overthrown; communism takes hold in Russia." />
              <TimelineEvent year="1918" event="WWI ends. Women over 30 gain the vote. The old social order is permanently changed." />
              <TimelineEvent year="1928" event="All women over 21 gain the vote. Full universal suffrage in Britain." />
              <TimelineEvent year="1939" event="World War II begins. Britain faces existential threat from Nazi Germany." />
              <TimelineEvent year="1943" event="Orwell begins writing Animal Farm, a satire of the Russian Revolution and Stalin's betrayal." />
            </div>
            <div>
              <TimelineEvent year="1945" event="WWII ends. Labour wins a landslide. Priestley writes An Inspector Calls. The welfare state is born." />
              <TimelineEvent year="1948" event="The NHS is established. The welfare state promises care 'from cradle to grave.'" />
              <TimelineEvent year="1954" event="Golding publishes Lord of the Flies, reflecting post-war disillusionment with human nature." />
              <TimelineEvent year="1979" event="Margaret Thatcher becomes PM. A radical programme of privatisation and individualism begins." />
              <TimelineEvent year="1981" event="Toxteth and Brixton riots. High unemployment devastates working-class communities." />
              <TimelineEvent year="1983" event="Willy Russell's Blood Brothers opens in the West End, exploring class division in Thatcher's Britain." />
              <TimelineEvent year="1989" event="The Berlin Wall falls. The Cold War effectively ends." />
            </div>
          </div>
        </Section>

        <div className="mt-5 space-y-5">
          {/* WWI and WWII */}
          <Section id="wars" title="World War I & World War II" colour="bg-red-800">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>World War I (1914-1918)</strong> shattered the certainties of Edwardian Britain.
                Before the war, there was a widespread belief -- especially among the upper classes --
                that the existing social order was stable and just. The horror of the trenches, where
                working-class soldiers died in their millions while generals dined safely behind the lines,
                destroyed this illusion.
              </p>
              <p>
                <strong>World War II (1939-1945)</strong> was a total war that affected every citizen.
                The Blitz, rationing, and evacuation broke down social barriers. Rich and poor, men
                and women, all contributed to the war effort. This shared sacrifice created a powerful
                demand for a fairer, more equal society.
              </p>
              <p>
                Priestley set <strong>An Inspector Calls</strong> in 1912 but wrote it in 1945. This
                is crucial: the audience knows what the Birlings do not -- that two world wars are
                coming, that the Titanic will sink, that the comfortable Edwardian world is about to
                collapse. Priestley uses dramatic irony to expose the arrogance and complacency of
                the capitalist class.
              </p>
            </div>
          </Section>

          {/* Class System Evolution */}
          <Section id="class" title="The Changing Class System" colour="bg-amber-700">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The rigid Edwardian class system -- with its clear divisions between upper, middle,
                and working classes -- gradually broke down across the century. The wars played a
                major role: soldiers from different backgrounds fought side by side, and women entered
                the workforce in unprecedented numbers.
              </p>
              <p>
                However, class divisions never disappeared. In the 1980s, <strong>Margaret Thatcher&apos;s</strong>
                policies created new divisions. The closure of mines, steelworks, and factories
                devastated working-class communities in the North of England, Scotland, and Wales.
                Unemployment soared. The gap between rich and poor widened.
              </p>
              <p>
                Willy Russell&apos;s <strong>Blood Brothers</strong> dramatises this class divide through the
                story of twins separated at birth: Mickey, raised in a working-class family, and
                Eddie, raised in wealth. Their contrasting fates -- shaped entirely by class, not
                ability -- make Russell&apos;s argument that the system is rigged against the poor.
              </p>
            </div>
          </Section>

          {/* Socialism and Capitalism */}
          <Section id="socialism" title="Socialism vs Capitalism" colour="bg-blue-800">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The twentieth century was defined by the ideological battle between
                <strong> capitalism</strong> (private ownership, free markets, individual enterprise) and
                <strong> socialism</strong> (collective ownership, state intervention, equality).
              </p>
              <p>
                <strong>J.B. Priestley</strong> was a committed socialist. In An Inspector Calls, the
                Birling family represents capitalism at its worst: exploitation of workers, refusal
                of responsibility, obsession with profit and status. The Inspector represents
                Priestley&apos;s socialist message -- that &ldquo;we are members of one body&rdquo; and
                must take collective responsibility for each other.
              </p>
              <p>
                <strong>George Orwell</strong> was also a socialist, but one deeply critical of how
                revolutions can be corrupted. <strong>Animal Farm</strong> is not anti-socialist -- it
                is anti-Stalinist. Orwell shows how the pigs (representing the Communist Party
                leadership) gradually betray the revolution&apos;s ideals, becoming indistinguishable
                from the humans (the capitalist oppressors) they overthrew.
              </p>
            </div>
          </Section>

          {/* Welfare State */}
          <Section id="welfare" title="The Welfare State" colour="bg-green-700">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                After WWII, the Labour government of 1945 created the <strong>welfare state</strong>:
                the NHS (1948), national insurance, council housing, and free secondary education.
                The architect was the <strong>Beveridge Report (1942)</strong>, which identified five
                &ldquo;Giant Evils&rdquo;: want, disease, ignorance, squalor, and idleness.
              </p>
              <p>
                This was a radical transformation. For the first time, the state accepted
                responsibility for its citizens&apos; health, education, and welfare. It was the
                practical embodiment of the Inspector&apos;s message in An Inspector Calls:
                &ldquo;We are responsible for each other.&rdquo;
              </p>
              <p>
                Priestley himself played a role in this transformation. His wartime radio broadcasts
                (the <em>Postscripts</em>, 1940) argued passionately for a fairer post-war society
                and were so popular that Churchill had them taken off the air, fearing their
                political impact.
              </p>
            </div>
          </Section>

          {/* 1980s Britain */}
          <Section id="eighties" title="1980s Britain & Thatcherism" colour="bg-slate-800">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Margaret Thatcher</strong> (Prime Minister 1979-1990) fundamentally reshaped
                Britain. Her philosophy -- often called <strong>Thatcherism</strong> -- emphasised
                individual responsibility, free markets, privatisation of state industries, and
                reducing the power of trade unions.
              </p>
              <p>
                Thatcher famously declared that &ldquo;there is no such thing as society&rdquo; --
                a direct contradiction of Priestley&apos;s message. She argued that people should
                look after themselves and their families, not depend on the state.
              </p>
              <p>
                The impact on working-class communities was devastating. The <strong>miners&apos; strike
                (1984-85)</strong> became a defining conflict. Pit closures, factory shutdowns, and
                mass unemployment ravaged northern England, Scotland, and Wales. Crime, poverty,
                and social deprivation increased in these areas.
              </p>
              <p>
                <strong>Blood Brothers</strong> is set against this backdrop. Russell shows how
                Thatcher&apos;s Britain offered opportunities to the middle class (Eddie goes to
                university, gets a good job) while trapping the working class (Mickey faces
                unemployment, depression, and crime). The musical&apos;s narrator repeatedly asks
                whether class or fate determines destiny.
              </p>
            </div>
          </Section>

          {/* Post-war Society */}
          <Section id="postwar" title="Post-War Disillusionment" colour="bg-muted">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The aftermath of WWII did not bring simple optimism. The revelations of the
                Holocaust, the dropping of atomic bombs on Hiroshima and Nagasaki, and the onset
                of the Cold War created deep anxiety about human nature.
              </p>
              <p>
                The civilised nations of Europe had committed -- or allowed -- unimaginable atrocities.
                The idea that humanity was inherently good, or that civilisation was a reliable guard
                against savagery, was shattered.
              </p>
              <p>
                <strong>William Golding</strong> wrote <strong>Lord of the Flies (1954)</strong> directly
                from this disillusionment. As a schoolteacher who had served in the Royal Navy during
                WWII, Golding had witnessed humanity&apos;s capacity for cruelty firsthand. His novel
                strips away civilisation to reveal the savagery he believed lay beneath -- even in
                English schoolboys, the supposed pinnacle of civilised upbringing.
              </p>
              <p>
                The novel can also be read as a <strong>Cold War allegory</strong>. The boys are
                evacuated because of a nuclear war. Ralph and Jack&apos;s conflict mirrors the
                democratic West vs totalitarian East. The &ldquo;beast&rdquo; represents the
                irrational fears that drive societies toward destruction.
              </p>
            </div>
          </Section>

          {/* Linking Context to Texts */}
          <Section id="linking" title="How to Link Context to Your Texts" badge="Exam skill" colour="bg-accent">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Remember: context is not a bolt-on paragraph. It should be <strong>woven into your
                analysis</strong> of the writer&apos;s methods and message.
              </p>

              <h3 className="text-base font-bold text-foreground pt-2">An Inspector Calls</h3>
              <div className="space-y-3">
                <ContextExample
                  text="An Inspector Calls"
                  point="The 1912 setting creates dramatic irony for the 1945 audience"
                  analysis="Priestley deliberately sets the play in 1912, when the Edwardian upper classes felt invincible. Birling's confident predictions -- 'the Titanic... unsinkable,' 'there isn't a chance of war' -- are devastatingly ironic for a 1945 audience who have lived through two world wars. Priestley uses this dramatic irony to discredit Birling's entire worldview: if he is wrong about war and the Titanic, he is wrong about capitalism and social responsibility too."
                />
                <ContextExample
                  text="An Inspector Calls"
                  point="The Inspector embodies Priestley's socialist message"
                  analysis="Priestley, a committed socialist who campaigned for the welfare state, uses the Inspector as his mouthpiece. The Inspector's final speech -- 'We are members of one body. We are responsible for each other' -- directly echoes the collectivist values that led to the creation of the NHS and welfare state in 1945. Priestley is urging his audience to build the fairer society that the war's sacrifices demanded."
                />
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">Lord of the Flies</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Lord of the Flies"
                  point="The boys' descent reflects post-WWII disillusionment"
                  analysis="Golding, who served in the Royal Navy and witnessed the D-Day landings, rejected the idea that civilisation had triumphed over barbarism. The boys' rapid descent from democratic assembly to tribal violence mirrors how quickly civilised nations turned to genocide and atomic warfare. Simon's murder -- in which all the boys participate -- echoes the collective guilt of societies that allowed atrocities to happen."
                />
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">Animal Farm</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Animal Farm"
                  point="Napoleon represents Stalin's corruption of the revolution"
                  analysis="Orwell, who fought alongside socialists in the Spanish Civil War and witnessed Stalinist betrayal firsthand, uses Napoleon to show how revolutionary leaders become the very tyrants they overthrew. Napoleon's gradual accumulation of privileges -- sleeping in beds, drinking whisky, walking on two legs -- mirrors Stalin's transformation from revolutionary to dictator. The final scene, where the animals cannot tell pigs from humans, encapsulates Orwell's warning that power corrupts absolutely."
                />
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">Blood Brothers</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Blood Brothers"
                  point="The twins' fates reflect Thatcher-era inequality"
                  analysis="Russell sets the second half of Blood Brothers against the backdrop of 1980s Liverpool, where unemployment reached 20% after Thatcher's deindustrialisation policies. Mickey's descent into unemployment, depression, and crime mirrors the real experiences of millions in working-class communities. Eddie's comfortable trajectory -- university, a good job, a nice house -- shows how the system rewards those born into privilege. Russell is arguing that class, not individual effort, determines life outcomes."
                />
              </div>

              <div className="mt-6 rounded-xl border border-accent-100 bg-accent-50/50 p-5">
                <h3 className="text-sm font-bold text-foreground">Sentence starters for context</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Writing in [year], [author] would have been acutely aware that...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Priestley/Golding/Orwell/Russell uses [character/event] to critique...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;The [year] audience would have recognised this as a reference to...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;This reflects the post-war/Thatcher-era belief that...&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/resources/context/elizabethan-jacobean"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground shadow-md transition hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Elizabethan &amp; Jacobean
          </Link>
          <Link
            href="/resources/context/romantic"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            Romantic Era
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
