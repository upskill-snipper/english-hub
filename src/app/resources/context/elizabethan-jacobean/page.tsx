"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-purple-700",
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
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-800">
          {year}
        </span>
        <div className="mt-1 h-full w-px bg-purple-200" />
      </div>
      <p className="pb-6 text-sm text-muted-foreground">{event}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ElizabethanJacobeanContextPage() {
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
            <span className="font-medium text-primary">Elizabethan &amp; Jacobean</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
              1558 -- 1625
            </span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Macbeth</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Romeo &amp; Juliet</span>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">The Tempest</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Elizabethan &amp; Jacobean Context
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Shakespeare wrote during two monarchies: Elizabeth I and James I. Understanding
            the beliefs, fears, and power structures of this period is essential for
            unlocking the deeper meanings of his plays.
          </p>
        </div>

        {/* Timeline */}
        <Section id="timeline" title="Key Timeline" badge="1558-1625" defaultOpen>
          <div className="grid gap-0 sm:grid-cols-2">
            <div>
              <TimelineEvent year="1558" event="Elizabeth I becomes Queen. The Elizabethan era begins -- a golden age of exploration and culture." />
              <TimelineEvent year="1564" event="William Shakespeare is born in Stratford-upon-Avon." />
              <TimelineEvent year="1567" event="The Red Lion, one of London's first purpose-built playhouses, opens." />
              <TimelineEvent year="1587" event="Mary Queen of Scots is executed for plotting against Elizabeth." />
              <TimelineEvent year="1592" event="Shakespeare is established in London as an actor and playwright." />
              <TimelineEvent year="1594" event="Romeo and Juliet is written (approximate date)." />
            </div>
            <div>
              <TimelineEvent year="1599" event="The Globe Theatre is built on the South Bank. Shakespeare is a shareholder." />
              <TimelineEvent year="1603" event="Elizabeth I dies. James VI of Scotland becomes James I of England." />
              <TimelineEvent year="1604" event="James I passes the Witchcraft Act, making it a capital offence." />
              <TimelineEvent year="1605" event="The Gunpowder Plot: Catholic conspirators attempt to blow up Parliament." />
              <TimelineEvent year="1606" event="Macbeth is first performed, likely at Hampton Court for King James." />
              <TimelineEvent year="1611" event="The Tempest is written -- one of Shakespeare's last plays." />
            </div>
          </div>
        </Section>

        <div className="mt-5 space-y-5">
          {/* Great Chain of Being */}
          <Section id="chain" title="The Great Chain of Being" colour="bg-purple-800">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Elizabethans and Jacobeans believed in a <strong>divinely ordained hierarchy</strong> that
                placed everything in the universe in a fixed order: God at the top, followed by
                angels, then the monarch, nobles, gentlemen, commoners, animals, plants, and minerals.
              </p>
              <p>
                This was not just a political idea -- it was a <strong>cosmological belief</strong>.
                Disrupting the Chain was believed to cause chaos throughout nature. When a king was
                murdered, the natural world would respond with storms, darkness, and unnatural events.
              </p>
              <p>
                In <strong>Macbeth</strong>, the murder of King Duncan is immediately followed by unnatural
                occurrences: &ldquo;The night has been unruly&rdquo;, horses eat each other, and
                darkness covers the land. Shakespeare uses this to show that Macbeth has violated
                the natural order, bringing chaos upon Scotland.
              </p>
            </div>
          </Section>

          {/* Divine Right of Kings */}
          <Section id="divine-right" title="The Divine Right of Kings" colour="bg-yellow-700">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The <strong>Divine Right of Kings</strong> was the belief that monarchs were chosen by
                God and answerable only to God. Challenging or killing a king was therefore not
                just treason but <strong>sacrilege</strong> -- a sin against God himself.
              </p>
              <p>
                James I was a passionate advocate of Divine Right. He wrote a treatise called
                <em> The True Law of Free Monarchies</em> (1598) arguing that kings were &ldquo;God&apos;s
                lieutenants upon earth.&rdquo; This made him particularly interested in stories about
                regicide.
              </p>
              <p>
                <strong>Macbeth</strong> dramatises the horror of regicide. Duncan is presented as a saintly,
                divinely appointed king -- &ldquo;his silver skin laced with his golden blood.&rdquo;
                Shakespeare makes clear that killing him brings damnation. This would have
                powerfully reinforced James I&apos;s political message.
              </p>
            </div>
          </Section>

          {/* Witchcraft */}
          <Section id="witchcraft" title="Attitudes to Witchcraft" colour="bg-muted">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Belief in witchcraft was <strong>widespread and deadly serious</strong> in this period.
                Thousands of people (mostly women) were accused, tried, and executed for witchcraft
                across Europe. In England and Scotland, witch trials peaked between 1560 and 1640.
              </p>
              <p>
                <strong>James I</strong> had a personal obsession with witchcraft. He wrote
                <em> Daemonologie</em> (1597), a treatise arguing that witches were real, dangerous,
                and in league with the Devil. He personally interrogated suspected witches in the
                North Berwick trials (1590), where women were accused of trying to sink his ship.
              </p>
              <p>
                In <strong>Macbeth</strong>, the Witches (or &ldquo;Weird Sisters&rdquo;) are ambiguous figures.
                Shakespeare does not make clear whether they control Macbeth or merely reveal his
                existing desires. A Jacobean audience would have found them genuinely terrifying --
                not the Halloween caricatures we might imagine today. Their presence flatters
                James I&apos;s interest in the supernatural while raising questions about fate and free will.
              </p>
            </div>
          </Section>

          {/* Theatre Conventions */}
          <Section id="theatre" title="Theatre Conventions" colour="bg-red-700">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Shakespeare&apos;s theatre was radically different from modern performance. The
                <strong> Globe Theatre</strong> was an open-air, roughly circular building. Performances
                took place in the afternoon using natural light. The audience stood as
                &ldquo;groundlings&rdquo; in the pit or sat in tiered galleries.
              </p>
              <p>
                <strong>All roles were played by men and boys.</strong> Female characters -- Juliet,
                Lady Macbeth, Miranda -- were performed by boy actors. This adds layers of irony
                to scenes about gender and disguise.
              </p>
              <p>
                Theatre was entertainment for <strong>all social classes</strong>. Groundlings paid a penny
                (a working-class wage) while wealthier audience members sat in the galleries.
                Shakespeare wrote for this mixed audience, blending crude humour with sophisticated
                poetry, physical comedy with philosophical depth.
              </p>
              <p>
                Key conventions included <strong>soliloquies</strong> (characters speaking their private
                thoughts aloud), <strong>asides</strong> (brief comments to the audience), and
                <strong> dramatic irony</strong> (where the audience knows more than the characters).
                There was minimal scenery; language created the setting.
              </p>
            </div>
          </Section>

          {/* Gender and Marriage */}
          <Section id="gender" title="Gender & Marriage" colour="bg-rose-700">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Women in Elizabethan and Jacobean England had very limited legal rights. They were
                considered the <strong>property</strong> of their father until marriage, at which point
                they became the property of their husband. The concept of
                <strong> &ldquo;coverture&rdquo;</strong> meant a married woman had no independent legal identity.
              </p>
              <p>
                <strong>Marriage was a financial and political arrangement</strong>, especially among
                the upper classes. Love was a bonus, not a requirement. Fathers chose husbands for
                their daughters based on wealth, status, and alliance. Disobedience was scandalous.
              </p>
              <p>
                In <strong>Romeo and Juliet</strong>, Juliet&apos;s refusal to marry Paris is an act of
                extraordinary defiance. Lord Capulet&apos;s fury -- &ldquo;hang, beg, starve, die in the
                streets&rdquo; -- reflects the real consequences of disobedience. The play dramatises the
                tension between patriarchal authority and individual desire.
              </p>
              <p>
                <strong>Lady Macbeth</strong> transgresses gender norms by urging murder and questioning
                her husband&apos;s masculinity. Her invocation to &ldquo;unsex me here&rdquo; reveals
                the extent to which ambition and violence were seen as exclusively male traits.
                Her eventual madness and suicide can be read as the &ldquo;punishment&rdquo; for
                stepping outside her gendered role.
              </p>
            </div>
          </Section>

          {/* Religion */}
          <Section id="religion" title="Religion & the Reformation" colour="bg-blue-800">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                England underwent a seismic religious upheaval in the sixteenth century. Henry VIII
                broke from the Catholic Church in 1534, establishing the <strong>Church of England</strong>.
                For the next century, England swung between Protestantism and Catholicism depending
                on the monarch.
              </p>
              <p>
                By Elizabeth I&apos;s reign, England was officially Protestant, but many Catholics
                remained. Elizabeth pursued a &ldquo;middle way&rdquo; (<em>via media</em>), but
                Catholics faced fines, imprisonment, and execution if suspected of plotting.
              </p>
              <p>
                <strong>James I</strong> faced the <strong>Gunpowder Plot (1605)</strong>, in which Catholic
                conspirators attempted to blow up Parliament. This deepened anti-Catholic sentiment
                and made loyalty to the Protestant crown a matter of national security.
              </p>
              <p>
                Religious tension permeates Shakespeare&apos;s plays. In <strong>Romeo and Juliet</strong>,
                the religious imagery -- &ldquo;holy shrine,&rdquo; &ldquo;saints,&rdquo; &ldquo;pilgrims&rdquo; --
                reflects the Catholic context of Verona, while Friar Lawrence&apos;s failed intervention
                can be read as a critique of religious meddling. In <strong>Macbeth</strong>, the language
                of damnation and salvation reflects a deeply Christian worldview.
              </p>
            </div>
          </Section>

          {/* Key Figures */}
          <Section id="figures" title="Key Figures" colour="bg-primary">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Elizabeth I (r. 1558-1603)", detail: "The 'Virgin Queen.' Her long, stable reign saw a flowering of English culture, exploration, and national confidence." },
                { name: "James I (r. 1603-1625)", detail: "James VI of Scotland became James I of England, uniting the crowns. Patron of Shakespeare's company (renamed the King's Men). Obsessed with witchcraft and Divine Right." },
                { name: "William Shakespeare", detail: "Playwright, poet, actor, and shareholder in the Globe. Wrote approximately 37 plays between c.1590 and 1613." },
                { name: "Christopher Marlowe", detail: "Shakespeare's great rival. Pioneered blank verse in English drama before his mysterious murder in 1593." },
                { name: "Guy Fawkes", detail: "The most famous of the Gunpowder Plotters (1605). The plot intensified anti-Catholic sentiment and fears of treason." },
                { name: "Mary Queen of Scots", detail: "Catholic cousin of Elizabeth I. Executed in 1587 for plotting to overthrow Elizabeth. Her son became James I." },
              ].map((fig) => (
                <div key={fig.name} className="rounded-lg bg-muted p-4">
                  <h3 className="text-sm font-bold text-foreground">{fig.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{fig.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Linking Context to Texts */}
          <Section id="linking" title="How to Link Context to Your Texts" badge="Exam skill" colour="bg-accent">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The best candidates <strong>embed context into their analysis</strong> rather than
                writing separate &ldquo;context paragraphs.&rdquo; Here are model examples.
              </p>

              <h3 className="text-base font-bold text-foreground pt-2">Macbeth</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Macbeth"
                  point="The Witches reflect Jacobean fears about the supernatural"
                  analysis="Shakespeare opens with the Witches to immediately unsettle the audience. A Jacobean audience -- who believed witchcraft was real and dangerous, thanks in part to James I's own Daemonologie -- would have found this opening genuinely threatening, not theatrical. By associating the Witches with 'fair is foul,' Shakespeare establishes that the natural moral order has been inverted, foreshadowing Macbeth's own moral collapse."
                />
                <ContextExample
                  text="Macbeth"
                  point="Duncan's murder violates the Divine Right of Kings"
                  analysis="When Macbeth kills Duncan, he commits both treason and sacrilege. Shakespeare emphasises Duncan's divine status through religious imagery -- 'his silver skin laced with his golden blood' -- making the murder feel like an attack on God's order. For James I, watching in the audience, this would have reinforced his belief that regicide was the ultimate sin, legitimising his own claim to divine authority."
                />
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">Romeo and Juliet</h3>
              <div className="space-y-3">
                <ContextExample
                  text="Romeo and Juliet"
                  point="The arranged marriage reflects patriarchal control"
                  analysis="Capulet's insistence that Juliet marry Paris reflects the Elizabethan expectation that daughters were property to be traded in marriage. His violent reaction to her refusal -- 'hang, beg, starve, die in the streets' -- reveals the absolute authority fathers held. Shakespeare invites sympathy for Juliet, subtly questioning whether such total parental control is just or tyrannical."
                />
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">The Tempest</h3>
              <div className="space-y-3">
                <ContextExample
                  text="The Tempest"
                  point="Prospero's control of Caliban reflects colonial attitudes"
                  analysis="Prospero's enslavement of Caliban -- the island's original inhabitant -- mirrors the colonial encounters of Shakespeare's era. European explorers were claiming 'new' lands and subjugating indigenous peoples, justifying this through the belief that they were bringing civilisation and Christianity. Prospero's insistence that he 'taught [Caliban] language' echoes this colonial mindset, while Caliban's response -- 'you taught me language, and my profit on't / Is I know how to curse' -- offers a powerful counter-narrative."
                />
              </div>

              <div className="mt-6 rounded-xl border border-accent-100 bg-accent-50/50 p-5">
                <h3 className="text-sm font-bold text-foreground">Sentence starters for context</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;A Jacobean/Elizabethan audience would have understood this as...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Shakespeare uses [character/event] to reflect the contemporary belief that...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;This would have been particularly significant for James I, who...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>&ldquo;Perhaps Shakespeare intended to challenge/reinforce the prevailing attitude that...&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/resources/context/victorian"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground shadow-md transition hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Victorian Era
          </Link>
          <Link
            href="/resources/context/twentieth-century"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            Twentieth Century
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
