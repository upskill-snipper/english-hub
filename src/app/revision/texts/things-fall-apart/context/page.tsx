'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Globe,
  Landmark,
  Lightbulb,
  Pen,
  Quote,
  Scroll,
  Sparkles,
  Users,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

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
    title: 'Pre-Colonial Igbo Society',
    icon: Landmark,
    iconColour: 'text-clay-500',
    content: [
      'The Igbo people of southeastern Nigeria lived in decentralised communities governed by councils of elders, titled men and the authority of oracles and ancestral spirits. Unlike many West African societies, the Igbo did not have kings or centralised monarchies. Power was earned through personal achievement -- wealth, agricultural success and the taking of titles -- creating a meritocratic system that Achebe presents in careful detail throughout Part One of the novel.',
      "Social life revolved around agriculture, especially yam cultivation. Yams were more than food: they were a measure of a man's worth, his ability to feed his family and his standing in the clan. The New Yam Festival celebrated the harvest and reinforced community bonds. Achebe uses Okonkwo's enormous yam barns as a marker of his status and his obsessive need to prove himself.",
      "Igbo religion was polytheistic, centred on Chukwu (the supreme god), personal chi (a person's spirit or destiny), local deities and ancestral spirits. The egwugwu -- masked figures representing the ancestors -- dispensed justice and settled disputes. Priestesses like Chielo served oracles and wielded significant spiritual authority, showing that women held real power in certain domains despite the patriarchal structure.",
      'The culture also contained practices that created internal tensions: twins were abandoned in the Evil Forest, certain families were designated osu (outcasts), and the Oracle could demand human sacrifice. Achebe does not hide these elements. He presents them as part of a complete, imperfect human society -- which is precisely his argument against European accounts that depicted Africa as either savage or blank.',
    ],
    keyFacts: [
      'The Igbo had no kings or centralised state. Power was earned through titles, yam cultivation and military prowess.',
      'The egwugwu court system dispensed justice through masked ancestral spirits. Decisions were made by community consensus.',
      'Women held spiritual authority through roles such as priestess of the Oracle, and the concept of "Mother is Supreme" governed exile.',
      'The osu caste system, twin abandonment and Oracle-demanded killings were genuine social tensions that Christianity later exploited.',
    ],
    textLinks: [
      "Okonkwo's three wives, his yam barns and his titles all demonstrate the Igbo social system in action. His rise from poverty proves the system is meritocratic.",
      "The egwugwu court in Chapter 10 shows a functioning indigenous justice system that the District Commissioner's court will later replace.",
      "Chielo's night journey with Ezinma (Chapters 9-11) demonstrates women's spiritual power within a patriarchal structure.",
    ],
  },
  {
    title: 'British Colonialism in Nigeria',
    icon: Globe,
    iconColour: 'text-teal-500',
    content: [
      'The Berlin Conference of 1884-85 formalised the European "Scramble for Africa," dividing the continent into colonial territories with no regard for existing political, ethnic or cultural boundaries. Britain claimed Nigeria as part of its sphere of influence, establishing the Niger Coast Protectorate (1891) and later the Protectorate of Southern Nigeria (1900). By 1914, the entire territory of modern Nigeria was under British control.',
      'The colonial strategy in Igboland followed a consistent pattern: missionaries established churches and schools, creating a class of literate, English-speaking converts who served as intermediaries. Administrative officers then imposed "native courts" and a system of indirect rule that replaced traditional governance structures. When resistance occurred, it was met with military force -- as dramatised by the destruction of Abame in the novel.',
      'Indirect rule required local leaders to act as agents of colonial authority. In Igboland, where there were no kings, the British appointed "warrant chiefs" -- men given artificial authority that often bore no relation to their standing in the community. This created resentment and disrupted the democratic, consensus-based structures the Igbo had developed over centuries.',
      'The colonial economy was extractive: raw materials were exported to Britain, and manufactured goods were imported. Education was provided by mission schools and oriented toward producing clerks and administrators for the colonial system, not toward the needs of Igbo society.',
    ],
    keyFacts: [
      'The Berlin Conference (1884-85) divided Africa among European powers without any African participation.',
      'Britain established the Niger Coast Protectorate in 1891 and the Protectorate of Southern Nigeria in 1900.',
      '"Indirect rule" co-opted local leaders or created artificial ones (warrant chiefs) to serve British interests.',
      'Mission schools were conversion tools: education was conditional on church attendance.',
      "The Aba Women's Riots of 1929 demonstrated organised Igbo resistance to colonial taxation and warrant chiefs.",
    ],
    textLinks: [
      'The novel is set at the moment of initial colonial contact (late 1890s). Part 2 shows the arrival of missionaries; Part 3 shows the consolidation of administrative and judicial power.',
      'The destruction of Abame (Chapter 15) foreshadows the military violence that underlies the colonial project.',
      "The District Commissioner's court, the kotma (court messengers), and the prison in Part 3 all reflect the institutions of indirect rule.",
    ],
  },
  {
    title: "Achebe's Biography & Purpose",
    icon: Pen,
    iconColour: 'text-ochre-500',
    content: [
      "Chinua Achebe (1930-2013) was born Albert Chinualumogu Achebe in Ogidi, southeastern Nigeria. He grew up at the crossroads of Igbo and colonial culture: his father was a catechist for the Church Missionary Society, but his extended family maintained traditional Igbo practices. This dual inheritance gave Achebe an insider's understanding of both the colonised and the missionary worldview.",
      'Achebe studied English Literature at the University of Ibadan, where he encountered the European literary tradition\'s representation of Africa. He was particularly struck by Joseph Conrad\'s Heart of Darkness (1899), which he later condemned in his famous 1977 essay "An Image of Africa" as a novel that reduces Africa to "the other world, the antithesis of Europe and therefore of civilisation." Conrad\'s Africa has no history, no culture and no autonomous human life.',
      'Things Fall Apart (1958) is Achebe\'s most powerful answer to this tradition. By creating a fully realised African society -- with law, art, philosophy, humour, debate and moral complexity -- he demonstrates that the "darkness" Conrad described was not in Africa but in the European imagination. The novel insists that African stories belong to African storytellers.',
      "Achebe chose to write in English deliberately. He wanted to reach the global audience that had consumed Conrad's version of Africa and replace it with a version written from the inside. His English is inflected with Igbo rhythms, proverbs and speech patterns, creating a literary language that is both accessible to Western readers and rooted in Igbo culture.",
    ],
    keyFacts: [
      'Born 1930 in Ogidi, southeastern Nigeria. Died 2013.',
      'Father was a Church Missionary Society catechist; extended family practised Igbo traditions.',
      'Studied English Literature at the University of Ibadan (1948-53).',
      'Published Things Fall Apart in 1958, two years before Nigerian independence.',
      'His 1977 essay "An Image of Africa" formally condemned Conrad\'s Heart of Darkness as racist.',
      'Declined the Nigerian national honour of Commander of the Federal Republic twice, citing governance failures.',
    ],
    textLinks: [
      "The detailed portrayal of Igbo culture in Part 1 is Achebe's direct response to European novels that depicted Africa as a blank, savage backdrop.",
      "The District Commissioner's book title at the novel's end is a meta-textual statement: Things Fall Apart IS the book the Commissioner could never write.",
      "Achebe's English prose style -- saturated with Igbo proverbs and rhythms -- is itself an act of cultural reclamation.",
    ],
  },
  {
    title: 'The Title: Yeats\'s "The Second Coming"',
    icon: Scroll,
    iconColour: 'text-sage-500',
    content: [
      'The title Things Fall Apart is taken from W.B. Yeats\'s 1919 poem "The Second Coming": "Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world." Yeats wrote the poem in the aftermath of World War One and the Irish War of Independence, reflecting on the collapse of European civilisation and the approach of a terrifying new age.',
      "Achebe's use of a European poem as his title is strategic. By placing an Igbo tragedy within the frame of European apocalyptic literature, he claims equal standing for his subject matter. If Yeats can mourn the disintegration of European order, Achebe can mourn the disintegration of Igbo order -- and the cause of the latter is the former.",
      'The Yeats allusion also carries ironic weight. Yeats\'s poem imagines a "rough beast" slouching toward Bethlehem -- an image of encroaching barbarism. Achebe reverses the direction: the barbarism in his novel comes not from Africa but from Europe. The "rough beast" is colonialism itself, arriving under the banner of Christianity and civilisation.',
    ],
    keyFacts: [
      'W.B. Yeats published "The Second Coming" in 1919, reflecting on post-WWI collapse and the Irish War of Independence.',
      'The full Yeats line: "Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world."',
      "Achebe's use of a European poem to frame an African novel is a deliberate act of literary integration -- inserting his work into the canon it critiques.",
      'The "rough beast" in Yeats becomes colonialism in Achebe -- a reversal of the expected direction of barbarism.',
    ],
    textLinks: [
      'The title prepares the reader for inevitable collapse. The question is not whether things will fall apart but how and why.',
      'Obierika\'s line "He has put a knife on the things that held us together and we have fallen apart" (Chapter 20) directly echoes the title and Yeats.',
      "The poem's cyclical view of history aligns with the Igbo concept of chi: forces larger than individuals shape the course of events.",
    ],
  },
  {
    title: 'Postcolonial Literature & Global Impact',
    icon: Users,
    iconColour: 'text-teal-600',
    content: [
      "Things Fall Apart, published in 1958, is widely regarded as the founding text of modern African literature in English. It has been translated into over 50 languages and has sold more than 20 million copies worldwide, making it the most widely read African novel in history. It opened the door for a generation of African writers -- Ngugi wa Thiong'o, Wole Soyinka, Buchi Emecheta, Chimamanda Ngozi Adichie -- who write about African experience from African perspectives.",
      'Postcolonial literature refers broadly to writing produced by or about peoples who were subject to colonial rule. It interrogates the cultural, psychological and political legacies of colonialism, including the ways in which colonial languages, education systems and narratives continue to shape post-independence societies. Things Fall Apart is a founding text of this tradition.',
      "The novel's final paragraph -- where the District Commissioner reduces Okonkwo's life to a footnote in his planned book -- is both a dramatisation of colonial narrative violence and a declaration of independence from it. The reader has spent the entire novel inside Okonkwo's world; the Commissioner's paragraph is exposed as a grotesque compression of a life the reader knows to be rich and complex.",
      'Achebe went on to write four more novels, including No Longer at Ease (1960) and Arrow of God (1964). He taught at universities in Nigeria and the United States and was awarded numerous literary honours. His legacy is the proof that colonised peoples have the authority and the obligation to narrate their own histories.',
    ],
    keyFacts: [
      'Published 1958 -- two years before Nigerian independence (1960).',
      'Translated into over 50 languages; more than 20 million copies sold worldwide.',
      'The most widely read African novel in history.',
      'Inspired a generation of African and postcolonial writers including Adichie, Soyinka and Ngugi.',
      'Achebe published four more novels and taught at universities in Nigeria and the US until his death in 2013.',
    ],
    textLinks: [
      "The novel's global reach proves Achebe's point: African stories are not parochial but universal. The themes of cultural collision, masculinity and the abuse of power resonate across cultures.",
      "The Commissioner's book title at the end is Achebe's meta-commentary on the tradition he is writing against: colonial texts that reduce complex cultures to anecdotes.",
      'The novel\'s position as a "founding text" gives it extra weight in exam contexts: examiners expect candidates to understand its significance within literary history.',
    ],
  },
  {
    title: 'Language Choice: Writing in English as a Political Act',
    icon: BookOpen,
    iconColour: 'text-ochre-400',
    content: [
      "One of the most debated aspects of Achebe's work is his decision to write in English rather than Igbo. The Nigerian writer Ngugi wa Thiong'o argued that African writers should write in African languages to decolonise the mind. Achebe disagreed: he believed English could be reshaped to carry African experience, and that writing in English was the most effective way to challenge the European narratives that had been written in English.",
      "Achebe's English in Things Fall Apart is distinctive. He weaves Igbo proverbs, idioms and speech rhythms into his prose, creating a hybrid literary language. Proverbs are described as \"the palm-oil with which words are eaten\" -- central to Igbo rhetoric and to the novel's style. The result is an English that sounds different from metropolitan English, asserting the presence of Igbo culture within the coloniser's language.",
      'This linguistic strategy is itself a form of resistance. By bending English to accommodate Igbo thought-patterns, Achebe refuses to accept the language on colonial terms. He takes possession of it, just as the novel takes possession of the narrative about Africa. As Achebe wrote: "The price a world language must be prepared to pay is submission to many different kinds of use."',
    ],
    keyFacts: [
      'Achebe chose English deliberately to reach the global audience that had consumed European representations of Africa.',
      "Ngugi wa Thiong'o argued for writing in African languages; the Achebe-Ngugi debate remains central to postcolonial literary criticism.",
      "Achebe's prose style infuses English with Igbo proverbs, speech patterns and cultural idioms.",
      "The Commissioner's book title -- flat, bureaucratic, reductive -- contrasts sharply with the proverbial richness of the novel's Igbo-inflected English.",
    ],
    textLinks: [
      'The "palm-oil" metaphor (Chapter 1) is both a description of Igbo culture and a demonstration of Achebe\'s linguistic technique.',
      'Igbo proverbs like "When the moon is shining the cripple becomes hungry for a walk" embed the reader in an Igbo way of thinking.',
      "The Commissioner's reductive book title at the end represents exactly the kind of colonial English that Achebe's own prose works to subvert.",
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ContextPage() {
  const tr = useT()
  return (
    <div className="space-y-10 bg-background pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Things Fall Apart',
            url: 'https://theenglishhub.app/revision/texts/things-fall-apart',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/revision/texts/things-fall-apart/context',
          },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-clay-400/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-ochre-400/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/things-fall-apart" />}
          >
            <ArrowLeft className="size-3.5" />
            {tr('rev.texts.common.back_to_text').replace('{text}', 'Things Fall Apart')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Landmark className="mr-1 size-3 text-clay-500" />
              {tr('rev.texts.common.deep_study')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              IGCSE Edexcel
            </Badge>
          </div>

          <h1 className="font-heading text-display-sm text-foreground sm:text-display">
            {tr('rev.texts2.tfa.context.title')}
          </h1>
          <p className="mt-2 text-body-lg italic text-clay-600 dark:text-clay-300">
            Things Fall Apart by Chinua Achebe
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {tr('rev.texts2.tfa.context.intro')}
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 font-heading text-heading-md text-foreground">
              {tr('rev.texts.common.jump_to_section')}
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
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-clay-400/10">
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
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay-400/10">
                <Icon className={`size-5 ${section.iconColour}`} />
              </div>
              <h2 className="font-heading text-heading-lg text-foreground">{section.title}</h2>
            </div>

            {/* Content paragraphs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading text-heading-md">
                  <BookOpen className="size-4 text-clay-500" />
                  {tr('rev.texts.common.overview')}
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
                <CardTitle className="flex items-center gap-2 font-heading text-heading-md">
                  <Lightbulb className="size-4 text-amber-400" />
                  {tr('rev.texts.common.key_facts')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {section.keyFacts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-clay-500/70 dark:bg-clay-400/70" />
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
                  <Quote className="size-4 text-clay-500" />
                  {tr('rev.texts.common.links_to_the_text')}
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
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay-400/10">
            <Lightbulb className="size-5 text-amber-400" />
          </div>
          <h2 className="font-heading text-heading-lg text-foreground">
            {tr('rev.texts2.common.how_to_use_context')}
          </h2>
        </div>

        <Card>
          <CardContent className="space-y-4 p-5 sm:p-6 text-body-sm text-muted-foreground">
            <p>
              Context is essential in every Literature exam, but it must be embedded in your
              argument -- not bolted on as a separate paragraph. Here are the key principles:
            </p>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong className="text-foreground">Integrate, don&apos;t isolate.</strong> Weave
                context into your analysis rather than writing a standalone &ldquo;context
                paragraph.&rdquo; For example: &ldquo;Okonkwo&apos;s participation in
                Ikemefuna&apos;s killing reflects the absolute authority of the Oracle in
                pre-colonial Igbo society, where religious law and secular law were
                inseparable.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">Focus on Achebe&apos;s purpose.</strong> Always
                ask: WHY did Achebe include this? What was he trying to make his readers think,
                feel, or do? Context explains purpose -- Achebe wrote to counter Conrad and to
                reclaim African narrative.
              </li>
              <li>
                <strong className="text-foreground">Use specific details.</strong> &ldquo;Africa was
                colonised&rdquo; is vague. &ldquo;The Berlin Conference of 1884-85 divided Africa
                among European powers without any African participation&rdquo; is specific and
                demonstrates genuine understanding.
              </li>
              <li>
                <strong className="text-foreground">Link context to technique.</strong> The
                strongest answers connect what Achebe is saying (context) to HOW he says it
                (technique). For example: &ldquo;Achebe saturates Part One with Igbo proverbs to
                demonstrate the culture&apos;s intellectual sophistication before showing its
                destruction -- the reader must feel what is being lost.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">Remember the publication context.</strong>{' '}
                Achebe wrote Things Fall Apart in 1958, two years before Nigerian independence. His
                audience includes both African readers reclaiming their history and European readers
                who had consumed Conrad&apos;s version of Africa.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Fair dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {tr('rev.texts2.common.fair_dealing_notice')}
      </p>
    </div>
  )
}
