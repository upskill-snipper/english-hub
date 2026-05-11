'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Calendar, Clock, Lightbulb, Sparkles } from 'lucide-react'

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
    title: '1950s Red Hook, Brooklyn',
    body: [
      'Red Hook was a dockside neighbourhood on the western edge of Brooklyn, dominated by the shipping industry and its longshoremen. In the 1950s it was a tight-knit, working-class, predominantly Italian-American community where families had lived for generations and where the rhythms of daily life were shaped by the waterfront.',
      'The docks were controlled by powerful unions, and work was distributed through a "shape-up" system where men gathered each morning hoping to be selected for the day. This created both solidarity and competition. Corruption was endemic \u2014 the waterfront was controlled partly by organised crime \u2014 and loyalty within the community was a matter of survival as well as honour.',
      'Housing was cramped, families lived on top of each other and privacy was rare. Eddie\u2019s apartment, where much of the action takes place, is a pressure cooker: small enough that every emotion is visible and every conversation audible. Miller uses the physical setting to create the claustrophobic intensity the tragedy requires.',
    ],
    keyPoint:
      'Red Hook is not just a setting but a character. The community\u2019s unwritten codes of loyalty and silence \u2014 particularly around illegal immigration \u2014 are what Eddie violates when he makes his phone call. Miller uses the neighbourhood to show that justice operates differently in close communities than it does in courtrooms.',
    examLink:
      'Name Red Hook and describe it specifically. Examiners reward candidates who treat the setting as integral to the play\u2019s themes, not just background scenery. Connect the physical claustrophobia of the apartment to Eddie\u2019s psychological claustrophobia.',
  },
  {
    title: 'Italian Immigration to America',
    body: [
      'Italian immigration to America peaked between 1880 and 1920, when millions of people left southern Italy and Sicily \u2014 regions devastated by poverty, malaria and political instability \u2014 in search of work. By the 1950s, established Italian-American communities existed in every major American city, with Brooklyn\u2019s being among the largest and most cohesive.',
      'Illegal immigration from Italy continued after the formal quota systems of the 1920s and the Immigration and Nationality Act of 1952 restricted legal entry. Immigrants were smuggled into port cities and absorbed into existing communities. Harbouring illegals was common and openly tolerated, provided the community code of silence was maintained.',
      'The code of omerta \u2014 silence \u2014 was central to the culture Marco and Eddie share. Informing to the authorities was considered the worst possible betrayal: it endangered not just the individual but the entire network of families who depended on each other. Eddie\u2019s phone call violates this code absolutely, and the community\u2019s response \u2014 shunning, accusation, violence \u2014 is predictable within the cultural framework Miller establishes.',
    ],
    keyPoint:
      'The play\u2019s immigration context explains why Eddie\u2019s phone call is the unforgivable sin. In a community built on mutual protection of illegal immigrants, informing is not just a personal betrayal but an attack on the collective. Miller uses this to give Eddie\u2019s action the weight of a taboo violation.',
    examLink:
      'Reference the code of omerta by name. Examiners value candidates who demonstrate understanding of the specific cultural values that Eddie violates, not just a general sense that "informing is wrong."',
  },
  {
    title: 'Waterfront Workers and Longshoremen',
    body: [
      'The longshoremen of Red Hook loaded and unloaded cargo ships by hand. The work was physically brutal, poorly paid and irregular. Men were hired by the day through the "shape-up" \u2014 a system in which a hiring boss selected workers from a crowd each morning. Those not chosen went home with nothing.',
      'This system bred both solidarity and exploitation. Workers depended on one another and on the goodwill of the hiring bosses, who were often connected to organised crime. The waterfront was investigated by the New York State Crime Commission in 1951, and journalist Malcolm Johnson\u2019s Pulitzer Prize-winning series "Crime on the Waterfront" (1948) exposed the corruption that dominated dock labour.',
      'Elia Kazan\u2019s film On the Waterfront (1954) dramatised the same milieu. Kazan, who had named names before HUAC, presented informing as heroic. Miller, who refused to name names, wrote A View from the Bridge partly as a response \u2014 showing the devastating consequences of betrayal within a working community.',
    ],
    keyPoint:
      'The waterfront is not just Eddie\u2019s workplace; it is the economic engine that sustains the community\u2019s code of honour. The precariousness of dock work \u2014 where a man\u2019s livelihood depends on community trust \u2014 is what makes Eddie\u2019s betrayal so catastrophic.',
    examLink:
      'Reference the shape-up system and waterfront corruption. This level of specific detail demonstrates that you understand the economic pressures that shape the characters\u2019 moral choices.',
  },
  {
    title: 'Arthur Miller\u2019s Background',
    body: [
      'Arthur Miller (1915\u20132005) was the son of Polish-Jewish immigrants and grew up in Brooklyn during the Depression. His family\u2019s experience of economic hardship and social marginality shaped his lifelong commitment to writing about ordinary people with dignity and seriousness.',
      'Before A View from the Bridge, Miller had already established himself as America\u2019s foremost dramatist with Death of a Salesman (1949), which depicted the destruction of Willy Loman by the false promises of the American Dream, and The Crucible (1953), which used the Salem witch trials as an allegory for McCarthyism. Both plays share with A View from the Bridge a concern with ordinary individuals crushed by social forces they cannot control.',
      'Miller heard the story that became A View from the Bridge from a lawyer friend who worked in the Red Hook docks. The real incident involved a longshoreman who informed on two of his wife\u2019s relatives because one of them was having a relationship with his niece. Miller was haunted by the story and wrote the first version as a one-act play in 1955, before expanding it to two acts in 1956.',
      'Miller\u2019s artistic vision was shaped by his belief that tragedy is not the exclusive property of kings and nobles. He argued in his 1949 essay "Tragedy and the Common Man" that ordinary people can achieve tragic stature when they are willing to lay down their lives rather than surrender their sense of personal dignity. Eddie Carbone is the fullest expression of this argument.',
    ],
    keyPoint:
      'Miller\u2019s background explains why he insists on Eddie\u2019s dignity even as he condemns Eddie\u2019s actions. The play is an argument that working-class lives contain the same moral complexity as royal ones, and that the waterfront deserves the same theatrical gravity as the palace.',
    examLink:
      'Reference "Tragedy and the Common Man" by name. Examiners value candidates who can discuss Miller\u2019s theoretical commitment to democratic tragedy and who connect it to the specific choices he makes in the play.',
  },
  {
    title: 'Greek Tragedy Influences',
    body: [
      'Miller consciously modelled A View from the Bridge on Greek tragedy. Alfieri\u2019s opening monologue reaches back to Roman times and explicitly invokes the classical sense of fate. The play\u2019s tight structure \u2014 a single main setting, a compressed timeline, an inevitable ending \u2014 mirrors the unities of time, place and action that Aristotle prescribed for tragedy.',
      'In Greek tragedy, the protagonist is a figure of stature who is destroyed by a flaw he cannot see: hubris (excessive pride), hamartia (a fatal error of judgment) or ate (divinely sent blindness). Eddie fits all three: his pride prevents him from seeing his own desires, his error is the phone call, and his blindness to his feelings is the engine of his destruction.',
      'Alfieri functions as the chorus of Greek drama: a commentator who stands outside the action, addresses the audience directly and provides the moral framework within which the tragedy is understood. His inability to prevent the catastrophe is central to the form \u2014 the chorus sees everything and changes nothing, forcing the audience to ask why tragedy happens rather than whether it can be stopped.',
      'The play\u2019s ending \u2014 Eddie\u2019s death at Marco\u2019s hands \u2014 echoes the violence of Greek tragedy, where the protagonist\u2019s destruction is both punishment and revelation. Miller insists that working-class characters deserve the same tragic dignity that Sophocles gave to kings.',
    ],
    keyPoint:
      'The Greek tragedy structure gives the play its formal power. Without it, Eddie\u2019s story would be a domestic dispute. With it, his story becomes universal: a man destroyed by feelings he cannot name, in a world that offers no mercy for self-ignorance.',
    examLink:
      'Reference specific Greek tragedy conventions: the chorus (Alfieri), the tragic flaw (Eddie\u2019s blindness), the unities (time, place, action). Examiners reward candidates who show how Miller adapts classical form to a modern working-class setting.',
  },
  {
    title: 'McCarthyism and "Naming Names"',
    body: [
      'The House Un-American Activities Committee (HUAC) was established in 1938 but reached its peak influence in the late 1940s and 1950s, when Senator Joseph McCarthy led a campaign to identify and blacklist suspected Communists in American public life. Artists, writers, filmmakers and academics were called before the committee and pressured to name colleagues who had attended Communist Party meetings.',
      'Arthur Miller was called before HUAC in 1956 \u2014 the same year the revised version of A View from the Bridge was published. He refused to name names and was found in contempt of Congress. Several of his friends and colleagues, including the director Elia Kazan, did cooperate with the committee, and the resulting betrayals destroyed friendships and careers.',
      'The parallel with Eddie\u2019s phone call is unmistakable. Both acts involve informing on people to a government agency, both destroy relationships and communities, and both raise the question of whether any principle can justify betraying the people who trust you. Miller said he did not write the play as a direct allegory of McCarthyism, but the connections are too precise to be accidental.',
    ],
    keyPoint:
      'McCarthyism gives the play its political urgency. Eddie\u2019s phone call is not just a plot device but a dramatisation of the act that was tearing American intellectual life apart in the 1950s. Miller uses a working-class immigrant story to address a middle-class political crisis.',
    examLink:
      'Always link Eddie\u2019s phone call to McCarthyism. Examiners expect this contextual connection. Name HUAC, explain what "naming names" meant, and show how Miller uses Eddie\u2019s betrayal to dramatise the moral costs of informing.',
  },
  {
    title: 'Codes of Honour in Immigrant Communities',
    body: [
      'The Italian-American community in Red Hook operated according to an unwritten code of honour that predated American law. This code prioritised loyalty to family and community above obedience to the state. It demanded that disputes be settled internally, that illegal immigrants be sheltered without question, and that no member of the community ever cooperate with outside authorities.',
      'This code has its roots in southern Italian and Sicilian culture, where centuries of foreign domination \u2014 by Spain, France, Austria and the Bourbon monarchy \u2014 had created a deep distrust of government. For many immigrants, the state was not a protector but an oppressor, and the only reliable source of justice was the community itself.',
      'Eddie\u2019s phone call to Immigration is a violation of the deepest principle of this code. His punishment \u2014 public shaming, loss of his name, and ultimately death \u2014 is the community\u2019s enforcement mechanism. Marco\u2019s accusation "That one! He killed my children!" is not just personal anger but a formal denunciation within the honour system.',
    ],
    keyPoint:
      'The honour code is the moral framework within which Eddie\u2019s tragedy operates. He is destroyed not by American law but by the older, stricter code of the community he has betrayed. Miller shows that immigrant communities create their own systems of justice, which can be more absolute than any courtroom.',
    examLink:
      'Discuss the honour code as a system with specific rules and consequences. Avoid treating it as simply "old-fashioned" \u2014 show that it is a rational response to historical circumstances of oppression and distrust of the state.',
  },
  {
    title: 'The American Dream',
    body: [
      'The American Dream \u2014 the belief that hard work and determination can bring prosperity, freedom and social mobility \u2014 is the engine that drives immigration in the play. Marco and Rodolpho come to America not to escape political persecution but to earn money and build better lives: Marco to feed his family in Italy, Rodolpho to reinvent himself as an American.',
      'Eddie himself is a product of the Dream. He has achieved a modest version of it: steady work, a home, a family. But his version of the Dream is threatened by Catherine\u2019s desire for independence and Rodolpho\u2019s ambition. Eddie\u2019s tragedy is partly the tragedy of a man whose limited Dream \u2014 control over his household \u2014 is being outgrown by the people he loves.',
      'Miller complicates the Dream by showing its costs. Marco\u2019s Dream requires separation from his wife and children. Rodolpho\u2019s Dream requires him to endure Eddie\u2019s contempt. Eddie\u2019s Dream requires the submission of Catherine. The play suggests that the American Dream, while powerful, exacts a price from everyone who pursues it \u2014 and that the price is often paid by the most vulnerable.',
    ],
    keyPoint:
      'The American Dream connects every character in the play. Each pursues a version of it, and each pays a different price. Miller does not reject the Dream outright, but he shows that it operates within structures of power, gender and law that determine who benefits and who suffers.',
    examLink:
      'When discussing the American Dream, be specific about which version each character pursues. Marco\u2019s Dream is economic survival; Rodolpho\u2019s is self-transformation; Eddie\u2019s is domestic control. This specificity earns higher marks than generalised references to "the Dream."',
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
    year: '1880\u20131920',
    event: 'Peak Italian immigration to America',
    relevance: 'Establishes the community Eddie belongs to and the cultural codes he violates',
  },
  {
    year: '1915',
    event: 'Arthur Miller born in Harlem, New York',
    relevance: 'Son of Polish-Jewish immigrants; shaped by experience of marginality',
  },
  {
    year: '1929',
    event: 'Wall Street Crash and Great Depression',
    relevance: 'Miller\u2019s family loses wealth; drives his commitment to working-class stories',
  },
  {
    year: '1938',
    event: 'HUAC established',
    relevance:
      'Beginning of the political witch-hunt that becomes central to the play\u2019s context',
  },
  {
    year: '1947',
    event: 'Death of a Salesman premieres',
    relevance: 'Miller establishes himself as dramatist of the common man',
  },
  {
    year: '1948',
    event: '"Crime on the Waterfront" published',
    relevance: 'Exposes corruption on the docks that form the play\u2019s setting',
  },
  {
    year: '1950\u201354',
    event: 'McCarthy era at its peak',
    relevance: '"Naming names" becomes the defining moral crisis of Miller\u2019s generation',
  },
  {
    year: '1952',
    event: 'Immigration and Nationality Act',
    relevance: 'Tightens immigration quotas; illegal entry continues via communities like Red Hook',
  },
  {
    year: '1953',
    event: 'The Crucible premieres',
    relevance: 'Miller uses Salem as allegory for McCarthyism; explores betrayal and naming names',
  },
  {
    year: '1954',
    event: 'On the Waterfront released',
    relevance:
      'Kazan\u2019s film presents informing as heroic; Miller writes his play partly in response',
  },
  {
    year: '1955',
    event: 'A View from the Bridge (one-act) premieres',
    relevance: 'First version performed in New York as part of a double bill',
  },
  {
    year: '1956',
    event: 'Miller called before HUAC; refuses to name names',
    relevance: 'Found in contempt of Congress; personal experience of the play\u2019s themes',
  },
  {
    year: '1956',
    event: 'Two-act version published',
    relevance: 'Expanded version allows fuller exploration of Eddie\u2019s psychology',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function AVFTBContextPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'A View from the Bridge',
            url: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/context',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="A View from the Bridge" textType="play" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/a-view-from-the-bridge"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to A View from the Bridge
          </Link>

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
            A View from the Bridge &mdash; Context
          </h1>
          <p className="mt-2 text-lg text-ink-500">by Arthur Miller &mdash; 1955/1956</p>
          <p className="mt-4 max-w-2xl text-ink-500">
            The essential background you need for the exam: 1950s Red Hook Brooklyn, Italian
            immigration, waterfront culture, Greek tragedy, McCarthyism, codes of honour and the
            American Dream.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">AO3 &mdash; What examiners want</p>
              <p>
                AO3 rewards you for showing how <strong>context shapes meaning</strong>. Do not
                simply list historical facts &mdash; explain how the 1950s setting, Italian
                immigration and McCarthyism affect the audience&rsquo;s response to the play. The
                best answers explain <em>why</em> Miller made specific choices, not just{' '}
                <em>when</em> things happened.
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

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">Continue studying</h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, and key quotes for A View from the Bridge.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/a-view-from-the-bridge/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </Link>
            <Link
              href="/revision/texts/a-view-from-the-bridge/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </Link>
            <Link
              href="/revision/texts/a-view-from-the-bridge/key-quotes"
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
          educational study. <em>A View from the Bridge</em> &copy; Arthur Miller Estate. Full text
          available from your school or local library.
        </p>
      </div>
    </div>
  )
}
