'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Lightbulb,
  Quote,
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
    title: 'Pre-Colonial Igbo Society',
    body: [
      'The Igbo people of southeastern Nigeria lived in decentralised communities governed by councils of elders, titled men and the authority of oracles and ancestral spirits. Unlike many West African societies, the Igbo did not have kings or centralised monarchies. Power was earned through personal achievement \u2014 wealth, agricultural success and the taking of titles \u2014 creating a meritocratic system that Achebe presents in careful detail throughout Part One of the novel.',
      'Social life revolved around agriculture, especially yam cultivation. Yams were more than food: they were a measure of a man\u2019s worth, his ability to feed his family and his standing in the clan. The New Yam Festival celebrated the harvest and reinforced community bonds. Achebe uses Okonkwo\u2019s enormous yam barns as a marker of his status and his obsessive need to prove himself.',
      'Igbo religion was polytheistic, centred on Chukwu (the supreme god), personal chi (a person\u2019s spirit or destiny), local deities and ancestral spirits. The egwugwu \u2014 masked figures representing the ancestors \u2014 dispensed justice and settled disputes. Priestesses like Chielo served oracles and wielded significant spiritual authority, showing that women held real power in certain domains despite the patriarchal structure.',
      'The culture also contained practices that created internal tensions: twins were abandoned in the Evil Forest, certain families were designated osu (outcasts), and the Oracle could demand human sacrifice. Achebe does not hide these elements. He presents them as part of a complete, imperfect human society \u2014 which is precisely his argument against European accounts that depicted Africa as either savage or blank.',
    ],
    keyPoint:
      'The detailed portrayal of Igbo culture in Part One is the foundation of the novel\u2019s argument. Achebe must establish that the Igbo had a functioning, complex civilisation before showing its destruction, because the colonial narrative depends on the claim that there was nothing of value to destroy.',
    examLink:
      'Reference specific Igbo cultural practices by name: chi, egwugwu, the Week of Peace, the New Yam Festival, osu. Examiners reward candidates who demonstrate precise knowledge of the culture Achebe portrays, not vague references to "African traditions."',
  },
  {
    title: 'British Colonialism in Nigeria',
    body: [
      'The Berlin Conference of 1884\u201385 formalised the European \u201cScramble for Africa,\u201d dividing the continent into colonial territories with no regard for existing political, ethnic or cultural boundaries. Britain claimed Nigeria as part of its sphere of influence, establishing the Niger Coast Protectorate (1891) and later the Protectorate of Southern Nigeria (1900). By 1914, the entire territory of modern Nigeria was under British control.',
      'The colonial strategy in Igboland followed a consistent pattern: missionaries established churches and schools, creating a class of literate, English-speaking converts who served as intermediaries. Administrative officers then imposed \u201cnative courts\u201d and a system of indirect rule that replaced traditional governance structures. When resistance occurred, it was met with military force \u2014 as dramatised by the destruction of Abame in the novel.',
      'Indirect rule required local leaders to act as agents of colonial authority. In Igboland, where there were no kings, the British appointed \u201cwarrant chiefs\u201d \u2014 men given artificial authority that often bore no relation to their standing in the community. This created resentment and disrupted the democratic, consensus-based structures the Igbo had developed over centuries.',
      'The colonial economy was extractive: raw materials were exported to Britain, and manufactured goods were imported. Education was provided by mission schools and oriented toward producing clerks and administrators for the colonial system, not toward the needs of Igbo society. Christianity was presented not just as a faith but as the prerequisite for access to education, literacy and economic participation.',
    ],
    keyPoint:
      'The novel is set at the moment when British colonial power is being imposed on Igboland. Achebe shows the process in three stages: missionaries arrive (Part Two), administrative and judicial power follows (Part Three), and military force backs both. The pattern matches the historical record precisely.',
    examLink:
      'Name specific colonial institutions and events: the Berlin Conference, native courts, district commissioners, indirect rule. Examiners value candidates who show understanding of how colonialism actually operated, not just a general sense that "the British took over."',
  },
  {
    title: 'Chinua Achebe: Biography and Literary Purpose',
    body: [
      'Chinua Achebe was born Albert Chinualumogu Achebe in 1930 in Ogidi, southeastern Nigeria. He grew up at the crossroads of Igbo and colonial culture: his father was a catechist for the Church Missionary Society, but his extended family maintained traditional Igbo practices. This dual inheritance gave Achebe an insider\u2019s understanding of both the colonised and the missionary worldview.',
      'Achebe studied English Literature at the University of Ibadan, where he encountered the European literary tradition\u2019s representation of Africa. He was particularly struck by Joseph Conrad\u2019s Heart of Darkness (1899), which he later condemned in his famous 1977 essay "An Image of Africa" as a novel that reduces Africa to "the other world, the antithesis of Europe and therefore of civilisation." Conrad\u2019s Africa has no history, no culture and no autonomous human life. It exists only as a backdrop for the European protagonist\u2019s psychological journey.',
      'Things Fall Apart (1958) is Achebe\u2019s most powerful answer to this tradition. By creating a fully realised African society \u2014 with law, art, philosophy, humour, debate and moral complexity \u2014 he demonstrates that the "darkness" Conrad described was not in Africa but in the European imagination. The novel insists that African stories belong to African storytellers.',
      'Achebe chose to write in English deliberately. He wanted to reach the global audience that had consumed Conrad\u2019s version of Africa and replace it with a version written from the inside. His English is inflected with Igbo rhythms, proverbs and speech patterns, creating a literary language that is both accessible to Western readers and rooted in Igbo culture. This language choice was itself a political act \u2014 a reclamation of the coloniser\u2019s language for the colonised\u2019s story.',
    ],
    keyPoint:
      'Things Fall Apart is not just a story about colonialism \u2014 it is an act of cultural reclamation. Every detail of Igbo life that Achebe includes is a refutation of the colonial claim that Africa had nothing worth preserving. Understanding Achebe\u2019s literary project is essential to understanding the novel.',
    examLink:
      'Reference Conrad\u2019s Heart of Darkness and Achebe\u2019s 1977 essay by name. Examiners expect candidates to understand that Things Fall Apart is a deliberate counter-narrative. Discuss how the novel\u2019s detailed portrayal of Igbo culture is itself an argument against colonial representation.',
  },
  {
    title: 'The Title: Yeats\u2019s "The Second Coming"',
    body: [
      'The title Things Fall Apart is taken from W.B. Yeats\u2019s 1919 poem "The Second Coming": "Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world." Yeats wrote the poem in the aftermath of World War One and the Irish War of Independence, reflecting on the collapse of European civilisation and the approach of a terrifying new age.',
      'Achebe\u2019s use of a European poem as his title is strategic. By placing an Igbo tragedy within the frame of European apocalyptic literature, he claims equal standing for his subject matter. If Yeats can mourn the disintegration of European order, Achebe can mourn the disintegration of Igbo order \u2014 and the cause of the latter is the former.',
      'The Yeats allusion also carries ironic weight. Yeats\u2019s poem imagines a "rough beast" slouching toward Bethlehem \u2014 an image of encroaching barbarism. Achebe reverses the direction: the barbarism in his novel comes not from Africa but from Europe. The "rough beast" is colonialism itself, arriving under the banner of Christianity and civilisation.',
    ],
    keyPoint:
      'The title frames the entire novel as a story of collapse caused by external invasion. Achebe uses Yeats to make the collapse feel universal \u2014 not just an African tragedy but a human one \u2014 while also insisting on the specificity of what was lost.',
    examLink:
      'Quote the Yeats poem and explain why Achebe chose it. Examiners value candidates who discuss the irony of using a European poem to frame an anti-colonial novel, and who show how the title prepares the reader for the inevitability of the destruction.',
  },
  {
    title: 'Postcolonial Literature and the Novel\u2019s Global Impact',
    body: [
      'Things Fall Apart, published in 1958, is widely regarded as the founding text of modern African literature in English. It has been translated into over 50 languages and has sold more than 20 million copies worldwide, making it the most widely read African novel in history. It opened the door for a generation of African writers \u2014 Ng\u016dg\u0129 wa Thiong\u2019o, Wole Soyinka, Buchi Emecheta, Chimamanda Ngozi Adichie \u2014 who write about African experience from African perspectives.',
      'Postcolonial literature refers broadly to writing produced by or about peoples who were subject to colonial rule. It interrogates the cultural, psychological and political legacies of colonialism, including the ways in which colonial languages, education systems and narratives continue to shape post-independence societies. Things Fall Apart is a founding text of this tradition.',
      'The novel\u2019s final paragraph \u2014 where the District Commissioner reduces Okonkwo\u2019s life to a footnote in his book The Pacification of the Primitive Tribes of the Lower Niger \u2014 is both a dramatisation of colonial narrative violence and a declaration of independence from it. The reader has spent the entire novel inside Okonkwo\u2019s world; the Commissioner\u2019s paragraph is exposed as a grotesque compression of a life the reader knows to be rich and complex.',
      'Achebe (1930\u20132013) went on to write four more novels, including No Longer at Ease (1960) and Arrow of God (1964). He taught at universities in Nigeria and the United States, was awarded numerous literary honours, and declined the Nigerian national honour of Commander of the Federal Republic twice, citing the failures of governance in Nigeria. His legacy is the proof that colonised peoples have the authority and the obligation to narrate their own histories.',
    ],
    keyPoint:
      'The novel\u2019s significance extends far beyond Nigeria. It is a foundational argument that colonised peoples have the right to tell their own stories. Achebe\u2019s achievement is to show that the colonised have always had stories of their own \u2014 rich, complex and human.',
    examLink:
      'Use the term "postcolonial" precisely. Examiners reward candidates who can define it and who discuss Things Fall Apart as a text that both responds to colonialism and establishes a new literary tradition. Reference Achebe\u2019s essay on Conrad and the novel\u2019s global readership for strong AO3.',
  },
  {
    title: 'Language Choice: Writing in English as a Political Act',
    body: [
      'One of the most debated aspects of Achebe\u2019s work is his decision to write in English rather than Igbo. The Nigerian writer Ng\u016dg\u0129 wa Thiong\u2019o argued that African writers should write in African languages to decolonise the mind. Achebe disagreed: he believed English could be reshaped to carry African experience, and that writing in English was the most effective way to challenge the European narratives that had been written in English.',
      'Achebe\u2019s English in Things Fall Apart is distinctive. He weaves Igbo proverbs, idioms and speech rhythms into his prose, creating a hybrid literary language. Proverbs are described as "the palm-oil with which words are eaten" \u2014 central to Igbo rhetoric and to the novel\u2019s style. The result is an English that sounds different from metropolitan English, asserting the presence of Igbo culture within the coloniser\u2019s language.',
      'This linguistic strategy is itself a form of resistance. By bending English to accommodate Igbo thought-patterns, Achebe refuses to accept the language on colonial terms. He takes possession of it, just as the novel takes possession of the narrative about Africa.',
    ],
    keyPoint:
      'Achebe\u2019s use of English is not capitulation to colonialism but an act of literary resistance. He reshapes the coloniser\u2019s language to tell the colonised\u2019s story, proving that English can carry African experience without diminishing it.',
    examLink:
      'Discuss specific examples of Igbo proverbs and speech patterns in the novel. Examiners value candidates who can connect Achebe\u2019s stylistic choices to his political purpose: the language is not neutral but deliberately crafted to assert Igbo identity within an English-language text.',
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
  { year: '1884\u201385', event: 'Berlin Conference', relevance: 'European powers partition Africa; Nigeria assigned to Britain' },
  { year: '1891', event: 'Niger Coast Protectorate established', relevance: 'Formal British colonial administration begins in southeastern Nigeria' },
  { year: '1899', event: 'Conrad publishes Heart of Darkness', relevance: 'The European literary representation of Africa that Achebe will challenge' },
  { year: '1900', event: 'Protectorate of Southern Nigeria', relevance: 'Direct British rule over Igboland; native courts imposed' },
  { year: '1914', event: 'Amalgamation of Nigeria', relevance: 'North and South united into one colony \u2014 the modern borders of Nigeria drawn by Britain' },
  { year: '1929', event: 'Aba Women\u2019s Riots', relevance: 'Igbo women resist colonial taxation; suppressed by British force' },
  { year: '1930', event: 'Chinua Achebe born in Ogidi', relevance: 'Grows up at the intersection of Igbo tradition and colonial Christianity' },
  { year: '1948\u201353', event: 'Achebe at University of Ibadan', relevance: 'Encounters Conrad and European representations of Africa' },
  { year: '1958', event: 'Things Fall Apart published', relevance: 'The founding text of modern African literature in English' },
  { year: '1960', event: 'Nigerian independence', relevance: 'The political culmination of the anti-colonial movement Achebe\u2019s novel supported' },
  { year: '1977', event: '"An Image of Africa" essay', relevance: 'Achebe formally condemns Conrad\u2019s Heart of Darkness as racist' },
  { year: '2013', event: 'Achebe dies', relevance: 'Leaves a legacy as the most influential African writer of the twentieth century' },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function ContextPage() {
  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Things Fall Apart" textType="novel" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/things-fall-apart"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Things Fall Apart
          </a>

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
            Things Fall Apart &mdash; Context
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by Chinua Achebe &mdash; 1958
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            The essential background for the exam: pre-colonial Igbo society,
            British colonialism in Nigeria, Achebe&rsquo;s response to Conrad,
            the Yeats title, postcolonial literature and the politics of
            language.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">AO3 — What examiners want</p>
              <p>
                AO3 rewards you for showing how <strong>context shapes
                meaning</strong>. Do not simply list historical facts — explain
                how Achebe&rsquo;s biography, the colonial context and the
                postcolonial literary tradition affect the way we read the novel.
                The best AO3 answers explain <em>why</em> Achebe made specific
                choices, not just <em>when</em> things happened.
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
            Explore characters, themes and key quotes for Things Fall Apart.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/things-fall-apart/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/things-fall-apart/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/things-fall-apart/key-quotes"
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
          <em>Things Fall Apart</em> &copy; Chinua Achebe Estate. Full text
          available from your school or local library.
        </p>
      </div>
    </div>
  )
}
