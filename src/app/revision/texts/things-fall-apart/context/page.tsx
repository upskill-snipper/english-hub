import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Globe,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Things Fall Apart — Historical Context | The English Hub',
  description:
    'Historical and social context for Things Fall Apart by Chinua Achebe: Igbo culture, British colonialism in Nigeria, Achebe\'s response to Conrad and postcolonial literature.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/things-fall-apart/context',
  },
}

/* ── Context data ──────────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  icon: 'clock' | 'globe' | 'users'
  content: string[]
  keyLink: string
  examTip: string
}

const SECTIONS: ContextSection[] = [
  {
    title: 'Igbo culture and society',
    icon: 'globe',
    content: [
      'The Igbo people of southeastern Nigeria lived in decentralised villages governed by councils of elders, titled men and the authority of oracles and ancestral spirits. Unlike many West African societies, the Igbo did not have kings or centralised monarchies. Power was earned through personal achievement, wealth and the taking of titles — a meritocratic system that Achebe presents in careful detail.',
      'Igbo social life revolved around agriculture (especially yam cultivation), festivals (the New Yam Festival, the Feast of the Locusts), justice ceremonies (the egwugwu, masked spirits representing the ancestors) and a rich oral tradition of proverbs, stories and songs. Religion was polytheistic, centred on Chukwu (the supreme god), personal chi (spirit/destiny) and local deities.',
      'Gender roles were clearly defined. Men farmed yams, held titles and made political decisions. Women farmed other crops, managed the household and held significant power in some areas — particularly through the Oracle of the Hills and Caves, which was served by a priestess. Achebe presents these roles with complexity, showing both their logic and their costs.',
      'The culture also had features that created internal tensions: twins were abandoned in the Evil Forest, certain families were designated osu (outcasts), and the Oracle could demand human sacrifice. Achebe does not hide these elements. He shows them as part of a complete, imperfect human society — which is precisely his argument against European accounts that presented Africa as either savage or blank.',
    ],
    keyLink:
      'The detailed presentation of Igbo culture in Part One is the foundation of the novel\'s argument. Achebe must establish that the Igbo had a functioning, complex civilisation before showing its destruction, because the colonial narrative depends on the claim that there was nothing of value to destroy.',
    examTip:
      'Reference specific Igbo cultural practices by name: chi, egwugwu, the Week of Peace, the New Yam Festival. Examiners reward candidates who demonstrate detailed knowledge of the culture Achebe portrays, not just vague references to "African traditions."',
  },
  {
    title: 'British colonialism in Nigeria',
    icon: 'clock',
    content: [
      'British involvement in Nigeria began with trade — particularly the slave trade and later the palm oil trade — in the 17th and 18th centuries. Formal colonial administration arrived in the late 19th century, when Britain established the Niger Coast Protectorate (1891) and later the Protectorate of Southern Nigeria (1900). By 1914, the entire territory of modern Nigeria was under British control.',
      'The colonial strategy in Igboland followed a consistent pattern: missionaries established churches and schools, creating a class of literate, English-speaking converts who served as intermediaries. Administrative officers then imposed "native courts" that replaced traditional governance structures. When resistance occurred, it was met with military force.',
      'The British relied on a system of indirect rule, using local leaders as agents of colonial authority. In Igboland, where there were no kings, the British appointed "warrant chiefs" — men given artificial authority that often did not reflect their standing in the community. This created resentment and disrupted the democratic structures the Igbo had developed over centuries.',
      'The colonial economy was extractive: raw materials (palm oil, cocoa, groundnuts) were exported to Britain, and manufactured goods were imported. Education was provided by mission schools and was oriented toward producing clerks and administrators for the colonial system, not toward the needs of Igbo society.',
    ],
    keyLink:
      'The novel is set at the moment when British colonial power is being imposed on Igboland. Achebe shows the process in three stages: missionaries arrive (Part Two), administrative and judicial power follows (Part Three), and military force backs both (the District Commissioner\'s soldiers). The pattern matches the historical record precisely.',
    examTip:
      'Name specific colonial institutions: native courts, district commissioners, warrant chiefs. Examiners value candidates who show understanding of how colonial administration actually worked, not just a general sense that "the British took over."',
  },
  {
    title: 'Achebe\'s response to Conrad and European representations of Africa',
    icon: 'users',
    content: [
      'In his famous 1977 essay "An Image of Africa: Racism in Conrad\'s Heart of Darkness," Achebe argued that Joseph Conrad\'s novella (1899) reduces Africa to "the other world, the antithesis of Europe and therefore of civilisation." Conrad\'s Africa has no history, no culture and no autonomous human life. It exists only as a backdrop for the European protagonist\'s psychological journey.',
      'Things Fall Apart is Achebe\'s most powerful answer to this tradition. By creating a fully realised African society — with law, art, philosophy, humour, debate and moral complexity — he demonstrates that the "darkness" Conrad described was not in Africa but in the European imagination. The novel insists that African stories belong to African storytellers.',
      'Achebe chose to write in English deliberately. He wanted to reach the global audience that had consumed Conrad\'s version of Africa and replace it with a version written from the inside. His English is inflected with Igbo rhythms, proverbs and speech patterns, creating a literary language that is both accessible to Western readers and rooted in Igbo culture.',
      'The novel\'s title, taken from W.B. Yeats\'s poem "The Second Coming" ("Things fall apart; the centre cannot hold"), plants an Igbo tragedy inside the European literary canon and quietly insists that it belongs there. Achebe reclaims the right to use European forms to tell African stories.',
    ],
    keyLink:
      'Understanding Achebe\'s literary project is essential to understanding the novel. Things Fall Apart is not just a story about colonialism — it is an act of cultural reclamation. Every detail of Igbo life that Achebe includes is a refutation of the colonial claim that Africa had nothing worth preserving.',
    examTip:
      'Reference Conrad\'s Heart of Darkness and Achebe\'s response by name. Examiners expect candidates to understand that Things Fall Apart is a deliberate counter-narrative. Discuss how the novel\'s detailed portrayal of Igbo culture is itself an argument against colonial representation.',
  },
  {
    title: 'Postcolonial literature and Achebe\'s legacy',
    icon: 'clock',
    content: [
      'Things Fall Apart, published in 1958, is widely regarded as the founding text of modern African literature in English. It opened the door for a generation of African writers — Ngugi wa Thiong\'o, Wole Soyinka, Buchi Emecheta, Chimamanda Ngozi Adichie — who write about African experience from African perspectives.',
      'Postcolonial literature refers broadly to writing produced by or about peoples who were subject to colonial rule. It interrogates the cultural, psychological and political legacies of colonialism, including the ways in which colonial languages, education systems and narratives continue to shape post-independence societies.',
      'Achebe\'s achievement in Things Fall Apart is to show that the colonised have always had stories of their own. The novel\'s final paragraph — where the District Commissioner reduces Okonkwo\'s life to a footnote — is both a dramatisation of colonial narrative violence and a declaration of independence from it. The reader has spent 24 chapters inside Okonkwo\'s world; the Commissioner\'s paragraph is exposed as a grotesque compression.',
      'Achebe (1930-2013) went on to write four more novels, including No Longer at Ease (1960) and Arrow of God (1964). He taught at universities in Nigeria and the United States and was awarded numerous literary honours. He declined the Nigerian national honour of Commander of the Federal Republic twice, citing the failures of governance in Nigeria.',
    ],
    keyLink:
      'Understanding the novel as a postcolonial text helps explain its structure and purpose. Achebe writes not just to tell a story but to reclaim the right to tell it. The novel\'s significance extends beyond Nigeria — it is a foundational argument that colonised peoples have the authority and the obligation to narrate their own histories.',
    examTip:
      'Use the term "postcolonial" precisely. Examiners reward candidates who can define it and who discuss Things Fall Apart as a text that both responds to colonialism and establishes a new literary tradition. Reference Achebe\'s essay on Conrad for extra credit.',
  },
  {
    title: 'The Yeats connection and the novel\'s title',
    icon: 'users',
    content: [
      'The title Things Fall Apart is taken from W.B. Yeats\'s 1919 poem "The Second Coming": "Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world." Yeats wrote the poem in the aftermath of World War One and the Irish War of Independence, reflecting on the collapse of European civilisation.',
      'Achebe\'s use of a European poem as his title is strategic. By placing an Igbo tragedy within the frame of European apocalyptic literature, he claims equal standing for his subject matter. If Yeats can mourn the disintegration of European order, Achebe can mourn the disintegration of Igbo order — and the cause of the latter is the former.',
      'The Yeats allusion also carries ironic weight. Yeats\'s poem imagines a "rough beast" slouching toward Bethlehem — an image of encroaching barbarism. Achebe reverses the direction: the barbarism in his novel comes not from Africa but from Europe. The "rough beast" is colonialism itself.',
    ],
    keyLink:
      'The title frames the entire novel as a story of collapse caused by external invasion. Achebe uses Yeats to make the collapse feel universal — not just an African tragedy but a human one — while also insisting on the specificity of what was lost.',
    examTip:
      'Quote the Yeats poem and explain why Achebe chose it. Examiners value candidates who discuss the irony of using a European poem to frame an anti-colonial novel, and who show how the title prepares the reader for the inevitability of the destruction.',
  },
]

const ICON_MAP = {
  clock: Clock,
  globe: Globe,
  users: Users,
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ThingsFallApartContextPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/things-fall-apart" />}>
            <ArrowLeft className="size-3.5" /> Back to Things Fall Apart
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-violet-400" />Modern Text — Novel</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Historical &amp; Social Context</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Things Fall Apart by Chinua Achebe</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            The essential background you need for the exam: Igbo culture, British colonialism in Nigeria, Achebe&apos;s response to Conrad and postcolonial literature.
          </p>
        </div>
      </section>

      {/* Context sections */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Clock className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Context</h2>
        </div>
        <div className="space-y-6">
          {SECTIONS.map((s) => {
            const Icon = ICON_MAP[s.icon]
            return (
              <Card key={s.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <CardTitle className="text-heading-md font-heading">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    {s.content.map((para, i) => (
                      <p key={i} className="text-body-sm text-muted-foreground">{para}</p>
                    ))}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">Link to the text</h3>
                    <p className="text-body-sm text-muted-foreground">{s.keyLink}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Quote className="size-3.5 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{s.examTip}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
