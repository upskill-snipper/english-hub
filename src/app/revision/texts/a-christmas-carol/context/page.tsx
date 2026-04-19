'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Landmark,
  Factory,
  Users,
  Sparkles,
  Lightbulb,
  Quote,
  Scale,
  Scroll,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Context data ────────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  icon: typeof Landmark
  iconColour: string
  content: string[]
  keyFacts: string[]
  textLinks: string[]
}

const sections: ContextSection[] = [
  {
    title: 'Victorian England: Social Conditions',
    icon: Landmark,
    iconColour: 'text-clay-600',
    content: [
      'A Christmas Carol was published on 19 December 1843, during a period of extreme economic inequality in Victorian England. The Industrial Revolution had created enormous wealth for factory owners, financiers and the emerging middle class, but it had also driven millions of working-class families into grinding poverty. Cities like London were overcrowded, polluted and disease-ridden. Cholera, typhus and tuberculosis were common. The gap between rich and poor was vast and growing, and many wealthy Victorians regarded poverty as a moral failing rather than an economic injustice.',
      'Average life expectancy in industrial cities was shockingly low -- around 26 years in Liverpool and Manchester, compared to 45 in rural areas. Child mortality was high: roughly one in five children in London died before their fifth birthday. The working poor lived in cramped, unsanitary conditions, often with entire families sharing a single room. Clean water was scarce, sewage ran through the streets, and the air was thick with factory smoke.',
      'London in the 1840s was a city of extremes. Grand townhouses and gentlemen\'s clubs sat alongside slums, gin palaces and begging children. Dickens walked these streets obsessively, often covering twenty miles in a night, and his fiction draws directly on what he saw. A Christmas Carol is set in this London -- its fog, its cold, its dark alleyways, and its sharp division between those who feast and those who starve.',
    ],
    keyFacts: [
      'Britain\'s population doubled between 1801 and 1851 (from 10.5 million to 21 million), driven largely by urbanisation.',
      'By 1843, over 50% of the British population lived in cities for the first time in history.',
      'The average working-class family spent 70-80% of their income on food alone.',
      'There was no compulsory education, no National Health Service, and no unemployment insurance.',
    ],
    textLinks: [
      'Bob Cratchit\'s fifteen shillings a week places him among the working poor. His freezing office and one-coal fire reflect real workplace conditions.',
      'Tiny Tim\'s disability and vulnerability represent the thousands of children who suffered and died because society would not care for them.',
      'Scrooge\'s cold, dark counting-house mirrors the real conditions of Victorian offices and warehouses.',
    ],
  },
  {
    title: 'The Poor Law and Workhouses',
    icon: Scale,
    iconColour: 'text-blue-400',
    content: [
      'The Poor Law Amendment Act of 1834 was one of the most controversial pieces of legislation in Victorian England. It replaced the old system of parish-level poor relief with a centralised national system based on workhouses. The principle behind the new law was "less eligibility" -- conditions inside the workhouse must be worse than the worst conditions outside it, so that only the truly desperate would seek help. The aim was to discourage what the authorities called "pauperism" -- dependency on public assistance.',
      'Workhouses were deliberately designed to be unpleasant. Families were separated upon entry: husbands from wives, parents from children. Inmates wore uniforms, ate minimal food, and were required to perform grinding, repetitive work such as breaking stones or picking oakum (unravelling old rope). The regime was intended to be humiliating. The message was clear: being poor was shameful, and the workhouse was a punishment for failure.',
      'When Scrooge says "Are there no prisons? Are there no workhouses?", he is echoing the prevailing attitude of many wealthy Victorians. The workhouse and the prison were considered sufficient provision for the poor. Those who refused to enter were deemed responsible for their own suffering. Scrooge\'s suggestion that the poor should die to "decrease the surplus population" reflects the influence of Thomas Malthus, who argued that poverty and famine were natural checks on overpopulation and that charity only made the problem worse.',
    ],
    keyFacts: [
      'The 1834 Poor Law created a national network of workhouses, managed by elected Boards of Guardians.',
      'Workhouse conditions were deliberately harsh to deter applications -- this was official policy, not neglect.',
      'Families were separated in the workhouse. Married couples could be kept apart for the duration of their stay.',
      'In 1843, the year of publication, approximately 200,000 people lived in English workhouses.',
      'Thomas Malthus (1766-1834) argued in An Essay on the Principle of Population that helping the poor would only increase their numbers and worsen their suffering.',
    ],
    textLinks: [
      'Scrooge\'s "Are there no prisons? Are there no workhouses?" directly references the institutions created by the 1834 Act.',
      '"Decrease the surplus population" echoes Malthusian population theory. The Ghost of Christmas Present throws this line back at Scrooge in Stave 3.',
      'Marley\'s anguished cry that "Mankind was my business" is a direct rebuttal to the utilitarian argument that charity was not an individual\'s concern.',
    ],
  },
  {
    title: 'Dickens\' Personal Experience with Poverty',
    icon: Users,
    iconColour: 'text-violet-400',
    content: [
      'Charles Dickens had personal experience of poverty and its humiliations that shaped his entire literary career. When he was twelve years old, his father John Dickens was imprisoned in the Marshalsea debtors\' prison in Southwark, London. Unable to pay his debts, John Dickens was confined there with most of his family while young Charles was sent to work at Warren\'s Blacking Factory, pasting labels on bottles of boot polish for six shillings a week.',
      'The blacking factory experience was traumatic and formative. Dickens later described it as a period of overwhelming shame and abandonment. He worked alongside other boys in grim conditions, his education interrupted, his expectations of a middle-class life apparently destroyed. Even after his father was released (through a small inheritance), the memory haunted Dickens for the rest of his life. He rarely spoke of it even to his closest friends, and only a few people knew about it during his lifetime.',
      'This personal experience gave Dickens a lifelong empathy with the poor and a particular fury at those who dismissed their suffering as laziness or moral weakness. He knew from his own experience that poverty could happen to anyone, that it was not a matter of character but of circumstance, and that children were its most innocent victims. Every child character in his fiction -- Oliver Twist, David Copperfield, Tiny Tim -- carries something of the twelve-year-old boy in the blacking factory.',
      'In 1843, the year he wrote A Christmas Carol, Dickens visited the Field Lane Ragged School in Clerkenwell, London. Ragged schools were charitable institutions that provided free education to the poorest children -- children too destitute even for the workhouse schools. What Dickens saw appalled him: filthy, starving, uneducated children living in conditions of extreme deprivation. He also read the Second Report of the Children\'s Employment Commission, a government document detailing the horrific conditions of child labour in mines and factories. These experiences directly inspired the novella.',
    ],
    keyFacts: [
      'Dickens was 12 when his father was imprisoned for debt. He worked at Warren\'s Blacking Factory for several months.',
      'He earned six shillings a week pasting labels -- comparable to Bob Cratchit\'s meagre earnings.',
      'Dickens kept his blacking factory experience secret for most of his life. His friend John Forster published the details only after Dickens\'s death.',
      'In 1843, Dickens visited Field Lane Ragged School and was deeply affected by what he saw.',
      'He originally planned to write a political pamphlet called "An Appeal to the People of England on Behalf of the Poor Man\'s Child" but chose fiction instead.',
    ],
    textLinks: [
      'The lonely schoolboy left behind at Christmas in Stave 2 draws on Dickens\'s own feelings of abandonment and isolation as a child.',
      'Tiny Tim\'s vulnerability reflects the real children Dickens saw at the ragged schools -- children whose lives depended on whether society would help them.',
      'The children Ignorance and Want were directly inspired by the children Dickens saw at Field Lane and the conditions described in the 1843 child labour report.',
    ],
  },
  {
    title: 'Publication Context: 1843',
    icon: Scroll,
    iconColour: 'text-emerald-400',
    content: [
      'Dickens wrote A Christmas Carol in just six weeks, from mid-October to late November 1843. He was under financial pressure -- his previous novel, Martin Chuzzlewit, was selling poorly, and he had a growing family to support. He also felt an urgent need to respond to the social conditions he had witnessed at the ragged schools and read about in the child labour report.',
      'He originally planned to write a political pamphlet, but he realised that a story would reach more people and move more hearts than an argument. As he later wrote, "I have a great faith in the poor; to the best of my ability I always endeavour to present them in a favourable light to the rich." Fiction, he believed, could create empathy in ways that statistics and arguments could not.',
      'Dickens insisted on controlling every aspect of the book\'s production. He chose the binding (salmon and gold cloth), the illustrations (by John Leech), and the gilt-edged pages. He also insisted on a low price -- five shillings -- so that ordinary middle-class readers could afford it. This meant his profit margin was small, which became a source of frustration, but it ensured the book\'s wide distribution.',
      'The first edition of 6,000 copies sold out by Christmas Eve 1843. By the end of 1844, the book had gone through thirteen editions. Reviews were overwhelmingly positive. William Makepeace Thackeray called it "a national benefit, and to every man and woman who reads it a personal kindness." The novella was immediately adapted for the stage, and unauthorised dramatic versions appeared within weeks of publication.',
    ],
    keyFacts: [
      'Written in six weeks (mid-October to late November 1843).',
      'First edition: 6,000 copies, priced at five shillings. Sold out by Christmas Eve.',
      'Thirteen editions published by the end of 1844.',
      'Dickens chose every detail of the book\'s physical design, including salmon-and-gold cloth binding.',
      'Despite huge sales, Dickens earned only 230 pounds from the first edition due to his insistence on expensive production and a low cover price.',
      'Unauthorised stage adaptations appeared within weeks. Dickens sued but won only minimal damages.',
    ],
    textLinks: [
      'The novella\'s compact five-stave structure reflects its rapid composition -- Dickens wrote it with urgency and energy.',
      'The conversational narrative voice ("I am going to relate") reflects Dickens\'s intention to create a spoken story, as if told by a fireside at Christmas.',
      'The five-shilling price point reflects Dickens\'s social mission: he wanted the book read by as many people as possible, not just the wealthy.',
    ],
  },
  {
    title: 'The Industrial Revolution',
    icon: Factory,
    iconColour: 'text-clay-600',
    content: [
      'The Industrial Revolution transformed Britain between roughly 1760 and 1840, turning it from a largely agricultural economy into the world\'s first industrial nation. Factories, railways, and new technologies created unprecedented wealth, but they also created unprecedented misery. Workers -- including children as young as five -- laboured for twelve to sixteen hours a day in dangerous conditions. There were no safety regulations, no sick pay, no holiday entitlement, and no minimum wage.',
      'The factory system changed the relationship between employer and employee. In the pre-industrial economy, an employer like Fezziwig might know his workers personally and take a paternal interest in their welfare. In the new industrial economy, employers like Scrooge saw workers as economic units -- costs to be minimised. Bob Cratchit\'s fifteen shillings a week and freezing office reflect the reality of millions of workers who had no bargaining power and no legal protection.',
      'The concentration of wealth in the hands of factory owners and financiers was extreme. The richest 10% of the population controlled over 70% of national wealth. Meanwhile, the working poor lived in slums, ate adulterated food, and died young. The "Hungry Forties" -- the decade in which A Christmas Carol was written -- saw widespread unemployment, food riots, and the rise of the Chartist movement, which demanded democratic reform and workers\' rights.',
    ],
    keyFacts: [
      'Children as young as 5 worked in factories and mines. The 1842 Mines Act banned underground work for women and children under 10.',
      'The Factory Act of 1833 limited children aged 9-13 to 8 hours of work per day. Children under 9 were banned from factories (but not other industries).',
      'Average working hours: 12-16 hours per day, 6 days a week.',
      'The 1840s were known as the "Hungry Forties" due to widespread unemployment and poverty.',
      'The Chartist movement (1838-1857) demanded universal suffrage and workers\' rights but was repeatedly suppressed.',
    ],
    textLinks: [
      'Fezziwig represents the pre-industrial employer who knew his workers personally. Scrooge represents the new industrial employer who sees workers only as costs.',
      'Bob Cratchit\'s working conditions -- the tiny fire, the freezing office, the exploitative wage -- reflect real Victorian employment practices.',
      'Dickens\'s critique of Scrooge is a critique of laissez-faire capitalism: the idea that employers owe nothing to their workers beyond a wage.',
    ],
  },
  {
    title: 'Class System and Philanthropy',
    icon: Users,
    iconColour: 'text-teal-400',
    content: [
      'Victorian society was rigidly stratified by class. The aristocracy and gentry owned land. The growing middle class -- merchants, professionals, factory owners -- were accumulating wealth and social influence. The working class -- labourers, servants, factory workers -- had few rights and little economic security. Below them were the "undeserving poor," a category used to distinguish those deemed morally worthy of help from those judged responsible for their own misfortune.',
      'Philanthropy -- charitable giving by the wealthy -- was a major feature of Victorian life. Wealthy individuals and families funded hospitals, schools, orphanages, and missionary societies. But philanthropy was often paternalistic and conditional. It was given on the understanding that the poor would be grateful, deferential, and morally reformed. Many Victorians believed that indiscriminate charity encouraged laziness and dependency -- an attitude that Scrooge embodies when he asks why he should donate when prisons and workhouses already exist.',
      'Dickens occupied an unusual position in the class system. He was born into the lower middle class, experienced genuine poverty during his father\'s imprisonment, and rose to become one of the wealthiest and most famous writers in England. He understood both poverty and wealth from the inside. His fiction consistently argues that moral worth has nothing to do with social class -- the Cratchits are morally superior to Scrooge despite (or because of) their poverty.',
    ],
    keyFacts: [
      'The concept of the "deserving" vs "undeserving" poor was central to Victorian attitudes toward charity.',
      'Charitable giving was often conditional: recipients were expected to demonstrate moral reform (church attendance, temperance, hard work).',
      'Dickens himself was involved in numerous charitable causes, including the founding of Urania Cottage, a home for "fallen women."',
      'The charity collectors in Stave 1 represent real organisations that operated in Victorian London, collecting door-to-door for the poor.',
    ],
    textLinks: [
      'The charity collectors in Stave 1 represent Victorian philanthropy. Scrooge\'s dismissal of them represents the refusal to engage in personal charity.',
      'The Cratchits\' moral superiority despite their poverty challenges the Victorian assumption that class determines character.',
      'Fred\'s argument that Christmas is "the only time... when men and women seem by one consent to open their shut-up hearts freely" advocates for universal, unconditional generosity.',
    ],
  },
  {
    title: 'Reception and Impact of the Novella',
    icon: Sparkles,
    iconColour: 'text-pink-400',
    content: [
      'A Christmas Carol was an immediate and enormous success. The first edition sold out by Christmas Eve 1843, and the book went through thirteen editions in its first year. Critics praised both its literary quality and its moral message. William Makepeace Thackeray, one of Dickens\'s greatest literary rivals, called it "a national benefit, and to every man and woman who reads it a personal kindness." The Scottish writer Margaret Oliphant described it as a work that "seized hold of the public mind."',
      'The novella had a measurable impact on charitable giving. There are contemporary accounts of factory owners who gave their workers extra time off after reading it, and of individuals who increased their charitable donations. While these anecdotes should not be exaggerated, they show that the novella genuinely functioned as the moral intervention Dickens intended. It changed how people thought about their obligations to the poor, even if only temporarily.',
      'A Christmas Carol is widely credited with helping to shape the modern celebration of Christmas in Britain and beyond. Before Dickens, Christmas was not the major cultural event it became in the mid-nineteenth century. Traditions like family gatherings, feasting, charitable giving, and the general spirit of goodwill were evolving during this period, and Dickens\'s novella helped define and popularise them. The phrase "Merry Christmas" became more common after the book\'s publication. Dickens did not invent Christmas, but he gave it a moral vocabulary that persists to this day.',
      'The novella has never been out of print since 1843. It has been adapted into hundreds of films, television specials, stage productions, radio dramas, and musicals. Characters like Scrooge, Tiny Tim, and the three Ghosts have entered the cultural vocabulary as universal archetypes. The word "Scrooge" itself has become a common noun meaning a miserly person. Dickens\'s creation has outlived its immediate social context to become one of the most enduring stories in English literature.',
    ],
    keyFacts: [
      'First edition: 6,000 copies sold out by Christmas Eve 1843.',
      'Thackeray called it "a national benefit."',
      'The novella helped popularise many Christmas traditions, including family gatherings and charitable giving at Christmas.',
      'The word "Scrooge" entered the English language as a synonym for miser.',
      'It has been continuously in print since 1843 -- over 180 years.',
      'Hundreds of film, stage, and television adaptations have been produced, making it one of the most adapted stories in English literature.',
    ],
    textLinks: [
      'The novella\'s lasting impact proves Dickens was right: a story can change hearts more effectively than a pamphlet or a political argument.',
      'Its influence on Christmas traditions connects to the theme of Christmas spirit as a permanent moral principle, not just a festive custom.',
      'The universality of the story -- adaptable across cultures and centuries -- suggests that its themes (redemption, generosity, social responsibility) are not limited to Victorian England.',
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ContextPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "A Christmas Carol", url: "https://theenglishhub.app/revision/texts/a-christmas-carol" },
          { name: "Context", url: "https://theenglishhub.app/revision/texts/a-christmas-carol/context" },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-teal-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/a-christmas-carol" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to A Christmas Carol
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Landmark className="mr-1 size-3 text-teal-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Historical and Social Context
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            A Christmas Carol by Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Understanding the world Dickens was writing about -- and writing FOR.
            Seven sections covering Victorian social conditions, the Poor Law,
            Dickens&apos;s own experience of poverty, publication context, the
            Industrial Revolution, the class system, and the novella&apos;s
            reception and lasting impact.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">
              Jump to a Section
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {sections.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.title}
                    href={`#${s.title.toLowerCase().replace(/[\s:&']+/g, '-')}`}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className={`size-4 ${s.iconColour}`} />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 truncate">
                      {s.title}
                    </p>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Context sections */}
      {sections.map((section) => {
        const Icon = section.icon
        return (
          <section
            key={section.title}
            id={section.title.toLowerCase().replace(/[\s:&']+/g, '-')}
            className="scroll-mt-8 space-y-5"
          >
            {/* Section header */}
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className={`size-5 ${section.iconColour}`} />
              </div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {section.title}
              </h2>
            </div>

            {/* Content paragraphs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <BookOpen className="size-4 text-blue-400" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-body-sm text-muted-foreground">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </CardContent>
            </Card>

            {/* Key facts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Lightbulb className="size-4 text-clay-600" />
                  Key Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {section.keyFacts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary/60" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Links to the text */}
            <Card className="bg-primary/[0.03] border-primary/10">
              <CardContent className="p-5 sm:p-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Quote className="size-4 text-violet-400" />
                  Links to the Text
                </h4>
                <ul className="list-disc space-y-2 pl-4 text-body-sm text-muted-foreground">
                  {section.textLinks.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )
      })}

      {/* Using context in exams */}
      <section className="scroll-mt-8 space-y-5">
        <div className="flex items-center gap-4 border-b border-border/60 pb-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Lightbulb className="size-5 text-clay-600" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            How to Use Context in Your Exam
          </h2>
        </div>

        <Card>
          <CardContent className="space-y-4 p-5 sm:p-6 text-body-sm text-muted-foreground">
            <p>
              Context is worth marks in every GCSE English Literature exam, but
              it must be embedded in your argument -- not bolted on as a separate
              paragraph. Here are the key principles:
            </p>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong className="text-foreground">Integrate, don&apos;t isolate.</strong>{' '}
                Weave context into your analysis rather than writing a standalone
                &ldquo;context paragraph.&rdquo; For example: &ldquo;Scrooge&apos;s
                suggestion that the poor should &lsquo;decrease the surplus
                population&rsquo; echoes the Malthusian economics that Dickens
                despised, revealing how deeply entrenched these attitudes
                were.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">Focus on Dickens&apos;s purpose.</strong>{' '}
                Always ask: WHY did Dickens include this? What was he trying to
                make his readers think, feel, or do? Context explains purpose.
              </li>
              <li>
                <strong className="text-foreground">Use specific details.</strong>{' '}
                &ldquo;Victorian times were hard for the poor&rdquo; is vague.
                &ldquo;The 1834 Poor Law created workhouses designed to make
                poverty as unpleasant as possible&rdquo; is specific and
                impressive.
              </li>
              <li>
                <strong className="text-foreground">Link context to technique.</strong>{' '}
                The strongest answers connect what Dickens is saying (context) to
                HOW he says it (technique). For example: &ldquo;Dickens uses the
                allegory of Ignorance and Want -- inspired by his visit to the
                Field Lane ragged school -- to turn social statistics into
                a visceral, supernatural warning.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">Remember the publication context.</strong>{' '}
                Dickens wrote A Christmas Carol to be read at Christmas 1843, by
                middle-class readers who could afford five shillings. His
                audience is crucial: he is trying to persuade the wealthy to
                change, not to comfort the poor.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
